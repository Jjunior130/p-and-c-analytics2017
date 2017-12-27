// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__20034){
var vec__20035 = p__20034;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20035,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__20038 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__20042 = arguments.length;
switch (G__20042) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__7995__auto__ = cljs.core.count(a);
var y__7996__auto__ = cljs.core.count(b);
return ((x__7995__auto__ > y__7996__auto__) ? x__7995__auto__ : y__7996__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__8328__auto__ = (((x == null))?null:x);
var m__8329__auto__ = (clojure.data.equality_partition[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__8329__auto__.call(null,x));
} else {
var m__8329__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__8329__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__8328__auto__ = (((a == null))?null:a);
var m__8329__auto__ = (clojure.data.diff_similar[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__8329__auto__.call(null,a,b));
} else {
var m__8329__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__8329__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__20044_20068 = clojure.data.equality_partition;
var G__20045_20069 = "null";
var G__20046_20070 = ((function (G__20044_20068,G__20045_20069){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20044_20068,G__20045_20069))
;
goog.object.set(G__20044_20068,G__20045_20069,G__20046_20070);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__20047_20071 = clojure.data.equality_partition;
var G__20048_20072 = "string";
var G__20049_20073 = ((function (G__20047_20071,G__20048_20072){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20047_20071,G__20048_20072))
;
goog.object.set(G__20047_20071,G__20048_20072,G__20049_20073);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__20050_20074 = clojure.data.equality_partition;
var G__20051_20075 = "number";
var G__20052_20076 = ((function (G__20050_20074,G__20051_20075){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20050_20074,G__20051_20075))
;
goog.object.set(G__20050_20074,G__20051_20075,G__20052_20076);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__20053_20077 = clojure.data.equality_partition;
var G__20054_20078 = "array";
var G__20055_20079 = ((function (G__20053_20077,G__20054_20078){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__20053_20077,G__20054_20078))
;
goog.object.set(G__20053_20077,G__20054_20078,G__20055_20079);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__20056_20080 = clojure.data.equality_partition;
var G__20057_20081 = "function";
var G__20058_20082 = ((function (G__20056_20080,G__20057_20081){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20056_20080,G__20057_20081))
;
goog.object.set(G__20056_20080,G__20057_20081,G__20058_20082);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__20059_20083 = clojure.data.equality_partition;
var G__20060_20084 = "boolean";
var G__20061_20085 = ((function (G__20059_20083,G__20060_20084){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20059_20083,G__20060_20084))
;
goog.object.set(G__20059_20083,G__20060_20084,G__20061_20085);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__20062_20086 = clojure.data.equality_partition;
var G__20063_20087 = "_";
var G__20064_20088 = ((function (G__20062_20086,G__20063_20087){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__20062_20086,G__20063_20087))
;
goog.object.set(G__20062_20086,G__20063_20087,G__20064_20088);
goog.object.set(clojure.data.Diff,"null",true);

var G__20089_20113 = clojure.data.diff_similar;
var G__20090_20114 = "null";
var G__20091_20115 = ((function (G__20089_20113,G__20090_20114){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20089_20113,G__20090_20114))
;
goog.object.set(G__20089_20113,G__20090_20114,G__20091_20115);

goog.object.set(clojure.data.Diff,"string",true);

var G__20092_20116 = clojure.data.diff_similar;
var G__20093_20117 = "string";
var G__20094_20118 = ((function (G__20092_20116,G__20093_20117){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20092_20116,G__20093_20117))
;
goog.object.set(G__20092_20116,G__20093_20117,G__20094_20118);

goog.object.set(clojure.data.Diff,"number",true);

var G__20095_20119 = clojure.data.diff_similar;
var G__20096_20120 = "number";
var G__20097_20121 = ((function (G__20095_20119,G__20096_20120){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20095_20119,G__20096_20120))
;
goog.object.set(G__20095_20119,G__20096_20120,G__20097_20121);

goog.object.set(clojure.data.Diff,"array",true);

var G__20098_20122 = clojure.data.diff_similar;
var G__20099_20123 = "array";
var G__20100_20124 = ((function (G__20098_20122,G__20099_20123){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__20098_20122,G__20099_20123))
;
goog.object.set(G__20098_20122,G__20099_20123,G__20100_20124);

goog.object.set(clojure.data.Diff,"function",true);

var G__20101_20125 = clojure.data.diff_similar;
var G__20102_20126 = "function";
var G__20103_20127 = ((function (G__20101_20125,G__20102_20126){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20101_20125,G__20102_20126))
;
goog.object.set(G__20101_20125,G__20102_20126,G__20103_20127);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__20104_20128 = clojure.data.diff_similar;
var G__20105_20129 = "boolean";
var G__20106_20130 = ((function (G__20104_20128,G__20105_20129){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20104_20128,G__20105_20129))
;
goog.object.set(G__20104_20128,G__20105_20129,G__20106_20130);

goog.object.set(clojure.data.Diff,"_",true);

var G__20107_20131 = clojure.data.diff_similar;
var G__20108_20132 = "_";
var G__20109_20133 = ((function (G__20107_20131,G__20108_20132){
return (function (a,b){
var fexpr__20111 = (function (){var G__20112 = clojure.data.equality_partition(a);
var G__20112__$1 = (((G__20112 instanceof cljs.core.Keyword))?G__20112.fqn:null);
switch (G__20112__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20112__$1)].join('')));

}
})();
return (fexpr__20111.cljs$core$IFn$_invoke$arity$2 ? fexpr__20111.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__20111.call(null,a,b));
});})(G__20107_20131,G__20108_20132))
;
goog.object.set(G__20107_20131,G__20108_20132,G__20109_20133);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
