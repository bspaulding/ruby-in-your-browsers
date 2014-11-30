all:
	pandoc -t revealjs -V theme=ruby -V hlss=zenburn -V transition=linear --template template.html --no-highlight -s index.md -o index.html
