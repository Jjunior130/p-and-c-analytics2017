// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16564 = arguments.length;
switch (G__16564) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16565 = (function (f,blockable,meta16566){
this.f = f;
this.blockable = blockable;
this.meta16566 = meta16566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16567,meta16566__$1){
var self__ = this;
var _16567__$1 = this;
return (new cljs.core.async.t_cljs$core$async16565(self__.f,self__.blockable,meta16566__$1));
});

cljs.core.async.t_cljs$core$async16565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16567){
var self__ = this;
var _16567__$1 = this;
return self__.meta16566;
});

cljs.core.async.t_cljs$core$async16565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16566], null);
});

cljs.core.async.t_cljs$core$async16565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16565";

cljs.core.async.t_cljs$core$async16565.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async16565");
});

cljs.core.async.__GT_t_cljs$core$async16565 = (function cljs$core$async$__GT_t_cljs$core$async16565(f__$1,blockable__$1,meta16566){
return (new cljs.core.async.t_cljs$core$async16565(f__$1,blockable__$1,meta16566));
});

}

return (new cljs.core.async.t_cljs$core$async16565(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__16571 = arguments.length;
switch (G__16571) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__16574 = arguments.length;
switch (G__16574) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__16577 = arguments.length;
switch (G__16577) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16579 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16579) : fn1.call(null,val_16579));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16579,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16579) : fn1.call(null,val_16579));
});})(val_16579,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__16581 = arguments.length;
switch (G__16581) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8590__auto___16583 = n;
var x_16584 = (0);
while(true){
if((x_16584 < n__8590__auto___16583)){
(a[x_16584] = (0));

var G__16585 = (x_16584 + (1));
x_16584 = G__16585;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16586 = (i + (1));
i = G__16586;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async16587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16587 = (function (flag,meta16588){
this.flag = flag;
this.meta16588 = meta16588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16589,meta16588__$1){
var self__ = this;
var _16589__$1 = this;
return (new cljs.core.async.t_cljs$core$async16587(self__.flag,meta16588__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16589){
var self__ = this;
var _16589__$1 = this;
return self__.meta16588;
});})(flag))
;

cljs.core.async.t_cljs$core$async16587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16587.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16588], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16587";

cljs.core.async.t_cljs$core$async16587.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async16587");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16587 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16587(flag__$1,meta16588){
return (new cljs.core.async.t_cljs$core$async16587(flag__$1,meta16588));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16587(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16590 = (function (flag,cb,meta16591){
this.flag = flag;
this.cb = cb;
this.meta16591 = meta16591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16592,meta16591__$1){
var self__ = this;
var _16592__$1 = this;
return (new cljs.core.async.t_cljs$core$async16590(self__.flag,self__.cb,meta16591__$1));
});

cljs.core.async.t_cljs$core$async16590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16592){
var self__ = this;
var _16592__$1 = this;
return self__.meta16591;
});

cljs.core.async.t_cljs$core$async16590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16591], null);
});

cljs.core.async.t_cljs$core$async16590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16590";

cljs.core.async.t_cljs$core$async16590.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async16590");
});

cljs.core.async.__GT_t_cljs$core$async16590 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16590(flag__$1,cb__$1,meta16591){
return (new cljs.core.async.t_cljs$core$async16590(flag__$1,cb__$1,meta16591));
});

}

