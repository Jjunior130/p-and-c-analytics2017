// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('p_and_c_analytics2017.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_initialize_DASH_db,(function (_,p__20246){
var vec__20247 = p__20246;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(0),null);
var units_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(1),null);
var units = cljs.core.cst$kw$units.cljs$core$IFn$_invoke$arity$1(units_data);
var fundamentals = cljs.core.cst$kw$fundamentals.cljs$core$IFn$_invoke$arity$1(units_data);
var all_dimensions = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$u,cljs.core.val)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (units,fundamentals,vec__20247,___$1,units_data){
return (function (p1__20245_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20245_SHARP_,null],null));
});})(units,fundamentals,vec__20247,___$1,units_data))
)),units),cljs.core.cst$kw$fundamental_DASH_units.cljs$core$IFn$_invoke$arity$1(units_data)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p_and_c_analytics2017.db.default_db,cljs.core.cst$kw$dimensions,all_dimensions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$units,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (units,fundamentals,all_dimensions,vec__20247,___$1,units_data){
return (function (p__20250){
var vec__20251 = p__20250;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20251,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20251,(1),null);
var unit = vec__20251;
if(cljs.core.truth_((fundamentals.cljs$core$IFn$_invoke$arity$1 ? fundamentals.cljs$core$IFn$_invoke$arity$1(name) : fundamentals.call(null,name)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,cljs.core.cst$kw$f,true)], null);
} else {
return unit;
}
});})(units,fundamentals,all_dimensions,vec__20247,___$1,units_data))
),units)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$events_SLASH_set_DASH_active_DASH_panel,(function (db,p__20254){
var vec__20255 = p__20254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,active_panel);
}));
