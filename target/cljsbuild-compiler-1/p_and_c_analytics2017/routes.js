// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('p_and_c_analytics2017.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.events');
p_and_c_analytics2017.routes.hook_browser_navigation_BANG_ = (function p_and_c_analytics2017$routes$hook_browser_navigation_BANG_(){
var G__20427 = (new goog.History());
var G__20428_20431 = G__20427;
var G__20429_20432 = goog.history.EventType.NAVIGATE;
var G__20430_20433 = ((function (G__20428_20431,G__20429_20432,G__20427){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__20428_20431,G__20429_20432,G__20427))
;
goog.events.listen(G__20428_20431,G__20429_20432,G__20430_20433);

G__20427.setEnabled(true);

return G__20427;
});
p_and_c_analytics2017.routes.app_routes = (function p_and_c_analytics2017$routes$app_routes(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__20269__auto___20455 = (function (params__20270__auto__){
if(cljs.core.map_QMARK_(params__20270__auto__)){
var map__20434 = params__20270__auto__;
var map__20434__$1 = ((((!((map__20434 == null)))?((((map__20434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20434):map__20434);
var G__20436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20436) : re_frame.core.dispatch.call(null,G__20436));
} else {
if(cljs.core.vector_QMARK_(params__20270__auto__)){
var vec__20437 = params__20270__auto__;
var G__20440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20440) : re_frame.core.dispatch.call(null,G__20440));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__20269__auto___20455);


var action__20269__auto___20456 = (function (params__20270__auto__){
if(cljs.core.map_QMARK_(params__20270__auto__)){
var map__20441 = params__20270__auto__;
var map__20441__$1 = ((((!((map__20441 == null)))?((((map__20441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20441):map__20441);
var G__20443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,cljs.core.cst$kw$about_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20443) : re_frame.core.dispatch.call(null,G__20443));
} else {
if(cljs.core.vector_QMARK_(params__20270__auto__)){
var vec__20444 = params__20270__auto__;
var G__20447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,cljs.core.cst$kw$about_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20447) : re_frame.core.dispatch.call(null,G__20447));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__20269__auto___20456);


var action__20269__auto___20457 = (function (params__20270__auto__){
if(cljs.core.map_QMARK_(params__20270__auto__)){
var map__20448 = params__20270__auto__;
var map__20448__$1 = ((((!((map__20448 == null)))?((((map__20448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20448):map__20448);
var G__20450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,cljs.core.cst$kw$units_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20450) : re_frame.core.dispatch.call(null,G__20450));
} else {
if(cljs.core.vector_QMARK_(params__20270__auto__)){
var vec__20451 = params__20270__auto__;
var G__20454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,cljs.core.cst$kw$units_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20454) : re_frame.core.dispatch.call(null,G__20454));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/units",action__20269__auto___20457);


return p_and_c_analytics2017.routes.hook_browser_navigation_BANG_();
});
