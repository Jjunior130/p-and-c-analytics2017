// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.components.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.components.d3.no_op = (function day8$re_frame$trace$components$d3$no_op(desc){
return (function() { 
var G__42750__delegate = function (args){
return null;
};
var G__42750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42751__i = 0, G__42751__a = new Array(arguments.length -  0);
while (G__42751__i < G__42751__a.length) {G__42751__a[G__42751__i] = arguments[G__42751__i + 0]; ++G__42751__i;}
  args = new cljs.core.IndexedSeq(G__42751__a,0,null);
} 
return G__42750__delegate.call(this,args);};
G__42750.cljs$lang$maxFixedArity = 0;
G__42750.cljs$lang$applyTo = (function (arglist__42752){
var args = cljs.core.seq(arglist__42752);
return G__42750__delegate(args);
});
G__42750.cljs$core$IFn$_invoke$arity$variadic = G__42750__delegate;
return G__42750;
})()
;
});
day8.re_frame.trace.components.d3.component_did_update = (function day8$re_frame$trace$components$d3$component_did_update(p__42753,ratoms){
var map__42754 = p__42753;
var map__42754__$1 = ((((!((map__42754 == null)))?((((map__42754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42754):map__42754);
var d3_update = cljs.core.get.call(null,map__42754__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.components.d3.component_did_mount = (function day8$re_frame$trace$components$d3$component_did_mount(p__42756,ratoms){
var map__42757 = p__42756;
var map__42757__$1 = ((((!((map__42757 == null)))?((((map__42757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42757):map__42757);
var lifecycle_fns = map__42757__$1;
var d3_once = cljs.core.get.call(null,map__42757__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var len__28364__auto___42768 = arguments.length;
var i__28365__auto___42769 = (0);
while(true){
if((i__28365__auto___42769 < len__28364__auto___42768)){
args__28371__auto__.push((arguments[i__28365__auto___42769]));

var G__42770 = (i__28365__auto___42769 + (1));
i__28365__auto___42769 = G__42770;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__42761,ratoms){
var map__42762 = p__42761;
var map__42762__$1 = ((((!((map__42762 == null)))?((((map__42762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42762):map__42762);
var render_component = cljs.core.get.call(null,map__42762__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__42762__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__42762__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__42762,map__42762__$1,render_component,d3_once,d3_update){
return (function (){
var seq__42764_42771 = cljs.core.seq.call(null,ratoms);
var chunk__42765_42772 = null;
var count__42766_42773 = (0);
var i__42767_42774 = (0);
while(true){
if((i__42767_42774 < count__42766_42773)){
var r_42775 = cljs.core._nth.call(null,chunk__42765_42772,i__42767_42774);
cljs.core.deref.call(null,r_42775);

var G__42776 = seq__42764_42771;
var G__42777 = chunk__42765_42772;
var G__42778 = count__42766_42773;
var G__42779 = (i__42767_42774 + (1));
seq__42764_42771 = G__42776;
chunk__42765_42772 = G__42777;
count__42766_42773 = G__42778;
i__42767_42774 = G__42779;
continue;
} else {
var temp__4657__auto___42780 = cljs.core.seq.call(null,seq__42764_42771);
if(temp__4657__auto___42780){
var seq__42764_42781__$1 = temp__4657__auto___42780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42764_42781__$1)){
var c__28034__auto___42782 = cljs.core.chunk_first.call(null,seq__42764_42781__$1);
var G__42783 = cljs.core.chunk_rest.call(null,seq__42764_42781__$1);
var G__42784 = c__28034__auto___42782;
var G__42785 = cljs.core.count.call(null,c__28034__auto___42782);
var G__42786 = (0);
seq__42764_42771 = G__42783;
chunk__42765_42772 = G__42784;
count__42766_42773 = G__42785;
i__42767_42774 = G__42786;
continue;
} else {
var r_42787 = cljs.core.first.call(null,seq__42764_42781__$1);
cljs.core.deref.call(null,r_42787);

var G__42788 = cljs.core.next.call(null,seq__42764_42781__$1);
var G__42789 = null;
var G__42790 = (0);
var G__42791 = (0);
seq__42764_42771 = G__42788;
chunk__42765_42772 = G__42789;
count__42766_42773 = G__42790;
i__42767_42774 = G__42791;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__42762,map__42762__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__42762,map__42762__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.components.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__42762,map__42762__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__42762,map__42762__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.components.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__42762,map__42762__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.components.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.components.d3.create_d3.cljs$lang$applyTo = (function (seq42759){
var G__42760 = cljs.core.first.call(null,seq42759);
var seq42759__$1 = cljs.core.next.call(null,seq42759);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__42760,seq42759__$1);
});


//# sourceMappingURL=d3.js.map?rel=1514349648051
