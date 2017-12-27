// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_com.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
re_com.misc.throbber_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$default,cljs.core.cst$kw$regular,cljs.core.cst$kw$validate_DASH_fn,re_com.validate.throbber_size_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.throbber_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$default,"#999",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS color"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Render an animated throbber using CSS
 */
re_com.misc.throbber = (function re_com$misc$throbber(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18423 = arguments.length;
var i__8815__auto___18424 = (0);
while(true){
if((i__8815__auto___18424 < len__8814__auto___18423)){
args__8821__auto__.push((arguments[i__8815__auto___18424]));

var G__18425 = (i__8815__auto___18424 + (1));
i__8815__auto___18424 = G__18425;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic = (function (p__18419){
var map__18420 = p__18419;
var map__18420__$1 = ((((!((map__18420 == null)))?((((map__18420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18420):map__18420);
var args = map__18420__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18420__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18420__$1,cljs.core.cst$kw$color);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18420__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18420__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18420__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.throbber_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throbber"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro throbber-args-desc args \"throbber\")"));
}

var seg = ((function (map__18420,map__18420__$1,args,size,color,class$,style,attr){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,color], null)], null):null)], null);
});})(map__18420,map__18420__$1,args,size,color,class$,style,attr))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-throbber loader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18422 = size;
var G__18422__$1 = (((G__18422 instanceof cljs.core.Keyword))?G__18422.fqn:null);
switch (G__18422__$1) {
case "regular":
return "";

break;
case "smaller":
return "smaller ";

break;
case "small":
return "small ";

break;
case "large":
return "large ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style], null),attr], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null)], null)], null);
});

re_com.misc.throbber.cljs$lang$maxFixedArity = (0);

re_com.misc.throbber.cljs$lang$applyTo = (function (seq18418){
return re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18418));
});

re_com.misc.input_text_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"text of the input (can be atom or value)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. Passed the current input string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$rows,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(3),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"ONLY applies to 'input-textarea': the number of rows of text to show"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," function on blur, otherwise on every change (character by character)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$validation_DASH_regex,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"regex",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.regex_QMARK_,cljs.core.cst$kw$description,"user input is only accepted if it would result in a string that matches this regular expression"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,cljs.core.keyword_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"ONLY applies to super function 'base-input-text': either ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":input"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":password"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":textarea"], null)], null)], null)], null);
/**
 * Returns markup for a basic text input label
 */
re_com.misc.input_text_base = (function re_com$misc$input_text_base(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18441 = arguments.length;
var i__8815__auto___18442 = (0);
while(true){
if((i__8815__auto___18442 < len__8814__auto___18441)){
args__8821__auto__.push((arguments[i__8815__auto___18442]));

var G__18443 = (i__8815__auto___18442 + (1));
i__8815__auto___18442 = G__18443;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__18428){
var map__18429 = p__18428;
var map__18429__$1 = ((((!((map__18429 == null)))?((((map__18429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18429):map__18429);
var args = map__18429__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18429__$1,cljs.core.cst$kw$model);
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18429__$1,cljs.core.cst$kw$input_DASH_type);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.input_text_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-text"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(external_model) == null))?"":cljs.core.deref(external_model)));
return ((function (external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function() { 
var G__18444__delegate = function (p__18431){
var map__18432 = p__18431;
var map__18432__$1 = ((((!((map__18432 == null)))?((((map__18432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18432):map__18432);
var args__$1 = map__18432__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$on_DASH_change);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$attr);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$placeholder);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$width);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$rows);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$style);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$class);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18432__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,true);
var validation_regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$validation_DASH_regex);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.input_text_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-text"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var latest_ext_model = re_com.util.deref_or_value(model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$width,(cljs.core.truth_(width)?width:"250px"),cljs.core.cst$kw$class,"rc-input-text ",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18434 = status;
var G__18434__$1 = (((G__18434 instanceof cljs.core.Keyword))?G__18434.fqn:null);
switch (G__18434__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7633__auto__ = status;
if(cljs.core.truth_(and__7633__auto__)){
return status_icon_QMARK_;
} else {
return and__7633__auto__;
}
})())?"has-feedback":null))].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,cljs.core.cst$kw$password))?cljs.core.cst$kw$input:input_type),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$rows,cljs.core.cst$kw$on_DASH_key_DASH_up,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change],[placeholder,disabled_QMARK___$1,cljs.core.deref(internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__7633__auto__ = on_change;
if(cljs.core.truth_(and__7633__auto__)){
var and__7633__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__7633__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(external_model));
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
})())){
var G__18435_18446 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18435_18446) : on_change.call(null,G__18435_18446));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
,(function (){var G__18436 = input_type;
var G__18436__$1 = (((G__18436 instanceof cljs.core.Keyword))?G__18436.fqn:null);
switch (G__18436__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,height,cljs.core.cst$kw$padding_DASH_right,"12px"], null),style], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,cljs.core.cst$kw$textarea))?(function (){var or__7645__auto__ = rows;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (3);
}
})():null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__18437_18448 = event.which;
switch (G__18437_18448) {
case (13):
if(cljs.core.truth_(on_change)){
var G__18438_18450 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18438_18450) : on_change.call(null,G__18438_18450));
} else {
}

