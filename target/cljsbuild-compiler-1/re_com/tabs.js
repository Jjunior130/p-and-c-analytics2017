// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id | atom",cljs.core.cst$kw$description,"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tabs,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of tabs | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"tab -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18736 = arguments.length;
var i__8815__auto___18737 = (0);
while(true){
if((i__8815__auto___18737 < len__8814__auto___18736)){
args__8821__auto__.push((arguments[i__8815__auto___18737]));

var G__18738 = (i__8815__auto___18737 + (1));
i__8815__auto___18737 = G__18738;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18729){
var map__18730 = p__18729;
var map__18730__$1 = ((((!((map__18730 == null)))?((((map__18730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18730):map__18730);
var args = map__18730__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18730__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18730__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18730__$1,cljs.core.cst$kw$style);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__18727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18727_SHARP_) : id_fn.call(null,p1__18727_SHARP_)));
});})(current,tabs__$1,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__18727#] (= current (id-fn p1__18727#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"rc-tabs nav nav-tabs noselect",cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),(function (){var iter__8453__auto__ = ((function (current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__18732(s__18733){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__18733__$1 = s__18733;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18733__$1);
if(temp__4657__auto__){
var s__18733__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18733__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__18733__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__18735 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__18734 = (0);
while(true){
if((i__18734 < size__8452__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__18734);
cljs.core.chunk_append(b__18735,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__18734,id,label,selected_QMARK_,t,c__8451__auto__,size__8452__auto__,b__18735,s__18733__$2,temp__4657__auto__,current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__18734,id,label,selected_QMARK_,t,c__8451__auto__,size__8452__auto__,b__18735,s__18733__$2,temp__4657__auto__,current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__18739 = (i__18734 + (1));
i__18734 = G__18739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18735),re_com$tabs$iter__18732(cljs.core.chunk_rest(s__18733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18735),null);
}
} else {
var t = cljs.core.first(s__18733__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18733__$2,temp__4657__auto__,current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__18733__$2,temp__4657__auto__,current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__18732(cljs.core.rest(s__18733__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__18730,map__18730__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__8453__auto__(tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq18728){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18728));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18749 = arguments.length;
var i__8815__auto___18750 = (0);
while(true){
if((i__8815__auto___18750 < len__8814__auto___18749)){
args__8821__auto__.push((arguments[i__8815__auto___18750]));

var G__18751 = (i__8815__auto___18750 + (1));
i__8815__auto___18750 = G__18751;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18742){
var map__18743 = p__18742;
var map__18743__$1 = ((((!((map__18743 == null)))?((((map__18743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18743):map__18743);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$id_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$label_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$style);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__18740_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18740_SHARP_) : id_fn.call(null,p1__18740_SHARP_)));
});})(current,tabs__$1,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__18740#] (= current (id-fn p1__18740#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),(function (){var iter__8453__auto__ = ((function (current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__18745(s__18746){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__18746__$1 = s__18746;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18746__$1);
if(temp__4657__auto__){
var s__18746__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18746__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__18746__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__18748 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__18747 = (0);
while(true){
if((i__18747 < size__8452__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__18747);
cljs.core.chunk_append(b__18748,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$class,["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__18747,id,label,selected_QMARK_,t,c__8451__auto__,size__8452__auto__,b__18748,s__18746__$2,temp__4657__auto__,current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__18747,id,label,selected_QMARK_,t,c__8451__auto__,size__8452__auto__,b__18748,s__18746__$2,temp__4657__auto__,current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__18752 = (i__18747 + (1));
i__18747 = G__18752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18748),re_com$tabs$iter__18745(cljs.core.chunk_rest(s__18746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18748),null);
}
} else {
var t = cljs.core.first(s__18746__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$class,["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18746__$2,temp__4657__auto__,current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__18746__$2,temp__4657__auto__,current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__18745(cljs.core.rest(s__18746__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__18743,map__18743__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__8453__auto__(tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq18741){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18741));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18757 = arguments.length;
var i__8815__auto___18758 = (0);
while(true){
if((i__8815__auto___18758 < len__8814__auto___18757)){
args__8821__auto__.push((arguments[i__8815__auto___18758]));

var G__18759 = (i__8815__auto___18758 + (1));
i__8815__auto___18758 = G__18759;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18754){
var map__18755 = p__18754;
var map__18755__$1 = ((((!((map__18755 == null)))?((((map__18755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18755):map__18755);
var args = map__18755__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18755__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18755__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18755__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18755__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18755__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18755__$1,cljs.core.cst$kw$style);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false], 0));
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq18753){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18753));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18764 = arguments.length;
var i__8815__auto___18765 = (0);
while(true){
if((i__8815__auto___18765 < len__8814__auto___18764)){
args__8821__auto__.push((arguments[i__8815__auto___18765]));

var G__18766 = (i__8815__auto___18765 + (1));
i__8815__auto___18765 = G__18766;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18761){
var map__18762 = p__18761;
var map__18762__$1 = ((((!((map__18762 == null)))?((((map__18762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18762):map__18762);
var args = map__18762__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18762__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18762__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$style);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true], 0));
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq18760){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18760));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18776 = arguments.length;
var i__8815__auto___18777 = (0);
while(true){
if((i__8815__auto___18777 < len__8814__auto___18776)){
args__8821__auto__.push((arguments[i__8815__auto___18777]));

var G__18778 = (i__8815__auto___18777 + (1));
i__8815__auto___18777 = G__18778;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18769){
var map__18770 = p__18769;
var map__18770__$1 = ((((!((map__18770 == null)))?((((map__18770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18770):map__18770);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$id_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$label_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$style);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (current,tabs__$1,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__18767_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18767_SHARP_) : id_fn.call(null,p1__18767_SHARP_)));
});})(current,tabs__$1,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__18767#] (= current (id-fn p1__18767#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$role,"tabslist"], null),(function (){var iter__8453__auto__ = ((function (current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__18772(s__18773){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__18773__$1 = s__18773;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18773__$1);
if(temp__4657__auto__){
var s__18773__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18773__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__18773__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__18775 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__18774 = (0);
while(true){
if((i__18774 < size__8452__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__18774);
cljs.core.chunk_append(b__18775,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__18774,id,label,selected_QMARK_,t,c__8451__auto__,size__8452__auto__,b__18775,s__18773__$2,temp__4657__auto__,current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__18774,id,label,selected_QMARK_,t,c__8451__auto__,size__8452__auto__,b__18775,s__18773__$2,temp__4657__auto__,current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__18779 = (i__18774 + (1));
i__18774 = G__18779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18775),re_com$tabs$iter__18772(cljs.core.chunk_rest(s__18773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18775),null);
}
} else {
var t = cljs.core.first(s__18773__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__18773__$2,temp__4657__auto__,current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__18773__$2,temp__4657__auto__,current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__18772(cljs.core.rest(s__18773__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__18770,map__18770__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__8453__auto__(tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq18768){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18768));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18784 = arguments.length;
var i__8815__auto___18785 = (0);
while(true){
if((i__8815__auto___18785 < len__8814__auto___18784)){
args__8821__auto__.push((arguments[i__8815__auto___18785]));

var G__18786 = (i__8815__auto___18785 + (1));
i__8815__auto___18785 = G__18786;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18781){
var map__18782 = p__18781;
var map__18782__$1 = ((((!((map__18782 == null)))?((((map__18782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18782):map__18782);
var args = map__18782__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18782__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18782__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18782__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18782__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18782__$1,cljs.core.cst$kw$style);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18782__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false], 0));
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq18780){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18780));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18791 = arguments.length;
var i__8815__auto___18792 = (0);
while(true){
if((i__8815__auto___18792 < len__8814__auto___18791)){
args__8821__auto__.push((arguments[i__8815__auto___18792]));

var G__18793 = (i__8815__auto___18792 + (1));
i__8815__auto___18792 = G__18793;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18788){
var map__18789 = p__18788;
var map__18789__$1 = ((((!((map__18789 == null)))?((((map__18789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18789):map__18789);
var args = map__18789__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18789__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18789__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18789__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18789__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18789__$1,cljs.core.cst$kw$style);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18789__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true], 0));
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq18787){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18787));
});

