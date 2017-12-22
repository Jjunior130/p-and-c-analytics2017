// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.components.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.components.d3.no_op = (function day8$re_frame$trace$components$d3$no_op(desc){
return (function() { 
var G__59380__delegate = function (args){
return null;
};
var G__59380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59381__i = 0, G__59381__a = new Array(arguments.length -  0);
while (G__59381__i < G__59381__a.length) {G__59381__a[G__59381__i] = arguments[G__59381__i + 0]; ++G__59381__i;}
  args = new cljs.core.IndexedSeq(G__59381__a,0,null);
} 
return G__59380__delegate.call(this,args);};
G__59380.cljs$lang$maxFixedArity = 0;
G__59380.cljs$lang$applyTo = (function (arglist__59382){
var args = cljs.core.seq(arglist__59382);
return G__59380__delegate(args);
});
G__59380.cljs$core$IFn$_invoke$arity$variadic = G__59380__delegate;
return G__59380;
})()
;
});
day8.re_frame.trace.components.d3.component_did_update = (function day8$re_frame$trace$components$d3$component_did_update(p__59383,ratoms){
var map__59384 = p__59383;
var map__59384__$1 = ((((!((map__59384 == null)))?((((map__59384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59384):map__59384);
var d3_update = cljs.core.get.call(null,map__59384__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.components.d3.component_did_mount = (function day8$re_frame$trace$components$d3$component_did_mount(p__59386,ratoms){
var map__59387 = p__59386;
var map__59387__$1 = ((((!((map__59387 == null)))?((((map__59387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59387):map__59387);
var lifecycle_fns = map__59387__$1;
var d3_once = cljs.core.get.call(null,map__59387__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
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
var len__28364__auto___59398 = arguments.length;
var i__28365__auto___59399 = (0);
while(true){
if((i__28365__auto___59399 < len__28364__auto___59398)){
args__28371__auto__.push((arguments[i__28365__auto___59399]));

var G__59400 = (i__28365__auto___59399 + (1));
i__28365__auto___59399 = G__59400;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__59391,ratoms){
var map__59392 = p__59391;
var map__59392__$1 = ((((!((map__59392 == null)))?((((map__59392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59392):map__59392);
var render_component = cljs.core.get.call(null,map__59392__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__59392__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__59392__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.components.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__59392,map__59392__$1,render_component,d3_once,d3_update){
return (function (){
var seq__59394_59401 = cljs.core.seq.call(null,ratoms);
var chunk__59395_59402 = null;
var count__59396_59403 = (0);
var i__59397_59404 = (0);
while(true){
if((i__59397_59404 < count__59396_59403)){
var r_59405 = cljs.core._nth.call(null,chunk__59395_59402,i__59397_59404);
cljs.core.deref.call(null,r_59405);

var G__59406 = seq__59394_59401;
var G__59407 = chunk__59395_59402;
var G__59408 = count__59396_59403;
var G__59409 = (i__59397_59404 + (1));
seq__59394_59401 = G__59406;
chunk__59395_59402 = G__59407;
count__59396_59403 = G__59408;
i__59397_59404 = G__59409;
continue;
} else {
var temp__4657__auto___59410 = cljs.core.seq.call(null,seq__59394_59401);
if(temp__4657__auto___59410){
var seq__59394_59411__$1 = temp__4657__auto___59410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59394_59411__$1)){
var c__28034__auto___59412 = cljs.core.chunk_first.call(null,seq__59394_59411__$1);
var G__59413 = cljs.core.chunk_rest.call(null,seq__59394_59411__$1);
var G__59414 = c__28034__auto___59412;
var G__59415 = cljs.core.count.call(null,c__28034__auto___59412);
var G__59416 = (0);
seq__59394_59401 = G__59413;
chunk__59395_59402 = G__59414;
count__59396_59403 = G__59415;
i__59397_59404 = G__59416;
continue;
} else {
var r_59417 = cljs.core.first.call(null,seq__59394_59411__$1);
cljs.core.deref.call(null,r_59417);

var G__59418 = cljs.core.next.call(null,seq__59394_59411__$1);
var G__59419 = null;
var G__59420 = (0);
var G__59421 = (0);
seq__59394_59401 = G__59418;
chunk__59395_59402 = G__59419;
count__59396_59403 = G__59420;
i__59397_59404 = G__59421;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__59392,map__59392__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__59392,map__59392__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.components.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__59392,map__59392__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__59392,map__59392__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.components.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__59392,map__59392__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.components.d3.create_d3.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.components.d3.create_d3.cljs$lang$applyTo = (function (seq59389){
var G__59390 = cljs.core.first.call(null,seq59389);
var seq59389__$1 = cljs.core.next.call(null,seq59389);
return day8.re_frame.trace.components.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic(G__59390,seq59389__$1);
});


//# sourceMappingURL=d3.js.map?rel=1513855140296
