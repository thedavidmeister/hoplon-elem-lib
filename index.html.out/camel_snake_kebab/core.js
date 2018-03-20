// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19416 = arguments.length;
var i__9554__auto___19417 = (0);
while(true){
if((i__9554__auto___19417 < len__9553__auto___19416)){
args__9560__auto__.push((arguments[i__9554__auto___19417]));

var G__19418 = (i__9554__auto___19417 + (1));
i__9554__auto___19417 = G__19418;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((4) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9561__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq19411){
var G__19412 = cljs.core.first(seq19411);
var seq19411__$1 = cljs.core.next(seq19411);
var G__19413 = cljs.core.first(seq19411__$1);
var seq19411__$2 = cljs.core.next(seq19411__$1);
var G__19414 = cljs.core.first(seq19411__$2);
var seq19411__$3 = cljs.core.next(seq19411__$2);
var G__19415 = cljs.core.first(seq19411__$3);
var seq19411__$4 = cljs.core.next(seq19411__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__19412,G__19413,G__19414,G__19415,seq19411__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19427 = arguments.length;
var i__9554__auto___19428 = (0);
while(true){
if((i__9554__auto___19428 < len__9553__auto___19427)){
args__9560__auto__.push((arguments[i__9554__auto___19428]));

var G__19429 = (i__9554__auto___19428 + (1));
i__9554__auto___19428 = G__19429;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq19419){
var G__19420 = cljs.core.first(seq19419);
var seq19419__$1 = cljs.core.next(seq19419);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__19420,seq19419__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19430 = arguments.length;
var i__9554__auto___19431 = (0);
while(true){
if((i__9554__auto___19431 < len__9553__auto___19430)){
args__9560__auto__.push((arguments[i__9554__auto___19431]));

var G__19432 = (i__9554__auto___19431 + (1));
i__9554__auto___19431 = G__19432;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq19421){
var G__19422 = cljs.core.first(seq19421);
var seq19421__$1 = cljs.core.next(seq19421);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__19422,seq19421__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19433 = arguments.length;
var i__9554__auto___19434 = (0);
while(true){
if((i__9554__auto___19434 < len__9553__auto___19433)){
args__9560__auto__.push((arguments[i__9554__auto___19434]));

var G__19435 = (i__9554__auto___19434 + (1));
i__9554__auto___19434 = G__19435;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq19423){
var G__19424 = cljs.core.first(seq19423);
var seq19423__$1 = cljs.core.next(seq19423);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__19424,seq19423__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19436 = arguments.length;
var i__9554__auto___19437 = (0);
while(true){
if((i__9554__auto___19437 < len__9553__auto___19436)){
args__9560__auto__.push((arguments[i__9554__auto___19437]));

var G__19438 = (i__9554__auto___19437 + (1));
i__9554__auto___19437 = G__19438;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq19425){
var G__19426 = cljs.core.first(seq19425);
var seq19425__$1 = cljs.core.next(seq19425);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__19426,seq19425__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19447 = arguments.length;
var i__9554__auto___19448 = (0);
while(true){
if((i__9554__auto___19448 < len__9553__auto___19447)){
args__9560__auto__.push((arguments[i__9554__auto___19448]));

var G__19449 = (i__9554__auto___19448 + (1));
i__9554__auto___19448 = G__19449;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq19439){
var G__19440 = cljs.core.first(seq19439);
var seq19439__$1 = cljs.core.next(seq19439);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__19440,seq19439__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19450 = arguments.length;
var i__9554__auto___19451 = (0);
while(true){
if((i__9554__auto___19451 < len__9553__auto___19450)){
args__9560__auto__.push((arguments[i__9554__auto___19451]));

var G__19452 = (i__9554__auto___19451 + (1));
i__9554__auto___19451 = G__19452;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq19441){
var G__19442 = cljs.core.first(seq19441);
var seq19441__$1 = cljs.core.next(seq19441);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__19442,seq19441__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19453 = arguments.length;
var i__9554__auto___19454 = (0);
while(true){
if((i__9554__auto___19454 < len__9553__auto___19453)){
args__9560__auto__.push((arguments[i__9554__auto___19454]));

var G__19455 = (i__9554__auto___19454 + (1));
i__9554__auto___19454 = G__19455;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq19443){
var G__19444 = cljs.core.first(seq19443);
var seq19443__$1 = cljs.core.next(seq19443);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__19444,seq19443__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19456 = arguments.length;
var i__9554__auto___19457 = (0);
while(true){
if((i__9554__auto___19457 < len__9553__auto___19456)){
args__9560__auto__.push((arguments[i__9554__auto___19457]));

var G__19458 = (i__9554__auto___19457 + (1));
i__9554__auto___19457 = G__19458;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq19445){
var G__19446 = cljs.core.first(seq19445);
var seq19445__$1 = cljs.core.next(seq19445);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__19446,seq19445__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19467 = arguments.length;
var i__9554__auto___19468 = (0);
while(true){
if((i__9554__auto___19468 < len__9553__auto___19467)){
args__9560__auto__.push((arguments[i__9554__auto___19468]));

var G__19469 = (i__9554__auto___19468 + (1));
i__9554__auto___19468 = G__19469;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq19459){
var G__19460 = cljs.core.first(seq19459);
var seq19459__$1 = cljs.core.next(seq19459);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__19460,seq19459__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19470 = arguments.length;
var i__9554__auto___19471 = (0);
while(true){
if((i__9554__auto___19471 < len__9553__auto___19470)){
args__9560__auto__.push((arguments[i__9554__auto___19471]));

var G__19472 = (i__9554__auto___19471 + (1));
i__9554__auto___19471 = G__19472;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq19461){
var G__19462 = cljs.core.first(seq19461);
var seq19461__$1 = cljs.core.next(seq19461);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__19462,seq19461__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19473 = arguments.length;
var i__9554__auto___19474 = (0);
while(true){
if((i__9554__auto___19474 < len__9553__auto___19473)){
args__9560__auto__.push((arguments[i__9554__auto___19474]));

var G__19475 = (i__9554__auto___19474 + (1));
i__9554__auto___19474 = G__19475;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq19463){
var G__19464 = cljs.core.first(seq19463);
var seq19463__$1 = cljs.core.next(seq19463);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__19464,seq19463__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19476 = arguments.length;
var i__9554__auto___19477 = (0);
while(true){
if((i__9554__auto___19477 < len__9553__auto___19476)){
args__9560__auto__.push((arguments[i__9554__auto___19477]));

var G__19478 = (i__9554__auto___19477 + (1));
i__9554__auto___19477 = G__19478;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq19465){
var G__19466 = cljs.core.first(seq19465);
var seq19465__$1 = cljs.core.next(seq19465);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__19466,seq19465__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19487 = arguments.length;
var i__9554__auto___19488 = (0);
while(true){
if((i__9554__auto___19488 < len__9553__auto___19487)){
args__9560__auto__.push((arguments[i__9554__auto___19488]));

var G__19489 = (i__9554__auto___19488 + (1));
i__9554__auto___19488 = G__19489;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq19479){
var G__19480 = cljs.core.first(seq19479);
var seq19479__$1 = cljs.core.next(seq19479);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__19480,seq19479__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19490 = arguments.length;
var i__9554__auto___19491 = (0);
while(true){
if((i__9554__auto___19491 < len__9553__auto___19490)){
args__9560__auto__.push((arguments[i__9554__auto___19491]));

var G__19492 = (i__9554__auto___19491 + (1));
i__9554__auto___19491 = G__19492;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq19481){
var G__19482 = cljs.core.first(seq19481);
var seq19481__$1 = cljs.core.next(seq19481);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__19482,seq19481__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19493 = arguments.length;
var i__9554__auto___19494 = (0);
while(true){
if((i__9554__auto___19494 < len__9553__auto___19493)){
args__9560__auto__.push((arguments[i__9554__auto___19494]));

var G__19495 = (i__9554__auto___19494 + (1));
i__9554__auto___19494 = G__19495;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq19483){
var G__19484 = cljs.core.first(seq19483);
var seq19483__$1 = cljs.core.next(seq19483);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__19484,seq19483__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19496 = arguments.length;
var i__9554__auto___19497 = (0);
while(true){
if((i__9554__auto___19497 < len__9553__auto___19496)){
args__9560__auto__.push((arguments[i__9554__auto___19497]));

var G__19498 = (i__9554__auto___19497 + (1));
i__9554__auto___19497 = G__19498;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq19485){
var G__19486 = cljs.core.first(seq19485);
var seq19485__$1 = cljs.core.next(seq19485);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__19486,seq19485__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19507 = arguments.length;
var i__9554__auto___19508 = (0);
while(true){
if((i__9554__auto___19508 < len__9553__auto___19507)){
args__9560__auto__.push((arguments[i__9554__auto___19508]));

var G__19509 = (i__9554__auto___19508 + (1));
i__9554__auto___19508 = G__19509;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq19499){
var G__19500 = cljs.core.first(seq19499);
var seq19499__$1 = cljs.core.next(seq19499);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__19500,seq19499__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19510 = arguments.length;
var i__9554__auto___19511 = (0);
while(true){
if((i__9554__auto___19511 < len__9553__auto___19510)){
args__9560__auto__.push((arguments[i__9554__auto___19511]));

var G__19512 = (i__9554__auto___19511 + (1));
i__9554__auto___19511 = G__19512;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq19501){
var G__19502 = cljs.core.first(seq19501);
var seq19501__$1 = cljs.core.next(seq19501);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__19502,seq19501__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19513 = arguments.length;
var i__9554__auto___19514 = (0);
while(true){
if((i__9554__auto___19514 < len__9553__auto___19513)){
args__9560__auto__.push((arguments[i__9554__auto___19514]));

var G__19515 = (i__9554__auto___19514 + (1));
i__9554__auto___19514 = G__19515;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq19503){
var G__19504 = cljs.core.first(seq19503);
var seq19503__$1 = cljs.core.next(seq19503);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__19504,seq19503__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19516 = arguments.length;
var i__9554__auto___19517 = (0);
while(true){
if((i__9554__auto___19517 < len__9553__auto___19516)){
args__9560__auto__.push((arguments[i__9554__auto___19517]));

var G__19518 = (i__9554__auto___19517 + (1));
i__9554__auto___19517 = G__19518;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq19505){
var G__19506 = cljs.core.first(seq19505);
var seq19505__$1 = cljs.core.next(seq19505);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__19506,seq19505__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19527 = arguments.length;
var i__9554__auto___19528 = (0);
while(true){
if((i__9554__auto___19528 < len__9553__auto___19527)){
args__9560__auto__.push((arguments[i__9554__auto___19528]));

var G__19529 = (i__9554__auto___19528 + (1));
i__9554__auto___19528 = G__19529;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq19519){
var G__19520 = cljs.core.first(seq19519);
var seq19519__$1 = cljs.core.next(seq19519);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__19520,seq19519__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19530 = arguments.length;
var i__9554__auto___19531 = (0);
while(true){
if((i__9554__auto___19531 < len__9553__auto___19530)){
args__9560__auto__.push((arguments[i__9554__auto___19531]));

var G__19532 = (i__9554__auto___19531 + (1));
i__9554__auto___19531 = G__19532;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq19521){
var G__19522 = cljs.core.first(seq19521);
var seq19521__$1 = cljs.core.next(seq19521);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__19522,seq19521__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19533 = arguments.length;
var i__9554__auto___19534 = (0);
while(true){
if((i__9554__auto___19534 < len__9553__auto___19533)){
args__9560__auto__.push((arguments[i__9554__auto___19534]));

var G__19535 = (i__9554__auto___19534 + (1));
i__9554__auto___19534 = G__19535;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq19523){
var G__19524 = cljs.core.first(seq19523);
var seq19523__$1 = cljs.core.next(seq19523);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__19524,seq19523__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19536 = arguments.length;
var i__9554__auto___19537 = (0);
while(true){
if((i__9554__auto___19537 < len__9553__auto___19536)){
args__9560__auto__.push((arguments[i__9554__auto___19537]));

var G__19538 = (i__9554__auto___19537 + (1));
i__9554__auto___19537 = G__19538;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq19525){
var G__19526 = cljs.core.first(seq19525);
var seq19525__$1 = cljs.core.next(seq19525);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__19526,seq19525__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19547 = arguments.length;
var i__9554__auto___19548 = (0);
while(true){
if((i__9554__auto___19548 < len__9553__auto___19547)){
args__9560__auto__.push((arguments[i__9554__auto___19548]));

var G__19549 = (i__9554__auto___19548 + (1));
i__9554__auto___19548 = G__19549;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__19374__auto__,rest__19375__auto__){
var convert_case__19376__auto__ = (function (p1__19373__19377__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__19373__19377__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19375__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__19374__auto__,convert_case__19376__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq19539){
var G__19540 = cljs.core.first(seq19539);
var seq19539__$1 = cljs.core.next(seq19539);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__19540,seq19539__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19550 = arguments.length;
var i__9554__auto___19551 = (0);
while(true){
if((i__9554__auto___19551 < len__9553__auto___19550)){
args__9560__auto__.push((arguments[i__9554__auto___19551]));

var G__19552 = (i__9554__auto___19551 + (1));
i__9554__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq19541){
var G__19542 = cljs.core.first(seq19541);
var seq19541__$1 = cljs.core.next(seq19541);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__19542,seq19541__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19553 = arguments.length;
var i__9554__auto___19554 = (0);
while(true){
if((i__9554__auto___19554 < len__9553__auto___19553)){
args__9560__auto__.push((arguments[i__9554__auto___19554]));

var G__19555 = (i__9554__auto___19554 + (1));
i__9554__auto___19554 = G__19555;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq19543){
var G__19544 = cljs.core.first(seq19543);
var seq19543__$1 = cljs.core.next(seq19543);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__19544,seq19543__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19556 = arguments.length;
var i__9554__auto___19557 = (0);
while(true){
if((i__9554__auto___19557 < len__9553__auto___19556)){
args__9560__auto__.push((arguments[i__9554__auto___19557]));

var G__19558 = (i__9554__auto___19557 + (1));
i__9554__auto___19557 = G__19558;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__19379__auto__,rest__19380__auto__){
if(!((s__19379__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__19379__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__19379__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__19380__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq19545){
var G__19546 = cljs.core.first(seq19545);
var seq19545__$1 = cljs.core.next(seq19545);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__19546,seq19545__$1);
});

