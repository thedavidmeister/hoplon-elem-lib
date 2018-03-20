// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19215 = arguments.length;
var i__9554__auto___19216 = (0);
while(true){
if((i__9554__auto___19216 < len__9553__auto___19215)){
args__9560__auto__.push((arguments[i__9554__auto___19216]));

var G__19217 = (i__9554__auto___19216 + (1));
i__9554__auto___19216 = G__19217;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((4) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9561__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__19209){
var map__19210 = p__19209;
var map__19210__$1 = ((((!((map__19210 == null)))?((((map__19210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19210):map__19210);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19210__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__19212 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__19213 = cljs.core.seq(vec__19212);
var first__19214 = cljs.core.first(seq__19213);
var seq__19213__$1 = cljs.core.next(seq__19213);
var first = first__19214;
var rest = seq__19213__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq19204){
var G__19205 = cljs.core.first(seq19204);
var seq19204__$1 = cljs.core.next(seq19204);
var G__19206 = cljs.core.first(seq19204__$1);
var seq19204__$2 = cljs.core.next(seq19204__$1);
var G__19207 = cljs.core.first(seq19204__$2);
var seq19204__$3 = cljs.core.next(seq19204__$2);
var G__19208 = cljs.core.first(seq19204__$3);
var seq19204__$4 = cljs.core.next(seq19204__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__19205,G__19206,G__19207,G__19208,seq19204__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__8274__auto__ = (function (){var G__19219 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__19219) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__19219));
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return clojure.string.capitalize(s);
}
});
