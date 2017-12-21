// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.utils.traces');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
if(typeof day8.re_frame.trace.utils.traces.traces !== 'undefined'){
} else {
day8.re_frame.trace.utils.traces.traces = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof day8.re_frame.trace.utils.traces.total_traces !== 'undefined'){
} else {
day8.re_frame.trace.utils.traces.total_traces = reagent.core.atom.call(null,(0));
}
day8.re_frame.trace.utils.traces.log_trace_QMARK_ = (function day8$re_frame$trace$utils$traces$log_trace_QMARK_(trace){
var render_operation_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454));
var component_path = cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if(!(render_operation_QMARK_)){
return true;
} else {
return !(clojure.string.includes_QMARK_.call(null,component_path,"devtools outer"));
}
});
day8.re_frame.trace.utils.traces.disable_tracing_BANG_ = (function day8$re_frame$trace$utils$traces$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame.trace.utils.traces","cb","day8.re-frame.trace.utils.traces/cb",1682703462));
});
day8.re_frame.trace.utils.traces.enable_tracing_BANG_ = (function day8$re_frame$trace$utils$traces$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame.trace.utils.traces","cb","day8.re-frame.trace.utils.traces/cb",1682703462),(function (new_traces){
var temp__4657__auto__ = cljs.core.filter.call(null,day8.re_frame.trace.utils.traces.log_trace_QMARK_,new_traces);
if(cljs.core.truth_(temp__4657__auto__)){
var new_traces__$1 = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,day8.re_frame.trace.utils.traces.total_traces,cljs.core._PLUS_,cljs.core.count.call(null,new_traces__$1));

return cljs.core.swap_BANG_.call(null,day8.re_frame.trace.utils.traces.traces,((function (new_traces__$1,temp__4657__auto__){
return (function (existing){
var new$ = cljs.core.reduce.call(null,cljs.core.conj,existing,new_traces__$1);
var size = cljs.core.count.call(null,new$);
if(((4000) < size)){
var new2 = cljs.core.subvec.call(null,new$,(size - (2000)));
if((cljs.core.deref.call(null,day8.re_frame.trace.utils.traces.total_traces) < (20000))){
cljs.core.reset_BANG_.call(null,day8.re_frame.trace.utils.traces.total_traces,(0));

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new2);
} else {
return null;
}
} else {
return new$;
}
});})(new_traces__$1,temp__4657__auto__))
);
} else {
return null;
}
}));
});

//# sourceMappingURL=traces.js.map?rel=1513846760673
