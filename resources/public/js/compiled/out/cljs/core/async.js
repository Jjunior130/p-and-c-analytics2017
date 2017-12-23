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
var G__43759 = arguments.length;
switch (G__43759) {
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
if(typeof cljs.core.async.t_cljs$core$async43760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43760 = (function (f,blockable,meta43761){
this.f = f;
this.blockable = blockable;
this.meta43761 = meta43761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43762,meta43761__$1){
var self__ = this;
var _43762__$1 = this;
return (new cljs.core.async.t_cljs$core$async43760(self__.f,self__.blockable,meta43761__$1));
});

cljs.core.async.t_cljs$core$async43760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43762){
var self__ = this;
var _43762__$1 = this;
return self__.meta43761;
});

cljs.core.async.t_cljs$core$async43760.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43761","meta43761",1405647890,null)], null);
});

cljs.core.async.t_cljs$core$async43760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43760";

cljs.core.async.t_cljs$core$async43760.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43760");
});

cljs.core.async.__GT_t_cljs$core$async43760 = (function cljs$core$async$__GT_t_cljs$core$async43760(f__$1,blockable__$1,meta43761){
return (new cljs.core.async.t_cljs$core$async43760(f__$1,blockable__$1,meta43761));
});

}

return (new cljs.core.async.t_cljs$core$async43760(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43766 = arguments.length;
switch (G__43766) {
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
var G__43769 = arguments.length;
switch (G__43769) {
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
var G__43772 = arguments.length;
switch (G__43772) {
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
var val_43774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43774,ret){
return (function (){
return fn1.call(null,val_43774);
});})(val_43774,ret))
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
var G__43776 = arguments.length;
switch (G__43776) {
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
var n__28140__auto___43778 = n;
var x_43779 = (0);
while(true){
if((x_43779 < n__28140__auto___43778)){
(a[x_43779] = (0));

var G__43780 = (x_43779 + (1));
x_43779 = G__43780;
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

var G__43781 = (i + (1));
i = G__43781;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43782 = (function (flag,meta43783){
this.flag = flag;
this.meta43783 = meta43783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43784,meta43783__$1){
var self__ = this;
var _43784__$1 = this;
return (new cljs.core.async.t_cljs$core$async43782(self__.flag,meta43783__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43784){
var self__ = this;
var _43784__$1 = this;
return self__.meta43783;
});})(flag))
;

cljs.core.async.t_cljs$core$async43782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43782.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43783","meta43783",-1294254106,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43782";

cljs.core.async.t_cljs$core$async43782.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43782");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43782 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43782(flag__$1,meta43783){
return (new cljs.core.async.t_cljs$core$async43782(flag__$1,meta43783));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43782(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43785 = (function (flag,cb,meta43786){
this.flag = flag;
this.cb = cb;
this.meta43786 = meta43786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43787,meta43786__$1){
var self__ = this;
var _43787__$1 = this;
return (new cljs.core.async.t_cljs$core$async43785(self__.flag,self__.cb,meta43786__$1));
});

cljs.core.async.t_cljs$core$async43785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43787){
var self__ = this;
var _43787__$1 = this;
return self__.meta43786;
});

cljs.core.async.t_cljs$core$async43785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43786","meta43786",-985510959,null)], null);
});

cljs.core.async.t_cljs$core$async43785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43785";

cljs.core.async.t_cljs$core$async43785.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43785");
});

cljs.core.async.__GT_t_cljs$core$async43785 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43785(flag__$1,cb__$1,meta43786){
return (new cljs.core.async.t_cljs$core$async43785(flag__$1,cb__$1,meta43786));
});

}

