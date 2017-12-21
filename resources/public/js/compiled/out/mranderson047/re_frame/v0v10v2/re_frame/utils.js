// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
mranderson047.re_frame.v0v10v2.re_frame.utils.dissoc_in = (function mranderson047$re_frame$v0v10v2$re_frame$utils$dissoc_in(m,p__41584){
var vec__41585 = p__41584;
var seq__41586 = cljs.core.seq.call(null,vec__41585);
var first__41587 = cljs.core.first.call(null,seq__41586);
var seq__41586__$1 = cljs.core.next.call(null,seq__41586);
var k = first__41587;
var ks = seq__41586__$1;
var keys = vec__41585;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = mranderson047.re_frame.v0v10v2.re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector = (function mranderson047$re_frame$v0v10v2$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1513846760960
