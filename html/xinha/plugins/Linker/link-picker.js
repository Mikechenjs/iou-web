/* This compressed file is part of Xinha. For uncompressed sources, forum, and bug reports, go to xinha.org */
function LinkPicker(d,c){this.field=d;var b=this;this.tmpAnchor=document.createElement("a");c.dialog=LinkPicker.Dialog;c.canSetTarget=false;c.canRemoveLink=false;this.selectionEmpty=function(){return true};this.getSelection=function(){return null};this.selectNodeContents=function(){return true};this.getHTML=function(){return""};this.disableToolbar=function(){return true};this.enableToolbar=function(){return true};this._doc={execCommand:function(){return false},getElementsByTagName:function(){return[]}};this.config={Linker:c,btnList:{},registerButton:function(){return true},addToolbarElement:function(){}};var a=document.createElement("input");a.type="button";a.value="Browse";a.onclick=function(){b.editLink();return false};d.parentNode.insertBefore(a,d.nextSibling);this.updateToolbar=function(){b.field.value=this.fixRelativeLinks(b.tmpAnchor.href)};this.linker=new Linker(this);this.linker.onGenerateOnce()}LinkPicker.prototype.editLink=function(){this.tmpAnchor.href=this.field.value;this.linker._createLink(this.tmpAnchor)};LinkPicker.prototype.fixRelativeLinks=function(a){return a.replace(document.location.href.replace(/^(https?:\/\/[^\/]*)(.*)$/i,"$1"),"")};LinkPicker.Dialog=function(d,c,e,b,a){LinkPicker.Dialog.parentConstructor.call(this,c,e,b,a)};Xinha.extend(LinkPicker.Dialog,Xinha.DetachedDialog);LinkPicker.Config=function(){};LinkPicker.Config.prototype=Xinha.Config.prototype.Linker;