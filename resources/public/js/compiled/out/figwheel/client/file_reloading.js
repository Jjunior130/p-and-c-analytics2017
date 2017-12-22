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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37925_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37925_SHARP_));
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
var seq__37926 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37927 = null;
var count__37928 = (0);
var i__37929 = (0);
while(true){
if((i__37929 < count__37928)){
var n = cljs.core._nth.call(null,chunk__37927,i__37929);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37930 = seq__37926;
var G__37931 = chunk__37927;
var G__37932 = count__37928;
var G__37933 = (i__37929 + (1));
seq__37926 = G__37930;
chunk__37927 = G__37931;
count__37928 = G__37932;
i__37929 = G__37933;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37926);
if(temp__4657__auto__){
var seq__37926__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37926__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37926__$1);
var G__37934 = cljs.core.chunk_rest.call(null,seq__37926__$1);
var G__37935 = c__28034__auto__;
var G__37936 = cljs.core.count.call(null,c__28034__auto__);
var G__37937 = (0);
seq__37926 = G__37934;
chunk__37927 = G__37935;
count__37928 = G__37936;
i__37929 = G__37937;
continue;
} else {
var n = cljs.core.first.call(null,seq__37926__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37938 = cljs.core.next.call(null,seq__37926__$1);
var G__37939 = null;
var G__37940 = (0);
var G__37941 = (0);
seq__37926 = G__37938;
chunk__37927 = G__37939;
count__37928 = G__37940;
i__37929 = G__37941;
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

var seq__37951_37959 = cljs.core.seq.call(null,deps);
var chunk__37952_37960 = null;
var count__37953_37961 = (0);
var i__37954_37962 = (0);
while(true){
if((i__37954_37962 < count__37953_37961)){
var dep_37963 = cljs.core._nth.call(null,chunk__37952_37960,i__37954_37962);
topo_sort_helper_STAR_.call(null,dep_37963,(depth + (1)),state);

var G__37964 = seq__37951_37959;
var G__37965 = chunk__37952_37960;
var G__37966 = count__37953_37961;
var G__37967 = (i__37954_37962 + (1));
seq__37951_37959 = G__37964;
chunk__37952_37960 = G__37965;
count__37953_37961 = G__37966;
i__37954_37962 = G__37967;
continue;
} else {
var temp__4657__auto___37968 = cljs.core.seq.call(null,seq__37951_37959);
if(temp__4657__auto___37968){
var seq__37951_37969__$1 = temp__4657__auto___37968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37951_37969__$1)){
var c__28034__auto___37970 = cljs.core.chunk_first.call(null,seq__37951_37969__$1);
var G__37971 = cljs.core.chunk_rest.call(null,seq__37951_37969__$1);
var G__37972 = c__28034__auto___37970;
var G__37973 = cljs.core.count.call(null,c__28034__auto___37970);
var G__37974 = (0);
seq__37951_37959 = G__37971;
chunk__37952_37960 = G__37972;
count__37953_37961 = G__37973;
i__37954_37962 = G__37974;
continue;
} else {
var dep_37975 = cljs.core.first.call(null,seq__37951_37969__$1);
topo_sort_helper_STAR_.call(null,dep_37975,(depth + (1)),state);

var G__37976 = cljs.core.next.call(null,seq__37951_37969__$1);
var G__37977 = null;
var G__37978 = (0);
var G__37979 = (0);
seq__37951_37959 = G__37976;
chunk__37952_37960 = G__37977;
count__37953_37961 = G__37978;
i__37954_37962 = G__37979;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37955){
var vec__37956 = p__37955;
var seq__37957 = cljs.core.seq.call(null,vec__37956);
var first__37958 = cljs.core.first.call(null,seq__37957);
var seq__37957__$1 = cljs.core.next.call(null,seq__37957);
var x = first__37958;
var xs = seq__37957__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37956,seq__37957,first__37958,seq__37957__$1,x,xs,get_deps__$1){
return (function (p1__37942_SHARP_){
return clojure.set.difference.call(null,p1__37942_SHARP_,x);
});})(vec__37956,seq__37957,first__37958,seq__37957__$1,x,xs,get_deps__$1))
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
var seq__37980 = cljs.core.seq.call(null,provides);
var chunk__37981 = null;
var count__37982 = (0);
var i__37983 = (0);
while(true){
if((i__37983 < count__37982)){
var prov = cljs.core._nth.call(null,chunk__37981,i__37983);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37984_37992 = cljs.core.seq.call(null,requires);
var chunk__37985_37993 = null;
var count__37986_37994 = (0);
var i__37987_37995 = (0);
while(true){
if((i__37987_37995 < count__37986_37994)){
var req_37996 = cljs.core._nth.call(null,chunk__37985_37993,i__37987_37995);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37996,prov);

var G__37997 = seq__37984_37992;
var G__37998 = chunk__37985_37993;
var G__37999 = count__37986_37994;
var G__38000 = (i__37987_37995 + (1));
seq__37984_37992 = G__37997;
chunk__37985_37993 = G__37998;
count__37986_37994 = G__37999;
i__37987_37995 = G__38000;
continue;
} else {
var temp__4657__auto___38001 = cljs.core.seq.call(null,seq__37984_37992);
if(temp__4657__auto___38001){
var seq__37984_38002__$1 = temp__4657__auto___38001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37984_38002__$1)){
var c__28034__auto___38003 = cljs.core.chunk_first.call(null,seq__37984_38002__$1);
var G__38004 = cljs.core.chunk_rest.call(null,seq__37984_38002__$1);
var G__38005 = c__28034__auto___38003;
var G__38006 = cljs.core.count.call(null,c__28034__auto___38003);
var G__38007 = (0);
seq__37984_37992 = G__38004;
chunk__37985_37993 = G__38005;
count__37986_37994 = G__38006;
i__37987_37995 = G__38007;
continue;
} else {
var req_38008 = cljs.core.first.call(null,seq__37984_38002__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38008,prov);

var G__38009 = cljs.core.next.call(null,seq__37984_38002__$1);
var G__38010 = null;
var G__38011 = (0);
var G__38012 = (0);
seq__37984_37992 = G__38009;
chunk__37985_37993 = G__38010;
count__37986_37994 = G__38011;
i__37987_37995 = G__38012;
continue;
}
} else {
}
}
break;
}

