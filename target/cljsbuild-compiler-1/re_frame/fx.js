// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__19947 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__19948 = null;
var count__19949 = (0);
var i__19950 = (0);
while(true){
if((i__19950 < count__19949)){
var vec__19951 = chunk__19948.cljs$core$IIndexed$_nth$arity$2(null,i__19950);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19951,(1),null);
var temp__4655__auto___19957 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19957)){
var effect_fn_19958 = temp__4655__auto___19957;
(effect_fn_19958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19958.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__19959 = seq__19947;
var G__19960 = chunk__19948;
var G__19961 = count__19949;
var G__19962 = (i__19950 + (1));
seq__19947 = G__19959;
chunk__19948 = G__19960;
count__19949 = G__19961;
i__19950 = G__19962;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19947);
if(temp__4657__auto__){
var seq__19947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19947__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__19947__$1);
var G__19963 = cljs.core.chunk_rest(seq__19947__$1);
var G__19964 = c__8484__auto__;
var G__19965 = cljs.core.count(c__8484__auto__);
var G__19966 = (0);
seq__19947 = G__19963;
chunk__19948 = G__19964;
count__19949 = G__19965;
i__19950 = G__19966;
continue;
} else {
var vec__19954 = cljs.core.first(seq__19947__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19954,(1),null);
var temp__4655__auto___19967 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19967)){
var effect_fn_19968 = temp__4655__auto___19967;
(effect_fn_19968.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19968.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19968.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__19969 = cljs.core.next(seq__19947__$1);
var G__19970 = null;
var G__19971 = (0);
var G__19972 = (0);
seq__19947 = G__19969;
chunk__19948 = G__19970;
count__19949 = G__19971;
i__19950 = G__19972;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__19973 = cljs.core.seq(value);
var chunk__19974 = null;
var count__19975 = (0);
var i__19976 = (0);
while(true){
if((i__19976 < count__19975)){
var map__19977 = chunk__19974.cljs$core$IIndexed$_nth$arity$2(null,i__19976);
var map__19977__$1 = ((((!((map__19977 == null)))?((((map__19977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19977):map__19977);
var effect = map__19977__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19977__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19977__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19973,chunk__19974,count__19975,i__19976,map__19977,map__19977__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19973,chunk__19974,count__19975,i__19976,map__19977,map__19977__$1,effect,ms,dispatch))
,ms);
}

var G__19981 = seq__19973;
var G__19982 = chunk__19974;
var G__19983 = count__19975;
var G__19984 = (i__19976 + (1));
seq__19973 = G__19981;
chunk__19974 = G__19982;
count__19975 = G__19983;
i__19976 = G__19984;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19973);
if(temp__4657__auto__){
var seq__19973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19973__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__19973__$1);
var G__19985 = cljs.core.chunk_rest(seq__19973__$1);
var G__19986 = c__8484__auto__;
var G__19987 = cljs.core.count(c__8484__auto__);
var G__19988 = (0);
seq__19973 = G__19985;
chunk__19974 = G__19986;
count__19975 = G__19987;
i__19976 = G__19988;
continue;
} else {
var map__19979 = cljs.core.first(seq__19973__$1);
var map__19979__$1 = ((((!((map__19979 == null)))?((((map__19979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19979):map__19979);
var effect = map__19979__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19979__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19979__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19973,chunk__19974,count__19975,i__19976,map__19979,map__19979__$1,effect,ms,dispatch,seq__19973__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19973,chunk__19974,count__19975,i__19976,map__19979,map__19979__$1,effect,ms,dispatch,seq__19973__$1,temp__4657__auto__))
,ms);
}

var G__19989 = cljs.core.next(seq__19973__$1);
var G__19990 = null;
var G__19991 = (0);
var G__19992 = (0);
seq__19973 = G__19989;
chunk__19974 = G__19990;
count__19975 = G__19991;
i__19976 = G__19992;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__19993 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19994 = null;
var count__19995 = (0);
var i__19996 = (0);
while(true){
if((i__19996 < count__19995)){
var event = chunk__19994.cljs$core$IIndexed$_nth$arity$2(null,i__19996);
re_frame.router.dispatch(event);

var G__19997 = seq__19993;
var G__19998 = chunk__19994;
var G__19999 = count__19995;
var G__20000 = (i__19996 + (1));
seq__19993 = G__19997;
chunk__19994 = G__19998;
count__19995 = G__19999;
i__19996 = G__20000;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19993);
if(temp__4657__auto__){
var seq__19993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19993__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__19993__$1);
var G__20001 = cljs.core.chunk_rest(seq__19993__$1);
var G__20002 = c__8484__auto__;
var G__20003 = cljs.core.count(c__8484__auto__);
var G__20004 = (0);
seq__19993 = G__20001;
chunk__19994 = G__20002;
count__19995 = G__20003;
i__19996 = G__20004;
continue;
} else {
var event = cljs.core.first(seq__19993__$1);
re_frame.router.dispatch(event);

var G__20005 = cljs.core.next(seq__19993__$1);
var G__20006 = null;
var G__20007 = (0);
var G__20008 = (0);
seq__19993 = G__20005;
chunk__19994 = G__20006;
count__19995 = G__20007;
i__19996 = G__20008;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20009 = cljs.core.seq(value);
var chunk__20010 = null;
var count__20011 = (0);
var i__20012 = (0);
while(true){
if((i__20012 < count__20011)){
var event = chunk__20010.cljs$core$IIndexed$_nth$arity$2(null,i__20012);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__20013 = seq__20009;
var G__20014 = chunk__20010;
var G__20015 = count__20011;
var G__20016 = (i__20012 + (1));
seq__20009 = G__20013;
chunk__20010 = G__20014;
count__20011 = G__20015;
i__20012 = G__20016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20009);
if(temp__4657__auto__){
var seq__20009__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20009__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__20009__$1);
var G__20017 = cljs.core.chunk_rest(seq__20009__$1);
var G__20018 = c__8484__auto__;
var G__20019 = cljs.core.count(c__8484__auto__);
var G__20020 = (0);
seq__20009 = G__20017;
chunk__20010 = G__20018;
count__20011 = G__20019;
i__20012 = G__20020;
continue;
} else {
var event = cljs.core.first(seq__20009__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__20021 = cljs.core.next(seq__20009__$1);
var G__20022 = null;
var G__20023 = (0);
var G__20024 = (0);
seq__20009 = G__20021;
chunk__20010 = G__20022;
count__20011 = G__20023;
i__20012 = G__20024;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
