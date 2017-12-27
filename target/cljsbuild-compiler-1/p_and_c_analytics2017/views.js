// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('p_and_c_analytics2017.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('p_and_c_analytics2017.subs');
goog.require('reagent.core');
p_and_c_analytics2017.views.units_grouping = (function p_and_c_analytics2017$views$units_grouping(name,grouped_units){
var sbi = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name);
var sbc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljs.core._LT_,cljs.core.cst$kw$str,"<"], null));
return ((function (sbi,sbc){
return (function (name__$1,grouped_units__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"2",cljs.core.cst$kw$justify,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,name__$1,cljs.core.cst$kw$level,cljs.core.cst$kw$level1], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$child,(function (){var fexpr__20584 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.count);
return (fexpr__20584.cljs$core$IFn$_invoke$arity$1 ? fexpr__20584.cljs$core$IFn$_invoke$arity$1(grouped_units__$1) : fexpr__20584.call(null,grouped_units__$1));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,"Sort-by:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$choices,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$label,"Name"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$dimension,cljs.core.cst$kw$label,"Dimension"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$ratio,cljs.core.cst$kw$label,"Ratio"], null)], null),cljs.core.cst$kw$model,sbi,cljs.core.cst$kw$on_DASH_change,((function (sbi,sbc){
return (function (id){
return cljs.core.reset_BANG_(sbi,id);
});})(sbi,sbc))
], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,cljs.core.cst$kw$str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sbc)),cljs.core.cst$kw$on_DASH_click,((function (sbi,sbc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sbc,((function (sbi,sbc){
return (function (p__20585){
var map__20586 = p__20585;
var map__20586__$1 = ((((!((map__20586 == null)))?((((map__20586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20586):map__20586);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,cljs.core.cst$kw$fn);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,fn)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljs.core._LT_,cljs.core.cst$kw$str,"<"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljs.core._GT_,cljs.core.cst$kw$str,">"], null);
}
});})(sbi,sbc))
);
});})(sbi,sbc))
], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sbi,sbc){
return (function (p__20588){
var vec__20589 = p__20588;
var name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20589,(0),null);
var map__20592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20589,(1),null);
var map__20592__$1 = ((((!((map__20592 == null)))?((((map__20592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20592):map__20592);
var properties = map__20592__$1;
var u = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,cljs.core.cst$kw$u);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,cljs.core.cst$kw$v);
var unit = vec__20589;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$margin,"4em",cljs.core.cst$kw$child,name__$2], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$around,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name__$2], null));
});})(sbi,sbc))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (sbi,sbc){
return (function (p__20594){
var vec__20595 = p__20594;
var name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(0),null);
var map__20598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(1),null);
var map__20598__$1 = ((((!((map__20598 == null)))?((((map__20598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20598):map__20598);
var u = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,cljs.core.cst$kw$u);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,cljs.core.cst$kw$v);
var unit = vec__20595;
var G__20600 = cljs.core.deref(sbi);
var G__20600__$1 = (((G__20600 instanceof cljs.core.Keyword))?G__20600.fqn:null);
switch (G__20600__$1) {
case "name":
return name__$2;

break;
case "dimension":
return u;

break;
case "ratio":
return v;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20600__$1)].join('')));

}
});})(sbi,sbc))
,cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sbc)),grouped_units__$1)))], null);
});
;})(sbi,sbc))
});
p_and_c_analytics2017.views.units_panel = (function p_and_c_analytics2017$views$units_panel(){
var units = (function (){var G__20602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$subs_SLASH_units], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20602) : re_frame.core.subscribe.call(null,G__20602));
})();
var dimensions = (function (){var G__20603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$subs_SLASH_dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20603) : re_frame.core.subscribe.call(null,G__20603));
})();
var sort_by_comp = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljs.core._LT_,cljs.core.cst$kw$str,"<"], null));
var grouped_by_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$dimension);
return ((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"1em",cljs.core.cst$kw$width,"auto",cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$padding,"0 0.5em 0 0",cljs.core.cst$kw$child,"# of units:"], null),cljs.core.count(cljs.core.deref(units))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,"Group by:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$choices,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$label,"Name"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$dimension,cljs.core.cst$kw$label,"Dimension"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$ratio,cljs.core.cst$kw$label,"Ratio"], null)], null),cljs.core.cst$kw$model,grouped_by_input,cljs.core.cst$kw$on_DASH_change,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (id){
return cljs.core.reset_BANG_(grouped_by_input,id);
});})(units,dimensions,sort_by_comp,grouped_by_input))
], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,cljs.core.cst$kw$str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_by_comp)),cljs.core.cst$kw$on_DASH_click,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_by_comp,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__20604){
var map__20605 = p__20604;
var map__20605__$1 = ((((!((map__20605 == null)))?((((map__20605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20605):map__20605);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,cljs.core.cst$kw$fn);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,fn)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljs.core._LT_,cljs.core.cst$kw$str,"<"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljs.core._GT_,cljs.core.cst$kw$str,">"], null);
}
});})(units,dimensions,sort_by_comp,grouped_by_input))
);
});})(units,dimensions,sort_by_comp,grouped_by_input))
], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__20607){
var vec__20608 = p__20607;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(0),null);
var grouped_units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(1),null);
var grouping = vec__20608;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.units_grouping,(function (){var or__7645__auto__ = (function (){var fexpr__20612 = cljs.core.deref(dimensions);
return (fexpr__20612.cljs$core$IFn$_invoke$arity$1 ? fexpr__20612.cljs$core$IFn$_invoke$arity$1(name) : fexpr__20612.call(null,name));
})();
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return name;
}
})(),grouped_units], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null));
});})(units,dimensions,sort_by_comp,grouped_by_input))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__20613){
var vec__20614 = p__20613;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,(0),null);
var grouped_units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,(1),null);
var or__7645__auto__ = (function (){var fexpr__20618 = cljs.core.deref(dimensions);
return (fexpr__20618.cljs$core$IFn$_invoke$arity$1 ? fexpr__20618.cljs$core$IFn$_invoke$arity$1(name) : fexpr__20618.call(null,name));
})();
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return name;
}
});})(units,dimensions,sort_by_comp,grouped_by_input))
,cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_by_comp)),cljs.core.group_by(((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__20619){
var vec__20620 = p__20619;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(0),null);
var map__20623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(1),null);
var map__20623__$1 = ((((!((map__20623 == null)))?((((map__20623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20623):map__20623);
var properties = map__20623__$1;
var u = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,cljs.core.cst$kw$u);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,cljs.core.cst$kw$v);
var unit = vec__20620;
var G__20625 = cljs.core.deref(grouped_by_input);
var G__20625__$1 = (((G__20625 instanceof cljs.core.Keyword))?G__20625.fqn:null);
switch (G__20625__$1) {
case "name":
return cljs.core.first(name);

break;
case "dimension":
return u;

break;
case "ratio":
return v;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20625__$1)].join('')));

}
});})(units,dimensions,sort_by_comp,grouped_by_input))
,cljs.core.deref(units)))))], null);
});
;})(units,dimensions,sort_by_comp,grouped_by_input))
});
p_and_c_analytics2017.views.home_title = (function p_and_c_analytics2017$views$home_title(){
var name = (function (){var G__20627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$subs_SLASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20627) : re_frame.core.subscribe.call(null,G__20627));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(name)),". This is the Home Page."].join(''),cljs.core.cst$kw$level,cljs.core.cst$kw$level1], null);
});
p_and_c_analytics2017.views.link_to_about_page = (function p_and_c_analytics2017$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,cljs.core.cst$kw$label,"go to About Page",cljs.core.cst$kw$href,"#/about"], null);
});
p_and_c_analytics2017.views.link_to_units_page = (function p_and_c_analytics2017$views$link_to_units_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,cljs.core.cst$kw$label,"go to Units Page",cljs.core.cst$kw$href,"#/units"], null);
});
p_and_c_analytics2017.views.home_panel = (function p_and_c_analytics2017$views$home_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"1em",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.home_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_about_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_units_page], null)], null)], null);
});
p_and_c_analytics2017.views.about_title = (function p_and_c_analytics2017$views$about_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"This is the About Page.",cljs.core.cst$kw$level,cljs.core.cst$kw$level1], null);
});
p_and_c_analytics2017.views.link_to_home_page = (function p_and_c_analytics2017$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,cljs.core.cst$kw$label,"go to Home Page",cljs.core.cst$kw$href,"#/"], null);
});
p_and_c_analytics2017.views.about_panel = (function p_and_c_analytics2017$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$gap,"1em",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_home_page], null)], null)], null);
});
p_and_c_analytics2017.views.panels = (function p_and_c_analytics2017$views$panels(panel_name){
var G__20628 = panel_name;
var G__20628__$1 = (((G__20628 instanceof cljs.core.Keyword))?G__20628.fqn:null);
switch (G__20628__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.about_panel], null);

break;
case "units-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.units_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);

}
});
p_and_c_analytics2017.views.show_panel = (function p_and_c_analytics2017$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.panels,panel_name], null);
});
p_and_c_analytics2017.views.main_panel = (function p_and_c_analytics2017$views$main_panel(){
var active_panel = (function (){var G__20630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_DASH_and_DASH_c_DASH_analytics2017$subs_SLASH_active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20630) : re_frame.core.subscribe.call(null,G__20630));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.panels,cljs.core.deref(active_panel)], null);
});
