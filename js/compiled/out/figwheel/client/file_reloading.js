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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36256_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36256_SHARP_));
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
var seq__36257 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36258 = null;
var count__36259 = (0);
var i__36260 = (0);
while(true){
if((i__36260 < count__36259)){
var n = cljs.core._nth.call(null,chunk__36258,i__36260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36261 = seq__36257;
var G__36262 = chunk__36258;
var G__36263 = count__36259;
var G__36264 = (i__36260 + (1));
seq__36257 = G__36261;
chunk__36258 = G__36262;
count__36259 = G__36263;
i__36260 = G__36264;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36257);
if(temp__4657__auto__){
var seq__36257__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36257__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36257__$1);
var G__36265 = cljs.core.chunk_rest.call(null,seq__36257__$1);
var G__36266 = c__28034__auto__;
var G__36267 = cljs.core.count.call(null,c__28034__auto__);
var G__36268 = (0);
seq__36257 = G__36265;
chunk__36258 = G__36266;
count__36259 = G__36267;
i__36260 = G__36268;
continue;
} else {
var n = cljs.core.first.call(null,seq__36257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36269 = cljs.core.next.call(null,seq__36257__$1);
var G__36270 = null;
var G__36271 = (0);
var G__36272 = (0);
seq__36257 = G__36269;
chunk__36258 = G__36270;
count__36259 = G__36271;
i__36260 = G__36272;
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

var seq__36282_36290 = cljs.core.seq.call(null,deps);
var chunk__36283_36291 = null;
var count__36284_36292 = (0);
var i__36285_36293 = (0);
while(true){
if((i__36285_36293 < count__36284_36292)){
var dep_36294 = cljs.core._nth.call(null,chunk__36283_36291,i__36285_36293);
topo_sort_helper_STAR_.call(null,dep_36294,(depth + (1)),state);

var G__36295 = seq__36282_36290;
var G__36296 = chunk__36283_36291;
var G__36297 = count__36284_36292;
var G__36298 = (i__36285_36293 + (1));
seq__36282_36290 = G__36295;
chunk__36283_36291 = G__36296;
count__36284_36292 = G__36297;
i__36285_36293 = G__36298;
continue;
} else {
var temp__4657__auto___36299 = cljs.core.seq.call(null,seq__36282_36290);
if(temp__4657__auto___36299){
var seq__36282_36300__$1 = temp__4657__auto___36299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36282_36300__$1)){
var c__28034__auto___36301 = cljs.core.chunk_first.call(null,seq__36282_36300__$1);
var G__36302 = cljs.core.chunk_rest.call(null,seq__36282_36300__$1);
var G__36303 = c__28034__auto___36301;
var G__36304 = cljs.core.count.call(null,c__28034__auto___36301);
var G__36305 = (0);
seq__36282_36290 = G__36302;
chunk__36283_36291 = G__36303;
count__36284_36292 = G__36304;
i__36285_36293 = G__36305;
continue;
} else {
var dep_36306 = cljs.core.first.call(null,seq__36282_36300__$1);
topo_sort_helper_STAR_.call(null,dep_36306,(depth + (1)),state);

var G__36307 = cljs.core.next.call(null,seq__36282_36300__$1);
var G__36308 = null;
var G__36309 = (0);
var G__36310 = (0);
seq__36282_36290 = G__36307;
chunk__36283_36291 = G__36308;
count__36284_36292 = G__36309;
i__36285_36293 = G__36310;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36286){
var vec__36287 = p__36286;
var seq__36288 = cljs.core.seq.call(null,vec__36287);
var first__36289 = cljs.core.first.call(null,seq__36288);
var seq__36288__$1 = cljs.core.next.call(null,seq__36288);
var x = first__36289;
var xs = seq__36288__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36287,seq__36288,first__36289,seq__36288__$1,x,xs,get_deps__$1){
return (function (p1__36273_SHARP_){
return clojure.set.difference.call(null,p1__36273_SHARP_,x);
});})(vec__36287,seq__36288,first__36289,seq__36288__$1,x,xs,get_deps__$1))
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
var seq__36311 = cljs.core.seq.call(null,provides);
var chunk__36312 = null;
var count__36313 = (0);
var i__36314 = (0);
while(true){
if((i__36314 < count__36313)){
var prov = cljs.core._nth.call(null,chunk__36312,i__36314);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36315_36323 = cljs.core.seq.call(null,requires);
var chunk__36316_36324 = null;
var count__36317_36325 = (0);
var i__36318_36326 = (0);
while(true){
if((i__36318_36326 < count__36317_36325)){
var req_36327 = cljs.core._nth.call(null,chunk__36316_36324,i__36318_36326);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36327,prov);

var G__36328 = seq__36315_36323;
var G__36329 = chunk__36316_36324;
var G__36330 = count__36317_36325;
var G__36331 = (i__36318_36326 + (1));
seq__36315_36323 = G__36328;
chunk__36316_36324 = G__36329;
count__36317_36325 = G__36330;
i__36318_36326 = G__36331;
continue;
} else {
var temp__4657__auto___36332 = cljs.core.seq.call(null,seq__36315_36323);
if(temp__4657__auto___36332){
var seq__36315_36333__$1 = temp__4657__auto___36332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36315_36333__$1)){
var c__28034__auto___36334 = cljs.core.chunk_first.call(null,seq__36315_36333__$1);
var G__36335 = cljs.core.chunk_rest.call(null,seq__36315_36333__$1);
var G__36336 = c__28034__auto___36334;
var G__36337 = cljs.core.count.call(null,c__28034__auto___36334);
var G__36338 = (0);
seq__36315_36323 = G__36335;
chunk__36316_36324 = G__36336;
count__36317_36325 = G__36337;
i__36318_36326 = G__36338;
continue;
} else {
var req_36339 = cljs.core.first.call(null,seq__36315_36333__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36339,prov);

var G__36340 = cljs.core.next.call(null,seq__36315_36333__$1);
var G__36341 = null;
var G__36342 = (0);
var G__36343 = (0);
seq__36315_36323 = G__36340;
chunk__36316_36324 = G__36341;
count__36317_36325 = G__36342;
i__36318_36326 = G__36343;
continue;
}
} else {
}
}
break;
}

var G__36344 = seq__36311;
var G__36345 = chunk__36312;
var G__36346 = count__36313;
var G__36347 = (i__36314 + (1));
seq__36311 = G__36344;
chunk__36312 = G__36345;
count__36313 = G__36346;
i__36314 = G__36347;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36311);
if(temp__4657__auto__){
var seq__36311__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36311__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36311__$1);
var G__36348 = cljs.core.chunk_rest.call(null,seq__36311__$1);
var G__36349 = c__28034__auto__;
var G__36350 = cljs.core.count.call(null,c__28034__auto__);
var G__36351 = (0);
seq__36311 = G__36348;
chunk__36312 = G__36349;
count__36313 = G__36350;
i__36314 = G__36351;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36311__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36319_36352 = cljs.core.seq.call(null,requires);
var chunk__36320_36353 = null;
var count__36321_36354 = (0);
var i__36322_36355 = (0);
while(true){
if((i__36322_36355 < count__36321_36354)){
var req_36356 = cljs.core._nth.call(null,chunk__36320_36353,i__36322_36355);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36356,prov);

var G__36357 = seq__36319_36352;
var G__36358 = chunk__36320_36353;
var G__36359 = count__36321_36354;
var G__36360 = (i__36322_36355 + (1));
seq__36319_36352 = G__36357;
chunk__36320_36353 = G__36358;
count__36321_36354 = G__36359;
i__36322_36355 = G__36360;
continue;
} else {
var temp__4657__auto___36361__$1 = cljs.core.seq.call(null,seq__36319_36352);
if(temp__4657__auto___36361__$1){
var seq__36319_36362__$1 = temp__4657__auto___36361__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36319_36362__$1)){
var c__28034__auto___36363 = cljs.core.chunk_first.call(null,seq__36319_36362__$1);
var G__36364 = cljs.core.chunk_rest.call(null,seq__36319_36362__$1);
var G__36365 = c__28034__auto___36363;
var G__36366 = cljs.core.count.call(null,c__28034__auto___36363);
var G__36367 = (0);
seq__36319_36352 = G__36364;
chunk__36320_36353 = G__36365;
count__36321_36354 = G__36366;
i__36322_36355 = G__36367;
continue;
} else {
var req_36368 = cljs.core.first.call(null,seq__36319_36362__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36368,prov);

var G__36369 = cljs.core.next.call(null,seq__36319_36362__$1);
var G__36370 = null;
var G__36371 = (0);
var G__36372 = (0);
seq__36319_36352 = G__36369;
chunk__36320_36353 = G__36370;
count__36321_36354 = G__36371;
i__36322_36355 = G__36372;
continue;
}
} else {
}
}
break;
}