return (new cljs.core.async.t_cljs$core$async16590(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16593_SHARP_){
var G__16595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16593_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16595) : fret.call(null,G__16595));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16594_SHARP_){
var G__16596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16594_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16596) : fret.call(null,G__16596));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7645__auto__ = wport;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16597 = (i + (1));
i = G__16597;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7645__auto__ = ret;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7633__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7633__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__8821__auto__ = [];
var len__8814__auto___16603 = arguments.length;
var i__8815__auto___16604 = (0);
while(true){
if((i__8815__auto___16604 < len__8814__auto___16603)){
args__8821__auto__.push((arguments[i__8815__auto___16604]));

var G__16605 = (i__8815__auto___16604 + (1));
i__8815__auto___16604 = G__16605;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16600){
var map__16601 = p__16600;
var map__16601__$1 = ((((!((map__16601 == null)))?((((map__16601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16601):map__16601);
var opts = map__16601__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16598){
var G__16599 = cljs.core.first(seq16598);
var seq16598__$1 = cljs.core.next(seq16598);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16599,seq16598__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__16607 = arguments.length;
switch (G__16607) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16518__auto___16653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___16653){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___16653){
return (function (state_16631){
var state_val_16632 = (state_16631[(1)]);
if((state_val_16632 === (7))){
var inst_16627 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16633_16654 = state_16631__$1;
(statearr_16633_16654[(2)] = inst_16627);

(statearr_16633_16654[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (1))){
var state_16631__$1 = state_16631;
var statearr_16634_16655 = state_16631__$1;
(statearr_16634_16655[(2)] = null);

(statearr_16634_16655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (4))){
var inst_16610 = (state_16631[(7)]);
var inst_16610__$1 = (state_16631[(2)]);
var inst_16611 = (inst_16610__$1 == null);
var state_16631__$1 = (function (){var statearr_16635 = state_16631;
(statearr_16635[(7)] = inst_16610__$1);

return statearr_16635;
})();
if(cljs.core.truth_(inst_16611)){
var statearr_16636_16656 = state_16631__$1;
(statearr_16636_16656[(1)] = (5));

} else {
var statearr_16637_16657 = state_16631__$1;
(statearr_16637_16657[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (13))){
var state_16631__$1 = state_16631;
var statearr_16638_16658 = state_16631__$1;
(statearr_16638_16658[(2)] = null);

(statearr_16638_16658[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (6))){
var inst_16610 = (state_16631[(7)]);
var state_16631__$1 = state_16631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16631__$1,(11),to,inst_16610);
} else {
if((state_val_16632 === (3))){
var inst_16629 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16631__$1,inst_16629);
} else {
if((state_val_16632 === (12))){
var state_16631__$1 = state_16631;
var statearr_16639_16659 = state_16631__$1;
(statearr_16639_16659[(2)] = null);

(statearr_16639_16659[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (2))){
var state_16631__$1 = state_16631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16631__$1,(4),from);
} else {
if((state_val_16632 === (11))){
var inst_16620 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
if(cljs.core.truth_(inst_16620)){
var statearr_16640_16660 = state_16631__$1;
(statearr_16640_16660[(1)] = (12));

} else {
var statearr_16641_16661 = state_16631__$1;
(statearr_16641_16661[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (9))){
var state_16631__$1 = state_16631;
var statearr_16642_16662 = state_16631__$1;
(statearr_16642_16662[(2)] = null);

(statearr_16642_16662[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (5))){
var state_16631__$1 = state_16631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16643_16663 = state_16631__$1;
(statearr_16643_16663[(1)] = (8));

} else {
var statearr_16644_16664 = state_16631__$1;
(statearr_16644_16664[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (14))){
var inst_16625 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16645_16665 = state_16631__$1;
(statearr_16645_16665[(2)] = inst_16625);

(statearr_16645_16665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (10))){
var inst_16617 = (state_16631[(2)]);
var state_16631__$1 = state_16631;
var statearr_16646_16666 = state_16631__$1;
(statearr_16646_16666[(2)] = inst_16617);

(statearr_16646_16666[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16632 === (8))){
var inst_16614 = cljs.core.async.close_BANG_(to);
var state_16631__$1 = state_16631;
var statearr_16647_16667 = state_16631__$1;
(statearr_16647_16667[(2)] = inst_16614);

(statearr_16647_16667[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___16653))
;
return ((function (switch__16418__auto__,c__16518__auto___16653){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_16648 = [null,null,null,null,null,null,null,null];
(statearr_16648[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_16648[(1)] = (1));

return statearr_16648;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_16631){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16631);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16649){if((e16649 instanceof Object)){
var ex__16422__auto__ = e16649;
var statearr_16650_16668 = state_16631;
(statearr_16650_16668[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16631);

return cljs.core.cst$kw$recur;
} else {
throw e16649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16669 = state_16631;
state_16631 = G__16669;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_16631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_16631);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___16653))
})();
var state__16520__auto__ = (function (){var statearr_16651 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16651[(6)] = c__16518__auto___16653);

return statearr_16651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___16653))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16670){
var vec__16671 = p__16670;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(1),null);
var job = vec__16671;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16518__auto___16842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___16842,res,vec__16671,v,p,job,jobs,results){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___16842,res,vec__16671,v,p,job,jobs,results){
return (function (state_16678){
var state_val_16679 = (state_16678[(1)]);
if((state_val_16679 === (1))){
var state_16678__$1 = state_16678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16678__$1,(2),res,v);
} else {
if((state_val_16679 === (2))){
var inst_16675 = (state_16678[(2)]);
var inst_16676 = cljs.core.async.close_BANG_(res);
var state_16678__$1 = (function (){var statearr_16680 = state_16678;
(statearr_16680[(7)] = inst_16675);

return statearr_16680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16678__$1,inst_16676);
} else {
return null;
}
}
});})(c__16518__auto___16842,res,vec__16671,v,p,job,jobs,results))
;
return ((function (switch__16418__auto__,c__16518__auto___16842,res,vec__16671,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0 = (function (){
var statearr_16681 = [null,null,null,null,null,null,null,null];
(statearr_16681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__);

(statearr_16681[(1)] = (1));

return statearr_16681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1 = (function (state_16678){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16678);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16682){if((e16682 instanceof Object)){
var ex__16422__auto__ = e16682;
var statearr_16683_16843 = state_16678;
(statearr_16683_16843[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16678);

return cljs.core.cst$kw$recur;
} else {
throw e16682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16844 = state_16678;
state_16678 = G__16844;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = function(state_16678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1.call(this,state_16678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___16842,res,vec__16671,v,p,job,jobs,results))
})();
var state__16520__auto__ = (function (){var statearr_16684 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16684[(6)] = c__16518__auto___16842);

return statearr_16684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___16842,res,vec__16671,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16685){
var vec__16686 = p__16685;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16686,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16686,(1),null);
var job = vec__16686;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8590__auto___16845 = n;
var __16846 = (0);
while(true){
if((__16846 < n__8590__auto___16845)){
var G__16689_16847 = type;
var G__16689_16848__$1 = (((G__16689_16847 instanceof cljs.core.Keyword))?G__16689_16847.fqn:null);
switch (G__16689_16848__$1) {
case "compute":
var c__16518__auto___16850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16846,c__16518__auto___16850,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (__16846,c__16518__auto___16850,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async){
return (function (state_16702){
var state_val_16703 = (state_16702[(1)]);
if((state_val_16703 === (1))){
var state_16702__$1 = state_16702;
var statearr_16704_16851 = state_16702__$1;
(statearr_16704_16851[(2)] = null);

(statearr_16704_16851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16703 === (2))){
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16702__$1,(4),jobs);
} else {
if((state_val_16703 === (3))){
var inst_16700 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16702__$1,inst_16700);
} else {
if((state_val_16703 === (4))){
var inst_16692 = (state_16702[(2)]);
var inst_16693 = process(inst_16692);
var state_16702__$1 = state_16702;
if(cljs.core.truth_(inst_16693)){
var statearr_16705_16852 = state_16702__$1;
(statearr_16705_16852[(1)] = (5));

} else {
var statearr_16706_16853 = state_16702__$1;
(statearr_16706_16853[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16703 === (5))){
var state_16702__$1 = state_16702;
var statearr_16707_16854 = state_16702__$1;
(statearr_16707_16854[(2)] = null);

(statearr_16707_16854[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16703 === (6))){
var state_16702__$1 = state_16702;
var statearr_16708_16855 = state_16702__$1;
(statearr_16708_16855[(2)] = null);

(statearr_16708_16855[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16703 === (7))){
var inst_16698 = (state_16702[(2)]);
var state_16702__$1 = state_16702;
var statearr_16709_16856 = state_16702__$1;
(statearr_16709_16856[(2)] = inst_16698);

(statearr_16709_16856[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16846,c__16518__auto___16850,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async))
;
return ((function (__16846,switch__16418__auto__,c__16518__auto___16850,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0 = (function (){
var statearr_16710 = [null,null,null,null,null,null,null];
(statearr_16710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__);

(statearr_16710[(1)] = (1));

return statearr_16710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1 = (function (state_16702){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16702);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16711){if((e16711 instanceof Object)){
var ex__16422__auto__ = e16711;
var statearr_16712_16857 = state_16702;
(statearr_16712_16857[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16702);

return cljs.core.cst$kw$recur;
} else {
throw e16711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16858 = state_16702;
state_16702 = G__16858;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = function(state_16702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1.call(this,state_16702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__;
})()
;})(__16846,switch__16418__auto__,c__16518__auto___16850,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async))
})();
var state__16520__auto__ = (function (){var statearr_16713 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16713[(6)] = c__16518__auto___16850);

return statearr_16713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(__16846,c__16518__auto___16850,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async))
);


break;
case "async":
var c__16518__auto___16859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16846,c__16518__auto___16859,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (__16846,c__16518__auto___16859,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async){
return (function (state_16726){
var state_val_16727 = (state_16726[(1)]);
if((state_val_16727 === (1))){
var state_16726__$1 = state_16726;
var statearr_16728_16860 = state_16726__$1;
(statearr_16728_16860[(2)] = null);

(statearr_16728_16860[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16727 === (2))){
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16726__$1,(4),jobs);
} else {
if((state_val_16727 === (3))){
var inst_16724 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16726__$1,inst_16724);
} else {
if((state_val_16727 === (4))){
var inst_16716 = (state_16726[(2)]);
var inst_16717 = async(inst_16716);
var state_16726__$1 = state_16726;
if(cljs.core.truth_(inst_16717)){
var statearr_16729_16861 = state_16726__$1;
(statearr_16729_16861[(1)] = (5));

} else {
var statearr_16730_16862 = state_16726__$1;
(statearr_16730_16862[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16727 === (5))){
var state_16726__$1 = state_16726;
var statearr_16731_16863 = state_16726__$1;
(statearr_16731_16863[(2)] = null);

(statearr_16731_16863[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16727 === (6))){
var state_16726__$1 = state_16726;
var statearr_16732_16864 = state_16726__$1;
(statearr_16732_16864[(2)] = null);

(statearr_16732_16864[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16727 === (7))){
var inst_16722 = (state_16726[(2)]);
var state_16726__$1 = state_16726;
var statearr_16733_16865 = state_16726__$1;
(statearr_16733_16865[(2)] = inst_16722);

(statearr_16733_16865[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16846,c__16518__auto___16859,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async))
;
return ((function (__16846,switch__16418__auto__,c__16518__auto___16859,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0 = (function (){
var statearr_16734 = [null,null,null,null,null,null,null];
(statearr_16734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__);

(statearr_16734[(1)] = (1));

return statearr_16734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1 = (function (state_16726){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16726);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16735){if((e16735 instanceof Object)){
var ex__16422__auto__ = e16735;
var statearr_16736_16866 = state_16726;
(statearr_16736_16866[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16726);

return cljs.core.cst$kw$recur;
} else {
throw e16735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16867 = state_16726;
state_16726 = G__16867;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = function(state_16726){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1.call(this,state_16726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__;
})()
;})(__16846,switch__16418__auto__,c__16518__auto___16859,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async))
})();
var state__16520__auto__ = (function (){var statearr_16737 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16737[(6)] = c__16518__auto___16859);

return statearr_16737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(__16846,c__16518__auto___16859,G__16689_16847,G__16689_16848__$1,n__8590__auto___16845,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16689_16848__$1)].join('')));

}

var G__16868 = (__16846 + (1));
__16846 = G__16868;
continue;
} else {
}
break;
}

var c__16518__auto___16869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___16869,jobs,results,process,async){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___16869,jobs,results,process,async){
return (function (state_16759){
var state_val_16760 = (state_16759[(1)]);
if((state_val_16760 === (1))){
var state_16759__$1 = state_16759;
var statearr_16761_16870 = state_16759__$1;
(statearr_16761_16870[(2)] = null);

(statearr_16761_16870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (2))){
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16759__$1,(4),from);
} else {
if((state_val_16760 === (3))){
var inst_16757 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16759__$1,inst_16757);
} else {
if((state_val_16760 === (4))){
var inst_16740 = (state_16759[(7)]);
var inst_16740__$1 = (state_16759[(2)]);
var inst_16741 = (inst_16740__$1 == null);
var state_16759__$1 = (function (){var statearr_16762 = state_16759;
(statearr_16762[(7)] = inst_16740__$1);

return statearr_16762;
})();
if(cljs.core.truth_(inst_16741)){
var statearr_16763_16871 = state_16759__$1;
(statearr_16763_16871[(1)] = (5));

} else {
var statearr_16764_16872 = state_16759__$1;
(statearr_16764_16872[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (5))){
var inst_16743 = cljs.core.async.close_BANG_(jobs);
var state_16759__$1 = state_16759;
var statearr_16765_16873 = state_16759__$1;
(statearr_16765_16873[(2)] = inst_16743);

(statearr_16765_16873[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (6))){
var inst_16740 = (state_16759[(7)]);
var inst_16745 = (state_16759[(8)]);
var inst_16745__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16747 = [inst_16740,inst_16745__$1];
var inst_16748 = (new cljs.core.PersistentVector(null,2,(5),inst_16746,inst_16747,null));
var state_16759__$1 = (function (){var statearr_16766 = state_16759;
(statearr_16766[(8)] = inst_16745__$1);

return statearr_16766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16759__$1,(8),jobs,inst_16748);
} else {
if((state_val_16760 === (7))){
var inst_16755 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16767_16874 = state_16759__$1;
(statearr_16767_16874[(2)] = inst_16755);

(statearr_16767_16874[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16760 === (8))){
var inst_16745 = (state_16759[(8)]);
var inst_16750 = (state_16759[(2)]);
var state_16759__$1 = (function (){var statearr_16768 = state_16759;
(statearr_16768[(9)] = inst_16750);

return statearr_16768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16759__$1,(9),results,inst_16745);
} else {
if((state_val_16760 === (9))){
var inst_16752 = (state_16759[(2)]);
var state_16759__$1 = (function (){var statearr_16769 = state_16759;
(statearr_16769[(10)] = inst_16752);

return statearr_16769;
})();
var statearr_16770_16875 = state_16759__$1;
(statearr_16770_16875[(2)] = null);

(statearr_16770_16875[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___16869,jobs,results,process,async))
;
return ((function (switch__16418__auto__,c__16518__auto___16869,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0 = (function (){
var statearr_16771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__);

(statearr_16771[(1)] = (1));

return statearr_16771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1 = (function (state_16759){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16759);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16772){if((e16772 instanceof Object)){
var ex__16422__auto__ = e16772;
var statearr_16773_16876 = state_16759;
(statearr_16773_16876[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16759);

return cljs.core.cst$kw$recur;
} else {
throw e16772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16877 = state_16759;
state_16759 = G__16877;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = function(state_16759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1.call(this,state_16759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___16869,jobs,results,process,async))
})();
var state__16520__auto__ = (function (){var statearr_16774 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16774[(6)] = c__16518__auto___16869);

return statearr_16774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___16869,jobs,results,process,async))
);


var c__16518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto__,jobs,results,process,async){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto__,jobs,results,process,async){
return (function (state_16812){
var state_val_16813 = (state_16812[(1)]);
if((state_val_16813 === (7))){
var inst_16808 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16814_16878 = state_16812__$1;
(statearr_16814_16878[(2)] = inst_16808);

(statearr_16814_16878[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (20))){
var state_16812__$1 = state_16812;
var statearr_16815_16879 = state_16812__$1;
(statearr_16815_16879[(2)] = null);

(statearr_16815_16879[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (1))){
var state_16812__$1 = state_16812;
var statearr_16816_16880 = state_16812__$1;
(statearr_16816_16880[(2)] = null);

(statearr_16816_16880[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (4))){
var inst_16777 = (state_16812[(7)]);
var inst_16777__$1 = (state_16812[(2)]);
var inst_16778 = (inst_16777__$1 == null);
var state_16812__$1 = (function (){var statearr_16817 = state_16812;
(statearr_16817[(7)] = inst_16777__$1);

return statearr_16817;
})();
if(cljs.core.truth_(inst_16778)){
var statearr_16818_16881 = state_16812__$1;
(statearr_16818_16881[(1)] = (5));

} else {
var statearr_16819_16882 = state_16812__$1;
(statearr_16819_16882[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (15))){
var inst_16790 = (state_16812[(8)]);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16812__$1,(18),to,inst_16790);
} else {
if((state_val_16813 === (21))){
var inst_16803 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16820_16883 = state_16812__$1;
(statearr_16820_16883[(2)] = inst_16803);

(statearr_16820_16883[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (13))){
var inst_16805 = (state_16812[(2)]);
var state_16812__$1 = (function (){var statearr_16821 = state_16812;
(statearr_16821[(9)] = inst_16805);

return statearr_16821;
})();
var statearr_16822_16884 = state_16812__$1;
(statearr_16822_16884[(2)] = null);

(statearr_16822_16884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (6))){
var inst_16777 = (state_16812[(7)]);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16812__$1,(11),inst_16777);
} else {
if((state_val_16813 === (17))){
var inst_16798 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
if(cljs.core.truth_(inst_16798)){
var statearr_16823_16885 = state_16812__$1;
(statearr_16823_16885[(1)] = (19));

} else {
var statearr_16824_16886 = state_16812__$1;
(statearr_16824_16886[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (3))){
var inst_16810 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16812__$1,inst_16810);
} else {
if((state_val_16813 === (12))){
var inst_16787 = (state_16812[(10)]);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16812__$1,(14),inst_16787);
} else {
if((state_val_16813 === (2))){
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16812__$1,(4),results);
} else {
if((state_val_16813 === (19))){
var state_16812__$1 = state_16812;
var statearr_16825_16887 = state_16812__$1;
(statearr_16825_16887[(2)] = null);

(statearr_16825_16887[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (11))){
var inst_16787 = (state_16812[(2)]);
var state_16812__$1 = (function (){var statearr_16826 = state_16812;
(statearr_16826[(10)] = inst_16787);

return statearr_16826;
})();
var statearr_16827_16888 = state_16812__$1;
(statearr_16827_16888[(2)] = null);

(statearr_16827_16888[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (9))){
var state_16812__$1 = state_16812;
var statearr_16828_16889 = state_16812__$1;
(statearr_16828_16889[(2)] = null);

(statearr_16828_16889[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (5))){
var state_16812__$1 = state_16812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16829_16890 = state_16812__$1;
(statearr_16829_16890[(1)] = (8));

} else {
var statearr_16830_16891 = state_16812__$1;
(statearr_16830_16891[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (14))){
var inst_16792 = (state_16812[(11)]);
var inst_16790 = (state_16812[(8)]);
var inst_16790__$1 = (state_16812[(2)]);
var inst_16791 = (inst_16790__$1 == null);
var inst_16792__$1 = cljs.core.not(inst_16791);
var state_16812__$1 = (function (){var statearr_16831 = state_16812;
(statearr_16831[(11)] = inst_16792__$1);

(statearr_16831[(8)] = inst_16790__$1);

return statearr_16831;
})();
if(inst_16792__$1){
var statearr_16832_16892 = state_16812__$1;
(statearr_16832_16892[(1)] = (15));

} else {
var statearr_16833_16893 = state_16812__$1;
(statearr_16833_16893[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (16))){
var inst_16792 = (state_16812[(11)]);
var state_16812__$1 = state_16812;
var statearr_16834_16894 = state_16812__$1;
(statearr_16834_16894[(2)] = inst_16792);

(statearr_16834_16894[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (10))){
var inst_16784 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16835_16895 = state_16812__$1;
(statearr_16835_16895[(2)] = inst_16784);

(statearr_16835_16895[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (18))){
var inst_16795 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16836_16896 = state_16812__$1;
(statearr_16836_16896[(2)] = inst_16795);

(statearr_16836_16896[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16813 === (8))){
var inst_16781 = cljs.core.async.close_BANG_(to);
var state_16812__$1 = state_16812;
var statearr_16837_16897 = state_16812__$1;
(statearr_16837_16897[(2)] = inst_16781);

(statearr_16837_16897[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto__,jobs,results,process,async))
;
return ((function (switch__16418__auto__,c__16518__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0 = (function (){
var statearr_16838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__);

(statearr_16838[(1)] = (1));

return statearr_16838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1 = (function (state_16812){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16812);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16839){if((e16839 instanceof Object)){
var ex__16422__auto__ = e16839;
var statearr_16840_16898 = state_16812;
(statearr_16840_16898[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16812);

return cljs.core.cst$kw$recur;
} else {
throw e16839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16899 = state_16812;
state_16812 = G__16899;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__ = function(state_16812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1.call(this,state_16812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto__,jobs,results,process,async))
})();
var state__16520__auto__ = (function (){var statearr_16841 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16841[(6)] = c__16518__auto__);

return statearr_16841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto__,jobs,results,process,async))
);

return c__16518__auto__;
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
var G__16901 = arguments.length;
switch (G__16901) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__16904 = arguments.length;
switch (G__16904) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__16907 = arguments.length;
switch (G__16907) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16518__auto___16956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___16956,tc,fc){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___16956,tc,fc){
return (function (state_16933){
var state_val_16934 = (state_16933[(1)]);
if((state_val_16934 === (7))){
var inst_16929 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16935_16957 = state_16933__$1;
(statearr_16935_16957[(2)] = inst_16929);

(statearr_16935_16957[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (1))){
var state_16933__$1 = state_16933;
var statearr_16936_16958 = state_16933__$1;
(statearr_16936_16958[(2)] = null);

(statearr_16936_16958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (4))){
var inst_16910 = (state_16933[(7)]);
var inst_16910__$1 = (state_16933[(2)]);
var inst_16911 = (inst_16910__$1 == null);
var state_16933__$1 = (function (){var statearr_16937 = state_16933;
(statearr_16937[(7)] = inst_16910__$1);

return statearr_16937;
})();
if(cljs.core.truth_(inst_16911)){
var statearr_16938_16959 = state_16933__$1;
(statearr_16938_16959[(1)] = (5));

} else {
var statearr_16939_16960 = state_16933__$1;
(statearr_16939_16960[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (13))){
var state_16933__$1 = state_16933;
var statearr_16940_16961 = state_16933__$1;
(statearr_16940_16961[(2)] = null);

(statearr_16940_16961[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (6))){
var inst_16910 = (state_16933[(7)]);
var inst_16916 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16910) : p.call(null,inst_16910));
var state_16933__$1 = state_16933;
if(cljs.core.truth_(inst_16916)){
var statearr_16941_16962 = state_16933__$1;
(statearr_16941_16962[(1)] = (9));

} else {
var statearr_16942_16963 = state_16933__$1;
(statearr_16942_16963[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (3))){
var inst_16931 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16933__$1,inst_16931);
} else {
if((state_val_16934 === (12))){
var state_16933__$1 = state_16933;
var statearr_16943_16964 = state_16933__$1;
(statearr_16943_16964[(2)] = null);

(statearr_16943_16964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (2))){
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16933__$1,(4),ch);
} else {
if((state_val_16934 === (11))){
var inst_16910 = (state_16933[(7)]);
var inst_16920 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16933__$1,(8),inst_16920,inst_16910);
} else {
if((state_val_16934 === (9))){
var state_16933__$1 = state_16933;
var statearr_16944_16965 = state_16933__$1;
(statearr_16944_16965[(2)] = tc);

(statearr_16944_16965[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (5))){
var inst_16913 = cljs.core.async.close_BANG_(tc);
var inst_16914 = cljs.core.async.close_BANG_(fc);
var state_16933__$1 = (function (){var statearr_16945 = state_16933;
(statearr_16945[(8)] = inst_16913);

return statearr_16945;
})();
var statearr_16946_16966 = state_16933__$1;
(statearr_16946_16966[(2)] = inst_16914);

(statearr_16946_16966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (14))){
var inst_16927 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
var statearr_16947_16967 = state_16933__$1;
(statearr_16947_16967[(2)] = inst_16927);

(statearr_16947_16967[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (10))){
var state_16933__$1 = state_16933;
var statearr_16948_16968 = state_16933__$1;
(statearr_16948_16968[(2)] = fc);

(statearr_16948_16968[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16934 === (8))){
var inst_16922 = (state_16933[(2)]);
var state_16933__$1 = state_16933;
if(cljs.core.truth_(inst_16922)){
var statearr_16949_16969 = state_16933__$1;
(statearr_16949_16969[(1)] = (12));

} else {
var statearr_16950_16970 = state_16933__$1;
(statearr_16950_16970[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___16956,tc,fc))
;
return ((function (switch__16418__auto__,c__16518__auto___16956,tc,fc){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_16951 = [null,null,null,null,null,null,null,null,null];
(statearr_16951[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_16951[(1)] = (1));

return statearr_16951;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_16933){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16933);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e16952){if((e16952 instanceof Object)){
var ex__16422__auto__ = e16952;
var statearr_16953_16971 = state_16933;
(statearr_16953_16971[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16933);

return cljs.core.cst$kw$recur;
} else {
throw e16952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__16972 = state_16933;
state_16933 = G__16972;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_16933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_16933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___16956,tc,fc))
})();
var state__16520__auto__ = (function (){var statearr_16954 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_16954[(6)] = c__16518__auto___16956);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___16956,tc,fc))
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
var c__16518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto__){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto__){
return (function (state_16993){
var state_val_16994 = (state_16993[(1)]);
if((state_val_16994 === (7))){
var inst_16989 = (state_16993[(2)]);
var state_16993__$1 = state_16993;
var statearr_16995_17013 = state_16993__$1;
(statearr_16995_17013[(2)] = inst_16989);

(statearr_16995_17013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (1))){
var inst_16973 = init;
var state_16993__$1 = (function (){var statearr_16996 = state_16993;
(statearr_16996[(7)] = inst_16973);

return statearr_16996;
})();
var statearr_16997_17014 = state_16993__$1;
(statearr_16997_17014[(2)] = null);

(statearr_16997_17014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (4))){
var inst_16976 = (state_16993[(8)]);
var inst_16976__$1 = (state_16993[(2)]);
var inst_16977 = (inst_16976__$1 == null);
var state_16993__$1 = (function (){var statearr_16998 = state_16993;
(statearr_16998[(8)] = inst_16976__$1);

return statearr_16998;
})();
if(cljs.core.truth_(inst_16977)){
var statearr_16999_17015 = state_16993__$1;
(statearr_16999_17015[(1)] = (5));

} else {
var statearr_17000_17016 = state_16993__$1;
(statearr_17000_17016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (6))){
var inst_16976 = (state_16993[(8)]);
var inst_16973 = (state_16993[(7)]);
var inst_16980 = (state_16993[(9)]);
var inst_16980__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16973,inst_16976) : f.call(null,inst_16973,inst_16976));
var inst_16981 = cljs.core.reduced_QMARK_(inst_16980__$1);
var state_16993__$1 = (function (){var statearr_17001 = state_16993;
(statearr_17001[(9)] = inst_16980__$1);

return statearr_17001;
})();
if(inst_16981){
var statearr_17002_17017 = state_16993__$1;
(statearr_17002_17017[(1)] = (8));

} else {
var statearr_17003_17018 = state_16993__$1;
(statearr_17003_17018[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (3))){
var inst_16991 = (state_16993[(2)]);
var state_16993__$1 = state_16993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16993__$1,inst_16991);
} else {
if((state_val_16994 === (2))){
var state_16993__$1 = state_16993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16993__$1,(4),ch);
} else {
if((state_val_16994 === (9))){
var inst_16980 = (state_16993[(9)]);
var inst_16973 = inst_16980;
var state_16993__$1 = (function (){var statearr_17004 = state_16993;
(statearr_17004[(7)] = inst_16973);

return statearr_17004;
})();
var statearr_17005_17019 = state_16993__$1;
(statearr_17005_17019[(2)] = null);

(statearr_17005_17019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (5))){
var inst_16973 = (state_16993[(7)]);
var state_16993__$1 = state_16993;
var statearr_17006_17020 = state_16993__$1;
(statearr_17006_17020[(2)] = inst_16973);

(statearr_17006_17020[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (10))){
var inst_16987 = (state_16993[(2)]);
var state_16993__$1 = state_16993;
var statearr_17007_17021 = state_16993__$1;
(statearr_17007_17021[(2)] = inst_16987);

(statearr_17007_17021[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16994 === (8))){
var inst_16980 = (state_16993[(9)]);
var inst_16983 = cljs.core.deref(inst_16980);
var state_16993__$1 = state_16993;
var statearr_17008_17022 = state_16993__$1;
(statearr_17008_17022[(2)] = inst_16983);

(statearr_17008_17022[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto__))
;
return ((function (switch__16418__auto__,c__16518__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16419__auto____0 = (function (){
var statearr_17009 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17009[(0)] = cljs$core$async$reduce_$_state_machine__16419__auto__);

(statearr_17009[(1)] = (1));

return statearr_17009;
});
var cljs$core$async$reduce_$_state_machine__16419__auto____1 = (function (state_16993){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_16993);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17010){if((e17010 instanceof Object)){
var ex__16422__auto__ = e17010;
var statearr_17011_17023 = state_16993;
(statearr_17011_17023[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16993);

return cljs.core.cst$kw$recur;
} else {
throw e17010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17024 = state_16993;
state_16993 = G__17024;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16419__auto__ = function(state_16993){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16419__auto____1.call(this,state_16993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16419__auto____0;
cljs$core$async$reduce_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16419__auto____1;
return cljs$core$async$reduce_$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto__))
})();
var state__16520__auto__ = (function (){var statearr_17012 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17012[(6)] = c__16518__auto__);

return statearr_17012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto__))
);

return c__16518__auto__;
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
var G__17026 = arguments.length;
switch (G__17026) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto__){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto__){
return (function (state_17051){
var state_val_17052 = (state_17051[(1)]);
if((state_val_17052 === (7))){
var inst_17033 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17053_17074 = state_17051__$1;
(statearr_17053_17074[(2)] = inst_17033);

(statearr_17053_17074[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (1))){
var inst_17027 = cljs.core.seq(coll);
var inst_17028 = inst_17027;
var state_17051__$1 = (function (){var statearr_17054 = state_17051;
(statearr_17054[(7)] = inst_17028);

return statearr_17054;
})();
var statearr_17055_17075 = state_17051__$1;
(statearr_17055_17075[(2)] = null);

(statearr_17055_17075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (4))){
var inst_17028 = (state_17051[(7)]);
var inst_17031 = cljs.core.first(inst_17028);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17051__$1,(7),ch,inst_17031);
} else {
if((state_val_17052 === (13))){
var inst_17045 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17056_17076 = state_17051__$1;
(statearr_17056_17076[(2)] = inst_17045);

(statearr_17056_17076[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (6))){
var inst_17036 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
if(cljs.core.truth_(inst_17036)){
var statearr_17057_17077 = state_17051__$1;
(statearr_17057_17077[(1)] = (8));

} else {
var statearr_17058_17078 = state_17051__$1;
(statearr_17058_17078[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (3))){
var inst_17049 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17051__$1,inst_17049);
} else {
if((state_val_17052 === (12))){
var state_17051__$1 = state_17051;
var statearr_17059_17079 = state_17051__$1;
(statearr_17059_17079[(2)] = null);

(statearr_17059_17079[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (2))){
var inst_17028 = (state_17051[(7)]);
var state_17051__$1 = state_17051;
if(cljs.core.truth_(inst_17028)){
var statearr_17060_17080 = state_17051__$1;
(statearr_17060_17080[(1)] = (4));

} else {
var statearr_17061_17081 = state_17051__$1;
(statearr_17061_17081[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (11))){
var inst_17042 = cljs.core.async.close_BANG_(ch);
var state_17051__$1 = state_17051;
var statearr_17062_17082 = state_17051__$1;
(statearr_17062_17082[(2)] = inst_17042);

(statearr_17062_17082[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (9))){
var state_17051__$1 = state_17051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17063_17083 = state_17051__$1;
(statearr_17063_17083[(1)] = (11));

} else {
var statearr_17064_17084 = state_17051__$1;
(statearr_17064_17084[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (5))){
var inst_17028 = (state_17051[(7)]);
var state_17051__$1 = state_17051;
var statearr_17065_17085 = state_17051__$1;
(statearr_17065_17085[(2)] = inst_17028);

(statearr_17065_17085[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (10))){
var inst_17047 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17066_17086 = state_17051__$1;
(statearr_17066_17086[(2)] = inst_17047);

(statearr_17066_17086[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17052 === (8))){
var inst_17028 = (state_17051[(7)]);
var inst_17038 = cljs.core.next(inst_17028);
var inst_17028__$1 = inst_17038;
var state_17051__$1 = (function (){var statearr_17067 = state_17051;
(statearr_17067[(7)] = inst_17028__$1);

return statearr_17067;
})();
var statearr_17068_17087 = state_17051__$1;
(statearr_17068_17087[(2)] = null);

(statearr_17068_17087[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto__))
;
return ((function (switch__16418__auto__,c__16518__auto__){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_17069 = [null,null,null,null,null,null,null,null];
(statearr_17069[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_17069[(1)] = (1));

return statearr_17069;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_17051){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17051);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17070){if((e17070 instanceof Object)){
var ex__16422__auto__ = e17070;
var statearr_17071_17088 = state_17051;
(statearr_17071_17088[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17051);

return cljs.core.cst$kw$recur;
} else {
throw e17070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17089 = state_17051;
state_17051 = G__17089;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_17051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_17051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto__))
})();
var state__16520__auto__ = (function (){var statearr_17072 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17072[(6)] = c__16518__auto__);

return statearr_17072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto__))
);

return c__16518__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8329__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8329__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8329__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8329__auto__.call(null,m,ch));
} else {
var m__8329__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8329__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8329__auto__.call(null,m));
} else {
var m__8329__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8329__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17090 = (function (ch,cs,meta17091){
this.ch = ch;
this.cs = cs;
this.meta17091 = meta17091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17092,meta17091__$1){
var self__ = this;
var _17092__$1 = this;
return (new cljs.core.async.t_cljs$core$async17090(self__.ch,self__.cs,meta17091__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17092){
var self__ = this;
var _17092__$1 = this;
return self__.meta17091;
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17091], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17090";

cljs.core.async.t_cljs$core$async17090.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17090");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17090 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17090(ch__$1,cs__$1,meta17091){
return (new cljs.core.async.t_cljs$core$async17090(ch__$1,cs__$1,meta17091));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17090(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16518__auto___17312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___17312,cs,m,dchan,dctr,done){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___17312,cs,m,dchan,dctr,done){
return (function (state_17227){
var state_val_17228 = (state_17227[(1)]);
if((state_val_17228 === (7))){
var inst_17223 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17229_17313 = state_17227__$1;
(statearr_17229_17313[(2)] = inst_17223);

(statearr_17229_17313[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (20))){
var inst_17126 = (state_17227[(7)]);
var inst_17138 = cljs.core.first(inst_17126);
var inst_17139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17138,(0),null);
var inst_17140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17138,(1),null);
var state_17227__$1 = (function (){var statearr_17230 = state_17227;
(statearr_17230[(8)] = inst_17139);

return statearr_17230;
})();
if(cljs.core.truth_(inst_17140)){
var statearr_17231_17314 = state_17227__$1;
(statearr_17231_17314[(1)] = (22));

} else {
var statearr_17232_17315 = state_17227__$1;
(statearr_17232_17315[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (27))){
var inst_17175 = (state_17227[(9)]);
var inst_17095 = (state_17227[(10)]);
var inst_17170 = (state_17227[(11)]);
var inst_17168 = (state_17227[(12)]);
var inst_17175__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17168,inst_17170);
var inst_17176 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17175__$1,inst_17095,done);
var state_17227__$1 = (function (){var statearr_17233 = state_17227;
(statearr_17233[(9)] = inst_17175__$1);

return statearr_17233;
})();
if(cljs.core.truth_(inst_17176)){
var statearr_17234_17316 = state_17227__$1;
(statearr_17234_17316[(1)] = (30));

} else {
var statearr_17235_17317 = state_17227__$1;
(statearr_17235_17317[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (1))){
var state_17227__$1 = state_17227;
var statearr_17236_17318 = state_17227__$1;
(statearr_17236_17318[(2)] = null);

(statearr_17236_17318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (24))){
var inst_17126 = (state_17227[(7)]);
var inst_17145 = (state_17227[(2)]);
var inst_17146 = cljs.core.next(inst_17126);
var inst_17104 = inst_17146;
var inst_17105 = null;
var inst_17106 = (0);
var inst_17107 = (0);
var state_17227__$1 = (function (){var statearr_17237 = state_17227;
(statearr_17237[(13)] = inst_17104);

(statearr_17237[(14)] = inst_17105);

(statearr_17237[(15)] = inst_17145);

(statearr_17237[(16)] = inst_17107);

(statearr_17237[(17)] = inst_17106);

return statearr_17237;
})();
var statearr_17238_17319 = state_17227__$1;
(statearr_17238_17319[(2)] = null);

(statearr_17238_17319[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (39))){
var state_17227__$1 = state_17227;
var statearr_17242_17320 = state_17227__$1;
(statearr_17242_17320[(2)] = null);

(statearr_17242_17320[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (4))){
var inst_17095 = (state_17227[(10)]);
var inst_17095__$1 = (state_17227[(2)]);
var inst_17096 = (inst_17095__$1 == null);
var state_17227__$1 = (function (){var statearr_17243 = state_17227;
(statearr_17243[(10)] = inst_17095__$1);

return statearr_17243;
})();
if(cljs.core.truth_(inst_17096)){
var statearr_17244_17321 = state_17227__$1;
(statearr_17244_17321[(1)] = (5));

} else {
var statearr_17245_17322 = state_17227__$1;
(statearr_17245_17322[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (15))){
var inst_17104 = (state_17227[(13)]);
var inst_17105 = (state_17227[(14)]);
var inst_17107 = (state_17227[(16)]);
var inst_17106 = (state_17227[(17)]);
var inst_17122 = (state_17227[(2)]);
var inst_17123 = (inst_17107 + (1));
var tmp17239 = inst_17104;
var tmp17240 = inst_17105;
var tmp17241 = inst_17106;
var inst_17104__$1 = tmp17239;
var inst_17105__$1 = tmp17240;
var inst_17106__$1 = tmp17241;
var inst_17107__$1 = inst_17123;
var state_17227__$1 = (function (){var statearr_17246 = state_17227;
(statearr_17246[(13)] = inst_17104__$1);

(statearr_17246[(14)] = inst_17105__$1);

(statearr_17246[(16)] = inst_17107__$1);

(statearr_17246[(18)] = inst_17122);

(statearr_17246[(17)] = inst_17106__$1);

return statearr_17246;
})();
var statearr_17247_17323 = state_17227__$1;
(statearr_17247_17323[(2)] = null);

(statearr_17247_17323[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (21))){
var inst_17149 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17251_17324 = state_17227__$1;
(statearr_17251_17324[(2)] = inst_17149);

(statearr_17251_17324[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (31))){
var inst_17175 = (state_17227[(9)]);
var inst_17179 = done(null);
var inst_17180 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17175);
var state_17227__$1 = (function (){var statearr_17252 = state_17227;
(statearr_17252[(19)] = inst_17179);

return statearr_17252;
})();
var statearr_17253_17325 = state_17227__$1;
(statearr_17253_17325[(2)] = inst_17180);

(statearr_17253_17325[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (32))){
var inst_17169 = (state_17227[(20)]);
var inst_17170 = (state_17227[(11)]);
var inst_17167 = (state_17227[(21)]);
var inst_17168 = (state_17227[(12)]);
var inst_17182 = (state_17227[(2)]);
var inst_17183 = (inst_17170 + (1));
var tmp17248 = inst_17169;
var tmp17249 = inst_17167;
var tmp17250 = inst_17168;
var inst_17167__$1 = tmp17249;
var inst_17168__$1 = tmp17250;
var inst_17169__$1 = tmp17248;
var inst_17170__$1 = inst_17183;
var state_17227__$1 = (function (){var statearr_17254 = state_17227;
(statearr_17254[(20)] = inst_17169__$1);

(statearr_17254[(11)] = inst_17170__$1);

(statearr_17254[(21)] = inst_17167__$1);

(statearr_17254[(22)] = inst_17182);

(statearr_17254[(12)] = inst_17168__$1);

return statearr_17254;
})();
var statearr_17255_17326 = state_17227__$1;
(statearr_17255_17326[(2)] = null);

(statearr_17255_17326[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (40))){
var inst_17195 = (state_17227[(23)]);
var inst_17199 = done(null);
var inst_17200 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17195);
var state_17227__$1 = (function (){var statearr_17256 = state_17227;
(statearr_17256[(24)] = inst_17199);

return statearr_17256;
})();
var statearr_17257_17327 = state_17227__$1;
(statearr_17257_17327[(2)] = inst_17200);

(statearr_17257_17327[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (33))){
var inst_17186 = (state_17227[(25)]);
var inst_17188 = cljs.core.chunked_seq_QMARK_(inst_17186);
var state_17227__$1 = state_17227;
if(inst_17188){
var statearr_17258_17328 = state_17227__$1;
(statearr_17258_17328[(1)] = (36));

} else {
var statearr_17259_17329 = state_17227__$1;
(statearr_17259_17329[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (13))){
var inst_17116 = (state_17227[(26)]);
var inst_17119 = cljs.core.async.close_BANG_(inst_17116);
var state_17227__$1 = state_17227;
var statearr_17260_17330 = state_17227__$1;
(statearr_17260_17330[(2)] = inst_17119);

(statearr_17260_17330[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (22))){
var inst_17139 = (state_17227[(8)]);
var inst_17142 = cljs.core.async.close_BANG_(inst_17139);
var state_17227__$1 = state_17227;
var statearr_17261_17331 = state_17227__$1;
(statearr_17261_17331[(2)] = inst_17142);

(statearr_17261_17331[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (36))){
var inst_17186 = (state_17227[(25)]);
var inst_17190 = cljs.core.chunk_first(inst_17186);
var inst_17191 = cljs.core.chunk_rest(inst_17186);
var inst_17192 = cljs.core.count(inst_17190);
var inst_17167 = inst_17191;
var inst_17168 = inst_17190;
var inst_17169 = inst_17192;
var inst_17170 = (0);
var state_17227__$1 = (function (){var statearr_17262 = state_17227;
(statearr_17262[(20)] = inst_17169);

(statearr_17262[(11)] = inst_17170);

(statearr_17262[(21)] = inst_17167);

(statearr_17262[(12)] = inst_17168);

return statearr_17262;
})();
var statearr_17263_17332 = state_17227__$1;
(statearr_17263_17332[(2)] = null);

(statearr_17263_17332[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (41))){
var inst_17186 = (state_17227[(25)]);
var inst_17202 = (state_17227[(2)]);
var inst_17203 = cljs.core.next(inst_17186);
var inst_17167 = inst_17203;
var inst_17168 = null;
var inst_17169 = (0);
var inst_17170 = (0);
var state_17227__$1 = (function (){var statearr_17264 = state_17227;
(statearr_17264[(20)] = inst_17169);

(statearr_17264[(27)] = inst_17202);

(statearr_17264[(11)] = inst_17170);

(statearr_17264[(21)] = inst_17167);

(statearr_17264[(12)] = inst_17168);

return statearr_17264;
})();
var statearr_17265_17333 = state_17227__$1;
(statearr_17265_17333[(2)] = null);

(statearr_17265_17333[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (43))){
var state_17227__$1 = state_17227;
var statearr_17266_17334 = state_17227__$1;
(statearr_17266_17334[(2)] = null);

(statearr_17266_17334[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (29))){
var inst_17211 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17267_17335 = state_17227__$1;
(statearr_17267_17335[(2)] = inst_17211);

(statearr_17267_17335[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (44))){
var inst_17220 = (state_17227[(2)]);
var state_17227__$1 = (function (){var statearr_17268 = state_17227;
(statearr_17268[(28)] = inst_17220);

return statearr_17268;
})();
var statearr_17269_17336 = state_17227__$1;
(statearr_17269_17336[(2)] = null);

(statearr_17269_17336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (6))){
var inst_17159 = (state_17227[(29)]);
var inst_17158 = cljs.core.deref(cs);
var inst_17159__$1 = cljs.core.keys(inst_17158);
var inst_17160 = cljs.core.count(inst_17159__$1);
var inst_17161 = cljs.core.reset_BANG_(dctr,inst_17160);
var inst_17166 = cljs.core.seq(inst_17159__$1);
var inst_17167 = inst_17166;
var inst_17168 = null;
var inst_17169 = (0);
var inst_17170 = (0);
var state_17227__$1 = (function (){var statearr_17270 = state_17227;
(statearr_17270[(20)] = inst_17169);

(statearr_17270[(29)] = inst_17159__$1);

(statearr_17270[(11)] = inst_17170);

(statearr_17270[(21)] = inst_17167);

(statearr_17270[(12)] = inst_17168);

(statearr_17270[(30)] = inst_17161);

return statearr_17270;
})();
var statearr_17271_17337 = state_17227__$1;
(statearr_17271_17337[(2)] = null);

(statearr_17271_17337[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (28))){
var inst_17186 = (state_17227[(25)]);
var inst_17167 = (state_17227[(21)]);
var inst_17186__$1 = cljs.core.seq(inst_17167);
var state_17227__$1 = (function (){var statearr_17272 = state_17227;
(statearr_17272[(25)] = inst_17186__$1);

return statearr_17272;
})();
if(inst_17186__$1){
var statearr_17273_17338 = state_17227__$1;
(statearr_17273_17338[(1)] = (33));

} else {
var statearr_17274_17339 = state_17227__$1;
(statearr_17274_17339[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (25))){
var inst_17169 = (state_17227[(20)]);
var inst_17170 = (state_17227[(11)]);
var inst_17172 = (inst_17170 < inst_17169);
var inst_17173 = inst_17172;
var state_17227__$1 = state_17227;
if(cljs.core.truth_(inst_17173)){
var statearr_17275_17340 = state_17227__$1;
(statearr_17275_17340[(1)] = (27));

} else {
var statearr_17276_17341 = state_17227__$1;
(statearr_17276_17341[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (34))){
var state_17227__$1 = state_17227;
var statearr_17277_17342 = state_17227__$1;
(statearr_17277_17342[(2)] = null);

(statearr_17277_17342[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (17))){
var state_17227__$1 = state_17227;
var statearr_17278_17343 = state_17227__$1;
(statearr_17278_17343[(2)] = null);

(statearr_17278_17343[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (3))){
var inst_17225 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17227__$1,inst_17225);
} else {
if((state_val_17228 === (12))){
var inst_17154 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17279_17344 = state_17227__$1;
(statearr_17279_17344[(2)] = inst_17154);

(statearr_17279_17344[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (2))){
var state_17227__$1 = state_17227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17227__$1,(4),ch);
} else {
if((state_val_17228 === (23))){
var state_17227__$1 = state_17227;
var statearr_17280_17345 = state_17227__$1;
(statearr_17280_17345[(2)] = null);

(statearr_17280_17345[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (35))){
var inst_17209 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17281_17346 = state_17227__$1;
(statearr_17281_17346[(2)] = inst_17209);

(statearr_17281_17346[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (19))){
var inst_17126 = (state_17227[(7)]);
var inst_17130 = cljs.core.chunk_first(inst_17126);
var inst_17131 = cljs.core.chunk_rest(inst_17126);
var inst_17132 = cljs.core.count(inst_17130);
var inst_17104 = inst_17131;
var inst_17105 = inst_17130;
var inst_17106 = inst_17132;
var inst_17107 = (0);
var state_17227__$1 = (function (){var statearr_17282 = state_17227;
(statearr_17282[(13)] = inst_17104);

(statearr_17282[(14)] = inst_17105);

(statearr_17282[(16)] = inst_17107);

(statearr_17282[(17)] = inst_17106);

return statearr_17282;
})();
var statearr_17283_17347 = state_17227__$1;
(statearr_17283_17347[(2)] = null);

(statearr_17283_17347[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (11))){
var inst_17104 = (state_17227[(13)]);
var inst_17126 = (state_17227[(7)]);
var inst_17126__$1 = cljs.core.seq(inst_17104);
var state_17227__$1 = (function (){var statearr_17284 = state_17227;
(statearr_17284[(7)] = inst_17126__$1);

return statearr_17284;
})();
if(inst_17126__$1){
var statearr_17285_17348 = state_17227__$1;
(statearr_17285_17348[(1)] = (16));

} else {
var statearr_17286_17349 = state_17227__$1;
(statearr_17286_17349[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (9))){
var inst_17156 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17287_17350 = state_17227__$1;
(statearr_17287_17350[(2)] = inst_17156);

(statearr_17287_17350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (5))){
var inst_17102 = cljs.core.deref(cs);
var inst_17103 = cljs.core.seq(inst_17102);
var inst_17104 = inst_17103;
var inst_17105 = null;
var inst_17106 = (0);
var inst_17107 = (0);
var state_17227__$1 = (function (){var statearr_17288 = state_17227;
(statearr_17288[(13)] = inst_17104);

(statearr_17288[(14)] = inst_17105);

(statearr_17288[(16)] = inst_17107);

(statearr_17288[(17)] = inst_17106);

return statearr_17288;
})();
var statearr_17289_17351 = state_17227__$1;
(statearr_17289_17351[(2)] = null);

(statearr_17289_17351[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (14))){
var state_17227__$1 = state_17227;
var statearr_17290_17352 = state_17227__$1;
(statearr_17290_17352[(2)] = null);

(statearr_17290_17352[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (45))){
var inst_17217 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17291_17353 = state_17227__$1;
(statearr_17291_17353[(2)] = inst_17217);

(statearr_17291_17353[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (26))){
var inst_17159 = (state_17227[(29)]);
var inst_17213 = (state_17227[(2)]);
var inst_17214 = cljs.core.seq(inst_17159);
var state_17227__$1 = (function (){var statearr_17292 = state_17227;
(statearr_17292[(31)] = inst_17213);

return statearr_17292;
})();
if(inst_17214){
var statearr_17293_17354 = state_17227__$1;
(statearr_17293_17354[(1)] = (42));

} else {
var statearr_17294_17355 = state_17227__$1;
(statearr_17294_17355[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (16))){
var inst_17126 = (state_17227[(7)]);
var inst_17128 = cljs.core.chunked_seq_QMARK_(inst_17126);
var state_17227__$1 = state_17227;
if(inst_17128){
var statearr_17295_17356 = state_17227__$1;
(statearr_17295_17356[(1)] = (19));

} else {
var statearr_17296_17357 = state_17227__$1;
(statearr_17296_17357[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (38))){
var inst_17206 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17297_17358 = state_17227__$1;
(statearr_17297_17358[(2)] = inst_17206);

(statearr_17297_17358[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (30))){
var state_17227__$1 = state_17227;
var statearr_17298_17359 = state_17227__$1;
(statearr_17298_17359[(2)] = null);

(statearr_17298_17359[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (10))){
var inst_17105 = (state_17227[(14)]);
var inst_17107 = (state_17227[(16)]);
var inst_17115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17105,inst_17107);
var inst_17116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17115,(0),null);
var inst_17117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17115,(1),null);
var state_17227__$1 = (function (){var statearr_17299 = state_17227;
(statearr_17299[(26)] = inst_17116);

return statearr_17299;
})();
if(cljs.core.truth_(inst_17117)){
var statearr_17300_17360 = state_17227__$1;
(statearr_17300_17360[(1)] = (13));

} else {
var statearr_17301_17361 = state_17227__$1;
(statearr_17301_17361[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (18))){
var inst_17152 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17302_17362 = state_17227__$1;
(statearr_17302_17362[(2)] = inst_17152);

(statearr_17302_17362[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (42))){
var state_17227__$1 = state_17227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17227__$1,(45),dchan);
} else {
if((state_val_17228 === (37))){
var inst_17095 = (state_17227[(10)]);
var inst_17195 = (state_17227[(23)]);
var inst_17186 = (state_17227[(25)]);
var inst_17195__$1 = cljs.core.first(inst_17186);
var inst_17196 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17195__$1,inst_17095,done);
var state_17227__$1 = (function (){var statearr_17303 = state_17227;
(statearr_17303[(23)] = inst_17195__$1);

return statearr_17303;
})();
if(cljs.core.truth_(inst_17196)){
var statearr_17304_17363 = state_17227__$1;
(statearr_17304_17363[(1)] = (39));

} else {
var statearr_17305_17364 = state_17227__$1;
(statearr_17305_17364[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17228 === (8))){
var inst_17107 = (state_17227[(16)]);
var inst_17106 = (state_17227[(17)]);
var inst_17109 = (inst_17107 < inst_17106);
var inst_17110 = inst_17109;
var state_17227__$1 = state_17227;
if(cljs.core.truth_(inst_17110)){
var statearr_17306_17365 = state_17227__$1;
(statearr_17306_17365[(1)] = (10));

} else {
var statearr_17307_17366 = state_17227__$1;
(statearr_17307_17366[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___17312,cs,m,dchan,dctr,done))
;
return ((function (switch__16418__auto__,c__16518__auto___17312,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16419__auto__ = null;
var cljs$core$async$mult_$_state_machine__16419__auto____0 = (function (){
var statearr_17308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17308[(0)] = cljs$core$async$mult_$_state_machine__16419__auto__);

(statearr_17308[(1)] = (1));

return statearr_17308;
});
var cljs$core$async$mult_$_state_machine__16419__auto____1 = (function (state_17227){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17227);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17309){if((e17309 instanceof Object)){
var ex__16422__auto__ = e17309;
var statearr_17310_17367 = state_17227;
(statearr_17310_17367[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17227);

return cljs.core.cst$kw$recur;
} else {
throw e17309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17368 = state_17227;
state_17227 = G__17368;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16419__auto__ = function(state_17227){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16419__auto____1.call(this,state_17227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16419__auto____0;
cljs$core$async$mult_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16419__auto____1;
return cljs$core$async$mult_$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___17312,cs,m,dchan,dctr,done))
})();
var state__16520__auto__ = (function (){var statearr_17311 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17311[(6)] = c__16518__auto___17312);

return statearr_17311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___17312,cs,m,dchan,dctr,done))
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
var G__17370 = arguments.length;
switch (G__17370) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8329__auto__.call(null,m,ch));
} else {
var m__8329__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8329__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8329__auto__.call(null,m,ch));
} else {
var m__8329__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8329__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8329__auto__.call(null,m));
} else {
var m__8329__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8329__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8329__auto__.call(null,m,state_map));
} else {
var m__8329__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8329__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8329__auto__.call(null,m,mode));
} else {
var m__8329__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8329__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___17382 = arguments.length;
var i__8815__auto___17383 = (0);
while(true){
if((i__8815__auto___17383 < len__8814__auto___17382)){
args__8821__auto__.push((arguments[i__8815__auto___17383]));

var G__17384 = (i__8815__auto___17383 + (1));
i__8815__auto___17383 = G__17384;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((3) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8822__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17376){
var map__17377 = p__17376;
var map__17377__$1 = ((((!((map__17377 == null)))?((((map__17377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17377):map__17377);
var opts = map__17377__$1;
var statearr_17379_17385 = state;
(statearr_17379_17385[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17377,map__17377__$1,opts){
return (function (val){
var statearr_17380_17386 = state;
(statearr_17380_17386[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17377,map__17377__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17381_17387 = state;
(statearr_17381_17387[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17372){
var G__17373 = cljs.core.first(seq17372);
var seq17372__$1 = cljs.core.next(seq17372);
var G__17374 = cljs.core.first(seq17372__$1);
var seq17372__$2 = cljs.core.next(seq17372__$1);
var G__17375 = cljs.core.first(seq17372__$2);
var seq17372__$3 = cljs.core.next(seq17372__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17373,G__17374,G__17375,seq17372__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17388 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17389){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17389 = meta17389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17390,meta17389__$1){
var self__ = this;
var _17390__$1 = this;
return (new cljs.core.async.t_cljs$core$async17388(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17389__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17390){
var self__ = this;
var _17390__$1 = this;
return self__.meta17389;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17389], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17388";

cljs.core.async.t_cljs$core$async17388.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17388");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17388 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17388(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17389){
return (new cljs.core.async.t_cljs$core$async17388(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17389));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17388(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16518__auto___17552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___17552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___17552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17492){
var state_val_17493 = (state_17492[(1)]);
if((state_val_17493 === (7))){
var inst_17407 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17494_17553 = state_17492__$1;
(statearr_17494_17553[(2)] = inst_17407);

(statearr_17494_17553[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (20))){
var inst_17419 = (state_17492[(7)]);
var state_17492__$1 = state_17492;
var statearr_17495_17554 = state_17492__$1;
(statearr_17495_17554[(2)] = inst_17419);

(statearr_17495_17554[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (27))){
var state_17492__$1 = state_17492;
var statearr_17496_17555 = state_17492__$1;
(statearr_17496_17555[(2)] = null);

(statearr_17496_17555[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (1))){
var inst_17394 = (state_17492[(8)]);
var inst_17394__$1 = calc_state();
var inst_17396 = (inst_17394__$1 == null);
var inst_17397 = cljs.core.not(inst_17396);
var state_17492__$1 = (function (){var statearr_17497 = state_17492;
(statearr_17497[(8)] = inst_17394__$1);

return statearr_17497;
})();
if(inst_17397){
var statearr_17498_17556 = state_17492__$1;
(statearr_17498_17556[(1)] = (2));

} else {
var statearr_17499_17557 = state_17492__$1;
(statearr_17499_17557[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (24))){
var inst_17466 = (state_17492[(9)]);
var inst_17443 = (state_17492[(10)]);
var inst_17452 = (state_17492[(11)]);
var inst_17466__$1 = (inst_17443.cljs$core$IFn$_invoke$arity$1 ? inst_17443.cljs$core$IFn$_invoke$arity$1(inst_17452) : inst_17443.call(null,inst_17452));
var state_17492__$1 = (function (){var statearr_17500 = state_17492;
(statearr_17500[(9)] = inst_17466__$1);

return statearr_17500;
})();
if(cljs.core.truth_(inst_17466__$1)){
var statearr_17501_17558 = state_17492__$1;
(statearr_17501_17558[(1)] = (29));

} else {
var statearr_17502_17559 = state_17492__$1;
(statearr_17502_17559[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (4))){
var inst_17410 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17410)){
var statearr_17503_17560 = state_17492__$1;
(statearr_17503_17560[(1)] = (8));

} else {
var statearr_17504_17561 = state_17492__$1;
(statearr_17504_17561[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (15))){
var inst_17437 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17437)){
var statearr_17505_17562 = state_17492__$1;
(statearr_17505_17562[(1)] = (19));

} else {
var statearr_17506_17563 = state_17492__$1;
(statearr_17506_17563[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (21))){
var inst_17442 = (state_17492[(12)]);
var inst_17442__$1 = (state_17492[(2)]);
var inst_17443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17442__$1,cljs.core.cst$kw$solos);
var inst_17444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17442__$1,cljs.core.cst$kw$mutes);
var inst_17445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17442__$1,cljs.core.cst$kw$reads);
var state_17492__$1 = (function (){var statearr_17507 = state_17492;
(statearr_17507[(10)] = inst_17443);

(statearr_17507[(13)] = inst_17444);

(statearr_17507[(12)] = inst_17442__$1);

return statearr_17507;
})();
return cljs.core.async.ioc_alts_BANG_(state_17492__$1,(22),inst_17445);
} else {
if((state_val_17493 === (31))){
var inst_17474 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17474)){
var statearr_17508_17564 = state_17492__$1;
(statearr_17508_17564[(1)] = (32));

} else {
var statearr_17509_17565 = state_17492__$1;
(statearr_17509_17565[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (32))){
var inst_17451 = (state_17492[(14)]);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17492__$1,(35),out,inst_17451);
} else {
if((state_val_17493 === (33))){
var inst_17442 = (state_17492[(12)]);
var inst_17419 = inst_17442;
var state_17492__$1 = (function (){var statearr_17510 = state_17492;
(statearr_17510[(7)] = inst_17419);

return statearr_17510;
})();
var statearr_17511_17566 = state_17492__$1;
(statearr_17511_17566[(2)] = null);

(statearr_17511_17566[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (13))){
var inst_17419 = (state_17492[(7)]);
var inst_17426 = inst_17419.cljs$lang$protocol_mask$partition0$;
var inst_17427 = (inst_17426 & (64));
var inst_17428 = inst_17419.cljs$core$ISeq$;
var inst_17429 = (cljs.core.PROTOCOL_SENTINEL === inst_17428);
var inst_17430 = (inst_17427) || (inst_17429);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17430)){
var statearr_17512_17567 = state_17492__$1;
(statearr_17512_17567[(1)] = (16));

} else {
var statearr_17513_17568 = state_17492__$1;
(statearr_17513_17568[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (22))){
var inst_17451 = (state_17492[(14)]);
var inst_17452 = (state_17492[(11)]);
var inst_17450 = (state_17492[(2)]);
var inst_17451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17450,(0),null);
var inst_17452__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17450,(1),null);
var inst_17453 = (inst_17451__$1 == null);
var inst_17454 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17452__$1,change);
var inst_17455 = (inst_17453) || (inst_17454);
var state_17492__$1 = (function (){var statearr_17514 = state_17492;
(statearr_17514[(14)] = inst_17451__$1);

(statearr_17514[(11)] = inst_17452__$1);

return statearr_17514;
})();
if(cljs.core.truth_(inst_17455)){
var statearr_17515_17569 = state_17492__$1;
(statearr_17515_17569[(1)] = (23));

} else {
var statearr_17516_17570 = state_17492__$1;
(statearr_17516_17570[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (36))){
var inst_17442 = (state_17492[(12)]);
var inst_17419 = inst_17442;
var state_17492__$1 = (function (){var statearr_17517 = state_17492;
(statearr_17517[(7)] = inst_17419);

return statearr_17517;
})();
var statearr_17518_17571 = state_17492__$1;
(statearr_17518_17571[(2)] = null);

(statearr_17518_17571[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (29))){
var inst_17466 = (state_17492[(9)]);
var state_17492__$1 = state_17492;
var statearr_17519_17572 = state_17492__$1;
(statearr_17519_17572[(2)] = inst_17466);

(statearr_17519_17572[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (6))){
var state_17492__$1 = state_17492;
var statearr_17520_17573 = state_17492__$1;
(statearr_17520_17573[(2)] = false);

(statearr_17520_17573[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (28))){
var inst_17462 = (state_17492[(2)]);
var inst_17463 = calc_state();
var inst_17419 = inst_17463;
var state_17492__$1 = (function (){var statearr_17521 = state_17492;
(statearr_17521[(15)] = inst_17462);

(statearr_17521[(7)] = inst_17419);

return statearr_17521;
})();
var statearr_17522_17574 = state_17492__$1;
(statearr_17522_17574[(2)] = null);

(statearr_17522_17574[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (25))){
var inst_17488 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17523_17575 = state_17492__$1;
(statearr_17523_17575[(2)] = inst_17488);

(statearr_17523_17575[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (34))){
var inst_17486 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17524_17576 = state_17492__$1;
(statearr_17524_17576[(2)] = inst_17486);

(statearr_17524_17576[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (17))){
var state_17492__$1 = state_17492;
var statearr_17525_17577 = state_17492__$1;
(statearr_17525_17577[(2)] = false);

(statearr_17525_17577[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (3))){
var state_17492__$1 = state_17492;
var statearr_17526_17578 = state_17492__$1;
(statearr_17526_17578[(2)] = false);

(statearr_17526_17578[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (12))){
var inst_17490 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17492__$1,inst_17490);
} else {
if((state_val_17493 === (2))){
var inst_17394 = (state_17492[(8)]);
var inst_17399 = inst_17394.cljs$lang$protocol_mask$partition0$;
var inst_17400 = (inst_17399 & (64));
var inst_17401 = inst_17394.cljs$core$ISeq$;
var inst_17402 = (cljs.core.PROTOCOL_SENTINEL === inst_17401);
var inst_17403 = (inst_17400) || (inst_17402);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17403)){
var statearr_17527_17579 = state_17492__$1;
(statearr_17527_17579[(1)] = (5));

} else {
var statearr_17528_17580 = state_17492__$1;
(statearr_17528_17580[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (23))){
var inst_17451 = (state_17492[(14)]);
var inst_17457 = (inst_17451 == null);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17457)){
var statearr_17529_17581 = state_17492__$1;
(statearr_17529_17581[(1)] = (26));

} else {
var statearr_17530_17582 = state_17492__$1;
(statearr_17530_17582[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (35))){
var inst_17477 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17477)){
var statearr_17531_17583 = state_17492__$1;
(statearr_17531_17583[(1)] = (36));

} else {
var statearr_17532_17584 = state_17492__$1;
(statearr_17532_17584[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (19))){
var inst_17419 = (state_17492[(7)]);
var inst_17439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17419);
var state_17492__$1 = state_17492;
var statearr_17533_17585 = state_17492__$1;
(statearr_17533_17585[(2)] = inst_17439);

(statearr_17533_17585[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (11))){
var inst_17419 = (state_17492[(7)]);
var inst_17423 = (inst_17419 == null);
var inst_17424 = cljs.core.not(inst_17423);
var state_17492__$1 = state_17492;
if(inst_17424){
var statearr_17534_17586 = state_17492__$1;
(statearr_17534_17586[(1)] = (13));

} else {
var statearr_17535_17587 = state_17492__$1;
(statearr_17535_17587[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (9))){
var inst_17394 = (state_17492[(8)]);
var state_17492__$1 = state_17492;
var statearr_17536_17588 = state_17492__$1;
(statearr_17536_17588[(2)] = inst_17394);

(statearr_17536_17588[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (5))){
var state_17492__$1 = state_17492;
var statearr_17537_17589 = state_17492__$1;
(statearr_17537_17589[(2)] = true);

(statearr_17537_17589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (14))){
var state_17492__$1 = state_17492;
var statearr_17538_17590 = state_17492__$1;
(statearr_17538_17590[(2)] = false);

(statearr_17538_17590[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (26))){
var inst_17452 = (state_17492[(11)]);
var inst_17459 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17452);
var state_17492__$1 = state_17492;
var statearr_17539_17591 = state_17492__$1;
(statearr_17539_17591[(2)] = inst_17459);

(statearr_17539_17591[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (16))){
var state_17492__$1 = state_17492;
var statearr_17540_17592 = state_17492__$1;
(statearr_17540_17592[(2)] = true);

(statearr_17540_17592[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (38))){
var inst_17482 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17541_17593 = state_17492__$1;
(statearr_17541_17593[(2)] = inst_17482);

(statearr_17541_17593[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (30))){
var inst_17443 = (state_17492[(10)]);
var inst_17452 = (state_17492[(11)]);
var inst_17444 = (state_17492[(13)]);
var inst_17469 = cljs.core.empty_QMARK_(inst_17443);
var inst_17470 = (inst_17444.cljs$core$IFn$_invoke$arity$1 ? inst_17444.cljs$core$IFn$_invoke$arity$1(inst_17452) : inst_17444.call(null,inst_17452));
var inst_17471 = cljs.core.not(inst_17470);
var inst_17472 = (inst_17469) && (inst_17471);
var state_17492__$1 = state_17492;
var statearr_17542_17594 = state_17492__$1;
(statearr_17542_17594[(2)] = inst_17472);

(statearr_17542_17594[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (10))){
var inst_17394 = (state_17492[(8)]);
var inst_17415 = (state_17492[(2)]);
var inst_17416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17415,cljs.core.cst$kw$solos);
var inst_17417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17415,cljs.core.cst$kw$mutes);
var inst_17418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17415,cljs.core.cst$kw$reads);
var inst_17419 = inst_17394;
var state_17492__$1 = (function (){var statearr_17543 = state_17492;
(statearr_17543[(16)] = inst_17418);

(statearr_17543[(17)] = inst_17417);

(statearr_17543[(7)] = inst_17419);

(statearr_17543[(18)] = inst_17416);

return statearr_17543;
})();
var statearr_17544_17595 = state_17492__$1;
(statearr_17544_17595[(2)] = null);

(statearr_17544_17595[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (18))){
var inst_17434 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17545_17596 = state_17492__$1;
(statearr_17545_17596[(2)] = inst_17434);

(statearr_17545_17596[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (37))){
var state_17492__$1 = state_17492;
var statearr_17546_17597 = state_17492__$1;
(statearr_17546_17597[(2)] = null);

(statearr_17546_17597[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17493 === (8))){
var inst_17394 = (state_17492[(8)]);
var inst_17412 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17394);
var state_17492__$1 = state_17492;
var statearr_17547_17598 = state_17492__$1;
(statearr_17547_17598[(2)] = inst_17412);

(statearr_17547_17598[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___17552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16418__auto__,c__16518__auto___17552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16419__auto__ = null;
var cljs$core$async$mix_$_state_machine__16419__auto____0 = (function (){
var statearr_17548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17548[(0)] = cljs$core$async$mix_$_state_machine__16419__auto__);

(statearr_17548[(1)] = (1));

return statearr_17548;
});
var cljs$core$async$mix_$_state_machine__16419__auto____1 = (function (state_17492){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17492);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17549){if((e17549 instanceof Object)){
var ex__16422__auto__ = e17549;
var statearr_17550_17599 = state_17492;
(statearr_17550_17599[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17492);

return cljs.core.cst$kw$recur;
} else {
throw e17549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17600 = state_17492;
state_17492 = G__17600;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16419__auto__ = function(state_17492){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16419__auto____1.call(this,state_17492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16419__auto____0;
cljs$core$async$mix_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16419__auto____1;
return cljs$core$async$mix_$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___17552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16520__auto__ = (function (){var statearr_17551 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17551[(6)] = c__16518__auto___17552);

return statearr_17551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___17552,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8329__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8329__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8329__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8329__auto__.call(null,p,v,ch));
} else {
var m__8329__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8329__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17602 = arguments.length;
switch (G__17602) {
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
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8329__auto__.call(null,p));
} else {
var m__8329__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8329__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8329__auto__.call(null,p,v));
} else {
var m__8329__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8329__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__17606 = arguments.length;
switch (G__17606) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7645__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7645__auto__,mults){
return (function (p1__17604_SHARP_){
if(cljs.core.truth_((p1__17604_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17604_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17604_SHARP_.call(null,topic)))){
return p1__17604_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17604_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7645__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17607 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17608){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17608 = meta17608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17609,meta17608__$1){
var self__ = this;
var _17609__$1 = this;
return (new cljs.core.async.t_cljs$core$async17607(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17608__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17609){
var self__ = this;
var _17609__$1 = this;
return self__.meta17608;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17608], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17607";

cljs.core.async.t_cljs$core$async17607.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17607");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17607 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17607(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17608){
return (new cljs.core.async.t_cljs$core$async17607(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17608));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17607(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16518__auto___17727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___17727,mults,ensure_mult,p){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___17727,mults,ensure_mult,p){
return (function (state_17681){
var state_val_17682 = (state_17681[(1)]);
if((state_val_17682 === (7))){
var inst_17677 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17683_17728 = state_17681__$1;
(statearr_17683_17728[(2)] = inst_17677);

(statearr_17683_17728[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (20))){
var state_17681__$1 = state_17681;
var statearr_17684_17729 = state_17681__$1;
(statearr_17684_17729[(2)] = null);

(statearr_17684_17729[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (1))){
var state_17681__$1 = state_17681;
var statearr_17685_17730 = state_17681__$1;
(statearr_17685_17730[(2)] = null);

(statearr_17685_17730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (24))){
var inst_17660 = (state_17681[(7)]);
var inst_17669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17660);
var state_17681__$1 = state_17681;
var statearr_17686_17731 = state_17681__$1;
(statearr_17686_17731[(2)] = inst_17669);

(statearr_17686_17731[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (4))){
var inst_17612 = (state_17681[(8)]);
var inst_17612__$1 = (state_17681[(2)]);
var inst_17613 = (inst_17612__$1 == null);
var state_17681__$1 = (function (){var statearr_17687 = state_17681;
(statearr_17687[(8)] = inst_17612__$1);

return statearr_17687;
})();
if(cljs.core.truth_(inst_17613)){
var statearr_17688_17732 = state_17681__$1;
(statearr_17688_17732[(1)] = (5));

} else {
var statearr_17689_17733 = state_17681__$1;
(statearr_17689_17733[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (15))){
var inst_17654 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17690_17734 = state_17681__$1;
(statearr_17690_17734[(2)] = inst_17654);

(statearr_17690_17734[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (21))){
var inst_17674 = (state_17681[(2)]);
var state_17681__$1 = (function (){var statearr_17691 = state_17681;
(statearr_17691[(9)] = inst_17674);

return statearr_17691;
})();
var statearr_17692_17735 = state_17681__$1;
(statearr_17692_17735[(2)] = null);

(statearr_17692_17735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (13))){
var inst_17636 = (state_17681[(10)]);
var inst_17638 = cljs.core.chunked_seq_QMARK_(inst_17636);
var state_17681__$1 = state_17681;
if(inst_17638){
var statearr_17693_17736 = state_17681__$1;
(statearr_17693_17736[(1)] = (16));

} else {
var statearr_17694_17737 = state_17681__$1;
(statearr_17694_17737[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (22))){
var inst_17666 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17666)){
var statearr_17695_17738 = state_17681__$1;
(statearr_17695_17738[(1)] = (23));

} else {
var statearr_17696_17739 = state_17681__$1;
(statearr_17696_17739[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (6))){
var inst_17612 = (state_17681[(8)]);
var inst_17662 = (state_17681[(11)]);
var inst_17660 = (state_17681[(7)]);
var inst_17660__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17612) : topic_fn.call(null,inst_17612));
var inst_17661 = cljs.core.deref(mults);
var inst_17662__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17661,inst_17660__$1);
var state_17681__$1 = (function (){var statearr_17697 = state_17681;
(statearr_17697[(11)] = inst_17662__$1);

(statearr_17697[(7)] = inst_17660__$1);

return statearr_17697;
})();
if(cljs.core.truth_(inst_17662__$1)){
var statearr_17698_17740 = state_17681__$1;
(statearr_17698_17740[(1)] = (19));

} else {
var statearr_17699_17741 = state_17681__$1;
(statearr_17699_17741[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (25))){
var inst_17671 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17700_17742 = state_17681__$1;
(statearr_17700_17742[(2)] = inst_17671);

(statearr_17700_17742[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (17))){
var inst_17636 = (state_17681[(10)]);
var inst_17645 = cljs.core.first(inst_17636);
var inst_17646 = cljs.core.async.muxch_STAR_(inst_17645);
var inst_17647 = cljs.core.async.close_BANG_(inst_17646);
var inst_17648 = cljs.core.next(inst_17636);
var inst_17622 = inst_17648;
var inst_17623 = null;
var inst_17624 = (0);
var inst_17625 = (0);
var state_17681__$1 = (function (){var statearr_17701 = state_17681;
(statearr_17701[(12)] = inst_17647);

(statearr_17701[(13)] = inst_17623);

(statearr_17701[(14)] = inst_17624);

(statearr_17701[(15)] = inst_17622);

(statearr_17701[(16)] = inst_17625);

return statearr_17701;
})();
var statearr_17702_17743 = state_17681__$1;
(statearr_17702_17743[(2)] = null);

(statearr_17702_17743[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (3))){
var inst_17679 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17681__$1,inst_17679);
} else {
if((state_val_17682 === (12))){
var inst_17656 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17703_17744 = state_17681__$1;
(statearr_17703_17744[(2)] = inst_17656);

(statearr_17703_17744[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (2))){
var state_17681__$1 = state_17681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17681__$1,(4),ch);
} else {
if((state_val_17682 === (23))){
var state_17681__$1 = state_17681;
var statearr_17704_17745 = state_17681__$1;
(statearr_17704_17745[(2)] = null);

(statearr_17704_17745[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (19))){
var inst_17612 = (state_17681[(8)]);
var inst_17662 = (state_17681[(11)]);
var inst_17664 = cljs.core.async.muxch_STAR_(inst_17662);
var state_17681__$1 = state_17681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17681__$1,(22),inst_17664,inst_17612);
} else {
if((state_val_17682 === (11))){
var inst_17636 = (state_17681[(10)]);
var inst_17622 = (state_17681[(15)]);
var inst_17636__$1 = cljs.core.seq(inst_17622);
var state_17681__$1 = (function (){var statearr_17705 = state_17681;
(statearr_17705[(10)] = inst_17636__$1);

return statearr_17705;
})();
if(inst_17636__$1){
var statearr_17706_17746 = state_17681__$1;
(statearr_17706_17746[(1)] = (13));

} else {
var statearr_17707_17747 = state_17681__$1;
(statearr_17707_17747[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (9))){
var inst_17658 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17708_17748 = state_17681__$1;
(statearr_17708_17748[(2)] = inst_17658);

(statearr_17708_17748[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (5))){
var inst_17619 = cljs.core.deref(mults);
var inst_17620 = cljs.core.vals(inst_17619);
var inst_17621 = cljs.core.seq(inst_17620);
var inst_17622 = inst_17621;
var inst_17623 = null;
var inst_17624 = (0);
var inst_17625 = (0);
var state_17681__$1 = (function (){var statearr_17709 = state_17681;
(statearr_17709[(13)] = inst_17623);

(statearr_17709[(14)] = inst_17624);

(statearr_17709[(15)] = inst_17622);

(statearr_17709[(16)] = inst_17625);

return statearr_17709;
})();
var statearr_17710_17749 = state_17681__$1;
(statearr_17710_17749[(2)] = null);

(statearr_17710_17749[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (14))){
var state_17681__$1 = state_17681;
var statearr_17714_17750 = state_17681__$1;
(statearr_17714_17750[(2)] = null);

(statearr_17714_17750[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (16))){
var inst_17636 = (state_17681[(10)]);
var inst_17640 = cljs.core.chunk_first(inst_17636);
var inst_17641 = cljs.core.chunk_rest(inst_17636);
var inst_17642 = cljs.core.count(inst_17640);
var inst_17622 = inst_17641;
var inst_17623 = inst_17640;
var inst_17624 = inst_17642;
var inst_17625 = (0);
var state_17681__$1 = (function (){var statearr_17715 = state_17681;
(statearr_17715[(13)] = inst_17623);

(statearr_17715[(14)] = inst_17624);

(statearr_17715[(15)] = inst_17622);

(statearr_17715[(16)] = inst_17625);

return statearr_17715;
})();
var statearr_17716_17751 = state_17681__$1;
(statearr_17716_17751[(2)] = null);

(statearr_17716_17751[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (10))){
var inst_17623 = (state_17681[(13)]);
var inst_17624 = (state_17681[(14)]);
var inst_17622 = (state_17681[(15)]);
var inst_17625 = (state_17681[(16)]);
var inst_17630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17623,inst_17625);
var inst_17631 = cljs.core.async.muxch_STAR_(inst_17630);
var inst_17632 = cljs.core.async.close_BANG_(inst_17631);
var inst_17633 = (inst_17625 + (1));
var tmp17711 = inst_17623;
var tmp17712 = inst_17624;
var tmp17713 = inst_17622;
var inst_17622__$1 = tmp17713;
var inst_17623__$1 = tmp17711;
var inst_17624__$1 = tmp17712;
var inst_17625__$1 = inst_17633;
var state_17681__$1 = (function (){var statearr_17717 = state_17681;
(statearr_17717[(17)] = inst_17632);

(statearr_17717[(13)] = inst_17623__$1);

(statearr_17717[(14)] = inst_17624__$1);

(statearr_17717[(15)] = inst_17622__$1);

(statearr_17717[(16)] = inst_17625__$1);

return statearr_17717;
})();
var statearr_17718_17752 = state_17681__$1;
(statearr_17718_17752[(2)] = null);

(statearr_17718_17752[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (18))){
var inst_17651 = (state_17681[(2)]);
var state_17681__$1 = state_17681;
var statearr_17719_17753 = state_17681__$1;
(statearr_17719_17753[(2)] = inst_17651);

(statearr_17719_17753[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17682 === (8))){
var inst_17624 = (state_17681[(14)]);
var inst_17625 = (state_17681[(16)]);
var inst_17627 = (inst_17625 < inst_17624);
var inst_17628 = inst_17627;
var state_17681__$1 = state_17681;
if(cljs.core.truth_(inst_17628)){
var statearr_17720_17754 = state_17681__$1;
(statearr_17720_17754[(1)] = (10));

} else {
var statearr_17721_17755 = state_17681__$1;
(statearr_17721_17755[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___17727,mults,ensure_mult,p))
;
return ((function (switch__16418__auto__,c__16518__auto___17727,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_17722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17722[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_17722[(1)] = (1));

return statearr_17722;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_17681){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17681);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17723){if((e17723 instanceof Object)){
var ex__16422__auto__ = e17723;
var statearr_17724_17756 = state_17681;
(statearr_17724_17756[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17681);

return cljs.core.cst$kw$recur;
} else {
throw e17723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17757 = state_17681;
state_17681 = G__17757;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_17681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_17681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___17727,mults,ensure_mult,p))
})();
var state__16520__auto__ = (function (){var statearr_17725 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17725[(6)] = c__16518__auto___17727);

return statearr_17725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___17727,mults,ensure_mult,p))
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
var G__17759 = arguments.length;
switch (G__17759) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17762 = arguments.length;
switch (G__17762) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__17765 = arguments.length;
switch (G__17765) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16518__auto___17832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___17832,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___17832,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17804){
var state_val_17805 = (state_17804[(1)]);
if((state_val_17805 === (7))){
var state_17804__$1 = state_17804;
var statearr_17806_17833 = state_17804__$1;
(statearr_17806_17833[(2)] = null);

(statearr_17806_17833[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (1))){
var state_17804__$1 = state_17804;
var statearr_17807_17834 = state_17804__$1;
(statearr_17807_17834[(2)] = null);

(statearr_17807_17834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (4))){
var inst_17768 = (state_17804[(7)]);
var inst_17770 = (inst_17768 < cnt);
var state_17804__$1 = state_17804;
if(cljs.core.truth_(inst_17770)){
var statearr_17808_17835 = state_17804__$1;
(statearr_17808_17835[(1)] = (6));

} else {
var statearr_17809_17836 = state_17804__$1;
(statearr_17809_17836[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (15))){
var inst_17800 = (state_17804[(2)]);
var state_17804__$1 = state_17804;
var statearr_17810_17837 = state_17804__$1;
(statearr_17810_17837[(2)] = inst_17800);

(statearr_17810_17837[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (13))){
var inst_17793 = cljs.core.async.close_BANG_(out);
var state_17804__$1 = state_17804;
var statearr_17811_17838 = state_17804__$1;
(statearr_17811_17838[(2)] = inst_17793);

(statearr_17811_17838[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (6))){
var state_17804__$1 = state_17804;
var statearr_17812_17839 = state_17804__$1;
(statearr_17812_17839[(2)] = null);

(statearr_17812_17839[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (3))){
var inst_17802 = (state_17804[(2)]);
var state_17804__$1 = state_17804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17804__$1,inst_17802);
} else {
if((state_val_17805 === (12))){
var inst_17790 = (state_17804[(8)]);
var inst_17790__$1 = (state_17804[(2)]);
var inst_17791 = cljs.core.some(cljs.core.nil_QMARK_,inst_17790__$1);
var state_17804__$1 = (function (){var statearr_17813 = state_17804;
(statearr_17813[(8)] = inst_17790__$1);

return statearr_17813;
})();
if(cljs.core.truth_(inst_17791)){
var statearr_17814_17840 = state_17804__$1;
(statearr_17814_17840[(1)] = (13));

} else {
var statearr_17815_17841 = state_17804__$1;
(statearr_17815_17841[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (2))){
var inst_17767 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17768 = (0);
var state_17804__$1 = (function (){var statearr_17816 = state_17804;
(statearr_17816[(7)] = inst_17768);

(statearr_17816[(9)] = inst_17767);

return statearr_17816;
})();
var statearr_17817_17842 = state_17804__$1;
(statearr_17817_17842[(2)] = null);

(statearr_17817_17842[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (11))){
var inst_17768 = (state_17804[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17804,(10),Object,null,(9));
var inst_17777 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17768) : chs__$1.call(null,inst_17768));
var inst_17778 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17768) : done.call(null,inst_17768));
var inst_17779 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17777,inst_17778);
var state_17804__$1 = state_17804;
var statearr_17818_17843 = state_17804__$1;
(statearr_17818_17843[(2)] = inst_17779);


cljs.core.async.impl.ioc_helpers.process_exception(state_17804__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (9))){
var inst_17768 = (state_17804[(7)]);
var inst_17781 = (state_17804[(2)]);
var inst_17782 = (inst_17768 + (1));
var inst_17768__$1 = inst_17782;
var state_17804__$1 = (function (){var statearr_17819 = state_17804;
(statearr_17819[(7)] = inst_17768__$1);

(statearr_17819[(10)] = inst_17781);

return statearr_17819;
})();
var statearr_17820_17844 = state_17804__$1;
(statearr_17820_17844[(2)] = null);

(statearr_17820_17844[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (5))){
var inst_17788 = (state_17804[(2)]);
var state_17804__$1 = (function (){var statearr_17821 = state_17804;
(statearr_17821[(11)] = inst_17788);

return statearr_17821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17804__$1,(12),dchan);
} else {
if((state_val_17805 === (14))){
var inst_17790 = (state_17804[(8)]);
var inst_17795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17790);
var state_17804__$1 = state_17804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17804__$1,(16),out,inst_17795);
} else {
if((state_val_17805 === (16))){
var inst_17797 = (state_17804[(2)]);
var state_17804__$1 = (function (){var statearr_17822 = state_17804;
(statearr_17822[(12)] = inst_17797);

return statearr_17822;
})();
var statearr_17823_17845 = state_17804__$1;
(statearr_17823_17845[(2)] = null);

(statearr_17823_17845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (10))){
var inst_17772 = (state_17804[(2)]);
var inst_17773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17804__$1 = (function (){var statearr_17824 = state_17804;
(statearr_17824[(13)] = inst_17772);

return statearr_17824;
})();
var statearr_17825_17846 = state_17804__$1;
(statearr_17825_17846[(2)] = inst_17773);


cljs.core.async.impl.ioc_helpers.process_exception(state_17804__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17805 === (8))){
var inst_17786 = (state_17804[(2)]);
var state_17804__$1 = state_17804;
var statearr_17826_17847 = state_17804__$1;
(statearr_17826_17847[(2)] = inst_17786);

(statearr_17826_17847[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___17832,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16418__auto__,c__16518__auto___17832,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_17827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17827[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_17827[(1)] = (1));

return statearr_17827;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_17804){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17804);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17828){if((e17828 instanceof Object)){
var ex__16422__auto__ = e17828;
var statearr_17829_17848 = state_17804;
(statearr_17829_17848[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17804);

return cljs.core.cst$kw$recur;
} else {
throw e17828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17849 = state_17804;
state_17804 = G__17849;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_17804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_17804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___17832,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16520__auto__ = (function (){var statearr_17830 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17830[(6)] = c__16518__auto___17832);

return statearr_17830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___17832,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17852 = arguments.length;
switch (G__17852) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16518__auto___17906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___17906,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___17906,out){
return (function (state_17884){
var state_val_17885 = (state_17884[(1)]);
if((state_val_17885 === (7))){
var inst_17864 = (state_17884[(7)]);
var inst_17863 = (state_17884[(8)]);
var inst_17863__$1 = (state_17884[(2)]);
var inst_17864__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17863__$1,(0),null);
var inst_17865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17863__$1,(1),null);
var inst_17866 = (inst_17864__$1 == null);
var state_17884__$1 = (function (){var statearr_17886 = state_17884;
(statearr_17886[(7)] = inst_17864__$1);

(statearr_17886[(9)] = inst_17865);

(statearr_17886[(8)] = inst_17863__$1);

return statearr_17886;
})();
if(cljs.core.truth_(inst_17866)){
var statearr_17887_17907 = state_17884__$1;
(statearr_17887_17907[(1)] = (8));

} else {
var statearr_17888_17908 = state_17884__$1;
(statearr_17888_17908[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (1))){
var inst_17853 = cljs.core.vec(chs);
var inst_17854 = inst_17853;
var state_17884__$1 = (function (){var statearr_17889 = state_17884;
(statearr_17889[(10)] = inst_17854);

return statearr_17889;
})();
var statearr_17890_17909 = state_17884__$1;
(statearr_17890_17909[(2)] = null);

(statearr_17890_17909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (4))){
var inst_17854 = (state_17884[(10)]);
var state_17884__$1 = state_17884;
return cljs.core.async.ioc_alts_BANG_(state_17884__$1,(7),inst_17854);
} else {
if((state_val_17885 === (6))){
var inst_17880 = (state_17884[(2)]);
var state_17884__$1 = state_17884;
var statearr_17891_17910 = state_17884__$1;
(statearr_17891_17910[(2)] = inst_17880);

(statearr_17891_17910[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (3))){
var inst_17882 = (state_17884[(2)]);
var state_17884__$1 = state_17884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17884__$1,inst_17882);
} else {
if((state_val_17885 === (2))){
var inst_17854 = (state_17884[(10)]);
var inst_17856 = cljs.core.count(inst_17854);
var inst_17857 = (inst_17856 > (0));
var state_17884__$1 = state_17884;
if(cljs.core.truth_(inst_17857)){
var statearr_17893_17911 = state_17884__$1;
(statearr_17893_17911[(1)] = (4));

} else {
var statearr_17894_17912 = state_17884__$1;
(statearr_17894_17912[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (11))){
var inst_17854 = (state_17884[(10)]);
var inst_17873 = (state_17884[(2)]);
var tmp17892 = inst_17854;
var inst_17854__$1 = tmp17892;
var state_17884__$1 = (function (){var statearr_17895 = state_17884;
(statearr_17895[(10)] = inst_17854__$1);

(statearr_17895[(11)] = inst_17873);

return statearr_17895;
})();
var statearr_17896_17913 = state_17884__$1;
(statearr_17896_17913[(2)] = null);

(statearr_17896_17913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (9))){
var inst_17864 = (state_17884[(7)]);
var state_17884__$1 = state_17884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17884__$1,(11),out,inst_17864);
} else {
if((state_val_17885 === (5))){
var inst_17878 = cljs.core.async.close_BANG_(out);
var state_17884__$1 = state_17884;
var statearr_17897_17914 = state_17884__$1;
(statearr_17897_17914[(2)] = inst_17878);

(statearr_17897_17914[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (10))){
var inst_17876 = (state_17884[(2)]);
var state_17884__$1 = state_17884;
var statearr_17898_17915 = state_17884__$1;
(statearr_17898_17915[(2)] = inst_17876);

(statearr_17898_17915[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17885 === (8))){
var inst_17864 = (state_17884[(7)]);
var inst_17865 = (state_17884[(9)]);
var inst_17854 = (state_17884[(10)]);
var inst_17863 = (state_17884[(8)]);
var inst_17868 = (function (){var cs = inst_17854;
var vec__17859 = inst_17863;
var v = inst_17864;
var c = inst_17865;
return ((function (cs,vec__17859,v,c,inst_17864,inst_17865,inst_17854,inst_17863,state_val_17885,c__16518__auto___17906,out){
return (function (p1__17850_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17850_SHARP_);
});
;})(cs,vec__17859,v,c,inst_17864,inst_17865,inst_17854,inst_17863,state_val_17885,c__16518__auto___17906,out))
})();
var inst_17869 = cljs.core.filterv(inst_17868,inst_17854);
var inst_17854__$1 = inst_17869;
var state_17884__$1 = (function (){var statearr_17899 = state_17884;
(statearr_17899[(10)] = inst_17854__$1);

return statearr_17899;
})();
var statearr_17900_17916 = state_17884__$1;
(statearr_17900_17916[(2)] = null);

(statearr_17900_17916[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___17906,out))
;
return ((function (switch__16418__auto__,c__16518__auto___17906,out){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_17901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17901[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_17901[(1)] = (1));

return statearr_17901;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_17884){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17884);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17902){if((e17902 instanceof Object)){
var ex__16422__auto__ = e17902;
var statearr_17903_17917 = state_17884;
(statearr_17903_17917[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17884);

return cljs.core.cst$kw$recur;
} else {
throw e17902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17918 = state_17884;
state_17884 = G__17918;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_17884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_17884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___17906,out))
})();
var state__16520__auto__ = (function (){var statearr_17904 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17904[(6)] = c__16518__auto___17906);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___17906,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17920 = arguments.length;
switch (G__17920) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16518__auto___17965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___17965,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___17965,out){
return (function (state_17944){
var state_val_17945 = (state_17944[(1)]);
if((state_val_17945 === (7))){
var inst_17926 = (state_17944[(7)]);
var inst_17926__$1 = (state_17944[(2)]);
var inst_17927 = (inst_17926__$1 == null);
var inst_17928 = cljs.core.not(inst_17927);
var state_17944__$1 = (function (){var statearr_17946 = state_17944;
(statearr_17946[(7)] = inst_17926__$1);

return statearr_17946;
})();
if(inst_17928){
var statearr_17947_17966 = state_17944__$1;
(statearr_17947_17966[(1)] = (8));

} else {
var statearr_17948_17967 = state_17944__$1;
(statearr_17948_17967[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (1))){
var inst_17921 = (0);
var state_17944__$1 = (function (){var statearr_17949 = state_17944;
(statearr_17949[(8)] = inst_17921);

return statearr_17949;
})();
var statearr_17950_17968 = state_17944__$1;
(statearr_17950_17968[(2)] = null);

(statearr_17950_17968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (4))){
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17944__$1,(7),ch);
} else {
if((state_val_17945 === (6))){
var inst_17939 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17951_17969 = state_17944__$1;
(statearr_17951_17969[(2)] = inst_17939);

(statearr_17951_17969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (3))){
var inst_17941 = (state_17944[(2)]);
var inst_17942 = cljs.core.async.close_BANG_(out);
var state_17944__$1 = (function (){var statearr_17952 = state_17944;
(statearr_17952[(9)] = inst_17941);

return statearr_17952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17944__$1,inst_17942);
} else {
if((state_val_17945 === (2))){
var inst_17921 = (state_17944[(8)]);
var inst_17923 = (inst_17921 < n);
var state_17944__$1 = state_17944;
if(cljs.core.truth_(inst_17923)){
var statearr_17953_17970 = state_17944__$1;
(statearr_17953_17970[(1)] = (4));

} else {
var statearr_17954_17971 = state_17944__$1;
(statearr_17954_17971[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (11))){
var inst_17921 = (state_17944[(8)]);
var inst_17931 = (state_17944[(2)]);
var inst_17932 = (inst_17921 + (1));
var inst_17921__$1 = inst_17932;
var state_17944__$1 = (function (){var statearr_17955 = state_17944;
(statearr_17955[(8)] = inst_17921__$1);

(statearr_17955[(10)] = inst_17931);

return statearr_17955;
})();
var statearr_17956_17972 = state_17944__$1;
(statearr_17956_17972[(2)] = null);

(statearr_17956_17972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (9))){
var state_17944__$1 = state_17944;
var statearr_17957_17973 = state_17944__$1;
(statearr_17957_17973[(2)] = null);

(statearr_17957_17973[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (5))){
var state_17944__$1 = state_17944;
var statearr_17958_17974 = state_17944__$1;
(statearr_17958_17974[(2)] = null);

(statearr_17958_17974[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (10))){
var inst_17936 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17959_17975 = state_17944__$1;
(statearr_17959_17975[(2)] = inst_17936);

(statearr_17959_17975[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17945 === (8))){
var inst_17926 = (state_17944[(7)]);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17944__$1,(11),out,inst_17926);
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
});})(c__16518__auto___17965,out))
;
return ((function (switch__16418__auto__,c__16518__auto___17965,out){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_17960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17960[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_17960[(1)] = (1));

return statearr_17960;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_17944){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_17944);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e17961){if((e17961 instanceof Object)){
var ex__16422__auto__ = e17961;
var statearr_17962_17976 = state_17944;
(statearr_17962_17976[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17944);

return cljs.core.cst$kw$recur;
} else {
throw e17961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__17977 = state_17944;
state_17944 = G__17977;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_17944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_17944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___17965,out))
})();
var state__16520__auto__ = (function (){var statearr_17963 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_17963[(6)] = c__16518__auto___17965);

return statearr_17963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___17965,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17979 = (function (f,ch,meta17980){
this.f = f;
this.ch = ch;
this.meta17980 = meta17980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17981,meta17980__$1){
var self__ = this;
var _17981__$1 = this;
return (new cljs.core.async.t_cljs$core$async17979(self__.f,self__.ch,meta17980__$1));
});

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17981){
var self__ = this;
var _17981__$1 = this;
return self__.meta17980;
});

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17982 = (function (f,ch,meta17980,_,fn1,meta17983){
this.f = f;
this.ch = ch;
this.meta17980 = meta17980;
this._ = _;
this.fn1 = fn1;
this.meta17983 = meta17983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17984,meta17983__$1){
var self__ = this;
var _17984__$1 = this;
return (new cljs.core.async.t_cljs$core$async17982(self__.f,self__.ch,self__.meta17980,self__._,self__.fn1,meta17983__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17984){
var self__ = this;
var _17984__$1 = this;
return self__.meta17983;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17978_SHARP_){
var G__17985 = (((p1__17978_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17978_SHARP_) : self__.f.call(null,p1__17978_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17985) : f1.call(null,G__17985));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17982.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17980,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17979], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17983], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17982";

cljs.core.async.t_cljs$core$async17982.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17982");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17982 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17982(f__$1,ch__$1,meta17980__$1,___$2,fn1__$1,meta17983){
return (new cljs.core.async.t_cljs$core$async17982(f__$1,ch__$1,meta17980__$1,___$2,fn1__$1,meta17983));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17982(self__.f,self__.ch,self__.meta17980,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7633__auto__ = ret;
if(cljs.core.truth_(and__7633__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7633__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17986 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17986) : self__.f.call(null,G__17986));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17980], null);
});

cljs.core.async.t_cljs$core$async17979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17979";

cljs.core.async.t_cljs$core$async17979.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17979");
});

cljs.core.async.__GT_t_cljs$core$async17979 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17979(f__$1,ch__$1,meta17980){
return (new cljs.core.async.t_cljs$core$async17979(f__$1,ch__$1,meta17980));
});

}

return (new cljs.core.async.t_cljs$core$async17979(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17987 = (function (f,ch,meta17988){
this.f = f;
this.ch = ch;
this.meta17988 = meta17988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17989,meta17988__$1){
var self__ = this;
var _17989__$1 = this;
return (new cljs.core.async.t_cljs$core$async17987(self__.f,self__.ch,meta17988__$1));
});

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17989){
var self__ = this;
var _17989__$1 = this;
return self__.meta17988;
});

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17988], null);
});

cljs.core.async.t_cljs$core$async17987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17987";

cljs.core.async.t_cljs$core$async17987.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17987");
});

cljs.core.async.__GT_t_cljs$core$async17987 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17987(f__$1,ch__$1,meta17988){
return (new cljs.core.async.t_cljs$core$async17987(f__$1,ch__$1,meta17988));
});

}

return (new cljs.core.async.t_cljs$core$async17987(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17990 = (function (p,ch,meta17991){
this.p = p;
this.ch = ch;
this.meta17991 = meta17991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17992,meta17991__$1){
var self__ = this;
var _17992__$1 = this;
return (new cljs.core.async.t_cljs$core$async17990(self__.p,self__.ch,meta17991__$1));
});

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17992){
var self__ = this;
var _17992__$1 = this;
return self__.meta17991;
});

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17991], null);
});

cljs.core.async.t_cljs$core$async17990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17990";

cljs.core.async.t_cljs$core$async17990.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"cljs.core.async/t_cljs$core$async17990");
});

cljs.core.async.__GT_t_cljs$core$async17990 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17990(p__$1,ch__$1,meta17991){
return (new cljs.core.async.t_cljs$core$async17990(p__$1,ch__$1,meta17991));
});

}

return (new cljs.core.async.t_cljs$core$async17990(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17994 = arguments.length;
switch (G__17994) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16518__auto___18034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___18034,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___18034,out){
return (function (state_18015){
var state_val_18016 = (state_18015[(1)]);
if((state_val_18016 === (7))){
var inst_18011 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
var statearr_18017_18035 = state_18015__$1;
(statearr_18017_18035[(2)] = inst_18011);

(statearr_18017_18035[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (1))){
var state_18015__$1 = state_18015;
var statearr_18018_18036 = state_18015__$1;
(statearr_18018_18036[(2)] = null);

(statearr_18018_18036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (4))){
var inst_17997 = (state_18015[(7)]);
var inst_17997__$1 = (state_18015[(2)]);
var inst_17998 = (inst_17997__$1 == null);
var state_18015__$1 = (function (){var statearr_18019 = state_18015;
(statearr_18019[(7)] = inst_17997__$1);

return statearr_18019;
})();
if(cljs.core.truth_(inst_17998)){
var statearr_18020_18037 = state_18015__$1;
(statearr_18020_18037[(1)] = (5));

} else {
var statearr_18021_18038 = state_18015__$1;
(statearr_18021_18038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (6))){
var inst_17997 = (state_18015[(7)]);
var inst_18002 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17997) : p.call(null,inst_17997));
var state_18015__$1 = state_18015;
if(cljs.core.truth_(inst_18002)){
var statearr_18022_18039 = state_18015__$1;
(statearr_18022_18039[(1)] = (8));

} else {
var statearr_18023_18040 = state_18015__$1;
(statearr_18023_18040[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (3))){
var inst_18013 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18015__$1,inst_18013);
} else {
if((state_val_18016 === (2))){
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18015__$1,(4),ch);
} else {
if((state_val_18016 === (11))){
var inst_18005 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
var statearr_18024_18041 = state_18015__$1;
(statearr_18024_18041[(2)] = inst_18005);

(statearr_18024_18041[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (9))){
var state_18015__$1 = state_18015;
var statearr_18025_18042 = state_18015__$1;
(statearr_18025_18042[(2)] = null);

(statearr_18025_18042[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (5))){
var inst_18000 = cljs.core.async.close_BANG_(out);
var state_18015__$1 = state_18015;
var statearr_18026_18043 = state_18015__$1;
(statearr_18026_18043[(2)] = inst_18000);

(statearr_18026_18043[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (10))){
var inst_18008 = (state_18015[(2)]);
var state_18015__$1 = (function (){var statearr_18027 = state_18015;
(statearr_18027[(8)] = inst_18008);

return statearr_18027;
})();
var statearr_18028_18044 = state_18015__$1;
(statearr_18028_18044[(2)] = null);

(statearr_18028_18044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18016 === (8))){
var inst_17997 = (state_18015[(7)]);
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18015__$1,(11),out,inst_17997);
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
});})(c__16518__auto___18034,out))
;
return ((function (switch__16418__auto__,c__16518__auto___18034,out){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_18029 = [null,null,null,null,null,null,null,null,null];
(statearr_18029[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_18029[(1)] = (1));

return statearr_18029;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_18015){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18015);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18030){if((e18030 instanceof Object)){
var ex__16422__auto__ = e18030;
var statearr_18031_18045 = state_18015;
(statearr_18031_18045[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18015);

return cljs.core.cst$kw$recur;
} else {
throw e18030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18046 = state_18015;
state_18015 = G__18046;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_18015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_18015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___18034,out))
})();
var state__16520__auto__ = (function (){var statearr_18032 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18032[(6)] = c__16518__auto___18034);

return statearr_18032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___18034,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18048 = arguments.length;
switch (G__18048) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto__){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto__){
return (function (state_18111){
var state_val_18112 = (state_18111[(1)]);
if((state_val_18112 === (7))){
var inst_18107 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18113_18151 = state_18111__$1;
(statearr_18113_18151[(2)] = inst_18107);

(statearr_18113_18151[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (20))){
var inst_18077 = (state_18111[(7)]);
var inst_18088 = (state_18111[(2)]);
var inst_18089 = cljs.core.next(inst_18077);
var inst_18063 = inst_18089;
var inst_18064 = null;
var inst_18065 = (0);
var inst_18066 = (0);
var state_18111__$1 = (function (){var statearr_18114 = state_18111;
(statearr_18114[(8)] = inst_18063);

(statearr_18114[(9)] = inst_18066);

(statearr_18114[(10)] = inst_18065);

(statearr_18114[(11)] = inst_18088);

(statearr_18114[(12)] = inst_18064);

return statearr_18114;
})();
var statearr_18115_18152 = state_18111__$1;
(statearr_18115_18152[(2)] = null);

(statearr_18115_18152[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (1))){
var state_18111__$1 = state_18111;
var statearr_18116_18153 = state_18111__$1;
(statearr_18116_18153[(2)] = null);

(statearr_18116_18153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (4))){
var inst_18052 = (state_18111[(13)]);
var inst_18052__$1 = (state_18111[(2)]);
var inst_18053 = (inst_18052__$1 == null);
var state_18111__$1 = (function (){var statearr_18117 = state_18111;
(statearr_18117[(13)] = inst_18052__$1);

return statearr_18117;
})();
if(cljs.core.truth_(inst_18053)){
var statearr_18118_18154 = state_18111__$1;
(statearr_18118_18154[(1)] = (5));

} else {
var statearr_18119_18155 = state_18111__$1;
(statearr_18119_18155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (15))){
var state_18111__$1 = state_18111;
var statearr_18123_18156 = state_18111__$1;
(statearr_18123_18156[(2)] = null);

(statearr_18123_18156[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (21))){
var state_18111__$1 = state_18111;
var statearr_18124_18157 = state_18111__$1;
(statearr_18124_18157[(2)] = null);

(statearr_18124_18157[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (13))){
var inst_18063 = (state_18111[(8)]);
var inst_18066 = (state_18111[(9)]);
var inst_18065 = (state_18111[(10)]);
var inst_18064 = (state_18111[(12)]);
var inst_18073 = (state_18111[(2)]);
var inst_18074 = (inst_18066 + (1));
var tmp18120 = inst_18063;
var tmp18121 = inst_18065;
var tmp18122 = inst_18064;
var inst_18063__$1 = tmp18120;
var inst_18064__$1 = tmp18122;
var inst_18065__$1 = tmp18121;
var inst_18066__$1 = inst_18074;
var state_18111__$1 = (function (){var statearr_18125 = state_18111;
(statearr_18125[(8)] = inst_18063__$1);

(statearr_18125[(9)] = inst_18066__$1);

(statearr_18125[(10)] = inst_18065__$1);

(statearr_18125[(14)] = inst_18073);

(statearr_18125[(12)] = inst_18064__$1);

return statearr_18125;
})();
var statearr_18126_18158 = state_18111__$1;
(statearr_18126_18158[(2)] = null);

(statearr_18126_18158[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (22))){
var state_18111__$1 = state_18111;
var statearr_18127_18159 = state_18111__$1;
(statearr_18127_18159[(2)] = null);

(statearr_18127_18159[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (6))){
var inst_18052 = (state_18111[(13)]);
var inst_18061 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18052) : f.call(null,inst_18052));
var inst_18062 = cljs.core.seq(inst_18061);
var inst_18063 = inst_18062;
var inst_18064 = null;
var inst_18065 = (0);
var inst_18066 = (0);
var state_18111__$1 = (function (){var statearr_18128 = state_18111;
(statearr_18128[(8)] = inst_18063);

(statearr_18128[(9)] = inst_18066);

(statearr_18128[(10)] = inst_18065);

(statearr_18128[(12)] = inst_18064);

return statearr_18128;
})();
var statearr_18129_18160 = state_18111__$1;
(statearr_18129_18160[(2)] = null);

(statearr_18129_18160[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (17))){
var inst_18077 = (state_18111[(7)]);
var inst_18081 = cljs.core.chunk_first(inst_18077);
var inst_18082 = cljs.core.chunk_rest(inst_18077);
var inst_18083 = cljs.core.count(inst_18081);
var inst_18063 = inst_18082;
var inst_18064 = inst_18081;
var inst_18065 = inst_18083;
var inst_18066 = (0);
var state_18111__$1 = (function (){var statearr_18130 = state_18111;
(statearr_18130[(8)] = inst_18063);

(statearr_18130[(9)] = inst_18066);

(statearr_18130[(10)] = inst_18065);

(statearr_18130[(12)] = inst_18064);

return statearr_18130;
})();
var statearr_18131_18161 = state_18111__$1;
(statearr_18131_18161[(2)] = null);

(statearr_18131_18161[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (3))){
var inst_18109 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18111__$1,inst_18109);
} else {
if((state_val_18112 === (12))){
var inst_18097 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18132_18162 = state_18111__$1;
(statearr_18132_18162[(2)] = inst_18097);

(statearr_18132_18162[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (2))){
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18111__$1,(4),in$);
} else {
if((state_val_18112 === (23))){
var inst_18105 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18133_18163 = state_18111__$1;
(statearr_18133_18163[(2)] = inst_18105);

(statearr_18133_18163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (19))){
var inst_18092 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18134_18164 = state_18111__$1;
(statearr_18134_18164[(2)] = inst_18092);

(statearr_18134_18164[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (11))){
var inst_18063 = (state_18111[(8)]);
var inst_18077 = (state_18111[(7)]);
var inst_18077__$1 = cljs.core.seq(inst_18063);
var state_18111__$1 = (function (){var statearr_18135 = state_18111;
(statearr_18135[(7)] = inst_18077__$1);

return statearr_18135;
})();
if(inst_18077__$1){
var statearr_18136_18165 = state_18111__$1;
(statearr_18136_18165[(1)] = (14));

} else {
var statearr_18137_18166 = state_18111__$1;
(statearr_18137_18166[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (9))){
var inst_18099 = (state_18111[(2)]);
var inst_18100 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18111__$1 = (function (){var statearr_18138 = state_18111;
(statearr_18138[(15)] = inst_18099);

return statearr_18138;
})();
if(cljs.core.truth_(inst_18100)){
var statearr_18139_18167 = state_18111__$1;
(statearr_18139_18167[(1)] = (21));

} else {
var statearr_18140_18168 = state_18111__$1;
(statearr_18140_18168[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (5))){
var inst_18055 = cljs.core.async.close_BANG_(out);
var state_18111__$1 = state_18111;
var statearr_18141_18169 = state_18111__$1;
(statearr_18141_18169[(2)] = inst_18055);

(statearr_18141_18169[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (14))){
var inst_18077 = (state_18111[(7)]);
var inst_18079 = cljs.core.chunked_seq_QMARK_(inst_18077);
var state_18111__$1 = state_18111;
if(inst_18079){
var statearr_18142_18170 = state_18111__$1;
(statearr_18142_18170[(1)] = (17));

} else {
var statearr_18143_18171 = state_18111__$1;
(statearr_18143_18171[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (16))){
var inst_18095 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18144_18172 = state_18111__$1;
(statearr_18144_18172[(2)] = inst_18095);

(statearr_18144_18172[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18112 === (10))){
var inst_18066 = (state_18111[(9)]);
var inst_18064 = (state_18111[(12)]);
var inst_18071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18064,inst_18066);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18111__$1,(13),out,inst_18071);
} else {
if((state_val_18112 === (18))){
var inst_18077 = (state_18111[(7)]);
var inst_18086 = cljs.core.first(inst_18077);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18111__$1,(20),out,inst_18086);
} else {
if((state_val_18112 === (8))){
var inst_18066 = (state_18111[(9)]);
var inst_18065 = (state_18111[(10)]);
var inst_18068 = (inst_18066 < inst_18065);
var inst_18069 = inst_18068;
var state_18111__$1 = state_18111;
if(cljs.core.truth_(inst_18069)){
var statearr_18145_18173 = state_18111__$1;
(statearr_18145_18173[(1)] = (10));

} else {
var statearr_18146_18174 = state_18111__$1;
(statearr_18146_18174[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16518__auto__))
;
return ((function (switch__16418__auto__,c__16518__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16419__auto____0 = (function (){
var statearr_18147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18147[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16419__auto__);

(statearr_18147[(1)] = (1));

return statearr_18147;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16419__auto____1 = (function (state_18111){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18111);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18148){if((e18148 instanceof Object)){
var ex__16422__auto__ = e18148;
var statearr_18149_18175 = state_18111;
(statearr_18149_18175[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18111);

return cljs.core.cst$kw$recur;
} else {
throw e18148;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18176 = state_18111;
state_18111 = G__18176;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16419__auto__ = function(state_18111){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16419__auto____1.call(this,state_18111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto__))
})();
var state__16520__auto__ = (function (){var statearr_18150 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18150[(6)] = c__16518__auto__);

return statearr_18150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto__))
);

return c__16518__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18178 = arguments.length;
switch (G__18178) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18181 = arguments.length;
switch (G__18181) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18184 = arguments.length;
switch (G__18184) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16518__auto___18231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___18231,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___18231,out){
return (function (state_18208){
var state_val_18209 = (state_18208[(1)]);
if((state_val_18209 === (7))){
var inst_18203 = (state_18208[(2)]);
var state_18208__$1 = state_18208;
var statearr_18210_18232 = state_18208__$1;
(statearr_18210_18232[(2)] = inst_18203);

(statearr_18210_18232[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (1))){
var inst_18185 = null;
var state_18208__$1 = (function (){var statearr_18211 = state_18208;
(statearr_18211[(7)] = inst_18185);

return statearr_18211;
})();
var statearr_18212_18233 = state_18208__$1;
(statearr_18212_18233[(2)] = null);

(statearr_18212_18233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (4))){
var inst_18188 = (state_18208[(8)]);
var inst_18188__$1 = (state_18208[(2)]);
var inst_18189 = (inst_18188__$1 == null);
var inst_18190 = cljs.core.not(inst_18189);
var state_18208__$1 = (function (){var statearr_18213 = state_18208;
(statearr_18213[(8)] = inst_18188__$1);

return statearr_18213;
})();
if(inst_18190){
var statearr_18214_18234 = state_18208__$1;
(statearr_18214_18234[(1)] = (5));

} else {
var statearr_18215_18235 = state_18208__$1;
(statearr_18215_18235[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (6))){
var state_18208__$1 = state_18208;
var statearr_18216_18236 = state_18208__$1;
(statearr_18216_18236[(2)] = null);

(statearr_18216_18236[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (3))){
var inst_18205 = (state_18208[(2)]);
var inst_18206 = cljs.core.async.close_BANG_(out);
var state_18208__$1 = (function (){var statearr_18217 = state_18208;
(statearr_18217[(9)] = inst_18205);

return statearr_18217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18208__$1,inst_18206);
} else {
if((state_val_18209 === (2))){
var state_18208__$1 = state_18208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18208__$1,(4),ch);
} else {
if((state_val_18209 === (11))){
var inst_18188 = (state_18208[(8)]);
var inst_18197 = (state_18208[(2)]);
var inst_18185 = inst_18188;
var state_18208__$1 = (function (){var statearr_18218 = state_18208;
(statearr_18218[(10)] = inst_18197);

(statearr_18218[(7)] = inst_18185);

return statearr_18218;
})();
var statearr_18219_18237 = state_18208__$1;
(statearr_18219_18237[(2)] = null);

(statearr_18219_18237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (9))){
var inst_18188 = (state_18208[(8)]);
var state_18208__$1 = state_18208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18208__$1,(11),out,inst_18188);
} else {
if((state_val_18209 === (5))){
var inst_18185 = (state_18208[(7)]);
var inst_18188 = (state_18208[(8)]);
var inst_18192 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18188,inst_18185);
var state_18208__$1 = state_18208;
if(inst_18192){
var statearr_18221_18238 = state_18208__$1;
(statearr_18221_18238[(1)] = (8));

} else {
var statearr_18222_18239 = state_18208__$1;
(statearr_18222_18239[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (10))){
var inst_18200 = (state_18208[(2)]);
var state_18208__$1 = state_18208;
var statearr_18223_18240 = state_18208__$1;
(statearr_18223_18240[(2)] = inst_18200);

(statearr_18223_18240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18209 === (8))){
var inst_18185 = (state_18208[(7)]);
var tmp18220 = inst_18185;
var inst_18185__$1 = tmp18220;
var state_18208__$1 = (function (){var statearr_18224 = state_18208;
(statearr_18224[(7)] = inst_18185__$1);

return statearr_18224;
})();
var statearr_18225_18241 = state_18208__$1;
(statearr_18225_18241[(2)] = null);

(statearr_18225_18241[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___18231,out))
;
return ((function (switch__16418__auto__,c__16518__auto___18231,out){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_18226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18226[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_18226[(1)] = (1));

return statearr_18226;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_18208){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18208);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18227){if((e18227 instanceof Object)){
var ex__16422__auto__ = e18227;
var statearr_18228_18242 = state_18208;
(statearr_18228_18242[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18208);

return cljs.core.cst$kw$recur;
} else {
throw e18227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18243 = state_18208;
state_18208 = G__18243;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_18208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_18208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___18231,out))
})();
var state__16520__auto__ = (function (){var statearr_18229 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18229[(6)] = c__16518__auto___18231);

return statearr_18229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___18231,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18245 = arguments.length;
switch (G__18245) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16518__auto___18311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___18311,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___18311,out){
return (function (state_18283){
var state_val_18284 = (state_18283[(1)]);
if((state_val_18284 === (7))){
var inst_18279 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18285_18312 = state_18283__$1;
(statearr_18285_18312[(2)] = inst_18279);

(statearr_18285_18312[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (1))){
var inst_18246 = (new Array(n));
var inst_18247 = inst_18246;
var inst_18248 = (0);
var state_18283__$1 = (function (){var statearr_18286 = state_18283;
(statearr_18286[(7)] = inst_18248);

(statearr_18286[(8)] = inst_18247);

return statearr_18286;
})();
var statearr_18287_18313 = state_18283__$1;
(statearr_18287_18313[(2)] = null);

(statearr_18287_18313[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (4))){
var inst_18251 = (state_18283[(9)]);
var inst_18251__$1 = (state_18283[(2)]);
var inst_18252 = (inst_18251__$1 == null);
var inst_18253 = cljs.core.not(inst_18252);
var state_18283__$1 = (function (){var statearr_18288 = state_18283;
(statearr_18288[(9)] = inst_18251__$1);

return statearr_18288;
})();
if(inst_18253){
var statearr_18289_18314 = state_18283__$1;
(statearr_18289_18314[(1)] = (5));

} else {
var statearr_18290_18315 = state_18283__$1;
(statearr_18290_18315[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (15))){
var inst_18273 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18291_18316 = state_18283__$1;
(statearr_18291_18316[(2)] = inst_18273);

(statearr_18291_18316[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (13))){
var state_18283__$1 = state_18283;
var statearr_18292_18317 = state_18283__$1;
(statearr_18292_18317[(2)] = null);

(statearr_18292_18317[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (6))){
var inst_18248 = (state_18283[(7)]);
var inst_18269 = (inst_18248 > (0));
var state_18283__$1 = state_18283;
if(cljs.core.truth_(inst_18269)){
var statearr_18293_18318 = state_18283__$1;
(statearr_18293_18318[(1)] = (12));

} else {
var statearr_18294_18319 = state_18283__$1;
(statearr_18294_18319[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (3))){
var inst_18281 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18283__$1,inst_18281);
} else {
if((state_val_18284 === (12))){
var inst_18247 = (state_18283[(8)]);
var inst_18271 = cljs.core.vec(inst_18247);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18283__$1,(15),out,inst_18271);
} else {
if((state_val_18284 === (2))){
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18283__$1,(4),ch);
} else {
if((state_val_18284 === (11))){
var inst_18263 = (state_18283[(2)]);
var inst_18264 = (new Array(n));
var inst_18247 = inst_18264;
var inst_18248 = (0);
var state_18283__$1 = (function (){var statearr_18295 = state_18283;
(statearr_18295[(7)] = inst_18248);

(statearr_18295[(10)] = inst_18263);

(statearr_18295[(8)] = inst_18247);

return statearr_18295;
})();
var statearr_18296_18320 = state_18283__$1;
(statearr_18296_18320[(2)] = null);

(statearr_18296_18320[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (9))){
var inst_18247 = (state_18283[(8)]);
var inst_18261 = cljs.core.vec(inst_18247);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18283__$1,(11),out,inst_18261);
} else {
if((state_val_18284 === (5))){
var inst_18248 = (state_18283[(7)]);
var inst_18247 = (state_18283[(8)]);
var inst_18251 = (state_18283[(9)]);
var inst_18256 = (state_18283[(11)]);
var inst_18255 = (inst_18247[inst_18248] = inst_18251);
var inst_18256__$1 = (inst_18248 + (1));
var inst_18257 = (inst_18256__$1 < n);
var state_18283__$1 = (function (){var statearr_18297 = state_18283;
(statearr_18297[(12)] = inst_18255);

(statearr_18297[(11)] = inst_18256__$1);

return statearr_18297;
})();
if(cljs.core.truth_(inst_18257)){
var statearr_18298_18321 = state_18283__$1;
(statearr_18298_18321[(1)] = (8));

} else {
var statearr_18299_18322 = state_18283__$1;
(statearr_18299_18322[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (14))){
var inst_18276 = (state_18283[(2)]);
var inst_18277 = cljs.core.async.close_BANG_(out);
var state_18283__$1 = (function (){var statearr_18301 = state_18283;
(statearr_18301[(13)] = inst_18276);

return statearr_18301;
})();
var statearr_18302_18323 = state_18283__$1;
(statearr_18302_18323[(2)] = inst_18277);

(statearr_18302_18323[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (10))){
var inst_18267 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18303_18324 = state_18283__$1;
(statearr_18303_18324[(2)] = inst_18267);

(statearr_18303_18324[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (8))){
var inst_18247 = (state_18283[(8)]);
var inst_18256 = (state_18283[(11)]);
var tmp18300 = inst_18247;
var inst_18247__$1 = tmp18300;
var inst_18248 = inst_18256;
var state_18283__$1 = (function (){var statearr_18304 = state_18283;
(statearr_18304[(7)] = inst_18248);

(statearr_18304[(8)] = inst_18247__$1);

return statearr_18304;
})();
var statearr_18305_18325 = state_18283__$1;
(statearr_18305_18325[(2)] = null);

(statearr_18305_18325[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___18311,out))
;
return ((function (switch__16418__auto__,c__16518__auto___18311,out){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_18306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18306[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_18306[(1)] = (1));

return statearr_18306;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_18283){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18283);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18307){if((e18307 instanceof Object)){
var ex__16422__auto__ = e18307;
var statearr_18308_18326 = state_18283;
(statearr_18308_18326[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18283);

return cljs.core.cst$kw$recur;
} else {
throw e18307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18327 = state_18283;
state_18283 = G__18327;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_18283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_18283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___18311,out))
})();
var state__16520__auto__ = (function (){var statearr_18309 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18309[(6)] = c__16518__auto___18311);

return statearr_18309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___18311,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18329 = arguments.length;
switch (G__18329) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16518__auto___18399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___18399,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___18399,out){
return (function (state_18371){
var state_val_18372 = (state_18371[(1)]);
if((state_val_18372 === (7))){
var inst_18367 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
var statearr_18373_18400 = state_18371__$1;
(statearr_18373_18400[(2)] = inst_18367);

(statearr_18373_18400[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (1))){
var inst_18330 = [];
var inst_18331 = inst_18330;
var inst_18332 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18371__$1 = (function (){var statearr_18374 = state_18371;
(statearr_18374[(7)] = inst_18331);

(statearr_18374[(8)] = inst_18332);

return statearr_18374;
})();
var statearr_18375_18401 = state_18371__$1;
(statearr_18375_18401[(2)] = null);

(statearr_18375_18401[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (4))){
var inst_18335 = (state_18371[(9)]);
var inst_18335__$1 = (state_18371[(2)]);
var inst_18336 = (inst_18335__$1 == null);
var inst_18337 = cljs.core.not(inst_18336);
var state_18371__$1 = (function (){var statearr_18376 = state_18371;
(statearr_18376[(9)] = inst_18335__$1);

return statearr_18376;
})();
if(inst_18337){
var statearr_18377_18402 = state_18371__$1;
(statearr_18377_18402[(1)] = (5));

} else {
var statearr_18378_18403 = state_18371__$1;
(statearr_18378_18403[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (15))){
var inst_18361 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
var statearr_18379_18404 = state_18371__$1;
(statearr_18379_18404[(2)] = inst_18361);

(statearr_18379_18404[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (13))){
var state_18371__$1 = state_18371;
var statearr_18380_18405 = state_18371__$1;
(statearr_18380_18405[(2)] = null);

(statearr_18380_18405[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (6))){
var inst_18331 = (state_18371[(7)]);
var inst_18356 = inst_18331.length;
var inst_18357 = (inst_18356 > (0));
var state_18371__$1 = state_18371;
if(cljs.core.truth_(inst_18357)){
var statearr_18381_18406 = state_18371__$1;
(statearr_18381_18406[(1)] = (12));

} else {
var statearr_18382_18407 = state_18371__$1;
(statearr_18382_18407[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (3))){
var inst_18369 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18371__$1,inst_18369);
} else {
if((state_val_18372 === (12))){
var inst_18331 = (state_18371[(7)]);
var inst_18359 = cljs.core.vec(inst_18331);
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18371__$1,(15),out,inst_18359);
} else {
if((state_val_18372 === (2))){
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18371__$1,(4),ch);
} else {
if((state_val_18372 === (11))){
var inst_18335 = (state_18371[(9)]);
var inst_18339 = (state_18371[(10)]);
var inst_18349 = (state_18371[(2)]);
var inst_18350 = [];
var inst_18351 = inst_18350.push(inst_18335);
var inst_18331 = inst_18350;
var inst_18332 = inst_18339;
var state_18371__$1 = (function (){var statearr_18383 = state_18371;
(statearr_18383[(7)] = inst_18331);

(statearr_18383[(11)] = inst_18351);

(statearr_18383[(8)] = inst_18332);

(statearr_18383[(12)] = inst_18349);

return statearr_18383;
})();
var statearr_18384_18408 = state_18371__$1;
(statearr_18384_18408[(2)] = null);

(statearr_18384_18408[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (9))){
var inst_18331 = (state_18371[(7)]);
var inst_18347 = cljs.core.vec(inst_18331);
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18371__$1,(11),out,inst_18347);
} else {
if((state_val_18372 === (5))){
var inst_18335 = (state_18371[(9)]);
var inst_18339 = (state_18371[(10)]);
var inst_18332 = (state_18371[(8)]);
var inst_18339__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18335) : f.call(null,inst_18335));
var inst_18340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18339__$1,inst_18332);
var inst_18341 = cljs.core.keyword_identical_QMARK_(inst_18332,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18342 = (inst_18340) || (inst_18341);
var state_18371__$1 = (function (){var statearr_18385 = state_18371;
(statearr_18385[(10)] = inst_18339__$1);

return statearr_18385;
})();
if(cljs.core.truth_(inst_18342)){
var statearr_18386_18409 = state_18371__$1;
(statearr_18386_18409[(1)] = (8));

} else {
var statearr_18387_18410 = state_18371__$1;
(statearr_18387_18410[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (14))){
var inst_18364 = (state_18371[(2)]);
var inst_18365 = cljs.core.async.close_BANG_(out);
var state_18371__$1 = (function (){var statearr_18389 = state_18371;
(statearr_18389[(13)] = inst_18364);

return statearr_18389;
})();
var statearr_18390_18411 = state_18371__$1;
(statearr_18390_18411[(2)] = inst_18365);

(statearr_18390_18411[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (10))){
var inst_18354 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
var statearr_18391_18412 = state_18371__$1;
(statearr_18391_18412[(2)] = inst_18354);

(statearr_18391_18412[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18372 === (8))){
var inst_18335 = (state_18371[(9)]);
var inst_18331 = (state_18371[(7)]);
var inst_18339 = (state_18371[(10)]);
var inst_18344 = inst_18331.push(inst_18335);
var tmp18388 = inst_18331;
var inst_18331__$1 = tmp18388;
var inst_18332 = inst_18339;
var state_18371__$1 = (function (){var statearr_18392 = state_18371;
(statearr_18392[(14)] = inst_18344);

(statearr_18392[(7)] = inst_18331__$1);

(statearr_18392[(8)] = inst_18332);

return statearr_18392;
})();
var statearr_18393_18413 = state_18371__$1;
(statearr_18393_18413[(2)] = null);

(statearr_18393_18413[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___18399,out))
;
return ((function (switch__16418__auto__,c__16518__auto___18399,out){
return (function() {
var cljs$core$async$state_machine__16419__auto__ = null;
var cljs$core$async$state_machine__16419__auto____0 = (function (){
var statearr_18394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18394[(0)] = cljs$core$async$state_machine__16419__auto__);

(statearr_18394[(1)] = (1));

return statearr_18394;
});
var cljs$core$async$state_machine__16419__auto____1 = (function (state_18371){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18371);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18395){if((e18395 instanceof Object)){
var ex__16422__auto__ = e18395;
var statearr_18396_18414 = state_18371;
(statearr_18396_18414[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18371);

return cljs.core.cst$kw$recur;
} else {
throw e18395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18415 = state_18371;
state_18371 = G__18415;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
cljs$core$async$state_machine__16419__auto__ = function(state_18371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16419__auto____1.call(this,state_18371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16419__auto____0;
cljs$core$async$state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16419__auto____1;
return cljs$core$async$state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___18399,out))
})();
var state__16520__auto__ = (function (){var statearr_18397 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18397[(6)] = c__16518__auto___18399);

return statearr_18397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___18399,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

