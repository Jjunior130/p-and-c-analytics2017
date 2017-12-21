// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.components.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.components.d3.no_op = (function day8$re_frame$trace$components$d3$no_op(desc){
return (function() { 
var G__42697__delegate = function (args){
return null;
};
var G__42697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42698__i = 0, G__42698__a = new Array(arguments.length -  0);
while (G__42698__i < G__42698__a.length) {G__42698__a[G__42698__i] = arguments[G__42698__i + 0]; ++G__42698__i;}
  args = new cljs.core.IndexedSeq(G__42698__a,0,null);
} 
return G__42697__delegate.call(this,args);};
G__42697.cljs$lang$maxFixedArity = 0;
G__42697.cljs$lang$applyTo = (function (arglist__42699){
var args = cljs.core.seq(arglist__42699);
return G__42697__delegate(args);
});
G__42697.cljs$core$IFn$_invoke$arity$variadic = G__42697__delegate;
return G__42697;
})()
;
});
day8.re_frame.trace.components.d3.component_did_update = (function day8$re_frame$trace$components$d3$component_did_update(p__42700,ratoms){
var map__42701 = p__42700;
var map__42701__$1 = ((((!((map__42701 == null)))?((((map__42701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42701):map__42701);
var d3_update = cljs.core.get.call(null,map__42701__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.components.d3.component_did_mount = (function day8$re_frame$trace$components$d3$component_did_mount(p__42703,ratoms){
var map__42704 = p__42703;
var map__42704__$1 = ((((!((map__42704 == null)))?((((map__42704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42704):map__42704);
var lifecycle_fns = map__42704__$1;
var d3_once = cljs.core.get.call(null,map__42704__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
cljs.core.apply.call(null,d3_once,ratoms);

return day8.re_frame.trace.components.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});
/**
 * Creates a bridging component from Reagent to D3. Takes a map of
 *   lifecycle functions, and reactive data sources.
 * 
 *   :render-component - Render the outer Reagent component, and a place for your D3 component to mount to (probably an SVG element)
 *   :d3-once - Function called after the component has been rendered, for you to setup anything you need in D3 (e.g. adding <g> or classes)
 *   :d3-update - Run the D3 general update pattern: https://bl.ocks.org/mbostock/3808218
 *   
 */
day8.re_frame.trace.components.d3.create_d3 = (function day8$re_frame$trace$components$d3$create_d3(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42715 = arguments.length;
var i__28365__auto___42716 = (0);
while(true){
if((i__28365__auto___42716 < len__28364__auto___42715)){
args__28371__auto__.push((arguments[i__28365__auto___42716]));

var G__42717 = (i__28365__auto___42716 + (1));
i__28365__auto___42716 = G__42717;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__42708,ratoms){
var map__42709 = p__42708;
var map__42709__$1 = ((((!((map__42709 == null)))?((((map__42709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42709):map__42709);
var render_component = cljs.core.get.call(null,map__42709__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__42709__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__42709__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__42709,map__42709__$1,render_component,d3_once,d3_update){
return (function (){
var seq__42711_42718 = cljs.core.seq.call(null,ratoms);
var chunk__42712_42719 = null;
var count__42713_42720 = (0);
var i__42714_42721 = (0);
while(true){
if((i__42714_42721 < count__42713_42720)){
var r_42722 = cljs.core._nth.call(null,chunk__42712_42719,i__42714_42721);
cljs.core.deref.call(null,r_42722);

var G__42723 = seq__42711_42718;
var G__42724 = chunk__42712_42719;
var G__42725 = count__42713_42720;
var G__42726 = (i__42714_42721 + (1));
seq__42711_42718 = G__42723;
chunk__42712_42719 = G__42724;
count__42713_42720 = G__42725;
i__42714_42721 = G__42726;
continue;
} else {
var temp__4657__auto___42727 = cljs.core.seq.call(null,seq__42711_42718);
if(temp__4657__auto___42727){
var seq__42711_42728__$1 = temp__4657__auto___42727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42711_42728__$1)){
var c__28034__auto___42729 = cljs.core.chunk_first.call(null,seq__42711_42728__$1);
var G__42730 = cljs.core.chunk_rest.call(null,seq__42711_42728__$1);
var G__42731 = c__28034__auto___42729;
var G__42732 = cljs.core.count.call(null,c__28034__auto___42729);
var G__42733 = (0);
seq__42711_42718 = G__42730;
chunk__42712_42719 = G__42731;
count__42713_42720 = G__42732;
i__42714_42721 = G__42733;
continue;
} else {
var r_42734 = cljs.core.first.call(null,seq__42711_42728__$1);
cljs.core.deref.call(null,r_42734);

var G__42735 = cljs.core.next.call(null,seq__42711_42728__$1);
var G__42736 = null;
var G__42737 = (0);
var G__42738 = (0);
seq__42711_42718 = G__42735;
chunk__42712_42719 = G__42736;
count__42713_42720 = G__42737;
i__42714_42721 = G__42738;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__42709,map__42709__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__42709,map__42709__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.components.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__42709,map__42709__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__42709,map__42709__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.components.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__42709,map__42709__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.components.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.components.d3.create_d3.cljs$lang$applyTo = (function (seq42706){
var G__42707 = cljs.core.first.call(null,seq42706);
var seq42706__$1 = cljs.core.next.call(null,seq42706);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__42707,seq42706__$1);
});


//# sourceMappingURL=d3.js.map?rel=1513846763040