var G__36373 = cljs.core.next.call(null,seq__36311__$1);
var G__36374 = null;
var G__36375 = (0);
var G__36376 = (0);
seq__36311 = G__36373;
chunk__36312 = G__36374;
count__36313 = G__36375;
i__36314 = G__36376;
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
var seq__36377_36381 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36378_36382 = null;
var count__36379_36383 = (0);
var i__36380_36384 = (0);
while(true){
if((i__36380_36384 < count__36379_36383)){
var ns_36385 = cljs.core._nth.call(null,chunk__36378_36382,i__36380_36384);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36385);

var G__36386 = seq__36377_36381;
var G__36387 = chunk__36378_36382;
var G__36388 = count__36379_36383;
var G__36389 = (i__36380_36384 + (1));
seq__36377_36381 = G__36386;
chunk__36378_36382 = G__36387;
count__36379_36383 = G__36388;
i__36380_36384 = G__36389;
continue;
} else {
var temp__4657__auto___36390 = cljs.core.seq.call(null,seq__36377_36381);
if(temp__4657__auto___36390){
var seq__36377_36391__$1 = temp__4657__auto___36390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36377_36391__$1)){
var c__28034__auto___36392 = cljs.core.chunk_first.call(null,seq__36377_36391__$1);
var G__36393 = cljs.core.chunk_rest.call(null,seq__36377_36391__$1);
var G__36394 = c__28034__auto___36392;
var G__36395 = cljs.core.count.call(null,c__28034__auto___36392);
var G__36396 = (0);
seq__36377_36381 = G__36393;
chunk__36378_36382 = G__36394;
count__36379_36383 = G__36395;
i__36380_36384 = G__36396;
continue;
} else {
var ns_36397 = cljs.core.first.call(null,seq__36377_36391__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36397);

var G__36398 = cljs.core.next.call(null,seq__36377_36391__$1);
var G__36399 = null;
var G__36400 = (0);
var G__36401 = (0);
seq__36377_36381 = G__36398;
chunk__36378_36382 = G__36399;
count__36379_36383 = G__36400;
i__36380_36384 = G__36401;
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
var G__36402__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36403__i = 0, G__36403__a = new Array(arguments.length -  0);
while (G__36403__i < G__36403__a.length) {G__36403__a[G__36403__i] = arguments[G__36403__i + 0]; ++G__36403__i;}
  args = new cljs.core.IndexedSeq(G__36403__a,0,null);
} 
return G__36402__delegate.call(this,args);};
G__36402.cljs$lang$maxFixedArity = 0;
G__36402.cljs$lang$applyTo = (function (arglist__36404){
var args = cljs.core.seq(arglist__36404);
return G__36402__delegate(args);
});
G__36402.cljs$core$IFn$_invoke$arity$variadic = G__36402__delegate;
return G__36402;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36405_SHARP_,p2__36406_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36405_SHARP_)].join('')),p2__36406_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36407_SHARP_,p2__36408_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36407_SHARP_)].join(''),p2__36408_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36409 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36409.addCallback(((function (G__36409){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36409))
);

G__36409.addErrback(((function (G__36409){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36409))
);

return G__36409;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36410 = cljs.core._EQ_;
var expr__36411 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36410.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36411))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36410,expr__36411){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36410,expr__36411))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36410,expr__36411){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36413){if((e36413 instanceof Error)){
var e = e36413;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36413;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36410,expr__36411))
} else {
if(cljs.core.truth_(pred__36410.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36411))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36410.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36411))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36410.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36411))){
return ((function (pred__36410,expr__36411){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36414){if((e36414 instanceof Error)){
var e = e36414;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36414;

}
}})());
});
;})(pred__36410,expr__36411))
} else {
return ((function (pred__36410,expr__36411){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36410,expr__36411))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36415,callback){
var map__36416 = p__36415;
var map__36416__$1 = ((((!((map__36416 == null)))?((((map__36416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36416):map__36416);
var file_msg = map__36416__$1;
var request_url = cljs.core.get.call(null,map__36416__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36416,map__36416__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36416,map__36416__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__){
return (function (state_36440){
var state_val_36441 = (state_36440[(1)]);
if((state_val_36441 === (7))){
var inst_36436 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36442_36459 = state_36440__$1;
(statearr_36442_36459[(2)] = inst_36436);

(statearr_36442_36459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (1))){
var state_36440__$1 = state_36440;
var statearr_36443_36460 = state_36440__$1;
(statearr_36443_36460[(2)] = null);

(statearr_36443_36460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (4))){
var inst_36420 = (state_36440[(7)]);
var inst_36420__$1 = (state_36440[(2)]);
var state_36440__$1 = (function (){var statearr_36444 = state_36440;
(statearr_36444[(7)] = inst_36420__$1);

return statearr_36444;
})();
if(cljs.core.truth_(inst_36420__$1)){
var statearr_36445_36461 = state_36440__$1;
(statearr_36445_36461[(1)] = (5));

} else {
var statearr_36446_36462 = state_36440__$1;
(statearr_36446_36462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (6))){
var state_36440__$1 = state_36440;
var statearr_36447_36463 = state_36440__$1;
(statearr_36447_36463[(2)] = null);

(statearr_36447_36463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (3))){
var inst_36438 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36440__$1,inst_36438);
} else {
if((state_val_36441 === (2))){
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36440__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36441 === (11))){
var inst_36432 = (state_36440[(2)]);
var state_36440__$1 = (function (){var statearr_36448 = state_36440;
(statearr_36448[(8)] = inst_36432);

return statearr_36448;
})();
var statearr_36449_36464 = state_36440__$1;
(statearr_36449_36464[(2)] = null);

(statearr_36449_36464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (9))){
var inst_36426 = (state_36440[(9)]);
var inst_36424 = (state_36440[(10)]);
var inst_36428 = inst_36426.call(null,inst_36424);
var state_36440__$1 = state_36440;
var statearr_36450_36465 = state_36440__$1;
(statearr_36450_36465[(2)] = inst_36428);

(statearr_36450_36465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (5))){
var inst_36420 = (state_36440[(7)]);
var inst_36422 = figwheel.client.file_reloading.blocking_load.call(null,inst_36420);
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36440__$1,(8),inst_36422);
} else {
if((state_val_36441 === (10))){
var inst_36424 = (state_36440[(10)]);
var inst_36430 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36424);
var state_36440__$1 = state_36440;
var statearr_36451_36466 = state_36440__$1;
(statearr_36451_36466[(2)] = inst_36430);

(statearr_36451_36466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (8))){
var inst_36426 = (state_36440[(9)]);
var inst_36420 = (state_36440[(7)]);
var inst_36424 = (state_36440[(2)]);
var inst_36425 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36426__$1 = cljs.core.get.call(null,inst_36425,inst_36420);
var state_36440__$1 = (function (){var statearr_36452 = state_36440;
(statearr_36452[(9)] = inst_36426__$1);

(statearr_36452[(10)] = inst_36424);

return statearr_36452;
})();
if(cljs.core.truth_(inst_36426__$1)){
var statearr_36453_36467 = state_36440__$1;
(statearr_36453_36467[(1)] = (9));

} else {
var statearr_36454_36468 = state_36440__$1;
(statearr_36454_36468[(1)] = (10));

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
});})(c__30952__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$state_machine__30865__auto____0 = (function (){
var statearr_36455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36455[(0)] = figwheel$client$file_reloading$state_machine__30865__auto__);

(statearr_36455[(1)] = (1));

return statearr_36455;
});
var figwheel$client$file_reloading$state_machine__30865__auto____1 = (function (state_36440){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_36440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e36456){if((e36456 instanceof Object)){
var ex__30868__auto__ = e36456;
var statearr_36457_36469 = state_36440;
(statearr_36457_36469[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36470 = state_36440;
state_36440 = G__36470;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30865__auto__ = function(state_36440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30865__auto____1.call(this,state_36440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30865__auto____0;
figwheel$client$file_reloading$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30865__auto____1;
return figwheel$client$file_reloading$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_36458 = f__30953__auto__.call(null);
(statearr_36458[(6)] = c__30952__auto__);

return statearr_36458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__))
);

return c__30952__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36471,callback){
var map__36472 = p__36471;
var map__36472__$1 = ((((!((map__36472 == null)))?((((map__36472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36472):map__36472);
var file_msg = map__36472__$1;
var namespace = cljs.core.get.call(null,map__36472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36472,map__36472__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36472,map__36472__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36474){
var map__36475 = p__36474;
var map__36475__$1 = ((((!((map__36475 == null)))?((((map__36475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36475):map__36475);
var file_msg = map__36475__$1;
var namespace = cljs.core.get.call(null,map__36475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36477){
var map__36478 = p__36477;
var map__36478__$1 = ((((!((map__36478 == null)))?((((map__36478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36478):map__36478);
var file_msg = map__36478__$1;
var namespace = cljs.core.get.call(null,map__36478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36480,callback){
var map__36481 = p__36480;
var map__36481__$1 = ((((!((map__36481 == null)))?((((map__36481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36481):map__36481);
var file_msg = map__36481__$1;
var request_url = cljs.core.get.call(null,map__36481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30952__auto___36531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___36531,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___36531,out){
return (function (state_36516){
var state_val_36517 = (state_36516[(1)]);
if((state_val_36517 === (1))){
var inst_36490 = cljs.core.seq.call(null,files);
var inst_36491 = cljs.core.first.call(null,inst_36490);
var inst_36492 = cljs.core.next.call(null,inst_36490);
var inst_36493 = files;
var state_36516__$1 = (function (){var statearr_36518 = state_36516;
(statearr_36518[(7)] = inst_36492);

(statearr_36518[(8)] = inst_36491);

(statearr_36518[(9)] = inst_36493);

return statearr_36518;
})();
var statearr_36519_36532 = state_36516__$1;
(statearr_36519_36532[(2)] = null);

(statearr_36519_36532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (2))){
var inst_36499 = (state_36516[(10)]);
var inst_36493 = (state_36516[(9)]);
var inst_36498 = cljs.core.seq.call(null,inst_36493);
var inst_36499__$1 = cljs.core.first.call(null,inst_36498);
var inst_36500 = cljs.core.next.call(null,inst_36498);
var inst_36501 = (inst_36499__$1 == null);
var inst_36502 = cljs.core.not.call(null,inst_36501);
var state_36516__$1 = (function (){var statearr_36520 = state_36516;
(statearr_36520[(10)] = inst_36499__$1);

(statearr_36520[(11)] = inst_36500);

return statearr_36520;
})();
if(inst_36502){
var statearr_36521_36533 = state_36516__$1;
(statearr_36521_36533[(1)] = (4));

} else {
var statearr_36522_36534 = state_36516__$1;
(statearr_36522_36534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (3))){
var inst_36514 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36516__$1,inst_36514);
} else {
if((state_val_36517 === (4))){
var inst_36499 = (state_36516[(10)]);
var inst_36504 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36499);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36516__$1,(7),inst_36504);
} else {
if((state_val_36517 === (5))){
var inst_36510 = cljs.core.async.close_BANG_.call(null,out);
var state_36516__$1 = state_36516;
var statearr_36523_36535 = state_36516__$1;
(statearr_36523_36535[(2)] = inst_36510);

(statearr_36523_36535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (6))){
var inst_36512 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36524_36536 = state_36516__$1;
(statearr_36524_36536[(2)] = inst_36512);

(statearr_36524_36536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (7))){
var inst_36500 = (state_36516[(11)]);
var inst_36506 = (state_36516[(2)]);
var inst_36507 = cljs.core.async.put_BANG_.call(null,out,inst_36506);
var inst_36493 = inst_36500;
var state_36516__$1 = (function (){var statearr_36525 = state_36516;
(statearr_36525[(12)] = inst_36507);

(statearr_36525[(9)] = inst_36493);

return statearr_36525;
})();
var statearr_36526_36537 = state_36516__$1;
(statearr_36526_36537[(2)] = null);

(statearr_36526_36537[(1)] = (2));


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
});})(c__30952__auto___36531,out))
;
return ((function (switch__30864__auto__,c__30952__auto___36531,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0 = (function (){
var statearr_36527 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36527[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__);

(statearr_36527[(1)] = (1));

return statearr_36527;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1 = (function (state_36516){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_36516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e36528){if((e36528 instanceof Object)){
var ex__30868__auto__ = e36528;
var statearr_36529_36538 = state_36516;
(statearr_36529_36538[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36539 = state_36516;
state_36516 = G__36539;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__ = function(state_36516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1.call(this,state_36516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___36531,out))
})();
var state__30954__auto__ = (function (){var statearr_36530 = f__30953__auto__.call(null);
(statearr_36530[(6)] = c__30952__auto___36531);

return statearr_36530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___36531,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36540,opts){
var map__36541 = p__36540;
var map__36541__$1 = ((((!((map__36541 == null)))?((((map__36541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36541):map__36541);
var eval_body = cljs.core.get.call(null,map__36541__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36543){var e = e36543;
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
return (function (p1__36544_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36544_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36545){
var vec__36546 = p__36545;
var k = cljs.core.nth.call(null,vec__36546,(0),null);
var v = cljs.core.nth.call(null,vec__36546,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36549){
var vec__36550 = p__36549;
var k = cljs.core.nth.call(null,vec__36550,(0),null);
var v = cljs.core.nth.call(null,vec__36550,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36556,p__36557){
var map__36558 = p__36556;
var map__36558__$1 = ((((!((map__36558 == null)))?((((map__36558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36558):map__36558);
var opts = map__36558__$1;
var before_jsload = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36559 = p__36557;
var map__36559__$1 = ((((!((map__36559 == null)))?((((map__36559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36559):map__36559);
var msg = map__36559__$1;
var files = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36713){
var state_val_36714 = (state_36713[(1)]);
if((state_val_36714 === (7))){
var inst_36574 = (state_36713[(7)]);
var inst_36573 = (state_36713[(8)]);
var inst_36576 = (state_36713[(9)]);
var inst_36575 = (state_36713[(10)]);
var inst_36581 = cljs.core._nth.call(null,inst_36574,inst_36576);
var inst_36582 = figwheel.client.file_reloading.eval_body.call(null,inst_36581,opts);
var inst_36583 = (inst_36576 + (1));
var tmp36715 = inst_36574;
var tmp36716 = inst_36573;
var tmp36717 = inst_36575;
var inst_36573__$1 = tmp36716;
var inst_36574__$1 = tmp36715;
var inst_36575__$1 = tmp36717;
var inst_36576__$1 = inst_36583;
var state_36713__$1 = (function (){var statearr_36718 = state_36713;
(statearr_36718[(7)] = inst_36574__$1);

(statearr_36718[(8)] = inst_36573__$1);

(statearr_36718[(9)] = inst_36576__$1);

(statearr_36718[(11)] = inst_36582);

(statearr_36718[(10)] = inst_36575__$1);

return statearr_36718;
})();
var statearr_36719_36802 = state_36713__$1;
(statearr_36719_36802[(2)] = null);

(statearr_36719_36802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (20))){
var inst_36616 = (state_36713[(12)]);
var inst_36624 = figwheel.client.file_reloading.sort_files.call(null,inst_36616);
var state_36713__$1 = state_36713;
var statearr_36720_36803 = state_36713__$1;
(statearr_36720_36803[(2)] = inst_36624);

(statearr_36720_36803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (27))){
var state_36713__$1 = state_36713;
var statearr_36721_36804 = state_36713__$1;
(statearr_36721_36804[(2)] = null);

(statearr_36721_36804[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (1))){
var inst_36565 = (state_36713[(13)]);
var inst_36562 = before_jsload.call(null,files);
var inst_36563 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36564 = (function (){return ((function (inst_36565,inst_36562,inst_36563,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36553_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36553_SHARP_);
});
;})(inst_36565,inst_36562,inst_36563,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36565__$1 = cljs.core.filter.call(null,inst_36564,files);
var inst_36566 = cljs.core.not_empty.call(null,inst_36565__$1);
var state_36713__$1 = (function (){var statearr_36722 = state_36713;
(statearr_36722[(14)] = inst_36562);

(statearr_36722[(13)] = inst_36565__$1);

(statearr_36722[(15)] = inst_36563);

return statearr_36722;
})();
if(cljs.core.truth_(inst_36566)){
var statearr_36723_36805 = state_36713__$1;
(statearr_36723_36805[(1)] = (2));

} else {
var statearr_36724_36806 = state_36713__$1;
(statearr_36724_36806[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (24))){
var state_36713__$1 = state_36713;
var statearr_36725_36807 = state_36713__$1;
(statearr_36725_36807[(2)] = null);

(statearr_36725_36807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (39))){
var inst_36666 = (state_36713[(16)]);
var state_36713__$1 = state_36713;
var statearr_36726_36808 = state_36713__$1;
(statearr_36726_36808[(2)] = inst_36666);

(statearr_36726_36808[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (46))){
var inst_36708 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36727_36809 = state_36713__$1;
(statearr_36727_36809[(2)] = inst_36708);

(statearr_36727_36809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (4))){
var inst_36610 = (state_36713[(2)]);
var inst_36611 = cljs.core.List.EMPTY;
var inst_36612 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36611);
var inst_36613 = (function (){return ((function (inst_36610,inst_36611,inst_36612,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36554_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36554_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36554_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36554_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_36610,inst_36611,inst_36612,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36614 = cljs.core.filter.call(null,inst_36613,files);
var inst_36615 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36616 = cljs.core.concat.call(null,inst_36614,inst_36615);
var state_36713__$1 = (function (){var statearr_36728 = state_36713;
(statearr_36728[(17)] = inst_36610);

(statearr_36728[(12)] = inst_36616);

(statearr_36728[(18)] = inst_36612);

return statearr_36728;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36729_36810 = state_36713__$1;
(statearr_36729_36810[(1)] = (16));

} else {
var statearr_36730_36811 = state_36713__$1;
(statearr_36730_36811[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (15))){
var inst_36600 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36731_36812 = state_36713__$1;
(statearr_36731_36812[(2)] = inst_36600);

(statearr_36731_36812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (21))){
var inst_36626 = (state_36713[(19)]);
var inst_36626__$1 = (state_36713[(2)]);
var inst_36627 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36626__$1);
var state_36713__$1 = (function (){var statearr_36732 = state_36713;
(statearr_36732[(19)] = inst_36626__$1);

return statearr_36732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36713__$1,(22),inst_36627);
} else {
if((state_val_36714 === (31))){
var inst_36711 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36713__$1,inst_36711);
} else {
if((state_val_36714 === (32))){
var inst_36666 = (state_36713[(16)]);
var inst_36671 = inst_36666.cljs$lang$protocol_mask$partition0$;
var inst_36672 = (inst_36671 & (64));
var inst_36673 = inst_36666.cljs$core$ISeq$;
var inst_36674 = (cljs.core.PROTOCOL_SENTINEL === inst_36673);
var inst_36675 = (inst_36672) || (inst_36674);
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36675)){
var statearr_36733_36813 = state_36713__$1;
(statearr_36733_36813[(1)] = (35));

} else {
var statearr_36734_36814 = state_36713__$1;
(statearr_36734_36814[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (40))){
var inst_36688 = (state_36713[(20)]);
var inst_36687 = (state_36713[(2)]);
var inst_36688__$1 = cljs.core.get.call(null,inst_36687,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36689 = cljs.core.get.call(null,inst_36687,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36690 = cljs.core.not_empty.call(null,inst_36688__$1);
var state_36713__$1 = (function (){var statearr_36735 = state_36713;
(statearr_36735[(20)] = inst_36688__$1);

(statearr_36735[(21)] = inst_36689);

return statearr_36735;
})();
if(cljs.core.truth_(inst_36690)){
var statearr_36736_36815 = state_36713__$1;
(statearr_36736_36815[(1)] = (41));

} else {
var statearr_36737_36816 = state_36713__$1;
(statearr_36737_36816[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (33))){
var state_36713__$1 = state_36713;
var statearr_36738_36817 = state_36713__$1;
(statearr_36738_36817[(2)] = false);

(statearr_36738_36817[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (13))){
var inst_36586 = (state_36713[(22)]);
var inst_36590 = cljs.core.chunk_first.call(null,inst_36586);
var inst_36591 = cljs.core.chunk_rest.call(null,inst_36586);
var inst_36592 = cljs.core.count.call(null,inst_36590);
var inst_36573 = inst_36591;
var inst_36574 = inst_36590;
var inst_36575 = inst_36592;
var inst_36576 = (0);
var state_36713__$1 = (function (){var statearr_36739 = state_36713;
(statearr_36739[(7)] = inst_36574);

(statearr_36739[(8)] = inst_36573);

(statearr_36739[(9)] = inst_36576);

(statearr_36739[(10)] = inst_36575);

return statearr_36739;
})();
var statearr_36740_36818 = state_36713__$1;
(statearr_36740_36818[(2)] = null);

(statearr_36740_36818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (22))){
var inst_36634 = (state_36713[(23)]);
var inst_36630 = (state_36713[(24)]);
var inst_36626 = (state_36713[(19)]);
var inst_36629 = (state_36713[(25)]);
var inst_36629__$1 = (state_36713[(2)]);
var inst_36630__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36629__$1);
var inst_36631 = (function (){var all_files = inst_36626;
var res_SINGLEQUOTE_ = inst_36629__$1;
var res = inst_36630__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36634,inst_36630,inst_36626,inst_36629,inst_36629__$1,inst_36630__$1,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36555_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36555_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36634,inst_36630,inst_36626,inst_36629,inst_36629__$1,inst_36630__$1,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36632 = cljs.core.filter.call(null,inst_36631,inst_36629__$1);
var inst_36633 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36634__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36633);
var inst_36635 = cljs.core.not_empty.call(null,inst_36634__$1);
var state_36713__$1 = (function (){var statearr_36741 = state_36713;
(statearr_36741[(26)] = inst_36632);

(statearr_36741[(23)] = inst_36634__$1);

(statearr_36741[(24)] = inst_36630__$1);

(statearr_36741[(25)] = inst_36629__$1);

return statearr_36741;
})();
if(cljs.core.truth_(inst_36635)){
var statearr_36742_36819 = state_36713__$1;
(statearr_36742_36819[(1)] = (23));

} else {
var statearr_36743_36820 = state_36713__$1;
(statearr_36743_36820[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (36))){
var state_36713__$1 = state_36713;
var statearr_36744_36821 = state_36713__$1;
(statearr_36744_36821[(2)] = false);

(statearr_36744_36821[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (41))){
var inst_36688 = (state_36713[(20)]);
var inst_36692 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36693 = cljs.core.map.call(null,inst_36692,inst_36688);
var inst_36694 = cljs.core.pr_str.call(null,inst_36693);
var inst_36695 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36694)].join('');
var inst_36696 = figwheel.client.utils.log.call(null,inst_36695);
var state_36713__$1 = state_36713;
var statearr_36745_36822 = state_36713__$1;
(statearr_36745_36822[(2)] = inst_36696);

(statearr_36745_36822[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (43))){
var inst_36689 = (state_36713[(21)]);
var inst_36699 = (state_36713[(2)]);
var inst_36700 = cljs.core.not_empty.call(null,inst_36689);
var state_36713__$1 = (function (){var statearr_36746 = state_36713;
(statearr_36746[(27)] = inst_36699);

return statearr_36746;
})();
if(cljs.core.truth_(inst_36700)){
var statearr_36747_36823 = state_36713__$1;
(statearr_36747_36823[(1)] = (44));

} else {
var statearr_36748_36824 = state_36713__$1;
(statearr_36748_36824[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (29))){
var inst_36632 = (state_36713[(26)]);
var inst_36666 = (state_36713[(16)]);
var inst_36634 = (state_36713[(23)]);
var inst_36630 = (state_36713[(24)]);
var inst_36626 = (state_36713[(19)]);
var inst_36629 = (state_36713[(25)]);
var inst_36662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36665 = (function (){var all_files = inst_36626;
var res_SINGLEQUOTE_ = inst_36629;
var res = inst_36630;
var files_not_loaded = inst_36632;
var dependencies_that_loaded = inst_36634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36666,inst_36634,inst_36630,inst_36626,inst_36629,inst_36662,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36664){
var map__36749 = p__36664;
var map__36749__$1 = ((((!((map__36749 == null)))?((((map__36749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36749):map__36749);
var namespace = cljs.core.get.call(null,map__36749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36666,inst_36634,inst_36630,inst_36626,inst_36629,inst_36662,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36666__$1 = cljs.core.group_by.call(null,inst_36665,inst_36632);
var inst_36668 = (inst_36666__$1 == null);
var inst_36669 = cljs.core.not.call(null,inst_36668);
var state_36713__$1 = (function (){var statearr_36751 = state_36713;
(statearr_36751[(16)] = inst_36666__$1);

(statearr_36751[(28)] = inst_36662);

return statearr_36751;
})();
if(inst_36669){
var statearr_36752_36825 = state_36713__$1;
(statearr_36752_36825[(1)] = (32));

} else {
var statearr_36753_36826 = state_36713__$1;
(statearr_36753_36826[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (44))){
var inst_36689 = (state_36713[(21)]);
var inst_36702 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36689);
var inst_36703 = cljs.core.pr_str.call(null,inst_36702);
var inst_36704 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36703)].join('');
var inst_36705 = figwheel.client.utils.log.call(null,inst_36704);
var state_36713__$1 = state_36713;
var statearr_36754_36827 = state_36713__$1;
(statearr_36754_36827[(2)] = inst_36705);

(statearr_36754_36827[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (6))){
var inst_36607 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36755_36828 = state_36713__$1;
(statearr_36755_36828[(2)] = inst_36607);

(statearr_36755_36828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (28))){
var inst_36632 = (state_36713[(26)]);
var inst_36659 = (state_36713[(2)]);
var inst_36660 = cljs.core.not_empty.call(null,inst_36632);
var state_36713__$1 = (function (){var statearr_36756 = state_36713;
(statearr_36756[(29)] = inst_36659);

return statearr_36756;
})();
if(cljs.core.truth_(inst_36660)){
var statearr_36757_36829 = state_36713__$1;
(statearr_36757_36829[(1)] = (29));

} else {
var statearr_36758_36830 = state_36713__$1;
(statearr_36758_36830[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (25))){
var inst_36630 = (state_36713[(24)]);
var inst_36646 = (state_36713[(2)]);
var inst_36647 = cljs.core.not_empty.call(null,inst_36630);
var state_36713__$1 = (function (){var statearr_36759 = state_36713;
(statearr_36759[(30)] = inst_36646);

return statearr_36759;
})();
if(cljs.core.truth_(inst_36647)){
var statearr_36760_36831 = state_36713__$1;
(statearr_36760_36831[(1)] = (26));

} else {
var statearr_36761_36832 = state_36713__$1;
(statearr_36761_36832[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (34))){
var inst_36682 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36682)){
var statearr_36762_36833 = state_36713__$1;
(statearr_36762_36833[(1)] = (38));

} else {
var statearr_36763_36834 = state_36713__$1;
(statearr_36763_36834[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (17))){
var state_36713__$1 = state_36713;
var statearr_36764_36835 = state_36713__$1;
(statearr_36764_36835[(2)] = recompile_dependents);

(statearr_36764_36835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (3))){
var state_36713__$1 = state_36713;
var statearr_36765_36836 = state_36713__$1;
(statearr_36765_36836[(2)] = null);

(statearr_36765_36836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (12))){
var inst_36603 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36766_36837 = state_36713__$1;
(statearr_36766_36837[(2)] = inst_36603);

(statearr_36766_36837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (2))){
var inst_36565 = (state_36713[(13)]);
var inst_36572 = cljs.core.seq.call(null,inst_36565);
var inst_36573 = inst_36572;
var inst_36574 = null;
var inst_36575 = (0);
var inst_36576 = (0);
var state_36713__$1 = (function (){var statearr_36767 = state_36713;
(statearr_36767[(7)] = inst_36574);

(statearr_36767[(8)] = inst_36573);

(statearr_36767[(9)] = inst_36576);

(statearr_36767[(10)] = inst_36575);

return statearr_36767;
})();
var statearr_36768_36838 = state_36713__$1;
(statearr_36768_36838[(2)] = null);

(statearr_36768_36838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (23))){
var inst_36632 = (state_36713[(26)]);
var inst_36634 = (state_36713[(23)]);
var inst_36630 = (state_36713[(24)]);
var inst_36626 = (state_36713[(19)]);
var inst_36629 = (state_36713[(25)]);
var inst_36637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36639 = (function (){var all_files = inst_36626;
var res_SINGLEQUOTE_ = inst_36629;
var res = inst_36630;
var files_not_loaded = inst_36632;
var dependencies_that_loaded = inst_36634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36634,inst_36630,inst_36626,inst_36629,inst_36637,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36638){
var map__36769 = p__36638;
var map__36769__$1 = ((((!((map__36769 == null)))?((((map__36769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36769):map__36769);
var request_url = cljs.core.get.call(null,map__36769__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36634,inst_36630,inst_36626,inst_36629,inst_36637,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36640 = cljs.core.reverse.call(null,inst_36634);
var inst_36641 = cljs.core.map.call(null,inst_36639,inst_36640);
var inst_36642 = cljs.core.pr_str.call(null,inst_36641);
var inst_36643 = figwheel.client.utils.log.call(null,inst_36642);
var state_36713__$1 = (function (){var statearr_36771 = state_36713;
(statearr_36771[(31)] = inst_36637);

return statearr_36771;
})();
var statearr_36772_36839 = state_36713__$1;
(statearr_36772_36839[(2)] = inst_36643);

(statearr_36772_36839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (35))){
var state_36713__$1 = state_36713;
var statearr_36773_36840 = state_36713__$1;
(statearr_36773_36840[(2)] = true);

(statearr_36773_36840[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (19))){
var inst_36616 = (state_36713[(12)]);
var inst_36622 = figwheel.client.file_reloading.expand_files.call(null,inst_36616);
var state_36713__$1 = state_36713;
var statearr_36774_36841 = state_36713__$1;
(statearr_36774_36841[(2)] = inst_36622);

(statearr_36774_36841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (11))){
var state_36713__$1 = state_36713;
var statearr_36775_36842 = state_36713__$1;
(statearr_36775_36842[(2)] = null);

(statearr_36775_36842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (9))){
var inst_36605 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36776_36843 = state_36713__$1;
(statearr_36776_36843[(2)] = inst_36605);

(statearr_36776_36843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (5))){
var inst_36576 = (state_36713[(9)]);
var inst_36575 = (state_36713[(10)]);
var inst_36578 = (inst_36576 < inst_36575);
var inst_36579 = inst_36578;
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36579)){
var statearr_36777_36844 = state_36713__$1;
(statearr_36777_36844[(1)] = (7));

} else {
var statearr_36778_36845 = state_36713__$1;
(statearr_36778_36845[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (14))){
var inst_36586 = (state_36713[(22)]);
var inst_36595 = cljs.core.first.call(null,inst_36586);
var inst_36596 = figwheel.client.file_reloading.eval_body.call(null,inst_36595,opts);
var inst_36597 = cljs.core.next.call(null,inst_36586);
var inst_36573 = inst_36597;
var inst_36574 = null;
var inst_36575 = (0);
var inst_36576 = (0);
var state_36713__$1 = (function (){var statearr_36779 = state_36713;
(statearr_36779[(7)] = inst_36574);

(statearr_36779[(8)] = inst_36573);

(statearr_36779[(9)] = inst_36576);

(statearr_36779[(32)] = inst_36596);

(statearr_36779[(10)] = inst_36575);

return statearr_36779;
})();
var statearr_36780_36846 = state_36713__$1;
(statearr_36780_36846[(2)] = null);

(statearr_36780_36846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (45))){
var state_36713__$1 = state_36713;
var statearr_36781_36847 = state_36713__$1;
(statearr_36781_36847[(2)] = null);

(statearr_36781_36847[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (26))){
var inst_36632 = (state_36713[(26)]);
var inst_36634 = (state_36713[(23)]);
var inst_36630 = (state_36713[(24)]);
var inst_36626 = (state_36713[(19)]);
var inst_36629 = (state_36713[(25)]);
var inst_36649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36651 = (function (){var all_files = inst_36626;
var res_SINGLEQUOTE_ = inst_36629;
var res = inst_36630;
var files_not_loaded = inst_36632;
var dependencies_that_loaded = inst_36634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36634,inst_36630,inst_36626,inst_36629,inst_36649,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36650){
var map__36782 = p__36650;
var map__36782__$1 = ((((!((map__36782 == null)))?((((map__36782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36782):map__36782);
var namespace = cljs.core.get.call(null,map__36782__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36634,inst_36630,inst_36626,inst_36629,inst_36649,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36652 = cljs.core.map.call(null,inst_36651,inst_36630);
var inst_36653 = cljs.core.pr_str.call(null,inst_36652);
var inst_36654 = figwheel.client.utils.log.call(null,inst_36653);
var inst_36655 = (function (){var all_files = inst_36626;
var res_SINGLEQUOTE_ = inst_36629;
var res = inst_36630;
var files_not_loaded = inst_36632;
var dependencies_that_loaded = inst_36634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36634,inst_36630,inst_36626,inst_36629,inst_36649,inst_36651,inst_36652,inst_36653,inst_36654,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36632,inst_36634,inst_36630,inst_36626,inst_36629,inst_36649,inst_36651,inst_36652,inst_36653,inst_36654,state_val_36714,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36656 = setTimeout(inst_36655,(10));
var state_36713__$1 = (function (){var statearr_36784 = state_36713;
(statearr_36784[(33)] = inst_36649);

(statearr_36784[(34)] = inst_36654);

return statearr_36784;
})();
var statearr_36785_36848 = state_36713__$1;
(statearr_36785_36848[(2)] = inst_36656);

(statearr_36785_36848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (16))){
var state_36713__$1 = state_36713;
var statearr_36786_36849 = state_36713__$1;
(statearr_36786_36849[(2)] = reload_dependents);

(statearr_36786_36849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (38))){
var inst_36666 = (state_36713[(16)]);
var inst_36684 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36666);
var state_36713__$1 = state_36713;
var statearr_36787_36850 = state_36713__$1;
(statearr_36787_36850[(2)] = inst_36684);

(statearr_36787_36850[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (30))){
var state_36713__$1 = state_36713;
var statearr_36788_36851 = state_36713__$1;
(statearr_36788_36851[(2)] = null);

(statearr_36788_36851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (10))){
var inst_36586 = (state_36713[(22)]);
var inst_36588 = cljs.core.chunked_seq_QMARK_.call(null,inst_36586);
var state_36713__$1 = state_36713;
if(inst_36588){
var statearr_36789_36852 = state_36713__$1;
(statearr_36789_36852[(1)] = (13));

} else {
var statearr_36790_36853 = state_36713__$1;
(statearr_36790_36853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (18))){
var inst_36620 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36620)){
var statearr_36791_36854 = state_36713__$1;
(statearr_36791_36854[(1)] = (19));

} else {
var statearr_36792_36855 = state_36713__$1;
(statearr_36792_36855[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (42))){
var state_36713__$1 = state_36713;
var statearr_36793_36856 = state_36713__$1;
(statearr_36793_36856[(2)] = null);

(statearr_36793_36856[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (37))){
var inst_36679 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36794_36857 = state_36713__$1;
(statearr_36794_36857[(2)] = inst_36679);

(statearr_36794_36857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (8))){
var inst_36573 = (state_36713[(8)]);
var inst_36586 = (state_36713[(22)]);
var inst_36586__$1 = cljs.core.seq.call(null,inst_36573);
var state_36713__$1 = (function (){var statearr_36795 = state_36713;
(statearr_36795[(22)] = inst_36586__$1);

return statearr_36795;
})();
if(inst_36586__$1){
var statearr_36796_36858 = state_36713__$1;
(statearr_36796_36858[(1)] = (10));

} else {
var statearr_36797_36859 = state_36713__$1;
(statearr_36797_36859[(1)] = (11));

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
});})(c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30864__auto__,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0 = (function (){
var statearr_36798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36798[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__);

(statearr_36798[(1)] = (1));

return statearr_36798;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1 = (function (state_36713){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_36713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e36799){if((e36799 instanceof Object)){
var ex__30868__auto__ = e36799;
var statearr_36800_36860 = state_36713;
(statearr_36800_36860[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36861 = state_36713;
state_36713 = G__36861;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__ = function(state_36713){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1.call(this,state_36713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30954__auto__ = (function (){var statearr_36801 = f__30953__auto__.call(null);
(statearr_36801[(6)] = c__30952__auto__);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,map__36558,map__36558__$1,opts,before_jsload,on_jsload,reload_dependents,map__36559,map__36559__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36864,link){
var map__36865 = p__36864;
var map__36865__$1 = ((((!((map__36865 == null)))?((((map__36865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36865):map__36865);
var file = cljs.core.get.call(null,map__36865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36865,map__36865__$1,file){
return (function (p1__36862_SHARP_,p2__36863_SHARP_){
if(cljs.core._EQ_.call(null,p1__36862_SHARP_,p2__36863_SHARP_)){
return p1__36862_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36865,map__36865__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36868){
var map__36869 = p__36868;
var map__36869__$1 = ((((!((map__36869 == null)))?((((map__36869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36869):map__36869);
var match_length = cljs.core.get.call(null,map__36869__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36869__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36867_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36867_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36871_SHARP_,p2__36872_SHARP_){
return cljs.core.assoc.call(null,p1__36871_SHARP_,cljs.core.get.call(null,p2__36872_SHARP_,key),p2__36872_SHARP_);
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
var loaded_f_datas_36873 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36873);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36873);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36874,p__36875){
var map__36876 = p__36874;
var map__36876__$1 = ((((!((map__36876 == null)))?((((map__36876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36876):map__36876);
var on_cssload = cljs.core.get.call(null,map__36876__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36877 = p__36875;
var map__36877__$1 = ((((!((map__36877 == null)))?((((map__36877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36877):map__36877);
var files_msg = map__36877__$1;
var files = cljs.core.get.call(null,map__36877__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514349635291
