// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
return mranderson047.re_frame.v0v10v2.re_frame.interop.after_render.call(null,(function (){
return mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",177875009),mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick], null);

/**
 * @interface
 */
mranderson047.re_frame.v0v10v2.re_frame.router.IEventQueue = function(){};

mranderson047.re_frame.v0v10v2.re_frame.router.push = (function mranderson047$re_frame$v0v10v2$re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.push[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,event);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.push["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,id,callack);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,id,callack);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,f);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger = (function mranderson047$re_frame$v0v10v2$re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,trigger,arg);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._add_event = (function mranderson047$re_frame$v0v10v2$re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._add_event[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,event);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._add_event["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue = (function mranderson047$re_frame$v0v10v2$re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick = (function mranderson047$re_frame$v0v10v2$re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._run_queue = (function mranderson047$re_frame$v0v10v2$re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._run_queue[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._run_queue["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._exception = (function mranderson047$re_frame$v0v10v2$re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._exception[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,ex);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._exception["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._pause = (function mranderson047$re_frame$v0v10v2$re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._pause[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,later_fn);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._pause["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._resume = (function mranderson047$re_frame$v0v10v2$re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._resume[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._resume["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks = (function mranderson047$re_frame$v0v10v2$re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,event);
} else {
var m__27879__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {mranderson047.re_frame.v0v10v2.re_frame.router.IEventQueue}
*/
mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__4655__auto__ = cljs.core.some.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__4655__auto__)){
var later_fn = temp__4655__auto__;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__58386 = (n - (1));
n = G__58386;
continue;
}
}
break;
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: could not remove post event call back with id:",id);
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id);
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue.call(null,this$__$1);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.call(null,((function (this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58360 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("mranderson047.re-frame.v0v10v2.re-frame.router","fsm-trigger","mranderson047.re-frame.v0v10v2.re-frame.router/fsm-trigger",-1325599698)], null));

try{try{var vec__58373 = (function (){var G__58376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue.call(null,this$__$1);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__58376)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__58376)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__58376,_STAR_current_trace_STAR_58360,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._resume.call(null,this$__$1);
});})(G__58376,_STAR_current_trace_STAR_58360,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__58373,(0),null);
var action_fn = cljs.core.nth.call(null,vec__58373,(1),null);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41553__auto___58387 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41553__auto___58387;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41548__auto___58388 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41549__auto___58389 = (end__41548__auto___58388 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__58361_58390 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__58362_58391 = null;
var count__58363_58392 = (0);
var i__58364_58393 = (0);
while(true){
if((i__58364_58393 < count__58363_58392)){
var vec__58365_58394 = cljs.core._nth.call(null,chunk__58362_58391,i__58364_58393);
var k__41550__auto___58395 = cljs.core.nth.call(null,vec__58365_58394,(0),null);
var cb__41551__auto___58396 = cljs.core.nth.call(null,vec__58365_58394,(1),null);
try{cb__41551__auto___58396.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41549__auto___58389,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e58368){if((e58368 instanceof java.lang.Exception)){
var e__41552__auto___58397 = e58368;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41550__auto___58395,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41552__auto___58397);
} else {
throw e58368;

}
}
var G__58398 = seq__58361_58390;
var G__58399 = chunk__58362_58391;
var G__58400 = count__58363_58392;
var G__58401 = (i__58364_58393 + (1));
seq__58361_58390 = G__58398;
chunk__58362_58391 = G__58399;
count__58363_58392 = G__58400;
i__58364_58393 = G__58401;
continue;
} else {
var temp__4657__auto___58402 = cljs.core.seq.call(null,seq__58361_58390);
if(temp__4657__auto___58402){
var seq__58361_58403__$1 = temp__4657__auto___58402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58361_58403__$1)){
var c__28034__auto___58404 = cljs.core.chunk_first.call(null,seq__58361_58403__$1);
var G__58405 = cljs.core.chunk_rest.call(null,seq__58361_58403__$1);
var G__58406 = c__28034__auto___58404;
var G__58407 = cljs.core.count.call(null,c__28034__auto___58404);
var G__58408 = (0);
seq__58361_58390 = G__58405;
chunk__58362_58391 = G__58406;
count__58363_58392 = G__58407;
i__58364_58393 = G__58408;
continue;
} else {
var vec__58369_58409 = cljs.core.first.call(null,seq__58361_58403__$1);
var k__41550__auto___58410 = cljs.core.nth.call(null,vec__58369_58409,(0),null);
var cb__41551__auto___58411 = cljs.core.nth.call(null,vec__58369_58409,(1),null);
try{cb__41551__auto___58411.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41549__auto___58389,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e58372){if((e58372 instanceof java.lang.Exception)){
var e__41552__auto___58412 = e58372;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41550__auto___58410,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41552__auto___58412);
} else {
throw e58372;

}
}
var G__58413 = cljs.core.next.call(null,seq__58361_58403__$1);
var G__58414 = null;
var G__58415 = (0);
var G__58416 = (0);
seq__58361_58390 = G__58413;
chunk__58362_58391 = G__58414;
count__58363_58392 = G__58415;
i__58364_58393 = G__58416;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58360;
}} else {
var vec__58377 = (function (){var G__58380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__58380,this$__$1){
return (function (){
mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue.call(null,this$__$1);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__58380)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__58380,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__58380,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__58380)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__58380,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._resume.call(null,this$__$1);
});})(G__58380,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__58377,(0),null);
var action_fn = cljs.core.nth.call(null,vec__58377,(1),null);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41553__auto___58417 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41553__auto___58417;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{mranderson047.re_frame.v0v10v2.re_frame.events.handle.call(null,event_v);

self__.queue = cljs.core.pop.call(null,self__.queue);

return mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e58381){var ex = e58381;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__58382 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__58383 = null;
var count__58384 = (0);
var i__58385 = (0);
while(true){
if((i__58385 < count__58384)){
var callback = cljs.core._nth.call(null,chunk__58383,i__58385);
callback.call(null,event_v,self__.queue);

var G__58418 = seq__58382;
var G__58419 = chunk__58383;
var G__58420 = count__58384;
var G__58421 = (i__58385 + (1));
seq__58382 = G__58418;
chunk__58383 = G__58419;
count__58384 = G__58420;
i__58385 = G__58421;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58382);
if(temp__4657__auto__){
var seq__58382__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58382__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__58382__$1);
var G__58422 = cljs.core.chunk_rest.call(null,seq__58382__$1);
var G__58423 = c__28034__auto__;
var G__58424 = cljs.core.count.call(null,c__28034__auto__);
var G__58425 = (0);
seq__58382 = G__58422;
chunk__58383 = G__58423;
count__58384 = G__58424;
i__58385 = G__58425;
continue;
} else {
var callback = cljs.core.first.call(null,seq__58382__$1);
callback.call(null,event_v,self__.queue);

var G__58426 = cljs.core.next.call(null,seq__58382__$1);
var G__58427 = null;
var G__58428 = (0);
var G__58429 = (0);
seq__58382 = G__58426;
chunk__58383 = G__58427;
count__58384 = G__58428;
i__58385 = G__58429;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue;

throw ex;
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$type = true;

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorStr = "mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue";

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue");
});

mranderson047.re_frame.v0v10v2.re_frame.router.__GT_EventQueue = (function mranderson047$re_frame$v0v10v2$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

mranderson047.re_frame.v0v10v2.re_frame.router.event_queue = mranderson047.re_frame.v0v10v2.re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch = (function mranderson047$re_frame$v0v10v2$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
mranderson047.re_frame.v0v10v2.re_frame.router.push.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch_sync = (function mranderson047$re_frame$v0v10v2$re_frame$router$dispatch_sync(event_v){
mranderson047.re_frame.v0v10v2.re_frame.events.handle.call(null,event_v);

mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1513855138427
