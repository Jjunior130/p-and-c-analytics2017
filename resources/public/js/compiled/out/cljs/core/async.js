// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45427 = arguments.length;
switch (G__45427) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45428 = (function (f,blockable,meta45429){
this.f = f;
this.blockable = blockable;
this.meta45429 = meta45429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45430,meta45429__$1){
var self__ = this;
var _45430__$1 = this;
return (new cljs.core.async.t_cljs$core$async45428(self__.f,self__.blockable,meta45429__$1));
});

cljs.core.async.t_cljs$core$async45428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45430){
var self__ = this;
var _45430__$1 = this;
return self__.meta45429;
});

cljs.core.async.t_cljs$core$async45428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45429","meta45429",347395808,null)], null);
});

cljs.core.async.t_cljs$core$async45428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45428";

cljs.core.async.t_cljs$core$async45428.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45428");
});

cljs.core.async.__GT_t_cljs$core$async45428 = (function cljs$core$async$__GT_t_cljs$core$async45428(f__$1,blockable__$1,meta45429){
return (new cljs.core.async.t_cljs$core$async45428(f__$1,blockable__$1,meta45429));
});

}

return (new cljs.core.async.t_cljs$core$async45428(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45434 = arguments.length;
switch (G__45434) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45437 = arguments.length;
switch (G__45437) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45440 = arguments.length;
switch (G__45440) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45442,ret){
return (function (){
return fn1.call(null,val_45442);
});})(val_45442,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45444 = arguments.length;
switch (G__45444) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28140__auto___45446 = n;
var x_45447 = (0);
while(true){
if((x_45447 < n__28140__auto___45446)){
(a[x_45447] = (0));

var G__45448 = (x_45447 + (1));
x_45447 = G__45448;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45449 = (i + (1));
i = G__45449;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45450 = (function (flag,meta45451){
this.flag = flag;
this.meta45451 = meta45451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45452,meta45451__$1){
var self__ = this;
var _45452__$1 = this;
return (new cljs.core.async.t_cljs$core$async45450(self__.flag,meta45451__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45452){
var self__ = this;
var _45452__$1 = this;
return self__.meta45451;
});})(flag))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45450.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45451","meta45451",531257269,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45450";

cljs.core.async.t_cljs$core$async45450.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45450");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45450 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45450(flag__$1,meta45451){
return (new cljs.core.async.t_cljs$core$async45450(flag__$1,meta45451));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45450(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45453 = (function (flag,cb,meta45454){
this.flag = flag;
this.cb = cb;
this.meta45454 = meta45454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45455,meta45454__$1){
var self__ = this;
var _45455__$1 = this;
return (new cljs.core.async.t_cljs$core$async45453(self__.flag,self__.cb,meta45454__$1));
});

cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45455){
var self__ = this;
var _45455__$1 = this;
return self__.meta45454;
});

cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45454","meta45454",-472167919,null)], null);
});

cljs.core.async.t_cljs$core$async45453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45453";

cljs.core.async.t_cljs$core$async45453.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45453");
});

cljs.core.async.__GT_t_cljs$core$async45453 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45453(flag__$1,cb__$1,meta45454){
return (new cljs.core.async.t_cljs$core$async45453(flag__$1,cb__$1,meta45454));
});

}

