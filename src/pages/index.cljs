(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  [elem-lib.core :refer-macros [elem]]))

(h/html
 (h/body
  (h/div
   "Super simple pattern library")
  (elem-lib.core/elem
   "Simple div"
   "This is just a div produced by hoplon"
   h/div
   [["No args"]
    ["Hello world!" "Hello world!"]
    ["A cell" (j/cell "A cell")]
    ["Attributes and content" :class "some-class" "Hi!"]])))
