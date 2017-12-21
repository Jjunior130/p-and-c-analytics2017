// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._header[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._header["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._has_body[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._body[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._body["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56283 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56283["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56284 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56284["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56285 = temp__4655__auto____$2;
return (o56285["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56286 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56286["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56287 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56287["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56288 = temp__4655__auto____$2;
return (o56288["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56289 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56289["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56290 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56290["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56291 = temp__4655__auto____$2;
return (o56291["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56292 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56292["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56293 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56293["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56294 = temp__4655__auto____$2;
return (o56294["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56295 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56295["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56296 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56296["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56297 = temp__4655__auto____$2;
return (o56297["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56298 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56298["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56299 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56299["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56300 = temp__4655__auto____$2;
return (o56300["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o56301 = temp__4655__auto__;
var temp__4655__auto____$1 = (o56301["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o56302 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o56302["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o56303 = temp__4655__auto____$2;
return (o56303["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56305 = arguments.length;
var i__28365__auto___56306 = (0);
while(true){
if((i__28365__auto___56306 < len__28364__auto___56305)){
args__28371__auto__.push((arguments[i__28365__auto___56306]));

var G__56307 = (i__28365__auto___56306 + (1));
i__28365__auto___56306 = G__56307;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq56304){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56304));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56309 = arguments.length;
var i__28365__auto___56310 = (0);
while(true){
if((i__28365__auto___56310 < len__28364__auto___56309)){
args__28371__auto__.push((arguments[i__28365__auto___56310]));

var G__56311 = (i__28365__auto___56310 + (1));
i__28365__auto___56310 = G__56311;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq56308){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56308));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56313 = arguments.length;
var i__28365__auto___56314 = (0);
while(true){
if((i__28365__auto___56314 < len__28364__auto___56313)){
args__28371__auto__.push((arguments[i__28365__auto___56314]));

var G__56315 = (i__28365__auto___56314 + (1));
i__28365__auto___56314 = G__56315;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq56312){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56312));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56317 = arguments.length;
var i__28365__auto___56318 = (0);
while(true){
if((i__28365__auto___56318 < len__28364__auto___56317)){
args__28371__auto__.push((arguments[i__28365__auto___56318]));

var G__56319 = (i__28365__auto___56318 + (1));
i__28365__auto___56318 = G__56319;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq56316){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56316));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56321 = arguments.length;
var i__28365__auto___56322 = (0);
while(true){
if((i__28365__auto___56322 < len__28364__auto___56321)){
args__28371__auto__.push((arguments[i__28365__auto___56322]));

var G__56323 = (i__28365__auto___56322 + (1));
i__28365__auto___56322 = G__56323;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq56320){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56320));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56325 = arguments.length;
var i__28365__auto___56326 = (0);
while(true){
if((i__28365__auto___56326 < len__28364__auto___56325)){
args__28371__auto__.push((arguments[i__28365__auto___56326]));

var G__56327 = (i__28365__auto___56326 + (1));
i__28365__auto___56326 = G__56327;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq56324){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56324));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56329 = arguments.length;
var i__28365__auto___56330 = (0);
while(true){
if((i__28365__auto___56330 < len__28364__auto___56329)){
args__28371__auto__.push((arguments[i__28365__auto___56330]));

var G__56331 = (i__28365__auto___56330 + (1));
i__28365__auto___56330 = G__56331;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq56328){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56328));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56339 = arguments.length;
var i__28365__auto___56340 = (0);
while(true){
if((i__28365__auto___56340 < len__28364__auto___56339)){
args__28371__auto__.push((arguments[i__28365__auto___56340]));

var G__56341 = (i__28365__auto___56340 + (1));
i__28365__auto___56340 = G__56341;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__56335){
var vec__56336 = p__56335;
var state_override = cljs.core.nth.call(null,vec__56336,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__56336,state_override){
return (function (p1__56332_SHARP_){
return cljs.core.merge.call(null,p1__56332_SHARP_,state_override);
});})(vec__56336,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq56333){
var G__56334 = cljs.core.first.call(null,seq56333);
var seq56333__$1 = cljs.core.next.call(null,seq56333);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__56334,seq56333__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56343 = arguments.length;
var i__28365__auto___56344 = (0);
while(true){
if((i__28365__auto___56344 < len__28364__auto___56343)){
args__28371__auto__.push((arguments[i__28365__auto___56344]));

var G__56345 = (i__28365__auto___56344 + (1));
i__28365__auto___56344 = G__56345;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq56342){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56342));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___56348 = arguments.length;
var i__28365__auto___56349 = (0);
while(true){
if((i__28365__auto___56349 < len__28364__auto___56348)){
args__28371__auto__.push((arguments[i__28365__auto___56349]));

var G__56350 = (i__28365__auto___56349 + (1));
i__28365__auto___56349 = G__56350;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq56346){
var G__56347 = cljs.core.first.call(null,seq56346);
var seq56346__$1 = cljs.core.next.call(null,seq56346);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__56347,seq56346__$1);
});


//# sourceMappingURL=format.js.map?rel=1513855135001
