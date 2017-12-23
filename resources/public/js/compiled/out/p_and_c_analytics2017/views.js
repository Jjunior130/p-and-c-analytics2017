// Compiled by ClojureScript 1.9.908 {}
goog.provide('p_and_c_analytics2017.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('p_and_c_analytics2017.subs');
goog.require('reagent.core');
p_and_c_analytics2017.views.units_grouping = (function p_and_c_analytics2017$views$units_grouping(name,grouped_units){
var sbi = reagent.core.atom.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
var sbc = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core._LT_,new cljs.core.Keyword(null,"str","str",1089608819),"<"], null));
return ((function (sbi,sbc){
return (function (name__$1,grouped_units__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),name__$1,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),"Name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"label","label",1718410804),"Dimension"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"label","label",1718410804),"Ratio"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),sbi,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (sbi,sbc){
return (function (id){
return cljs.core.reset_BANG_.call(null,sbi,id);
});})(sbi,sbc))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"str","str",1089608819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbc)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sbi,sbc){
return (function (){
return cljs.core.swap_BANG_.call(null,sbc,((function (sbi,sbc){
return (function (p__50760){
var map__50761 = p__50760;
var map__50761__$1 = ((((!((map__50761 == null)))?((((map__50761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50761):map__50761);
var fn = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core._EQ_.call(null,cljs.core._GT_,fn)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core._LT_,new cljs.core.Keyword(null,"str","str",1089608819),"<"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core._GT_,new cljs.core.Keyword(null,"str","str",1089608819),">"], null);
}
});})(sbi,sbc))
);
});})(sbi,sbc))
], null)], null)], null),cljs.core.map.call(null,((function (sbi,sbc){
return (function (p__50763){
var vec__50764 = p__50763;
var name__$2 = cljs.core.nth.call(null,vec__50764,(0),null);
var properties = cljs.core.nth.call(null,vec__50764,(1),null);
var unit = vec__50764;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name__$2], null));
});})(sbi,sbc))
,cljs.core.sort_by.call(null,((function (sbi,sbc){
return (function (p__50767){
var vec__50768 = p__50767;
var name__$2 = cljs.core.nth.call(null,vec__50768,(0),null);
var map__50771 = cljs.core.nth.call(null,vec__50768,(1),null);
var map__50771__$1 = ((((!((map__50771 == null)))?((((map__50771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50771):map__50771);
var u = cljs.core.get.call(null,map__50771__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__50771__$1,new cljs.core.Keyword(null,"v","v",21465059));
var unit = vec__50768;
var G__50773 = cljs.core.deref.call(null,sbi);
var G__50773__$1 = (((G__50773 instanceof cljs.core.Keyword))?G__50773.fqn:null);
switch (G__50773__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50773__$1)].join('')));

}
});})(sbi,sbc))
,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sbc)),grouped_units__$1)))], null);
});
;})(sbi,sbc))
});
p_and_c_analytics2017.views.units_panel = (function p_and_c_analytics2017$views$units_panel(){
var units = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","units","p-and-c-analytics2017.subs/units",-1120045555)], null));
var dimensions = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","dimensions","p-and-c-analytics2017.subs/dimensions",-573635021)], null));
var sort_by_comp = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core._LT_,new cljs.core.Keyword(null,"str","str",1089608819),"<"], null));
var grouped_by_input = reagent.core.atom.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198));
return ((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),"Name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"label","label",1718410804),"Dimension"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"label","label",1718410804),"Ratio"], null)], null),new cljs.core.Keyword(null,"model","model",331153215),grouped_by_input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (id){
return cljs.core.reset_BANG_.call(null,grouped_by_input,id);
});})(units,dimensions,sort_by_comp,grouped_by_input))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"str","str",1089608819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sort_by_comp)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (){
return cljs.core.swap_BANG_.call(null,sort_by_comp,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__50775){
var map__50776 = p__50775;
var map__50776__$1 = ((((!((map__50776 == null)))?((((map__50776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50776):map__50776);
var fn = cljs.core.get.call(null,map__50776__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core._EQ_.call(null,cljs.core._GT_,fn)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core._LT_,new cljs.core.Keyword(null,"str","str",1089608819),"<"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core._GT_,new cljs.core.Keyword(null,"str","str",1089608819),">"], null);
}
});})(units,dimensions,sort_by_comp,grouped_by_input))
);
});})(units,dimensions,sort_by_comp,grouped_by_input))
], null)], null)], null),cljs.core.map.call(null,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__50778){
var vec__50779 = p__50778;
var name = cljs.core.nth.call(null,vec__50779,(0),null);
var grouped_units = cljs.core.nth.call(null,vec__50779,(1),null);
var grouping = vec__50779;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.units_grouping,(function (){var or__27195__auto__ = cljs.core.deref.call(null,dimensions).call(null,name);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return name;
}
})(),grouped_units], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
});})(units,dimensions,sort_by_comp,grouped_by_input))
,cljs.core.sort_by.call(null,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__50782){
var vec__50783 = p__50782;
var name = cljs.core.nth.call(null,vec__50783,(0),null);
var grouped_units = cljs.core.nth.call(null,vec__50783,(1),null);
var or__27195__auto__ = cljs.core.deref.call(null,dimensions).call(null,name);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return name;
}
});})(units,dimensions,sort_by_comp,grouped_by_input))
,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sort_by_comp)),cljs.core.group_by.call(null,((function (units,dimensions,sort_by_comp,grouped_by_input){
return (function (p__50786){
var vec__50787 = p__50786;
var name = cljs.core.nth.call(null,vec__50787,(0),null);
var map__50790 = cljs.core.nth.call(null,vec__50787,(1),null);
var map__50790__$1 = ((((!((map__50790 == null)))?((((map__50790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50790):map__50790);
var properties = map__50790__$1;
var u = cljs.core.get.call(null,map__50790__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__50790__$1,new cljs.core.Keyword(null,"v","v",21465059));
var unit = vec__50787;
var G__50792 = cljs.core.deref.call(null,grouped_by_input);
var G__50792__$1 = (((G__50792 instanceof cljs.core.Keyword))?G__50792.fqn:null);
switch (G__50792__$1) {
case "name":
return cljs.core.first.call(null,name);

break;
case "dimension":
return u;

break;
case "ratio":
return v;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50792__$1)].join('')));

}
});})(units,dimensions,sort_by_comp,grouped_by_input))
,cljs.core.deref.call(null,units)))))], null);
});
;})(units,dimensions,sort_by_comp,grouped_by_input))
});
p_and_c_analytics2017.views.home_title = (function p_and_c_analytics2017$views$home_title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","name","p-and-c-analytics2017.subs/name",1122959101)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,name)),". This is the Home Page."].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
p_and_c_analytics2017.views.link_to_about_page = (function p_and_c_analytics2017$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null);
});
p_and_c_analytics2017.views.link_to_units_page = (function p_and_c_analytics2017$views$link_to_units_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Units Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/units"], null);
});
p_and_c_analytics2017.views.home_panel = (function p_and_c_analytics2017$views$home_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.home_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_about_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_units_page], null)], null)], null);
});
p_and_c_analytics2017.views.about_title = (function p_and_c_analytics2017$views$about_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
p_and_c_analytics2017.views.link_to_home_page = (function p_and_c_analytics2017$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
p_and_c_analytics2017.views.about_panel = (function p_and_c_analytics2017$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_home_page], null)], null)], null);
});
p_and_c_analytics2017.views.panels = (function p_and_c_analytics2017$views$panels(panel_name){
var G__50794 = panel_name;
var G__50794__$1 = (((G__50794 instanceof cljs.core.Keyword))?G__50794.fqn:null);
switch (G__50794__$1) {
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
p_and_c_analytics2017.views.show_panel = (function p_and_c_analytics2017$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.panels,panel_name], null);
});
p_and_c_analytics2017.views.main_panel = (function p_and_c_analytics2017$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","active-panel","p-and-c-analytics2017.subs/active-panel",-947776158)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.panels,cljs.core.deref.call(null,active_panel)], null);
});

//# sourceMappingURL=views.js.map?rel=1514071609164
