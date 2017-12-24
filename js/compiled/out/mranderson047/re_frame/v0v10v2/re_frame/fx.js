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
var seq__41771 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41772 = null;
var count__41773 = (0);
var i__41774 = (0);
while(true){
if((i__41774 < count__41773)){
var vec__41775 = cljs.core._nth.call(null,chunk__41772,i__41774);
var effect_key = cljs.core.nth.call(null,vec__41775,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41775,(1),null);
var temp__4655__auto___41781 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41781)){
var effect_fn_41782 = temp__4655__auto___41781;
effect_fn_41782.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41783 = seq__41771;
var G__41784 = chunk__41772;
var G__41785 = count__41773;
var G__41786 = (i__41774 + (1));
seq__41771 = G__41783;
chunk__41772 = G__41784;
count__41773 = G__41785;
i__41774 = G__41786;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41771);
if(temp__4657__auto__){
var seq__41771__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41771__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41771__$1);
var G__41787 = cljs.core.chunk_rest.call(null,seq__41771__$1);
var G__41788 = c__28034__auto__;
var G__41789 = cljs.core.count.call(null,c__28034__auto__);
var G__41790 = (0);
seq__41771 = G__41787;
chunk__41772 = G__41788;
count__41773 = G__41789;
i__41774 = G__41790;
continue;
} else {
var vec__41778 = cljs.core.first.call(null,seq__41771__$1);
var effect_key = cljs.core.nth.call(null,vec__41778,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41778,(1),null);
var temp__4655__auto___41791 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41791)){
var effect_fn_41792 = temp__4655__auto___41791;
effect_fn_41792.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41793 = cljs.core.next.call(null,seq__41771__$1);
var G__41794 = null;
var G__41795 = (0);
var G__41796 = (0);
seq__41771 = G__41793;
chunk__41772 = G__41794;
count__41773 = G__41795;
i__41774 = G__41796;
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
var seq__41797 = cljs.core.seq.call(null,value);
var chunk__41798 = null;
var count__41799 = (0);
var i__41800 = (0);
while(true){
if((i__41800 < count__41799)){
var map__41801 = cljs.core._nth.call(null,chunk__41798,i__41800);
var map__41801__$1 = ((((!((map__41801 == null)))?((((map__41801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41801):map__41801);
var effect = map__41801__$1;
var ms = cljs.core.get.call(null,map__41801__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41801__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41797,chunk__41798,count__41799,i__41800,map__41801,map__41801__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41797,chunk__41798,count__41799,i__41800,map__41801,map__41801__$1,effect,ms,dispatch))
,ms);
}

var G__41805 = seq__41797;
var G__41806 = chunk__41798;
var G__41807 = count__41799;
var G__41808 = (i__41800 + (1));
seq__41797 = G__41805;
chunk__41798 = G__41806;
count__41799 = G__41807;
i__41800 = G__41808;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41797);
if(temp__4657__auto__){
var seq__41797__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41797__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41797__$1);
var G__41809 = cljs.core.chunk_rest.call(null,seq__41797__$1);
var G__41810 = c__28034__auto__;
var G__41811 = cljs.core.count.call(null,c__28034__auto__);
var G__41812 = (0);
seq__41797 = G__41809;
chunk__41798 = G__41810;
count__41799 = G__41811;
i__41800 = G__41812;
continue;
} else {
var map__41803 = cljs.core.first.call(null,seq__41797__$1);
var map__41803__$1 = ((((!((map__41803 == null)))?((((map__41803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41803):map__41803);
var effect = map__41803__$1;
var ms = cljs.core.get.call(null,map__41803__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41803__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41797,chunk__41798,count__41799,i__41800,map__41803,map__41803__$1,effect,ms,dispatch,seq__41797__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41797,chunk__41798,count__41799,i__41800,map__41803,map__41803__$1,effect,ms,dispatch,seq__41797__$1,temp__4657__auto__))
,ms);
}

var G__41813 = cljs.core.next.call(null,seq__41797__$1);
var G__41814 = null;
var G__41815 = (0);
var G__41816 = (0);
seq__41797 = G__41813;
chunk__41798 = G__41814;
count__41799 = G__41815;
i__41800 = G__41816;
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
var seq__41817 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41818 = null;
var count__41819 = (0);
var i__41820 = (0);
while(true){
if((i__41820 < count__41819)){
var event = cljs.core._nth.call(null,chunk__41818,i__41820);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41821 = seq__41817;
var G__41822 = chunk__41818;
var G__41823 = count__41819;
var G__41824 = (i__41820 + (1));
seq__41817 = G__41821;
chunk__41818 = G__41822;
count__41819 = G__41823;
i__41820 = G__41824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41817);
if(temp__4657__auto__){
var seq__41817__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41817__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41817__$1);
var G__41825 = cljs.core.chunk_rest.call(null,seq__41817__$1);
var G__41826 = c__28034__auto__;
var G__41827 = cljs.core.count.call(null,c__28034__auto__);
var G__41828 = (0);
seq__41817 = G__41825;
chunk__41818 = G__41826;
count__41819 = G__41827;
i__41820 = G__41828;
continue;
} else {
var event = cljs.core.first.call(null,seq__41817__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41829 = cljs.core.next.call(null,seq__41817__$1);
var G__41830 = null;
var G__41831 = (0);
var G__41832 = (0);
seq__41817 = G__41829;
chunk__41818 = G__41830;
count__41819 = G__41831;
i__41820 = G__41832;
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
var seq__41833 = cljs.core.seq.call(null,value);
var chunk__41834 = null;
var count__41835 = (0);
var i__41836 = (0);
while(true){
if((i__41836 < count__41835)){
var event = cljs.core._nth.call(null,chunk__41834,i__41836);
clear_event.call(null,event);

var G__41837 = seq__41833;
var G__41838 = chunk__41834;
var G__41839 = count__41835;
var G__41840 = (i__41836 + (1));
seq__41833 = G__41837;
chunk__41834 = G__41838;
count__41835 = G__41839;
i__41836 = G__41840;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41833);
if(temp__4657__auto__){
var seq__41833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41833__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41833__$1);
var G__41841 = cljs.core.chunk_rest.call(null,seq__41833__$1);
var G__41842 = c__28034__auto__;
var G__41843 = cljs.core.count.call(null,c__28034__auto__);
var G__41844 = (0);
seq__41833 = G__41841;
chunk__41834 = G__41842;
count__41835 = G__41843;
i__41836 = G__41844;
continue;
} else {
var event = cljs.core.first.call(null,seq__41833__$1);
clear_event.call(null,event);

var G__41845 = cljs.core.next.call(null,seq__41833__$1);
var G__41846 = null;
var G__41847 = (0);
var G__41848 = (0);
seq__41833 = G__41845;
chunk__41834 = G__41846;
count__41835 = G__41847;
i__41836 = G__41848;
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

//# sourceMappingURL=fx.js.map?rel=1514003845051
