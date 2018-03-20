(ns elem-lib.hoplon
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  camel-snake-kebab.core
  syntax-highlighter.hoplon))

(defn elem
 [name desc f examples]
 (h/div
  :class/elem-lib "elem-lib-item"
  :id (camel-snake-kebab.core/->kebab-case-string name)

  (h/h2 name)
  (h/code (str f))
  (h/p desc)
  (h/for-tpl [[d & args] examples]
   (h/div :class/elem-lib "elem-lib-example"
    (h/h3 d)
    (syntax-highlighter.hoplon/with-syntax-highlighter
     (h/code
      :class/elem-lib "clojure"
      (h/for-tpl [arg args]
       (h/div
        (let [arg' @arg]
         (j/formula-of [arg'] (prn-str @arg)))))))))))