break;
case (27):
cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
,["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
var new_val_18451 = event.target.value;
if(cljs.core.truth_((function (){var and__7633__auto__ = on_change;
if(cljs.core.truth_(and__7633__auto__)){
var and__7633__auto____$1 = cljs.core.not(disabled_QMARK___$1);
if(and__7633__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find(validation_regex,new_val_18451);
} else {
return true;
}
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,new_val_18451);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
var G__18439_18452 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18439_18452) : on_change.call(null,G__18439_18452));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
]),attr], 0))], null)], null),(cljs.core.truth_((function (){var and__7633__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return status;
} else {
return and__7633__auto__;
}
})())?(function (){var icon_class = (function (){var G__18440 = status;
var G__18440__$1 = (((G__18440 instanceof cljs.core.Keyword))?G__18440.fqn:null);
switch (G__18440__$1) {
case "success":
return "zmdi-check-circle";

break;
case "warning":
return "zmdi-alert-triangle";

break;
case "error":
return "zmdi-alert-circle zmdi-spinner";

break;
case "validating":
return "zmdi-hc-spin zmdi-rotate-right zmdi-spinner";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18440__$1)].join('')));

}
})();
if(cljs.core.truth_(status_tooltip)){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$label,status_tooltip,cljs.core.cst$kw$position,cljs.core.cst$kw$right_DASH_center,cljs.core.cst$kw$status,status,cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validating,status))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$regular,cljs.core.cst$kw$class,"smaller",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__7633__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return status;
} else {
return and__7633__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$height,"auto",cljs.core.cst$kw$opacity,(cljs.core.truth_((function (){var and__7633__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return status;
} else {
return and__7633__auto__;
}
})())?"1":"0")], null),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__7633__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return status;
} else {
return and__7633__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
});})(icon_class,latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__18432,map__18432__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
], null)], null)),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$center),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"130%",cljs.core.cst$kw$margin_DASH_left,"4px"], null)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validating,status)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$regular,cljs.core.cst$kw$class,"smaller"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$center),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$font_DASH_size,"130%",cljs.core.cst$kw$margin_DASH_left,"4px",cljs.core.cst$kw$opacity,(cljs.core.truth_((function (){var and__7633__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return status;
} else {
return and__7633__auto__;
}
})())?"1":"0"),cljs.core.cst$kw$height,"auto"], null)], 0)),cljs.core.cst$kw$title,status_tooltip], null)], null);
}
}
})():null)], null)], null);
};
var G__18444 = function (var_args){
var p__18431 = null;
if (arguments.length > 0) {
var G__18454__i = 0, G__18454__a = new Array(arguments.length -  0);
while (G__18454__i < G__18454__a.length) {G__18454__a[G__18454__i] = arguments[G__18454__i + 0]; ++G__18454__i;}
  p__18431 = new cljs.core.IndexedSeq(G__18454__a,0,null);
} 
return G__18444__delegate.call(this,p__18431);};
G__18444.cljs$lang$maxFixedArity = 0;
G__18444.cljs$lang$applyTo = (function (arglist__18455){
var p__18431 = cljs.core.seq(arglist__18455);
return G__18444__delegate(p__18431);
});
G__18444.cljs$core$IFn$_invoke$arity$variadic = G__18444__delegate;
return G__18444;
})()
;
;})(external_model,internal_model,map__18429,map__18429__$1,args,model,input_type))
});

