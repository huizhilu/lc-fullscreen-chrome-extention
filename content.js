var fullscreen_button = document.createElement("button");
var t = document.createTextNode("Fullscreen");
fullscreen_button.id = "fullscreen-button";
fullscreen_button.className = "icon-btn pull-right-sm btn";
fullscreen_button.appendChild(t);

$("div.CodeMirror.cm-s-monokai.CodeMirror-wrap").prepend(fullscreen_button);

$("#fullscreen-button").click(function() {
	$("div.CodeMirror.cm-s-monokai.CodeMirror-wrap").toggleClass('fullscreen');
});