(function() {
	function makeEditor(root) {
		var editor = root.querySelector('pre.ruby code');
		editor.setAttribute("contenteditable", "");
		var js = root.querySelector('pre.javascript code');
		var output = root.querySelector('pre.output code');

		function clearOutput() {
			output.textContent = "";
		}
		output.addEventListener('click', clearOutput);

		function puts(string) {
			output.textContent += "> " + string + "\n";
		}

		function withPuts(f) {
			var log = console.log;
			var error = false;
			try {
				console.log = puts;
				f();
			} catch(e) {
				error = e;
			}
			console.log = log;
			if (error) { throw error; }
		}

		function update() {
			try {
				clearOutput();
				var jsSource = Opal.compile(editor.textContent);
				if (js.textContent === jsSource) {
					return;
				}
				js.textContent = jsSource;
				hljs.highlightBlock(js);
				withPuts(function() {
					eval(jsSource);
				});
				hljs.highlightBlock(output);
			} catch(e) {
				console.log(e);
			}
		}

		update();
		editor.addEventListener('input', update);
	}

	function initializeEditors() {
		var editors = document.querySelectorAll(".editor");
		for (var i = 0; i < editors.length; i += 1) {
			makeEditor(editors[i]);
		}
	}

	document.addEventListener('DOMContentLoaded', initializeEditors);
}())
