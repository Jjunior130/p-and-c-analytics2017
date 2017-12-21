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
var seq__46803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46804 = null;
var count__46805 = (0);
var i__46806 = (0);
while(true){
if((i__46806 < count__46805)){
var vec__46807 = cljs.core._nth.call(null,chunk__46804,i__46806);
var effect_key = cljs.core.nth.call(null,vec__46807,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46807,(1),null);
var temp__4655__auto___46813 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___46813)){
var effect_fn_46814 = temp__4655__auto___46813;
effect_fn_46814.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__46815 = seq__46803;
var G__46816 = chunk__46804;
var G__46817 = count__46805;
var G__46818 = (i__46806 + (1));
seq__46803 = G__46815;
chunk__46804 = G__46816;
count__46805 = G__46817;
i__46806 = G__46818;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46803);
if(temp__4657__auto__){
var seq__46803__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46803__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46803__$1);
var G__46819 = cljs.core.chunk_rest.call(null,seq__46803__$1);
var G__46820 = c__28034__auto__;
var G__46821 = cljs.core.count.call(null,c__28034__auto__);
var G__46822 = (0);
seq__46803 = G__46819;
chunk__46804 = G__46820;
count__46805 = G__46821;
i__46806 = G__46822;
continue;
} else {
var vec__46810 = cljs.core.first.call(null,seq__46803__$1);
var effect_key = cljs.core.nth.call(null,vec__46810,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46810,(1),null);
var temp__4655__auto___46823 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___46823)){
var effect_fn_46824 = temp__4655__auto___46823;
effect_fn_46824.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__46825 = cljs.core.next.call(null,seq__46803__$1);
var G__46826 = null;
var G__46827 = (0);
var G__46828 = (0);
seq__46803 = G__46825;
chunk__46804 = G__46826;
count__46805 = G__46827;
i__46806 = G__46828;
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
var seq__46829 = cljs.core.seq.call(null,value);
var chunk__46830 = null;
var count__46831 = (0);
var i__46832 = (0);
while(true){
if((i__46832 < count__46831)){
var map__46833 = cljs.core._nth.call(null,chunk__46830,i__46832);
var map__46833__$1 = ((((!((map__46833 == null)))?((((map__46833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46833):map__46833);
var effect = map__46833__$1;
var ms = cljs.core.get.call(null,map__46833__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46833__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46829,chunk__46830,count__46831,i__46832,map__46833,map__46833__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46829,chunk__46830,count__46831,i__46832,map__46833,map__46833__$1,effect,ms,dispatch))
,ms);
}

var G__46837 = seq__46829;
var G__46838 = chunk__46830;
var G__46839 = count__46831;
var G__46840 = (i__46832 + (1));
seq__46829 = G__46837;
chunk__46830 = G__46838;
count__46831 = G__46839;
i__46832 = G__46840;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46829);
if(temp__4657__auto__){
var seq__46829__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46829__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46829__$1);
var G__46841 = cljs.core.chunk_rest.call(null,seq__46829__$1);
var G__46842 = c__28034__auto__;
var G__46843 = cljs.core.count.call(null,c__28034__auto__);
var G__46844 = (0);
seq__46829 = G__46841;
chunk__46830 = G__46842;
count__46831 = G__46843;
i__46832 = G__46844;
continue;
} else {
var map__46835 = cljs.core.first.call(null,seq__46829__$1);
var map__46835__$1 = ((((!((map__46835 == null)))?((((map__46835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46835):map__46835);
var effect = map__46835__$1;
var ms = cljs.core.get.call(null,map__46835__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46835__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46829,chunk__46830,count__46831,i__46832,map__46835,map__46835__$1,effect,ms,dispatch,seq__46829__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46829,chunk__46830,count__46831,i__46832,map__46835,map__46835__$1,effect,ms,dispatch,seq__46829__$1,temp__4657__auto__))
,ms);
}

var G__46845 = cljs.core.next.call(null,seq__46829__$1);
var G__46846 = null;
var G__46847 = (0);
var G__46848 = (0);
seq__46829 = G__46845;
chunk__46830 = G__46846;
count__46831 = G__46847;
i__46832 = G__46848;
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
var seq__46849 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__46850 = null;
var count__46851 = (0);
var i__46852 = (0);
while(true){
if((i__46852 < count__46851)){
var event = cljs.core._nth.call(null,chunk__46850,i__46852);
re_frame.router.dispatch.call(null,event);

var G__46853 = seq__46849;
var G__46854 = chunk__46850;
var G__46855 = count__46851;
var G__46856 = (i__46852 + (1));
seq__46849 = G__46853;
chunk__46850 = G__46854;
count__46851 = G__46855;
i__46852 = G__46856;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46849);
if(temp__4657__auto__){
var seq__46849__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46849__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46849__$1);
var G__46857 = cljs.core.chunk_rest.call(null,seq__46849__$1);
var G__46858 = c__28034__auto__;
var G__46859 = cljs.core.count.call(null,c__28034__auto__);
var G__46860 = (0);
seq__46849 = G__46857;
chunk__46850 = G__46858;
count__46851 = G__46859;
i__46852 = G__46860;
continue;
} else {
var event = cljs.core.first.call(null,seq__46849__$1);
re_frame.router.dispatch.call(null,event);

var G__46861 = cljs.core.next.call(null,seq__46849__$1);
var G__46862 = null;
var G__46863 = (0);
var G__46864 = (0);
seq__46849 = G__46861;
chunk__46850 = G__46862;
count__46851 = G__46863;
i__46852 = G__46864;
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
var seq__46865 = cljs.core.seq.call(null,value);
var chunk__46866 = null;
var count__46867 = (0);
var i__46868 = (0);
while(true){
if((i__46868 < count__46867)){
var event = cljs.core._nth.call(null,chunk__46866,i__46868);
clear_event.call(null,event);

var G__46869 = seq__46865;
var G__46870 = chunk__46866;
var G__46871 = count__46867;
var G__46872 = (i__46868 + (1));
seq__46865 = G__46869;
chunk__46866 = G__46870;
count__46867 = G__46871;
i__46868 = G__46872;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46865);
if(temp__4657__auto__){
var seq__46865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46865__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46865__$1);
var G__46873 = cljs.core.chunk_rest.call(null,seq__46865__$1);
var G__46874 = c__28034__auto__;
var G__46875 = cljs.core.count.call(null,c__28034__auto__);
var G__46876 = (0);
seq__46865 = G__46873;
chunk__46866 = G__46874;
count__46867 = G__46875;
i__46868 = G__46876;
continue;
} else {
var event = cljs.core.first.call(null,seq__46865__$1);
clear_event.call(null,event);

var G__46877 = cljs.core.next.call(null,seq__46865__$1);
var G__46878 = null;
var G__46879 = (0);
var G__46880 = (0);
seq__46865 = G__46877;
chunk__46866 = G__46878;
count__46867 = G__46879;
i__46868 = G__46880;
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

//# sourceMappingURL=fx.js.map?rel=1513846769896
