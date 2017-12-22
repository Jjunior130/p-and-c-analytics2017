// Compiled by ClojureScript 1.9.908 {}
goog.provide('p_and_c_analytics2017.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("p-and-c-analytics2017.events","initialize-db","p-and-c-analytics2017.events/initialize-db",1057509074),(function (_,p__49497){
var vec__49498 = p__49497;
var ___$1 = cljs.core.nth.call(null,vec__49498,(0),null);
var units_data = cljs.core.nth.call(null,vec__49498,(1),null);
var units = new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(units_data);
var fundamentals = new cljs.core.Keyword(null,"fundamentals","fundamentals",647119544).cljs$core$IFn$_invoke$arity$1(units_data);
var all_dimensions = cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),cljs.core.val)),cljs.core.map.call(null,((function (units,fundamentals,vec__49498,___$1,units_data){
return (function (p1__49496_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__49496_SHARP_,null],null));
});})(units,fundamentals,vec__49498,___$1,units_data))
)),units),new cljs.core.Keyword(null,"fundamental-units","fundamental-units",391114874).cljs$core$IFn$_invoke$arity$1(units_data));
return cljs.core.assoc.call(null,p_and_c_analytics2017.db.default_db,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),all_dimensions,new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (units,fundamentals,all_dimensions,vec__49498,___$1,units_data){
return (function (p__49501){
var vec__49502 = p__49501;
var name = cljs.core.nth.call(null,vec__49502,(0),null);
var properties = cljs.core.nth.call(null,vec__49502,(1),null);
var unit = vec__49502;
if(cljs.core.truth_(fundamentals.call(null,name))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.assoc.call(null,properties,new cljs.core.Keyword(null,"f","f",-1597136552),true)], null);
} else {
return unit;
}
});})(units,fundamentals,all_dimensions,vec__49498,___$1,units_data))
),units));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),(function (db,p__49505){
var vec__49506 = p__49505;
var _ = cljs.core.nth.call(null,vec__49506,(0),null);
var active_panel = cljs.core.nth.call(null,vec__49506,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1513979995648
