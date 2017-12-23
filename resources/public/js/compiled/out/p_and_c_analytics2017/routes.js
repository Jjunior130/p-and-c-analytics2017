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
var G__34975 = (new goog.History());
goog.events.listen(G__34975,goog.history.EventType.NAVIGATE,((function (G__34975){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__34975))
);

G__34975.setEnabled(true);

return G__34975;
});
p_and_c_analytics2017.routes.app_routes = (function p_and_c_analytics2017$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__34850__auto___34991 = (function (params__34851__auto__){
if(cljs.core.map_QMARK_.call(null,params__34851__auto__)){
var map__34976 = params__34851__auto__;
var map__34976__$1 = ((((!((map__34976 == null)))?((((map__34976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34976):map__34976);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34851__auto__)){
var vec__34978 = params__34851__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34850__auto___34991);


var action__34850__auto___34992 = (function (params__34851__auto__){
if(cljs.core.map_QMARK_.call(null,params__34851__auto__)){
var map__34981 = params__34851__auto__;
var map__34981__$1 = ((((!((map__34981 == null)))?((((map__34981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34981):map__34981);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34851__auto__)){
var vec__34983 = params__34851__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34850__auto___34992);


var action__34850__auto___34993 = (function (params__34851__auto__){
if(cljs.core.map_QMARK_.call(null,params__34851__auto__)){
var map__34986 = params__34851__auto__;
var map__34986__$1 = ((((!((map__34986 == null)))?((((map__34986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34986):map__34986);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"units-panel","units-panel",1243592261)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34851__auto__)){
var vec__34988 = params__34851__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),new cljs.core.Keyword(null,"units-panel","units-panel",1243592261)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/units",action__34850__auto___34993);


return p_and_c_analytics2017.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1514003833703
