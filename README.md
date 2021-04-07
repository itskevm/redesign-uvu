# template-react-app

refine as needed

modified from: https://medium.com/javascript-in-plain-english/react-app-from-scratch-5337c5ac2ea0

# Title
## Sections can include Overview, Features, Tech, Installation, Plugins, License, and more

- Bullet points
- are made like this

Text here can have
line breaks as you wish.

Quick intro to non inline links:
Here we have a name that **is** (bold) itself a link reference.
[John Gruber] is a name (duH) but also has a link tied to it, so it will not render as text with square brackets around it: it'll be clickable

And here, again the square brackets will act the same, but this time it's a bit different.
[Markdown site][df1] where the first [] is the visible clickable text, and the second [] contains the link as a variable (will not behave this way if you type the hyperlink itself; only the variable as a reference!)

> This is a 'quote' (not actually, just indented with a bar on the left)
which spans as you wish
but an empty > line is the same as just a line break (interchangeable),
so don't try to space these out too much.
> The last 4 lines will appear as the same 'quote' w/ this one included too

> But will introduce another 'quote' section.
> with this one tied to it (so no need for multiple > signs if it's all one)

Now:
- [AngularJS] - This is like the name example
- [Ace Editor] - bc this points to a link (urls found at end)
- [Breakdance](https://breakdance.github.io/breakdance/) - And this is how inline is done
Line breaks work here, so this rn is part of the last bullet, but
these appear on two new lines below the first line that has the bullet itself

Here are some examples of lines of commands (with _cd_ (italics) being highlighted by default bc of the 'sh' part to start this section):
```sh
cd directory
npm i
npm run start
```

Making a table is easy!
Just use a: (line spacing pre-determined here)
## Table Title
| Header title 1 | Header title 2 |
| ------ | ------ |
| These will grow as needed | [displayedtext 1][PlDb] |
| And the hyphens at the top | [displayedtext 2][PlGh] |
| have to be at least | [dir/here/isa.file][PlGd] |
| one hyphen long | [displayedtext 3][PlLi] |
And thats a whole table! Spacing between above column marking chars is for reading comfort only, but are needed.
#### Sub section heading
## Vs Regular heading

Just a pro-tip: ('sh' used again to add some colour, otherwise the text is just all rendered black, even if keywords are used, like command [blue])
```sh
command with -flag <input>/dir:${package.json.version} .

```
Consoles are line break sensitive (you can have blank lines, as above)
The aforementioned package.json file can be referenced here (the styling that is) by doing something like this: `${package.json.version}` which will make it stand out a little bit more than the rest of this text.

> Note: `something=important` can also be shown like this.

Love,
KevM

[//]: # (Rendered, non-displayed section, which we reference earlier.
Without http\(s\) part, you will make a relative call \(the current domain + '/google.com'\) which will usually be wrong because you'll be on Github.
If the README is hosted elsewhere, this is where you'd see the Cannot GET / error.
You'll also notice that any use of another closing parenthesis will mess up this comment block and make it render after all, which is why I used a backwards slash to make sure they do not render as special elements.
As you can tell, line breaks are no big deal here, so you for your convenience.)

   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [Ace Editor]: <http://ace.ajax.org>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   
   [PlDb]: <http://dropbox.com>
   [PlGh]: <https://github.com>
   [PlGd]: <https://www.goodday.com>
   [PlLi]: <http://linkedin.com>
   