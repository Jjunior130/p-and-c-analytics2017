// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_com.box');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('re_com.validate');
re_com.box.debug = false;
/**
 * Determines the value for the 'flex' attribute (which has grow, shrink and basis), based on the :size parameter.
 * IMPORTANT: The term 'size' means width of the item in the case of flex-direction 'row' OR height of the item in the case of flex-direction 'column'.
 * Flex property explanation:
 *  - grow    Integer ratio (used with other siblings) to determined how a flex item grows it's size if there is extra space to distribute. 0 for no growing.
 *  - shrink  Integer ratio (used with other siblings) to determined how a flex item shrinks it's size if space needs to be removed. 0 for no shrinking.
 *  - basis   Initial size (width, actually) of item before any growing or shrinking. Can be any size value, e.g. 60%, 100px, auto
 *            Note: auto will cause the initial size to be calculated to take up as much space as possible, in conjunction with it's siblings :flex settings.
 * Supported values:
 *  - initial            '0 1 auto'  - Use item's width/height for dimensions (or content dimensions if w/h not specifed). Never grow. Shrink (to min-size) if necessary.
 *                                     Good for creating boxes with fixed maximum size, but that can shrink to a fixed smaller size (min-width/height) if space becomes tight.
 *                                     NOTE: When using initial, you should also set a width/height value (depending on flex-direction) to specify it's default size
 *                                           and an optional min-width/height value to specify the size it can shrink to.
 *  - auto               '1 1 auto'  - Use item's width/height for dimensions. Grow if necessary. Shrink (to min-size) if necessary.
 *                                     Good for creating really flexible boxes that will gobble as much available space as they are allowed or shrink as much as they are forced to.
 *  - none               '0 0 auto'  - Use item's width/height for dimensions (or content dimensions if not specifed). Never grow. Never shrink.
 *                                     Good for creating rigid boxes that stick to their width/height if specified, otherwise their content size.
 *  - 100px              '0 0 100px' - Non flexible 100px size (in the flex direction) box.
 *                                     Good for fixed headers/footers and side bars of an exact size.
 *  - 60%                '60 1 0px'  - Set the item's size (it's width/height depending on flex-direction) to be 60% of the parent container's width/height.
 *                                     NOTE: If you use this, then all siblings with percentage values must add up to 100%.
 *  - 60                 '60 1 0px'  - Same as percentage above.
 *  - grow shrink basis  'grow shrink basis' - If none of the above common valaues above meet your needs, this gives you precise control.
 * If number of words is not 1 or 3, an exception is thrown.
 * Reference: http://www.w3.org/TR/css3-flexbox/#flexibility
 * Diagram:   http://www.w3.org/TR/css3-flexbox/#flex-container
 * Regex101 testing: ^(initial|auto|none)|(\d+)(px|%|em)|(\d+)\w(\d+)\w(.*) - remove double backslashes
 */
re_com.box.flex_child_style = (function re_com$box$flex_child_style(size){
var split_size = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(size),/\s+/);
var split_count = cljs.core.count(split_size);
var _ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(3),null], null), null),split_count))?null:(function(){throw (new Error(["Assert failed: ","Must pass either 1 or 3 words to flex-child-style","\n","(contains? #{1 3} split-count)"].join('')))})());
var size_only = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(split_count,(1)))?cljs.core.first(split_size):null);
var split_size_only = (cljs.core.truth_(size_only)?clojure.string.split.cljs$core$IFn$_invoke$arity$2(size_only,/(\d+)(.*)/):null);
var vec__14986 = (cljs.core.truth_(size_only)?split_size_only:null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14986,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14986,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14986,(2),null);
var pass_through_QMARK_ = (num == null);
var grow_ratio_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"%")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"")) || ((units == null));
var grow = ((grow_ratio_QMARK_)?num:"0");
var shrink = ((grow_ratio_QMARK_)?"1":"0");
var basis = ((grow_ratio_QMARK_)?"0px":size);
var flex = (cljs.core.truth_((function (){var and__7633__auto__ = size_only;
if(cljs.core.truth_(and__7633__auto__)){
return !(pass_through_QMARK_);
} else {
return and__7633__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shrink)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basis)].join(''):size);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_DASH_webkit_DASH_flex,flex,cljs.core.cst$kw$flex,flex], null);
});
/**
 * A cross-browser helper function to output flex-flow with all it's potential browser prefixes
 */
