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
var seq__46832 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46833 = null;
var count__46834 = (0);
var i__46835 = (0);
while(true){
if((i__46835 < count__46834)){
var vec__46836 = cljs.core._nth.call(null,chunk__46833,i__46835);
var effect_key = cljs.core.nth.call(null,vec__46836,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46836,(1),null);
var temp__4655__auto___46842 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___46842)){
var effect_fn_46843 = temp__4655__auto___46842;
effect_fn_46843.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__46844 = seq__46832;
var G__46845 = chunk__46833;
var G__46846 = count__46834;
var G__46847 = (i__46835 + (1));
seq__46832 = G__46844;
chunk__46833 = G__46845;
count__46834 = G__46846;
i__46835 = G__46847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46832);
if(temp__4657__auto__){
var seq__46832__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46832__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46832__$1);
var G__46848 = cljs.core.chunk_rest.call(null,seq__46832__$1);
var G__46849 = c__28034__auto__;
var G__46850 = cljs.core.count.call(null,c__28034__auto__);
var G__46851 = (0);
seq__46832 = G__46848;
chunk__46833 = G__46849;
count__46834 = G__46850;
i__46835 = G__46851;
continue;
} else {
var vec__46839 = cljs.core.first.call(null,seq__46832__$1);
var effect_key = cljs.core.nth.call(null,vec__46839,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46839,(1),null);
var temp__4655__auto___46852 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___46852)){
var effect_fn_46853 = temp__4655__auto___46852;
effect_fn_46853.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__46854 = cljs.core.next.call(null,seq__46832__$1);
var G__46855 = null;
var G__46856 = (0);
var G__46857 = (0);
seq__46832 = G__46854;
chunk__46833 = G__46855;
count__46834 = G__46856;
i__46835 = G__46857;
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
var seq__46858 = cljs.core.seq.call(null,value);
var chunk__46859 = null;
var count__46860 = (0);
var i__46861 = (0);
while(true){
if((i__46861 < count__46860)){
var map__46862 = cljs.core._nth.call(null,chunk__46859,i__46861);
var map__46862__$1 = ((((!((map__46862 == null)))?((((map__46862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46862):map__46862);
var effect = map__46862__$1;
var ms = cljs.core.get.call(null,map__46862__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46862__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46858,chunk__46859,count__46860,i__46861,map__46862,map__46862__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46858,chunk__46859,count__46860,i__46861,map__46862,map__46862__$1,effect,ms,dispatch))
,ms);
}

var G__46866 = seq__46858;
var G__46867 = chunk__46859;
var G__46868 = count__46860;
var G__46869 = (i__46861 + (1));
seq__46858 = G__46866;
chunk__46859 = G__46867;
count__46860 = G__46868;
i__46861 = G__46869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46858);
if(temp__4657__auto__){
var seq__46858__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46858__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46858__$1);
var G__46870 = cljs.core.chunk_rest.call(null,seq__46858__$1);
var G__46871 = c__28034__auto__;
var G__46872 = cljs.core.count.call(null,c__28034__auto__);
var G__46873 = (0);
seq__46858 = G__46870;
chunk__46859 = G__46871;
count__46860 = G__46872;
i__46861 = G__46873;
continue;
} else {
var map__46864 = cljs.core.first.call(null,seq__46858__$1);
var map__46864__$1 = ((((!((map__46864 == null)))?((((map__46864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46864):map__46864);
var effect = map__46864__$1;
var ms = cljs.core.get.call(null,map__46864__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46864__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46858,chunk__46859,count__46860,i__46861,map__46864,map__46864__$1,effect,ms,dispatch,seq__46858__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46858,chunk__46859,count__46860,i__46861,map__46864,map__46864__$1,effect,ms,dispatch,seq__46858__$1,temp__4657__auto__))
,ms);
}

var G__46874 = cljs.core.next.call(null,seq__46858__$1);
var G__46875 = null;
var G__46876 = (0);
var G__46877 = (0);
seq__46858 = G__46874;
chunk__46859 = G__46875;
count__46860 = G__46876;
i__46861 = G__46877;
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
var seq__46878 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__46879 = null;
var count__46880 = (0);
var i__46881 = (0);
while(true){
if((i__46881 < count__46880)){
var event = cljs.core._nth.call(null,chunk__46879,i__46881);
re_frame.router.dispatch.call(null,event);

var G__46882 = seq__46878;
var G__46883 = chunk__46879;
var G__46884 = count__46880;
var G__46885 = (i__46881 + (1));
seq__46878 = G__46882;
chunk__46879 = G__46883;
count__46880 = G__46884;
i__46881 = G__46885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46878);
if(temp__4657__auto__){
var seq__46878__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46878__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46878__$1);
var G__46886 = cljs.core.chunk_rest.call(null,seq__46878__$1);
var G__46887 = c__28034__auto__;
var G__46888 = cljs.core.count.call(null,c__28034__auto__);
var G__46889 = (0);
seq__46878 = G__46886;
chunk__46879 = G__46887;
count__46880 = G__46888;
i__46881 = G__46889;
continue;
} else {
var event = cljs.core.first.call(null,seq__46878__$1);
re_frame.router.dispatch.call(null,event);

var G__46890 = cljs.core.next.call(null,seq__46878__$1);
var G__46891 = null;
var G__46892 = (0);
var G__46893 = (0);
seq__46878 = G__46890;
chunk__46879 = G__46891;
count__46880 = G__46892;
i__46881 = G__46893;
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
var seq__46894 = cljs.core.seq.call(null,value);
var chunk__46895 = null;
var count__46896 = (0);
var i__46897 = (0);
while(true){
if((i__46897 < count__46896)){
var event = cljs.core._nth.call(null,chunk__46895,i__46897);
clear_event.call(null,event);

var G__46898 = seq__46894;
var G__46899 = chunk__46895;
var G__46900 = count__46896;
var G__46901 = (i__46897 + (1));
seq__46894 = G__46898;
chunk__46895 = G__46899;
count__46896 = G__46900;
i__46897 = G__46901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46894);
if(temp__4657__auto__){
var seq__46894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46894__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__46894__$1);
var G__46902 = cljs.core.chunk_rest.call(null,seq__46894__$1);
var G__46903 = c__28034__auto__;
var G__46904 = cljs.core.count.call(null,c__28034__auto__);
var G__46905 = (0);
seq__46894 = G__46902;
chunk__46895 = G__46903;
count__46896 = G__46904;
i__46897 = G__46905;
continue;
} else {
var event = cljs.core.first.call(null,seq__46894__$1);
clear_event.call(null,event);

var G__46906 = cljs.core.next.call(null,seq__46894__$1);
var G__46907 = null;
var G__46908 = (0);
var G__46909 = (0);
seq__46894 = G__46906;
chunk__46895 = G__46907;
count__46896 = G__46908;
i__46897 = G__46909;
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

//# sourceMappingURL=fx.js.map?rel=1514003853804
