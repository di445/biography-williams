//tealium universal tag - utag.loader ut4.0.201504071847, Copyright 2015 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_aenetworks_main=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/aenetworks/main/prod/';}}})();}catch(e){};try{var FlashDetect=new function(){var self=this;self.installed=false;self.raw="";self.major=-1;self.minor=-1;self.revision=-1;self.revisionStr="";var activeXDetectRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7","version":function(obj){return getActiveXVersion(obj);}},{"name":"ShockwaveFlash.ShockwaveFlash.6","version":function(obj){var version="6,0,21";try{obj.AllowScriptAccess="always";version=getActiveXVersion(obj);}catch(err){}
return version;}},{"name":"ShockwaveFlash.ShockwaveFlash","version":function(obj){return getActiveXVersion(obj);}}];var getActiveXVersion=function(activeXObj){var version=-1;try{version=activeXObj.GetVariable("$version");}catch(err){}
return version;};var getActiveXObject=function(name){var obj=-1;try{obj=new ActiveXObject(name);}catch(err){obj={activeXError:true};}
return obj;};var parseActiveXVersion=function(str){var versionArray=str.split(",");return{"raw":str,"major":parseInt(versionArray[0].split(" ")[1],10),"minor":parseInt(versionArray[1],10),"revision":parseInt(versionArray[2],10),"revisionStr":versionArray[2]};};var parseStandardVersion=function(str){var descParts=str.split(/ +/);var majorMinor=descParts[2].split(/\./);var revisionStr=descParts[3];return{"raw":str,"major":parseInt(majorMinor[0],10),"minor":parseInt(majorMinor[1],10),"revisionStr":revisionStr,"revision":parseRevisionStrToInt(revisionStr)};};var parseRevisionStrToInt=function(str){return parseInt(str.replace(/[a-zA-Z]/g,""),10)||self.revision;};self.majorAtLeast=function(version){return self.major>=version;};self.minorAtLeast=function(version){return self.minor>=version;};self.revisionAtLeast=function(version){return self.revision>=version;};self.versionAtLeast=function(major){var properties=[self.major,self.minor,self.revision];var len=Math.min(properties.length,arguments.length);for(i=0;i<len;i++){if(properties[i]>=arguments[i]){if(i+1<len&&properties[i]==arguments[i]){continue;}else{return true;}}else{return false;}}};self.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var type='application/x-shockwave-flash';var mimeTypes=navigator.mimeTypes;if(mimeTypes&&mimeTypes[type]&&mimeTypes[type].enabledPlugin&&mimeTypes
[type].enabledPlugin.description){var version=mimeTypes[type].enabledPlugin.description;var versionObj=parseStandardVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revisionStr=versionObj.revisionStr;self.revision=versionObj.revision;self.installed=true;}}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var version=-1;for(var i=0;i<activeXDetectRules.length&&version==-1;i++){var obj=getActiveXObject(activeXDetectRules[i].name);if(!obj.activeXError){self.installed=true;version=activeXDetectRules[i].version(obj);if(version!=-1){var versionObj=parseActiveXVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revision=versionObj.revision;self.revisionStr=versionObj.revisionStr;}}}}}();};FlashDetect.JS_RELEASE="1.0.4";}catch(e){};if(!utag_condload){try{window['optimizely']=window['optimizely']||[];window['optimizely'].push(["customTag","ShowWidget",aetn.biography.relatedVideosFilter.isBioRelatedShowWidget]);}catch(e){}};if(!utag_condload){try{function toAnalyticsCase(str)
{var str=str.replace(/\-/g," ");var str=str.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});var str=str.replace(/[ -*']/g,"");return str;}
}catch(e){}};if(!utag_condload){try{(function(a,b,c){if(typeof utag_data=='undefined')utag_data={};a=location.pathname.split('/');b=(a.length>9)?9:a.length;for(c=1;c<b;c++){utag_data['_pathname'+c]=(typeof a[c]!='undefined')?a[c]:''}})();}catch(e){}};if(!utag_condload){try{if(typeof document.getElementById('player')=="undefined"||document.getElementById('player')==null){utag_data.has_video_player="false";utag_data.misc_page_attributes_array.push("No Video Player");}
else{utag_data.has_video_player="true";utag_data.misc_page_attributes_array.push("Has Video Player");}}catch(e){}};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"aenetworks.main",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],ft:0,rf:0,ri:0,rp:0,rq:[],lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d){utag.DB('WQ:'+utag.loader.wq.length);c=true;try{utag.loader.GET()}catch(e){};var lq=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load>0&&b.send){c=false;utag.send[b.id]=b;}
if(b.load!=0&&b.load!=4){lq.push(b);this.f[b.id]=0;}}
if(c){d=false;for(b in utag.loader.GV(utag.send))d=true;if(c&&d)this.LOAD('WAIT_FORCE');}
this.wq=[];for(a=0;a<lq.length;a++){utag.DB('utag.loader.WAIT: loading '+lq[a].id);utag.loader.AS(lq[a])}
if(lq.length==0)utag.handler.INIT();},AS:function(a,b,c,d){var cb;utag.sender[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'utag.'+a.id+'.js')}else{var f=a.id;cb=function(){utag.loader.LOAD(f)};}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+utag.cfg.v;utag.rpt['l_'+a.id]=a.src;b=document;if(a.load==2){b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')}else if(a.load==1||a.load==3){if(b.createElement){c='utag_aenetworks.main_'+a.id;if(!b.getElementById(c)){if(a.load==3){d=b.createElement('iframe');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',a.src);d.id=c;b.getElementsByTagName('head')[0].appendChild(d)}else{utag.ut.libloader(a.src,c,cb||utag.loader.cfg[a.id].loc);}}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},RD:function(o,a,b,c,d,e,f,g){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){if(a[b].name&&a[b].name!="")o["meta."+a[b].name.toLowerCase()]=a[b].content.toLowerCase();}
a=location.search.toLowerCase();if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");o["qp."+c[0]]=utag.ut.decode(c[1])}}
a=(new Date()).getTime();b=utag.loader.RC();c=a+parseInt(utag.cfg.session_timeout);d=a+(Math.ceil(Math.random()*1000000));if((b.utag_main&&(typeof b.utag_main._st=="undefined"||(typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a)))||!b.utag_main){if(b.utag_main){b.utag_main._st=c;b.utag_main.ses_id=d;}else{b.utag_main={_st:c,ses_id:d}}
utag.loader.SC("utag_main",{"_st":c,"ses_id":d+";exp-session"});}else{utag.loader.SC("utag_main",{"_st":c})}
for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
o["dom.referrer"]=eval("document."+"referrer");o["dom.title"]=""+document.title;o["dom.domain"]=""+location.hostname;o["dom.query_string"]=""+(location.search).substring(1);o["dom.url"]=""+document.URL;o["dom.pathname"]=""+location.pathname;},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];for(c=0;c<b.length;c++){if(b[c].match(/^(.*?)=(.*)$/)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"&&(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0)){e=e.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){};}
o[ck]={};e=(new Date()).getTime();for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);if(k>e)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);j[f]=(k<e)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";x="Thu, 31 Dec 2099 00:00:00 GMT";if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=(new Date()).getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push(g+":"+encodeURIComponent(d[g]))};if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){utag.DB('utag.loader.LOAD:add sender-'+a);this.f[a]=1;if(utag.loader.wq.length>0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0)return};utag.DB('CLEAR FORCE');clearTimeout(utag.loader.ft);utag.handler.INIT()}},EV:function(a,b,c,d){if(b=="ready"){if(document.readyState!=="loading")setTimeout(c,1);else{if(typeof utag.loader.ready_q=="undefined"){utag.loader.ready_q=[];utag.loader.run_ready_q=function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){};}}}
utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState!=="loading"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){try{console.log(a)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]));}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')));}},view:function(a,c){return this.track('view',a,c);},link:function(a,c){return this.track('link',a,c);},track:function(a,b,c){for(var i in utag.loader.GV(utag.o)){try{utag.o[i].handler.trigger(a,b)}catch(e){};}
if(c)try{c()}catch(e){};return true;},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){this.iflag=1;utag.DB('utag.handler.INIT');a=utag.loader.q.length;if(a>0){for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b)}}
if(utag.cfg.noview!=true)utag.handler.trigger('view',utag.data);},test:function(){return 1},trigger:function(a,b,c,d){utag.DB('trigger:'+a);b=b||{};if(!this.iflag){utag.loader.q.push({a:a,b:b});return;}
for(c in utag.loader.GV(this.df)){if(typeof this.df[c]!="function"&&typeof b[c]=="undefined")b[c]=this.df[c]}
utag.DB('All Tags EXTENSIONS');if(typeof this.extend!="undefined"){for(c=0;c<this.extend.length;c++){try{this.extend[c](a,b);utag.rpt['ex_'+c]=0}catch(e){utag.rpt['ex_'+c]=1;utag.ut.error({e:e.message,s:utag.cfg.path+'utag.js',l:c,t:'ge'});}}}
for(c in utag.loader.GV(utag.send)){if(typeof utag.sender[c]!="undefined"){try{utag.sender[c].send(a,utag.handler.C(b));utag.rpt['s_'+c]=0}catch(e){utag.rpt['s_'+c]=1};utag.rpt.ts['s']=new Date();for(var r in utag.loader.GV(utag.cond)){if(utag.cond[r])utag.rpt['r_'+r]=1;}
utag.RP(utag.rpt);}}
c=this.base.split(",");for(d=0;d<c.length;d++){if(typeof b[c[d]]!="undefined")this.df[c[d]]=b[c[d]]};for(d in utag.loader.GV(b)){if(d.indexOf('dom.')==0)this.df[d]=b[d]};this.o=b;},C:function(a,b,c,d){b={};for(c in utag.loader.GV(a)){if(typeof a[c]!="function")b[c]=a[c]}
return b}},ut:{decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){};if(b==""){b=unescape(a)};return b;},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}
c='';for(b in a){c+=b+':'+a[b]+" , "};utag.DB(c);},libloader:function(src,id,h,l,a,b,c){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(id){b.id=id};if(typeof h=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;h()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;h()}}}else{l=l||h;}
l=l||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+src)}}}};utag.o['aenetworks.main']=utag;utag.cfg={v:"ut4.010.201504071847",session_timeout:1800000,readywait:0,noload:0,forcetimeout:3000,domain:utag.loader.lh(),path:"//tags.tiqcdn.com/utag/aenetworks/main/prod/",utid:"aenetworks/main/201504071847"};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={4:0};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(){try{utag.cond[4]|=(utag.data['dom.url'].toString().toLowerCase().indexOf('tv.biography.com'.toLowerCase())>-1)}catch(e){utag.DB(e)};};utag.pre=function(){utag.loader.initdata();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){try{if(1){try{b['_pathname1']=toAnalyticsCase(b._pathname1);}catch(e){};try{b['_pathname2']=toAnalyticsCase(b._pathname2);}catch(e){};try{b['_pathname3']=toAnalyticsCase(b._pathname3);}catch(e){};try{b['_pathname4']=toAnalyticsCase(b._pathname4);}catch(e){};try{b['_pathname5']=toAnalyticsCase(b._pathname5);}catch(e){};try{b['_pathname6']=toAnalyticsCase(b._pathname6);}catch(e){};try{b['_pathname7']=toAnalyticsCase(b._pathname7);}catch(e){};try{b['_pathname8']=toAnalyticsCase(b._pathname8);}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){if(typeof b.bio_affiliation=="undefined"||b.bio_affiliation==""){b.bio_affiliation="None";}
if(typeof b.bio_born_died=="undefined"||b.bio_born_died==""){b.bio_born_died="None";}
if(typeof b.bio_cultural_association=="undefined"||b.bio_cultural_association==""){b.bio_cultural_association="None";}
if(typeof b.bio_education=="undefined"||b.bio_education==""){b.bio_education="None";}
if(typeof b.bio_gender=="undefined"||b.bio_gender==""){b.bio_gender="None";}
if(typeof b.bio_industry=="undefined"||b.bio_industry==""){b.bio_industry="None";}
if(typeof b.bio_life_events=="undefined"||b.bio_life_events==""){b.bio_life_events="None";}
if(typeof b.bio_misc_categories=="undefined"||b.bio_misc_categories==""){b.bio_misc_categories="None";}
if(typeof b.bio_nationality=="undefined"||b.bio_nationality==""){b.bio_nationality="None";}
if(typeof b.bio_occupation=="undefined"||b.bio_occupation==""){b.bio_occupation="None";}
if(typeof b.bio_occupation_type=="undefined"||b.bio_occupation_type==""){b.bio_occupation_type="None";}
if(typeof b.game_name=="undefined"||b.game_name==""){b.game_name="None";}
if(typeof b.game_type=="undefined"||b.game_type==""){b.game_type="None";}
if(typeof b.game_genre=="undefined"||b.game_genre==""){b.game_genre="None";}
if(typeof b.show_name=="undefined"||b.show_name==""){b.show_name="None";}
if(typeof b.movie_name=="undefined"||b.movie_name==""){b.movie_name="None";}
if(typeof b.movie_name=="undefined"||b.movie_name==""){b.movie_name="None";}
if(typeof b.product_type=="undefined"||b.product_type==""){b.product_type="None";}
if(typeof b.ad_zone=="undefined"||b.ad_zone==""){b.ad_zone="None";}},function(a,b){try{if(1){b['brand_prefix']='BIO'}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['page_title']=document.title;}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['page_url']=document.location.toString().split("?")[0];}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['page_domain']=window.location.host;}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){var flashMajor=FlashDetect.major;var flashMinor=FlashDetect.minor;var flashRevision=FlashDetect.revision;b["flash_version"]=flashMajor+"."+flashMinor+"."+flashRevision;},function(a,b){if(b.sc_page_name){var pn_token=b.sc_page_name.split(':');for(i=0;i<pn_token.length;i++){var countplus=i+1;b['page_level_'+countplus]=pn_token[countplus];}}
var arrPN=[];for(i=1;i<11;i++){if(b['page_level_'+i]&&b['page_level_'+i]!='None'){arrPN.push(b['page_level_'+i])}
else{b['page_level_'+i]='None'}}
var pn="";for(j=0;j<arrPN.length;j++){pn=pn+arrPN[j]+':';}
if(arrPN.length>0){pn=pn.substring(0,pn.length-1);b.page_name=pn;}},function(a,b){try{if(b['page_title'].toString().toLowerCase().indexOf('Page not found'.toLowerCase())>-1){b['404_page']='errorPage';b['page_name']=b['page_url'];b['page_level_1']='BIO:ErrorPage';b['product_type']='ErrorPage'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['dom.url'].toString().toLowerCase().indexOf('.biography.com/blog'.toLowerCase())>-1&&typeof b['_pathname2']!='undefined')){b['page_level_2']=b['_pathname2']}}catch(e){utag.DB(e)}},function(a,b){try{if((b['dom.url'].toString().toLowerCase().indexOf('.biography.com/blog'.toLowerCase())>-1&&typeof b['_pathname3']!='undefined')){b['page_level_3']=b['_pathname3']}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((typeof b['sc_page_name']=='undefined'&&typeof b['404_page']=='undefined')){c=[b['brand_prefix'],b['page_level_1'],b['page_level_2'],b['page_level_3'],b['page_level_4'],b['page_level_5'],b['page_level_6'],b['page_level_7'],b['page_level_8'],b['page_level_9'],b['page_level_10']];b['page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['page_name']=b.page_name.replace(/:None/g,"");}catch(e){}}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((!/^BIO:/i.test(b['page_name'])&&typeof b['404_page']=='undefined')){c=[b['brand_prefix'],b['page_name']];b['page_name']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(!/^BIO:/i.test(b['page_level_1'])){c=[b['brand_prefix'],b['page_level_1']];b['page_level_1']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_1']!='None'&&b['page_level_2']!='None')){c=[b['page_level_1'],b['page_level_2']];b['page_level_2']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_2']!='None'&&b['page_level_3']!='None')){c=[b['page_level_2'],b['page_level_3']];b['page_level_3']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_3']!='None'&&b['page_level_4']!='None')){c=[b['page_level_3'],b['page_level_4']];b['page_level_4']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_4']!='None'&&b['page_level_5']!='None')){c=[b['page_level_4'],b['page_level_5']];b['page_level_5']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_5']!='None'&&b['page_level_6']!='None')){c=[b['page_level_5'],b['page_level_6']];b['page_level_6']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_6']!='None'&&b['page_level_7']!='None')){c=[b['page_level_6'],b['page_level_7']];b['page_level_7']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_7']!='None'&&b['page_level_8']!='None')){c=[b['page_level_7'],b['page_level_8']];b['page_level_8']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_8']!='None'&&b['page_level_9']!='None')){c=[b['page_level_8'],b['page_level_9']];b['page_level_9']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((b['page_level_9']!='None'&&b['page_level_10']!='None')){c=[b['page_level_9'],b['page_level_10']];b['page_level_10']=c.join(':')}}catch(e){utag.DB(e)}},function(a,b){window.aetnkrux=new Object();for(var k in b){if(b.hasOwnProperty(k)&&k.indexOf('meta')==-1&&k.indexOf('cp.')==-1&&k.indexOf('_t')==-1&&k.indexOf('username')==-1){aetnkrux[k]=b[k];}}}];utag.loader.initcfg=function(){utag.loader.cfg={"2":{load:utag.cond[4],send:1,wait:1,tid:3005},"3":{load:utag.cond[4],send:1,wait:1,tid:14009},"1":{load:utag.cond[4],send:1,wait:1,tid:19004},"32":{load:1,send:1,wait:1,tid:11006}};utag.loader.cfgsort=["2","3","1","32"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i];};utag.loader.SETFORCE=function(a){utag.DB('SETFORCE:'+a);if(utag.loader.ft>0)clearTimeout(utag.loader.ft);utag.loader.ft=(utag.cfg.forcetimeout!=0)?setTimeout(utag.loader.FORCE,utag.cfg.forcetimeout):0}
utag.loader.FORCE=function(a,b,c,d){a=utag.sender;b=utag.loader.f;utag.DB('FORCE:'+a+':'+b);for(c in utag.loader.GV(b)){d=a[c].id;if(typeof b[c]!='undefined'&&b[c]==0){utag.DB('FORCEERROR:'+d);utag.rpt['f_'+d]=1;utag.ut.error({e:'load error',s:a[c].src,l:0,t:'le'});delete utag.sender[d];delete utag.send[d];utag.loader.LOAD(d)}}}
utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;utag.rpt.ts['i']=new Date();if(!utag.cfg.noload){try{this.GET()}catch(e){};var lq=[];d=this.cfgsort||this.cfg;for(a in this.GV(d)){e=(this.cfgsort?d[a]:a);b=this.cfg[e];b.id=e;if(b.src&&b.load==4){b.load=1;}
if(b.wait==1){this.wq.push(b)}else if(b.load>0){if(b.send){c=false;utag.send[b.id]=b;}
if(b.load!=4){lq.push(b);this.f[b.id]=0;}}}
for(a=0;a<lq.length;a++){utag.DB('utag.loader.INIT: loading '+b.id);utag.loader.AS(lq[a])}
if(utag.loader.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.loader.wq');utag.loader.WQ();utag.loader.SETFORCE('WAIT')}});else if(lq.length==0)utag.handler.INIT();else utag.loader.SETFORCE('INIT')}
return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{function refreshGalleryView(pagenum,title,url,omniture_inhibit){s.eVar10=(typeof pagenum!="undefined"&&pagenum)?(pagenum):"1";if(!omniture_inhibit){void(s.t());}
try{_gaq.push(['_trackPageview']);}catch(a){utag.DB("Error refreshing GA page view");}
try{udm_('http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+'.scorecardresearch.com/b?c1=2&c2=3005002');}
catch(a){utag.DB("Error refreshing comscore");}
try{jQuery("script").each(function(){if(this.src.indexOf("scorecardresearch.com/beacon.js")!=-1){jQuery(this).remove();}});(function(){var s=document.createElement("script"),el=document.getElementsByTagName("script")[0];s.async=true;s.src=(document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js?ts=100";el.parentNode.insertBefore(s,el);})();}catch(a){utag.DB("Error removing previous load of beacon.js");}
try{trac.pvar.custom={photo:pagenum,gallery:title};Nielsen_Event();}catch(a){utag.DB("Error refreshing Neilson");}}}catch(e){utag.DB(e)};try{if(typeof utag.runonce=='undefined')utag.runonce={};if(typeof utag.runonce[45]=='undefined'){utag.runonce[45]=1;jQuery('[class$=scroll-button]').bind('click',function(e){var photo_num="";var gallery_title=$("#breadcrumb-title").text();if(/left/.test($(this).attr('class'))){photo_num=(parseInt($("#current-page2").text(),10)-1).toString();}else{photo_num=(parseInt($("#current-page2").text(),10)+1).toString();}
refreshGalleryView(photo_num,gallery_title,document.URL,false);})}}catch(e){utag.DB(e)};}})
utag.cfg.readywait?utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.cfg.readywait');utag.loader.INIT()}}):utag.loader.INIT();}