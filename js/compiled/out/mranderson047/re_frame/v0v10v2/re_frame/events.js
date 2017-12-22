// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson047$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__58312_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__58312_SHARP_));
});
if(!(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___58313 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___58313)){
var not_i_58314 = temp__4657__auto___58313;
if(cljs.core.fn_QMARK_.call(null,not_i_58314)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_58314);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_58314);
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
mranderson047.re_frame.v0v10v2.re_frame.events.register = (function mranderson047$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind,id,mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.handle = (function mranderson047$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_58315 = mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58316 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson047.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41548__auto___58329 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41549__auto___58330 = (end__41548__auto___58329 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__58317_58331 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__58318_58332 = null;
var count__58319_58333 = (0);
var i__58320_58334 = (0);
while(true){
if((i__58320_58334 < count__58319_58333)){
var vec__58321_58335 = cljs.core._nth.call(null,chunk__58318_58332,i__58320_58334);
var k__41550__auto___58336 = cljs.core.nth.call(null,vec__58321_58335,(0),null);
var cb__41551__auto___58337 = cljs.core.nth.call(null,vec__58321_58335,(1),null);
try{cb__41551__auto___58337.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41549__auto___58330,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e58324){if((e58324 instanceof java.lang.Exception)){
var e__41552__auto___58338 = e58324;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41550__auto___58336,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41552__auto___58338);
} else {
throw e58324;

}
}
var G__58339 = seq__58317_58331;
var G__58340 = chunk__58318_58332;
var G__58341 = count__58319_58333;
var G__58342 = (i__58320_58334 + (1));
seq__58317_58331 = G__58339;
chunk__58318_58332 = G__58340;
count__58319_58333 = G__58341;
i__58320_58334 = G__58342;
continue;
} else {
var temp__4657__auto___58343 = cljs.core.seq.call(null,seq__58317_58331);
if(temp__4657__auto___58343){
var seq__58317_58344__$1 = temp__4657__auto___58343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58317_58344__$1)){
var c__28034__auto___58345 = cljs.core.chunk_first.call(null,seq__58317_58344__$1);
var G__58346 = cljs.core.chunk_rest.call(null,seq__58317_58344__$1);
var G__58347 = c__28034__auto___58345;
var G__58348 = cljs.core.count.call(null,c__28034__auto___58345);
var G__58349 = (0);
seq__58317_58331 = G__58346;
chunk__58318_58332 = G__58347;
count__58319_58333 = G__58348;
i__58320_58334 = G__58349;
continue;
} else {
var vec__58325_58350 = cljs.core.first.call(null,seq__58317_58344__$1);
var k__41550__auto___58351 = cljs.core.nth.call(null,vec__58325_58350,(0),null);
var cb__41551__auto___58352 = cljs.core.nth.call(null,vec__58325_58350,(1),null);
try{cb__41551__auto___58352.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41549__auto___58330,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e58328){if((e58328 instanceof java.lang.Exception)){
var e__41552__auto___58353 = e58328;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41550__auto___58351,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41552__auto___58353);
} else {
throw e58328;

}
}
var G__58354 = cljs.core.next.call(null,seq__58317_58344__$1);
var G__58355 = null;
var G__58356 = (0);
var G__58357 = (0);
seq__58317_58331 = G__58354;
chunk__58318_58332 = G__58355;
count__58319_58333 = G__58356;
i__58320_58334 = G__58357;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58316;
}} else {
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_58315;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1513855138284