re_com.misc.input_text_base.cljs$lang$maxFixedArity = (0);

re_com.misc.input_text_base.cljs$lang$applyTo = (function (seq18427){
return re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18427));
});

re_com.misc.input_text = (function re_com$misc$input_text(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18457 = arguments.length;
var i__8815__auto___18458 = (0);
while(true){
if((i__8815__auto___18458 < len__8814__auto___18457)){
args__8821__auto__.push((arguments[i__8815__auto___18458]));

var G__18459 = (i__8815__auto___18458 + (1));
i__8815__auto___18458 = G__18459;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$input,args);
});

re_com.misc.input_text.cljs$lang$maxFixedArity = (0);

re_com.misc.input_text.cljs$lang$applyTo = (function (seq18456){
return re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18456));
});

re_com.misc.input_password = (function re_com$misc$input_password(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18461 = arguments.length;
var i__8815__auto___18462 = (0);
while(true){
if((i__8815__auto___18462 < len__8814__auto___18461)){
args__8821__auto__.push((arguments[i__8815__auto___18462]));

var G__18463 = (i__8815__auto___18462 + (1));
i__8815__auto___18462 = G__18463;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$password,args);
});

re_com.misc.input_password.cljs$lang$maxFixedArity = (0);

re_com.misc.input_password.cljs$lang$applyTo = (function (seq18460){
return re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18460));
});

re_com.misc.input_textarea = (function re_com$misc$input_textarea(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18465 = arguments.length;
var i__8815__auto___18466 = (0);
while(true){
if((i__8815__auto___18466 < len__8814__auto___18465)){
args__8821__auto__.push((arguments[i__8815__auto___18466]));

var G__18467 = (i__8815__auto___18466 + (1));
i__8815__auto___18466 = G__18467;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$textarea,args);
});

re_com.misc.input_textarea.cljs$lang$maxFixedArity = (0);

re_com.misc.input_textarea.cljs$lang$applyTo = (function (seq18464){
return re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18464));
});

re_com.misc.checkbox_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"holds state of the checkbox when it is called"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"boolean -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when the checkbox is clicked. Passed the new value of the checkbox"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, user interaction is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"the CSS style style map"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"the CSS class applied overall to the component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS class applied to the label"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
re_com.misc.checkbox = (function re_com$misc$checkbox(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18473 = arguments.length;
var i__8815__auto___18474 = (0);
while(true){
if((i__8815__auto___18474 < len__8814__auto___18473)){
args__8821__auto__.push((arguments[i__8815__auto___18474]));

var G__18475 = (i__8815__auto___18474 + (1));
i__8815__auto___18474 = G__18475;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__18469){
var map__18470 = p__18469;
var map__18470__$1 = ((((!((map__18470 == null)))?((((map__18470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18470):map__18470);
var args = map__18470__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$model);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$on_DASH_change);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$label);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$disabled_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$style);
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$label_DASH_style);
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$label_DASH_class);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.checkbox_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["checkbox"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro checkbox-args-desc args \"checkbox\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__18470,map__18470__$1,args,model,on_change,label,disabled_QMARK_,style,label_style,label_class,attr){
return (function (){
if(cljs.core.truth_((function (){var and__7633__auto__ = on_change;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__7633__auto__;
}
})())){
var G__18472 = cljs.core.not(model__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18472) : on_change.call(null,G__18472));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__18470,map__18470__$1,args,model,on_change,label,disabled_QMARK_,style,label_style,label_class,attr))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,"noselect",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,"rc-checkbox",cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cursor], null),style], 0)),cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$checked,cljs.core.boolean$(model__$1),cljs.core.cst$kw$on_DASH_change,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18470,map__18470__$1,args,model,on_change,label,disabled_QMARK_,style,label_style,label_class,attr){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18470,map__18470__$1,args,model,on_change,label,disabled_QMARK_,style,label_style,label_class,attr))
], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18470,map__18470__$1,args,model,on_change,label,disabled_QMARK_,style,label_style,label_class,attr){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18470,map__18470__$1,args,model,on_change,label,disabled_QMARK_,style,label_style,label_class,attr))
,cljs.core.cst$kw$class,label_class,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,"8px",cljs.core.cst$kw$cursor,cursor], null),label_style], 0))], null),label], null):null)], null)], null);
});

