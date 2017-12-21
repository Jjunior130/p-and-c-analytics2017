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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53622_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53622_SHARP_));
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
var seq__53623 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__53624 = null;
var count__53625 = (0);
var i__53626 = (0);
while(true){
if((i__53626 < count__53625)){
var n = cljs.core._nth.call(null,chunk__53624,i__53626);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53627 = seq__53623;
var G__53628 = chunk__53624;
var G__53629 = count__53625;
var G__53630 = (i__53626 + (1));
seq__53623 = G__53627;
chunk__53624 = G__53628;
count__53625 = G__53629;
i__53626 = G__53630;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53623);
if(temp__4657__auto__){
var seq__53623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53623__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__53623__$1);
var G__53631 = cljs.core.chunk_rest.call(null,seq__53623__$1);
var G__53632 = c__28034__auto__;
var G__53633 = cljs.core.count.call(null,c__28034__auto__);
var G__53634 = (0);
seq__53623 = G__53631;
chunk__53624 = G__53632;
count__53625 = G__53633;
i__53626 = G__53634;
continue;
} else {
var n = cljs.core.first.call(null,seq__53623__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53635 = cljs.core.next.call(null,seq__53623__$1);
var G__53636 = null;
var G__53637 = (0);
var G__53638 = (0);
seq__53623 = G__53635;
chunk__53624 = G__53636;
count__53625 = G__53637;
i__53626 = G__53638;
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

var seq__53648_53656 = cljs.core.seq.call(null,deps);
var chunk__53649_53657 = null;
var count__53650_53658 = (0);
var i__53651_53659 = (0);
while(true){
if((i__53651_53659 < count__53650_53658)){
var dep_53660 = cljs.core._nth.call(null,chunk__53649_53657,i__53651_53659);
topo_sort_helper_STAR_.call(null,dep_53660,(depth + (1)),state);

var G__53661 = seq__53648_53656;
var G__53662 = chunk__53649_53657;
var G__53663 = count__53650_53658;
var G__53664 = (i__53651_53659 + (1));
seq__53648_53656 = G__53661;
chunk__53649_53657 = G__53662;
count__53650_53658 = G__53663;
i__53651_53659 = G__53664;
continue;
} else {
var temp__4657__auto___53665 = cljs.core.seq.call(null,seq__53648_53656);
if(temp__4657__auto___53665){
var seq__53648_53666__$1 = temp__4657__auto___53665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53648_53666__$1)){
var c__28034__auto___53667 = cljs.core.chunk_first.call(null,seq__53648_53666__$1);
var G__53668 = cljs.core.chunk_rest.call(null,seq__53648_53666__$1);
var G__53669 = c__28034__auto___53667;
var G__53670 = cljs.core.count.call(null,c__28034__auto___53667);
var G__53671 = (0);
seq__53648_53656 = G__53668;
chunk__53649_53657 = G__53669;
count__53650_53658 = G__53670;
i__53651_53659 = G__53671;
continue;
} else {
var dep_53672 = cljs.core.first.call(null,seq__53648_53666__$1);
topo_sort_helper_STAR_.call(null,dep_53672,(depth + (1)),state);

var G__53673 = cljs.core.next.call(null,seq__53648_53666__$1);
var G__53674 = null;
var G__53675 = (0);
var G__53676 = (0);
seq__53648_53656 = G__53673;
chunk__53649_53657 = G__53674;
count__53650_53658 = G__53675;
i__53651_53659 = G__53676;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53652){
var vec__53653 = p__53652;
var seq__53654 = cljs.core.seq.call(null,vec__53653);
var first__53655 = cljs.core.first.call(null,seq__53654);
var seq__53654__$1 = cljs.core.next.call(null,seq__53654);
var x = first__53655;
var xs = seq__53654__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53653,seq__53654,first__53655,seq__53654__$1,x,xs,get_deps__$1){
return (function (p1__53639_SHARP_){
return clojure.set.difference.call(null,p1__53639_SHARP_,x);
});})(vec__53653,seq__53654,first__53655,seq__53654__$1,x,xs,get_deps__$1))
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
var seq__53677 = cljs.core.seq.call(null,provides);
var chunk__53678 = null;
var count__53679 = (0);
var i__53680 = (0);
while(true){
if((i__53680 < count__53679)){
var prov = cljs.core._nth.call(null,chunk__53678,i__53680);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53681_53689 = cljs.core.seq.call(null,requires);
var chunk__53682_53690 = null;
var count__53683_53691 = (0);
var i__53684_53692 = (0);
while(true){
if((i__53684_53692 < count__53683_53691)){
var req_53693 = cljs.core._nth.call(null,chunk__53682_53690,i__53684_53692);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53693,prov);

var G__53694 = seq__53681_53689;
var G__53695 = chunk__53682_53690;
var G__53696 = count__53683_53691;
var G__53697 = (i__53684_53692 + (1));
seq__53681_53689 = G__53694;
chunk__53682_53690 = G__53695;
count__53683_53691 = G__53696;
i__53684_53692 = G__53697;
continue;
} else {
var temp__4657__auto___53698 = cljs.core.seq.call(null,seq__53681_53689);
if(temp__4657__auto___53698){
var seq__53681_53699__$1 = temp__4657__auto___53698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53681_53699__$1)){
var c__28034__auto___53700 = cljs.core.chunk_first.call(null,seq__53681_53699__$1);
var G__53701 = cljs.core.chunk_rest.call(null,seq__53681_53699__$1);
var G__53702 = c__28034__auto___53700;
var G__53703 = cljs.core.count.call(null,c__28034__auto___53700);
var G__53704 = (0);
seq__53681_53689 = G__53701;
chunk__53682_53690 = G__53702;
count__53683_53691 = G__53703;
i__53684_53692 = G__53704;
continue;
} else {
var req_53705 = cljs.core.first.call(null,seq__53681_53699__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53705,prov);

var G__53706 = cljs.core.next.call(null,seq__53681_53699__$1);
var G__53707 = null;
var G__53708 = (0);
var G__53709 = (0);
seq__53681_53689 = G__53706;
chunk__53682_53690 = G__53707;
count__53683_53691 = G__53708;
i__53684_53692 = G__53709;
continue;
}
} else {
}
}
break;
}

