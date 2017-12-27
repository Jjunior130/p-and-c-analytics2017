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
var seq__46856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46857 = null;
var count__46858 = (0);
var i__46859 = (0);
while(true){
if((i__46859 < count__46858)){
var vec__46860 = cljs.core._nth.call(null,chunk__46857,i__46859);
var effect_key = cljs.core.nth.call(null,vec__46860,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46860,(1),null);
var temp__4655__auto___46866 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___46866)){
var effect_fn_46867 = temp__4655__auto___46866;
effect_fn_46867.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__46868 = seq__46856;
var G__46869 = chunk__46857;
var G__46870 = count__46858;
var G__46871 = (i__46859 + (1));
seq__46856 = G__46868;
chunk__46857 = G__46869;
count__46858 = G__46870;
i__46859 = G__46871;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46856);
if(temp__4657__auto__){
var seq__46856__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46856__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46856__$1);
var G__46872 = cljs.core.chunk_rest.call(null,seq__46856__$1);
var G__46873 = c__28034__auto__;
var G__46874 = cljs.core.count.call(null,c__28034__auto__);
var G__46875 = (0);
seq__46856 = G__46872;
chunk__46857 = G__46873;
count__46858 = G__46874;
i__46859 = G__46875;
continue;
} else {
var vec__46863 = cljs.core.first.call(null,seq__46856__$1);
var effect_key = cljs.core.nth.call(null,vec__46863,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46863,(1),null);
var temp__4655__auto___46876 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___46876)){
var effect_fn_46877 = temp__4655__auto___46876;
effect_fn_46877.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__46878 = cljs.core.next.call(null,seq__46856__$1);
var G__46879 = null;
var G__46880 = (0);
var G__46881 = (0);
seq__46856 = G__46878;
chunk__46857 = G__46879;
count__46858 = G__46880;
i__46859 = G__46881;
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
var seq__46882 = cljs.core.seq.call(null,value);
var chunk__46883 = null;
var count__46884 = (0);
var i__46885 = (0);
while(true){
if((i__46885 < count__46884)){
var map__46886 = cljs.core._nth.call(null,chunk__46883,i__46885);
var map__46886__$1 = ((((!((map__46886 == null)))?((((map__46886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46886):map__46886);
var effect = map__46886__$1;
var ms = cljs.core.get.call(null,map__46886__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46886__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46882,chunk__46883,count__46884,i__46885,map__46886,map__46886__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46882,chunk__46883,count__46884,i__46885,map__46886,map__46886__$1,effect,ms,dispatch))
,ms);
}

var G__46890 = seq__46882;
var G__46891 = chunk__46883;
var G__46892 = count__46884;
var G__46893 = (i__46885 + (1));
seq__46882 = G__46890;
chunk__46883 = G__46891;
count__46884 = G__46892;
i__46885 = G__46893;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46882);
if(temp__4657__auto__){
var seq__46882__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46882__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46882__$1);
var G__46894 = cljs.core.chunk_rest.call(null,seq__46882__$1);
var G__46895 = c__28034__auto__;
var G__46896 = cljs.core.count.call(null,c__28034__auto__);
var G__46897 = (0);
seq__46882 = G__46894;
chunk__46883 = G__46895;
count__46884 = G__46896;
i__46885 = G__46897;
continue;
} else {
var map__46888 = cljs.core.first.call(null,seq__46882__$1);
var map__46888__$1 = ((((!((map__46888 == null)))?((((map__46888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46888):map__46888);
var effect = map__46888__$1;
var ms = cljs.core.get.call(null,map__46888__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46888__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46882,chunk__46883,count__46884,i__46885,map__46888,map__46888__$1,effect,ms,dispatch,seq__46882__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46882,chunk__46883,count__46884,i__46885,map__46888,map__46888__$1,effect,ms,dispatch,seq__46882__$1,temp__4657__auto__))
,ms);
}

var G__46898 = cljs.core.next.call(null,seq__46882__$1);
var G__46899 = null;
var G__46900 = (0);
var G__46901 = (0);
seq__46882 = G__46898;
chunk__46883 = G__46899;
count__46884 = G__46900;
i__46885 = G__46901;
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
var seq__46902 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__46903 = null;
var count__46904 = (0);
var i__46905 = (0);
while(true){
if((i__46905 < count__46904)){
var event = cljs.core._nth.call(null,chunk__46903,i__46905);
re_frame.router.dispatch.call(null,event);

var G__46906 = seq__46902;
var G__46907 = chunk__46903;
var G__46908 = count__46904;
var G__46909 = (i__46905 + (1));
seq__46902 = G__46906;
chunk__46903 = G__46907;
count__46904 = G__46908;
i__46905 = G__46909;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46902);
if(temp__4657__auto__){
var seq__46902__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46902__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46902__$1);
var G__46910 = cljs.core.chunk_rest.call(null,seq__46902__$1);
var G__46911 = c__28034__auto__;
var G__46912 = cljs.core.count.call(null,c__28034__auto__);
var G__46913 = (0);
seq__46902 = G__46910;
chunk__46903 = G__46911;
count__46904 = G__46912;
i__46905 = G__46913;
continue;
} else {
var event = cljs.core.first.call(null,seq__46902__$1);
re_frame.router.dispatch.call(null,event);

var G__46914 = cljs.core.next.call(null,seq__46902__$1);
var G__46915 = null;
var G__46916 = (0);
var G__46917 = (0);
seq__46902 = G__46914;
chunk__46903 = G__46915;
count__46904 = G__46916;
i__46905 = G__46917;
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
var seq__46918 = cljs.core.seq.call(null,value);
var chunk__46919 = null;
var count__46920 = (0);
var i__46921 = (0);
while(true){
if((i__46921 < count__46920)){
var event = cljs.core._nth.call(null,chunk__46919,i__46921);
clear_event.call(null,event);

var G__46922 = seq__46918;
var G__46923 = chunk__46919;
var G__46924 = count__46920;
var G__46925 = (i__46921 + (1));
seq__46918 = G__46922;
chunk__46919 = G__46923;
count__46920 = G__46924;
i__46921 = G__46925;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46918);
if(temp__4657__auto__){
var seq__46918__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46918__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46918__$1);
var G__46926 = cljs.core.chunk_rest.call(null,seq__46918__$1);
var G__46927 = c__28034__auto__;
var G__46928 = cljs.core.count.call(null,c__28034__auto__);
var G__46929 = (0);
seq__46918 = G__46926;
chunk__46919 = G__46927;
count__46920 = G__46928;
i__46921 = G__46929;
continue;
} else {
var event = cljs.core.first.call(null,seq__46918__$1);
clear_event.call(null,event);

var G__46930 = cljs.core.next.call(null,seq__46918__$1);
var G__46931 = null;
var G__46932 = (0);
var G__46933 = (0);
seq__46918 = G__46930;
chunk__46919 = G__46931;
count__46920 = G__46932;
i__46921 = G__46933;
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

//# sourceMappingURL=fx.js.map?rel=1514349656972
