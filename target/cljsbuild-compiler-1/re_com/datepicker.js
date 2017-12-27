// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_com.datepicker');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('re_com.validate');
goog.require('cljs_time.predicates');
goog.require('cljs_time.format');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.popover');
re_com.datepicker.month_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM yyyy");
re_com.datepicker.week_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("ww");
re_com.datepicker.date_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy MMM dd");
re_com.datepicker.iso8601__GT_date = (function re_com$datepicker$iso8601__GT_date(iso8601){
if(cljs.core.seq(iso8601)){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((function (){var G__19350 = cljs.core.cst$kw$basic_DASH_date;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__19350) : cljs_time.format.formatters.call(null,G__19350));
})(),iso8601);
} else {
return null;
}
});
re_com.datepicker.month_label = (function re_com$datepicker$month_label(date){
return cljs_time.format.unparse(re_com.datepicker.month_format,date);
});
re_com.datepicker.dec_month = (function re_com$datepicker$dec_month(date){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_month = (function re_com$datepicker$inc_month(date){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.datepicker.inc_date = (function re_com$datepicker$inc_date(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
re_com.datepicker.previous = (function re_com$datepicker$previous(var_args){
var G__19352 = arguments.length;
switch (G__19352) {
case 1:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2(pred,re_com.util.now__GT_utc());
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3(pred,date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});

re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(date) : pred.call(null,date)))){
return date;
} else {
var G__19354 = pred;
var G__19355 = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,period);
var G__19356 = period;
pred = G__19354;
date = G__19355;
period = G__19356;
continue;
}
break;
}
});

re_com.datepicker.previous.cljs$lang$maxFixedArity = 3;

re_com.datepicker._EQ_date = (function re_com$datepicker$_EQ_date(date1,date2){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(date1),cljs_time.core.year(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date1),cljs_time.core.month(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day(date1),cljs_time.core.day(date2)));
});
re_com.datepicker._LT__EQ_date = (function re_com$datepicker$_LT__EQ_date(date1,date2){
var or__7645__auto__ = re_com.datepicker._EQ_date(date1,date2);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs_time.core.before_QMARK_(date1,date2);
}
});
re_com.datepicker._GT__EQ_date = (function re_com$datepicker$_GT__EQ_date(date1,date2){
var or__7645__auto__ = re_com.datepicker._EQ_date(date1,date2);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs_time.core.after_QMARK_(date1,date2);
}
});
re_com.datepicker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Mo,cljs.core.cst$kw$short_DASH_name,"M",cljs.core.cst$kw$name,"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Tu,cljs.core.cst$kw$short_DASH_name,"T",cljs.core.cst$kw$name,"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$We,cljs.core.cst$kw$short_DASH_name,"W",cljs.core.cst$kw$name,"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Th,cljs.core.cst$kw$short_DASH_name,"T",cljs.core.cst$kw$name,"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Fr,cljs.core.cst$kw$short_DASH_name,"F",cljs.core.cst$kw$name,"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Sa,cljs.core.cst$kw$short_DASH_name,"S",cljs.core.cst$kw$name,"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$Su,cljs.core.cst$kw$short_DASH_name,"S",cljs.core.cst$kw$name,"SUN"], null)], null);
re_com.datepicker.rotate = (function re_com$datepicker$rotate(n,coll){
var c = cljs.core.count(coll);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(c,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(n,c),cljs.core.cycle(coll)));
});
re_com.datepicker.is_day_pred = (function re_com$datepicker$is_day_pred(d){
return (function (p1__19357_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(p1__19357_SHARP_),(d + (1)));
});
});
re_com.datepicker.main_div_with = (function re_com$datepicker$main_div_with(table_div,hide_border_QMARK_,class$,style,attr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$radius,"4px",cljs.core.cst$kw$size,"none",cljs.core.cst$kw$border,(cljs.core.truth_(hide_border_QMARK_)?"none":null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-datepicker datepicker noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"13px",cljs.core.cst$kw$position,"static"], null),style], 0))], null),attr], 0)),table_div], null)], null)], null)], null);
});
/**
 * Answer 2 x rows showing month with nav buttons and days NOTE: not internationalized
 */
