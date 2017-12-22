// Compiled by ClojureScript 1.9.908 {}
goog.provide('p_and_c_analytics2017.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.events');
goog.require('p_and_c_analytics2017.routes');
goog.require('p_and_c_analytics2017.views');
goog.require('p_and_c_analytics2017.config');
goog.require('p_and_c_analytics2017.units');
p_and_c_analytics2017.core.dev_setup = (function p_and_c_analytics2017$core$dev_setup(){
if(p_and_c_analytics2017.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
p_and_c_analytics2017.core.mount_root = (function p_and_c_analytics2017$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.main_panel], null),document.getElementById("app"));
});
p_and_c_analytics2017.core.init = (function p_and_c_analytics2017$core$init(){
p_and_c_analytics2017.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.events","initialize-db","p-and-c-analytics2017.events/initialize-db",1057509074),p_and_c_analytics2017.units.units_data], null));

p_and_c_analytics2017.core.dev_setup.call(null);

return p_and_c_analytics2017.core.mount_root.call(null);
});
goog.exportSymbol('p_and_c_analytics2017.core.init', p_and_c_analytics2017.core.init);

//# sourceMappingURL=core.js.map?rel=1513976722378