re_com.box.flex_flow_style = (function re_com$box$flex_flow_style(flex_flow){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_DASH_webkit_DASH_flex_DASH_flow,flex_flow,cljs.core.cst$kw$flex_DASH_flow,flex_flow], null);
});
/**
 * Determines the value for the flex 'justify-content' attribute.
 * This parameter determines how children are aligned along the main axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#justify-content-property
 */
re_com.box.justify_style = (function re_com$box$justify_style(justify){
var js = (function (){var G__14989 = justify;
var G__14989__$1 = (((G__14989 instanceof cljs.core.Keyword))?G__14989.fqn:null);
switch (G__14989__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "between":
return "space-between";

break;
case "around":
return "space-around";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14989__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_DASH_webkit_DASH_justify_DASH_content,js,cljs.core.cst$kw$justify_DASH_content,js], null);
});
/**
 * Determines the value for the flex align type attributes.
 * This parameter determines how children are aligned on the cross axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#align-items-property
 */
re_com.box.align_style = (function re_com$box$align_style(attribute,align){
var attribute_wk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["-webkit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attribute))].join(''));
var as = (function (){var G__14991 = align;
var G__14991__$1 = (((G__14991 instanceof cljs.core.Keyword))?G__14991.fqn:null);
switch (G__14991__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "baseline":
return "baseline";

break;
case "stretch":
return "stretch";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14991__$1)].join('')));

}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute_wk,as,attribute,as]);
});
/**
 * Determines the value for the 'overflow' attribute.
 * The scroll parameter is a keyword.
 * Because we're translating scroll into overflow, the keyword doesn't appear to match the attribute value
 */
re_com.box.scroll_style = (function re_com$box$scroll_style(attribute,scroll){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,(function (){var G__14993 = scroll;
var G__14993__$1 = (((G__14993 instanceof cljs.core.Keyword))?G__14993.fqn:null);
switch (G__14993__$1) {
case "auto":
return "auto";

break;
case "off":
return "hidden";

break;
case "on":
return "scroll";

break;
case "spill":
return "visible";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14993__$1)].join('')));

}
})()]);
});
/**
 * This should generally NOT be used as it is the basis for the box, scroller and border components
 */