var G__38013 = seq__37980;
var G__38014 = chunk__37981;
var G__38015 = count__37982;
var G__38016 = (i__37983 + (1));
seq__37980 = G__38013;
chunk__37981 = G__38014;
count__37982 = G__38015;
i__37983 = G__38016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37980);
if(temp__4657__auto__){
var seq__37980__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37980__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37980__$1);
var G__38017 = cljs.core.chunk_rest.call(null,seq__37980__$1);
var G__38018 = c__28034__auto__;
var G__38019 = cljs.core.count.call(null,c__28034__auto__);
var G__38020 = (0);
seq__37980 = G__38017;
chunk__37981 = G__38018;
count__37982 = G__38019;
i__37983 = G__38020;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37980__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37988_38021 = cljs.core.seq.call(null,requires);
var chunk__37989_38022 = null;
var count__37990_38023 = (0);
var i__37991_38024 = (0);
while(true){
if((i__37991_38024 < count__37990_38023)){
var req_38025 = cljs.core._nth.call(null,chunk__37989_38022,i__37991_38024);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38025,prov);

var G__38026 = seq__37988_38021;
var G__38027 = chunk__37989_38022;
var G__38028 = count__37990_38023;
var G__38029 = (i__37991_38024 + (1));
seq__37988_38021 = G__38026;
chunk__37989_38022 = G__38027;
count__37990_38023 = G__38028;
i__37991_38024 = G__38029;
continue;
} else {
var temp__4657__auto___38030__$1 = cljs.core.seq.call(null,seq__37988_38021);
if(temp__4657__auto___38030__$1){
var seq__37988_38031__$1 = temp__4657__auto___38030__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37988_38031__$1)){
var c__28034__auto___38032 = cljs.core.chunk_first.call(null,seq__37988_38031__$1);
var G__38033 = cljs.core.chunk_rest.call(null,seq__37988_38031__$1);
var G__38034 = c__28034__auto___38032;
var G__38035 = cljs.core.count.call(null,c__28034__auto___38032);
var G__38036 = (0);
seq__37988_38021 = G__38033;
chunk__37989_38022 = G__38034;
count__37990_38023 = G__38035;
i__37991_38024 = G__38036;
continue;
} else {
var req_38037 = cljs.core.first.call(null,seq__37988_38031__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38037,prov);

var G__38038 = cljs.core.next.call(null,seq__37988_38031__$1);
var G__38039 = null;
var G__38040 = (0);
var G__38041 = (0);
seq__37988_38021 = G__38038;
chunk__37989_38022 = G__38039;
count__37990_38023 = G__38040;
i__37991_38024 = G__38041;
continue;
}
} else {
}
}
break;
}

