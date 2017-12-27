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
var G__38557__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38558__i = 0, G__38558__a = new Array(arguments.length -  0);
while (G__38558__i < G__38558__a.length) {G__38558__a[G__38558__i] = arguments[G__38558__i + 0]; ++G__38558__i;}
  args = new cljs.core.IndexedSeq(G__38558__a,0,null);
} 
return G__38557__delegate.call(this,args);};
G__38557.cljs$lang$maxFixedArity = 0;
G__38557.cljs$lang$applyTo = (function (arglist__38559){
var args = cljs.core.seq(arglist__38559);
return G__38557__delegate(args);
});
G__38557.cljs$core$IFn$_invoke$arity$variadic = G__38557__delegate;
return G__38557;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38560__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38561__i = 0, G__38561__a = new Array(arguments.length -  0);
while (G__38561__i < G__38561__a.length) {G__38561__a[G__38561__i] = arguments[G__38561__i + 0]; ++G__38561__i;}
  args = new cljs.core.IndexedSeq(G__38561__a,0,null);
} 
return G__38560__delegate.call(this,args);};
G__38560.cljs$lang$maxFixedArity = 0;
G__38560.cljs$lang$applyTo = (function (arglist__38562){
var args = cljs.core.seq(arglist__38562);
return G__38560__delegate(args);
});
G__38560.cljs$core$IFn$_invoke$arity$variadic = G__38560__delegate;
return G__38560;
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

//# sourceMappingURL=debug.js.map?rel=1514349638815