re_com.box.box_base = (function re_com$box$box_base(var_args){
var args__8821__auto__ = [];
var len__8814__auto___14999 = arguments.length;
var i__8815__auto___15000 = (0);
while(true){
if((i__8815__auto___15000 < len__8814__auto___14999)){
args__8821__auto__.push((arguments[i__8815__auto___15000]));

var G__15001 = (i__8815__auto___15000 + (1));
i__8815__auto___15000 = G__15001;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.box_base.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.box_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__14996){
var map__14997 = p__14996;
var map__14997__$1 = ((((!((map__14997 == null)))?((((map__14997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14997):map__14997);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$child);
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$align_DASH_self);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$border);
var v_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$v_DASH_scroll);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$margin);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$attr);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$min_DASH_width);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$align);
var bk_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$bk_DASH_color);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$max_DASH_height);
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$min_DASH_height);
var r_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$r_DASH_border);
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$justify);
var h_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$h_DASH_scroll);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$width);
var b_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$b_DASH_border);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$max_DASH_width);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$radius);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$style);
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$scroll);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$class);
var l_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$l_DASH_border);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$padding);
var t_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$t_DASH_border);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14997__$1,cljs.core.cst$kw$class_DASH_name);
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_flow_style("inherit"),re_com.box.flex_child_style(size),(cljs.core.truth_(scroll)?re_com.box.scroll_style(cljs.core.cst$kw$overflow,scroll):null),(cljs.core.truth_(h_scroll)?re_com.box.scroll_style(cljs.core.cst$kw$overflow_DASH_x,h_scroll):null),(cljs.core.truth_(v_scroll)?re_com.box.scroll_style(cljs.core.cst$kw$overflow_DASH_y,v_scroll):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_width,min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_height,min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null):null),(cljs.core.truth_(justify)?re_com.box.justify_style(justify):null),(cljs.core.truth_(align)?re_com.box.align_style(cljs.core.cst$kw$align_DASH_items,align):null),(cljs.core.truth_(align_self)?re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,padding], null):null),(cljs.core.truth_(border)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,border], null):null),(cljs.core.truth_(l_border)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_left,l_border], null):null),(cljs.core.truth_(r_border)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_right,r_border], null):null),(cljs.core.truth_(t_border)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_top,t_border], null):null),(cljs.core.truth_(b_border)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_bottom,b_border], null):null),(cljs.core.truth_(radius)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_radius,radius], null):null),(cljs.core.truth_(bk_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,bk_color], null):((re_com.box.debug)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"lightblue"], null):cljs.core.PersistentArrayMap.EMPTY)),style], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,s], null),attr], 0)),child], null);
});

re_com.box.box_base.cljs$lang$maxFixedArity = (0);

re_com.box.box_base.cljs$lang$applyTo = (function (seq14995){
return re_com.box.box_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14995));
});

re_com.box.gap_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the length of the whitespace.  Typically, an absolute CSS length like 10px or 10em, but can be a stretchy proportional amount like 2"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns a component which produces a gap between children in a v-box/h-box along the main axis
 */
re_com.box.gap = (function re_com$box$gap(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15006 = arguments.length;
var i__8815__auto___15007 = (0);
while(true){
if((i__8815__auto___15007 < len__8814__auto___15006)){
args__8821__auto__.push((arguments[i__8815__auto___15007]));

var G__15008 = (i__8815__auto___15007 + (1));
i__8815__auto___15007 = G__15008;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.gap.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.gap.cljs$core$IFn$_invoke$arity$variadic = (function (p__15003){
var map__15004 = p__15003;
var map__15004__$1 = ((((!((map__15004 == null)))?((((map__15004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15004):map__15004);
var args = map__15004__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$size);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$height);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.gap_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["gap"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro gap-args-desc args \"gap\")"));
}

var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(size)?re_com.box.flex_child_style(size):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null):null),((re_com.box.debug)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"chocolate"], null):null),style], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-gap ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,s], null),attr], 0))], null);
});

re_com.box.gap.cljs$lang$maxFixedArity = (0);

re_com.box.gap.cljs$lang$applyTo = (function (seq15002){
return re_com.box.gap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15002));
});

re_com.box.line_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"1px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style for the thickness of the line. Usually px, % or em"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$color,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"lightgray",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS color"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns a component which produces a line between children in a v-box/h-box along the main axis.
 * Specify size in pixels and a stancard CSS color. Defaults to a 1px lightgray line
 */
re_com.box.line = (function re_com$box$line(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15013 = arguments.length;
var i__8815__auto___15014 = (0);
while(true){
if((i__8815__auto___15014 < len__8814__auto___15013)){
args__8821__auto__.push((arguments[i__8815__auto___15014]));

var G__15015 = (i__8815__auto___15014 + (1));
i__8815__auto___15014 = G__15015;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.line.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__15010){
var map__15011 = p__15010;
var map__15011__$1 = ((((!((map__15011 == null)))?((((map__15011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15011):map__15011);
var args = map__15011__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15011__$1,cljs.core.cst$kw$size,"1px");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15011__$1,cljs.core.cst$kw$color,"lightgray");
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.line_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro line-args-desc args \"line\")"));
}

var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,color], null),style], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,s], null),attr], 0))], null);
});

