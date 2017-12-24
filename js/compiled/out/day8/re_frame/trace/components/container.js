// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.components.container');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('re_frame.db');
goog.require('day8.re_frame.trace.panels.app_db');
goog.require('day8.re_frame.trace.panels.subvis');
goog.require('day8.re_frame.trace.panels.traces');
goog.require('reagent.core');
day8.re_frame.trace.components.container.devtools_inner = (function day8$re_frame$trace$components$container$devtools_inner(traces,opts){
var selected_tab = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null));
var panel_type = new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095).cljs$core$IFn$_invoke$arity$1(opts);
var external_window_QMARK_ = cljs.core._EQ_.call(null,panel_type,new cljs.core.Keyword(null,"popup","popup",635890211));
var unloading_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content","div.panel-content",-1191526548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),(cljs.core.truth_((function (){var and__27183__auto__ = external_window_QMARK_;
if(and__27183__auto__){
return cljs.core.deref.call(null,unloading_QMARK_);
} else {
return and__27183__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.host-closed","h1.host-closed",-376024389),"Host window has closed. Reopen external window to continue tracing."], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content-top","div.panel-content-top",2122112306),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav","div.nav",-1805454552),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_tab),new cljs.core.Keyword(null,"traces","traces",-1301138004)))?"active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,panel_type,external_window_QMARK_,unloading_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),new cljs.core.Keyword(null,"traces","traces",-1301138004)], null));
});})(selected_tab,panel_type,external_window_QMARK_,unloading_QMARK_))
], null),"Traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_tab),new cljs.core.Keyword(null,"app-db","app-db",865606302)))?"active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,panel_type,external_window_QMARK_,unloading_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null));
});})(selected_tab,panel_type,external_window_QMARK_,unloading_QMARK_))
], null),"App DB"], null),((external_window_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.popout-icon","img.popout-icon",-1923782245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:image/svg+xml;utf8,","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 8\" x=\"0px\" y=\"0px\">\n    <path fill=\"#444444\" d=\"M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z\"/>\n</svg>\n"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,panel_type,external_window_QMARK_,unloading_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null));
});})(selected_tab,panel_type,external_window_QMARK_,unloading_QMARK_))
], null)], null))], null)], null),(function (){var G__42830 = cljs.core.deref.call(null,selected_tab);
var G__42830__$1 = (((G__42830 instanceof cljs.core.Keyword))?G__42830.fqn:null);
switch (G__42830__$1) {
case "traces":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.traces.render_trace_panel,traces], null);

break;
case "app-db":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.app_db.render_state,re_frame.db.app_db], null);

break;
case "subvis":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.subvis.render_subvis,traces], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.app_db.render_state,re_frame.db.app_db], null);

}
})()], null);
});

//# sourceMappingURL=container.js.map?rel=1514003847083
