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
var seq__41742 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41743 = null;
var count__41744 = (0);
var i__41745 = (0);
while(true){
if((i__41745 < count__41744)){
var vec__41746 = cljs.core._nth.call(null,chunk__41743,i__41745);
var effect_key = cljs.core.nth.call(null,vec__41746,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41746,(1),null);
var temp__4655__auto___41752 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41752)){
var effect_fn_41753 = temp__4655__auto___41752;
effect_fn_41753.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41754 = seq__41742;
var G__41755 = chunk__41743;
var G__41756 = count__41744;
var G__41757 = (i__41745 + (1));
seq__41742 = G__41754;
chunk__41743 = G__41755;
count__41744 = G__41756;
i__41745 = G__41757;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41742);
if(temp__4657__auto__){
var seq__41742__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41742__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41742__$1);
var G__41758 = cljs.core.chunk_rest.call(null,seq__41742__$1);
var G__41759 = c__28034__auto__;
var G__41760 = cljs.core.count.call(null,c__28034__auto__);
var G__41761 = (0);
seq__41742 = G__41758;
chunk__41743 = G__41759;
count__41744 = G__41760;
i__41745 = G__41761;
continue;
} else {
var vec__41749 = cljs.core.first.call(null,seq__41742__$1);
var effect_key = cljs.core.nth.call(null,vec__41749,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41749,(1),null);
var temp__4655__auto___41762 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41762)){
var effect_fn_41763 = temp__4655__auto___41762;
effect_fn_41763.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41764 = cljs.core.next.call(null,seq__41742__$1);
var G__41765 = null;
var G__41766 = (0);
var G__41767 = (0);
seq__41742 = G__41764;
chunk__41743 = G__41765;
count__41744 = G__41766;
i__41745 = G__41767;
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
var seq__41768 = cljs.core.seq.call(null,value);
var chunk__41769 = null;
var count__41770 = (0);
var i__41771 = (0);
while(true){
if((i__41771 < count__41770)){
var map__41772 = cljs.core._nth.call(null,chunk__41769,i__41771);
var map__41772__$1 = ((((!((map__41772 == null)))?((((map__41772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41772):map__41772);
var effect = map__41772__$1;
var ms = cljs.core.get.call(null,map__41772__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41772__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41768,chunk__41769,count__41770,i__41771,map__41772,map__41772__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41768,chunk__41769,count__41770,i__41771,map__41772,map__41772__$1,effect,ms,dispatch))
,ms);
}

var G__41776 = seq__41768;
var G__41777 = chunk__41769;
var G__41778 = count__41770;
var G__41779 = (i__41771 + (1));
seq__41768 = G__41776;
chunk__41769 = G__41777;
count__41770 = G__41778;
i__41771 = G__41779;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41768);
if(temp__4657__auto__){
var seq__41768__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41768__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41768__$1);
var G__41780 = cljs.core.chunk_rest.call(null,seq__41768__$1);
var G__41781 = c__28034__auto__;
var G__41782 = cljs.core.count.call(null,c__28034__auto__);
var G__41783 = (0);
seq__41768 = G__41780;
chunk__41769 = G__41781;
count__41770 = G__41782;
i__41771 = G__41783;
continue;
} else {
var map__41774 = cljs.core.first.call(null,seq__41768__$1);
var map__41774__$1 = ((((!((map__41774 == null)))?((((map__41774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41774):map__41774);
var effect = map__41774__$1;
var ms = cljs.core.get.call(null,map__41774__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41774__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41768,chunk__41769,count__41770,i__41771,map__41774,map__41774__$1,effect,ms,dispatch,seq__41768__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41768,chunk__41769,count__41770,i__41771,map__41774,map__41774__$1,effect,ms,dispatch,seq__41768__$1,temp__4657__auto__))
,ms);
}

var G__41784 = cljs.core.next.call(null,seq__41768__$1);
var G__41785 = null;
var G__41786 = (0);
var G__41787 = (0);
seq__41768 = G__41784;
chunk__41769 = G__41785;
count__41770 = G__41786;
i__41771 = G__41787;
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
var seq__41788 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41789 = null;
var count__41790 = (0);
var i__41791 = (0);
while(true){
if((i__41791 < count__41790)){
var event = cljs.core._nth.call(null,chunk__41789,i__41791);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41792 = seq__41788;
var G__41793 = chunk__41789;
var G__41794 = count__41790;
var G__41795 = (i__41791 + (1));
seq__41788 = G__41792;
chunk__41789 = G__41793;
count__41790 = G__41794;
i__41791 = G__41795;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41788);
if(temp__4657__auto__){
var seq__41788__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41788__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41788__$1);
var G__41796 = cljs.core.chunk_rest.call(null,seq__41788__$1);
var G__41797 = c__28034__auto__;
var G__41798 = cljs.core.count.call(null,c__28034__auto__);
var G__41799 = (0);
seq__41788 = G__41796;
chunk__41789 = G__41797;
count__41790 = G__41798;
i__41791 = G__41799;
continue;
} else {
var event = cljs.core.first.call(null,seq__41788__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41800 = cljs.core.next.call(null,seq__41788__$1);
var G__41801 = null;
var G__41802 = (0);
var G__41803 = (0);
seq__41788 = G__41800;
chunk__41789 = G__41801;
count__41790 = G__41802;
i__41791 = G__41803;
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
var seq__41804 = cljs.core.seq.call(null,value);
var chunk__41805 = null;
var count__41806 = (0);
var i__41807 = (0);
while(true){
if((i__41807 < count__41806)){
var event = cljs.core._nth.call(null,chunk__41805,i__41807);
clear_event.call(null,event);

var G__41808 = seq__41804;
var G__41809 = chunk__41805;
var G__41810 = count__41806;
var G__41811 = (i__41807 + (1));
seq__41804 = G__41808;
chunk__41805 = G__41809;
count__41806 = G__41810;
i__41807 = G__41811;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41804);
if(temp__4657__auto__){
var seq__41804__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41804__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41804__$1);
var G__41812 = cljs.core.chunk_rest.call(null,seq__41804__$1);
var G__41813 = c__28034__auto__;
var G__41814 = cljs.core.count.call(null,c__28034__auto__);
var G__41815 = (0);
seq__41804 = G__41812;
chunk__41805 = G__41813;
count__41806 = G__41814;
i__41807 = G__41815;
continue;
} else {
var event = cljs.core.first.call(null,seq__41804__$1);
clear_event.call(null,event);

var G__41816 = cljs.core.next.call(null,seq__41804__$1);
var G__41817 = null;
var G__41818 = (0);
var G__41819 = (0);
seq__41804 = G__41816;
chunk__41805 = G__41817;
count__41806 = G__41818;
i__41807 = G__41819;
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

//# sourceMappingURL=fx.js.map?rel=1513846761363
