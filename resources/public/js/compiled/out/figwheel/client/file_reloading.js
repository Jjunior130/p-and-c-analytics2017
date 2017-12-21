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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36241_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36241_SHARP_));
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
var seq__36242 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36243 = null;
var count__36244 = (0);
var i__36245 = (0);
while(true){
if((i__36245 < count__36244)){
var n = cljs.core._nth.call(null,chunk__36243,i__36245);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36246 = seq__36242;
var G__36247 = chunk__36243;
var G__36248 = count__36244;
var G__36249 = (i__36245 + (1));
seq__36242 = G__36246;
chunk__36243 = G__36247;
count__36244 = G__36248;
i__36245 = G__36249;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36242);
if(temp__4657__auto__){
var seq__36242__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36242__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36242__$1);
var G__36250 = cljs.core.chunk_rest.call(null,seq__36242__$1);
var G__36251 = c__28034__auto__;
var G__36252 = cljs.core.count.call(null,c__28034__auto__);
var G__36253 = (0);
seq__36242 = G__36250;
chunk__36243 = G__36251;
count__36244 = G__36252;
i__36245 = G__36253;
continue;
} else {
var n = cljs.core.first.call(null,seq__36242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36254 = cljs.core.next.call(null,seq__36242__$1);
var G__36255 = null;
var G__36256 = (0);
var G__36257 = (0);
seq__36242 = G__36254;
chunk__36243 = G__36255;
count__36244 = G__36256;
i__36245 = G__36257;
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

var seq__36267_36275 = cljs.core.seq.call(null,deps);
var chunk__36268_36276 = null;
var count__36269_36277 = (0);
var i__36270_36278 = (0);
while(true){
if((i__36270_36278 < count__36269_36277)){
var dep_36279 = cljs.core._nth.call(null,chunk__36268_36276,i__36270_36278);
topo_sort_helper_STAR_.call(null,dep_36279,(depth + (1)),state);

var G__36280 = seq__36267_36275;
var G__36281 = chunk__36268_36276;
var G__36282 = count__36269_36277;
var G__36283 = (i__36270_36278 + (1));
seq__36267_36275 = G__36280;
chunk__36268_36276 = G__36281;
count__36269_36277 = G__36282;
i__36270_36278 = G__36283;
continue;
} else {
var temp__4657__auto___36284 = cljs.core.seq.call(null,seq__36267_36275);
if(temp__4657__auto___36284){
var seq__36267_36285__$1 = temp__4657__auto___36284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36267_36285__$1)){
var c__28034__auto___36286 = cljs.core.chunk_first.call(null,seq__36267_36285__$1);
var G__36287 = cljs.core.chunk_rest.call(null,seq__36267_36285__$1);
var G__36288 = c__28034__auto___36286;
var G__36289 = cljs.core.count.call(null,c__28034__auto___36286);
var G__36290 = (0);
seq__36267_36275 = G__36287;
chunk__36268_36276 = G__36288;
count__36269_36277 = G__36289;
i__36270_36278 = G__36290;
continue;
} else {
var dep_36291 = cljs.core.first.call(null,seq__36267_36285__$1);
topo_sort_helper_STAR_.call(null,dep_36291,(depth + (1)),state);

var G__36292 = cljs.core.next.call(null,seq__36267_36285__$1);
var G__36293 = null;
var G__36294 = (0);
var G__36295 = (0);
seq__36267_36275 = G__36292;
chunk__36268_36276 = G__36293;
count__36269_36277 = G__36294;
i__36270_36278 = G__36295;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36271){
var vec__36272 = p__36271;
var seq__36273 = cljs.core.seq.call(null,vec__36272);
var first__36274 = cljs.core.first.call(null,seq__36273);
var seq__36273__$1 = cljs.core.next.call(null,seq__36273);
var x = first__36274;
var xs = seq__36273__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36272,seq__36273,first__36274,seq__36273__$1,x,xs,get_deps__$1){
return (function (p1__36258_SHARP_){
return clojure.set.difference.call(null,p1__36258_SHARP_,x);
});})(vec__36272,seq__36273,first__36274,seq__36273__$1,x,xs,get_deps__$1))
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
var seq__36296 = cljs.core.seq.call(null,provides);
var chunk__36297 = null;
var count__36298 = (0);
var i__36299 = (0);
while(true){
if((i__36299 < count__36298)){
var prov = cljs.core._nth.call(null,chunk__36297,i__36299);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36300_36308 = cljs.core.seq.call(null,requires);
var chunk__36301_36309 = null;
var count__36302_36310 = (0);
var i__36303_36311 = (0);
while(true){
if((i__36303_36311 < count__36302_36310)){
var req_36312 = cljs.core._nth.call(null,chunk__36301_36309,i__36303_36311);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36312,prov);

var G__36313 = seq__36300_36308;
var G__36314 = chunk__36301_36309;
var G__36315 = count__36302_36310;
var G__36316 = (i__36303_36311 + (1));
seq__36300_36308 = G__36313;
chunk__36301_36309 = G__36314;
count__36302_36310 = G__36315;
i__36303_36311 = G__36316;
continue;
} else {
var temp__4657__auto___36317 = cljs.core.seq.call(null,seq__36300_36308);
if(temp__4657__auto___36317){
var seq__36300_36318__$1 = temp__4657__auto___36317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36300_36318__$1)){
var c__28034__auto___36319 = cljs.core.chunk_first.call(null,seq__36300_36318__$1);
var G__36320 = cljs.core.chunk_rest.call(null,seq__36300_36318__$1);
var G__36321 = c__28034__auto___36319;
var G__36322 = cljs.core.count.call(null,c__28034__auto___36319);
var G__36323 = (0);
seq__36300_36308 = G__36320;
chunk__36301_36309 = G__36321;
count__36302_36310 = G__36322;
i__36303_36311 = G__36323;
continue;
} else {
var req_36324 = cljs.core.first.call(null,seq__36300_36318__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36324,prov);

var G__36325 = cljs.core.next.call(null,seq__36300_36318__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36300_36308 = G__36325;
chunk__36301_36309 = G__36326;
count__36302_36310 = G__36327;
i__36303_36311 = G__36328;
continue;
}
} else {
}
}
break;
}

var G__36329 = seq__36296;
var G__36330 = chunk__36297;
var G__36331 = count__36298;
var G__36332 = (i__36299 + (1));
seq__36296 = G__36329;
chunk__36297 = G__36330;
count__36298 = G__36331;
i__36299 = G__36332;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36296);
if(temp__4657__auto__){
var seq__36296__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36296__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36296__$1);
var G__36333 = cljs.core.chunk_rest.call(null,seq__36296__$1);
var G__36334 = c__28034__auto__;
var G__36335 = cljs.core.count.call(null,c__28034__auto__);
var G__36336 = (0);
seq__36296 = G__36333;
chunk__36297 = G__36334;
count__36298 = G__36335;
i__36299 = G__36336;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36296__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36304_36337 = cljs.core.seq.call(null,requires);
var chunk__36305_36338 = null;
var count__36306_36339 = (0);
var i__36307_36340 = (0);
while(true){
if((i__36307_36340 < count__36306_36339)){
var req_36341 = cljs.core._nth.call(null,chunk__36305_36338,i__36307_36340);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36341,prov);

var G__36342 = seq__36304_36337;
var G__36343 = chunk__36305_36338;
var G__36344 = count__36306_36339;
var G__36345 = (i__36307_36340 + (1));
seq__36304_36337 = G__36342;
chunk__36305_36338 = G__36343;
count__36306_36339 = G__36344;
i__36307_36340 = G__36345;
continue;
} else {
var temp__4657__auto___36346__$1 = cljs.core.seq.call(null,seq__36304_36337);
if(temp__4657__auto___36346__$1){
var seq__36304_36347__$1 = temp__4657__auto___36346__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36304_36347__$1)){
var c__28034__auto___36348 = cljs.core.chunk_first.call(null,seq__36304_36347__$1);
var G__36349 = cljs.core.chunk_rest.call(null,seq__36304_36347__$1);
var G__36350 = c__28034__auto___36348;
var G__36351 = cljs.core.count.call(null,c__28034__auto___36348);
var G__36352 = (0);
seq__36304_36337 = G__36349;
chunk__36305_36338 = G__36350;
count__36306_36339 = G__36351;
i__36307_36340 = G__36352;
continue;
} else {
var req_36353 = cljs.core.first.call(null,seq__36304_36347__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36353,prov);

var G__36354 = cljs.core.next.call(null,seq__36304_36347__$1);
var G__36355 = null;
var G__36356 = (0);
var G__36357 = (0);
seq__36304_36337 = G__36354;
chunk__36305_36338 = G__36355;
count__36306_36339 = G__36356;
i__36307_36340 = G__36357;
continue;
}
} else {
}
}
break;
}

