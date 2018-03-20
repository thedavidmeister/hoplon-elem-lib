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
    (h/for-tpl [arg args]
     (j/with-let [code-block (h/code)]
      (code-block
       :class/elem-lib "clojure"
       (let [arg' @arg]
        (j/formula-of
         [arg']
         (h/with-animation-frame (syntax-highlighter.hoplon/highlight! code-block))
         (pr-str @arg))))))
    (apply @f @args)))))