re_com.box.line.cljs$lang$maxFixedArity = (0);

re_com.box.line.cljs$lang$applyTo = (function (seq15009){
return re_com.box.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15009));
});

re_com.box.h_box_args_desc = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$children,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector",cljs.core.cst$kw$validate_DASH_fn,cljs.core.sequential_QMARK_,cljs.core.cst$kw$description,"a vector (or list) of components"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"none",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The minimum width to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The minimum height to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The maximum width to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The maximum height to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$justify,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$start,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.justify_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"justify-content"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"One of ",re_com.validate.justify_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$align,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$stretch,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-items"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)," One of ",re_com.validate.align_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-self"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Used when a child must override the parent's align-items setting."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS margin style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS padding style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$gap,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the amount of whitespace to put between each child. Typically, an absolute CSS length like 10px or 10em, but can be a stretchy proportional amount like 2"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns hiccup which produces a horizontal box.
 * It's primary role is to act as a container for components and lays it's children from left to right.
 * By default, it also acts as a child under it's parent
 */
re_com.box.h_box = (function re_com$box$h_box(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15020 = arguments.length;
var i__8815__auto___15021 = (0);
while(true){
if((i__8815__auto___15021 < len__8814__auto___15020)){
args__8821__auto__.push((arguments[i__8815__auto___15021]));

var G__15022 = (i__8815__auto___15021 + (1));
i__8815__auto___15021 = G__15022;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.h_box.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.h_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__15017){
var map__15018 = p__15017;
var map__15018__$1 = ((((!((map__15018 == null)))?((((map__15018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15018):map__15018);
var args = map__15018__$1;
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$align_DASH_self);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$margin);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$attr);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$min_DASH_width);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$children);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15018__$1,cljs.core.cst$kw$align,cljs.core.cst$kw$stretch);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$max_DASH_height);
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$min_DASH_height);
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15018__$1,cljs.core.cst$kw$justify,cljs.core.cst$kw$start);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$width);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$max_DASH_width);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15018__$1,cljs.core.cst$kw$size,"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$padding);
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$gap);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.h_box_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["h-box"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro h-box-args-desc args \"h-box\")"));
}

var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_flow_style("row nowrap"),re_com.box.flex_child_style(size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_width,min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_height,min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null):null),re_com.box.justify_style(justify),re_com.box.align_style(cljs.core.cst$kw$align_DASH_items,align),(cljs.core.truth_(align_self)?re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,padding], null):null),((re_com.box.debug)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"gold"], null):null),style], 0));
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$size,gap,cljs.core.cst$kw$width,gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(gap_form,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,children)):children);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-h-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,s], null),attr], 0))], null),children__$1);
});

re_com.box.h_box.cljs$lang$maxFixedArity = (0);

re_com.box.h_box.cljs$lang$applyTo = (function (seq15016){
return re_com.box.h_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15016));
});

re_com.box.v_box_args_desc = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$children,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector",cljs.core.cst$kw$validate_DASH_fn,cljs.core.sequential_QMARK_,cljs.core.cst$kw$description,"a vector (or list) of components"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"none",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The minimum width to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The minimum height to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The maximum width to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The maximum height to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$justify,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$start,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.justify_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"justify-content"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"One of ",re_com.validate.justify_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$align,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$stretch,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-items"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)," One of ",re_com.validate.align_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-self"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Used when a child must override the parent's align-items setting."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS margin style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS padding style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$gap,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the amount of whitespace to put between each child. Typically, an absolute CSS length like 10px or 10em, but can be a stretchy proportional amount like 2"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns hiccup which produces a vertical box.
 * It's primary role is to act as a container for components and lays it's children from top to bottom.
 * By default, it also acts as a child under it's parent
 */
