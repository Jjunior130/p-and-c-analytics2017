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
var G__34974 = (new goog.History());
goog.events.listen(G__34974,goog.history.EventType.NAVIGATE,((function (G__34974){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__34974))
);

G__34974.setEnabled(true);

return G__34974;
});
p_and_c_analytics2017.routes.app_routes = (function p_and_c_analytics2017$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__34849__auto___34990 = (function (params__34850__auto__){
if(cljs.core.map_QMARK_.call(null,params__34850__auto__)){
var map__34975 = params__34850__auto__;
var map__34975__$1 = ((((!((map__34975 == null)))?((((map__34975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34975):map__34975);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34850__auto__)){
var vec__34977 = params__34850__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34849__auto___34990);


var action__34849__auto___34991 = (function (params__34850__auto__){
if(cljs.core.map_QMARK_.call(null,params__34850__auto__)){
var map__34980 = params__34850__auto__;
var map__34980__$1 = ((((!((map__34980 == null)))?((((map__34980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34980):map__34980);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34850__auto__)){
var vec__34982 = params__34850__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34849__auto___34991);


var action__34849__auto___34992 = (function (params__34850__auto__){
if(cljs.core.map_QMARK_.call(null,params__34850__auto__)){
var map__34985 = params__34850__auto__;
var map__34985__$1 = ((((!((map__34985 == null)))?((((map__34985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34985):map__34985);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"units-panel","units-panel",1243592261)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34850__auto__)){
var vec__34987 = params__34850__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"units-panel","units-panel",1243592261)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__34849__auto___34992);


return p_and_c_analytics2017.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1514349632607
