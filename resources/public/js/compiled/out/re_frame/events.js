// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__48380_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__48380_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___48381 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___48381)){
var not_i_48382 = temp__4657__auto___48381;
if(cljs.core.fn_QMARK_.call(null,not_i_48382)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_48382);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_48382);
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
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_48383 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_48384 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29017__auto___48397 = re_frame.interop.now.call(null);
var duration__29018__auto___48398 = (end__29017__auto___48397 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__48385_48399 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48386_48400 = null;
var count__48387_48401 = (0);
var i__48388_48402 = (0);
while(true){
if((i__48388_48402 < count__48387_48401)){
var vec__48389_48403 = cljs.core._nth.call(null,chunk__48386_48400,i__48388_48402);
var k__29019__auto___48404 = cljs.core.nth.call(null,vec__48389_48403,(0),null);
var cb__29020__auto___48405 = cljs.core.nth.call(null,vec__48389_48403,(1),null);
try{cb__29020__auto___48405.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29018__auto___48398,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48392){if((e48392 instanceof java.lang.Exception)){
var e__29021__auto___48406 = e48392;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29019__auto___48404,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29021__auto___48406);
} else {
throw e48392;

}
}
var G__48407 = seq__48385_48399;
var G__48408 = chunk__48386_48400;
var G__48409 = count__48387_48401;
var G__48410 = (i__48388_48402 + (1));
seq__48385_48399 = G__48407;
chunk__48386_48400 = G__48408;
count__48387_48401 = G__48409;
i__48388_48402 = G__48410;
continue;
} else {
var temp__4657__auto___48411 = cljs.core.seq.call(null,seq__48385_48399);
if(temp__4657__auto___48411){
var seq__48385_48412__$1 = temp__4657__auto___48411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48385_48412__$1)){
var c__28034__auto___48413 = cljs.core.chunk_first.call(null,seq__48385_48412__$1);
var G__48414 = cljs.core.chunk_rest.call(null,seq__48385_48412__$1);
var G__48415 = c__28034__auto___48413;
var G__48416 = cljs.core.count.call(null,c__28034__auto___48413);
var G__48417 = (0);
seq__48385_48399 = G__48414;
chunk__48386_48400 = G__48415;
count__48387_48401 = G__48416;
i__48388_48402 = G__48417;
continue;
} else {
var vec__48393_48418 = cljs.core.first.call(null,seq__48385_48412__$1);
var k__29019__auto___48419 = cljs.core.nth.call(null,vec__48393_48418,(0),null);
var cb__29020__auto___48420 = cljs.core.nth.call(null,vec__48393_48418,(1),null);
try{cb__29020__auto___48420.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29018__auto___48398,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e48396){if((e48396 instanceof java.lang.Exception)){
var e__29021__auto___48421 = e48396;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29019__auto___48419,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29021__auto___48421);
} else {
throw e48396;

}
}
var G__48422 = cljs.core.next.call(null,seq__48385_48412__$1);
var G__48423 = null;
var G__48424 = (0);
var G__48425 = (0);
seq__48385_48399 = G__48422;
chunk__48386_48400 = G__48423;
count__48387_48401 = G__48424;
i__48388_48402 = G__48425;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_48384;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_48383;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1513978696087
