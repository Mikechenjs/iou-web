/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
(function(){var b=window.PSFixed=function b(c){this.editor=c};b._pluginInfo={name:"PSFixed",version:"2.0",developer:"Douglas Mayle",developer_url:"http://xinha.org",license:"BSD"};b.prototype.onGenerateOnce=function(){this._registerBackend()};b.prototype._registerBackend=function(f){var d=this.editor;var c=this;if(!f){f=0}var e=10000;if(f>e){return}if(!d.plugins.PersistentStorage||!d.plugins.PersistentStorage.instance||!d.plugins.PersistentStorage.instance.ready){window.setTimeout(function(){c._registerBackend(f?f*2:50)},f?f:50);return}d.plugins.PersistentStorage.instance.registerBackend("PSFixed",this)};b.prototype.loadData=function(c){if(!this.config.$type){this.config.$type="folder"}c(this.config)};var a=function a(c,f,d){if(typeof d=="undefined"){d="/";f("/","",c)}for(var e in c){f(d,e,c[e]);if(c[e].$type=="folder"){a(c[e],f,d+e+"/")}}};b.prototype.getFilters=function(d){var c=[];a(d,function(h,f,g){if(g.$type!="folder"){return}var e=f.length?h+f+"/":h;c.push({value:e,display:e})});return c};b.prototype.getMetadata=function(e,g){var d=this.editor;var c=this;var f=[];a(e,function(j,h,i){if(!i.$type||!h){return}if(j!=g){return}if(i.$type=="folder"){f.push({URL:c.editor.imgURL("folder.gif","PersistentStorage"),name:h,key:j+h,$type:i.$type})}else{f.push({URL:i.URL,name:h,key:j+h,$type:i.$type})}});return f}})();