re_com.misc.checkbox.cljs$lang$maxFixedArity = (0);

re_com.misc.checkbox.cljs$lang$applyTo = (function (seq18468){
return re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18468));
});

re_com.misc.radio_button_args_desc = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"anything | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"selected value of the radio button group. See also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$value,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":value"], null)," then this radio button is selected"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"anything -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the radio button is clicked. Passed ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't click the radio button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"radio button style map"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"the CSS class applied overall to the component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS class applied to the label"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * I return the markup for a radio button, with an optional RHS label
 */
re_com.misc.radio_button = (function re_com$misc$radio_button(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18480 = arguments.length;
var i__8815__auto___18481 = (0);
while(true){
if((i__8815__auto___18481 < len__8814__auto___18480)){
args__8821__auto__.push((arguments[i__8815__auto___18481]));

var G__18482 = (i__8815__auto___18481 + (1));
i__8815__auto___18481 = G__18482;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__18477){
var map__18478 = p__18477;
var map__18478__$1 = ((((!((map__18478 == null)))?((((map__18478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18478):map__18478);
var args = map__18478__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$model);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$value);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$on_DASH_change);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$label);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$disabled_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$style);
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$label_DASH_style);
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$label_DASH_class);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.radio_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["radio-button"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro radio-button-args-desc args \"radio-button\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__18478,map__18478__$1,args,model,value,on_change,label,disabled_QMARK_,style,label_style,label_class,attr){
return (function (){
if(cljs.core.truth_((function (){var and__7633__auto__ = on_change;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__7633__auto__;
}
})())){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__18478,map__18478__$1,args,model,value,on_change,label,disabled_QMARK_,style,label_style,label_class,attr))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,"noselect",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,"rc-radio-button",cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cursor], null),style], 0)),cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model__$1,value),cljs.core.cst$kw$on_DASH_change,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18478,map__18478__$1,args,model,value,on_change,label,disabled_QMARK_,style,label_style,label_class,attr){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18478,map__18478__$1,args,model,value,on_change,label,disabled_QMARK_,style,label_style,label_class,attr))
], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18478,map__18478__$1,args,model,value,on_change,label,disabled_QMARK_,style,label_style,label_class,attr){
return (function (event){
callback_fn();

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__18478,map__18478__$1,args,model,value,on_change,label,disabled_QMARK_,style,label_style,label_class,attr))
,cljs.core.cst$kw$class,label_class,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,"8px",cljs.core.cst$kw$cursor,cursor], null),label_style], 0))], null),label], null):null)], null)], null);
});

re_com.misc.radio_button.cljs$lang$maxFixedArity = (0);

re_com.misc.radio_button.cljs$lang$applyTo = (function (seq18476){
return re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18476));
});

