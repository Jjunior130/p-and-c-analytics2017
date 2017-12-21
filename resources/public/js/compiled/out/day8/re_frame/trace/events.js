// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.utils');
goog.require('day8.re_frame.trace.utils.traces');
goog.require('day8.re_frame.trace.utils.localstorage');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('day8.re_frame.trace.components.container');
goog.require('day8.re_frame.trace.styles');
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__59496){
var vec__59497 = p__59496;
var _ = cljs.core.nth.call(null,vec__59497,(0),null);
var width_PERCENT_ = cljs.core.nth.call(null,vec__59497,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"panel-width-ratio",(function (){var x__27545__auto__ = width_PERCENT_;
var y__27546__auto__ = 0.05;
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
})());

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__27545__auto__ = width_PERCENT_;
var y__27546__auto__ = 0.05;
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
})());
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__59500){
var vec__59501 = p__59500;
var _ = cljs.core.nth.call(null,vec__59501,(0),null);
var selected_tab = cljs.core.nth.call(null,vec__59501,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"selected-tab",selected_tab);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__59504){
var vec__59505 = p__59504;
var _ = cljs.core.nth.call(null,vec__59505,(0),null);
var show_panel_QMARK_ = cljs.core.nth.call(null,vec__59505,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"show-panel",show_panel_QMARK_);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var show_panel_QMARK_ = cljs.core.not.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
if(show_panel_QMARK_){
day8.re_frame.trace.utils.traces.enable_tracing_BANG_.call(null);
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame.trace.utils.traces.disable_tracing_BANG_.call(null);
}
}

