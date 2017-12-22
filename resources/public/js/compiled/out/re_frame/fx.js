// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__48500 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48501 = null;
var count__48502 = (0);
var i__48503 = (0);
while(true){
if((i__48503 < count__48502)){
var vec__48504 = cljs.core._nth.call(null,chunk__48501,i__48503);
var effect_key = cljs.core.nth.call(null,vec__48504,(0),null);
var effect_value = cljs.core.nth.call(null,vec__48504,(1),null);
var temp__4655__auto___48510 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___48510)){
var effect_fn_48511 = temp__4655__auto___48510;
effect_fn_48511.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__48512 = seq__48500;
var G__48513 = chunk__48501;
var G__48514 = count__48502;
var G__48515 = (i__48503 + (1));
seq__48500 = G__48512;
chunk__48501 = G__48513;
count__48502 = G__48514;
i__48503 = G__48515;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48500);
if(temp__4657__auto__){
var seq__48500__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48500__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__48500__$1);
var G__48516 = cljs.core.chunk_rest.call(null,seq__48500__$1);
var G__48517 = c__28034__auto__;
var G__48518 = cljs.core.count.call(null,c__28034__auto__);
var G__48519 = (0);
seq__48500 = G__48516;
chunk__48501 = G__48517;
count__48502 = G__48518;
i__48503 = G__48519;
continue;
} else {
var vec__48507 = cljs.core.first.call(null,seq__48500__$1);
var effect_key = cljs.core.nth.call(null,vec__48507,(0),null);
var effect_value = cljs.core.nth.call(null,vec__48507,(1),null);
var temp__4655__auto___48520 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___48520)){
var effect_fn_48521 = temp__4655__auto___48520;
effect_fn_48521.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__48522 = cljs.core.next.call(null,seq__48500__$1);
var G__48523 = null;
var G__48524 = (0);
var G__48525 = (0);
seq__48500 = G__48522;
chunk__48501 = G__48523;
count__48502 = G__48524;
i__48503 = G__48525;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48526 = cljs.core.seq.call(null,value);
var chunk__48527 = null;
var count__48528 = (0);
var i__48529 = (0);
while(true){
if((i__48529 < count__48528)){
var map__48530 = cljs.core._nth.call(null,chunk__48527,i__48529);
var map__48530__$1 = ((((!((map__48530 == null)))?((((map__48530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48530):map__48530);
var effect = map__48530__$1;
var ms = cljs.core.get.call(null,map__48530__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48530__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48526,chunk__48527,count__48528,i__48529,map__48530,map__48530__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__48526,chunk__48527,count__48528,i__48529,map__48530,map__48530__$1,effect,ms,dispatch))
,ms);
}

var G__48534 = seq__48526;
var G__48535 = chunk__48527;
var G__48536 = count__48528;
var G__48537 = (i__48529 + (1));
seq__48526 = G__48534;
chunk__48527 = G__48535;
count__48528 = G__48536;
i__48529 = G__48537;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48526);
if(temp__4657__auto__){
var seq__48526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48526__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__48526__$1);
var G__48538 = cljs.core.chunk_rest.call(null,seq__48526__$1);
var G__48539 = c__28034__auto__;
var G__48540 = cljs.core.count.call(null,c__28034__auto__);
var G__48541 = (0);
seq__48526 = G__48538;
chunk__48527 = G__48539;
count__48528 = G__48540;
i__48529 = G__48541;
continue;
} else {
var map__48532 = cljs.core.first.call(null,seq__48526__$1);
var map__48532__$1 = ((((!((map__48532 == null)))?((((map__48532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48532):map__48532);
var effect = map__48532__$1;
var ms = cljs.core.get.call(null,map__48532__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48532__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48526,chunk__48527,count__48528,i__48529,map__48532,map__48532__$1,effect,ms,dispatch,seq__48526__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__48526,chunk__48527,count__48528,i__48529,map__48532,map__48532__$1,effect,ms,dispatch,seq__48526__$1,temp__4657__auto__))
,ms);
}

var G__48542 = cljs.core.next.call(null,seq__48526__$1);
var G__48543 = null;
var G__48544 = (0);
var G__48545 = (0);
seq__48526 = G__48542;
chunk__48527 = G__48543;
count__48528 = G__48544;
i__48529 = G__48545;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__48546 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__48547 = null;
var count__48548 = (0);
var i__48549 = (0);
while(true){
if((i__48549 < count__48548)){
var event = cljs.core._nth.call(null,chunk__48547,i__48549);
re_frame.router.dispatch.call(null,event);

var G__48550 = seq__48546;
var G__48551 = chunk__48547;
var G__48552 = count__48548;
var G__48553 = (i__48549 + (1));
seq__48546 = G__48550;
chunk__48547 = G__48551;
count__48548 = G__48552;
i__48549 = G__48553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48546);
if(temp__4657__auto__){
var seq__48546__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48546__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__48546__$1);
var G__48554 = cljs.core.chunk_rest.call(null,seq__48546__$1);
var G__48555 = c__28034__auto__;
var G__48556 = cljs.core.count.call(null,c__28034__auto__);
var G__48557 = (0);
seq__48546 = G__48554;
chunk__48547 = G__48555;
count__48548 = G__48556;
i__48549 = G__48557;
continue;
} else {
var event = cljs.core.first.call(null,seq__48546__$1);
re_frame.router.dispatch.call(null,event);

var G__48558 = cljs.core.next.call(null,seq__48546__$1);
var G__48559 = null;
var G__48560 = (0);
var G__48561 = (0);
seq__48546 = G__48558;
chunk__48547 = G__48559;
count__48548 = G__48560;
i__48549 = G__48561;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__48562 = cljs.core.seq.call(null,value);
var chunk__48563 = null;
var count__48564 = (0);
var i__48565 = (0);
while(true){
if((i__48565 < count__48564)){
var event = cljs.core._nth.call(null,chunk__48563,i__48565);
clear_event.call(null,event);

var G__48566 = seq__48562;
var G__48567 = chunk__48563;
var G__48568 = count__48564;
var G__48569 = (i__48565 + (1));
seq__48562 = G__48566;
chunk__48563 = G__48567;
count__48564 = G__48568;
i__48565 = G__48569;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48562);
if(temp__4657__auto__){
var seq__48562__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48562__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__48562__$1);
var G__48570 = cljs.core.chunk_rest.call(null,seq__48562__$1);
var G__48571 = c__28034__auto__;
var G__48572 = cljs.core.count.call(null,c__28034__auto__);
var G__48573 = (0);
seq__48562 = G__48570;
chunk__48563 = G__48571;
count__48564 = G__48572;
i__48565 = G__48573;
continue;
} else {
var event = cljs.core.first.call(null,seq__48562__$1);
clear_event.call(null,event);

var G__48574 = cljs.core.next.call(null,seq__48562__$1);
var G__48575 = null;
var G__48576 = (0);
var G__48577 = (0);
seq__48562 = G__48574;
chunk__48563 = G__48575;
count__48564 = G__48576;
i__48565 = G__48577;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1513978696288
