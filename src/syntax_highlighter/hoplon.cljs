(ns syntax-highlighter.hoplon
 (:require
  [hoplon.core :as h]
  syntax-highlighter.data
  cljsjs.highlight
  cljsjs.highlight.langs.clojure))

(defn stylesheet
 ([] (stylesheet syntax-highlighter.data/fallback-theme))
 ([theme-name]
  (h/link
   :href (str "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/" theme-name ".min.css")
   :rel "stylesheet"
   :type "text/css")))

(defn with-syntax-highlighter
 [el]
 (h/when-dom el
  (.highlightBlock js/hljs el)))
