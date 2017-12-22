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
var G__55887__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55888__i = 0, G__55888__a = new Array(arguments.length -  0);
while (G__55888__i < G__55888__a.length) {G__55888__a[G__55888__i] = arguments[G__55888__i + 0]; ++G__55888__i;}
  args = new cljs.core.IndexedSeq(G__55888__a,0,null);
} 
return G__55887__delegate.call(this,args);};
G__55887.cljs$lang$maxFixedArity = 0;
G__55887.cljs$lang$applyTo = (function (arglist__55889){
var args = cljs.core.seq(arglist__55889);
return G__55887__delegate(args);
});
G__55887.cljs$core$IFn$_invoke$arity$variadic = G__55887__delegate;
return G__55887;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__55890__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55891__i = 0, G__55891__a = new Array(arguments.length -  0);
while (G__55891__i < G__55891__a.length) {G__55891__a[G__55891__i] = arguments[G__55891__i + 0]; ++G__55891__i;}
  args = new cljs.core.IndexedSeq(G__55891__a,0,null);
} 
return G__55890__delegate.call(this,args);};
G__55890.cljs$lang$maxFixedArity = 0;
G__55890.cljs$lang$applyTo = (function (arglist__55892){
var args = cljs.core.seq(arglist__55892);
return G__55890__delegate(args);
});
G__55890.cljs$core$IFn$_invoke$arity$variadic = G__55890__delegate;
return G__55890;
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

//# sourceMappingURL=debug.js.map?rel=1513855133910
