// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('p_and_c_analytics2017.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.events');
goog.require('p_and_c_analytics2017.routes');
goog.require('p_and_c_analytics2017.views');
goog.require('p_and_c_analytics2017.config');
goog.require('p_and_c_analytics2017.units');
p_and_c_analytics2017.core.dev_setup = (function p_and_c_analytics2017$core$dev_setup(){
if(p_and_c_analytics2017.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
p_and_c_analytics2017.core.mount_root = (function p_and_c_analytics2017$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.main_panel], null),document.getElementById("app"));
});
p_and_c_analytics2017.core.init = (function p_and_c_analytics2017$core$init(){
p_and_c_analytics2017.routes.app_routes();

var G__20648_20649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_initialize_DASH_db,p_and_c_analytics2017.units.units_data], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20648_20649) : re_frame.core.dispatch_sync.call(null,G__20648_20649));

p_and_c_analytics2017.core.dev_setup();

return p_and_c_analytics2017.core.mount_root();
});
goog.exportSymbol('p_and_c_analytics2017.core.init', p_and_c_analytics2017.core.init);