re_com.datepicker.table_thead = (function re_com$datepicker$table_thead(display_month,p__19358){
var map__19359 = p__19358;
var map__19359__$1 = ((((!((map__19359 == null)))?((((map__19359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19359):map__19359);
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359__$1,cljs.core.cst$kw$show_DASH_weeks_QMARK_);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359__$1,cljs.core.cst$kw$minimum);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359__$1,cljs.core.cst$kw$maximum);
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19359__$1,cljs.core.cst$kw$start_DASH_of_DASH_week);
var prev_date = re_com.datepicker.dec_month(cljs.core.deref(display_month));
var minimum__$1 = re_com.util.deref_or_value(minimum);
var maximum__$1 = re_com.util.deref_or_value(maximum);
var prev_enabled_QMARK_ = (cljs.core.truth_(minimum__$1)?cljs_time.core.after_QMARK_(prev_date,re_com.datepicker.dec_month(minimum__$1)):true);
var next_date = re_com.datepicker.inc_month(cljs.core.deref(display_month));
var next_enabled_QMARK_ = (cljs.core.truth_(maximum__$1)?cljs_time.core.before_QMARK_(next_date,maximum__$1):true);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["prev ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prev_enabled_QMARK_)?"available selectable":"disabled"))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null),cljs.core.cst$kw$on_DASH_click,((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (event){
if(cljs.core.truth_(prev_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,prev_date);
} else {
}

return null;
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_chevron_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"24px"], null)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"month",cljs.core.cst$kw$col_DASH_span,"5"], null),re_com.datepicker.month_label(cljs.core.deref(display_month))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["next ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(next_enabled_QMARK_)?"available selectable":"disabled"))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null),cljs.core.cst$kw$on_DASH_click,((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (event){
if(cljs.core.truth_(next_enabled_QMARK_)){
cljs.core.reset_BANG_(display_month,next_date);
} else {
}

return null;
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_chevron_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"24px"], null)], null)], null)], null)], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(template_row,(function (){var iter__8453__auto__ = ((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function re_com$datepicker$table_thead_$_iter__19361(s__19362){
return (new cljs.core.LazySeq(null,((function (prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week){
return (function (){
var s__19362__$1 = s__19362;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19362__$1);
if(temp__4657__auto__){
var s__19362__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19362__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__19362__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__19364 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__19363 = (0);
while(true){
if((i__19363 < size__8452__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__19363);
cljs.core.chunk_append(b__19364,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"day-enabled"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(day))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(day)], null)));

var G__19365 = (i__19363 + (1));
i__19363 = G__19365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19364),re_com$datepicker$table_thead_$_iter__19361(cljs.core.chunk_rest(s__19362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19364),null);
}
} else {
var day = cljs.core.first(s__19362__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"day-enabled"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(day))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(day)], null)),re_com$datepicker$table_thead_$_iter__19361(cljs.core.rest(s__19362__$2)));
}
} else {
return null;
}
break;
}
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
,null,null));
});})(prev_date,minimum__$1,maximum__$1,prev_enabled_QMARK_,next_date,next_enabled_QMARK_,template_row,map__19359,map__19359__$1,show_weeks_QMARK_,minimum,maximum,start_of_week))
;
return iter__8453__auto__(re_com.datepicker.rotate(start_of_week,re_com.datepicker.days_vector));
})())], null);
});
re_com.datepicker.selection_changed = (function re_com$datepicker$selection_changed(selection,change_callback){
return (change_callback.cljs$core$IFn$_invoke$arity$1 ? change_callback.cljs$core$IFn$_invoke$arity$1(selection) : change_callback.call(null,selection));
});
re_com.datepicker.table_td = (function re_com$datepicker$table_td(date,focus_month,selected,today,p__19366,disabled_QMARK_,on_change){
var map__19367 = p__19366;
var map__19367__$1 = ((((!((map__19367 == null)))?((((map__19367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19367):map__19367);
var attributes = map__19367__$1;
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19367__$1,cljs.core.cst$kw$minimum);
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19367__$1,cljs.core.cst$kw$maximum);
var minimum__$1 = re_com.util.deref_or_value(minimum);
var maximum__$1 = re_com.util.deref_or_value(maximum);
var enabled_min = (cljs.core.truth_(minimum__$1)?re_com.datepicker._GT__EQ_date(date,minimum__$1):true);
var enabled_max = (cljs.core.truth_(maximum__$1)?re_com.datepicker._LT__EQ_date(date,maximum__$1):true);
var enabled_day = (function (){var and__7633__auto__ = enabled_min;
if(cljs.core.truth_(and__7633__auto__)){
return enabled_max;
} else {
return and__7633__auto__;
}
})();
var disabled_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not((function (){var fexpr__19369 = cljs.core.cst$kw$selectable_DASH_fn.cljs$core$IFn$_invoke$arity$1(attributes);
return (fexpr__19369.cljs$core$IFn$_invoke$arity$1 ? fexpr__19369.cljs$core$IFn$_invoke$arity$1(date) : fexpr__19369.call(null,date));
})()):true);
var classes = (cljs.core.truth_(disabled_QMARK_)?"off":((disabled_day_QMARK_)?"off":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus_month,cljs_time.core.month(date)))?"available":"available off"
)));
var classes__$1 = (cljs.core.truth_((function (){var and__7633__auto__ = selected;
if(cljs.core.truth_(and__7633__auto__)){
return re_com.datepicker._EQ_date(selected,date);
} else {
return and__7633__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(classes)," active start-date end-date"].join(''):(cljs.core.truth_((function (){var and__7633__auto__ = today;
if(cljs.core.truth_(and__7633__auto__)){
return re_com.datepicker._EQ_date(date,today);
} else {
return and__7633__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(classes)," today"].join(''):classes
));
var on_click = ((function (minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,map__19367,map__19367__$1,attributes,minimum,maximum){
return (function (){
if(cljs.core.truth_((function (){var or__7645__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return disabled_day_QMARK_;
}
})())){
return null;
} else {
return re_com.datepicker.selection_changed(date,on_change);
}
});})(minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,map__19367,map__19367__$1,attributes,minimum,maximum))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,classes__$1,cljs.core.cst$kw$on_DASH_click,((function (minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,on_click,map__19367,map__19367__$1,attributes,minimum,maximum){
return (function (event){
on_click();

return null;
});})(minimum__$1,maximum__$1,enabled_min,enabled_max,enabled_day,disabled_day_QMARK_,classes,classes__$1,on_click,map__19367,map__19367__$1,attributes,minimum,maximum))
], null),cljs_time.core.day(date)], null);
});
re_com.datepicker.week_td = (function re_com$datepicker$week_td(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"week"], null),cljs_time.format.unparse(re_com.datepicker.week_format,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
re_com.datepicker.table_tr = (function re_com$datepicker$table_tr(date,focus_month,selected,attributes,disabled_QMARK_,on_change){
var table_row = (cljs.core.truth_(cljs.core.cst$kw$show_DASH_weeks_QMARK_.cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,re_com.datepicker.week_td(date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null));
var row_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (table_row){
return (function (p1__19370_SHARP_){
return re_com.datepicker.inc_date(date,p1__19370_SHARP_);
});})(table_row))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
var today = (cljs.core.truth_(cljs.core.cst$kw$show_DASH_today_QMARK_.cljs$core$IFn$_invoke$arity$1(attributes))?cljs.core.cst$kw$today.cljs$core$IFn$_invoke$arity$1(attributes):null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(table_row,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (table_row,row_dates,today){
return (function (p1__19371_SHARP_){
return re_com.datepicker.table_td(p1__19371_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change);
});})(table_row,row_dates,today))
,row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
re_com.datepicker.table_tbody = (function re_com$datepicker$table_tbody(display_month,selected,attributes,disabled_QMARK_,on_change){
var start_of_week = cljs.core.cst$kw$start_DASH_of_DASH_week.cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = re_com.datepicker.previous.cljs$core$IFn$_invoke$arity$2(re_com.datepicker.is_day_pred(start_of_week),display_month);
var focus_month = cljs_time.core.month(display_month);
var row_start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (start_of_week,current_start,focus_month){
return (function (p1__19372_SHARP_){
return re_com.datepicker.inc_date(current_start,((7) * p1__19372_SHARP_));
});})(start_of_week,current_start,focus_month))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (start_of_week,current_start,focus_month,row_start_dates){
return (function (p1__19373_SHARP_){
return re_com.datepicker.table_tr(p1__19373_SHARP_,focus_month,selected,attributes,disabled_QMARK_,on_change);
});})(start_of_week,current_start,focus_month,row_start_dates))
,row_start_dates));
});
/**
 * Augment passed attributes with extra info/defaults
 */
