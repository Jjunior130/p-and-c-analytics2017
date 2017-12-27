// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__14182_14192 = cljs.core.seq(cljs.core.deref(re_frame.subs.query__GT_reaction));
var chunk__14183_14193 = null;
var count__14184_14194 = (0);
var i__14185_14195 = (0);
while(true){
if((i__14185_14195 < count__14184_14194)){
var vec__14186_14196 = chunk__14183_14193.cljs$core$IIndexed$_nth$arity$2(null,i__14185_14195);
var k_14197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14186_14196,(0),null);
var rxn_14198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14186_14196,(1),null);
re_frame.interop.dispose_BANG_(rxn_14198);

var G__14199 = seq__14182_14192;
var G__14200 = chunk__14183_14193;
var G__14201 = count__14184_14194;
var G__14202 = (i__14185_14195 + (1));
seq__14182_14192 = G__14199;
chunk__14183_14193 = G__14200;
count__14184_14194 = G__14201;
i__14185_14195 = G__14202;
continue;
} else {
var temp__4657__auto___14203 = cljs.core.seq(seq__14182_14192);
if(temp__4657__auto___14203){
var seq__14182_14204__$1 = temp__4657__auto___14203;
if(cljs.core.chunked_seq_QMARK_(seq__14182_14204__$1)){
var c__8484__auto___14205 = cljs.core.chunk_first(seq__14182_14204__$1);
var G__14206 = cljs.core.chunk_rest(seq__14182_14204__$1);
var G__14207 = c__8484__auto___14205;
var G__14208 = cljs.core.count(c__8484__auto___14205);
var G__14209 = (0);
seq__14182_14192 = G__14206;
chunk__14183_14193 = G__14207;
count__14184_14194 = G__14208;
i__14185_14195 = G__14209;
continue;
} else {
var vec__14189_14210 = cljs.core.first(seq__14182_14204__$1);
var k_14211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189_14210,(0),null);
var rxn_14212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189_14210,(1),null);
re_frame.interop.dispose_BANG_(rxn_14212);

var G__14213 = cljs.core.next(seq__14182_14204__$1);
var G__14214 = null;
var G__14215 = (0);
var G__14216 = (0);
seq__14182_14192 = G__14213;
chunk__14183_14193 = G__14214;
count__14184_14194 = G__14215;
i__14185_14195 = G__14216;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14217 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14130__auto___14232 = re_frame.interop.now();
var duration__14131__auto___14233 = (end__14130__auto___14232 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14218_14234 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14219_14235 = null;
var count__14220_14236 = (0);
var i__14221_14237 = (0);
while(true){
if((i__14221_14237 < count__14220_14236)){
var vec__14222_14238 = chunk__14219_14235.cljs$core$IIndexed$_nth$arity$2(null,i__14221_14237);
var k__14132__auto___14239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222_14238,(0),null);
var cb__14133__auto___14240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222_14238,(1),null);
try{var G__14226_14241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14233,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14240.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14240.cljs$core$IFn$_invoke$arity$1(G__14226_14241) : cb__14133__auto___14240.call(null,G__14226_14241));
}catch (e14225){if((e14225 instanceof java.lang.Exception)){
var e__14134__auto___14242 = e14225;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14239,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14242], 0));
} else {
throw e14225;

}
}
var G__14243 = seq__14218_14234;
var G__14244 = chunk__14219_14235;
var G__14245 = count__14220_14236;
var G__14246 = (i__14221_14237 + (1));
seq__14218_14234 = G__14243;
chunk__14219_14235 = G__14244;
count__14220_14236 = G__14245;
i__14221_14237 = G__14246;
continue;
} else {
var temp__4657__auto___14247 = cljs.core.seq(seq__14218_14234);
if(temp__4657__auto___14247){
var seq__14218_14248__$1 = temp__4657__auto___14247;
if(cljs.core.chunked_seq_QMARK_(seq__14218_14248__$1)){
var c__8484__auto___14249 = cljs.core.chunk_first(seq__14218_14248__$1);
var G__14250 = cljs.core.chunk_rest(seq__14218_14248__$1);
var G__14251 = c__8484__auto___14249;
var G__14252 = cljs.core.count(c__8484__auto___14249);
var G__14253 = (0);
seq__14218_14234 = G__14250;
chunk__14219_14235 = G__14251;
count__14220_14236 = G__14252;
i__14221_14237 = G__14253;
continue;
} else {
var vec__14227_14254 = cljs.core.first(seq__14218_14248__$1);
var k__14132__auto___14255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227_14254,(0),null);
var cb__14133__auto___14256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227_14254,(1),null);
try{var G__14231_14257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14233,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14256.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14256.cljs$core$IFn$_invoke$arity$1(G__14231_14257) : cb__14133__auto___14256.call(null,G__14231_14257));
}catch (e14230){if((e14230 instanceof java.lang.Exception)){
var e__14134__auto___14258 = e14230;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14255,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14258], 0));
} else {
throw e14230;

}
}
var G__14259 = cljs.core.next(seq__14218_14248__$1);
var G__14260 = null;
var G__14261 = (0);
var G__14262 = (0);
seq__14218_14234 = G__14259;
chunk__14219_14235 = G__14260;
count__14220_14236 = G__14261;
i__14221_14237 = G__14262;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14217;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14263 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14263;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__14265 = arguments.length;
switch (G__14265) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__14268 = arguments.length;
switch (G__14268) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14269 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14306 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14306;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14307 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14307;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14308 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14308;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14130__auto___14309 = re_frame.interop.now();
var duration__14131__auto___14310 = (end__14130__auto___14309 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14270_14311 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14271_14312 = null;
var count__14272_14313 = (0);
var i__14273_14314 = (0);
while(true){
if((i__14273_14314 < count__14272_14313)){
var vec__14274_14315 = chunk__14271_14312.cljs$core$IIndexed$_nth$arity$2(null,i__14273_14314);
var k__14132__auto___14316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274_14315,(0),null);
var cb__14133__auto___14317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274_14315,(1),null);
try{var G__14278_14318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14310,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14317.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14317.cljs$core$IFn$_invoke$arity$1(G__14278_14318) : cb__14133__auto___14317.call(null,G__14278_14318));
}catch (e14277){if((e14277 instanceof java.lang.Exception)){
var e__14134__auto___14319 = e14277;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14316,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14319], 0));
} else {
throw e14277;

}
}
var G__14320 = seq__14270_14311;
var G__14321 = chunk__14271_14312;
var G__14322 = count__14272_14313;
var G__14323 = (i__14273_14314 + (1));
seq__14270_14311 = G__14320;
chunk__14271_14312 = G__14321;
count__14272_14313 = G__14322;
i__14273_14314 = G__14323;
continue;
} else {
var temp__4657__auto___14324 = cljs.core.seq(seq__14270_14311);
if(temp__4657__auto___14324){
var seq__14270_14325__$1 = temp__4657__auto___14324;
if(cljs.core.chunked_seq_QMARK_(seq__14270_14325__$1)){
var c__8484__auto___14326 = cljs.core.chunk_first(seq__14270_14325__$1);
var G__14327 = cljs.core.chunk_rest(seq__14270_14325__$1);
var G__14328 = c__8484__auto___14326;
var G__14329 = cljs.core.count(c__8484__auto___14326);
var G__14330 = (0);
seq__14270_14311 = G__14327;
chunk__14271_14312 = G__14328;
count__14272_14313 = G__14329;
i__14273_14314 = G__14330;
continue;
} else {
var vec__14279_14331 = cljs.core.first(seq__14270_14325__$1);
var k__14132__auto___14332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279_14331,(0),null);
var cb__14133__auto___14333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14279_14331,(1),null);
try{var G__14283_14334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14310,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14333.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14333.cljs$core$IFn$_invoke$arity$1(G__14283_14334) : cb__14133__auto___14333.call(null,G__14283_14334));
}catch (e14282){if((e14282 instanceof java.lang.Exception)){
var e__14134__auto___14335 = e14282;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14332,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14335], 0));
} else {
throw e14282;

}
}
var G__14336 = cljs.core.next(seq__14270_14325__$1);
var G__14337 = null;
var G__14338 = (0);
var G__14339 = (0);
seq__14270_14311 = G__14336;
chunk__14271_14312 = G__14337;
count__14272_14313 = G__14338;
i__14273_14314 = G__14339;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14269;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14340 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14340;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14341;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14342 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14342;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14284 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14343 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14343;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14344 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14344;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14345 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14345)){
var not_reactive_14346 = temp__4657__auto___14345;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14346], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14347 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14347;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14284){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14284))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14284){
return (function (){
var G__14299 = re_frame.db.app_db;
var G__14300 = query;
var G__14301 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14299,G__14300,G__14301) : handler_fn.call(null,G__14299,G__14300,G__14301));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14284))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14284){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14284))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14130__auto___14348 = re_frame.interop.now();
var duration__14131__auto___14349 = (end__14130__auto___14348 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14285_14350 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14286_14351 = null;
var count__14287_14352 = (0);
var i__14288_14353 = (0);
while(true){
if((i__14288_14353 < count__14287_14352)){
var vec__14289_14354 = chunk__14286_14351.cljs$core$IIndexed$_nth$arity$2(null,i__14288_14353);
var k__14132__auto___14355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14289_14354,(0),null);
var cb__14133__auto___14356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14289_14354,(1),null);
try{var G__14293_14357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14349,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14356.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14356.cljs$core$IFn$_invoke$arity$1(G__14293_14357) : cb__14133__auto___14356.call(null,G__14293_14357));
}catch (e14292){if((e14292 instanceof java.lang.Exception)){
var e__14134__auto___14358 = e14292;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14355,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14358], 0));
} else {
throw e14292;

}
}
var G__14359 = seq__14285_14350;
var G__14360 = chunk__14286_14351;
var G__14361 = count__14287_14352;
var G__14362 = (i__14288_14353 + (1));
seq__14285_14350 = G__14359;
chunk__14286_14351 = G__14360;
count__14287_14352 = G__14361;
i__14288_14353 = G__14362;
continue;
} else {
var temp__4657__auto___14363 = cljs.core.seq(seq__14285_14350);
if(temp__4657__auto___14363){
var seq__14285_14364__$1 = temp__4657__auto___14363;
if(cljs.core.chunked_seq_QMARK_(seq__14285_14364__$1)){
var c__8484__auto___14365 = cljs.core.chunk_first(seq__14285_14364__$1);
var G__14366 = cljs.core.chunk_rest(seq__14285_14364__$1);
var G__14367 = c__8484__auto___14365;
var G__14368 = cljs.core.count(c__8484__auto___14365);
var G__14369 = (0);
seq__14285_14350 = G__14366;
chunk__14286_14351 = G__14367;
count__14287_14352 = G__14368;
i__14288_14353 = G__14369;
continue;
} else {
var vec__14294_14370 = cljs.core.first(seq__14285_14364__$1);
var k__14132__auto___14371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14294_14370,(0),null);
var cb__14133__auto___14372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14294_14370,(1),null);
try{var G__14298_14373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14349,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14372.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14372.cljs$core$IFn$_invoke$arity$1(G__14298_14373) : cb__14133__auto___14372.call(null,G__14298_14373));
}catch (e14297){if((e14297 instanceof java.lang.Exception)){
var e__14134__auto___14374 = e14297;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14371,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14374], 0));
} else {
throw e14297;

}
}
var G__14375 = cljs.core.next(seq__14285_14364__$1);
var G__14376 = null;
var G__14377 = (0);
var G__14378 = (0);
seq__14285_14350 = G__14375;
chunk__14286_14351 = G__14376;
count__14287_14352 = G__14377;
i__14288_14353 = G__14378;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14284;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14379 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14379;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14380 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14380;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14381 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14381)){
var not_reactive_14382 = temp__4657__auto___14381;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14382], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14383 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14383;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__14302 = re_frame.db.app_db;
var G__14303 = query;
var G__14304 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__14302,G__14303,G__14304) : handler_fn.call(null,G__14302,G__14303,G__14304));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__14384){
var vec__14385 = p__14384;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14388 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14388;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__8821__auto__ = [];
var len__8814__auto___14435 = arguments.length;
var i__8815__auto___14436 = (0);
while(true){
if((i__8815__auto___14436 < len__8814__auto___14435)){
args__8821__auto__.push((arguments[i__8815__auto___14436]));

var G__14437 = (i__8815__auto___14436 + (1));
i__8815__auto___14436 = G__14437;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__14391 = cljs.core.count(input_args);
switch (G__14391) {
case (0):
return ((function (G__14391,computation_fn,input_args,err_header){
return (function() {
var G__14439 = null;
var G__14439__1 = (function (_){
return re_frame.db.app_db;
});
var G__14439__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__14439 = function(_,___$1){
switch(arguments.length){
case 1:
return G__14439__1.call(this,_);
case 2:
return G__14439__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14439.cljs$core$IFn$_invoke$arity$1 = G__14439__1;
G__14439.cljs$core$IFn$_invoke$arity$2 = G__14439__2;
return G__14439;
})()
;})(G__14391,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__14392 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14392,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14392,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT__DASH_,marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__14392,marker,vec,G__14391,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__14392,marker,vec,G__14391,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_LT__DASH_,null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__14391,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__14391,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14395 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__14410 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__14411 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__14410,G__14411) : computation_fn.call(null,G__14410,G__14411));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14440 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14440;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14130__auto___14441 = re_frame.interop.now();
var duration__14131__auto___14442 = (end__14130__auto___14441 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14396_14443 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14397_14444 = null;
var count__14398_14445 = (0);
var i__14399_14446 = (0);
while(true){
if((i__14399_14446 < count__14398_14445)){
var vec__14400_14447 = chunk__14397_14444.cljs$core$IIndexed$_nth$arity$2(null,i__14399_14446);
var k__14132__auto___14448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400_14447,(0),null);
var cb__14133__auto___14449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14400_14447,(1),null);
try{var G__14404_14450 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14442,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14449.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14449.cljs$core$IFn$_invoke$arity$1(G__14404_14450) : cb__14133__auto___14449.call(null,G__14404_14450));
}catch (e14403){if((e14403 instanceof java.lang.Exception)){
var e__14134__auto___14451 = e14403;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14448,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14451], 0));
} else {
throw e14403;

}
}
var G__14452 = seq__14396_14443;
var G__14453 = chunk__14397_14444;
var G__14454 = count__14398_14445;
var G__14455 = (i__14399_14446 + (1));
seq__14396_14443 = G__14452;
chunk__14397_14444 = G__14453;
count__14398_14445 = G__14454;
i__14399_14446 = G__14455;
continue;
} else {
var temp__4657__auto___14456 = cljs.core.seq(seq__14396_14443);
if(temp__4657__auto___14456){
var seq__14396_14457__$1 = temp__4657__auto___14456;
if(cljs.core.chunked_seq_QMARK_(seq__14396_14457__$1)){
var c__8484__auto___14458 = cljs.core.chunk_first(seq__14396_14457__$1);
var G__14459 = cljs.core.chunk_rest(seq__14396_14457__$1);
var G__14460 = c__8484__auto___14458;
var G__14461 = cljs.core.count(c__8484__auto___14458);
var G__14462 = (0);
seq__14396_14443 = G__14459;
chunk__14397_14444 = G__14460;
count__14398_14445 = G__14461;
i__14399_14446 = G__14462;
continue;
} else {
var vec__14405_14463 = cljs.core.first(seq__14396_14457__$1);
var k__14132__auto___14464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14405_14463,(0),null);
var cb__14133__auto___14465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14405_14463,(1),null);
try{var G__14409_14466 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14442,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14465.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14465.cljs$core$IFn$_invoke$arity$1(G__14409_14466) : cb__14133__auto___14465.call(null,G__14409_14466));
}catch (e14408){if((e14408 instanceof java.lang.Exception)){
var e__14134__auto___14467 = e14408;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14464,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14467], 0));
} else {
throw e14408;

}
}
var G__14468 = cljs.core.next(seq__14396_14457__$1);
var G__14469 = null;
var G__14470 = (0);
var G__14471 = (0);
seq__14396_14443 = G__14468;
chunk__14397_14444 = G__14469;
count__14398_14445 = G__14470;
i__14399_14446 = G__14471;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14395;
}} else {
var subscription = (function (){var G__14412 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__14413 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__14412,G__14413) : computation_fn.call(null,G__14412,G__14413));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14472 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14472;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14414 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__14429 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__14430 = query_vec;
var G__14431 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__14429,G__14430,G__14431) : computation_fn.call(null,G__14429,G__14430,G__14431));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14473 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14473;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14130__auto___14474 = re_frame.interop.now();
var duration__14131__auto___14475 = (end__14130__auto___14474 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14415_14476 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14416_14477 = null;
var count__14417_14478 = (0);
var i__14418_14479 = (0);
while(true){
if((i__14418_14479 < count__14417_14478)){
var vec__14419_14480 = chunk__14416_14477.cljs$core$IIndexed$_nth$arity$2(null,i__14418_14479);
var k__14132__auto___14481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14419_14480,(0),null);
var cb__14133__auto___14482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14419_14480,(1),null);
try{var G__14423_14483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14475,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14482.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14482.cljs$core$IFn$_invoke$arity$1(G__14423_14483) : cb__14133__auto___14482.call(null,G__14423_14483));
}catch (e14422){if((e14422 instanceof java.lang.Exception)){
var e__14134__auto___14484 = e14422;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14481,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14484], 0));
} else {
throw e14422;

}
}
var G__14485 = seq__14415_14476;
var G__14486 = chunk__14416_14477;
var G__14487 = count__14417_14478;
var G__14488 = (i__14418_14479 + (1));
seq__14415_14476 = G__14485;
chunk__14416_14477 = G__14486;
count__14417_14478 = G__14487;
i__14418_14479 = G__14488;
continue;
} else {
var temp__4657__auto___14489 = cljs.core.seq(seq__14415_14476);
if(temp__4657__auto___14489){
var seq__14415_14490__$1 = temp__4657__auto___14489;
if(cljs.core.chunked_seq_QMARK_(seq__14415_14490__$1)){
var c__8484__auto___14491 = cljs.core.chunk_first(seq__14415_14490__$1);
var G__14492 = cljs.core.chunk_rest(seq__14415_14490__$1);
var G__14493 = c__8484__auto___14491;
var G__14494 = cljs.core.count(c__8484__auto___14491);
var G__14495 = (0);
seq__14415_14476 = G__14492;
chunk__14416_14477 = G__14493;
count__14417_14478 = G__14494;
i__14418_14479 = G__14495;
continue;
} else {
var vec__14424_14496 = cljs.core.first(seq__14415_14490__$1);
var k__14132__auto___14497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424_14496,(0),null);
var cb__14133__auto___14498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424_14496,(1),null);
try{var G__14428_14499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___14475,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___14498.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___14498.cljs$core$IFn$_invoke$arity$1(G__14428_14499) : cb__14133__auto___14498.call(null,G__14428_14499));
}catch (e14427){if((e14427 instanceof java.lang.Exception)){
var e__14134__auto___14500 = e14427;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___14497,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___14500], 0));
} else {
throw e14427;

}
}
var G__14501 = cljs.core.next(seq__14415_14490__$1);
var G__14502 = null;
var G__14503 = (0);
var G__14504 = (0);
seq__14415_14476 = G__14501;
chunk__14416_14477 = G__14502;
count__14417_14478 = G__14503;
i__14418_14479 = G__14504;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14414;
}} else {
var subscription = (function (){var G__14432 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__14433 = query_vec;
var G__14434 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__14432,G__14433,G__14434) : computation_fn.call(null,G__14432,G__14433,G__14434));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14135__auto___14505 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14135__auto___14505;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq14389){
var G__14390 = cljs.core.first(seq14389);
var seq14389__$1 = cljs.core.next(seq14389);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__14390,seq14389__$1);
});

