// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_com.alert');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.buttons');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.alert.alert_box_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$id,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a unique identifier, usually an integer or string."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$info,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.alert_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.alert_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$heading,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"displayed as a larger heading. One of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":heading"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":body"], null)," should be provided"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$body,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"displayed within the body of the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"15px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"padding surounding the alert"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$closeable_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"if true, render a close button. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-close"], null)," should be supplied"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_close,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,":id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user clicks the close 'X' button. Passed the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)," of the alert to close"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS classes (whitespace separated). Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed. Applied to outer container"], null)], null)], null);
/**
 * Displays one alert box. A close button allows the message to be removed
 */
re_com.alert.alert_box = (function re_com$alert$alert_box(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18849 = arguments.length;
var i__8815__auto___18850 = (0);
while(true){
if((i__8815__auto___18850 < len__8814__auto___18849)){
args__8821__auto__.push((arguments[i__8815__auto___18850]));

var G__18851 = (i__8815__auto___18850 + (1));
i__8815__auto___18850 = G__18851;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__18845){
var map__18846 = p__18845;
var map__18846__$1 = ((((!((map__18846 == null)))?((((map__18846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18846):map__18846);
var args = map__18846__$1;
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$closeable_QMARK_);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$body);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$attr);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$heading);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$on_DASH_close);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18846__$1,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$info);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$style);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18846__$1,cljs.core.cst$kw$padding);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.alert.alert_box_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["alert-box"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro alert-box-args-desc args \"alert-box\")"));
}

var close_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"zmdi created zmdi-hc-fw-rc zmdi-close",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"20px"], null)], null)], null),cljs.core.cst$kw$on_DASH_click,((function (map__18846,map__18846__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding){
return (function (event){
(on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));

return null;
});})(map__18846,map__18846__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding))
,cljs.core.cst$kw$class,"close"], null);
var alert_class = (function (){var G__18848 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$none,"",cljs.core.cst$kw$info,"alert-success",cljs.core.cst$kw$warning,"alert-warning",cljs.core.cst$kw$danger,"alert-danger"], null);
return (alert_type.cljs$core$IFn$_invoke$arity$1 ? alert_type.cljs$core$IFn$_invoke$arity$1(G__18848) : alert_type.call(null,G__18848));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-alert alert fade in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alert_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,(cljs.core.truth_(padding)?padding:null)], null),style], 0))], null),attr], 0)),(cljs.core.truth_(heading)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,(cljs.core.truth_(body)?"10px":"0px")], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"0px"], null)], null),heading], null),(cljs.core.truth_((function (){var and__7633__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return on_close;
} else {
return and__7633__auto__;
}
})())?close_button:null)], null)], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,body], null),(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.not(heading);
if(and__7633__auto__){
var and__7633__auto____$1 = closeable_QMARK_;
if(cljs.core.truth_(and__7633__auto____$1)){
return on_close;
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
})())?close_button:null)], null)], null):null)], null);
});

re_com.alert.alert_box.cljs$lang$maxFixedArity = (0);

re_com.alert.alert_box.cljs$lang$applyTo = (function (seq18844){
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18844));
});

re_com.alert.alert_list_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alerts,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of maps | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"alerts to render (in the order supplied). Can also be a list of maps"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_close,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,":id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user clicks the close 'X' button. Passed the alert's ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS style for maximum list height. By default, it grows forever"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"4px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS padding within the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"1px solid lightgrey",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS border style surrounding the list"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed. Applied to outer container"], null)], null)], null);
/**
 * Displays a list of alert-box components in a v-box. Sample alerts object:
 *   [{:id 2
 *     :alert-type :warning
 *     :heading "Heading"
 *     :body "Body"
 *     :padding "8px"
 *     :closeable? true}
 *    {:id 1
 *     :alert-type :info
 *     :heading "Heading"
 *     :body "Body"}]
 */
re_com.alert.alert_list = (function re_com$alert$alert_list(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18864 = arguments.length;
var i__8815__auto___18865 = (0);
while(true){
if((i__8815__auto___18865 < len__8814__auto___18864)){
args__8821__auto__.push((arguments[i__8815__auto___18865]));

var G__18866 = (i__8815__auto___18865 + (1));
i__8815__auto___18865 = G__18866;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__18853){
var map__18854 = p__18853;
var map__18854__$1 = ((((!((map__18854 == null)))?((((map__18854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18854):map__18854);
var args = map__18854__$1;
var alerts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$alerts);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$on_DASH_close);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$max_DASH_height);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18854__$1,cljs.core.cst$kw$padding,"4px");
var border_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$border_DASH_style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.alert.alert_list_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["alert-list"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro alert-list-args-desc args \"alert-list\")"));
}

var alerts__$1 = re_com.util.deref_or_value(alerts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$border,border_style,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.scroller,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$auto,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__8453__auto__ = ((function (alerts__$1,map__18854,map__18854__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr){
return (function re_com$alert$iter__18856(s__18857){
return (new cljs.core.LazySeq(null,((function (alerts__$1,map__18854,map__18854__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr){
return (function (){
var s__18857__$1 = s__18857;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18857__$1);
if(temp__4657__auto__){
var s__18857__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18857__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__18857__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__18859 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__18858 = (0);
while(true){
if((i__18858 < size__8452__auto__)){
var alert = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__18858);
cljs.core.chunk_append(b__18859,(function (){var map__18860 = alert;
var map__18860__$1 = ((((!((map__18860 == null)))?((((map__18860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18860):map__18860);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$id);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$alert_DASH_type);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$body);
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$padding);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$closeable_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,padding__$1,cljs.core.cst$kw$closeable_QMARK_,closeable_QMARK_,cljs.core.cst$kw$on_DASH_close,on_close], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})());

var G__18867 = (i__18858 + (1));
i__18858 = G__18867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18859),re_com$alert$iter__18856(cljs.core.chunk_rest(s__18857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18859),null);
}
} else {
var alert = cljs.core.first(s__18857__$2);
return cljs.core.cons((function (){var map__18862 = alert;
var map__18862__$1 = ((((!((map__18862 == null)))?((((map__18862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18862):map__18862);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.cst$kw$id);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.cst$kw$alert_DASH_type);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.cst$kw$body);
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.cst$kw$padding);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18862__$1,cljs.core.cst$kw$closeable_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,padding__$1,cljs.core.cst$kw$closeable_QMARK_,closeable_QMARK_,cljs.core.cst$kw$on_DASH_close,on_close], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})(),re_com$alert$iter__18856(cljs.core.rest(s__18857__$2)));
}
} else {
return null;
}
break;
}
});})(alerts__$1,map__18854,map__18854__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr))
,null,null));
});})(alerts__$1,map__18854,map__18854__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr))
;
return iter__8453__auto__(alerts__$1);
})()], null)], null)], null)], null)], null);
});

re_com.alert.alert_list.cljs$lang$maxFixedArity = (0);

re_com.alert.alert_list.cljs$lang$applyTo = (function (seq18852){
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18852));
});

