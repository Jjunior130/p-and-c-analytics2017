// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('p_and_c_analytics2017.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31863__delegate = function (x){
if(cljs.core.truth_(p_and_c_analytics2017.core.mount_root)){
return cljs.core.apply.call(null,p_and_c_analytics2017.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'p-and-c-analytics2017.core/mount-root' is missing");
}
};
var G__31863 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31864__i = 0, G__31864__a = new Array(arguments.length -  0);
while (G__31864__i < G__31864__a.length) {G__31864__a[G__31864__i] = arguments[G__31864__i + 0]; ++G__31864__i;}
  x = new cljs.core.IndexedSeq(G__31864__a,0,null);
} 
return G__31863__delegate.call(this,x);};
G__31863.cljs$lang$maxFixedArity = 0;
G__31863.cljs$lang$applyTo = (function (arglist__31865){
var x = cljs.core.seq(arglist__31865);
return G__31863__delegate(x);
});
G__31863.cljs$core$IFn$_invoke$arity$variadic = G__31863__delegate;
return G__31863;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1513976722433
