(def project 'thedavidmeister/hoplon-elem-lib)
(def version "0.1.0-SNAPSHOT")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[; scaffolding...
   [org.clojure/clojure "1.10.0-alpha4"]
   [org.clojure/clojurescript "1.9.946"]
   [hoplon "7.3.0-SNAPSHOT"]
   [pandeiro/boot-http "0.8.3"]
   [adzerk/boot-reload "0.5.1"]
   [adzerk/boot-cljs "2.1.4"]
   [tailrecursion/boot-jetty  "0.1.3"]
   [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]
   [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]

   ; everything else...
   [camel-snake-kebab "0.4.0"]
   [cljsjs/highlight "9.12.0-1"]])

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]])

(def compiler-options
 {})

(deftask front-dev
 "Build for local development."
 []
 (comp
  (watch)
  (speak)
  (hoplon)
  (cljs :compiler-options compiler-options)
  (serve :port 8000)))

(deftask build
 []
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)))

(deftask deploy
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))
