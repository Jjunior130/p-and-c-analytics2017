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
var seq__63486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__63487 = null;
var count__63488 = (0);
var i__63489 = (0);
while(true){
if((i__63489 < count__63488)){
var vec__63490 = cljs.core._nth.call(null,chunk__63487,i__63489);
var effect_key = cljs.core.nth.call(null,vec__63490,(0),null);
var effect_value = cljs.core.nth.call(null,vec__63490,(1),null);
var temp__4655__auto___63496 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___63496)){
var effect_fn_63497 = temp__4655__auto___63496;
effect_fn_63497.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__63498 = seq__63486;
var G__63499 = chunk__63487;
var G__63500 = count__63488;
var G__63501 = (i__63489 + (1));
seq__63486 = G__63498;
chunk__63487 = G__63499;
count__63488 = G__63500;
i__63489 = G__63501;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63486);
if(temp__4657__auto__){
var seq__63486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63486__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__63486__$1);
var G__63502 = cljs.core.chunk_rest.call(null,seq__63486__$1);
var G__63503 = c__28034__auto__;
var G__63504 = cljs.core.count.call(null,c__28034__auto__);
var G__63505 = (0);
seq__63486 = G__63502;
chunk__63487 = G__63503;
count__63488 = G__63504;
i__63489 = G__63505;
continue;
} else {
var vec__63493 = cljs.core.first.call(null,seq__63486__$1);
var effect_key = cljs.core.nth.call(null,vec__63493,(0),null);
var effect_value = cljs.core.nth.call(null,vec__63493,(1),null);
var temp__4655__auto___63506 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___63506)){
var effect_fn_63507 = temp__4655__auto___63506;
effect_fn_63507.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__63508 = cljs.core.next.call(null,seq__63486__$1);
var G__63509 = null;
var G__63510 = (0);
var G__63511 = (0);
seq__63486 = G__63508;
chunk__63487 = G__63509;
count__63488 = G__63510;
i__63489 = G__63511;
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
var seq__63512 = cljs.core.seq.call(null,value);
var chunk__63513 = null;
var count__63514 = (0);
var i__63515 = (0);
while(true){
if((i__63515 < count__63514)){
var map__63516 = cljs.core._nth.call(null,chunk__63513,i__63515);
var map__63516__$1 = ((((!((map__63516 == null)))?((((map__63516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63516):map__63516);
var effect = map__63516__$1;
var ms = cljs.core.get.call(null,map__63516__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__63516__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__63512,chunk__63513,count__63514,i__63515,map__63516,map__63516__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__63512,chunk__63513,count__63514,i__63515,map__63516,map__63516__$1,effect,ms,dispatch))
,ms);
}

var G__63520 = seq__63512;
var G__63521 = chunk__63513;
var G__63522 = count__63514;
var G__63523 = (i__63515 + (1));
seq__63512 = G__63520;
chunk__63513 = G__63521;
count__63514 = G__63522;
i__63515 = G__63523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63512);
if(temp__4657__auto__){
var seq__63512__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63512__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__63512__$1);
var G__63524 = cljs.core.chunk_rest.call(null,seq__63512__$1);
var G__63525 = c__28034__auto__;
var G__63526 = cljs.core.count.call(null,c__28034__auto__);
var G__63527 = (0);
seq__63512 = G__63524;
chunk__63513 = G__63525;
count__63514 = G__63526;
i__63515 = G__63527;
continue;
} else {
var map__63518 = cljs.core.first.call(null,seq__63512__$1);
var map__63518__$1 = ((((!((map__63518 == null)))?((((map__63518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63518):map__63518);
var effect = map__63518__$1;
var ms = cljs.core.get.call(null,map__63518__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__63518__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__63512,chunk__63513,count__63514,i__63515,map__63518,map__63518__$1,effect,ms,dispatch,seq__63512__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__63512,chunk__63513,count__63514,i__63515,map__63518,map__63518__$1,effect,ms,dispatch,seq__63512__$1,temp__4657__auto__))
,ms);
}

var G__63528 = cljs.core.next.call(null,seq__63512__$1);
var G__63529 = null;
var G__63530 = (0);
var G__63531 = (0);
seq__63512 = G__63528;
chunk__63513 = G__63529;
count__63514 = G__63530;
i__63515 = G__63531;
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
var seq__63532 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__63533 = null;
var count__63534 = (0);
var i__63535 = (0);
while(true){
if((i__63535 < count__63534)){
var event = cljs.core._nth.call(null,chunk__63533,i__63535);
re_frame.router.dispatch.call(null,event);

var G__63536 = seq__63532;
var G__63537 = chunk__63533;
var G__63538 = count__63534;
var G__63539 = (i__63535 + (1));
seq__63532 = G__63536;
chunk__63533 = G__63537;
count__63534 = G__63538;
i__63535 = G__63539;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63532);
if(temp__4657__auto__){
var seq__63532__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63532__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__63532__$1);
var G__63540 = cljs.core.chunk_rest.call(null,seq__63532__$1);
var G__63541 = c__28034__auto__;
var G__63542 = cljs.core.count.call(null,c__28034__auto__);
var G__63543 = (0);
seq__63532 = G__63540;
chunk__63533 = G__63541;
count__63534 = G__63542;
i__63535 = G__63543;
continue;
} else {
var event = cljs.core.first.call(null,seq__63532__$1);
re_frame.router.dispatch.call(null,event);

var G__63544 = cljs.core.next.call(null,seq__63532__$1);
var G__63545 = null;
var G__63546 = (0);
var G__63547 = (0);
seq__63532 = G__63544;
chunk__63533 = G__63545;
count__63534 = G__63546;
i__63535 = G__63547;
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
var seq__63548 = cljs.core.seq.call(null,value);
var chunk__63549 = null;
var count__63550 = (0);
var i__63551 = (0);
while(true){
if((i__63551 < count__63550)){
var event = cljs.core._nth.call(null,chunk__63549,i__63551);
clear_event.call(null,event);

var G__63552 = seq__63548;
var G__63553 = chunk__63549;
var G__63554 = count__63550;
var G__63555 = (i__63551 + (1));
seq__63548 = G__63552;
chunk__63549 = G__63553;
count__63550 = G__63554;
i__63551 = G__63555;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63548);
if(temp__4657__auto__){
var seq__63548__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63548__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__63548__$1);
var G__63556 = cljs.core.chunk_rest.call(null,seq__63548__$1);
var G__63557 = c__28034__auto__;
var G__63558 = cljs.core.count.call(null,c__28034__auto__);
var G__63559 = (0);
seq__63548 = G__63556;
chunk__63549 = G__63557;
count__63550 = G__63558;
i__63551 = G__63559;
continue;
} else {
var event = cljs.core.first.call(null,seq__63548__$1);
clear_event.call(null,event);

var G__63560 = cljs.core.next.call(null,seq__63548__$1);
var G__63561 = null;
var G__63562 = (0);
var G__63563 = (0);
seq__63548 = G__63560;
chunk__63549 = G__63561;
count__63550 = G__63562;
i__63551 = G__63563;
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

//# sourceMappingURL=fx.js.map?rel=1513855147683
