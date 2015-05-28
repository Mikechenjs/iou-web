.htmlarea { background: #fff; }
.htmlarea td { margin:0;padding:0; }

.htmlarea .toolbarRow {
  width:1px;
}

.htmlarea .toolbar {
  cursor: default;
  background: ButtonFace;
  padding: 3px;
  border: 1px solid;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
}
.htmlarea .toolbar table { margin: 0; font-family: Tahoma, Verdana,sans-serif; font-size: 11px; }
.htmlarea .toolbar img { border: none; vertical-align: top; }
.htmlarea .toolbar .label { padding: 0 3px; }

.htmlarea .toolbar .button {
  background: ButtonFace;
  color: ButtonText;
  border: 1px solid ButtonFace;
  padding: 1px;
  margin: 0;
  width: 18px;
  height: 18px;
}
.htmlarea .toolbar a.button:hover {
  border: 1px solid;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
}
.htmlarea .toolbar a.buttonDisabled:hover {
  border-color: ButtonFace;
}
.htmlarea .toolbar .buttonActive,
.htmlarea .toolbar .buttonPressed
{
  padding: 2px 0 0 2px;
  border: 1px solid;
  border-color: ButtonShadow ButtonHighlight ButtonHighlight ButtonShadow;
}
.htmlarea .toolbar .buttonPressed {
  background: ButtonHighlight;
}
.htmlarea .toolbar .indicator {
  padding: 0 3px;
  overflow: hidden;
  width: 20px;
  text-align: center;
  cursor: default;
  border: 1px solid ButtonShadow;
}

.htmlarea .toolbar .buttonDisabled img {
  filter: gray() alpha(opacity = 25);
  -moz-opacity: 0.25;
  opacity: 0.25;
}

.htmlarea .toolbar .separator {
  /*position: relative;*/
  margin:0 3px;
  border-left: 1px solid ButtonShadow;
  border-right: 1px solid ButtonHighlight;
  width: 0;
  height: 18px;
  padding: 0;
}

.htmlarea .toolbar .space { width: 5px; }

.htmlarea .toolbar select, .htmlarea .toolbar option { font: 11px Tahoma,Verdana,sans-serif;}

.htmlarea .toolbar select,
.htmlarea .toolbar select:hover,
.htmlarea .toolbar select:active { 
  position:relative;
  top:-2px;
  margin-bottom:-2px;
  color: ButtonText;
}

.htmlarea iframe.xinha_iframe, .htmlarea textarea.xinha_textarea
{
  border: none; /*1px solid;*/
}

.htmlarea .statusBar {
  border: 1px solid;
  border-color: ButtonShadow ButtonHighlight ButtonHighlight ButtonShadow;
  padding: 2px 4px;
  background-color: ButtonFace;
  color: ButtonText;
  font: 11px Tahoma,Verdana,sans-serif;
  height:16px;
  overflow: hidden;
}

.htmlarea .statusBar .statusBarTree a {
  padding: 2px 5px;
  color: #00f;
}

.htmlarea .statusBar .statusBarTree a:visited { color: #00f; }
.htmlarea .statusBar .statusBarTree a:hover {
  background-color: Highlight;
  color: HighlightText;
  padding: 1px 4px;
  border: 1px solid HighlightText;
}

.statusBarWidgetContainer {
  background-color: ButtonFace;
}

/* popup dialogs */

.dialog {
  color: ButtonText;
  background: ButtonFace; 
  border: 1px outset; 
  border-color: WindowFrame;
}
div.dialog {
  padding-bottom:10px;
  border-radius: 8px 8px 0 0;
  -moz-border-radius: 8px 8px 0 0;
  -webkit-border-top-left-radius: 8px;
  -webkit-border-top-right-radius: 8px;
  
  box-shadow: 9px 9px 10px #444;
  -moz-box-shadow: 9px 9px 10px #444;
  -webkit-box-shadow: 9px 9px 10px #444;
}
div.dialog.modeless {
  box-shadow: 4px 4px 5px #888;
  -moz-box-shadow: 4px 4px 5px #888;
  -webkit-box-shadow: 4px 4px 5px #888;
}
div.dialog.chrome {
  -webkit-box-shadow: none !IMPORTANT;
}
.panels div.dialog.panel {
  border-radius:0;
  -moz-border-radius: 0;
  -webkit-border-radius:0;
  
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
.xinha_dialog_background {
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  opacity: 0;
  border:none;
}
.xinha_dialog_background_modal_greyout {
  background-color:#666;
  filter: alpha(opacity=70) !IMPORTANT;
  -moz-opacity: 0.7;
  opacity: 0.7;
}
.xinha_dialog_background_modal {
  filter: alpha(opacity=0) !IMPORTANT;
  -moz-opacity: 0;
  opacity: 0;
  border:none;
}
body.xinha_dialog_background_modal_greyout {
  filter: alpha(opacity=100) !IMPORTANT;
}
body.xinha_dialog_background_modal {
  filter: alpha(opacity=0);
}
.dialog .content { padding: 2px; }

.dialog, .dialog button, .dialog input, .dialog select, .dialog textarea, .dialog table {
  font: 11px Tahoma,Verdana,sans-serif;
}

.dialog table { border-collapse: collapse; }

.dialog .title, .dialog h1
{
  background: ActiveCaption;
  color: CaptionText;
  border-bottom: 1px solid #000;
  padding: 1px 0 2px 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: default;
  letter-spacing: 0.01em;
}
.dialog h1 { 
  padding-left:22px;
  margin:0;
  border-radius: 8px 8px 0 0;
  -moz-border-radius: 8px 8px 0 0;
  -webkit-border-top-left-radius: 8px;
  -webkit-border-top-right-radius: 8px;
}
.panels .dialog.panel h1 { 
  -moz-border-radius: 0;
  -webkit-border-radius:0;
}

.dialog .title .button {
  float: right;
  border: 1px solid #66a;
  padding: 0 1px 0 2px;
  margin-right: 1px;
  color: #fff;
  text-align: center;
}

.dialog .title .button-hilite { border-color: #88f; background: #44c; }

.dialog button {
  width: 5.5em;
  padding: 0;
}
.dialog .closeButton {
  padding: 0;
  cursor: default;
  border: 1px solid;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
  height : 11px;
  width : 11px;
  vertical-align : top;
  position : absolute;
  top : 3px;
  right : 2px;
  background-color: ButtonFace;
  color: ButtonText;
  font-size: 13px;
  font-family: Tahoma,Verdana,sans-serif;
  text-align:center;
  letter-spacing:0;
  overflow:hidden;
}
.dialog .buttonColor {
  width :1em;
  padding: 1px;
  cursor: default;
  border: 1px solid;
  border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;
}

.dialog .buttonColor .chooser, .dialog .buttonColor .nocolor {
  height: 0.6em;
  border: 1px solid;
  padding: 0 1em;
  border-color: ButtonShadow ButtonHighlight ButtonHighlight ButtonShadow;
}

.dialog .buttonClick {
  border-color: ButtonShadow ButtonHighlight ButtonHighlight ButtonShadow;
}
.dialog .buttonColor-hilite {
   border-color: ButtonShadow ButtonHighlight ButtonHighlight ButtonShadow;
}

.dialog .buttonColor .nocolor { padding: 0; }
.dialog .buttonColor .nocolor-hilite { background-color: #fff; color: #f00; }

.dialog .label { text-align: right; width: 6em; }
.dialog .value input { width: 100%; }

.dialog legend { font-weight: bold; }
.dialog fieldset table { margin: 2px 0; }
 
.dialog  .buttons {

      padding: 1em; 
      text-align: center;
}
.dialog .resizeHandle {
    -moz-appearance : resizer;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    cursor : se-resize;
}
.popupwin {
  padding: 0;
  margin: 0;
}

.popupwin .title {
  background: #fff;
  color: #000;
  font-weight: bold;
  font-size: 120%;
  padding: 3px 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  letter-spacing: 2px;
}

form { margin: 0; border: none; }


/** Panels **/
.htmlarea .panels_top
{
  border-bottom : 1px solid;
  border-color: ButtonShadow;
}

.htmlarea .panels_right
{
  border-left : 1px solid;
  border-color: ButtonShadow;
}

.htmlarea .panels_left
{
  border-right : 1px solid;
  border-color: ButtonShadow;
}

.htmlarea .panels_bottom
{
  border-top : 1px solid;
  border-color: ButtonShadow;
}

.htmlarea .panel h1 {
  clear:left;
  font-size:0.9em;
}

.htmlarea .panel { 
  overflow:hidden; 
  background-color:white;
  padding-bottom:0 !IMPORTANT;
  border: none !IMPORTANT;
}
.htmlarea .panels_left  .panel { border-right:none; border-left:none; }
.htmlarea .panels_left  h1     { border-right:none;  }
.htmlarea .panels_right .panel { border-right:none; border-left:none; }
.htmlarea .panels_left  h1     { border-left:none;  }
.htmlarea { border: 1px solid black; }

.loading
{
  font-family:sans-serif;
  position:absolute;
  z-index:998;
  text-align:center;
  width:212px;
  padding: 55px 0 5px 0;
  border:2px solid #ccc;
  /* border-color: ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight;*/
  background: url(images/xinha_logo.gif) no-repeat #fff center 5px;
}
.loading_main
{
  font-size:11px;
  color:#000;
 
}
.loading_sub
{
  font-size:9px;
  color:#666;
  text-align:center;
}
/* Classes for filemanager styles in a dialog. */
.dialog a img
{
border: 0 none transparent;
}

.dialog fieldset.collapsed {
border: 0 none transparent;
}

.dialog fieldset.collapsed form {
display: none;
}

.hidden
{
display: none;
}

.placesmanager
{
  width: 95%;
  overflow: auto;
}

.filemanager
{
  width: 95%;
  height: 200px;
  overflow: auto;
  background-color: #fff;
}
.filemanager div.file
{
  min-width: 80px;
  height: 100px;
  position: relative;
  float: left;
  border: 1px outset #666;
  margin: 4px;
}
.placesmanager div.file
{
  min-width: 60px;
  height: 70px;
  position: relative;
  float: left;
  border: 1px outset #666;
  margin: 4px;
}
.filemanager div.file:hover,
.placesmanager div.file:hover
{
  border: 1px solid #333;
  background: #fffff3;
}

.filemanager div.selected,
.filemanager div.selected:hover,
.placesmanager div.selected,
.placesmanager div.selected:hover
{
  background: #ffffda;
  border: 1px solid #000;
}
.filemanager .filename {
	margin: 0.5em;
	color: #222;
}
.filemanager div.selected .filename {
  color: #000;
}
.filemanager img.thumb
{
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  border: 1px solid black;
}
.filemanager img.icon
{
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -16px 0 0 -16px;
}
.filemanager img.action
{
  width: 15px;
  height: 15px;
  position: absolute;
}
.filemanager img.delete
{
  bottom: 3px;
  left: 20px;
}
.filemanager img.copy
{
  bottom: 3px;
  left: 3px;
}
