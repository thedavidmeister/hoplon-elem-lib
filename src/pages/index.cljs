(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  syntax-highlighter.hoplon)
 (:require-macros [elem-lib.core :refer [elem]]))

(h/html
 (h/body
  (elem-lib.core/elem
   "Simple div"
   "This is just a div produced by hoplon"
   h/div
   [["No args"]
    ["Hello world!" "Hello world!"]
    ["A cell" (j/cell "A cell")]
    ["Attributes and content" :class "some-class" "Hi!"]])
  (syntax-highlighter.hoplon/syntax-highlighter)))
