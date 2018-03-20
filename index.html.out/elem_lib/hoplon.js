// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('elem_lib.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('camel_snake_kebab.core');
goog.require('syntax_highlighter.hoplon');
elem_lib.hoplon.elem = (function elem_lib$hoplon$elem(name,desc,f,examples){
var G__19574 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__19575 = "elem-lib-item";
var G__19576 = cljs.core.cst$kw$id;
var G__19577 = camel_snake_kebab.core.__GT_kebab_case_string(name);
var G__19578 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.h2.call(null,name));
var G__19579 = (function (){var G__19582 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1(G__19582) : hoplon.core.code.call(null,G__19582));
})();
var G__19580 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(desc) : hoplon.core.p.call(null,desc));
var G__19581 = hoplon.core.loop_tpl_STAR_(examples,((function (G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
return (function (item__18646__auto__){
var vec__19589 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__19596 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
return (function (p__19597){
var vec__19598 = p__19597;
var seq__19599 = cljs.core.seq(vec__19598);
var first__19600 = cljs.core.first(seq__19599);
var seq__19599__$1 = cljs.core.next(seq__19599);
var d = first__19600;
var args = seq__19599__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,d], null);
});})(G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580))
);
return (fexpr__19596.cljs$core$IFn$_invoke$arity$1 ? fexpr__19596.cljs$core$IFn$_invoke$arity$1(item__18646__auto__) : fexpr__19596.call(null,item__18646__auto__));
})());
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19589,(1),null);
var G__19601 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__19602 = "elem-lib-example";
var G__19603 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1(d) : hoplon.core.h3.call(null,d));
var G__19604 = hoplon.core.loop_tpl_STAR_(args,((function (G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
return (function (item__18646__auto____$1){
var vec__19606 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__19609 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
return (function (arg){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
});})(G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580))
);
return (fexpr__19609.cljs$core$IFn$_invoke$arity$1 ? fexpr__19609.cljs$core$IFn$_invoke$arity$1(item__18646__auto____$1) : fexpr__19609.call(null,item__18646__auto____$1));
})());
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19606,(0),null);
var code_block = (hoplon.core.code.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$0() : hoplon.core.code.call(null));
var G__19610_19614 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__19611_19615 = "clojure";
var G__19612_19616 = (function (){var arg_SINGLEQUOTE_ = cljs.core.deref(arg);
var fexpr__19613 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (arg_SINGLEQUOTE_,G__19610_19614,G__19611_19615,code_block,vec__19606,arg,G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
return (function (arg_SINGLEQUOTE___$1){
window.requestAnimationFrame(((function (arg_SINGLEQUOTE_,G__19610_19614,G__19611_19615,code_block,vec__19606,arg,G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
return (function (){
return syntax_highlighter.hoplon.highlight_BANG_(code_block);
});})(arg_SINGLEQUOTE_,G__19610_19614,G__19611_19615,code_block,vec__19606,arg,G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580))
);

return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(arg)], 0));
});})(arg_SINGLEQUOTE_,G__19610_19614,G__19611_19615,code_block,vec__19606,arg,G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580))
);
return (fexpr__19613.cljs$core$IFn$_invoke$arity$1 ? fexpr__19613.cljs$core$IFn$_invoke$arity$1(arg_SINGLEQUOTE_) : fexpr__19613.call(null,arg_SINGLEQUOTE_));
})();
(code_block.cljs$core$IFn$_invoke$arity$3 ? code_block.cljs$core$IFn$_invoke$arity$3(G__19610_19614,G__19611_19615,G__19612_19616) : code_block.call(null,G__19610_19614,G__19611_19615,G__19612_19616));

return code_block;
});})(G__19601,G__19602,G__19603,vec__19589,args,d,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580))
);
var G__19605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(f),cljs.core.deref(args));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__19601,G__19602,G__19603,G__19604,G__19605) : hoplon.core.div.call(null,G__19601,G__19602,G__19603,G__19604,G__19605));
});})(G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580,G__19581) : hoplon.core.div.call(null,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580,G__19581));
});
