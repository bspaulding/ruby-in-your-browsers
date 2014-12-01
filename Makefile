all:
	pandoc -t revealjs -i -V pagetitle="Is That A Ruby In Your Browsers?" -V theme=ruby -V hlss=zenburn -V transition=linear --template template.html --no-highlight -s index.md -o index.html
