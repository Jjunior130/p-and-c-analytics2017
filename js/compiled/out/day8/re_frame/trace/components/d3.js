// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.components.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.components.d3.no_op = (function day8$re_frame$trace$components$d3$no_op(desc){
return (function() { 
var G__42726__delegate = function (args){
return null;
};
var G__42726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42727__i = 0, G__42727__a = new Array(arguments.length -  0);
while (G__42727__i < G__42727__a.length) {G__42727__a[G__42727__i] = arguments[G__42727__i + 0]; ++G__42727__i;}
  args = new cljs.core.IndexedSeq(G__42727__a,0,null);
} 
return G__42726__delegate.call(this,args);};
G__42726.cljs$lang$maxFixedArity = 0;
G__42726.cljs$lang$applyTo = (function (arglist__42728){
var args = cljs.core.seq(arglist__42728);
return G__42726__delegate(args);
});
G__42726.cljs$core$IFn$_invoke$arity$variadic = G__42726__delegate;
return G__42726;
})()
;
});
day8.re_frame.trace.components.d3.component_did_update = (function day8$re_frame$trace$components$d3$component_did_update(p__42729,ratoms){
var map__42730 = p__42729;
var map__42730__$1 = ((((!((map__42730 == null)))?((((map__42730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42730):map__42730);
var d3_update = cljs.core.get.call(null,map__42730__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.components.d3.component_did_mount = (function day8$re_frame$trace$components$d3$component_did_mount(p__42732,ratoms){
var map__42733 = p__42732;
var map__42733__$1 = ((((!((map__42733 == null)))?((((map__42733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42733):map__42733);
var lifecycle_fns = map__42733__$1;
var d3_once = cljs.core.get.call(null,map__42733__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var len__28364__auto___42744 = arguments.length;
var i__28365__auto___42745 = (0);
while(true){
if((i__28365__auto___42745 < len__28364__auto___42744)){
args__28371__auto__.push((arguments[i__28365__auto___42745]));

var G__42746 = (i__28365__auto___42745 + (1));
i__28365__auto___42745 = G__42746;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__42737,ratoms){
var map__42738 = p__42737;
var map__42738__$1 = ((((!((map__42738 == null)))?((((map__42738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42738):map__42738);
var render_component = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__42738__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__42738,map__42738__$1,render_component,d3_once,d3_update){
return (function (){
var seq__42740_42747 = cljs.core.seq.call(null,ratoms);
var chunk__42741_42748 = null;
var count__42742_42749 = (0);
var i__42743_42750 = (0);
while(true){
if((i__42743_42750 < count__42742_42749)){
var r_42751 = cljs.core._nth.call(null,chunk__42741_42748,i__42743_42750);
cljs.core.deref.call(null,r_42751);

var G__42752 = seq__42740_42747;
var G__42753 = chunk__42741_42748;
var G__42754 = count__42742_42749;
var G__42755 = (i__42743_42750 + (1));
seq__42740_42747 = G__42752;
chunk__42741_42748 = G__42753;
count__42742_42749 = G__42754;
i__42743_42750 = G__42755;
continue;
} else {
var temp__4657__auto___42756 = cljs.core.seq.call(null,seq__42740_42747);
if(temp__4657__auto___42756){
var seq__42740_42757__$1 = temp__4657__auto___42756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42740_42757__$1)){
var c__28034__auto___42758 = cljs.core.chunk_first.call(null,seq__42740_42757__$1);
var G__42759 = cljs.core.chunk_rest.call(null,seq__42740_42757__$1);
var G__42760 = c__28034__auto___42758;
var G__42761 = cljs.core.count.call(null,c__28034__auto___42758);
var G__42762 = (0);
seq__42740_42747 = G__42759;
chunk__42741_42748 = G__42760;
count__42742_42749 = G__42761;
i__42743_42750 = G__42762;
continue;
} else {
var r_42763 = cljs.core.first.call(null,seq__42740_42757__$1);
cljs.core.deref.call(null,r_42763);

var G__42764 = cljs.core.next.call(null,seq__42740_42757__$1);
var G__42765 = null;
var G__42766 = (0);
var G__42767 = (0);
seq__42740_42747 = G__42764;
chunk__42741_42748 = G__42765;
count__42742_42749 = G__42766;
i__42743_42750 = G__42767;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__42738,map__42738__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__42738,map__42738__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.components.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__42738,map__42738__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__42738,map__42738__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.components.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__42738,map__42738__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.components.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.components.d3.create_d3.cljs$lang$applyTo = (function (seq42735){
var G__42736 = cljs.core.first.call(null,seq42735);
var seq42735__$1 = cljs.core.next.call(null,seq42735);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__42736,seq42735__$1);
});


//# sourceMappingURL=d3.js.map?rel=1514003846765