return (new cljs.core.async.t_cljs$core$async45453(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45456_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45456_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45457_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45457_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27195__auto__ = wport;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45458 = (i + (1));
i = G__45458;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27195__auto__ = ret;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27183__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___45464 = arguments.length;
var i__28365__auto___45465 = (0);
while(true){
if((i__28365__auto___45465 < len__28364__auto___45464)){
args__28371__auto__.push((arguments[i__28365__auto___45465]));

var G__45466 = (i__28365__auto___45465 + (1));
i__28365__auto___45465 = G__45466;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45461){
var map__45462 = p__45461;
var map__45462__$1 = ((((!((map__45462 == null)))?((((map__45462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45462):map__45462);
var opts = map__45462__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45459){
var G__45460 = cljs.core.first.call(null,seq45459);
var seq45459__$1 = cljs.core.next.call(null,seq45459);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45460,seq45459__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45468 = arguments.length;
switch (G__45468) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29992__auto___45514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___45514){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___45514){
return (function (state_45492){
var state_val_45493 = (state_45492[(1)]);
if((state_val_45493 === (7))){
var inst_45488 = (state_45492[(2)]);
var state_45492__$1 = state_45492;
var statearr_45494_45515 = state_45492__$1;
(statearr_45494_45515[(2)] = inst_45488);

(statearr_45494_45515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (1))){
var state_45492__$1 = state_45492;
var statearr_45495_45516 = state_45492__$1;
(statearr_45495_45516[(2)] = null);

(statearr_45495_45516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (4))){
var inst_45471 = (state_45492[(7)]);
var inst_45471__$1 = (state_45492[(2)]);
var inst_45472 = (inst_45471__$1 == null);
var state_45492__$1 = (function (){var statearr_45496 = state_45492;
(statearr_45496[(7)] = inst_45471__$1);

return statearr_45496;
})();
if(cljs.core.truth_(inst_45472)){
var statearr_45497_45517 = state_45492__$1;
(statearr_45497_45517[(1)] = (5));

} else {
var statearr_45498_45518 = state_45492__$1;
(statearr_45498_45518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (13))){
var state_45492__$1 = state_45492;
var statearr_45499_45519 = state_45492__$1;
(statearr_45499_45519[(2)] = null);

(statearr_45499_45519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (6))){
var inst_45471 = (state_45492[(7)]);
var state_45492__$1 = state_45492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45492__$1,(11),to,inst_45471);
} else {
if((state_val_45493 === (3))){
var inst_45490 = (state_45492[(2)]);
var state_45492__$1 = state_45492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45492__$1,inst_45490);
} else {
if((state_val_45493 === (12))){
var state_45492__$1 = state_45492;
var statearr_45500_45520 = state_45492__$1;
(statearr_45500_45520[(2)] = null);

(statearr_45500_45520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (2))){
var state_45492__$1 = state_45492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45492__$1,(4),from);
} else {
if((state_val_45493 === (11))){
var inst_45481 = (state_45492[(2)]);
var state_45492__$1 = state_45492;
if(cljs.core.truth_(inst_45481)){
var statearr_45501_45521 = state_45492__$1;
(statearr_45501_45521[(1)] = (12));

} else {
var statearr_45502_45522 = state_45492__$1;
(statearr_45502_45522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (9))){
var state_45492__$1 = state_45492;
var statearr_45503_45523 = state_45492__$1;
(statearr_45503_45523[(2)] = null);

(statearr_45503_45523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (5))){
var state_45492__$1 = state_45492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45504_45524 = state_45492__$1;
(statearr_45504_45524[(1)] = (8));

} else {
var statearr_45505_45525 = state_45492__$1;
(statearr_45505_45525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (14))){
var inst_45486 = (state_45492[(2)]);
var state_45492__$1 = state_45492;
var statearr_45506_45526 = state_45492__$1;
(statearr_45506_45526[(2)] = inst_45486);

(statearr_45506_45526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (10))){
var inst_45478 = (state_45492[(2)]);
var state_45492__$1 = state_45492;
var statearr_45507_45527 = state_45492__$1;
(statearr_45507_45527[(2)] = inst_45478);

(statearr_45507_45527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45493 === (8))){
var inst_45475 = cljs.core.async.close_BANG_.call(null,to);
var state_45492__$1 = state_45492;
var statearr_45508_45528 = state_45492__$1;
(statearr_45508_45528[(2)] = inst_45475);

(statearr_45508_45528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___45514))
;
return ((function (switch__29971__auto__,c__29992__auto___45514){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_45509 = [null,null,null,null,null,null,null,null];
(statearr_45509[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_45509[(1)] = (1));

return statearr_45509;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_45492){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45510){if((e45510 instanceof Object)){
var ex__29975__auto__ = e45510;
var statearr_45511_45529 = state_45492;
(statearr_45511_45529[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45530 = state_45492;
state_45492 = G__45530;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_45492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_45492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___45514))
})();
var state__29994__auto__ = (function (){var statearr_45512 = f__29993__auto__.call(null);
(statearr_45512[(6)] = c__29992__auto___45514);

return statearr_45512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___45514))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45531){
var vec__45532 = p__45531;
var v = cljs.core.nth.call(null,vec__45532,(0),null);
var p = cljs.core.nth.call(null,vec__45532,(1),null);
var job = vec__45532;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29992__auto___45703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___45703,res,vec__45532,v,p,job,jobs,results){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___45703,res,vec__45532,v,p,job,jobs,results){
return (function (state_45539){
var state_val_45540 = (state_45539[(1)]);
if((state_val_45540 === (1))){
var state_45539__$1 = state_45539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45539__$1,(2),res,v);
} else {
if((state_val_45540 === (2))){
var inst_45536 = (state_45539[(2)]);
var inst_45537 = cljs.core.async.close_BANG_.call(null,res);
var state_45539__$1 = (function (){var statearr_45541 = state_45539;
(statearr_45541[(7)] = inst_45536);

return statearr_45541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45539__$1,inst_45537);
} else {
return null;
}
}
});})(c__29992__auto___45703,res,vec__45532,v,p,job,jobs,results))
;
return ((function (switch__29971__auto__,c__29992__auto___45703,res,vec__45532,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0 = (function (){
var statearr_45542 = [null,null,null,null,null,null,null,null];
(statearr_45542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__);

(statearr_45542[(1)] = (1));

return statearr_45542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1 = (function (state_45539){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45543){if((e45543 instanceof Object)){
var ex__29975__auto__ = e45543;
var statearr_45544_45704 = state_45539;
(statearr_45544_45704[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45705 = state_45539;
state_45539 = G__45705;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = function(state_45539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1.call(this,state_45539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___45703,res,vec__45532,v,p,job,jobs,results))
})();
var state__29994__auto__ = (function (){var statearr_45545 = f__29993__auto__.call(null);
(statearr_45545[(6)] = c__29992__auto___45703);

return statearr_45545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___45703,res,vec__45532,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45546){
var vec__45547 = p__45546;
var v = cljs.core.nth.call(null,vec__45547,(0),null);
var p = cljs.core.nth.call(null,vec__45547,(1),null);
var job = vec__45547;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28140__auto___45706 = n;
var __45707 = (0);
while(true){
if((__45707 < n__28140__auto___45706)){
var G__45550_45708 = type;
var G__45550_45709__$1 = (((G__45550_45708 instanceof cljs.core.Keyword))?G__45550_45708.fqn:null);
switch (G__45550_45709__$1) {
case "compute":
var c__29992__auto___45711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45707,c__29992__auto___45711,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (__45707,c__29992__auto___45711,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async){
return (function (state_45563){
var state_val_45564 = (state_45563[(1)]);
if((state_val_45564 === (1))){
var state_45563__$1 = state_45563;
var statearr_45565_45712 = state_45563__$1;
(statearr_45565_45712[(2)] = null);

(statearr_45565_45712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (2))){
var state_45563__$1 = state_45563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45563__$1,(4),jobs);
} else {
if((state_val_45564 === (3))){
var inst_45561 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45563__$1,inst_45561);
} else {
if((state_val_45564 === (4))){
var inst_45553 = (state_45563[(2)]);
var inst_45554 = process.call(null,inst_45553);
var state_45563__$1 = state_45563;
if(cljs.core.truth_(inst_45554)){
var statearr_45566_45713 = state_45563__$1;
(statearr_45566_45713[(1)] = (5));

} else {
var statearr_45567_45714 = state_45563__$1;
(statearr_45567_45714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (5))){
var state_45563__$1 = state_45563;
var statearr_45568_45715 = state_45563__$1;
(statearr_45568_45715[(2)] = null);

(statearr_45568_45715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (6))){
var state_45563__$1 = state_45563;
var statearr_45569_45716 = state_45563__$1;
(statearr_45569_45716[(2)] = null);

(statearr_45569_45716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (7))){
var inst_45559 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45570_45717 = state_45563__$1;
(statearr_45570_45717[(2)] = inst_45559);

(statearr_45570_45717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45707,c__29992__auto___45711,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async))
;
return ((function (__45707,switch__29971__auto__,c__29992__auto___45711,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0 = (function (){
var statearr_45571 = [null,null,null,null,null,null,null];
(statearr_45571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__);

(statearr_45571[(1)] = (1));

return statearr_45571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1 = (function (state_45563){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45572){if((e45572 instanceof Object)){
var ex__29975__auto__ = e45572;
var statearr_45573_45718 = state_45563;
(statearr_45573_45718[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45719 = state_45563;
state_45563 = G__45719;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = function(state_45563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1.call(this,state_45563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__;
})()
;})(__45707,switch__29971__auto__,c__29992__auto___45711,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async))
})();
var state__29994__auto__ = (function (){var statearr_45574 = f__29993__auto__.call(null);
(statearr_45574[(6)] = c__29992__auto___45711);

return statearr_45574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(__45707,c__29992__auto___45711,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async))
);


break;
case "async":
var c__29992__auto___45720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45707,c__29992__auto___45720,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (__45707,c__29992__auto___45720,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async){
return (function (state_45587){
var state_val_45588 = (state_45587[(1)]);
if((state_val_45588 === (1))){
var state_45587__$1 = state_45587;
var statearr_45589_45721 = state_45587__$1;
(statearr_45589_45721[(2)] = null);

(statearr_45589_45721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45588 === (2))){
var state_45587__$1 = state_45587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45587__$1,(4),jobs);
} else {
if((state_val_45588 === (3))){
var inst_45585 = (state_45587[(2)]);
var state_45587__$1 = state_45587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45587__$1,inst_45585);
} else {
if((state_val_45588 === (4))){
var inst_45577 = (state_45587[(2)]);
var inst_45578 = async.call(null,inst_45577);
var state_45587__$1 = state_45587;
if(cljs.core.truth_(inst_45578)){
var statearr_45590_45722 = state_45587__$1;
(statearr_45590_45722[(1)] = (5));

} else {
var statearr_45591_45723 = state_45587__$1;
(statearr_45591_45723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45588 === (5))){
var state_45587__$1 = state_45587;
var statearr_45592_45724 = state_45587__$1;
(statearr_45592_45724[(2)] = null);

(statearr_45592_45724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45588 === (6))){
var state_45587__$1 = state_45587;
var statearr_45593_45725 = state_45587__$1;
(statearr_45593_45725[(2)] = null);

(statearr_45593_45725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45588 === (7))){
var inst_45583 = (state_45587[(2)]);
var state_45587__$1 = state_45587;
var statearr_45594_45726 = state_45587__$1;
(statearr_45594_45726[(2)] = inst_45583);

(statearr_45594_45726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45707,c__29992__auto___45720,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async))
;
return ((function (__45707,switch__29971__auto__,c__29992__auto___45720,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0 = (function (){
var statearr_45595 = [null,null,null,null,null,null,null];
(statearr_45595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__);

(statearr_45595[(1)] = (1));

return statearr_45595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1 = (function (state_45587){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45596){if((e45596 instanceof Object)){
var ex__29975__auto__ = e45596;
var statearr_45597_45727 = state_45587;
(statearr_45597_45727[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45728 = state_45587;
state_45587 = G__45728;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = function(state_45587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1.call(this,state_45587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__;
})()
;})(__45707,switch__29971__auto__,c__29992__auto___45720,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async))
})();
var state__29994__auto__ = (function (){var statearr_45598 = f__29993__auto__.call(null);
(statearr_45598[(6)] = c__29992__auto___45720);

return statearr_45598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(__45707,c__29992__auto___45720,G__45550_45708,G__45550_45709__$1,n__28140__auto___45706,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45550_45709__$1)].join('')));

}

var G__45729 = (__45707 + (1));
__45707 = G__45729;
continue;
} else {
}
break;
}

var c__29992__auto___45730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___45730,jobs,results,process,async){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___45730,jobs,results,process,async){
return (function (state_45620){
var state_val_45621 = (state_45620[(1)]);
if((state_val_45621 === (1))){
var state_45620__$1 = state_45620;
var statearr_45622_45731 = state_45620__$1;
(statearr_45622_45731[(2)] = null);

(statearr_45622_45731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45621 === (2))){
var state_45620__$1 = state_45620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45620__$1,(4),from);
} else {
if((state_val_45621 === (3))){
var inst_45618 = (state_45620[(2)]);
var state_45620__$1 = state_45620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45620__$1,inst_45618);
} else {
if((state_val_45621 === (4))){
var inst_45601 = (state_45620[(7)]);
var inst_45601__$1 = (state_45620[(2)]);
var inst_45602 = (inst_45601__$1 == null);
var state_45620__$1 = (function (){var statearr_45623 = state_45620;
(statearr_45623[(7)] = inst_45601__$1);

return statearr_45623;
})();
if(cljs.core.truth_(inst_45602)){
var statearr_45624_45732 = state_45620__$1;
(statearr_45624_45732[(1)] = (5));

} else {
var statearr_45625_45733 = state_45620__$1;
(statearr_45625_45733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45621 === (5))){
var inst_45604 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45620__$1 = state_45620;
var statearr_45626_45734 = state_45620__$1;
(statearr_45626_45734[(2)] = inst_45604);

(statearr_45626_45734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45621 === (6))){
var inst_45601 = (state_45620[(7)]);
var inst_45606 = (state_45620[(8)]);
var inst_45606__$1 = cljs.core.async.chan.call(null,(1));
var inst_45607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45608 = [inst_45601,inst_45606__$1];
var inst_45609 = (new cljs.core.PersistentVector(null,2,(5),inst_45607,inst_45608,null));
var state_45620__$1 = (function (){var statearr_45627 = state_45620;
(statearr_45627[(8)] = inst_45606__$1);

return statearr_45627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45620__$1,(8),jobs,inst_45609);
} else {
if((state_val_45621 === (7))){
var inst_45616 = (state_45620[(2)]);
var state_45620__$1 = state_45620;
var statearr_45628_45735 = state_45620__$1;
(statearr_45628_45735[(2)] = inst_45616);

(statearr_45628_45735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45621 === (8))){
var inst_45606 = (state_45620[(8)]);
var inst_45611 = (state_45620[(2)]);
var state_45620__$1 = (function (){var statearr_45629 = state_45620;
(statearr_45629[(9)] = inst_45611);

return statearr_45629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45620__$1,(9),results,inst_45606);
} else {
if((state_val_45621 === (9))){
var inst_45613 = (state_45620[(2)]);
var state_45620__$1 = (function (){var statearr_45630 = state_45620;
(statearr_45630[(10)] = inst_45613);

return statearr_45630;
})();
var statearr_45631_45736 = state_45620__$1;
(statearr_45631_45736[(2)] = null);

(statearr_45631_45736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___45730,jobs,results,process,async))
;
return ((function (switch__29971__auto__,c__29992__auto___45730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0 = (function (){
var statearr_45632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__);

(statearr_45632[(1)] = (1));

return statearr_45632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1 = (function (state_45620){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45633){if((e45633 instanceof Object)){
var ex__29975__auto__ = e45633;
var statearr_45634_45737 = state_45620;
(statearr_45634_45737[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45738 = state_45620;
state_45620 = G__45738;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = function(state_45620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1.call(this,state_45620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___45730,jobs,results,process,async))
})();
var state__29994__auto__ = (function (){var statearr_45635 = f__29993__auto__.call(null);
(statearr_45635[(6)] = c__29992__auto___45730);

return statearr_45635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___45730,jobs,results,process,async))
);


var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__,jobs,results,process,async){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__,jobs,results,process,async){
return (function (state_45673){
var state_val_45674 = (state_45673[(1)]);
if((state_val_45674 === (7))){
var inst_45669 = (state_45673[(2)]);
var state_45673__$1 = state_45673;
var statearr_45675_45739 = state_45673__$1;
(statearr_45675_45739[(2)] = inst_45669);

(statearr_45675_45739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (20))){
var state_45673__$1 = state_45673;
var statearr_45676_45740 = state_45673__$1;
(statearr_45676_45740[(2)] = null);

(statearr_45676_45740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (1))){
var state_45673__$1 = state_45673;
var statearr_45677_45741 = state_45673__$1;
(statearr_45677_45741[(2)] = null);

(statearr_45677_45741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (4))){
var inst_45638 = (state_45673[(7)]);
var inst_45638__$1 = (state_45673[(2)]);
var inst_45639 = (inst_45638__$1 == null);
var state_45673__$1 = (function (){var statearr_45678 = state_45673;
(statearr_45678[(7)] = inst_45638__$1);

return statearr_45678;
})();
if(cljs.core.truth_(inst_45639)){
var statearr_45679_45742 = state_45673__$1;
(statearr_45679_45742[(1)] = (5));

} else {
var statearr_45680_45743 = state_45673__$1;
(statearr_45680_45743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (15))){
var inst_45651 = (state_45673[(8)]);
var state_45673__$1 = state_45673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45673__$1,(18),to,inst_45651);
} else {
if((state_val_45674 === (21))){
var inst_45664 = (state_45673[(2)]);
var state_45673__$1 = state_45673;
var statearr_45681_45744 = state_45673__$1;
(statearr_45681_45744[(2)] = inst_45664);

(statearr_45681_45744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (13))){
var inst_45666 = (state_45673[(2)]);
var state_45673__$1 = (function (){var statearr_45682 = state_45673;
(statearr_45682[(9)] = inst_45666);

return statearr_45682;
})();
var statearr_45683_45745 = state_45673__$1;
(statearr_45683_45745[(2)] = null);

(statearr_45683_45745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (6))){
var inst_45638 = (state_45673[(7)]);
var state_45673__$1 = state_45673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45673__$1,(11),inst_45638);
} else {
if((state_val_45674 === (17))){
var inst_45659 = (state_45673[(2)]);
var state_45673__$1 = state_45673;
if(cljs.core.truth_(inst_45659)){
var statearr_45684_45746 = state_45673__$1;
(statearr_45684_45746[(1)] = (19));

} else {
var statearr_45685_45747 = state_45673__$1;
(statearr_45685_45747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (3))){
var inst_45671 = (state_45673[(2)]);
var state_45673__$1 = state_45673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45673__$1,inst_45671);
} else {
if((state_val_45674 === (12))){
var inst_45648 = (state_45673[(10)]);
var state_45673__$1 = state_45673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45673__$1,(14),inst_45648);
} else {
if((state_val_45674 === (2))){
var state_45673__$1 = state_45673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45673__$1,(4),results);
} else {
if((state_val_45674 === (19))){
var state_45673__$1 = state_45673;
var statearr_45686_45748 = state_45673__$1;
(statearr_45686_45748[(2)] = null);

(statearr_45686_45748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (11))){
var inst_45648 = (state_45673[(2)]);
var state_45673__$1 = (function (){var statearr_45687 = state_45673;
(statearr_45687[(10)] = inst_45648);

return statearr_45687;
})();
var statearr_45688_45749 = state_45673__$1;
(statearr_45688_45749[(2)] = null);

(statearr_45688_45749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (9))){
var state_45673__$1 = state_45673;
var statearr_45689_45750 = state_45673__$1;
(statearr_45689_45750[(2)] = null);

(statearr_45689_45750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (5))){
var state_45673__$1 = state_45673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45690_45751 = state_45673__$1;
(statearr_45690_45751[(1)] = (8));

} else {
var statearr_45691_45752 = state_45673__$1;
(statearr_45691_45752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (14))){
var inst_45651 = (state_45673[(8)]);
var inst_45653 = (state_45673[(11)]);
var inst_45651__$1 = (state_45673[(2)]);
var inst_45652 = (inst_45651__$1 == null);
var inst_45653__$1 = cljs.core.not.call(null,inst_45652);
var state_45673__$1 = (function (){var statearr_45692 = state_45673;
(statearr_45692[(8)] = inst_45651__$1);

(statearr_45692[(11)] = inst_45653__$1);

return statearr_45692;
})();
if(inst_45653__$1){
var statearr_45693_45753 = state_45673__$1;
(statearr_45693_45753[(1)] = (15));

} else {
var statearr_45694_45754 = state_45673__$1;
(statearr_45694_45754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (16))){
var inst_45653 = (state_45673[(11)]);
var state_45673__$1 = state_45673;
var statearr_45695_45755 = state_45673__$1;
(statearr_45695_45755[(2)] = inst_45653);

(statearr_45695_45755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (10))){
var inst_45645 = (state_45673[(2)]);
var state_45673__$1 = state_45673;
var statearr_45696_45756 = state_45673__$1;
(statearr_45696_45756[(2)] = inst_45645);

(statearr_45696_45756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (18))){
var inst_45656 = (state_45673[(2)]);
var state_45673__$1 = state_45673;
var statearr_45697_45757 = state_45673__$1;
(statearr_45697_45757[(2)] = inst_45656);

(statearr_45697_45757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45674 === (8))){
var inst_45642 = cljs.core.async.close_BANG_.call(null,to);
var state_45673__$1 = state_45673;
var statearr_45698_45758 = state_45673__$1;
(statearr_45698_45758[(2)] = inst_45642);

(statearr_45698_45758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto__,jobs,results,process,async))
;
return ((function (switch__29971__auto__,c__29992__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0 = (function (){
var statearr_45699 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__);

(statearr_45699[(1)] = (1));

return statearr_45699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1 = (function (state_45673){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45700){if((e45700 instanceof Object)){
var ex__29975__auto__ = e45700;
var statearr_45701_45759 = state_45673;
(statearr_45701_45759[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45760 = state_45673;
state_45673 = G__45760;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__ = function(state_45673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1.call(this,state_45673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29972__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__,jobs,results,process,async))
})();
var state__29994__auto__ = (function (){var statearr_45702 = f__29993__auto__.call(null);
(statearr_45702[(6)] = c__29992__auto__);

return statearr_45702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__,jobs,results,process,async))
);

return c__29992__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45762 = arguments.length;
switch (G__45762) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45765 = arguments.length;
switch (G__45765) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45768 = arguments.length;
switch (G__45768) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29992__auto___45817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___45817,tc,fc){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___45817,tc,fc){
return (function (state_45794){
var state_val_45795 = (state_45794[(1)]);
if((state_val_45795 === (7))){
var inst_45790 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
var statearr_45796_45818 = state_45794__$1;
(statearr_45796_45818[(2)] = inst_45790);

(statearr_45796_45818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (1))){
var state_45794__$1 = state_45794;
var statearr_45797_45819 = state_45794__$1;
(statearr_45797_45819[(2)] = null);

(statearr_45797_45819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (4))){
var inst_45771 = (state_45794[(7)]);
var inst_45771__$1 = (state_45794[(2)]);
var inst_45772 = (inst_45771__$1 == null);
var state_45794__$1 = (function (){var statearr_45798 = state_45794;
(statearr_45798[(7)] = inst_45771__$1);

return statearr_45798;
})();
if(cljs.core.truth_(inst_45772)){
var statearr_45799_45820 = state_45794__$1;
(statearr_45799_45820[(1)] = (5));

} else {
var statearr_45800_45821 = state_45794__$1;
(statearr_45800_45821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (13))){
var state_45794__$1 = state_45794;
var statearr_45801_45822 = state_45794__$1;
(statearr_45801_45822[(2)] = null);

(statearr_45801_45822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (6))){
var inst_45771 = (state_45794[(7)]);
var inst_45777 = p.call(null,inst_45771);
var state_45794__$1 = state_45794;
if(cljs.core.truth_(inst_45777)){
var statearr_45802_45823 = state_45794__$1;
(statearr_45802_45823[(1)] = (9));

} else {
var statearr_45803_45824 = state_45794__$1;
(statearr_45803_45824[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (3))){
var inst_45792 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45794__$1,inst_45792);
} else {
if((state_val_45795 === (12))){
var state_45794__$1 = state_45794;
var statearr_45804_45825 = state_45794__$1;
(statearr_45804_45825[(2)] = null);

(statearr_45804_45825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (2))){
var state_45794__$1 = state_45794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45794__$1,(4),ch);
} else {
if((state_val_45795 === (11))){
var inst_45771 = (state_45794[(7)]);
var inst_45781 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45794__$1,(8),inst_45781,inst_45771);
} else {
if((state_val_45795 === (9))){
var state_45794__$1 = state_45794;
var statearr_45805_45826 = state_45794__$1;
(statearr_45805_45826[(2)] = tc);

(statearr_45805_45826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (5))){
var inst_45774 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45775 = cljs.core.async.close_BANG_.call(null,fc);
var state_45794__$1 = (function (){var statearr_45806 = state_45794;
(statearr_45806[(8)] = inst_45774);

return statearr_45806;
})();
var statearr_45807_45827 = state_45794__$1;
(statearr_45807_45827[(2)] = inst_45775);

(statearr_45807_45827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (14))){
var inst_45788 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
var statearr_45808_45828 = state_45794__$1;
(statearr_45808_45828[(2)] = inst_45788);

(statearr_45808_45828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (10))){
var state_45794__$1 = state_45794;
var statearr_45809_45829 = state_45794__$1;
(statearr_45809_45829[(2)] = fc);

(statearr_45809_45829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45795 === (8))){
var inst_45783 = (state_45794[(2)]);
var state_45794__$1 = state_45794;
if(cljs.core.truth_(inst_45783)){
var statearr_45810_45830 = state_45794__$1;
(statearr_45810_45830[(1)] = (12));

} else {
var statearr_45811_45831 = state_45794__$1;
(statearr_45811_45831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___45817,tc,fc))
;
return ((function (switch__29971__auto__,c__29992__auto___45817,tc,fc){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_45812 = [null,null,null,null,null,null,null,null,null];
(statearr_45812[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_45812[(1)] = (1));

return statearr_45812;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_45794){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45813){if((e45813 instanceof Object)){
var ex__29975__auto__ = e45813;
var statearr_45814_45832 = state_45794;
(statearr_45814_45832[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45833 = state_45794;
state_45794 = G__45833;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_45794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_45794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___45817,tc,fc))
})();
var state__29994__auto__ = (function (){var statearr_45815 = f__29993__auto__.call(null);
(statearr_45815[(6)] = c__29992__auto___45817);

return statearr_45815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___45817,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__){
return (function (state_45854){
var state_val_45855 = (state_45854[(1)]);
if((state_val_45855 === (7))){
var inst_45850 = (state_45854[(2)]);
var state_45854__$1 = state_45854;
var statearr_45856_45874 = state_45854__$1;
(statearr_45856_45874[(2)] = inst_45850);

(statearr_45856_45874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (1))){
var inst_45834 = init;
var state_45854__$1 = (function (){var statearr_45857 = state_45854;
(statearr_45857[(7)] = inst_45834);

return statearr_45857;
})();
var statearr_45858_45875 = state_45854__$1;
(statearr_45858_45875[(2)] = null);

(statearr_45858_45875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (4))){
var inst_45837 = (state_45854[(8)]);
var inst_45837__$1 = (state_45854[(2)]);
var inst_45838 = (inst_45837__$1 == null);
var state_45854__$1 = (function (){var statearr_45859 = state_45854;
(statearr_45859[(8)] = inst_45837__$1);

return statearr_45859;
})();
if(cljs.core.truth_(inst_45838)){
var statearr_45860_45876 = state_45854__$1;
(statearr_45860_45876[(1)] = (5));

} else {
var statearr_45861_45877 = state_45854__$1;
(statearr_45861_45877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (6))){
var inst_45834 = (state_45854[(7)]);
var inst_45841 = (state_45854[(9)]);
var inst_45837 = (state_45854[(8)]);
var inst_45841__$1 = f.call(null,inst_45834,inst_45837);
var inst_45842 = cljs.core.reduced_QMARK_.call(null,inst_45841__$1);
var state_45854__$1 = (function (){var statearr_45862 = state_45854;
(statearr_45862[(9)] = inst_45841__$1);

return statearr_45862;
})();
if(inst_45842){
var statearr_45863_45878 = state_45854__$1;
(statearr_45863_45878[(1)] = (8));

} else {
var statearr_45864_45879 = state_45854__$1;
(statearr_45864_45879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (3))){
var inst_45852 = (state_45854[(2)]);
var state_45854__$1 = state_45854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45854__$1,inst_45852);
} else {
if((state_val_45855 === (2))){
var state_45854__$1 = state_45854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45854__$1,(4),ch);
} else {
if((state_val_45855 === (9))){
var inst_45841 = (state_45854[(9)]);
var inst_45834 = inst_45841;
var state_45854__$1 = (function (){var statearr_45865 = state_45854;
(statearr_45865[(7)] = inst_45834);

return statearr_45865;
})();
var statearr_45866_45880 = state_45854__$1;
(statearr_45866_45880[(2)] = null);

(statearr_45866_45880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (5))){
var inst_45834 = (state_45854[(7)]);
var state_45854__$1 = state_45854;
var statearr_45867_45881 = state_45854__$1;
(statearr_45867_45881[(2)] = inst_45834);

(statearr_45867_45881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (10))){
var inst_45848 = (state_45854[(2)]);
var state_45854__$1 = state_45854;
var statearr_45868_45882 = state_45854__$1;
(statearr_45868_45882[(2)] = inst_45848);

(statearr_45868_45882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45855 === (8))){
var inst_45841 = (state_45854[(9)]);
var inst_45844 = cljs.core.deref.call(null,inst_45841);
var state_45854__$1 = state_45854;
var statearr_45869_45883 = state_45854__$1;
(statearr_45869_45883[(2)] = inst_45844);

(statearr_45869_45883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29972__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29972__auto____0 = (function (){
var statearr_45870 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45870[(0)] = cljs$core$async$reduce_$_state_machine__29972__auto__);

(statearr_45870[(1)] = (1));

return statearr_45870;
});
var cljs$core$async$reduce_$_state_machine__29972__auto____1 = (function (state_45854){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45871){if((e45871 instanceof Object)){
var ex__29975__auto__ = e45871;
var statearr_45872_45884 = state_45854;
(statearr_45872_45884[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45885 = state_45854;
state_45854 = G__45885;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29972__auto__ = function(state_45854){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29972__auto____1.call(this,state_45854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29972__auto____0;
cljs$core$async$reduce_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29972__auto____1;
return cljs$core$async$reduce_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__))
})();
var state__29994__auto__ = (function (){var statearr_45873 = f__29993__auto__.call(null);
(statearr_45873[(6)] = c__29992__auto__);

return statearr_45873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__))
);

return c__29992__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45887 = arguments.length;
switch (G__45887) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__){
return (function (state_45912){
var state_val_45913 = (state_45912[(1)]);
if((state_val_45913 === (7))){
var inst_45894 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
var statearr_45914_45935 = state_45912__$1;
(statearr_45914_45935[(2)] = inst_45894);

(statearr_45914_45935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (1))){
var inst_45888 = cljs.core.seq.call(null,coll);
var inst_45889 = inst_45888;
var state_45912__$1 = (function (){var statearr_45915 = state_45912;
(statearr_45915[(7)] = inst_45889);

return statearr_45915;
})();
var statearr_45916_45936 = state_45912__$1;
(statearr_45916_45936[(2)] = null);

(statearr_45916_45936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (4))){
var inst_45889 = (state_45912[(7)]);
var inst_45892 = cljs.core.first.call(null,inst_45889);
var state_45912__$1 = state_45912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45912__$1,(7),ch,inst_45892);
} else {
if((state_val_45913 === (13))){
var inst_45906 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
var statearr_45917_45937 = state_45912__$1;
(statearr_45917_45937[(2)] = inst_45906);

(statearr_45917_45937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (6))){
var inst_45897 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
if(cljs.core.truth_(inst_45897)){
var statearr_45918_45938 = state_45912__$1;
(statearr_45918_45938[(1)] = (8));

} else {
var statearr_45919_45939 = state_45912__$1;
(statearr_45919_45939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (3))){
var inst_45910 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45912__$1,inst_45910);
} else {
if((state_val_45913 === (12))){
var state_45912__$1 = state_45912;
var statearr_45920_45940 = state_45912__$1;
(statearr_45920_45940[(2)] = null);

(statearr_45920_45940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (2))){
var inst_45889 = (state_45912[(7)]);
var state_45912__$1 = state_45912;
if(cljs.core.truth_(inst_45889)){
var statearr_45921_45941 = state_45912__$1;
(statearr_45921_45941[(1)] = (4));

} else {
var statearr_45922_45942 = state_45912__$1;
(statearr_45922_45942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (11))){
var inst_45903 = cljs.core.async.close_BANG_.call(null,ch);
var state_45912__$1 = state_45912;
var statearr_45923_45943 = state_45912__$1;
(statearr_45923_45943[(2)] = inst_45903);

(statearr_45923_45943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (9))){
var state_45912__$1 = state_45912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45924_45944 = state_45912__$1;
(statearr_45924_45944[(1)] = (11));

} else {
var statearr_45925_45945 = state_45912__$1;
(statearr_45925_45945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (5))){
var inst_45889 = (state_45912[(7)]);
var state_45912__$1 = state_45912;
var statearr_45926_45946 = state_45912__$1;
(statearr_45926_45946[(2)] = inst_45889);

(statearr_45926_45946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (10))){
var inst_45908 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
var statearr_45927_45947 = state_45912__$1;
(statearr_45927_45947[(2)] = inst_45908);

(statearr_45927_45947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (8))){
var inst_45889 = (state_45912[(7)]);
var inst_45899 = cljs.core.next.call(null,inst_45889);
var inst_45889__$1 = inst_45899;
var state_45912__$1 = (function (){var statearr_45928 = state_45912;
(statearr_45928[(7)] = inst_45889__$1);

return statearr_45928;
})();
var statearr_45929_45948 = state_45912__$1;
(statearr_45929_45948[(2)] = null);

(statearr_45929_45948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_45930 = [null,null,null,null,null,null,null,null];
(statearr_45930[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_45930[(1)] = (1));

return statearr_45930;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_45912){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_45912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e45931){if((e45931 instanceof Object)){
var ex__29975__auto__ = e45931;
var statearr_45932_45949 = state_45912;
(statearr_45932_45949[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45950 = state_45912;
state_45912 = G__45950;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_45912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_45912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__))
})();
var state__29994__auto__ = (function (){var statearr_45933 = f__29993__auto__.call(null);
(statearr_45933[(6)] = c__29992__auto__);

return statearr_45933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__))
);

return c__29992__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27878__auto__ = (((_ == null))?null:_);
var m__27879__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,_);
} else {
var m__27879__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45951 = (function (ch,cs,meta45952){
this.ch = ch;
this.cs = cs;
this.meta45952 = meta45952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45953,meta45952__$1){
var self__ = this;
var _45953__$1 = this;
return (new cljs.core.async.t_cljs$core$async45951(self__.ch,self__.cs,meta45952__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45953){
var self__ = this;
var _45953__$1 = this;
return self__.meta45952;
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45952","meta45952",-403231157,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45951";

cljs.core.async.t_cljs$core$async45951.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45951");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45951 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45951(ch__$1,cs__$1,meta45952){
return (new cljs.core.async.t_cljs$core$async45951(ch__$1,cs__$1,meta45952));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45951(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29992__auto___46173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46173,cs,m,dchan,dctr,done){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46173,cs,m,dchan,dctr,done){
return (function (state_46088){
var state_val_46089 = (state_46088[(1)]);
if((state_val_46089 === (7))){
var inst_46084 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46090_46174 = state_46088__$1;
(statearr_46090_46174[(2)] = inst_46084);

(statearr_46090_46174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (20))){
var inst_45987 = (state_46088[(7)]);
var inst_45999 = cljs.core.first.call(null,inst_45987);
var inst_46000 = cljs.core.nth.call(null,inst_45999,(0),null);
var inst_46001 = cljs.core.nth.call(null,inst_45999,(1),null);
var state_46088__$1 = (function (){var statearr_46091 = state_46088;
(statearr_46091[(8)] = inst_46000);

return statearr_46091;
})();
if(cljs.core.truth_(inst_46001)){
var statearr_46092_46175 = state_46088__$1;
(statearr_46092_46175[(1)] = (22));

} else {
var statearr_46093_46176 = state_46088__$1;
(statearr_46093_46176[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (27))){
var inst_46029 = (state_46088[(9)]);
var inst_46036 = (state_46088[(10)]);
var inst_46031 = (state_46088[(11)]);
var inst_45956 = (state_46088[(12)]);
var inst_46036__$1 = cljs.core._nth.call(null,inst_46029,inst_46031);
var inst_46037 = cljs.core.async.put_BANG_.call(null,inst_46036__$1,inst_45956,done);
var state_46088__$1 = (function (){var statearr_46094 = state_46088;
(statearr_46094[(10)] = inst_46036__$1);

return statearr_46094;
})();
if(cljs.core.truth_(inst_46037)){
var statearr_46095_46177 = state_46088__$1;
(statearr_46095_46177[(1)] = (30));

} else {
var statearr_46096_46178 = state_46088__$1;
(statearr_46096_46178[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (1))){
var state_46088__$1 = state_46088;
var statearr_46097_46179 = state_46088__$1;
(statearr_46097_46179[(2)] = null);

(statearr_46097_46179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (24))){
var inst_45987 = (state_46088[(7)]);
var inst_46006 = (state_46088[(2)]);
var inst_46007 = cljs.core.next.call(null,inst_45987);
var inst_45965 = inst_46007;
var inst_45966 = null;
var inst_45967 = (0);
var inst_45968 = (0);
var state_46088__$1 = (function (){var statearr_46098 = state_46088;
(statearr_46098[(13)] = inst_45967);

(statearr_46098[(14)] = inst_45966);

(statearr_46098[(15)] = inst_46006);

(statearr_46098[(16)] = inst_45965);

(statearr_46098[(17)] = inst_45968);

return statearr_46098;
})();
var statearr_46099_46180 = state_46088__$1;
(statearr_46099_46180[(2)] = null);

(statearr_46099_46180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (39))){
var state_46088__$1 = state_46088;
var statearr_46103_46181 = state_46088__$1;
(statearr_46103_46181[(2)] = null);

(statearr_46103_46181[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (4))){
var inst_45956 = (state_46088[(12)]);
var inst_45956__$1 = (state_46088[(2)]);
var inst_45957 = (inst_45956__$1 == null);
var state_46088__$1 = (function (){var statearr_46104 = state_46088;
(statearr_46104[(12)] = inst_45956__$1);

return statearr_46104;
})();
if(cljs.core.truth_(inst_45957)){
var statearr_46105_46182 = state_46088__$1;
(statearr_46105_46182[(1)] = (5));

} else {
var statearr_46106_46183 = state_46088__$1;
(statearr_46106_46183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (15))){
var inst_45967 = (state_46088[(13)]);
var inst_45966 = (state_46088[(14)]);
var inst_45965 = (state_46088[(16)]);
var inst_45968 = (state_46088[(17)]);
var inst_45983 = (state_46088[(2)]);
var inst_45984 = (inst_45968 + (1));
var tmp46100 = inst_45967;
var tmp46101 = inst_45966;
var tmp46102 = inst_45965;
var inst_45965__$1 = tmp46102;
var inst_45966__$1 = tmp46101;
var inst_45967__$1 = tmp46100;
var inst_45968__$1 = inst_45984;
var state_46088__$1 = (function (){var statearr_46107 = state_46088;
(statearr_46107[(18)] = inst_45983);

(statearr_46107[(13)] = inst_45967__$1);

(statearr_46107[(14)] = inst_45966__$1);

(statearr_46107[(16)] = inst_45965__$1);

(statearr_46107[(17)] = inst_45968__$1);

return statearr_46107;
})();
var statearr_46108_46184 = state_46088__$1;
(statearr_46108_46184[(2)] = null);

(statearr_46108_46184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (21))){
var inst_46010 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46112_46185 = state_46088__$1;
(statearr_46112_46185[(2)] = inst_46010);

(statearr_46112_46185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (31))){
var inst_46036 = (state_46088[(10)]);
var inst_46040 = done.call(null,null);
var inst_46041 = cljs.core.async.untap_STAR_.call(null,m,inst_46036);
var state_46088__$1 = (function (){var statearr_46113 = state_46088;
(statearr_46113[(19)] = inst_46040);

return statearr_46113;
})();
var statearr_46114_46186 = state_46088__$1;
(statearr_46114_46186[(2)] = inst_46041);

(statearr_46114_46186[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (32))){
var inst_46029 = (state_46088[(9)]);
var inst_46030 = (state_46088[(20)]);
var inst_46028 = (state_46088[(21)]);
var inst_46031 = (state_46088[(11)]);
var inst_46043 = (state_46088[(2)]);
var inst_46044 = (inst_46031 + (1));
var tmp46109 = inst_46029;
var tmp46110 = inst_46030;
var tmp46111 = inst_46028;
var inst_46028__$1 = tmp46111;
var inst_46029__$1 = tmp46109;
var inst_46030__$1 = tmp46110;
var inst_46031__$1 = inst_46044;
var state_46088__$1 = (function (){var statearr_46115 = state_46088;
(statearr_46115[(9)] = inst_46029__$1);

(statearr_46115[(20)] = inst_46030__$1);

(statearr_46115[(21)] = inst_46028__$1);

(statearr_46115[(11)] = inst_46031__$1);

(statearr_46115[(22)] = inst_46043);

return statearr_46115;
})();
var statearr_46116_46187 = state_46088__$1;
(statearr_46116_46187[(2)] = null);

(statearr_46116_46187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (40))){
var inst_46056 = (state_46088[(23)]);
var inst_46060 = done.call(null,null);
var inst_46061 = cljs.core.async.untap_STAR_.call(null,m,inst_46056);
var state_46088__$1 = (function (){var statearr_46117 = state_46088;
(statearr_46117[(24)] = inst_46060);

return statearr_46117;
})();
var statearr_46118_46188 = state_46088__$1;
(statearr_46118_46188[(2)] = inst_46061);

(statearr_46118_46188[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (33))){
var inst_46047 = (state_46088[(25)]);
var inst_46049 = cljs.core.chunked_seq_QMARK_.call(null,inst_46047);
var state_46088__$1 = state_46088;
if(inst_46049){
var statearr_46119_46189 = state_46088__$1;
(statearr_46119_46189[(1)] = (36));

} else {
var statearr_46120_46190 = state_46088__$1;
(statearr_46120_46190[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (13))){
var inst_45977 = (state_46088[(26)]);
var inst_45980 = cljs.core.async.close_BANG_.call(null,inst_45977);
var state_46088__$1 = state_46088;
var statearr_46121_46191 = state_46088__$1;
(statearr_46121_46191[(2)] = inst_45980);

(statearr_46121_46191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (22))){
var inst_46000 = (state_46088[(8)]);
var inst_46003 = cljs.core.async.close_BANG_.call(null,inst_46000);
var state_46088__$1 = state_46088;
var statearr_46122_46192 = state_46088__$1;
(statearr_46122_46192[(2)] = inst_46003);

(statearr_46122_46192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (36))){
var inst_46047 = (state_46088[(25)]);
var inst_46051 = cljs.core.chunk_first.call(null,inst_46047);
var inst_46052 = cljs.core.chunk_rest.call(null,inst_46047);
var inst_46053 = cljs.core.count.call(null,inst_46051);
var inst_46028 = inst_46052;
var inst_46029 = inst_46051;
var inst_46030 = inst_46053;
var inst_46031 = (0);
var state_46088__$1 = (function (){var statearr_46123 = state_46088;
(statearr_46123[(9)] = inst_46029);

(statearr_46123[(20)] = inst_46030);

(statearr_46123[(21)] = inst_46028);

(statearr_46123[(11)] = inst_46031);

return statearr_46123;
})();
var statearr_46124_46193 = state_46088__$1;
(statearr_46124_46193[(2)] = null);

(statearr_46124_46193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (41))){
var inst_46047 = (state_46088[(25)]);
var inst_46063 = (state_46088[(2)]);
var inst_46064 = cljs.core.next.call(null,inst_46047);
var inst_46028 = inst_46064;
var inst_46029 = null;
var inst_46030 = (0);
var inst_46031 = (0);
var state_46088__$1 = (function (){var statearr_46125 = state_46088;
(statearr_46125[(9)] = inst_46029);

(statearr_46125[(20)] = inst_46030);

(statearr_46125[(21)] = inst_46028);

(statearr_46125[(11)] = inst_46031);

(statearr_46125[(27)] = inst_46063);

return statearr_46125;
})();
var statearr_46126_46194 = state_46088__$1;
(statearr_46126_46194[(2)] = null);

(statearr_46126_46194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (43))){
var state_46088__$1 = state_46088;
var statearr_46127_46195 = state_46088__$1;
(statearr_46127_46195[(2)] = null);

(statearr_46127_46195[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (29))){
var inst_46072 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46128_46196 = state_46088__$1;
(statearr_46128_46196[(2)] = inst_46072);

(statearr_46128_46196[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (44))){
var inst_46081 = (state_46088[(2)]);
var state_46088__$1 = (function (){var statearr_46129 = state_46088;
(statearr_46129[(28)] = inst_46081);

return statearr_46129;
})();
var statearr_46130_46197 = state_46088__$1;
(statearr_46130_46197[(2)] = null);

(statearr_46130_46197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (6))){
var inst_46020 = (state_46088[(29)]);
var inst_46019 = cljs.core.deref.call(null,cs);
var inst_46020__$1 = cljs.core.keys.call(null,inst_46019);
var inst_46021 = cljs.core.count.call(null,inst_46020__$1);
var inst_46022 = cljs.core.reset_BANG_.call(null,dctr,inst_46021);
var inst_46027 = cljs.core.seq.call(null,inst_46020__$1);
var inst_46028 = inst_46027;
var inst_46029 = null;
var inst_46030 = (0);
var inst_46031 = (0);
var state_46088__$1 = (function (){var statearr_46131 = state_46088;
(statearr_46131[(9)] = inst_46029);

(statearr_46131[(20)] = inst_46030);

(statearr_46131[(29)] = inst_46020__$1);

(statearr_46131[(21)] = inst_46028);

(statearr_46131[(11)] = inst_46031);

(statearr_46131[(30)] = inst_46022);

return statearr_46131;
})();
var statearr_46132_46198 = state_46088__$1;
(statearr_46132_46198[(2)] = null);

(statearr_46132_46198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (28))){
var inst_46047 = (state_46088[(25)]);
var inst_46028 = (state_46088[(21)]);
var inst_46047__$1 = cljs.core.seq.call(null,inst_46028);
var state_46088__$1 = (function (){var statearr_46133 = state_46088;
(statearr_46133[(25)] = inst_46047__$1);

return statearr_46133;
})();
if(inst_46047__$1){
var statearr_46134_46199 = state_46088__$1;
(statearr_46134_46199[(1)] = (33));

} else {
var statearr_46135_46200 = state_46088__$1;
(statearr_46135_46200[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (25))){
var inst_46030 = (state_46088[(20)]);
var inst_46031 = (state_46088[(11)]);
var inst_46033 = (inst_46031 < inst_46030);
var inst_46034 = inst_46033;
var state_46088__$1 = state_46088;
if(cljs.core.truth_(inst_46034)){
var statearr_46136_46201 = state_46088__$1;
(statearr_46136_46201[(1)] = (27));

} else {
var statearr_46137_46202 = state_46088__$1;
(statearr_46137_46202[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (34))){
var state_46088__$1 = state_46088;
var statearr_46138_46203 = state_46088__$1;
(statearr_46138_46203[(2)] = null);

(statearr_46138_46203[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (17))){
var state_46088__$1 = state_46088;
var statearr_46139_46204 = state_46088__$1;
(statearr_46139_46204[(2)] = null);

(statearr_46139_46204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (3))){
var inst_46086 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46088__$1,inst_46086);
} else {
if((state_val_46089 === (12))){
var inst_46015 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46140_46205 = state_46088__$1;
(statearr_46140_46205[(2)] = inst_46015);

(statearr_46140_46205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (2))){
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46088__$1,(4),ch);
} else {
if((state_val_46089 === (23))){
var state_46088__$1 = state_46088;
var statearr_46141_46206 = state_46088__$1;
(statearr_46141_46206[(2)] = null);

(statearr_46141_46206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (35))){
var inst_46070 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46142_46207 = state_46088__$1;
(statearr_46142_46207[(2)] = inst_46070);

(statearr_46142_46207[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (19))){
var inst_45987 = (state_46088[(7)]);
var inst_45991 = cljs.core.chunk_first.call(null,inst_45987);
var inst_45992 = cljs.core.chunk_rest.call(null,inst_45987);
var inst_45993 = cljs.core.count.call(null,inst_45991);
var inst_45965 = inst_45992;
var inst_45966 = inst_45991;
var inst_45967 = inst_45993;
var inst_45968 = (0);
var state_46088__$1 = (function (){var statearr_46143 = state_46088;
(statearr_46143[(13)] = inst_45967);

(statearr_46143[(14)] = inst_45966);

(statearr_46143[(16)] = inst_45965);

(statearr_46143[(17)] = inst_45968);

return statearr_46143;
})();
var statearr_46144_46208 = state_46088__$1;
(statearr_46144_46208[(2)] = null);

(statearr_46144_46208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (11))){
var inst_45987 = (state_46088[(7)]);
var inst_45965 = (state_46088[(16)]);
var inst_45987__$1 = cljs.core.seq.call(null,inst_45965);
var state_46088__$1 = (function (){var statearr_46145 = state_46088;
(statearr_46145[(7)] = inst_45987__$1);

return statearr_46145;
})();
if(inst_45987__$1){
var statearr_46146_46209 = state_46088__$1;
(statearr_46146_46209[(1)] = (16));

} else {
var statearr_46147_46210 = state_46088__$1;
(statearr_46147_46210[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (9))){
var inst_46017 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46148_46211 = state_46088__$1;
(statearr_46148_46211[(2)] = inst_46017);

(statearr_46148_46211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (5))){
var inst_45963 = cljs.core.deref.call(null,cs);
var inst_45964 = cljs.core.seq.call(null,inst_45963);
var inst_45965 = inst_45964;
var inst_45966 = null;
var inst_45967 = (0);
var inst_45968 = (0);
var state_46088__$1 = (function (){var statearr_46149 = state_46088;
(statearr_46149[(13)] = inst_45967);

(statearr_46149[(14)] = inst_45966);

(statearr_46149[(16)] = inst_45965);

(statearr_46149[(17)] = inst_45968);

return statearr_46149;
})();
var statearr_46150_46212 = state_46088__$1;
(statearr_46150_46212[(2)] = null);

(statearr_46150_46212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (14))){
var state_46088__$1 = state_46088;
var statearr_46151_46213 = state_46088__$1;
(statearr_46151_46213[(2)] = null);

(statearr_46151_46213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (45))){
var inst_46078 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46152_46214 = state_46088__$1;
(statearr_46152_46214[(2)] = inst_46078);

(statearr_46152_46214[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (26))){
var inst_46020 = (state_46088[(29)]);
var inst_46074 = (state_46088[(2)]);
var inst_46075 = cljs.core.seq.call(null,inst_46020);
var state_46088__$1 = (function (){var statearr_46153 = state_46088;
(statearr_46153[(31)] = inst_46074);

return statearr_46153;
})();
if(inst_46075){
var statearr_46154_46215 = state_46088__$1;
(statearr_46154_46215[(1)] = (42));

} else {
var statearr_46155_46216 = state_46088__$1;
(statearr_46155_46216[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (16))){
var inst_45987 = (state_46088[(7)]);
var inst_45989 = cljs.core.chunked_seq_QMARK_.call(null,inst_45987);
var state_46088__$1 = state_46088;
if(inst_45989){
var statearr_46156_46217 = state_46088__$1;
(statearr_46156_46217[(1)] = (19));

} else {
var statearr_46157_46218 = state_46088__$1;
(statearr_46157_46218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (38))){
var inst_46067 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46158_46219 = state_46088__$1;
(statearr_46158_46219[(2)] = inst_46067);

(statearr_46158_46219[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (30))){
var state_46088__$1 = state_46088;
var statearr_46159_46220 = state_46088__$1;
(statearr_46159_46220[(2)] = null);

(statearr_46159_46220[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (10))){
var inst_45966 = (state_46088[(14)]);
var inst_45968 = (state_46088[(17)]);
var inst_45976 = cljs.core._nth.call(null,inst_45966,inst_45968);
var inst_45977 = cljs.core.nth.call(null,inst_45976,(0),null);
var inst_45978 = cljs.core.nth.call(null,inst_45976,(1),null);
var state_46088__$1 = (function (){var statearr_46160 = state_46088;
(statearr_46160[(26)] = inst_45977);

return statearr_46160;
})();
if(cljs.core.truth_(inst_45978)){
var statearr_46161_46221 = state_46088__$1;
(statearr_46161_46221[(1)] = (13));

} else {
var statearr_46162_46222 = state_46088__$1;
(statearr_46162_46222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (18))){
var inst_46013 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46163_46223 = state_46088__$1;
(statearr_46163_46223[(2)] = inst_46013);

(statearr_46163_46223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (42))){
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46088__$1,(45),dchan);
} else {
if((state_val_46089 === (37))){
var inst_46047 = (state_46088[(25)]);
var inst_45956 = (state_46088[(12)]);
var inst_46056 = (state_46088[(23)]);
var inst_46056__$1 = cljs.core.first.call(null,inst_46047);
var inst_46057 = cljs.core.async.put_BANG_.call(null,inst_46056__$1,inst_45956,done);
var state_46088__$1 = (function (){var statearr_46164 = state_46088;
(statearr_46164[(23)] = inst_46056__$1);

return statearr_46164;
})();
if(cljs.core.truth_(inst_46057)){
var statearr_46165_46224 = state_46088__$1;
(statearr_46165_46224[(1)] = (39));

} else {
var statearr_46166_46225 = state_46088__$1;
(statearr_46166_46225[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (8))){
var inst_45967 = (state_46088[(13)]);
var inst_45968 = (state_46088[(17)]);
var inst_45970 = (inst_45968 < inst_45967);
var inst_45971 = inst_45970;
var state_46088__$1 = state_46088;
if(cljs.core.truth_(inst_45971)){
var statearr_46167_46226 = state_46088__$1;
(statearr_46167_46226[(1)] = (10));

} else {
var statearr_46168_46227 = state_46088__$1;
(statearr_46168_46227[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46173,cs,m,dchan,dctr,done))
;
return ((function (switch__29971__auto__,c__29992__auto___46173,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29972__auto__ = null;
var cljs$core$async$mult_$_state_machine__29972__auto____0 = (function (){
var statearr_46169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46169[(0)] = cljs$core$async$mult_$_state_machine__29972__auto__);

(statearr_46169[(1)] = (1));

return statearr_46169;
});
var cljs$core$async$mult_$_state_machine__29972__auto____1 = (function (state_46088){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46170){if((e46170 instanceof Object)){
var ex__29975__auto__ = e46170;
var statearr_46171_46228 = state_46088;
(statearr_46171_46228[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46229 = state_46088;
state_46088 = G__46229;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29972__auto__ = function(state_46088){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29972__auto____1.call(this,state_46088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29972__auto____0;
cljs$core$async$mult_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29972__auto____1;
return cljs$core$async$mult_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46173,cs,m,dchan,dctr,done))
})();
var state__29994__auto__ = (function (){var statearr_46172 = f__29993__auto__.call(null);
(statearr_46172[(6)] = c__29992__auto___46173);

return statearr_46172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46173,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46231 = arguments.length;
switch (G__46231) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,state_map);
} else {
var m__27879__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,mode);
} else {
var m__27879__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___46243 = arguments.length;
var i__28365__auto___46244 = (0);
while(true){
if((i__28365__auto___46244 < len__28364__auto___46243)){
args__28371__auto__.push((arguments[i__28365__auto___46244]));

var G__46245 = (i__28365__auto___46244 + (1));
i__28365__auto___46244 = G__46245;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46237){
var map__46238 = p__46237;
var map__46238__$1 = ((((!((map__46238 == null)))?((((map__46238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46238):map__46238);
var opts = map__46238__$1;
var statearr_46240_46246 = state;
(statearr_46240_46246[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46238,map__46238__$1,opts){
return (function (val){
var statearr_46241_46247 = state;
(statearr_46241_46247[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46238,map__46238__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46242_46248 = state;
(statearr_46242_46248[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46233){
var G__46234 = cljs.core.first.call(null,seq46233);
var seq46233__$1 = cljs.core.next.call(null,seq46233);
var G__46235 = cljs.core.first.call(null,seq46233__$1);
var seq46233__$2 = cljs.core.next.call(null,seq46233__$1);
var G__46236 = cljs.core.first.call(null,seq46233__$2);
var seq46233__$3 = cljs.core.next.call(null,seq46233__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46234,G__46235,G__46236,seq46233__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46249 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46250){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46250 = meta46250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46251,meta46250__$1){
var self__ = this;
var _46251__$1 = this;
return (new cljs.core.async.t_cljs$core$async46249(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46250__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46251){
var self__ = this;
var _46251__$1 = this;
return self__.meta46250;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46250","meta46250",-774241252,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46249";

cljs.core.async.t_cljs$core$async46249.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async46249");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46249 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46249(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46250){
return (new cljs.core.async.t_cljs$core$async46249(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46250));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46249(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29992__auto___46413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46353){
var state_val_46354 = (state_46353[(1)]);
if((state_val_46354 === (7))){
var inst_46268 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46355_46414 = state_46353__$1;
(statearr_46355_46414[(2)] = inst_46268);

(statearr_46355_46414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (20))){
var inst_46280 = (state_46353[(7)]);
var state_46353__$1 = state_46353;
var statearr_46356_46415 = state_46353__$1;
(statearr_46356_46415[(2)] = inst_46280);

(statearr_46356_46415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (27))){
var state_46353__$1 = state_46353;
var statearr_46357_46416 = state_46353__$1;
(statearr_46357_46416[(2)] = null);

(statearr_46357_46416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (1))){
var inst_46255 = (state_46353[(8)]);
var inst_46255__$1 = calc_state.call(null);
var inst_46257 = (inst_46255__$1 == null);
var inst_46258 = cljs.core.not.call(null,inst_46257);
var state_46353__$1 = (function (){var statearr_46358 = state_46353;
(statearr_46358[(8)] = inst_46255__$1);

return statearr_46358;
})();
if(inst_46258){
var statearr_46359_46417 = state_46353__$1;
(statearr_46359_46417[(1)] = (2));

} else {
var statearr_46360_46418 = state_46353__$1;
(statearr_46360_46418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (24))){
var inst_46304 = (state_46353[(9)]);
var inst_46327 = (state_46353[(10)]);
var inst_46313 = (state_46353[(11)]);
var inst_46327__$1 = inst_46304.call(null,inst_46313);
var state_46353__$1 = (function (){var statearr_46361 = state_46353;
(statearr_46361[(10)] = inst_46327__$1);

return statearr_46361;
})();
if(cljs.core.truth_(inst_46327__$1)){
var statearr_46362_46419 = state_46353__$1;
(statearr_46362_46419[(1)] = (29));

} else {
var statearr_46363_46420 = state_46353__$1;
(statearr_46363_46420[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (4))){
var inst_46271 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46271)){
var statearr_46364_46421 = state_46353__$1;
(statearr_46364_46421[(1)] = (8));

} else {
var statearr_46365_46422 = state_46353__$1;
(statearr_46365_46422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (15))){
var inst_46298 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46298)){
var statearr_46366_46423 = state_46353__$1;
(statearr_46366_46423[(1)] = (19));

} else {
var statearr_46367_46424 = state_46353__$1;
(statearr_46367_46424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (21))){
var inst_46303 = (state_46353[(12)]);
var inst_46303__$1 = (state_46353[(2)]);
var inst_46304 = cljs.core.get.call(null,inst_46303__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46305 = cljs.core.get.call(null,inst_46303__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46306 = cljs.core.get.call(null,inst_46303__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46353__$1 = (function (){var statearr_46368 = state_46353;
(statearr_46368[(12)] = inst_46303__$1);

(statearr_46368[(9)] = inst_46304);

(statearr_46368[(13)] = inst_46305);

return statearr_46368;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46353__$1,(22),inst_46306);
} else {
if((state_val_46354 === (31))){
var inst_46335 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46335)){
var statearr_46369_46425 = state_46353__$1;
(statearr_46369_46425[(1)] = (32));

} else {
var statearr_46370_46426 = state_46353__$1;
(statearr_46370_46426[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (32))){
var inst_46312 = (state_46353[(14)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46353__$1,(35),out,inst_46312);
} else {
if((state_val_46354 === (33))){
var inst_46303 = (state_46353[(12)]);
var inst_46280 = inst_46303;
var state_46353__$1 = (function (){var statearr_46371 = state_46353;
(statearr_46371[(7)] = inst_46280);

return statearr_46371;
})();
var statearr_46372_46427 = state_46353__$1;
(statearr_46372_46427[(2)] = null);

(statearr_46372_46427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (13))){
var inst_46280 = (state_46353[(7)]);
var inst_46287 = inst_46280.cljs$lang$protocol_mask$partition0$;
var inst_46288 = (inst_46287 & (64));
var inst_46289 = inst_46280.cljs$core$ISeq$;
var inst_46290 = (cljs.core.PROTOCOL_SENTINEL === inst_46289);
var inst_46291 = (inst_46288) || (inst_46290);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46291)){
var statearr_46373_46428 = state_46353__$1;
(statearr_46373_46428[(1)] = (16));

} else {
var statearr_46374_46429 = state_46353__$1;
(statearr_46374_46429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (22))){
var inst_46312 = (state_46353[(14)]);
var inst_46313 = (state_46353[(11)]);
var inst_46311 = (state_46353[(2)]);
var inst_46312__$1 = cljs.core.nth.call(null,inst_46311,(0),null);
var inst_46313__$1 = cljs.core.nth.call(null,inst_46311,(1),null);
var inst_46314 = (inst_46312__$1 == null);
var inst_46315 = cljs.core._EQ_.call(null,inst_46313__$1,change);
var inst_46316 = (inst_46314) || (inst_46315);
var state_46353__$1 = (function (){var statearr_46375 = state_46353;
(statearr_46375[(14)] = inst_46312__$1);

(statearr_46375[(11)] = inst_46313__$1);

return statearr_46375;
})();
if(cljs.core.truth_(inst_46316)){
var statearr_46376_46430 = state_46353__$1;
(statearr_46376_46430[(1)] = (23));

} else {
var statearr_46377_46431 = state_46353__$1;
(statearr_46377_46431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (36))){
var inst_46303 = (state_46353[(12)]);
var inst_46280 = inst_46303;
var state_46353__$1 = (function (){var statearr_46378 = state_46353;
(statearr_46378[(7)] = inst_46280);

return statearr_46378;
})();
var statearr_46379_46432 = state_46353__$1;
(statearr_46379_46432[(2)] = null);

(statearr_46379_46432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (29))){
var inst_46327 = (state_46353[(10)]);
var state_46353__$1 = state_46353;
var statearr_46380_46433 = state_46353__$1;
(statearr_46380_46433[(2)] = inst_46327);

(statearr_46380_46433[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (6))){
var state_46353__$1 = state_46353;
var statearr_46381_46434 = state_46353__$1;
(statearr_46381_46434[(2)] = false);

(statearr_46381_46434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (28))){
var inst_46323 = (state_46353[(2)]);
var inst_46324 = calc_state.call(null);
var inst_46280 = inst_46324;
var state_46353__$1 = (function (){var statearr_46382 = state_46353;
(statearr_46382[(15)] = inst_46323);

(statearr_46382[(7)] = inst_46280);

return statearr_46382;
})();
var statearr_46383_46435 = state_46353__$1;
(statearr_46383_46435[(2)] = null);

(statearr_46383_46435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (25))){
var inst_46349 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46384_46436 = state_46353__$1;
(statearr_46384_46436[(2)] = inst_46349);

(statearr_46384_46436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (34))){
var inst_46347 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46385_46437 = state_46353__$1;
(statearr_46385_46437[(2)] = inst_46347);

(statearr_46385_46437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (17))){
var state_46353__$1 = state_46353;
var statearr_46386_46438 = state_46353__$1;
(statearr_46386_46438[(2)] = false);

(statearr_46386_46438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (3))){
var state_46353__$1 = state_46353;
var statearr_46387_46439 = state_46353__$1;
(statearr_46387_46439[(2)] = false);

(statearr_46387_46439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (12))){
var inst_46351 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46353__$1,inst_46351);
} else {
if((state_val_46354 === (2))){
var inst_46255 = (state_46353[(8)]);
var inst_46260 = inst_46255.cljs$lang$protocol_mask$partition0$;
var inst_46261 = (inst_46260 & (64));
var inst_46262 = inst_46255.cljs$core$ISeq$;
var inst_46263 = (cljs.core.PROTOCOL_SENTINEL === inst_46262);
var inst_46264 = (inst_46261) || (inst_46263);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46264)){
var statearr_46388_46440 = state_46353__$1;
(statearr_46388_46440[(1)] = (5));

} else {
var statearr_46389_46441 = state_46353__$1;
(statearr_46389_46441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (23))){
var inst_46312 = (state_46353[(14)]);
var inst_46318 = (inst_46312 == null);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46318)){
var statearr_46390_46442 = state_46353__$1;
(statearr_46390_46442[(1)] = (26));

} else {
var statearr_46391_46443 = state_46353__$1;
(statearr_46391_46443[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (35))){
var inst_46338 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46338)){
var statearr_46392_46444 = state_46353__$1;
(statearr_46392_46444[(1)] = (36));

} else {
var statearr_46393_46445 = state_46353__$1;
(statearr_46393_46445[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (19))){
var inst_46280 = (state_46353[(7)]);
var inst_46300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46280);
var state_46353__$1 = state_46353;
var statearr_46394_46446 = state_46353__$1;
(statearr_46394_46446[(2)] = inst_46300);

(statearr_46394_46446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (11))){
var inst_46280 = (state_46353[(7)]);
var inst_46284 = (inst_46280 == null);
var inst_46285 = cljs.core.not.call(null,inst_46284);
var state_46353__$1 = state_46353;
if(inst_46285){
var statearr_46395_46447 = state_46353__$1;
(statearr_46395_46447[(1)] = (13));

} else {
var statearr_46396_46448 = state_46353__$1;
(statearr_46396_46448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (9))){
var inst_46255 = (state_46353[(8)]);
var state_46353__$1 = state_46353;
var statearr_46397_46449 = state_46353__$1;
(statearr_46397_46449[(2)] = inst_46255);

(statearr_46397_46449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (5))){
var state_46353__$1 = state_46353;
var statearr_46398_46450 = state_46353__$1;
(statearr_46398_46450[(2)] = true);

(statearr_46398_46450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (14))){
var state_46353__$1 = state_46353;
var statearr_46399_46451 = state_46353__$1;
(statearr_46399_46451[(2)] = false);

(statearr_46399_46451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (26))){
var inst_46313 = (state_46353[(11)]);
var inst_46320 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46313);
var state_46353__$1 = state_46353;
var statearr_46400_46452 = state_46353__$1;
(statearr_46400_46452[(2)] = inst_46320);

(statearr_46400_46452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (16))){
var state_46353__$1 = state_46353;
var statearr_46401_46453 = state_46353__$1;
(statearr_46401_46453[(2)] = true);

(statearr_46401_46453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (38))){
var inst_46343 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46402_46454 = state_46353__$1;
(statearr_46402_46454[(2)] = inst_46343);

(statearr_46402_46454[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (30))){
var inst_46304 = (state_46353[(9)]);
var inst_46305 = (state_46353[(13)]);
var inst_46313 = (state_46353[(11)]);
var inst_46330 = cljs.core.empty_QMARK_.call(null,inst_46304);
var inst_46331 = inst_46305.call(null,inst_46313);
var inst_46332 = cljs.core.not.call(null,inst_46331);
var inst_46333 = (inst_46330) && (inst_46332);
var state_46353__$1 = state_46353;
var statearr_46403_46455 = state_46353__$1;
(statearr_46403_46455[(2)] = inst_46333);

(statearr_46403_46455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (10))){
var inst_46255 = (state_46353[(8)]);
var inst_46276 = (state_46353[(2)]);
var inst_46277 = cljs.core.get.call(null,inst_46276,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46278 = cljs.core.get.call(null,inst_46276,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46279 = cljs.core.get.call(null,inst_46276,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46280 = inst_46255;
var state_46353__$1 = (function (){var statearr_46404 = state_46353;
(statearr_46404[(7)] = inst_46280);

(statearr_46404[(16)] = inst_46279);

(statearr_46404[(17)] = inst_46278);

(statearr_46404[(18)] = inst_46277);

return statearr_46404;
})();
var statearr_46405_46456 = state_46353__$1;
(statearr_46405_46456[(2)] = null);

(statearr_46405_46456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (18))){
var inst_46295 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46406_46457 = state_46353__$1;
(statearr_46406_46457[(2)] = inst_46295);

(statearr_46406_46457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (37))){
var state_46353__$1 = state_46353;
var statearr_46407_46458 = state_46353__$1;
(statearr_46407_46458[(2)] = null);

(statearr_46407_46458[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (8))){
var inst_46255 = (state_46353[(8)]);
var inst_46273 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46255);
var state_46353__$1 = state_46353;
var statearr_46408_46459 = state_46353__$1;
(statearr_46408_46459[(2)] = inst_46273);

(statearr_46408_46459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29971__auto__,c__29992__auto___46413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29972__auto__ = null;
var cljs$core$async$mix_$_state_machine__29972__auto____0 = (function (){
var statearr_46409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46409[(0)] = cljs$core$async$mix_$_state_machine__29972__auto__);

(statearr_46409[(1)] = (1));

return statearr_46409;
});
var cljs$core$async$mix_$_state_machine__29972__auto____1 = (function (state_46353){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46410){if((e46410 instanceof Object)){
var ex__29975__auto__ = e46410;
var statearr_46411_46460 = state_46353;
(statearr_46411_46460[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46461 = state_46353;
state_46353 = G__46461;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29972__auto__ = function(state_46353){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29972__auto____1.call(this,state_46353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29972__auto____0;
cljs$core$async$mix_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29972__auto____1;
return cljs$core$async$mix_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29994__auto__ = (function (){var statearr_46412 = f__29993__auto__.call(null);
(statearr_46412[(6)] = c__29992__auto___46413);

return statearr_46412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46413,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46463 = arguments.length;
switch (G__46463) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46467 = arguments.length;
switch (G__46467) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27195__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27195__auto__,mults){
return (function (p1__46465_SHARP_){
if(cljs.core.truth_(p1__46465_SHARP_.call(null,topic))){
return p1__46465_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46465_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46468 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46469){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46469 = meta46469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46470,meta46469__$1){
var self__ = this;
var _46470__$1 = this;
return (new cljs.core.async.t_cljs$core$async46468(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46469__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46470){
var self__ = this;
var _46470__$1 = this;
return self__.meta46469;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46469","meta46469",-955419739,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46468";

cljs.core.async.t_cljs$core$async46468.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async46468");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46468 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46468(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46469){
return (new cljs.core.async.t_cljs$core$async46468(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46469));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46468(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29992__auto___46588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46588,mults,ensure_mult,p){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46588,mults,ensure_mult,p){
return (function (state_46542){
var state_val_46543 = (state_46542[(1)]);
if((state_val_46543 === (7))){
var inst_46538 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46544_46589 = state_46542__$1;
(statearr_46544_46589[(2)] = inst_46538);

(statearr_46544_46589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (20))){
var state_46542__$1 = state_46542;
var statearr_46545_46590 = state_46542__$1;
(statearr_46545_46590[(2)] = null);

(statearr_46545_46590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (1))){
var state_46542__$1 = state_46542;
var statearr_46546_46591 = state_46542__$1;
(statearr_46546_46591[(2)] = null);

(statearr_46546_46591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (24))){
var inst_46521 = (state_46542[(7)]);
var inst_46530 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46521);
var state_46542__$1 = state_46542;
var statearr_46547_46592 = state_46542__$1;
(statearr_46547_46592[(2)] = inst_46530);

(statearr_46547_46592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (4))){
var inst_46473 = (state_46542[(8)]);
var inst_46473__$1 = (state_46542[(2)]);
var inst_46474 = (inst_46473__$1 == null);
var state_46542__$1 = (function (){var statearr_46548 = state_46542;
(statearr_46548[(8)] = inst_46473__$1);

return statearr_46548;
})();
if(cljs.core.truth_(inst_46474)){
var statearr_46549_46593 = state_46542__$1;
(statearr_46549_46593[(1)] = (5));

} else {
var statearr_46550_46594 = state_46542__$1;
(statearr_46550_46594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (15))){
var inst_46515 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46551_46595 = state_46542__$1;
(statearr_46551_46595[(2)] = inst_46515);

(statearr_46551_46595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (21))){
var inst_46535 = (state_46542[(2)]);
var state_46542__$1 = (function (){var statearr_46552 = state_46542;
(statearr_46552[(9)] = inst_46535);

return statearr_46552;
})();
var statearr_46553_46596 = state_46542__$1;
(statearr_46553_46596[(2)] = null);

(statearr_46553_46596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (13))){
var inst_46497 = (state_46542[(10)]);
var inst_46499 = cljs.core.chunked_seq_QMARK_.call(null,inst_46497);
var state_46542__$1 = state_46542;
if(inst_46499){
var statearr_46554_46597 = state_46542__$1;
(statearr_46554_46597[(1)] = (16));

} else {
var statearr_46555_46598 = state_46542__$1;
(statearr_46555_46598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (22))){
var inst_46527 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
if(cljs.core.truth_(inst_46527)){
var statearr_46556_46599 = state_46542__$1;
(statearr_46556_46599[(1)] = (23));

} else {
var statearr_46557_46600 = state_46542__$1;
(statearr_46557_46600[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (6))){
var inst_46521 = (state_46542[(7)]);
var inst_46523 = (state_46542[(11)]);
var inst_46473 = (state_46542[(8)]);
var inst_46521__$1 = topic_fn.call(null,inst_46473);
var inst_46522 = cljs.core.deref.call(null,mults);
var inst_46523__$1 = cljs.core.get.call(null,inst_46522,inst_46521__$1);
var state_46542__$1 = (function (){var statearr_46558 = state_46542;
(statearr_46558[(7)] = inst_46521__$1);

(statearr_46558[(11)] = inst_46523__$1);

return statearr_46558;
})();
if(cljs.core.truth_(inst_46523__$1)){
var statearr_46559_46601 = state_46542__$1;
(statearr_46559_46601[(1)] = (19));

} else {
var statearr_46560_46602 = state_46542__$1;
(statearr_46560_46602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (25))){
var inst_46532 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46561_46603 = state_46542__$1;
(statearr_46561_46603[(2)] = inst_46532);

(statearr_46561_46603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (17))){
var inst_46497 = (state_46542[(10)]);
var inst_46506 = cljs.core.first.call(null,inst_46497);
var inst_46507 = cljs.core.async.muxch_STAR_.call(null,inst_46506);
var inst_46508 = cljs.core.async.close_BANG_.call(null,inst_46507);
var inst_46509 = cljs.core.next.call(null,inst_46497);
var inst_46483 = inst_46509;
var inst_46484 = null;
var inst_46485 = (0);
var inst_46486 = (0);
var state_46542__$1 = (function (){var statearr_46562 = state_46542;
(statearr_46562[(12)] = inst_46486);

(statearr_46562[(13)] = inst_46508);

(statearr_46562[(14)] = inst_46484);

(statearr_46562[(15)] = inst_46483);

(statearr_46562[(16)] = inst_46485);

return statearr_46562;
})();
var statearr_46563_46604 = state_46542__$1;
(statearr_46563_46604[(2)] = null);

(statearr_46563_46604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (3))){
var inst_46540 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46542__$1,inst_46540);
} else {
if((state_val_46543 === (12))){
var inst_46517 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46564_46605 = state_46542__$1;
(statearr_46564_46605[(2)] = inst_46517);

(statearr_46564_46605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (2))){
var state_46542__$1 = state_46542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46542__$1,(4),ch);
} else {
if((state_val_46543 === (23))){
var state_46542__$1 = state_46542;
var statearr_46565_46606 = state_46542__$1;
(statearr_46565_46606[(2)] = null);

(statearr_46565_46606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (19))){
var inst_46523 = (state_46542[(11)]);
var inst_46473 = (state_46542[(8)]);
var inst_46525 = cljs.core.async.muxch_STAR_.call(null,inst_46523);
var state_46542__$1 = state_46542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46542__$1,(22),inst_46525,inst_46473);
} else {
if((state_val_46543 === (11))){
var inst_46483 = (state_46542[(15)]);
var inst_46497 = (state_46542[(10)]);
var inst_46497__$1 = cljs.core.seq.call(null,inst_46483);
var state_46542__$1 = (function (){var statearr_46566 = state_46542;
(statearr_46566[(10)] = inst_46497__$1);

return statearr_46566;
})();
if(inst_46497__$1){
var statearr_46567_46607 = state_46542__$1;
(statearr_46567_46607[(1)] = (13));

} else {
var statearr_46568_46608 = state_46542__$1;
(statearr_46568_46608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (9))){
var inst_46519 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46569_46609 = state_46542__$1;
(statearr_46569_46609[(2)] = inst_46519);

(statearr_46569_46609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (5))){
var inst_46480 = cljs.core.deref.call(null,mults);
var inst_46481 = cljs.core.vals.call(null,inst_46480);
var inst_46482 = cljs.core.seq.call(null,inst_46481);
var inst_46483 = inst_46482;
var inst_46484 = null;
var inst_46485 = (0);
var inst_46486 = (0);
var state_46542__$1 = (function (){var statearr_46570 = state_46542;
(statearr_46570[(12)] = inst_46486);

(statearr_46570[(14)] = inst_46484);

(statearr_46570[(15)] = inst_46483);

(statearr_46570[(16)] = inst_46485);

return statearr_46570;
})();
var statearr_46571_46610 = state_46542__$1;
(statearr_46571_46610[(2)] = null);

(statearr_46571_46610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (14))){
var state_46542__$1 = state_46542;
var statearr_46575_46611 = state_46542__$1;
(statearr_46575_46611[(2)] = null);

(statearr_46575_46611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (16))){
var inst_46497 = (state_46542[(10)]);
var inst_46501 = cljs.core.chunk_first.call(null,inst_46497);
var inst_46502 = cljs.core.chunk_rest.call(null,inst_46497);
var inst_46503 = cljs.core.count.call(null,inst_46501);
var inst_46483 = inst_46502;
var inst_46484 = inst_46501;
var inst_46485 = inst_46503;
var inst_46486 = (0);
var state_46542__$1 = (function (){var statearr_46576 = state_46542;
(statearr_46576[(12)] = inst_46486);

(statearr_46576[(14)] = inst_46484);

(statearr_46576[(15)] = inst_46483);

(statearr_46576[(16)] = inst_46485);

return statearr_46576;
})();
var statearr_46577_46612 = state_46542__$1;
(statearr_46577_46612[(2)] = null);

(statearr_46577_46612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (10))){
var inst_46486 = (state_46542[(12)]);
var inst_46484 = (state_46542[(14)]);
var inst_46483 = (state_46542[(15)]);
var inst_46485 = (state_46542[(16)]);
var inst_46491 = cljs.core._nth.call(null,inst_46484,inst_46486);
var inst_46492 = cljs.core.async.muxch_STAR_.call(null,inst_46491);
var inst_46493 = cljs.core.async.close_BANG_.call(null,inst_46492);
var inst_46494 = (inst_46486 + (1));
var tmp46572 = inst_46484;
var tmp46573 = inst_46483;
var tmp46574 = inst_46485;
var inst_46483__$1 = tmp46573;
var inst_46484__$1 = tmp46572;
var inst_46485__$1 = tmp46574;
var inst_46486__$1 = inst_46494;
var state_46542__$1 = (function (){var statearr_46578 = state_46542;
(statearr_46578[(17)] = inst_46493);

(statearr_46578[(12)] = inst_46486__$1);

(statearr_46578[(14)] = inst_46484__$1);

(statearr_46578[(15)] = inst_46483__$1);

(statearr_46578[(16)] = inst_46485__$1);

return statearr_46578;
})();
var statearr_46579_46613 = state_46542__$1;
(statearr_46579_46613[(2)] = null);

(statearr_46579_46613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (18))){
var inst_46512 = (state_46542[(2)]);
var state_46542__$1 = state_46542;
var statearr_46580_46614 = state_46542__$1;
(statearr_46580_46614[(2)] = inst_46512);

(statearr_46580_46614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46543 === (8))){
var inst_46486 = (state_46542[(12)]);
var inst_46485 = (state_46542[(16)]);
var inst_46488 = (inst_46486 < inst_46485);
var inst_46489 = inst_46488;
var state_46542__$1 = state_46542;
if(cljs.core.truth_(inst_46489)){
var statearr_46581_46615 = state_46542__$1;
(statearr_46581_46615[(1)] = (10));

} else {
var statearr_46582_46616 = state_46542__$1;
(statearr_46582_46616[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46588,mults,ensure_mult,p))
;
return ((function (switch__29971__auto__,c__29992__auto___46588,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_46583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46583[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_46583[(1)] = (1));

return statearr_46583;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_46542){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46584){if((e46584 instanceof Object)){
var ex__29975__auto__ = e46584;
var statearr_46585_46617 = state_46542;
(statearr_46585_46617[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46618 = state_46542;
state_46542 = G__46618;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_46542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_46542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46588,mults,ensure_mult,p))
})();
var state__29994__auto__ = (function (){var statearr_46586 = f__29993__auto__.call(null);
(statearr_46586[(6)] = c__29992__auto___46588);

return statearr_46586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46588,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46620 = arguments.length;
switch (G__46620) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46623 = arguments.length;
switch (G__46623) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46626 = arguments.length;
switch (G__46626) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29992__auto___46693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46693,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46693,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46665){
var state_val_46666 = (state_46665[(1)]);
if((state_val_46666 === (7))){
var state_46665__$1 = state_46665;
var statearr_46667_46694 = state_46665__$1;
(statearr_46667_46694[(2)] = null);

(statearr_46667_46694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (1))){
var state_46665__$1 = state_46665;
var statearr_46668_46695 = state_46665__$1;
(statearr_46668_46695[(2)] = null);

(statearr_46668_46695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (4))){
var inst_46629 = (state_46665[(7)]);
var inst_46631 = (inst_46629 < cnt);
var state_46665__$1 = state_46665;
if(cljs.core.truth_(inst_46631)){
var statearr_46669_46696 = state_46665__$1;
(statearr_46669_46696[(1)] = (6));

} else {
var statearr_46670_46697 = state_46665__$1;
(statearr_46670_46697[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (15))){
var inst_46661 = (state_46665[(2)]);
var state_46665__$1 = state_46665;
var statearr_46671_46698 = state_46665__$1;
(statearr_46671_46698[(2)] = inst_46661);

(statearr_46671_46698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (13))){
var inst_46654 = cljs.core.async.close_BANG_.call(null,out);
var state_46665__$1 = state_46665;
var statearr_46672_46699 = state_46665__$1;
(statearr_46672_46699[(2)] = inst_46654);

(statearr_46672_46699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (6))){
var state_46665__$1 = state_46665;
var statearr_46673_46700 = state_46665__$1;
(statearr_46673_46700[(2)] = null);

(statearr_46673_46700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (3))){
var inst_46663 = (state_46665[(2)]);
var state_46665__$1 = state_46665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46665__$1,inst_46663);
} else {
if((state_val_46666 === (12))){
var inst_46651 = (state_46665[(8)]);
var inst_46651__$1 = (state_46665[(2)]);
var inst_46652 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46651__$1);
var state_46665__$1 = (function (){var statearr_46674 = state_46665;
(statearr_46674[(8)] = inst_46651__$1);

return statearr_46674;
})();
if(cljs.core.truth_(inst_46652)){
var statearr_46675_46701 = state_46665__$1;
(statearr_46675_46701[(1)] = (13));

} else {
var statearr_46676_46702 = state_46665__$1;
(statearr_46676_46702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (2))){
var inst_46628 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46629 = (0);
var state_46665__$1 = (function (){var statearr_46677 = state_46665;
(statearr_46677[(7)] = inst_46629);

(statearr_46677[(9)] = inst_46628);

return statearr_46677;
})();
var statearr_46678_46703 = state_46665__$1;
(statearr_46678_46703[(2)] = null);

(statearr_46678_46703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (11))){
var inst_46629 = (state_46665[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46665,(10),Object,null,(9));
var inst_46638 = chs__$1.call(null,inst_46629);
var inst_46639 = done.call(null,inst_46629);
var inst_46640 = cljs.core.async.take_BANG_.call(null,inst_46638,inst_46639);
var state_46665__$1 = state_46665;
var statearr_46679_46704 = state_46665__$1;
(statearr_46679_46704[(2)] = inst_46640);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (9))){
var inst_46629 = (state_46665[(7)]);
var inst_46642 = (state_46665[(2)]);
var inst_46643 = (inst_46629 + (1));
var inst_46629__$1 = inst_46643;
var state_46665__$1 = (function (){var statearr_46680 = state_46665;
(statearr_46680[(7)] = inst_46629__$1);

(statearr_46680[(10)] = inst_46642);

return statearr_46680;
})();
var statearr_46681_46705 = state_46665__$1;
(statearr_46681_46705[(2)] = null);

(statearr_46681_46705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (5))){
var inst_46649 = (state_46665[(2)]);
var state_46665__$1 = (function (){var statearr_46682 = state_46665;
(statearr_46682[(11)] = inst_46649);

return statearr_46682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46665__$1,(12),dchan);
} else {
if((state_val_46666 === (14))){
var inst_46651 = (state_46665[(8)]);
var inst_46656 = cljs.core.apply.call(null,f,inst_46651);
var state_46665__$1 = state_46665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46665__$1,(16),out,inst_46656);
} else {
if((state_val_46666 === (16))){
var inst_46658 = (state_46665[(2)]);
var state_46665__$1 = (function (){var statearr_46683 = state_46665;
(statearr_46683[(12)] = inst_46658);

return statearr_46683;
})();
var statearr_46684_46706 = state_46665__$1;
(statearr_46684_46706[(2)] = null);

(statearr_46684_46706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (10))){
var inst_46633 = (state_46665[(2)]);
var inst_46634 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46665__$1 = (function (){var statearr_46685 = state_46665;
(statearr_46685[(13)] = inst_46633);

return statearr_46685;
})();
var statearr_46686_46707 = state_46665__$1;
(statearr_46686_46707[(2)] = inst_46634);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46666 === (8))){
var inst_46647 = (state_46665[(2)]);
var state_46665__$1 = state_46665;
var statearr_46687_46708 = state_46665__$1;
(statearr_46687_46708[(2)] = inst_46647);

(statearr_46687_46708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46693,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29971__auto__,c__29992__auto___46693,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_46688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46688[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_46688[(1)] = (1));

return statearr_46688;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_46665){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46689){if((e46689 instanceof Object)){
var ex__29975__auto__ = e46689;
var statearr_46690_46709 = state_46665;
(statearr_46690_46709[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46710 = state_46665;
state_46665 = G__46710;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_46665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_46665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46693,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29994__auto__ = (function (){var statearr_46691 = f__29993__auto__.call(null);
(statearr_46691[(6)] = c__29992__auto___46693);

return statearr_46691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46693,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46713 = arguments.length;
switch (G__46713) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29992__auto___46767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46767,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46767,out){
return (function (state_46745){
var state_val_46746 = (state_46745[(1)]);
if((state_val_46746 === (7))){
var inst_46724 = (state_46745[(7)]);
var inst_46725 = (state_46745[(8)]);
var inst_46724__$1 = (state_46745[(2)]);
var inst_46725__$1 = cljs.core.nth.call(null,inst_46724__$1,(0),null);
var inst_46726 = cljs.core.nth.call(null,inst_46724__$1,(1),null);
var inst_46727 = (inst_46725__$1 == null);
var state_46745__$1 = (function (){var statearr_46747 = state_46745;
(statearr_46747[(7)] = inst_46724__$1);

(statearr_46747[(8)] = inst_46725__$1);

(statearr_46747[(9)] = inst_46726);

return statearr_46747;
})();
if(cljs.core.truth_(inst_46727)){
var statearr_46748_46768 = state_46745__$1;
(statearr_46748_46768[(1)] = (8));

} else {
var statearr_46749_46769 = state_46745__$1;
(statearr_46749_46769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (1))){
var inst_46714 = cljs.core.vec.call(null,chs);
var inst_46715 = inst_46714;
var state_46745__$1 = (function (){var statearr_46750 = state_46745;
(statearr_46750[(10)] = inst_46715);

return statearr_46750;
})();
var statearr_46751_46770 = state_46745__$1;
(statearr_46751_46770[(2)] = null);

(statearr_46751_46770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (4))){
var inst_46715 = (state_46745[(10)]);
var state_46745__$1 = state_46745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46745__$1,(7),inst_46715);
} else {
if((state_val_46746 === (6))){
var inst_46741 = (state_46745[(2)]);
var state_46745__$1 = state_46745;
var statearr_46752_46771 = state_46745__$1;
(statearr_46752_46771[(2)] = inst_46741);

(statearr_46752_46771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (3))){
var inst_46743 = (state_46745[(2)]);
var state_46745__$1 = state_46745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46745__$1,inst_46743);
} else {
if((state_val_46746 === (2))){
var inst_46715 = (state_46745[(10)]);
var inst_46717 = cljs.core.count.call(null,inst_46715);
var inst_46718 = (inst_46717 > (0));
var state_46745__$1 = state_46745;
if(cljs.core.truth_(inst_46718)){
var statearr_46754_46772 = state_46745__$1;
(statearr_46754_46772[(1)] = (4));

} else {
var statearr_46755_46773 = state_46745__$1;
(statearr_46755_46773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (11))){
var inst_46715 = (state_46745[(10)]);
var inst_46734 = (state_46745[(2)]);
var tmp46753 = inst_46715;
var inst_46715__$1 = tmp46753;
var state_46745__$1 = (function (){var statearr_46756 = state_46745;
(statearr_46756[(10)] = inst_46715__$1);

(statearr_46756[(11)] = inst_46734);

return statearr_46756;
})();
var statearr_46757_46774 = state_46745__$1;
(statearr_46757_46774[(2)] = null);

(statearr_46757_46774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (9))){
var inst_46725 = (state_46745[(8)]);
var state_46745__$1 = state_46745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46745__$1,(11),out,inst_46725);
} else {
if((state_val_46746 === (5))){
var inst_46739 = cljs.core.async.close_BANG_.call(null,out);
var state_46745__$1 = state_46745;
var statearr_46758_46775 = state_46745__$1;
(statearr_46758_46775[(2)] = inst_46739);

(statearr_46758_46775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (10))){
var inst_46737 = (state_46745[(2)]);
var state_46745__$1 = state_46745;
var statearr_46759_46776 = state_46745__$1;
(statearr_46759_46776[(2)] = inst_46737);

(statearr_46759_46776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46746 === (8))){
var inst_46724 = (state_46745[(7)]);
var inst_46715 = (state_46745[(10)]);
var inst_46725 = (state_46745[(8)]);
var inst_46726 = (state_46745[(9)]);
var inst_46729 = (function (){var cs = inst_46715;
var vec__46720 = inst_46724;
var v = inst_46725;
var c = inst_46726;
return ((function (cs,vec__46720,v,c,inst_46724,inst_46715,inst_46725,inst_46726,state_val_46746,c__29992__auto___46767,out){
return (function (p1__46711_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46711_SHARP_);
});
;})(cs,vec__46720,v,c,inst_46724,inst_46715,inst_46725,inst_46726,state_val_46746,c__29992__auto___46767,out))
})();
var inst_46730 = cljs.core.filterv.call(null,inst_46729,inst_46715);
var inst_46715__$1 = inst_46730;
var state_46745__$1 = (function (){var statearr_46760 = state_46745;
(statearr_46760[(10)] = inst_46715__$1);

return statearr_46760;
})();
var statearr_46761_46777 = state_46745__$1;
(statearr_46761_46777[(2)] = null);

(statearr_46761_46777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46767,out))
;
return ((function (switch__29971__auto__,c__29992__auto___46767,out){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_46762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46762[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_46762[(1)] = (1));

return statearr_46762;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_46745){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46763){if((e46763 instanceof Object)){
var ex__29975__auto__ = e46763;
var statearr_46764_46778 = state_46745;
(statearr_46764_46778[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46779 = state_46745;
state_46745 = G__46779;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_46745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_46745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46767,out))
})();
var state__29994__auto__ = (function (){var statearr_46765 = f__29993__auto__.call(null);
(statearr_46765[(6)] = c__29992__auto___46767);

return statearr_46765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46767,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46781 = arguments.length;
switch (G__46781) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29992__auto___46826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46826,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46826,out){
return (function (state_46805){
var state_val_46806 = (state_46805[(1)]);
if((state_val_46806 === (7))){
var inst_46787 = (state_46805[(7)]);
var inst_46787__$1 = (state_46805[(2)]);
var inst_46788 = (inst_46787__$1 == null);
var inst_46789 = cljs.core.not.call(null,inst_46788);
var state_46805__$1 = (function (){var statearr_46807 = state_46805;
(statearr_46807[(7)] = inst_46787__$1);

return statearr_46807;
})();
if(inst_46789){
var statearr_46808_46827 = state_46805__$1;
(statearr_46808_46827[(1)] = (8));

} else {
var statearr_46809_46828 = state_46805__$1;
(statearr_46809_46828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (1))){
var inst_46782 = (0);
var state_46805__$1 = (function (){var statearr_46810 = state_46805;
(statearr_46810[(8)] = inst_46782);

return statearr_46810;
})();
var statearr_46811_46829 = state_46805__$1;
(statearr_46811_46829[(2)] = null);

(statearr_46811_46829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (4))){
var state_46805__$1 = state_46805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46805__$1,(7),ch);
} else {
if((state_val_46806 === (6))){
var inst_46800 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
var statearr_46812_46830 = state_46805__$1;
(statearr_46812_46830[(2)] = inst_46800);

(statearr_46812_46830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (3))){
var inst_46802 = (state_46805[(2)]);
var inst_46803 = cljs.core.async.close_BANG_.call(null,out);
var state_46805__$1 = (function (){var statearr_46813 = state_46805;
(statearr_46813[(9)] = inst_46802);

return statearr_46813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46805__$1,inst_46803);
} else {
if((state_val_46806 === (2))){
var inst_46782 = (state_46805[(8)]);
var inst_46784 = (inst_46782 < n);
var state_46805__$1 = state_46805;
if(cljs.core.truth_(inst_46784)){
var statearr_46814_46831 = state_46805__$1;
(statearr_46814_46831[(1)] = (4));

} else {
var statearr_46815_46832 = state_46805__$1;
(statearr_46815_46832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (11))){
var inst_46782 = (state_46805[(8)]);
var inst_46792 = (state_46805[(2)]);
var inst_46793 = (inst_46782 + (1));
var inst_46782__$1 = inst_46793;
var state_46805__$1 = (function (){var statearr_46816 = state_46805;
(statearr_46816[(8)] = inst_46782__$1);

(statearr_46816[(10)] = inst_46792);

return statearr_46816;
})();
var statearr_46817_46833 = state_46805__$1;
(statearr_46817_46833[(2)] = null);

(statearr_46817_46833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (9))){
var state_46805__$1 = state_46805;
var statearr_46818_46834 = state_46805__$1;
(statearr_46818_46834[(2)] = null);

(statearr_46818_46834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (5))){
var state_46805__$1 = state_46805;
var statearr_46819_46835 = state_46805__$1;
(statearr_46819_46835[(2)] = null);

(statearr_46819_46835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (10))){
var inst_46797 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
var statearr_46820_46836 = state_46805__$1;
(statearr_46820_46836[(2)] = inst_46797);

(statearr_46820_46836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (8))){
var inst_46787 = (state_46805[(7)]);
var state_46805__$1 = state_46805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46805__$1,(11),out,inst_46787);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46826,out))
;
return ((function (switch__29971__auto__,c__29992__auto___46826,out){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_46821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46821[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_46821[(1)] = (1));

return statearr_46821;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_46805){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46822){if((e46822 instanceof Object)){
var ex__29975__auto__ = e46822;
var statearr_46823_46837 = state_46805;
(statearr_46823_46837[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46838 = state_46805;
state_46805 = G__46838;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_46805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_46805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46826,out))
})();
var state__29994__auto__ = (function (){var statearr_46824 = f__29993__auto__.call(null);
(statearr_46824[(6)] = c__29992__auto___46826);

return statearr_46824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46826,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46840 = (function (f,ch,meta46841){
this.f = f;
this.ch = ch;
this.meta46841 = meta46841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46842,meta46841__$1){
var self__ = this;
var _46842__$1 = this;
return (new cljs.core.async.t_cljs$core$async46840(self__.f,self__.ch,meta46841__$1));
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46842){
var self__ = this;
var _46842__$1 = this;
return self__.meta46841;
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46843 = (function (f,ch,meta46841,_,fn1,meta46844){
this.f = f;
this.ch = ch;
this.meta46841 = meta46841;
this._ = _;
this.fn1 = fn1;
this.meta46844 = meta46844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46845,meta46844__$1){
var self__ = this;
var _46845__$1 = this;
return (new cljs.core.async.t_cljs$core$async46843(self__.f,self__.ch,self__.meta46841,self__._,self__.fn1,meta46844__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46845){
var self__ = this;
var _46845__$1 = this;
return self__.meta46844;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46839_SHARP_){
return f1.call(null,(((p1__46839_SHARP_ == null))?null:self__.f.call(null,p1__46839_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46843.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46841","meta46841",1297125594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46840","cljs.core.async/t_cljs$core$async46840",1922985766,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46844","meta46844",1960959179,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46843";

cljs.core.async.t_cljs$core$async46843.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async46843");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46843 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46843(f__$1,ch__$1,meta46841__$1,___$2,fn1__$1,meta46844){
return (new cljs.core.async.t_cljs$core$async46843(f__$1,ch__$1,meta46841__$1,___$2,fn1__$1,meta46844));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46843(self__.f,self__.ch,self__.meta46841,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27183__auto__ = ret;
if(cljs.core.truth_(and__27183__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46841","meta46841",1297125594,null)], null);
});

cljs.core.async.t_cljs$core$async46840.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46840";

cljs.core.async.t_cljs$core$async46840.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async46840");
});

cljs.core.async.__GT_t_cljs$core$async46840 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46840(f__$1,ch__$1,meta46841){
return (new cljs.core.async.t_cljs$core$async46840(f__$1,ch__$1,meta46841));
});

}

return (new cljs.core.async.t_cljs$core$async46840(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46846 = (function (f,ch,meta46847){
this.f = f;
this.ch = ch;
this.meta46847 = meta46847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46848,meta46847__$1){
var self__ = this;
var _46848__$1 = this;
return (new cljs.core.async.t_cljs$core$async46846(self__.f,self__.ch,meta46847__$1));
});

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46848){
var self__ = this;
var _46848__$1 = this;
return self__.meta46847;
});

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46847","meta46847",-1939128792,null)], null);
});

cljs.core.async.t_cljs$core$async46846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46846";

cljs.core.async.t_cljs$core$async46846.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async46846");
});

cljs.core.async.__GT_t_cljs$core$async46846 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46846(f__$1,ch__$1,meta46847){
return (new cljs.core.async.t_cljs$core$async46846(f__$1,ch__$1,meta46847));
});

}

return (new cljs.core.async.t_cljs$core$async46846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46849 = (function (p,ch,meta46850){
this.p = p;
this.ch = ch;
this.meta46850 = meta46850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46851,meta46850__$1){
var self__ = this;
var _46851__$1 = this;
return (new cljs.core.async.t_cljs$core$async46849(self__.p,self__.ch,meta46850__$1));
});

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46851){
var self__ = this;
var _46851__$1 = this;
return self__.meta46850;
});

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46850","meta46850",557244774,null)], null);
});

cljs.core.async.t_cljs$core$async46849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46849";

cljs.core.async.t_cljs$core$async46849.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async46849");
});

cljs.core.async.__GT_t_cljs$core$async46849 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46849(p__$1,ch__$1,meta46850){
return (new cljs.core.async.t_cljs$core$async46849(p__$1,ch__$1,meta46850));
});

}

return (new cljs.core.async.t_cljs$core$async46849(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46853 = arguments.length;
switch (G__46853) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29992__auto___46893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___46893,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___46893,out){
return (function (state_46874){
var state_val_46875 = (state_46874[(1)]);
if((state_val_46875 === (7))){
var inst_46870 = (state_46874[(2)]);
var state_46874__$1 = state_46874;
var statearr_46876_46894 = state_46874__$1;
(statearr_46876_46894[(2)] = inst_46870);

(statearr_46876_46894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (1))){
var state_46874__$1 = state_46874;
var statearr_46877_46895 = state_46874__$1;
(statearr_46877_46895[(2)] = null);

(statearr_46877_46895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (4))){
var inst_46856 = (state_46874[(7)]);
var inst_46856__$1 = (state_46874[(2)]);
var inst_46857 = (inst_46856__$1 == null);
var state_46874__$1 = (function (){var statearr_46878 = state_46874;
(statearr_46878[(7)] = inst_46856__$1);

return statearr_46878;
})();
if(cljs.core.truth_(inst_46857)){
var statearr_46879_46896 = state_46874__$1;
(statearr_46879_46896[(1)] = (5));

} else {
var statearr_46880_46897 = state_46874__$1;
(statearr_46880_46897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (6))){
var inst_46856 = (state_46874[(7)]);
var inst_46861 = p.call(null,inst_46856);
var state_46874__$1 = state_46874;
if(cljs.core.truth_(inst_46861)){
var statearr_46881_46898 = state_46874__$1;
(statearr_46881_46898[(1)] = (8));

} else {
var statearr_46882_46899 = state_46874__$1;
(statearr_46882_46899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (3))){
var inst_46872 = (state_46874[(2)]);
var state_46874__$1 = state_46874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46874__$1,inst_46872);
} else {
if((state_val_46875 === (2))){
var state_46874__$1 = state_46874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46874__$1,(4),ch);
} else {
if((state_val_46875 === (11))){
var inst_46864 = (state_46874[(2)]);
var state_46874__$1 = state_46874;
var statearr_46883_46900 = state_46874__$1;
(statearr_46883_46900[(2)] = inst_46864);

(statearr_46883_46900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (9))){
var state_46874__$1 = state_46874;
var statearr_46884_46901 = state_46874__$1;
(statearr_46884_46901[(2)] = null);

(statearr_46884_46901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (5))){
var inst_46859 = cljs.core.async.close_BANG_.call(null,out);
var state_46874__$1 = state_46874;
var statearr_46885_46902 = state_46874__$1;
(statearr_46885_46902[(2)] = inst_46859);

(statearr_46885_46902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (10))){
var inst_46867 = (state_46874[(2)]);
var state_46874__$1 = (function (){var statearr_46886 = state_46874;
(statearr_46886[(8)] = inst_46867);

return statearr_46886;
})();
var statearr_46887_46903 = state_46874__$1;
(statearr_46887_46903[(2)] = null);

(statearr_46887_46903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46875 === (8))){
var inst_46856 = (state_46874[(7)]);
var state_46874__$1 = state_46874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46874__$1,(11),out,inst_46856);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___46893,out))
;
return ((function (switch__29971__auto__,c__29992__auto___46893,out){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_46888 = [null,null,null,null,null,null,null,null,null];
(statearr_46888[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_46888[(1)] = (1));

return statearr_46888;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_46874){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e46889){if((e46889 instanceof Object)){
var ex__29975__auto__ = e46889;
var statearr_46890_46904 = state_46874;
(statearr_46890_46904[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46905 = state_46874;
state_46874 = G__46905;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_46874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_46874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___46893,out))
})();
var state__29994__auto__ = (function (){var statearr_46891 = f__29993__auto__.call(null);
(statearr_46891[(6)] = c__29992__auto___46893);

return statearr_46891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___46893,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46907 = arguments.length;
switch (G__46907) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__){
return (function (state_46970){
var state_val_46971 = (state_46970[(1)]);
if((state_val_46971 === (7))){
var inst_46966 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_46972_47010 = state_46970__$1;
(statearr_46972_47010[(2)] = inst_46966);

(statearr_46972_47010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (20))){
var inst_46936 = (state_46970[(7)]);
var inst_46947 = (state_46970[(2)]);
var inst_46948 = cljs.core.next.call(null,inst_46936);
var inst_46922 = inst_46948;
var inst_46923 = null;
var inst_46924 = (0);
var inst_46925 = (0);
var state_46970__$1 = (function (){var statearr_46973 = state_46970;
(statearr_46973[(8)] = inst_46925);

(statearr_46973[(9)] = inst_46923);

(statearr_46973[(10)] = inst_46924);

(statearr_46973[(11)] = inst_46922);

(statearr_46973[(12)] = inst_46947);

return statearr_46973;
})();
var statearr_46974_47011 = state_46970__$1;
(statearr_46974_47011[(2)] = null);

(statearr_46974_47011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (1))){
var state_46970__$1 = state_46970;
var statearr_46975_47012 = state_46970__$1;
(statearr_46975_47012[(2)] = null);

(statearr_46975_47012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (4))){
var inst_46911 = (state_46970[(13)]);
var inst_46911__$1 = (state_46970[(2)]);
var inst_46912 = (inst_46911__$1 == null);
var state_46970__$1 = (function (){var statearr_46976 = state_46970;
(statearr_46976[(13)] = inst_46911__$1);

return statearr_46976;
})();
if(cljs.core.truth_(inst_46912)){
var statearr_46977_47013 = state_46970__$1;
(statearr_46977_47013[(1)] = (5));

} else {
var statearr_46978_47014 = state_46970__$1;
(statearr_46978_47014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (15))){
var state_46970__$1 = state_46970;
var statearr_46982_47015 = state_46970__$1;
(statearr_46982_47015[(2)] = null);

(statearr_46982_47015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (21))){
var state_46970__$1 = state_46970;
var statearr_46983_47016 = state_46970__$1;
(statearr_46983_47016[(2)] = null);

(statearr_46983_47016[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (13))){
var inst_46925 = (state_46970[(8)]);
var inst_46923 = (state_46970[(9)]);
var inst_46924 = (state_46970[(10)]);
var inst_46922 = (state_46970[(11)]);
var inst_46932 = (state_46970[(2)]);
var inst_46933 = (inst_46925 + (1));
var tmp46979 = inst_46923;
var tmp46980 = inst_46924;
var tmp46981 = inst_46922;
var inst_46922__$1 = tmp46981;
var inst_46923__$1 = tmp46979;
var inst_46924__$1 = tmp46980;
var inst_46925__$1 = inst_46933;
var state_46970__$1 = (function (){var statearr_46984 = state_46970;
(statearr_46984[(8)] = inst_46925__$1);

(statearr_46984[(9)] = inst_46923__$1);

(statearr_46984[(10)] = inst_46924__$1);

(statearr_46984[(14)] = inst_46932);

(statearr_46984[(11)] = inst_46922__$1);

return statearr_46984;
})();
var statearr_46985_47017 = state_46970__$1;
(statearr_46985_47017[(2)] = null);

(statearr_46985_47017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (22))){
var state_46970__$1 = state_46970;
var statearr_46986_47018 = state_46970__$1;
(statearr_46986_47018[(2)] = null);

(statearr_46986_47018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (6))){
var inst_46911 = (state_46970[(13)]);
var inst_46920 = f.call(null,inst_46911);
var inst_46921 = cljs.core.seq.call(null,inst_46920);
var inst_46922 = inst_46921;
var inst_46923 = null;
var inst_46924 = (0);
var inst_46925 = (0);
var state_46970__$1 = (function (){var statearr_46987 = state_46970;
(statearr_46987[(8)] = inst_46925);

(statearr_46987[(9)] = inst_46923);

(statearr_46987[(10)] = inst_46924);

(statearr_46987[(11)] = inst_46922);

return statearr_46987;
})();
var statearr_46988_47019 = state_46970__$1;
(statearr_46988_47019[(2)] = null);

(statearr_46988_47019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (17))){
var inst_46936 = (state_46970[(7)]);
var inst_46940 = cljs.core.chunk_first.call(null,inst_46936);
var inst_46941 = cljs.core.chunk_rest.call(null,inst_46936);
var inst_46942 = cljs.core.count.call(null,inst_46940);
var inst_46922 = inst_46941;
var inst_46923 = inst_46940;
var inst_46924 = inst_46942;
var inst_46925 = (0);
var state_46970__$1 = (function (){var statearr_46989 = state_46970;
(statearr_46989[(8)] = inst_46925);

(statearr_46989[(9)] = inst_46923);

(statearr_46989[(10)] = inst_46924);

(statearr_46989[(11)] = inst_46922);

return statearr_46989;
})();
var statearr_46990_47020 = state_46970__$1;
(statearr_46990_47020[(2)] = null);

(statearr_46990_47020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (3))){
var inst_46968 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46970__$1,inst_46968);
} else {
if((state_val_46971 === (12))){
var inst_46956 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_46991_47021 = state_46970__$1;
(statearr_46991_47021[(2)] = inst_46956);

(statearr_46991_47021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (2))){
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46970__$1,(4),in$);
} else {
if((state_val_46971 === (23))){
var inst_46964 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_46992_47022 = state_46970__$1;
(statearr_46992_47022[(2)] = inst_46964);

(statearr_46992_47022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (19))){
var inst_46951 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_46993_47023 = state_46970__$1;
(statearr_46993_47023[(2)] = inst_46951);

(statearr_46993_47023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (11))){
var inst_46922 = (state_46970[(11)]);
var inst_46936 = (state_46970[(7)]);
var inst_46936__$1 = cljs.core.seq.call(null,inst_46922);
var state_46970__$1 = (function (){var statearr_46994 = state_46970;
(statearr_46994[(7)] = inst_46936__$1);

return statearr_46994;
})();
if(inst_46936__$1){
var statearr_46995_47024 = state_46970__$1;
(statearr_46995_47024[(1)] = (14));

} else {
var statearr_46996_47025 = state_46970__$1;
(statearr_46996_47025[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (9))){
var inst_46958 = (state_46970[(2)]);
var inst_46959 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46970__$1 = (function (){var statearr_46997 = state_46970;
(statearr_46997[(15)] = inst_46958);

return statearr_46997;
})();
if(cljs.core.truth_(inst_46959)){
var statearr_46998_47026 = state_46970__$1;
(statearr_46998_47026[(1)] = (21));

} else {
var statearr_46999_47027 = state_46970__$1;
(statearr_46999_47027[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (5))){
var inst_46914 = cljs.core.async.close_BANG_.call(null,out);
var state_46970__$1 = state_46970;
var statearr_47000_47028 = state_46970__$1;
(statearr_47000_47028[(2)] = inst_46914);

(statearr_47000_47028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (14))){
var inst_46936 = (state_46970[(7)]);
var inst_46938 = cljs.core.chunked_seq_QMARK_.call(null,inst_46936);
var state_46970__$1 = state_46970;
if(inst_46938){
var statearr_47001_47029 = state_46970__$1;
(statearr_47001_47029[(1)] = (17));

} else {
var statearr_47002_47030 = state_46970__$1;
(statearr_47002_47030[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (16))){
var inst_46954 = (state_46970[(2)]);
var state_46970__$1 = state_46970;
var statearr_47003_47031 = state_46970__$1;
(statearr_47003_47031[(2)] = inst_46954);

(statearr_47003_47031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46971 === (10))){
var inst_46925 = (state_46970[(8)]);
var inst_46923 = (state_46970[(9)]);
var inst_46930 = cljs.core._nth.call(null,inst_46923,inst_46925);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46970__$1,(13),out,inst_46930);
} else {
if((state_val_46971 === (18))){
var inst_46936 = (state_46970[(7)]);
var inst_46945 = cljs.core.first.call(null,inst_46936);
var state_46970__$1 = state_46970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46970__$1,(20),out,inst_46945);
} else {
if((state_val_46971 === (8))){
var inst_46925 = (state_46970[(8)]);
var inst_46924 = (state_46970[(10)]);
var inst_46927 = (inst_46925 < inst_46924);
var inst_46928 = inst_46927;
var state_46970__$1 = state_46970;
if(cljs.core.truth_(inst_46928)){
var statearr_47004_47032 = state_46970__$1;
(statearr_47004_47032[(1)] = (10));

} else {
var statearr_47005_47033 = state_46970__$1;
(statearr_47005_47033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29972__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29972__auto____0 = (function (){
var statearr_47006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47006[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29972__auto__);

(statearr_47006[(1)] = (1));

return statearr_47006;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29972__auto____1 = (function (state_46970){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_46970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e47007){if((e47007 instanceof Object)){
var ex__29975__auto__ = e47007;
var statearr_47008_47034 = state_46970;
(statearr_47008_47034[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47035 = state_46970;
state_46970 = G__47035;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29972__auto__ = function(state_46970){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29972__auto____1.call(this,state_46970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29972__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29972__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__))
})();
var state__29994__auto__ = (function (){var statearr_47009 = f__29993__auto__.call(null);
(statearr_47009[(6)] = c__29992__auto__);

return statearr_47009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__))
);

return c__29992__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47037 = arguments.length;
switch (G__47037) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47040 = arguments.length;
switch (G__47040) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47043 = arguments.length;
switch (G__47043) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29992__auto___47090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___47090,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___47090,out){
return (function (state_47067){
var state_val_47068 = (state_47067[(1)]);
if((state_val_47068 === (7))){
var inst_47062 = (state_47067[(2)]);
var state_47067__$1 = state_47067;
var statearr_47069_47091 = state_47067__$1;
(statearr_47069_47091[(2)] = inst_47062);

(statearr_47069_47091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (1))){
var inst_47044 = null;
var state_47067__$1 = (function (){var statearr_47070 = state_47067;
(statearr_47070[(7)] = inst_47044);

return statearr_47070;
})();
var statearr_47071_47092 = state_47067__$1;
(statearr_47071_47092[(2)] = null);

(statearr_47071_47092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (4))){
var inst_47047 = (state_47067[(8)]);
var inst_47047__$1 = (state_47067[(2)]);
var inst_47048 = (inst_47047__$1 == null);
var inst_47049 = cljs.core.not.call(null,inst_47048);
var state_47067__$1 = (function (){var statearr_47072 = state_47067;
(statearr_47072[(8)] = inst_47047__$1);

return statearr_47072;
})();
if(inst_47049){
var statearr_47073_47093 = state_47067__$1;
(statearr_47073_47093[(1)] = (5));

} else {
var statearr_47074_47094 = state_47067__$1;
(statearr_47074_47094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (6))){
var state_47067__$1 = state_47067;
var statearr_47075_47095 = state_47067__$1;
(statearr_47075_47095[(2)] = null);

(statearr_47075_47095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (3))){
var inst_47064 = (state_47067[(2)]);
var inst_47065 = cljs.core.async.close_BANG_.call(null,out);
var state_47067__$1 = (function (){var statearr_47076 = state_47067;
(statearr_47076[(9)] = inst_47064);

return statearr_47076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47067__$1,inst_47065);
} else {
if((state_val_47068 === (2))){
var state_47067__$1 = state_47067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47067__$1,(4),ch);
} else {
if((state_val_47068 === (11))){
var inst_47047 = (state_47067[(8)]);
var inst_47056 = (state_47067[(2)]);
var inst_47044 = inst_47047;
var state_47067__$1 = (function (){var statearr_47077 = state_47067;
(statearr_47077[(7)] = inst_47044);

(statearr_47077[(10)] = inst_47056);

return statearr_47077;
})();
var statearr_47078_47096 = state_47067__$1;
(statearr_47078_47096[(2)] = null);

(statearr_47078_47096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (9))){
var inst_47047 = (state_47067[(8)]);
var state_47067__$1 = state_47067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47067__$1,(11),out,inst_47047);
} else {
if((state_val_47068 === (5))){
var inst_47044 = (state_47067[(7)]);
var inst_47047 = (state_47067[(8)]);
var inst_47051 = cljs.core._EQ_.call(null,inst_47047,inst_47044);
var state_47067__$1 = state_47067;
if(inst_47051){
var statearr_47080_47097 = state_47067__$1;
(statearr_47080_47097[(1)] = (8));

} else {
var statearr_47081_47098 = state_47067__$1;
(statearr_47081_47098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (10))){
var inst_47059 = (state_47067[(2)]);
var state_47067__$1 = state_47067;
var statearr_47082_47099 = state_47067__$1;
(statearr_47082_47099[(2)] = inst_47059);

(statearr_47082_47099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47068 === (8))){
var inst_47044 = (state_47067[(7)]);
var tmp47079 = inst_47044;
var inst_47044__$1 = tmp47079;
var state_47067__$1 = (function (){var statearr_47083 = state_47067;
(statearr_47083[(7)] = inst_47044__$1);

return statearr_47083;
})();
var statearr_47084_47100 = state_47067__$1;
(statearr_47084_47100[(2)] = null);

(statearr_47084_47100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___47090,out))
;
return ((function (switch__29971__auto__,c__29992__auto___47090,out){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_47085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47085[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_47085[(1)] = (1));

return statearr_47085;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_47067){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_47067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e47086){if((e47086 instanceof Object)){
var ex__29975__auto__ = e47086;
var statearr_47087_47101 = state_47067;
(statearr_47087_47101[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47102 = state_47067;
state_47067 = G__47102;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_47067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_47067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___47090,out))
})();
var state__29994__auto__ = (function (){var statearr_47088 = f__29993__auto__.call(null);
(statearr_47088[(6)] = c__29992__auto___47090);

return statearr_47088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___47090,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47104 = arguments.length;
switch (G__47104) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29992__auto___47170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___47170,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___47170,out){
return (function (state_47142){
var state_val_47143 = (state_47142[(1)]);
if((state_val_47143 === (7))){
var inst_47138 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
var statearr_47144_47171 = state_47142__$1;
(statearr_47144_47171[(2)] = inst_47138);

(statearr_47144_47171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (1))){
var inst_47105 = (new Array(n));
var inst_47106 = inst_47105;
var inst_47107 = (0);
var state_47142__$1 = (function (){var statearr_47145 = state_47142;
(statearr_47145[(7)] = inst_47107);

(statearr_47145[(8)] = inst_47106);

return statearr_47145;
})();
var statearr_47146_47172 = state_47142__$1;
(statearr_47146_47172[(2)] = null);

(statearr_47146_47172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (4))){
var inst_47110 = (state_47142[(9)]);
var inst_47110__$1 = (state_47142[(2)]);
var inst_47111 = (inst_47110__$1 == null);
var inst_47112 = cljs.core.not.call(null,inst_47111);
var state_47142__$1 = (function (){var statearr_47147 = state_47142;
(statearr_47147[(9)] = inst_47110__$1);

return statearr_47147;
})();
if(inst_47112){
var statearr_47148_47173 = state_47142__$1;
(statearr_47148_47173[(1)] = (5));

} else {
var statearr_47149_47174 = state_47142__$1;
(statearr_47149_47174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (15))){
var inst_47132 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
var statearr_47150_47175 = state_47142__$1;
(statearr_47150_47175[(2)] = inst_47132);

(statearr_47150_47175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (13))){
var state_47142__$1 = state_47142;
var statearr_47151_47176 = state_47142__$1;
(statearr_47151_47176[(2)] = null);

(statearr_47151_47176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (6))){
var inst_47107 = (state_47142[(7)]);
var inst_47128 = (inst_47107 > (0));
var state_47142__$1 = state_47142;
if(cljs.core.truth_(inst_47128)){
var statearr_47152_47177 = state_47142__$1;
(statearr_47152_47177[(1)] = (12));

} else {
var statearr_47153_47178 = state_47142__$1;
(statearr_47153_47178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (3))){
var inst_47140 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47142__$1,inst_47140);
} else {
if((state_val_47143 === (12))){
var inst_47106 = (state_47142[(8)]);
var inst_47130 = cljs.core.vec.call(null,inst_47106);
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47142__$1,(15),out,inst_47130);
} else {
if((state_val_47143 === (2))){
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47142__$1,(4),ch);
} else {
if((state_val_47143 === (11))){
var inst_47122 = (state_47142[(2)]);
var inst_47123 = (new Array(n));
var inst_47106 = inst_47123;
var inst_47107 = (0);
var state_47142__$1 = (function (){var statearr_47154 = state_47142;
(statearr_47154[(10)] = inst_47122);

(statearr_47154[(7)] = inst_47107);

(statearr_47154[(8)] = inst_47106);

return statearr_47154;
})();
var statearr_47155_47179 = state_47142__$1;
(statearr_47155_47179[(2)] = null);

(statearr_47155_47179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (9))){
var inst_47106 = (state_47142[(8)]);
var inst_47120 = cljs.core.vec.call(null,inst_47106);
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47142__$1,(11),out,inst_47120);
} else {
if((state_val_47143 === (5))){
var inst_47110 = (state_47142[(9)]);
var inst_47115 = (state_47142[(11)]);
var inst_47107 = (state_47142[(7)]);
var inst_47106 = (state_47142[(8)]);
var inst_47114 = (inst_47106[inst_47107] = inst_47110);
var inst_47115__$1 = (inst_47107 + (1));
var inst_47116 = (inst_47115__$1 < n);
var state_47142__$1 = (function (){var statearr_47156 = state_47142;
(statearr_47156[(12)] = inst_47114);

(statearr_47156[(11)] = inst_47115__$1);

return statearr_47156;
})();
if(cljs.core.truth_(inst_47116)){
var statearr_47157_47180 = state_47142__$1;
(statearr_47157_47180[(1)] = (8));

} else {
var statearr_47158_47181 = state_47142__$1;
(statearr_47158_47181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (14))){
var inst_47135 = (state_47142[(2)]);
var inst_47136 = cljs.core.async.close_BANG_.call(null,out);
var state_47142__$1 = (function (){var statearr_47160 = state_47142;
(statearr_47160[(13)] = inst_47135);

return statearr_47160;
})();
var statearr_47161_47182 = state_47142__$1;
(statearr_47161_47182[(2)] = inst_47136);

(statearr_47161_47182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (10))){
var inst_47126 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
var statearr_47162_47183 = state_47142__$1;
(statearr_47162_47183[(2)] = inst_47126);

(statearr_47162_47183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (8))){
var inst_47115 = (state_47142[(11)]);
var inst_47106 = (state_47142[(8)]);
var tmp47159 = inst_47106;
var inst_47106__$1 = tmp47159;
var inst_47107 = inst_47115;
var state_47142__$1 = (function (){var statearr_47163 = state_47142;
(statearr_47163[(7)] = inst_47107);

(statearr_47163[(8)] = inst_47106__$1);

return statearr_47163;
})();
var statearr_47164_47184 = state_47142__$1;
(statearr_47164_47184[(2)] = null);

(statearr_47164_47184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___47170,out))
;
return ((function (switch__29971__auto__,c__29992__auto___47170,out){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_47165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47165[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_47165[(1)] = (1));

return statearr_47165;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_47142){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_47142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e47166){if((e47166 instanceof Object)){
var ex__29975__auto__ = e47166;
var statearr_47167_47185 = state_47142;
(statearr_47167_47185[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47186 = state_47142;
state_47142 = G__47186;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_47142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_47142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___47170,out))
})();
var state__29994__auto__ = (function (){var statearr_47168 = f__29993__auto__.call(null);
(statearr_47168[(6)] = c__29992__auto___47170);

return statearr_47168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___47170,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47188 = arguments.length;
switch (G__47188) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29992__auto___47258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___47258,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___47258,out){
return (function (state_47230){
var state_val_47231 = (state_47230[(1)]);
if((state_val_47231 === (7))){
var inst_47226 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
var statearr_47232_47259 = state_47230__$1;
(statearr_47232_47259[(2)] = inst_47226);

(statearr_47232_47259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (1))){
var inst_47189 = [];
var inst_47190 = inst_47189;
var inst_47191 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47230__$1 = (function (){var statearr_47233 = state_47230;
(statearr_47233[(7)] = inst_47190);

(statearr_47233[(8)] = inst_47191);

return statearr_47233;
})();
var statearr_47234_47260 = state_47230__$1;
(statearr_47234_47260[(2)] = null);

(statearr_47234_47260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (4))){
var inst_47194 = (state_47230[(9)]);
var inst_47194__$1 = (state_47230[(2)]);
var inst_47195 = (inst_47194__$1 == null);
var inst_47196 = cljs.core.not.call(null,inst_47195);
var state_47230__$1 = (function (){var statearr_47235 = state_47230;
(statearr_47235[(9)] = inst_47194__$1);

return statearr_47235;
})();
if(inst_47196){
var statearr_47236_47261 = state_47230__$1;
(statearr_47236_47261[(1)] = (5));

} else {
var statearr_47237_47262 = state_47230__$1;
(statearr_47237_47262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (15))){
var inst_47220 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
var statearr_47238_47263 = state_47230__$1;
(statearr_47238_47263[(2)] = inst_47220);

(statearr_47238_47263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (13))){
var state_47230__$1 = state_47230;
var statearr_47239_47264 = state_47230__$1;
(statearr_47239_47264[(2)] = null);

(statearr_47239_47264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (6))){
var inst_47190 = (state_47230[(7)]);
var inst_47215 = inst_47190.length;
var inst_47216 = (inst_47215 > (0));
var state_47230__$1 = state_47230;
if(cljs.core.truth_(inst_47216)){
var statearr_47240_47265 = state_47230__$1;
(statearr_47240_47265[(1)] = (12));

} else {
var statearr_47241_47266 = state_47230__$1;
(statearr_47241_47266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (3))){
var inst_47228 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47230__$1,inst_47228);
} else {
if((state_val_47231 === (12))){
var inst_47190 = (state_47230[(7)]);
var inst_47218 = cljs.core.vec.call(null,inst_47190);
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47230__$1,(15),out,inst_47218);
} else {
if((state_val_47231 === (2))){
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47230__$1,(4),ch);
} else {
if((state_val_47231 === (11))){
var inst_47194 = (state_47230[(9)]);
var inst_47198 = (state_47230[(10)]);
var inst_47208 = (state_47230[(2)]);
var inst_47209 = [];
var inst_47210 = inst_47209.push(inst_47194);
var inst_47190 = inst_47209;
var inst_47191 = inst_47198;
var state_47230__$1 = (function (){var statearr_47242 = state_47230;
(statearr_47242[(11)] = inst_47210);

(statearr_47242[(7)] = inst_47190);

(statearr_47242[(12)] = inst_47208);

(statearr_47242[(8)] = inst_47191);

return statearr_47242;
})();
var statearr_47243_47267 = state_47230__$1;
(statearr_47243_47267[(2)] = null);

(statearr_47243_47267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (9))){
var inst_47190 = (state_47230[(7)]);
var inst_47206 = cljs.core.vec.call(null,inst_47190);
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47230__$1,(11),out,inst_47206);
} else {
if((state_val_47231 === (5))){
var inst_47194 = (state_47230[(9)]);
var inst_47198 = (state_47230[(10)]);
var inst_47191 = (state_47230[(8)]);
var inst_47198__$1 = f.call(null,inst_47194);
var inst_47199 = cljs.core._EQ_.call(null,inst_47198__$1,inst_47191);
var inst_47200 = cljs.core.keyword_identical_QMARK_.call(null,inst_47191,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47201 = (inst_47199) || (inst_47200);
var state_47230__$1 = (function (){var statearr_47244 = state_47230;
(statearr_47244[(10)] = inst_47198__$1);

return statearr_47244;
})();
if(cljs.core.truth_(inst_47201)){
var statearr_47245_47268 = state_47230__$1;
(statearr_47245_47268[(1)] = (8));

} else {
var statearr_47246_47269 = state_47230__$1;
(statearr_47246_47269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (14))){
var inst_47223 = (state_47230[(2)]);
var inst_47224 = cljs.core.async.close_BANG_.call(null,out);
var state_47230__$1 = (function (){var statearr_47248 = state_47230;
(statearr_47248[(13)] = inst_47223);

return statearr_47248;
})();
var statearr_47249_47270 = state_47230__$1;
(statearr_47249_47270[(2)] = inst_47224);

(statearr_47249_47270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (10))){
var inst_47213 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
var statearr_47250_47271 = state_47230__$1;
(statearr_47250_47271[(2)] = inst_47213);

(statearr_47250_47271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (8))){
var inst_47194 = (state_47230[(9)]);
var inst_47190 = (state_47230[(7)]);
var inst_47198 = (state_47230[(10)]);
var inst_47203 = inst_47190.push(inst_47194);
var tmp47247 = inst_47190;
var inst_47190__$1 = tmp47247;
var inst_47191 = inst_47198;
var state_47230__$1 = (function (){var statearr_47251 = state_47230;
(statearr_47251[(7)] = inst_47190__$1);

(statearr_47251[(14)] = inst_47203);

(statearr_47251[(8)] = inst_47191);

return statearr_47251;
})();
var statearr_47252_47272 = state_47230__$1;
(statearr_47252_47272[(2)] = null);

(statearr_47252_47272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29992__auto___47258,out))
;
return ((function (switch__29971__auto__,c__29992__auto___47258,out){
return (function() {
var cljs$core$async$state_machine__29972__auto__ = null;
var cljs$core$async$state_machine__29972__auto____0 = (function (){
var statearr_47253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47253[(0)] = cljs$core$async$state_machine__29972__auto__);

(statearr_47253[(1)] = (1));

return statearr_47253;
});
var cljs$core$async$state_machine__29972__auto____1 = (function (state_47230){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_47230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e47254){if((e47254 instanceof Object)){
var ex__29975__auto__ = e47254;
var statearr_47255_47273 = state_47230;
(statearr_47255_47273[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47274 = state_47230;
state_47230 = G__47274;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
cljs$core$async$state_machine__29972__auto__ = function(state_47230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29972__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29972__auto____1.call(this,state_47230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29972__auto____0;
cljs$core$async$state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29972__auto____1;
return cljs$core$async$state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___47258,out))
})();
var state__29994__auto__ = (function (){var statearr_47256 = f__29993__auto__.call(null);
(statearr_47256[(6)] = c__29992__auto___47258);

return statearr_47256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___47258,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513978693155
