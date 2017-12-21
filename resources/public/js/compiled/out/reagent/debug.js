// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38504__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38505__i = 0, G__38505__a = new Array(arguments.length -  0);
while (G__38505__i < G__38505__a.length) {G__38505__a[G__38505__i] = arguments[G__38505__i + 0]; ++G__38505__i;}
  args = new cljs.core.IndexedSeq(G__38505__a,0,null);
} 
return G__38504__delegate.call(this,args);};
G__38504.cljs$lang$maxFixedArity = 0;
G__38504.cljs$lang$applyTo = (function (arglist__38506){
var args = cljs.core.seq(arglist__38506);
return G__38504__delegate(args);
});
G__38504.cljs$core$IFn$_invoke$arity$variadic = G__38504__delegate;
return G__38504;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38507__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38508__i = 0, G__38508__a = new Array(arguments.length -  0);
while (G__38508__i < G__38508__a.length) {G__38508__a[G__38508__i] = arguments[G__38508__i + 0]; ++G__38508__i;}
  args = new cljs.core.IndexedSeq(G__38508__a,0,null);
} 
return G__38507__delegate.call(this,args);};
G__38507.cljs$lang$maxFixedArity = 0;
G__38507.cljs$lang$applyTo = (function (arglist__38509){
var args = cljs.core.seq(arglist__38509);
return G__38507__delegate(args);
});
G__38507.cljs$core$IFn$_invoke$arity$variadic = G__38507__delegate;
return G__38507;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1513846756201