re_com.misc.slider_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"current value of the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"double -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when the slider is moved. Passed the new value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$min,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(0),cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the minimum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$max,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(100),cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"the maximum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$step,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1),cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"step value between min and max"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"400px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't change the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns markup for an HTML5 slider input
 */
re_com.misc.slider = (function re_com$misc$slider(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18489 = arguments.length;
var i__8815__auto___18490 = (0);
while(true){
if((i__8815__auto___18490 < len__8814__auto___18489)){
args__8821__auto__.push((arguments[i__8815__auto___18490]));

var G__18491 = (i__8815__auto___18490 + (1));
i__8815__auto___18490 = G__18491;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__18484){
var map__18485 = p__18484;
var map__18485__$1 = ((((!((map__18485 == null)))?((((map__18485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18485):map__18485);
var args = map__18485__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$on_DASH_change);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$step);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$attr);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18485__$1,cljs.core.cst$kw$min,(0));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$width);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,cljs.core.cst$kw$class);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18485__$1,cljs.core.cst$kw$max,(100));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.slider_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["slider"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro slider-args-desc args \"slider\")"));
}

var model__$1 = re_com.util.deref_or_value(model);
var min__$1 = re_com.util.deref_or_value(min);
var max__$1 = re_com.util.deref_or_value(max);
var step__$1 = re_com.util.deref_or_value(step);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$disabled,cljs.core.cst$kw$value,cljs.core.cst$kw$type,cljs.core.cst$kw$style,cljs.core.cst$kw$max,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$step],[min__$1,disabled_QMARK___$1,model__$1,"range",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(function (){var or__7645__auto__ = width;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "400px";
}
})(),cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"default")], null),style], 0)),max__$1,["rc-slider ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__18485,map__18485__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max){
return (function (event){
var G__18487_18492 = (function (){var G__18488 = event.target.value;
return Number(G__18488);
})();
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18487_18492) : on_change.call(null,G__18487_18492));

return null;
});})(model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__18485,map__18485__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max))
,step__$1]),attr], 0))], null)], null);
});

re_com.misc.slider.cljs$lang$maxFixedArity = (0);

re_com.misc.slider.cljs$lang$applyTo = (function (seq18483){
return re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18483));
});

re_com.misc.progress_bar_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"double | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"current value of the slider. A number between 0 and 100"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$default,"100%",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$striped_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$default,false,cljs.core.cst$kw$description,"when true, the progress section is a set of animated stripes"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$bar_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class name(s) for the actual progress bar itself, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Render a bootstrap styled progress bar
 */
re_com.misc.progress_bar = (function re_com$misc$progress_bar(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18497 = arguments.length;
var i__8815__auto___18498 = (0);
while(true){
if((i__8815__auto___18498 < len__8814__auto___18497)){
args__8821__auto__.push((arguments[i__8815__auto___18498]));

var G__18499 = (i__8815__auto___18498 + (1));
i__8815__auto___18498 = G__18499;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__18494){
var map__18495 = p__18494;
var map__18495__$1 = ((((!((map__18495 == null)))?((((map__18495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18495):map__18495);
var args = map__18495__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,cljs.core.cst$kw$model);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18495__$1,cljs.core.cst$kw$width,"100%");
var striped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,cljs.core.cst$kw$striped_QMARK_);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,cljs.core.cst$kw$class);
var bar_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,cljs.core.cst$kw$bar_DASH_class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.progress_bar_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["progress-bar"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro progress-bar-args-desc args \"progress-bar\")"));
}

var model__$1 = re_com.util.deref_or_value(model);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-progress-bar progress ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["progress-bar ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(striped_QMARK_)?"progress-bar-striped active ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bar_class)].join(''),cljs.core.cst$kw$role,"progressbar",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),"%"].join(''),cljs.core.cst$kw$transition,"none"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),"%"].join('')], null)], null)], null);
});

re_com.misc.progress_bar.cljs$lang$maxFixedArity = (0);

re_com.misc.progress_bar.cljs$lang$applyTo = (function (seq18493){
return re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18493));
});

