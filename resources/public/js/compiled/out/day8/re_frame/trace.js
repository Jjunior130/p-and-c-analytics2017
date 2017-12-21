// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame.trace.panels.subvis');
goog.require('day8.re_frame.trace.panels.app_db');
goog.require('day8.re_frame.trace.styles');
goog.require('day8.re_frame.trace.components.components');
goog.require('day8.re_frame.trace.components.container');
goog.require('day8.re_frame.trace.utils.localstorage');
goog.require('day8.re_frame.trace.panels.traces');
goog.require('day8.re_frame.trace.events');
goog.require('day8.re_frame.trace.subs');
goog.require('day8.re_frame.trace.db');
goog.require('re_frame.trace');
goog.require('re_frame.db');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('goog.object');
goog.require('re_frame.interop');
goog.require('devtools.formatters.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.traces');
day8.re_frame.trace.fiber_component_path = (function day8$re_frame$trace$fiber_component_path(fiber){
var name = (function (){var G__59561 = fiber;
var G__59561__$1 = (((G__59561 == null))?null:(G__59561["type"]));
if((G__59561__$1 == null)){
return null;
} else {
return (G__59561__$1["displayName"]);
}
})();
var parent = (function (){var G__59562 = fiber;
if((G__59562 == null)){
return null;
} else {
return (G__59562["return"]);
}
})();
var path = (function (){var G__59563 = parent;
var G__59563__$1 = (((G__59563 == null))?null:day8.re_frame.trace.fiber_component_path.call(null,G__59563));
if((G__59563__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59563__$1)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
day8.re_frame.trace.component_path = (function day8$re_frame$trace$component_path(c){
var temp__4655__auto__ = (function (){var G__59564 = c;
if((G__59564 == null)){
return null;
} else {
return (G__59564["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var fiber = temp__4655__auto__;
return day8.re_frame.trace.fiber_component_path.call(null,fiber);
} else {
return reagent.impl.component.component_path.call(null,c);
}
});
day8.re_frame.trace.comp_name = (function day8$re_frame$trace$comp_name(c){
var n = (function (){var or__27195__auto__ = day8.re_frame.trace.component_path.call(null,c);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var G__59565 = c;
var G__59565__$1 = (((G__59565 == null))?null:G__59565.constructor);
if((G__59565__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__59565__$1);
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return n;
} else {
return "";
}
});
day8.re_frame.trace.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame$trace$render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_59566 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame.trace.component_path.call(null,c)], null),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame.trace.component_path.call(null,c),/ > /))], null));

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,_STAR_current_trace_STAR_59566,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,_STAR_current_trace_STAR_59566,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33999__auto___59579 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__33999__auto___59579;

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33994__auto___59580 = re_frame.interop.now.call(null);
var duration__33995__auto___59581 = (end__33994__auto___59580 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__59567_59582 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__59568_59583 = null;
var count__59569_59584 = (0);
var i__59570_59585 = (0);
while(true){
if((i__59570_59585 < count__59569_59584)){
var vec__59571_59586 = cljs.core._nth.call(null,chunk__59568_59583,i__59570_59585);
var k__33996__auto___59587 = cljs.core.nth.call(null,vec__59571_59586,(0),null);
var cb__33997__auto___59588 = cljs.core.nth.call(null,vec__59571_59586,(1),null);
try{cb__33997__auto___59588.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33995__auto___59581,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e59574){if((e59574 instanceof java.lang.Exception)){
var e__33998__auto___59589 = e59574;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33996__auto___59587,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33998__auto___59589);
} else {
throw e59574;

}
}
var G__59590 = seq__59567_59582;
var G__59591 = chunk__59568_59583;
var G__59592 = count__59569_59584;
var G__59593 = (i__59570_59585 + (1));
seq__59567_59582 = G__59590;
chunk__59568_59583 = G__59591;
count__59569_59584 = G__59592;
i__59570_59585 = G__59593;
continue;
} else {
var temp__4657__auto___59594 = cljs.core.seq.call(null,seq__59567_59582);
if(temp__4657__auto___59594){
var seq__59567_59595__$1 = temp__4657__auto___59594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59567_59595__$1)){
var c__28034__auto___59596 = cljs.core.chunk_first.call(null,seq__59567_59595__$1);
var G__59597 = cljs.core.chunk_rest.call(null,seq__59567_59595__$1);
var G__59598 = c__28034__auto___59596;
var G__59599 = cljs.core.count.call(null,c__28034__auto___59596);
var G__59600 = (0);
seq__59567_59582 = G__59597;
chunk__59568_59583 = G__59598;
count__59569_59584 = G__59599;
i__59570_59585 = G__59600;
continue;
} else {
var vec__59575_59601 = cljs.core.first.call(null,seq__59567_59595__$1);
var k__33996__auto___59602 = cljs.core.nth.call(null,vec__59575_59601,(0),null);
var cb__33997__auto___59603 = cljs.core.nth.call(null,vec__59575_59601,(1),null);
try{cb__33997__auto___59603.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33995__auto___59581,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e59578){if((e59578 instanceof java.lang.Exception)){
var e__33998__auto___59604 = e59578;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33996__auto___59602,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33998__auto___59604);
} else {
throw e59578;

}
}
var G__59605 = cljs.core.next.call(null,seq__59567_59595__$1);
var G__59606 = null;
var G__59607 = (0);
var G__59608 = (0);
seq__59567_59582 = G__59605;
chunk__59568_59583 = G__59606;
count__59569_59584 = G__59607;
i__59570_59585 = G__59608;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_59566;
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__33999__auto___59609 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__33999__auto___59609;

} else {
}

return res;
}
}
})], null);
day8.re_frame.trace.monkey_patch_reagent = (function day8$re_frame$trace$monkey_patch_reagent(){
var real_custom_wrapper = reagent.impl.component.custom_wrapper;
var real_next_tick = reagent.impl.batching.next_tick;
var real_schedule = reagent.impl.batching.schedule;
reagent.impl.component.static_fns = day8.re_frame.trace.static_fns;

return reagent.impl.component.custom_wrapper = ((function (real_custom_wrapper,real_next_tick,real_schedule){
return (function (key,f){
var G__59610 = key;
var G__59610__$1 = (((G__59610 instanceof cljs.core.Keyword))?G__59610.fqn:null);
switch (G__59610__$1) {
case "componentWillUnmount":
return ((function (G__59610,G__59610__$1,real_custom_wrapper,real_next_tick,real_schedule){
return (function (){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_59611_59625 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame.trace.comp_name.call(null,c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame.trace.component_path.call(null,c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,(c["cljsRatom"]))], null)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33994__auto___59626 = re_frame.interop.now.call(null);
var duration__33995__auto___59627 = (end__33994__auto___59626 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__59612_59628 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__59613_59629 = null;
var count__59614_59630 = (0);
var i__59615_59631 = (0);
while(true){
if((i__59615_59631 < count__59614_59630)){
var vec__59616_59632 = cljs.core._nth.call(null,chunk__59613_59629,i__59615_59631);
var k__33996__auto___59633 = cljs.core.nth.call(null,vec__59616_59632,(0),null);
var cb__33997__auto___59634 = cljs.core.nth.call(null,vec__59616_59632,(1),null);
try{cb__33997__auto___59634.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33995__auto___59627,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e59619){if((e59619 instanceof java.lang.Exception)){
var e__33998__auto___59635 = e59619;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33996__auto___59633,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33998__auto___59635);
} else {
throw e59619;

}
}
var G__59636 = seq__59612_59628;
var G__59637 = chunk__59613_59629;
var G__59638 = count__59614_59630;
var G__59639 = (i__59615_59631 + (1));
seq__59612_59628 = G__59636;
chunk__59613_59629 = G__59637;
count__59614_59630 = G__59638;
i__59615_59631 = G__59639;
continue;
} else {
var temp__4657__auto___59640 = cljs.core.seq.call(null,seq__59612_59628);
if(temp__4657__auto___59640){
var seq__59612_59641__$1 = temp__4657__auto___59640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59612_59641__$1)){
var c__28034__auto___59642 = cljs.core.chunk_first.call(null,seq__59612_59641__$1);
var G__59643 = cljs.core.chunk_rest.call(null,seq__59612_59641__$1);
var G__59644 = c__28034__auto___59642;
var G__59645 = cljs.core.count.call(null,c__28034__auto___59642);
var G__59646 = (0);
seq__59612_59628 = G__59643;
chunk__59613_59629 = G__59644;
count__59614_59630 = G__59645;
i__59615_59631 = G__59646;
continue;
} else {
var vec__59620_59647 = cljs.core.first.call(null,seq__59612_59641__$1);
var k__33996__auto___59648 = cljs.core.nth.call(null,vec__59620_59647,(0),null);
var cb__33997__auto___59649 = cljs.core.nth.call(null,vec__59620_59647,(1),null);
try{cb__33997__auto___59649.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33995__auto___59627,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e59623){if((e59623 instanceof java.lang.Exception)){
var e__33998__auto___59650 = e59623;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33996__auto___59648,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33998__auto___59650);
} else {
throw e59623;

}
}
var G__59651 = cljs.core.next.call(null,seq__59612_59641__$1);
var G__59652 = null;
var G__59653 = (0);
var G__59654 = (0);
seq__59612_59628 = G__59651;
chunk__59613_59629 = G__59652;
count__59614_59630 = G__59653;
i__59615_59631 = G__59654;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_59611_59625;
}} else {
}

return real_custom_wrapper.call(null,key,f).call(c,c);
});
;})(G__59610,G__59610__$1,real_custom_wrapper,real_next_tick,real_schedule))

break;
default:
return real_custom_wrapper.call(null,key,f);

}
});})(real_custom_wrapper,real_next_tick,real_schedule))
;
});
/**
 * Sets up any initial state that needs to be there for tracing. Does not enable tracing.
 */