re_com.datepicker.configure = (function re_com$datepicker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_(cljs.core.cst$kw$selectable_DASH_fn.cljs$core$IFn$_invoke$arity$1(attributes)))?cljs.core.cst$kw$selectable_DASH_fn.cljs$core$IFn$_invoke$arity$1(attributes):(function (date){
return true;
}));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$selectable_DASH_fn,selectable_fn,cljs.core.cst$kw$today,re_com.util.now__GT_utc()], null)], 0));
});
re_com.datepicker.datepicker_args_desc = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"goog.date.UtcDateTime | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.goog_date_QMARK_,cljs.core.cst$kw$description,"the selected date. If provided, should pass pred :selectable-fn"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"goog.date.UtcDateTime -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when a new selection is made"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, the can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$selectable_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"(fn [date] true)",cljs.core.cst$kw$type,"pred",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"Predicate is passed a date. If it answers false, day will be shown disabled and can't be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$show_DASH_weeks_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$show_DASH_today_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, today's date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$minimum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"goog.date.UtcDateTime | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.goog_date_QMARK_,cljs.core.cst$kw$description,"no selection or navigation before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$maximum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"goog.date.UtcDateTime | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.goog_date_QMARK_,cljs.core.cst$kw$description,"no selection or navigation after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$start_DASH_of_DASH_week,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(6),cljs.core.cst$kw$type,"int",cljs.core.cst$kw$description,"first day of week (Monday = 0 ... Sunday = 6)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
re_com.datepicker.datepicker = (function re_com$datepicker$datepicker(var_args){
var args__8821__auto__ = [];
var len__8814__auto___19381 = arguments.length;
var i__8815__auto___19382 = (0);
while(true){
if((i__8815__auto___19382 < len__8814__auto___19381)){
args__8821__auto__.push((arguments[i__8815__auto___19382]));

var G__19383 = (i__8815__auto___19382 + (1));
i__8815__auto___19382 = G__19383;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic = (function (p__19375){
var map__19376 = p__19375;
var map__19376__$1 = ((((!((map__19376 == null)))?((((map__19376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19376):map__19376);
var args = map__19376__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19376__$1,cljs.core.cst$kw$model);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["datepicker"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var display_month = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs_time.core.now();
}
})()));
return ((function (external_model,internal_model,display_month,map__19376,map__19376__$1,args,model){
return (function() { 
var re_com$datepicker$datepicker_component__delegate = function (p__19378){
var map__19379 = p__19378;
var map__19379__$1 = ((((!((map__19379 == null)))?((((map__19379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19379):map__19379);
var args__$1 = map__19379__$1;
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$model);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$on_DASH_change);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$disabled_QMARK_);
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19379__$1,cljs.core.cst$kw$start_DASH_of_DASH_week,(6));
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["datepicker"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-args-desc args \"datepicker\")"));
}

var latest_ext_model = re_com.util.deref_or_value(model__$1);
var props_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start_DASH_of_DASH_week,start_of_week], null)], 0));
var configuration = re_com.datepicker.configure(props_with_defaults);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);

cljs.core.reset_BANG_(display_month,cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs_time.core.now();
}
})()));
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.main_div_with,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"table-condensed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_thead,display_month,configuration], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.table_tbody,cljs.core.deref(display_month),cljs.core.deref(internal_model),configuration,(((disabled_QMARK_ == null))?false:re_com.util.deref_or_value(disabled_QMARK_)),on_change], null)], null),hide_border_QMARK_,class$,style,attr], null);
};
var re_com$datepicker$datepicker_component = function (var_args){
var p__19378 = null;
if (arguments.length > 0) {
var G__19384__i = 0, G__19384__a = new Array(arguments.length -  0);
while (G__19384__i < G__19384__a.length) {G__19384__a[G__19384__i] = arguments[G__19384__i + 0]; ++G__19384__i;}
  p__19378 = new cljs.core.IndexedSeq(G__19384__a,0,null);
} 
return re_com$datepicker$datepicker_component__delegate.call(this,p__19378);};
re_com$datepicker$datepicker_component.cljs$lang$maxFixedArity = 0;
re_com$datepicker$datepicker_component.cljs$lang$applyTo = (function (arglist__19385){
var p__19378 = cljs.core.seq(arglist__19385);
return re_com$datepicker$datepicker_component__delegate(p__19378);
});
re_com$datepicker$datepicker_component.cljs$core$IFn$_invoke$arity$variadic = re_com$datepicker$datepicker_component__delegate;
return re_com$datepicker$datepicker_component;
})()
;
;})(external_model,internal_model,display_month,map__19376,map__19376__$1,args,model))
});

