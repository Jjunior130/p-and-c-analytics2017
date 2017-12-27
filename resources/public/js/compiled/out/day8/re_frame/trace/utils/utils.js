// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.utils.utils');
goog.require('cljs.core');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame.trace.utils.utils.dissoc_in = (function day8$re_frame$trace$utils$utils$dissoc_in(m,p__42858){
var vec__42859 = p__42858;
var seq__42860 = cljs.core.seq.call(null,vec__42859);
var first__42861 = cljs.core.first.call(null,seq__42860);
var seq__42860__$1 = cljs.core.next.call(null,seq__42860);
var k = first__42861;
var ks = seq__42860__$1;
var keys = vec__42859;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = day8.re_frame.trace.utils.utils.dissoc_in.call(null,nextmap,ks);
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

//# sourceMappingURL=utils.js.map?rel=1514349648572
