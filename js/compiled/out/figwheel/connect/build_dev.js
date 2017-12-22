// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('p_and_c_analytics2017.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__49556__delegate = function (x){
if(cljs.core.truth_(p_and_c_analytics2017.core.mount_root)){
return cljs.core.apply.call(null,p_and_c_analytics2017.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'p-and-c-analytics2017.core/mount-root' is missing");
}
};
var G__49556 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__49557__i = 0, G__49557__a = new Array(arguments.length -  0);
while (G__49557__i < G__49557__a.length) {G__49557__a[G__49557__i] = arguments[G__49557__i + 0]; ++G__49557__i;}
  x = new cljs.core.IndexedSeq(G__49557__a,0,null);
} 
return G__49556__delegate.call(this,x);};
G__49556.cljs$lang$maxFixedArity = 0;
G__49556.cljs$lang$applyTo = (function (arglist__49558){
var x = cljs.core.seq(arglist__49558);
return G__49556__delegate(x);
});
G__49556.cljs$core$IFn$_invoke$arity$variadic = G__49556__delegate;
return G__49556;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1513980023662