re_com.datepicker.datepicker.cljs$lang$maxFixedArity = (0);

re_com.datepicker.datepicker.cljs$lang$applyTo = (function (seq19374){
return re_com.datepicker.datepicker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19374));
});

/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.datepicker.anchor_button = (function re_com$datepicker$anchor_button(shown_QMARK_,model,format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"input-group display-flex noselect",cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$on_DASH_click,(function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shown_QMARK_,cljs.core.not);

return null;
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$class,"noselect",cljs.core.cst$kw$min_DASH_width,"10em",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"form-control dropdown-button"], null),(((re_com.util.deref_or_value(model) instanceof goog.date.Date))?cljs_time.format.unparse(((cljs.core.seq(format))?cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format):re_com.datepicker.date_format),re_com.util.deref_or_value(model)):"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$dropdown_DASH_button$activator$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"3px 0px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_apps,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"24px"], null)], null)], null)], null)], null)], null)], null);
});
re_com.datepicker.datepicker_dropdown_args_desc = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(re_com.datepicker.datepicker_args_desc,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$format,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"yyyy MMM dd",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$description,"[datepicker-dropdown only] a represenatation of a date format. See cljs_time.format"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$no_DASH_clip_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"[datepicker-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null)], 0));
re_com.datepicker.datepicker_dropdown = (function re_com$datepicker$datepicker_dropdown(var_args){
var args__8821__auto__ = [];
var len__8814__auto___19393 = arguments.length;
var i__8815__auto___19394 = (0);
while(true){
if((i__8815__auto___19394 < len__8814__auto___19393)){
args__8821__auto__.push((arguments[i__8815__auto___19394]));

var G__19395 = (i__8815__auto___19394 + (1));
i__8815__auto___19394 = G__19395;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__19387){
var map__19388 = p__19387;
var map__19388__$1 = ((((!((map__19388 == null)))?((((map__19388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19388):map__19388);
var args = map__19388__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.datepicker.datepicker_dropdown_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["datepicker-dropdown"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro datepicker-dropdown-args-desc args \"datepicker-dropdown\")"));
}

var shown_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var cancel_popover = ((function (shown_QMARK_,map__19388,map__19388__$1,args){
return (function (){
return cljs.core.reset_BANG_(shown_QMARK_,false);
});})(shown_QMARK_,map__19388,map__19388__$1,args))
;
var position = cljs.core.cst$kw$below_DASH_left;
return ((function (shown_QMARK_,cancel_popover,position,map__19388,map__19388__$1,args){
return (function() { 
var G__19396__delegate = function (p__19390){
var map__19391 = p__19390;
var map__19391__$1 = ((((!((map__19391 == null)))?((((map__19391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19391):map__19391);
var passthrough_args = map__19391__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,cljs.core.cst$kw$model);
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,cljs.core.cst$kw$show_DASH_weeks_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,cljs.core.cst$kw$on_DASH_change);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,cljs.core.cst$kw$format);
var no_clip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19391__$1,cljs.core.cst$kw$no_DASH_clip_QMARK_,true);
var collapse_on_select = ((function (map__19391,map__19391__$1,passthrough_args,model,show_weeks_QMARK_,on_change,format,no_clip_QMARK_,shown_QMARK_,cancel_popover,position,map__19388,map__19388__$1,args){
return (function (new_model){
cljs.core.reset_BANG_(shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_model) : on_change.call(null,new_model));
} else {
return null;
}
});})(map__19391,map__19391__$1,passthrough_args,model,show_weeks_QMARK_,on_change,format,no_clip_QMARK_,shown_QMARK_,cancel_popover,position,map__19388,map__19388__$1,args))
;
var passthrough_args__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(passthrough_args,cljs.core.cst$kw$format,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_clip_QMARK_], 0));
var passthrough_args__$2 = cljs.core.flatten(cljs.core.vec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border_QMARK_,true], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(passthrough_args__$1,cljs.core.cst$kw$on_DASH_change,collapse_on_select)], 0))));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,cljs.core.cst$kw$showing_QMARK_,shown_QMARK_,cljs.core.cst$kw$position,position,cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.anchor_button,shown_QMARK_,model,format], null),cljs.core.cst$kw$popover,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,cljs.core.cst$kw$position_DASH_offset,(cljs.core.truth_(show_weeks_QMARK_)?(43):(44)),cljs.core.cst$kw$no_DASH_clip_QMARK_,no_clip_QMARK_,cljs.core.cst$kw$arrow_DASH_length,(0),cljs.core.cst$kw$arrow_DASH_width,(0),cljs.core.cst$kw$arrow_DASH_gap,(3),cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$on_DASH_cancel,cancel_popover,cljs.core.cst$kw$body,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.datepicker.datepicker], null),passthrough_args__$2)], null)], null);
};
var G__19396 = function (var_args){
var p__19390 = null;
if (arguments.length > 0) {
var G__19397__i = 0, G__19397__a = new Array(arguments.length -  0);
while (G__19397__i < G__19397__a.length) {G__19397__a[G__19397__i] = arguments[G__19397__i + 0]; ++G__19397__i;}
  p__19390 = new cljs.core.IndexedSeq(G__19397__a,0,null);
} 
return G__19396__delegate.call(this,p__19390);};
G__19396.cljs$lang$maxFixedArity = 0;
G__19396.cljs$lang$applyTo = (function (arglist__19398){
var p__19390 = cljs.core.seq(arglist__19398);
return G__19396__delegate(p__19390);
});
G__19396.cljs$core$IFn$_invoke$arity$variadic = G__19396__delegate;
return G__19396;
})()
;
;})(shown_QMARK_,cancel_popover,position,map__19388,map__19388__$1,args))
});

re_com.datepicker.datepicker_dropdown.cljs$lang$maxFixedArity = (0);

re_com.datepicker.datepicker_dropdown.cljs$lang$applyTo = (function (seq19386){
return re_com.datepicker.datepicker_dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19386));
});

