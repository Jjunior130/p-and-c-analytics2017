// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27195__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27195__auto__){
return or__27195__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27195__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36257_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36257_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36258 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36259 = null;
var count__36260 = (0);
var i__36261 = (0);
while(true){
if((i__36261 < count__36260)){
var n = cljs.core._nth.call(null,chunk__36259,i__36261);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36262 = seq__36258;
var G__36263 = chunk__36259;
var G__36264 = count__36260;
var G__36265 = (i__36261 + (1));
seq__36258 = G__36262;
chunk__36259 = G__36263;
count__36260 = G__36264;
i__36261 = G__36265;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36258);
if(temp__4657__auto__){
var seq__36258__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36258__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36258__$1);
var G__36266 = cljs.core.chunk_rest.call(null,seq__36258__$1);
var G__36267 = c__28034__auto__;
var G__36268 = cljs.core.count.call(null,c__28034__auto__);
var G__36269 = (0);
seq__36258 = G__36266;
chunk__36259 = G__36267;
count__36260 = G__36268;
i__36261 = G__36269;
continue;
} else {
var n = cljs.core.first.call(null,seq__36258__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36270 = cljs.core.next.call(null,seq__36258__$1);
var G__36271 = null;
var G__36272 = (0);
var G__36273 = (0);
seq__36258 = G__36270;
chunk__36259 = G__36271;
count__36260 = G__36272;
i__36261 = G__36273;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36283_36291 = cljs.core.seq.call(null,deps);
var chunk__36284_36292 = null;
var count__36285_36293 = (0);
var i__36286_36294 = (0);
while(true){
if((i__36286_36294 < count__36285_36293)){
var dep_36295 = cljs.core._nth.call(null,chunk__36284_36292,i__36286_36294);
topo_sort_helper_STAR_.call(null,dep_36295,(depth + (1)),state);

var G__36296 = seq__36283_36291;
var G__36297 = chunk__36284_36292;
var G__36298 = count__36285_36293;
var G__36299 = (i__36286_36294 + (1));
seq__36283_36291 = G__36296;
chunk__36284_36292 = G__36297;
count__36285_36293 = G__36298;
i__36286_36294 = G__36299;
continue;
} else {
var temp__4657__auto___36300 = cljs.core.seq.call(null,seq__36283_36291);
if(temp__4657__auto___36300){
var seq__36283_36301__$1 = temp__4657__auto___36300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36283_36301__$1)){
var c__28034__auto___36302 = cljs.core.chunk_first.call(null,seq__36283_36301__$1);
var G__36303 = cljs.core.chunk_rest.call(null,seq__36283_36301__$1);
var G__36304 = c__28034__auto___36302;
var G__36305 = cljs.core.count.call(null,c__28034__auto___36302);
var G__36306 = (0);
seq__36283_36291 = G__36303;
chunk__36284_36292 = G__36304;
count__36285_36293 = G__36305;
i__36286_36294 = G__36306;
continue;
} else {
var dep_36307 = cljs.core.first.call(null,seq__36283_36301__$1);
topo_sort_helper_STAR_.call(null,dep_36307,(depth + (1)),state);

var G__36308 = cljs.core.next.call(null,seq__36283_36301__$1);
var G__36309 = null;
var G__36310 = (0);
var G__36311 = (0);
seq__36283_36291 = G__36308;
chunk__36284_36292 = G__36309;
count__36285_36293 = G__36310;
i__36286_36294 = G__36311;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36287){
var vec__36288 = p__36287;
var seq__36289 = cljs.core.seq.call(null,vec__36288);
var first__36290 = cljs.core.first.call(null,seq__36289);
var seq__36289__$1 = cljs.core.next.call(null,seq__36289);
var x = first__36290;
var xs = seq__36289__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36288,seq__36289,first__36290,seq__36289__$1,x,xs,get_deps__$1){
return (function (p1__36274_SHARP_){
return clojure.set.difference.call(null,p1__36274_SHARP_,x);
});})(vec__36288,seq__36289,first__36290,seq__36289__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36312 = cljs.core.seq.call(null,provides);
var chunk__36313 = null;
var count__36314 = (0);
var i__36315 = (0);
while(true){
if((i__36315 < count__36314)){
var prov = cljs.core._nth.call(null,chunk__36313,i__36315);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36316_36324 = cljs.core.seq.call(null,requires);
var chunk__36317_36325 = null;
var count__36318_36326 = (0);
var i__36319_36327 = (0);
while(true){
if((i__36319_36327 < count__36318_36326)){
var req_36328 = cljs.core._nth.call(null,chunk__36317_36325,i__36319_36327);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36328,prov);

var G__36329 = seq__36316_36324;
var G__36330 = chunk__36317_36325;
var G__36331 = count__36318_36326;
var G__36332 = (i__36319_36327 + (1));
seq__36316_36324 = G__36329;
chunk__36317_36325 = G__36330;
count__36318_36326 = G__36331;
i__36319_36327 = G__36332;
continue;
} else {
var temp__4657__auto___36333 = cljs.core.seq.call(null,seq__36316_36324);
if(temp__4657__auto___36333){
var seq__36316_36334__$1 = temp__4657__auto___36333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36316_36334__$1)){
var c__28034__auto___36335 = cljs.core.chunk_first.call(null,seq__36316_36334__$1);
var G__36336 = cljs.core.chunk_rest.call(null,seq__36316_36334__$1);
var G__36337 = c__28034__auto___36335;
var G__36338 = cljs.core.count.call(null,c__28034__auto___36335);
var G__36339 = (0);
seq__36316_36324 = G__36336;
chunk__36317_36325 = G__36337;
count__36318_36326 = G__36338;
i__36319_36327 = G__36339;
continue;
} else {
var req_36340 = cljs.core.first.call(null,seq__36316_36334__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36340,prov);

var G__36341 = cljs.core.next.call(null,seq__36316_36334__$1);
var G__36342 = null;
var G__36343 = (0);
var G__36344 = (0);
seq__36316_36324 = G__36341;
chunk__36317_36325 = G__36342;
count__36318_36326 = G__36343;
i__36319_36327 = G__36344;
continue;
}
} else {
}
}
break;
}

var G__36345 = seq__36312;
var G__36346 = chunk__36313;
var G__36347 = count__36314;
var G__36348 = (i__36315 + (1));
seq__36312 = G__36345;
chunk__36313 = G__36346;
count__36314 = G__36347;
i__36315 = G__36348;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36312);
if(temp__4657__auto__){
var seq__36312__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36312__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36312__$1);
var G__36349 = cljs.core.chunk_rest.call(null,seq__36312__$1);
var G__36350 = c__28034__auto__;
var G__36351 = cljs.core.count.call(null,c__28034__auto__);
var G__36352 = (0);
seq__36312 = G__36349;
chunk__36313 = G__36350;
count__36314 = G__36351;
i__36315 = G__36352;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36312__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36320_36353 = cljs.core.seq.call(null,requires);
var chunk__36321_36354 = null;
var count__36322_36355 = (0);
var i__36323_36356 = (0);
while(true){
if((i__36323_36356 < count__36322_36355)){
var req_36357 = cljs.core._nth.call(null,chunk__36321_36354,i__36323_36356);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36357,prov);

var G__36358 = seq__36320_36353;
var G__36359 = chunk__36321_36354;
var G__36360 = count__36322_36355;
var G__36361 = (i__36323_36356 + (1));
seq__36320_36353 = G__36358;
chunk__36321_36354 = G__36359;
count__36322_36355 = G__36360;
i__36323_36356 = G__36361;
continue;
} else {
var temp__4657__auto___36362__$1 = cljs.core.seq.call(null,seq__36320_36353);
if(temp__4657__auto___36362__$1){
var seq__36320_36363__$1 = temp__4657__auto___36362__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36320_36363__$1)){
var c__28034__auto___36364 = cljs.core.chunk_first.call(null,seq__36320_36363__$1);
var G__36365 = cljs.core.chunk_rest.call(null,seq__36320_36363__$1);
var G__36366 = c__28034__auto___36364;
var G__36367 = cljs.core.count.call(null,c__28034__auto___36364);
var G__36368 = (0);
seq__36320_36353 = G__36365;
chunk__36321_36354 = G__36366;
count__36322_36355 = G__36367;
i__36323_36356 = G__36368;
continue;
} else {
var req_36369 = cljs.core.first.call(null,seq__36320_36363__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36369,prov);

var G__36370 = cljs.core.next.call(null,seq__36320_36363__$1);
var G__36371 = null;
var G__36372 = (0);
var G__36373 = (0);
seq__36320_36353 = G__36370;
chunk__36321_36354 = G__36371;
count__36322_36355 = G__36372;
i__36323_36356 = G__36373;
continue;
}
} else {
}
}
break;
}

