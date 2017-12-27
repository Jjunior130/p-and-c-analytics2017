// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('p_and_c_analytics2017.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50298__delegate = function (x){
if(cljs.core.truth_(p_and_c_analytics2017.core.mount_root)){
return cljs.core.apply.call(null,p_and_c_analytics2017.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'p-and-c-analytics2017.core/mount-root' is missing");
}
};
var G__50298 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__50299__i = 0, G__50299__a = new Array(arguments.length -  0);
while (G__50299__i < G__50299__a.length) {G__50299__a[G__50299__i] = arguments[G__50299__i + 0]; ++G__50299__i;}
  x = new cljs.core.IndexedSeq(G__50299__a,0,null);
} 
return G__50298__delegate.call(this,x);};
G__50298.cljs$lang$maxFixedArity = 0;
G__50298.cljs$lang$applyTo = (function (arglist__50300){
var x = cljs.core.seq(arglist__50300);
return G__50298__delegate(x);
});
G__50298.cljs$core$IFn$_invoke$arity$variadic = G__50298__delegate;
return G__50298;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1514359426627