var G__38042 = cljs.core.next.call(null,seq__37980__$1);
var G__38043 = null;
var G__38044 = (0);
var G__38045 = (0);
seq__37980 = G__38042;
chunk__37981 = G__38043;
count__37982 = G__38044;
i__37983 = G__38045;
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
var seq__38046_38050 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38047_38051 = null;
var count__38048_38052 = (0);
var i__38049_38053 = (0);
while(true){
if((i__38049_38053 < count__38048_38052)){
var ns_38054 = cljs.core._nth.call(null,chunk__38047_38051,i__38049_38053);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38054);

var G__38055 = seq__38046_38050;
var G__38056 = chunk__38047_38051;
var G__38057 = count__38048_38052;
var G__38058 = (i__38049_38053 + (1));
seq__38046_38050 = G__38055;
chunk__38047_38051 = G__38056;
count__38048_38052 = G__38057;
i__38049_38053 = G__38058;
continue;
} else {
var temp__4657__auto___38059 = cljs.core.seq.call(null,seq__38046_38050);
if(temp__4657__auto___38059){
var seq__38046_38060__$1 = temp__4657__auto___38059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38046_38060__$1)){
var c__28034__auto___38061 = cljs.core.chunk_first.call(null,seq__38046_38060__$1);
var G__38062 = cljs.core.chunk_rest.call(null,seq__38046_38060__$1);
var G__38063 = c__28034__auto___38061;
var G__38064 = cljs.core.count.call(null,c__28034__auto___38061);
var G__38065 = (0);
seq__38046_38050 = G__38062;
chunk__38047_38051 = G__38063;
count__38048_38052 = G__38064;
i__38049_38053 = G__38065;
continue;
} else {
var ns_38066 = cljs.core.first.call(null,seq__38046_38060__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38066);

var G__38067 = cljs.core.next.call(null,seq__38046_38060__$1);
var G__38068 = null;
var G__38069 = (0);
var G__38070 = (0);
seq__38046_38050 = G__38067;
chunk__38047_38051 = G__38068;
count__38048_38052 = G__38069;
i__38049_38053 = G__38070;
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
var G__38071__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38072__i = 0, G__38072__a = new Array(arguments.length -  0);
while (G__38072__i < G__38072__a.length) {G__38072__a[G__38072__i] = arguments[G__38072__i + 0]; ++G__38072__i;}
  args = new cljs.core.IndexedSeq(G__38072__a,0,null);
} 
return G__38071__delegate.call(this,args);};
G__38071.cljs$lang$maxFixedArity = 0;
G__38071.cljs$lang$applyTo = (function (arglist__38073){
var args = cljs.core.seq(arglist__38073);
return G__38071__delegate(args);
});
G__38071.cljs$core$IFn$_invoke$arity$variadic = G__38071__delegate;
return G__38071;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__38074_SHARP_,p2__38075_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38074_SHARP_)].join('')),p2__38075_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__38076_SHARP_,p2__38077_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38076_SHARP_)].join(''),p2__38077_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38078 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38078.addCallback(((function (G__38078){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38078))
);

G__38078.addErrback(((function (G__38078){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38078))
);

return G__38078;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38079 = cljs.core._EQ_;
var expr__38080 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38079.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38080))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__38079,expr__38080){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__38079,expr__38080))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__38079,expr__38080){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38082){if((e38082 instanceof Error)){
var e = e38082;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38082;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__38079,expr__38080))
} else {
if(cljs.core.truth_(pred__38079.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38080))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__38079.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__38080))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__38079.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38080))){
return ((function (pred__38079,expr__38080){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38083){if((e38083 instanceof Error)){
var e = e38083;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38083;

}
}})());
});
;})(pred__38079,expr__38080))
} else {
return ((function (pred__38079,expr__38080){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38079,expr__38080))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38084,callback){
var map__38085 = p__38084;
var map__38085__$1 = ((((!((map__38085 == null)))?((((map__38085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38085):map__38085);
var file_msg = map__38085__$1;
var request_url = cljs.core.get.call(null,map__38085__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38085,map__38085__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38085,map__38085__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__){
return (function (state_38109){
var state_val_38110 = (state_38109[(1)]);
if((state_val_38110 === (7))){
var inst_38105 = (state_38109[(2)]);
var state_38109__$1 = state_38109;
var statearr_38111_38128 = state_38109__$1;
(statearr_38111_38128[(2)] = inst_38105);

(statearr_38111_38128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (1))){
var state_38109__$1 = state_38109;
var statearr_38112_38129 = state_38109__$1;
(statearr_38112_38129[(2)] = null);

(statearr_38112_38129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (4))){
var inst_38089 = (state_38109[(7)]);
var inst_38089__$1 = (state_38109[(2)]);
var state_38109__$1 = (function (){var statearr_38113 = state_38109;
(statearr_38113[(7)] = inst_38089__$1);

return statearr_38113;
})();
if(cljs.core.truth_(inst_38089__$1)){
var statearr_38114_38130 = state_38109__$1;
(statearr_38114_38130[(1)] = (5));

} else {
var statearr_38115_38131 = state_38109__$1;
(statearr_38115_38131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (6))){
var state_38109__$1 = state_38109;
var statearr_38116_38132 = state_38109__$1;
(statearr_38116_38132[(2)] = null);

(statearr_38116_38132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (3))){
var inst_38107 = (state_38109[(2)]);
var state_38109__$1 = state_38109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38109__$1,inst_38107);
} else {
if((state_val_38110 === (2))){
var state_38109__$1 = state_38109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38109__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38110 === (11))){
var inst_38101 = (state_38109[(2)]);
var state_38109__$1 = (function (){var statearr_38117 = state_38109;
(statearr_38117[(8)] = inst_38101);

return statearr_38117;
})();
var statearr_38118_38133 = state_38109__$1;
(statearr_38118_38133[(2)] = null);

(statearr_38118_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (9))){
var inst_38093 = (state_38109[(9)]);
var inst_38095 = (state_38109[(10)]);
var inst_38097 = inst_38095.call(null,inst_38093);
var state_38109__$1 = state_38109;
var statearr_38119_38134 = state_38109__$1;
(statearr_38119_38134[(2)] = inst_38097);

(statearr_38119_38134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (5))){
var inst_38089 = (state_38109[(7)]);
var inst_38091 = figwheel.client.file_reloading.blocking_load.call(null,inst_38089);
var state_38109__$1 = state_38109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38109__$1,(8),inst_38091);
} else {
if((state_val_38110 === (10))){
var inst_38093 = (state_38109[(9)]);
var inst_38099 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38093);
var state_38109__$1 = state_38109;
var statearr_38120_38135 = state_38109__$1;
(statearr_38120_38135[(2)] = inst_38099);

(statearr_38120_38135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38110 === (8))){
var inst_38089 = (state_38109[(7)]);
var inst_38095 = (state_38109[(10)]);
var inst_38093 = (state_38109[(2)]);
var inst_38094 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38095__$1 = cljs.core.get.call(null,inst_38094,inst_38089);
var state_38109__$1 = (function (){var statearr_38121 = state_38109;
(statearr_38121[(9)] = inst_38093);

(statearr_38121[(10)] = inst_38095__$1);

return statearr_38121;
})();
if(cljs.core.truth_(inst_38095__$1)){
var statearr_38122_38136 = state_38109__$1;
(statearr_38122_38136[(1)] = (9));

} else {
var statearr_38123_38137 = state_38109__$1;
(statearr_38123_38137[(1)] = (10));

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
});})(c__29992__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29972__auto__ = null;
var figwheel$client$file_reloading$state_machine__29972__auto____0 = (function (){
var statearr_38124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38124[(0)] = figwheel$client$file_reloading$state_machine__29972__auto__);

(statearr_38124[(1)] = (1));

return statearr_38124;
});
var figwheel$client$file_reloading$state_machine__29972__auto____1 = (function (state_38109){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_38109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e38125){if((e38125 instanceof Object)){
var ex__29975__auto__ = e38125;
var statearr_38126_38138 = state_38109;
(statearr_38126_38138[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38139 = state_38109;
state_38109 = G__38139;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29972__auto__ = function(state_38109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29972__auto____1.call(this,state_38109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29972__auto____0;
figwheel$client$file_reloading$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29972__auto____1;
return figwheel$client$file_reloading$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__))
})();
var state__29994__auto__ = (function (){var statearr_38127 = f__29993__auto__.call(null);
(statearr_38127[(6)] = c__29992__auto__);

return statearr_38127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__))
);

return c__29992__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38140,callback){
var map__38141 = p__38140;
var map__38141__$1 = ((((!((map__38141 == null)))?((((map__38141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38141):map__38141);
var file_msg = map__38141__$1;
var namespace = cljs.core.get.call(null,map__38141__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38141,map__38141__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38141,map__38141__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38143){
var map__38144 = p__38143;
var map__38144__$1 = ((((!((map__38144 == null)))?((((map__38144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38144):map__38144);
var file_msg = map__38144__$1;
var namespace = cljs.core.get.call(null,map__38144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38146){
var map__38147 = p__38146;
var map__38147__$1 = ((((!((map__38147 == null)))?((((map__38147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38147):map__38147);
var file_msg = map__38147__$1;
var namespace = cljs.core.get.call(null,map__38147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38149,callback){
var map__38150 = p__38149;
var map__38150__$1 = ((((!((map__38150 == null)))?((((map__38150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38150):map__38150);
var file_msg = map__38150__$1;
var request_url = cljs.core.get.call(null,map__38150__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29992__auto___38200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___38200,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___38200,out){
return (function (state_38185){
var state_val_38186 = (state_38185[(1)]);
if((state_val_38186 === (1))){
var inst_38159 = cljs.core.seq.call(null,files);
var inst_38160 = cljs.core.first.call(null,inst_38159);
var inst_38161 = cljs.core.next.call(null,inst_38159);
var inst_38162 = files;
var state_38185__$1 = (function (){var statearr_38187 = state_38185;
(statearr_38187[(7)] = inst_38160);

(statearr_38187[(8)] = inst_38161);

(statearr_38187[(9)] = inst_38162);

return statearr_38187;
})();
var statearr_38188_38201 = state_38185__$1;
(statearr_38188_38201[(2)] = null);

(statearr_38188_38201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (2))){
var inst_38168 = (state_38185[(10)]);
var inst_38162 = (state_38185[(9)]);
var inst_38167 = cljs.core.seq.call(null,inst_38162);
var inst_38168__$1 = cljs.core.first.call(null,inst_38167);
var inst_38169 = cljs.core.next.call(null,inst_38167);
var inst_38170 = (inst_38168__$1 == null);
var inst_38171 = cljs.core.not.call(null,inst_38170);
var state_38185__$1 = (function (){var statearr_38189 = state_38185;
(statearr_38189[(10)] = inst_38168__$1);

(statearr_38189[(11)] = inst_38169);

return statearr_38189;
})();
if(inst_38171){
var statearr_38190_38202 = state_38185__$1;
(statearr_38190_38202[(1)] = (4));

} else {
var statearr_38191_38203 = state_38185__$1;
(statearr_38191_38203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (3))){
var inst_38183 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38185__$1,inst_38183);
} else {
if((state_val_38186 === (4))){
var inst_38168 = (state_38185[(10)]);
var inst_38173 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38168);
var state_38185__$1 = state_38185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38185__$1,(7),inst_38173);
} else {
if((state_val_38186 === (5))){
var inst_38179 = cljs.core.async.close_BANG_.call(null,out);
var state_38185__$1 = state_38185;
var statearr_38192_38204 = state_38185__$1;
(statearr_38192_38204[(2)] = inst_38179);

(statearr_38192_38204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (6))){
var inst_38181 = (state_38185[(2)]);
var state_38185__$1 = state_38185;
var statearr_38193_38205 = state_38185__$1;
(statearr_38193_38205[(2)] = inst_38181);

(statearr_38193_38205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38186 === (7))){
var inst_38169 = (state_38185[(11)]);
var inst_38175 = (state_38185[(2)]);
var inst_38176 = cljs.core.async.put_BANG_.call(null,out,inst_38175);
var inst_38162 = inst_38169;
var state_38185__$1 = (function (){var statearr_38194 = state_38185;
(statearr_38194[(12)] = inst_38176);

(statearr_38194[(9)] = inst_38162);

return statearr_38194;
})();
var statearr_38195_38206 = state_38185__$1;
(statearr_38195_38206[(2)] = null);

(statearr_38195_38206[(1)] = (2));


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
});})(c__29992__auto___38200,out))
;
return ((function (switch__29971__auto__,c__29992__auto___38200,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto____0 = (function (){
var statearr_38196 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38196[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto__);

(statearr_38196[(1)] = (1));

return statearr_38196;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto____1 = (function (state_38185){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_38185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e38197){if((e38197 instanceof Object)){
var ex__29975__auto__ = e38197;
var statearr_38198_38207 = state_38185;
(statearr_38198_38207[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38208 = state_38185;
state_38185 = G__38208;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto__ = function(state_38185){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto____1.call(this,state_38185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___38200,out))
})();
var state__29994__auto__ = (function (){var statearr_38199 = f__29993__auto__.call(null);
(statearr_38199[(6)] = c__29992__auto___38200);

return statearr_38199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___38200,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38209,opts){
var map__38210 = p__38209;
var map__38210__$1 = ((((!((map__38210 == null)))?((((map__38210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38210):map__38210);
var eval_body = cljs.core.get.call(null,map__38210__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38212){var e = e38212;
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
return (function (p1__38213_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38213_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38214){
var vec__38215 = p__38214;
var k = cljs.core.nth.call(null,vec__38215,(0),null);
var v = cljs.core.nth.call(null,vec__38215,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38218){
var vec__38219 = p__38218;
var k = cljs.core.nth.call(null,vec__38219,(0),null);
var v = cljs.core.nth.call(null,vec__38219,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38225,p__38226){
var map__38227 = p__38225;
var map__38227__$1 = ((((!((map__38227 == null)))?((((map__38227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38227):map__38227);
var opts = map__38227__$1;
var before_jsload = cljs.core.get.call(null,map__38227__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38227__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38227__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38228 = p__38226;
var map__38228__$1 = ((((!((map__38228 == null)))?((((map__38228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38228):map__38228);
var msg = map__38228__$1;
var files = cljs.core.get.call(null,map__38228__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38228__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38228__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38382){
var state_val_38383 = (state_38382[(1)]);
if((state_val_38383 === (7))){
var inst_38244 = (state_38382[(7)]);
var inst_38242 = (state_38382[(8)]);
var inst_38245 = (state_38382[(9)]);
var inst_38243 = (state_38382[(10)]);
var inst_38250 = cljs.core._nth.call(null,inst_38243,inst_38245);
var inst_38251 = figwheel.client.file_reloading.eval_body.call(null,inst_38250,opts);
var inst_38252 = (inst_38245 + (1));
var tmp38384 = inst_38244;
var tmp38385 = inst_38242;
var tmp38386 = inst_38243;
var inst_38242__$1 = tmp38385;
var inst_38243__$1 = tmp38386;
var inst_38244__$1 = tmp38384;
var inst_38245__$1 = inst_38252;
var state_38382__$1 = (function (){var statearr_38387 = state_38382;
(statearr_38387[(7)] = inst_38244__$1);

(statearr_38387[(8)] = inst_38242__$1);

(statearr_38387[(11)] = inst_38251);

(statearr_38387[(9)] = inst_38245__$1);

(statearr_38387[(10)] = inst_38243__$1);

return statearr_38387;
})();
var statearr_38388_38471 = state_38382__$1;
(statearr_38388_38471[(2)] = null);

(statearr_38388_38471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (20))){
var inst_38285 = (state_38382[(12)]);
var inst_38293 = figwheel.client.file_reloading.sort_files.call(null,inst_38285);
var state_38382__$1 = state_38382;
var statearr_38389_38472 = state_38382__$1;
(statearr_38389_38472[(2)] = inst_38293);

(statearr_38389_38472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (27))){
var state_38382__$1 = state_38382;
var statearr_38390_38473 = state_38382__$1;
(statearr_38390_38473[(2)] = null);

(statearr_38390_38473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (1))){
var inst_38234 = (state_38382[(13)]);
var inst_38231 = before_jsload.call(null,files);
var inst_38232 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38233 = (function (){return ((function (inst_38234,inst_38231,inst_38232,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38222_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38222_SHARP_);
});
;})(inst_38234,inst_38231,inst_38232,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38234__$1 = cljs.core.filter.call(null,inst_38233,files);
var inst_38235 = cljs.core.not_empty.call(null,inst_38234__$1);
var state_38382__$1 = (function (){var statearr_38391 = state_38382;
(statearr_38391[(13)] = inst_38234__$1);

(statearr_38391[(14)] = inst_38231);

(statearr_38391[(15)] = inst_38232);

return statearr_38391;
})();
if(cljs.core.truth_(inst_38235)){
var statearr_38392_38474 = state_38382__$1;
(statearr_38392_38474[(1)] = (2));

} else {
var statearr_38393_38475 = state_38382__$1;
(statearr_38393_38475[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (24))){
var state_38382__$1 = state_38382;
var statearr_38394_38476 = state_38382__$1;
(statearr_38394_38476[(2)] = null);

(statearr_38394_38476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (39))){
var inst_38335 = (state_38382[(16)]);
var state_38382__$1 = state_38382;
var statearr_38395_38477 = state_38382__$1;
(statearr_38395_38477[(2)] = inst_38335);

(statearr_38395_38477[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (46))){
var inst_38377 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
var statearr_38396_38478 = state_38382__$1;
(statearr_38396_38478[(2)] = inst_38377);

(statearr_38396_38478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (4))){
var inst_38279 = (state_38382[(2)]);
var inst_38280 = cljs.core.List.EMPTY;
var inst_38281 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38280);
var inst_38282 = (function (){return ((function (inst_38279,inst_38280,inst_38281,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38223_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38223_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38223_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38223_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_38279,inst_38280,inst_38281,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38283 = cljs.core.filter.call(null,inst_38282,files);
var inst_38284 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38285 = cljs.core.concat.call(null,inst_38283,inst_38284);
var state_38382__$1 = (function (){var statearr_38397 = state_38382;
(statearr_38397[(17)] = inst_38281);

(statearr_38397[(18)] = inst_38279);

(statearr_38397[(12)] = inst_38285);

return statearr_38397;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38398_38479 = state_38382__$1;
(statearr_38398_38479[(1)] = (16));

} else {
var statearr_38399_38480 = state_38382__$1;
(statearr_38399_38480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (15))){
var inst_38269 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
var statearr_38400_38481 = state_38382__$1;
(statearr_38400_38481[(2)] = inst_38269);

(statearr_38400_38481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (21))){
var inst_38295 = (state_38382[(19)]);
var inst_38295__$1 = (state_38382[(2)]);
var inst_38296 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38295__$1);
var state_38382__$1 = (function (){var statearr_38401 = state_38382;
(statearr_38401[(19)] = inst_38295__$1);

return statearr_38401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38382__$1,(22),inst_38296);
} else {
if((state_val_38383 === (31))){
var inst_38380 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38382__$1,inst_38380);
} else {
if((state_val_38383 === (32))){
var inst_38335 = (state_38382[(16)]);
var inst_38340 = inst_38335.cljs$lang$protocol_mask$partition0$;
var inst_38341 = (inst_38340 & (64));
var inst_38342 = inst_38335.cljs$core$ISeq$;
var inst_38343 = (cljs.core.PROTOCOL_SENTINEL === inst_38342);
var inst_38344 = (inst_38341) || (inst_38343);
var state_38382__$1 = state_38382;
if(cljs.core.truth_(inst_38344)){
var statearr_38402_38482 = state_38382__$1;
(statearr_38402_38482[(1)] = (35));

} else {
var statearr_38403_38483 = state_38382__$1;
(statearr_38403_38483[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (40))){
var inst_38357 = (state_38382[(20)]);
var inst_38356 = (state_38382[(2)]);
var inst_38357__$1 = cljs.core.get.call(null,inst_38356,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38358 = cljs.core.get.call(null,inst_38356,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38359 = cljs.core.not_empty.call(null,inst_38357__$1);
var state_38382__$1 = (function (){var statearr_38404 = state_38382;
(statearr_38404[(21)] = inst_38358);

(statearr_38404[(20)] = inst_38357__$1);

return statearr_38404;
})();
if(cljs.core.truth_(inst_38359)){
var statearr_38405_38484 = state_38382__$1;
(statearr_38405_38484[(1)] = (41));

} else {
var statearr_38406_38485 = state_38382__$1;
(statearr_38406_38485[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (33))){
var state_38382__$1 = state_38382;
var statearr_38407_38486 = state_38382__$1;
(statearr_38407_38486[(2)] = false);

(statearr_38407_38486[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (13))){
var inst_38255 = (state_38382[(22)]);
var inst_38259 = cljs.core.chunk_first.call(null,inst_38255);
var inst_38260 = cljs.core.chunk_rest.call(null,inst_38255);
var inst_38261 = cljs.core.count.call(null,inst_38259);
var inst_38242 = inst_38260;
var inst_38243 = inst_38259;
var inst_38244 = inst_38261;
var inst_38245 = (0);
var state_38382__$1 = (function (){var statearr_38408 = state_38382;
(statearr_38408[(7)] = inst_38244);

(statearr_38408[(8)] = inst_38242);

(statearr_38408[(9)] = inst_38245);

(statearr_38408[(10)] = inst_38243);

return statearr_38408;
})();
var statearr_38409_38487 = state_38382__$1;
(statearr_38409_38487[(2)] = null);

(statearr_38409_38487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (22))){
var inst_38299 = (state_38382[(23)]);
var inst_38298 = (state_38382[(24)]);
var inst_38295 = (state_38382[(19)]);
var inst_38303 = (state_38382[(25)]);
var inst_38298__$1 = (state_38382[(2)]);
var inst_38299__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38298__$1);
var inst_38300 = (function (){var all_files = inst_38295;
var res_SINGLEQUOTE_ = inst_38298__$1;
var res = inst_38299__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38299,inst_38298,inst_38295,inst_38303,inst_38298__$1,inst_38299__$1,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38224_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38224_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38299,inst_38298,inst_38295,inst_38303,inst_38298__$1,inst_38299__$1,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38301 = cljs.core.filter.call(null,inst_38300,inst_38298__$1);
var inst_38302 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38303__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38302);
var inst_38304 = cljs.core.not_empty.call(null,inst_38303__$1);
var state_38382__$1 = (function (){var statearr_38410 = state_38382;
(statearr_38410[(23)] = inst_38299__$1);

(statearr_38410[(24)] = inst_38298__$1);

(statearr_38410[(25)] = inst_38303__$1);

(statearr_38410[(26)] = inst_38301);

return statearr_38410;
})();
if(cljs.core.truth_(inst_38304)){
var statearr_38411_38488 = state_38382__$1;
(statearr_38411_38488[(1)] = (23));

} else {
var statearr_38412_38489 = state_38382__$1;
(statearr_38412_38489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (36))){
var state_38382__$1 = state_38382;
var statearr_38413_38490 = state_38382__$1;
(statearr_38413_38490[(2)] = false);

(statearr_38413_38490[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (41))){
var inst_38357 = (state_38382[(20)]);
var inst_38361 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38362 = cljs.core.map.call(null,inst_38361,inst_38357);
var inst_38363 = cljs.core.pr_str.call(null,inst_38362);
var inst_38364 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38363)].join('');
var inst_38365 = figwheel.client.utils.log.call(null,inst_38364);
var state_38382__$1 = state_38382;
var statearr_38414_38491 = state_38382__$1;
(statearr_38414_38491[(2)] = inst_38365);

(statearr_38414_38491[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (43))){
var inst_38358 = (state_38382[(21)]);
var inst_38368 = (state_38382[(2)]);
var inst_38369 = cljs.core.not_empty.call(null,inst_38358);
var state_38382__$1 = (function (){var statearr_38415 = state_38382;
(statearr_38415[(27)] = inst_38368);

return statearr_38415;
})();
if(cljs.core.truth_(inst_38369)){
var statearr_38416_38492 = state_38382__$1;
(statearr_38416_38492[(1)] = (44));

} else {
var statearr_38417_38493 = state_38382__$1;
(statearr_38417_38493[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (29))){
var inst_38335 = (state_38382[(16)]);
var inst_38299 = (state_38382[(23)]);
var inst_38298 = (state_38382[(24)]);
var inst_38295 = (state_38382[(19)]);
var inst_38303 = (state_38382[(25)]);
var inst_38301 = (state_38382[(26)]);
var inst_38331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38334 = (function (){var all_files = inst_38295;
var res_SINGLEQUOTE_ = inst_38298;
var res = inst_38299;
var files_not_loaded = inst_38301;
var dependencies_that_loaded = inst_38303;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38335,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38331,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38333){
var map__38418 = p__38333;
var map__38418__$1 = ((((!((map__38418 == null)))?((((map__38418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38418):map__38418);
var namespace = cljs.core.get.call(null,map__38418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38335,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38331,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38335__$1 = cljs.core.group_by.call(null,inst_38334,inst_38301);
var inst_38337 = (inst_38335__$1 == null);
var inst_38338 = cljs.core.not.call(null,inst_38337);
var state_38382__$1 = (function (){var statearr_38420 = state_38382;
(statearr_38420[(16)] = inst_38335__$1);

(statearr_38420[(28)] = inst_38331);

return statearr_38420;
})();
if(inst_38338){
var statearr_38421_38494 = state_38382__$1;
(statearr_38421_38494[(1)] = (32));

} else {
var statearr_38422_38495 = state_38382__$1;
(statearr_38422_38495[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (44))){
var inst_38358 = (state_38382[(21)]);
var inst_38371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38358);
var inst_38372 = cljs.core.pr_str.call(null,inst_38371);
var inst_38373 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38372)].join('');
var inst_38374 = figwheel.client.utils.log.call(null,inst_38373);
var state_38382__$1 = state_38382;
var statearr_38423_38496 = state_38382__$1;
(statearr_38423_38496[(2)] = inst_38374);

(statearr_38423_38496[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (6))){
var inst_38276 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
var statearr_38424_38497 = state_38382__$1;
(statearr_38424_38497[(2)] = inst_38276);

(statearr_38424_38497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (28))){
var inst_38301 = (state_38382[(26)]);
var inst_38328 = (state_38382[(2)]);
var inst_38329 = cljs.core.not_empty.call(null,inst_38301);
var state_38382__$1 = (function (){var statearr_38425 = state_38382;
(statearr_38425[(29)] = inst_38328);

return statearr_38425;
})();
if(cljs.core.truth_(inst_38329)){
var statearr_38426_38498 = state_38382__$1;
(statearr_38426_38498[(1)] = (29));

} else {
var statearr_38427_38499 = state_38382__$1;
(statearr_38427_38499[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (25))){
var inst_38299 = (state_38382[(23)]);
var inst_38315 = (state_38382[(2)]);
var inst_38316 = cljs.core.not_empty.call(null,inst_38299);
var state_38382__$1 = (function (){var statearr_38428 = state_38382;
(statearr_38428[(30)] = inst_38315);

return statearr_38428;
})();
if(cljs.core.truth_(inst_38316)){
var statearr_38429_38500 = state_38382__$1;
(statearr_38429_38500[(1)] = (26));

} else {
var statearr_38430_38501 = state_38382__$1;
(statearr_38430_38501[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (34))){
var inst_38351 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
if(cljs.core.truth_(inst_38351)){
var statearr_38431_38502 = state_38382__$1;
(statearr_38431_38502[(1)] = (38));

} else {
var statearr_38432_38503 = state_38382__$1;
(statearr_38432_38503[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (17))){
var state_38382__$1 = state_38382;
var statearr_38433_38504 = state_38382__$1;
(statearr_38433_38504[(2)] = recompile_dependents);

(statearr_38433_38504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (3))){
var state_38382__$1 = state_38382;
var statearr_38434_38505 = state_38382__$1;
(statearr_38434_38505[(2)] = null);

(statearr_38434_38505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (12))){
var inst_38272 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
var statearr_38435_38506 = state_38382__$1;
(statearr_38435_38506[(2)] = inst_38272);

(statearr_38435_38506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (2))){
var inst_38234 = (state_38382[(13)]);
var inst_38241 = cljs.core.seq.call(null,inst_38234);
var inst_38242 = inst_38241;
var inst_38243 = null;
var inst_38244 = (0);
var inst_38245 = (0);
var state_38382__$1 = (function (){var statearr_38436 = state_38382;
(statearr_38436[(7)] = inst_38244);

(statearr_38436[(8)] = inst_38242);

(statearr_38436[(9)] = inst_38245);

(statearr_38436[(10)] = inst_38243);

return statearr_38436;
})();
var statearr_38437_38507 = state_38382__$1;
(statearr_38437_38507[(2)] = null);

(statearr_38437_38507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (23))){
var inst_38299 = (state_38382[(23)]);
var inst_38298 = (state_38382[(24)]);
var inst_38295 = (state_38382[(19)]);
var inst_38303 = (state_38382[(25)]);
var inst_38301 = (state_38382[(26)]);
var inst_38306 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38308 = (function (){var all_files = inst_38295;
var res_SINGLEQUOTE_ = inst_38298;
var res = inst_38299;
var files_not_loaded = inst_38301;
var dependencies_that_loaded = inst_38303;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38306,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38307){
var map__38438 = p__38307;
var map__38438__$1 = ((((!((map__38438 == null)))?((((map__38438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38438):map__38438);
var request_url = cljs.core.get.call(null,map__38438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38306,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38309 = cljs.core.reverse.call(null,inst_38303);
var inst_38310 = cljs.core.map.call(null,inst_38308,inst_38309);
var inst_38311 = cljs.core.pr_str.call(null,inst_38310);
var inst_38312 = figwheel.client.utils.log.call(null,inst_38311);
var state_38382__$1 = (function (){var statearr_38440 = state_38382;
(statearr_38440[(31)] = inst_38306);

return statearr_38440;
})();
var statearr_38441_38508 = state_38382__$1;
(statearr_38441_38508[(2)] = inst_38312);

(statearr_38441_38508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (35))){
var state_38382__$1 = state_38382;
var statearr_38442_38509 = state_38382__$1;
(statearr_38442_38509[(2)] = true);

(statearr_38442_38509[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (19))){
var inst_38285 = (state_38382[(12)]);
var inst_38291 = figwheel.client.file_reloading.expand_files.call(null,inst_38285);
var state_38382__$1 = state_38382;
var statearr_38443_38510 = state_38382__$1;
(statearr_38443_38510[(2)] = inst_38291);

(statearr_38443_38510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (11))){
var state_38382__$1 = state_38382;
var statearr_38444_38511 = state_38382__$1;
(statearr_38444_38511[(2)] = null);

(statearr_38444_38511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (9))){
var inst_38274 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
var statearr_38445_38512 = state_38382__$1;
(statearr_38445_38512[(2)] = inst_38274);

(statearr_38445_38512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (5))){
var inst_38244 = (state_38382[(7)]);
var inst_38245 = (state_38382[(9)]);
var inst_38247 = (inst_38245 < inst_38244);
var inst_38248 = inst_38247;
var state_38382__$1 = state_38382;
if(cljs.core.truth_(inst_38248)){
var statearr_38446_38513 = state_38382__$1;
(statearr_38446_38513[(1)] = (7));

} else {
var statearr_38447_38514 = state_38382__$1;
(statearr_38447_38514[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (14))){
var inst_38255 = (state_38382[(22)]);
var inst_38264 = cljs.core.first.call(null,inst_38255);
var inst_38265 = figwheel.client.file_reloading.eval_body.call(null,inst_38264,opts);
var inst_38266 = cljs.core.next.call(null,inst_38255);
var inst_38242 = inst_38266;
var inst_38243 = null;
var inst_38244 = (0);
var inst_38245 = (0);
var state_38382__$1 = (function (){var statearr_38448 = state_38382;
(statearr_38448[(7)] = inst_38244);

(statearr_38448[(8)] = inst_38242);

(statearr_38448[(9)] = inst_38245);

(statearr_38448[(32)] = inst_38265);

(statearr_38448[(10)] = inst_38243);

return statearr_38448;
})();
var statearr_38449_38515 = state_38382__$1;
(statearr_38449_38515[(2)] = null);

(statearr_38449_38515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (45))){
var state_38382__$1 = state_38382;
var statearr_38450_38516 = state_38382__$1;
(statearr_38450_38516[(2)] = null);

(statearr_38450_38516[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (26))){
var inst_38299 = (state_38382[(23)]);
var inst_38298 = (state_38382[(24)]);
var inst_38295 = (state_38382[(19)]);
var inst_38303 = (state_38382[(25)]);
var inst_38301 = (state_38382[(26)]);
var inst_38318 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38320 = (function (){var all_files = inst_38295;
var res_SINGLEQUOTE_ = inst_38298;
var res = inst_38299;
var files_not_loaded = inst_38301;
var dependencies_that_loaded = inst_38303;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38318,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38319){
var map__38451 = p__38319;
var map__38451__$1 = ((((!((map__38451 == null)))?((((map__38451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38451):map__38451);
var namespace = cljs.core.get.call(null,map__38451__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38318,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38321 = cljs.core.map.call(null,inst_38320,inst_38299);
var inst_38322 = cljs.core.pr_str.call(null,inst_38321);
var inst_38323 = figwheel.client.utils.log.call(null,inst_38322);
var inst_38324 = (function (){var all_files = inst_38295;
var res_SINGLEQUOTE_ = inst_38298;
var res = inst_38299;
var files_not_loaded = inst_38301;
var dependencies_that_loaded = inst_38303;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38318,inst_38320,inst_38321,inst_38322,inst_38323,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38299,inst_38298,inst_38295,inst_38303,inst_38301,inst_38318,inst_38320,inst_38321,inst_38322,inst_38323,state_val_38383,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38325 = setTimeout(inst_38324,(10));
var state_38382__$1 = (function (){var statearr_38453 = state_38382;
(statearr_38453[(33)] = inst_38323);

(statearr_38453[(34)] = inst_38318);

return statearr_38453;
})();
var statearr_38454_38517 = state_38382__$1;
(statearr_38454_38517[(2)] = inst_38325);

(statearr_38454_38517[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (16))){
var state_38382__$1 = state_38382;
var statearr_38455_38518 = state_38382__$1;
(statearr_38455_38518[(2)] = reload_dependents);

(statearr_38455_38518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (38))){
var inst_38335 = (state_38382[(16)]);
var inst_38353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38335);
var state_38382__$1 = state_38382;
var statearr_38456_38519 = state_38382__$1;
(statearr_38456_38519[(2)] = inst_38353);

(statearr_38456_38519[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (30))){
var state_38382__$1 = state_38382;
var statearr_38457_38520 = state_38382__$1;
(statearr_38457_38520[(2)] = null);

(statearr_38457_38520[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (10))){
var inst_38255 = (state_38382[(22)]);
var inst_38257 = cljs.core.chunked_seq_QMARK_.call(null,inst_38255);
var state_38382__$1 = state_38382;
if(inst_38257){
var statearr_38458_38521 = state_38382__$1;
(statearr_38458_38521[(1)] = (13));

} else {
var statearr_38459_38522 = state_38382__$1;
(statearr_38459_38522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (18))){
var inst_38289 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
if(cljs.core.truth_(inst_38289)){
var statearr_38460_38523 = state_38382__$1;
(statearr_38460_38523[(1)] = (19));

} else {
var statearr_38461_38524 = state_38382__$1;
(statearr_38461_38524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (42))){
var state_38382__$1 = state_38382;
var statearr_38462_38525 = state_38382__$1;
(statearr_38462_38525[(2)] = null);

(statearr_38462_38525[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (37))){
var inst_38348 = (state_38382[(2)]);
var state_38382__$1 = state_38382;
var statearr_38463_38526 = state_38382__$1;
(statearr_38463_38526[(2)] = inst_38348);

(statearr_38463_38526[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38383 === (8))){
var inst_38242 = (state_38382[(8)]);
var inst_38255 = (state_38382[(22)]);
var inst_38255__$1 = cljs.core.seq.call(null,inst_38242);
var state_38382__$1 = (function (){var statearr_38464 = state_38382;
(statearr_38464[(22)] = inst_38255__$1);

return statearr_38464;
})();
if(inst_38255__$1){
var statearr_38465_38527 = state_38382__$1;
(statearr_38465_38527[(1)] = (10));

} else {
var statearr_38466_38528 = state_38382__$1;
(statearr_38466_38528[(1)] = (11));

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
});})(c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29971__auto__,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto____0 = (function (){
var statearr_38467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38467[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto__);

(statearr_38467[(1)] = (1));

return statearr_38467;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto____1 = (function (state_38382){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_38382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e38468){if((e38468 instanceof Object)){
var ex__29975__auto__ = e38468;
var statearr_38469_38529 = state_38382;
(statearr_38469_38529[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38530 = state_38382;
state_38382 = G__38530;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto__ = function(state_38382){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto____1.call(this,state_38382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29994__auto__ = (function (){var statearr_38470 = f__29993__auto__.call(null);
(statearr_38470[(6)] = c__29992__auto__);

return statearr_38470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__,map__38227,map__38227__$1,opts,before_jsload,on_jsload,reload_dependents,map__38228,map__38228__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29992__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38533,link){
var map__38534 = p__38533;
var map__38534__$1 = ((((!((map__38534 == null)))?((((map__38534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38534):map__38534);
var file = cljs.core.get.call(null,map__38534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38534,map__38534__$1,file){
return (function (p1__38531_SHARP_,p2__38532_SHARP_){
if(cljs.core._EQ_.call(null,p1__38531_SHARP_,p2__38532_SHARP_)){
return p1__38531_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38534,map__38534__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38537){
var map__38538 = p__38537;
var map__38538__$1 = ((((!((map__38538 == null)))?((((map__38538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38538):map__38538);
var match_length = cljs.core.get.call(null,map__38538__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38538__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38536_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38536_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38540_SHARP_,p2__38541_SHARP_){
return cljs.core.assoc.call(null,p1__38540_SHARP_,cljs.core.get.call(null,p2__38541_SHARP_,key),p2__38541_SHARP_);
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
var loaded_f_datas_38542 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38542);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38542);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38543,p__38544){
var map__38545 = p__38543;
var map__38545__$1 = ((((!((map__38545 == null)))?((((map__38545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38545):map__38545);
var on_cssload = cljs.core.get.call(null,map__38545__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38546 = p__38544;
var map__38546__$1 = ((((!((map__38546 == null)))?((((map__38546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38546):map__38546);
var files_msg = map__38546__$1;
var files = cljs.core.get.call(null,map__38546__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1513978680054