var G__53710 = seq__53677;
var G__53711 = chunk__53678;
var G__53712 = count__53679;
var G__53713 = (i__53680 + (1));
seq__53677 = G__53710;
chunk__53678 = G__53711;
count__53679 = G__53712;
i__53680 = G__53713;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53677);
if(temp__4657__auto__){
var seq__53677__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53677__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__53677__$1);
var G__53714 = cljs.core.chunk_rest.call(null,seq__53677__$1);
var G__53715 = c__28034__auto__;
var G__53716 = cljs.core.count.call(null,c__28034__auto__);
var G__53717 = (0);
seq__53677 = G__53714;
chunk__53678 = G__53715;
count__53679 = G__53716;
i__53680 = G__53717;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53677__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53685_53718 = cljs.core.seq.call(null,requires);
var chunk__53686_53719 = null;
var count__53687_53720 = (0);
var i__53688_53721 = (0);
while(true){
if((i__53688_53721 < count__53687_53720)){
var req_53722 = cljs.core._nth.call(null,chunk__53686_53719,i__53688_53721);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53722,prov);

var G__53723 = seq__53685_53718;
var G__53724 = chunk__53686_53719;
var G__53725 = count__53687_53720;
var G__53726 = (i__53688_53721 + (1));
seq__53685_53718 = G__53723;
chunk__53686_53719 = G__53724;
count__53687_53720 = G__53725;
i__53688_53721 = G__53726;
continue;
} else {
var temp__4657__auto___53727__$1 = cljs.core.seq.call(null,seq__53685_53718);
if(temp__4657__auto___53727__$1){
var seq__53685_53728__$1 = temp__4657__auto___53727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53685_53728__$1)){
var c__28034__auto___53729 = cljs.core.chunk_first.call(null,seq__53685_53728__$1);
var G__53730 = cljs.core.chunk_rest.call(null,seq__53685_53728__$1);
var G__53731 = c__28034__auto___53729;
var G__53732 = cljs.core.count.call(null,c__28034__auto___53729);
var G__53733 = (0);
seq__53685_53718 = G__53730;
chunk__53686_53719 = G__53731;
count__53687_53720 = G__53732;
i__53688_53721 = G__53733;
continue;
} else {
var req_53734 = cljs.core.first.call(null,seq__53685_53728__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53734,prov);

var G__53735 = cljs.core.next.call(null,seq__53685_53728__$1);
var G__53736 = null;
var G__53737 = (0);
var G__53738 = (0);
seq__53685_53718 = G__53735;
chunk__53686_53719 = G__53736;
count__53687_53720 = G__53737;
i__53688_53721 = G__53738;
continue;
}
} else {
}
}
break;
}