day8.re_frame.trace.init_tracing_BANG_ = (function day8$re_frame$trace$init_tracing_BANG_(){
return day8.re_frame.trace.monkey_patch_reagent.call(null);
});
day8.re_frame.trace.resizer_style = (function day8$re_frame$trace$resizer_style(draggable_area){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (draggable_area / (2)))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null);
});
day8.re_frame.trace.ease_transition = "left 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out";
day8.re_frame.trace.devtools_outer = (function day8$re_frame$trace$devtools_outer(traces,opts){
var position = reagent.core.atom.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var panel_width_PERCENT_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null));
var showing_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945)], null));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var pin_to_bottom_QMARK_ = reagent.core.atom.call(null,true);
var selected_tab = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null));
var window_width = reagent.core.atom.call(null,window.innerWidth);
var handle_window_resize = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width){
return (function (e){
return cljs.core.reset_BANG_.call(null,window_width,window.innerWidth);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width))
;
var handle_keys = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize){
return (function (e){
var combo_key_QMARK_ = (function (){var or__27195__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return e.altKey;
}
}
})();
var tag_name = e.target.tagName;
var key = e.key;
var entering_input_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((function (){var and__27183__auto__ = !(entering_input_QMARK_);
if(and__27183__auto__){
return combo_key_QMARK_;
} else {
return and__27183__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core._EQ_.call(null,key,"h");
if(and__27183__auto__){
return e.ctrlKey;
} else {
return and__27183__auto__;
}
})())){
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573)], null));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize))
;
var handle_mousemove = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))){
var x = e.clientX;
var y = e.clientY;
var new_window_width = window.innerWidth;
e.preventDefault();

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),((new_window_width - x) / new_window_width)], null));

