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
var G__43730 = arguments.length;
switch (G__43730) {
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
if(typeof cljs.core.async.t_cljs$core$async43731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43731 = (function (f,blockable,meta43732){
this.f = f;
this.blockable = blockable;
this.meta43732 = meta43732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43733,meta43732__$1){
var self__ = this;
var _43733__$1 = this;
return (new cljs.core.async.t_cljs$core$async43731(self__.f,self__.blockable,meta43732__$1));
});

cljs.core.async.t_cljs$core$async43731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43733){
var self__ = this;
var _43733__$1 = this;
return self__.meta43732;
});

cljs.core.async.t_cljs$core$async43731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43732","meta43732",-1750150519,null)], null);
});

cljs.core.async.t_cljs$core$async43731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43731";

cljs.core.async.t_cljs$core$async43731.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43731");
});

cljs.core.async.__GT_t_cljs$core$async43731 = (function cljs$core$async$__GT_t_cljs$core$async43731(f__$1,blockable__$1,meta43732){
return (new cljs.core.async.t_cljs$core$async43731(f__$1,blockable__$1,meta43732));
});

}

return (new cljs.core.async.t_cljs$core$async43731(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43737 = arguments.length;
switch (G__43737) {
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
var G__43740 = arguments.length;
switch (G__43740) {
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
var G__43743 = arguments.length;
switch (G__43743) {
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
var val_43745 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43745);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43745,ret){
return (function (){
return fn1.call(null,val_43745);
});})(val_43745,ret))
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
var G__43747 = arguments.length;
switch (G__43747) {
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
var n__28140__auto___43749 = n;
var x_43750 = (0);
while(true){
if((x_43750 < n__28140__auto___43749)){
(a[x_43750] = (0));

var G__43751 = (x_43750 + (1));
x_43750 = G__43751;
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

var G__43752 = (i + (1));
i = G__43752;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43753 = (function (flag,meta43754){
this.flag = flag;
this.meta43754 = meta43754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43755,meta43754__$1){
var self__ = this;
var _43755__$1 = this;
return (new cljs.core.async.t_cljs$core$async43753(self__.flag,meta43754__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43755){
var self__ = this;
var _43755__$1 = this;
return self__.meta43754;
});})(flag))
;

cljs.core.async.t_cljs$core$async43753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43753.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43754","meta43754",1788655327,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43753";

cljs.core.async.t_cljs$core$async43753.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43753");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43753 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43753(flag__$1,meta43754){
return (new cljs.core.async.t_cljs$core$async43753(flag__$1,meta43754));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43753(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43756 = (function (flag,cb,meta43757){
this.flag = flag;
this.cb = cb;
this.meta43757 = meta43757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43758,meta43757__$1){
var self__ = this;
var _43758__$1 = this;
return (new cljs.core.async.t_cljs$core$async43756(self__.flag,self__.cb,meta43757__$1));
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43758){
var self__ = this;
var _43758__$1 = this;
return self__.meta43757;
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43757","meta43757",-391568722,null)], null);
});

cljs.core.async.t_cljs$core$async43756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43756";

cljs.core.async.t_cljs$core$async43756.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43756");
});

cljs.core.async.__GT_t_cljs$core$async43756 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43756(flag__$1,cb__$1,meta43757){
return (new cljs.core.async.t_cljs$core$async43756(flag__$1,cb__$1,meta43757));
});

}

