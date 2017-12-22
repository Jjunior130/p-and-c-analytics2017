// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, mranderson047.re-frame.v0v10v2.re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
mranderson047.re_frame.v0v10v2.re_frame.loggers.console = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$console(var_args){
var args__28371__auto__ = [];
var len__28364__auto___43124 = arguments.length;
var i__28365__auto___43125 = (0);
while(true){
if((i__28365__auto___43125 < len__28364__auto___43124)){
args__28371__auto__.push((arguments[i__28365__auto___43125]));

var G__43126 = (i__28365__auto___43125 + (1));
i__28365__auto___43125 = G__43126;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers),level)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["re-frame: log called with unknown level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('')),"\n","(contains? (clojure.core/deref loggers) level)"].join('')));
}

return cljs.core.apply.call(null,level.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers)),args);
});

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$lang$applyTo = (function (seq43122){
var G__43123 = cljs.core.first.call(null,seq43122);
var seq43122__$1 = cljs.core.next.call(null,seq43122);
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__43123,seq43122__$1);
});

/**
 * Change the set (or a subset) of logging functions used by mranderson047.re-frame.v0v10v2.re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers)))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))"].join('')));
}

return cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by mranderson047.re-frame.v0v10v2.re-frame.
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.get_loggers = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$get_loggers(){
return cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers);
});

//# sourceMappingURL=loggers.js.map?rel=1513978687245