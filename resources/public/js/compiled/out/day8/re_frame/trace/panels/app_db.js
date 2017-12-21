// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.panels.app_db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('day8.re_frame.trace.utils.localstorage');
goog.require('day8.re_frame.trace.components.components');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
day8.re_frame.trace.panels.app_db.string__GT_css = (function day8$re_frame$trace$panels$app_db$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__59328){
var vec__59329 = p__59328;
var property = cljs.core.nth.call(null,vec__59329,(0),null);
var value = cljs.core.nth.call(null,vec__59329,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__59327_SHARP_){
return clojure.string.split.call(null,p1__59327_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame.trace.panels.app_db.default_cljs_devtools_prefs = cljs.core.deref.call(null,devtools.prefs.default_config);
day8.re_frame.trace.panels.app_db.reset_wrapping = (function day8$re_frame$trace$panels$app_db$reset_wrapping(css_string){
return clojure.string.replace.call(null,css_string,/white-space:nowrap;/,"");
});
day8.re_frame.trace.panels.app_db.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame.trace.panels.app_db.effective_cljs_devtools_prefs = cljs.core.merge.call(null,day8.re_frame.trace.panels.app_db.default_cljs_devtools_prefs,day8.re_frame.trace.panels.app_db.customized_cljs_devtools_prefs);
day8.re_frame.trace.panels.app_db.make_devtools_api_call = (function day8$re_frame$trace$panels$app_db$make_devtools_api_call(var_args){
var args__28371__auto__ = [];
var len__28364__auto___59334 = arguments.length;
var i__28365__auto___59335 = (0);
while(true){
if((i__28365__auto___59335 < len__28364__auto___59334)){
args__28371__auto__.push((arguments[i__28365__auto___59335]));

var G__59336 = (i__28365__auto___59335 + (1));
i__28365__auto___59335 = G__59336;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.panels.app_db.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

day8.re_frame.trace.panels.app_db.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__42635__auto__ = devtools.prefs.get_prefs.call(null);
var prefs__42636__auto__ = day8.re_frame.trace.panels.app_db.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_.call(null,prefs__42636__auto__);

return cljs.core.apply.call(null,api_fn,args);
}finally {if(cljs.core._EQ_.call(null,devtools.prefs.get_prefs.call(null),prefs__42636__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__42636__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_.call(null,previous_config__42635__auto__);
}});

day8.re_frame.trace.panels.app_db.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.panels.app_db.make_devtools_api_call.cljs$lang$applyTo = (function (seq59332){
var G__59333 = cljs.core.first.call(null,seq59332);
var seq59332__$1 = cljs.core.next.call(null,seq59332);
return day8.re_frame.trace.panels.app_db.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic(G__59333,seq59332__$1);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_header = (function day8$re_frame$trace$panels$app_db$cljs_devtools_header(var_args){
var args__28371__auto__ = [];
var len__28364__auto___59338 = arguments.length;
var i__28365__auto___59339 = (0);
while(true){
if((i__28365__auto___59339 < len__28364__auto___59338)){
args__28371__auto__.push((arguments[i__28365__auto___59339]));

var G__59340 = (i__28365__auto___59339 + (1));
i__28365__auto___59339 = G__59340;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.panels.app_db.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.panels.app_db.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.panels.app_db.cljs_devtools_header.cljs$lang$applyTo = (function (seq59337){
return day8.re_frame.trace.panels.app_db.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59337));
});

day8.re_frame.trace.panels.app_db.cljs_devtools_body = (function day8$re_frame$trace$panels$app_db$cljs_devtools_body(var_args){
var args__28371__auto__ = [];
var len__28364__auto___59342 = arguments.length;
var i__28365__auto___59343 = (0);
while(true){
if((i__28365__auto___59343 < len__28364__auto___59342)){
args__28371__auto__.push((arguments[i__28365__auto___59343]));

var G__59344 = (i__28365__auto___59343 + (1));
i__28365__auto___59343 = G__59344;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.panels.app_db.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.panels.app_db.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.panels.app_db.cljs_devtools_body.cljs$lang$applyTo = (function (seq59341){
return day8.re_frame.trace.panels.app_db.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59341));
});

day8.re_frame.trace.panels.app_db.cljs_devtools_has_body = (function day8$re_frame$trace$panels$app_db$cljs_devtools_has_body(var_args){
var args__28371__auto__ = [];
var len__28364__auto___59346 = arguments.length;
var i__28365__auto___59347 = (0);
while(true){
if((i__28365__auto___59347 < len__28364__auto___59346)){
args__28371__auto__.push((arguments[i__28365__auto___59347]));

var G__59348 = (i__28365__auto___59347 + (1));
i__28365__auto___59347 = G__59348;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.panels.app_db.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.panels.app_db.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame.trace.panels.app_db.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.panels.app_db.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq59345){
return day8.re_frame.trace.panels.app_db.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59345));
});

day8.re_frame.trace.panels.app_db.get_object = (function day8$re_frame$trace$panels$app_db$get_object(jsonml){
return cljs.core.get.call(null,jsonml,(1)).object;
});
day8.re_frame.trace.panels.app_db.get_config = (function day8$re_frame$trace$panels$app_db$get_config(jsonml){
return cljs.core.get.call(null,jsonml,(1)).config;
});
day8.re_frame.trace.panels.app_db.data_structure = (function day8$re_frame$trace$panels$app_db$data_structure(jsonml,path){
var expanded_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-trace--object",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?" expanded":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__27183__auto__)){
return day8.re_frame.trace.panels.app_db.cljs_devtools_has_body.call(null,day8.re_frame.trace.panels.app_db.get_object.call(null,jsonml__$1),day8.re_frame.trace.panels.app_db.get_config.call(null,jsonml__$1));
} else {
return and__27183__auto__;
}
})())?day8.re_frame.trace.panels.app_db.jsonml__GT_hiccup.call(null,day8.re_frame.trace.panels.app_db.cljs_devtools_body.call(null,day8.re_frame.trace.panels.app_db.get_object.call(null,jsonml__$1),day8.re_frame.trace.panels.app_db.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"body","body",-2049205669))):day8.re_frame.trace.panels.app_db.jsonml__GT_hiccup.call(null,day8.re_frame.trace.panels.app_db.cljs_devtools_header.call(null,day8.re_frame.trace.panels.app_db.get_object.call(null,jsonml__$1),day8.re_frame.trace.panels.app_db.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"header","header",119441134))))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame.trace.panels.app_db.jsonml__GT_hiccup = (function day8$re_frame$trace$panels$app_db$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__59349 = jsonml;
var seq__59350 = cljs.core.seq.call(null,vec__59349);
var first__59351 = cljs.core.first.call(null,seq__59350);
var seq__59350__$1 = cljs.core.next.call(null,seq__59350);
var tag_name = first__59351;
var first__59351__$1 = cljs.core.first.call(null,seq__59350__$1);
var seq__59350__$2 = cljs.core.next.call(null,seq__59350__$1);
var attributes = first__59351__$1;
var children = seq__59350__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,tag_name)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.panels.app_db.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,attributes),"style"))], null)], null),cljs.core.map_indexed.call(null,((function (vec__59349,seq__59350,first__59351,seq__59350__$1,tag_name,first__59351__$1,seq__59350__$2,attributes,children,tagnames){
return (function (i,child){
return day8.re_frame.trace.panels.app_db.jsonml__GT_hiccup.call(null,child,cljs.core.conj.call(null,path,i));
});})(vec__59349,seq__59350,first__59351,seq__59350__$1,tag_name,first__59351__$1,seq__59350__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.call(null,tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.app_db.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame.trace.panels.app_db.subtree = (function day8$re_frame$trace$panels$app_db$subtree(data,title,path){
var expanded_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__27195__auto__ = title;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__27183__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number');
} else {
return and__27183__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),data__$1], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame.trace.panels.app_db.jsonml__GT_hiccup.call(null,day8.re_frame.trace.panels.app_db.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame.trace.panels.app_db.render_state = (function day8$re_frame$trace$panels$app_db$render_state(data){
var subtree_input = reagent.core.atom.call(null,"");
var subtree_paths = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730)], null));
var search_string = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656)], null));
var input_error = reagent.core.atom.call(null,false);
return ((function (subtree_input,subtree_paths,search_string,input_error){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content-scrollable","div.panel-content-scrollable",-1722397406),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.input_text,new cljs.core.Keyword(null,"model","model",331153215),search_string,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (subtree_input,subtree_paths,search_string,input_error){
return (function (input_string){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),input_string], null));
});})(subtree_input,subtree_paths,search_string,input_error))
,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (subtree_input,subtree_paths,search_string,input_error){
return (function (p1__59352_SHARP_){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","add-path","app-db/add-path",679847590),p1__59352_SHARP_], null));
});})(subtree_input,subtree_paths,search_string,input_error))
,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),":path :into :app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtrees","div.subtrees",-1996798150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (subtree_input,subtree_paths,search_string,input_error){
return (function (path){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtree-wrapper","div.subtree-wrapper",-1759365103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtree","div.subtree",2124828570),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.app_db.subtree,cljs.core.get_in.call(null,cljs.core.deref.call(null,data),path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.subtree-button","button.subtree-button",-215548438),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (subtree_input,subtree_paths,search_string,input_error){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),path], null));
});})(subtree_input,subtree_paths,search_string,input_error))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.subtree-button-string","span.subtree-button-string",873380387),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null));
});})(subtree_input,subtree_paths,search_string,input_error))
,cljs.core.deref.call(null,subtree_paths)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.panels.app_db.subtree,cljs.core.deref.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"app-db"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302)], null)], null)], null)], null)], null);
});
;})(subtree_input,subtree_paths,search_string,input_error))
});

//# sourceMappingURL=app_db.js.map?rel=1513855140168