return (new cljs.core.async.t_cljs$core$async43756(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43759_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43759_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43760_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43760_SHARP_,port], null));
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
var G__43761 = (i + (1));
i = G__43761;
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
var len__28364__auto___43767 = arguments.length;
var i__28365__auto___43768 = (0);
while(true){
if((i__28365__auto___43768 < len__28364__auto___43767)){
args__28371__auto__.push((arguments[i__28365__auto___43768]));

var G__43769 = (i__28365__auto___43768 + (1));
i__28365__auto___43768 = G__43769;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43764){
var map__43765 = p__43764;
var map__43765__$1 = ((((!((map__43765 == null)))?((((map__43765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43765):map__43765);
var opts = map__43765__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43762){
var G__43763 = cljs.core.first.call(null,seq43762);
var seq43762__$1 = cljs.core.next.call(null,seq43762);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43763,seq43762__$1);
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
var G__43771 = arguments.length;
switch (G__43771) {
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
var c__30952__auto___43817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___43817){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___43817){
return (function (state_43795){
var state_val_43796 = (state_43795[(1)]);
if((state_val_43796 === (7))){
var inst_43791 = (state_43795[(2)]);
var state_43795__$1 = state_43795;
var statearr_43797_43818 = state_43795__$1;
(statearr_43797_43818[(2)] = inst_43791);

(statearr_43797_43818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (1))){
var state_43795__$1 = state_43795;
var statearr_43798_43819 = state_43795__$1;
(statearr_43798_43819[(2)] = null);

(statearr_43798_43819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (4))){
var inst_43774 = (state_43795[(7)]);
var inst_43774__$1 = (state_43795[(2)]);
var inst_43775 = (inst_43774__$1 == null);
var state_43795__$1 = (function (){var statearr_43799 = state_43795;
(statearr_43799[(7)] = inst_43774__$1);

return statearr_43799;
})();
if(cljs.core.truth_(inst_43775)){
var statearr_43800_43820 = state_43795__$1;
(statearr_43800_43820[(1)] = (5));

} else {
var statearr_43801_43821 = state_43795__$1;
(statearr_43801_43821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (13))){
var state_43795__$1 = state_43795;
var statearr_43802_43822 = state_43795__$1;
(statearr_43802_43822[(2)] = null);

(statearr_43802_43822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (6))){
var inst_43774 = (state_43795[(7)]);
var state_43795__$1 = state_43795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43795__$1,(11),to,inst_43774);
} else {
if((state_val_43796 === (3))){
var inst_43793 = (state_43795[(2)]);
var state_43795__$1 = state_43795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43795__$1,inst_43793);
} else {
if((state_val_43796 === (12))){
var state_43795__$1 = state_43795;
var statearr_43803_43823 = state_43795__$1;
(statearr_43803_43823[(2)] = null);

(statearr_43803_43823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (2))){
var state_43795__$1 = state_43795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43795__$1,(4),from);
} else {
if((state_val_43796 === (11))){
var inst_43784 = (state_43795[(2)]);
var state_43795__$1 = state_43795;
if(cljs.core.truth_(inst_43784)){
var statearr_43804_43824 = state_43795__$1;
(statearr_43804_43824[(1)] = (12));

} else {
var statearr_43805_43825 = state_43795__$1;
(statearr_43805_43825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (9))){
var state_43795__$1 = state_43795;
var statearr_43806_43826 = state_43795__$1;
(statearr_43806_43826[(2)] = null);

(statearr_43806_43826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (5))){
var state_43795__$1 = state_43795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43807_43827 = state_43795__$1;
(statearr_43807_43827[(1)] = (8));

} else {
var statearr_43808_43828 = state_43795__$1;
(statearr_43808_43828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (14))){
var inst_43789 = (state_43795[(2)]);
var state_43795__$1 = state_43795;
var statearr_43809_43829 = state_43795__$1;
(statearr_43809_43829[(2)] = inst_43789);

(statearr_43809_43829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (10))){
var inst_43781 = (state_43795[(2)]);
var state_43795__$1 = state_43795;
var statearr_43810_43830 = state_43795__$1;
(statearr_43810_43830[(2)] = inst_43781);

(statearr_43810_43830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43796 === (8))){
var inst_43778 = cljs.core.async.close_BANG_.call(null,to);
var state_43795__$1 = state_43795;
var statearr_43811_43831 = state_43795__$1;
(statearr_43811_43831[(2)] = inst_43778);

(statearr_43811_43831[(1)] = (10));


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
});})(c__30952__auto___43817))
;
return ((function (switch__30864__auto__,c__30952__auto___43817){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_43812 = [null,null,null,null,null,null,null,null];
(statearr_43812[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_43812[(1)] = (1));

return statearr_43812;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_43795){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43813){if((e43813 instanceof Object)){
var ex__30868__auto__ = e43813;
var statearr_43814_43832 = state_43795;
(statearr_43814_43832[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43833 = state_43795;
state_43795 = G__43833;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_43795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_43795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___43817))
})();
var state__30954__auto__ = (function (){var statearr_43815 = f__30953__auto__.call(null);
(statearr_43815[(6)] = c__30952__auto___43817);

return statearr_43815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___43817))
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
return (function (p__43834){
var vec__43835 = p__43834;
var v = cljs.core.nth.call(null,vec__43835,(0),null);
var p = cljs.core.nth.call(null,vec__43835,(1),null);
var job = vec__43835;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30952__auto___44006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44006,res,vec__43835,v,p,job,jobs,results){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44006,res,vec__43835,v,p,job,jobs,results){
return (function (state_43842){
var state_val_43843 = (state_43842[(1)]);
if((state_val_43843 === (1))){
var state_43842__$1 = state_43842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43842__$1,(2),res,v);
} else {
if((state_val_43843 === (2))){
var inst_43839 = (state_43842[(2)]);
var inst_43840 = cljs.core.async.close_BANG_.call(null,res);
var state_43842__$1 = (function (){var statearr_43844 = state_43842;
(statearr_43844[(7)] = inst_43839);

return statearr_43844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43842__$1,inst_43840);
} else {
return null;
}
}
});})(c__30952__auto___44006,res,vec__43835,v,p,job,jobs,results))
;
return ((function (switch__30864__auto__,c__30952__auto___44006,res,vec__43835,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43845 = [null,null,null,null,null,null,null,null];
(statearr_43845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43845[(1)] = (1));

return statearr_43845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43842){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43846){if((e43846 instanceof Object)){
var ex__30868__auto__ = e43846;
var statearr_43847_44007 = state_43842;
(statearr_43847_44007[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44008 = state_43842;
state_43842 = G__44008;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44006,res,vec__43835,v,p,job,jobs,results))
})();
var state__30954__auto__ = (function (){var statearr_43848 = f__30953__auto__.call(null);
(statearr_43848[(6)] = c__30952__auto___44006);

return statearr_43848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44006,res,vec__43835,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43849){
var vec__43850 = p__43849;
var v = cljs.core.nth.call(null,vec__43850,(0),null);
var p = cljs.core.nth.call(null,vec__43850,(1),null);
var job = vec__43850;
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
var n__28140__auto___44009 = n;
var __44010 = (0);
while(true){
if((__44010 < n__28140__auto___44009)){
var G__43853_44011 = type;
var G__43853_44012__$1 = (((G__43853_44011 instanceof cljs.core.Keyword))?G__43853_44011.fqn:null);
switch (G__43853_44012__$1) {
case "compute":
var c__30952__auto___44014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44010,c__30952__auto___44014,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (__44010,c__30952__auto___44014,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async){
return (function (state_43866){
var state_val_43867 = (state_43866[(1)]);
if((state_val_43867 === (1))){
var state_43866__$1 = state_43866;
var statearr_43868_44015 = state_43866__$1;
(statearr_43868_44015[(2)] = null);

(statearr_43868_44015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (2))){
var state_43866__$1 = state_43866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43866__$1,(4),jobs);
} else {
if((state_val_43867 === (3))){
var inst_43864 = (state_43866[(2)]);
var state_43866__$1 = state_43866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43866__$1,inst_43864);
} else {
if((state_val_43867 === (4))){
var inst_43856 = (state_43866[(2)]);
var inst_43857 = process.call(null,inst_43856);
var state_43866__$1 = state_43866;
if(cljs.core.truth_(inst_43857)){
var statearr_43869_44016 = state_43866__$1;
(statearr_43869_44016[(1)] = (5));

} else {
var statearr_43870_44017 = state_43866__$1;
(statearr_43870_44017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (5))){
var state_43866__$1 = state_43866;
var statearr_43871_44018 = state_43866__$1;
(statearr_43871_44018[(2)] = null);

(statearr_43871_44018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (6))){
var state_43866__$1 = state_43866;
var statearr_43872_44019 = state_43866__$1;
(statearr_43872_44019[(2)] = null);

(statearr_43872_44019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43867 === (7))){
var inst_43862 = (state_43866[(2)]);
var state_43866__$1 = state_43866;
var statearr_43873_44020 = state_43866__$1;
(statearr_43873_44020[(2)] = inst_43862);

(statearr_43873_44020[(1)] = (3));


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
});})(__44010,c__30952__auto___44014,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async))
;
return ((function (__44010,switch__30864__auto__,c__30952__auto___44014,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43874 = [null,null,null,null,null,null,null];
(statearr_43874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43874[(1)] = (1));

return statearr_43874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43866){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43875){if((e43875 instanceof Object)){
var ex__30868__auto__ = e43875;
var statearr_43876_44021 = state_43866;
(statearr_43876_44021[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44022 = state_43866;
state_43866 = G__44022;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(__44010,switch__30864__auto__,c__30952__auto___44014,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_43877 = f__30953__auto__.call(null);
(statearr_43877[(6)] = c__30952__auto___44014);

return statearr_43877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(__44010,c__30952__auto___44014,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async))
);


break;
case "async":
var c__30952__auto___44023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44010,c__30952__auto___44023,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (__44010,c__30952__auto___44023,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async){
return (function (state_43890){
var state_val_43891 = (state_43890[(1)]);
if((state_val_43891 === (1))){
var state_43890__$1 = state_43890;
var statearr_43892_44024 = state_43890__$1;
(statearr_43892_44024[(2)] = null);

(statearr_43892_44024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (2))){
var state_43890__$1 = state_43890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43890__$1,(4),jobs);
} else {
if((state_val_43891 === (3))){
var inst_43888 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43890__$1,inst_43888);
} else {
if((state_val_43891 === (4))){
var inst_43880 = (state_43890[(2)]);
var inst_43881 = async.call(null,inst_43880);
var state_43890__$1 = state_43890;
if(cljs.core.truth_(inst_43881)){
var statearr_43893_44025 = state_43890__$1;
(statearr_43893_44025[(1)] = (5));

} else {
var statearr_43894_44026 = state_43890__$1;
(statearr_43894_44026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (5))){
var state_43890__$1 = state_43890;
var statearr_43895_44027 = state_43890__$1;
(statearr_43895_44027[(2)] = null);

(statearr_43895_44027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (6))){
var state_43890__$1 = state_43890;
var statearr_43896_44028 = state_43890__$1;
(statearr_43896_44028[(2)] = null);

(statearr_43896_44028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43891 === (7))){
var inst_43886 = (state_43890[(2)]);
var state_43890__$1 = state_43890;
var statearr_43897_44029 = state_43890__$1;
(statearr_43897_44029[(2)] = inst_43886);

(statearr_43897_44029[(1)] = (3));


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
});})(__44010,c__30952__auto___44023,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async))
;
return ((function (__44010,switch__30864__auto__,c__30952__auto___44023,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43898 = [null,null,null,null,null,null,null];
(statearr_43898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43898[(1)] = (1));

return statearr_43898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43890){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43899){if((e43899 instanceof Object)){
var ex__30868__auto__ = e43899;
var statearr_43900_44030 = state_43890;
(statearr_43900_44030[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44031 = state_43890;
state_43890 = G__44031;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(__44010,switch__30864__auto__,c__30952__auto___44023,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_43901 = f__30953__auto__.call(null);
(statearr_43901[(6)] = c__30952__auto___44023);

return statearr_43901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(__44010,c__30952__auto___44023,G__43853_44011,G__43853_44012__$1,n__28140__auto___44009,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43853_44012__$1)].join('')));

}

var G__44032 = (__44010 + (1));
__44010 = G__44032;
continue;
} else {
}
break;
}

var c__30952__auto___44033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44033,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44033,jobs,results,process,async){
return (function (state_43923){
var state_val_43924 = (state_43923[(1)]);
if((state_val_43924 === (1))){
var state_43923__$1 = state_43923;
var statearr_43925_44034 = state_43923__$1;
(statearr_43925_44034[(2)] = null);

(statearr_43925_44034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (2))){
var state_43923__$1 = state_43923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43923__$1,(4),from);
} else {
if((state_val_43924 === (3))){
var inst_43921 = (state_43923[(2)]);
var state_43923__$1 = state_43923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43923__$1,inst_43921);
} else {
if((state_val_43924 === (4))){
var inst_43904 = (state_43923[(7)]);
var inst_43904__$1 = (state_43923[(2)]);
var inst_43905 = (inst_43904__$1 == null);
var state_43923__$1 = (function (){var statearr_43926 = state_43923;
(statearr_43926[(7)] = inst_43904__$1);

return statearr_43926;
})();
if(cljs.core.truth_(inst_43905)){
var statearr_43927_44035 = state_43923__$1;
(statearr_43927_44035[(1)] = (5));

} else {
var statearr_43928_44036 = state_43923__$1;
(statearr_43928_44036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (5))){
var inst_43907 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43923__$1 = state_43923;
var statearr_43929_44037 = state_43923__$1;
(statearr_43929_44037[(2)] = inst_43907);

(statearr_43929_44037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (6))){
var inst_43904 = (state_43923[(7)]);
var inst_43909 = (state_43923[(8)]);
var inst_43909__$1 = cljs.core.async.chan.call(null,(1));
var inst_43910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43911 = [inst_43904,inst_43909__$1];
var inst_43912 = (new cljs.core.PersistentVector(null,2,(5),inst_43910,inst_43911,null));
var state_43923__$1 = (function (){var statearr_43930 = state_43923;
(statearr_43930[(8)] = inst_43909__$1);

return statearr_43930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43923__$1,(8),jobs,inst_43912);
} else {
if((state_val_43924 === (7))){
var inst_43919 = (state_43923[(2)]);
var state_43923__$1 = state_43923;
var statearr_43931_44038 = state_43923__$1;
(statearr_43931_44038[(2)] = inst_43919);

(statearr_43931_44038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (8))){
var inst_43909 = (state_43923[(8)]);
var inst_43914 = (state_43923[(2)]);
var state_43923__$1 = (function (){var statearr_43932 = state_43923;
(statearr_43932[(9)] = inst_43914);

return statearr_43932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43923__$1,(9),results,inst_43909);
} else {
if((state_val_43924 === (9))){
var inst_43916 = (state_43923[(2)]);
var state_43923__$1 = (function (){var statearr_43933 = state_43923;
(statearr_43933[(10)] = inst_43916);

return statearr_43933;
})();
var statearr_43934_44039 = state_43923__$1;
(statearr_43934_44039[(2)] = null);

(statearr_43934_44039[(1)] = (2));


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
});})(c__30952__auto___44033,jobs,results,process,async))
;
return ((function (switch__30864__auto__,c__30952__auto___44033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43935[(1)] = (1));

return statearr_43935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43923){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43936){if((e43936 instanceof Object)){
var ex__30868__auto__ = e43936;
var statearr_43937_44040 = state_43923;
(statearr_43937_44040[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44041 = state_43923;
state_43923 = G__44041;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44033,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_43938 = f__30953__auto__.call(null);
(statearr_43938[(6)] = c__30952__auto___44033);

return statearr_43938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44033,jobs,results,process,async))
);


var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,jobs,results,process,async){
return (function (state_43976){
var state_val_43977 = (state_43976[(1)]);
if((state_val_43977 === (7))){
var inst_43972 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_43978_44042 = state_43976__$1;
(statearr_43978_44042[(2)] = inst_43972);

(statearr_43978_44042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (20))){
var state_43976__$1 = state_43976;
var statearr_43979_44043 = state_43976__$1;
(statearr_43979_44043[(2)] = null);

(statearr_43979_44043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (1))){
var state_43976__$1 = state_43976;
var statearr_43980_44044 = state_43976__$1;
(statearr_43980_44044[(2)] = null);

(statearr_43980_44044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (4))){
var inst_43941 = (state_43976[(7)]);
var inst_43941__$1 = (state_43976[(2)]);
var inst_43942 = (inst_43941__$1 == null);
var state_43976__$1 = (function (){var statearr_43981 = state_43976;
(statearr_43981[(7)] = inst_43941__$1);

return statearr_43981;
})();
if(cljs.core.truth_(inst_43942)){
var statearr_43982_44045 = state_43976__$1;
(statearr_43982_44045[(1)] = (5));

} else {
var statearr_43983_44046 = state_43976__$1;
(statearr_43983_44046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (15))){
var inst_43954 = (state_43976[(8)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43976__$1,(18),to,inst_43954);
} else {
if((state_val_43977 === (21))){
var inst_43967 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_43984_44047 = state_43976__$1;
(statearr_43984_44047[(2)] = inst_43967);

(statearr_43984_44047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (13))){
var inst_43969 = (state_43976[(2)]);
var state_43976__$1 = (function (){var statearr_43985 = state_43976;
(statearr_43985[(9)] = inst_43969);

return statearr_43985;
})();
var statearr_43986_44048 = state_43976__$1;
(statearr_43986_44048[(2)] = null);

(statearr_43986_44048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (6))){
var inst_43941 = (state_43976[(7)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43976__$1,(11),inst_43941);
} else {
if((state_val_43977 === (17))){
var inst_43962 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
if(cljs.core.truth_(inst_43962)){
var statearr_43987_44049 = state_43976__$1;
(statearr_43987_44049[(1)] = (19));

} else {
var statearr_43988_44050 = state_43976__$1;
(statearr_43988_44050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (3))){
var inst_43974 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43976__$1,inst_43974);
} else {
if((state_val_43977 === (12))){
var inst_43951 = (state_43976[(10)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43976__$1,(14),inst_43951);
} else {
if((state_val_43977 === (2))){
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43976__$1,(4),results);
} else {
if((state_val_43977 === (19))){
var state_43976__$1 = state_43976;
var statearr_43989_44051 = state_43976__$1;
(statearr_43989_44051[(2)] = null);

(statearr_43989_44051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (11))){
var inst_43951 = (state_43976[(2)]);
var state_43976__$1 = (function (){var statearr_43990 = state_43976;
(statearr_43990[(10)] = inst_43951);

return statearr_43990;
})();
var statearr_43991_44052 = state_43976__$1;
(statearr_43991_44052[(2)] = null);

(statearr_43991_44052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (9))){
var state_43976__$1 = state_43976;
var statearr_43992_44053 = state_43976__$1;
(statearr_43992_44053[(2)] = null);

(statearr_43992_44053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (5))){
var state_43976__$1 = state_43976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43993_44054 = state_43976__$1;
(statearr_43993_44054[(1)] = (8));

} else {
var statearr_43994_44055 = state_43976__$1;
(statearr_43994_44055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (14))){
var inst_43954 = (state_43976[(8)]);
var inst_43956 = (state_43976[(11)]);
var inst_43954__$1 = (state_43976[(2)]);
var inst_43955 = (inst_43954__$1 == null);
var inst_43956__$1 = cljs.core.not.call(null,inst_43955);
var state_43976__$1 = (function (){var statearr_43995 = state_43976;
(statearr_43995[(8)] = inst_43954__$1);

(statearr_43995[(11)] = inst_43956__$1);

return statearr_43995;
})();
if(inst_43956__$1){
var statearr_43996_44056 = state_43976__$1;
(statearr_43996_44056[(1)] = (15));

} else {
var statearr_43997_44057 = state_43976__$1;
(statearr_43997_44057[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (16))){
var inst_43956 = (state_43976[(11)]);
var state_43976__$1 = state_43976;
var statearr_43998_44058 = state_43976__$1;
(statearr_43998_44058[(2)] = inst_43956);

(statearr_43998_44058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (10))){
var inst_43948 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_43999_44059 = state_43976__$1;
(statearr_43999_44059[(2)] = inst_43948);

(statearr_43999_44059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (18))){
var inst_43959 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_44000_44060 = state_43976__$1;
(statearr_44000_44060[(2)] = inst_43959);

(statearr_44000_44060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (8))){
var inst_43945 = cljs.core.async.close_BANG_.call(null,to);
var state_43976__$1 = state_43976;
var statearr_44001_44061 = state_43976__$1;
(statearr_44001_44061[(2)] = inst_43945);

(statearr_44001_44061[(1)] = (10));


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
});})(c__30952__auto__,jobs,results,process,async))
;
return ((function (switch__30864__auto__,c__30952__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_44002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_44002[(1)] = (1));

return statearr_44002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43976){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44003){if((e44003 instanceof Object)){
var ex__30868__auto__ = e44003;
var statearr_44004_44062 = state_43976;
(statearr_44004_44062[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44063 = state_43976;
state_43976 = G__44063;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_44005 = f__30953__auto__.call(null);
(statearr_44005[(6)] = c__30952__auto__);

return statearr_44005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,jobs,results,process,async))
);

return c__30952__auto__;
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
var G__44065 = arguments.length;
switch (G__44065) {
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
var G__44068 = arguments.length;
switch (G__44068) {
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
var G__44071 = arguments.length;
switch (G__44071) {
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
var c__30952__auto___44120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44120,tc,fc){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44120,tc,fc){
return (function (state_44097){
var state_val_44098 = (state_44097[(1)]);
if((state_val_44098 === (7))){
var inst_44093 = (state_44097[(2)]);
var state_44097__$1 = state_44097;
var statearr_44099_44121 = state_44097__$1;
(statearr_44099_44121[(2)] = inst_44093);

(statearr_44099_44121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (1))){
var state_44097__$1 = state_44097;
var statearr_44100_44122 = state_44097__$1;
(statearr_44100_44122[(2)] = null);

(statearr_44100_44122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (4))){
var inst_44074 = (state_44097[(7)]);
var inst_44074__$1 = (state_44097[(2)]);
var inst_44075 = (inst_44074__$1 == null);
var state_44097__$1 = (function (){var statearr_44101 = state_44097;
(statearr_44101[(7)] = inst_44074__$1);

return statearr_44101;
})();
if(cljs.core.truth_(inst_44075)){
var statearr_44102_44123 = state_44097__$1;
(statearr_44102_44123[(1)] = (5));

} else {
var statearr_44103_44124 = state_44097__$1;
(statearr_44103_44124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (13))){
var state_44097__$1 = state_44097;
var statearr_44104_44125 = state_44097__$1;
(statearr_44104_44125[(2)] = null);

(statearr_44104_44125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (6))){
var inst_44074 = (state_44097[(7)]);
var inst_44080 = p.call(null,inst_44074);
var state_44097__$1 = state_44097;
if(cljs.core.truth_(inst_44080)){
var statearr_44105_44126 = state_44097__$1;
(statearr_44105_44126[(1)] = (9));

} else {
var statearr_44106_44127 = state_44097__$1;
(statearr_44106_44127[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (3))){
var inst_44095 = (state_44097[(2)]);
var state_44097__$1 = state_44097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44097__$1,inst_44095);
} else {
if((state_val_44098 === (12))){
var state_44097__$1 = state_44097;
var statearr_44107_44128 = state_44097__$1;
(statearr_44107_44128[(2)] = null);

(statearr_44107_44128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (2))){
var state_44097__$1 = state_44097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44097__$1,(4),ch);
} else {
if((state_val_44098 === (11))){
var inst_44074 = (state_44097[(7)]);
var inst_44084 = (state_44097[(2)]);
var state_44097__$1 = state_44097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44097__$1,(8),inst_44084,inst_44074);
} else {
if((state_val_44098 === (9))){
var state_44097__$1 = state_44097;
var statearr_44108_44129 = state_44097__$1;
(statearr_44108_44129[(2)] = tc);

(statearr_44108_44129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (5))){
var inst_44077 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44078 = cljs.core.async.close_BANG_.call(null,fc);
var state_44097__$1 = (function (){var statearr_44109 = state_44097;
(statearr_44109[(8)] = inst_44077);

return statearr_44109;
})();
var statearr_44110_44130 = state_44097__$1;
(statearr_44110_44130[(2)] = inst_44078);

(statearr_44110_44130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (14))){
var inst_44091 = (state_44097[(2)]);
var state_44097__$1 = state_44097;
var statearr_44111_44131 = state_44097__$1;
(statearr_44111_44131[(2)] = inst_44091);

(statearr_44111_44131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (10))){
var state_44097__$1 = state_44097;
var statearr_44112_44132 = state_44097__$1;
(statearr_44112_44132[(2)] = fc);

(statearr_44112_44132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44098 === (8))){
var inst_44086 = (state_44097[(2)]);
var state_44097__$1 = state_44097;
if(cljs.core.truth_(inst_44086)){
var statearr_44113_44133 = state_44097__$1;
(statearr_44113_44133[(1)] = (12));

} else {
var statearr_44114_44134 = state_44097__$1;
(statearr_44114_44134[(1)] = (13));

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
});})(c__30952__auto___44120,tc,fc))
;
return ((function (switch__30864__auto__,c__30952__auto___44120,tc,fc){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_44115 = [null,null,null,null,null,null,null,null,null];
(statearr_44115[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44115[(1)] = (1));

return statearr_44115;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44097){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44116){if((e44116 instanceof Object)){
var ex__30868__auto__ = e44116;
var statearr_44117_44135 = state_44097;
(statearr_44117_44135[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44136 = state_44097;
state_44097 = G__44136;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44120,tc,fc))
})();
var state__30954__auto__ = (function (){var statearr_44118 = f__30953__auto__.call(null);
(statearr_44118[(6)] = c__30952__auto___44120);

return statearr_44118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44120,tc,fc))
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__){
return (function (state_44157){
var state_val_44158 = (state_44157[(1)]);
if((state_val_44158 === (7))){
var inst_44153 = (state_44157[(2)]);
var state_44157__$1 = state_44157;
var statearr_44159_44177 = state_44157__$1;
(statearr_44159_44177[(2)] = inst_44153);

(statearr_44159_44177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (1))){
var inst_44137 = init;
var state_44157__$1 = (function (){var statearr_44160 = state_44157;
(statearr_44160[(7)] = inst_44137);

return statearr_44160;
})();
var statearr_44161_44178 = state_44157__$1;
(statearr_44161_44178[(2)] = null);

(statearr_44161_44178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (4))){
var inst_44140 = (state_44157[(8)]);
var inst_44140__$1 = (state_44157[(2)]);
var inst_44141 = (inst_44140__$1 == null);
var state_44157__$1 = (function (){var statearr_44162 = state_44157;
(statearr_44162[(8)] = inst_44140__$1);

return statearr_44162;
})();
if(cljs.core.truth_(inst_44141)){
var statearr_44163_44179 = state_44157__$1;
(statearr_44163_44179[(1)] = (5));

} else {
var statearr_44164_44180 = state_44157__$1;
(statearr_44164_44180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (6))){
var inst_44137 = (state_44157[(7)]);
var inst_44144 = (state_44157[(9)]);
var inst_44140 = (state_44157[(8)]);
var inst_44144__$1 = f.call(null,inst_44137,inst_44140);
var inst_44145 = cljs.core.reduced_QMARK_.call(null,inst_44144__$1);
var state_44157__$1 = (function (){var statearr_44165 = state_44157;
(statearr_44165[(9)] = inst_44144__$1);

return statearr_44165;
})();
if(inst_44145){
var statearr_44166_44181 = state_44157__$1;
(statearr_44166_44181[(1)] = (8));

} else {
var statearr_44167_44182 = state_44157__$1;
(statearr_44167_44182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (3))){
var inst_44155 = (state_44157[(2)]);
var state_44157__$1 = state_44157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44157__$1,inst_44155);
} else {
if((state_val_44158 === (2))){
var state_44157__$1 = state_44157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44157__$1,(4),ch);
} else {
if((state_val_44158 === (9))){
var inst_44144 = (state_44157[(9)]);
var inst_44137 = inst_44144;
var state_44157__$1 = (function (){var statearr_44168 = state_44157;
(statearr_44168[(7)] = inst_44137);

return statearr_44168;
})();
var statearr_44169_44183 = state_44157__$1;
(statearr_44169_44183[(2)] = null);

(statearr_44169_44183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (5))){
var inst_44137 = (state_44157[(7)]);
var state_44157__$1 = state_44157;
var statearr_44170_44184 = state_44157__$1;
(statearr_44170_44184[(2)] = inst_44137);

(statearr_44170_44184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (10))){
var inst_44151 = (state_44157[(2)]);
var state_44157__$1 = state_44157;
var statearr_44171_44185 = state_44157__$1;
(statearr_44171_44185[(2)] = inst_44151);

(statearr_44171_44185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44158 === (8))){
var inst_44144 = (state_44157[(9)]);
var inst_44147 = cljs.core.deref.call(null,inst_44144);
var state_44157__$1 = state_44157;
var statearr_44172_44186 = state_44157__$1;
(statearr_44172_44186[(2)] = inst_44147);

(statearr_44172_44186[(1)] = (10));


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
});})(c__30952__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30865__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30865__auto____0 = (function (){
var statearr_44173 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44173[(0)] = cljs$core$async$reduce_$_state_machine__30865__auto__);

(statearr_44173[(1)] = (1));

return statearr_44173;
});
var cljs$core$async$reduce_$_state_machine__30865__auto____1 = (function (state_44157){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44174){if((e44174 instanceof Object)){
var ex__30868__auto__ = e44174;
var statearr_44175_44187 = state_44157;
(statearr_44175_44187[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44188 = state_44157;
state_44157 = G__44188;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30865__auto__ = function(state_44157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30865__auto____1.call(this,state_44157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30865__auto____0;
cljs$core$async$reduce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30865__auto____1;
return cljs$core$async$reduce_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_44176 = f__30953__auto__.call(null);
(statearr_44176[(6)] = c__30952__auto__);

return statearr_44176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__))
);

return c__30952__auto__;
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
var G__44190 = arguments.length;
switch (G__44190) {
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__){
return (function (state_44215){
var state_val_44216 = (state_44215[(1)]);
if((state_val_44216 === (7))){
var inst_44197 = (state_44215[(2)]);
var state_44215__$1 = state_44215;
var statearr_44217_44238 = state_44215__$1;
(statearr_44217_44238[(2)] = inst_44197);

(statearr_44217_44238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (1))){
var inst_44191 = cljs.core.seq.call(null,coll);
var inst_44192 = inst_44191;
var state_44215__$1 = (function (){var statearr_44218 = state_44215;
(statearr_44218[(7)] = inst_44192);

return statearr_44218;
})();
var statearr_44219_44239 = state_44215__$1;
(statearr_44219_44239[(2)] = null);

(statearr_44219_44239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (4))){
var inst_44192 = (state_44215[(7)]);
var inst_44195 = cljs.core.first.call(null,inst_44192);
var state_44215__$1 = state_44215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44215__$1,(7),ch,inst_44195);
} else {
if((state_val_44216 === (13))){
var inst_44209 = (state_44215[(2)]);
var state_44215__$1 = state_44215;
var statearr_44220_44240 = state_44215__$1;
(statearr_44220_44240[(2)] = inst_44209);

(statearr_44220_44240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (6))){
var inst_44200 = (state_44215[(2)]);
var state_44215__$1 = state_44215;
if(cljs.core.truth_(inst_44200)){
var statearr_44221_44241 = state_44215__$1;
(statearr_44221_44241[(1)] = (8));

} else {
var statearr_44222_44242 = state_44215__$1;
(statearr_44222_44242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (3))){
var inst_44213 = (state_44215[(2)]);
var state_44215__$1 = state_44215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44215__$1,inst_44213);
} else {
if((state_val_44216 === (12))){
var state_44215__$1 = state_44215;
var statearr_44223_44243 = state_44215__$1;
(statearr_44223_44243[(2)] = null);

(statearr_44223_44243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (2))){
var inst_44192 = (state_44215[(7)]);
var state_44215__$1 = state_44215;
if(cljs.core.truth_(inst_44192)){
var statearr_44224_44244 = state_44215__$1;
(statearr_44224_44244[(1)] = (4));

} else {
var statearr_44225_44245 = state_44215__$1;
(statearr_44225_44245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (11))){
var inst_44206 = cljs.core.async.close_BANG_.call(null,ch);
var state_44215__$1 = state_44215;
var statearr_44226_44246 = state_44215__$1;
(statearr_44226_44246[(2)] = inst_44206);

(statearr_44226_44246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (9))){
var state_44215__$1 = state_44215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44227_44247 = state_44215__$1;
(statearr_44227_44247[(1)] = (11));

} else {
var statearr_44228_44248 = state_44215__$1;
(statearr_44228_44248[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (5))){
var inst_44192 = (state_44215[(7)]);
var state_44215__$1 = state_44215;
var statearr_44229_44249 = state_44215__$1;
(statearr_44229_44249[(2)] = inst_44192);

(statearr_44229_44249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (10))){
var inst_44211 = (state_44215[(2)]);
var state_44215__$1 = state_44215;
var statearr_44230_44250 = state_44215__$1;
(statearr_44230_44250[(2)] = inst_44211);

(statearr_44230_44250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44216 === (8))){
var inst_44192 = (state_44215[(7)]);
var inst_44202 = cljs.core.next.call(null,inst_44192);
var inst_44192__$1 = inst_44202;
var state_44215__$1 = (function (){var statearr_44231 = state_44215;
(statearr_44231[(7)] = inst_44192__$1);

return statearr_44231;
})();
var statearr_44232_44251 = state_44215__$1;
(statearr_44232_44251[(2)] = null);

(statearr_44232_44251[(1)] = (2));


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
});})(c__30952__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_44233 = [null,null,null,null,null,null,null,null];
(statearr_44233[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44233[(1)] = (1));

return statearr_44233;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44215){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44234){if((e44234 instanceof Object)){
var ex__30868__auto__ = e44234;
var statearr_44235_44252 = state_44215;
(statearr_44235_44252[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44253 = state_44215;
state_44215 = G__44253;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_44236 = f__30953__auto__.call(null);
(statearr_44236[(6)] = c__30952__auto__);

return statearr_44236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__))
);

return c__30952__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async44254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44254 = (function (ch,cs,meta44255){
this.ch = ch;
this.cs = cs;
this.meta44255 = meta44255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44256,meta44255__$1){
var self__ = this;
var _44256__$1 = this;
return (new cljs.core.async.t_cljs$core$async44254(self__.ch,self__.cs,meta44255__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44256){
var self__ = this;
var _44256__$1 = this;
return self__.meta44255;
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44255","meta44255",-887562799,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44254";

cljs.core.async.t_cljs$core$async44254.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44254");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44254 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44254(ch__$1,cs__$1,meta44255){
return (new cljs.core.async.t_cljs$core$async44254(ch__$1,cs__$1,meta44255));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44254(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30952__auto___44476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44476,cs,m,dchan,dctr,done){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44476,cs,m,dchan,dctr,done){
return (function (state_44391){
var state_val_44392 = (state_44391[(1)]);
if((state_val_44392 === (7))){
var inst_44387 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44393_44477 = state_44391__$1;
(statearr_44393_44477[(2)] = inst_44387);

(statearr_44393_44477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (20))){
var inst_44290 = (state_44391[(7)]);
var inst_44302 = cljs.core.first.call(null,inst_44290);
var inst_44303 = cljs.core.nth.call(null,inst_44302,(0),null);
var inst_44304 = cljs.core.nth.call(null,inst_44302,(1),null);
var state_44391__$1 = (function (){var statearr_44394 = state_44391;
(statearr_44394[(8)] = inst_44303);

return statearr_44394;
})();
if(cljs.core.truth_(inst_44304)){
var statearr_44395_44478 = state_44391__$1;
(statearr_44395_44478[(1)] = (22));

} else {
var statearr_44396_44479 = state_44391__$1;
(statearr_44396_44479[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (27))){
var inst_44332 = (state_44391[(9)]);
var inst_44334 = (state_44391[(10)]);
var inst_44259 = (state_44391[(11)]);
var inst_44339 = (state_44391[(12)]);
var inst_44339__$1 = cljs.core._nth.call(null,inst_44332,inst_44334);
var inst_44340 = cljs.core.async.put_BANG_.call(null,inst_44339__$1,inst_44259,done);
var state_44391__$1 = (function (){var statearr_44397 = state_44391;
(statearr_44397[(12)] = inst_44339__$1);

return statearr_44397;
})();
if(cljs.core.truth_(inst_44340)){
var statearr_44398_44480 = state_44391__$1;
(statearr_44398_44480[(1)] = (30));

} else {
var statearr_44399_44481 = state_44391__$1;
(statearr_44399_44481[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (1))){
var state_44391__$1 = state_44391;
var statearr_44400_44482 = state_44391__$1;
(statearr_44400_44482[(2)] = null);

(statearr_44400_44482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (24))){
var inst_44290 = (state_44391[(7)]);
var inst_44309 = (state_44391[(2)]);
var inst_44310 = cljs.core.next.call(null,inst_44290);
var inst_44268 = inst_44310;
var inst_44269 = null;
var inst_44270 = (0);
var inst_44271 = (0);
var state_44391__$1 = (function (){var statearr_44401 = state_44391;
(statearr_44401[(13)] = inst_44271);

(statearr_44401[(14)] = inst_44269);

(statearr_44401[(15)] = inst_44268);

(statearr_44401[(16)] = inst_44309);

(statearr_44401[(17)] = inst_44270);

return statearr_44401;
})();
var statearr_44402_44483 = state_44391__$1;
(statearr_44402_44483[(2)] = null);

(statearr_44402_44483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (39))){
var state_44391__$1 = state_44391;
var statearr_44406_44484 = state_44391__$1;
(statearr_44406_44484[(2)] = null);

(statearr_44406_44484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (4))){
var inst_44259 = (state_44391[(11)]);
var inst_44259__$1 = (state_44391[(2)]);
var inst_44260 = (inst_44259__$1 == null);
var state_44391__$1 = (function (){var statearr_44407 = state_44391;
(statearr_44407[(11)] = inst_44259__$1);

return statearr_44407;
})();
if(cljs.core.truth_(inst_44260)){
var statearr_44408_44485 = state_44391__$1;
(statearr_44408_44485[(1)] = (5));

} else {
var statearr_44409_44486 = state_44391__$1;
(statearr_44409_44486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (15))){
var inst_44271 = (state_44391[(13)]);
var inst_44269 = (state_44391[(14)]);
var inst_44268 = (state_44391[(15)]);
var inst_44270 = (state_44391[(17)]);
var inst_44286 = (state_44391[(2)]);
var inst_44287 = (inst_44271 + (1));
var tmp44403 = inst_44269;
var tmp44404 = inst_44268;
var tmp44405 = inst_44270;
var inst_44268__$1 = tmp44404;
var inst_44269__$1 = tmp44403;
var inst_44270__$1 = tmp44405;
var inst_44271__$1 = inst_44287;
var state_44391__$1 = (function (){var statearr_44410 = state_44391;
(statearr_44410[(13)] = inst_44271__$1);

(statearr_44410[(18)] = inst_44286);

(statearr_44410[(14)] = inst_44269__$1);

(statearr_44410[(15)] = inst_44268__$1);

(statearr_44410[(17)] = inst_44270__$1);

return statearr_44410;
})();
var statearr_44411_44487 = state_44391__$1;
(statearr_44411_44487[(2)] = null);

(statearr_44411_44487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (21))){
var inst_44313 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44415_44488 = state_44391__$1;
(statearr_44415_44488[(2)] = inst_44313);

(statearr_44415_44488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (31))){
var inst_44339 = (state_44391[(12)]);
var inst_44343 = done.call(null,null);
var inst_44344 = cljs.core.async.untap_STAR_.call(null,m,inst_44339);
var state_44391__$1 = (function (){var statearr_44416 = state_44391;
(statearr_44416[(19)] = inst_44343);

return statearr_44416;
})();
var statearr_44417_44489 = state_44391__$1;
(statearr_44417_44489[(2)] = inst_44344);

(statearr_44417_44489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (32))){
var inst_44332 = (state_44391[(9)]);
var inst_44334 = (state_44391[(10)]);
var inst_44331 = (state_44391[(20)]);
var inst_44333 = (state_44391[(21)]);
var inst_44346 = (state_44391[(2)]);
var inst_44347 = (inst_44334 + (1));
var tmp44412 = inst_44332;
var tmp44413 = inst_44331;
var tmp44414 = inst_44333;
var inst_44331__$1 = tmp44413;
var inst_44332__$1 = tmp44412;
var inst_44333__$1 = tmp44414;
var inst_44334__$1 = inst_44347;
var state_44391__$1 = (function (){var statearr_44418 = state_44391;
(statearr_44418[(9)] = inst_44332__$1);

(statearr_44418[(10)] = inst_44334__$1);

(statearr_44418[(20)] = inst_44331__$1);

(statearr_44418[(21)] = inst_44333__$1);

(statearr_44418[(22)] = inst_44346);

return statearr_44418;
})();
var statearr_44419_44490 = state_44391__$1;
(statearr_44419_44490[(2)] = null);

(statearr_44419_44490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (40))){
var inst_44359 = (state_44391[(23)]);
var inst_44363 = done.call(null,null);
var inst_44364 = cljs.core.async.untap_STAR_.call(null,m,inst_44359);
var state_44391__$1 = (function (){var statearr_44420 = state_44391;
(statearr_44420[(24)] = inst_44363);

return statearr_44420;
})();
var statearr_44421_44491 = state_44391__$1;
(statearr_44421_44491[(2)] = inst_44364);

(statearr_44421_44491[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (33))){
var inst_44350 = (state_44391[(25)]);
var inst_44352 = cljs.core.chunked_seq_QMARK_.call(null,inst_44350);
var state_44391__$1 = state_44391;
if(inst_44352){
var statearr_44422_44492 = state_44391__$1;
(statearr_44422_44492[(1)] = (36));

} else {
var statearr_44423_44493 = state_44391__$1;
(statearr_44423_44493[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (13))){
var inst_44280 = (state_44391[(26)]);
var inst_44283 = cljs.core.async.close_BANG_.call(null,inst_44280);
var state_44391__$1 = state_44391;
var statearr_44424_44494 = state_44391__$1;
(statearr_44424_44494[(2)] = inst_44283);

(statearr_44424_44494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (22))){
var inst_44303 = (state_44391[(8)]);
var inst_44306 = cljs.core.async.close_BANG_.call(null,inst_44303);
var state_44391__$1 = state_44391;
var statearr_44425_44495 = state_44391__$1;
(statearr_44425_44495[(2)] = inst_44306);

(statearr_44425_44495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (36))){
var inst_44350 = (state_44391[(25)]);
var inst_44354 = cljs.core.chunk_first.call(null,inst_44350);
var inst_44355 = cljs.core.chunk_rest.call(null,inst_44350);
var inst_44356 = cljs.core.count.call(null,inst_44354);
var inst_44331 = inst_44355;
var inst_44332 = inst_44354;
var inst_44333 = inst_44356;
var inst_44334 = (0);
var state_44391__$1 = (function (){var statearr_44426 = state_44391;
(statearr_44426[(9)] = inst_44332);

(statearr_44426[(10)] = inst_44334);

(statearr_44426[(20)] = inst_44331);

(statearr_44426[(21)] = inst_44333);

return statearr_44426;
})();
var statearr_44427_44496 = state_44391__$1;
(statearr_44427_44496[(2)] = null);

(statearr_44427_44496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (41))){
var inst_44350 = (state_44391[(25)]);
var inst_44366 = (state_44391[(2)]);
var inst_44367 = cljs.core.next.call(null,inst_44350);
var inst_44331 = inst_44367;
var inst_44332 = null;
var inst_44333 = (0);
var inst_44334 = (0);
var state_44391__$1 = (function (){var statearr_44428 = state_44391;
(statearr_44428[(9)] = inst_44332);

(statearr_44428[(10)] = inst_44334);

(statearr_44428[(27)] = inst_44366);

(statearr_44428[(20)] = inst_44331);

(statearr_44428[(21)] = inst_44333);

return statearr_44428;
})();
var statearr_44429_44497 = state_44391__$1;
(statearr_44429_44497[(2)] = null);

(statearr_44429_44497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (43))){
var state_44391__$1 = state_44391;
var statearr_44430_44498 = state_44391__$1;
(statearr_44430_44498[(2)] = null);

(statearr_44430_44498[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (29))){
var inst_44375 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44431_44499 = state_44391__$1;
(statearr_44431_44499[(2)] = inst_44375);

(statearr_44431_44499[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (44))){
var inst_44384 = (state_44391[(2)]);
var state_44391__$1 = (function (){var statearr_44432 = state_44391;
(statearr_44432[(28)] = inst_44384);

return statearr_44432;
})();
var statearr_44433_44500 = state_44391__$1;
(statearr_44433_44500[(2)] = null);

(statearr_44433_44500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (6))){
var inst_44323 = (state_44391[(29)]);
var inst_44322 = cljs.core.deref.call(null,cs);
var inst_44323__$1 = cljs.core.keys.call(null,inst_44322);
var inst_44324 = cljs.core.count.call(null,inst_44323__$1);
var inst_44325 = cljs.core.reset_BANG_.call(null,dctr,inst_44324);
var inst_44330 = cljs.core.seq.call(null,inst_44323__$1);
var inst_44331 = inst_44330;
var inst_44332 = null;
var inst_44333 = (0);
var inst_44334 = (0);
var state_44391__$1 = (function (){var statearr_44434 = state_44391;
(statearr_44434[(9)] = inst_44332);

(statearr_44434[(10)] = inst_44334);

(statearr_44434[(30)] = inst_44325);

(statearr_44434[(29)] = inst_44323__$1);

(statearr_44434[(20)] = inst_44331);

(statearr_44434[(21)] = inst_44333);

return statearr_44434;
})();
var statearr_44435_44501 = state_44391__$1;
(statearr_44435_44501[(2)] = null);

(statearr_44435_44501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (28))){
var inst_44331 = (state_44391[(20)]);
var inst_44350 = (state_44391[(25)]);
var inst_44350__$1 = cljs.core.seq.call(null,inst_44331);
var state_44391__$1 = (function (){var statearr_44436 = state_44391;
(statearr_44436[(25)] = inst_44350__$1);

return statearr_44436;
})();
if(inst_44350__$1){
var statearr_44437_44502 = state_44391__$1;
(statearr_44437_44502[(1)] = (33));

} else {
var statearr_44438_44503 = state_44391__$1;
(statearr_44438_44503[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (25))){
var inst_44334 = (state_44391[(10)]);
var inst_44333 = (state_44391[(21)]);
var inst_44336 = (inst_44334 < inst_44333);
var inst_44337 = inst_44336;
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44337)){
var statearr_44439_44504 = state_44391__$1;
(statearr_44439_44504[(1)] = (27));

} else {
var statearr_44440_44505 = state_44391__$1;
(statearr_44440_44505[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (34))){
var state_44391__$1 = state_44391;
var statearr_44441_44506 = state_44391__$1;
(statearr_44441_44506[(2)] = null);

(statearr_44441_44506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (17))){
var state_44391__$1 = state_44391;
var statearr_44442_44507 = state_44391__$1;
(statearr_44442_44507[(2)] = null);

(statearr_44442_44507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (3))){
var inst_44389 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44391__$1,inst_44389);
} else {
if((state_val_44392 === (12))){
var inst_44318 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44443_44508 = state_44391__$1;
(statearr_44443_44508[(2)] = inst_44318);

(statearr_44443_44508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (2))){
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(4),ch);
} else {
if((state_val_44392 === (23))){
var state_44391__$1 = state_44391;
var statearr_44444_44509 = state_44391__$1;
(statearr_44444_44509[(2)] = null);

(statearr_44444_44509[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (35))){
var inst_44373 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44445_44510 = state_44391__$1;
(statearr_44445_44510[(2)] = inst_44373);

(statearr_44445_44510[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (19))){
var inst_44290 = (state_44391[(7)]);
var inst_44294 = cljs.core.chunk_first.call(null,inst_44290);
var inst_44295 = cljs.core.chunk_rest.call(null,inst_44290);
var inst_44296 = cljs.core.count.call(null,inst_44294);
var inst_44268 = inst_44295;
var inst_44269 = inst_44294;
var inst_44270 = inst_44296;
var inst_44271 = (0);
var state_44391__$1 = (function (){var statearr_44446 = state_44391;
(statearr_44446[(13)] = inst_44271);

(statearr_44446[(14)] = inst_44269);

(statearr_44446[(15)] = inst_44268);

(statearr_44446[(17)] = inst_44270);

return statearr_44446;
})();
var statearr_44447_44511 = state_44391__$1;
(statearr_44447_44511[(2)] = null);

(statearr_44447_44511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (11))){
var inst_44268 = (state_44391[(15)]);
var inst_44290 = (state_44391[(7)]);
var inst_44290__$1 = cljs.core.seq.call(null,inst_44268);
var state_44391__$1 = (function (){var statearr_44448 = state_44391;
(statearr_44448[(7)] = inst_44290__$1);

return statearr_44448;
})();
if(inst_44290__$1){
var statearr_44449_44512 = state_44391__$1;
(statearr_44449_44512[(1)] = (16));

} else {
var statearr_44450_44513 = state_44391__$1;
(statearr_44450_44513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (9))){
var inst_44320 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44451_44514 = state_44391__$1;
(statearr_44451_44514[(2)] = inst_44320);

(statearr_44451_44514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (5))){
var inst_44266 = cljs.core.deref.call(null,cs);
var inst_44267 = cljs.core.seq.call(null,inst_44266);
var inst_44268 = inst_44267;
var inst_44269 = null;
var inst_44270 = (0);
var inst_44271 = (0);
var state_44391__$1 = (function (){var statearr_44452 = state_44391;
(statearr_44452[(13)] = inst_44271);

(statearr_44452[(14)] = inst_44269);

(statearr_44452[(15)] = inst_44268);

(statearr_44452[(17)] = inst_44270);

return statearr_44452;
})();
var statearr_44453_44515 = state_44391__$1;
(statearr_44453_44515[(2)] = null);

(statearr_44453_44515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (14))){
var state_44391__$1 = state_44391;
var statearr_44454_44516 = state_44391__$1;
(statearr_44454_44516[(2)] = null);

(statearr_44454_44516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (45))){
var inst_44381 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44455_44517 = state_44391__$1;
(statearr_44455_44517[(2)] = inst_44381);

(statearr_44455_44517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (26))){
var inst_44323 = (state_44391[(29)]);
var inst_44377 = (state_44391[(2)]);
var inst_44378 = cljs.core.seq.call(null,inst_44323);
var state_44391__$1 = (function (){var statearr_44456 = state_44391;
(statearr_44456[(31)] = inst_44377);

return statearr_44456;
})();
if(inst_44378){
var statearr_44457_44518 = state_44391__$1;
(statearr_44457_44518[(1)] = (42));

} else {
var statearr_44458_44519 = state_44391__$1;
(statearr_44458_44519[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (16))){
var inst_44290 = (state_44391[(7)]);
var inst_44292 = cljs.core.chunked_seq_QMARK_.call(null,inst_44290);
var state_44391__$1 = state_44391;
if(inst_44292){
var statearr_44459_44520 = state_44391__$1;
(statearr_44459_44520[(1)] = (19));

} else {
var statearr_44460_44521 = state_44391__$1;
(statearr_44460_44521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (38))){
var inst_44370 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44461_44522 = state_44391__$1;
(statearr_44461_44522[(2)] = inst_44370);

(statearr_44461_44522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (30))){
var state_44391__$1 = state_44391;
var statearr_44462_44523 = state_44391__$1;
(statearr_44462_44523[(2)] = null);

(statearr_44462_44523[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (10))){
var inst_44271 = (state_44391[(13)]);
var inst_44269 = (state_44391[(14)]);
var inst_44279 = cljs.core._nth.call(null,inst_44269,inst_44271);
var inst_44280 = cljs.core.nth.call(null,inst_44279,(0),null);
var inst_44281 = cljs.core.nth.call(null,inst_44279,(1),null);
var state_44391__$1 = (function (){var statearr_44463 = state_44391;
(statearr_44463[(26)] = inst_44280);

return statearr_44463;
})();
if(cljs.core.truth_(inst_44281)){
var statearr_44464_44524 = state_44391__$1;
(statearr_44464_44524[(1)] = (13));

} else {
var statearr_44465_44525 = state_44391__$1;
(statearr_44465_44525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (18))){
var inst_44316 = (state_44391[(2)]);
var state_44391__$1 = state_44391;
var statearr_44466_44526 = state_44391__$1;
(statearr_44466_44526[(2)] = inst_44316);

(statearr_44466_44526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (42))){
var state_44391__$1 = state_44391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44391__$1,(45),dchan);
} else {
if((state_val_44392 === (37))){
var inst_44259 = (state_44391[(11)]);
var inst_44359 = (state_44391[(23)]);
var inst_44350 = (state_44391[(25)]);
var inst_44359__$1 = cljs.core.first.call(null,inst_44350);
var inst_44360 = cljs.core.async.put_BANG_.call(null,inst_44359__$1,inst_44259,done);
var state_44391__$1 = (function (){var statearr_44467 = state_44391;
(statearr_44467[(23)] = inst_44359__$1);

return statearr_44467;
})();
if(cljs.core.truth_(inst_44360)){
var statearr_44468_44527 = state_44391__$1;
(statearr_44468_44527[(1)] = (39));

} else {
var statearr_44469_44528 = state_44391__$1;
(statearr_44469_44528[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44392 === (8))){
var inst_44271 = (state_44391[(13)]);
var inst_44270 = (state_44391[(17)]);
var inst_44273 = (inst_44271 < inst_44270);
var inst_44274 = inst_44273;
var state_44391__$1 = state_44391;
if(cljs.core.truth_(inst_44274)){
var statearr_44470_44529 = state_44391__$1;
(statearr_44470_44529[(1)] = (10));

} else {
var statearr_44471_44530 = state_44391__$1;
(statearr_44471_44530[(1)] = (11));

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
});})(c__30952__auto___44476,cs,m,dchan,dctr,done))
;
return ((function (switch__30864__auto__,c__30952__auto___44476,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30865__auto__ = null;
var cljs$core$async$mult_$_state_machine__30865__auto____0 = (function (){
var statearr_44472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44472[(0)] = cljs$core$async$mult_$_state_machine__30865__auto__);

(statearr_44472[(1)] = (1));

return statearr_44472;
});
var cljs$core$async$mult_$_state_machine__30865__auto____1 = (function (state_44391){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44473){if((e44473 instanceof Object)){
var ex__30868__auto__ = e44473;
var statearr_44474_44531 = state_44391;
(statearr_44474_44531[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44532 = state_44391;
state_44391 = G__44532;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30865__auto__ = function(state_44391){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30865__auto____1.call(this,state_44391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30865__auto____0;
cljs$core$async$mult_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30865__auto____1;
return cljs$core$async$mult_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44476,cs,m,dchan,dctr,done))
})();
var state__30954__auto__ = (function (){var statearr_44475 = f__30953__auto__.call(null);
(statearr_44475[(6)] = c__30952__auto___44476);

return statearr_44475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44476,cs,m,dchan,dctr,done))
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
var G__44534 = arguments.length;
switch (G__44534) {
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
var len__28364__auto___44546 = arguments.length;
var i__28365__auto___44547 = (0);
while(true){
if((i__28365__auto___44547 < len__28364__auto___44546)){
args__28371__auto__.push((arguments[i__28365__auto___44547]));

var G__44548 = (i__28365__auto___44547 + (1));
i__28365__auto___44547 = G__44548;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44540){
var map__44541 = p__44540;
var map__44541__$1 = ((((!((map__44541 == null)))?((((map__44541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44541):map__44541);
var opts = map__44541__$1;
var statearr_44543_44549 = state;
(statearr_44543_44549[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44541,map__44541__$1,opts){
return (function (val){
var statearr_44544_44550 = state;
(statearr_44544_44550[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44541,map__44541__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44545_44551 = state;
(statearr_44545_44551[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44536){
var G__44537 = cljs.core.first.call(null,seq44536);
var seq44536__$1 = cljs.core.next.call(null,seq44536);
var G__44538 = cljs.core.first.call(null,seq44536__$1);
var seq44536__$2 = cljs.core.next.call(null,seq44536__$1);
var G__44539 = cljs.core.first.call(null,seq44536__$2);
var seq44536__$3 = cljs.core.next.call(null,seq44536__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44537,G__44538,G__44539,seq44536__$3);
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
if(typeof cljs.core.async.t_cljs$core$async44552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44552 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44553){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44553 = meta44553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44554,meta44553__$1){
var self__ = this;
var _44554__$1 = this;
return (new cljs.core.async.t_cljs$core$async44552(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44553__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44554){
var self__ = this;
var _44554__$1 = this;
return self__.meta44553;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44552.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44553","meta44553",-257455789,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44552";

cljs.core.async.t_cljs$core$async44552.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44552");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44552 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44552(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44553){
return (new cljs.core.async.t_cljs$core$async44552(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44553));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44552(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___44716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44656){
var state_val_44657 = (state_44656[(1)]);
if((state_val_44657 === (7))){
var inst_44571 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44658_44717 = state_44656__$1;
(statearr_44658_44717[(2)] = inst_44571);

(statearr_44658_44717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (20))){
var inst_44583 = (state_44656[(7)]);
var state_44656__$1 = state_44656;
var statearr_44659_44718 = state_44656__$1;
(statearr_44659_44718[(2)] = inst_44583);

(statearr_44659_44718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (27))){
var state_44656__$1 = state_44656;
var statearr_44660_44719 = state_44656__$1;
(statearr_44660_44719[(2)] = null);

(statearr_44660_44719[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (1))){
var inst_44558 = (state_44656[(8)]);
var inst_44558__$1 = calc_state.call(null);
var inst_44560 = (inst_44558__$1 == null);
var inst_44561 = cljs.core.not.call(null,inst_44560);
var state_44656__$1 = (function (){var statearr_44661 = state_44656;
(statearr_44661[(8)] = inst_44558__$1);

return statearr_44661;
})();
if(inst_44561){
var statearr_44662_44720 = state_44656__$1;
(statearr_44662_44720[(1)] = (2));

} else {
var statearr_44663_44721 = state_44656__$1;
(statearr_44663_44721[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (24))){
var inst_44607 = (state_44656[(9)]);
var inst_44630 = (state_44656[(10)]);
var inst_44616 = (state_44656[(11)]);
var inst_44630__$1 = inst_44607.call(null,inst_44616);
var state_44656__$1 = (function (){var statearr_44664 = state_44656;
(statearr_44664[(10)] = inst_44630__$1);

return statearr_44664;
})();
if(cljs.core.truth_(inst_44630__$1)){
var statearr_44665_44722 = state_44656__$1;
(statearr_44665_44722[(1)] = (29));

} else {
var statearr_44666_44723 = state_44656__$1;
(statearr_44666_44723[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (4))){
var inst_44574 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44574)){
var statearr_44667_44724 = state_44656__$1;
(statearr_44667_44724[(1)] = (8));

} else {
var statearr_44668_44725 = state_44656__$1;
(statearr_44668_44725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (15))){
var inst_44601 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44601)){
var statearr_44669_44726 = state_44656__$1;
(statearr_44669_44726[(1)] = (19));

} else {
var statearr_44670_44727 = state_44656__$1;
(statearr_44670_44727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (21))){
var inst_44606 = (state_44656[(12)]);
var inst_44606__$1 = (state_44656[(2)]);
var inst_44607 = cljs.core.get.call(null,inst_44606__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44608 = cljs.core.get.call(null,inst_44606__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44609 = cljs.core.get.call(null,inst_44606__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44656__$1 = (function (){var statearr_44671 = state_44656;
(statearr_44671[(12)] = inst_44606__$1);

(statearr_44671[(9)] = inst_44607);

(statearr_44671[(13)] = inst_44608);

return statearr_44671;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44656__$1,(22),inst_44609);
} else {
if((state_val_44657 === (31))){
var inst_44638 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44638)){
var statearr_44672_44728 = state_44656__$1;
(statearr_44672_44728[(1)] = (32));

} else {
var statearr_44673_44729 = state_44656__$1;
(statearr_44673_44729[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (32))){
var inst_44615 = (state_44656[(14)]);
var state_44656__$1 = state_44656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44656__$1,(35),out,inst_44615);
} else {
if((state_val_44657 === (33))){
var inst_44606 = (state_44656[(12)]);
var inst_44583 = inst_44606;
var state_44656__$1 = (function (){var statearr_44674 = state_44656;
(statearr_44674[(7)] = inst_44583);

return statearr_44674;
})();
var statearr_44675_44730 = state_44656__$1;
(statearr_44675_44730[(2)] = null);

(statearr_44675_44730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (13))){
var inst_44583 = (state_44656[(7)]);
var inst_44590 = inst_44583.cljs$lang$protocol_mask$partition0$;
var inst_44591 = (inst_44590 & (64));
var inst_44592 = inst_44583.cljs$core$ISeq$;
var inst_44593 = (cljs.core.PROTOCOL_SENTINEL === inst_44592);
var inst_44594 = (inst_44591) || (inst_44593);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44594)){
var statearr_44676_44731 = state_44656__$1;
(statearr_44676_44731[(1)] = (16));

} else {
var statearr_44677_44732 = state_44656__$1;
(statearr_44677_44732[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (22))){
var inst_44616 = (state_44656[(11)]);
var inst_44615 = (state_44656[(14)]);
var inst_44614 = (state_44656[(2)]);
var inst_44615__$1 = cljs.core.nth.call(null,inst_44614,(0),null);
var inst_44616__$1 = cljs.core.nth.call(null,inst_44614,(1),null);
var inst_44617 = (inst_44615__$1 == null);
var inst_44618 = cljs.core._EQ_.call(null,inst_44616__$1,change);
var inst_44619 = (inst_44617) || (inst_44618);
var state_44656__$1 = (function (){var statearr_44678 = state_44656;
(statearr_44678[(11)] = inst_44616__$1);

(statearr_44678[(14)] = inst_44615__$1);

return statearr_44678;
})();
if(cljs.core.truth_(inst_44619)){
var statearr_44679_44733 = state_44656__$1;
(statearr_44679_44733[(1)] = (23));

} else {
var statearr_44680_44734 = state_44656__$1;
(statearr_44680_44734[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (36))){
var inst_44606 = (state_44656[(12)]);
var inst_44583 = inst_44606;
var state_44656__$1 = (function (){var statearr_44681 = state_44656;
(statearr_44681[(7)] = inst_44583);

return statearr_44681;
})();
var statearr_44682_44735 = state_44656__$1;
(statearr_44682_44735[(2)] = null);

(statearr_44682_44735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (29))){
var inst_44630 = (state_44656[(10)]);
var state_44656__$1 = state_44656;
var statearr_44683_44736 = state_44656__$1;
(statearr_44683_44736[(2)] = inst_44630);

(statearr_44683_44736[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (6))){
var state_44656__$1 = state_44656;
var statearr_44684_44737 = state_44656__$1;
(statearr_44684_44737[(2)] = false);

(statearr_44684_44737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (28))){
var inst_44626 = (state_44656[(2)]);
var inst_44627 = calc_state.call(null);
var inst_44583 = inst_44627;
var state_44656__$1 = (function (){var statearr_44685 = state_44656;
(statearr_44685[(7)] = inst_44583);

(statearr_44685[(15)] = inst_44626);

return statearr_44685;
})();
var statearr_44686_44738 = state_44656__$1;
(statearr_44686_44738[(2)] = null);

(statearr_44686_44738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (25))){
var inst_44652 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44687_44739 = state_44656__$1;
(statearr_44687_44739[(2)] = inst_44652);

(statearr_44687_44739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (34))){
var inst_44650 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44688_44740 = state_44656__$1;
(statearr_44688_44740[(2)] = inst_44650);

(statearr_44688_44740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (17))){
var state_44656__$1 = state_44656;
var statearr_44689_44741 = state_44656__$1;
(statearr_44689_44741[(2)] = false);

(statearr_44689_44741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (3))){
var state_44656__$1 = state_44656;
var statearr_44690_44742 = state_44656__$1;
(statearr_44690_44742[(2)] = false);

(statearr_44690_44742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (12))){
var inst_44654 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44656__$1,inst_44654);
} else {
if((state_val_44657 === (2))){
var inst_44558 = (state_44656[(8)]);
var inst_44563 = inst_44558.cljs$lang$protocol_mask$partition0$;
var inst_44564 = (inst_44563 & (64));
var inst_44565 = inst_44558.cljs$core$ISeq$;
var inst_44566 = (cljs.core.PROTOCOL_SENTINEL === inst_44565);
var inst_44567 = (inst_44564) || (inst_44566);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44567)){
var statearr_44691_44743 = state_44656__$1;
(statearr_44691_44743[(1)] = (5));

} else {
var statearr_44692_44744 = state_44656__$1;
(statearr_44692_44744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (23))){
var inst_44615 = (state_44656[(14)]);
var inst_44621 = (inst_44615 == null);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44621)){
var statearr_44693_44745 = state_44656__$1;
(statearr_44693_44745[(1)] = (26));

} else {
var statearr_44694_44746 = state_44656__$1;
(statearr_44694_44746[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (35))){
var inst_44641 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44641)){
var statearr_44695_44747 = state_44656__$1;
(statearr_44695_44747[(1)] = (36));

} else {
var statearr_44696_44748 = state_44656__$1;
(statearr_44696_44748[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (19))){
var inst_44583 = (state_44656[(7)]);
var inst_44603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44583);
var state_44656__$1 = state_44656;
var statearr_44697_44749 = state_44656__$1;
(statearr_44697_44749[(2)] = inst_44603);

(statearr_44697_44749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (11))){
var inst_44583 = (state_44656[(7)]);
var inst_44587 = (inst_44583 == null);
var inst_44588 = cljs.core.not.call(null,inst_44587);
var state_44656__$1 = state_44656;
if(inst_44588){
var statearr_44698_44750 = state_44656__$1;
(statearr_44698_44750[(1)] = (13));

} else {
var statearr_44699_44751 = state_44656__$1;
(statearr_44699_44751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (9))){
var inst_44558 = (state_44656[(8)]);
var state_44656__$1 = state_44656;
var statearr_44700_44752 = state_44656__$1;
(statearr_44700_44752[(2)] = inst_44558);

(statearr_44700_44752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (5))){
var state_44656__$1 = state_44656;
var statearr_44701_44753 = state_44656__$1;
(statearr_44701_44753[(2)] = true);

(statearr_44701_44753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (14))){
var state_44656__$1 = state_44656;
var statearr_44702_44754 = state_44656__$1;
(statearr_44702_44754[(2)] = false);

(statearr_44702_44754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (26))){
var inst_44616 = (state_44656[(11)]);
var inst_44623 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44616);
var state_44656__$1 = state_44656;
var statearr_44703_44755 = state_44656__$1;
(statearr_44703_44755[(2)] = inst_44623);

(statearr_44703_44755[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (16))){
var state_44656__$1 = state_44656;
var statearr_44704_44756 = state_44656__$1;
(statearr_44704_44756[(2)] = true);

(statearr_44704_44756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (38))){
var inst_44646 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44705_44757 = state_44656__$1;
(statearr_44705_44757[(2)] = inst_44646);

(statearr_44705_44757[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (30))){
var inst_44607 = (state_44656[(9)]);
var inst_44616 = (state_44656[(11)]);
var inst_44608 = (state_44656[(13)]);
var inst_44633 = cljs.core.empty_QMARK_.call(null,inst_44607);
var inst_44634 = inst_44608.call(null,inst_44616);
var inst_44635 = cljs.core.not.call(null,inst_44634);
var inst_44636 = (inst_44633) && (inst_44635);
var state_44656__$1 = state_44656;
var statearr_44706_44758 = state_44656__$1;
(statearr_44706_44758[(2)] = inst_44636);

(statearr_44706_44758[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (10))){
var inst_44558 = (state_44656[(8)]);
var inst_44579 = (state_44656[(2)]);
var inst_44580 = cljs.core.get.call(null,inst_44579,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44581 = cljs.core.get.call(null,inst_44579,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44582 = cljs.core.get.call(null,inst_44579,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44583 = inst_44558;
var state_44656__$1 = (function (){var statearr_44707 = state_44656;
(statearr_44707[(7)] = inst_44583);

(statearr_44707[(16)] = inst_44580);

(statearr_44707[(17)] = inst_44582);

(statearr_44707[(18)] = inst_44581);

return statearr_44707;
})();
var statearr_44708_44759 = state_44656__$1;
(statearr_44708_44759[(2)] = null);

(statearr_44708_44759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (18))){
var inst_44598 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44709_44760 = state_44656__$1;
(statearr_44709_44760[(2)] = inst_44598);

(statearr_44709_44760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (37))){
var state_44656__$1 = state_44656;
var statearr_44710_44761 = state_44656__$1;
(statearr_44710_44761[(2)] = null);

(statearr_44710_44761[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (8))){
var inst_44558 = (state_44656[(8)]);
var inst_44576 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44558);
var state_44656__$1 = state_44656;
var statearr_44711_44762 = state_44656__$1;
(statearr_44711_44762[(2)] = inst_44576);

(statearr_44711_44762[(1)] = (10));


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
});})(c__30952__auto___44716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30864__auto__,c__30952__auto___44716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30865__auto__ = null;
var cljs$core$async$mix_$_state_machine__30865__auto____0 = (function (){
var statearr_44712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44712[(0)] = cljs$core$async$mix_$_state_machine__30865__auto__);

(statearr_44712[(1)] = (1));

return statearr_44712;
});
var cljs$core$async$mix_$_state_machine__30865__auto____1 = (function (state_44656){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44713){if((e44713 instanceof Object)){
var ex__30868__auto__ = e44713;
var statearr_44714_44763 = state_44656;
(statearr_44714_44763[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44764 = state_44656;
state_44656 = G__44764;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30865__auto__ = function(state_44656){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30865__auto____1.call(this,state_44656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30865__auto____0;
cljs$core$async$mix_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30865__auto____1;
return cljs$core$async$mix_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30954__auto__ = (function (){var statearr_44715 = f__30953__auto__.call(null);
(statearr_44715[(6)] = c__30952__auto___44716);

return statearr_44715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44766 = arguments.length;
switch (G__44766) {
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
var G__44770 = arguments.length;
switch (G__44770) {
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
return (function (p1__44768_SHARP_){
if(cljs.core.truth_(p1__44768_SHARP_.call(null,topic))){
return p1__44768_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44768_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44771 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44772){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44772 = meta44772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44773,meta44772__$1){
var self__ = this;
var _44773__$1 = this;
return (new cljs.core.async.t_cljs$core$async44771(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44772__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44773){
var self__ = this;
var _44773__$1 = this;
return self__.meta44772;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44772","meta44772",670897770,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44771";

cljs.core.async.t_cljs$core$async44771.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44771");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44771 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44771(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44772){
return (new cljs.core.async.t_cljs$core$async44771(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44772));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44771(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___44891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44891,mults,ensure_mult,p){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44891,mults,ensure_mult,p){
return (function (state_44845){
var state_val_44846 = (state_44845[(1)]);
if((state_val_44846 === (7))){
var inst_44841 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44847_44892 = state_44845__$1;
(statearr_44847_44892[(2)] = inst_44841);

(statearr_44847_44892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (20))){
var state_44845__$1 = state_44845;
var statearr_44848_44893 = state_44845__$1;
(statearr_44848_44893[(2)] = null);

(statearr_44848_44893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (1))){
var state_44845__$1 = state_44845;
var statearr_44849_44894 = state_44845__$1;
(statearr_44849_44894[(2)] = null);

(statearr_44849_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (24))){
var inst_44824 = (state_44845[(7)]);
var inst_44833 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44824);
var state_44845__$1 = state_44845;
var statearr_44850_44895 = state_44845__$1;
(statearr_44850_44895[(2)] = inst_44833);

(statearr_44850_44895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (4))){
var inst_44776 = (state_44845[(8)]);
var inst_44776__$1 = (state_44845[(2)]);
var inst_44777 = (inst_44776__$1 == null);
var state_44845__$1 = (function (){var statearr_44851 = state_44845;
(statearr_44851[(8)] = inst_44776__$1);

return statearr_44851;
})();
if(cljs.core.truth_(inst_44777)){
var statearr_44852_44896 = state_44845__$1;
(statearr_44852_44896[(1)] = (5));

} else {
var statearr_44853_44897 = state_44845__$1;
(statearr_44853_44897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (15))){
var inst_44818 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44854_44898 = state_44845__$1;
(statearr_44854_44898[(2)] = inst_44818);

(statearr_44854_44898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (21))){
var inst_44838 = (state_44845[(2)]);
var state_44845__$1 = (function (){var statearr_44855 = state_44845;
(statearr_44855[(9)] = inst_44838);

return statearr_44855;
})();
var statearr_44856_44899 = state_44845__$1;
(statearr_44856_44899[(2)] = null);

(statearr_44856_44899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (13))){
var inst_44800 = (state_44845[(10)]);
var inst_44802 = cljs.core.chunked_seq_QMARK_.call(null,inst_44800);
var state_44845__$1 = state_44845;
if(inst_44802){
var statearr_44857_44900 = state_44845__$1;
(statearr_44857_44900[(1)] = (16));

} else {
var statearr_44858_44901 = state_44845__$1;
(statearr_44858_44901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (22))){
var inst_44830 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
if(cljs.core.truth_(inst_44830)){
var statearr_44859_44902 = state_44845__$1;
(statearr_44859_44902[(1)] = (23));

} else {
var statearr_44860_44903 = state_44845__$1;
(statearr_44860_44903[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (6))){
var inst_44776 = (state_44845[(8)]);
var inst_44826 = (state_44845[(11)]);
var inst_44824 = (state_44845[(7)]);
var inst_44824__$1 = topic_fn.call(null,inst_44776);
var inst_44825 = cljs.core.deref.call(null,mults);
var inst_44826__$1 = cljs.core.get.call(null,inst_44825,inst_44824__$1);
var state_44845__$1 = (function (){var statearr_44861 = state_44845;
(statearr_44861[(11)] = inst_44826__$1);

(statearr_44861[(7)] = inst_44824__$1);

return statearr_44861;
})();
if(cljs.core.truth_(inst_44826__$1)){
var statearr_44862_44904 = state_44845__$1;
(statearr_44862_44904[(1)] = (19));

} else {
var statearr_44863_44905 = state_44845__$1;
(statearr_44863_44905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (25))){
var inst_44835 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44864_44906 = state_44845__$1;
(statearr_44864_44906[(2)] = inst_44835);

(statearr_44864_44906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (17))){
var inst_44800 = (state_44845[(10)]);
var inst_44809 = cljs.core.first.call(null,inst_44800);
var inst_44810 = cljs.core.async.muxch_STAR_.call(null,inst_44809);
var inst_44811 = cljs.core.async.close_BANG_.call(null,inst_44810);
var inst_44812 = cljs.core.next.call(null,inst_44800);
var inst_44786 = inst_44812;
var inst_44787 = null;
var inst_44788 = (0);
var inst_44789 = (0);
var state_44845__$1 = (function (){var statearr_44865 = state_44845;
(statearr_44865[(12)] = inst_44788);

(statearr_44865[(13)] = inst_44786);

(statearr_44865[(14)] = inst_44787);

(statearr_44865[(15)] = inst_44811);

(statearr_44865[(16)] = inst_44789);

return statearr_44865;
})();
var statearr_44866_44907 = state_44845__$1;
(statearr_44866_44907[(2)] = null);

(statearr_44866_44907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (3))){
var inst_44843 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44845__$1,inst_44843);
} else {
if((state_val_44846 === (12))){
var inst_44820 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44867_44908 = state_44845__$1;
(statearr_44867_44908[(2)] = inst_44820);

(statearr_44867_44908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (2))){
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44845__$1,(4),ch);
} else {
if((state_val_44846 === (23))){
var state_44845__$1 = state_44845;
var statearr_44868_44909 = state_44845__$1;
(statearr_44868_44909[(2)] = null);

(statearr_44868_44909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (19))){
var inst_44776 = (state_44845[(8)]);
var inst_44826 = (state_44845[(11)]);
var inst_44828 = cljs.core.async.muxch_STAR_.call(null,inst_44826);
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44845__$1,(22),inst_44828,inst_44776);
} else {
if((state_val_44846 === (11))){
var inst_44786 = (state_44845[(13)]);
var inst_44800 = (state_44845[(10)]);
var inst_44800__$1 = cljs.core.seq.call(null,inst_44786);
var state_44845__$1 = (function (){var statearr_44869 = state_44845;
(statearr_44869[(10)] = inst_44800__$1);

return statearr_44869;
})();
if(inst_44800__$1){
var statearr_44870_44910 = state_44845__$1;
(statearr_44870_44910[(1)] = (13));

} else {
var statearr_44871_44911 = state_44845__$1;
(statearr_44871_44911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (9))){
var inst_44822 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44872_44912 = state_44845__$1;
(statearr_44872_44912[(2)] = inst_44822);

(statearr_44872_44912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (5))){
var inst_44783 = cljs.core.deref.call(null,mults);
var inst_44784 = cljs.core.vals.call(null,inst_44783);
var inst_44785 = cljs.core.seq.call(null,inst_44784);
var inst_44786 = inst_44785;
var inst_44787 = null;
var inst_44788 = (0);
var inst_44789 = (0);
var state_44845__$1 = (function (){var statearr_44873 = state_44845;
(statearr_44873[(12)] = inst_44788);

(statearr_44873[(13)] = inst_44786);

(statearr_44873[(14)] = inst_44787);

(statearr_44873[(16)] = inst_44789);

return statearr_44873;
})();
var statearr_44874_44913 = state_44845__$1;
(statearr_44874_44913[(2)] = null);

(statearr_44874_44913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (14))){
var state_44845__$1 = state_44845;
var statearr_44878_44914 = state_44845__$1;
(statearr_44878_44914[(2)] = null);

(statearr_44878_44914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (16))){
var inst_44800 = (state_44845[(10)]);
var inst_44804 = cljs.core.chunk_first.call(null,inst_44800);
var inst_44805 = cljs.core.chunk_rest.call(null,inst_44800);
var inst_44806 = cljs.core.count.call(null,inst_44804);
var inst_44786 = inst_44805;
var inst_44787 = inst_44804;
var inst_44788 = inst_44806;
var inst_44789 = (0);
var state_44845__$1 = (function (){var statearr_44879 = state_44845;
(statearr_44879[(12)] = inst_44788);

(statearr_44879[(13)] = inst_44786);

(statearr_44879[(14)] = inst_44787);

(statearr_44879[(16)] = inst_44789);

return statearr_44879;
})();
var statearr_44880_44915 = state_44845__$1;
(statearr_44880_44915[(2)] = null);

(statearr_44880_44915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (10))){
var inst_44788 = (state_44845[(12)]);
var inst_44786 = (state_44845[(13)]);
var inst_44787 = (state_44845[(14)]);
var inst_44789 = (state_44845[(16)]);
var inst_44794 = cljs.core._nth.call(null,inst_44787,inst_44789);
var inst_44795 = cljs.core.async.muxch_STAR_.call(null,inst_44794);
var inst_44796 = cljs.core.async.close_BANG_.call(null,inst_44795);
var inst_44797 = (inst_44789 + (1));
var tmp44875 = inst_44788;
var tmp44876 = inst_44786;
var tmp44877 = inst_44787;
var inst_44786__$1 = tmp44876;
var inst_44787__$1 = tmp44877;
var inst_44788__$1 = tmp44875;
var inst_44789__$1 = inst_44797;
var state_44845__$1 = (function (){var statearr_44881 = state_44845;
(statearr_44881[(12)] = inst_44788__$1);

(statearr_44881[(13)] = inst_44786__$1);

(statearr_44881[(14)] = inst_44787__$1);

(statearr_44881[(17)] = inst_44796);

(statearr_44881[(16)] = inst_44789__$1);

return statearr_44881;
})();
var statearr_44882_44916 = state_44845__$1;
(statearr_44882_44916[(2)] = null);

(statearr_44882_44916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (18))){
var inst_44815 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44883_44917 = state_44845__$1;
(statearr_44883_44917[(2)] = inst_44815);

(statearr_44883_44917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (8))){
var inst_44788 = (state_44845[(12)]);
var inst_44789 = (state_44845[(16)]);
var inst_44791 = (inst_44789 < inst_44788);
var inst_44792 = inst_44791;
var state_44845__$1 = state_44845;
if(cljs.core.truth_(inst_44792)){
var statearr_44884_44918 = state_44845__$1;
(statearr_44884_44918[(1)] = (10));

} else {
var statearr_44885_44919 = state_44845__$1;
(statearr_44885_44919[(1)] = (11));

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
});})(c__30952__auto___44891,mults,ensure_mult,p))
;
return ((function (switch__30864__auto__,c__30952__auto___44891,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_44886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44886[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44886[(1)] = (1));

return statearr_44886;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44845){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44887){if((e44887 instanceof Object)){
var ex__30868__auto__ = e44887;
var statearr_44888_44920 = state_44845;
(statearr_44888_44920[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44921 = state_44845;
state_44845 = G__44921;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44891,mults,ensure_mult,p))
})();
var state__30954__auto__ = (function (){var statearr_44889 = f__30953__auto__.call(null);
(statearr_44889[(6)] = c__30952__auto___44891);

return statearr_44889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44891,mults,ensure_mult,p))
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
var G__44923 = arguments.length;
switch (G__44923) {
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
var G__44926 = arguments.length;
switch (G__44926) {
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
var G__44929 = arguments.length;
switch (G__44929) {
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
var c__30952__auto___44996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44968){
var state_val_44969 = (state_44968[(1)]);
if((state_val_44969 === (7))){
var state_44968__$1 = state_44968;
var statearr_44970_44997 = state_44968__$1;
(statearr_44970_44997[(2)] = null);

(statearr_44970_44997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (1))){
var state_44968__$1 = state_44968;
var statearr_44971_44998 = state_44968__$1;
(statearr_44971_44998[(2)] = null);

(statearr_44971_44998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (4))){
var inst_44932 = (state_44968[(7)]);
var inst_44934 = (inst_44932 < cnt);
var state_44968__$1 = state_44968;
if(cljs.core.truth_(inst_44934)){
var statearr_44972_44999 = state_44968__$1;
(statearr_44972_44999[(1)] = (6));

} else {
var statearr_44973_45000 = state_44968__$1;
(statearr_44973_45000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (15))){
var inst_44964 = (state_44968[(2)]);
var state_44968__$1 = state_44968;
var statearr_44974_45001 = state_44968__$1;
(statearr_44974_45001[(2)] = inst_44964);

(statearr_44974_45001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (13))){
var inst_44957 = cljs.core.async.close_BANG_.call(null,out);
var state_44968__$1 = state_44968;
var statearr_44975_45002 = state_44968__$1;
(statearr_44975_45002[(2)] = inst_44957);

(statearr_44975_45002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (6))){
var state_44968__$1 = state_44968;
var statearr_44976_45003 = state_44968__$1;
(statearr_44976_45003[(2)] = null);

(statearr_44976_45003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (3))){
var inst_44966 = (state_44968[(2)]);
var state_44968__$1 = state_44968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44968__$1,inst_44966);
} else {
if((state_val_44969 === (12))){
var inst_44954 = (state_44968[(8)]);
var inst_44954__$1 = (state_44968[(2)]);
var inst_44955 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44954__$1);
var state_44968__$1 = (function (){var statearr_44977 = state_44968;
(statearr_44977[(8)] = inst_44954__$1);

return statearr_44977;
})();
if(cljs.core.truth_(inst_44955)){
var statearr_44978_45004 = state_44968__$1;
(statearr_44978_45004[(1)] = (13));

} else {
var statearr_44979_45005 = state_44968__$1;
(statearr_44979_45005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (2))){
var inst_44931 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44932 = (0);
var state_44968__$1 = (function (){var statearr_44980 = state_44968;
(statearr_44980[(7)] = inst_44932);

(statearr_44980[(9)] = inst_44931);

return statearr_44980;
})();
var statearr_44981_45006 = state_44968__$1;
(statearr_44981_45006[(2)] = null);

(statearr_44981_45006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (11))){
var inst_44932 = (state_44968[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44968,(10),Object,null,(9));
var inst_44941 = chs__$1.call(null,inst_44932);
var inst_44942 = done.call(null,inst_44932);
var inst_44943 = cljs.core.async.take_BANG_.call(null,inst_44941,inst_44942);
var state_44968__$1 = state_44968;
var statearr_44982_45007 = state_44968__$1;
(statearr_44982_45007[(2)] = inst_44943);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (9))){
var inst_44932 = (state_44968[(7)]);
var inst_44945 = (state_44968[(2)]);
var inst_44946 = (inst_44932 + (1));
var inst_44932__$1 = inst_44946;
var state_44968__$1 = (function (){var statearr_44983 = state_44968;
(statearr_44983[(7)] = inst_44932__$1);

(statearr_44983[(10)] = inst_44945);

return statearr_44983;
})();
var statearr_44984_45008 = state_44968__$1;
(statearr_44984_45008[(2)] = null);

(statearr_44984_45008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (5))){
var inst_44952 = (state_44968[(2)]);
var state_44968__$1 = (function (){var statearr_44985 = state_44968;
(statearr_44985[(11)] = inst_44952);

return statearr_44985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44968__$1,(12),dchan);
} else {
if((state_val_44969 === (14))){
var inst_44954 = (state_44968[(8)]);
var inst_44959 = cljs.core.apply.call(null,f,inst_44954);
var state_44968__$1 = state_44968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44968__$1,(16),out,inst_44959);
} else {
if((state_val_44969 === (16))){
var inst_44961 = (state_44968[(2)]);
var state_44968__$1 = (function (){var statearr_44986 = state_44968;
(statearr_44986[(12)] = inst_44961);

return statearr_44986;
})();
var statearr_44987_45009 = state_44968__$1;
(statearr_44987_45009[(2)] = null);

(statearr_44987_45009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (10))){
var inst_44936 = (state_44968[(2)]);
var inst_44937 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44968__$1 = (function (){var statearr_44988 = state_44968;
(statearr_44988[(13)] = inst_44936);

return statearr_44988;
})();
var statearr_44989_45010 = state_44968__$1;
(statearr_44989_45010[(2)] = inst_44937);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (8))){
var inst_44950 = (state_44968[(2)]);
var state_44968__$1 = state_44968;
var statearr_44990_45011 = state_44968__$1;
(statearr_44990_45011[(2)] = inst_44950);

(statearr_44990_45011[(1)] = (5));


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
});})(c__30952__auto___44996,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30864__auto__,c__30952__auto___44996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_44991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44991[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44991[(1)] = (1));

return statearr_44991;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44968){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44992){if((e44992 instanceof Object)){
var ex__30868__auto__ = e44992;
var statearr_44993_45012 = state_44968;
(statearr_44993_45012[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45013 = state_44968;
state_44968 = G__45013;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44996,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30954__auto__ = (function (){var statearr_44994 = f__30953__auto__.call(null);
(statearr_44994[(6)] = c__30952__auto___44996);

return statearr_44994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44996,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45016 = arguments.length;
switch (G__45016) {
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
var c__30952__auto___45070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45070,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45070,out){
return (function (state_45048){
var state_val_45049 = (state_45048[(1)]);
if((state_val_45049 === (7))){
var inst_45027 = (state_45048[(7)]);
var inst_45028 = (state_45048[(8)]);
var inst_45027__$1 = (state_45048[(2)]);
var inst_45028__$1 = cljs.core.nth.call(null,inst_45027__$1,(0),null);
var inst_45029 = cljs.core.nth.call(null,inst_45027__$1,(1),null);
var inst_45030 = (inst_45028__$1 == null);
var state_45048__$1 = (function (){var statearr_45050 = state_45048;
(statearr_45050[(7)] = inst_45027__$1);

(statearr_45050[(8)] = inst_45028__$1);

(statearr_45050[(9)] = inst_45029);

return statearr_45050;
})();
if(cljs.core.truth_(inst_45030)){
var statearr_45051_45071 = state_45048__$1;
(statearr_45051_45071[(1)] = (8));

} else {
var statearr_45052_45072 = state_45048__$1;
(statearr_45052_45072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (1))){
var inst_45017 = cljs.core.vec.call(null,chs);
var inst_45018 = inst_45017;
var state_45048__$1 = (function (){var statearr_45053 = state_45048;
(statearr_45053[(10)] = inst_45018);

return statearr_45053;
})();
var statearr_45054_45073 = state_45048__$1;
(statearr_45054_45073[(2)] = null);

(statearr_45054_45073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (4))){
var inst_45018 = (state_45048[(10)]);
var state_45048__$1 = state_45048;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45048__$1,(7),inst_45018);
} else {
if((state_val_45049 === (6))){
var inst_45044 = (state_45048[(2)]);
var state_45048__$1 = state_45048;
var statearr_45055_45074 = state_45048__$1;
(statearr_45055_45074[(2)] = inst_45044);

(statearr_45055_45074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (3))){
var inst_45046 = (state_45048[(2)]);
var state_45048__$1 = state_45048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45048__$1,inst_45046);
} else {
if((state_val_45049 === (2))){
var inst_45018 = (state_45048[(10)]);
var inst_45020 = cljs.core.count.call(null,inst_45018);
var inst_45021 = (inst_45020 > (0));
var state_45048__$1 = state_45048;
if(cljs.core.truth_(inst_45021)){
var statearr_45057_45075 = state_45048__$1;
(statearr_45057_45075[(1)] = (4));

} else {
var statearr_45058_45076 = state_45048__$1;
(statearr_45058_45076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (11))){
var inst_45018 = (state_45048[(10)]);
var inst_45037 = (state_45048[(2)]);
var tmp45056 = inst_45018;
var inst_45018__$1 = tmp45056;
var state_45048__$1 = (function (){var statearr_45059 = state_45048;
(statearr_45059[(11)] = inst_45037);

(statearr_45059[(10)] = inst_45018__$1);

return statearr_45059;
})();
var statearr_45060_45077 = state_45048__$1;
(statearr_45060_45077[(2)] = null);

(statearr_45060_45077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (9))){
var inst_45028 = (state_45048[(8)]);
var state_45048__$1 = state_45048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45048__$1,(11),out,inst_45028);
} else {
if((state_val_45049 === (5))){
var inst_45042 = cljs.core.async.close_BANG_.call(null,out);
var state_45048__$1 = state_45048;
var statearr_45061_45078 = state_45048__$1;
(statearr_45061_45078[(2)] = inst_45042);

(statearr_45061_45078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (10))){
var inst_45040 = (state_45048[(2)]);
var state_45048__$1 = state_45048;
var statearr_45062_45079 = state_45048__$1;
(statearr_45062_45079[(2)] = inst_45040);

(statearr_45062_45079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45049 === (8))){
var inst_45027 = (state_45048[(7)]);
var inst_45028 = (state_45048[(8)]);
var inst_45029 = (state_45048[(9)]);
var inst_45018 = (state_45048[(10)]);
var inst_45032 = (function (){var cs = inst_45018;
var vec__45023 = inst_45027;
var v = inst_45028;
var c = inst_45029;
return ((function (cs,vec__45023,v,c,inst_45027,inst_45028,inst_45029,inst_45018,state_val_45049,c__30952__auto___45070,out){
return (function (p1__45014_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45014_SHARP_);
});
;})(cs,vec__45023,v,c,inst_45027,inst_45028,inst_45029,inst_45018,state_val_45049,c__30952__auto___45070,out))
})();
var inst_45033 = cljs.core.filterv.call(null,inst_45032,inst_45018);
var inst_45018__$1 = inst_45033;
var state_45048__$1 = (function (){var statearr_45063 = state_45048;
(statearr_45063[(10)] = inst_45018__$1);

return statearr_45063;
})();
var statearr_45064_45080 = state_45048__$1;
(statearr_45064_45080[(2)] = null);

(statearr_45064_45080[(1)] = (2));


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
});})(c__30952__auto___45070,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45070,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45065[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45065[(1)] = (1));

return statearr_45065;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45048){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45066){if((e45066 instanceof Object)){
var ex__30868__auto__ = e45066;
var statearr_45067_45081 = state_45048;
(statearr_45067_45081[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45082 = state_45048;
state_45048 = G__45082;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45070,out))
})();
var state__30954__auto__ = (function (){var statearr_45068 = f__30953__auto__.call(null);
(statearr_45068[(6)] = c__30952__auto___45070);

return statearr_45068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45070,out))
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
var G__45084 = arguments.length;
switch (G__45084) {
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
var c__30952__auto___45129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45129,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45129,out){
return (function (state_45108){
var state_val_45109 = (state_45108[(1)]);
if((state_val_45109 === (7))){
var inst_45090 = (state_45108[(7)]);
var inst_45090__$1 = (state_45108[(2)]);
var inst_45091 = (inst_45090__$1 == null);
var inst_45092 = cljs.core.not.call(null,inst_45091);
var state_45108__$1 = (function (){var statearr_45110 = state_45108;
(statearr_45110[(7)] = inst_45090__$1);

return statearr_45110;
})();
if(inst_45092){
var statearr_45111_45130 = state_45108__$1;
(statearr_45111_45130[(1)] = (8));

} else {
var statearr_45112_45131 = state_45108__$1;
(statearr_45112_45131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (1))){
var inst_45085 = (0);
var state_45108__$1 = (function (){var statearr_45113 = state_45108;
(statearr_45113[(8)] = inst_45085);

return statearr_45113;
})();
var statearr_45114_45132 = state_45108__$1;
(statearr_45114_45132[(2)] = null);

(statearr_45114_45132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (4))){
var state_45108__$1 = state_45108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45108__$1,(7),ch);
} else {
if((state_val_45109 === (6))){
var inst_45103 = (state_45108[(2)]);
var state_45108__$1 = state_45108;
var statearr_45115_45133 = state_45108__$1;
(statearr_45115_45133[(2)] = inst_45103);

(statearr_45115_45133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (3))){
var inst_45105 = (state_45108[(2)]);
var inst_45106 = cljs.core.async.close_BANG_.call(null,out);
var state_45108__$1 = (function (){var statearr_45116 = state_45108;
(statearr_45116[(9)] = inst_45105);

return statearr_45116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45108__$1,inst_45106);
} else {
if((state_val_45109 === (2))){
var inst_45085 = (state_45108[(8)]);
var inst_45087 = (inst_45085 < n);
var state_45108__$1 = state_45108;
if(cljs.core.truth_(inst_45087)){
var statearr_45117_45134 = state_45108__$1;
(statearr_45117_45134[(1)] = (4));

} else {
var statearr_45118_45135 = state_45108__$1;
(statearr_45118_45135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (11))){
var inst_45085 = (state_45108[(8)]);
var inst_45095 = (state_45108[(2)]);
var inst_45096 = (inst_45085 + (1));
var inst_45085__$1 = inst_45096;
var state_45108__$1 = (function (){var statearr_45119 = state_45108;
(statearr_45119[(10)] = inst_45095);

(statearr_45119[(8)] = inst_45085__$1);

return statearr_45119;
})();
var statearr_45120_45136 = state_45108__$1;
(statearr_45120_45136[(2)] = null);

(statearr_45120_45136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (9))){
var state_45108__$1 = state_45108;
var statearr_45121_45137 = state_45108__$1;
(statearr_45121_45137[(2)] = null);

(statearr_45121_45137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (5))){
var state_45108__$1 = state_45108;
var statearr_45122_45138 = state_45108__$1;
(statearr_45122_45138[(2)] = null);

(statearr_45122_45138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (10))){
var inst_45100 = (state_45108[(2)]);
var state_45108__$1 = state_45108;
var statearr_45123_45139 = state_45108__$1;
(statearr_45123_45139[(2)] = inst_45100);

(statearr_45123_45139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45109 === (8))){
var inst_45090 = (state_45108[(7)]);
var state_45108__$1 = state_45108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45108__$1,(11),out,inst_45090);
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
});})(c__30952__auto___45129,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45129,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45124[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45124[(1)] = (1));

return statearr_45124;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45108){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45125){if((e45125 instanceof Object)){
var ex__30868__auto__ = e45125;
var statearr_45126_45140 = state_45108;
(statearr_45126_45140[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45141 = state_45108;
state_45108 = G__45141;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45129,out))
})();
var state__30954__auto__ = (function (){var statearr_45127 = f__30953__auto__.call(null);
(statearr_45127[(6)] = c__30952__auto___45129);

return statearr_45127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45129,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45143 = (function (f,ch,meta45144){
this.f = f;
this.ch = ch;
this.meta45144 = meta45144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45145,meta45144__$1){
var self__ = this;
var _45145__$1 = this;
return (new cljs.core.async.t_cljs$core$async45143(self__.f,self__.ch,meta45144__$1));
});

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45145){
var self__ = this;
var _45145__$1 = this;
return self__.meta45144;
});

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45146 = (function (f,ch,meta45144,_,fn1,meta45147){
this.f = f;
this.ch = ch;
this.meta45144 = meta45144;
this._ = _;
this.fn1 = fn1;
this.meta45147 = meta45147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45148,meta45147__$1){
var self__ = this;
var _45148__$1 = this;
return (new cljs.core.async.t_cljs$core$async45146(self__.f,self__.ch,self__.meta45144,self__._,self__.fn1,meta45147__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45148){
var self__ = this;
var _45148__$1 = this;
return self__.meta45147;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45142_SHARP_){
return f1.call(null,(((p1__45142_SHARP_ == null))?null:self__.f.call(null,p1__45142_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45146.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45144","meta45144",1253896302,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45143","cljs.core.async/t_cljs$core$async45143",540345901,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45147","meta45147",-1865714606,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45146";

cljs.core.async.t_cljs$core$async45146.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45146");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45146 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45146(f__$1,ch__$1,meta45144__$1,___$2,fn1__$1,meta45147){
return (new cljs.core.async.t_cljs$core$async45146(f__$1,ch__$1,meta45144__$1,___$2,fn1__$1,meta45147));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45146(self__.f,self__.ch,self__.meta45144,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45144","meta45144",1253896302,null)], null);
});

cljs.core.async.t_cljs$core$async45143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45143";

cljs.core.async.t_cljs$core$async45143.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45143");
});

cljs.core.async.__GT_t_cljs$core$async45143 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45143(f__$1,ch__$1,meta45144){
return (new cljs.core.async.t_cljs$core$async45143(f__$1,ch__$1,meta45144));
});

}

return (new cljs.core.async.t_cljs$core$async45143(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45149 = (function (f,ch,meta45150){
this.f = f;
this.ch = ch;
this.meta45150 = meta45150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45151,meta45150__$1){
var self__ = this;
var _45151__$1 = this;
return (new cljs.core.async.t_cljs$core$async45149(self__.f,self__.ch,meta45150__$1));
});

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45151){
var self__ = this;
var _45151__$1 = this;
return self__.meta45150;
});

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45150","meta45150",-1343354428,null)], null);
});

cljs.core.async.t_cljs$core$async45149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45149";

cljs.core.async.t_cljs$core$async45149.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45149");
});

cljs.core.async.__GT_t_cljs$core$async45149 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45149(f__$1,ch__$1,meta45150){
return (new cljs.core.async.t_cljs$core$async45149(f__$1,ch__$1,meta45150));
});

}

return (new cljs.core.async.t_cljs$core$async45149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45152 = (function (p,ch,meta45153){
this.p = p;
this.ch = ch;
this.meta45153 = meta45153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45154,meta45153__$1){
var self__ = this;
var _45154__$1 = this;
return (new cljs.core.async.t_cljs$core$async45152(self__.p,self__.ch,meta45153__$1));
});

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45154){
var self__ = this;
var _45154__$1 = this;
return self__.meta45153;
});

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45153","meta45153",1709950025,null)], null);
});

cljs.core.async.t_cljs$core$async45152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45152";

cljs.core.async.t_cljs$core$async45152.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45152");
});

cljs.core.async.__GT_t_cljs$core$async45152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45152(p__$1,ch__$1,meta45153){
return (new cljs.core.async.t_cljs$core$async45152(p__$1,ch__$1,meta45153));
});

}

return (new cljs.core.async.t_cljs$core$async45152(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45156 = arguments.length;
switch (G__45156) {
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
var c__30952__auto___45196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45196,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45196,out){
return (function (state_45177){
var state_val_45178 = (state_45177[(1)]);
if((state_val_45178 === (7))){
var inst_45173 = (state_45177[(2)]);
var state_45177__$1 = state_45177;
var statearr_45179_45197 = state_45177__$1;
(statearr_45179_45197[(2)] = inst_45173);

(statearr_45179_45197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (1))){
var state_45177__$1 = state_45177;
var statearr_45180_45198 = state_45177__$1;
(statearr_45180_45198[(2)] = null);

(statearr_45180_45198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (4))){
var inst_45159 = (state_45177[(7)]);
var inst_45159__$1 = (state_45177[(2)]);
var inst_45160 = (inst_45159__$1 == null);
var state_45177__$1 = (function (){var statearr_45181 = state_45177;
(statearr_45181[(7)] = inst_45159__$1);

return statearr_45181;
})();
if(cljs.core.truth_(inst_45160)){
var statearr_45182_45199 = state_45177__$1;
(statearr_45182_45199[(1)] = (5));

} else {
var statearr_45183_45200 = state_45177__$1;
(statearr_45183_45200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (6))){
var inst_45159 = (state_45177[(7)]);
var inst_45164 = p.call(null,inst_45159);
var state_45177__$1 = state_45177;
if(cljs.core.truth_(inst_45164)){
var statearr_45184_45201 = state_45177__$1;
(statearr_45184_45201[(1)] = (8));

} else {
var statearr_45185_45202 = state_45177__$1;
(statearr_45185_45202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (3))){
var inst_45175 = (state_45177[(2)]);
var state_45177__$1 = state_45177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45177__$1,inst_45175);
} else {
if((state_val_45178 === (2))){
var state_45177__$1 = state_45177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45177__$1,(4),ch);
} else {
if((state_val_45178 === (11))){
var inst_45167 = (state_45177[(2)]);
var state_45177__$1 = state_45177;
var statearr_45186_45203 = state_45177__$1;
(statearr_45186_45203[(2)] = inst_45167);

(statearr_45186_45203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (9))){
var state_45177__$1 = state_45177;
var statearr_45187_45204 = state_45177__$1;
(statearr_45187_45204[(2)] = null);

(statearr_45187_45204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (5))){
var inst_45162 = cljs.core.async.close_BANG_.call(null,out);
var state_45177__$1 = state_45177;
var statearr_45188_45205 = state_45177__$1;
(statearr_45188_45205[(2)] = inst_45162);

(statearr_45188_45205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (10))){
var inst_45170 = (state_45177[(2)]);
var state_45177__$1 = (function (){var statearr_45189 = state_45177;
(statearr_45189[(8)] = inst_45170);

return statearr_45189;
})();
var statearr_45190_45206 = state_45177__$1;
(statearr_45190_45206[(2)] = null);

(statearr_45190_45206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (8))){
var inst_45159 = (state_45177[(7)]);
var state_45177__$1 = state_45177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45177__$1,(11),out,inst_45159);
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
});})(c__30952__auto___45196,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45196,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45191 = [null,null,null,null,null,null,null,null,null];
(statearr_45191[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45191[(1)] = (1));

return statearr_45191;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45177){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45192){if((e45192 instanceof Object)){
var ex__30868__auto__ = e45192;
var statearr_45193_45207 = state_45177;
(statearr_45193_45207[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45208 = state_45177;
state_45177 = G__45208;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45196,out))
})();
var state__30954__auto__ = (function (){var statearr_45194 = f__30953__auto__.call(null);
(statearr_45194[(6)] = c__30952__auto___45196);

return statearr_45194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45196,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45210 = arguments.length;
switch (G__45210) {
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__){
return (function (state_45273){
var state_val_45274 = (state_45273[(1)]);
if((state_val_45274 === (7))){
var inst_45269 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45275_45313 = state_45273__$1;
(statearr_45275_45313[(2)] = inst_45269);

(statearr_45275_45313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (20))){
var inst_45239 = (state_45273[(7)]);
var inst_45250 = (state_45273[(2)]);
var inst_45251 = cljs.core.next.call(null,inst_45239);
var inst_45225 = inst_45251;
var inst_45226 = null;
var inst_45227 = (0);
var inst_45228 = (0);
var state_45273__$1 = (function (){var statearr_45276 = state_45273;
(statearr_45276[(8)] = inst_45228);

(statearr_45276[(9)] = inst_45225);

(statearr_45276[(10)] = inst_45226);

(statearr_45276[(11)] = inst_45227);

(statearr_45276[(12)] = inst_45250);

return statearr_45276;
})();
var statearr_45277_45314 = state_45273__$1;
(statearr_45277_45314[(2)] = null);

(statearr_45277_45314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (1))){
var state_45273__$1 = state_45273;
var statearr_45278_45315 = state_45273__$1;
(statearr_45278_45315[(2)] = null);

(statearr_45278_45315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (4))){
var inst_45214 = (state_45273[(13)]);
var inst_45214__$1 = (state_45273[(2)]);
var inst_45215 = (inst_45214__$1 == null);
var state_45273__$1 = (function (){var statearr_45279 = state_45273;
(statearr_45279[(13)] = inst_45214__$1);

return statearr_45279;
})();
if(cljs.core.truth_(inst_45215)){
var statearr_45280_45316 = state_45273__$1;
(statearr_45280_45316[(1)] = (5));

} else {
var statearr_45281_45317 = state_45273__$1;
(statearr_45281_45317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (15))){
var state_45273__$1 = state_45273;
var statearr_45285_45318 = state_45273__$1;
(statearr_45285_45318[(2)] = null);

(statearr_45285_45318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (21))){
var state_45273__$1 = state_45273;
var statearr_45286_45319 = state_45273__$1;
(statearr_45286_45319[(2)] = null);

(statearr_45286_45319[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (13))){
var inst_45228 = (state_45273[(8)]);
var inst_45225 = (state_45273[(9)]);
var inst_45226 = (state_45273[(10)]);
var inst_45227 = (state_45273[(11)]);
var inst_45235 = (state_45273[(2)]);
var inst_45236 = (inst_45228 + (1));
var tmp45282 = inst_45225;
var tmp45283 = inst_45226;
var tmp45284 = inst_45227;
var inst_45225__$1 = tmp45282;
var inst_45226__$1 = tmp45283;
var inst_45227__$1 = tmp45284;
var inst_45228__$1 = inst_45236;
var state_45273__$1 = (function (){var statearr_45287 = state_45273;
(statearr_45287[(8)] = inst_45228__$1);

(statearr_45287[(9)] = inst_45225__$1);

(statearr_45287[(10)] = inst_45226__$1);

(statearr_45287[(11)] = inst_45227__$1);

(statearr_45287[(14)] = inst_45235);

return statearr_45287;
})();
var statearr_45288_45320 = state_45273__$1;
(statearr_45288_45320[(2)] = null);

(statearr_45288_45320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (22))){
var state_45273__$1 = state_45273;
var statearr_45289_45321 = state_45273__$1;
(statearr_45289_45321[(2)] = null);

(statearr_45289_45321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (6))){
var inst_45214 = (state_45273[(13)]);
var inst_45223 = f.call(null,inst_45214);
var inst_45224 = cljs.core.seq.call(null,inst_45223);
var inst_45225 = inst_45224;
var inst_45226 = null;
var inst_45227 = (0);
var inst_45228 = (0);
var state_45273__$1 = (function (){var statearr_45290 = state_45273;
(statearr_45290[(8)] = inst_45228);

(statearr_45290[(9)] = inst_45225);

(statearr_45290[(10)] = inst_45226);

(statearr_45290[(11)] = inst_45227);

return statearr_45290;
})();
var statearr_45291_45322 = state_45273__$1;
(statearr_45291_45322[(2)] = null);

(statearr_45291_45322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (17))){
var inst_45239 = (state_45273[(7)]);
var inst_45243 = cljs.core.chunk_first.call(null,inst_45239);
var inst_45244 = cljs.core.chunk_rest.call(null,inst_45239);
var inst_45245 = cljs.core.count.call(null,inst_45243);
var inst_45225 = inst_45244;
var inst_45226 = inst_45243;
var inst_45227 = inst_45245;
var inst_45228 = (0);
var state_45273__$1 = (function (){var statearr_45292 = state_45273;
(statearr_45292[(8)] = inst_45228);

(statearr_45292[(9)] = inst_45225);

(statearr_45292[(10)] = inst_45226);

(statearr_45292[(11)] = inst_45227);

return statearr_45292;
})();
var statearr_45293_45323 = state_45273__$1;
(statearr_45293_45323[(2)] = null);

(statearr_45293_45323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (3))){
var inst_45271 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45273__$1,inst_45271);
} else {
if((state_val_45274 === (12))){
var inst_45259 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45294_45324 = state_45273__$1;
(statearr_45294_45324[(2)] = inst_45259);

(statearr_45294_45324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (2))){
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45273__$1,(4),in$);
} else {
if((state_val_45274 === (23))){
var inst_45267 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45295_45325 = state_45273__$1;
(statearr_45295_45325[(2)] = inst_45267);

(statearr_45295_45325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (19))){
var inst_45254 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45296_45326 = state_45273__$1;
(statearr_45296_45326[(2)] = inst_45254);

(statearr_45296_45326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (11))){
var inst_45239 = (state_45273[(7)]);
var inst_45225 = (state_45273[(9)]);
var inst_45239__$1 = cljs.core.seq.call(null,inst_45225);
var state_45273__$1 = (function (){var statearr_45297 = state_45273;
(statearr_45297[(7)] = inst_45239__$1);

return statearr_45297;
})();
if(inst_45239__$1){
var statearr_45298_45327 = state_45273__$1;
(statearr_45298_45327[(1)] = (14));

} else {
var statearr_45299_45328 = state_45273__$1;
(statearr_45299_45328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (9))){
var inst_45261 = (state_45273[(2)]);
var inst_45262 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45273__$1 = (function (){var statearr_45300 = state_45273;
(statearr_45300[(15)] = inst_45261);

return statearr_45300;
})();
if(cljs.core.truth_(inst_45262)){
var statearr_45301_45329 = state_45273__$1;
(statearr_45301_45329[(1)] = (21));

} else {
var statearr_45302_45330 = state_45273__$1;
(statearr_45302_45330[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (5))){
var inst_45217 = cljs.core.async.close_BANG_.call(null,out);
var state_45273__$1 = state_45273;
var statearr_45303_45331 = state_45273__$1;
(statearr_45303_45331[(2)] = inst_45217);

(statearr_45303_45331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (14))){
var inst_45239 = (state_45273[(7)]);
var inst_45241 = cljs.core.chunked_seq_QMARK_.call(null,inst_45239);
var state_45273__$1 = state_45273;
if(inst_45241){
var statearr_45304_45332 = state_45273__$1;
(statearr_45304_45332[(1)] = (17));

} else {
var statearr_45305_45333 = state_45273__$1;
(statearr_45305_45333[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (16))){
var inst_45257 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45306_45334 = state_45273__$1;
(statearr_45306_45334[(2)] = inst_45257);

(statearr_45306_45334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (10))){
var inst_45228 = (state_45273[(8)]);
var inst_45226 = (state_45273[(10)]);
var inst_45233 = cljs.core._nth.call(null,inst_45226,inst_45228);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45273__$1,(13),out,inst_45233);
} else {
if((state_val_45274 === (18))){
var inst_45239 = (state_45273[(7)]);
var inst_45248 = cljs.core.first.call(null,inst_45239);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45273__$1,(20),out,inst_45248);
} else {
if((state_val_45274 === (8))){
var inst_45228 = (state_45273[(8)]);
var inst_45227 = (state_45273[(11)]);
var inst_45230 = (inst_45228 < inst_45227);
var inst_45231 = inst_45230;
var state_45273__$1 = state_45273;
if(cljs.core.truth_(inst_45231)){
var statearr_45307_45335 = state_45273__$1;
(statearr_45307_45335[(1)] = (10));

} else {
var statearr_45308_45336 = state_45273__$1;
(statearr_45308_45336[(1)] = (11));

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
});})(c__30952__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_45309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45309[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__);

(statearr_45309[(1)] = (1));

return statearr_45309;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1 = (function (state_45273){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45310){if((e45310 instanceof Object)){
var ex__30868__auto__ = e45310;
var statearr_45311_45337 = state_45273;
(statearr_45311_45337[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45338 = state_45273;
state_45273 = G__45338;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__ = function(state_45273){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1.call(this,state_45273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_45312 = f__30953__auto__.call(null);
(statearr_45312[(6)] = c__30952__auto__);

return statearr_45312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__))
);

return c__30952__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45340 = arguments.length;
switch (G__45340) {
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
var G__45343 = arguments.length;
switch (G__45343) {
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
var G__45346 = arguments.length;
switch (G__45346) {
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
var c__30952__auto___45393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45393,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45393,out){
return (function (state_45370){
var state_val_45371 = (state_45370[(1)]);
if((state_val_45371 === (7))){
var inst_45365 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45372_45394 = state_45370__$1;
(statearr_45372_45394[(2)] = inst_45365);

(statearr_45372_45394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (1))){
var inst_45347 = null;
var state_45370__$1 = (function (){var statearr_45373 = state_45370;
(statearr_45373[(7)] = inst_45347);

return statearr_45373;
})();
var statearr_45374_45395 = state_45370__$1;
(statearr_45374_45395[(2)] = null);

(statearr_45374_45395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (4))){
var inst_45350 = (state_45370[(8)]);
var inst_45350__$1 = (state_45370[(2)]);
var inst_45351 = (inst_45350__$1 == null);
var inst_45352 = cljs.core.not.call(null,inst_45351);
var state_45370__$1 = (function (){var statearr_45375 = state_45370;
(statearr_45375[(8)] = inst_45350__$1);

return statearr_45375;
})();
if(inst_45352){
var statearr_45376_45396 = state_45370__$1;
(statearr_45376_45396[(1)] = (5));

} else {
var statearr_45377_45397 = state_45370__$1;
(statearr_45377_45397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (6))){
var state_45370__$1 = state_45370;
var statearr_45378_45398 = state_45370__$1;
(statearr_45378_45398[(2)] = null);

(statearr_45378_45398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (3))){
var inst_45367 = (state_45370[(2)]);
var inst_45368 = cljs.core.async.close_BANG_.call(null,out);
var state_45370__$1 = (function (){var statearr_45379 = state_45370;
(statearr_45379[(9)] = inst_45367);

return statearr_45379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45370__$1,inst_45368);
} else {
if((state_val_45371 === (2))){
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45370__$1,(4),ch);
} else {
if((state_val_45371 === (11))){
var inst_45350 = (state_45370[(8)]);
var inst_45359 = (state_45370[(2)]);
var inst_45347 = inst_45350;
var state_45370__$1 = (function (){var statearr_45380 = state_45370;
(statearr_45380[(10)] = inst_45359);

(statearr_45380[(7)] = inst_45347);

return statearr_45380;
})();
var statearr_45381_45399 = state_45370__$1;
(statearr_45381_45399[(2)] = null);

(statearr_45381_45399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (9))){
var inst_45350 = (state_45370[(8)]);
var state_45370__$1 = state_45370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45370__$1,(11),out,inst_45350);
} else {
if((state_val_45371 === (5))){
var inst_45347 = (state_45370[(7)]);
var inst_45350 = (state_45370[(8)]);
var inst_45354 = cljs.core._EQ_.call(null,inst_45350,inst_45347);
var state_45370__$1 = state_45370;
if(inst_45354){
var statearr_45383_45400 = state_45370__$1;
(statearr_45383_45400[(1)] = (8));

} else {
var statearr_45384_45401 = state_45370__$1;
(statearr_45384_45401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (10))){
var inst_45362 = (state_45370[(2)]);
var state_45370__$1 = state_45370;
var statearr_45385_45402 = state_45370__$1;
(statearr_45385_45402[(2)] = inst_45362);

(statearr_45385_45402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45371 === (8))){
var inst_45347 = (state_45370[(7)]);
var tmp45382 = inst_45347;
var inst_45347__$1 = tmp45382;
var state_45370__$1 = (function (){var statearr_45386 = state_45370;
(statearr_45386[(7)] = inst_45347__$1);

return statearr_45386;
})();
var statearr_45387_45403 = state_45370__$1;
(statearr_45387_45403[(2)] = null);

(statearr_45387_45403[(1)] = (2));


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
});})(c__30952__auto___45393,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45393,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45388[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45388[(1)] = (1));

return statearr_45388;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45370){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45389){if((e45389 instanceof Object)){
var ex__30868__auto__ = e45389;
var statearr_45390_45404 = state_45370;
(statearr_45390_45404[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45405 = state_45370;
state_45370 = G__45405;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45393,out))
})();
var state__30954__auto__ = (function (){var statearr_45391 = f__30953__auto__.call(null);
(statearr_45391[(6)] = c__30952__auto___45393);

return statearr_45391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45393,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45407 = arguments.length;
switch (G__45407) {
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
var c__30952__auto___45473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45473,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45473,out){
return (function (state_45445){
var state_val_45446 = (state_45445[(1)]);
if((state_val_45446 === (7))){
var inst_45441 = (state_45445[(2)]);
var state_45445__$1 = state_45445;
var statearr_45447_45474 = state_45445__$1;
(statearr_45447_45474[(2)] = inst_45441);

(statearr_45447_45474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (1))){
var inst_45408 = (new Array(n));
var inst_45409 = inst_45408;
var inst_45410 = (0);
var state_45445__$1 = (function (){var statearr_45448 = state_45445;
(statearr_45448[(7)] = inst_45409);

(statearr_45448[(8)] = inst_45410);

return statearr_45448;
})();
var statearr_45449_45475 = state_45445__$1;
(statearr_45449_45475[(2)] = null);

(statearr_45449_45475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (4))){
var inst_45413 = (state_45445[(9)]);
var inst_45413__$1 = (state_45445[(2)]);
var inst_45414 = (inst_45413__$1 == null);
var inst_45415 = cljs.core.not.call(null,inst_45414);
var state_45445__$1 = (function (){var statearr_45450 = state_45445;
(statearr_45450[(9)] = inst_45413__$1);

return statearr_45450;
})();
if(inst_45415){
var statearr_45451_45476 = state_45445__$1;
(statearr_45451_45476[(1)] = (5));

} else {
var statearr_45452_45477 = state_45445__$1;
(statearr_45452_45477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (15))){
var inst_45435 = (state_45445[(2)]);
var state_45445__$1 = state_45445;
var statearr_45453_45478 = state_45445__$1;
(statearr_45453_45478[(2)] = inst_45435);

(statearr_45453_45478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (13))){
var state_45445__$1 = state_45445;
var statearr_45454_45479 = state_45445__$1;
(statearr_45454_45479[(2)] = null);

(statearr_45454_45479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (6))){
var inst_45410 = (state_45445[(8)]);
var inst_45431 = (inst_45410 > (0));
var state_45445__$1 = state_45445;
if(cljs.core.truth_(inst_45431)){
var statearr_45455_45480 = state_45445__$1;
(statearr_45455_45480[(1)] = (12));

} else {
var statearr_45456_45481 = state_45445__$1;
(statearr_45456_45481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (3))){
var inst_45443 = (state_45445[(2)]);
var state_45445__$1 = state_45445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45445__$1,inst_45443);
} else {
if((state_val_45446 === (12))){
var inst_45409 = (state_45445[(7)]);
var inst_45433 = cljs.core.vec.call(null,inst_45409);
var state_45445__$1 = state_45445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45445__$1,(15),out,inst_45433);
} else {
if((state_val_45446 === (2))){
var state_45445__$1 = state_45445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45445__$1,(4),ch);
} else {
if((state_val_45446 === (11))){
var inst_45425 = (state_45445[(2)]);
var inst_45426 = (new Array(n));
var inst_45409 = inst_45426;
var inst_45410 = (0);
var state_45445__$1 = (function (){var statearr_45457 = state_45445;
(statearr_45457[(7)] = inst_45409);

(statearr_45457[(10)] = inst_45425);

(statearr_45457[(8)] = inst_45410);

return statearr_45457;
})();
var statearr_45458_45482 = state_45445__$1;
(statearr_45458_45482[(2)] = null);

(statearr_45458_45482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (9))){
var inst_45409 = (state_45445[(7)]);
var inst_45423 = cljs.core.vec.call(null,inst_45409);
var state_45445__$1 = state_45445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45445__$1,(11),out,inst_45423);
} else {
if((state_val_45446 === (5))){
var inst_45409 = (state_45445[(7)]);
var inst_45413 = (state_45445[(9)]);
var inst_45410 = (state_45445[(8)]);
var inst_45418 = (state_45445[(11)]);
var inst_45417 = (inst_45409[inst_45410] = inst_45413);
var inst_45418__$1 = (inst_45410 + (1));
var inst_45419 = (inst_45418__$1 < n);
var state_45445__$1 = (function (){var statearr_45459 = state_45445;
(statearr_45459[(12)] = inst_45417);

(statearr_45459[(11)] = inst_45418__$1);

return statearr_45459;
})();
if(cljs.core.truth_(inst_45419)){
var statearr_45460_45483 = state_45445__$1;
(statearr_45460_45483[(1)] = (8));

} else {
var statearr_45461_45484 = state_45445__$1;
(statearr_45461_45484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (14))){
var inst_45438 = (state_45445[(2)]);
var inst_45439 = cljs.core.async.close_BANG_.call(null,out);
var state_45445__$1 = (function (){var statearr_45463 = state_45445;
(statearr_45463[(13)] = inst_45438);

return statearr_45463;
})();
var statearr_45464_45485 = state_45445__$1;
(statearr_45464_45485[(2)] = inst_45439);

(statearr_45464_45485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (10))){
var inst_45429 = (state_45445[(2)]);
var state_45445__$1 = state_45445;
var statearr_45465_45486 = state_45445__$1;
(statearr_45465_45486[(2)] = inst_45429);

(statearr_45465_45486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (8))){
var inst_45409 = (state_45445[(7)]);
var inst_45418 = (state_45445[(11)]);
var tmp45462 = inst_45409;
var inst_45409__$1 = tmp45462;
var inst_45410 = inst_45418;
var state_45445__$1 = (function (){var statearr_45466 = state_45445;
(statearr_45466[(7)] = inst_45409__$1);

(statearr_45466[(8)] = inst_45410);

return statearr_45466;
})();
var statearr_45467_45487 = state_45445__$1;
(statearr_45467_45487[(2)] = null);

(statearr_45467_45487[(1)] = (2));


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
});})(c__30952__auto___45473,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45473,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45468[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45468[(1)] = (1));

return statearr_45468;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45445){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45469){if((e45469 instanceof Object)){
var ex__30868__auto__ = e45469;
var statearr_45470_45488 = state_45445;
(statearr_45470_45488[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45489 = state_45445;
state_45445 = G__45489;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45473,out))
})();
var state__30954__auto__ = (function (){var statearr_45471 = f__30953__auto__.call(null);
(statearr_45471[(6)] = c__30952__auto___45473);

return statearr_45471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45473,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45491 = arguments.length;
switch (G__45491) {
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
var c__30952__auto___45561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45561,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45561,out){
return (function (state_45533){
var state_val_45534 = (state_45533[(1)]);
if((state_val_45534 === (7))){
var inst_45529 = (state_45533[(2)]);
var state_45533__$1 = state_45533;
var statearr_45535_45562 = state_45533__$1;
(statearr_45535_45562[(2)] = inst_45529);

(statearr_45535_45562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (1))){
var inst_45492 = [];
var inst_45493 = inst_45492;
var inst_45494 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45533__$1 = (function (){var statearr_45536 = state_45533;
(statearr_45536[(7)] = inst_45494);

(statearr_45536[(8)] = inst_45493);

return statearr_45536;
})();
var statearr_45537_45563 = state_45533__$1;
(statearr_45537_45563[(2)] = null);

(statearr_45537_45563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (4))){
var inst_45497 = (state_45533[(9)]);
var inst_45497__$1 = (state_45533[(2)]);
var inst_45498 = (inst_45497__$1 == null);
var inst_45499 = cljs.core.not.call(null,inst_45498);
var state_45533__$1 = (function (){var statearr_45538 = state_45533;
(statearr_45538[(9)] = inst_45497__$1);

return statearr_45538;
})();
if(inst_45499){
var statearr_45539_45564 = state_45533__$1;
(statearr_45539_45564[(1)] = (5));

} else {
var statearr_45540_45565 = state_45533__$1;
(statearr_45540_45565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (15))){
var inst_45523 = (state_45533[(2)]);
var state_45533__$1 = state_45533;
var statearr_45541_45566 = state_45533__$1;
(statearr_45541_45566[(2)] = inst_45523);

(statearr_45541_45566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (13))){
var state_45533__$1 = state_45533;
var statearr_45542_45567 = state_45533__$1;
(statearr_45542_45567[(2)] = null);

(statearr_45542_45567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (6))){
var inst_45493 = (state_45533[(8)]);
var inst_45518 = inst_45493.length;
var inst_45519 = (inst_45518 > (0));
var state_45533__$1 = state_45533;
if(cljs.core.truth_(inst_45519)){
var statearr_45543_45568 = state_45533__$1;
(statearr_45543_45568[(1)] = (12));

} else {
var statearr_45544_45569 = state_45533__$1;
(statearr_45544_45569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (3))){
var inst_45531 = (state_45533[(2)]);
var state_45533__$1 = state_45533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45533__$1,inst_45531);
} else {
if((state_val_45534 === (12))){
var inst_45493 = (state_45533[(8)]);
var inst_45521 = cljs.core.vec.call(null,inst_45493);
var state_45533__$1 = state_45533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45533__$1,(15),out,inst_45521);
} else {
if((state_val_45534 === (2))){
var state_45533__$1 = state_45533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45533__$1,(4),ch);
} else {
if((state_val_45534 === (11))){
var inst_45497 = (state_45533[(9)]);
var inst_45501 = (state_45533[(10)]);
var inst_45511 = (state_45533[(2)]);
var inst_45512 = [];
var inst_45513 = inst_45512.push(inst_45497);
var inst_45493 = inst_45512;
var inst_45494 = inst_45501;
var state_45533__$1 = (function (){var statearr_45545 = state_45533;
(statearr_45545[(7)] = inst_45494);

(statearr_45545[(8)] = inst_45493);

(statearr_45545[(11)] = inst_45513);

(statearr_45545[(12)] = inst_45511);

return statearr_45545;
})();
var statearr_45546_45570 = state_45533__$1;
(statearr_45546_45570[(2)] = null);

(statearr_45546_45570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (9))){
var inst_45493 = (state_45533[(8)]);
var inst_45509 = cljs.core.vec.call(null,inst_45493);
var state_45533__$1 = state_45533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45533__$1,(11),out,inst_45509);
} else {
if((state_val_45534 === (5))){
var inst_45494 = (state_45533[(7)]);
var inst_45497 = (state_45533[(9)]);
var inst_45501 = (state_45533[(10)]);
var inst_45501__$1 = f.call(null,inst_45497);
var inst_45502 = cljs.core._EQ_.call(null,inst_45501__$1,inst_45494);
var inst_45503 = cljs.core.keyword_identical_QMARK_.call(null,inst_45494,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45504 = (inst_45502) || (inst_45503);
var state_45533__$1 = (function (){var statearr_45547 = state_45533;
(statearr_45547[(10)] = inst_45501__$1);

return statearr_45547;
})();
if(cljs.core.truth_(inst_45504)){
var statearr_45548_45571 = state_45533__$1;
(statearr_45548_45571[(1)] = (8));

} else {
var statearr_45549_45572 = state_45533__$1;
(statearr_45549_45572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (14))){
var inst_45526 = (state_45533[(2)]);
var inst_45527 = cljs.core.async.close_BANG_.call(null,out);
var state_45533__$1 = (function (){var statearr_45551 = state_45533;
(statearr_45551[(13)] = inst_45526);

return statearr_45551;
})();
var statearr_45552_45573 = state_45533__$1;
(statearr_45552_45573[(2)] = inst_45527);

(statearr_45552_45573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (10))){
var inst_45516 = (state_45533[(2)]);
var state_45533__$1 = state_45533;
var statearr_45553_45574 = state_45533__$1;
(statearr_45553_45574[(2)] = inst_45516);

(statearr_45553_45574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45534 === (8))){
var inst_45497 = (state_45533[(9)]);
var inst_45493 = (state_45533[(8)]);
var inst_45501 = (state_45533[(10)]);
var inst_45506 = inst_45493.push(inst_45497);
var tmp45550 = inst_45493;
var inst_45493__$1 = tmp45550;
var inst_45494 = inst_45501;
var state_45533__$1 = (function (){var statearr_45554 = state_45533;
(statearr_45554[(7)] = inst_45494);

(statearr_45554[(8)] = inst_45493__$1);

(statearr_45554[(14)] = inst_45506);

return statearr_45554;
})();
var statearr_45555_45575 = state_45533__$1;
(statearr_45555_45575[(2)] = null);

(statearr_45555_45575[(1)] = (2));


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
});})(c__30952__auto___45561,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45561,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45556[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45556[(1)] = (1));

return statearr_45556;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45533){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45557){if((e45557 instanceof Object)){
var ex__30868__auto__ = e45557;
var statearr_45558_45576 = state_45533;
(statearr_45558_45576[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45577 = state_45533;
state_45533 = G__45577;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45561,out))
})();
var state__30954__auto__ = (function (){var statearr_45559 = f__30953__auto__.call(null);
(statearr_45559[(6)] = c__30952__auto___45561);

return statearr_45559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45561,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513846766630