day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"show-panel",show_panel_QMARK_);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
day8.re_frame.trace.events.mount = (function day8$re_frame$trace$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-trace--");
var doc = document;
day8.re_frame.trace.styles.inject_styles.call(null,popup_document);

(popup_window["onunload"] = ((function (app,doc){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null));
});})(app,doc))
);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (app,doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.components.container.devtools_inner,day8.re_frame.trace.utils.traces.traces,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
});})(app,doc))
], null))], null),app);
});
/**
 * Copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame.trace.events.open_debugger_window = (function day8$re_frame$trace$events$open_debugger_window(){
var map__59508 = new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var map__59508__$1 = ((((!((map__59508 == null)))?((((map__59508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59508):map__59508);
var ext_height = cljs.core.get.call(null,map__59508__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.call(null,map__59508__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var w = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__27195__auto__ = ext_width;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__27195__auto__ = ext_height;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
var d = w.document;
d.open();

d.write("<head></head><body style=\"margin: 0px;\"><div id=\"--re-frame-trace--\" class=\"external-window\"></div></body>");

(w["onload"] = ((function (map__59508,map__59508__$1,ext_height,ext_width,w,d){
return (function (){
return day8.re_frame.trace.events.mount.call(null,w,d);
});})(map__59508,map__59508__$1,ext_height,ext_width,w,d))
);

return d.close();
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
day8.re_frame.trace.events.open_debugger_window.call(null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame.trace.utils.traces.enable_tracing_BANG_.call(null);

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame.trace.utils.traces.disable_tracing_BANG_.call(null);

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null));
}));

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__59510){
var vec__59511 = p__59510;
var _ = cljs.core.nth.call(null,vec__59511,(0),null);
var unloading_QMARK_ = cljs.core.nth.call(null,vec__59511,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame.trace.events.save_filter_items = (function day8$re_frame$trace$events$save_filter_items(filter_items){
return day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"filter-items",filter_items);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__59514){
var vec__59515 = p__59514;
var _ = cljs.core.nth.call(null,vec__59515,(0),null);
var filter_items = cljs.core.nth.call(null,vec__59515,(1),null);
day8.re_frame.trace.events.save_filter_items.call(null,filter_items);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__59521){
var vec__59522 = p__59521;
var _ = cljs.core.nth.call(null,vec__59522,(0),null);
var filter_input = cljs.core.nth.call(null,vec__59522,(1),null);
var filter_type = cljs.core.nth.call(null,vec__59522,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some.call(null,((function (vec__59522,_,filter_input,filter_type){
return (function (p1__59518_SHARP_){
return cljs.core._EQ_.call(null,filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__59518_SHARP_));
});})(vec__59522,_,filter_input,filter_type))
,filter_items))?null:(function (){
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__27183__auto__){
return cljs.core.some.call(null,((function (and__27183__auto__,vec__59522,_,filter_input,filter_type){
return (function (p1__59519_SHARP_){
return cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__59519_SHARP_));
});})(and__27183__auto__,vec__59522,_,filter_input,filter_type))
,filter_items);
} else {
return and__27183__auto__;
}
})())){
cljs.core.remove.call(null,((function (vec__59522,_,filter_input,filter_type){
return (function (p1__59520_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__59520_SHARP_));
});})(vec__59522,_,filter_input,filter_type))
,filter_items);
} else {
}

return cljs.core.conj.call(null,filter_items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})()
);
day8.re_frame.trace.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__59526){
var vec__59527 = p__59526;
var _ = cljs.core.nth.call(null,vec__59527,(0),null);
var filter_id = cljs.core.nth.call(null,vec__59527,(1),null);
var new_db = cljs.core.remove.call(null,((function (vec__59527,_,filter_id){
return (function (p1__59525_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59525_SHARP_),filter_id);
});})(vec__59527,_,filter_id))
,filter_items);
day8.re_frame.trace.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame.trace.utils.utils.dissoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame.trace.events.save_filter_items.call(null,cljs.core.get_in.call(null,db,new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)));

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),(function (db,p__59530){
var vec__59531 = p__59530;
var _ = cljs.core.nth.call(null,vec__59531,(0),null);
var paths = cljs.core.nth.call(null,vec__59531,(1),null);
var new_paths = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,paths);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-paths",paths);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),paths);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),(function (db,p__59535){
var vec__59536 = p__59535;
var _ = cljs.core.nth.call(null,vec__59536,(0),null);
var path = cljs.core.nth.call(null,vec__59536,(1),null);
var new_db = cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),((function (vec__59536,_,path){
return (function (p1__59534_SHARP_){
return cljs.core.remove.call(null,((function (vec__59536,_,path){
return (function (p){
return cljs.core._EQ_.call(null,p,path);
});})(vec__59536,_,path))
,p1__59534_SHARP_);
});})(vec__59536,_,path))
);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-paths",cljs.core.get_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)));

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","add-path","app-db/add-path",679847590),(function (db,_){
var search_string = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null));
var path = (function (){try{if(clojure.string.blank_QMARK_.call(null,search_string)){
return null;
} else {
return cljs.reader.read_string.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_string),"]"].join(''));
}
}catch (e59540){var e = e59540;
return null;
}})();
if(!((path == null))){
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-paths",cljs.core.cons.call(null,path,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null))));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),((function (search_string,path){
return (function (p1__59539_SHARP_){
return cljs.core.cons.call(null,path,p1__59539_SHARP_);
});})(search_string,path))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),"");
} else {
return db;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__59541){
var vec__59542 = p__59541;
var _ = cljs.core.nth.call(null,vec__59542,(0),null);
var search_string = cljs.core.nth.call(null,vec__59542,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (db,p__59545){
var vec__59546 = p__59545;
var _ = cljs.core.nth.call(null,vec__59546,(0),null);
var paths = cljs.core.nth.call(null,vec__59546,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",paths);

return paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (paths,p__59549){
var vec__59550 = p__59549;
var _ = cljs.core.nth.call(null,vec__59550,(0),null);
var path = cljs.core.nth.call(null,vec__59550,(1),null);
var new_paths = ((cljs.core.contains_QMARK_.call(null,paths,path))?cljs.core.disj.call(null,paths,path):cljs.core.conj.call(null,paths,path));
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",new_paths);

return new_paths;
}));

//# sourceMappingURL=events.js.map?rel=1513855140760
