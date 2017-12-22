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
var seq__43439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43440 = null;
var count__43441 = (0);
var i__43442 = (0);
while(true){
if((i__43442 < count__43441)){
var vec__43443 = cljs.core._nth.call(null,chunk__43440,i__43442);
var effect_key = cljs.core.nth.call(null,vec__43443,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43443,(1),null);
var temp__4655__auto___43449 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___43449)){
var effect_fn_43450 = temp__4655__auto___43449;
effect_fn_43450.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__43451 = seq__43439;
var G__43452 = chunk__43440;
var G__43453 = count__43441;
var G__43454 = (i__43442 + (1));
seq__43439 = G__43451;
chunk__43440 = G__43452;
count__43441 = G__43453;
i__43442 = G__43454;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43439);
if(temp__4657__auto__){
var seq__43439__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43439__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43439__$1);
var G__43455 = cljs.core.chunk_rest.call(null,seq__43439__$1);
var G__43456 = c__28034__auto__;
var G__43457 = cljs.core.count.call(null,c__28034__auto__);
var G__43458 = (0);
seq__43439 = G__43455;
chunk__43440 = G__43456;
count__43441 = G__43457;
i__43442 = G__43458;
continue;
} else {
var vec__43446 = cljs.core.first.call(null,seq__43439__$1);
var effect_key = cljs.core.nth.call(null,vec__43446,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43446,(1),null);
var temp__4655__auto___43459 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___43459)){
var effect_fn_43460 = temp__4655__auto___43459;
effect_fn_43460.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__43461 = cljs.core.next.call(null,seq__43439__$1);
var G__43462 = null;
var G__43463 = (0);
var G__43464 = (0);
seq__43439 = G__43461;
chunk__43440 = G__43462;
count__43441 = G__43463;
i__43442 = G__43464;
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
var seq__43465 = cljs.core.seq.call(null,value);
var chunk__43466 = null;
var count__43467 = (0);
var i__43468 = (0);
while(true){
if((i__43468 < count__43467)){
var map__43469 = cljs.core._nth.call(null,chunk__43466,i__43468);
var map__43469__$1 = ((((!((map__43469 == null)))?((((map__43469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43469):map__43469);
var effect = map__43469__$1;
var ms = cljs.core.get.call(null,map__43469__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43469__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43465,chunk__43466,count__43467,i__43468,map__43469,map__43469__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__43465,chunk__43466,count__43467,i__43468,map__43469,map__43469__$1,effect,ms,dispatch))
,ms);
}

var G__43473 = seq__43465;
var G__43474 = chunk__43466;
var G__43475 = count__43467;
var G__43476 = (i__43468 + (1));
seq__43465 = G__43473;
chunk__43466 = G__43474;
count__43467 = G__43475;
i__43468 = G__43476;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43465);
if(temp__4657__auto__){
var seq__43465__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43465__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43465__$1);
var G__43477 = cljs.core.chunk_rest.call(null,seq__43465__$1);
var G__43478 = c__28034__auto__;
var G__43479 = cljs.core.count.call(null,c__28034__auto__);
var G__43480 = (0);
seq__43465 = G__43477;
chunk__43466 = G__43478;
count__43467 = G__43479;
i__43468 = G__43480;
continue;
} else {
var map__43471 = cljs.core.first.call(null,seq__43465__$1);
var map__43471__$1 = ((((!((map__43471 == null)))?((((map__43471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43471):map__43471);
var effect = map__43471__$1;
var ms = cljs.core.get.call(null,map__43471__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43471__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43465,chunk__43466,count__43467,i__43468,map__43471,map__43471__$1,effect,ms,dispatch,seq__43465__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__43465,chunk__43466,count__43467,i__43468,map__43471,map__43471__$1,effect,ms,dispatch,seq__43465__$1,temp__4657__auto__))
,ms);
}

var G__43481 = cljs.core.next.call(null,seq__43465__$1);
var G__43482 = null;
var G__43483 = (0);
var G__43484 = (0);
seq__43465 = G__43481;
chunk__43466 = G__43482;
count__43467 = G__43483;
i__43468 = G__43484;
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
var seq__43485 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__43486 = null;
var count__43487 = (0);
var i__43488 = (0);
while(true){
if((i__43488 < count__43487)){
var event = cljs.core._nth.call(null,chunk__43486,i__43488);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__43489 = seq__43485;
var G__43490 = chunk__43486;
var G__43491 = count__43487;
var G__43492 = (i__43488 + (1));
seq__43485 = G__43489;
chunk__43486 = G__43490;
count__43487 = G__43491;
i__43488 = G__43492;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43485);
if(temp__4657__auto__){
var seq__43485__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43485__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43485__$1);
var G__43493 = cljs.core.chunk_rest.call(null,seq__43485__$1);
var G__43494 = c__28034__auto__;
var G__43495 = cljs.core.count.call(null,c__28034__auto__);
var G__43496 = (0);
seq__43485 = G__43493;
chunk__43486 = G__43494;
count__43487 = G__43495;
i__43488 = G__43496;
continue;
} else {
var event = cljs.core.first.call(null,seq__43485__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__43497 = cljs.core.next.call(null,seq__43485__$1);
var G__43498 = null;
var G__43499 = (0);
var G__43500 = (0);
seq__43485 = G__43497;
chunk__43486 = G__43498;
count__43487 = G__43499;
i__43488 = G__43500;
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
var seq__43501 = cljs.core.seq.call(null,value);
var chunk__43502 = null;
var count__43503 = (0);
var i__43504 = (0);
while(true){
if((i__43504 < count__43503)){
var event = cljs.core._nth.call(null,chunk__43502,i__43504);
clear_event.call(null,event);

var G__43505 = seq__43501;
var G__43506 = chunk__43502;
var G__43507 = count__43503;
var G__43508 = (i__43504 + (1));
seq__43501 = G__43505;
chunk__43502 = G__43506;
count__43503 = G__43507;
i__43504 = G__43508;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43501);
if(temp__4657__auto__){
var seq__43501__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43501__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43501__$1);
var G__43509 = cljs.core.chunk_rest.call(null,seq__43501__$1);
var G__43510 = c__28034__auto__;
var G__43511 = cljs.core.count.call(null,c__28034__auto__);
var G__43512 = (0);
seq__43501 = G__43509;
chunk__43502 = G__43510;
count__43503 = G__43511;
i__43504 = G__43512;
continue;
} else {
var event = cljs.core.first.call(null,seq__43501__$1);
clear_event.call(null,event);

var G__43513 = cljs.core.next.call(null,seq__43501__$1);
var G__43514 = null;
var G__43515 = (0);
var G__43516 = (0);
seq__43501 = G__43513;
chunk__43502 = G__43514;
count__43503 = G__43515;
i__43504 = G__43516;
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

//# sourceMappingURL=fx.js.map?rel=1513978687880