re_com.box.v_box = (function re_com$box$v_box(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15027 = arguments.length;
var i__8815__auto___15028 = (0);
while(true){
if((i__8815__auto___15028 < len__8814__auto___15027)){
args__8821__auto__.push((arguments[i__8815__auto___15028]));

var G__15029 = (i__8815__auto___15028 + (1));
i__8815__auto___15028 = G__15029;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.v_box.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.v_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__15024){
var map__15025 = p__15024;
var map__15025__$1 = ((((!((map__15025 == null)))?((((map__15025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15025):map__15025);
var args = map__15025__$1;
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$align_DASH_self);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$margin);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$attr);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$min_DASH_width);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$children);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15025__$1,cljs.core.cst$kw$align,cljs.core.cst$kw$stretch);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$max_DASH_height);
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$min_DASH_height);
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15025__$1,cljs.core.cst$kw$justify,cljs.core.cst$kw$start);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$width);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$max_DASH_width);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15025__$1,cljs.core.cst$kw$size,"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$padding);
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$gap);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.v_box_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["v-box"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro v-box-args-desc args \"v-box\")"));
}

var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_flow_style("column nowrap"),re_com.box.flex_child_style(size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_width,min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_height,min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null):null),re_com.box.justify_style(justify),re_com.box.align_style(cljs.core.cst$kw$align_DASH_items,align),(cljs.core.truth_(align_self)?re_com.box.align_style(cljs.core.cst$kw$align_DASH_self,align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,padding], null):null),((re_com.box.debug)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"antiquewhite"], null):null),style], 0));
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$size,gap,cljs.core.cst$kw$height,gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(gap_form,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,children)):children);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-v-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,s], null),attr], 0))], null),children__$1);
});

re_com.box.v_box.cljs$lang$maxFixedArity = (0);

re_com.box.v_box.cljs$lang$applyTo = (function (seq15023){
return re_com.box.v_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15023));
});

re_com.box.box_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$child,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"a component (or string)"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"none",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The minimum width to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The minimum height to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The maximum width to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The maximum height to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$justify,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$start,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.justify_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"justify-content"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"One of ",re_com.validate.justify_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$align,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$stretch,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-items"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)," One of ",re_com.validate.align_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-self"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Used when a child must override the parent's align-items setting."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS margin style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS padding style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns hiccup which produces a box, which is generally used as a child of a v-box or an h-box.
 * By default, it also acts as a container for further child compenents, or another h-box or v-box
 */
re_com.box.box = (function re_com$box$box(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15034 = arguments.length;
var i__8815__auto___15035 = (0);
while(true){
if((i__8815__auto___15035 < len__8814__auto___15034)){
args__8821__auto__.push((arguments[i__8815__auto___15035]));

var G__15036 = (i__8815__auto___15035 + (1));
i__8815__auto___15035 = G__15036;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.box.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.box.cljs$core$IFn$_invoke$arity$variadic = (function (p__15031){
var map__15032 = p__15031;
var map__15032__$1 = ((((!((map__15032 == null)))?((((map__15032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15032):map__15032);
var args = map__15032__$1;
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$child);
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$align_DASH_self);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$margin);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$attr);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$min_DASH_width);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$align);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$max_DASH_height);
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$min_DASH_height);
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$justify);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$width);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$max_DASH_width);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15032__$1,cljs.core.cst$kw$size,"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15032__$1,cljs.core.cst$kw$padding);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.box_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["box"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro box-args-desc args \"box\")"));
}

return re_com.box.box_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$size,size,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$min_DASH_width,min_width,cljs.core.cst$kw$min_DASH_height,min_height,cljs.core.cst$kw$max_DASH_width,max_width,cljs.core.cst$kw$max_DASH_height,max_height,cljs.core.cst$kw$justify,justify,cljs.core.cst$kw$align,align,cljs.core.cst$kw$align_DASH_self,align_self,cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$child,child,cljs.core.cst$kw$class_DASH_name,"rc-box ",cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.box.box.cljs$lang$maxFixedArity = (0);

