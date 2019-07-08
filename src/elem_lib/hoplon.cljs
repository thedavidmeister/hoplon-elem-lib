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
    "Arguments:"
    (h/for-tpl [arg args]
     (syntax-highlighter.hoplon/code @arg))
    (let [result (apply @f @args)]
     (if (j/cell? result)
      (h/div
       "Javelin cell value:" (h/br)
       (syntax-highlighter.hoplon/code result))
      result))))))