return cljs.core.reset_BANG_.call(null,window_width,new_window_width);
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys))
;
var handle_mouse_up = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove){
return (function (e){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.addEventListener("keydown",handle_keys);

window.addEventListener("mousemove",handle_mousemove);

window.addEventListener("mouseup",handle_mouse_up);

return window.addEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.removeEventListener("keydown",handle_keys);

window.removeEventListener("mousemove",handle_mousemove);

window.removeEventListener("mouseup",handle_mouse_up);

return window.removeEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
var draggable_area = (10);
var left = (cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - cljs.core.deref.call(null,panel_width_PERCENT_)))),"%"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_width)),"px"].join(''));
var transition = (cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))?"":day8.re_frame.trace.ease_transition);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrapper","div.panel-wrapper",-807046921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999999)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["rgba(0, 0, 0, 0.3) 0px 0px 4px",transition,"0px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((100) * cljs.core.deref.call(null,panel_width_PERCENT_)) | (0)) + (1))),"%"].join(''),"white",(1),"flex","fixed","100%",left])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-resizer","div.panel-resizer",1762174164),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.resizer_style.call(null,draggable_area),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.components.container.devtools_inner,traces,opts], null)], null)], null);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null));
});
day8.re_frame.trace.panel_div = (function day8$re_frame$trace$panel_div(){
var id = "--re-frame-trace--";
var panel = document.getElementById(id);
if(cljs.core.truth_(panel)){
return panel;
} else {
var new_panel = document.createElement("div");
new_panel.setAttribute("id",id);

document.body.appendChild(new_panel);

window.focus(new_panel);

return new_panel;
}
});
day8.re_frame.trace.inject_devtools_BANG_ = (function day8$re_frame$trace$inject_devtools_BANG_(){
day8.re_frame.trace.styles.inject_styles.call(null,document);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.devtools_outer,day8.re_frame.trace.utils.traces.traces,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"inline","inline",1399884222)], null)], null),day8.re_frame.trace.panel_div.call(null));
});
day8.re_frame.trace.init_db_BANG_ = (function day8$re_frame$trace$init_db_BANG_(){
return day8.re_frame.trace.db.init_db.call(null);
});

//# sourceMappingURL=trace.js.map?rel=1513855140916
