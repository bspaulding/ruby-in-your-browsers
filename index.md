# Is That a Ruby In Your Browsers?

github/**bspaulding**

twitter/**bradspaulding**

# What Is Opal?

- A Ruby to JavaScript Transpiler
- Includes Bridging to JS

# Example: Fib / Recursion

- TODO

# Example: Block Enumeration

- TODO map example

# Example: Classes

- TODO: Move Greeter here

# Example: Modules

- TODO

# How Ruby is it?

## RubySpec

TODO: RubySpec stats

# How Ruby is it?

## Missing A Few Things:

- Threads
- Encodings
- Freezing Objects
- private/protected
- C Extensions
- File/Network IO
	- _Available in Node!_
- ~~method_missing~~

# Example: Hello, Opal

<div class="editor">
<pre class="ruby">
<code contenteditable>class Greeter
  def initialize(name = "Opal")
    @name = name
  end

  def say_hello
    puts "Hello, #{@name}!"
  end
end

greeter = Greeter.new
greeter.say_hello
</code></pre>

<pre class="javascript"><code></code></pre>

<pre class="output"><code></code></pre>
</div>

# Debugging

- Source Maps

# Testing

- RSpec

# Frameworks

- Vienna
- Lissio
- Volt

# Resources

- Project Home:
	- opalrb.org
	- github.com/opal
- Presentations:
	- http://www.confreaks.com/videos/2904-rubyconf2013-opal-a-new-hope-for-ruby-programmers
- Examples:
	- opal-todomvc

<div class="notes">
Opal: A New Hope; Old, talks a lot about possibly defunct, smalltalk inspired opal-inspector project
</div>

# Thanks!

github/*bspaulding*

twitter/*bradspaulding*


