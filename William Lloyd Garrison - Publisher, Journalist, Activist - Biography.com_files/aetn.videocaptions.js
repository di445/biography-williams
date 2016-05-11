if (!aetn) { var aetn = {}; }

if( ! Function.prototype.bind ) {
  Function.prototype.bind = function() { 
    var fn = this, args = Array.prototype.slice.call( arguments ),
        object = args.shift(); 
    return function() { 
      return fn.apply( object, 
        args.concat( Array.prototype.slice.call( arguments ) ) ); 
    };
  };
}

(function($){

aetn.videocaptions = {

  card : null,

  controller: null,

  state: null,

  listeners: {},

  initialize: function () {
  },

  show: function (state) {

    console.log(state);

    this.state = state;
    this.card = state.card;
    this.controller = state.controller;
    this.listeners = {};


    if ( typeof($.proxy) != 'undefined') {
      $(this.card).find( '.tpFormActions .tpButton' ).click( $.proxy( this.apply, this ) );
      $(this.card).find( '.tpCardClose .tpButton' ).click( $.proxy( this.close, this ) );
    } else {
      $(this.card).find( '.tpFormActions .tpButton' ).click( this.apply.bind( this ) );
      $(this.card).find( '.tpCardClose .tpButton' ).click( this.close.bind( this ) );
    }


    var that = this;

    $(this.card).find('.tpFontColor').click(function(e) {

      $(that.card).find('.tpFontColor').css('border-color', '');
      $(e.target).css('border-color', "#FFFFFF");

      var color;
        
      try {
        color = that.colorToHex($(this).css('background-color'));
      } catch (e) {
        color = '';
      }
      
      $(that.card).find('#fontColor').val(color);
    });


    $(this.card).find('.tpFontBackgroundColor').click(function(e) {
        
      $(that.card).find('.tpFontBackgroundColor').css('border-color', '');
      $(e.target).css('border-color', '#FFFFFF');
      
      var color = $(this).css('background-color');
      
      if (color == "rgba(0, 0, 0, 0)") {
        color = null;
      } else {
        color = that.colorToHex(color);
      }

      $(that.card).find('#backgroundColor').val(color);
    });


    $(this.card).find('.tpFontEdgeColor').click(function(e) {

      $(that.card).find('.tpFontEdgeColor').css('border-color', '');
      $(e.target).css('border-color', '#FFFFFF');
      var color = that.colorToHex($(this).css('background-color'));
      $(that.card).find('#fontEdgeColor').val(color);
    });

    if ( typeof($.proxy) != 'undefined') {
      this.listeners.lang = this.controller.addEventListener( 'OnGetSubtitleLanguage', $.proxy( this.loadLanguage, this ) );
      this.listeners.style = this.controller.addEventListener( 'OnGetSubtitleStyle', $.proxy( this.loadStyles, this ) );
    } else {
      this.listeners.lang = this.controller.addEventListener( 'OnGetSubtitleLanguage', this.loadLanguage.bind( this ) );
      this.listeners.style = this.controller.addEventListener( 'OnGetSubtitleStyle', this.loadStyles.bind( this ) );
    }

    $pdk.controller.getSubtitleLanguage();
    $pdk.controller.getSubtitleStyle();
  },

  hide: function () {
    this.controller.removeEventListener( 'OnGetSubtitleStyle', this.listeners.style );
  },

  close: function () {
    $pdk.controller.hidePlayerCard( 'forms', 'tpSubtitleStylesCard' );
  },

  apply: function () {

    var showCCs = $(this.card).find("#showCCs")[0].checked;
    var fontSize = Number($(this.card).find("#fontSize")[0].value);
    var fontColor = $(this.card).find("#fontColor")[0].value ? $(this.card).find("#fontColor")[0].value : null;
    var fontFamily = $(this.card).find("#fontFamily")[0].value;
    var opacity = Number($(this.card).find("#opacity")[0].value);
    var fontEdge = $(this.card).find("#fontEdge")[0].value;
    var fontEdgeColor = $(this.card).find("#fontEdgeColor")[0].value ? $(this.card).find("#fontEdgeColor")[0].value : null;
    var backgroundColor = $(this.card).find("#backgroundColor")[0].value != "transparent" ? $(this.card).find("#backgroundColor")[0].value : null;
    var padding = Number($(this.card).find("#padding")[0].value);
    var bold = $(this.card).find("#bold")[0].checked;
    var italic = $(this.card).find("#italic")[0].checked;
    var underline = $(this.card).find("#underline")[0].checked;
    var textAlign = $(this.card).find("#textAlign")[0].value;
    var textAlignVertical = $(this.card).find("#textAlignVertical")[0].value;

    if (fontSize == 0) fontSize = null;
    if (opacity == 0) opacity = null;
    if (padding == 0) padding = null;

    if (showCCs) {
      $pdk.controller.setSubtitleLanguage("en");
    } else {
      $pdk.controller.setSubtitleLanguage(null);
    }

    var style = {
      globalDataType: "com.theplatform.pdk.data::SubtitleStyle"
    };

    if (fontFamily) style.fontFamily = fontFamily;
    if (fontSize) style.fontSize = fontSize;
    if (fontColor) style.fontColor = fontColor;
    if (fontEdge) style.fontEdge = fontEdge;
    if (fontEdgeColor) style.fontEdgeColor = fontEdgeColor;
    if (backgroundColor) style.backgroundColor = backgroundColor;
    if (opacity) style.opacity = opacity;
    if (padding) style.padding = padding;
    if (bold) style.bold = bold;
    if (italic) style.italic = italic;
    if (underline) style.underline = underline;
    if (textAlign) style.textAlign = textAlign;
    if (textAlignVertical) style.textAlignVertical = textAlignVertical;

    $pdk.controller.setSubtitleStyle(style);
    
    this.close();
  },

  loadLanguage: function (e) {
    
    if (e.data) {
      $(this.card).find("#showCCs")[0].checked = (e.data.langCode === "en");
    }
  },

  loadStyles: function (e) {
        
    if (! e.data) {
      return;
    }

    if (e.data.fontSize == 0 || isNaN(e.data.fontSize)) {
      $(this.card).find('#fontSize')[0].value = '';
    } else {
      $(this.card).find('#fontSize')[0].value = (isNaN(e.data.fontSize) || e.data.fontSize == null ? '5' : e.data.fontSize);
    }

    $(this.card).find('#fontColor')[0].value = e.data.fontColor;
    $(this.card).find('#fontFamily')[0].value = (e.data.fontFamily ? e.data.fontFamily : '');
    $(this.card).find('#fontEdge')[0].value = (e.data.fontEdge ? e.data.fontEdge : '');
    $(this.card).find('#fontEdgeColor')[0].value = e.data.fontEdgeColor;
    $(this.card).find('#backgroundColor')[0].value = e.data.backgroundColor;
    $(this.card).find('#opacity')[0].value = (isNaN(e.data.opacity) || e.data.opacity == null ? '100' : e.data.opacity);
    $(this.card).find('#padding')[0].value = (isNaN(e.data.padding) || e.data.padding == null ? '0' : e.data.padding);
    $(this.card).find('#bold')[0].checked = Boolean(e.data.bold);
    $(this.card).find('#italic')[0].checked = Boolean(e.data.italic);
    $(this.card).find('#underline')[0].checked = Boolean(e.data.underline);
    $(this.card).find('#textAlign')[0].value =(e.data.textAlign ? e.data.textAlign : '');
    $(this.card).find('#textAlignVertical')[0].value = (e.data.textAlignVertical ? e.data.textAlignVertical : '');

    var me = this;
    var tiles = $(this.card).find('.tpFontColor');
    var found = false;

    for (var i=0; i<tiles.length; i++) {

      if (this.colorToHex($(tiles[i]).css('background-color')) == e.data.fontColor) {
        
        $(tiles[i]).css('border-color', '#ffffff');
        found = true;
        break;
      }
    }
    
    if (! found) {
      $(tiles[tiles.length-1]).css('border-color', '#ffffff');
    }


    tiles = $(this.card).find('.tpFontBackgroundColor');
    found = false;

    for (var i=0; i<tiles.length; i++) {
      
      if (this.colorToHex($(tiles[i]).css('background-color')) == e.data.backgroundColor) {
        $(tiles[i]).css('border-color', '#ffffff');
        found = true;
        break;
      }
    }

    if (! found) {
      $(tiles[tiles.length-1]).css('border-color', '#ffffff');
    }


    tiles = $(this.card).find('.tpFontEdgeColor');
    found = false;

    for (var i=0; i<tiles.length; i++) {

      if (this.colorToHex($(tiles[i]).css('background-color')) == e.data.edgeColor) {
        $(tiles[i]).css('border-color', '#ffffff');
        found = true;
        break;
      }
    }

    if (! found) {
      $(tiles[tiles.length-1]).css("border-color", "#ffffff");
    }
  },

  colorToHex: function(color) {
    
    if (! color) return;

    if (color.substr(0, 1) === '#') {
        return color;
    }

    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    if (! digits) {
      digits = /(.*?)rgba\((\d+), (\d+), (\d+), (\d+)\)/.exec(color);
    }

    if (! digits) return;

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    var rgb = blue | (green << 8) | (red << 16);

    return "#" + (0x1000000 | rgb).toString(16).substring(1);
  },

  render: function () {

    $('body').append( this.renderCSS() );

    return '<div class="tpPlayerCard tpSubtitleStylesCard" id="tpSubtitleStylesCard">' +
      ' <div class="tpCardHeader">' + this.renderTitle() + this.renderClose() + ' </div>' +
      ' <div class="tpCardBody">' + this.renderBody() + ' </div>' +
      '</div>' + this.renderCSS();
  },

  renderCSS: function () {

    return '<style type="text/css">' +
           '.tpPlayerCard .tpSubtitlesForm {' +
           '  font-size: 14px;' +
           '  -webkit-font-smoothing: antialiased;' +
           '}' +
           ' ' +
           '.tpPlayerCard .tpSubtitlesForm > table td:first-child {' +
           '  padding-right:20px;' +
           '}' +
           ' ' +
           '.tpPlayerCard .tpSubtitlesForm > table td table td {' +
           '  font-size:12px;' +
           '  line-height:1em;' +
           '}' +
           ' ' +
           '.tpPlayerCard .tpFontColor, .tpPlayerCard .tpFontBackgroundColor, .tpPlayerCard .tpFontEdgeColor {' +
           '  width: 15px;' +
           '  height: 15px;' +
           '  float: left;' +
           '  cursor: hand;' +
           '  border-style: solid;' +
           '  border-width: 1px;' +
           '  margin-right: 8px;' +
           '  text-align: center;' +
           '  cursor: pointer;' +
           '  line-height:1.2em;' +
           '}' +
           ' ' +
           '.tpPlayerCard select,  .tpPlayerCard input[type="text"]  {' +
           '  color: #FFFFFF;' +
           '  -webkit-font-smoothing: antialiased;' +
           '  font-size:12px;' +
           '  -webkit-border-radius: 4px;' +
           '  -moz-border-radius: 4px;' +
           '  border-radius: 4px;' +
           '  padding:2px;' +
           '}' +
           ' ' +
           '.tpPlayerCard input[type="text"] {' +
           '  padding:2px 8px;' +
           '}' +
           '' +
           '.tpPlayerCard input[type="checkbox"] {' +
           '  margin:0 5px 0 10px;' +
           '}' +
           ' ' +
           '.tpPlayerCard input[type="checkbox"]:first-child {' +
           '  margin-left:0;' +
           '}' +
           ' ' +
           '.tpPlayerCard.tpSubtitleStylesCard .tpFormActions .tpButton {' +
           '  float: right;' +
           '  margin-right: 4px;' +
           '}' +
           ' ' +
           '.tpPlayerCard.tpSubtitleStylesCard input {' +
           '  height: auto;' +
           '}' +
           '</style>';
  },

  renderTitle: function () {

    return '<div class="tpCardTitle">' +
      ' <div class="tpIcon tpAsset" tp:name="IconCC"></div> CC Settings' +
      '</div>';
  },

  renderClose: function () {

    return '<div class="tpCardClose">' +
      ' <div class="tpButton" tp:label="Close"><span>Close</span></div>' +
      '</div>';
  },

  renderBody: function () {

    return ' <div class="tpSubtitlesForm">' +
    '   <table>' + 
          this.renderCC() +
          this.renderFont() +
          this.renderFontColor() +
          this.renderFontStyle() +
          this.renderBackground() +
          this.renderEdge() +
          this.renderEdgeColor() +
          this.renderTextAlign() +
          this.renderTextVAlign() +
          this.renderOpacity() +
          this.renderPadding() +
    '   </table>' +
    '   <div class="tpFormActions">' +
    '     <div class="tpButton" tp:label="Apply"><span>Apply</span></div>' +
    '   </div>' +
    ' </div>';
  },

  renderCC: function () {
    
    return '<tr>' +
      ' <td align="right" valign="bottom">CCs On:</td>' +
      ' <td><input id="showCCs" type="checkbox" /></td>' +
      '</tr>';
  },

  renderFont: function () {
    
    return '<tr>' +
      ' <td align="right" valign="bottom">Font:</td>' +
      ' <td>' +
      '   <table>' +
      '     <tr>' +
      '       <td>Family</td>' +
      '       <td>Size</td>' +
      '     </tr>' +
      '     <tr>' +
      '       <td>' +
      '         <select name="fontFamily" id="fontFamily" class="tpControlBackground tpControlBorder">' +
      '           <option value="">Default</option>' +
      '           <option value="arial">Arial</option>' +
      '           <option value="arial black">Arial Black</option>' +
      '           <option value="courier">Courier</option>' +
      '           <option value="georgia">Georgia</option>' +
      '           <option value="impact">Impact</option>' +
      '           <option value="Lucida Sans Unicode">Lucida Sans</option>' +
      '           <option value="palatino">Palatino</option>' +
      '           <option value="tahoma">Tahoma</option>' +
      '           <option value="times new roman">Times New Roman</option>' +
      '         </select>' +
      '       </td>' +
      '       <td>' +
      '         <select name="fontSize" id="fontSize">' +
      '           <option value="">Default</option>' +
      '           <option value="3">Tiny</option>' +
      '           <option value="5">Small</option>' +
      '           <option value="7">Medium</option>' +
      '           <option value="9">Large</option>' +
      '         </select>' +
      '       </td>' +
      '     </tr>' +
      '   </table>' +
      ' </td>' +
      '</tr>';
  },

  renderFontColor: function () {
  
    return '<tr><td align="right">Font Color:</td>' +
      '  <td>' +
      '    <input type="text" name="fontColor" id="fontColor" value="" style="display: none" />' +
      '    <div style="background: #000000" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #0005FF" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #11FF00" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #0CFFFF" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #FE0000" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #FE05FE" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #FFFF00" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: #FFFFFF" class="tpFontColor tpControlBorder"></div>' +
      '    <div style="background: transparent" class="tpFontColor tpControlBorder">X</div>' +
      '  </td>' +
      '</tr>';
  },

  renderFontStyle: function () {

    return '<tr>' +
      '  <td align="right">Style:</td>' +
      '  <td valign="bottom">' +
      '    <input type="checkbox" name="bold" id="bold" value="" />Bold&nbsp;&nbsp;' +
      '    <input type="checkbox" name="bold" id="italic" value="" />Italic&nbsp;&nbsp;' +
      '    <input type="checkbox" name="bold" id="underline" value="" />Underline' +
      '  </td>' +
      '</tr>';
  },

  renderBackground: function () {
  
    return '<tr>' +
      '  <td align="right">Background:</td>' +
      '  <td>' +
      '    <input type="text" name="backgroundColor" id="backgroundColor" value="" style="display: none" />' +
      '    <div style="background: #000000" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: #0005FF" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '     <div style="background: #11FF00" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: #0CFFFF" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: #FE0000" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: #FE05FE" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: #FFFF00" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: #FFFFFF" class="tpFontBackgroundColor tpControlBorder"></div>' +
      '    <div style="background: transparent" class="tpFontBackgroundColor tpControlBorder">X</div>' +
      '  </td>' +
      '</tr>';
  },

  renderEdge: function () {

    return '<tr>' +
      '  <td align="right">Edge:</td>' +
      '  <td>' +
      '    <select name="fontEdge" id="fontEdge">' +
      '      <option value="">Default</option>' +
      '      <option value="none">None</option>' +
      '      <option value="uniform">Uniform</option>' +
      '      <option value="raised">Raised</option>' +
      '      <option value="depressed">Depressed</option>' +
      '      <option value="dropshadow">DropShadow</option>' +
      '    </select>' +
      '  </td>' +
      '</tr>';
  },

  renderEdgeColor: function () {

    return '<tr>' +
      '  <td align="right">Edge Color:</td>' +
      '  <td>' +
      '    <input type="text" name="fontEdgeColor" id="fontEdgeColor" value="" style="display: none" />' +
      '    <div style="background: #000000" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #0005FF" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #11FF00" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #0CFFFF" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #FE0000" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #FE05FE" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #FFFF00" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: #FFFFFF" class="tpFontEdgeColor tpControlBorder"></div>' +
      '    <div style="background: transparent" class="tpFontEdgeColor tpControlBorder">X</div>' +
      '  </td>' +
      '</tr>';
  },

  renderTextAlign: function () {

    return '<tr>' +
      '  <td align="right">Text Align:</td>' +
      '  <td>' +
      '    <select name="textAlign" id="textAlign">' +
      '      <option value="">Default</option>' +
      '      <option value="left">Left</option>' +
      '      <option value="center">Center</option>' +
      '      <option value="right">Right</option>' +
      '    </select>' +
      '  </td>' +
      '</tr>';
  },

  renderTextVAlign: function () {

    return '<tr>' +
      '  <td align="right">Vertical Align:</td>' +
      '  <td>' +
      '    <select name="textAlignVertical" id="textAlignVertical">' +
      '     <option value="">Default</option>' +
      '      <option value="top">Top</option>' +
      '      <option value="middle">Middle</option>' +
      '      <option value="bottom">Bottom</option>' +
      '    </select>' +
      '  </td>' +
      '</tr>';
  },

  renderOpacity: function () {

    return '<tr>' +
      ' <td align="right">Opacity:</td>' +
      ' <td><input type="text" name="opacity" id="opacity" value="" /></td>' +
      '</tr>';
  },

  renderPadding: function () {

    return '<tr>' +
      ' <td align="right">Padding:</td>' +
      ' <td><input type="text" name="padding" id="padding" value="" />%</td>' +
      '</tr>';
  }
};

$pdk.controller.addPlayerCard(
  'forms',
  'tpSubtitleStylesCard',
  aetn.videocaptions.render(),
  'urn:theplatform:pdk:area:player',
  {},
  aetn.videocaptions, 
  100
);

})(jQuery);