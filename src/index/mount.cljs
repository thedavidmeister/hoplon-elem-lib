(ns ^:dev/once index.mount
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  [hoplon.jquery]
  syntax-highlighter.hoplon
  elem-lib.hoplon))

(defn halving-cell
 [c]
 (j/cell= (* 0.5 c)))

(defn to-element! [el]
 (el
  [
   (syntax-highlighter.hoplon/stylesheet)

   (elem-lib.hoplon/elem
    "Simple div"
    "This is just a div produced by hoplon"
    #'h/div
    [["No args"]
     ["Hello world!" "Hello world!"]
     ["A cell" (j/cell "A cell")]
     ["Attributes and content" :class "some-class" "Hi!"]
     ["A counter" (j/with-let [c (j/cell 0)]
                   (h/with-interval 1000 (swap! c inc)))]])

   (elem-lib.hoplon/elem
    "A javelin cell"
    "Cell fns can also be directly referenced by the lib."
    #'index.mount/halving-cell
    [["Halving counter" (j/with-let [c (j/cell 0)]
                         (h/with-interval 1000 (swap! c inc)))]])]))

(let [mountpoint (atom (h/div))]
 (defn remount! []
  ; clear out hoplon data from mountpoint div
  (h/hl! @mountpoint :hoplon/reset nil)
  ; create a new div for mountpoint
  (reset! mountpoint (h/div))
  ; flush the DOM in the document body
  (set! (.-innerHTML (h/body)) "")
  ; drop the new mountpoint into the body
  (h/html
   [
    (h/head)
    (h/body
     @mountpoint)])
  ; rebuild everything
  (to-element! @mountpoint)))

; hook into shadow cljs
(defn ^:dev/after-load start! []
 (remount!))
(start!)
