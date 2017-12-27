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
var G__43783 = arguments.length;
switch (G__43783) {
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
if(typeof cljs.core.async.t_cljs$core$async43784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43784 = (function (f,blockable,meta43785){
this.f = f;
this.blockable = blockable;
this.meta43785 = meta43785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43786,meta43785__$1){
var self__ = this;
var _43786__$1 = this;
return (new cljs.core.async.t_cljs$core$async43784(self__.f,self__.blockable,meta43785__$1));
});

cljs.core.async.t_cljs$core$async43784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43786){
var self__ = this;
var _43786__$1 = this;
return self__.meta43785;
});

cljs.core.async.t_cljs$core$async43784.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43785","meta43785",-1521753667,null)], null);
});

cljs.core.async.t_cljs$core$async43784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43784";

cljs.core.async.t_cljs$core$async43784.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43784");
});

cljs.core.async.__GT_t_cljs$core$async43784 = (function cljs$core$async$__GT_t_cljs$core$async43784(f__$1,blockable__$1,meta43785){
return (new cljs.core.async.t_cljs$core$async43784(f__$1,blockable__$1,meta43785));
});

}

return (new cljs.core.async.t_cljs$core$async43784(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43790 = arguments.length;
switch (G__43790) {
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
var G__43793 = arguments.length;
switch (G__43793) {
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
var G__43796 = arguments.length;
switch (G__43796) {
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
var val_43798 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43798);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43798,ret){
return (function (){
return fn1.call(null,val_43798);
});})(val_43798,ret))
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
var G__43800 = arguments.length;
switch (G__43800) {
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
var n__28140__auto___43802 = n;
var x_43803 = (0);
while(true){
if((x_43803 < n__28140__auto___43802)){
(a[x_43803] = (0));

var G__43804 = (x_43803 + (1));
x_43803 = G__43804;
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

var G__43805 = (i + (1));
i = G__43805;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43806 = (function (flag,meta43807){
this.flag = flag;
this.meta43807 = meta43807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43808,meta43807__$1){
var self__ = this;
var _43808__$1 = this;
return (new cljs.core.async.t_cljs$core$async43806(self__.flag,meta43807__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43808){
var self__ = this;
var _43808__$1 = this;
return self__.meta43807;
});})(flag))
;

cljs.core.async.t_cljs$core$async43806.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43806.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43807","meta43807",-940123337,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43806";

cljs.core.async.t_cljs$core$async43806.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43806");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43806 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43806(flag__$1,meta43807){
return (new cljs.core.async.t_cljs$core$async43806(flag__$1,meta43807));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43806(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43809 = (function (flag,cb,meta43810){
this.flag = flag;
this.cb = cb;
this.meta43810 = meta43810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43811,meta43810__$1){
var self__ = this;
var _43811__$1 = this;
return (new cljs.core.async.t_cljs$core$async43809(self__.flag,self__.cb,meta43810__$1));
});

cljs.core.async.t_cljs$core$async43809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43811){
var self__ = this;
var _43811__$1 = this;
return self__.meta43810;
});

cljs.core.async.t_cljs$core$async43809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43810","meta43810",-1949878713,null)], null);
});

cljs.core.async.t_cljs$core$async43809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43809";

cljs.core.async.t_cljs$core$async43809.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43809");
});

cljs.core.async.__GT_t_cljs$core$async43809 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43809(flag__$1,cb__$1,meta43810){
return (new cljs.core.async.t_cljs$core$async43809(flag__$1,cb__$1,meta43810));
});

}

