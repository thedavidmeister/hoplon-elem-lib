# hoplon-elem-lib

Tiny element library (20 LOC!) for Hoplon.

Features:

- Shows current state of args to the element
- Code syntax highlighting
- Cell-backed dynamic elements (and code blocks)
- Just a fn™

## Installation

[![Clojars Project](https://img.shields.io/clojars/v/thedavidmeister/hoplon-elem-lib.svg)](https://clojars.org/thedavidmeister/hoplon-elem-lib)

`[thedavidmeister/hoplon-elem-lib "0.1.0"]`

```clojure
(:require
  elem-lib.hoplon
  syntax-highlighter.hoplon)
```

## Usage

0. Include the stylesheet for syntax highlighting somewhere in the page `syntax-highlighter.hoplon/stylesheet`
0. Call `elem-lib.hoplon/elem` with meta info, a reference to the el fn and some examples.

The syntax highlighter has its own ns because I might want to split it into its own project in the future without renaming everything. The stylesheet fn takes an optional argument for a theme. The theme can be anything documented at https://highlightjs.org/static/demo/ in kebab-case, default is `solarized-light`.

MVP setup (almost exactly the demo site):

```clojure
(html
  (head
    (syntax-highlighter.hoplon/stylesheet)
  (body
    (elem-lib.hoplon/elem
      "My element" ; title
      "Shows user random cat gifs on mousedown" ; description
      #'my.ns/many-cat-gifs ; the reference to the el fn (don't forget #' at the start!)
      [["No args"] ; list of examples, each example is [description & args]
       ["One cat" 1]
       ["Ten cats" 10]
       ["5 pouncing" 5 :pouncing true]])
```

## Examples

Checkout the github pages example:

https://thedavidmeister.github.io/hoplon-elem-lib/

The demo showcases the following example code:

```clojure
(elem-lib.hoplon/elem
 "Simple div"
 "This is just a div produced by hoplon"
 #'h/div
 [["No args"]
  ["Hello world!" "Hello world!"]
  ["A cell" (j/cell "A cell")]
  ["Attributes and content" :class "some-class" "Hi!"]
  ["A counter" (j/with-let [c (j/cell 0)]
                (h/with-interval 1000 (swap! c inc)))]])))
```

In case you don't want to look at the demo for some reason, the elements look like this:

![gif of an element](http://g.recordit.co/gDrwWLKvZs.gif)

### Javelin cells

Functions that return javelin cells can also be used as elems in the lib. The
value of the Javelin cell will be dynamically updated and syntax highlighted.

```clojure
(defn halving-cell
 [c]
 (j/cell= (* 0.5 c)))

(elem-lib.hoplon/elem
 "A javelin cell"
 "Cell fns can also be directly referenced by the lib."
 #'my.ns/halving-cell
 [["Halving counter" (j/with-let [c (j/cell 0)]
                      (h/with-interval 1000 (swap! c inc)))]])
```
