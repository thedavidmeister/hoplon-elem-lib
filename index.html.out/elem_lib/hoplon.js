// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('elem_lib.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('camel_snake_kebab.core');
goog.require('syntax_highlighter.hoplon');
elem_lib.hoplon.code = (function elem_lib$hoplon$code(code_cell){
var code_block = (hoplon.core.code.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$0() : hoplon.core.code.call(null));
var G__19574_19578 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__19575_19579 = "clojure";
var G__19576_19580 = (function (){var fexpr__19577 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19574_19578,G__19575_19579,code_block){
return (function (code_cell__$1){
window.requestAnimationFrame(((function (G__19574_19578,G__19575_19579,code_block){
return (function (){
return syntax_highlighter.hoplon.highlight_BANG_(code_block);
});})(G__19574_19578,G__19575_19579,code_block))
);

return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code_cell__$1], 0));
});})(G__19574_19578,G__19575_19579,code_block))
);
return (fexpr__19577.cljs$core$IFn$_invoke$arity$1 ? fexpr__19577.cljs$core$IFn$_invoke$arity$1(code_cell) : fexpr__19577.call(null,code_cell));
})();
(code_block.cljs$core$IFn$_invoke$arity$3 ? code_block.cljs$core$IFn$_invoke$arity$3(G__19574_19578,G__19575_19579,G__19576_19580) : code_block.call(null,G__19574_19578,G__19575_19579,G__19576_19580));

return code_block;
});
elem_lib.hoplon.elem = (function elem_lib$hoplon$elem(name,desc,f,examples){
var G__19581 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__19582 = "elem-lib-item";
var G__19583 = cljs.core.cst$kw$id;
var G__19584 = camel_snake_kebab.core.__GT_kebab_case_string(name);
var G__19585 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.h2.call(null,name));
var G__19586 = (function (){var G__19589 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1(G__19589) : hoplon.core.code.call(null,G__19589));
})();
var G__19587 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(desc) : hoplon.core.p.call(null,desc));
var G__19588 = hoplon.core.loop_tpl_STAR_(examples,((function (G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587){
return (function (item__18646__auto__){
var vec__19596 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__19603 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587){
return (function (p__19604){
var vec__19605 = p__19604;
var seq__19606 = cljs.core.seq(vec__19605);
var first__19607 = cljs.core.first(seq__19606);
var seq__19606__$1 = cljs.core.next(seq__19606);
var d = first__19607;
var args = seq__19606__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,d], null);
});})(G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587))
);
return (fexpr__19603.cljs$core$IFn$_invoke$arity$1 ? fexpr__19603.cljs$core$IFn$_invoke$arity$1(item__18646__auto__) : fexpr__19603.call(null,item__18646__auto__));
})());
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19596,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19596,(1),null);
var G__19608 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__19609 = "elem-lib-example";
var G__19610 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1(d) : hoplon.core.h3.call(null,d));
var G__19611 = "Arguments:";
var G__19612 = hoplon.core.loop_tpl_STAR_(args,((function (G__19608,G__19609,G__19610,G__19611,vec__19596,args,d,G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587){
return (function (item__18646__auto____$1){
var vec__19614 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__19617 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19608,G__19609,G__19610,G__19611,vec__19596,args,d,G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587){
return (function (arg){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
});})(G__19608,G__19609,G__19610,G__19611,vec__19596,args,d,G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587))
);
return (fexpr__19617.cljs$core$IFn$_invoke$arity$1 ? fexpr__19617.cljs$core$IFn$_invoke$arity$1(item__18646__auto____$1) : fexpr__19617.call(null,item__18646__auto____$1));
})());
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19614,(0),null);
return elem_lib.hoplon.code(cljs.core.deref(arg));
});})(G__19608,G__19609,G__19610,G__19611,vec__19596,args,d,G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587))
);
var G__19613 = (function (){var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(f),cljs.core.deref(args));
if(cljs.core.truth_(javelin.core.cell_QMARK_(result))){
var G__19618 = "Javelin cell value:";
var G__19619 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__19620 = elem_lib.hoplon.code(result);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__19618,G__19619,G__19620) : hoplon.core.div.call(null,G__19618,G__19619,G__19620));
} else {
return result;
}
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__19608,G__19609,G__19610,G__19611,G__19612,G__19613) : hoplon.core.div.call(null,G__19608,G__19609,G__19610,G__19611,G__19612,G__19613));
});})(G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587,G__19588) : hoplon.core.div.call(null,G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587,G__19588));
});