var G__36358 = cljs.core.next.call(null,seq__36296__$1);
var G__36359 = null;
var G__36360 = (0);
var G__36361 = (0);
seq__36296 = G__36358;
chunk__36297 = G__36359;
count__36298 = G__36360;
i__36299 = G__36361;
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
var seq__36362_36366 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36363_36367 = null;
var count__36364_36368 = (0);
var i__36365_36369 = (0);
while(true){
if((i__36365_36369 < count__36364_36368)){
var ns_36370 = cljs.core._nth.call(null,chunk__36363_36367,i__36365_36369);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36370);

var G__36371 = seq__36362_36366;
var G__36372 = chunk__36363_36367;
var G__36373 = count__36364_36368;
var G__36374 = (i__36365_36369 + (1));
seq__36362_36366 = G__36371;
chunk__36363_36367 = G__36372;
count__36364_36368 = G__36373;
i__36365_36369 = G__36374;
continue;
} else {
var temp__4657__auto___36375 = cljs.core.seq.call(null,seq__36362_36366);
if(temp__4657__auto___36375){
var seq__36362_36376__$1 = temp__4657__auto___36375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36362_36376__$1)){
var c__28034__auto___36377 = cljs.core.chunk_first.call(null,seq__36362_36376__$1);
var G__36378 = cljs.core.chunk_rest.call(null,seq__36362_36376__$1);
var G__36379 = c__28034__auto___36377;
var G__36380 = cljs.core.count.call(null,c__28034__auto___36377);
var G__36381 = (0);
seq__36362_36366 = G__36378;
chunk__36363_36367 = G__36379;
count__36364_36368 = G__36380;
i__36365_36369 = G__36381;
continue;
} else {
var ns_36382 = cljs.core.first.call(null,seq__36362_36376__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36382);

var G__36383 = cljs.core.next.call(null,seq__36362_36376__$1);
var G__36384 = null;
var G__36385 = (0);
var G__36386 = (0);
seq__36362_36366 = G__36383;
chunk__36363_36367 = G__36384;
count__36364_36368 = G__36385;
i__36365_36369 = G__36386;
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
var G__36387__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36388__i = 0, G__36388__a = new Array(arguments.length -  0);
while (G__36388__i < G__36388__a.length) {G__36388__a[G__36388__i] = arguments[G__36388__i + 0]; ++G__36388__i;}
  args = new cljs.core.IndexedSeq(G__36388__a,0,null);
} 
return G__36387__delegate.call(this,args);};
G__36387.cljs$lang$maxFixedArity = 0;
G__36387.cljs$lang$applyTo = (function (arglist__36389){
var args = cljs.core.seq(arglist__36389);
return G__36387__delegate(args);
});
G__36387.cljs$core$IFn$_invoke$arity$variadic = G__36387__delegate;
return G__36387;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36390_SHARP_,p2__36391_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36390_SHARP_)].join('')),p2__36391_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36392_SHARP_,p2__36393_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36392_SHARP_)].join(''),p2__36393_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36394 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36394.addCallback(((function (G__36394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36394))
);

G__36394.addErrback(((function (G__36394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36394))
);

return G__36394;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36395 = cljs.core._EQ_;
var expr__36396 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36395.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36396))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36395,expr__36396){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36395,expr__36396))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36395,expr__36396){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36398){if((e36398 instanceof Error)){
var e = e36398;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36398;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36395,expr__36396))
} else {
if(cljs.core.truth_(pred__36395.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36396))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36395.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36396))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36395.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36396))){
return ((function (pred__36395,expr__36396){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36399){if((e36399 instanceof Error)){
var e = e36399;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36399;

}
}})());
});
;})(pred__36395,expr__36396))
} else {
return ((function (pred__36395,expr__36396){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36395,expr__36396))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36400,callback){
var map__36401 = p__36400;
var map__36401__$1 = ((((!((map__36401 == null)))?((((map__36401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36401):map__36401);
var file_msg = map__36401__$1;
var request_url = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36401,map__36401__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36401,map__36401__$1,file_msg,request_url))
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
return (function (state_36425){
var state_val_36426 = (state_36425[(1)]);
if((state_val_36426 === (7))){
var inst_36421 = (state_36425[(2)]);
var state_36425__$1 = state_36425;
var statearr_36427_36444 = state_36425__$1;
(statearr_36427_36444[(2)] = inst_36421);

(statearr_36427_36444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (1))){
var state_36425__$1 = state_36425;
var statearr_36428_36445 = state_36425__$1;
(statearr_36428_36445[(2)] = null);

(statearr_36428_36445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (4))){
var inst_36405 = (state_36425[(7)]);
var inst_36405__$1 = (state_36425[(2)]);
var state_36425__$1 = (function (){var statearr_36429 = state_36425;
(statearr_36429[(7)] = inst_36405__$1);

return statearr_36429;
})();
if(cljs.core.truth_(inst_36405__$1)){
var statearr_36430_36446 = state_36425__$1;
(statearr_36430_36446[(1)] = (5));

} else {
var statearr_36431_36447 = state_36425__$1;
(statearr_36431_36447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (6))){
var state_36425__$1 = state_36425;
var statearr_36432_36448 = state_36425__$1;
(statearr_36432_36448[(2)] = null);

(statearr_36432_36448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (3))){
var inst_36423 = (state_36425[(2)]);
var state_36425__$1 = state_36425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36425__$1,inst_36423);
} else {
if((state_val_36426 === (2))){
var state_36425__$1 = state_36425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36425__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36426 === (11))){
var inst_36417 = (state_36425[(2)]);
var state_36425__$1 = (function (){var statearr_36433 = state_36425;
(statearr_36433[(8)] = inst_36417);

return statearr_36433;
})();
var statearr_36434_36449 = state_36425__$1;
(statearr_36434_36449[(2)] = null);

(statearr_36434_36449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (9))){
var inst_36411 = (state_36425[(9)]);
var inst_36409 = (state_36425[(10)]);
var inst_36413 = inst_36411.call(null,inst_36409);
var state_36425__$1 = state_36425;
var statearr_36435_36450 = state_36425__$1;
(statearr_36435_36450[(2)] = inst_36413);

(statearr_36435_36450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (5))){
var inst_36405 = (state_36425[(7)]);
var inst_36407 = figwheel.client.file_reloading.blocking_load.call(null,inst_36405);
var state_36425__$1 = state_36425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36425__$1,(8),inst_36407);
} else {
if((state_val_36426 === (10))){
var inst_36409 = (state_36425[(10)]);
var inst_36415 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36409);
var state_36425__$1 = state_36425;
var statearr_36436_36451 = state_36425__$1;
(statearr_36436_36451[(2)] = inst_36415);

(statearr_36436_36451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36426 === (8))){
var inst_36405 = (state_36425[(7)]);
var inst_36411 = (state_36425[(9)]);
var inst_36409 = (state_36425[(2)]);
var inst_36410 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36411__$1 = cljs.core.get.call(null,inst_36410,inst_36405);
var state_36425__$1 = (function (){var statearr_36437 = state_36425;
(statearr_36437[(9)] = inst_36411__$1);

(statearr_36437[(10)] = inst_36409);

return statearr_36437;
})();
if(cljs.core.truth_(inst_36411__$1)){
var statearr_36438_36452 = state_36425__$1;
(statearr_36438_36452[(1)] = (9));

} else {
var statearr_36439_36453 = state_36425__$1;
(statearr_36439_36453[(1)] = (10));

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
var statearr_36440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36440[(0)] = figwheel$client$file_reloading$state_machine__30865__auto__);

(statearr_36440[(1)] = (1));

return statearr_36440;
});
var figwheel$client$file_reloading$state_machine__30865__auto____1 = (function (state_36425){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_36425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e36441){if((e36441 instanceof Object)){
var ex__30868__auto__ = e36441;
var statearr_36442_36454 = state_36425;
(statearr_36442_36454[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36455 = state_36425;
state_36425 = G__36455;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30865__auto__ = function(state_36425){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30865__auto____1.call(this,state_36425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30865__auto____0;
figwheel$client$file_reloading$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30865__auto____1;
return figwheel$client$file_reloading$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_36443 = f__30953__auto__.call(null);
(statearr_36443[(6)] = c__30952__auto__);

return statearr_36443;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36456,callback){
var map__36457 = p__36456;
var map__36457__$1 = ((((!((map__36457 == null)))?((((map__36457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36457):map__36457);
var file_msg = map__36457__$1;
var namespace = cljs.core.get.call(null,map__36457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36457,map__36457__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36457,map__36457__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36459){
var map__36460 = p__36459;
var map__36460__$1 = ((((!((map__36460 == null)))?((((map__36460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36460):map__36460);
var file_msg = map__36460__$1;
var namespace = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36462){
var map__36463 = p__36462;
var map__36463__$1 = ((((!((map__36463 == null)))?((((map__36463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36463):map__36463);
var file_msg = map__36463__$1;
var namespace = cljs.core.get.call(null,map__36463__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36465,callback){
var map__36466 = p__36465;
var map__36466__$1 = ((((!((map__36466 == null)))?((((map__36466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36466):map__36466);
var file_msg = map__36466__$1;
var request_url = cljs.core.get.call(null,map__36466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36466__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30952__auto___36516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___36516,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___36516,out){
return (function (state_36501){
var state_val_36502 = (state_36501[(1)]);
if((state_val_36502 === (1))){
var inst_36475 = cljs.core.seq.call(null,files);
var inst_36476 = cljs.core.first.call(null,inst_36475);
var inst_36477 = cljs.core.next.call(null,inst_36475);
var inst_36478 = files;
var state_36501__$1 = (function (){var statearr_36503 = state_36501;
(statearr_36503[(7)] = inst_36477);

(statearr_36503[(8)] = inst_36478);

(statearr_36503[(9)] = inst_36476);

return statearr_36503;
})();
var statearr_36504_36517 = state_36501__$1;
(statearr_36504_36517[(2)] = null);

(statearr_36504_36517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (2))){
var inst_36484 = (state_36501[(10)]);
var inst_36478 = (state_36501[(8)]);
var inst_36483 = cljs.core.seq.call(null,inst_36478);
var inst_36484__$1 = cljs.core.first.call(null,inst_36483);
var inst_36485 = cljs.core.next.call(null,inst_36483);
var inst_36486 = (inst_36484__$1 == null);
var inst_36487 = cljs.core.not.call(null,inst_36486);
var state_36501__$1 = (function (){var statearr_36505 = state_36501;
(statearr_36505[(11)] = inst_36485);

(statearr_36505[(10)] = inst_36484__$1);

return statearr_36505;
})();
if(inst_36487){
var statearr_36506_36518 = state_36501__$1;
(statearr_36506_36518[(1)] = (4));

} else {
var statearr_36507_36519 = state_36501__$1;
(statearr_36507_36519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (3))){
var inst_36499 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36501__$1,inst_36499);
} else {
if((state_val_36502 === (4))){
var inst_36484 = (state_36501[(10)]);
var inst_36489 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36484);
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(7),inst_36489);
} else {
if((state_val_36502 === (5))){
var inst_36495 = cljs.core.async.close_BANG_.call(null,out);
var state_36501__$1 = state_36501;
var statearr_36508_36520 = state_36501__$1;
(statearr_36508_36520[(2)] = inst_36495);

(statearr_36508_36520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (6))){
var inst_36497 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36509_36521 = state_36501__$1;
(statearr_36509_36521[(2)] = inst_36497);

(statearr_36509_36521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (7))){
var inst_36485 = (state_36501[(11)]);
var inst_36491 = (state_36501[(2)]);
var inst_36492 = cljs.core.async.put_BANG_.call(null,out,inst_36491);
var inst_36478 = inst_36485;
var state_36501__$1 = (function (){var statearr_36510 = state_36501;
(statearr_36510[(12)] = inst_36492);

(statearr_36510[(8)] = inst_36478);

return statearr_36510;
})();
var statearr_36511_36522 = state_36501__$1;
(statearr_36511_36522[(2)] = null);

(statearr_36511_36522[(1)] = (2));


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
});})(c__30952__auto___36516,out))
;
return ((function (switch__30864__auto__,c__30952__auto___36516,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0 = (function (){
var statearr_36512 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36512[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__);

(statearr_36512[(1)] = (1));

return statearr_36512;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1 = (function (state_36501){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_36501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e36513){if((e36513 instanceof Object)){
var ex__30868__auto__ = e36513;
var statearr_36514_36523 = state_36501;
(statearr_36514_36523[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36524 = state_36501;
state_36501 = G__36524;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__ = function(state_36501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1.call(this,state_36501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___36516,out))
})();
var state__30954__auto__ = (function (){var statearr_36515 = f__30953__auto__.call(null);
(statearr_36515[(6)] = c__30952__auto___36516);

return statearr_36515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___36516,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36525,opts){
var map__36526 = p__36525;
var map__36526__$1 = ((((!((map__36526 == null)))?((((map__36526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36526):map__36526);
var eval_body = cljs.core.get.call(null,map__36526__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36528){var e = e36528;
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
return (function (p1__36529_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36529_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36530){
var vec__36531 = p__36530;
var k = cljs.core.nth.call(null,vec__36531,(0),null);
var v = cljs.core.nth.call(null,vec__36531,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36534){
var vec__36535 = p__36534;
var k = cljs.core.nth.call(null,vec__36535,(0),null);
var v = cljs.core.nth.call(null,vec__36535,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36541,p__36542){
var map__36543 = p__36541;
var map__36543__$1 = ((((!((map__36543 == null)))?((((map__36543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36543):map__36543);
var opts = map__36543__$1;
var before_jsload = cljs.core.get.call(null,map__36543__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36543__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36543__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36544 = p__36542;
var map__36544__$1 = ((((!((map__36544 == null)))?((((map__36544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36544):map__36544);
var msg = map__36544__$1;
var files = cljs.core.get.call(null,map__36544__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36544__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36544__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36698){
var state_val_36699 = (state_36698[(1)]);
if((state_val_36699 === (7))){
var inst_36561 = (state_36698[(7)]);
var inst_36560 = (state_36698[(8)]);
var inst_36559 = (state_36698[(9)]);
var inst_36558 = (state_36698[(10)]);
var inst_36566 = cljs.core._nth.call(null,inst_36559,inst_36561);
var inst_36567 = figwheel.client.file_reloading.eval_body.call(null,inst_36566,opts);
var inst_36568 = (inst_36561 + (1));
var tmp36700 = inst_36560;
var tmp36701 = inst_36559;
var tmp36702 = inst_36558;
var inst_36558__$1 = tmp36702;
var inst_36559__$1 = tmp36701;
var inst_36560__$1 = tmp36700;
var inst_36561__$1 = inst_36568;
var state_36698__$1 = (function (){var statearr_36703 = state_36698;
(statearr_36703[(7)] = inst_36561__$1);

(statearr_36703[(8)] = inst_36560__$1);

(statearr_36703[(9)] = inst_36559__$1);

(statearr_36703[(11)] = inst_36567);

(statearr_36703[(10)] = inst_36558__$1);

return statearr_36703;
})();
var statearr_36704_36787 = state_36698__$1;
(statearr_36704_36787[(2)] = null);

(statearr_36704_36787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (20))){
var inst_36601 = (state_36698[(12)]);
var inst_36609 = figwheel.client.file_reloading.sort_files.call(null,inst_36601);
var state_36698__$1 = state_36698;
var statearr_36705_36788 = state_36698__$1;
(statearr_36705_36788[(2)] = inst_36609);

(statearr_36705_36788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (27))){
var state_36698__$1 = state_36698;
var statearr_36706_36789 = state_36698__$1;
(statearr_36706_36789[(2)] = null);

(statearr_36706_36789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (1))){
var inst_36550 = (state_36698[(13)]);
var inst_36547 = before_jsload.call(null,files);
var inst_36548 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36549 = (function (){return ((function (inst_36550,inst_36547,inst_36548,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36538_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36538_SHARP_);
});
;})(inst_36550,inst_36547,inst_36548,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36550__$1 = cljs.core.filter.call(null,inst_36549,files);
var inst_36551 = cljs.core.not_empty.call(null,inst_36550__$1);
var state_36698__$1 = (function (){var statearr_36707 = state_36698;
(statearr_36707[(14)] = inst_36547);

(statearr_36707[(13)] = inst_36550__$1);

(statearr_36707[(15)] = inst_36548);

return statearr_36707;
})();
if(cljs.core.truth_(inst_36551)){
var statearr_36708_36790 = state_36698__$1;
(statearr_36708_36790[(1)] = (2));

} else {
var statearr_36709_36791 = state_36698__$1;
(statearr_36709_36791[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (24))){
var state_36698__$1 = state_36698;
var statearr_36710_36792 = state_36698__$1;
(statearr_36710_36792[(2)] = null);

(statearr_36710_36792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (39))){
var inst_36651 = (state_36698[(16)]);
var state_36698__$1 = state_36698;
var statearr_36711_36793 = state_36698__$1;
(statearr_36711_36793[(2)] = inst_36651);

(statearr_36711_36793[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (46))){
var inst_36693 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
var statearr_36712_36794 = state_36698__$1;
(statearr_36712_36794[(2)] = inst_36693);

(statearr_36712_36794[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (4))){
var inst_36595 = (state_36698[(2)]);
var inst_36596 = cljs.core.List.EMPTY;
var inst_36597 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36596);
var inst_36598 = (function (){return ((function (inst_36595,inst_36596,inst_36597,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36539_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36539_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36539_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36539_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_36595,inst_36596,inst_36597,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36599 = cljs.core.filter.call(null,inst_36598,files);
var inst_36600 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36601 = cljs.core.concat.call(null,inst_36599,inst_36600);
var state_36698__$1 = (function (){var statearr_36713 = state_36698;
(statearr_36713[(17)] = inst_36595);

(statearr_36713[(12)] = inst_36601);

(statearr_36713[(18)] = inst_36597);

return statearr_36713;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36714_36795 = state_36698__$1;
(statearr_36714_36795[(1)] = (16));

} else {
var statearr_36715_36796 = state_36698__$1;
(statearr_36715_36796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (15))){
var inst_36585 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
var statearr_36716_36797 = state_36698__$1;
(statearr_36716_36797[(2)] = inst_36585);

(statearr_36716_36797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (21))){
var inst_36611 = (state_36698[(19)]);
var inst_36611__$1 = (state_36698[(2)]);
var inst_36612 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36611__$1);
var state_36698__$1 = (function (){var statearr_36717 = state_36698;
(statearr_36717[(19)] = inst_36611__$1);

return statearr_36717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36698__$1,(22),inst_36612);
} else {
if((state_val_36699 === (31))){
var inst_36696 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36698__$1,inst_36696);
} else {
if((state_val_36699 === (32))){
var inst_36651 = (state_36698[(16)]);
var inst_36656 = inst_36651.cljs$lang$protocol_mask$partition0$;
var inst_36657 = (inst_36656 & (64));
var inst_36658 = inst_36651.cljs$core$ISeq$;
var inst_36659 = (cljs.core.PROTOCOL_SENTINEL === inst_36658);
var inst_36660 = (inst_36657) || (inst_36659);
var state_36698__$1 = state_36698;
if(cljs.core.truth_(inst_36660)){
var statearr_36718_36798 = state_36698__$1;
(statearr_36718_36798[(1)] = (35));

} else {
var statearr_36719_36799 = state_36698__$1;
(statearr_36719_36799[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (40))){
var inst_36673 = (state_36698[(20)]);
var inst_36672 = (state_36698[(2)]);
var inst_36673__$1 = cljs.core.get.call(null,inst_36672,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36674 = cljs.core.get.call(null,inst_36672,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36675 = cljs.core.not_empty.call(null,inst_36673__$1);
var state_36698__$1 = (function (){var statearr_36720 = state_36698;
(statearr_36720[(21)] = inst_36674);

(statearr_36720[(20)] = inst_36673__$1);

return statearr_36720;
})();
if(cljs.core.truth_(inst_36675)){
var statearr_36721_36800 = state_36698__$1;
(statearr_36721_36800[(1)] = (41));

} else {
var statearr_36722_36801 = state_36698__$1;
(statearr_36722_36801[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (33))){
var state_36698__$1 = state_36698;
var statearr_36723_36802 = state_36698__$1;
(statearr_36723_36802[(2)] = false);

(statearr_36723_36802[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (13))){
var inst_36571 = (state_36698[(22)]);
var inst_36575 = cljs.core.chunk_first.call(null,inst_36571);
var inst_36576 = cljs.core.chunk_rest.call(null,inst_36571);
var inst_36577 = cljs.core.count.call(null,inst_36575);
var inst_36558 = inst_36576;
var inst_36559 = inst_36575;
var inst_36560 = inst_36577;
var inst_36561 = (0);
var state_36698__$1 = (function (){var statearr_36724 = state_36698;
(statearr_36724[(7)] = inst_36561);

(statearr_36724[(8)] = inst_36560);

(statearr_36724[(9)] = inst_36559);

(statearr_36724[(10)] = inst_36558);

return statearr_36724;
})();
var statearr_36725_36803 = state_36698__$1;
(statearr_36725_36803[(2)] = null);

(statearr_36725_36803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (22))){
var inst_36611 = (state_36698[(19)]);
var inst_36619 = (state_36698[(23)]);
var inst_36615 = (state_36698[(24)]);
var inst_36614 = (state_36698[(25)]);
var inst_36614__$1 = (state_36698[(2)]);
var inst_36615__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36614__$1);
var inst_36616 = (function (){var all_files = inst_36611;
var res_SINGLEQUOTE_ = inst_36614__$1;
var res = inst_36615__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36611,inst_36619,inst_36615,inst_36614,inst_36614__$1,inst_36615__$1,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36540_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36540_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36611,inst_36619,inst_36615,inst_36614,inst_36614__$1,inst_36615__$1,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36617 = cljs.core.filter.call(null,inst_36616,inst_36614__$1);
var inst_36618 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36619__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36618);
var inst_36620 = cljs.core.not_empty.call(null,inst_36619__$1);
var state_36698__$1 = (function (){var statearr_36726 = state_36698;
(statearr_36726[(26)] = inst_36617);

(statearr_36726[(23)] = inst_36619__$1);

(statearr_36726[(24)] = inst_36615__$1);

(statearr_36726[(25)] = inst_36614__$1);

return statearr_36726;
})();
if(cljs.core.truth_(inst_36620)){
var statearr_36727_36804 = state_36698__$1;
(statearr_36727_36804[(1)] = (23));

} else {
var statearr_36728_36805 = state_36698__$1;
(statearr_36728_36805[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (36))){
var state_36698__$1 = state_36698;
var statearr_36729_36806 = state_36698__$1;
(statearr_36729_36806[(2)] = false);

(statearr_36729_36806[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (41))){
var inst_36673 = (state_36698[(20)]);
var inst_36677 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36678 = cljs.core.map.call(null,inst_36677,inst_36673);
var inst_36679 = cljs.core.pr_str.call(null,inst_36678);
var inst_36680 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36679)].join('');
var inst_36681 = figwheel.client.utils.log.call(null,inst_36680);
var state_36698__$1 = state_36698;
var statearr_36730_36807 = state_36698__$1;
(statearr_36730_36807[(2)] = inst_36681);

(statearr_36730_36807[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (43))){
var inst_36674 = (state_36698[(21)]);
var inst_36684 = (state_36698[(2)]);
var inst_36685 = cljs.core.not_empty.call(null,inst_36674);
var state_36698__$1 = (function (){var statearr_36731 = state_36698;
(statearr_36731[(27)] = inst_36684);

return statearr_36731;
})();
if(cljs.core.truth_(inst_36685)){
var statearr_36732_36808 = state_36698__$1;
(statearr_36732_36808[(1)] = (44));

} else {
var statearr_36733_36809 = state_36698__$1;
(statearr_36733_36809[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (29))){
var inst_36611 = (state_36698[(19)]);
var inst_36617 = (state_36698[(26)]);
var inst_36619 = (state_36698[(23)]);
var inst_36651 = (state_36698[(16)]);
var inst_36615 = (state_36698[(24)]);
var inst_36614 = (state_36698[(25)]);
var inst_36647 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36650 = (function (){var all_files = inst_36611;
var res_SINGLEQUOTE_ = inst_36614;
var res = inst_36615;
var files_not_loaded = inst_36617;
var dependencies_that_loaded = inst_36619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36651,inst_36615,inst_36614,inst_36647,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36649){
var map__36734 = p__36649;
var map__36734__$1 = ((((!((map__36734 == null)))?((((map__36734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36734):map__36734);
var namespace = cljs.core.get.call(null,map__36734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36651,inst_36615,inst_36614,inst_36647,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36651__$1 = cljs.core.group_by.call(null,inst_36650,inst_36617);
var inst_36653 = (inst_36651__$1 == null);
var inst_36654 = cljs.core.not.call(null,inst_36653);
var state_36698__$1 = (function (){var statearr_36736 = state_36698;
(statearr_36736[(28)] = inst_36647);

(statearr_36736[(16)] = inst_36651__$1);

return statearr_36736;
})();
if(inst_36654){
var statearr_36737_36810 = state_36698__$1;
(statearr_36737_36810[(1)] = (32));

} else {
var statearr_36738_36811 = state_36698__$1;
(statearr_36738_36811[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (44))){
var inst_36674 = (state_36698[(21)]);
var inst_36687 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36674);
var inst_36688 = cljs.core.pr_str.call(null,inst_36687);
var inst_36689 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36688)].join('');
var inst_36690 = figwheel.client.utils.log.call(null,inst_36689);
var state_36698__$1 = state_36698;
var statearr_36739_36812 = state_36698__$1;
(statearr_36739_36812[(2)] = inst_36690);

(statearr_36739_36812[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (6))){
var inst_36592 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
var statearr_36740_36813 = state_36698__$1;
(statearr_36740_36813[(2)] = inst_36592);

(statearr_36740_36813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (28))){
var inst_36617 = (state_36698[(26)]);
var inst_36644 = (state_36698[(2)]);
var inst_36645 = cljs.core.not_empty.call(null,inst_36617);
var state_36698__$1 = (function (){var statearr_36741 = state_36698;
(statearr_36741[(29)] = inst_36644);

return statearr_36741;
})();
if(cljs.core.truth_(inst_36645)){
var statearr_36742_36814 = state_36698__$1;
(statearr_36742_36814[(1)] = (29));

} else {
var statearr_36743_36815 = state_36698__$1;
(statearr_36743_36815[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (25))){
var inst_36615 = (state_36698[(24)]);
var inst_36631 = (state_36698[(2)]);
var inst_36632 = cljs.core.not_empty.call(null,inst_36615);
var state_36698__$1 = (function (){var statearr_36744 = state_36698;
(statearr_36744[(30)] = inst_36631);

return statearr_36744;
})();
if(cljs.core.truth_(inst_36632)){
var statearr_36745_36816 = state_36698__$1;
(statearr_36745_36816[(1)] = (26));

} else {
var statearr_36746_36817 = state_36698__$1;
(statearr_36746_36817[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (34))){
var inst_36667 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
if(cljs.core.truth_(inst_36667)){
var statearr_36747_36818 = state_36698__$1;
(statearr_36747_36818[(1)] = (38));

} else {
var statearr_36748_36819 = state_36698__$1;
(statearr_36748_36819[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (17))){
var state_36698__$1 = state_36698;
var statearr_36749_36820 = state_36698__$1;
(statearr_36749_36820[(2)] = recompile_dependents);

(statearr_36749_36820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (3))){
var state_36698__$1 = state_36698;
var statearr_36750_36821 = state_36698__$1;
(statearr_36750_36821[(2)] = null);

(statearr_36750_36821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (12))){
var inst_36588 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
var statearr_36751_36822 = state_36698__$1;
(statearr_36751_36822[(2)] = inst_36588);

(statearr_36751_36822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (2))){
var inst_36550 = (state_36698[(13)]);
var inst_36557 = cljs.core.seq.call(null,inst_36550);
var inst_36558 = inst_36557;
var inst_36559 = null;
var inst_36560 = (0);
var inst_36561 = (0);
var state_36698__$1 = (function (){var statearr_36752 = state_36698;
(statearr_36752[(7)] = inst_36561);

(statearr_36752[(8)] = inst_36560);

(statearr_36752[(9)] = inst_36559);

(statearr_36752[(10)] = inst_36558);

return statearr_36752;
})();
var statearr_36753_36823 = state_36698__$1;
(statearr_36753_36823[(2)] = null);

(statearr_36753_36823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (23))){
var inst_36611 = (state_36698[(19)]);
var inst_36617 = (state_36698[(26)]);
var inst_36619 = (state_36698[(23)]);
var inst_36615 = (state_36698[(24)]);
var inst_36614 = (state_36698[(25)]);
var inst_36622 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36624 = (function (){var all_files = inst_36611;
var res_SINGLEQUOTE_ = inst_36614;
var res = inst_36615;
var files_not_loaded = inst_36617;
var dependencies_that_loaded = inst_36619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36615,inst_36614,inst_36622,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36623){
var map__36754 = p__36623;
var map__36754__$1 = ((((!((map__36754 == null)))?((((map__36754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36754):map__36754);
var request_url = cljs.core.get.call(null,map__36754__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36615,inst_36614,inst_36622,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36625 = cljs.core.reverse.call(null,inst_36619);
var inst_36626 = cljs.core.map.call(null,inst_36624,inst_36625);
var inst_36627 = cljs.core.pr_str.call(null,inst_36626);
var inst_36628 = figwheel.client.utils.log.call(null,inst_36627);
var state_36698__$1 = (function (){var statearr_36756 = state_36698;
(statearr_36756[(31)] = inst_36622);

return statearr_36756;
})();
var statearr_36757_36824 = state_36698__$1;
(statearr_36757_36824[(2)] = inst_36628);

(statearr_36757_36824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (35))){
var state_36698__$1 = state_36698;
var statearr_36758_36825 = state_36698__$1;
(statearr_36758_36825[(2)] = true);

(statearr_36758_36825[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (19))){
var inst_36601 = (state_36698[(12)]);
var inst_36607 = figwheel.client.file_reloading.expand_files.call(null,inst_36601);
var state_36698__$1 = state_36698;
var statearr_36759_36826 = state_36698__$1;
(statearr_36759_36826[(2)] = inst_36607);

(statearr_36759_36826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (11))){
var state_36698__$1 = state_36698;
var statearr_36760_36827 = state_36698__$1;
(statearr_36760_36827[(2)] = null);

(statearr_36760_36827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (9))){
var inst_36590 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
var statearr_36761_36828 = state_36698__$1;
(statearr_36761_36828[(2)] = inst_36590);

(statearr_36761_36828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (5))){
var inst_36561 = (state_36698[(7)]);
var inst_36560 = (state_36698[(8)]);
var inst_36563 = (inst_36561 < inst_36560);
var inst_36564 = inst_36563;
var state_36698__$1 = state_36698;
if(cljs.core.truth_(inst_36564)){
var statearr_36762_36829 = state_36698__$1;
(statearr_36762_36829[(1)] = (7));

} else {
var statearr_36763_36830 = state_36698__$1;
(statearr_36763_36830[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (14))){
var inst_36571 = (state_36698[(22)]);
var inst_36580 = cljs.core.first.call(null,inst_36571);
var inst_36581 = figwheel.client.file_reloading.eval_body.call(null,inst_36580,opts);
var inst_36582 = cljs.core.next.call(null,inst_36571);
var inst_36558 = inst_36582;
var inst_36559 = null;
var inst_36560 = (0);
var inst_36561 = (0);
var state_36698__$1 = (function (){var statearr_36764 = state_36698;
(statearr_36764[(7)] = inst_36561);

(statearr_36764[(8)] = inst_36560);

(statearr_36764[(9)] = inst_36559);

(statearr_36764[(32)] = inst_36581);

(statearr_36764[(10)] = inst_36558);

return statearr_36764;
})();
var statearr_36765_36831 = state_36698__$1;
(statearr_36765_36831[(2)] = null);

(statearr_36765_36831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (45))){
var state_36698__$1 = state_36698;
var statearr_36766_36832 = state_36698__$1;
(statearr_36766_36832[(2)] = null);

(statearr_36766_36832[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (26))){
var inst_36611 = (state_36698[(19)]);
var inst_36617 = (state_36698[(26)]);
var inst_36619 = (state_36698[(23)]);
var inst_36615 = (state_36698[(24)]);
var inst_36614 = (state_36698[(25)]);
var inst_36634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36636 = (function (){var all_files = inst_36611;
var res_SINGLEQUOTE_ = inst_36614;
var res = inst_36615;
var files_not_loaded = inst_36617;
var dependencies_that_loaded = inst_36619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36615,inst_36614,inst_36634,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36635){
var map__36767 = p__36635;
var map__36767__$1 = ((((!((map__36767 == null)))?((((map__36767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36767):map__36767);
var namespace = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36615,inst_36614,inst_36634,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36637 = cljs.core.map.call(null,inst_36636,inst_36615);
var inst_36638 = cljs.core.pr_str.call(null,inst_36637);
var inst_36639 = figwheel.client.utils.log.call(null,inst_36638);
var inst_36640 = (function (){var all_files = inst_36611;
var res_SINGLEQUOTE_ = inst_36614;
var res = inst_36615;
var files_not_loaded = inst_36617;
var dependencies_that_loaded = inst_36619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36615,inst_36614,inst_36634,inst_36636,inst_36637,inst_36638,inst_36639,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36611,inst_36617,inst_36619,inst_36615,inst_36614,inst_36634,inst_36636,inst_36637,inst_36638,inst_36639,state_val_36699,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36641 = setTimeout(inst_36640,(10));
var state_36698__$1 = (function (){var statearr_36769 = state_36698;
(statearr_36769[(33)] = inst_36639);

(statearr_36769[(34)] = inst_36634);

return statearr_36769;
})();
var statearr_36770_36833 = state_36698__$1;
(statearr_36770_36833[(2)] = inst_36641);

(statearr_36770_36833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (16))){
var state_36698__$1 = state_36698;
var statearr_36771_36834 = state_36698__$1;
(statearr_36771_36834[(2)] = reload_dependents);

(statearr_36771_36834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (38))){
var inst_36651 = (state_36698[(16)]);
var inst_36669 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36651);
var state_36698__$1 = state_36698;
var statearr_36772_36835 = state_36698__$1;
(statearr_36772_36835[(2)] = inst_36669);

(statearr_36772_36835[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (30))){
var state_36698__$1 = state_36698;
var statearr_36773_36836 = state_36698__$1;
(statearr_36773_36836[(2)] = null);

(statearr_36773_36836[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (10))){
var inst_36571 = (state_36698[(22)]);
var inst_36573 = cljs.core.chunked_seq_QMARK_.call(null,inst_36571);
var state_36698__$1 = state_36698;
if(inst_36573){
var statearr_36774_36837 = state_36698__$1;
(statearr_36774_36837[(1)] = (13));

} else {
var statearr_36775_36838 = state_36698__$1;
(statearr_36775_36838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (18))){
var inst_36605 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
if(cljs.core.truth_(inst_36605)){
var statearr_36776_36839 = state_36698__$1;
(statearr_36776_36839[(1)] = (19));

} else {
var statearr_36777_36840 = state_36698__$1;
(statearr_36777_36840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (42))){
var state_36698__$1 = state_36698;
var statearr_36778_36841 = state_36698__$1;
(statearr_36778_36841[(2)] = null);

(statearr_36778_36841[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (37))){
var inst_36664 = (state_36698[(2)]);
var state_36698__$1 = state_36698;
var statearr_36779_36842 = state_36698__$1;
(statearr_36779_36842[(2)] = inst_36664);

(statearr_36779_36842[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36699 === (8))){
var inst_36571 = (state_36698[(22)]);
var inst_36558 = (state_36698[(10)]);
var inst_36571__$1 = cljs.core.seq.call(null,inst_36558);
var state_36698__$1 = (function (){var statearr_36780 = state_36698;
(statearr_36780[(22)] = inst_36571__$1);

return statearr_36780;
})();
if(inst_36571__$1){
var statearr_36781_36843 = state_36698__$1;
(statearr_36781_36843[(1)] = (10));

} else {
var statearr_36782_36844 = state_36698__$1;
(statearr_36782_36844[(1)] = (11));

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
});})(c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30864__auto__,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0 = (function (){
var statearr_36783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36783[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__);

(statearr_36783[(1)] = (1));

return statearr_36783;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1 = (function (state_36698){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_36698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e36784){if((e36784 instanceof Object)){
var ex__30868__auto__ = e36784;
var statearr_36785_36845 = state_36698;
(statearr_36785_36845[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36846 = state_36698;
state_36698 = G__36846;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__ = function(state_36698){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1.call(this,state_36698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30954__auto__ = (function (){var statearr_36786 = f__30953__auto__.call(null);
(statearr_36786[(6)] = c__30952__auto__);

return statearr_36786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,map__36543,map__36543__$1,opts,before_jsload,on_jsload,reload_dependents,map__36544,map__36544__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36849,link){
var map__36850 = p__36849;
var map__36850__$1 = ((((!((map__36850 == null)))?((((map__36850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36850):map__36850);
var file = cljs.core.get.call(null,map__36850__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36850,map__36850__$1,file){
return (function (p1__36847_SHARP_,p2__36848_SHARP_){
if(cljs.core._EQ_.call(null,p1__36847_SHARP_,p2__36848_SHARP_)){
return p1__36847_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36850,map__36850__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36853){
var map__36854 = p__36853;
var map__36854__$1 = ((((!((map__36854 == null)))?((((map__36854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36854):map__36854);
var match_length = cljs.core.get.call(null,map__36854__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36854__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36852_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36852_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36856_SHARP_,p2__36857_SHARP_){
return cljs.core.assoc.call(null,p1__36856_SHARP_,cljs.core.get.call(null,p2__36857_SHARP_,key),p2__36857_SHARP_);
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
var loaded_f_datas_36858 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36858);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36858);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36859,p__36860){
var map__36861 = p__36859;
var map__36861__$1 = ((((!((map__36861 == null)))?((((map__36861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36861):map__36861);
var on_cssload = cljs.core.get.call(null,map__36861__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36862 = p__36860;
var map__36862__$1 = ((((!((map__36862 == null)))?((((map__36862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36862):map__36862);
var files_msg = map__36862__$1;
var files = cljs.core.get.call(null,map__36862__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1513846753235