re_com.box.box.cljs$lang$applyTo = (function (seq15030){
return re_com.box.box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15030));
});

re_com.box.scroller_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$child,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"a component (or string)"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"auto",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$scroll,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"auto",cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.scroll_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Sets both h-scroll and v-scroll at once: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":auto"], null),": only show scroll bar(s) if the content is larger than the scroller",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on"], null),": always show scroll bars",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":off"], null),": never show scroll bar(s). Content which is not in the bounds of the scroller can not be seen",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":spill"], null),": never show scroll bar(s). Content which is not in the bounds of the scroller spills all over the place"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$h_DASH_scroll,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.scroll_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":scroll"], null),". Overrides that setting"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.scroll_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":scroll"], null),". Overrides that setting"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"initial width"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"initial height"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The minimum width to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The minimum height to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The maximum width to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The maximum height to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$justify,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$start,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.justify_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"justify-content"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"One of ",re_com.validate.justify_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$align,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$stretch,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-items"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)," One of ",re_com.validate.align_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.align_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"align-self"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Used when a child must override the parent's align-items setting."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS margin style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS padding style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns hiccup which produces a scoller component.
 * This is the way scroll bars are added to boxes, in favour of adding the scroll attributes directly to the boxes themselves.
 * IMPORTANT: Because this component becomes the flex child in place of the component it is wrapping, you must copy the size attibutes to this componenet.
 * There are three scroll types:
 *  - h-scroll  Determines how the horizontal scroll bar will be displayed.
 *  - v-scroll  Determines how the vertical scroll bar will be displayed.
 *  - scroll    Sets both h-scroll and v-scroll at once.
 * Syntax: :auto   [DEFAULT] Only show scroll bar(s) if the content is larger than the scroller.
 *         :on     Always show scroll bar(s).
 *         :off    Never show scroll bar(s). Content which is not in the bounds of the scroller can not be seen.
 *         :spill  Never show scroll bar(s). Content which is not in the bounds of the scroller spills all over the place.
 * Note:   If scroll is set, then setting h-scroll or v-scroll overrides the scroll value
 */
re_com.box.scroller = (function re_com$box$scroller(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15041 = arguments.length;
var i__8815__auto___15042 = (0);
while(true){
if((i__8815__auto___15042 < len__8814__auto___15041)){
args__8821__auto__.push((arguments[i__8815__auto___15042]));

var G__15043 = (i__8815__auto___15042 + (1));
i__8815__auto___15042 = G__15043;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.scroller.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.scroller.cljs$core$IFn$_invoke$arity$variadic = (function (p__15038){
var map__15039 = p__15038;
var map__15039__$1 = ((((!((map__15039 == null)))?((((map__15039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15039):map__15039);
var args = map__15039__$1;
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$child);
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$align_DASH_self);
var v_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$v_DASH_scroll);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$margin);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$attr);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$min_DASH_width);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$align);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$max_DASH_height);
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$min_DASH_height);
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$justify);
var h_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$h_DASH_scroll);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$width);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$max_DASH_width);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15039__$1,cljs.core.cst$kw$size,"auto");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$style);
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$scroll);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$padding);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.scroller_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["scroller"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro scroller-args-desc args \"scroller\")"));
}

var not_v_or_h = ((v_scroll == null)) && ((h_scroll == null));
var scroll__$1 = ((((scroll == null)) && (not_v_or_h))?cljs.core.cst$kw$auto:scroll);
return re_com.box.box_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$size,size,cljs.core.cst$kw$scroll,scroll__$1,cljs.core.cst$kw$h_DASH_scroll,h_scroll,cljs.core.cst$kw$v_DASH_scroll,v_scroll,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$min_DASH_width,min_width,cljs.core.cst$kw$min_DASH_height,min_height,cljs.core.cst$kw$max_DASH_width,max_width,cljs.core.cst$kw$max_DASH_height,max_height,cljs.core.cst$kw$justify,justify,cljs.core.cst$kw$align,align,cljs.core.cst$kw$align_DASH_self,align_self,cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$child,child,cljs.core.cst$kw$class_DASH_name,"rc-scroller ",cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.box.scroller.cljs$lang$maxFixedArity = (0);

