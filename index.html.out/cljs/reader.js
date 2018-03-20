// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__18432 = b.append("0");
b = G__18432;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__8262__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__8262__auto__)){
var or__8274__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__8262__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__18433 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(10),null);
var v = vec__18433;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__8274__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__18436 = months__$1;
var G__18437 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__18436,G__18437) : cljs.reader.days_in_month.call(null,G__18436,G__18437));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5533__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5533__auto__)){
var vec__18438 = temp__5533__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18438,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__18441_18463 = cljs.core.seq(form);
var chunk__18442_18464 = null;
var count__18443_18465 = (0);
var i__18444_18466 = (0);
while(true){
if((i__18444_18466 < count__18443_18465)){
var x_18467 = chunk__18442_18464.cljs$core$IIndexed$_nth$arity$2(null,i__18444_18466);
arr.push(x_18467);

var G__18468 = seq__18441_18463;
var G__18469 = chunk__18442_18464;
var G__18470 = count__18443_18465;
var G__18471 = (i__18444_18466 + (1));
seq__18441_18463 = G__18468;
chunk__18442_18464 = G__18469;
count__18443_18465 = G__18470;
i__18444_18466 = G__18471;
continue;
} else {
var temp__5535__auto___18472 = cljs.core.seq(seq__18441_18463);
if(temp__5535__auto___18472){
var seq__18441_18473__$1 = temp__5535__auto___18472;
if(cljs.core.chunked_seq_QMARK_(seq__18441_18473__$1)){
var c__9205__auto___18474 = cljs.core.chunk_first(seq__18441_18473__$1);
var G__18475 = cljs.core.chunk_rest(seq__18441_18473__$1);
var G__18476 = c__9205__auto___18474;
var G__18477 = cljs.core.count(c__9205__auto___18474);
var G__18478 = (0);
seq__18441_18463 = G__18475;
chunk__18442_18464 = G__18476;
count__18443_18465 = G__18477;
i__18444_18466 = G__18478;
continue;
} else {
var x_18479 = cljs.core.first(seq__18441_18473__$1);
arr.push(x_18479);

var G__18480 = cljs.core.next(seq__18441_18473__$1);
var G__18481 = null;
var G__18482 = (0);
var G__18483 = (0);
seq__18441_18463 = G__18480;
chunk__18442_18464 = G__18481;
count__18443_18465 = G__18482;
i__18444_18466 = G__18483;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
var seq__18447_18484 = cljs.core.seq(form);
var chunk__18448_18485 = null;
var count__18449_18486 = (0);
var i__18450_18487 = (0);
while(true){
if((i__18450_18487 < count__18449_18486)){
var vec__18451_18488 = chunk__18448_18485.cljs$core$IIndexed$_nth$arity$2(null,i__18450_18487);
var k_18489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18451_18488,(0),null);
var v_18490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18451_18488,(1),null);
var G__18454_18491 = obj;
var G__18455_18492 = cljs.core.name(k_18489);
var G__18456_18493 = v_18490;
goog.object.set(G__18454_18491,G__18455_18492,G__18456_18493);

var G__18494 = seq__18447_18484;
var G__18495 = chunk__18448_18485;
var G__18496 = count__18449_18486;
var G__18497 = (i__18450_18487 + (1));
seq__18447_18484 = G__18494;
chunk__18448_18485 = G__18495;
count__18449_18486 = G__18496;
i__18450_18487 = G__18497;
continue;
} else {
var temp__5535__auto___18498 = cljs.core.seq(seq__18447_18484);
if(temp__5535__auto___18498){
var seq__18447_18499__$1 = temp__5535__auto___18498;
if(cljs.core.chunked_seq_QMARK_(seq__18447_18499__$1)){
var c__9205__auto___18500 = cljs.core.chunk_first(seq__18447_18499__$1);
var G__18501 = cljs.core.chunk_rest(seq__18447_18499__$1);
var G__18502 = c__9205__auto___18500;
var G__18503 = cljs.core.count(c__9205__auto___18500);
var G__18504 = (0);
seq__18447_18484 = G__18501;
chunk__18448_18485 = G__18502;
count__18449_18486 = G__18503;
i__18450_18487 = G__18504;
continue;
} else {
var vec__18457_18505 = cljs.core.first(seq__18447_18499__$1);
var k_18506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18457_18505,(0),null);
var v_18507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18457_18505,(1),null);
var G__18460_18508 = obj;
var G__18461_18509 = cljs.core.name(k_18506);
var G__18462_18510 = v_18507;
goog.object.set(G__18460_18508,G__18461_18509,G__18462_18510);

var G__18511 = cljs.core.next(seq__18447_18499__$1);
var G__18512 = null;
var G__18513 = (0);
var G__18514 = (0);
seq__18447_18484 = G__18511;
chunk__18448_18485 = G__18512;
count__18449_18486 = G__18513;
i__18450_18487 = G__18514;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$inst,cljs.reader.read_date,cljs.core.cst$sym$uuid,cljs.reader.read_uuid,cljs.core.cst$sym$queue,cljs.reader.read_queue,cljs.core.cst$sym$js,cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__18516 = arguments.length;
switch (G__18516) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__18517,reader){
var map__18518 = p__18517;
var map__18518__$1 = ((((!((map__18518 == null)))?((((map__18518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18518):map__18518);
var opts = map__18518__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18518__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__18518,map__18518__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__18518,map__18518__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__18522 = arguments.length;
switch (G__18522) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
