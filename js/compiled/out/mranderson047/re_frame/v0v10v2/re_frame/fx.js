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
var seq__41795 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41796 = null;
var count__41797 = (0);
var i__41798 = (0);
while(true){
if((i__41798 < count__41797)){
var vec__41799 = cljs.core._nth.call(null,chunk__41796,i__41798);
var effect_key = cljs.core.nth.call(null,vec__41799,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41799,(1),null);
var temp__4655__auto___41805 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41805)){
var effect_fn_41806 = temp__4655__auto___41805;
effect_fn_41806.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41807 = seq__41795;
var G__41808 = chunk__41796;
var G__41809 = count__41797;
var G__41810 = (i__41798 + (1));
seq__41795 = G__41807;
chunk__41796 = G__41808;
count__41797 = G__41809;
i__41798 = G__41810;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41795);
if(temp__4657__auto__){
var seq__41795__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41795__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41795__$1);
var G__41811 = cljs.core.chunk_rest.call(null,seq__41795__$1);
var G__41812 = c__28034__auto__;
var G__41813 = cljs.core.count.call(null,c__28034__auto__);
var G__41814 = (0);
seq__41795 = G__41811;
chunk__41796 = G__41812;
count__41797 = G__41813;
i__41798 = G__41814;
continue;
} else {
var vec__41802 = cljs.core.first.call(null,seq__41795__$1);
var effect_key = cljs.core.nth.call(null,vec__41802,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41802,(1),null);
var temp__4655__auto___41815 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41815)){
var effect_fn_41816 = temp__4655__auto___41815;
effect_fn_41816.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41817 = cljs.core.next.call(null,seq__41795__$1);
var G__41818 = null;
var G__41819 = (0);
var G__41820 = (0);
seq__41795 = G__41817;
chunk__41796 = G__41818;
count__41797 = G__41819;
i__41798 = G__41820;
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
var seq__41821 = cljs.core.seq.call(null,value);
var chunk__41822 = null;
var count__41823 = (0);
var i__41824 = (0);
while(true){
if((i__41824 < count__41823)){
var map__41825 = cljs.core._nth.call(null,chunk__41822,i__41824);
var map__41825__$1 = ((((!((map__41825 == null)))?((((map__41825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41825):map__41825);
var effect = map__41825__$1;
var ms = cljs.core.get.call(null,map__41825__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41825__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41821,chunk__41822,count__41823,i__41824,map__41825,map__41825__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41821,chunk__41822,count__41823,i__41824,map__41825,map__41825__$1,effect,ms,dispatch))
,ms);
}

var G__41829 = seq__41821;
var G__41830 = chunk__41822;
var G__41831 = count__41823;
var G__41832 = (i__41824 + (1));
seq__41821 = G__41829;
chunk__41822 = G__41830;
count__41823 = G__41831;
i__41824 = G__41832;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41821);
if(temp__4657__auto__){
var seq__41821__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41821__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41821__$1);
var G__41833 = cljs.core.chunk_rest.call(null,seq__41821__$1);
var G__41834 = c__28034__auto__;
var G__41835 = cljs.core.count.call(null,c__28034__auto__);
var G__41836 = (0);
seq__41821 = G__41833;
chunk__41822 = G__41834;
count__41823 = G__41835;
i__41824 = G__41836;
continue;
} else {
var map__41827 = cljs.core.first.call(null,seq__41821__$1);
var map__41827__$1 = ((((!((map__41827 == null)))?((((map__41827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41827):map__41827);
var effect = map__41827__$1;
var ms = cljs.core.get.call(null,map__41827__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41827__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41821,chunk__41822,count__41823,i__41824,map__41827,map__41827__$1,effect,ms,dispatch,seq__41821__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41821,chunk__41822,count__41823,i__41824,map__41827,map__41827__$1,effect,ms,dispatch,seq__41821__$1,temp__4657__auto__))
,ms);
}

var G__41837 = cljs.core.next.call(null,seq__41821__$1);
var G__41838 = null;
var G__41839 = (0);
var G__41840 = (0);
seq__41821 = G__41837;
chunk__41822 = G__41838;
count__41823 = G__41839;
i__41824 = G__41840;
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
var seq__41841 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41842 = null;
var count__41843 = (0);
var i__41844 = (0);
while(true){
if((i__41844 < count__41843)){
var event = cljs.core._nth.call(null,chunk__41842,i__41844);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41845 = seq__41841;
var G__41846 = chunk__41842;
var G__41847 = count__41843;
var G__41848 = (i__41844 + (1));
seq__41841 = G__41845;
chunk__41842 = G__41846;
count__41843 = G__41847;
i__41844 = G__41848;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41841);
if(temp__4657__auto__){
var seq__41841__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41841__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41841__$1);
var G__41849 = cljs.core.chunk_rest.call(null,seq__41841__$1);
var G__41850 = c__28034__auto__;
var G__41851 = cljs.core.count.call(null,c__28034__auto__);
var G__41852 = (0);
seq__41841 = G__41849;
chunk__41842 = G__41850;
count__41843 = G__41851;
i__41844 = G__41852;
continue;
} else {
var event = cljs.core.first.call(null,seq__41841__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41853 = cljs.core.next.call(null,seq__41841__$1);
var G__41854 = null;
var G__41855 = (0);
var G__41856 = (0);
seq__41841 = G__41853;
chunk__41842 = G__41854;
count__41843 = G__41855;
i__41844 = G__41856;
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
var seq__41857 = cljs.core.seq.call(null,value);
var chunk__41858 = null;
var count__41859 = (0);
var i__41860 = (0);
while(true){
if((i__41860 < count__41859)){
var event = cljs.core._nth.call(null,chunk__41858,i__41860);
clear_event.call(null,event);

var G__41861 = seq__41857;
var G__41862 = chunk__41858;
var G__41863 = count__41859;
var G__41864 = (i__41860 + (1));
seq__41857 = G__41861;
chunk__41858 = G__41862;
count__41859 = G__41863;
i__41860 = G__41864;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41857);
if(temp__4657__auto__){
var seq__41857__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41857__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41857__$1);
var G__41865 = cljs.core.chunk_rest.call(null,seq__41857__$1);
var G__41866 = c__28034__auto__;
var G__41867 = cljs.core.count.call(null,c__28034__auto__);
var G__41868 = (0);
seq__41857 = G__41865;
chunk__41858 = G__41866;
count__41859 = G__41867;
i__41860 = G__41868;
continue;
} else {
var event = cljs.core.first.call(null,seq__41857__$1);
clear_event.call(null,event);

var G__41869 = cljs.core.next.call(null,seq__41857__$1);
var G__41870 = null;
var G__41871 = (0);
var G__41872 = (0);
seq__41857 = G__41869;
chunk__41858 = G__41870;
count__41859 = G__41871;
i__41860 = G__41872;
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

//# sourceMappingURL=fx.js.map?rel=1514349645678
