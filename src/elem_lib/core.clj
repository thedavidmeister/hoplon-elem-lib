(ns elem-lib.core
 (:require
  [hoplon.core :as h]
  camel-snake-kebab.core))

(defmacro elem
 [name desc f examples]
 (list 'h/div
  :class "pattern"
  :id (camel-snake-kebab.core/->kebab-case-string name)

  `(h/h2 ~name)
  `(h/code (str '~f))
  `(h/p ~desc)
  `(map
    (fn [[~'d & ~'args]]
     (h/div :class "card elem-lib-item"
      (h/h3 ~'d)
      (h/code :class "clojure"
       (map
        (fn [~'arg]
         [(prn-str ~'arg) (h/br)])
        ~'args))
      (h/div :class #{"wrap" "clearfix"} (apply ~f ~'args))))
    ~examples)))
