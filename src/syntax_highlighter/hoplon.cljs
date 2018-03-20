(ns syntax-highlighter.hoplon
 (:require
  [hoplon.core :as h]
  syntax-highlighter.data
  cljsjs.highlight
  cljsjs.highlight.langs.clojure))

(defn syntax-highlighter
 ([] (syntax-highlighter syntax-highlighter.data/fallback-theme))
 ([theme-name]
  (let [stylesheet (h/link
                    :href (str "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/" theme-name ".min.css")
                    :rel "stylesheet"
                    :type "text/css")]
    (h/when-dom
      stylesheet
      #(doseq [el (-> js/document (.querySelectorAll "code") array-seq)]
        (.highlightBlock js/hljs el)))
    stylesheet)))
