// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.components.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.components.d3.no_op = (function day8$re_frame$trace$components$d3$no_op(desc){
return (function() { 
var G__44394__delegate = function (args){
return null;
};
var G__44394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44395__i = 0, G__44395__a = new Array(arguments.length -  0);
while (G__44395__i < G__44395__a.length) {G__44395__a[G__44395__i] = arguments[G__44395__i + 0]; ++G__44395__i;}
  args = new cljs.core.IndexedSeq(G__44395__a,0,null);
} 
return G__44394__delegate.call(this,args);};
G__44394.cljs$lang$maxFixedArity = 0;
G__44394.cljs$lang$applyTo = (function (arglist__44396){
var args = cljs.core.seq(arglist__44396);
return G__44394__delegate(args);
});
G__44394.cljs$core$IFn$_invoke$arity$variadic = G__44394__delegate;
return G__44394;
})()
;
});
day8.re_frame.trace.components.d3.component_did_update = (function day8$re_frame$trace$components$d3$component_did_update(p__44397,ratoms){
var map__44398 = p__44397;
var map__44398__$1 = ((((!((map__44398 == null)))?((((map__44398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44398):map__44398);
var d3_update = cljs.core.get.call(null,map__44398__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.components.d3.component_did_mount = (function day8$re_frame$trace$components$d3$component_did_mount(p__44400,ratoms){
var map__44401 = p__44400;
var map__44401__$1 = ((((!((map__44401 == null)))?((((map__44401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44401):map__44401);
var lifecycle_fns = map__44401__$1;
var d3_once = cljs.core.get.call(null,map__44401__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var len__28364__auto___44412 = arguments.length;
var i__28365__auto___44413 = (0);
while(true){
if((i__28365__auto___44413 < len__28364__auto___44412)){
args__28371__auto__.push((arguments[i__28365__auto___44413]));

var G__44414 = (i__28365__auto___44413 + (1));
i__28365__auto___44413 = G__44414;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__44405,ratoms){
var map__44406 = p__44405;
var map__44406__$1 = ((((!((map__44406 == null)))?((((map__44406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44406):map__44406);
var render_component = cljs.core.get.call(null,map__44406__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__44406__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__44406__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__44406,map__44406__$1,render_component,d3_once,d3_update){
return (function (){
var seq__44408_44415 = cljs.core.seq.call(null,ratoms);
var chunk__44409_44416 = null;
var count__44410_44417 = (0);
var i__44411_44418 = (0);
while(true){
if((i__44411_44418 < count__44410_44417)){
var r_44419 = cljs.core._nth.call(null,chunk__44409_44416,i__44411_44418);
cljs.core.deref.call(null,r_44419);

var G__44420 = seq__44408_44415;
var G__44421 = chunk__44409_44416;
var G__44422 = count__44410_44417;
var G__44423 = (i__44411_44418 + (1));
seq__44408_44415 = G__44420;
chunk__44409_44416 = G__44421;
count__44410_44417 = G__44422;
i__44411_44418 = G__44423;
continue;
} else {
var temp__4657__auto___44424 = cljs.core.seq.call(null,seq__44408_44415);
if(temp__4657__auto___44424){
var seq__44408_44425__$1 = temp__4657__auto___44424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44408_44425__$1)){
var c__28034__auto___44426 = cljs.core.chunk_first.call(null,seq__44408_44425__$1);
var G__44427 = cljs.core.chunk_rest.call(null,seq__44408_44425__$1);
var G__44428 = c__28034__auto___44426;
var G__44429 = cljs.core.count.call(null,c__28034__auto___44426);
var G__44430 = (0);
seq__44408_44415 = G__44427;
chunk__44409_44416 = G__44428;
count__44410_44417 = G__44429;
i__44411_44418 = G__44430;
continue;
} else {
var r_44431 = cljs.core.first.call(null,seq__44408_44425__$1);
cljs.core.deref.call(null,r_44431);

var G__44432 = cljs.core.next.call(null,seq__44408_44425__$1);
var G__44433 = null;
var G__44434 = (0);
var G__44435 = (0);
seq__44408_44415 = G__44432;
chunk__44409_44416 = G__44433;
count__44410_44417 = G__44434;
i__44411_44418 = G__44435;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__44406,map__44406__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__44406,map__44406__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.components.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__44406,map__44406__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__44406,map__44406__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.components.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__44406,map__44406__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.components.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.components.d3.create_d3.cljs$lang$applyTo = (function (seq44403){
var G__44404 = cljs.core.first.call(null,seq44403);
var seq44403__$1 = cljs.core.next.call(null,seq44403);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__44404,seq44403__$1);
});


//# sourceMappingURL=d3.js.map?rel=1513978689524