var G__53739 = cljs.core.next.call(null,seq__53677__$1);
var G__53740 = null;
var G__53741 = (0);
var G__53742 = (0);
seq__53677 = G__53739;
chunk__53678 = G__53740;
count__53679 = G__53741;
i__53680 = G__53742;
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
var seq__53743_53747 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53744_53748 = null;
var count__53745_53749 = (0);
var i__53746_53750 = (0);
while(true){
if((i__53746_53750 < count__53745_53749)){
var ns_53751 = cljs.core._nth.call(null,chunk__53744_53748,i__53746_53750);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53751);

var G__53752 = seq__53743_53747;
var G__53753 = chunk__53744_53748;
var G__53754 = count__53745_53749;
var G__53755 = (i__53746_53750 + (1));
seq__53743_53747 = G__53752;
chunk__53744_53748 = G__53753;
count__53745_53749 = G__53754;
i__53746_53750 = G__53755;
continue;
} else {
var temp__4657__auto___53756 = cljs.core.seq.call(null,seq__53743_53747);
if(temp__4657__auto___53756){
var seq__53743_53757__$1 = temp__4657__auto___53756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53743_53757__$1)){
var c__28034__auto___53758 = cljs.core.chunk_first.call(null,seq__53743_53757__$1);
var G__53759 = cljs.core.chunk_rest.call(null,seq__53743_53757__$1);
var G__53760 = c__28034__auto___53758;
var G__53761 = cljs.core.count.call(null,c__28034__auto___53758);
var G__53762 = (0);
seq__53743_53747 = G__53759;
chunk__53744_53748 = G__53760;
count__53745_53749 = G__53761;
i__53746_53750 = G__53762;
continue;
} else {
var ns_53763 = cljs.core.first.call(null,seq__53743_53757__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53763);

var G__53764 = cljs.core.next.call(null,seq__53743_53757__$1);
var G__53765 = null;
var G__53766 = (0);
var G__53767 = (0);
seq__53743_53747 = G__53764;
chunk__53744_53748 = G__53765;
count__53745_53749 = G__53766;
i__53746_53750 = G__53767;
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
var G__53768__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53769__i = 0, G__53769__a = new Array(arguments.length -  0);
while (G__53769__i < G__53769__a.length) {G__53769__a[G__53769__i] = arguments[G__53769__i + 0]; ++G__53769__i;}
  args = new cljs.core.IndexedSeq(G__53769__a,0,null);
} 
return G__53768__delegate.call(this,args);};
G__53768.cljs$lang$maxFixedArity = 0;
G__53768.cljs$lang$applyTo = (function (arglist__53770){
var args = cljs.core.seq(arglist__53770);
return G__53768__delegate(args);
});
G__53768.cljs$core$IFn$_invoke$arity$variadic = G__53768__delegate;
return G__53768;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__53771_SHARP_,p2__53772_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53771_SHARP_)].join('')),p2__53772_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__53773_SHARP_,p2__53774_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53773_SHARP_)].join(''),p2__53774_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__53775 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__53775.addCallback(((function (G__53775){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__53775))
);

G__53775.addErrback(((function (G__53775){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__53775))
);

return G__53775;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53776 = cljs.core._EQ_;
var expr__53777 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53776.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53777))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__53776,expr__53777){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__53776,expr__53777))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__53776,expr__53777){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e53779){if((e53779 instanceof Error)){
var e = e53779;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53779;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__53776,expr__53777))
} else {
if(cljs.core.truth_(pred__53776.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53777))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__53776.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__53777))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__53776.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__53777))){
return ((function (pred__53776,expr__53777){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e53780){if((e53780 instanceof Error)){
var e = e53780;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53780;

}
}})());
});
;})(pred__53776,expr__53777))
} else {
return ((function (pred__53776,expr__53777){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53776,expr__53777))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53781,callback){
var map__53782 = p__53781;
var map__53782__$1 = ((((!((map__53782 == null)))?((((map__53782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53782):map__53782);
var file_msg = map__53782__$1;
var request_url = cljs.core.get.call(null,map__53782__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__53782,map__53782__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53782,map__53782__$1,file_msg,request_url))
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
return (function (state_53806){
var state_val_53807 = (state_53806[(1)]);
if((state_val_53807 === (7))){
var inst_53802 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
var statearr_53808_53825 = state_53806__$1;
(statearr_53808_53825[(2)] = inst_53802);

(statearr_53808_53825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (1))){
var state_53806__$1 = state_53806;
var statearr_53809_53826 = state_53806__$1;
(statearr_53809_53826[(2)] = null);

(statearr_53809_53826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (4))){
var inst_53786 = (state_53806[(7)]);
var inst_53786__$1 = (state_53806[(2)]);
var state_53806__$1 = (function (){var statearr_53810 = state_53806;
(statearr_53810[(7)] = inst_53786__$1);

return statearr_53810;
})();
if(cljs.core.truth_(inst_53786__$1)){
var statearr_53811_53827 = state_53806__$1;
(statearr_53811_53827[(1)] = (5));

} else {
var statearr_53812_53828 = state_53806__$1;
(statearr_53812_53828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (6))){
var state_53806__$1 = state_53806;
var statearr_53813_53829 = state_53806__$1;
(statearr_53813_53829[(2)] = null);

(statearr_53813_53829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (3))){
var inst_53804 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53806__$1,inst_53804);
} else {
if((state_val_53807 === (2))){
var state_53806__$1 = state_53806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53806__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53807 === (11))){
var inst_53798 = (state_53806[(2)]);
var state_53806__$1 = (function (){var statearr_53814 = state_53806;
(statearr_53814[(8)] = inst_53798);

return statearr_53814;
})();
var statearr_53815_53830 = state_53806__$1;
(statearr_53815_53830[(2)] = null);

(statearr_53815_53830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (9))){
var inst_53792 = (state_53806[(9)]);
var inst_53790 = (state_53806[(10)]);
var inst_53794 = inst_53792.call(null,inst_53790);
var state_53806__$1 = state_53806;
var statearr_53816_53831 = state_53806__$1;
(statearr_53816_53831[(2)] = inst_53794);

(statearr_53816_53831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (5))){
var inst_53786 = (state_53806[(7)]);
var inst_53788 = figwheel.client.file_reloading.blocking_load.call(null,inst_53786);
var state_53806__$1 = state_53806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53806__$1,(8),inst_53788);
} else {
if((state_val_53807 === (10))){
var inst_53790 = (state_53806[(10)]);
var inst_53796 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53790);
var state_53806__$1 = state_53806;
var statearr_53817_53832 = state_53806__$1;
(statearr_53817_53832[(2)] = inst_53796);

(statearr_53817_53832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (8))){
var inst_53792 = (state_53806[(9)]);
var inst_53786 = (state_53806[(7)]);
var inst_53790 = (state_53806[(2)]);
var inst_53791 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53792__$1 = cljs.core.get.call(null,inst_53791,inst_53786);
var state_53806__$1 = (function (){var statearr_53818 = state_53806;
(statearr_53818[(9)] = inst_53792__$1);

(statearr_53818[(10)] = inst_53790);

return statearr_53818;
})();
if(cljs.core.truth_(inst_53792__$1)){
var statearr_53819_53833 = state_53806__$1;
(statearr_53819_53833[(1)] = (9));

} else {
var statearr_53820_53834 = state_53806__$1;
(statearr_53820_53834[(1)] = (10));

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
var statearr_53821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53821[(0)] = figwheel$client$file_reloading$state_machine__30865__auto__);

(statearr_53821[(1)] = (1));

return statearr_53821;
});
var figwheel$client$file_reloading$state_machine__30865__auto____1 = (function (state_53806){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_53806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e53822){if((e53822 instanceof Object)){
var ex__30868__auto__ = e53822;
var statearr_53823_53835 = state_53806;
(statearr_53823_53835[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53836 = state_53806;
state_53806 = G__53836;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30865__auto__ = function(state_53806){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30865__auto____1.call(this,state_53806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30865__auto____0;
figwheel$client$file_reloading$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30865__auto____1;
return figwheel$client$file_reloading$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_53824 = f__30953__auto__.call(null);
(statearr_53824[(6)] = c__30952__auto__);

return statearr_53824;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53837,callback){
var map__53838 = p__53837;
var map__53838__$1 = ((((!((map__53838 == null)))?((((map__53838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53838):map__53838);
var file_msg = map__53838__$1;
var namespace = cljs.core.get.call(null,map__53838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53838,map__53838__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53838,map__53838__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__53840){
var map__53841 = p__53840;
var map__53841__$1 = ((((!((map__53841 == null)))?((((map__53841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53841):map__53841);
var file_msg = map__53841__$1;
var namespace = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53843){
var map__53844 = p__53843;
var map__53844__$1 = ((((!((map__53844 == null)))?((((map__53844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53844):map__53844);
var file_msg = map__53844__$1;
var namespace = cljs.core.get.call(null,map__53844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53846,callback){
var map__53847 = p__53846;
var map__53847__$1 = ((((!((map__53847 == null)))?((((map__53847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53847):map__53847);
var file_msg = map__53847__$1;
var request_url = cljs.core.get.call(null,map__53847__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30952__auto___53897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___53897,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___53897,out){
return (function (state_53882){
var state_val_53883 = (state_53882[(1)]);
if((state_val_53883 === (1))){
var inst_53856 = cljs.core.seq.call(null,files);
var inst_53857 = cljs.core.first.call(null,inst_53856);
var inst_53858 = cljs.core.next.call(null,inst_53856);
var inst_53859 = files;
var state_53882__$1 = (function (){var statearr_53884 = state_53882;
(statearr_53884[(7)] = inst_53859);

(statearr_53884[(8)] = inst_53857);

(statearr_53884[(9)] = inst_53858);

return statearr_53884;
})();
var statearr_53885_53898 = state_53882__$1;
(statearr_53885_53898[(2)] = null);

(statearr_53885_53898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (2))){
var inst_53859 = (state_53882[(7)]);
var inst_53865 = (state_53882[(10)]);
var inst_53864 = cljs.core.seq.call(null,inst_53859);
var inst_53865__$1 = cljs.core.first.call(null,inst_53864);
var inst_53866 = cljs.core.next.call(null,inst_53864);
var inst_53867 = (inst_53865__$1 == null);
var inst_53868 = cljs.core.not.call(null,inst_53867);
var state_53882__$1 = (function (){var statearr_53886 = state_53882;
(statearr_53886[(10)] = inst_53865__$1);

(statearr_53886[(11)] = inst_53866);

return statearr_53886;
})();
if(inst_53868){
var statearr_53887_53899 = state_53882__$1;
(statearr_53887_53899[(1)] = (4));

} else {
var statearr_53888_53900 = state_53882__$1;
(statearr_53888_53900[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (3))){
var inst_53880 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53882__$1,inst_53880);
} else {
if((state_val_53883 === (4))){
var inst_53865 = (state_53882[(10)]);
var inst_53870 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53865);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53882__$1,(7),inst_53870);
} else {
if((state_val_53883 === (5))){
var inst_53876 = cljs.core.async.close_BANG_.call(null,out);
var state_53882__$1 = state_53882;
var statearr_53889_53901 = state_53882__$1;
(statearr_53889_53901[(2)] = inst_53876);

(statearr_53889_53901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (6))){
var inst_53878 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
var statearr_53890_53902 = state_53882__$1;
(statearr_53890_53902[(2)] = inst_53878);

(statearr_53890_53902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (7))){
var inst_53866 = (state_53882[(11)]);
var inst_53872 = (state_53882[(2)]);
var inst_53873 = cljs.core.async.put_BANG_.call(null,out,inst_53872);
var inst_53859 = inst_53866;
var state_53882__$1 = (function (){var statearr_53891 = state_53882;
(statearr_53891[(7)] = inst_53859);

(statearr_53891[(12)] = inst_53873);

return statearr_53891;
})();
var statearr_53892_53903 = state_53882__$1;
(statearr_53892_53903[(2)] = null);

(statearr_53892_53903[(1)] = (2));


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
});})(c__30952__auto___53897,out))
;
return ((function (switch__30864__auto__,c__30952__auto___53897,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0 = (function (){
var statearr_53893 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53893[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__);

(statearr_53893[(1)] = (1));

return statearr_53893;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1 = (function (state_53882){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_53882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e53894){if((e53894 instanceof Object)){
var ex__30868__auto__ = e53894;
var statearr_53895_53904 = state_53882;
(statearr_53895_53904[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53905 = state_53882;
state_53882 = G__53905;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__ = function(state_53882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1.call(this,state_53882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___53897,out))
})();
var state__30954__auto__ = (function (){var statearr_53896 = f__30953__auto__.call(null);
(statearr_53896[(6)] = c__30952__auto___53897);

return statearr_53896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___53897,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53906,opts){
var map__53907 = p__53906;
var map__53907__$1 = ((((!((map__53907 == null)))?((((map__53907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53907):map__53907);
var eval_body = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e53909){var e = e53909;
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
return (function (p1__53910_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53910_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__53911){
var vec__53912 = p__53911;
var k = cljs.core.nth.call(null,vec__53912,(0),null);
var v = cljs.core.nth.call(null,vec__53912,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53915){
var vec__53916 = p__53915;
var k = cljs.core.nth.call(null,vec__53916,(0),null);
var v = cljs.core.nth.call(null,vec__53916,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53922,p__53923){
var map__53924 = p__53922;
var map__53924__$1 = ((((!((map__53924 == null)))?((((map__53924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53924):map__53924);
var opts = map__53924__$1;
var before_jsload = cljs.core.get.call(null,map__53924__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53924__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53924__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53925 = p__53923;
var map__53925__$1 = ((((!((map__53925 == null)))?((((map__53925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53925):map__53925);
var msg = map__53925__$1;
var files = cljs.core.get.call(null,map__53925__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53925__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53925__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_54079){
var state_val_54080 = (state_54079[(1)]);
if((state_val_54080 === (7))){
var inst_53941 = (state_54079[(7)]);
var inst_53939 = (state_54079[(8)]);
var inst_53942 = (state_54079[(9)]);
var inst_53940 = (state_54079[(10)]);
var inst_53947 = cljs.core._nth.call(null,inst_53940,inst_53942);
var inst_53948 = figwheel.client.file_reloading.eval_body.call(null,inst_53947,opts);
var inst_53949 = (inst_53942 + (1));
var tmp54081 = inst_53941;
var tmp54082 = inst_53939;
var tmp54083 = inst_53940;
var inst_53939__$1 = tmp54082;
var inst_53940__$1 = tmp54083;
var inst_53941__$1 = tmp54081;
var inst_53942__$1 = inst_53949;
var state_54079__$1 = (function (){var statearr_54084 = state_54079;
(statearr_54084[(7)] = inst_53941__$1);

(statearr_54084[(8)] = inst_53939__$1);

(statearr_54084[(11)] = inst_53948);

(statearr_54084[(9)] = inst_53942__$1);

(statearr_54084[(10)] = inst_53940__$1);

return statearr_54084;
})();
var statearr_54085_54168 = state_54079__$1;
(statearr_54085_54168[(2)] = null);

(statearr_54085_54168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (20))){
var inst_53982 = (state_54079[(12)]);
var inst_53990 = figwheel.client.file_reloading.sort_files.call(null,inst_53982);
var state_54079__$1 = state_54079;
var statearr_54086_54169 = state_54079__$1;
(statearr_54086_54169[(2)] = inst_53990);

(statearr_54086_54169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (27))){
var state_54079__$1 = state_54079;
var statearr_54087_54170 = state_54079__$1;
(statearr_54087_54170[(2)] = null);

(statearr_54087_54170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (1))){
var inst_53931 = (state_54079[(13)]);
var inst_53928 = before_jsload.call(null,files);
var inst_53929 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53930 = (function (){return ((function (inst_53931,inst_53928,inst_53929,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53919_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53919_SHARP_);
});
;})(inst_53931,inst_53928,inst_53929,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53931__$1 = cljs.core.filter.call(null,inst_53930,files);
var inst_53932 = cljs.core.not_empty.call(null,inst_53931__$1);
var state_54079__$1 = (function (){var statearr_54088 = state_54079;
(statearr_54088[(13)] = inst_53931__$1);

(statearr_54088[(14)] = inst_53929);

(statearr_54088[(15)] = inst_53928);

return statearr_54088;
})();
if(cljs.core.truth_(inst_53932)){
var statearr_54089_54171 = state_54079__$1;
(statearr_54089_54171[(1)] = (2));

} else {
var statearr_54090_54172 = state_54079__$1;
(statearr_54090_54172[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (24))){
var state_54079__$1 = state_54079;
var statearr_54091_54173 = state_54079__$1;
(statearr_54091_54173[(2)] = null);

(statearr_54091_54173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (39))){
var inst_54032 = (state_54079[(16)]);
var state_54079__$1 = state_54079;
var statearr_54092_54174 = state_54079__$1;
(statearr_54092_54174[(2)] = inst_54032);

(statearr_54092_54174[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (46))){
var inst_54074 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
var statearr_54093_54175 = state_54079__$1;
(statearr_54093_54175[(2)] = inst_54074);

(statearr_54093_54175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (4))){
var inst_53976 = (state_54079[(2)]);
var inst_53977 = cljs.core.List.EMPTY;
var inst_53978 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53977);
var inst_53979 = (function (){return ((function (inst_53976,inst_53977,inst_53978,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53920_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53920_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53920_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__53920_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_53976,inst_53977,inst_53978,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53980 = cljs.core.filter.call(null,inst_53979,files);
var inst_53981 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53982 = cljs.core.concat.call(null,inst_53980,inst_53981);
var state_54079__$1 = (function (){var statearr_54094 = state_54079;
(statearr_54094[(12)] = inst_53982);

(statearr_54094[(17)] = inst_53976);

(statearr_54094[(18)] = inst_53978);

return statearr_54094;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_54095_54176 = state_54079__$1;
(statearr_54095_54176[(1)] = (16));

} else {
var statearr_54096_54177 = state_54079__$1;
(statearr_54096_54177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (15))){
var inst_53966 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
var statearr_54097_54178 = state_54079__$1;
(statearr_54097_54178[(2)] = inst_53966);

(statearr_54097_54178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (21))){
var inst_53992 = (state_54079[(19)]);
var inst_53992__$1 = (state_54079[(2)]);
var inst_53993 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53992__$1);
var state_54079__$1 = (function (){var statearr_54098 = state_54079;
(statearr_54098[(19)] = inst_53992__$1);

return statearr_54098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54079__$1,(22),inst_53993);
} else {
if((state_val_54080 === (31))){
var inst_54077 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54079__$1,inst_54077);
} else {
if((state_val_54080 === (32))){
var inst_54032 = (state_54079[(16)]);
var inst_54037 = inst_54032.cljs$lang$protocol_mask$partition0$;
var inst_54038 = (inst_54037 & (64));
var inst_54039 = inst_54032.cljs$core$ISeq$;
var inst_54040 = (cljs.core.PROTOCOL_SENTINEL === inst_54039);
var inst_54041 = (inst_54038) || (inst_54040);
var state_54079__$1 = state_54079;
if(cljs.core.truth_(inst_54041)){
var statearr_54099_54179 = state_54079__$1;
(statearr_54099_54179[(1)] = (35));

} else {
var statearr_54100_54180 = state_54079__$1;
(statearr_54100_54180[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (40))){
var inst_54054 = (state_54079[(20)]);
var inst_54053 = (state_54079[(2)]);
var inst_54054__$1 = cljs.core.get.call(null,inst_54053,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_54055 = cljs.core.get.call(null,inst_54053,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_54056 = cljs.core.not_empty.call(null,inst_54054__$1);
var state_54079__$1 = (function (){var statearr_54101 = state_54079;
(statearr_54101[(21)] = inst_54055);

(statearr_54101[(20)] = inst_54054__$1);

return statearr_54101;
})();
if(cljs.core.truth_(inst_54056)){
var statearr_54102_54181 = state_54079__$1;
(statearr_54102_54181[(1)] = (41));

} else {
var statearr_54103_54182 = state_54079__$1;
(statearr_54103_54182[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (33))){
var state_54079__$1 = state_54079;
var statearr_54104_54183 = state_54079__$1;
(statearr_54104_54183[(2)] = false);

(statearr_54104_54183[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (13))){
var inst_53952 = (state_54079[(22)]);
var inst_53956 = cljs.core.chunk_first.call(null,inst_53952);
var inst_53957 = cljs.core.chunk_rest.call(null,inst_53952);
var inst_53958 = cljs.core.count.call(null,inst_53956);
var inst_53939 = inst_53957;
var inst_53940 = inst_53956;
var inst_53941 = inst_53958;
var inst_53942 = (0);
var state_54079__$1 = (function (){var statearr_54105 = state_54079;
(statearr_54105[(7)] = inst_53941);

(statearr_54105[(8)] = inst_53939);

(statearr_54105[(9)] = inst_53942);

(statearr_54105[(10)] = inst_53940);

return statearr_54105;
})();
var statearr_54106_54184 = state_54079__$1;
(statearr_54106_54184[(2)] = null);

(statearr_54106_54184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (22))){
var inst_53995 = (state_54079[(23)]);
var inst_54000 = (state_54079[(24)]);
var inst_53992 = (state_54079[(19)]);
var inst_53996 = (state_54079[(25)]);
var inst_53995__$1 = (state_54079[(2)]);
var inst_53996__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53995__$1);
var inst_53997 = (function (){var all_files = inst_53992;
var res_SINGLEQUOTE_ = inst_53995__$1;
var res = inst_53996__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53995,inst_54000,inst_53992,inst_53996,inst_53995__$1,inst_53996__$1,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53921_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53921_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53995,inst_54000,inst_53992,inst_53996,inst_53995__$1,inst_53996__$1,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53998 = cljs.core.filter.call(null,inst_53997,inst_53995__$1);
var inst_53999 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_54000__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53999);
var inst_54001 = cljs.core.not_empty.call(null,inst_54000__$1);
var state_54079__$1 = (function (){var statearr_54107 = state_54079;
(statearr_54107[(26)] = inst_53998);

(statearr_54107[(23)] = inst_53995__$1);

(statearr_54107[(24)] = inst_54000__$1);

(statearr_54107[(25)] = inst_53996__$1);

return statearr_54107;
})();
if(cljs.core.truth_(inst_54001)){
var statearr_54108_54185 = state_54079__$1;
(statearr_54108_54185[(1)] = (23));

} else {
var statearr_54109_54186 = state_54079__$1;
(statearr_54109_54186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (36))){
var state_54079__$1 = state_54079;
var statearr_54110_54187 = state_54079__$1;
(statearr_54110_54187[(2)] = false);

(statearr_54110_54187[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (41))){
var inst_54054 = (state_54079[(20)]);
var inst_54058 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_54059 = cljs.core.map.call(null,inst_54058,inst_54054);
var inst_54060 = cljs.core.pr_str.call(null,inst_54059);
var inst_54061 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54060)].join('');
var inst_54062 = figwheel.client.utils.log.call(null,inst_54061);
var state_54079__$1 = state_54079;
var statearr_54111_54188 = state_54079__$1;
(statearr_54111_54188[(2)] = inst_54062);

(statearr_54111_54188[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (43))){
var inst_54055 = (state_54079[(21)]);
var inst_54065 = (state_54079[(2)]);
var inst_54066 = cljs.core.not_empty.call(null,inst_54055);
var state_54079__$1 = (function (){var statearr_54112 = state_54079;
(statearr_54112[(27)] = inst_54065);

return statearr_54112;
})();
if(cljs.core.truth_(inst_54066)){
var statearr_54113_54189 = state_54079__$1;
(statearr_54113_54189[(1)] = (44));

} else {
var statearr_54114_54190 = state_54079__$1;
(statearr_54114_54190[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (29))){
var inst_53998 = (state_54079[(26)]);
var inst_54032 = (state_54079[(16)]);
var inst_53995 = (state_54079[(23)]);
var inst_54000 = (state_54079[(24)]);
var inst_53992 = (state_54079[(19)]);
var inst_53996 = (state_54079[(25)]);
var inst_54028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_54031 = (function (){var all_files = inst_53992;
var res_SINGLEQUOTE_ = inst_53995;
var res = inst_53996;
var files_not_loaded = inst_53998;
var dependencies_that_loaded = inst_54000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_54032,inst_53995,inst_54000,inst_53992,inst_53996,inst_54028,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54030){
var map__54115 = p__54030;
var map__54115__$1 = ((((!((map__54115 == null)))?((((map__54115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54115):map__54115);
var namespace = cljs.core.get.call(null,map__54115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_54032,inst_53995,inst_54000,inst_53992,inst_53996,inst_54028,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54032__$1 = cljs.core.group_by.call(null,inst_54031,inst_53998);
var inst_54034 = (inst_54032__$1 == null);
var inst_54035 = cljs.core.not.call(null,inst_54034);
var state_54079__$1 = (function (){var statearr_54117 = state_54079;
(statearr_54117[(28)] = inst_54028);

(statearr_54117[(16)] = inst_54032__$1);

return statearr_54117;
})();
if(inst_54035){
var statearr_54118_54191 = state_54079__$1;
(statearr_54118_54191[(1)] = (32));

} else {
var statearr_54119_54192 = state_54079__$1;
(statearr_54119_54192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (44))){
var inst_54055 = (state_54079[(21)]);
var inst_54068 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54055);
var inst_54069 = cljs.core.pr_str.call(null,inst_54068);
var inst_54070 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54069)].join('');
var inst_54071 = figwheel.client.utils.log.call(null,inst_54070);
var state_54079__$1 = state_54079;
var statearr_54120_54193 = state_54079__$1;
(statearr_54120_54193[(2)] = inst_54071);

(statearr_54120_54193[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (6))){
var inst_53973 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
var statearr_54121_54194 = state_54079__$1;
(statearr_54121_54194[(2)] = inst_53973);

(statearr_54121_54194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (28))){
var inst_53998 = (state_54079[(26)]);
var inst_54025 = (state_54079[(2)]);
var inst_54026 = cljs.core.not_empty.call(null,inst_53998);
var state_54079__$1 = (function (){var statearr_54122 = state_54079;
(statearr_54122[(29)] = inst_54025);

return statearr_54122;
})();
if(cljs.core.truth_(inst_54026)){
var statearr_54123_54195 = state_54079__$1;
(statearr_54123_54195[(1)] = (29));

} else {
var statearr_54124_54196 = state_54079__$1;
(statearr_54124_54196[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (25))){
var inst_53996 = (state_54079[(25)]);
var inst_54012 = (state_54079[(2)]);
var inst_54013 = cljs.core.not_empty.call(null,inst_53996);
var state_54079__$1 = (function (){var statearr_54125 = state_54079;
(statearr_54125[(30)] = inst_54012);

return statearr_54125;
})();
if(cljs.core.truth_(inst_54013)){
var statearr_54126_54197 = state_54079__$1;
(statearr_54126_54197[(1)] = (26));

} else {
var statearr_54127_54198 = state_54079__$1;
(statearr_54127_54198[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (34))){
var inst_54048 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
if(cljs.core.truth_(inst_54048)){
var statearr_54128_54199 = state_54079__$1;
(statearr_54128_54199[(1)] = (38));

} else {
var statearr_54129_54200 = state_54079__$1;
(statearr_54129_54200[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (17))){
var state_54079__$1 = state_54079;
var statearr_54130_54201 = state_54079__$1;
(statearr_54130_54201[(2)] = recompile_dependents);

(statearr_54130_54201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (3))){
var state_54079__$1 = state_54079;
var statearr_54131_54202 = state_54079__$1;
(statearr_54131_54202[(2)] = null);

(statearr_54131_54202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (12))){
var inst_53969 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
var statearr_54132_54203 = state_54079__$1;
(statearr_54132_54203[(2)] = inst_53969);

(statearr_54132_54203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (2))){
var inst_53931 = (state_54079[(13)]);
var inst_53938 = cljs.core.seq.call(null,inst_53931);
var inst_53939 = inst_53938;
var inst_53940 = null;
var inst_53941 = (0);
var inst_53942 = (0);
var state_54079__$1 = (function (){var statearr_54133 = state_54079;
(statearr_54133[(7)] = inst_53941);

(statearr_54133[(8)] = inst_53939);

(statearr_54133[(9)] = inst_53942);

(statearr_54133[(10)] = inst_53940);

return statearr_54133;
})();
var statearr_54134_54204 = state_54079__$1;
(statearr_54134_54204[(2)] = null);

(statearr_54134_54204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (23))){
var inst_53998 = (state_54079[(26)]);
var inst_53995 = (state_54079[(23)]);
var inst_54000 = (state_54079[(24)]);
var inst_53992 = (state_54079[(19)]);
var inst_53996 = (state_54079[(25)]);
var inst_54003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_54005 = (function (){var all_files = inst_53992;
var res_SINGLEQUOTE_ = inst_53995;
var res = inst_53996;
var files_not_loaded = inst_53998;
var dependencies_that_loaded = inst_54000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_53995,inst_54000,inst_53992,inst_53996,inst_54003,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54004){
var map__54135 = p__54004;
var map__54135__$1 = ((((!((map__54135 == null)))?((((map__54135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54135):map__54135);
var request_url = cljs.core.get.call(null,map__54135__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_53995,inst_54000,inst_53992,inst_53996,inst_54003,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54006 = cljs.core.reverse.call(null,inst_54000);
var inst_54007 = cljs.core.map.call(null,inst_54005,inst_54006);
var inst_54008 = cljs.core.pr_str.call(null,inst_54007);
var inst_54009 = figwheel.client.utils.log.call(null,inst_54008);
var state_54079__$1 = (function (){var statearr_54137 = state_54079;
(statearr_54137[(31)] = inst_54003);

return statearr_54137;
})();
var statearr_54138_54205 = state_54079__$1;
(statearr_54138_54205[(2)] = inst_54009);

(statearr_54138_54205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (35))){
var state_54079__$1 = state_54079;
var statearr_54139_54206 = state_54079__$1;
(statearr_54139_54206[(2)] = true);

(statearr_54139_54206[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (19))){
var inst_53982 = (state_54079[(12)]);
var inst_53988 = figwheel.client.file_reloading.expand_files.call(null,inst_53982);
var state_54079__$1 = state_54079;
var statearr_54140_54207 = state_54079__$1;
(statearr_54140_54207[(2)] = inst_53988);

(statearr_54140_54207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (11))){
var state_54079__$1 = state_54079;
var statearr_54141_54208 = state_54079__$1;
(statearr_54141_54208[(2)] = null);

(statearr_54141_54208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (9))){
var inst_53971 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
var statearr_54142_54209 = state_54079__$1;
(statearr_54142_54209[(2)] = inst_53971);

(statearr_54142_54209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (5))){
var inst_53941 = (state_54079[(7)]);
var inst_53942 = (state_54079[(9)]);
var inst_53944 = (inst_53942 < inst_53941);
var inst_53945 = inst_53944;
var state_54079__$1 = state_54079;
if(cljs.core.truth_(inst_53945)){
var statearr_54143_54210 = state_54079__$1;
(statearr_54143_54210[(1)] = (7));

} else {
var statearr_54144_54211 = state_54079__$1;
(statearr_54144_54211[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (14))){
var inst_53952 = (state_54079[(22)]);
var inst_53961 = cljs.core.first.call(null,inst_53952);
var inst_53962 = figwheel.client.file_reloading.eval_body.call(null,inst_53961,opts);
var inst_53963 = cljs.core.next.call(null,inst_53952);
var inst_53939 = inst_53963;
var inst_53940 = null;
var inst_53941 = (0);
var inst_53942 = (0);
var state_54079__$1 = (function (){var statearr_54145 = state_54079;
(statearr_54145[(7)] = inst_53941);

(statearr_54145[(8)] = inst_53939);

(statearr_54145[(9)] = inst_53942);

(statearr_54145[(32)] = inst_53962);

(statearr_54145[(10)] = inst_53940);

return statearr_54145;
})();
var statearr_54146_54212 = state_54079__$1;
(statearr_54146_54212[(2)] = null);

(statearr_54146_54212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (45))){
var state_54079__$1 = state_54079;
var statearr_54147_54213 = state_54079__$1;
(statearr_54147_54213[(2)] = null);

(statearr_54147_54213[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (26))){
var inst_53998 = (state_54079[(26)]);
var inst_53995 = (state_54079[(23)]);
var inst_54000 = (state_54079[(24)]);
var inst_53992 = (state_54079[(19)]);
var inst_53996 = (state_54079[(25)]);
var inst_54015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_54017 = (function (){var all_files = inst_53992;
var res_SINGLEQUOTE_ = inst_53995;
var res = inst_53996;
var files_not_loaded = inst_53998;
var dependencies_that_loaded = inst_54000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_53995,inst_54000,inst_53992,inst_53996,inst_54015,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54016){
var map__54148 = p__54016;
var map__54148__$1 = ((((!((map__54148 == null)))?((((map__54148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54148):map__54148);
var namespace = cljs.core.get.call(null,map__54148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__54148__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_53995,inst_54000,inst_53992,inst_53996,inst_54015,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54018 = cljs.core.map.call(null,inst_54017,inst_53996);
var inst_54019 = cljs.core.pr_str.call(null,inst_54018);
var inst_54020 = figwheel.client.utils.log.call(null,inst_54019);
var inst_54021 = (function (){var all_files = inst_53992;
var res_SINGLEQUOTE_ = inst_53995;
var res = inst_53996;
var files_not_loaded = inst_53998;
var dependencies_that_loaded = inst_54000;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_53995,inst_54000,inst_53992,inst_53996,inst_54015,inst_54017,inst_54018,inst_54019,inst_54020,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53998,inst_53995,inst_54000,inst_53992,inst_53996,inst_54015,inst_54017,inst_54018,inst_54019,inst_54020,state_val_54080,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54022 = setTimeout(inst_54021,(10));
var state_54079__$1 = (function (){var statearr_54150 = state_54079;
(statearr_54150[(33)] = inst_54015);

(statearr_54150[(34)] = inst_54020);

return statearr_54150;
})();
var statearr_54151_54214 = state_54079__$1;
(statearr_54151_54214[(2)] = inst_54022);

(statearr_54151_54214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (16))){
var state_54079__$1 = state_54079;
var statearr_54152_54215 = state_54079__$1;
(statearr_54152_54215[(2)] = reload_dependents);

(statearr_54152_54215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (38))){
var inst_54032 = (state_54079[(16)]);
var inst_54050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54032);
var state_54079__$1 = state_54079;
var statearr_54153_54216 = state_54079__$1;
(statearr_54153_54216[(2)] = inst_54050);

(statearr_54153_54216[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (30))){
var state_54079__$1 = state_54079;
var statearr_54154_54217 = state_54079__$1;
(statearr_54154_54217[(2)] = null);

(statearr_54154_54217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (10))){
var inst_53952 = (state_54079[(22)]);
var inst_53954 = cljs.core.chunked_seq_QMARK_.call(null,inst_53952);
var state_54079__$1 = state_54079;
if(inst_53954){
var statearr_54155_54218 = state_54079__$1;
(statearr_54155_54218[(1)] = (13));

} else {
var statearr_54156_54219 = state_54079__$1;
(statearr_54156_54219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (18))){
var inst_53986 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
if(cljs.core.truth_(inst_53986)){
var statearr_54157_54220 = state_54079__$1;
(statearr_54157_54220[(1)] = (19));

} else {
var statearr_54158_54221 = state_54079__$1;
(statearr_54158_54221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (42))){
var state_54079__$1 = state_54079;
var statearr_54159_54222 = state_54079__$1;
(statearr_54159_54222[(2)] = null);

(statearr_54159_54222[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (37))){
var inst_54045 = (state_54079[(2)]);
var state_54079__$1 = state_54079;
var statearr_54160_54223 = state_54079__$1;
(statearr_54160_54223[(2)] = inst_54045);

(statearr_54160_54223[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54080 === (8))){
var inst_53952 = (state_54079[(22)]);
var inst_53939 = (state_54079[(8)]);
var inst_53952__$1 = cljs.core.seq.call(null,inst_53939);
var state_54079__$1 = (function (){var statearr_54161 = state_54079;
(statearr_54161[(22)] = inst_53952__$1);

return statearr_54161;
})();
if(inst_53952__$1){
var statearr_54162_54224 = state_54079__$1;
(statearr_54162_54224[(1)] = (10));

} else {
var statearr_54163_54225 = state_54079__$1;
(statearr_54163_54225[(1)] = (11));

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
});})(c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30864__auto__,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0 = (function (){
var statearr_54164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54164[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__);

(statearr_54164[(1)] = (1));

return statearr_54164;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1 = (function (state_54079){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_54079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e54165){if((e54165 instanceof Object)){
var ex__30868__auto__ = e54165;
var statearr_54166_54226 = state_54079;
(statearr_54166_54226[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54227 = state_54079;
state_54079 = G__54227;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__ = function(state_54079){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1.call(this,state_54079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30954__auto__ = (function (){var statearr_54167 = f__30953__auto__.call(null);
(statearr_54167[(6)] = c__30952__auto__);

return statearr_54167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,map__53924,map__53924__$1,opts,before_jsload,on_jsload,reload_dependents,map__53925,map__53925__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__54230,link){
var map__54231 = p__54230;
var map__54231__$1 = ((((!((map__54231 == null)))?((((map__54231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54231):map__54231);
var file = cljs.core.get.call(null,map__54231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__54231,map__54231__$1,file){
return (function (p1__54228_SHARP_,p2__54229_SHARP_){
if(cljs.core._EQ_.call(null,p1__54228_SHARP_,p2__54229_SHARP_)){
return p1__54228_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__54231,map__54231__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__54234){
var map__54235 = p__54234;
var map__54235__$1 = ((((!((map__54235 == null)))?((((map__54235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54235):map__54235);
var match_length = cljs.core.get.call(null,map__54235__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__54235__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__54233_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__54233_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__54237_SHARP_,p2__54238_SHARP_){
return cljs.core.assoc.call(null,p1__54237_SHARP_,cljs.core.get.call(null,p2__54238_SHARP_,key),p2__54238_SHARP_);
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
var loaded_f_datas_54239 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_54239);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_54239);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__54240,p__54241){
var map__54242 = p__54240;
var map__54242__$1 = ((((!((map__54242 == null)))?((((map__54242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54242):map__54242);
var on_cssload = cljs.core.get.call(null,map__54242__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__54243 = p__54241;
var map__54243__$1 = ((((!((map__54243 == null)))?((((map__54243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54243):map__54243);
var files_msg = map__54243__$1;
var files = cljs.core.get.call(null,map__54243__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1513855131193
