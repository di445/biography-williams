var aetn;

if( ! aetn ) { aetn = {}; }
if( ! aetn.video ) { aetn.video = {}; }

//console fix for IE browsers
if ( ! window.console ) {

    (function() {
      var names = ["log", "debug", "info", "warn", "error",
          "assert", "dir", "dirxml", "group", "groupEnd", "time",
          "timeEnd", "count", "trace", "profile", "profileEnd"],
          i, l = names.length;

      window.console = {};

      for ( i = 0; i < l; i++ ) {
        window.console[ names[i] ] = function() {};
      }
    }());
}

// Wrapper around console.log so browsers with no console don't throw errors.
aetn.log = function (s) {
    if (!window.console)
        console = {log: function() {}, error: function() {}, warn: function() {}, info: function() {}};

    if (typeof console === "object") {
        console.log(s);
    }
};

aetn.video.adobePass = {

    access_enabler: false,

    mvpdframe: '#mvpdframe',

    mvpddiv: '#mvpddiv',

    mvpdframeClose: '#mvpdframeClose',

    is_authenticated: null,

    provider_id: false,

    providers: {},

    includeTestProviders : document.location.toString().toLowerCase().indexOf("testproviders=true") > -1,

    setupProviders: function(providers) {

        if(providers) {
            if(providers.Comcast_SSO){
                providers.Comcast_SSO.logoURL = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-comcast.png";
                providers.Comcast_SSO.displayLogoURL = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-xfinity.png";
                providers.Comcast_SSO.logoURL = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-comcast.png";
            	providers.Comcast_SSO.displayLogoURL = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-xfinity.png";
            	providers.Comcast_SSO.displayLogoURLAE =  "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-xfinity-red.png"; //deprecated. please use from below
            	providers.Comcast_SSO.displayLogoURLAE_white_bg = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-xfinity-white-bg.png";
            	providers.Comcast_SSO.displayLogoURLAE_black_bg = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-xfinity-black-bg.png";
            	providers.Comcast_SSO.displayName = "Comcast XFINITY";
            	providers.Comcast_SSO.providerURL =  "http://xfinitytv.comcast.net/";
            	providers.Comcast_SSO.providerURLHis = "http://xfinitytv.comcast.net/tv-networks/History/15/main";
            	providers.Comcast_SSO.providerURLLT = "http://xfinitytv.comcast.net/tv-networks/Lifetime/110/main";
            	providers.Comcast_SSO.providerURLAE = "http://xfinitytv.comcast.net/tv-networks/A%26E/9/main";
            }
            if(providers.DTV){
                providers.DTV.logoURL = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-directtv.png";
                providers.DTV.displayLogoURL = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-directtv-white.png";
                providers.DTV.displayLogoURLAE = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-directtv-black.png";
            	providers.DTV.displayLogoURLAE_white_bg = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-directtv-white-bg.png";
            	providers.DTV.displayLogoURLAE_black_bg = "http://servicesaetn-a.akamaihd.net/video/provider-logos/icon-directtv-black-bg.png";
            	providers.DTV.displayName = "DIRECTV";
            	providers.DTV.providerURL = "http://directtv.com/";
            	providers.DTV.providerURLHis = "http://directtv.com/";
            	providers.DTV.providerURLLT = "http://directtv.com/";
            }
            if(providers.Cablevision){
                    providers.Cablevision.logoURL = "http://servicesaetn-a.akamaihd.net/pdk5/pdk5.1.3/web/provider-logos/icon-optimum.png";
                    providers.Cablevision.displayLogoURL = "http://servicesaetn-a.akamaihd.net/pdk5/pdk5.1.3/web/provider-logos/icon-optimum-black.png";
            }
            this.allProviders = providers;
        }


    },

    callbacks: {
        displayProviderDialog: false,
        errorDialog: false,
        trackingData: false,
        closeIFrame: false
    },

    init: function( conf ) {

        $.extend( this.callbacks, conf );
    },

    setAccessPoint: function( ap ) {

        this.access_enabler = document.getElementById( ap );
    },

    setAuthenticationStatus: function( is_authenticated, error_code ) {

        this.is_authenticated = is_authenticated;
    },

    tokenRequestFailed: function( inRequestedResourceID, inRequestErrorCode, inRequestDetails ) {

        console.log( inRequestErrorCode );
        console.log( inRequestDetails );

        switch( inRequestErrorCode ) {

            /*
             * Generic Errors
             */
            case 'Internal Error':
                inRequestDetails = 'A system error has occurred when trying to process your request.';
                break;

            case 'Provider not Selected Error':
                inRequestDetails = 'Please select a valid provider in order for us to process your request.';
                break;

            case 'Provider not Available Error':
                inRequestDetails = 'There are no providers available to process your request.';
                break;

            /*
             * Authentication Errors
             */
            case 'Generic Authentication Error':
                inRequestDetails = 'An unknown system error has occurred when trying to process your authentication request.';
                break;

            case 'Internal Authentication Error':
                inRequestDetails = 'A system error has occurred when trying to process your authentication request.';
                break;

            case 'User Not Authenticated Error':
                inRequestDetails = 'We are unable to successfully authenticate your request.';
                break;

            case 'Multiple Authentication Requests Error':
                console.log('We are unable to process your request due to multiple authentication requests.');
                return false;
                break;

            /*
             * Authorization Errors
             */
            case 'Generic Authorization Error':
                inRequestDetails = 'An unknown system error has occurred when trying to process your authorization request.';
                break;

            case 'Internal Authorization Error':
                inRequestDetails = 'A system error has occurred when trying to process your authorization request.';
                break;

            case 'User not Authorized Error':
                case 'User not Authorized Error':
                    if (inRequestDetails == ''){
                        inRequestDetails = 'You are not authorized to view this content. Please contact your TV provider for futher assistance.';
                    } else if( inRequestDetails.toLowerCase().indexOf('your parental control settings do not allow you to view this network.' ) > -1) {
                        inRequestDetails = '<a href="https://customer.comcast.com/Secure/OnlineParentalControls.aspx" target="_blank">Your Parental Control settings do not allow you to view this network.</a>';
                    } else if( inRequestDetails.toLowerCase().indexOf('your parental control settings do not allow you to view this content.' ) > -1) {
                        inRequestDetails = '<a href="https://customer.comcast.com/Secure/OnlineParentalControls.aspx" target="_blank">Your Parental Control settings do not allow you to view this content.</a>';
                    } else if ( inRequestDetails == '0033:The customer is not authorized for the content requested' ) {
                        inRequestDetails = 'You are not authorized to view this content. Please contact your TV provider for futher assistance.';
                    } else if( inRequestDetails.search( "/tve_unauthorized_nochannel.html" ) > -1 ) {
                        inRequestDetails = 'This network is not included in your current television subscription. Please contact your TV provider to subscribe.';
                    }
                	break;

            /*
             * Flash Access Errors
             */
            case 'Generic Error Updating Flash DRM module':
                inRequestDetails = 'A flash DRM module system error has occurred when trying to process your request.';
                break;

            case 'New FP version needed for DRM module':
                inRequestDetails = 'A newer flash player version is required to process your request.';
                break;

            case 'Generic Error Using Flash DRM module':
                inRequestDetails = 'An unknown flash player related error is required when trying to process your request.';
                break;
        }

        if( this.callbacks.errorDialog !== false )
        {
            this.callbacks.errorDialog(  inRequestedResourceID, inRequestErrorCode, inRequestDetails );
        }
    },

    trackingData: function( trackingEventType, trackingData ) {

        if( this.callbacks.trackingData !== false )
        {
            this.callbacks.trackingData( trackingEventType, trackingData );
        }
    },

    getFeaturedProvidersList: function() {
        if (!this.allProviders)
            this.setupProviders(aetn.mvpds);
        
        var returnProviders = [];
        for (var i in this.allProviders){
            if (this.allProviders[i].isFeatured &&
                    ( !(this.allProviders[i].isTest) || this.includeTestProviders )){
                returnProviders.push(this.allProviders[i]);
            }
        }

        return returnProviders.sort(  function(a,b) {  return ( (a.displayName < b.displayName) ? -1 : 1) ; });
    },

    getAllProvidersList: function() {
        
        if (!this.allProviders)
            this.setupProviders(aetn.mvpds);
        var returnProviders = [];

        for (var i in this.allProviders){
            if( !(this.allProviders[i].isTest ) || this.includeTestProviders )  {
                    returnProviders.push( this.allProviders[i] );
            }
        }

        return returnProviders.sort(  function(a,b) {  return ( (a.displayName < b.displayName) ? -1 : 1) ; });
    },

    displayProviderDialog: function( mvpd ) {

        this.providers = mvpd;

        aetn.log( mvpd );

        if( this.provider_id !== false )
        {
            this.selectProvider( this.provider_id );
            return;
        }

        if( this.callbacks.displayProviderDialog !== false )
        {
            this.callbacks.displayProviderDialog( this, this.getFeaturedProvidersList(), this.getAllProvidersList());
        }
    },

    selectProvider: function( provider_id ) {

        if( this.provider_id !== false )
            return;

        this.provider_id = provider_id;

        if( this.access_enabler ) {
            this.access_enabler.ap_setSelectedProvider( this.provider_id );
        }
    },


    getProvider: function() {

        return this.provider_id;
    },

    createIFrame: function( width, height ) {

        console.log( "Neeki", width, height );
        var mvpddiv = $( this.mvpddiv );
        var that = this;

        mvpddiv.css( 'position',    'absolute' );
        mvpddiv.css( 'display',     'block' );
        mvpddiv.css( 'top',         '175px' );
        mvpddiv.css( 'left',        '50%' );
        mvpddiv.css( 'zIndex',      '100' );
        mvpddiv.css( 'marginLeft',  '-' + width / 2 + 'px' );

        var iframe = $( this.mvpdframe );
        iframe.css( 'width', width + 'px' );
        iframe.css( 'height', height + 'px' );
        $( mvpdframeClose ).unbind()
        $( mvpdframeClose ).click(
                function() {
                    if (aetn.video.adobePass.callbacks.closeIFrame)
                        aetn.video.adobePass.callbacks.closeIFrame();
                    else {
                        that.closeIFrame();
                        that.login( ); // need redirectURL?
                    }
        });
        mvpddiv_width = parseInt(width)+20;
        mvpddiv_height = parseInt(height)+20;

        mvpddiv.css( 'width', mvpddiv_width + 'px');
        mvpddiv.css( 'height', mvpddiv_height + 'px');

        window.frames[ this.mvpdframe ].name = this.mvpdframe;
    },

    closeIFrame: function() {

        this.access_enabler.ap_setSelectedProvider( null );
        this.provider_id = false;
        $( this.mvpdframe ).src = 'about:blank';
        //$( this.mvpddiv ).css( 'visibility', 'none' );
        $( this.mvpddiv ).css( 'display', 'none' );

    },

    login: function(redirectUrl) {

        if( this.access_enabler ) {
            if (redirectUrl){
                this.access_enabler.ap_getAuthentication(redirectUrl);
            }
            else
                this.access_enabler.ap_getAuthentication();
        }
    },

    logout: function() {

        if( this.access_enabler ) {
            this.access_enabler.ap_logout();
        }
    }
};