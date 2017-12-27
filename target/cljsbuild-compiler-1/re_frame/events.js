// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind) : re_frame.registrar.kinds.call(null,re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__19558_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__19558_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__4657__auto___19559 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___19559)){
var not_i_19560 = temp__4657__auto___19559;
if(cljs.core.fn_QMARK_(not_i_19560)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_19560], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_19560], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_19561 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19562 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14130__auto___19577 = re_frame.interop.now();
var duration__14131__auto___19578 = (end__14130__auto___19577 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19563_19579 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19564_19580 = null;
var count__19565_19581 = (0);
var i__19566_19582 = (0);
while(true){
if((i__19566_19582 < count__19565_19581)){
var vec__19567_19583 = chunk__19564_19580.cljs$core$IIndexed$_nth$arity$2(null,i__19566_19582);
var k__14132__auto___19584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19567_19583,(0),null);
var cb__14133__auto___19585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19567_19583,(1),null);
try{var G__19571_19586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___19578,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___19585.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___19585.cljs$core$IFn$_invoke$arity$1(G__19571_19586) : cb__14133__auto___19585.call(null,G__19571_19586));
}catch (e19570){if((e19570 instanceof java.lang.Exception)){
var e__14134__auto___19587 = e19570;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___19584,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___19587], 0));
} else {
throw e19570;

}
}
var G__19588 = seq__19563_19579;
var G__19589 = chunk__19564_19580;
var G__19590 = count__19565_19581;
var G__19591 = (i__19566_19582 + (1));
seq__19563_19579 = G__19588;
chunk__19564_19580 = G__19589;
count__19565_19581 = G__19590;
i__19566_19582 = G__19591;
continue;
} else {
var temp__4657__auto___19592 = cljs.core.seq(seq__19563_19579);
if(temp__4657__auto___19592){
var seq__19563_19593__$1 = temp__4657__auto___19592;
if(cljs.core.chunked_seq_QMARK_(seq__19563_19593__$1)){
var c__8484__auto___19594 = cljs.core.chunk_first(seq__19563_19593__$1);
var G__19595 = cljs.core.chunk_rest(seq__19563_19593__$1);
var G__19596 = c__8484__auto___19594;
var G__19597 = cljs.core.count(c__8484__auto___19594);
var G__19598 = (0);
seq__19563_19579 = G__19595;
chunk__19564_19580 = G__19596;
count__19565_19581 = G__19597;
i__19566_19582 = G__19598;
continue;
} else {
var vec__19572_19599 = cljs.core.first(seq__19563_19593__$1);
var k__14132__auto___19600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19572_19599,(0),null);
var cb__14133__auto___19601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19572_19599,(1),null);
try{var G__19576_19602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14131__auto___19578,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14133__auto___19601.cljs$core$IFn$_invoke$arity$1 ? cb__14133__auto___19601.cljs$core$IFn$_invoke$arity$1(G__19576_19602) : cb__14133__auto___19601.call(null,G__19576_19602));
}catch (e19575){if((e19575 instanceof java.lang.Exception)){
var e__14134__auto___19603 = e19575;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__14132__auto___19600,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14134__auto___19603], 0));
} else {
throw e19575;

}
}
var G__19604 = cljs.core.next(seq__19563_19593__$1);
var G__19605 = null;
var G__19606 = (0);
var G__19607 = (0);
seq__19563_19579 = G__19604;
chunk__19564_19580 = G__19605;
count__19565_19581 = G__19606;
i__19566_19582 = G__19607;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19562;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_19561;
}}
} else {
return null;
}
});
