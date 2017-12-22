// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__58462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__58463 = null;
var count__58464 = (0);
var i__58465 = (0);
while(true){
if((i__58465 < count__58464)){
var vec__58466 = cljs.core._nth.call(null,chunk__58463,i__58465);
var effect_key = cljs.core.nth.call(null,vec__58466,(0),null);
var effect_value = cljs.core.nth.call(null,vec__58466,(1),null);
var temp__4655__auto___58472 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___58472)){
var effect_fn_58473 = temp__4655__auto___58472;
effect_fn_58473.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__58474 = seq__58462;
var G__58475 = chunk__58463;
var G__58476 = count__58464;
var G__58477 = (i__58465 + (1));
seq__58462 = G__58474;
chunk__58463 = G__58475;
count__58464 = G__58476;
i__58465 = G__58477;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58462);
if(temp__4657__auto__){
var seq__58462__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58462__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__58462__$1);
var G__58478 = cljs.core.chunk_rest.call(null,seq__58462__$1);
var G__58479 = c__28034__auto__;
var G__58480 = cljs.core.count.call(null,c__28034__auto__);
var G__58481 = (0);
seq__58462 = G__58478;
chunk__58463 = G__58479;
count__58464 = G__58480;
i__58465 = G__58481;
continue;
} else {
var vec__58469 = cljs.core.first.call(null,seq__58462__$1);
var effect_key = cljs.core.nth.call(null,vec__58469,(0),null);
var effect_value = cljs.core.nth.call(null,vec__58469,(1),null);
var temp__4655__auto___58482 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___58482)){
var effect_fn_58483 = temp__4655__auto___58482;
effect_fn_58483.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__58484 = cljs.core.next.call(null,seq__58462__$1);
var G__58485 = null;
var G__58486 = (0);
var G__58487 = (0);
seq__58462 = G__58484;
chunk__58463 = G__58485;
count__58464 = G__58486;
i__58465 = G__58487;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__58488 = cljs.core.seq.call(null,value);
var chunk__58489 = null;
var count__58490 = (0);
var i__58491 = (0);
while(true){
if((i__58491 < count__58490)){
var map__58492 = cljs.core._nth.call(null,chunk__58489,i__58491);
var map__58492__$1 = ((((!((map__58492 == null)))?((((map__58492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58492):map__58492);
var effect = map__58492__$1;
var ms = cljs.core.get.call(null,map__58492__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__58492__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__58488,chunk__58489,count__58490,i__58491,map__58492,map__58492__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__58488,chunk__58489,count__58490,i__58491,map__58492,map__58492__$1,effect,ms,dispatch))
,ms);
}

var G__58496 = seq__58488;
var G__58497 = chunk__58489;
var G__58498 = count__58490;
var G__58499 = (i__58491 + (1));
seq__58488 = G__58496;
chunk__58489 = G__58497;
count__58490 = G__58498;
i__58491 = G__58499;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58488);
if(temp__4657__auto__){
var seq__58488__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58488__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__58488__$1);
var G__58500 = cljs.core.chunk_rest.call(null,seq__58488__$1);
var G__58501 = c__28034__auto__;
var G__58502 = cljs.core.count.call(null,c__28034__auto__);
var G__58503 = (0);
seq__58488 = G__58500;
chunk__58489 = G__58501;
count__58490 = G__58502;
i__58491 = G__58503;
continue;
} else {
var map__58494 = cljs.core.first.call(null,seq__58488__$1);
var map__58494__$1 = ((((!((map__58494 == null)))?((((map__58494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58494):map__58494);
var effect = map__58494__$1;
var ms = cljs.core.get.call(null,map__58494__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__58494__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__58488,chunk__58489,count__58490,i__58491,map__58494,map__58494__$1,effect,ms,dispatch,seq__58488__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__58488,chunk__58489,count__58490,i__58491,map__58494,map__58494__$1,effect,ms,dispatch,seq__58488__$1,temp__4657__auto__))
,ms);
}

var G__58504 = cljs.core.next.call(null,seq__58488__$1);
var G__58505 = null;
var G__58506 = (0);
var G__58507 = (0);
seq__58488 = G__58504;
chunk__58489 = G__58505;
count__58490 = G__58506;
i__58491 = G__58507;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__58508 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__58509 = null;
var count__58510 = (0);
var i__58511 = (0);
while(true){
if((i__58511 < count__58510)){
var event = cljs.core._nth.call(null,chunk__58509,i__58511);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__58512 = seq__58508;
var G__58513 = chunk__58509;
var G__58514 = count__58510;
var G__58515 = (i__58511 + (1));
seq__58508 = G__58512;
chunk__58509 = G__58513;
count__58510 = G__58514;
i__58511 = G__58515;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58508);
if(temp__4657__auto__){
var seq__58508__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58508__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__58508__$1);
var G__58516 = cljs.core.chunk_rest.call(null,seq__58508__$1);
var G__58517 = c__28034__auto__;
var G__58518 = cljs.core.count.call(null,c__28034__auto__);
var G__58519 = (0);
seq__58508 = G__58516;
chunk__58509 = G__58517;
count__58510 = G__58518;
i__58511 = G__58519;
continue;
} else {
var event = cljs.core.first.call(null,seq__58508__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__58520 = cljs.core.next.call(null,seq__58508__$1);
var G__58521 = null;
var G__58522 = (0);
var G__58523 = (0);
seq__58508 = G__58520;
chunk__58509 = G__58521;
count__58510 = G__58522;
i__58511 = G__58523;
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__58524 = cljs.core.seq.call(null,value);
var chunk__58525 = null;
var count__58526 = (0);
var i__58527 = (0);
while(true){
if((i__58527 < count__58526)){
var event = cljs.core._nth.call(null,chunk__58525,i__58527);
clear_event.call(null,event);

var G__58528 = seq__58524;
var G__58529 = chunk__58525;
var G__58530 = count__58526;
var G__58531 = (i__58527 + (1));
seq__58524 = G__58528;
chunk__58525 = G__58529;
count__58526 = G__58530;
i__58527 = G__58531;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58524);
if(temp__4657__auto__){
var seq__58524__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58524__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__58524__$1);
var G__58532 = cljs.core.chunk_rest.call(null,seq__58524__$1);
var G__58533 = c__28034__auto__;
var G__58534 = cljs.core.count.call(null,c__28034__auto__);
var G__58535 = (0);
seq__58524 = G__58532;
chunk__58525 = G__58533;
count__58526 = G__58534;
i__58527 = G__58535;
continue;
} else {
var event = cljs.core.first.call(null,seq__58524__$1);
clear_event.call(null,event);

var G__58536 = cljs.core.next.call(null,seq__58524__$1);
var G__58537 = null;
var G__58538 = (0);
var G__58539 = (0);
seq__58524 = G__58536;
chunk__58525 = G__58537;
count__58526 = G__58538;
i__58527 = G__58539;
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1513855138617
