// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('p_and_c_analytics2017.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50800__delegate = function (x){
if(cljs.core.truth_(p_and_c_analytics2017.core.mount_root)){
return cljs.core.apply.call(null,p_and_c_analytics2017.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'p-and-c-analytics2017.core/mount-root' is missing");
}
};
var G__50800 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__50801__i = 0, G__50801__a = new Array(arguments.length -  0);
while (G__50801__i < G__50801__a.length) {G__50801__a[G__50801__i] = arguments[G__50801__i + 0]; ++G__50801__i;}
  x = new cljs.core.IndexedSeq(G__50801__a,0,null);
} 
return G__50800__delegate.call(this,x);};
G__50800.cljs$lang$maxFixedArity = 0;
G__50800.cljs$lang$applyTo = (function (arglist__50802){
var x = cljs.core.seq(arglist__50802);
return G__50800__delegate(x);
});
G__50800.cljs$core$IFn$_invoke$arity$variadic = G__50800__delegate;
return G__50800;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1514071609259
