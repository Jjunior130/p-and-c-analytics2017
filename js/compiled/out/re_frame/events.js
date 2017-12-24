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
var make_chain = (function (p1__46712_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__46712_SHARP_));
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

var temp__4657__auto___46713 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___46713)){
var not_i_46714 = temp__4657__auto___46713;
if(cljs.core.fn_QMARK_.call(null,not_i_46714)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_46714);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_46714);
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
var _STAR_handling_STAR_46715 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_46716 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33995__auto___46729 = re_frame.interop.now.call(null);
var duration__33996__auto___46730 = (end__33995__auto___46729 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__46717_46731 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__46718_46732 = null;
var count__46719_46733 = (0);
var i__46720_46734 = (0);
while(true){
if((i__46720_46734 < count__46719_46733)){
var vec__46721_46735 = cljs.core._nth.call(null,chunk__46718_46732,i__46720_46734);
var k__33997__auto___46736 = cljs.core.nth.call(null,vec__46721_46735,(0),null);
var cb__33998__auto___46737 = cljs.core.nth.call(null,vec__46721_46735,(1),null);
try{cb__33998__auto___46737.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___46730,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e46724){if((e46724 instanceof java.lang.Exception)){
var e__33999__auto___46738 = e46724;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___46736,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___46738);
} else {
throw e46724;

}
}
var G__46739 = seq__46717_46731;
var G__46740 = chunk__46718_46732;
var G__46741 = count__46719_46733;
var G__46742 = (i__46720_46734 + (1));
seq__46717_46731 = G__46739;
chunk__46718_46732 = G__46740;
count__46719_46733 = G__46741;
i__46720_46734 = G__46742;
continue;
} else {
var temp__4657__auto___46743 = cljs.core.seq.call(null,seq__46717_46731);
if(temp__4657__auto___46743){
var seq__46717_46744__$1 = temp__4657__auto___46743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46717_46744__$1)){
var c__28034__auto___46745 = cljs.core.chunk_first.call(null,seq__46717_46744__$1);
var G__46746 = cljs.core.chunk_rest.call(null,seq__46717_46744__$1);
var G__46747 = c__28034__auto___46745;
var G__46748 = cljs.core.count.call(null,c__28034__auto___46745);
var G__46749 = (0);
seq__46717_46731 = G__46746;
chunk__46718_46732 = G__46747;
count__46719_46733 = G__46748;
i__46720_46734 = G__46749;
continue;
} else {
var vec__46725_46750 = cljs.core.first.call(null,seq__46717_46744__$1);
var k__33997__auto___46751 = cljs.core.nth.call(null,vec__46725_46750,(0),null);
var cb__33998__auto___46752 = cljs.core.nth.call(null,vec__46725_46750,(1),null);
try{cb__33998__auto___46752.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___46730,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e46728){if((e46728 instanceof java.lang.Exception)){
var e__33999__auto___46753 = e46728;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___46751,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___46753);
} else {
throw e46728;

}
}
var G__46754 = cljs.core.next.call(null,seq__46717_46744__$1);
var G__46755 = null;
var G__46756 = (0);
var G__46757 = (0);
seq__46717_46731 = G__46754;
chunk__46718_46732 = G__46755;
count__46719_46733 = G__46756;
i__46720_46734 = G__46757;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_46716;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_46715;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1514003853599
