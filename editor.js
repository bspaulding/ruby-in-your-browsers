var editor = document.querySelector('pre.ruby code[contenteditable]');
var js = document.querySelector('pre.javascript code');
var output = document.querySelector('pre.output code');

function clearOutput() {
	output.textContent = "";
}
output.addEventListener('click', clearOutput);

function puts(string) {
	output.textContent += "> " + string + "\n";
}
console.log = puts;

function update() {
	try {
		var jsSource = Opal.compile(editor.textContent);
		if (js.textContent === jsSource) {
			return;
		}
		js.textContent = jsSource;
		hljs.highlightBlock(js);
		eval(jsSource);
		hljs.highlightBlock(output);
	} catch(e) {}
}

update();
editor.addEventListener('input', update);
