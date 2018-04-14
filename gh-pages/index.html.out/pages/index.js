// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('syntax_highlighter.hoplon');
goog.require('elem_lib.hoplon');
pages.index.halving_cell = (function pages$index$halving_cell(c){
var fexpr__19624 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__19623){
return (0.5 * G__19623);
}));
return (fexpr__19624.cljs$core$IFn$_invoke$arity$1 ? fexpr__19624.cljs$core$IFn$_invoke$arity$1(c) : fexpr__19624.call(null,c));
});
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__19625 = syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__19625) : hoplon.core.head.call(null,G__19625));
})(),(function (){var G__19626 = elem_lib.hoplon.elem("Simple div","This is just a div produced by hoplon",new cljs.core.Var(function(){return hoplon.core.div;},cljs.core.cst$sym$hoplon$core_SLASH_div,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$div,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-elem-lib/rs4/-6x2tjj/index.html.out/hoplon/core.cljs",9,1,543,543,cljs.core.List.EMPTY,null,(cljs.core.truth_(hoplon.core.div)?hoplon.core.div.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No args"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hello world!","Hello world!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A cell",javelin.core.cell.cljs$core$IFn$_invoke$arity$1("A cell")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attributes and content",cljs.core.cst$kw$class,"some-class","Hi!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A counter",(function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var G__19628_19632 = ((function (c){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
});})(c))
;
var G__19629_19633 = (1000);
setInterval(G__19628_19632,G__19629_19633);

return c;
})()], null)], null));
var G__19627 = elem_lib.hoplon.elem("A javelin cell","Cell fns can also be directly referenced by the lib.",new cljs.core.Var(function(){return pages.index.halving_cell;},cljs.core.cst$sym$pages$index_SLASH_halving_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$pages$index,cljs.core.cst$sym$halving_DASH_cell,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-elem-lib/rs4/-ru88jt/pages/index.cljs",19,1,8,8,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c], null)),null,(cljs.core.truth_(pages.index.halving_cell)?pages.index.halving_cell.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Halving counter",(function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var G__19630_19634 = ((function (c,G__19626){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
});})(c,G__19626))
;
var G__19631_19635 = (1000);
setInterval(G__19630_19634,G__19631_19635);

return c;
})()], null)], null));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__19626,G__19627) : hoplon.core.body.call(null,G__19626,G__19627));
})()], 0));
