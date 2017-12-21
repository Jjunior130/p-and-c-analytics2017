// Compiled by ClojureScript 1.9.908 {}
goog.provide('p_and_c_analytics2017.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.events');
p_and_c_analytics2017.routes.hook_browser_navigation_BANG_ = (function p_and_c_analytics2017$routes$hook_browser_navigation_BANG_(){
var G__64305 = (new goog.History());
goog.events.listen(G__64305,goog.history.EventType.NAVIGATE,((function (G__64305){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__64305))
);

G__64305.setEnabled(true);

return G__64305;
});
p_and_c_analytics2017.routes.app_routes = (function p_and_c_analytics2017$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__34840__auto___64316 = (function (params__34841__auto__){
if(cljs.core.map_QMARK_.call(null,params__34841__auto__)){
var map__64306 = params__34841__auto__;
var map__64306__$1 = ((((!((map__64306 == null)))?((((map__64306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64306):map__64306);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34841__auto__)){
var vec__64308 = params__34841__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34840__auto___64316);


var action__34840__auto___64317 = (function (params__34841__auto__){
if(cljs.core.map_QMARK_.call(null,params__34841__auto__)){
var map__64311 = params__34841__auto__;
var map__64311__$1 = ((((!((map__64311 == null)))?((((map__64311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64311):map__64311);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34841__auto__)){
var vec__64313 = params__34841__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34840__auto___64317);


return p_and_c_analytics2017.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1513855580327