return (new cljs.core.async.t_cljs$core$async43785(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43788_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43788_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43789_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43789_SHARP_,port], null));
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
var G__43790 = (i + (1));
i = G__43790;
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
var len__28364__auto___43796 = arguments.length;
var i__28365__auto___43797 = (0);
while(true){
if((i__28365__auto___43797 < len__28364__auto___43796)){
args__28371__auto__.push((arguments[i__28365__auto___43797]));

var G__43798 = (i__28365__auto___43797 + (1));
i__28365__auto___43797 = G__43798;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43793){
var map__43794 = p__43793;
var map__43794__$1 = ((((!((map__43794 == null)))?((((map__43794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43794):map__43794);
var opts = map__43794__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43791){
var G__43792 = cljs.core.first.call(null,seq43791);
var seq43791__$1 = cljs.core.next.call(null,seq43791);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43792,seq43791__$1);
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
var G__43800 = arguments.length;
switch (G__43800) {
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
var c__30953__auto___43846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___43846){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___43846){
return (function (state_43824){
var state_val_43825 = (state_43824[(1)]);
if((state_val_43825 === (7))){
var inst_43820 = (state_43824[(2)]);
var state_43824__$1 = state_43824;
var statearr_43826_43847 = state_43824__$1;
(statearr_43826_43847[(2)] = inst_43820);

(statearr_43826_43847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (1))){
var state_43824__$1 = state_43824;
var statearr_43827_43848 = state_43824__$1;
(statearr_43827_43848[(2)] = null);

(statearr_43827_43848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (4))){
var inst_43803 = (state_43824[(7)]);
var inst_43803__$1 = (state_43824[(2)]);
var inst_43804 = (inst_43803__$1 == null);
var state_43824__$1 = (function (){var statearr_43828 = state_43824;
(statearr_43828[(7)] = inst_43803__$1);

return statearr_43828;
})();
if(cljs.core.truth_(inst_43804)){
var statearr_43829_43849 = state_43824__$1;
(statearr_43829_43849[(1)] = (5));

} else {
var statearr_43830_43850 = state_43824__$1;
(statearr_43830_43850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (13))){
var state_43824__$1 = state_43824;
var statearr_43831_43851 = state_43824__$1;
(statearr_43831_43851[(2)] = null);

(statearr_43831_43851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (6))){
var inst_43803 = (state_43824[(7)]);
var state_43824__$1 = state_43824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43824__$1,(11),to,inst_43803);
} else {
if((state_val_43825 === (3))){
var inst_43822 = (state_43824[(2)]);
var state_43824__$1 = state_43824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43824__$1,inst_43822);
} else {
if((state_val_43825 === (12))){
var state_43824__$1 = state_43824;
var statearr_43832_43852 = state_43824__$1;
(statearr_43832_43852[(2)] = null);

(statearr_43832_43852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (2))){
var state_43824__$1 = state_43824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43824__$1,(4),from);
} else {
if((state_val_43825 === (11))){
var inst_43813 = (state_43824[(2)]);
var state_43824__$1 = state_43824;
if(cljs.core.truth_(inst_43813)){
var statearr_43833_43853 = state_43824__$1;
(statearr_43833_43853[(1)] = (12));

} else {
var statearr_43834_43854 = state_43824__$1;
(statearr_43834_43854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (9))){
var state_43824__$1 = state_43824;
var statearr_43835_43855 = state_43824__$1;
(statearr_43835_43855[(2)] = null);

(statearr_43835_43855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (5))){
var state_43824__$1 = state_43824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43836_43856 = state_43824__$1;
(statearr_43836_43856[(1)] = (8));

} else {
var statearr_43837_43857 = state_43824__$1;
(statearr_43837_43857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (14))){
var inst_43818 = (state_43824[(2)]);
var state_43824__$1 = state_43824;
var statearr_43838_43858 = state_43824__$1;
(statearr_43838_43858[(2)] = inst_43818);

(statearr_43838_43858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (10))){
var inst_43810 = (state_43824[(2)]);
var state_43824__$1 = state_43824;
var statearr_43839_43859 = state_43824__$1;
(statearr_43839_43859[(2)] = inst_43810);

(statearr_43839_43859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43825 === (8))){
var inst_43807 = cljs.core.async.close_BANG_.call(null,to);
var state_43824__$1 = state_43824;
var statearr_43840_43860 = state_43824__$1;
(statearr_43840_43860[(2)] = inst_43807);

(statearr_43840_43860[(1)] = (10));


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
});})(c__30953__auto___43846))
;
return ((function (switch__30865__auto__,c__30953__auto___43846){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_43841 = [null,null,null,null,null,null,null,null];
(statearr_43841[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_43841[(1)] = (1));

return statearr_43841;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_43824){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_43824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e43842){if((e43842 instanceof Object)){
var ex__30869__auto__ = e43842;
var statearr_43843_43861 = state_43824;
(statearr_43843_43861[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43862 = state_43824;
state_43824 = G__43862;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_43824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_43824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___43846))
})();
var state__30955__auto__ = (function (){var statearr_43844 = f__30954__auto__.call(null);
(statearr_43844[(6)] = c__30953__auto___43846);

return statearr_43844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___43846))
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
return (function (p__43863){
var vec__43864 = p__43863;
var v = cljs.core.nth.call(null,vec__43864,(0),null);
var p = cljs.core.nth.call(null,vec__43864,(1),null);
var job = vec__43864;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30953__auto___44035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___44035,res,vec__43864,v,p,job,jobs,results){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___44035,res,vec__43864,v,p,job,jobs,results){
return (function (state_43871){
var state_val_43872 = (state_43871[(1)]);
if((state_val_43872 === (1))){
var state_43871__$1 = state_43871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43871__$1,(2),res,v);
} else {
if((state_val_43872 === (2))){
var inst_43868 = (state_43871[(2)]);
var inst_43869 = cljs.core.async.close_BANG_.call(null,res);
var state_43871__$1 = (function (){var statearr_43873 = state_43871;
(statearr_43873[(7)] = inst_43868);

return statearr_43873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43871__$1,inst_43869);
} else {
return null;
}
}
});})(c__30953__auto___44035,res,vec__43864,v,p,job,jobs,results))
;
return ((function (switch__30865__auto__,c__30953__auto___44035,res,vec__43864,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0 = (function (){
var statearr_43874 = [null,null,null,null,null,null,null,null];
(statearr_43874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__);

(statearr_43874[(1)] = (1));

return statearr_43874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1 = (function (state_43871){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_43871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e43875){if((e43875 instanceof Object)){
var ex__30869__auto__ = e43875;
var statearr_43876_44036 = state_43871;
(statearr_43876_44036[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44037 = state_43871;
state_43871 = G__44037;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = function(state_43871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1.call(this,state_43871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___44035,res,vec__43864,v,p,job,jobs,results))
})();
var state__30955__auto__ = (function (){var statearr_43877 = f__30954__auto__.call(null);
(statearr_43877[(6)] = c__30953__auto___44035);

return statearr_43877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___44035,res,vec__43864,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43878){
var vec__43879 = p__43878;
var v = cljs.core.nth.call(null,vec__43879,(0),null);
var p = cljs.core.nth.call(null,vec__43879,(1),null);
var job = vec__43879;
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
var n__28140__auto___44038 = n;
var __44039 = (0);
while(true){
if((__44039 < n__28140__auto___44038)){
var G__43882_44040 = type;
var G__43882_44041__$1 = (((G__43882_44040 instanceof cljs.core.Keyword))?G__43882_44040.fqn:null);
switch (G__43882_44041__$1) {
case "compute":
var c__30953__auto___44043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44039,c__30953__auto___44043,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (__44039,c__30953__auto___44043,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async){
return (function (state_43895){
var state_val_43896 = (state_43895[(1)]);
if((state_val_43896 === (1))){
var state_43895__$1 = state_43895;
var statearr_43897_44044 = state_43895__$1;
(statearr_43897_44044[(2)] = null);

(statearr_43897_44044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (2))){
var state_43895__$1 = state_43895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43895__$1,(4),jobs);
} else {
if((state_val_43896 === (3))){
var inst_43893 = (state_43895[(2)]);
var state_43895__$1 = state_43895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43895__$1,inst_43893);
} else {
if((state_val_43896 === (4))){
var inst_43885 = (state_43895[(2)]);
var inst_43886 = process.call(null,inst_43885);
var state_43895__$1 = state_43895;
if(cljs.core.truth_(inst_43886)){
var statearr_43898_44045 = state_43895__$1;
(statearr_43898_44045[(1)] = (5));

} else {
var statearr_43899_44046 = state_43895__$1;
(statearr_43899_44046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (5))){
var state_43895__$1 = state_43895;
var statearr_43900_44047 = state_43895__$1;
(statearr_43900_44047[(2)] = null);

(statearr_43900_44047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (6))){
var state_43895__$1 = state_43895;
var statearr_43901_44048 = state_43895__$1;
(statearr_43901_44048[(2)] = null);

(statearr_43901_44048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (7))){
var inst_43891 = (state_43895[(2)]);
var state_43895__$1 = state_43895;
var statearr_43902_44049 = state_43895__$1;
(statearr_43902_44049[(2)] = inst_43891);

(statearr_43902_44049[(1)] = (3));


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
});})(__44039,c__30953__auto___44043,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async))
;
return ((function (__44039,switch__30865__auto__,c__30953__auto___44043,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0 = (function (){
var statearr_43903 = [null,null,null,null,null,null,null];
(statearr_43903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__);

(statearr_43903[(1)] = (1));

return statearr_43903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1 = (function (state_43895){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_43895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e43904){if((e43904 instanceof Object)){
var ex__30869__auto__ = e43904;
var statearr_43905_44050 = state_43895;
(statearr_43905_44050[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44051 = state_43895;
state_43895 = G__44051;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = function(state_43895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1.call(this,state_43895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__;
})()
;})(__44039,switch__30865__auto__,c__30953__auto___44043,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async))
})();
var state__30955__auto__ = (function (){var statearr_43906 = f__30954__auto__.call(null);
(statearr_43906[(6)] = c__30953__auto___44043);

return statearr_43906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(__44039,c__30953__auto___44043,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async))
);


break;
case "async":
var c__30953__auto___44052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44039,c__30953__auto___44052,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (__44039,c__30953__auto___44052,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async){
return (function (state_43919){
var state_val_43920 = (state_43919[(1)]);
if((state_val_43920 === (1))){
var state_43919__$1 = state_43919;
var statearr_43921_44053 = state_43919__$1;
(statearr_43921_44053[(2)] = null);

(statearr_43921_44053[(1)] = (2));


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
var inst_43910 = async.call(null,inst_43909);
var state_43919__$1 = state_43919;
if(cljs.core.truth_(inst_43910)){
var statearr_43922_44054 = state_43919__$1;
(statearr_43922_44054[(1)] = (5));

} else {
var statearr_43923_44055 = state_43919__$1;
(statearr_43923_44055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (5))){
var state_43919__$1 = state_43919;
var statearr_43924_44056 = state_43919__$1;
(statearr_43924_44056[(2)] = null);

(statearr_43924_44056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (6))){
var state_43919__$1 = state_43919;
var statearr_43925_44057 = state_43919__$1;
(statearr_43925_44057[(2)] = null);

(statearr_43925_44057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43920 === (7))){
var inst_43915 = (state_43919[(2)]);
var state_43919__$1 = state_43919;
var statearr_43926_44058 = state_43919__$1;
(statearr_43926_44058[(2)] = inst_43915);

(statearr_43926_44058[(1)] = (3));


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
});})(__44039,c__30953__auto___44052,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async))
;
return ((function (__44039,switch__30865__auto__,c__30953__auto___44052,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0 = (function (){
var statearr_43927 = [null,null,null,null,null,null,null];
(statearr_43927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__);

(statearr_43927[(1)] = (1));

return statearr_43927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1 = (function (state_43919){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_43919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e43928){if((e43928 instanceof Object)){
var ex__30869__auto__ = e43928;
var statearr_43929_44059 = state_43919;
(statearr_43929_44059[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44060 = state_43919;
state_43919 = G__44060;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = function(state_43919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1.call(this,state_43919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__;
})()
;})(__44039,switch__30865__auto__,c__30953__auto___44052,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async))
})();
var state__30955__auto__ = (function (){var statearr_43930 = f__30954__auto__.call(null);
(statearr_43930[(6)] = c__30953__auto___44052);

return statearr_43930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(__44039,c__30953__auto___44052,G__43882_44040,G__43882_44041__$1,n__28140__auto___44038,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43882_44041__$1)].join('')));

}

var G__44061 = (__44039 + (1));
__44039 = G__44061;
continue;
} else {
}
break;
}

var c__30953__auto___44062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___44062,jobs,results,process,async){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___44062,jobs,results,process,async){
return (function (state_43952){
var state_val_43953 = (state_43952[(1)]);
if((state_val_43953 === (1))){
var state_43952__$1 = state_43952;
var statearr_43954_44063 = state_43952__$1;
(statearr_43954_44063[(2)] = null);

(statearr_43954_44063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (2))){
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43952__$1,(4),from);
} else {
if((state_val_43953 === (3))){
var inst_43950 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43952__$1,inst_43950);
} else {
if((state_val_43953 === (4))){
var inst_43933 = (state_43952[(7)]);
var inst_43933__$1 = (state_43952[(2)]);
var inst_43934 = (inst_43933__$1 == null);
var state_43952__$1 = (function (){var statearr_43955 = state_43952;
(statearr_43955[(7)] = inst_43933__$1);

return statearr_43955;
})();
if(cljs.core.truth_(inst_43934)){
var statearr_43956_44064 = state_43952__$1;
(statearr_43956_44064[(1)] = (5));

} else {
var statearr_43957_44065 = state_43952__$1;
(statearr_43957_44065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (5))){
var inst_43936 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43952__$1 = state_43952;
var statearr_43958_44066 = state_43952__$1;
(statearr_43958_44066[(2)] = inst_43936);

(statearr_43958_44066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (6))){
var inst_43933 = (state_43952[(7)]);
var inst_43938 = (state_43952[(8)]);
var inst_43938__$1 = cljs.core.async.chan.call(null,(1));
var inst_43939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43940 = [inst_43933,inst_43938__$1];
var inst_43941 = (new cljs.core.PersistentVector(null,2,(5),inst_43939,inst_43940,null));
var state_43952__$1 = (function (){var statearr_43959 = state_43952;
(statearr_43959[(8)] = inst_43938__$1);

return statearr_43959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43952__$1,(8),jobs,inst_43941);
} else {
if((state_val_43953 === (7))){
var inst_43948 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43960_44067 = state_43952__$1;
(statearr_43960_44067[(2)] = inst_43948);

(statearr_43960_44067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (8))){
var inst_43938 = (state_43952[(8)]);
var inst_43943 = (state_43952[(2)]);
var state_43952__$1 = (function (){var statearr_43961 = state_43952;
(statearr_43961[(9)] = inst_43943);

return statearr_43961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43952__$1,(9),results,inst_43938);
} else {
if((state_val_43953 === (9))){
var inst_43945 = (state_43952[(2)]);
var state_43952__$1 = (function (){var statearr_43962 = state_43952;
(statearr_43962[(10)] = inst_43945);

return statearr_43962;
})();
var statearr_43963_44068 = state_43952__$1;
(statearr_43963_44068[(2)] = null);

(statearr_43963_44068[(1)] = (2));


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
});})(c__30953__auto___44062,jobs,results,process,async))
;
return ((function (switch__30865__auto__,c__30953__auto___44062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0 = (function (){
var statearr_43964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__);

(statearr_43964[(1)] = (1));

return statearr_43964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1 = (function (state_43952){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_43952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e43965){if((e43965 instanceof Object)){
var ex__30869__auto__ = e43965;
var statearr_43966_44069 = state_43952;
(statearr_43966_44069[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44070 = state_43952;
state_43952 = G__44070;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = function(state_43952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1.call(this,state_43952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___44062,jobs,results,process,async))
})();
var state__30955__auto__ = (function (){var statearr_43967 = f__30954__auto__.call(null);
(statearr_43967[(6)] = c__30953__auto___44062);

return statearr_43967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___44062,jobs,results,process,async))
);


var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__,jobs,results,process,async){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__,jobs,results,process,async){
return (function (state_44005){
var state_val_44006 = (state_44005[(1)]);
if((state_val_44006 === (7))){
var inst_44001 = (state_44005[(2)]);
var state_44005__$1 = state_44005;
var statearr_44007_44071 = state_44005__$1;
(statearr_44007_44071[(2)] = inst_44001);

(statearr_44007_44071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (20))){
var state_44005__$1 = state_44005;
var statearr_44008_44072 = state_44005__$1;
(statearr_44008_44072[(2)] = null);

(statearr_44008_44072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (1))){
var state_44005__$1 = state_44005;
var statearr_44009_44073 = state_44005__$1;
(statearr_44009_44073[(2)] = null);

(statearr_44009_44073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (4))){
var inst_43970 = (state_44005[(7)]);
var inst_43970__$1 = (state_44005[(2)]);
var inst_43971 = (inst_43970__$1 == null);
var state_44005__$1 = (function (){var statearr_44010 = state_44005;
(statearr_44010[(7)] = inst_43970__$1);

return statearr_44010;
})();
if(cljs.core.truth_(inst_43971)){
var statearr_44011_44074 = state_44005__$1;
(statearr_44011_44074[(1)] = (5));

} else {
var statearr_44012_44075 = state_44005__$1;
(statearr_44012_44075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (15))){
var inst_43983 = (state_44005[(8)]);
var state_44005__$1 = state_44005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44005__$1,(18),to,inst_43983);
} else {
if((state_val_44006 === (21))){
var inst_43996 = (state_44005[(2)]);
var state_44005__$1 = state_44005;
var statearr_44013_44076 = state_44005__$1;
(statearr_44013_44076[(2)] = inst_43996);

(statearr_44013_44076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (13))){
var inst_43998 = (state_44005[(2)]);
var state_44005__$1 = (function (){var statearr_44014 = state_44005;
(statearr_44014[(9)] = inst_43998);

return statearr_44014;
})();
var statearr_44015_44077 = state_44005__$1;
(statearr_44015_44077[(2)] = null);

(statearr_44015_44077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (6))){
var inst_43970 = (state_44005[(7)]);
var state_44005__$1 = state_44005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44005__$1,(11),inst_43970);
} else {
if((state_val_44006 === (17))){
var inst_43991 = (state_44005[(2)]);
var state_44005__$1 = state_44005;
if(cljs.core.truth_(inst_43991)){
var statearr_44016_44078 = state_44005__$1;
(statearr_44016_44078[(1)] = (19));

} else {
var statearr_44017_44079 = state_44005__$1;
(statearr_44017_44079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (3))){
var inst_44003 = (state_44005[(2)]);
var state_44005__$1 = state_44005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44005__$1,inst_44003);
} else {
if((state_val_44006 === (12))){
var inst_43980 = (state_44005[(10)]);
var state_44005__$1 = state_44005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44005__$1,(14),inst_43980);
} else {
if((state_val_44006 === (2))){
var state_44005__$1 = state_44005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44005__$1,(4),results);
} else {
if((state_val_44006 === (19))){
var state_44005__$1 = state_44005;
var statearr_44018_44080 = state_44005__$1;
(statearr_44018_44080[(2)] = null);

(statearr_44018_44080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (11))){
var inst_43980 = (state_44005[(2)]);
var state_44005__$1 = (function (){var statearr_44019 = state_44005;
(statearr_44019[(10)] = inst_43980);

return statearr_44019;
})();
var statearr_44020_44081 = state_44005__$1;
(statearr_44020_44081[(2)] = null);

(statearr_44020_44081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (9))){
var state_44005__$1 = state_44005;
var statearr_44021_44082 = state_44005__$1;
(statearr_44021_44082[(2)] = null);

(statearr_44021_44082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (5))){
var state_44005__$1 = state_44005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44022_44083 = state_44005__$1;
(statearr_44022_44083[(1)] = (8));

} else {
var statearr_44023_44084 = state_44005__$1;
(statearr_44023_44084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (14))){
var inst_43985 = (state_44005[(11)]);
var inst_43983 = (state_44005[(8)]);
var inst_43983__$1 = (state_44005[(2)]);
var inst_43984 = (inst_43983__$1 == null);
var inst_43985__$1 = cljs.core.not.call(null,inst_43984);
var state_44005__$1 = (function (){var statearr_44024 = state_44005;
(statearr_44024[(11)] = inst_43985__$1);

(statearr_44024[(8)] = inst_43983__$1);

return statearr_44024;
})();
if(inst_43985__$1){
var statearr_44025_44085 = state_44005__$1;
(statearr_44025_44085[(1)] = (15));

} else {
var statearr_44026_44086 = state_44005__$1;
(statearr_44026_44086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (16))){
var inst_43985 = (state_44005[(11)]);
var state_44005__$1 = state_44005;
var statearr_44027_44087 = state_44005__$1;
(statearr_44027_44087[(2)] = inst_43985);

(statearr_44027_44087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (10))){
var inst_43977 = (state_44005[(2)]);
var state_44005__$1 = state_44005;
var statearr_44028_44088 = state_44005__$1;
(statearr_44028_44088[(2)] = inst_43977);

(statearr_44028_44088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (18))){
var inst_43988 = (state_44005[(2)]);
var state_44005__$1 = state_44005;
var statearr_44029_44089 = state_44005__$1;
(statearr_44029_44089[(2)] = inst_43988);

(statearr_44029_44089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44006 === (8))){
var inst_43974 = cljs.core.async.close_BANG_.call(null,to);
var state_44005__$1 = state_44005;
var statearr_44030_44090 = state_44005__$1;
(statearr_44030_44090[(2)] = inst_43974);

(statearr_44030_44090[(1)] = (10));


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
});})(c__30953__auto__,jobs,results,process,async))
;
return ((function (switch__30865__auto__,c__30953__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0 = (function (){
var statearr_44031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__);

(statearr_44031[(1)] = (1));

return statearr_44031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1 = (function (state_44005){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44032){if((e44032 instanceof Object)){
var ex__30869__auto__ = e44032;
var statearr_44033_44091 = state_44005;
(statearr_44033_44091[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44092 = state_44005;
state_44005 = G__44092;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__ = function(state_44005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1.call(this,state_44005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__,jobs,results,process,async))
})();
var state__30955__auto__ = (function (){var statearr_44034 = f__30954__auto__.call(null);
(statearr_44034[(6)] = c__30953__auto__);

return statearr_44034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__,jobs,results,process,async))
);

return c__30953__auto__;
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
var G__44094 = arguments.length;
switch (G__44094) {
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
var G__44097 = arguments.length;
switch (G__44097) {
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
var G__44100 = arguments.length;
switch (G__44100) {
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
var c__30953__auto___44149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___44149,tc,fc){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___44149,tc,fc){
return (function (state_44126){
var state_val_44127 = (state_44126[(1)]);
if((state_val_44127 === (7))){
var inst_44122 = (state_44126[(2)]);
var state_44126__$1 = state_44126;
var statearr_44128_44150 = state_44126__$1;
(statearr_44128_44150[(2)] = inst_44122);

(statearr_44128_44150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (1))){
var state_44126__$1 = state_44126;
var statearr_44129_44151 = state_44126__$1;
(statearr_44129_44151[(2)] = null);

(statearr_44129_44151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (4))){
var inst_44103 = (state_44126[(7)]);
var inst_44103__$1 = (state_44126[(2)]);
var inst_44104 = (inst_44103__$1 == null);
var state_44126__$1 = (function (){var statearr_44130 = state_44126;
(statearr_44130[(7)] = inst_44103__$1);

return statearr_44130;
})();
if(cljs.core.truth_(inst_44104)){
var statearr_44131_44152 = state_44126__$1;
(statearr_44131_44152[(1)] = (5));

} else {
var statearr_44132_44153 = state_44126__$1;
(statearr_44132_44153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (13))){
var state_44126__$1 = state_44126;
var statearr_44133_44154 = state_44126__$1;
(statearr_44133_44154[(2)] = null);

(statearr_44133_44154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (6))){
var inst_44103 = (state_44126[(7)]);
var inst_44109 = p.call(null,inst_44103);
var state_44126__$1 = state_44126;
if(cljs.core.truth_(inst_44109)){
var statearr_44134_44155 = state_44126__$1;
(statearr_44134_44155[(1)] = (9));

} else {
var statearr_44135_44156 = state_44126__$1;
(statearr_44135_44156[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (3))){
var inst_44124 = (state_44126[(2)]);
var state_44126__$1 = state_44126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44126__$1,inst_44124);
} else {
if((state_val_44127 === (12))){
var state_44126__$1 = state_44126;
var statearr_44136_44157 = state_44126__$1;
(statearr_44136_44157[(2)] = null);

(statearr_44136_44157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (2))){
var state_44126__$1 = state_44126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44126__$1,(4),ch);
} else {
if((state_val_44127 === (11))){
var inst_44103 = (state_44126[(7)]);
var inst_44113 = (state_44126[(2)]);
var state_44126__$1 = state_44126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44126__$1,(8),inst_44113,inst_44103);
} else {
if((state_val_44127 === (9))){
var state_44126__$1 = state_44126;
var statearr_44137_44158 = state_44126__$1;
(statearr_44137_44158[(2)] = tc);

(statearr_44137_44158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (5))){
var inst_44106 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44107 = cljs.core.async.close_BANG_.call(null,fc);
var state_44126__$1 = (function (){var statearr_44138 = state_44126;
(statearr_44138[(8)] = inst_44106);

return statearr_44138;
})();
var statearr_44139_44159 = state_44126__$1;
(statearr_44139_44159[(2)] = inst_44107);

(statearr_44139_44159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (14))){
var inst_44120 = (state_44126[(2)]);
var state_44126__$1 = state_44126;
var statearr_44140_44160 = state_44126__$1;
(statearr_44140_44160[(2)] = inst_44120);

(statearr_44140_44160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (10))){
var state_44126__$1 = state_44126;
var statearr_44141_44161 = state_44126__$1;
(statearr_44141_44161[(2)] = fc);

(statearr_44141_44161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44127 === (8))){
var inst_44115 = (state_44126[(2)]);
var state_44126__$1 = state_44126;
if(cljs.core.truth_(inst_44115)){
var statearr_44142_44162 = state_44126__$1;
(statearr_44142_44162[(1)] = (12));

} else {
var statearr_44143_44163 = state_44126__$1;
(statearr_44143_44163[(1)] = (13));

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
});})(c__30953__auto___44149,tc,fc))
;
return ((function (switch__30865__auto__,c__30953__auto___44149,tc,fc){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_44144 = [null,null,null,null,null,null,null,null,null];
(statearr_44144[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_44144[(1)] = (1));

return statearr_44144;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_44126){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44145){if((e44145 instanceof Object)){
var ex__30869__auto__ = e44145;
var statearr_44146_44164 = state_44126;
(statearr_44146_44164[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44165 = state_44126;
state_44126 = G__44165;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_44126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_44126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___44149,tc,fc))
})();
var state__30955__auto__ = (function (){var statearr_44147 = f__30954__auto__.call(null);
(statearr_44147[(6)] = c__30953__auto___44149);

return statearr_44147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___44149,tc,fc))
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
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__){
return (function (state_44186){
var state_val_44187 = (state_44186[(1)]);
if((state_val_44187 === (7))){
var inst_44182 = (state_44186[(2)]);
var state_44186__$1 = state_44186;
var statearr_44188_44206 = state_44186__$1;
(statearr_44188_44206[(2)] = inst_44182);

(statearr_44188_44206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (1))){
var inst_44166 = init;
var state_44186__$1 = (function (){var statearr_44189 = state_44186;
(statearr_44189[(7)] = inst_44166);

return statearr_44189;
})();
var statearr_44190_44207 = state_44186__$1;
(statearr_44190_44207[(2)] = null);

(statearr_44190_44207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (4))){
var inst_44169 = (state_44186[(8)]);
var inst_44169__$1 = (state_44186[(2)]);
var inst_44170 = (inst_44169__$1 == null);
var state_44186__$1 = (function (){var statearr_44191 = state_44186;
(statearr_44191[(8)] = inst_44169__$1);

return statearr_44191;
})();
if(cljs.core.truth_(inst_44170)){
var statearr_44192_44208 = state_44186__$1;
(statearr_44192_44208[(1)] = (5));

} else {
var statearr_44193_44209 = state_44186__$1;
(statearr_44193_44209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (6))){
var inst_44169 = (state_44186[(8)]);
var inst_44173 = (state_44186[(9)]);
var inst_44166 = (state_44186[(7)]);
var inst_44173__$1 = f.call(null,inst_44166,inst_44169);
var inst_44174 = cljs.core.reduced_QMARK_.call(null,inst_44173__$1);
var state_44186__$1 = (function (){var statearr_44194 = state_44186;
(statearr_44194[(9)] = inst_44173__$1);

return statearr_44194;
})();
if(inst_44174){
var statearr_44195_44210 = state_44186__$1;
(statearr_44195_44210[(1)] = (8));

} else {
var statearr_44196_44211 = state_44186__$1;
(statearr_44196_44211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (3))){
var inst_44184 = (state_44186[(2)]);
var state_44186__$1 = state_44186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44186__$1,inst_44184);
} else {
if((state_val_44187 === (2))){
var state_44186__$1 = state_44186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44186__$1,(4),ch);
} else {
if((state_val_44187 === (9))){
var inst_44173 = (state_44186[(9)]);
var inst_44166 = inst_44173;
var state_44186__$1 = (function (){var statearr_44197 = state_44186;
(statearr_44197[(7)] = inst_44166);

return statearr_44197;
})();
var statearr_44198_44212 = state_44186__$1;
(statearr_44198_44212[(2)] = null);

(statearr_44198_44212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (5))){
var inst_44166 = (state_44186[(7)]);
var state_44186__$1 = state_44186;
var statearr_44199_44213 = state_44186__$1;
(statearr_44199_44213[(2)] = inst_44166);

(statearr_44199_44213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (10))){
var inst_44180 = (state_44186[(2)]);
var state_44186__$1 = state_44186;
var statearr_44200_44214 = state_44186__$1;
(statearr_44200_44214[(2)] = inst_44180);

(statearr_44200_44214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44187 === (8))){
var inst_44173 = (state_44186[(9)]);
var inst_44176 = cljs.core.deref.call(null,inst_44173);
var state_44186__$1 = state_44186;
var statearr_44201_44215 = state_44186__$1;
(statearr_44201_44215[(2)] = inst_44176);

(statearr_44201_44215[(1)] = (10));


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
});})(c__30953__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30866__auto____0 = (function (){
var statearr_44202 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44202[(0)] = cljs$core$async$reduce_$_state_machine__30866__auto__);

(statearr_44202[(1)] = (1));

return statearr_44202;
});
var cljs$core$async$reduce_$_state_machine__30866__auto____1 = (function (state_44186){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44203){if((e44203 instanceof Object)){
var ex__30869__auto__ = e44203;
var statearr_44204_44216 = state_44186;
(statearr_44204_44216[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44217 = state_44186;
state_44186 = G__44217;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30866__auto__ = function(state_44186){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30866__auto____1.call(this,state_44186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30866__auto____0;
cljs$core$async$reduce_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30866__auto____1;
return cljs$core$async$reduce_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__))
})();
var state__30955__auto__ = (function (){var statearr_44205 = f__30954__auto__.call(null);
(statearr_44205[(6)] = c__30953__auto__);

return statearr_44205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__))
);

return c__30953__auto__;
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
var G__44219 = arguments.length;
switch (G__44219) {
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
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__){
return (function (state_44244){
var state_val_44245 = (state_44244[(1)]);
if((state_val_44245 === (7))){
var inst_44226 = (state_44244[(2)]);
var state_44244__$1 = state_44244;
var statearr_44246_44267 = state_44244__$1;
(statearr_44246_44267[(2)] = inst_44226);

(statearr_44246_44267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (1))){
var inst_44220 = cljs.core.seq.call(null,coll);
var inst_44221 = inst_44220;
var state_44244__$1 = (function (){var statearr_44247 = state_44244;
(statearr_44247[(7)] = inst_44221);

return statearr_44247;
})();
var statearr_44248_44268 = state_44244__$1;
(statearr_44248_44268[(2)] = null);

(statearr_44248_44268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (4))){
var inst_44221 = (state_44244[(7)]);
var inst_44224 = cljs.core.first.call(null,inst_44221);
var state_44244__$1 = state_44244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44244__$1,(7),ch,inst_44224);
} else {
if((state_val_44245 === (13))){
var inst_44238 = (state_44244[(2)]);
var state_44244__$1 = state_44244;
var statearr_44249_44269 = state_44244__$1;
(statearr_44249_44269[(2)] = inst_44238);

(statearr_44249_44269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (6))){
var inst_44229 = (state_44244[(2)]);
var state_44244__$1 = state_44244;
if(cljs.core.truth_(inst_44229)){
var statearr_44250_44270 = state_44244__$1;
(statearr_44250_44270[(1)] = (8));

} else {
var statearr_44251_44271 = state_44244__$1;
(statearr_44251_44271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (3))){
var inst_44242 = (state_44244[(2)]);
var state_44244__$1 = state_44244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44244__$1,inst_44242);
} else {
if((state_val_44245 === (12))){
var state_44244__$1 = state_44244;
var statearr_44252_44272 = state_44244__$1;
(statearr_44252_44272[(2)] = null);

(statearr_44252_44272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (2))){
var inst_44221 = (state_44244[(7)]);
var state_44244__$1 = state_44244;
if(cljs.core.truth_(inst_44221)){
var statearr_44253_44273 = state_44244__$1;
(statearr_44253_44273[(1)] = (4));

} else {
var statearr_44254_44274 = state_44244__$1;
(statearr_44254_44274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (11))){
var inst_44235 = cljs.core.async.close_BANG_.call(null,ch);
var state_44244__$1 = state_44244;
var statearr_44255_44275 = state_44244__$1;
(statearr_44255_44275[(2)] = inst_44235);

(statearr_44255_44275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (9))){
var state_44244__$1 = state_44244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44256_44276 = state_44244__$1;
(statearr_44256_44276[(1)] = (11));

} else {
var statearr_44257_44277 = state_44244__$1;
(statearr_44257_44277[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (5))){
var inst_44221 = (state_44244[(7)]);
var state_44244__$1 = state_44244;
var statearr_44258_44278 = state_44244__$1;
(statearr_44258_44278[(2)] = inst_44221);

(statearr_44258_44278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (10))){
var inst_44240 = (state_44244[(2)]);
var state_44244__$1 = state_44244;
var statearr_44259_44279 = state_44244__$1;
(statearr_44259_44279[(2)] = inst_44240);

(statearr_44259_44279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44245 === (8))){
var inst_44221 = (state_44244[(7)]);
var inst_44231 = cljs.core.next.call(null,inst_44221);
var inst_44221__$1 = inst_44231;
var state_44244__$1 = (function (){var statearr_44260 = state_44244;
(statearr_44260[(7)] = inst_44221__$1);

return statearr_44260;
})();
var statearr_44261_44280 = state_44244__$1;
(statearr_44261_44280[(2)] = null);

(statearr_44261_44280[(1)] = (2));


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
});})(c__30953__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_44262 = [null,null,null,null,null,null,null,null];
(statearr_44262[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_44262[(1)] = (1));

return statearr_44262;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_44244){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44263){if((e44263 instanceof Object)){
var ex__30869__auto__ = e44263;
var statearr_44264_44281 = state_44244;
(statearr_44264_44281[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44282 = state_44244;
state_44244 = G__44282;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_44244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_44244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__))
})();
var state__30955__auto__ = (function (){var statearr_44265 = f__30954__auto__.call(null);
(statearr_44265[(6)] = c__30953__auto__);

return statearr_44265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__))
);

return c__30953__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async44283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44283 = (function (ch,cs,meta44284){
this.ch = ch;
this.cs = cs;
this.meta44284 = meta44284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44285,meta44284__$1){
var self__ = this;
var _44285__$1 = this;
return (new cljs.core.async.t_cljs$core$async44283(self__.ch,self__.cs,meta44284__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44285){
var self__ = this;
var _44285__$1 = this;
return self__.meta44284;
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44284","meta44284",1548343925,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44283";

cljs.core.async.t_cljs$core$async44283.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44283");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44283 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44283(ch__$1,cs__$1,meta44284){
return (new cljs.core.async.t_cljs$core$async44283(ch__$1,cs__$1,meta44284));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44283(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30953__auto___44505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___44505,cs,m,dchan,dctr,done){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___44505,cs,m,dchan,dctr,done){
return (function (state_44420){
var state_val_44421 = (state_44420[(1)]);
if((state_val_44421 === (7))){
var inst_44416 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44422_44506 = state_44420__$1;
(statearr_44422_44506[(2)] = inst_44416);

(statearr_44422_44506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (20))){
var inst_44319 = (state_44420[(7)]);
var inst_44331 = cljs.core.first.call(null,inst_44319);
var inst_44332 = cljs.core.nth.call(null,inst_44331,(0),null);
var inst_44333 = cljs.core.nth.call(null,inst_44331,(1),null);
var state_44420__$1 = (function (){var statearr_44423 = state_44420;
(statearr_44423[(8)] = inst_44332);

return statearr_44423;
})();
if(cljs.core.truth_(inst_44333)){
var statearr_44424_44507 = state_44420__$1;
(statearr_44424_44507[(1)] = (22));

} else {
var statearr_44425_44508 = state_44420__$1;
(statearr_44425_44508[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (27))){
var inst_44368 = (state_44420[(9)]);
var inst_44288 = (state_44420[(10)]);
var inst_44363 = (state_44420[(11)]);
var inst_44361 = (state_44420[(12)]);
var inst_44368__$1 = cljs.core._nth.call(null,inst_44361,inst_44363);
var inst_44369 = cljs.core.async.put_BANG_.call(null,inst_44368__$1,inst_44288,done);
var state_44420__$1 = (function (){var statearr_44426 = state_44420;
(statearr_44426[(9)] = inst_44368__$1);

return statearr_44426;
})();
if(cljs.core.truth_(inst_44369)){
var statearr_44427_44509 = state_44420__$1;
(statearr_44427_44509[(1)] = (30));

} else {
var statearr_44428_44510 = state_44420__$1;
(statearr_44428_44510[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (1))){
var state_44420__$1 = state_44420;
var statearr_44429_44511 = state_44420__$1;
(statearr_44429_44511[(2)] = null);

(statearr_44429_44511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (24))){
var inst_44319 = (state_44420[(7)]);
var inst_44338 = (state_44420[(2)]);
var inst_44339 = cljs.core.next.call(null,inst_44319);
var inst_44297 = inst_44339;
var inst_44298 = null;
var inst_44299 = (0);
var inst_44300 = (0);
var state_44420__$1 = (function (){var statearr_44430 = state_44420;
(statearr_44430[(13)] = inst_44300);

(statearr_44430[(14)] = inst_44338);

(statearr_44430[(15)] = inst_44299);

(statearr_44430[(16)] = inst_44298);

(statearr_44430[(17)] = inst_44297);

return statearr_44430;
})();
var statearr_44431_44512 = state_44420__$1;
(statearr_44431_44512[(2)] = null);

(statearr_44431_44512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (39))){
var state_44420__$1 = state_44420;
var statearr_44435_44513 = state_44420__$1;
(statearr_44435_44513[(2)] = null);

(statearr_44435_44513[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (4))){
var inst_44288 = (state_44420[(10)]);
var inst_44288__$1 = (state_44420[(2)]);
var inst_44289 = (inst_44288__$1 == null);
var state_44420__$1 = (function (){var statearr_44436 = state_44420;
(statearr_44436[(10)] = inst_44288__$1);

return statearr_44436;
})();
if(cljs.core.truth_(inst_44289)){
var statearr_44437_44514 = state_44420__$1;
(statearr_44437_44514[(1)] = (5));

} else {
var statearr_44438_44515 = state_44420__$1;
(statearr_44438_44515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (15))){
var inst_44300 = (state_44420[(13)]);
var inst_44299 = (state_44420[(15)]);
var inst_44298 = (state_44420[(16)]);
var inst_44297 = (state_44420[(17)]);
var inst_44315 = (state_44420[(2)]);
var inst_44316 = (inst_44300 + (1));
var tmp44432 = inst_44299;
var tmp44433 = inst_44298;
var tmp44434 = inst_44297;
var inst_44297__$1 = tmp44434;
var inst_44298__$1 = tmp44433;
var inst_44299__$1 = tmp44432;
var inst_44300__$1 = inst_44316;
var state_44420__$1 = (function (){var statearr_44439 = state_44420;
(statearr_44439[(13)] = inst_44300__$1);

(statearr_44439[(18)] = inst_44315);

(statearr_44439[(15)] = inst_44299__$1);

(statearr_44439[(16)] = inst_44298__$1);

(statearr_44439[(17)] = inst_44297__$1);

return statearr_44439;
})();
var statearr_44440_44516 = state_44420__$1;
(statearr_44440_44516[(2)] = null);

(statearr_44440_44516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (21))){
var inst_44342 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44444_44517 = state_44420__$1;
(statearr_44444_44517[(2)] = inst_44342);

(statearr_44444_44517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (31))){
var inst_44368 = (state_44420[(9)]);
var inst_44372 = done.call(null,null);
var inst_44373 = cljs.core.async.untap_STAR_.call(null,m,inst_44368);
var state_44420__$1 = (function (){var statearr_44445 = state_44420;
(statearr_44445[(19)] = inst_44372);

return statearr_44445;
})();
var statearr_44446_44518 = state_44420__$1;
(statearr_44446_44518[(2)] = inst_44373);

(statearr_44446_44518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (32))){
var inst_44362 = (state_44420[(20)]);
var inst_44363 = (state_44420[(11)]);
var inst_44361 = (state_44420[(12)]);
var inst_44360 = (state_44420[(21)]);
var inst_44375 = (state_44420[(2)]);
var inst_44376 = (inst_44363 + (1));
var tmp44441 = inst_44362;
var tmp44442 = inst_44361;
var tmp44443 = inst_44360;
var inst_44360__$1 = tmp44443;
var inst_44361__$1 = tmp44442;
var inst_44362__$1 = tmp44441;
var inst_44363__$1 = inst_44376;
var state_44420__$1 = (function (){var statearr_44447 = state_44420;
(statearr_44447[(22)] = inst_44375);

(statearr_44447[(20)] = inst_44362__$1);

(statearr_44447[(11)] = inst_44363__$1);

(statearr_44447[(12)] = inst_44361__$1);

(statearr_44447[(21)] = inst_44360__$1);

return statearr_44447;
})();
var statearr_44448_44519 = state_44420__$1;
(statearr_44448_44519[(2)] = null);

(statearr_44448_44519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (40))){
var inst_44388 = (state_44420[(23)]);
var inst_44392 = done.call(null,null);
var inst_44393 = cljs.core.async.untap_STAR_.call(null,m,inst_44388);
var state_44420__$1 = (function (){var statearr_44449 = state_44420;
(statearr_44449[(24)] = inst_44392);

return statearr_44449;
})();
var statearr_44450_44520 = state_44420__$1;
(statearr_44450_44520[(2)] = inst_44393);

(statearr_44450_44520[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (33))){
var inst_44379 = (state_44420[(25)]);
var inst_44381 = cljs.core.chunked_seq_QMARK_.call(null,inst_44379);
var state_44420__$1 = state_44420;
if(inst_44381){
var statearr_44451_44521 = state_44420__$1;
(statearr_44451_44521[(1)] = (36));

} else {
var statearr_44452_44522 = state_44420__$1;
(statearr_44452_44522[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (13))){
var inst_44309 = (state_44420[(26)]);
var inst_44312 = cljs.core.async.close_BANG_.call(null,inst_44309);
var state_44420__$1 = state_44420;
var statearr_44453_44523 = state_44420__$1;
(statearr_44453_44523[(2)] = inst_44312);

(statearr_44453_44523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (22))){
var inst_44332 = (state_44420[(8)]);
var inst_44335 = cljs.core.async.close_BANG_.call(null,inst_44332);
var state_44420__$1 = state_44420;
var statearr_44454_44524 = state_44420__$1;
(statearr_44454_44524[(2)] = inst_44335);

(statearr_44454_44524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (36))){
var inst_44379 = (state_44420[(25)]);
var inst_44383 = cljs.core.chunk_first.call(null,inst_44379);
var inst_44384 = cljs.core.chunk_rest.call(null,inst_44379);
var inst_44385 = cljs.core.count.call(null,inst_44383);
var inst_44360 = inst_44384;
var inst_44361 = inst_44383;
var inst_44362 = inst_44385;
var inst_44363 = (0);
var state_44420__$1 = (function (){var statearr_44455 = state_44420;
(statearr_44455[(20)] = inst_44362);

(statearr_44455[(11)] = inst_44363);

(statearr_44455[(12)] = inst_44361);

(statearr_44455[(21)] = inst_44360);

return statearr_44455;
})();
var statearr_44456_44525 = state_44420__$1;
(statearr_44456_44525[(2)] = null);

(statearr_44456_44525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (41))){
var inst_44379 = (state_44420[(25)]);
var inst_44395 = (state_44420[(2)]);
var inst_44396 = cljs.core.next.call(null,inst_44379);
var inst_44360 = inst_44396;
var inst_44361 = null;
var inst_44362 = (0);
var inst_44363 = (0);
var state_44420__$1 = (function (){var statearr_44457 = state_44420;
(statearr_44457[(20)] = inst_44362);

(statearr_44457[(27)] = inst_44395);

(statearr_44457[(11)] = inst_44363);

(statearr_44457[(12)] = inst_44361);

(statearr_44457[(21)] = inst_44360);

return statearr_44457;
})();
var statearr_44458_44526 = state_44420__$1;
(statearr_44458_44526[(2)] = null);

(statearr_44458_44526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (43))){
var state_44420__$1 = state_44420;
var statearr_44459_44527 = state_44420__$1;
(statearr_44459_44527[(2)] = null);

(statearr_44459_44527[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (29))){
var inst_44404 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44460_44528 = state_44420__$1;
(statearr_44460_44528[(2)] = inst_44404);

(statearr_44460_44528[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (44))){
var inst_44413 = (state_44420[(2)]);
var state_44420__$1 = (function (){var statearr_44461 = state_44420;
(statearr_44461[(28)] = inst_44413);

return statearr_44461;
})();
var statearr_44462_44529 = state_44420__$1;
(statearr_44462_44529[(2)] = null);

(statearr_44462_44529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (6))){
var inst_44352 = (state_44420[(29)]);
var inst_44351 = cljs.core.deref.call(null,cs);
var inst_44352__$1 = cljs.core.keys.call(null,inst_44351);
var inst_44353 = cljs.core.count.call(null,inst_44352__$1);
var inst_44354 = cljs.core.reset_BANG_.call(null,dctr,inst_44353);
var inst_44359 = cljs.core.seq.call(null,inst_44352__$1);
var inst_44360 = inst_44359;
var inst_44361 = null;
var inst_44362 = (0);
var inst_44363 = (0);
var state_44420__$1 = (function (){var statearr_44463 = state_44420;
(statearr_44463[(20)] = inst_44362);

(statearr_44463[(30)] = inst_44354);

(statearr_44463[(11)] = inst_44363);

(statearr_44463[(12)] = inst_44361);

(statearr_44463[(21)] = inst_44360);

(statearr_44463[(29)] = inst_44352__$1);

return statearr_44463;
})();
var statearr_44464_44530 = state_44420__$1;
(statearr_44464_44530[(2)] = null);

(statearr_44464_44530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (28))){
var inst_44360 = (state_44420[(21)]);
var inst_44379 = (state_44420[(25)]);
var inst_44379__$1 = cljs.core.seq.call(null,inst_44360);
var state_44420__$1 = (function (){var statearr_44465 = state_44420;
(statearr_44465[(25)] = inst_44379__$1);

return statearr_44465;
})();
if(inst_44379__$1){
var statearr_44466_44531 = state_44420__$1;
(statearr_44466_44531[(1)] = (33));

} else {
var statearr_44467_44532 = state_44420__$1;
(statearr_44467_44532[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (25))){
var inst_44362 = (state_44420[(20)]);
var inst_44363 = (state_44420[(11)]);
var inst_44365 = (inst_44363 < inst_44362);
var inst_44366 = inst_44365;
var state_44420__$1 = state_44420;
if(cljs.core.truth_(inst_44366)){
var statearr_44468_44533 = state_44420__$1;
(statearr_44468_44533[(1)] = (27));

} else {
var statearr_44469_44534 = state_44420__$1;
(statearr_44469_44534[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (34))){
var state_44420__$1 = state_44420;
var statearr_44470_44535 = state_44420__$1;
(statearr_44470_44535[(2)] = null);

(statearr_44470_44535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (17))){
var state_44420__$1 = state_44420;
var statearr_44471_44536 = state_44420__$1;
(statearr_44471_44536[(2)] = null);

(statearr_44471_44536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (3))){
var inst_44418 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44420__$1,inst_44418);
} else {
if((state_val_44421 === (12))){
var inst_44347 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44472_44537 = state_44420__$1;
(statearr_44472_44537[(2)] = inst_44347);

(statearr_44472_44537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (2))){
var state_44420__$1 = state_44420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44420__$1,(4),ch);
} else {
if((state_val_44421 === (23))){
var state_44420__$1 = state_44420;
var statearr_44473_44538 = state_44420__$1;
(statearr_44473_44538[(2)] = null);

(statearr_44473_44538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (35))){
var inst_44402 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44474_44539 = state_44420__$1;
(statearr_44474_44539[(2)] = inst_44402);

(statearr_44474_44539[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (19))){
var inst_44319 = (state_44420[(7)]);
var inst_44323 = cljs.core.chunk_first.call(null,inst_44319);
var inst_44324 = cljs.core.chunk_rest.call(null,inst_44319);
var inst_44325 = cljs.core.count.call(null,inst_44323);
var inst_44297 = inst_44324;
var inst_44298 = inst_44323;
var inst_44299 = inst_44325;
var inst_44300 = (0);
var state_44420__$1 = (function (){var statearr_44475 = state_44420;
(statearr_44475[(13)] = inst_44300);

(statearr_44475[(15)] = inst_44299);

(statearr_44475[(16)] = inst_44298);

(statearr_44475[(17)] = inst_44297);

return statearr_44475;
})();
var statearr_44476_44540 = state_44420__$1;
(statearr_44476_44540[(2)] = null);

(statearr_44476_44540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (11))){
var inst_44319 = (state_44420[(7)]);
var inst_44297 = (state_44420[(17)]);
var inst_44319__$1 = cljs.core.seq.call(null,inst_44297);
var state_44420__$1 = (function (){var statearr_44477 = state_44420;
(statearr_44477[(7)] = inst_44319__$1);

return statearr_44477;
})();
if(inst_44319__$1){
var statearr_44478_44541 = state_44420__$1;
(statearr_44478_44541[(1)] = (16));

} else {
var statearr_44479_44542 = state_44420__$1;
(statearr_44479_44542[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (9))){
var inst_44349 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44480_44543 = state_44420__$1;
(statearr_44480_44543[(2)] = inst_44349);

(statearr_44480_44543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (5))){
var inst_44295 = cljs.core.deref.call(null,cs);
var inst_44296 = cljs.core.seq.call(null,inst_44295);
var inst_44297 = inst_44296;
var inst_44298 = null;
var inst_44299 = (0);
var inst_44300 = (0);
var state_44420__$1 = (function (){var statearr_44481 = state_44420;
(statearr_44481[(13)] = inst_44300);

(statearr_44481[(15)] = inst_44299);

(statearr_44481[(16)] = inst_44298);

(statearr_44481[(17)] = inst_44297);

return statearr_44481;
})();
var statearr_44482_44544 = state_44420__$1;
(statearr_44482_44544[(2)] = null);

(statearr_44482_44544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (14))){
var state_44420__$1 = state_44420;
var statearr_44483_44545 = state_44420__$1;
(statearr_44483_44545[(2)] = null);

(statearr_44483_44545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (45))){
var inst_44410 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44484_44546 = state_44420__$1;
(statearr_44484_44546[(2)] = inst_44410);

(statearr_44484_44546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (26))){
var inst_44352 = (state_44420[(29)]);
var inst_44406 = (state_44420[(2)]);
var inst_44407 = cljs.core.seq.call(null,inst_44352);
var state_44420__$1 = (function (){var statearr_44485 = state_44420;
(statearr_44485[(31)] = inst_44406);

return statearr_44485;
})();
if(inst_44407){
var statearr_44486_44547 = state_44420__$1;
(statearr_44486_44547[(1)] = (42));

} else {
var statearr_44487_44548 = state_44420__$1;
(statearr_44487_44548[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (16))){
var inst_44319 = (state_44420[(7)]);
var inst_44321 = cljs.core.chunked_seq_QMARK_.call(null,inst_44319);
var state_44420__$1 = state_44420;
if(inst_44321){
var statearr_44488_44549 = state_44420__$1;
(statearr_44488_44549[(1)] = (19));

} else {
var statearr_44489_44550 = state_44420__$1;
(statearr_44489_44550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (38))){
var inst_44399 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44490_44551 = state_44420__$1;
(statearr_44490_44551[(2)] = inst_44399);

(statearr_44490_44551[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (30))){
var state_44420__$1 = state_44420;
var statearr_44491_44552 = state_44420__$1;
(statearr_44491_44552[(2)] = null);

(statearr_44491_44552[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (10))){
var inst_44300 = (state_44420[(13)]);
var inst_44298 = (state_44420[(16)]);
var inst_44308 = cljs.core._nth.call(null,inst_44298,inst_44300);
var inst_44309 = cljs.core.nth.call(null,inst_44308,(0),null);
var inst_44310 = cljs.core.nth.call(null,inst_44308,(1),null);
var state_44420__$1 = (function (){var statearr_44492 = state_44420;
(statearr_44492[(26)] = inst_44309);

return statearr_44492;
})();
if(cljs.core.truth_(inst_44310)){
var statearr_44493_44553 = state_44420__$1;
(statearr_44493_44553[(1)] = (13));

} else {
var statearr_44494_44554 = state_44420__$1;
(statearr_44494_44554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (18))){
var inst_44345 = (state_44420[(2)]);
var state_44420__$1 = state_44420;
var statearr_44495_44555 = state_44420__$1;
(statearr_44495_44555[(2)] = inst_44345);

(statearr_44495_44555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (42))){
var state_44420__$1 = state_44420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44420__$1,(45),dchan);
} else {
if((state_val_44421 === (37))){
var inst_44288 = (state_44420[(10)]);
var inst_44388 = (state_44420[(23)]);
var inst_44379 = (state_44420[(25)]);
var inst_44388__$1 = cljs.core.first.call(null,inst_44379);
var inst_44389 = cljs.core.async.put_BANG_.call(null,inst_44388__$1,inst_44288,done);
var state_44420__$1 = (function (){var statearr_44496 = state_44420;
(statearr_44496[(23)] = inst_44388__$1);

return statearr_44496;
})();
if(cljs.core.truth_(inst_44389)){
var statearr_44497_44556 = state_44420__$1;
(statearr_44497_44556[(1)] = (39));

} else {
var statearr_44498_44557 = state_44420__$1;
(statearr_44498_44557[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44421 === (8))){
var inst_44300 = (state_44420[(13)]);
var inst_44299 = (state_44420[(15)]);
var inst_44302 = (inst_44300 < inst_44299);
var inst_44303 = inst_44302;
var state_44420__$1 = state_44420;
if(cljs.core.truth_(inst_44303)){
var statearr_44499_44558 = state_44420__$1;
(statearr_44499_44558[(1)] = (10));

} else {
var statearr_44500_44559 = state_44420__$1;
(statearr_44500_44559[(1)] = (11));

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
});})(c__30953__auto___44505,cs,m,dchan,dctr,done))
;
return ((function (switch__30865__auto__,c__30953__auto___44505,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30866__auto__ = null;
var cljs$core$async$mult_$_state_machine__30866__auto____0 = (function (){
var statearr_44501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44501[(0)] = cljs$core$async$mult_$_state_machine__30866__auto__);

(statearr_44501[(1)] = (1));

return statearr_44501;
});
var cljs$core$async$mult_$_state_machine__30866__auto____1 = (function (state_44420){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44502){if((e44502 instanceof Object)){
var ex__30869__auto__ = e44502;
var statearr_44503_44560 = state_44420;
(statearr_44503_44560[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44561 = state_44420;
state_44420 = G__44561;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30866__auto__ = function(state_44420){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30866__auto____1.call(this,state_44420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30866__auto____0;
cljs$core$async$mult_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30866__auto____1;
return cljs$core$async$mult_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___44505,cs,m,dchan,dctr,done))
})();
var state__30955__auto__ = (function (){var statearr_44504 = f__30954__auto__.call(null);
(statearr_44504[(6)] = c__30953__auto___44505);

return statearr_44504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___44505,cs,m,dchan,dctr,done))
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
var G__44563 = arguments.length;
switch (G__44563) {
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
var len__28364__auto___44575 = arguments.length;
var i__28365__auto___44576 = (0);
while(true){
if((i__28365__auto___44576 < len__28364__auto___44575)){
args__28371__auto__.push((arguments[i__28365__auto___44576]));

var G__44577 = (i__28365__auto___44576 + (1));
i__28365__auto___44576 = G__44577;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44569){
var map__44570 = p__44569;
var map__44570__$1 = ((((!((map__44570 == null)))?((((map__44570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44570):map__44570);
var opts = map__44570__$1;
var statearr_44572_44578 = state;
(statearr_44572_44578[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44570,map__44570__$1,opts){
return (function (val){
var statearr_44573_44579 = state;
(statearr_44573_44579[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44570,map__44570__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44574_44580 = state;
(statearr_44574_44580[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44565){
var G__44566 = cljs.core.first.call(null,seq44565);
var seq44565__$1 = cljs.core.next.call(null,seq44565);
var G__44567 = cljs.core.first.call(null,seq44565__$1);
var seq44565__$2 = cljs.core.next.call(null,seq44565__$1);
var G__44568 = cljs.core.first.call(null,seq44565__$2);
var seq44565__$3 = cljs.core.next.call(null,seq44565__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44566,G__44567,G__44568,seq44565__$3);
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
if(typeof cljs.core.async.t_cljs$core$async44581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44581 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44582){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44582 = meta44582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44583,meta44582__$1){
var self__ = this;
var _44583__$1 = this;
return (new cljs.core.async.t_cljs$core$async44581(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44582__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44583){
var self__ = this;
var _44583__$1 = this;
return self__.meta44582;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44581.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44582","meta44582",1530256295,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44581";

cljs.core.async.t_cljs$core$async44581.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44581");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44581 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44581(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44582){
return (new cljs.core.async.t_cljs$core$async44581(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44582));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44581(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30953__auto___44745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___44745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___44745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44685){
var state_val_44686 = (state_44685[(1)]);
if((state_val_44686 === (7))){
var inst_44600 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44687_44746 = state_44685__$1;
(statearr_44687_44746[(2)] = inst_44600);

(statearr_44687_44746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (20))){
var inst_44612 = (state_44685[(7)]);
var state_44685__$1 = state_44685;
var statearr_44688_44747 = state_44685__$1;
(statearr_44688_44747[(2)] = inst_44612);

(statearr_44688_44747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (27))){
var state_44685__$1 = state_44685;
var statearr_44689_44748 = state_44685__$1;
(statearr_44689_44748[(2)] = null);

(statearr_44689_44748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (1))){
var inst_44587 = (state_44685[(8)]);
var inst_44587__$1 = calc_state.call(null);
var inst_44589 = (inst_44587__$1 == null);
var inst_44590 = cljs.core.not.call(null,inst_44589);
var state_44685__$1 = (function (){var statearr_44690 = state_44685;
(statearr_44690[(8)] = inst_44587__$1);

return statearr_44690;
})();
if(inst_44590){
var statearr_44691_44749 = state_44685__$1;
(statearr_44691_44749[(1)] = (2));

} else {
var statearr_44692_44750 = state_44685__$1;
(statearr_44692_44750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (24))){
var inst_44636 = (state_44685[(9)]);
var inst_44659 = (state_44685[(10)]);
var inst_44645 = (state_44685[(11)]);
var inst_44659__$1 = inst_44636.call(null,inst_44645);
var state_44685__$1 = (function (){var statearr_44693 = state_44685;
(statearr_44693[(10)] = inst_44659__$1);

return statearr_44693;
})();
if(cljs.core.truth_(inst_44659__$1)){
var statearr_44694_44751 = state_44685__$1;
(statearr_44694_44751[(1)] = (29));

} else {
var statearr_44695_44752 = state_44685__$1;
(statearr_44695_44752[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (4))){
var inst_44603 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44603)){
var statearr_44696_44753 = state_44685__$1;
(statearr_44696_44753[(1)] = (8));

} else {
var statearr_44697_44754 = state_44685__$1;
(statearr_44697_44754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (15))){
var inst_44630 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44630)){
var statearr_44698_44755 = state_44685__$1;
(statearr_44698_44755[(1)] = (19));

} else {
var statearr_44699_44756 = state_44685__$1;
(statearr_44699_44756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (21))){
var inst_44635 = (state_44685[(12)]);
var inst_44635__$1 = (state_44685[(2)]);
var inst_44636 = cljs.core.get.call(null,inst_44635__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44637 = cljs.core.get.call(null,inst_44635__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44638 = cljs.core.get.call(null,inst_44635__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44685__$1 = (function (){var statearr_44700 = state_44685;
(statearr_44700[(13)] = inst_44637);

(statearr_44700[(9)] = inst_44636);

(statearr_44700[(12)] = inst_44635__$1);

return statearr_44700;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44685__$1,(22),inst_44638);
} else {
if((state_val_44686 === (31))){
var inst_44667 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44667)){
var statearr_44701_44757 = state_44685__$1;
(statearr_44701_44757[(1)] = (32));

} else {
var statearr_44702_44758 = state_44685__$1;
(statearr_44702_44758[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (32))){
var inst_44644 = (state_44685[(14)]);
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44685__$1,(35),out,inst_44644);
} else {
if((state_val_44686 === (33))){
var inst_44635 = (state_44685[(12)]);
var inst_44612 = inst_44635;
var state_44685__$1 = (function (){var statearr_44703 = state_44685;
(statearr_44703[(7)] = inst_44612);

return statearr_44703;
})();
var statearr_44704_44759 = state_44685__$1;
(statearr_44704_44759[(2)] = null);

(statearr_44704_44759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (13))){
var inst_44612 = (state_44685[(7)]);
var inst_44619 = inst_44612.cljs$lang$protocol_mask$partition0$;
var inst_44620 = (inst_44619 & (64));
var inst_44621 = inst_44612.cljs$core$ISeq$;
var inst_44622 = (cljs.core.PROTOCOL_SENTINEL === inst_44621);
var inst_44623 = (inst_44620) || (inst_44622);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44623)){
var statearr_44705_44760 = state_44685__$1;
(statearr_44705_44760[(1)] = (16));

} else {
var statearr_44706_44761 = state_44685__$1;
(statearr_44706_44761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (22))){
var inst_44645 = (state_44685[(11)]);
var inst_44644 = (state_44685[(14)]);
var inst_44643 = (state_44685[(2)]);
var inst_44644__$1 = cljs.core.nth.call(null,inst_44643,(0),null);
var inst_44645__$1 = cljs.core.nth.call(null,inst_44643,(1),null);
var inst_44646 = (inst_44644__$1 == null);
var inst_44647 = cljs.core._EQ_.call(null,inst_44645__$1,change);
var inst_44648 = (inst_44646) || (inst_44647);
var state_44685__$1 = (function (){var statearr_44707 = state_44685;
(statearr_44707[(11)] = inst_44645__$1);

(statearr_44707[(14)] = inst_44644__$1);

return statearr_44707;
})();
if(cljs.core.truth_(inst_44648)){
var statearr_44708_44762 = state_44685__$1;
(statearr_44708_44762[(1)] = (23));

} else {
var statearr_44709_44763 = state_44685__$1;
(statearr_44709_44763[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (36))){
var inst_44635 = (state_44685[(12)]);
var inst_44612 = inst_44635;
var state_44685__$1 = (function (){var statearr_44710 = state_44685;
(statearr_44710[(7)] = inst_44612);

return statearr_44710;
})();
var statearr_44711_44764 = state_44685__$1;
(statearr_44711_44764[(2)] = null);

(statearr_44711_44764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (29))){
var inst_44659 = (state_44685[(10)]);
var state_44685__$1 = state_44685;
var statearr_44712_44765 = state_44685__$1;
(statearr_44712_44765[(2)] = inst_44659);

(statearr_44712_44765[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (6))){
var state_44685__$1 = state_44685;
var statearr_44713_44766 = state_44685__$1;
(statearr_44713_44766[(2)] = false);

(statearr_44713_44766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (28))){
var inst_44655 = (state_44685[(2)]);
var inst_44656 = calc_state.call(null);
var inst_44612 = inst_44656;
var state_44685__$1 = (function (){var statearr_44714 = state_44685;
(statearr_44714[(7)] = inst_44612);

(statearr_44714[(15)] = inst_44655);

return statearr_44714;
})();
var statearr_44715_44767 = state_44685__$1;
(statearr_44715_44767[(2)] = null);

(statearr_44715_44767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (25))){
var inst_44681 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44716_44768 = state_44685__$1;
(statearr_44716_44768[(2)] = inst_44681);

(statearr_44716_44768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (34))){
var inst_44679 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44717_44769 = state_44685__$1;
(statearr_44717_44769[(2)] = inst_44679);

(statearr_44717_44769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (17))){
var state_44685__$1 = state_44685;
var statearr_44718_44770 = state_44685__$1;
(statearr_44718_44770[(2)] = false);

(statearr_44718_44770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (3))){
var state_44685__$1 = state_44685;
var statearr_44719_44771 = state_44685__$1;
(statearr_44719_44771[(2)] = false);

(statearr_44719_44771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (12))){
var inst_44683 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44685__$1,inst_44683);
} else {
if((state_val_44686 === (2))){
var inst_44587 = (state_44685[(8)]);
var inst_44592 = inst_44587.cljs$lang$protocol_mask$partition0$;
var inst_44593 = (inst_44592 & (64));
var inst_44594 = inst_44587.cljs$core$ISeq$;
var inst_44595 = (cljs.core.PROTOCOL_SENTINEL === inst_44594);
var inst_44596 = (inst_44593) || (inst_44595);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44596)){
var statearr_44720_44772 = state_44685__$1;
(statearr_44720_44772[(1)] = (5));

} else {
var statearr_44721_44773 = state_44685__$1;
(statearr_44721_44773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (23))){
var inst_44644 = (state_44685[(14)]);
var inst_44650 = (inst_44644 == null);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44650)){
var statearr_44722_44774 = state_44685__$1;
(statearr_44722_44774[(1)] = (26));

} else {
var statearr_44723_44775 = state_44685__$1;
(statearr_44723_44775[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (35))){
var inst_44670 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44670)){
var statearr_44724_44776 = state_44685__$1;
(statearr_44724_44776[(1)] = (36));

} else {
var statearr_44725_44777 = state_44685__$1;
(statearr_44725_44777[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (19))){
var inst_44612 = (state_44685[(7)]);
var inst_44632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44612);
var state_44685__$1 = state_44685;
var statearr_44726_44778 = state_44685__$1;
(statearr_44726_44778[(2)] = inst_44632);

(statearr_44726_44778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (11))){
var inst_44612 = (state_44685[(7)]);
var inst_44616 = (inst_44612 == null);
var inst_44617 = cljs.core.not.call(null,inst_44616);
var state_44685__$1 = state_44685;
if(inst_44617){
var statearr_44727_44779 = state_44685__$1;
(statearr_44727_44779[(1)] = (13));

} else {
var statearr_44728_44780 = state_44685__$1;
(statearr_44728_44780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (9))){
var inst_44587 = (state_44685[(8)]);
var state_44685__$1 = state_44685;
var statearr_44729_44781 = state_44685__$1;
(statearr_44729_44781[(2)] = inst_44587);

(statearr_44729_44781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (5))){
var state_44685__$1 = state_44685;
var statearr_44730_44782 = state_44685__$1;
(statearr_44730_44782[(2)] = true);

(statearr_44730_44782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (14))){
var state_44685__$1 = state_44685;
var statearr_44731_44783 = state_44685__$1;
(statearr_44731_44783[(2)] = false);

(statearr_44731_44783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (26))){
var inst_44645 = (state_44685[(11)]);
var inst_44652 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44645);
var state_44685__$1 = state_44685;
var statearr_44732_44784 = state_44685__$1;
(statearr_44732_44784[(2)] = inst_44652);

(statearr_44732_44784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (16))){
var state_44685__$1 = state_44685;
var statearr_44733_44785 = state_44685__$1;
(statearr_44733_44785[(2)] = true);

(statearr_44733_44785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (38))){
var inst_44675 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44734_44786 = state_44685__$1;
(statearr_44734_44786[(2)] = inst_44675);

(statearr_44734_44786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (30))){
var inst_44637 = (state_44685[(13)]);
var inst_44636 = (state_44685[(9)]);
var inst_44645 = (state_44685[(11)]);
var inst_44662 = cljs.core.empty_QMARK_.call(null,inst_44636);
var inst_44663 = inst_44637.call(null,inst_44645);
var inst_44664 = cljs.core.not.call(null,inst_44663);
var inst_44665 = (inst_44662) && (inst_44664);
var state_44685__$1 = state_44685;
var statearr_44735_44787 = state_44685__$1;
(statearr_44735_44787[(2)] = inst_44665);

(statearr_44735_44787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (10))){
var inst_44587 = (state_44685[(8)]);
var inst_44608 = (state_44685[(2)]);
var inst_44609 = cljs.core.get.call(null,inst_44608,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44610 = cljs.core.get.call(null,inst_44608,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44611 = cljs.core.get.call(null,inst_44608,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44612 = inst_44587;
var state_44685__$1 = (function (){var statearr_44736 = state_44685;
(statearr_44736[(16)] = inst_44610);

(statearr_44736[(7)] = inst_44612);

(statearr_44736[(17)] = inst_44611);

(statearr_44736[(18)] = inst_44609);

return statearr_44736;
})();
var statearr_44737_44788 = state_44685__$1;
(statearr_44737_44788[(2)] = null);

(statearr_44737_44788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (18))){
var inst_44627 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44738_44789 = state_44685__$1;
(statearr_44738_44789[(2)] = inst_44627);

(statearr_44738_44789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (37))){
var state_44685__$1 = state_44685;
var statearr_44739_44790 = state_44685__$1;
(statearr_44739_44790[(2)] = null);

(statearr_44739_44790[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (8))){
var inst_44587 = (state_44685[(8)]);
var inst_44605 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44587);
var state_44685__$1 = state_44685;
var statearr_44740_44791 = state_44685__$1;
(statearr_44740_44791[(2)] = inst_44605);

(statearr_44740_44791[(1)] = (10));


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
});})(c__30953__auto___44745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30865__auto__,c__30953__auto___44745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30866__auto__ = null;
var cljs$core$async$mix_$_state_machine__30866__auto____0 = (function (){
var statearr_44741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44741[(0)] = cljs$core$async$mix_$_state_machine__30866__auto__);

(statearr_44741[(1)] = (1));

return statearr_44741;
});
var cljs$core$async$mix_$_state_machine__30866__auto____1 = (function (state_44685){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44742){if((e44742 instanceof Object)){
var ex__30869__auto__ = e44742;
var statearr_44743_44792 = state_44685;
(statearr_44743_44792[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44793 = state_44685;
state_44685 = G__44793;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30866__auto__ = function(state_44685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30866__auto____1.call(this,state_44685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30866__auto____0;
cljs$core$async$mix_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30866__auto____1;
return cljs$core$async$mix_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___44745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30955__auto__ = (function (){var statearr_44744 = f__30954__auto__.call(null);
(statearr_44744[(6)] = c__30953__auto___44745);

return statearr_44744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___44745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44795 = arguments.length;
switch (G__44795) {
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
var G__44799 = arguments.length;
switch (G__44799) {
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
return (function (p1__44797_SHARP_){
if(cljs.core.truth_(p1__44797_SHARP_.call(null,topic))){
return p1__44797_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44797_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44800 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44801){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44801 = meta44801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44802,meta44801__$1){
var self__ = this;
var _44802__$1 = this;
return (new cljs.core.async.t_cljs$core$async44800(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44801__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44802){
var self__ = this;
var _44802__$1 = this;
return self__.meta44801;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44801","meta44801",1907900430,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44800";

cljs.core.async.t_cljs$core$async44800.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async44800");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44800 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44800(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44801){
return (new cljs.core.async.t_cljs$core$async44800(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44801));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44800(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30953__auto___44920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___44920,mults,ensure_mult,p){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___44920,mults,ensure_mult,p){
return (function (state_44874){
var state_val_44875 = (state_44874[(1)]);
if((state_val_44875 === (7))){
var inst_44870 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44876_44921 = state_44874__$1;
(statearr_44876_44921[(2)] = inst_44870);

(statearr_44876_44921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (20))){
var state_44874__$1 = state_44874;
var statearr_44877_44922 = state_44874__$1;
(statearr_44877_44922[(2)] = null);

(statearr_44877_44922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (1))){
var state_44874__$1 = state_44874;
var statearr_44878_44923 = state_44874__$1;
(statearr_44878_44923[(2)] = null);

(statearr_44878_44923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (24))){
var inst_44853 = (state_44874[(7)]);
var inst_44862 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44853);
var state_44874__$1 = state_44874;
var statearr_44879_44924 = state_44874__$1;
(statearr_44879_44924[(2)] = inst_44862);

(statearr_44879_44924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (4))){
var inst_44805 = (state_44874[(8)]);
var inst_44805__$1 = (state_44874[(2)]);
var inst_44806 = (inst_44805__$1 == null);
var state_44874__$1 = (function (){var statearr_44880 = state_44874;
(statearr_44880[(8)] = inst_44805__$1);

return statearr_44880;
})();
if(cljs.core.truth_(inst_44806)){
var statearr_44881_44925 = state_44874__$1;
(statearr_44881_44925[(1)] = (5));

} else {
var statearr_44882_44926 = state_44874__$1;
(statearr_44882_44926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (15))){
var inst_44847 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44883_44927 = state_44874__$1;
(statearr_44883_44927[(2)] = inst_44847);

(statearr_44883_44927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (21))){
var inst_44867 = (state_44874[(2)]);
var state_44874__$1 = (function (){var statearr_44884 = state_44874;
(statearr_44884[(9)] = inst_44867);

return statearr_44884;
})();
var statearr_44885_44928 = state_44874__$1;
(statearr_44885_44928[(2)] = null);

(statearr_44885_44928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (13))){
var inst_44829 = (state_44874[(10)]);
var inst_44831 = cljs.core.chunked_seq_QMARK_.call(null,inst_44829);
var state_44874__$1 = state_44874;
if(inst_44831){
var statearr_44886_44929 = state_44874__$1;
(statearr_44886_44929[(1)] = (16));

} else {
var statearr_44887_44930 = state_44874__$1;
(statearr_44887_44930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (22))){
var inst_44859 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
if(cljs.core.truth_(inst_44859)){
var statearr_44888_44931 = state_44874__$1;
(statearr_44888_44931[(1)] = (23));

} else {
var statearr_44889_44932 = state_44874__$1;
(statearr_44889_44932[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (6))){
var inst_44855 = (state_44874[(11)]);
var inst_44805 = (state_44874[(8)]);
var inst_44853 = (state_44874[(7)]);
var inst_44853__$1 = topic_fn.call(null,inst_44805);
var inst_44854 = cljs.core.deref.call(null,mults);
var inst_44855__$1 = cljs.core.get.call(null,inst_44854,inst_44853__$1);
var state_44874__$1 = (function (){var statearr_44890 = state_44874;
(statearr_44890[(11)] = inst_44855__$1);

(statearr_44890[(7)] = inst_44853__$1);

return statearr_44890;
})();
if(cljs.core.truth_(inst_44855__$1)){
var statearr_44891_44933 = state_44874__$1;
(statearr_44891_44933[(1)] = (19));

} else {
var statearr_44892_44934 = state_44874__$1;
(statearr_44892_44934[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (25))){
var inst_44864 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44893_44935 = state_44874__$1;
(statearr_44893_44935[(2)] = inst_44864);

(statearr_44893_44935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (17))){
var inst_44829 = (state_44874[(10)]);
var inst_44838 = cljs.core.first.call(null,inst_44829);
var inst_44839 = cljs.core.async.muxch_STAR_.call(null,inst_44838);
var inst_44840 = cljs.core.async.close_BANG_.call(null,inst_44839);
var inst_44841 = cljs.core.next.call(null,inst_44829);
var inst_44815 = inst_44841;
var inst_44816 = null;
var inst_44817 = (0);
var inst_44818 = (0);
var state_44874__$1 = (function (){var statearr_44894 = state_44874;
(statearr_44894[(12)] = inst_44840);

(statearr_44894[(13)] = inst_44818);

(statearr_44894[(14)] = inst_44815);

(statearr_44894[(15)] = inst_44816);

(statearr_44894[(16)] = inst_44817);

return statearr_44894;
})();
var statearr_44895_44936 = state_44874__$1;
(statearr_44895_44936[(2)] = null);

(statearr_44895_44936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (3))){
var inst_44872 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44874__$1,inst_44872);
} else {
if((state_val_44875 === (12))){
var inst_44849 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44896_44937 = state_44874__$1;
(statearr_44896_44937[(2)] = inst_44849);

(statearr_44896_44937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (2))){
var state_44874__$1 = state_44874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44874__$1,(4),ch);
} else {
if((state_val_44875 === (23))){
var state_44874__$1 = state_44874;
var statearr_44897_44938 = state_44874__$1;
(statearr_44897_44938[(2)] = null);

(statearr_44897_44938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (19))){
var inst_44855 = (state_44874[(11)]);
var inst_44805 = (state_44874[(8)]);
var inst_44857 = cljs.core.async.muxch_STAR_.call(null,inst_44855);
var state_44874__$1 = state_44874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44874__$1,(22),inst_44857,inst_44805);
} else {
if((state_val_44875 === (11))){
var inst_44829 = (state_44874[(10)]);
var inst_44815 = (state_44874[(14)]);
var inst_44829__$1 = cljs.core.seq.call(null,inst_44815);
var state_44874__$1 = (function (){var statearr_44898 = state_44874;
(statearr_44898[(10)] = inst_44829__$1);

return statearr_44898;
})();
if(inst_44829__$1){
var statearr_44899_44939 = state_44874__$1;
(statearr_44899_44939[(1)] = (13));

} else {
var statearr_44900_44940 = state_44874__$1;
(statearr_44900_44940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (9))){
var inst_44851 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44901_44941 = state_44874__$1;
(statearr_44901_44941[(2)] = inst_44851);

(statearr_44901_44941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (5))){
var inst_44812 = cljs.core.deref.call(null,mults);
var inst_44813 = cljs.core.vals.call(null,inst_44812);
var inst_44814 = cljs.core.seq.call(null,inst_44813);
var inst_44815 = inst_44814;
var inst_44816 = null;
var inst_44817 = (0);
var inst_44818 = (0);
var state_44874__$1 = (function (){var statearr_44902 = state_44874;
(statearr_44902[(13)] = inst_44818);

(statearr_44902[(14)] = inst_44815);

(statearr_44902[(15)] = inst_44816);

(statearr_44902[(16)] = inst_44817);

return statearr_44902;
})();
var statearr_44903_44942 = state_44874__$1;
(statearr_44903_44942[(2)] = null);

(statearr_44903_44942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (14))){
var state_44874__$1 = state_44874;
var statearr_44907_44943 = state_44874__$1;
(statearr_44907_44943[(2)] = null);

(statearr_44907_44943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (16))){
var inst_44829 = (state_44874[(10)]);
var inst_44833 = cljs.core.chunk_first.call(null,inst_44829);
var inst_44834 = cljs.core.chunk_rest.call(null,inst_44829);
var inst_44835 = cljs.core.count.call(null,inst_44833);
var inst_44815 = inst_44834;
var inst_44816 = inst_44833;
var inst_44817 = inst_44835;
var inst_44818 = (0);
var state_44874__$1 = (function (){var statearr_44908 = state_44874;
(statearr_44908[(13)] = inst_44818);

(statearr_44908[(14)] = inst_44815);

(statearr_44908[(15)] = inst_44816);

(statearr_44908[(16)] = inst_44817);

return statearr_44908;
})();
var statearr_44909_44944 = state_44874__$1;
(statearr_44909_44944[(2)] = null);

(statearr_44909_44944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (10))){
var inst_44818 = (state_44874[(13)]);
var inst_44815 = (state_44874[(14)]);
var inst_44816 = (state_44874[(15)]);
var inst_44817 = (state_44874[(16)]);
var inst_44823 = cljs.core._nth.call(null,inst_44816,inst_44818);
var inst_44824 = cljs.core.async.muxch_STAR_.call(null,inst_44823);
var inst_44825 = cljs.core.async.close_BANG_.call(null,inst_44824);
var inst_44826 = (inst_44818 + (1));
var tmp44904 = inst_44815;
var tmp44905 = inst_44816;
var tmp44906 = inst_44817;
var inst_44815__$1 = tmp44904;
var inst_44816__$1 = tmp44905;
var inst_44817__$1 = tmp44906;
var inst_44818__$1 = inst_44826;
var state_44874__$1 = (function (){var statearr_44910 = state_44874;
(statearr_44910[(13)] = inst_44818__$1);

(statearr_44910[(17)] = inst_44825);

(statearr_44910[(14)] = inst_44815__$1);

(statearr_44910[(15)] = inst_44816__$1);

(statearr_44910[(16)] = inst_44817__$1);

return statearr_44910;
})();
var statearr_44911_44945 = state_44874__$1;
(statearr_44911_44945[(2)] = null);

(statearr_44911_44945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (18))){
var inst_44844 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44912_44946 = state_44874__$1;
(statearr_44912_44946[(2)] = inst_44844);

(statearr_44912_44946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (8))){
var inst_44818 = (state_44874[(13)]);
var inst_44817 = (state_44874[(16)]);
var inst_44820 = (inst_44818 < inst_44817);
var inst_44821 = inst_44820;
var state_44874__$1 = state_44874;
if(cljs.core.truth_(inst_44821)){
var statearr_44913_44947 = state_44874__$1;
(statearr_44913_44947[(1)] = (10));

} else {
var statearr_44914_44948 = state_44874__$1;
(statearr_44914_44948[(1)] = (11));

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
});})(c__30953__auto___44920,mults,ensure_mult,p))
;
return ((function (switch__30865__auto__,c__30953__auto___44920,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_44915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44915[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_44915[(1)] = (1));

return statearr_44915;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_44874){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e44916){if((e44916 instanceof Object)){
var ex__30869__auto__ = e44916;
var statearr_44917_44949 = state_44874;
(statearr_44917_44949[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44950 = state_44874;
state_44874 = G__44950;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_44874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_44874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___44920,mults,ensure_mult,p))
})();
var state__30955__auto__ = (function (){var statearr_44918 = f__30954__auto__.call(null);
(statearr_44918[(6)] = c__30953__auto___44920);

return statearr_44918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___44920,mults,ensure_mult,p))
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
var G__44952 = arguments.length;
switch (G__44952) {
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
var G__44955 = arguments.length;
switch (G__44955) {
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
var G__44958 = arguments.length;
switch (G__44958) {
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
var c__30953__auto___45025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45025,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45025,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44997){
var state_val_44998 = (state_44997[(1)]);
if((state_val_44998 === (7))){
var state_44997__$1 = state_44997;
var statearr_44999_45026 = state_44997__$1;
(statearr_44999_45026[(2)] = null);

(statearr_44999_45026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (1))){
var state_44997__$1 = state_44997;
var statearr_45000_45027 = state_44997__$1;
(statearr_45000_45027[(2)] = null);

(statearr_45000_45027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (4))){
var inst_44961 = (state_44997[(7)]);
var inst_44963 = (inst_44961 < cnt);
var state_44997__$1 = state_44997;
if(cljs.core.truth_(inst_44963)){
var statearr_45001_45028 = state_44997__$1;
(statearr_45001_45028[(1)] = (6));

} else {
var statearr_45002_45029 = state_44997__$1;
(statearr_45002_45029[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (15))){
var inst_44993 = (state_44997[(2)]);
var state_44997__$1 = state_44997;
var statearr_45003_45030 = state_44997__$1;
(statearr_45003_45030[(2)] = inst_44993);

(statearr_45003_45030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (13))){
var inst_44986 = cljs.core.async.close_BANG_.call(null,out);
var state_44997__$1 = state_44997;
var statearr_45004_45031 = state_44997__$1;
(statearr_45004_45031[(2)] = inst_44986);

(statearr_45004_45031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (6))){
var state_44997__$1 = state_44997;
var statearr_45005_45032 = state_44997__$1;
(statearr_45005_45032[(2)] = null);

(statearr_45005_45032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (3))){
var inst_44995 = (state_44997[(2)]);
var state_44997__$1 = state_44997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44997__$1,inst_44995);
} else {
if((state_val_44998 === (12))){
var inst_44983 = (state_44997[(8)]);
var inst_44983__$1 = (state_44997[(2)]);
var inst_44984 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44983__$1);
var state_44997__$1 = (function (){var statearr_45006 = state_44997;
(statearr_45006[(8)] = inst_44983__$1);

return statearr_45006;
})();
if(cljs.core.truth_(inst_44984)){
var statearr_45007_45033 = state_44997__$1;
(statearr_45007_45033[(1)] = (13));

} else {
var statearr_45008_45034 = state_44997__$1;
(statearr_45008_45034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (2))){
var inst_44960 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44961 = (0);
var state_44997__$1 = (function (){var statearr_45009 = state_44997;
(statearr_45009[(9)] = inst_44960);

(statearr_45009[(7)] = inst_44961);

return statearr_45009;
})();
var statearr_45010_45035 = state_44997__$1;
(statearr_45010_45035[(2)] = null);

(statearr_45010_45035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (11))){
var inst_44961 = (state_44997[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44997,(10),Object,null,(9));
var inst_44970 = chs__$1.call(null,inst_44961);
var inst_44971 = done.call(null,inst_44961);
var inst_44972 = cljs.core.async.take_BANG_.call(null,inst_44970,inst_44971);
var state_44997__$1 = state_44997;
var statearr_45011_45036 = state_44997__$1;
(statearr_45011_45036[(2)] = inst_44972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44997__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (9))){
var inst_44961 = (state_44997[(7)]);
var inst_44974 = (state_44997[(2)]);
var inst_44975 = (inst_44961 + (1));
var inst_44961__$1 = inst_44975;
var state_44997__$1 = (function (){var statearr_45012 = state_44997;
(statearr_45012[(7)] = inst_44961__$1);

(statearr_45012[(10)] = inst_44974);

return statearr_45012;
})();
var statearr_45013_45037 = state_44997__$1;
(statearr_45013_45037[(2)] = null);

(statearr_45013_45037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (5))){
var inst_44981 = (state_44997[(2)]);
var state_44997__$1 = (function (){var statearr_45014 = state_44997;
(statearr_45014[(11)] = inst_44981);

return statearr_45014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44997__$1,(12),dchan);
} else {
if((state_val_44998 === (14))){
var inst_44983 = (state_44997[(8)]);
var inst_44988 = cljs.core.apply.call(null,f,inst_44983);
var state_44997__$1 = state_44997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44997__$1,(16),out,inst_44988);
} else {
if((state_val_44998 === (16))){
var inst_44990 = (state_44997[(2)]);
var state_44997__$1 = (function (){var statearr_45015 = state_44997;
(statearr_45015[(12)] = inst_44990);

return statearr_45015;
})();
var statearr_45016_45038 = state_44997__$1;
(statearr_45016_45038[(2)] = null);

(statearr_45016_45038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (10))){
var inst_44965 = (state_44997[(2)]);
var inst_44966 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44997__$1 = (function (){var statearr_45017 = state_44997;
(statearr_45017[(13)] = inst_44965);

return statearr_45017;
})();
var statearr_45018_45039 = state_44997__$1;
(statearr_45018_45039[(2)] = inst_44966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44997__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (8))){
var inst_44979 = (state_44997[(2)]);
var state_44997__$1 = state_44997;
var statearr_45019_45040 = state_44997__$1;
(statearr_45019_45040[(2)] = inst_44979);

(statearr_45019_45040[(1)] = (5));


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
});})(c__30953__auto___45025,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30865__auto__,c__30953__auto___45025,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45020[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45020[(1)] = (1));

return statearr_45020;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_44997){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_44997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45021){if((e45021 instanceof Object)){
var ex__30869__auto__ = e45021;
var statearr_45022_45041 = state_44997;
(statearr_45022_45041[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45042 = state_44997;
state_44997 = G__45042;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_44997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_44997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45025,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30955__auto__ = (function (){var statearr_45023 = f__30954__auto__.call(null);
(statearr_45023[(6)] = c__30953__auto___45025);

return statearr_45023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45025,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45045 = arguments.length;
switch (G__45045) {
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
var c__30953__auto___45099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45099,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45099,out){
return (function (state_45077){
var state_val_45078 = (state_45077[(1)]);
if((state_val_45078 === (7))){
var inst_45056 = (state_45077[(7)]);
var inst_45057 = (state_45077[(8)]);
var inst_45056__$1 = (state_45077[(2)]);
var inst_45057__$1 = cljs.core.nth.call(null,inst_45056__$1,(0),null);
var inst_45058 = cljs.core.nth.call(null,inst_45056__$1,(1),null);
var inst_45059 = (inst_45057__$1 == null);
var state_45077__$1 = (function (){var statearr_45079 = state_45077;
(statearr_45079[(7)] = inst_45056__$1);

(statearr_45079[(8)] = inst_45057__$1);

(statearr_45079[(9)] = inst_45058);

return statearr_45079;
})();
if(cljs.core.truth_(inst_45059)){
var statearr_45080_45100 = state_45077__$1;
(statearr_45080_45100[(1)] = (8));

} else {
var statearr_45081_45101 = state_45077__$1;
(statearr_45081_45101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (1))){
var inst_45046 = cljs.core.vec.call(null,chs);
var inst_45047 = inst_45046;
var state_45077__$1 = (function (){var statearr_45082 = state_45077;
(statearr_45082[(10)] = inst_45047);

return statearr_45082;
})();
var statearr_45083_45102 = state_45077__$1;
(statearr_45083_45102[(2)] = null);

(statearr_45083_45102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (4))){
var inst_45047 = (state_45077[(10)]);
var state_45077__$1 = state_45077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45077__$1,(7),inst_45047);
} else {
if((state_val_45078 === (6))){
var inst_45073 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
var statearr_45084_45103 = state_45077__$1;
(statearr_45084_45103[(2)] = inst_45073);

(statearr_45084_45103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (3))){
var inst_45075 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45077__$1,inst_45075);
} else {
if((state_val_45078 === (2))){
var inst_45047 = (state_45077[(10)]);
var inst_45049 = cljs.core.count.call(null,inst_45047);
var inst_45050 = (inst_45049 > (0));
var state_45077__$1 = state_45077;
if(cljs.core.truth_(inst_45050)){
var statearr_45086_45104 = state_45077__$1;
(statearr_45086_45104[(1)] = (4));

} else {
var statearr_45087_45105 = state_45077__$1;
(statearr_45087_45105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (11))){
var inst_45047 = (state_45077[(10)]);
var inst_45066 = (state_45077[(2)]);
var tmp45085 = inst_45047;
var inst_45047__$1 = tmp45085;
var state_45077__$1 = (function (){var statearr_45088 = state_45077;
(statearr_45088[(10)] = inst_45047__$1);

(statearr_45088[(11)] = inst_45066);

return statearr_45088;
})();
var statearr_45089_45106 = state_45077__$1;
(statearr_45089_45106[(2)] = null);

(statearr_45089_45106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (9))){
var inst_45057 = (state_45077[(8)]);
var state_45077__$1 = state_45077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45077__$1,(11),out,inst_45057);
} else {
if((state_val_45078 === (5))){
var inst_45071 = cljs.core.async.close_BANG_.call(null,out);
var state_45077__$1 = state_45077;
var statearr_45090_45107 = state_45077__$1;
(statearr_45090_45107[(2)] = inst_45071);

(statearr_45090_45107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (10))){
var inst_45069 = (state_45077[(2)]);
var state_45077__$1 = state_45077;
var statearr_45091_45108 = state_45077__$1;
(statearr_45091_45108[(2)] = inst_45069);

(statearr_45091_45108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45078 === (8))){
var inst_45056 = (state_45077[(7)]);
var inst_45047 = (state_45077[(10)]);
var inst_45057 = (state_45077[(8)]);
var inst_45058 = (state_45077[(9)]);
var inst_45061 = (function (){var cs = inst_45047;
var vec__45052 = inst_45056;
var v = inst_45057;
var c = inst_45058;
return ((function (cs,vec__45052,v,c,inst_45056,inst_45047,inst_45057,inst_45058,state_val_45078,c__30953__auto___45099,out){
return (function (p1__45043_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45043_SHARP_);
});
;})(cs,vec__45052,v,c,inst_45056,inst_45047,inst_45057,inst_45058,state_val_45078,c__30953__auto___45099,out))
})();
var inst_45062 = cljs.core.filterv.call(null,inst_45061,inst_45047);
var inst_45047__$1 = inst_45062;
var state_45077__$1 = (function (){var statearr_45092 = state_45077;
(statearr_45092[(10)] = inst_45047__$1);

return statearr_45092;
})();
var statearr_45093_45109 = state_45077__$1;
(statearr_45093_45109[(2)] = null);

(statearr_45093_45109[(1)] = (2));


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
});})(c__30953__auto___45099,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45099,out){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45094[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45094[(1)] = (1));

return statearr_45094;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_45077){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45095){if((e45095 instanceof Object)){
var ex__30869__auto__ = e45095;
var statearr_45096_45110 = state_45077;
(statearr_45096_45110[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45111 = state_45077;
state_45077 = G__45111;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_45077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_45077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45099,out))
})();
var state__30955__auto__ = (function (){var statearr_45097 = f__30954__auto__.call(null);
(statearr_45097[(6)] = c__30953__auto___45099);

return statearr_45097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45099,out))
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
var G__45113 = arguments.length;
switch (G__45113) {
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
var c__30953__auto___45158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45158,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45158,out){
return (function (state_45137){
var state_val_45138 = (state_45137[(1)]);
if((state_val_45138 === (7))){
var inst_45119 = (state_45137[(7)]);
var inst_45119__$1 = (state_45137[(2)]);
var inst_45120 = (inst_45119__$1 == null);
var inst_45121 = cljs.core.not.call(null,inst_45120);
var state_45137__$1 = (function (){var statearr_45139 = state_45137;
(statearr_45139[(7)] = inst_45119__$1);

return statearr_45139;
})();
if(inst_45121){
var statearr_45140_45159 = state_45137__$1;
(statearr_45140_45159[(1)] = (8));

} else {
var statearr_45141_45160 = state_45137__$1;
(statearr_45141_45160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (1))){
var inst_45114 = (0);
var state_45137__$1 = (function (){var statearr_45142 = state_45137;
(statearr_45142[(8)] = inst_45114);

return statearr_45142;
})();
var statearr_45143_45161 = state_45137__$1;
(statearr_45143_45161[(2)] = null);

(statearr_45143_45161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (4))){
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45137__$1,(7),ch);
} else {
if((state_val_45138 === (6))){
var inst_45132 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45144_45162 = state_45137__$1;
(statearr_45144_45162[(2)] = inst_45132);

(statearr_45144_45162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (3))){
var inst_45134 = (state_45137[(2)]);
var inst_45135 = cljs.core.async.close_BANG_.call(null,out);
var state_45137__$1 = (function (){var statearr_45145 = state_45137;
(statearr_45145[(9)] = inst_45134);

return statearr_45145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45137__$1,inst_45135);
} else {
if((state_val_45138 === (2))){
var inst_45114 = (state_45137[(8)]);
var inst_45116 = (inst_45114 < n);
var state_45137__$1 = state_45137;
if(cljs.core.truth_(inst_45116)){
var statearr_45146_45163 = state_45137__$1;
(statearr_45146_45163[(1)] = (4));

} else {
var statearr_45147_45164 = state_45137__$1;
(statearr_45147_45164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (11))){
var inst_45114 = (state_45137[(8)]);
var inst_45124 = (state_45137[(2)]);
var inst_45125 = (inst_45114 + (1));
var inst_45114__$1 = inst_45125;
var state_45137__$1 = (function (){var statearr_45148 = state_45137;
(statearr_45148[(8)] = inst_45114__$1);

(statearr_45148[(10)] = inst_45124);

return statearr_45148;
})();
var statearr_45149_45165 = state_45137__$1;
(statearr_45149_45165[(2)] = null);

(statearr_45149_45165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (9))){
var state_45137__$1 = state_45137;
var statearr_45150_45166 = state_45137__$1;
(statearr_45150_45166[(2)] = null);

(statearr_45150_45166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (5))){
var state_45137__$1 = state_45137;
var statearr_45151_45167 = state_45137__$1;
(statearr_45151_45167[(2)] = null);

(statearr_45151_45167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (10))){
var inst_45129 = (state_45137[(2)]);
var state_45137__$1 = state_45137;
var statearr_45152_45168 = state_45137__$1;
(statearr_45152_45168[(2)] = inst_45129);

(statearr_45152_45168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45138 === (8))){
var inst_45119 = (state_45137[(7)]);
var state_45137__$1 = state_45137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45137__$1,(11),out,inst_45119);
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
});})(c__30953__auto___45158,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45158,out){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45153[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45153[(1)] = (1));

return statearr_45153;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_45137){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45154){if((e45154 instanceof Object)){
var ex__30869__auto__ = e45154;
var statearr_45155_45169 = state_45137;
(statearr_45155_45169[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45170 = state_45137;
state_45137 = G__45170;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_45137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_45137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45158,out))
})();
var state__30955__auto__ = (function (){var statearr_45156 = f__30954__auto__.call(null);
(statearr_45156[(6)] = c__30953__auto___45158);

return statearr_45156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45158,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45172 = (function (f,ch,meta45173){
this.f = f;
this.ch = ch;
this.meta45173 = meta45173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45174,meta45173__$1){
var self__ = this;
var _45174__$1 = this;
return (new cljs.core.async.t_cljs$core$async45172(self__.f,self__.ch,meta45173__$1));
});

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45174){
var self__ = this;
var _45174__$1 = this;
return self__.meta45173;
});

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45175 = (function (f,ch,meta45173,_,fn1,meta45176){
this.f = f;
this.ch = ch;
this.meta45173 = meta45173;
this._ = _;
this.fn1 = fn1;
this.meta45176 = meta45176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45177,meta45176__$1){
var self__ = this;
var _45177__$1 = this;
return (new cljs.core.async.t_cljs$core$async45175(self__.f,self__.ch,self__.meta45173,self__._,self__.fn1,meta45176__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45177){
var self__ = this;
var _45177__$1 = this;
return self__.meta45176;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45171_SHARP_){
return f1.call(null,(((p1__45171_SHARP_ == null))?null:self__.f.call(null,p1__45171_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45175.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45173","meta45173",195958985,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45172","cljs.core.async/t_cljs$core$async45172",1277051137,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45176","meta45176",-1530255568,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45175";

cljs.core.async.t_cljs$core$async45175.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45175");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45175 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45175(f__$1,ch__$1,meta45173__$1,___$2,fn1__$1,meta45176){
return (new cljs.core.async.t_cljs$core$async45175(f__$1,ch__$1,meta45173__$1,___$2,fn1__$1,meta45176));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45175(self__.f,self__.ch,self__.meta45173,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45173","meta45173",195958985,null)], null);
});

cljs.core.async.t_cljs$core$async45172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45172";

cljs.core.async.t_cljs$core$async45172.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45172");
});

cljs.core.async.__GT_t_cljs$core$async45172 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45172(f__$1,ch__$1,meta45173){
return (new cljs.core.async.t_cljs$core$async45172(f__$1,ch__$1,meta45173));
});

}

return (new cljs.core.async.t_cljs$core$async45172(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45178 = (function (f,ch,meta45179){
this.f = f;
this.ch = ch;
this.meta45179 = meta45179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45180,meta45179__$1){
var self__ = this;
var _45180__$1 = this;
return (new cljs.core.async.t_cljs$core$async45178(self__.f,self__.ch,meta45179__$1));
});

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45180){
var self__ = this;
var _45180__$1 = this;
return self__.meta45179;
});

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45179","meta45179",-90129314,null)], null);
});

cljs.core.async.t_cljs$core$async45178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45178";

cljs.core.async.t_cljs$core$async45178.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45178");
});

cljs.core.async.__GT_t_cljs$core$async45178 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45178(f__$1,ch__$1,meta45179){
return (new cljs.core.async.t_cljs$core$async45178(f__$1,ch__$1,meta45179));
});

}

return (new cljs.core.async.t_cljs$core$async45178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45181 = (function (p,ch,meta45182){
this.p = p;
this.ch = ch;
this.meta45182 = meta45182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45183,meta45182__$1){
var self__ = this;
var _45183__$1 = this;
return (new cljs.core.async.t_cljs$core$async45181(self__.p,self__.ch,meta45182__$1));
});

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45183){
var self__ = this;
var _45183__$1 = this;
return self__.meta45182;
});

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45182","meta45182",-140171156,null)], null);
});

cljs.core.async.t_cljs$core$async45181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45181";

cljs.core.async.t_cljs$core$async45181.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async45181");
});

cljs.core.async.__GT_t_cljs$core$async45181 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45181(p__$1,ch__$1,meta45182){
return (new cljs.core.async.t_cljs$core$async45181(p__$1,ch__$1,meta45182));
});

}

return (new cljs.core.async.t_cljs$core$async45181(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45185 = arguments.length;
switch (G__45185) {
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
var c__30953__auto___45225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45225,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45225,out){
return (function (state_45206){
var state_val_45207 = (state_45206[(1)]);
if((state_val_45207 === (7))){
var inst_45202 = (state_45206[(2)]);
var state_45206__$1 = state_45206;
var statearr_45208_45226 = state_45206__$1;
(statearr_45208_45226[(2)] = inst_45202);

(statearr_45208_45226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (1))){
var state_45206__$1 = state_45206;
var statearr_45209_45227 = state_45206__$1;
(statearr_45209_45227[(2)] = null);

(statearr_45209_45227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (4))){
var inst_45188 = (state_45206[(7)]);
var inst_45188__$1 = (state_45206[(2)]);
var inst_45189 = (inst_45188__$1 == null);
var state_45206__$1 = (function (){var statearr_45210 = state_45206;
(statearr_45210[(7)] = inst_45188__$1);

return statearr_45210;
})();
if(cljs.core.truth_(inst_45189)){
var statearr_45211_45228 = state_45206__$1;
(statearr_45211_45228[(1)] = (5));

} else {
var statearr_45212_45229 = state_45206__$1;
(statearr_45212_45229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (6))){
var inst_45188 = (state_45206[(7)]);
var inst_45193 = p.call(null,inst_45188);
var state_45206__$1 = state_45206;
if(cljs.core.truth_(inst_45193)){
var statearr_45213_45230 = state_45206__$1;
(statearr_45213_45230[(1)] = (8));

} else {
var statearr_45214_45231 = state_45206__$1;
(statearr_45214_45231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (3))){
var inst_45204 = (state_45206[(2)]);
var state_45206__$1 = state_45206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45206__$1,inst_45204);
} else {
if((state_val_45207 === (2))){
var state_45206__$1 = state_45206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45206__$1,(4),ch);
} else {
if((state_val_45207 === (11))){
var inst_45196 = (state_45206[(2)]);
var state_45206__$1 = state_45206;
var statearr_45215_45232 = state_45206__$1;
(statearr_45215_45232[(2)] = inst_45196);

(statearr_45215_45232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (9))){
var state_45206__$1 = state_45206;
var statearr_45216_45233 = state_45206__$1;
(statearr_45216_45233[(2)] = null);

(statearr_45216_45233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (5))){
var inst_45191 = cljs.core.async.close_BANG_.call(null,out);
var state_45206__$1 = state_45206;
var statearr_45217_45234 = state_45206__$1;
(statearr_45217_45234[(2)] = inst_45191);

(statearr_45217_45234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (10))){
var inst_45199 = (state_45206[(2)]);
var state_45206__$1 = (function (){var statearr_45218 = state_45206;
(statearr_45218[(8)] = inst_45199);

return statearr_45218;
})();
var statearr_45219_45235 = state_45206__$1;
(statearr_45219_45235[(2)] = null);

(statearr_45219_45235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45207 === (8))){
var inst_45188 = (state_45206[(7)]);
var state_45206__$1 = state_45206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45206__$1,(11),out,inst_45188);
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
});})(c__30953__auto___45225,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45225,out){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45220 = [null,null,null,null,null,null,null,null,null];
(statearr_45220[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45220[(1)] = (1));

return statearr_45220;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_45206){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45221){if((e45221 instanceof Object)){
var ex__30869__auto__ = e45221;
var statearr_45222_45236 = state_45206;
(statearr_45222_45236[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45237 = state_45206;
state_45206 = G__45237;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_45206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_45206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45225,out))
})();
var state__30955__auto__ = (function (){var statearr_45223 = f__30954__auto__.call(null);
(statearr_45223[(6)] = c__30953__auto___45225);

return statearr_45223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45225,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45239 = arguments.length;
switch (G__45239) {
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
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__){
return (function (state_45302){
var state_val_45303 = (state_45302[(1)]);
if((state_val_45303 === (7))){
var inst_45298 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
var statearr_45304_45342 = state_45302__$1;
(statearr_45304_45342[(2)] = inst_45298);

(statearr_45304_45342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (20))){
var inst_45268 = (state_45302[(7)]);
var inst_45279 = (state_45302[(2)]);
var inst_45280 = cljs.core.next.call(null,inst_45268);
var inst_45254 = inst_45280;
var inst_45255 = null;
var inst_45256 = (0);
var inst_45257 = (0);
var state_45302__$1 = (function (){var statearr_45305 = state_45302;
(statearr_45305[(8)] = inst_45255);

(statearr_45305[(9)] = inst_45257);

(statearr_45305[(10)] = inst_45254);

(statearr_45305[(11)] = inst_45279);

(statearr_45305[(12)] = inst_45256);

return statearr_45305;
})();
var statearr_45306_45343 = state_45302__$1;
(statearr_45306_45343[(2)] = null);

(statearr_45306_45343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (1))){
var state_45302__$1 = state_45302;
var statearr_45307_45344 = state_45302__$1;
(statearr_45307_45344[(2)] = null);

(statearr_45307_45344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (4))){
var inst_45243 = (state_45302[(13)]);
var inst_45243__$1 = (state_45302[(2)]);
var inst_45244 = (inst_45243__$1 == null);
var state_45302__$1 = (function (){var statearr_45308 = state_45302;
(statearr_45308[(13)] = inst_45243__$1);

return statearr_45308;
})();
if(cljs.core.truth_(inst_45244)){
var statearr_45309_45345 = state_45302__$1;
(statearr_45309_45345[(1)] = (5));

} else {
var statearr_45310_45346 = state_45302__$1;
(statearr_45310_45346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (15))){
var state_45302__$1 = state_45302;
var statearr_45314_45347 = state_45302__$1;
(statearr_45314_45347[(2)] = null);

(statearr_45314_45347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (21))){
var state_45302__$1 = state_45302;
var statearr_45315_45348 = state_45302__$1;
(statearr_45315_45348[(2)] = null);

(statearr_45315_45348[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (13))){
var inst_45255 = (state_45302[(8)]);
var inst_45257 = (state_45302[(9)]);
var inst_45254 = (state_45302[(10)]);
var inst_45256 = (state_45302[(12)]);
var inst_45264 = (state_45302[(2)]);
var inst_45265 = (inst_45257 + (1));
var tmp45311 = inst_45255;
var tmp45312 = inst_45254;
var tmp45313 = inst_45256;
var inst_45254__$1 = tmp45312;
var inst_45255__$1 = tmp45311;
var inst_45256__$1 = tmp45313;
var inst_45257__$1 = inst_45265;
var state_45302__$1 = (function (){var statearr_45316 = state_45302;
(statearr_45316[(14)] = inst_45264);

(statearr_45316[(8)] = inst_45255__$1);

(statearr_45316[(9)] = inst_45257__$1);

(statearr_45316[(10)] = inst_45254__$1);

(statearr_45316[(12)] = inst_45256__$1);

return statearr_45316;
})();
var statearr_45317_45349 = state_45302__$1;
(statearr_45317_45349[(2)] = null);

(statearr_45317_45349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (22))){
var state_45302__$1 = state_45302;
var statearr_45318_45350 = state_45302__$1;
(statearr_45318_45350[(2)] = null);

(statearr_45318_45350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (6))){
var inst_45243 = (state_45302[(13)]);
var inst_45252 = f.call(null,inst_45243);
var inst_45253 = cljs.core.seq.call(null,inst_45252);
var inst_45254 = inst_45253;
var inst_45255 = null;
var inst_45256 = (0);
var inst_45257 = (0);
var state_45302__$1 = (function (){var statearr_45319 = state_45302;
(statearr_45319[(8)] = inst_45255);

(statearr_45319[(9)] = inst_45257);

(statearr_45319[(10)] = inst_45254);

(statearr_45319[(12)] = inst_45256);

return statearr_45319;
})();
var statearr_45320_45351 = state_45302__$1;
(statearr_45320_45351[(2)] = null);

(statearr_45320_45351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (17))){
var inst_45268 = (state_45302[(7)]);
var inst_45272 = cljs.core.chunk_first.call(null,inst_45268);
var inst_45273 = cljs.core.chunk_rest.call(null,inst_45268);
var inst_45274 = cljs.core.count.call(null,inst_45272);
var inst_45254 = inst_45273;
var inst_45255 = inst_45272;
var inst_45256 = inst_45274;
var inst_45257 = (0);
var state_45302__$1 = (function (){var statearr_45321 = state_45302;
(statearr_45321[(8)] = inst_45255);

(statearr_45321[(9)] = inst_45257);

(statearr_45321[(10)] = inst_45254);

(statearr_45321[(12)] = inst_45256);

return statearr_45321;
})();
var statearr_45322_45352 = state_45302__$1;
(statearr_45322_45352[(2)] = null);

(statearr_45322_45352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (3))){
var inst_45300 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45302__$1,inst_45300);
} else {
if((state_val_45303 === (12))){
var inst_45288 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
var statearr_45323_45353 = state_45302__$1;
(statearr_45323_45353[(2)] = inst_45288);

(statearr_45323_45353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (2))){
var state_45302__$1 = state_45302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45302__$1,(4),in$);
} else {
if((state_val_45303 === (23))){
var inst_45296 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
var statearr_45324_45354 = state_45302__$1;
(statearr_45324_45354[(2)] = inst_45296);

(statearr_45324_45354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (19))){
var inst_45283 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
var statearr_45325_45355 = state_45302__$1;
(statearr_45325_45355[(2)] = inst_45283);

(statearr_45325_45355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (11))){
var inst_45268 = (state_45302[(7)]);
var inst_45254 = (state_45302[(10)]);
var inst_45268__$1 = cljs.core.seq.call(null,inst_45254);
var state_45302__$1 = (function (){var statearr_45326 = state_45302;
(statearr_45326[(7)] = inst_45268__$1);

return statearr_45326;
})();
if(inst_45268__$1){
var statearr_45327_45356 = state_45302__$1;
(statearr_45327_45356[(1)] = (14));

} else {
var statearr_45328_45357 = state_45302__$1;
(statearr_45328_45357[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (9))){
var inst_45290 = (state_45302[(2)]);
var inst_45291 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45302__$1 = (function (){var statearr_45329 = state_45302;
(statearr_45329[(15)] = inst_45290);

return statearr_45329;
})();
if(cljs.core.truth_(inst_45291)){
var statearr_45330_45358 = state_45302__$1;
(statearr_45330_45358[(1)] = (21));

} else {
var statearr_45331_45359 = state_45302__$1;
(statearr_45331_45359[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (5))){
var inst_45246 = cljs.core.async.close_BANG_.call(null,out);
var state_45302__$1 = state_45302;
var statearr_45332_45360 = state_45302__$1;
(statearr_45332_45360[(2)] = inst_45246);

(statearr_45332_45360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (14))){
var inst_45268 = (state_45302[(7)]);
var inst_45270 = cljs.core.chunked_seq_QMARK_.call(null,inst_45268);
var state_45302__$1 = state_45302;
if(inst_45270){
var statearr_45333_45361 = state_45302__$1;
(statearr_45333_45361[(1)] = (17));

} else {
var statearr_45334_45362 = state_45302__$1;
(statearr_45334_45362[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (16))){
var inst_45286 = (state_45302[(2)]);
var state_45302__$1 = state_45302;
var statearr_45335_45363 = state_45302__$1;
(statearr_45335_45363[(2)] = inst_45286);

(statearr_45335_45363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45303 === (10))){
var inst_45255 = (state_45302[(8)]);
var inst_45257 = (state_45302[(9)]);
var inst_45262 = cljs.core._nth.call(null,inst_45255,inst_45257);
var state_45302__$1 = state_45302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45302__$1,(13),out,inst_45262);
} else {
if((state_val_45303 === (18))){
var inst_45268 = (state_45302[(7)]);
var inst_45277 = cljs.core.first.call(null,inst_45268);
var state_45302__$1 = state_45302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45302__$1,(20),out,inst_45277);
} else {
if((state_val_45303 === (8))){
var inst_45257 = (state_45302[(9)]);
var inst_45256 = (state_45302[(12)]);
var inst_45259 = (inst_45257 < inst_45256);
var inst_45260 = inst_45259;
var state_45302__$1 = state_45302;
if(cljs.core.truth_(inst_45260)){
var statearr_45336_45364 = state_45302__$1;
(statearr_45336_45364[(1)] = (10));

} else {
var statearr_45337_45365 = state_45302__$1;
(statearr_45337_45365[(1)] = (11));

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
});})(c__30953__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30866__auto____0 = (function (){
var statearr_45338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45338[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30866__auto__);

(statearr_45338[(1)] = (1));

return statearr_45338;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30866__auto____1 = (function (state_45302){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45339){if((e45339 instanceof Object)){
var ex__30869__auto__ = e45339;
var statearr_45340_45366 = state_45302;
(statearr_45340_45366[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45367 = state_45302;
state_45302 = G__45367;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30866__auto__ = function(state_45302){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30866__auto____1.call(this,state_45302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__))
})();
var state__30955__auto__ = (function (){var statearr_45341 = f__30954__auto__.call(null);
(statearr_45341[(6)] = c__30953__auto__);

return statearr_45341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__))
);

return c__30953__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45369 = arguments.length;
switch (G__45369) {
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
var G__45372 = arguments.length;
switch (G__45372) {
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
var G__45375 = arguments.length;
switch (G__45375) {
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
var c__30953__auto___45422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45422,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45422,out){
return (function (state_45399){
var state_val_45400 = (state_45399[(1)]);
if((state_val_45400 === (7))){
var inst_45394 = (state_45399[(2)]);
var state_45399__$1 = state_45399;
var statearr_45401_45423 = state_45399__$1;
(statearr_45401_45423[(2)] = inst_45394);

(statearr_45401_45423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (1))){
var inst_45376 = null;
var state_45399__$1 = (function (){var statearr_45402 = state_45399;
(statearr_45402[(7)] = inst_45376);

return statearr_45402;
})();
var statearr_45403_45424 = state_45399__$1;
(statearr_45403_45424[(2)] = null);

(statearr_45403_45424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (4))){
var inst_45379 = (state_45399[(8)]);
var inst_45379__$1 = (state_45399[(2)]);
var inst_45380 = (inst_45379__$1 == null);
var inst_45381 = cljs.core.not.call(null,inst_45380);
var state_45399__$1 = (function (){var statearr_45404 = state_45399;
(statearr_45404[(8)] = inst_45379__$1);

return statearr_45404;
})();
if(inst_45381){
var statearr_45405_45425 = state_45399__$1;
(statearr_45405_45425[(1)] = (5));

} else {
var statearr_45406_45426 = state_45399__$1;
(statearr_45406_45426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (6))){
var state_45399__$1 = state_45399;
var statearr_45407_45427 = state_45399__$1;
(statearr_45407_45427[(2)] = null);

(statearr_45407_45427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (3))){
var inst_45396 = (state_45399[(2)]);
var inst_45397 = cljs.core.async.close_BANG_.call(null,out);
var state_45399__$1 = (function (){var statearr_45408 = state_45399;
(statearr_45408[(9)] = inst_45396);

return statearr_45408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45399__$1,inst_45397);
} else {
if((state_val_45400 === (2))){
var state_45399__$1 = state_45399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45399__$1,(4),ch);
} else {
if((state_val_45400 === (11))){
var inst_45379 = (state_45399[(8)]);
var inst_45388 = (state_45399[(2)]);
var inst_45376 = inst_45379;
var state_45399__$1 = (function (){var statearr_45409 = state_45399;
(statearr_45409[(7)] = inst_45376);

(statearr_45409[(10)] = inst_45388);

return statearr_45409;
})();
var statearr_45410_45428 = state_45399__$1;
(statearr_45410_45428[(2)] = null);

(statearr_45410_45428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (9))){
var inst_45379 = (state_45399[(8)]);
var state_45399__$1 = state_45399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45399__$1,(11),out,inst_45379);
} else {
if((state_val_45400 === (5))){
var inst_45376 = (state_45399[(7)]);
var inst_45379 = (state_45399[(8)]);
var inst_45383 = cljs.core._EQ_.call(null,inst_45379,inst_45376);
var state_45399__$1 = state_45399;
if(inst_45383){
var statearr_45412_45429 = state_45399__$1;
(statearr_45412_45429[(1)] = (8));

} else {
var statearr_45413_45430 = state_45399__$1;
(statearr_45413_45430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (10))){
var inst_45391 = (state_45399[(2)]);
var state_45399__$1 = state_45399;
var statearr_45414_45431 = state_45399__$1;
(statearr_45414_45431[(2)] = inst_45391);

(statearr_45414_45431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45400 === (8))){
var inst_45376 = (state_45399[(7)]);
var tmp45411 = inst_45376;
var inst_45376__$1 = tmp45411;
var state_45399__$1 = (function (){var statearr_45415 = state_45399;
(statearr_45415[(7)] = inst_45376__$1);

return statearr_45415;
})();
var statearr_45416_45432 = state_45399__$1;
(statearr_45416_45432[(2)] = null);

(statearr_45416_45432[(1)] = (2));


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
});})(c__30953__auto___45422,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45422,out){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45417[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45417[(1)] = (1));

return statearr_45417;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_45399){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45418){if((e45418 instanceof Object)){
var ex__30869__auto__ = e45418;
var statearr_45419_45433 = state_45399;
(statearr_45419_45433[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45434 = state_45399;
state_45399 = G__45434;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_45399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_45399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45422,out))
})();
var state__30955__auto__ = (function (){var statearr_45420 = f__30954__auto__.call(null);
(statearr_45420[(6)] = c__30953__auto___45422);

return statearr_45420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45422,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45436 = arguments.length;
switch (G__45436) {
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
var c__30953__auto___45502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45502,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45502,out){
return (function (state_45474){
var state_val_45475 = (state_45474[(1)]);
if((state_val_45475 === (7))){
var inst_45470 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45476_45503 = state_45474__$1;
(statearr_45476_45503[(2)] = inst_45470);

(statearr_45476_45503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (1))){
var inst_45437 = (new Array(n));
var inst_45438 = inst_45437;
var inst_45439 = (0);
var state_45474__$1 = (function (){var statearr_45477 = state_45474;
(statearr_45477[(7)] = inst_45438);

(statearr_45477[(8)] = inst_45439);

return statearr_45477;
})();
var statearr_45478_45504 = state_45474__$1;
(statearr_45478_45504[(2)] = null);

(statearr_45478_45504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (4))){
var inst_45442 = (state_45474[(9)]);
var inst_45442__$1 = (state_45474[(2)]);
var inst_45443 = (inst_45442__$1 == null);
var inst_45444 = cljs.core.not.call(null,inst_45443);
var state_45474__$1 = (function (){var statearr_45479 = state_45474;
(statearr_45479[(9)] = inst_45442__$1);

return statearr_45479;
})();
if(inst_45444){
var statearr_45480_45505 = state_45474__$1;
(statearr_45480_45505[(1)] = (5));

} else {
var statearr_45481_45506 = state_45474__$1;
(statearr_45481_45506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (15))){
var inst_45464 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45482_45507 = state_45474__$1;
(statearr_45482_45507[(2)] = inst_45464);

(statearr_45482_45507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (13))){
var state_45474__$1 = state_45474;
var statearr_45483_45508 = state_45474__$1;
(statearr_45483_45508[(2)] = null);

(statearr_45483_45508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (6))){
var inst_45439 = (state_45474[(8)]);
var inst_45460 = (inst_45439 > (0));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45460)){
var statearr_45484_45509 = state_45474__$1;
(statearr_45484_45509[(1)] = (12));

} else {
var statearr_45485_45510 = state_45474__$1;
(statearr_45485_45510[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (3))){
var inst_45472 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45474__$1,inst_45472);
} else {
if((state_val_45475 === (12))){
var inst_45438 = (state_45474[(7)]);
var inst_45462 = cljs.core.vec.call(null,inst_45438);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45474__$1,(15),out,inst_45462);
} else {
if((state_val_45475 === (2))){
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45474__$1,(4),ch);
} else {
if((state_val_45475 === (11))){
var inst_45454 = (state_45474[(2)]);
var inst_45455 = (new Array(n));
var inst_45438 = inst_45455;
var inst_45439 = (0);
var state_45474__$1 = (function (){var statearr_45486 = state_45474;
(statearr_45486[(7)] = inst_45438);

(statearr_45486[(10)] = inst_45454);

(statearr_45486[(8)] = inst_45439);

return statearr_45486;
})();
var statearr_45487_45511 = state_45474__$1;
(statearr_45487_45511[(2)] = null);

(statearr_45487_45511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (9))){
var inst_45438 = (state_45474[(7)]);
var inst_45452 = cljs.core.vec.call(null,inst_45438);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45474__$1,(11),out,inst_45452);
} else {
if((state_val_45475 === (5))){
var inst_45438 = (state_45474[(7)]);
var inst_45442 = (state_45474[(9)]);
var inst_45447 = (state_45474[(11)]);
var inst_45439 = (state_45474[(8)]);
var inst_45446 = (inst_45438[inst_45439] = inst_45442);
var inst_45447__$1 = (inst_45439 + (1));
var inst_45448 = (inst_45447__$1 < n);
var state_45474__$1 = (function (){var statearr_45488 = state_45474;
(statearr_45488[(11)] = inst_45447__$1);

(statearr_45488[(12)] = inst_45446);

return statearr_45488;
})();
if(cljs.core.truth_(inst_45448)){
var statearr_45489_45512 = state_45474__$1;
(statearr_45489_45512[(1)] = (8));

} else {
var statearr_45490_45513 = state_45474__$1;
(statearr_45490_45513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (14))){
var inst_45467 = (state_45474[(2)]);
var inst_45468 = cljs.core.async.close_BANG_.call(null,out);
var state_45474__$1 = (function (){var statearr_45492 = state_45474;
(statearr_45492[(13)] = inst_45467);

return statearr_45492;
})();
var statearr_45493_45514 = state_45474__$1;
(statearr_45493_45514[(2)] = inst_45468);

(statearr_45493_45514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (10))){
var inst_45458 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45494_45515 = state_45474__$1;
(statearr_45494_45515[(2)] = inst_45458);

(statearr_45494_45515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (8))){
var inst_45438 = (state_45474[(7)]);
var inst_45447 = (state_45474[(11)]);
var tmp45491 = inst_45438;
var inst_45438__$1 = tmp45491;
var inst_45439 = inst_45447;
var state_45474__$1 = (function (){var statearr_45495 = state_45474;
(statearr_45495[(7)] = inst_45438__$1);

(statearr_45495[(8)] = inst_45439);

return statearr_45495;
})();
var statearr_45496_45516 = state_45474__$1;
(statearr_45496_45516[(2)] = null);

(statearr_45496_45516[(1)] = (2));


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
});})(c__30953__auto___45502,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45502,out){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45497[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45497[(1)] = (1));

return statearr_45497;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_45474){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45498){if((e45498 instanceof Object)){
var ex__30869__auto__ = e45498;
var statearr_45499_45517 = state_45474;
(statearr_45499_45517[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45518 = state_45474;
state_45474 = G__45518;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_45474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_45474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45502,out))
})();
var state__30955__auto__ = (function (){var statearr_45500 = f__30954__auto__.call(null);
(statearr_45500[(6)] = c__30953__auto___45502);

return statearr_45500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45502,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45520 = arguments.length;
switch (G__45520) {
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
var c__30953__auto___45590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45590,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45590,out){
return (function (state_45562){
var state_val_45563 = (state_45562[(1)]);
if((state_val_45563 === (7))){
var inst_45558 = (state_45562[(2)]);
var state_45562__$1 = state_45562;
var statearr_45564_45591 = state_45562__$1;
(statearr_45564_45591[(2)] = inst_45558);

(statearr_45564_45591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (1))){
var inst_45521 = [];
var inst_45522 = inst_45521;
var inst_45523 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45562__$1 = (function (){var statearr_45565 = state_45562;
(statearr_45565[(7)] = inst_45522);

(statearr_45565[(8)] = inst_45523);

return statearr_45565;
})();
var statearr_45566_45592 = state_45562__$1;
(statearr_45566_45592[(2)] = null);

(statearr_45566_45592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (4))){
var inst_45526 = (state_45562[(9)]);
var inst_45526__$1 = (state_45562[(2)]);
var inst_45527 = (inst_45526__$1 == null);
var inst_45528 = cljs.core.not.call(null,inst_45527);
var state_45562__$1 = (function (){var statearr_45567 = state_45562;
(statearr_45567[(9)] = inst_45526__$1);

return statearr_45567;
})();
if(inst_45528){
var statearr_45568_45593 = state_45562__$1;
(statearr_45568_45593[(1)] = (5));

} else {
var statearr_45569_45594 = state_45562__$1;
(statearr_45569_45594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (15))){
var inst_45552 = (state_45562[(2)]);
var state_45562__$1 = state_45562;
var statearr_45570_45595 = state_45562__$1;
(statearr_45570_45595[(2)] = inst_45552);

(statearr_45570_45595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (13))){
var state_45562__$1 = state_45562;
var statearr_45571_45596 = state_45562__$1;
(statearr_45571_45596[(2)] = null);

(statearr_45571_45596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (6))){
var inst_45522 = (state_45562[(7)]);
var inst_45547 = inst_45522.length;
var inst_45548 = (inst_45547 > (0));
var state_45562__$1 = state_45562;
if(cljs.core.truth_(inst_45548)){
var statearr_45572_45597 = state_45562__$1;
(statearr_45572_45597[(1)] = (12));

} else {
var statearr_45573_45598 = state_45562__$1;
(statearr_45573_45598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (3))){
var inst_45560 = (state_45562[(2)]);
var state_45562__$1 = state_45562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45562__$1,inst_45560);
} else {
if((state_val_45563 === (12))){
var inst_45522 = (state_45562[(7)]);
var inst_45550 = cljs.core.vec.call(null,inst_45522);
var state_45562__$1 = state_45562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45562__$1,(15),out,inst_45550);
} else {
if((state_val_45563 === (2))){
var state_45562__$1 = state_45562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45562__$1,(4),ch);
} else {
if((state_val_45563 === (11))){
var inst_45526 = (state_45562[(9)]);
var inst_45530 = (state_45562[(10)]);
var inst_45540 = (state_45562[(2)]);
var inst_45541 = [];
var inst_45542 = inst_45541.push(inst_45526);
var inst_45522 = inst_45541;
var inst_45523 = inst_45530;
var state_45562__$1 = (function (){var statearr_45574 = state_45562;
(statearr_45574[(11)] = inst_45542);

(statearr_45574[(7)] = inst_45522);

(statearr_45574[(8)] = inst_45523);

(statearr_45574[(12)] = inst_45540);

return statearr_45574;
})();
var statearr_45575_45599 = state_45562__$1;
(statearr_45575_45599[(2)] = null);

(statearr_45575_45599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (9))){
var inst_45522 = (state_45562[(7)]);
var inst_45538 = cljs.core.vec.call(null,inst_45522);
var state_45562__$1 = state_45562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45562__$1,(11),out,inst_45538);
} else {
if((state_val_45563 === (5))){
var inst_45523 = (state_45562[(8)]);
var inst_45526 = (state_45562[(9)]);
var inst_45530 = (state_45562[(10)]);
var inst_45530__$1 = f.call(null,inst_45526);
var inst_45531 = cljs.core._EQ_.call(null,inst_45530__$1,inst_45523);
var inst_45532 = cljs.core.keyword_identical_QMARK_.call(null,inst_45523,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45533 = (inst_45531) || (inst_45532);
var state_45562__$1 = (function (){var statearr_45576 = state_45562;
(statearr_45576[(10)] = inst_45530__$1);

return statearr_45576;
})();
if(cljs.core.truth_(inst_45533)){
var statearr_45577_45600 = state_45562__$1;
(statearr_45577_45600[(1)] = (8));

} else {
var statearr_45578_45601 = state_45562__$1;
(statearr_45578_45601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (14))){
var inst_45555 = (state_45562[(2)]);
var inst_45556 = cljs.core.async.close_BANG_.call(null,out);
var state_45562__$1 = (function (){var statearr_45580 = state_45562;
(statearr_45580[(13)] = inst_45555);

return statearr_45580;
})();
var statearr_45581_45602 = state_45562__$1;
(statearr_45581_45602[(2)] = inst_45556);

(statearr_45581_45602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (10))){
var inst_45545 = (state_45562[(2)]);
var state_45562__$1 = state_45562;
var statearr_45582_45603 = state_45562__$1;
(statearr_45582_45603[(2)] = inst_45545);

(statearr_45582_45603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45563 === (8))){
var inst_45522 = (state_45562[(7)]);
var inst_45526 = (state_45562[(9)]);
var inst_45530 = (state_45562[(10)]);
var inst_45535 = inst_45522.push(inst_45526);
var tmp45579 = inst_45522;
var inst_45522__$1 = tmp45579;
var inst_45523 = inst_45530;
var state_45562__$1 = (function (){var statearr_45583 = state_45562;
(statearr_45583[(14)] = inst_45535);

(statearr_45583[(7)] = inst_45522__$1);

(statearr_45583[(8)] = inst_45523);

return statearr_45583;
})();
var statearr_45584_45604 = state_45562__$1;
(statearr_45584_45604[(2)] = null);

(statearr_45584_45604[(1)] = (2));


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
});})(c__30953__auto___45590,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45590,out){
return (function() {
var cljs$core$async$state_machine__30866__auto__ = null;
var cljs$core$async$state_machine__30866__auto____0 = (function (){
var statearr_45585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45585[(0)] = cljs$core$async$state_machine__30866__auto__);

(statearr_45585[(1)] = (1));

return statearr_45585;
});
var cljs$core$async$state_machine__30866__auto____1 = (function (state_45562){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45586){if((e45586 instanceof Object)){
var ex__30869__auto__ = e45586;
var statearr_45587_45605 = state_45562;
(statearr_45587_45605[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45606 = state_45562;
state_45562 = G__45606;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
cljs$core$async$state_machine__30866__auto__ = function(state_45562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30866__auto____1.call(this,state_45562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30866__auto____0;
cljs$core$async$state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30866__auto____1;
return cljs$core$async$state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45590,out))
})();
var state__30955__auto__ = (function (){var statearr_45588 = f__30954__auto__.call(null);
(statearr_45588[(6)] = c__30953__auto___45590);

return statearr_45588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45590,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514003850554
