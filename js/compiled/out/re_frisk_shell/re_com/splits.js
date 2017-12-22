// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frisk_shell.re_com.splits');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizonal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_frisk_shell.re_com.splits.drag_handle = (function re_frisk_shell$re_com$splits$drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('');
var flex_flow = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((vertical_QMARK_)?"row":"column"))," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_flow_style.call(null,flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null)], null);
});
/**
 * Returns markup for a horizontal layout component
 */
re_frisk_shell.re_com.splits.h_split = (function re_frisk_shell$re_com$splits$h_split(var_args){
var args__28371__auto__ = [];
var len__28364__auto___60198 = arguments.length;
var i__28365__auto___60199 = (0);
while(true){
if((i__28365__auto___60199 < len__28364__auto___60198)){
args__28371__auto__.push((arguments[i__28365__auto___60199]));

var G__60200 = (i__28365__auto___60199 + (1));
i__28365__auto___60199 = G__60200;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_frisk_shell.re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_frisk_shell.re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__60192){
var map__60193 = p__60192;
var map__60193__$1 = ((((!((map__60193 == null)))?((((map__60193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60193):map__60193);
var args = map__60193__$1;
var size = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.call(null,map__60193__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.call(null,"h-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (mouse_x){
var container = document.getElementById(container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientX));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
], null):null),attr);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function() { 
var G__60201__delegate = function (p__60195){
var map__60196 = p__60195;
var map__60196__$1 = ((((!((map__60196 == null)))?((((map__60196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60196):map__60196);
var _splitter_size = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__60196__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
};
var G__60201 = function (var_args){
var p__60195 = null;
if (arguments.length > 0) {
var G__60202__i = 0, G__60202__a = new Array(arguments.length -  0);
while (G__60202__i < G__60202__a.length) {G__60202__a[G__60202__i] = arguments[G__60202__i + 0]; ++G__60202__i;}
  p__60195 = new cljs.core.IndexedSeq(G__60202__a,0,null);
} 
return G__60201__delegate.call(this,p__60195);};
G__60201.cljs$lang$maxFixedArity = 0;
G__60201.cljs$lang$applyTo = (function (arglist__60203){
var p__60195 = cljs.core.seq(arglist__60203);
return G__60201__delegate(p__60195);
});
G__60201.cljs$core$IFn$_invoke$arity$variadic = G__60201__delegate;
return G__60201;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__60193,map__60193__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
});

re_frisk_shell.re_com.splits.h_split.cljs$lang$maxFixedArity = (0);

re_frisk_shell.re_com.splits.h_split.cljs$lang$applyTo = (function (seq60191){
return re_frisk_shell.re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60191));
});

/**
 * Returns markup for a vertical layout component
 */
re_frisk_shell.re_com.splits.v_split = (function re_frisk_shell$re_com$splits$v_split(var_args){
var args__28371__auto__ = [];
var len__28364__auto___60211 = arguments.length;
var i__28365__auto___60212 = (0);
while(true){
if((i__28365__auto___60212 < len__28364__auto___60211)){
args__28371__auto__.push((arguments[i__28365__auto___60212]));

var G__60213 = (i__28365__auto___60212 + (1));
i__28365__auto___60212 = G__60213;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_frisk_shell.re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_frisk_shell.re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__60205){
var map__60206 = p__60205;
var map__60206__$1 = ((((!((map__60206 == null)))?((((map__60206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60206):map__60206);
var args = map__60206__$1;
var size = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.call(null,map__60206__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.call(null,"v-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (mouse_y){
var container = document.getElementById(container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientY));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
], null):null),attr);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function() { 
var G__60214__delegate = function (p__60208){
var map__60209 = p__60208;
var map__60209__$1 = ((((!((map__60209 == null)))?((((map__60209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60209):map__60209);
var _splitter_size = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__60209__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
};
var G__60214 = function (var_args){
var p__60208 = null;
if (arguments.length > 0) {
var G__60215__i = 0, G__60215__a = new Array(arguments.length -  0);
while (G__60215__i < G__60215__a.length) {G__60215__a[G__60215__i] = arguments[G__60215__i + 0]; ++G__60215__i;}
  p__60208 = new cljs.core.IndexedSeq(G__60215__a,0,null);
} 
return G__60214__delegate.call(this,p__60208);};
G__60214.cljs$lang$maxFixedArity = 0;
G__60214.cljs$lang$applyTo = (function (arglist__60216){
var p__60208 = cljs.core.seq(arglist__60216);
return G__60214__delegate(p__60208);
});
G__60214.cljs$core$IFn$_invoke$arity$variadic = G__60214__delegate;
return G__60214;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__60206,map__60206__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
});

re_frisk_shell.re_com.splits.v_split.cljs$lang$maxFixedArity = (0);

re_frisk_shell.re_com.splits.v_split.cljs$lang$applyTo = (function (seq60204){
return re_frisk_shell.re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60204));
});


//# sourceMappingURL=splits.js.map?rel=1513855142712