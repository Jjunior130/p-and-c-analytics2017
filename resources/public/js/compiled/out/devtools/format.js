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
var o38975 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38975["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38976 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38976["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38977 = temp__4655__auto____$2;
return (o38977["make_template"]);
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
var o38978 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38978["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38979 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38979["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38980 = temp__4655__auto____$2;
return (o38980["make_group"]);
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
var o38981 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38981["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38982 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38982["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38983 = temp__4655__auto____$2;
return (o38983["make_reference"]);
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
var o38984 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38984["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38985 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38985["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38986 = temp__4655__auto____$2;
return (o38986["make_surrogate"]);
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
var o38987 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38987["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38988 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38988["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38989 = temp__4655__auto____$2;
return (o38989["render_markup"]);
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
var o38990 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38990["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38991 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38991["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38992 = temp__4655__auto____$2;
return (o38992["_LT_header_GT_"]);
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
var o38993 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38993["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38994 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38994["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38995 = temp__4655__auto____$2;
return (o38995["_LT_standard_body_GT_"]);
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
var len__28364__auto___38997 = arguments.length;
var i__28365__auto___38998 = (0);
while(true){
if((i__28365__auto___38998 < len__28364__auto___38997)){
args__28371__auto__.push((arguments[i__28365__auto___38998]));

var G__38999 = (i__28365__auto___38998 + (1));
i__28365__auto___38998 = G__38999;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38996){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38996));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39001 = arguments.length;
var i__28365__auto___39002 = (0);
while(true){
if((i__28365__auto___39002 < len__28364__auto___39001)){
args__28371__auto__.push((arguments[i__28365__auto___39002]));

var G__39003 = (i__28365__auto___39002 + (1));
i__28365__auto___39002 = G__39003;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq39000){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39000));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39005 = arguments.length;
var i__28365__auto___39006 = (0);
while(true){
if((i__28365__auto___39006 < len__28364__auto___39005)){
args__28371__auto__.push((arguments[i__28365__auto___39006]));

var G__39007 = (i__28365__auto___39006 + (1));
i__28365__auto___39006 = G__39007;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq39004){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39004));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39009 = arguments.length;
var i__28365__auto___39010 = (0);
while(true){
if((i__28365__auto___39010 < len__28364__auto___39009)){
args__28371__auto__.push((arguments[i__28365__auto___39010]));

var G__39011 = (i__28365__auto___39010 + (1));
i__28365__auto___39010 = G__39011;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39008){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39008));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39013 = arguments.length;
var i__28365__auto___39014 = (0);
while(true){
if((i__28365__auto___39014 < len__28364__auto___39013)){
args__28371__auto__.push((arguments[i__28365__auto___39014]));

var G__39015 = (i__28365__auto___39014 + (1));
i__28365__auto___39014 = G__39015;
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

devtools.format.template.cljs$lang$applyTo = (function (seq39012){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39012));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39017 = arguments.length;
var i__28365__auto___39018 = (0);
while(true){
if((i__28365__auto___39018 < len__28364__auto___39017)){
args__28371__auto__.push((arguments[i__28365__auto___39018]));

var G__39019 = (i__28365__auto___39018 + (1));
i__28365__auto___39018 = G__39019;
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

devtools.format.group.cljs$lang$applyTo = (function (seq39016){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39016));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39021 = arguments.length;
var i__28365__auto___39022 = (0);
while(true){
if((i__28365__auto___39022 < len__28364__auto___39021)){
args__28371__auto__.push((arguments[i__28365__auto___39022]));

var G__39023 = (i__28365__auto___39022 + (1));
i__28365__auto___39022 = G__39023;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39020){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39020));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39031 = arguments.length;
var i__28365__auto___39032 = (0);
while(true){
if((i__28365__auto___39032 < len__28364__auto___39031)){
args__28371__auto__.push((arguments[i__28365__auto___39032]));

var G__39033 = (i__28365__auto___39032 + (1));
i__28365__auto___39032 = G__39033;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39027){
var vec__39028 = p__39027;
var state_override = cljs.core.nth.call(null,vec__39028,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39028,state_override){
return (function (p1__39024_SHARP_){
return cljs.core.merge.call(null,p1__39024_SHARP_,state_override);
});})(vec__39028,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39025){
var G__39026 = cljs.core.first.call(null,seq39025);
var seq39025__$1 = cljs.core.next.call(null,seq39025);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39026,seq39025__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39035 = arguments.length;
var i__28365__auto___39036 = (0);
while(true){
if((i__28365__auto___39036 < len__28364__auto___39035)){
args__28371__auto__.push((arguments[i__28365__auto___39036]));

var G__39037 = (i__28365__auto___39036 + (1));
i__28365__auto___39036 = G__39037;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq39034){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39034));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39040 = arguments.length;
var i__28365__auto___39041 = (0);
while(true){
if((i__28365__auto___39041 < len__28364__auto___39040)){
args__28371__auto__.push((arguments[i__28365__auto___39041]));

var G__39042 = (i__28365__auto___39041 + (1));
i__28365__auto___39041 = G__39042;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39038){
var G__39039 = cljs.core.first.call(null,seq39038);
var seq39038__$1 = cljs.core.next.call(null,seq39038);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39039,seq39038__$1);
});


//# sourceMappingURL=format.js.map?rel=1514003840734