var G__36374 = cljs.core.next.call(null,seq__36312__$1);
var G__36375 = null;
var G__36376 = (0);
var G__36377 = (0);
seq__36312 = G__36374;
chunk__36313 = G__36375;
count__36314 = G__36376;
i__36315 = G__36377;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36378_36382 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36379_36383 = null;
var count__36380_36384 = (0);
var i__36381_36385 = (0);
while(true){
if((i__36381_36385 < count__36380_36384)){
var ns_36386 = cljs.core._nth.call(null,chunk__36379_36383,i__36381_36385);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36386);

var G__36387 = seq__36378_36382;
var G__36388 = chunk__36379_36383;
var G__36389 = count__36380_36384;
var G__36390 = (i__36381_36385 + (1));
seq__36378_36382 = G__36387;
chunk__36379_36383 = G__36388;
count__36380_36384 = G__36389;
i__36381_36385 = G__36390;
continue;
} else {
var temp__4657__auto___36391 = cljs.core.seq.call(null,seq__36378_36382);
if(temp__4657__auto___36391){
var seq__36378_36392__$1 = temp__4657__auto___36391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36378_36392__$1)){
var c__28034__auto___36393 = cljs.core.chunk_first.call(null,seq__36378_36392__$1);
var G__36394 = cljs.core.chunk_rest.call(null,seq__36378_36392__$1);
var G__36395 = c__28034__auto___36393;
var G__36396 = cljs.core.count.call(null,c__28034__auto___36393);
var G__36397 = (0);
seq__36378_36382 = G__36394;
chunk__36379_36383 = G__36395;
count__36380_36384 = G__36396;
i__36381_36385 = G__36397;
continue;
} else {
var ns_36398 = cljs.core.first.call(null,seq__36378_36392__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36398);

var G__36399 = cljs.core.next.call(null,seq__36378_36392__$1);
var G__36400 = null;
var G__36401 = (0);
var G__36402 = (0);
seq__36378_36382 = G__36399;
chunk__36379_36383 = G__36400;
count__36380_36384 = G__36401;
i__36381_36385 = G__36402;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27195__auto__ = goog.require__;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36403__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36404__i = 0, G__36404__a = new Array(arguments.length -  0);
while (G__36404__i < G__36404__a.length) {G__36404__a[G__36404__i] = arguments[G__36404__i + 0]; ++G__36404__i;}
  args = new cljs.core.IndexedSeq(G__36404__a,0,null);
} 
return G__36403__delegate.call(this,args);};
G__36403.cljs$lang$maxFixedArity = 0;
G__36403.cljs$lang$applyTo = (function (arglist__36405){
var args = cljs.core.seq(arglist__36405);
return G__36403__delegate(args);
});
G__36403.cljs$core$IFn$_invoke$arity$variadic = G__36403__delegate;
return G__36403;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36406_SHARP_,p2__36407_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36406_SHARP_)].join('')),p2__36407_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36408_SHARP_,p2__36409_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36408_SHARP_)].join(''),p2__36409_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36410 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36410.addCallback(((function (G__36410){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36410))
);

G__36410.addErrback(((function (G__36410){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36410))
);

return G__36410;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36411 = cljs.core._EQ_;
var expr__36412 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36411.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36412))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36411,expr__36412){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36411,expr__36412))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36411,expr__36412){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36414){if((e36414 instanceof Error)){
var e = e36414;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36414;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36411,expr__36412))
} else {
if(cljs.core.truth_(pred__36411.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36412))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36411.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36412))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36411.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36412))){
return ((function (pred__36411,expr__36412){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36415){if((e36415 instanceof Error)){
var e = e36415;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36415;

}
}})());
});
;})(pred__36411,expr__36412))
} else {
return ((function (pred__36411,expr__36412){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36411,expr__36412))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36416,callback){
var map__36417 = p__36416;
var map__36417__$1 = ((((!((map__36417 == null)))?((((map__36417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36417):map__36417);
var file_msg = map__36417__$1;
var request_url = cljs.core.get.call(null,map__36417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36417,map__36417__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36417,map__36417__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__){
return (function (state_36441){
var state_val_36442 = (state_36441[(1)]);
if((state_val_36442 === (7))){
var inst_36437 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36443_36460 = state_36441__$1;
(statearr_36443_36460[(2)] = inst_36437);

(statearr_36443_36460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (1))){
var state_36441__$1 = state_36441;
var statearr_36444_36461 = state_36441__$1;
(statearr_36444_36461[(2)] = null);

(statearr_36444_36461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (4))){
var inst_36421 = (state_36441[(7)]);
var inst_36421__$1 = (state_36441[(2)]);
var state_36441__$1 = (function (){var statearr_36445 = state_36441;
(statearr_36445[(7)] = inst_36421__$1);

return statearr_36445;
})();
if(cljs.core.truth_(inst_36421__$1)){
var statearr_36446_36462 = state_36441__$1;
(statearr_36446_36462[(1)] = (5));

} else {
var statearr_36447_36463 = state_36441__$1;
(statearr_36447_36463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (6))){
var state_36441__$1 = state_36441;
var statearr_36448_36464 = state_36441__$1;
(statearr_36448_36464[(2)] = null);

(statearr_36448_36464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (3))){
var inst_36439 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36441__$1,inst_36439);
} else {
if((state_val_36442 === (2))){
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36441__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36442 === (11))){
var inst_36433 = (state_36441[(2)]);
var state_36441__$1 = (function (){var statearr_36449 = state_36441;
(statearr_36449[(8)] = inst_36433);

return statearr_36449;
})();
var statearr_36450_36465 = state_36441__$1;
(statearr_36450_36465[(2)] = null);

(statearr_36450_36465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (9))){
var inst_36425 = (state_36441[(9)]);
var inst_36427 = (state_36441[(10)]);
var inst_36429 = inst_36427.call(null,inst_36425);
var state_36441__$1 = state_36441;
var statearr_36451_36466 = state_36441__$1;
(statearr_36451_36466[(2)] = inst_36429);

(statearr_36451_36466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (5))){
var inst_36421 = (state_36441[(7)]);
var inst_36423 = figwheel.client.file_reloading.blocking_load.call(null,inst_36421);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36441__$1,(8),inst_36423);
} else {
if((state_val_36442 === (10))){
var inst_36425 = (state_36441[(9)]);
var inst_36431 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36425);
var state_36441__$1 = state_36441;
var statearr_36452_36467 = state_36441__$1;
(statearr_36452_36467[(2)] = inst_36431);

(statearr_36452_36467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (8))){
var inst_36421 = (state_36441[(7)]);
var inst_36427 = (state_36441[(10)]);
var inst_36425 = (state_36441[(2)]);
var inst_36426 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36427__$1 = cljs.core.get.call(null,inst_36426,inst_36421);
var state_36441__$1 = (function (){var statearr_36453 = state_36441;
(statearr_36453[(9)] = inst_36425);

(statearr_36453[(10)] = inst_36427__$1);

return statearr_36453;
})();
if(cljs.core.truth_(inst_36427__$1)){
var statearr_36454_36468 = state_36441__$1;
(statearr_36454_36468[(1)] = (9));

} else {
var statearr_36455_36469 = state_36441__$1;
(statearr_36455_36469[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30953__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30866__auto__ = null;
var figwheel$client$file_reloading$state_machine__30866__auto____0 = (function (){
var statearr_36456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36456[(0)] = figwheel$client$file_reloading$state_machine__30866__auto__);

(statearr_36456[(1)] = (1));

return statearr_36456;
});
var figwheel$client$file_reloading$state_machine__30866__auto____1 = (function (state_36441){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_36441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e36457){if((e36457 instanceof Object)){
var ex__30869__auto__ = e36457;
var statearr_36458_36470 = state_36441;
(statearr_36458_36470[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36471 = state_36441;
state_36441 = G__36471;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30866__auto__ = function(state_36441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30866__auto____1.call(this,state_36441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30866__auto____0;
figwheel$client$file_reloading$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30866__auto____1;
return figwheel$client$file_reloading$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__))
})();
var state__30955__auto__ = (function (){var statearr_36459 = f__30954__auto__.call(null);
(statearr_36459[(6)] = c__30953__auto__);

return statearr_36459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__))
);

return c__30953__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36472,callback){
var map__36473 = p__36472;
var map__36473__$1 = ((((!((map__36473 == null)))?((((map__36473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36473):map__36473);
var file_msg = map__36473__$1;
var namespace = cljs.core.get.call(null,map__36473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36473,map__36473__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36473,map__36473__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36475){
var map__36476 = p__36475;
var map__36476__$1 = ((((!((map__36476 == null)))?((((map__36476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36476):map__36476);
var file_msg = map__36476__$1;
var namespace = cljs.core.get.call(null,map__36476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36478){
var map__36479 = p__36478;
var map__36479__$1 = ((((!((map__36479 == null)))?((((map__36479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36479):map__36479);
var file_msg = map__36479__$1;
var namespace = cljs.core.get.call(null,map__36479__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27183__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27183__auto__){
var or__27195__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27183__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36481,callback){
var map__36482 = p__36481;
var map__36482__$1 = ((((!((map__36482 == null)))?((((map__36482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36482):map__36482);
var file_msg = map__36482__$1;
var request_url = cljs.core.get.call(null,map__36482__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36482__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30953__auto___36532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___36532,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___36532,out){
return (function (state_36517){
var state_val_36518 = (state_36517[(1)]);
if((state_val_36518 === (1))){
var inst_36491 = cljs.core.seq.call(null,files);
var inst_36492 = cljs.core.first.call(null,inst_36491);
var inst_36493 = cljs.core.next.call(null,inst_36491);
var inst_36494 = files;
var state_36517__$1 = (function (){var statearr_36519 = state_36517;
(statearr_36519[(7)] = inst_36492);

(statearr_36519[(8)] = inst_36494);

(statearr_36519[(9)] = inst_36493);

return statearr_36519;
})();
var statearr_36520_36533 = state_36517__$1;
(statearr_36520_36533[(2)] = null);

(statearr_36520_36533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (2))){
var inst_36494 = (state_36517[(8)]);
var inst_36500 = (state_36517[(10)]);
var inst_36499 = cljs.core.seq.call(null,inst_36494);
var inst_36500__$1 = cljs.core.first.call(null,inst_36499);
var inst_36501 = cljs.core.next.call(null,inst_36499);
var inst_36502 = (inst_36500__$1 == null);
var inst_36503 = cljs.core.not.call(null,inst_36502);
var state_36517__$1 = (function (){var statearr_36521 = state_36517;
(statearr_36521[(11)] = inst_36501);

(statearr_36521[(10)] = inst_36500__$1);

return statearr_36521;
})();
if(inst_36503){
var statearr_36522_36534 = state_36517__$1;
(statearr_36522_36534[(1)] = (4));

} else {
var statearr_36523_36535 = state_36517__$1;
(statearr_36523_36535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (3))){
var inst_36515 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36517__$1,inst_36515);
} else {
if((state_val_36518 === (4))){
var inst_36500 = (state_36517[(10)]);
var inst_36505 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36500);
var state_36517__$1 = state_36517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36517__$1,(7),inst_36505);
} else {
if((state_val_36518 === (5))){
var inst_36511 = cljs.core.async.close_BANG_.call(null,out);
var state_36517__$1 = state_36517;
var statearr_36524_36536 = state_36517__$1;
(statearr_36524_36536[(2)] = inst_36511);

(statearr_36524_36536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (6))){
var inst_36513 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
var statearr_36525_36537 = state_36517__$1;
(statearr_36525_36537[(2)] = inst_36513);

(statearr_36525_36537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (7))){
var inst_36501 = (state_36517[(11)]);
var inst_36507 = (state_36517[(2)]);
var inst_36508 = cljs.core.async.put_BANG_.call(null,out,inst_36507);
var inst_36494 = inst_36501;
var state_36517__$1 = (function (){var statearr_36526 = state_36517;
(statearr_36526[(8)] = inst_36494);

(statearr_36526[(12)] = inst_36508);

return statearr_36526;
})();
var statearr_36527_36538 = state_36517__$1;
(statearr_36527_36538[(2)] = null);

(statearr_36527_36538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30953__auto___36532,out))
;
return ((function (switch__30865__auto__,c__30953__auto___36532,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto____0 = (function (){
var statearr_36528 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36528[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto__);

(statearr_36528[(1)] = (1));

return statearr_36528;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto____1 = (function (state_36517){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_36517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e36529){if((e36529 instanceof Object)){
var ex__30869__auto__ = e36529;
var statearr_36530_36539 = state_36517;
(statearr_36530_36539[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36540 = state_36517;
state_36517 = G__36540;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto__ = function(state_36517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto____1.call(this,state_36517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___36532,out))
})();
var state__30955__auto__ = (function (){var statearr_36531 = f__30954__auto__.call(null);
(statearr_36531[(6)] = c__30953__auto___36532);

return statearr_36531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___36532,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36541,opts){
var map__36542 = p__36541;
var map__36542__$1 = ((((!((map__36542 == null)))?((((map__36542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36542):map__36542);
var eval_body = cljs.core.get.call(null,map__36542__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27183__auto__ = eval_body;
if(cljs.core.truth_(and__27183__auto__)){
return typeof eval_body === 'string';
} else {
return and__27183__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36544){var e = e36544;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36545_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36545_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36546){
var vec__36547 = p__36546;
var k = cljs.core.nth.call(null,vec__36547,(0),null);
var v = cljs.core.nth.call(null,vec__36547,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36550){
var vec__36551 = p__36550;
var k = cljs.core.nth.call(null,vec__36551,(0),null);
var v = cljs.core.nth.call(null,vec__36551,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36557,p__36558){
var map__36559 = p__36557;
var map__36559__$1 = ((((!((map__36559 == null)))?((((map__36559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36559):map__36559);
var opts = map__36559__$1;
var before_jsload = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36560 = p__36558;
var map__36560__$1 = ((((!((map__36560 == null)))?((((map__36560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);
var msg = map__36560__$1;
var files = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36714){
var state_val_36715 = (state_36714[(1)]);
if((state_val_36715 === (7))){
var inst_36574 = (state_36714[(7)]);
var inst_36577 = (state_36714[(8)]);
var inst_36576 = (state_36714[(9)]);
var inst_36575 = (state_36714[(10)]);
var inst_36582 = cljs.core._nth.call(null,inst_36575,inst_36577);
var inst_36583 = figwheel.client.file_reloading.eval_body.call(null,inst_36582,opts);
var inst_36584 = (inst_36577 + (1));
var tmp36716 = inst_36574;
var tmp36717 = inst_36576;
var tmp36718 = inst_36575;
var inst_36574__$1 = tmp36716;
var inst_36575__$1 = tmp36718;
var inst_36576__$1 = tmp36717;
var inst_36577__$1 = inst_36584;
var state_36714__$1 = (function (){var statearr_36719 = state_36714;
(statearr_36719[(7)] = inst_36574__$1);

(statearr_36719[(8)] = inst_36577__$1);

(statearr_36719[(11)] = inst_36583);

(statearr_36719[(9)] = inst_36576__$1);

(statearr_36719[(10)] = inst_36575__$1);

return statearr_36719;
})();
var statearr_36720_36803 = state_36714__$1;
(statearr_36720_36803[(2)] = null);

(statearr_36720_36803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (20))){
var inst_36617 = (state_36714[(12)]);
var inst_36625 = figwheel.client.file_reloading.sort_files.call(null,inst_36617);
var state_36714__$1 = state_36714;
var statearr_36721_36804 = state_36714__$1;
(statearr_36721_36804[(2)] = inst_36625);

(statearr_36721_36804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (27))){
var state_36714__$1 = state_36714;
var statearr_36722_36805 = state_36714__$1;
(statearr_36722_36805[(2)] = null);

(statearr_36722_36805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (1))){
var inst_36566 = (state_36714[(13)]);
var inst_36563 = before_jsload.call(null,files);
var inst_36564 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36565 = (function (){return ((function (inst_36566,inst_36563,inst_36564,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36554_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36554_SHARP_);
});
;})(inst_36566,inst_36563,inst_36564,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36566__$1 = cljs.core.filter.call(null,inst_36565,files);
var inst_36567 = cljs.core.not_empty.call(null,inst_36566__$1);
var state_36714__$1 = (function (){var statearr_36723 = state_36714;
(statearr_36723[(14)] = inst_36564);

(statearr_36723[(15)] = inst_36563);

(statearr_36723[(13)] = inst_36566__$1);

return statearr_36723;
})();
if(cljs.core.truth_(inst_36567)){
var statearr_36724_36806 = state_36714__$1;
(statearr_36724_36806[(1)] = (2));

} else {
var statearr_36725_36807 = state_36714__$1;
(statearr_36725_36807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (24))){
var state_36714__$1 = state_36714;
var statearr_36726_36808 = state_36714__$1;
(statearr_36726_36808[(2)] = null);

(statearr_36726_36808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (39))){
var inst_36667 = (state_36714[(16)]);
var state_36714__$1 = state_36714;
var statearr_36727_36809 = state_36714__$1;
(statearr_36727_36809[(2)] = inst_36667);

(statearr_36727_36809[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (46))){
var inst_36709 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36728_36810 = state_36714__$1;
(statearr_36728_36810[(2)] = inst_36709);

(statearr_36728_36810[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (4))){
var inst_36611 = (state_36714[(2)]);
var inst_36612 = cljs.core.List.EMPTY;
var inst_36613 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36612);
var inst_36614 = (function (){return ((function (inst_36611,inst_36612,inst_36613,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36555_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36555_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36555_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36555_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_36611,inst_36612,inst_36613,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36615 = cljs.core.filter.call(null,inst_36614,files);
var inst_36616 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36617 = cljs.core.concat.call(null,inst_36615,inst_36616);
var state_36714__$1 = (function (){var statearr_36729 = state_36714;
(statearr_36729[(17)] = inst_36611);

(statearr_36729[(12)] = inst_36617);

(statearr_36729[(18)] = inst_36613);

return statearr_36729;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36730_36811 = state_36714__$1;
(statearr_36730_36811[(1)] = (16));

} else {
var statearr_36731_36812 = state_36714__$1;
(statearr_36731_36812[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (15))){
var inst_36601 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36732_36813 = state_36714__$1;
(statearr_36732_36813[(2)] = inst_36601);

(statearr_36732_36813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (21))){
var inst_36627 = (state_36714[(19)]);
var inst_36627__$1 = (state_36714[(2)]);
var inst_36628 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36627__$1);
var state_36714__$1 = (function (){var statearr_36733 = state_36714;
(statearr_36733[(19)] = inst_36627__$1);

return statearr_36733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36714__$1,(22),inst_36628);
} else {
if((state_val_36715 === (31))){
var inst_36712 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36714__$1,inst_36712);
} else {
if((state_val_36715 === (32))){
var inst_36667 = (state_36714[(16)]);
var inst_36672 = inst_36667.cljs$lang$protocol_mask$partition0$;
var inst_36673 = (inst_36672 & (64));
var inst_36674 = inst_36667.cljs$core$ISeq$;
var inst_36675 = (cljs.core.PROTOCOL_SENTINEL === inst_36674);
var inst_36676 = (inst_36673) || (inst_36675);
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36676)){
var statearr_36734_36814 = state_36714__$1;
(statearr_36734_36814[(1)] = (35));

} else {
var statearr_36735_36815 = state_36714__$1;
(statearr_36735_36815[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (40))){
var inst_36689 = (state_36714[(20)]);
var inst_36688 = (state_36714[(2)]);
var inst_36689__$1 = cljs.core.get.call(null,inst_36688,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36690 = cljs.core.get.call(null,inst_36688,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36691 = cljs.core.not_empty.call(null,inst_36689__$1);
var state_36714__$1 = (function (){var statearr_36736 = state_36714;
(statearr_36736[(21)] = inst_36690);

(statearr_36736[(20)] = inst_36689__$1);

return statearr_36736;
})();
if(cljs.core.truth_(inst_36691)){
var statearr_36737_36816 = state_36714__$1;
(statearr_36737_36816[(1)] = (41));

} else {
var statearr_36738_36817 = state_36714__$1;
(statearr_36738_36817[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (33))){
var state_36714__$1 = state_36714;
var statearr_36739_36818 = state_36714__$1;
(statearr_36739_36818[(2)] = false);

(statearr_36739_36818[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (13))){
var inst_36587 = (state_36714[(22)]);
var inst_36591 = cljs.core.chunk_first.call(null,inst_36587);
var inst_36592 = cljs.core.chunk_rest.call(null,inst_36587);
var inst_36593 = cljs.core.count.call(null,inst_36591);
var inst_36574 = inst_36592;
var inst_36575 = inst_36591;
var inst_36576 = inst_36593;
var inst_36577 = (0);
var state_36714__$1 = (function (){var statearr_36740 = state_36714;
(statearr_36740[(7)] = inst_36574);

(statearr_36740[(8)] = inst_36577);

(statearr_36740[(9)] = inst_36576);

(statearr_36740[(10)] = inst_36575);

return statearr_36740;
})();
var statearr_36741_36819 = state_36714__$1;
(statearr_36741_36819[(2)] = null);

(statearr_36741_36819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (22))){
var inst_36635 = (state_36714[(23)]);
var inst_36631 = (state_36714[(24)]);
var inst_36630 = (state_36714[(25)]);
var inst_36627 = (state_36714[(19)]);
var inst_36630__$1 = (state_36714[(2)]);
var inst_36631__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36630__$1);
var inst_36632 = (function (){var all_files = inst_36627;
var res_SINGLEQUOTE_ = inst_36630__$1;
var res = inst_36631__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36635,inst_36631,inst_36630,inst_36627,inst_36630__$1,inst_36631__$1,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36556_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36556_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36635,inst_36631,inst_36630,inst_36627,inst_36630__$1,inst_36631__$1,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36633 = cljs.core.filter.call(null,inst_36632,inst_36630__$1);
var inst_36634 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36635__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36634);
var inst_36636 = cljs.core.not_empty.call(null,inst_36635__$1);
var state_36714__$1 = (function (){var statearr_36742 = state_36714;
(statearr_36742[(23)] = inst_36635__$1);

(statearr_36742[(24)] = inst_36631__$1);

(statearr_36742[(25)] = inst_36630__$1);

(statearr_36742[(26)] = inst_36633);

return statearr_36742;
})();
if(cljs.core.truth_(inst_36636)){
var statearr_36743_36820 = state_36714__$1;
(statearr_36743_36820[(1)] = (23));

} else {
var statearr_36744_36821 = state_36714__$1;
(statearr_36744_36821[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (36))){
var state_36714__$1 = state_36714;
var statearr_36745_36822 = state_36714__$1;
(statearr_36745_36822[(2)] = false);

(statearr_36745_36822[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (41))){
var inst_36689 = (state_36714[(20)]);
var inst_36693 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36694 = cljs.core.map.call(null,inst_36693,inst_36689);
var inst_36695 = cljs.core.pr_str.call(null,inst_36694);
var inst_36696 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36695)].join('');
var inst_36697 = figwheel.client.utils.log.call(null,inst_36696);
var state_36714__$1 = state_36714;
var statearr_36746_36823 = state_36714__$1;
(statearr_36746_36823[(2)] = inst_36697);

(statearr_36746_36823[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (43))){
var inst_36690 = (state_36714[(21)]);
var inst_36700 = (state_36714[(2)]);
var inst_36701 = cljs.core.not_empty.call(null,inst_36690);
var state_36714__$1 = (function (){var statearr_36747 = state_36714;
(statearr_36747[(27)] = inst_36700);

return statearr_36747;
})();
if(cljs.core.truth_(inst_36701)){
var statearr_36748_36824 = state_36714__$1;
(statearr_36748_36824[(1)] = (44));

} else {
var statearr_36749_36825 = state_36714__$1;
(statearr_36749_36825[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (29))){
var inst_36635 = (state_36714[(23)]);
var inst_36631 = (state_36714[(24)]);
var inst_36630 = (state_36714[(25)]);
var inst_36633 = (state_36714[(26)]);
var inst_36667 = (state_36714[(16)]);
var inst_36627 = (state_36714[(19)]);
var inst_36663 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36666 = (function (){var all_files = inst_36627;
var res_SINGLEQUOTE_ = inst_36630;
var res = inst_36631;
var files_not_loaded = inst_36633;
var dependencies_that_loaded = inst_36635;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36667,inst_36627,inst_36663,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36665){
var map__36750 = p__36665;
var map__36750__$1 = ((((!((map__36750 == null)))?((((map__36750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36750):map__36750);
var namespace = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36667,inst_36627,inst_36663,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36667__$1 = cljs.core.group_by.call(null,inst_36666,inst_36633);
var inst_36669 = (inst_36667__$1 == null);
var inst_36670 = cljs.core.not.call(null,inst_36669);
var state_36714__$1 = (function (){var statearr_36752 = state_36714;
(statearr_36752[(28)] = inst_36663);

(statearr_36752[(16)] = inst_36667__$1);

return statearr_36752;
})();
if(inst_36670){
var statearr_36753_36826 = state_36714__$1;
(statearr_36753_36826[(1)] = (32));

} else {
var statearr_36754_36827 = state_36714__$1;
(statearr_36754_36827[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (44))){
var inst_36690 = (state_36714[(21)]);
var inst_36703 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36690);
var inst_36704 = cljs.core.pr_str.call(null,inst_36703);
var inst_36705 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36704)].join('');
var inst_36706 = figwheel.client.utils.log.call(null,inst_36705);
var state_36714__$1 = state_36714;
var statearr_36755_36828 = state_36714__$1;
(statearr_36755_36828[(2)] = inst_36706);

(statearr_36755_36828[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (6))){
var inst_36608 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36756_36829 = state_36714__$1;
(statearr_36756_36829[(2)] = inst_36608);

(statearr_36756_36829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (28))){
var inst_36633 = (state_36714[(26)]);
var inst_36660 = (state_36714[(2)]);
var inst_36661 = cljs.core.not_empty.call(null,inst_36633);
var state_36714__$1 = (function (){var statearr_36757 = state_36714;
(statearr_36757[(29)] = inst_36660);

return statearr_36757;
})();
if(cljs.core.truth_(inst_36661)){
var statearr_36758_36830 = state_36714__$1;
(statearr_36758_36830[(1)] = (29));

} else {
var statearr_36759_36831 = state_36714__$1;
(statearr_36759_36831[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (25))){
var inst_36631 = (state_36714[(24)]);
var inst_36647 = (state_36714[(2)]);
var inst_36648 = cljs.core.not_empty.call(null,inst_36631);
var state_36714__$1 = (function (){var statearr_36760 = state_36714;
(statearr_36760[(30)] = inst_36647);

return statearr_36760;
})();
if(cljs.core.truth_(inst_36648)){
var statearr_36761_36832 = state_36714__$1;
(statearr_36761_36832[(1)] = (26));

} else {
var statearr_36762_36833 = state_36714__$1;
(statearr_36762_36833[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (34))){
var inst_36683 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36683)){
var statearr_36763_36834 = state_36714__$1;
(statearr_36763_36834[(1)] = (38));

} else {
var statearr_36764_36835 = state_36714__$1;
(statearr_36764_36835[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (17))){
var state_36714__$1 = state_36714;
var statearr_36765_36836 = state_36714__$1;
(statearr_36765_36836[(2)] = recompile_dependents);

(statearr_36765_36836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (3))){
var state_36714__$1 = state_36714;
var statearr_36766_36837 = state_36714__$1;
(statearr_36766_36837[(2)] = null);

(statearr_36766_36837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (12))){
var inst_36604 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36767_36838 = state_36714__$1;
(statearr_36767_36838[(2)] = inst_36604);

(statearr_36767_36838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (2))){
var inst_36566 = (state_36714[(13)]);
var inst_36573 = cljs.core.seq.call(null,inst_36566);
var inst_36574 = inst_36573;
var inst_36575 = null;
var inst_36576 = (0);
var inst_36577 = (0);
var state_36714__$1 = (function (){var statearr_36768 = state_36714;
(statearr_36768[(7)] = inst_36574);

(statearr_36768[(8)] = inst_36577);

(statearr_36768[(9)] = inst_36576);

(statearr_36768[(10)] = inst_36575);

return statearr_36768;
})();
var statearr_36769_36839 = state_36714__$1;
(statearr_36769_36839[(2)] = null);

(statearr_36769_36839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (23))){
var inst_36635 = (state_36714[(23)]);
var inst_36631 = (state_36714[(24)]);
var inst_36630 = (state_36714[(25)]);
var inst_36633 = (state_36714[(26)]);
var inst_36627 = (state_36714[(19)]);
var inst_36638 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36640 = (function (){var all_files = inst_36627;
var res_SINGLEQUOTE_ = inst_36630;
var res = inst_36631;
var files_not_loaded = inst_36633;
var dependencies_that_loaded = inst_36635;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36627,inst_36638,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36639){
var map__36770 = p__36639;
var map__36770__$1 = ((((!((map__36770 == null)))?((((map__36770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36770):map__36770);
var request_url = cljs.core.get.call(null,map__36770__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36627,inst_36638,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36641 = cljs.core.reverse.call(null,inst_36635);
var inst_36642 = cljs.core.map.call(null,inst_36640,inst_36641);
var inst_36643 = cljs.core.pr_str.call(null,inst_36642);
var inst_36644 = figwheel.client.utils.log.call(null,inst_36643);
var state_36714__$1 = (function (){var statearr_36772 = state_36714;
(statearr_36772[(31)] = inst_36638);

return statearr_36772;
})();
var statearr_36773_36840 = state_36714__$1;
(statearr_36773_36840[(2)] = inst_36644);

(statearr_36773_36840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (35))){
var state_36714__$1 = state_36714;
var statearr_36774_36841 = state_36714__$1;
(statearr_36774_36841[(2)] = true);

(statearr_36774_36841[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (19))){
var inst_36617 = (state_36714[(12)]);
var inst_36623 = figwheel.client.file_reloading.expand_files.call(null,inst_36617);
var state_36714__$1 = state_36714;
var statearr_36775_36842 = state_36714__$1;
(statearr_36775_36842[(2)] = inst_36623);

(statearr_36775_36842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (11))){
var state_36714__$1 = state_36714;
var statearr_36776_36843 = state_36714__$1;
(statearr_36776_36843[(2)] = null);

(statearr_36776_36843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (9))){
var inst_36606 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36777_36844 = state_36714__$1;
(statearr_36777_36844[(2)] = inst_36606);

(statearr_36777_36844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (5))){
var inst_36577 = (state_36714[(8)]);
var inst_36576 = (state_36714[(9)]);
var inst_36579 = (inst_36577 < inst_36576);
var inst_36580 = inst_36579;
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36580)){
var statearr_36778_36845 = state_36714__$1;
(statearr_36778_36845[(1)] = (7));

} else {
var statearr_36779_36846 = state_36714__$1;
(statearr_36779_36846[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (14))){
var inst_36587 = (state_36714[(22)]);
var inst_36596 = cljs.core.first.call(null,inst_36587);
var inst_36597 = figwheel.client.file_reloading.eval_body.call(null,inst_36596,opts);
var inst_36598 = cljs.core.next.call(null,inst_36587);
var inst_36574 = inst_36598;
var inst_36575 = null;
var inst_36576 = (0);
var inst_36577 = (0);
var state_36714__$1 = (function (){var statearr_36780 = state_36714;
(statearr_36780[(7)] = inst_36574);

(statearr_36780[(8)] = inst_36577);

(statearr_36780[(9)] = inst_36576);

(statearr_36780[(10)] = inst_36575);

(statearr_36780[(32)] = inst_36597);

return statearr_36780;
})();
var statearr_36781_36847 = state_36714__$1;
(statearr_36781_36847[(2)] = null);

(statearr_36781_36847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (45))){
var state_36714__$1 = state_36714;
var statearr_36782_36848 = state_36714__$1;
(statearr_36782_36848[(2)] = null);

(statearr_36782_36848[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (26))){
var inst_36635 = (state_36714[(23)]);
var inst_36631 = (state_36714[(24)]);
var inst_36630 = (state_36714[(25)]);
var inst_36633 = (state_36714[(26)]);
var inst_36627 = (state_36714[(19)]);
var inst_36650 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36652 = (function (){var all_files = inst_36627;
var res_SINGLEQUOTE_ = inst_36630;
var res = inst_36631;
var files_not_loaded = inst_36633;
var dependencies_that_loaded = inst_36635;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36627,inst_36650,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36651){
var map__36783 = p__36651;
var map__36783__$1 = ((((!((map__36783 == null)))?((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36783):map__36783);
var namespace = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36627,inst_36650,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36653 = cljs.core.map.call(null,inst_36652,inst_36631);
var inst_36654 = cljs.core.pr_str.call(null,inst_36653);
var inst_36655 = figwheel.client.utils.log.call(null,inst_36654);
var inst_36656 = (function (){var all_files = inst_36627;
var res_SINGLEQUOTE_ = inst_36630;
var res = inst_36631;
var files_not_loaded = inst_36633;
var dependencies_that_loaded = inst_36635;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36627,inst_36650,inst_36652,inst_36653,inst_36654,inst_36655,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36635,inst_36631,inst_36630,inst_36633,inst_36627,inst_36650,inst_36652,inst_36653,inst_36654,inst_36655,state_val_36715,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36657 = setTimeout(inst_36656,(10));
var state_36714__$1 = (function (){var statearr_36785 = state_36714;
(statearr_36785[(33)] = inst_36655);

(statearr_36785[(34)] = inst_36650);

return statearr_36785;
})();
var statearr_36786_36849 = state_36714__$1;
(statearr_36786_36849[(2)] = inst_36657);

(statearr_36786_36849[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (16))){
var state_36714__$1 = state_36714;
var statearr_36787_36850 = state_36714__$1;
(statearr_36787_36850[(2)] = reload_dependents);

(statearr_36787_36850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (38))){
var inst_36667 = (state_36714[(16)]);
var inst_36685 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36667);
var state_36714__$1 = state_36714;
var statearr_36788_36851 = state_36714__$1;
(statearr_36788_36851[(2)] = inst_36685);

(statearr_36788_36851[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (30))){
var state_36714__$1 = state_36714;
var statearr_36789_36852 = state_36714__$1;
(statearr_36789_36852[(2)] = null);

(statearr_36789_36852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (10))){
var inst_36587 = (state_36714[(22)]);
var inst_36589 = cljs.core.chunked_seq_QMARK_.call(null,inst_36587);
var state_36714__$1 = state_36714;
if(inst_36589){
var statearr_36790_36853 = state_36714__$1;
(statearr_36790_36853[(1)] = (13));

} else {
var statearr_36791_36854 = state_36714__$1;
(statearr_36791_36854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (18))){
var inst_36621 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36621)){
var statearr_36792_36855 = state_36714__$1;
(statearr_36792_36855[(1)] = (19));

} else {
var statearr_36793_36856 = state_36714__$1;
(statearr_36793_36856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (42))){
var state_36714__$1 = state_36714;
var statearr_36794_36857 = state_36714__$1;
(statearr_36794_36857[(2)] = null);

(statearr_36794_36857[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (37))){
var inst_36680 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36795_36858 = state_36714__$1;
(statearr_36795_36858[(2)] = inst_36680);

(statearr_36795_36858[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (8))){
var inst_36574 = (state_36714[(7)]);
var inst_36587 = (state_36714[(22)]);
var inst_36587__$1 = cljs.core.seq.call(null,inst_36574);
var state_36714__$1 = (function (){var statearr_36796 = state_36714;
(statearr_36796[(22)] = inst_36587__$1);

return statearr_36796;
})();
if(inst_36587__$1){
var statearr_36797_36859 = state_36714__$1;
(statearr_36797_36859[(1)] = (10));

} else {
var statearr_36798_36860 = state_36714__$1;
(statearr_36798_36860[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30865__auto__,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto____0 = (function (){
var statearr_36799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36799[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto__);

(statearr_36799[(1)] = (1));

return statearr_36799;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto____1 = (function (state_36714){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_36714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e36800){if((e36800 instanceof Object)){
var ex__30869__auto__ = e36800;
var statearr_36801_36861 = state_36714;
(statearr_36801_36861[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36862 = state_36714;
state_36714 = G__36862;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto__ = function(state_36714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto____1.call(this,state_36714);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30955__auto__ = (function (){var statearr_36802 = f__30954__auto__.call(null);
(statearr_36802[(6)] = c__30953__auto__);

return statearr_36802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__,map__36559,map__36559__$1,opts,before_jsload,on_jsload,reload_dependents,map__36560,map__36560__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30953__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36865,link){
var map__36866 = p__36865;
var map__36866__$1 = ((((!((map__36866 == null)))?((((map__36866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36866):map__36866);
var file = cljs.core.get.call(null,map__36866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36866,map__36866__$1,file){
return (function (p1__36863_SHARP_,p2__36864_SHARP_){
if(cljs.core._EQ_.call(null,p1__36863_SHARP_,p2__36864_SHARP_)){
return p1__36863_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36866,map__36866__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36869){
var map__36870 = p__36869;
var map__36870__$1 = ((((!((map__36870 == null)))?((((map__36870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36870):map__36870);
var match_length = cljs.core.get.call(null,map__36870__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36870__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36868_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36868_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36872_SHARP_,p2__36873_SHARP_){
return cljs.core.assoc.call(null,p1__36872_SHARP_,cljs.core.get.call(null,p2__36873_SHARP_,key),p2__36873_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36874 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36874);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36874);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36875,p__36876){
var map__36877 = p__36875;
var map__36877__$1 = ((((!((map__36877 == null)))?((((map__36877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36877):map__36877);
var on_cssload = cljs.core.get.call(null,map__36877__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36878 = p__36876;
var map__36878__$1 = ((((!((map__36878 == null)))?((((map__36878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36878):map__36878);
var files_msg = map__36878__$1;
var files = cljs.core.get.call(null,map__36878__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1514003836226
