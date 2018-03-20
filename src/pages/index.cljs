(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  syntax-highlighter.hoplon
  elem-lib.hoplon))

(h/html
 (h/head
  (syntax-highlighter.hoplon/stylesheet))
 (h/body
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
