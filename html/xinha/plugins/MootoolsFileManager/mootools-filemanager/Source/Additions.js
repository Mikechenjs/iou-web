/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
(function(){Element.implement({appearOn:function(c,b,a){b=$type(b)=="array"?[b[0]||1,b[1]||0]:[b||1,0];this.set({opacity:b[1],tween:a||{duration:200}});$(c).addEvents({mouseenter:this.fade.bind(this,b[0]),mouseleave:this.fade.bind(this,b[1])});return this},center:function(a){var e=document.getScroll(),g=document.getSize(),b=this.getSize(),d={x:"left",y:"top"};if(!a){a={}}for(var f in d){var c=e[f]+(g[f]-b[f])/2+(a[f]||0);this.setStyle(d[f],c<10?10:c)}return this}});this.Dialog=new Class({Implements:[Options,Events],options:{request:null,buttons:["confirm","decline"],language:{}},initialize:function(b,a){this.setOptions(a);this.el=new Element("div",{"class":"fm-dialog fm-dialog-engine-"+Browser.Engine.name+" fm-dialog-engine-"+Browser.Engine.name+(Browser.Engine.trident?Browser.Engine.version:""),opacity:0,tween:{duration:250}}).adopt([$type(b)=="string"?new Element("div",{text:b}):b]);if(this.options.content){this.el.getElement("div").adopt(this.options.content)}Array.each(this.options.buttons,function(c){new Element("button",{"class":"fm-dialog-"+c,text:this.options.language[c]}).addEvent("click",(function(d){if(d){d.stop()}this.fireEvent(c).fireEvent("close");this.overlay.hide();this.destroy()}).bind(this)).inject(this.el)},this);this.overlay=new Overlay({"class":"fm-overlay fm-overlay-dialog",events:{click:this.fireEvent.bind(this,["close"])},tween:{duration:250}});this.bound={scroll:(function(){if(!this.el){this.destroy()}else{this.el.center()}}).bind(this),keyesc:(function(c){if(c.key=="esc"){this.fireEvent("close").destroy()}}).bind(this)};this.show()},show:function(){this.overlay.show();var a=this.fireEvent("open");this.el.setStyle("display","block").inject(document.body).center().fade(1).get("tween").chain(function(){var b=this.element.getElement("button.fm-dialog-confirm")||this.element.getElement("button");if(b){b.focus()}a.fireEvent("show")});window.addEvents({scroll:this.bound.scroll,resize:this.bound.scroll,keyup:this.bound.keyesc})},destroy:function(){if(this.el){this.el.fade(0).get("tween").chain((function(){this.overlay.destroy();this.el.destroy()}).bind(this))}window.removeEvent("scroll",this.bound.scroll).removeEvent("resize",this.bound.scroll).removeEvent("keyup",this.bound.keyesc)}});this.Overlay=new Class({initialize:function(a){this.el=new Element("div",$extend({"class":"fm-overlay"},a)).inject(document.body)},show:function(){this.objects=$$("object, select, embed").filter(function(a){return a.id=="SwiffFileManagerUpload"||a.style.visibility=="hidden"?false:!!(a.style.visibility="hidden")});this.resize=(function(){if(!this.el){this.destroy()}else{this.el.setStyles({width:document.getScrollWidth(),height:document.getScrollHeight()})}}).bind(this);this.resize();this.el.setStyles({opacity:0,display:"block"}).get("tween").pause().start("opacity",0.5);window.addEvent("resize",this.resize);return this},hide:function(){this.el.fade(0).get("tween").chain((function(){this.revertObjects();this.el.setStyle("display","none")}).bind(this));window.removeEvent("resize",this.resize);return this},destroy:function(){this.revertObjects().el.destroy()},revertObjects:function(){if(this.objects&&this.objects.length){this.objects.each(function(a){a.style.visibility="visible"})}return this}})})();