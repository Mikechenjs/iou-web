/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
var SmartImages={_flash_meta_re:new RegExp(/\?.*(x-shockwave-flash)=([^&]+)/),_flickr_meta_re:new RegExp(/\?.*(x-flickr-photo)=([^&]+)/),replace_flash:function(b,f){if(!b){var e=document.getElementsByTagName("img");for(var a=0;a<e.length;a++){if(e[a].src.match(SmartImages._flash_meta_re)){SmartImages.replace_flash(e[a],f)}}}else{var c=b;if(!c.src.match(SmartImages._flash_meta_re)){return}var d=decodeURIComponent(RegExp.$2);if(!c.id){c.id="ximg"+Math.floor(Math.random()*100000)}if(!f){f={}}if(!f.embed_params){f.embed_params={wmode:"transparent"}}if(!f.flash_params){f.flash_params={}}if(!f.embed_attributes){f.embed_attributes={}}if(!f.width){f.width=c.offsetWidth}if(!f.height){f.height=c.offsetHeight}if(f.bgcolor){f.embed_params.bgcolor=f.bgcolor}swfobject.embedSWF(d,c.id,f.width,f.height,"7.0.0",null,f.flash_params,f.embed_params,f.embed_attributes)}},attribute_flickr:function(b,g){if(!b){var e=document.getElementsByTagName("img");for(var a=0;a<e.length;a++){if(e[a].src.match(SmartImages._flickr_meta_re)){SmartImages.attribute_flickr(e[a],g)}}}else{var c=b;if(!c.src.match(SmartImages._flickr_meta_re)){return}var f=SmartImages.get_meta(c.src);var d=document.createElement("a");d.appendChild(document.createTextNode("© "+f["x-by"]));d.appendChild(document.createTextNode(" - flickr.com "));d.href="http://www.flickr.com/photos/"+f["x-uid"]+"/"+f["x-flickr-photo"]+"/";d.target="_blank";d.style.position="absolute";d.style.display="block";d.style.visibility="hidden";d.className="xinha-flickr-info";d.style.backgroundColor="#CCC";d.style.opacity="0.6";d.style.padding="2px";d.style.color="black";c.xFlickrInfo=d;document.body.appendChild(c.xFlickrInfo);c.xFlickrShow=function(){var i=SmartImages.get_position(this);this.xFlickrInfo.style.top=i.y+(this.offsetHeight-this.xFlickrInfo.offsetHeight)+"px";this.xFlickrInfo.style.left=i.x+((this.offsetWidth/2)-(this.xFlickrInfo.offsetWidth/2))+"px";this.xFlickrInfo.style.visibility="visible";var h=this;window.setTimeout(function(){h.xFlickrInfo.style.visibility="hidden"},4000)};SmartImages.add_event(c,"mouseover",function(){c.xFlickrShow()});SmartImages.add_event(window,"resize",function(){if(c.xFlickrInfo.style.visibility=="visible"){c.xFlickrShow()}})}},get_meta:function(a){var c={};while(a.match(/[?&](([fx][_-][a-z0-9_-]+)=([^&#]+))/i)){try{c[RegExp.$2]=decodeURIComponent(RegExp.$3)}catch(b){}a=a.replace(RegExp.$1,"")}return c},get_position:function(b){var a=0;var c=0;if(b.offsetParent){a=b.offsetLeft;c=b.offsetTop;while(b=b.offsetParent){a+=b.offsetLeft;c+=b.offsetTop}}return{x:a,y:c}},add_event:function(b,a,c){if(document.addEventListener){b.addEventListener(a,c,true)}else{b.attachEvent("on"+a,c)}},replace_all:function(){SmartImages.replace_flash();SmartImages.attribute_flickr()}};if(typeof swfobject=="undefined"){var swfobject=function(){var domLoadFnArr=[];var regObjArr=[];var timer=null;var storedAltContent=null;var isDomLoaded=false;var isExpressInstallActive=false;var ua=function(){var w3cdom=typeof document.getElementById!="undefined"&&typeof document.getElementsByTagName!="undefined"&&typeof document.createElement!="undefined"&&typeof document.appendChild!="undefined"&&typeof document.replaceChild!="undefined"&&typeof document.removeChild!="undefined"&&typeof document.cloneNode!="undefined";var playerVersion=[0,0,0];var d=null;if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object"){d=navigator.plugins["Shockwave Flash"].description;if(d){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof window.ActiveXObject!="undefined"){var a=null;var fp6Crash=false;try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");playerVersion=[6,0,21];a.AllowScriptAccess="always"}catch(e){if(playerVersion[0]==6){fp6Crash=true}}if(!fp6Crash){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}}}if(!fp6Crash&&a){try{d=a.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}catch(e){}}}}var u=navigator.userAgent.toLowerCase();var p=navigator.platform.toLowerCase();var webkit=/webkit/.test(u);var webkitVersion=webkit?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):0;var ie=false;var win=p?/win/.test(p):/win/.test(u);var mac=p?/mac/.test(p):/mac/.test(u);
/*@cc_on
			ie = true;
			@if (@_win32)
				win = true;
			@elif (@_mac)
				mac = true;
			@end
		@*/
return{w3cdom:w3cdom,playerVersion:playerVersion,webkit:webkit,webkitVersion:webkitVersion,ie:ie,win:win,mac:mac}}();var onDomLoad=function(){if(!ua.w3cdom){return}addDomLoadEvent(main);if(ua.ie&&ua.win){try{document.write("<script id=__ie_ondomload defer=true src=//:><\/script>");var s=document.getElementById("__ie_ondomload");if(s){s.onreadystatechange=function(){if(this.readyState=="complete"){this.parentNode.removeChild(this);callDomLoadFunctions()}}}}catch(e){}}if(ua.webkit&&typeof document.readyState!="undefined"){timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){callDomLoadFunctions()}},10)}if(typeof document.addEventListener!="undefined"){document.addEventListener("DOMContentLoaded",callDomLoadFunctions,null)}addLoadEvent(callDomLoadFunctions)}();function callDomLoadFunctions(){if(isDomLoaded){return}if(ua.ie&&ua.win){var s=document.createElement("span");try{var t=document.getElementsByTagName("body")[0].appendChild(s);t.parentNode.removeChild(t)}catch(e){return}}isDomLoaded=true;if(timer){clearInterval(timer);timer=null}var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]()}}function addDomLoadEvent(fn){if(isDomLoaded){fn()}else{domLoadFnArr[domLoadFnArr.length]=fn}}function addLoadEvent(fn){if(typeof window.addEventListener!="undefined"){window.addEventListener("load",fn,false)}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",fn,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",fn)}else{if(typeof window.onload=="function"){var fnOld=window.onload;window.onload=function(){fnOld();fn()}}else{window.onload=fn}}}}}function main(){var rl=regObjArr.length;for(var i=0;i<rl;i++){var id=regObjArr[i].id;if(ua.playerVersion[0]>0){var obj=document.getElementById(id);if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkitVersion<312){fixParams(obj)}}else{if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion([6,0,65])&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i])}else{displayAltContent(obj)}}}}createCSS("#"+id,"visibility:visible")}}function fixParams(obj){var nestedObj=obj.getElementsByTagName("object")[0];if(nestedObj){var e=document.createElement("embed");var a=nestedObj.attributes;if(a){var al=a.length;for(var i=0;i<al;i++){if(a[i].nodeName.toLowerCase()=="data"){e.setAttribute("src",a[i].nodeValue)}else{e.setAttribute(a[i].nodeName,a[i].nodeValue)}}}var c=nestedObj.childNodes;if(c){var cl=c.length;for(var j=0;j<cl;j++){if(c[j].nodeType==1&&c[j].nodeName.toLowerCase()=="param"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"))}}}obj.parentNode.replaceChild(e,obj)}}function fixObjectLeaks(id){if(ua.ie&&ua.win&&hasPlayerVersion([8,0,0])){window.attachEvent("onunload",function(){var obj=document.getElementById(id);for(var i in obj){if(typeof obj[i]=="function"){obj[i]=function(){}}}obj.parentNode.removeChild(obj)})}}function showExpressInstall(regObj){isExpressInstallActive=true;var obj=document.getElementById(regObj.id);if(obj){if(regObj.altContentId){var ac=document.getElementById(regObj.altContentId);if(ac){storedAltContent=ac}}else{storedAltContent=abstractAltContent(obj)}if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310"}if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137"}var pt=ua.ie&&ua.win?"ActiveX":"PlugIn";document.title=document.title.slice(0,47)+" - Flash Player Installation";var dt=document.title;var fv="MMredirectURL="+window.location+"&MMplayerType="+pt+"&MMdoctitle="+dt;var replaceId=regObj.id;if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=document.createElement("div");replaceId+="SWFObjectNew";newObj.setAttribute("id",replaceId);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";window.attachEvent("onload",function(){obj.parentNode.removeChild(obj)})}createSWF({data:regObj.expressInstall,id:"SWFObjectExprInst",width:regObj.width,height:regObj.height},{flashvars:fv},replaceId)}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=document.createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";window.attachEvent("onload",function(){obj.parentNode.removeChild(obj)})}else{obj.parentNode.replaceChild(abstractAltContent(obj),obj)}}function abstractAltContent(obj){var ac=document.createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML}else{var nestedObj=obj.getElementsByTagName("object")[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="param")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))}}}}}return ac}function createSWF(attObj,parObj,id){var r;var el=document.getElementById(id);if(typeof attObj.id=="undefined"){attObj.id=id}if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i=="data"){parObj.movie=attObj[i]}else{if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"'}else{if(i!="classid"){att+=" "+i+'="'+attObj[i]+'"'}}}}}var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />'}}el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";fixObjectLeaks(attObj.id);r=document.getElementById(attObj.id)}else{if(ua.webkit&&ua.webkitVersion<312){var e=document.createElement("embed");e.setAttribute("type","application/x-shockwave-flash");for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k=="data"){e.setAttribute("src",attObj[k])}else{if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k])}else{if(k!="classid"){e.setAttribute(k,attObj[k])}}}}}for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l!="movie"){e.setAttribute(l,parObj[l])}}}el.parentNode.replaceChild(e,el);r=e}else{var o=document.createElement("object");o.setAttribute("type","application/x-shockwave-flash");for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m])}else{if(m!="classid"){o.setAttribute(m,attObj[m])}}}}for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n!="movie"){createObjParam(o,n,parObj[n])}}el.parentNode.replaceChild(o,el);r=o}}return r}function createObjParam(el,pName,pValue){var p=document.createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p)}function hasPlayerVersion(rv){return(ua.playerVersion[0]>rv[0]||(ua.playerVersion[0]==rv[0]&&ua.playerVersion[1]>rv[1])||(ua.playerVersion[0]==rv[0]&&ua.playerVersion[1]==rv[1]&&ua.playerVersion[2]>=rv[2]))?true:false}function createCSS(sel,decl){if(ua.ie&&ua.mac){return}var h=document.getElementsByTagName("head")[0];var s=document.createElement("style");s.setAttribute("type","text/css");s.setAttribute("media","screen");if(!(ua.ie&&ua.win)&&typeof document.createTextNode!="undefined"){s.appendChild(document.createTextNode(sel+" {"+decl+"}"))}h.appendChild(s);if(ua.ie&&ua.win&&typeof document.styleSheets!="undefined"&&document.styleSheets.length>0){var ls=document.styleSheets[document.styleSheets.length-1];if(typeof ls.addRule=="object"){ls.addRule(sel,decl)}}}return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr||!swfVersionStr){return}var regObj={};regObj.id=objectIdStr;var v=swfVersionStr.split(".");regObj.swfVersion=[parseInt(v[0],10),parseInt(v[1],10),parseInt(v[2],10)];regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:false;regObjArr[regObjArr.length]=regObj;createCSS("#"+objectIdStr,"visibility:hidden")},getObjectById:function(objectIdStr){var r=null;if(ua.w3cdom&&isDomLoaded){var o=document.getElementById(objectIdStr);if(o){var n=o.getElementsByTagName("object")[0];if(!n||(n&&typeof o.SetVariable!="undefined")){r=o}else{if(typeof n.SetVariable!="undefined"){r=n}}}}return r},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return}widthStr+="";heightStr+="";if(hasPlayerVersion(swfVersionStr.split("."))){createCSS("#"+replaceElemIdStr,"visibility:hidden");var att=(typeof attObj=="object")?attObj:{};att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par=(typeof parObj=="object")?parObj:{};if(typeof flashvarsObj=="object"){for(var i in flashvarsObj){if(flashvarsObj[i]!=Object.prototype[i]){if(typeof par.flashvars!="undefined"){par.flashvars+="&"+i+"="+flashvarsObj[i]}else{par.flashvars=i+"="+flashvarsObj[i]}}}}addDomLoadEvent(function(){createSWF(att,par,replaceElemIdStr);createCSS("#"+replaceElemIdStr,"visibility:visible")})}else{if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion([6,0,65])&&(ua.win||ua.mac)){createCSS("#"+replaceElemIdStr,"visibility:hidden");addDomLoadEvent(function(){var regObj={};regObj.id=regObj.altContentId=replaceElemIdStr;regObj.width=widthStr;regObj.height=heightStr;regObj.expressInstall=xiSwfUrlStr;showExpressInstall(regObj);createCSS("#"+replaceElemIdStr,"visibility:visible")})}}},getFlashPlayerVersion:function(){return{major:ua.playerVersion[0],minor:ua.playerVersion[1],release:ua.playerVersion[2]}},hasFlashPlayerVersion:function(versionStr){return hasPlayerVersion(versionStr.split("."))},createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom&&isDomLoaded){return createSWF(attObj,parObj,replaceElemIdStr)}else{return undefined}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl)}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=document.location.search||document.location.hash;if(param==null){return q}if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=document.getElementById("SWFObjectExprInst");if(obj){obj.parentNode.replaceChild(storedAltContent,obj);storedAltContent=null;isExpressInstallActive=false}}}}}()};