return (new cljs.core.async.t_cljs$core$async43809(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43812_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43812_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43813_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43813_SHARP_,port], null));
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
var G__43814 = (i + (1));
i = G__43814;
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
var len__28364__auto___43820 = arguments.length;
var i__28365__auto___43821 = (0);
while(true){
if((i__28365__auto___43821 < len__28364__auto___43820)){
args__28371__auto__.push((arguments[i__28365__auto___43821]));

var G__43822 = (i__28365__auto___43821 + (1));
i__28365__auto___43821 = G__43822;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43817){
var map__43818 = p__43817;
var map__43818__$1 = ((((!((map__43818 == null)))?((((map__43818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43818):map__43818);
var opts = map__43818__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43815){
var G__43816 = cljs.core.first.call(null,seq43815);
var seq43815__$1 = cljs.core.next.call(null,seq43815);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43816,seq43815__$1);
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
var G__43824 = arguments.length;
switch (G__43824) {
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
var c__30952__auto___43870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___43870){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___43870){
return (function (state_43848){
var state_val_43849 = (state_43848[(1)]);
if((state_val_43849 === (7))){
var inst_43844 = (state_43848[(2)]);
var state_43848__$1 = state_43848;
var statearr_43850_43871 = state_43848__$1;
(statearr_43850_43871[(2)] = inst_43844);

(statearr_43850_43871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (1))){
var state_43848__$1 = state_43848;
var statearr_43851_43872 = state_43848__$1;
(statearr_43851_43872[(2)] = null);

(statearr_43851_43872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (4))){
var inst_43827 = (state_43848[(7)]);
var inst_43827__$1 = (state_43848[(2)]);
var inst_43828 = (inst_43827__$1 == null);
var state_43848__$1 = (function (){var statearr_43852 = state_43848;
(statearr_43852[(7)] = inst_43827__$1);

return statearr_43852;
})();
if(cljs.core.truth_(inst_43828)){
var statearr_43853_43873 = state_43848__$1;
(statearr_43853_43873[(1)] = (5));

} else {
var statearr_43854_43874 = state_43848__$1;
(statearr_43854_43874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (13))){
var state_43848__$1 = state_43848;
var statearr_43855_43875 = state_43848__$1;
(statearr_43855_43875[(2)] = null);

(statearr_43855_43875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (6))){
var inst_43827 = (state_43848[(7)]);
var state_43848__$1 = state_43848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43848__$1,(11),to,inst_43827);
} else {
if((state_val_43849 === (3))){
var inst_43846 = (state_43848[(2)]);
var state_43848__$1 = state_43848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43848__$1,inst_43846);
} else {
if((state_val_43849 === (12))){
var state_43848__$1 = state_43848;
var statearr_43856_43876 = state_43848__$1;
(statearr_43856_43876[(2)] = null);

(statearr_43856_43876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (2))){
var state_43848__$1 = state_43848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43848__$1,(4),from);
} else {
if((state_val_43849 === (11))){
var inst_43837 = (state_43848[(2)]);
var state_43848__$1 = state_43848;
if(cljs.core.truth_(inst_43837)){
var statearr_43857_43877 = state_43848__$1;
(statearr_43857_43877[(1)] = (12));

} else {
var statearr_43858_43878 = state_43848__$1;
(statearr_43858_43878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (9))){
var state_43848__$1 = state_43848;
var statearr_43859_43879 = state_43848__$1;
(statearr_43859_43879[(2)] = null);

(statearr_43859_43879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (5))){
var state_43848__$1 = state_43848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43860_43880 = state_43848__$1;
(statearr_43860_43880[(1)] = (8));

} else {
var statearr_43861_43881 = state_43848__$1;
(statearr_43861_43881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (14))){
var inst_43842 = (state_43848[(2)]);
var state_43848__$1 = state_43848;
var statearr_43862_43882 = state_43848__$1;
(statearr_43862_43882[(2)] = inst_43842);

(statearr_43862_43882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (10))){
var inst_43834 = (state_43848[(2)]);
var state_43848__$1 = state_43848;
var statearr_43863_43883 = state_43848__$1;
(statearr_43863_43883[(2)] = inst_43834);

(statearr_43863_43883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43849 === (8))){
var inst_43831 = cljs.core.async.close_BANG_.call(null,to);
var state_43848__$1 = state_43848;
var statearr_43864_43884 = state_43848__$1;
(statearr_43864_43884[(2)] = inst_43831);

(statearr_43864_43884[(1)] = (10));


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
});})(c__30952__auto___43870))
;
return ((function (switch__30864__auto__,c__30952__auto___43870){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_43865 = [null,null,null,null,null,null,null,null];
(statearr_43865[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_43865[(1)] = (1));

return statearr_43865;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_43848){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43866){if((e43866 instanceof Object)){
var ex__30868__auto__ = e43866;
var statearr_43867_43885 = state_43848;
(statearr_43867_43885[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43886 = state_43848;
state_43848 = G__43886;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_43848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_43848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___43870))
})();
var state__30954__auto__ = (function (){var statearr_43868 = f__30953__auto__.call(null);
(statearr_43868[(6)] = c__30952__auto___43870);

return statearr_43868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___43870))
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
return (function (p__43887){
var vec__43888 = p__43887;
var v = cljs.core.nth.call(null,vec__43888,(0),null);
var p = cljs.core.nth.call(null,vec__43888,(1),null);
var job = vec__43888;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30952__auto___44059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44059,res,vec__43888,v,p,job,jobs,results){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44059,res,vec__43888,v,p,job,jobs,results){
return (function (state_43895){
var state_val_43896 = (state_43895[(1)]);
if((state_val_43896 === (1))){
var state_43895__$1 = state_43895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43895__$1,(2),res,v);
} else {
if((state_val_43896 === (2))){
var inst_43892 = (state_43895[(2)]);
var inst_43893 = cljs.core.async.close_BANG_.call(null,res);
var state_43895__$1 = (function (){var statearr_43897 = state_43895;
(statearr_43897[(7)] = inst_43892);

return statearr_43897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43895__$1,inst_43893);
} else {
return null;
}
}
});})(c__30952__auto___44059,res,vec__43888,v,p,job,jobs,results))
;
return ((function (switch__30864__auto__,c__30952__auto___44059,res,vec__43888,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43898 = [null,null,null,null,null,null,null,null];
(statearr_43898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43898[(1)] = (1));

return statearr_43898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43895){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43899){if((e43899 instanceof Object)){
var ex__30868__auto__ = e43899;
var statearr_43900_44060 = state_43895;
(statearr_43900_44060[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44061 = state_43895;
state_43895 = G__44061;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44059,res,vec__43888,v,p,job,jobs,results))
})();
var state__30954__auto__ = (function (){var statearr_43901 = f__30953__auto__.call(null);
(statearr_43901[(6)] = c__30952__auto___44059);

return statearr_43901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44059,res,vec__43888,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43902){
var vec__43903 = p__43902;
var v = cljs.core.nth.call(null,vec__43903,(0),null);
var p = cljs.core.nth.call(null,vec__43903,(1),null);
var job = vec__43903;
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
var n__28140__auto___44062 = n;
var __44063 = (0);
while(true){
if((__44063 < n__28140__auto___44062)){
var G__43906_44064 = type;
var G__43906_44065__$1 = (((G__43906_44064 instanceof cljs.core.Keyword))?G__43906_44064.fqn:null);
switch (G__43906_44065__$1) {
case "compute":
var c__30952__auto___44067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44063,c__30952__auto___44067,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (__44063,c__30952__auto___44067,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async){
return (function (state_43919){
var state_val_43920 = (state_43919[(1)]);
if((state_val_43920 === (1))){
var state_43919__$1 = state_43919;
var statearr_43921_44068 = state_43919__$1;
(statearr_43921_44068[(2)] = null);

(statearr_43921_44068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (2))){
var state_43919__$1 = state_43919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43919__$1,(4),jobs);
} else {
if((state_val_43920 === (3))){
var inst_43917 = (state_43919[(2)]);
var state_43919__$1 = state_43919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43919__$1,inst_43917);
} else {
if((state_val_43920 === (4))){
var inst_43909 = (state_43919[(2)]);
var inst_43910 = process.call(null,inst_43909);
var state_43919__$1 = state_43919;
if(cljs.core.truth_(inst_43910)){
var statearr_43922_44069 = state_43919__$1;
(statearr_43922_44069[(1)] = (5));

} else {
var statearr_43923_44070 = state_43919__$1;
(statearr_43923_44070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (5))){
var state_43919__$1 = state_43919;
var statearr_43924_44071 = state_43919__$1;
(statearr_43924_44071[(2)] = null);

(statearr_43924_44071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (6))){
var state_43919__$1 = state_43919;
var statearr_43925_44072 = state_43919__$1;
(statearr_43925_44072[(2)] = null);

(statearr_43925_44072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (7))){
var inst_43915 = (state_43919[(2)]);
var state_43919__$1 = state_43919;
var statearr_43926_44073 = state_43919__$1;
(statearr_43926_44073[(2)] = inst_43915);

(statearr_43926_44073[(1)] = (3));


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
});})(__44063,c__30952__auto___44067,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async))
;
return ((function (__44063,switch__30864__auto__,c__30952__auto___44067,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43927 = [null,null,null,null,null,null,null];
(statearr_43927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43927[(1)] = (1));

return statearr_43927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43919){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43928){if((e43928 instanceof Object)){
var ex__30868__auto__ = e43928;
var statearr_43929_44074 = state_43919;
(statearr_43929_44074[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44075 = state_43919;
state_43919 = G__44075;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(__44063,switch__30864__auto__,c__30952__auto___44067,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_43930 = f__30953__auto__.call(null);
(statearr_43930[(6)] = c__30952__auto___44067);

return statearr_43930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(__44063,c__30952__auto___44067,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async))
);


break;
case "async":
var c__30952__auto___44076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44063,c__30952__auto___44076,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (__44063,c__30952__auto___44076,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async){
return (function (state_43943){
var state_val_43944 = (state_43943[(1)]);
if((state_val_43944 === (1))){
var state_43943__$1 = state_43943;
var statearr_43945_44077 = state_43943__$1;
(statearr_43945_44077[(2)] = null);

(statearr_43945_44077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43944 === (2))){
var state_43943__$1 = state_43943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43943__$1,(4),jobs);
} else {
if((state_val_43944 === (3))){
var inst_43941 = (state_43943[(2)]);
var state_43943__$1 = state_43943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43943__$1,inst_43941);
} else {
if((state_val_43944 === (4))){
var inst_43933 = (state_43943[(2)]);
var inst_43934 = async.call(null,inst_43933);
var state_43943__$1 = state_43943;
if(cljs.core.truth_(inst_43934)){
var statearr_43946_44078 = state_43943__$1;
(statearr_43946_44078[(1)] = (5));

} else {
var statearr_43947_44079 = state_43943__$1;
(statearr_43947_44079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43944 === (5))){
var state_43943__$1 = state_43943;
var statearr_43948_44080 = state_43943__$1;
(statearr_43948_44080[(2)] = null);

(statearr_43948_44080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43944 === (6))){
var state_43943__$1 = state_43943;
var statearr_43949_44081 = state_43943__$1;
(statearr_43949_44081[(2)] = null);

(statearr_43949_44081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43944 === (7))){
var inst_43939 = (state_43943[(2)]);
var state_43943__$1 = state_43943;
var statearr_43950_44082 = state_43943__$1;
(statearr_43950_44082[(2)] = inst_43939);

(statearr_43950_44082[(1)] = (3));


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
});})(__44063,c__30952__auto___44076,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async))
;
return ((function (__44063,switch__30864__auto__,c__30952__auto___44076,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43951 = [null,null,null,null,null,null,null];
(statearr_43951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43951[(1)] = (1));

return statearr_43951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_43943){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_43943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e43952){if((e43952 instanceof Object)){
var ex__30868__auto__ = e43952;
var statearr_43953_44083 = state_43943;
(statearr_43953_44083[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44084 = state_43943;
state_43943 = G__44084;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_43943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_43943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(__44063,switch__30864__auto__,c__30952__auto___44076,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_43954 = f__30953__auto__.call(null);
(statearr_43954[(6)] = c__30952__auto___44076);

return statearr_43954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(__44063,c__30952__auto___44076,G__43906_44064,G__43906_44065__$1,n__28140__auto___44062,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43906_44065__$1)].join('')));

}

var G__44085 = (__44063 + (1));
__44063 = G__44085;
continue;
} else {
}
break;
}

var c__30952__auto___44086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44086,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44086,jobs,results,process,async){
return (function (state_43976){
var state_val_43977 = (state_43976[(1)]);
if((state_val_43977 === (1))){
var state_43976__$1 = state_43976;
var statearr_43978_44087 = state_43976__$1;
(statearr_43978_44087[(2)] = null);

(statearr_43978_44087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (2))){
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43976__$1,(4),from);
} else {
if((state_val_43977 === (3))){
var inst_43974 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43976__$1,inst_43974);
} else {
if((state_val_43977 === (4))){
var inst_43957 = (state_43976[(7)]);
var inst_43957__$1 = (state_43976[(2)]);
var inst_43958 = (inst_43957__$1 == null);
var state_43976__$1 = (function (){var statearr_43979 = state_43976;
(statearr_43979[(7)] = inst_43957__$1);

return statearr_43979;
})();
if(cljs.core.truth_(inst_43958)){
var statearr_43980_44088 = state_43976__$1;
(statearr_43980_44088[(1)] = (5));

} else {
var statearr_43981_44089 = state_43976__$1;
(statearr_43981_44089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (5))){
var inst_43960 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43976__$1 = state_43976;
var statearr_43982_44090 = state_43976__$1;
(statearr_43982_44090[(2)] = inst_43960);

(statearr_43982_44090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (6))){
var inst_43957 = (state_43976[(7)]);
var inst_43962 = (state_43976[(8)]);
var inst_43962__$1 = cljs.core.async.chan.call(null,(1));
var inst_43963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43964 = [inst_43957,inst_43962__$1];
var inst_43965 = (new cljs.core.PersistentVector(null,2,(5),inst_43963,inst_43964,null));
var state_43976__$1 = (function (){var statearr_43983 = state_43976;
(statearr_43983[(8)] = inst_43962__$1);

return statearr_43983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43976__$1,(8),jobs,inst_43965);
} else {
if((state_val_43977 === (7))){
var inst_43972 = (state_43976[(2)]);
var state_43976__$1 = state_43976;
var statearr_43984_44091 = state_43976__$1;
(statearr_43984_44091[(2)] = inst_43972);

(statearr_43984_44091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43977 === (8))){
var inst_43962 = (state_43976[(8)]);
var inst_43967 = (state_43976[(2)]);
var state_43976__$1 = (function (){var statearr_43985 = state_43976;
(statearr_43985[(9)] = inst_43967);

return statearr_43985;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43976__$1,(9),results,inst_43962);
} else {
if((state_val_43977 === (9))){
var inst_43969 = (state_43976[(2)]);
var state_43976__$1 = (function (){var statearr_43986 = state_43976;
(statearr_43986[(10)] = inst_43969);

return statearr_43986;
})();
var statearr_43987_44092 = state_43976__$1;
(statearr_43987_44092[(2)] = null);

(statearr_43987_44092[(1)] = (2));


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
});})(c__30952__auto___44086,jobs,results,process,async))
;
return ((function (switch__30864__auto__,c__30952__auto___44086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_43988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_43988[(1)] = (1));

return statearr_43988;
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
}catch (e43989){if((e43989 instanceof Object)){
var ex__30868__auto__ = e43989;
var statearr_43990_44093 = state_43976;
(statearr_43990_44093[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44094 = state_43976;
state_43976 = G__44094;
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
;})(switch__30864__auto__,c__30952__auto___44086,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_43991 = f__30953__auto__.call(null);
(statearr_43991[(6)] = c__30952__auto___44086);

return statearr_43991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44086,jobs,results,process,async))
);


var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,jobs,results,process,async){
return (function (state_44029){
var state_val_44030 = (state_44029[(1)]);
if((state_val_44030 === (7))){
var inst_44025 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44031_44095 = state_44029__$1;
(statearr_44031_44095[(2)] = inst_44025);

(statearr_44031_44095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (20))){
var state_44029__$1 = state_44029;
var statearr_44032_44096 = state_44029__$1;
(statearr_44032_44096[(2)] = null);

(statearr_44032_44096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (1))){
var state_44029__$1 = state_44029;
var statearr_44033_44097 = state_44029__$1;
(statearr_44033_44097[(2)] = null);

(statearr_44033_44097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (4))){
var inst_43994 = (state_44029[(7)]);
var inst_43994__$1 = (state_44029[(2)]);
var inst_43995 = (inst_43994__$1 == null);
var state_44029__$1 = (function (){var statearr_44034 = state_44029;
(statearr_44034[(7)] = inst_43994__$1);

return statearr_44034;
})();
if(cljs.core.truth_(inst_43995)){
var statearr_44035_44098 = state_44029__$1;
(statearr_44035_44098[(1)] = (5));

} else {
var statearr_44036_44099 = state_44029__$1;
(statearr_44036_44099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (15))){
var inst_44007 = (state_44029[(8)]);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44029__$1,(18),to,inst_44007);
} else {
if((state_val_44030 === (21))){
var inst_44020 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44037_44100 = state_44029__$1;
(statearr_44037_44100[(2)] = inst_44020);

(statearr_44037_44100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (13))){
var inst_44022 = (state_44029[(2)]);
var state_44029__$1 = (function (){var statearr_44038 = state_44029;
(statearr_44038[(9)] = inst_44022);

return statearr_44038;
})();
var statearr_44039_44101 = state_44029__$1;
(statearr_44039_44101[(2)] = null);

(statearr_44039_44101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (6))){
var inst_43994 = (state_44029[(7)]);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44029__$1,(11),inst_43994);
} else {
if((state_val_44030 === (17))){
var inst_44015 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
if(cljs.core.truth_(inst_44015)){
var statearr_44040_44102 = state_44029__$1;
(statearr_44040_44102[(1)] = (19));

} else {
var statearr_44041_44103 = state_44029__$1;
(statearr_44041_44103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (3))){
var inst_44027 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44029__$1,inst_44027);
} else {
if((state_val_44030 === (12))){
var inst_44004 = (state_44029[(10)]);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44029__$1,(14),inst_44004);
} else {
if((state_val_44030 === (2))){
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44029__$1,(4),results);
} else {
if((state_val_44030 === (19))){
var state_44029__$1 = state_44029;
var statearr_44042_44104 = state_44029__$1;
(statearr_44042_44104[(2)] = null);

(statearr_44042_44104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (11))){
var inst_44004 = (state_44029[(2)]);
var state_44029__$1 = (function (){var statearr_44043 = state_44029;
(statearr_44043[(10)] = inst_44004);

return statearr_44043;
})();
var statearr_44044_44105 = state_44029__$1;
(statearr_44044_44105[(2)] = null);

(statearr_44044_44105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (9))){
var state_44029__$1 = state_44029;
var statearr_44045_44106 = state_44029__$1;
(statearr_44045_44106[(2)] = null);

(statearr_44045_44106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (5))){
var state_44029__$1 = state_44029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44046_44107 = state_44029__$1;
(statearr_44046_44107[(1)] = (8));

} else {
var statearr_44047_44108 = state_44029__$1;
(statearr_44047_44108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (14))){
var inst_44009 = (state_44029[(11)]);
var inst_44007 = (state_44029[(8)]);
var inst_44007__$1 = (state_44029[(2)]);
var inst_44008 = (inst_44007__$1 == null);
var inst_44009__$1 = cljs.core.not.call(null,inst_44008);
var state_44029__$1 = (function (){var statearr_44048 = state_44029;
(statearr_44048[(11)] = inst_44009__$1);

(statearr_44048[(8)] = inst_44007__$1);

return statearr_44048;
})();
if(inst_44009__$1){
var statearr_44049_44109 = state_44029__$1;
(statearr_44049_44109[(1)] = (15));

} else {
var statearr_44050_44110 = state_44029__$1;
(statearr_44050_44110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (16))){
var inst_44009 = (state_44029[(11)]);
var state_44029__$1 = state_44029;
var statearr_44051_44111 = state_44029__$1;
(statearr_44051_44111[(2)] = inst_44009);

(statearr_44051_44111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (10))){
var inst_44001 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44052_44112 = state_44029__$1;
(statearr_44052_44112[(2)] = inst_44001);

(statearr_44052_44112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (18))){
var inst_44012 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44053_44113 = state_44029__$1;
(statearr_44053_44113[(2)] = inst_44012);

(statearr_44053_44113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (8))){
var inst_43998 = cljs.core.async.close_BANG_.call(null,to);
var state_44029__$1 = state_44029;
var statearr_44054_44114 = state_44029__$1;
(statearr_44054_44114[(2)] = inst_43998);

(statearr_44054_44114[(1)] = (10));


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
var statearr_44055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_44055[(1)] = (1));

return statearr_44055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_44029){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44056){if((e44056 instanceof Object)){
var ex__30868__auto__ = e44056;
var statearr_44057_44115 = state_44029;
(statearr_44057_44115[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44116 = state_44029;
state_44029 = G__44116;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_44029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_44029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_44058 = f__30953__auto__.call(null);
(statearr_44058[(6)] = c__30952__auto__);

return statearr_44058;
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
var G__44118 = arguments.length;
switch (G__44118) {
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
var G__44121 = arguments.length;
switch (G__44121) {
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
var G__44124 = arguments.length;
switch (G__44124) {
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
var c__30952__auto___44173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44173,tc,fc){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44173,tc,fc){
return (function (state_44150){
var state_val_44151 = (state_44150[(1)]);
if((state_val_44151 === (7))){
var inst_44146 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
var statearr_44152_44174 = state_44150__$1;
(statearr_44152_44174[(2)] = inst_44146);

(statearr_44152_44174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (1))){
var state_44150__$1 = state_44150;
var statearr_44153_44175 = state_44150__$1;
(statearr_44153_44175[(2)] = null);

(statearr_44153_44175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (4))){
var inst_44127 = (state_44150[(7)]);
var inst_44127__$1 = (state_44150[(2)]);
var inst_44128 = (inst_44127__$1 == null);
var state_44150__$1 = (function (){var statearr_44154 = state_44150;
(statearr_44154[(7)] = inst_44127__$1);

return statearr_44154;
})();
if(cljs.core.truth_(inst_44128)){
var statearr_44155_44176 = state_44150__$1;
(statearr_44155_44176[(1)] = (5));

} else {
var statearr_44156_44177 = state_44150__$1;
(statearr_44156_44177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (13))){
var state_44150__$1 = state_44150;
var statearr_44157_44178 = state_44150__$1;
(statearr_44157_44178[(2)] = null);

(statearr_44157_44178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (6))){
var inst_44127 = (state_44150[(7)]);
var inst_44133 = p.call(null,inst_44127);
var state_44150__$1 = state_44150;
if(cljs.core.truth_(inst_44133)){
var statearr_44158_44179 = state_44150__$1;
(statearr_44158_44179[(1)] = (9));

} else {
var statearr_44159_44180 = state_44150__$1;
(statearr_44159_44180[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (3))){
var inst_44148 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44150__$1,inst_44148);
} else {
if((state_val_44151 === (12))){
var state_44150__$1 = state_44150;
var statearr_44160_44181 = state_44150__$1;
(statearr_44160_44181[(2)] = null);

(statearr_44160_44181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (2))){
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44150__$1,(4),ch);
} else {
if((state_val_44151 === (11))){
var inst_44127 = (state_44150[(7)]);
var inst_44137 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44150__$1,(8),inst_44137,inst_44127);
} else {
if((state_val_44151 === (9))){
var state_44150__$1 = state_44150;
var statearr_44161_44182 = state_44150__$1;
(statearr_44161_44182[(2)] = tc);

(statearr_44161_44182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (5))){
var inst_44130 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44131 = cljs.core.async.close_BANG_.call(null,fc);
var state_44150__$1 = (function (){var statearr_44162 = state_44150;
(statearr_44162[(8)] = inst_44130);

return statearr_44162;
})();
var statearr_44163_44183 = state_44150__$1;
(statearr_44163_44183[(2)] = inst_44131);

(statearr_44163_44183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (14))){
var inst_44144 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
var statearr_44164_44184 = state_44150__$1;
(statearr_44164_44184[(2)] = inst_44144);

(statearr_44164_44184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (10))){
var state_44150__$1 = state_44150;
var statearr_44165_44185 = state_44150__$1;
(statearr_44165_44185[(2)] = fc);

(statearr_44165_44185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (8))){
var inst_44139 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
if(cljs.core.truth_(inst_44139)){
var statearr_44166_44186 = state_44150__$1;
(statearr_44166_44186[(1)] = (12));

} else {
var statearr_44167_44187 = state_44150__$1;
(statearr_44167_44187[(1)] = (13));

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
});})(c__30952__auto___44173,tc,fc))
;
return ((function (switch__30864__auto__,c__30952__auto___44173,tc,fc){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_44168 = [null,null,null,null,null,null,null,null,null];
(statearr_44168[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44168[(1)] = (1));

return statearr_44168;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44150){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44169){if((e44169 instanceof Object)){
var ex__30868__auto__ = e44169;
var statearr_44170_44188 = state_44150;
(statearr_44170_44188[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44189 = state_44150;
state_44150 = G__44189;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44173,tc,fc))
})();
var state__30954__auto__ = (function (){var statearr_44171 = f__30953__auto__.call(null);
(statearr_44171[(6)] = c__30952__auto___44173);

return statearr_44171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44173,tc,fc))
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
return (function (state_44210){
var state_val_44211 = (state_44210[(1)]);
if((state_val_44211 === (7))){
var inst_44206 = (state_44210[(2)]);
var state_44210__$1 = state_44210;
var statearr_44212_44230 = state_44210__$1;
(statearr_44212_44230[(2)] = inst_44206);

(statearr_44212_44230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (1))){
var inst_44190 = init;
var state_44210__$1 = (function (){var statearr_44213 = state_44210;
(statearr_44213[(7)] = inst_44190);

return statearr_44213;
})();
var statearr_44214_44231 = state_44210__$1;
(statearr_44214_44231[(2)] = null);

(statearr_44214_44231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (4))){
var inst_44193 = (state_44210[(8)]);
var inst_44193__$1 = (state_44210[(2)]);
var inst_44194 = (inst_44193__$1 == null);
var state_44210__$1 = (function (){var statearr_44215 = state_44210;
(statearr_44215[(8)] = inst_44193__$1);

return statearr_44215;
})();
if(cljs.core.truth_(inst_44194)){
var statearr_44216_44232 = state_44210__$1;
(statearr_44216_44232[(1)] = (5));

} else {
var statearr_44217_44233 = state_44210__$1;
(statearr_44217_44233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (6))){
var inst_44197 = (state_44210[(9)]);
var inst_44193 = (state_44210[(8)]);
var inst_44190 = (state_44210[(7)]);
var inst_44197__$1 = f.call(null,inst_44190,inst_44193);
var inst_44198 = cljs.core.reduced_QMARK_.call(null,inst_44197__$1);
var state_44210__$1 = (function (){var statearr_44218 = state_44210;
(statearr_44218[(9)] = inst_44197__$1);

return statearr_44218;
})();
if(inst_44198){
var statearr_44219_44234 = state_44210__$1;
(statearr_44219_44234[(1)] = (8));

} else {
var statearr_44220_44235 = state_44210__$1;
(statearr_44220_44235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (3))){
var inst_44208 = (state_44210[(2)]);
var state_44210__$1 = state_44210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44210__$1,inst_44208);
} else {
if((state_val_44211 === (2))){
var state_44210__$1 = state_44210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44210__$1,(4),ch);
} else {
if((state_val_44211 === (9))){
var inst_44197 = (state_44210[(9)]);
var inst_44190 = inst_44197;
var state_44210__$1 = (function (){var statearr_44221 = state_44210;
(statearr_44221[(7)] = inst_44190);

return statearr_44221;
})();
var statearr_44222_44236 = state_44210__$1;
(statearr_44222_44236[(2)] = null);

(statearr_44222_44236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (5))){
var inst_44190 = (state_44210[(7)]);
var state_44210__$1 = state_44210;
var statearr_44223_44237 = state_44210__$1;
(statearr_44223_44237[(2)] = inst_44190);

(statearr_44223_44237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (10))){
var inst_44204 = (state_44210[(2)]);
var state_44210__$1 = state_44210;
var statearr_44224_44238 = state_44210__$1;
(statearr_44224_44238[(2)] = inst_44204);

(statearr_44224_44238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44211 === (8))){
var inst_44197 = (state_44210[(9)]);
var inst_44200 = cljs.core.deref.call(null,inst_44197);
var state_44210__$1 = state_44210;
var statearr_44225_44239 = state_44210__$1;
(statearr_44225_44239[(2)] = inst_44200);

(statearr_44225_44239[(1)] = (10));


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
var statearr_44226 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44226[(0)] = cljs$core$async$reduce_$_state_machine__30865__auto__);

(statearr_44226[(1)] = (1));

return statearr_44226;
});
var cljs$core$async$reduce_$_state_machine__30865__auto____1 = (function (state_44210){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44227){if((e44227 instanceof Object)){
var ex__30868__auto__ = e44227;
var statearr_44228_44240 = state_44210;
(statearr_44228_44240[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44241 = state_44210;
state_44210 = G__44241;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30865__auto__ = function(state_44210){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30865__auto____1.call(this,state_44210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30865__auto____0;
cljs$core$async$reduce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30865__auto____1;
return cljs$core$async$reduce_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_44229 = f__30953__auto__.call(null);
(statearr_44229[(6)] = c__30952__auto__);

return statearr_44229;
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
var G__44243 = arguments.length;
switch (G__44243) {
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
return (function (state_44268){
var state_val_44269 = (state_44268[(1)]);
if((state_val_44269 === (7))){
var inst_44250 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44270_44291 = state_44268__$1;
(statearr_44270_44291[(2)] = inst_44250);

(statearr_44270_44291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (1))){
var inst_44244 = cljs.core.seq.call(null,coll);
var inst_44245 = inst_44244;
var state_44268__$1 = (function (){var statearr_44271 = state_44268;
(statearr_44271[(7)] = inst_44245);

return statearr_44271;
})();
var statearr_44272_44292 = state_44268__$1;
(statearr_44272_44292[(2)] = null);

(statearr_44272_44292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (4))){
var inst_44245 = (state_44268[(7)]);
var inst_44248 = cljs.core.first.call(null,inst_44245);
var state_44268__$1 = state_44268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44268__$1,(7),ch,inst_44248);
} else {
if((state_val_44269 === (13))){
var inst_44262 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44273_44293 = state_44268__$1;
(statearr_44273_44293[(2)] = inst_44262);

(statearr_44273_44293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (6))){
var inst_44253 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
if(cljs.core.truth_(inst_44253)){
var statearr_44274_44294 = state_44268__$1;
(statearr_44274_44294[(1)] = (8));

} else {
var statearr_44275_44295 = state_44268__$1;
(statearr_44275_44295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (3))){
var inst_44266 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44268__$1,inst_44266);
} else {
if((state_val_44269 === (12))){
var state_44268__$1 = state_44268;
var statearr_44276_44296 = state_44268__$1;
(statearr_44276_44296[(2)] = null);

(statearr_44276_44296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (2))){
var inst_44245 = (state_44268[(7)]);
var state_44268__$1 = state_44268;
if(cljs.core.truth_(inst_44245)){
var statearr_44277_44297 = state_44268__$1;
(statearr_44277_44297[(1)] = (4));

} else {
var statearr_44278_44298 = state_44268__$1;
(statearr_44278_44298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (11))){
var inst_44259 = cljs.core.async.close_BANG_.call(null,ch);
var state_44268__$1 = state_44268;
var statearr_44279_44299 = state_44268__$1;
(statearr_44279_44299[(2)] = inst_44259);

(statearr_44279_44299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (9))){
var state_44268__$1 = state_44268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44280_44300 = state_44268__$1;
(statearr_44280_44300[(1)] = (11));

} else {
var statearr_44281_44301 = state_44268__$1;
(statearr_44281_44301[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (5))){
var inst_44245 = (state_44268[(7)]);
var state_44268__$1 = state_44268;
var statearr_44282_44302 = state_44268__$1;
(statearr_44282_44302[(2)] = inst_44245);

(statearr_44282_44302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (10))){
var inst_44264 = (state_44268[(2)]);
var state_44268__$1 = state_44268;
var statearr_44283_44303 = state_44268__$1;
(statearr_44283_44303[(2)] = inst_44264);

(statearr_44283_44303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44269 === (8))){
var inst_44245 = (state_44268[(7)]);
var inst_44255 = cljs.core.next.call(null,inst_44245);
var inst_44245__$1 = inst_44255;
var state_44268__$1 = (function (){var statearr_44284 = state_44268;
(statearr_44284[(7)] = inst_44245__$1);

return statearr_44284;
})();
var statearr_44285_44304 = state_44268__$1;
(statearr_44285_44304[(2)] = null);

(statearr_44285_44304[(1)] = (2));


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
var statearr_44286 = [null,null,null,null,null,null,null,null];
(statearr_44286[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44286[(1)] = (1));

return statearr_44286;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44268){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44287){if((e44287 instanceof Object)){
var ex__30868__auto__ = e44287;
var statearr_44288_44305 = state_44268;
(statearr_44288_44305[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44306 = state_44268;
state_44268 = G__44306;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_44289 = f__30953__auto__.call(null);
(statearr_44289[(6)] = c__30952__auto__);

return statearr_44289;
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
if(typeof cljs.core.async.t_cljs$core$async44307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44307 = (function (ch,cs,meta44308){
this.ch = ch;
this.cs = cs;
this.meta44308 = meta44308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44309,meta44308__$1){
var self__ = this;
var _44309__$1 = this;
return (new cljs.core.async.t_cljs$core$async44307(self__.ch,self__.cs,meta44308__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44309){
var self__ = this;
var _44309__$1 = this;
return self__.meta44308;
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44308","meta44308",733929149,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44307";

cljs.core.async.t_cljs$core$async44307.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44307");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44307 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44307(ch__$1,cs__$1,meta44308){
return (new cljs.core.async.t_cljs$core$async44307(ch__$1,cs__$1,meta44308));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44307(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30952__auto___44529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44529,cs,m,dchan,dctr,done){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44529,cs,m,dchan,dctr,done){
return (function (state_44444){
var state_val_44445 = (state_44444[(1)]);
if((state_val_44445 === (7))){
var inst_44440 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44446_44530 = state_44444__$1;
(statearr_44446_44530[(2)] = inst_44440);

(statearr_44446_44530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (20))){
var inst_44343 = (state_44444[(7)]);
var inst_44355 = cljs.core.first.call(null,inst_44343);
var inst_44356 = cljs.core.nth.call(null,inst_44355,(0),null);
var inst_44357 = cljs.core.nth.call(null,inst_44355,(1),null);
var state_44444__$1 = (function (){var statearr_44447 = state_44444;
(statearr_44447[(8)] = inst_44356);

return statearr_44447;
})();
if(cljs.core.truth_(inst_44357)){
var statearr_44448_44531 = state_44444__$1;
(statearr_44448_44531[(1)] = (22));

} else {
var statearr_44449_44532 = state_44444__$1;
(statearr_44449_44532[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (27))){
var inst_44312 = (state_44444[(9)]);
var inst_44392 = (state_44444[(10)]);
var inst_44385 = (state_44444[(11)]);
var inst_44387 = (state_44444[(12)]);
var inst_44392__$1 = cljs.core._nth.call(null,inst_44385,inst_44387);
var inst_44393 = cljs.core.async.put_BANG_.call(null,inst_44392__$1,inst_44312,done);
var state_44444__$1 = (function (){var statearr_44450 = state_44444;
(statearr_44450[(10)] = inst_44392__$1);

return statearr_44450;
})();
if(cljs.core.truth_(inst_44393)){
var statearr_44451_44533 = state_44444__$1;
(statearr_44451_44533[(1)] = (30));

} else {
var statearr_44452_44534 = state_44444__$1;
(statearr_44452_44534[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (1))){
var state_44444__$1 = state_44444;
var statearr_44453_44535 = state_44444__$1;
(statearr_44453_44535[(2)] = null);

(statearr_44453_44535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (24))){
var inst_44343 = (state_44444[(7)]);
var inst_44362 = (state_44444[(2)]);
var inst_44363 = cljs.core.next.call(null,inst_44343);
var inst_44321 = inst_44363;
var inst_44322 = null;
var inst_44323 = (0);
var inst_44324 = (0);
var state_44444__$1 = (function (){var statearr_44454 = state_44444;
(statearr_44454[(13)] = inst_44362);

(statearr_44454[(14)] = inst_44322);

(statearr_44454[(15)] = inst_44323);

(statearr_44454[(16)] = inst_44321);

(statearr_44454[(17)] = inst_44324);

return statearr_44454;
})();
var statearr_44455_44536 = state_44444__$1;
(statearr_44455_44536[(2)] = null);

(statearr_44455_44536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (39))){
var state_44444__$1 = state_44444;
var statearr_44459_44537 = state_44444__$1;
(statearr_44459_44537[(2)] = null);

(statearr_44459_44537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (4))){
var inst_44312 = (state_44444[(9)]);
var inst_44312__$1 = (state_44444[(2)]);
var inst_44313 = (inst_44312__$1 == null);
var state_44444__$1 = (function (){var statearr_44460 = state_44444;
(statearr_44460[(9)] = inst_44312__$1);

return statearr_44460;
})();
if(cljs.core.truth_(inst_44313)){
var statearr_44461_44538 = state_44444__$1;
(statearr_44461_44538[(1)] = (5));

} else {
var statearr_44462_44539 = state_44444__$1;
(statearr_44462_44539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (15))){
var inst_44322 = (state_44444[(14)]);
var inst_44323 = (state_44444[(15)]);
var inst_44321 = (state_44444[(16)]);
var inst_44324 = (state_44444[(17)]);
var inst_44339 = (state_44444[(2)]);
var inst_44340 = (inst_44324 + (1));
var tmp44456 = inst_44322;
var tmp44457 = inst_44323;
var tmp44458 = inst_44321;
var inst_44321__$1 = tmp44458;
var inst_44322__$1 = tmp44456;
var inst_44323__$1 = tmp44457;
var inst_44324__$1 = inst_44340;
var state_44444__$1 = (function (){var statearr_44463 = state_44444;
(statearr_44463[(14)] = inst_44322__$1);

(statearr_44463[(15)] = inst_44323__$1);

(statearr_44463[(16)] = inst_44321__$1);

(statearr_44463[(17)] = inst_44324__$1);

(statearr_44463[(18)] = inst_44339);

return statearr_44463;
})();
var statearr_44464_44540 = state_44444__$1;
(statearr_44464_44540[(2)] = null);

(statearr_44464_44540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (21))){
var inst_44366 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44468_44541 = state_44444__$1;
(statearr_44468_44541[(2)] = inst_44366);

(statearr_44468_44541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (31))){
var inst_44392 = (state_44444[(10)]);
var inst_44396 = done.call(null,null);
var inst_44397 = cljs.core.async.untap_STAR_.call(null,m,inst_44392);
var state_44444__$1 = (function (){var statearr_44469 = state_44444;
(statearr_44469[(19)] = inst_44396);

return statearr_44469;
})();
var statearr_44470_44542 = state_44444__$1;
(statearr_44470_44542[(2)] = inst_44397);

(statearr_44470_44542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (32))){
var inst_44384 = (state_44444[(20)]);
var inst_44386 = (state_44444[(21)]);
var inst_44385 = (state_44444[(11)]);
var inst_44387 = (state_44444[(12)]);
var inst_44399 = (state_44444[(2)]);
var inst_44400 = (inst_44387 + (1));
var tmp44465 = inst_44384;
var tmp44466 = inst_44386;
var tmp44467 = inst_44385;
var inst_44384__$1 = tmp44465;
var inst_44385__$1 = tmp44467;
var inst_44386__$1 = tmp44466;
var inst_44387__$1 = inst_44400;
var state_44444__$1 = (function (){var statearr_44471 = state_44444;
(statearr_44471[(20)] = inst_44384__$1);

(statearr_44471[(21)] = inst_44386__$1);

(statearr_44471[(22)] = inst_44399);

(statearr_44471[(11)] = inst_44385__$1);

(statearr_44471[(12)] = inst_44387__$1);

return statearr_44471;
})();
var statearr_44472_44543 = state_44444__$1;
(statearr_44472_44543[(2)] = null);

(statearr_44472_44543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (40))){
var inst_44412 = (state_44444[(23)]);
var inst_44416 = done.call(null,null);
var inst_44417 = cljs.core.async.untap_STAR_.call(null,m,inst_44412);
var state_44444__$1 = (function (){var statearr_44473 = state_44444;
(statearr_44473[(24)] = inst_44416);

return statearr_44473;
})();
var statearr_44474_44544 = state_44444__$1;
(statearr_44474_44544[(2)] = inst_44417);

(statearr_44474_44544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (33))){
var inst_44403 = (state_44444[(25)]);
var inst_44405 = cljs.core.chunked_seq_QMARK_.call(null,inst_44403);
var state_44444__$1 = state_44444;
if(inst_44405){
var statearr_44475_44545 = state_44444__$1;
(statearr_44475_44545[(1)] = (36));

} else {
var statearr_44476_44546 = state_44444__$1;
(statearr_44476_44546[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (13))){
var inst_44333 = (state_44444[(26)]);
var inst_44336 = cljs.core.async.close_BANG_.call(null,inst_44333);
var state_44444__$1 = state_44444;
var statearr_44477_44547 = state_44444__$1;
(statearr_44477_44547[(2)] = inst_44336);

(statearr_44477_44547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (22))){
var inst_44356 = (state_44444[(8)]);
var inst_44359 = cljs.core.async.close_BANG_.call(null,inst_44356);
var state_44444__$1 = state_44444;
var statearr_44478_44548 = state_44444__$1;
(statearr_44478_44548[(2)] = inst_44359);

(statearr_44478_44548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (36))){
var inst_44403 = (state_44444[(25)]);
var inst_44407 = cljs.core.chunk_first.call(null,inst_44403);
var inst_44408 = cljs.core.chunk_rest.call(null,inst_44403);
var inst_44409 = cljs.core.count.call(null,inst_44407);
var inst_44384 = inst_44408;
var inst_44385 = inst_44407;
var inst_44386 = inst_44409;
var inst_44387 = (0);
var state_44444__$1 = (function (){var statearr_44479 = state_44444;
(statearr_44479[(20)] = inst_44384);

(statearr_44479[(21)] = inst_44386);

(statearr_44479[(11)] = inst_44385);

(statearr_44479[(12)] = inst_44387);

return statearr_44479;
})();
var statearr_44480_44549 = state_44444__$1;
(statearr_44480_44549[(2)] = null);

(statearr_44480_44549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (41))){
var inst_44403 = (state_44444[(25)]);
var inst_44419 = (state_44444[(2)]);
var inst_44420 = cljs.core.next.call(null,inst_44403);
var inst_44384 = inst_44420;
var inst_44385 = null;
var inst_44386 = (0);
var inst_44387 = (0);
var state_44444__$1 = (function (){var statearr_44481 = state_44444;
(statearr_44481[(27)] = inst_44419);

(statearr_44481[(20)] = inst_44384);

(statearr_44481[(21)] = inst_44386);

(statearr_44481[(11)] = inst_44385);

(statearr_44481[(12)] = inst_44387);

return statearr_44481;
})();
var statearr_44482_44550 = state_44444__$1;
(statearr_44482_44550[(2)] = null);

(statearr_44482_44550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (43))){
var state_44444__$1 = state_44444;
var statearr_44483_44551 = state_44444__$1;
(statearr_44483_44551[(2)] = null);

(statearr_44483_44551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (29))){
var inst_44428 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44484_44552 = state_44444__$1;
(statearr_44484_44552[(2)] = inst_44428);

(statearr_44484_44552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (44))){
var inst_44437 = (state_44444[(2)]);
var state_44444__$1 = (function (){var statearr_44485 = state_44444;
(statearr_44485[(28)] = inst_44437);

return statearr_44485;
})();
var statearr_44486_44553 = state_44444__$1;
(statearr_44486_44553[(2)] = null);

(statearr_44486_44553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (6))){
var inst_44376 = (state_44444[(29)]);
var inst_44375 = cljs.core.deref.call(null,cs);
var inst_44376__$1 = cljs.core.keys.call(null,inst_44375);
var inst_44377 = cljs.core.count.call(null,inst_44376__$1);
var inst_44378 = cljs.core.reset_BANG_.call(null,dctr,inst_44377);
var inst_44383 = cljs.core.seq.call(null,inst_44376__$1);
var inst_44384 = inst_44383;
var inst_44385 = null;
var inst_44386 = (0);
var inst_44387 = (0);
var state_44444__$1 = (function (){var statearr_44487 = state_44444;
(statearr_44487[(30)] = inst_44378);

(statearr_44487[(20)] = inst_44384);

(statearr_44487[(21)] = inst_44386);

(statearr_44487[(29)] = inst_44376__$1);

(statearr_44487[(11)] = inst_44385);

(statearr_44487[(12)] = inst_44387);

return statearr_44487;
})();
var statearr_44488_44554 = state_44444__$1;
(statearr_44488_44554[(2)] = null);

(statearr_44488_44554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (28))){
var inst_44403 = (state_44444[(25)]);
var inst_44384 = (state_44444[(20)]);
var inst_44403__$1 = cljs.core.seq.call(null,inst_44384);
var state_44444__$1 = (function (){var statearr_44489 = state_44444;
(statearr_44489[(25)] = inst_44403__$1);

return statearr_44489;
})();
if(inst_44403__$1){
var statearr_44490_44555 = state_44444__$1;
(statearr_44490_44555[(1)] = (33));

} else {
var statearr_44491_44556 = state_44444__$1;
(statearr_44491_44556[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (25))){
var inst_44386 = (state_44444[(21)]);
var inst_44387 = (state_44444[(12)]);
var inst_44389 = (inst_44387 < inst_44386);
var inst_44390 = inst_44389;
var state_44444__$1 = state_44444;
if(cljs.core.truth_(inst_44390)){
var statearr_44492_44557 = state_44444__$1;
(statearr_44492_44557[(1)] = (27));

} else {
var statearr_44493_44558 = state_44444__$1;
(statearr_44493_44558[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (34))){
var state_44444__$1 = state_44444;
var statearr_44494_44559 = state_44444__$1;
(statearr_44494_44559[(2)] = null);

(statearr_44494_44559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (17))){
var state_44444__$1 = state_44444;
var statearr_44495_44560 = state_44444__$1;
(statearr_44495_44560[(2)] = null);

(statearr_44495_44560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (3))){
var inst_44442 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44444__$1,inst_44442);
} else {
if((state_val_44445 === (12))){
var inst_44371 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44496_44561 = state_44444__$1;
(statearr_44496_44561[(2)] = inst_44371);

(statearr_44496_44561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (2))){
var state_44444__$1 = state_44444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44444__$1,(4),ch);
} else {
if((state_val_44445 === (23))){
var state_44444__$1 = state_44444;
var statearr_44497_44562 = state_44444__$1;
(statearr_44497_44562[(2)] = null);

(statearr_44497_44562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (35))){
var inst_44426 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44498_44563 = state_44444__$1;
(statearr_44498_44563[(2)] = inst_44426);

(statearr_44498_44563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (19))){
var inst_44343 = (state_44444[(7)]);
var inst_44347 = cljs.core.chunk_first.call(null,inst_44343);
var inst_44348 = cljs.core.chunk_rest.call(null,inst_44343);
var inst_44349 = cljs.core.count.call(null,inst_44347);
var inst_44321 = inst_44348;
var inst_44322 = inst_44347;
var inst_44323 = inst_44349;
var inst_44324 = (0);
var state_44444__$1 = (function (){var statearr_44499 = state_44444;
(statearr_44499[(14)] = inst_44322);

(statearr_44499[(15)] = inst_44323);

(statearr_44499[(16)] = inst_44321);

(statearr_44499[(17)] = inst_44324);

return statearr_44499;
})();
var statearr_44500_44564 = state_44444__$1;
(statearr_44500_44564[(2)] = null);

(statearr_44500_44564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (11))){
var inst_44343 = (state_44444[(7)]);
var inst_44321 = (state_44444[(16)]);
var inst_44343__$1 = cljs.core.seq.call(null,inst_44321);
var state_44444__$1 = (function (){var statearr_44501 = state_44444;
(statearr_44501[(7)] = inst_44343__$1);

return statearr_44501;
})();
if(inst_44343__$1){
var statearr_44502_44565 = state_44444__$1;
(statearr_44502_44565[(1)] = (16));

} else {
var statearr_44503_44566 = state_44444__$1;
(statearr_44503_44566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (9))){
var inst_44373 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44504_44567 = state_44444__$1;
(statearr_44504_44567[(2)] = inst_44373);

(statearr_44504_44567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (5))){
var inst_44319 = cljs.core.deref.call(null,cs);
var inst_44320 = cljs.core.seq.call(null,inst_44319);
var inst_44321 = inst_44320;
var inst_44322 = null;
var inst_44323 = (0);
var inst_44324 = (0);
var state_44444__$1 = (function (){var statearr_44505 = state_44444;
(statearr_44505[(14)] = inst_44322);

(statearr_44505[(15)] = inst_44323);

(statearr_44505[(16)] = inst_44321);

(statearr_44505[(17)] = inst_44324);

return statearr_44505;
})();
var statearr_44506_44568 = state_44444__$1;
(statearr_44506_44568[(2)] = null);

(statearr_44506_44568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (14))){
var state_44444__$1 = state_44444;
var statearr_44507_44569 = state_44444__$1;
(statearr_44507_44569[(2)] = null);

(statearr_44507_44569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (45))){
var inst_44434 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44508_44570 = state_44444__$1;
(statearr_44508_44570[(2)] = inst_44434);

(statearr_44508_44570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (26))){
var inst_44376 = (state_44444[(29)]);
var inst_44430 = (state_44444[(2)]);
var inst_44431 = cljs.core.seq.call(null,inst_44376);
var state_44444__$1 = (function (){var statearr_44509 = state_44444;
(statearr_44509[(31)] = inst_44430);

return statearr_44509;
})();
if(inst_44431){
var statearr_44510_44571 = state_44444__$1;
(statearr_44510_44571[(1)] = (42));

} else {
var statearr_44511_44572 = state_44444__$1;
(statearr_44511_44572[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (16))){
var inst_44343 = (state_44444[(7)]);
var inst_44345 = cljs.core.chunked_seq_QMARK_.call(null,inst_44343);
var state_44444__$1 = state_44444;
if(inst_44345){
var statearr_44512_44573 = state_44444__$1;
(statearr_44512_44573[(1)] = (19));

} else {
var statearr_44513_44574 = state_44444__$1;
(statearr_44513_44574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (38))){
var inst_44423 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44514_44575 = state_44444__$1;
(statearr_44514_44575[(2)] = inst_44423);

(statearr_44514_44575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (30))){
var state_44444__$1 = state_44444;
var statearr_44515_44576 = state_44444__$1;
(statearr_44515_44576[(2)] = null);

(statearr_44515_44576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (10))){
var inst_44322 = (state_44444[(14)]);
var inst_44324 = (state_44444[(17)]);
var inst_44332 = cljs.core._nth.call(null,inst_44322,inst_44324);
var inst_44333 = cljs.core.nth.call(null,inst_44332,(0),null);
var inst_44334 = cljs.core.nth.call(null,inst_44332,(1),null);
var state_44444__$1 = (function (){var statearr_44516 = state_44444;
(statearr_44516[(26)] = inst_44333);

return statearr_44516;
})();
if(cljs.core.truth_(inst_44334)){
var statearr_44517_44577 = state_44444__$1;
(statearr_44517_44577[(1)] = (13));

} else {
var statearr_44518_44578 = state_44444__$1;
(statearr_44518_44578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (18))){
var inst_44369 = (state_44444[(2)]);
var state_44444__$1 = state_44444;
var statearr_44519_44579 = state_44444__$1;
(statearr_44519_44579[(2)] = inst_44369);

(statearr_44519_44579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (42))){
var state_44444__$1 = state_44444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44444__$1,(45),dchan);
} else {
if((state_val_44445 === (37))){
var inst_44403 = (state_44444[(25)]);
var inst_44312 = (state_44444[(9)]);
var inst_44412 = (state_44444[(23)]);
var inst_44412__$1 = cljs.core.first.call(null,inst_44403);
var inst_44413 = cljs.core.async.put_BANG_.call(null,inst_44412__$1,inst_44312,done);
var state_44444__$1 = (function (){var statearr_44520 = state_44444;
(statearr_44520[(23)] = inst_44412__$1);

return statearr_44520;
})();
if(cljs.core.truth_(inst_44413)){
var statearr_44521_44580 = state_44444__$1;
(statearr_44521_44580[(1)] = (39));

} else {
var statearr_44522_44581 = state_44444__$1;
(statearr_44522_44581[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44445 === (8))){
var inst_44323 = (state_44444[(15)]);
var inst_44324 = (state_44444[(17)]);
var inst_44326 = (inst_44324 < inst_44323);
var inst_44327 = inst_44326;
var state_44444__$1 = state_44444;
if(cljs.core.truth_(inst_44327)){
var statearr_44523_44582 = state_44444__$1;
(statearr_44523_44582[(1)] = (10));

} else {
var statearr_44524_44583 = state_44444__$1;
(statearr_44524_44583[(1)] = (11));

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
});})(c__30952__auto___44529,cs,m,dchan,dctr,done))
;
return ((function (switch__30864__auto__,c__30952__auto___44529,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30865__auto__ = null;
var cljs$core$async$mult_$_state_machine__30865__auto____0 = (function (){
var statearr_44525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44525[(0)] = cljs$core$async$mult_$_state_machine__30865__auto__);

(statearr_44525[(1)] = (1));

return statearr_44525;
});
var cljs$core$async$mult_$_state_machine__30865__auto____1 = (function (state_44444){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44526){if((e44526 instanceof Object)){
var ex__30868__auto__ = e44526;
var statearr_44527_44584 = state_44444;
(statearr_44527_44584[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44585 = state_44444;
state_44444 = G__44585;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30865__auto__ = function(state_44444){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30865__auto____1.call(this,state_44444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30865__auto____0;
cljs$core$async$mult_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30865__auto____1;
return cljs$core$async$mult_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44529,cs,m,dchan,dctr,done))
})();
var state__30954__auto__ = (function (){var statearr_44528 = f__30953__auto__.call(null);
(statearr_44528[(6)] = c__30952__auto___44529);

return statearr_44528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44529,cs,m,dchan,dctr,done))
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
var G__44587 = arguments.length;
switch (G__44587) {
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
var len__28364__auto___44599 = arguments.length;
var i__28365__auto___44600 = (0);
while(true){
if((i__28365__auto___44600 < len__28364__auto___44599)){
args__28371__auto__.push((arguments[i__28365__auto___44600]));

var G__44601 = (i__28365__auto___44600 + (1));
i__28365__auto___44600 = G__44601;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44593){
var map__44594 = p__44593;
var map__44594__$1 = ((((!((map__44594 == null)))?((((map__44594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44594):map__44594);
var opts = map__44594__$1;
var statearr_44596_44602 = state;
(statearr_44596_44602[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44594,map__44594__$1,opts){
return (function (val){
var statearr_44597_44603 = state;
(statearr_44597_44603[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44594,map__44594__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44598_44604 = state;
(statearr_44598_44604[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44589){
var G__44590 = cljs.core.first.call(null,seq44589);
var seq44589__$1 = cljs.core.next.call(null,seq44589);
var G__44591 = cljs.core.first.call(null,seq44589__$1);
var seq44589__$2 = cljs.core.next.call(null,seq44589__$1);
var G__44592 = cljs.core.first.call(null,seq44589__$2);
var seq44589__$3 = cljs.core.next.call(null,seq44589__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44590,G__44591,G__44592,seq44589__$3);
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
if(typeof cljs.core.async.t_cljs$core$async44605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44605 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44606){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44606 = meta44606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44607,meta44606__$1){
var self__ = this;
var _44607__$1 = this;
return (new cljs.core.async.t_cljs$core$async44605(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44606__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44607){
var self__ = this;
var _44607__$1 = this;
return self__.meta44606;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44605.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44606","meta44606",2053147709,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44605";

cljs.core.async.t_cljs$core$async44605.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44605");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44605 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44605(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44606){
return (new cljs.core.async.t_cljs$core$async44605(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44606));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44605(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___44769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44709){
var state_val_44710 = (state_44709[(1)]);
if((state_val_44710 === (7))){
var inst_44624 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
var statearr_44711_44770 = state_44709__$1;
(statearr_44711_44770[(2)] = inst_44624);

(statearr_44711_44770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (20))){
var inst_44636 = (state_44709[(7)]);
var state_44709__$1 = state_44709;
var statearr_44712_44771 = state_44709__$1;
(statearr_44712_44771[(2)] = inst_44636);

(statearr_44712_44771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (27))){
var state_44709__$1 = state_44709;
var statearr_44713_44772 = state_44709__$1;
(statearr_44713_44772[(2)] = null);

(statearr_44713_44772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (1))){
var inst_44611 = (state_44709[(8)]);
var inst_44611__$1 = calc_state.call(null);
var inst_44613 = (inst_44611__$1 == null);
var inst_44614 = cljs.core.not.call(null,inst_44613);
var state_44709__$1 = (function (){var statearr_44714 = state_44709;
(statearr_44714[(8)] = inst_44611__$1);

return statearr_44714;
})();
if(inst_44614){
var statearr_44715_44773 = state_44709__$1;
(statearr_44715_44773[(1)] = (2));

} else {
var statearr_44716_44774 = state_44709__$1;
(statearr_44716_44774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (24))){
var inst_44683 = (state_44709[(9)]);
var inst_44669 = (state_44709[(10)]);
var inst_44660 = (state_44709[(11)]);
var inst_44683__$1 = inst_44660.call(null,inst_44669);
var state_44709__$1 = (function (){var statearr_44717 = state_44709;
(statearr_44717[(9)] = inst_44683__$1);

return statearr_44717;
})();
if(cljs.core.truth_(inst_44683__$1)){
var statearr_44718_44775 = state_44709__$1;
(statearr_44718_44775[(1)] = (29));

} else {
var statearr_44719_44776 = state_44709__$1;
(statearr_44719_44776[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (4))){
var inst_44627 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44627)){
var statearr_44720_44777 = state_44709__$1;
(statearr_44720_44777[(1)] = (8));

} else {
var statearr_44721_44778 = state_44709__$1;
(statearr_44721_44778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (15))){
var inst_44654 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44654)){
var statearr_44722_44779 = state_44709__$1;
(statearr_44722_44779[(1)] = (19));

} else {
var statearr_44723_44780 = state_44709__$1;
(statearr_44723_44780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (21))){
var inst_44659 = (state_44709[(12)]);
var inst_44659__$1 = (state_44709[(2)]);
var inst_44660 = cljs.core.get.call(null,inst_44659__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44661 = cljs.core.get.call(null,inst_44659__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44662 = cljs.core.get.call(null,inst_44659__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44709__$1 = (function (){var statearr_44724 = state_44709;
(statearr_44724[(13)] = inst_44661);

(statearr_44724[(12)] = inst_44659__$1);

(statearr_44724[(11)] = inst_44660);

return statearr_44724;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44709__$1,(22),inst_44662);
} else {
if((state_val_44710 === (31))){
var inst_44691 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44691)){
var statearr_44725_44781 = state_44709__$1;
(statearr_44725_44781[(1)] = (32));

} else {
var statearr_44726_44782 = state_44709__$1;
(statearr_44726_44782[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (32))){
var inst_44668 = (state_44709[(14)]);
var state_44709__$1 = state_44709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44709__$1,(35),out,inst_44668);
} else {
if((state_val_44710 === (33))){
var inst_44659 = (state_44709[(12)]);
var inst_44636 = inst_44659;
var state_44709__$1 = (function (){var statearr_44727 = state_44709;
(statearr_44727[(7)] = inst_44636);

return statearr_44727;
})();
var statearr_44728_44783 = state_44709__$1;
(statearr_44728_44783[(2)] = null);

(statearr_44728_44783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (13))){
var inst_44636 = (state_44709[(7)]);
var inst_44643 = inst_44636.cljs$lang$protocol_mask$partition0$;
var inst_44644 = (inst_44643 & (64));
var inst_44645 = inst_44636.cljs$core$ISeq$;
var inst_44646 = (cljs.core.PROTOCOL_SENTINEL === inst_44645);
var inst_44647 = (inst_44644) || (inst_44646);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44647)){
var statearr_44729_44784 = state_44709__$1;
(statearr_44729_44784[(1)] = (16));

} else {
var statearr_44730_44785 = state_44709__$1;
(statearr_44730_44785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (22))){
var inst_44668 = (state_44709[(14)]);
var inst_44669 = (state_44709[(10)]);
var inst_44667 = (state_44709[(2)]);
var inst_44668__$1 = cljs.core.nth.call(null,inst_44667,(0),null);
var inst_44669__$1 = cljs.core.nth.call(null,inst_44667,(1),null);
var inst_44670 = (inst_44668__$1 == null);
var inst_44671 = cljs.core._EQ_.call(null,inst_44669__$1,change);
var inst_44672 = (inst_44670) || (inst_44671);
var state_44709__$1 = (function (){var statearr_44731 = state_44709;
(statearr_44731[(14)] = inst_44668__$1);

(statearr_44731[(10)] = inst_44669__$1);

return statearr_44731;
})();
if(cljs.core.truth_(inst_44672)){
var statearr_44732_44786 = state_44709__$1;
(statearr_44732_44786[(1)] = (23));

} else {
var statearr_44733_44787 = state_44709__$1;
(statearr_44733_44787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (36))){
var inst_44659 = (state_44709[(12)]);
var inst_44636 = inst_44659;
var state_44709__$1 = (function (){var statearr_44734 = state_44709;
(statearr_44734[(7)] = inst_44636);

return statearr_44734;
})();
var statearr_44735_44788 = state_44709__$1;
(statearr_44735_44788[(2)] = null);

(statearr_44735_44788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (29))){
var inst_44683 = (state_44709[(9)]);
var state_44709__$1 = state_44709;
var statearr_44736_44789 = state_44709__$1;
(statearr_44736_44789[(2)] = inst_44683);

(statearr_44736_44789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (6))){
var state_44709__$1 = state_44709;
var statearr_44737_44790 = state_44709__$1;
(statearr_44737_44790[(2)] = false);

(statearr_44737_44790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (28))){
var inst_44679 = (state_44709[(2)]);
var inst_44680 = calc_state.call(null);
var inst_44636 = inst_44680;
var state_44709__$1 = (function (){var statearr_44738 = state_44709;
(statearr_44738[(15)] = inst_44679);

(statearr_44738[(7)] = inst_44636);

return statearr_44738;
})();
var statearr_44739_44791 = state_44709__$1;
(statearr_44739_44791[(2)] = null);

(statearr_44739_44791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (25))){
var inst_44705 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
var statearr_44740_44792 = state_44709__$1;
(statearr_44740_44792[(2)] = inst_44705);

(statearr_44740_44792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (34))){
var inst_44703 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
var statearr_44741_44793 = state_44709__$1;
(statearr_44741_44793[(2)] = inst_44703);

(statearr_44741_44793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (17))){
var state_44709__$1 = state_44709;
var statearr_44742_44794 = state_44709__$1;
(statearr_44742_44794[(2)] = false);

(statearr_44742_44794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (3))){
var state_44709__$1 = state_44709;
var statearr_44743_44795 = state_44709__$1;
(statearr_44743_44795[(2)] = false);

(statearr_44743_44795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (12))){
var inst_44707 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44709__$1,inst_44707);
} else {
if((state_val_44710 === (2))){
var inst_44611 = (state_44709[(8)]);
var inst_44616 = inst_44611.cljs$lang$protocol_mask$partition0$;
var inst_44617 = (inst_44616 & (64));
var inst_44618 = inst_44611.cljs$core$ISeq$;
var inst_44619 = (cljs.core.PROTOCOL_SENTINEL === inst_44618);
var inst_44620 = (inst_44617) || (inst_44619);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44620)){
var statearr_44744_44796 = state_44709__$1;
(statearr_44744_44796[(1)] = (5));

} else {
var statearr_44745_44797 = state_44709__$1;
(statearr_44745_44797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (23))){
var inst_44668 = (state_44709[(14)]);
var inst_44674 = (inst_44668 == null);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44674)){
var statearr_44746_44798 = state_44709__$1;
(statearr_44746_44798[(1)] = (26));

} else {
var statearr_44747_44799 = state_44709__$1;
(statearr_44747_44799[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (35))){
var inst_44694 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
if(cljs.core.truth_(inst_44694)){
var statearr_44748_44800 = state_44709__$1;
(statearr_44748_44800[(1)] = (36));

} else {
var statearr_44749_44801 = state_44709__$1;
(statearr_44749_44801[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (19))){
var inst_44636 = (state_44709[(7)]);
var inst_44656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44636);
var state_44709__$1 = state_44709;
var statearr_44750_44802 = state_44709__$1;
(statearr_44750_44802[(2)] = inst_44656);

(statearr_44750_44802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (11))){
var inst_44636 = (state_44709[(7)]);
var inst_44640 = (inst_44636 == null);
var inst_44641 = cljs.core.not.call(null,inst_44640);
var state_44709__$1 = state_44709;
if(inst_44641){
var statearr_44751_44803 = state_44709__$1;
(statearr_44751_44803[(1)] = (13));

} else {
var statearr_44752_44804 = state_44709__$1;
(statearr_44752_44804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (9))){
var inst_44611 = (state_44709[(8)]);
var state_44709__$1 = state_44709;
var statearr_44753_44805 = state_44709__$1;
(statearr_44753_44805[(2)] = inst_44611);

(statearr_44753_44805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (5))){
var state_44709__$1 = state_44709;
var statearr_44754_44806 = state_44709__$1;
(statearr_44754_44806[(2)] = true);

(statearr_44754_44806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (14))){
var state_44709__$1 = state_44709;
var statearr_44755_44807 = state_44709__$1;
(statearr_44755_44807[(2)] = false);

(statearr_44755_44807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (26))){
var inst_44669 = (state_44709[(10)]);
var inst_44676 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44669);
var state_44709__$1 = state_44709;
var statearr_44756_44808 = state_44709__$1;
(statearr_44756_44808[(2)] = inst_44676);

(statearr_44756_44808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (16))){
var state_44709__$1 = state_44709;
var statearr_44757_44809 = state_44709__$1;
(statearr_44757_44809[(2)] = true);

(statearr_44757_44809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (38))){
var inst_44699 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
var statearr_44758_44810 = state_44709__$1;
(statearr_44758_44810[(2)] = inst_44699);

(statearr_44758_44810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (30))){
var inst_44661 = (state_44709[(13)]);
var inst_44669 = (state_44709[(10)]);
var inst_44660 = (state_44709[(11)]);
var inst_44686 = cljs.core.empty_QMARK_.call(null,inst_44660);
var inst_44687 = inst_44661.call(null,inst_44669);
var inst_44688 = cljs.core.not.call(null,inst_44687);
var inst_44689 = (inst_44686) && (inst_44688);
var state_44709__$1 = state_44709;
var statearr_44759_44811 = state_44709__$1;
(statearr_44759_44811[(2)] = inst_44689);

(statearr_44759_44811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (10))){
var inst_44611 = (state_44709[(8)]);
var inst_44632 = (state_44709[(2)]);
var inst_44633 = cljs.core.get.call(null,inst_44632,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44634 = cljs.core.get.call(null,inst_44632,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44635 = cljs.core.get.call(null,inst_44632,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44636 = inst_44611;
var state_44709__$1 = (function (){var statearr_44760 = state_44709;
(statearr_44760[(16)] = inst_44634);

(statearr_44760[(17)] = inst_44633);

(statearr_44760[(7)] = inst_44636);

(statearr_44760[(18)] = inst_44635);

return statearr_44760;
})();
var statearr_44761_44812 = state_44709__$1;
(statearr_44761_44812[(2)] = null);

(statearr_44761_44812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (18))){
var inst_44651 = (state_44709[(2)]);
var state_44709__$1 = state_44709;
var statearr_44762_44813 = state_44709__$1;
(statearr_44762_44813[(2)] = inst_44651);

(statearr_44762_44813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (37))){
var state_44709__$1 = state_44709;
var statearr_44763_44814 = state_44709__$1;
(statearr_44763_44814[(2)] = null);

(statearr_44763_44814[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44710 === (8))){
var inst_44611 = (state_44709[(8)]);
var inst_44629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44611);
var state_44709__$1 = state_44709;
var statearr_44764_44815 = state_44709__$1;
(statearr_44764_44815[(2)] = inst_44629);

(statearr_44764_44815[(1)] = (10));


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
});})(c__30952__auto___44769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30864__auto__,c__30952__auto___44769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30865__auto__ = null;
var cljs$core$async$mix_$_state_machine__30865__auto____0 = (function (){
var statearr_44765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44765[(0)] = cljs$core$async$mix_$_state_machine__30865__auto__);

(statearr_44765[(1)] = (1));

return statearr_44765;
});
var cljs$core$async$mix_$_state_machine__30865__auto____1 = (function (state_44709){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44766){if((e44766 instanceof Object)){
var ex__30868__auto__ = e44766;
var statearr_44767_44816 = state_44709;
(statearr_44767_44816[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44817 = state_44709;
state_44709 = G__44817;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30865__auto__ = function(state_44709){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30865__auto____1.call(this,state_44709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30865__auto____0;
cljs$core$async$mix_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30865__auto____1;
return cljs$core$async$mix_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30954__auto__ = (function (){var statearr_44768 = f__30953__auto__.call(null);
(statearr_44768[(6)] = c__30952__auto___44769);

return statearr_44768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44769,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44819 = arguments.length;
switch (G__44819) {
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
var G__44823 = arguments.length;
switch (G__44823) {
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
return (function (p1__44821_SHARP_){
if(cljs.core.truth_(p1__44821_SHARP_.call(null,topic))){
return p1__44821_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44821_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44824 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44825){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44825 = meta44825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44826,meta44825__$1){
var self__ = this;
var _44826__$1 = this;
return (new cljs.core.async.t_cljs$core$async44824(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44825__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44826){
var self__ = this;
var _44826__$1 = this;
return self__.meta44825;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44825","meta44825",1134366348,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44824";

cljs.core.async.t_cljs$core$async44824.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44824");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44824 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44825){
return (new cljs.core.async.t_cljs$core$async44824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44825));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44824(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___44944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___44944,mults,ensure_mult,p){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___44944,mults,ensure_mult,p){
return (function (state_44898){
var state_val_44899 = (state_44898[(1)]);
if((state_val_44899 === (7))){
var inst_44894 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44900_44945 = state_44898__$1;
(statearr_44900_44945[(2)] = inst_44894);

(statearr_44900_44945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (20))){
var state_44898__$1 = state_44898;
var statearr_44901_44946 = state_44898__$1;
(statearr_44901_44946[(2)] = null);

(statearr_44901_44946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (1))){
var state_44898__$1 = state_44898;
var statearr_44902_44947 = state_44898__$1;
(statearr_44902_44947[(2)] = null);

(statearr_44902_44947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (24))){
var inst_44877 = (state_44898[(7)]);
var inst_44886 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44877);
var state_44898__$1 = state_44898;
var statearr_44903_44948 = state_44898__$1;
(statearr_44903_44948[(2)] = inst_44886);

(statearr_44903_44948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (4))){
var inst_44829 = (state_44898[(8)]);
var inst_44829__$1 = (state_44898[(2)]);
var inst_44830 = (inst_44829__$1 == null);
var state_44898__$1 = (function (){var statearr_44904 = state_44898;
(statearr_44904[(8)] = inst_44829__$1);

return statearr_44904;
})();
if(cljs.core.truth_(inst_44830)){
var statearr_44905_44949 = state_44898__$1;
(statearr_44905_44949[(1)] = (5));

} else {
var statearr_44906_44950 = state_44898__$1;
(statearr_44906_44950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (15))){
var inst_44871 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44907_44951 = state_44898__$1;
(statearr_44907_44951[(2)] = inst_44871);

(statearr_44907_44951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (21))){
var inst_44891 = (state_44898[(2)]);
var state_44898__$1 = (function (){var statearr_44908 = state_44898;
(statearr_44908[(9)] = inst_44891);

return statearr_44908;
})();
var statearr_44909_44952 = state_44898__$1;
(statearr_44909_44952[(2)] = null);

(statearr_44909_44952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (13))){
var inst_44853 = (state_44898[(10)]);
var inst_44855 = cljs.core.chunked_seq_QMARK_.call(null,inst_44853);
var state_44898__$1 = state_44898;
if(inst_44855){
var statearr_44910_44953 = state_44898__$1;
(statearr_44910_44953[(1)] = (16));

} else {
var statearr_44911_44954 = state_44898__$1;
(statearr_44911_44954[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (22))){
var inst_44883 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
if(cljs.core.truth_(inst_44883)){
var statearr_44912_44955 = state_44898__$1;
(statearr_44912_44955[(1)] = (23));

} else {
var statearr_44913_44956 = state_44898__$1;
(statearr_44913_44956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (6))){
var inst_44879 = (state_44898[(11)]);
var inst_44829 = (state_44898[(8)]);
var inst_44877 = (state_44898[(7)]);
var inst_44877__$1 = topic_fn.call(null,inst_44829);
var inst_44878 = cljs.core.deref.call(null,mults);
var inst_44879__$1 = cljs.core.get.call(null,inst_44878,inst_44877__$1);
var state_44898__$1 = (function (){var statearr_44914 = state_44898;
(statearr_44914[(11)] = inst_44879__$1);

(statearr_44914[(7)] = inst_44877__$1);

return statearr_44914;
})();
if(cljs.core.truth_(inst_44879__$1)){
var statearr_44915_44957 = state_44898__$1;
(statearr_44915_44957[(1)] = (19));

} else {
var statearr_44916_44958 = state_44898__$1;
(statearr_44916_44958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (25))){
var inst_44888 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44917_44959 = state_44898__$1;
(statearr_44917_44959[(2)] = inst_44888);

(statearr_44917_44959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (17))){
var inst_44853 = (state_44898[(10)]);
var inst_44862 = cljs.core.first.call(null,inst_44853);
var inst_44863 = cljs.core.async.muxch_STAR_.call(null,inst_44862);
var inst_44864 = cljs.core.async.close_BANG_.call(null,inst_44863);
var inst_44865 = cljs.core.next.call(null,inst_44853);
var inst_44839 = inst_44865;
var inst_44840 = null;
var inst_44841 = (0);
var inst_44842 = (0);
var state_44898__$1 = (function (){var statearr_44918 = state_44898;
(statearr_44918[(12)] = inst_44841);

(statearr_44918[(13)] = inst_44839);

(statearr_44918[(14)] = inst_44840);

(statearr_44918[(15)] = inst_44842);

(statearr_44918[(16)] = inst_44864);

return statearr_44918;
})();
var statearr_44919_44960 = state_44898__$1;
(statearr_44919_44960[(2)] = null);

(statearr_44919_44960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (3))){
var inst_44896 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44898__$1,inst_44896);
} else {
if((state_val_44899 === (12))){
var inst_44873 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44920_44961 = state_44898__$1;
(statearr_44920_44961[(2)] = inst_44873);

(statearr_44920_44961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (2))){
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44898__$1,(4),ch);
} else {
if((state_val_44899 === (23))){
var state_44898__$1 = state_44898;
var statearr_44921_44962 = state_44898__$1;
(statearr_44921_44962[(2)] = null);

(statearr_44921_44962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (19))){
var inst_44879 = (state_44898[(11)]);
var inst_44829 = (state_44898[(8)]);
var inst_44881 = cljs.core.async.muxch_STAR_.call(null,inst_44879);
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44898__$1,(22),inst_44881,inst_44829);
} else {
if((state_val_44899 === (11))){
var inst_44839 = (state_44898[(13)]);
var inst_44853 = (state_44898[(10)]);
var inst_44853__$1 = cljs.core.seq.call(null,inst_44839);
var state_44898__$1 = (function (){var statearr_44922 = state_44898;
(statearr_44922[(10)] = inst_44853__$1);

return statearr_44922;
})();
if(inst_44853__$1){
var statearr_44923_44963 = state_44898__$1;
(statearr_44923_44963[(1)] = (13));

} else {
var statearr_44924_44964 = state_44898__$1;
(statearr_44924_44964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (9))){
var inst_44875 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44925_44965 = state_44898__$1;
(statearr_44925_44965[(2)] = inst_44875);

(statearr_44925_44965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (5))){
var inst_44836 = cljs.core.deref.call(null,mults);
var inst_44837 = cljs.core.vals.call(null,inst_44836);
var inst_44838 = cljs.core.seq.call(null,inst_44837);
var inst_44839 = inst_44838;
var inst_44840 = null;
var inst_44841 = (0);
var inst_44842 = (0);
var state_44898__$1 = (function (){var statearr_44926 = state_44898;
(statearr_44926[(12)] = inst_44841);

(statearr_44926[(13)] = inst_44839);

(statearr_44926[(14)] = inst_44840);

(statearr_44926[(15)] = inst_44842);

return statearr_44926;
})();
var statearr_44927_44966 = state_44898__$1;
(statearr_44927_44966[(2)] = null);

(statearr_44927_44966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (14))){
var state_44898__$1 = state_44898;
var statearr_44931_44967 = state_44898__$1;
(statearr_44931_44967[(2)] = null);

(statearr_44931_44967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (16))){
var inst_44853 = (state_44898[(10)]);
var inst_44857 = cljs.core.chunk_first.call(null,inst_44853);
var inst_44858 = cljs.core.chunk_rest.call(null,inst_44853);
var inst_44859 = cljs.core.count.call(null,inst_44857);
var inst_44839 = inst_44858;
var inst_44840 = inst_44857;
var inst_44841 = inst_44859;
var inst_44842 = (0);
var state_44898__$1 = (function (){var statearr_44932 = state_44898;
(statearr_44932[(12)] = inst_44841);

(statearr_44932[(13)] = inst_44839);

(statearr_44932[(14)] = inst_44840);

(statearr_44932[(15)] = inst_44842);

return statearr_44932;
})();
var statearr_44933_44968 = state_44898__$1;
(statearr_44933_44968[(2)] = null);

(statearr_44933_44968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (10))){
var inst_44841 = (state_44898[(12)]);
var inst_44839 = (state_44898[(13)]);
var inst_44840 = (state_44898[(14)]);
var inst_44842 = (state_44898[(15)]);
var inst_44847 = cljs.core._nth.call(null,inst_44840,inst_44842);
var inst_44848 = cljs.core.async.muxch_STAR_.call(null,inst_44847);
var inst_44849 = cljs.core.async.close_BANG_.call(null,inst_44848);
var inst_44850 = (inst_44842 + (1));
var tmp44928 = inst_44841;
var tmp44929 = inst_44839;
var tmp44930 = inst_44840;
var inst_44839__$1 = tmp44929;
var inst_44840__$1 = tmp44930;
var inst_44841__$1 = tmp44928;
var inst_44842__$1 = inst_44850;
var state_44898__$1 = (function (){var statearr_44934 = state_44898;
(statearr_44934[(12)] = inst_44841__$1);

(statearr_44934[(13)] = inst_44839__$1);

(statearr_44934[(14)] = inst_44840__$1);

(statearr_44934[(15)] = inst_44842__$1);

(statearr_44934[(17)] = inst_44849);

return statearr_44934;
})();
var statearr_44935_44969 = state_44898__$1;
(statearr_44935_44969[(2)] = null);

(statearr_44935_44969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (18))){
var inst_44868 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44936_44970 = state_44898__$1;
(statearr_44936_44970[(2)] = inst_44868);

(statearr_44936_44970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (8))){
var inst_44841 = (state_44898[(12)]);
var inst_44842 = (state_44898[(15)]);
var inst_44844 = (inst_44842 < inst_44841);
var inst_44845 = inst_44844;
var state_44898__$1 = state_44898;
if(cljs.core.truth_(inst_44845)){
var statearr_44937_44971 = state_44898__$1;
(statearr_44937_44971[(1)] = (10));

} else {
var statearr_44938_44972 = state_44898__$1;
(statearr_44938_44972[(1)] = (11));

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
});})(c__30952__auto___44944,mults,ensure_mult,p))
;
return ((function (switch__30864__auto__,c__30952__auto___44944,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_44939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44939[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_44939[(1)] = (1));

return statearr_44939;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_44898){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_44898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e44940){if((e44940 instanceof Object)){
var ex__30868__auto__ = e44940;
var statearr_44941_44973 = state_44898;
(statearr_44941_44973[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44974 = state_44898;
state_44898 = G__44974;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_44898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_44898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___44944,mults,ensure_mult,p))
})();
var state__30954__auto__ = (function (){var statearr_44942 = f__30953__auto__.call(null);
(statearr_44942[(6)] = c__30952__auto___44944);

return statearr_44942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___44944,mults,ensure_mult,p))
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
var G__44976 = arguments.length;
switch (G__44976) {
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
var G__44979 = arguments.length;
switch (G__44979) {
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
var G__44982 = arguments.length;
switch (G__44982) {
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
var c__30952__auto___45049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45049,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45049,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45021){
var state_val_45022 = (state_45021[(1)]);
if((state_val_45022 === (7))){
var state_45021__$1 = state_45021;
var statearr_45023_45050 = state_45021__$1;
(statearr_45023_45050[(2)] = null);

(statearr_45023_45050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (1))){
var state_45021__$1 = state_45021;
var statearr_45024_45051 = state_45021__$1;
(statearr_45024_45051[(2)] = null);

(statearr_45024_45051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (4))){
var inst_44985 = (state_45021[(7)]);
var inst_44987 = (inst_44985 < cnt);
var state_45021__$1 = state_45021;
if(cljs.core.truth_(inst_44987)){
var statearr_45025_45052 = state_45021__$1;
(statearr_45025_45052[(1)] = (6));

} else {
var statearr_45026_45053 = state_45021__$1;
(statearr_45026_45053[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (15))){
var inst_45017 = (state_45021[(2)]);
var state_45021__$1 = state_45021;
var statearr_45027_45054 = state_45021__$1;
(statearr_45027_45054[(2)] = inst_45017);

(statearr_45027_45054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (13))){
var inst_45010 = cljs.core.async.close_BANG_.call(null,out);
var state_45021__$1 = state_45021;
var statearr_45028_45055 = state_45021__$1;
(statearr_45028_45055[(2)] = inst_45010);

(statearr_45028_45055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (6))){
var state_45021__$1 = state_45021;
var statearr_45029_45056 = state_45021__$1;
(statearr_45029_45056[(2)] = null);

(statearr_45029_45056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (3))){
var inst_45019 = (state_45021[(2)]);
var state_45021__$1 = state_45021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45021__$1,inst_45019);
} else {
if((state_val_45022 === (12))){
var inst_45007 = (state_45021[(8)]);
var inst_45007__$1 = (state_45021[(2)]);
var inst_45008 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45007__$1);
var state_45021__$1 = (function (){var statearr_45030 = state_45021;
(statearr_45030[(8)] = inst_45007__$1);

return statearr_45030;
})();
if(cljs.core.truth_(inst_45008)){
var statearr_45031_45057 = state_45021__$1;
(statearr_45031_45057[(1)] = (13));

} else {
var statearr_45032_45058 = state_45021__$1;
(statearr_45032_45058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (2))){
var inst_44984 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44985 = (0);
var state_45021__$1 = (function (){var statearr_45033 = state_45021;
(statearr_45033[(7)] = inst_44985);

(statearr_45033[(9)] = inst_44984);

return statearr_45033;
})();
var statearr_45034_45059 = state_45021__$1;
(statearr_45034_45059[(2)] = null);

(statearr_45034_45059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (11))){
var inst_44985 = (state_45021[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45021,(10),Object,null,(9));
var inst_44994 = chs__$1.call(null,inst_44985);
var inst_44995 = done.call(null,inst_44985);
var inst_44996 = cljs.core.async.take_BANG_.call(null,inst_44994,inst_44995);
var state_45021__$1 = state_45021;
var statearr_45035_45060 = state_45021__$1;
(statearr_45035_45060[(2)] = inst_44996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (9))){
var inst_44985 = (state_45021[(7)]);
var inst_44998 = (state_45021[(2)]);
var inst_44999 = (inst_44985 + (1));
var inst_44985__$1 = inst_44999;
var state_45021__$1 = (function (){var statearr_45036 = state_45021;
(statearr_45036[(7)] = inst_44985__$1);

(statearr_45036[(10)] = inst_44998);

return statearr_45036;
})();
var statearr_45037_45061 = state_45021__$1;
(statearr_45037_45061[(2)] = null);

(statearr_45037_45061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (5))){
var inst_45005 = (state_45021[(2)]);
var state_45021__$1 = (function (){var statearr_45038 = state_45021;
(statearr_45038[(11)] = inst_45005);

return statearr_45038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45021__$1,(12),dchan);
} else {
if((state_val_45022 === (14))){
var inst_45007 = (state_45021[(8)]);
var inst_45012 = cljs.core.apply.call(null,f,inst_45007);
var state_45021__$1 = state_45021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45021__$1,(16),out,inst_45012);
} else {
if((state_val_45022 === (16))){
var inst_45014 = (state_45021[(2)]);
var state_45021__$1 = (function (){var statearr_45039 = state_45021;
(statearr_45039[(12)] = inst_45014);

return statearr_45039;
})();
var statearr_45040_45062 = state_45021__$1;
(statearr_45040_45062[(2)] = null);

(statearr_45040_45062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (10))){
var inst_44989 = (state_45021[(2)]);
var inst_44990 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45021__$1 = (function (){var statearr_45041 = state_45021;
(statearr_45041[(13)] = inst_44989);

return statearr_45041;
})();
var statearr_45042_45063 = state_45021__$1;
(statearr_45042_45063[(2)] = inst_44990);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45022 === (8))){
var inst_45003 = (state_45021[(2)]);
var state_45021__$1 = state_45021;
var statearr_45043_45064 = state_45021__$1;
(statearr_45043_45064[(2)] = inst_45003);

(statearr_45043_45064[(1)] = (5));


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
});})(c__30952__auto___45049,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30864__auto__,c__30952__auto___45049,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45044[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45044[(1)] = (1));

return statearr_45044;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45021){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45045){if((e45045 instanceof Object)){
var ex__30868__auto__ = e45045;
var statearr_45046_45065 = state_45021;
(statearr_45046_45065[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45066 = state_45021;
state_45021 = G__45066;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45049,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30954__auto__ = (function (){var statearr_45047 = f__30953__auto__.call(null);
(statearr_45047[(6)] = c__30952__auto___45049);

return statearr_45047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45049,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45069 = arguments.length;
switch (G__45069) {
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
var c__30952__auto___45123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45123,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45123,out){
return (function (state_45101){
var state_val_45102 = (state_45101[(1)]);
if((state_val_45102 === (7))){
var inst_45081 = (state_45101[(7)]);
var inst_45080 = (state_45101[(8)]);
var inst_45080__$1 = (state_45101[(2)]);
var inst_45081__$1 = cljs.core.nth.call(null,inst_45080__$1,(0),null);
var inst_45082 = cljs.core.nth.call(null,inst_45080__$1,(1),null);
var inst_45083 = (inst_45081__$1 == null);
var state_45101__$1 = (function (){var statearr_45103 = state_45101;
(statearr_45103[(7)] = inst_45081__$1);

(statearr_45103[(9)] = inst_45082);

(statearr_45103[(8)] = inst_45080__$1);

return statearr_45103;
})();
if(cljs.core.truth_(inst_45083)){
var statearr_45104_45124 = state_45101__$1;
(statearr_45104_45124[(1)] = (8));

} else {
var statearr_45105_45125 = state_45101__$1;
(statearr_45105_45125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (1))){
var inst_45070 = cljs.core.vec.call(null,chs);
var inst_45071 = inst_45070;
var state_45101__$1 = (function (){var statearr_45106 = state_45101;
(statearr_45106[(10)] = inst_45071);

return statearr_45106;
})();
var statearr_45107_45126 = state_45101__$1;
(statearr_45107_45126[(2)] = null);

(statearr_45107_45126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (4))){
var inst_45071 = (state_45101[(10)]);
var state_45101__$1 = state_45101;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45101__$1,(7),inst_45071);
} else {
if((state_val_45102 === (6))){
var inst_45097 = (state_45101[(2)]);
var state_45101__$1 = state_45101;
var statearr_45108_45127 = state_45101__$1;
(statearr_45108_45127[(2)] = inst_45097);

(statearr_45108_45127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (3))){
var inst_45099 = (state_45101[(2)]);
var state_45101__$1 = state_45101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45101__$1,inst_45099);
} else {
if((state_val_45102 === (2))){
var inst_45071 = (state_45101[(10)]);
var inst_45073 = cljs.core.count.call(null,inst_45071);
var inst_45074 = (inst_45073 > (0));
var state_45101__$1 = state_45101;
if(cljs.core.truth_(inst_45074)){
var statearr_45110_45128 = state_45101__$1;
(statearr_45110_45128[(1)] = (4));

} else {
var statearr_45111_45129 = state_45101__$1;
(statearr_45111_45129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (11))){
var inst_45071 = (state_45101[(10)]);
var inst_45090 = (state_45101[(2)]);
var tmp45109 = inst_45071;
var inst_45071__$1 = tmp45109;
var state_45101__$1 = (function (){var statearr_45112 = state_45101;
(statearr_45112[(10)] = inst_45071__$1);

(statearr_45112[(11)] = inst_45090);

return statearr_45112;
})();
var statearr_45113_45130 = state_45101__$1;
(statearr_45113_45130[(2)] = null);

(statearr_45113_45130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (9))){
var inst_45081 = (state_45101[(7)]);
var state_45101__$1 = state_45101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45101__$1,(11),out,inst_45081);
} else {
if((state_val_45102 === (5))){
var inst_45095 = cljs.core.async.close_BANG_.call(null,out);
var state_45101__$1 = state_45101;
var statearr_45114_45131 = state_45101__$1;
(statearr_45114_45131[(2)] = inst_45095);

(statearr_45114_45131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (10))){
var inst_45093 = (state_45101[(2)]);
var state_45101__$1 = state_45101;
var statearr_45115_45132 = state_45101__$1;
(statearr_45115_45132[(2)] = inst_45093);

(statearr_45115_45132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45102 === (8))){
var inst_45071 = (state_45101[(10)]);
var inst_45081 = (state_45101[(7)]);
var inst_45082 = (state_45101[(9)]);
var inst_45080 = (state_45101[(8)]);
var inst_45085 = (function (){var cs = inst_45071;
var vec__45076 = inst_45080;
var v = inst_45081;
var c = inst_45082;
return ((function (cs,vec__45076,v,c,inst_45071,inst_45081,inst_45082,inst_45080,state_val_45102,c__30952__auto___45123,out){
return (function (p1__45067_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45067_SHARP_);
});
;})(cs,vec__45076,v,c,inst_45071,inst_45081,inst_45082,inst_45080,state_val_45102,c__30952__auto___45123,out))
})();
var inst_45086 = cljs.core.filterv.call(null,inst_45085,inst_45071);
var inst_45071__$1 = inst_45086;
var state_45101__$1 = (function (){var statearr_45116 = state_45101;
(statearr_45116[(10)] = inst_45071__$1);

return statearr_45116;
})();
var statearr_45117_45133 = state_45101__$1;
(statearr_45117_45133[(2)] = null);

(statearr_45117_45133[(1)] = (2));


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
});})(c__30952__auto___45123,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45123,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45118 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45118[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45118[(1)] = (1));

return statearr_45118;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45101){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45119){if((e45119 instanceof Object)){
var ex__30868__auto__ = e45119;
var statearr_45120_45134 = state_45101;
(statearr_45120_45134[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45135 = state_45101;
state_45101 = G__45135;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45123,out))
})();
var state__30954__auto__ = (function (){var statearr_45121 = f__30953__auto__.call(null);
(statearr_45121[(6)] = c__30952__auto___45123);

return statearr_45121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45123,out))
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
var G__45137 = arguments.length;
switch (G__45137) {
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
var c__30952__auto___45182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45182,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45182,out){
return (function (state_45161){
var state_val_45162 = (state_45161[(1)]);
if((state_val_45162 === (7))){
var inst_45143 = (state_45161[(7)]);
var inst_45143__$1 = (state_45161[(2)]);
var inst_45144 = (inst_45143__$1 == null);
var inst_45145 = cljs.core.not.call(null,inst_45144);
var state_45161__$1 = (function (){var statearr_45163 = state_45161;
(statearr_45163[(7)] = inst_45143__$1);

return statearr_45163;
})();
if(inst_45145){
var statearr_45164_45183 = state_45161__$1;
(statearr_45164_45183[(1)] = (8));

} else {
var statearr_45165_45184 = state_45161__$1;
(statearr_45165_45184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (1))){
var inst_45138 = (0);
var state_45161__$1 = (function (){var statearr_45166 = state_45161;
(statearr_45166[(8)] = inst_45138);

return statearr_45166;
})();
var statearr_45167_45185 = state_45161__$1;
(statearr_45167_45185[(2)] = null);

(statearr_45167_45185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (4))){
var state_45161__$1 = state_45161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45161__$1,(7),ch);
} else {
if((state_val_45162 === (6))){
var inst_45156 = (state_45161[(2)]);
var state_45161__$1 = state_45161;
var statearr_45168_45186 = state_45161__$1;
(statearr_45168_45186[(2)] = inst_45156);

(statearr_45168_45186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (3))){
var inst_45158 = (state_45161[(2)]);
var inst_45159 = cljs.core.async.close_BANG_.call(null,out);
var state_45161__$1 = (function (){var statearr_45169 = state_45161;
(statearr_45169[(9)] = inst_45158);

return statearr_45169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45161__$1,inst_45159);
} else {
if((state_val_45162 === (2))){
var inst_45138 = (state_45161[(8)]);
var inst_45140 = (inst_45138 < n);
var state_45161__$1 = state_45161;
if(cljs.core.truth_(inst_45140)){
var statearr_45170_45187 = state_45161__$1;
(statearr_45170_45187[(1)] = (4));

} else {
var statearr_45171_45188 = state_45161__$1;
(statearr_45171_45188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (11))){
var inst_45138 = (state_45161[(8)]);
var inst_45148 = (state_45161[(2)]);
var inst_45149 = (inst_45138 + (1));
var inst_45138__$1 = inst_45149;
var state_45161__$1 = (function (){var statearr_45172 = state_45161;
(statearr_45172[(8)] = inst_45138__$1);

(statearr_45172[(10)] = inst_45148);

return statearr_45172;
})();
var statearr_45173_45189 = state_45161__$1;
(statearr_45173_45189[(2)] = null);

(statearr_45173_45189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (9))){
var state_45161__$1 = state_45161;
var statearr_45174_45190 = state_45161__$1;
(statearr_45174_45190[(2)] = null);

(statearr_45174_45190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (5))){
var state_45161__$1 = state_45161;
var statearr_45175_45191 = state_45161__$1;
(statearr_45175_45191[(2)] = null);

(statearr_45175_45191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (10))){
var inst_45153 = (state_45161[(2)]);
var state_45161__$1 = state_45161;
var statearr_45176_45192 = state_45161__$1;
(statearr_45176_45192[(2)] = inst_45153);

(statearr_45176_45192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (8))){
var inst_45143 = (state_45161[(7)]);
var state_45161__$1 = state_45161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45161__$1,(11),out,inst_45143);
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
});})(c__30952__auto___45182,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45182,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45177[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45177[(1)] = (1));

return statearr_45177;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45161){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45178){if((e45178 instanceof Object)){
var ex__30868__auto__ = e45178;
var statearr_45179_45193 = state_45161;
(statearr_45179_45193[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45194 = state_45161;
state_45161 = G__45194;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45182,out))
})();
var state__30954__auto__ = (function (){var statearr_45180 = f__30953__auto__.call(null);
(statearr_45180[(6)] = c__30952__auto___45182);

return statearr_45180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45182,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45196 = (function (f,ch,meta45197){
this.f = f;
this.ch = ch;
this.meta45197 = meta45197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45198,meta45197__$1){
var self__ = this;
var _45198__$1 = this;
return (new cljs.core.async.t_cljs$core$async45196(self__.f,self__.ch,meta45197__$1));
});

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45198){
var self__ = this;
var _45198__$1 = this;
return self__.meta45197;
});

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45199 = (function (f,ch,meta45197,_,fn1,meta45200){
this.f = f;
this.ch = ch;
this.meta45197 = meta45197;
this._ = _;
this.fn1 = fn1;
this.meta45200 = meta45200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45201,meta45200__$1){
var self__ = this;
var _45201__$1 = this;
return (new cljs.core.async.t_cljs$core$async45199(self__.f,self__.ch,self__.meta45197,self__._,self__.fn1,meta45200__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45201){
var self__ = this;
var _45201__$1 = this;
return self__.meta45200;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45195_SHARP_){
return f1.call(null,(((p1__45195_SHARP_ == null))?null:self__.f.call(null,p1__45195_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45199.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45197","meta45197",1028296486,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45196","cljs.core.async/t_cljs$core$async45196",-939258160,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45200","meta45200",1785701602,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45199";

cljs.core.async.t_cljs$core$async45199.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45199");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45199 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45199(f__$1,ch__$1,meta45197__$1,___$2,fn1__$1,meta45200){
return (new cljs.core.async.t_cljs$core$async45199(f__$1,ch__$1,meta45197__$1,___$2,fn1__$1,meta45200));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45199(self__.f,self__.ch,self__.meta45197,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45197","meta45197",1028296486,null)], null);
});

cljs.core.async.t_cljs$core$async45196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45196";

cljs.core.async.t_cljs$core$async45196.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45196");
});

cljs.core.async.__GT_t_cljs$core$async45196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45196(f__$1,ch__$1,meta45197){
return (new cljs.core.async.t_cljs$core$async45196(f__$1,ch__$1,meta45197));
});

}

return (new cljs.core.async.t_cljs$core$async45196(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45202 = (function (f,ch,meta45203){
this.f = f;
this.ch = ch;
this.meta45203 = meta45203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45204,meta45203__$1){
var self__ = this;
var _45204__$1 = this;
return (new cljs.core.async.t_cljs$core$async45202(self__.f,self__.ch,meta45203__$1));
});

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45204){
var self__ = this;
var _45204__$1 = this;
return self__.meta45203;
});

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45203","meta45203",1647751616,null)], null);
});

cljs.core.async.t_cljs$core$async45202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45202";

cljs.core.async.t_cljs$core$async45202.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45202");
});

cljs.core.async.__GT_t_cljs$core$async45202 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45202(f__$1,ch__$1,meta45203){
return (new cljs.core.async.t_cljs$core$async45202(f__$1,ch__$1,meta45203));
});

}

return (new cljs.core.async.t_cljs$core$async45202(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45205 = (function (p,ch,meta45206){
this.p = p;
this.ch = ch;
this.meta45206 = meta45206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45207,meta45206__$1){
var self__ = this;
var _45207__$1 = this;
return (new cljs.core.async.t_cljs$core$async45205(self__.p,self__.ch,meta45206__$1));
});

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45207){
var self__ = this;
var _45207__$1 = this;
return self__.meta45206;
});

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45206","meta45206",1268302381,null)], null);
});

cljs.core.async.t_cljs$core$async45205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45205";

cljs.core.async.t_cljs$core$async45205.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45205");
});

cljs.core.async.__GT_t_cljs$core$async45205 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45205(p__$1,ch__$1,meta45206){
return (new cljs.core.async.t_cljs$core$async45205(p__$1,ch__$1,meta45206));
});

}

return (new cljs.core.async.t_cljs$core$async45205(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45209 = arguments.length;
switch (G__45209) {
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
var c__30952__auto___45249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45249,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45249,out){
return (function (state_45230){
var state_val_45231 = (state_45230[(1)]);
if((state_val_45231 === (7))){
var inst_45226 = (state_45230[(2)]);
var state_45230__$1 = state_45230;
var statearr_45232_45250 = state_45230__$1;
(statearr_45232_45250[(2)] = inst_45226);

(statearr_45232_45250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (1))){
var state_45230__$1 = state_45230;
var statearr_45233_45251 = state_45230__$1;
(statearr_45233_45251[(2)] = null);

(statearr_45233_45251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (4))){
var inst_45212 = (state_45230[(7)]);
var inst_45212__$1 = (state_45230[(2)]);
var inst_45213 = (inst_45212__$1 == null);
var state_45230__$1 = (function (){var statearr_45234 = state_45230;
(statearr_45234[(7)] = inst_45212__$1);

return statearr_45234;
})();
if(cljs.core.truth_(inst_45213)){
var statearr_45235_45252 = state_45230__$1;
(statearr_45235_45252[(1)] = (5));

} else {
var statearr_45236_45253 = state_45230__$1;
(statearr_45236_45253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (6))){
var inst_45212 = (state_45230[(7)]);
var inst_45217 = p.call(null,inst_45212);
var state_45230__$1 = state_45230;
if(cljs.core.truth_(inst_45217)){
var statearr_45237_45254 = state_45230__$1;
(statearr_45237_45254[(1)] = (8));

} else {
var statearr_45238_45255 = state_45230__$1;
(statearr_45238_45255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (3))){
var inst_45228 = (state_45230[(2)]);
var state_45230__$1 = state_45230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45230__$1,inst_45228);
} else {
if((state_val_45231 === (2))){
var state_45230__$1 = state_45230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45230__$1,(4),ch);
} else {
if((state_val_45231 === (11))){
var inst_45220 = (state_45230[(2)]);
var state_45230__$1 = state_45230;
var statearr_45239_45256 = state_45230__$1;
(statearr_45239_45256[(2)] = inst_45220);

(statearr_45239_45256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (9))){
var state_45230__$1 = state_45230;
var statearr_45240_45257 = state_45230__$1;
(statearr_45240_45257[(2)] = null);

(statearr_45240_45257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (5))){
var inst_45215 = cljs.core.async.close_BANG_.call(null,out);
var state_45230__$1 = state_45230;
var statearr_45241_45258 = state_45230__$1;
(statearr_45241_45258[(2)] = inst_45215);

(statearr_45241_45258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (10))){
var inst_45223 = (state_45230[(2)]);
var state_45230__$1 = (function (){var statearr_45242 = state_45230;
(statearr_45242[(8)] = inst_45223);

return statearr_45242;
})();
var statearr_45243_45259 = state_45230__$1;
(statearr_45243_45259[(2)] = null);

(statearr_45243_45259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45231 === (8))){
var inst_45212 = (state_45230[(7)]);
var state_45230__$1 = state_45230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45230__$1,(11),out,inst_45212);
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
});})(c__30952__auto___45249,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45249,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45244 = [null,null,null,null,null,null,null,null,null];
(statearr_45244[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45244[(1)] = (1));

return statearr_45244;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45230){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45245){if((e45245 instanceof Object)){
var ex__30868__auto__ = e45245;
var statearr_45246_45260 = state_45230;
(statearr_45246_45260[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45261 = state_45230;
state_45230 = G__45261;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45249,out))
})();
var state__30954__auto__ = (function (){var statearr_45247 = f__30953__auto__.call(null);
(statearr_45247[(6)] = c__30952__auto___45249);

return statearr_45247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45249,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45263 = arguments.length;
switch (G__45263) {
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
return (function (state_45326){
var state_val_45327 = (state_45326[(1)]);
if((state_val_45327 === (7))){
var inst_45322 = (state_45326[(2)]);
var state_45326__$1 = state_45326;
var statearr_45328_45366 = state_45326__$1;
(statearr_45328_45366[(2)] = inst_45322);

(statearr_45328_45366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (20))){
var inst_45292 = (state_45326[(7)]);
var inst_45303 = (state_45326[(2)]);
var inst_45304 = cljs.core.next.call(null,inst_45292);
var inst_45278 = inst_45304;
var inst_45279 = null;
var inst_45280 = (0);
var inst_45281 = (0);
var state_45326__$1 = (function (){var statearr_45329 = state_45326;
(statearr_45329[(8)] = inst_45280);

(statearr_45329[(9)] = inst_45303);

(statearr_45329[(10)] = inst_45278);

(statearr_45329[(11)] = inst_45279);

(statearr_45329[(12)] = inst_45281);

return statearr_45329;
})();
var statearr_45330_45367 = state_45326__$1;
(statearr_45330_45367[(2)] = null);

(statearr_45330_45367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (1))){
var state_45326__$1 = state_45326;
var statearr_45331_45368 = state_45326__$1;
(statearr_45331_45368[(2)] = null);

(statearr_45331_45368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (4))){
var inst_45267 = (state_45326[(13)]);
var inst_45267__$1 = (state_45326[(2)]);
var inst_45268 = (inst_45267__$1 == null);
var state_45326__$1 = (function (){var statearr_45332 = state_45326;
(statearr_45332[(13)] = inst_45267__$1);

return statearr_45332;
})();
if(cljs.core.truth_(inst_45268)){
var statearr_45333_45369 = state_45326__$1;
(statearr_45333_45369[(1)] = (5));

} else {
var statearr_45334_45370 = state_45326__$1;
(statearr_45334_45370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (15))){
var state_45326__$1 = state_45326;
var statearr_45338_45371 = state_45326__$1;
(statearr_45338_45371[(2)] = null);

(statearr_45338_45371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (21))){
var state_45326__$1 = state_45326;
var statearr_45339_45372 = state_45326__$1;
(statearr_45339_45372[(2)] = null);

(statearr_45339_45372[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (13))){
var inst_45280 = (state_45326[(8)]);
var inst_45278 = (state_45326[(10)]);
var inst_45279 = (state_45326[(11)]);
var inst_45281 = (state_45326[(12)]);
var inst_45288 = (state_45326[(2)]);
var inst_45289 = (inst_45281 + (1));
var tmp45335 = inst_45280;
var tmp45336 = inst_45278;
var tmp45337 = inst_45279;
var inst_45278__$1 = tmp45336;
var inst_45279__$1 = tmp45337;
var inst_45280__$1 = tmp45335;
var inst_45281__$1 = inst_45289;
var state_45326__$1 = (function (){var statearr_45340 = state_45326;
(statearr_45340[(8)] = inst_45280__$1);

(statearr_45340[(10)] = inst_45278__$1);

(statearr_45340[(14)] = inst_45288);

(statearr_45340[(11)] = inst_45279__$1);

(statearr_45340[(12)] = inst_45281__$1);

return statearr_45340;
})();
var statearr_45341_45373 = state_45326__$1;
(statearr_45341_45373[(2)] = null);

(statearr_45341_45373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (22))){
var state_45326__$1 = state_45326;
var statearr_45342_45374 = state_45326__$1;
(statearr_45342_45374[(2)] = null);

(statearr_45342_45374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (6))){
var inst_45267 = (state_45326[(13)]);
var inst_45276 = f.call(null,inst_45267);
var inst_45277 = cljs.core.seq.call(null,inst_45276);
var inst_45278 = inst_45277;
var inst_45279 = null;
var inst_45280 = (0);
var inst_45281 = (0);
var state_45326__$1 = (function (){var statearr_45343 = state_45326;
(statearr_45343[(8)] = inst_45280);

(statearr_45343[(10)] = inst_45278);

(statearr_45343[(11)] = inst_45279);

(statearr_45343[(12)] = inst_45281);

return statearr_45343;
})();
var statearr_45344_45375 = state_45326__$1;
(statearr_45344_45375[(2)] = null);

(statearr_45344_45375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (17))){
var inst_45292 = (state_45326[(7)]);
var inst_45296 = cljs.core.chunk_first.call(null,inst_45292);
var inst_45297 = cljs.core.chunk_rest.call(null,inst_45292);
var inst_45298 = cljs.core.count.call(null,inst_45296);
var inst_45278 = inst_45297;
var inst_45279 = inst_45296;
var inst_45280 = inst_45298;
var inst_45281 = (0);
var state_45326__$1 = (function (){var statearr_45345 = state_45326;
(statearr_45345[(8)] = inst_45280);

(statearr_45345[(10)] = inst_45278);

(statearr_45345[(11)] = inst_45279);

(statearr_45345[(12)] = inst_45281);

return statearr_45345;
})();
var statearr_45346_45376 = state_45326__$1;
(statearr_45346_45376[(2)] = null);

(statearr_45346_45376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (3))){
var inst_45324 = (state_45326[(2)]);
var state_45326__$1 = state_45326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45326__$1,inst_45324);
} else {
if((state_val_45327 === (12))){
var inst_45312 = (state_45326[(2)]);
var state_45326__$1 = state_45326;
var statearr_45347_45377 = state_45326__$1;
(statearr_45347_45377[(2)] = inst_45312);

(statearr_45347_45377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (2))){
var state_45326__$1 = state_45326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45326__$1,(4),in$);
} else {
if((state_val_45327 === (23))){
var inst_45320 = (state_45326[(2)]);
var state_45326__$1 = state_45326;
var statearr_45348_45378 = state_45326__$1;
(statearr_45348_45378[(2)] = inst_45320);

(statearr_45348_45378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (19))){
var inst_45307 = (state_45326[(2)]);
var state_45326__$1 = state_45326;
var statearr_45349_45379 = state_45326__$1;
(statearr_45349_45379[(2)] = inst_45307);

(statearr_45349_45379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (11))){
var inst_45278 = (state_45326[(10)]);
var inst_45292 = (state_45326[(7)]);
var inst_45292__$1 = cljs.core.seq.call(null,inst_45278);
var state_45326__$1 = (function (){var statearr_45350 = state_45326;
(statearr_45350[(7)] = inst_45292__$1);

return statearr_45350;
})();
if(inst_45292__$1){
var statearr_45351_45380 = state_45326__$1;
(statearr_45351_45380[(1)] = (14));

} else {
var statearr_45352_45381 = state_45326__$1;
(statearr_45352_45381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (9))){
var inst_45314 = (state_45326[(2)]);
var inst_45315 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45326__$1 = (function (){var statearr_45353 = state_45326;
(statearr_45353[(15)] = inst_45314);

return statearr_45353;
})();
if(cljs.core.truth_(inst_45315)){
var statearr_45354_45382 = state_45326__$1;
(statearr_45354_45382[(1)] = (21));

} else {
var statearr_45355_45383 = state_45326__$1;
(statearr_45355_45383[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (5))){
var inst_45270 = cljs.core.async.close_BANG_.call(null,out);
var state_45326__$1 = state_45326;
var statearr_45356_45384 = state_45326__$1;
(statearr_45356_45384[(2)] = inst_45270);

(statearr_45356_45384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (14))){
var inst_45292 = (state_45326[(7)]);
var inst_45294 = cljs.core.chunked_seq_QMARK_.call(null,inst_45292);
var state_45326__$1 = state_45326;
if(inst_45294){
var statearr_45357_45385 = state_45326__$1;
(statearr_45357_45385[(1)] = (17));

} else {
var statearr_45358_45386 = state_45326__$1;
(statearr_45358_45386[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (16))){
var inst_45310 = (state_45326[(2)]);
var state_45326__$1 = state_45326;
var statearr_45359_45387 = state_45326__$1;
(statearr_45359_45387[(2)] = inst_45310);

(statearr_45359_45387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45327 === (10))){
var inst_45279 = (state_45326[(11)]);
var inst_45281 = (state_45326[(12)]);
var inst_45286 = cljs.core._nth.call(null,inst_45279,inst_45281);
var state_45326__$1 = state_45326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45326__$1,(13),out,inst_45286);
} else {
if((state_val_45327 === (18))){
var inst_45292 = (state_45326[(7)]);
var inst_45301 = cljs.core.first.call(null,inst_45292);
var state_45326__$1 = state_45326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45326__$1,(20),out,inst_45301);
} else {
if((state_val_45327 === (8))){
var inst_45280 = (state_45326[(8)]);
var inst_45281 = (state_45326[(12)]);
var inst_45283 = (inst_45281 < inst_45280);
var inst_45284 = inst_45283;
var state_45326__$1 = state_45326;
if(cljs.core.truth_(inst_45284)){
var statearr_45360_45388 = state_45326__$1;
(statearr_45360_45388[(1)] = (10));

} else {
var statearr_45361_45389 = state_45326__$1;
(statearr_45361_45389[(1)] = (11));

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
var statearr_45362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45362[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__);

(statearr_45362[(1)] = (1));

return statearr_45362;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1 = (function (state_45326){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45363){if((e45363 instanceof Object)){
var ex__30868__auto__ = e45363;
var statearr_45364_45390 = state_45326;
(statearr_45364_45390[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45391 = state_45326;
state_45326 = G__45391;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__ = function(state_45326){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1.call(this,state_45326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_45365 = f__30953__auto__.call(null);
(statearr_45365[(6)] = c__30952__auto__);

return statearr_45365;
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
var G__45393 = arguments.length;
switch (G__45393) {
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
var G__45396 = arguments.length;
switch (G__45396) {
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
var G__45399 = arguments.length;
switch (G__45399) {
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
var c__30952__auto___45446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45446,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45446,out){
return (function (state_45423){
var state_val_45424 = (state_45423[(1)]);
if((state_val_45424 === (7))){
var inst_45418 = (state_45423[(2)]);
var state_45423__$1 = state_45423;
var statearr_45425_45447 = state_45423__$1;
(statearr_45425_45447[(2)] = inst_45418);

(statearr_45425_45447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (1))){
var inst_45400 = null;
var state_45423__$1 = (function (){var statearr_45426 = state_45423;
(statearr_45426[(7)] = inst_45400);

return statearr_45426;
})();
var statearr_45427_45448 = state_45423__$1;
(statearr_45427_45448[(2)] = null);

(statearr_45427_45448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (4))){
var inst_45403 = (state_45423[(8)]);
var inst_45403__$1 = (state_45423[(2)]);
var inst_45404 = (inst_45403__$1 == null);
var inst_45405 = cljs.core.not.call(null,inst_45404);
var state_45423__$1 = (function (){var statearr_45428 = state_45423;
(statearr_45428[(8)] = inst_45403__$1);

return statearr_45428;
})();
if(inst_45405){
var statearr_45429_45449 = state_45423__$1;
(statearr_45429_45449[(1)] = (5));

} else {
var statearr_45430_45450 = state_45423__$1;
(statearr_45430_45450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (6))){
var state_45423__$1 = state_45423;
var statearr_45431_45451 = state_45423__$1;
(statearr_45431_45451[(2)] = null);

(statearr_45431_45451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (3))){
var inst_45420 = (state_45423[(2)]);
var inst_45421 = cljs.core.async.close_BANG_.call(null,out);
var state_45423__$1 = (function (){var statearr_45432 = state_45423;
(statearr_45432[(9)] = inst_45420);

return statearr_45432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45423__$1,inst_45421);
} else {
if((state_val_45424 === (2))){
var state_45423__$1 = state_45423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45423__$1,(4),ch);
} else {
if((state_val_45424 === (11))){
var inst_45403 = (state_45423[(8)]);
var inst_45412 = (state_45423[(2)]);
var inst_45400 = inst_45403;
var state_45423__$1 = (function (){var statearr_45433 = state_45423;
(statearr_45433[(7)] = inst_45400);

(statearr_45433[(10)] = inst_45412);

return statearr_45433;
})();
var statearr_45434_45452 = state_45423__$1;
(statearr_45434_45452[(2)] = null);

(statearr_45434_45452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (9))){
var inst_45403 = (state_45423[(8)]);
var state_45423__$1 = state_45423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45423__$1,(11),out,inst_45403);
} else {
if((state_val_45424 === (5))){
var inst_45400 = (state_45423[(7)]);
var inst_45403 = (state_45423[(8)]);
var inst_45407 = cljs.core._EQ_.call(null,inst_45403,inst_45400);
var state_45423__$1 = state_45423;
if(inst_45407){
var statearr_45436_45453 = state_45423__$1;
(statearr_45436_45453[(1)] = (8));

} else {
var statearr_45437_45454 = state_45423__$1;
(statearr_45437_45454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (10))){
var inst_45415 = (state_45423[(2)]);
var state_45423__$1 = state_45423;
var statearr_45438_45455 = state_45423__$1;
(statearr_45438_45455[(2)] = inst_45415);

(statearr_45438_45455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (8))){
var inst_45400 = (state_45423[(7)]);
var tmp45435 = inst_45400;
var inst_45400__$1 = tmp45435;
var state_45423__$1 = (function (){var statearr_45439 = state_45423;
(statearr_45439[(7)] = inst_45400__$1);

return statearr_45439;
})();
var statearr_45440_45456 = state_45423__$1;
(statearr_45440_45456[(2)] = null);

(statearr_45440_45456[(1)] = (2));


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
});})(c__30952__auto___45446,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45446,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45441[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45441[(1)] = (1));

return statearr_45441;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45423){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45442){if((e45442 instanceof Object)){
var ex__30868__auto__ = e45442;
var statearr_45443_45457 = state_45423;
(statearr_45443_45457[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45458 = state_45423;
state_45423 = G__45458;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45446,out))
})();
var state__30954__auto__ = (function (){var statearr_45444 = f__30953__auto__.call(null);
(statearr_45444[(6)] = c__30952__auto___45446);

return statearr_45444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45446,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45460 = arguments.length;
switch (G__45460) {
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
var c__30952__auto___45526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45526,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45526,out){
return (function (state_45498){
var state_val_45499 = (state_45498[(1)]);
if((state_val_45499 === (7))){
var inst_45494 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45500_45527 = state_45498__$1;
(statearr_45500_45527[(2)] = inst_45494);

(statearr_45500_45527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (1))){
var inst_45461 = (new Array(n));
var inst_45462 = inst_45461;
var inst_45463 = (0);
var state_45498__$1 = (function (){var statearr_45501 = state_45498;
(statearr_45501[(7)] = inst_45463);

(statearr_45501[(8)] = inst_45462);

return statearr_45501;
})();
var statearr_45502_45528 = state_45498__$1;
(statearr_45502_45528[(2)] = null);

(statearr_45502_45528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (4))){
var inst_45466 = (state_45498[(9)]);
var inst_45466__$1 = (state_45498[(2)]);
var inst_45467 = (inst_45466__$1 == null);
var inst_45468 = cljs.core.not.call(null,inst_45467);
var state_45498__$1 = (function (){var statearr_45503 = state_45498;
(statearr_45503[(9)] = inst_45466__$1);

return statearr_45503;
})();
if(inst_45468){
var statearr_45504_45529 = state_45498__$1;
(statearr_45504_45529[(1)] = (5));

} else {
var statearr_45505_45530 = state_45498__$1;
(statearr_45505_45530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (15))){
var inst_45488 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45506_45531 = state_45498__$1;
(statearr_45506_45531[(2)] = inst_45488);

(statearr_45506_45531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (13))){
var state_45498__$1 = state_45498;
var statearr_45507_45532 = state_45498__$1;
(statearr_45507_45532[(2)] = null);

(statearr_45507_45532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (6))){
var inst_45463 = (state_45498[(7)]);
var inst_45484 = (inst_45463 > (0));
var state_45498__$1 = state_45498;
if(cljs.core.truth_(inst_45484)){
var statearr_45508_45533 = state_45498__$1;
(statearr_45508_45533[(1)] = (12));

} else {
var statearr_45509_45534 = state_45498__$1;
(statearr_45509_45534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (3))){
var inst_45496 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45498__$1,inst_45496);
} else {
if((state_val_45499 === (12))){
var inst_45462 = (state_45498[(8)]);
var inst_45486 = cljs.core.vec.call(null,inst_45462);
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45498__$1,(15),out,inst_45486);
} else {
if((state_val_45499 === (2))){
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45498__$1,(4),ch);
} else {
if((state_val_45499 === (11))){
var inst_45478 = (state_45498[(2)]);
var inst_45479 = (new Array(n));
var inst_45462 = inst_45479;
var inst_45463 = (0);
var state_45498__$1 = (function (){var statearr_45510 = state_45498;
(statearr_45510[(10)] = inst_45478);

(statearr_45510[(7)] = inst_45463);

(statearr_45510[(8)] = inst_45462);

return statearr_45510;
})();
var statearr_45511_45535 = state_45498__$1;
(statearr_45511_45535[(2)] = null);

(statearr_45511_45535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (9))){
var inst_45462 = (state_45498[(8)]);
var inst_45476 = cljs.core.vec.call(null,inst_45462);
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45498__$1,(11),out,inst_45476);
} else {
if((state_val_45499 === (5))){
var inst_45466 = (state_45498[(9)]);
var inst_45463 = (state_45498[(7)]);
var inst_45471 = (state_45498[(11)]);
var inst_45462 = (state_45498[(8)]);
var inst_45470 = (inst_45462[inst_45463] = inst_45466);
var inst_45471__$1 = (inst_45463 + (1));
var inst_45472 = (inst_45471__$1 < n);
var state_45498__$1 = (function (){var statearr_45512 = state_45498;
(statearr_45512[(12)] = inst_45470);

(statearr_45512[(11)] = inst_45471__$1);

return statearr_45512;
})();
if(cljs.core.truth_(inst_45472)){
var statearr_45513_45536 = state_45498__$1;
(statearr_45513_45536[(1)] = (8));

} else {
var statearr_45514_45537 = state_45498__$1;
(statearr_45514_45537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (14))){
var inst_45491 = (state_45498[(2)]);
var inst_45492 = cljs.core.async.close_BANG_.call(null,out);
var state_45498__$1 = (function (){var statearr_45516 = state_45498;
(statearr_45516[(13)] = inst_45491);

return statearr_45516;
})();
var statearr_45517_45538 = state_45498__$1;
(statearr_45517_45538[(2)] = inst_45492);

(statearr_45517_45538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (10))){
var inst_45482 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45518_45539 = state_45498__$1;
(statearr_45518_45539[(2)] = inst_45482);

(statearr_45518_45539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (8))){
var inst_45471 = (state_45498[(11)]);
var inst_45462 = (state_45498[(8)]);
var tmp45515 = inst_45462;
var inst_45462__$1 = tmp45515;
var inst_45463 = inst_45471;
var state_45498__$1 = (function (){var statearr_45519 = state_45498;
(statearr_45519[(7)] = inst_45463);

(statearr_45519[(8)] = inst_45462__$1);

return statearr_45519;
})();
var statearr_45520_45540 = state_45498__$1;
(statearr_45520_45540[(2)] = null);

(statearr_45520_45540[(1)] = (2));


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
});})(c__30952__auto___45526,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45526,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45521[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45521[(1)] = (1));

return statearr_45521;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45498){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45522){if((e45522 instanceof Object)){
var ex__30868__auto__ = e45522;
var statearr_45523_45541 = state_45498;
(statearr_45523_45541[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45542 = state_45498;
state_45498 = G__45542;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45526,out))
})();
var state__30954__auto__ = (function (){var statearr_45524 = f__30953__auto__.call(null);
(statearr_45524[(6)] = c__30952__auto___45526);

return statearr_45524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45526,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45544 = arguments.length;
switch (G__45544) {
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
var c__30952__auto___45614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___45614,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___45614,out){
return (function (state_45586){
var state_val_45587 = (state_45586[(1)]);
if((state_val_45587 === (7))){
var inst_45582 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45588_45615 = state_45586__$1;
(statearr_45588_45615[(2)] = inst_45582);

(statearr_45588_45615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (1))){
var inst_45545 = [];
var inst_45546 = inst_45545;
var inst_45547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45586__$1 = (function (){var statearr_45589 = state_45586;
(statearr_45589[(7)] = inst_45546);

(statearr_45589[(8)] = inst_45547);

return statearr_45589;
})();
var statearr_45590_45616 = state_45586__$1;
(statearr_45590_45616[(2)] = null);

(statearr_45590_45616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (4))){
var inst_45550 = (state_45586[(9)]);
var inst_45550__$1 = (state_45586[(2)]);
var inst_45551 = (inst_45550__$1 == null);
var inst_45552 = cljs.core.not.call(null,inst_45551);
var state_45586__$1 = (function (){var statearr_45591 = state_45586;
(statearr_45591[(9)] = inst_45550__$1);

return statearr_45591;
})();
if(inst_45552){
var statearr_45592_45617 = state_45586__$1;
(statearr_45592_45617[(1)] = (5));

} else {
var statearr_45593_45618 = state_45586__$1;
(statearr_45593_45618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (15))){
var inst_45576 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45594_45619 = state_45586__$1;
(statearr_45594_45619[(2)] = inst_45576);

(statearr_45594_45619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (13))){
var state_45586__$1 = state_45586;
var statearr_45595_45620 = state_45586__$1;
(statearr_45595_45620[(2)] = null);

(statearr_45595_45620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (6))){
var inst_45546 = (state_45586[(7)]);
var inst_45571 = inst_45546.length;
var inst_45572 = (inst_45571 > (0));
var state_45586__$1 = state_45586;
if(cljs.core.truth_(inst_45572)){
var statearr_45596_45621 = state_45586__$1;
(statearr_45596_45621[(1)] = (12));

} else {
var statearr_45597_45622 = state_45586__$1;
(statearr_45597_45622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (3))){
var inst_45584 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45586__$1,inst_45584);
} else {
if((state_val_45587 === (12))){
var inst_45546 = (state_45586[(7)]);
var inst_45574 = cljs.core.vec.call(null,inst_45546);
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45586__$1,(15),out,inst_45574);
} else {
if((state_val_45587 === (2))){
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45586__$1,(4),ch);
} else {
if((state_val_45587 === (11))){
var inst_45554 = (state_45586[(10)]);
var inst_45550 = (state_45586[(9)]);
var inst_45564 = (state_45586[(2)]);
var inst_45565 = [];
var inst_45566 = inst_45565.push(inst_45550);
var inst_45546 = inst_45565;
var inst_45547 = inst_45554;
var state_45586__$1 = (function (){var statearr_45598 = state_45586;
(statearr_45598[(7)] = inst_45546);

(statearr_45598[(8)] = inst_45547);

(statearr_45598[(11)] = inst_45566);

(statearr_45598[(12)] = inst_45564);

return statearr_45598;
})();
var statearr_45599_45623 = state_45586__$1;
(statearr_45599_45623[(2)] = null);

(statearr_45599_45623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (9))){
var inst_45546 = (state_45586[(7)]);
var inst_45562 = cljs.core.vec.call(null,inst_45546);
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45586__$1,(11),out,inst_45562);
} else {
if((state_val_45587 === (5))){
var inst_45547 = (state_45586[(8)]);
var inst_45554 = (state_45586[(10)]);
var inst_45550 = (state_45586[(9)]);
var inst_45554__$1 = f.call(null,inst_45550);
var inst_45555 = cljs.core._EQ_.call(null,inst_45554__$1,inst_45547);
var inst_45556 = cljs.core.keyword_identical_QMARK_.call(null,inst_45547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45557 = (inst_45555) || (inst_45556);
var state_45586__$1 = (function (){var statearr_45600 = state_45586;
(statearr_45600[(10)] = inst_45554__$1);

return statearr_45600;
})();
if(cljs.core.truth_(inst_45557)){
var statearr_45601_45624 = state_45586__$1;
(statearr_45601_45624[(1)] = (8));

} else {
var statearr_45602_45625 = state_45586__$1;
(statearr_45602_45625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (14))){
var inst_45579 = (state_45586[(2)]);
var inst_45580 = cljs.core.async.close_BANG_.call(null,out);
var state_45586__$1 = (function (){var statearr_45604 = state_45586;
(statearr_45604[(13)] = inst_45579);

return statearr_45604;
})();
var statearr_45605_45626 = state_45586__$1;
(statearr_45605_45626[(2)] = inst_45580);

(statearr_45605_45626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (10))){
var inst_45569 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45606_45627 = state_45586__$1;
(statearr_45606_45627[(2)] = inst_45569);

(statearr_45606_45627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (8))){
var inst_45546 = (state_45586[(7)]);
var inst_45554 = (state_45586[(10)]);
var inst_45550 = (state_45586[(9)]);
var inst_45559 = inst_45546.push(inst_45550);
var tmp45603 = inst_45546;
var inst_45546__$1 = tmp45603;
var inst_45547 = inst_45554;
var state_45586__$1 = (function (){var statearr_45607 = state_45586;
(statearr_45607[(7)] = inst_45546__$1);

(statearr_45607[(8)] = inst_45547);

(statearr_45607[(14)] = inst_45559);

return statearr_45607;
})();
var statearr_45608_45628 = state_45586__$1;
(statearr_45608_45628[(2)] = null);

(statearr_45608_45628[(1)] = (2));


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
});})(c__30952__auto___45614,out))
;
return ((function (switch__30864__auto__,c__30952__auto___45614,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_45609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45609[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_45609[(1)] = (1));

return statearr_45609;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_45586){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_45586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e45610){if((e45610 instanceof Object)){
var ex__30868__auto__ = e45610;
var statearr_45611_45629 = state_45586;
(statearr_45611_45629[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45630 = state_45586;
state_45586 = G__45630;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_45586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_45586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___45614,out))
})();
var state__30954__auto__ = (function (){var statearr_45612 = f__30953__auto__.call(null);
(statearr_45612[(6)] = c__30952__auto___45614);

return statearr_45612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___45614,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514349653278