re_com.box.scroller.cljs$lang$applyTo = (function (seq15037){
return re_com.box.scroller.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15037));
});

re_com.box.border_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$child,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"a component (or string)"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$border,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"1px solid lightgrey",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS border style. A convenience to describe all borders in one parameter"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$l_DASH_border,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a CSS border style for the left border. Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":border"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$r_DASH_border,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a CSS border style for the right border. Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":border"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$t_DASH_border,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a CSS border style for the top border. Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":border"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$b_DASH_border,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a CSS border style for the bottom. Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":border"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$radius,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS radius style eg.\"2px\""], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"none",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style describing the initial width"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS style describing the initial height"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The minimum width to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The minimum height to which the box can shrink"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width style. The maximum width to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS height style. The maximum height to which the box can grow"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS margin style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS padding style"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns hiccup which produces a border component.
 * This is the way borders are added to boxes, in favour of adding the border attributes directly to the boxes themselves.
 * border property syntax: '<border-width> || <border-style> || <color>'
 *  - border-width: thin, medium, thick or standard CSS size (e.g. 2px, 0.5em)
 *  - border-style: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
 *  - color:        standard CSS color (e.g. grey #88ffee)
 */
re_com.box.border = (function re_com$box$border(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15048 = arguments.length;
var i__8815__auto___15049 = (0);
while(true){
if((i__8815__auto___15049 < len__8814__auto___15048)){
args__8821__auto__.push((arguments[i__8815__auto___15049]));

var G__15050 = (i__8815__auto___15049 + (1));
i__8815__auto___15049 = G__15050;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.box.border.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.box.border.cljs$core$IFn$_invoke$arity$variadic = (function (p__15045){
var map__15046 = p__15045;
var map__15046__$1 = ((((!((map__15046 == null)))?((((map__15046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15046):map__15046);
var args = map__15046__$1;
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$child);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$border);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$height);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$margin);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$attr);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$min_DASH_width);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$max_DASH_height);
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$min_DASH_height);
var r_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$r_DASH_border);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$width);
var b_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$b_DASH_border);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$max_DASH_width);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$radius);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15046__$1,cljs.core.cst$kw$size,"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$class);
var l_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$l_DASH_border);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$padding);
var t_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$t_DASH_border);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.box.border_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["border"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro border-args-desc args \"border\")"));
}

var no_border = cljs.core.every_QMARK_(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [border,l_border,r_border,t_border,b_border], null));
var default_border = "1px solid lightgrey";
return re_com.box.box_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$size,size,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$min_DASH_width,min_width,cljs.core.cst$kw$min_DASH_height,min_height,cljs.core.cst$kw$max_DASH_width,max_width,cljs.core.cst$kw$max_DASH_height,max_height,cljs.core.cst$kw$margin,margin,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$border,((no_border)?default_border:border),cljs.core.cst$kw$l_DASH_border,l_border,cljs.core.cst$kw$r_DASH_border,r_border,cljs.core.cst$kw$t_DASH_border,t_border,cljs.core.cst$kw$b_DASH_border,b_border,cljs.core.cst$kw$radius,radius,cljs.core.cst$kw$child,child,cljs.core.cst$kw$class_DASH_name,"rc-border ",cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr], 0));
});

re_com.box.border.cljs$lang$maxFixedArity = (0);

re_com.box.border.cljs$lang$applyTo = (function (seq15044){
return re_com.box.border.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15044));
});

