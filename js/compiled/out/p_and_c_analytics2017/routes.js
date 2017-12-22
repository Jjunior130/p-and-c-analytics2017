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
var G__31573 = (new goog.History());
goog.events.listen(G__31573,goog.history.EventType.NAVIGATE,((function (G__31573){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__31573))
);

G__31573.setEnabled(true);

return G__31573;
});
p_and_c_analytics2017.routes.app_routes = (function p_and_c_analytics2017$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__29051__auto___31584 = (function (params__29052__auto__){
if(cljs.core.map_QMARK_.call(null,params__29052__auto__)){
var map__31574 = params__29052__auto__;
var map__31574__$1 = ((((!((map__31574 == null)))?((((map__31574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31574):map__31574);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29052__auto__)){
var vec__31576 = params__29052__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__29051__auto___31584);


var action__29051__auto___31585 = (function (params__29052__auto__){
if(cljs.core.map_QMARK_.call(null,params__29052__auto__)){
var map__31579 = params__29052__auto__;
var map__31579__$1 = ((((!((map__31579 == null)))?((((map__31579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31579):map__31579);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29052__auto__)){
var vec__31581 = params__29052__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__29051__auto___31585);


return p_and_c_analytics2017.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1513974687681
