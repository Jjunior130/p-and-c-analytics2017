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
var G__60413 = arguments.length;
switch (G__60413) {
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
if(typeof cljs.core.async.t_cljs$core$async60414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60414 = (function (f,blockable,meta60415){
this.f = f;
this.blockable = blockable;
this.meta60415 = meta60415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60416,meta60415__$1){
var self__ = this;
var _60416__$1 = this;
return (new cljs.core.async.t_cljs$core$async60414(self__.f,self__.blockable,meta60415__$1));
});

cljs.core.async.t_cljs$core$async60414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60416){
var self__ = this;
var _60416__$1 = this;
return self__.meta60415;
});

cljs.core.async.t_cljs$core$async60414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async60414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async60414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta60415","meta60415",-1915751678,null)], null);
});

cljs.core.async.t_cljs$core$async60414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60414";

cljs.core.async.t_cljs$core$async60414.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async60414");
});

cljs.core.async.__GT_t_cljs$core$async60414 = (function cljs$core$async$__GT_t_cljs$core$async60414(f__$1,blockable__$1,meta60415){
return (new cljs.core.async.t_cljs$core$async60414(f__$1,blockable__$1,meta60415));
});

}

return (new cljs.core.async.t_cljs$core$async60414(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__60420 = arguments.length;
switch (G__60420) {
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
var G__60423 = arguments.length;
switch (G__60423) {
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
var G__60426 = arguments.length;
switch (G__60426) {
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
var val_60428 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_60428);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_60428,ret){
return (function (){
return fn1.call(null,val_60428);
});})(val_60428,ret))
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
var G__60430 = arguments.length;
switch (G__60430) {
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
var n__28140__auto___60432 = n;
var x_60433 = (0);
while(true){
if((x_60433 < n__28140__auto___60432)){
(a[x_60433] = (0));

var G__60434 = (x_60433 + (1));
x_60433 = G__60434;
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

var G__60435 = (i + (1));
i = G__60435;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async60436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60436 = (function (flag,meta60437){
this.flag = flag;
this.meta60437 = meta60437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60438,meta60437__$1){
var self__ = this;
var _60438__$1 = this;
return (new cljs.core.async.t_cljs$core$async60436(self__.flag,meta60437__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60438){
var self__ = this;
var _60438__$1 = this;
return self__.meta60437;
});})(flag))
;

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60436.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60437","meta60437",1646363647,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async60436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60436";

cljs.core.async.t_cljs$core$async60436.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async60436");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async60436 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60436(flag__$1,meta60437){
return (new cljs.core.async.t_cljs$core$async60436(flag__$1,meta60437));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async60436(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async60439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60439 = (function (flag,cb,meta60440){
this.flag = flag;
this.cb = cb;
this.meta60440 = meta60440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60441,meta60440__$1){
var self__ = this;
var _60441__$1 = this;
return (new cljs.core.async.t_cljs$core$async60439(self__.flag,self__.cb,meta60440__$1));
});

cljs.core.async.t_cljs$core$async60439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60441){
var self__ = this;
var _60441__$1 = this;
return self__.meta60440;
});

cljs.core.async.t_cljs$core$async60439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async60439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async60439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60440","meta60440",1936446284,null)], null);
});

cljs.core.async.t_cljs$core$async60439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60439";

cljs.core.async.t_cljs$core$async60439.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async60439");
});

cljs.core.async.__GT_t_cljs$core$async60439 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60439(flag__$1,cb__$1,meta60440){
return (new cljs.core.async.t_cljs$core$async60439(flag__$1,cb__$1,meta60440));
});

}

return (new cljs.core.async.t_cljs$core$async60439(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__60442_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60442_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60443_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60443_SHARP_,port], null));
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
var G__60444 = (i + (1));
i = G__60444;
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
var len__28364__auto___60450 = arguments.length;
var i__28365__auto___60451 = (0);
while(true){
if((i__28365__auto___60451 < len__28364__auto___60450)){
args__28371__auto__.push((arguments[i__28365__auto___60451]));

var G__60452 = (i__28365__auto___60451 + (1));
i__28365__auto___60451 = G__60452;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60447){
var map__60448 = p__60447;
var map__60448__$1 = ((((!((map__60448 == null)))?((((map__60448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60448):map__60448);
var opts = map__60448__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60445){
var G__60446 = cljs.core.first.call(null,seq60445);
var seq60445__$1 = cljs.core.next.call(null,seq60445);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60446,seq60445__$1);
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
var G__60454 = arguments.length;
switch (G__60454) {
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
var c__30952__auto___60500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___60500){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___60500){
return (function (state_60478){
var state_val_60479 = (state_60478[(1)]);
if((state_val_60479 === (7))){
var inst_60474 = (state_60478[(2)]);
var state_60478__$1 = state_60478;
var statearr_60480_60501 = state_60478__$1;
(statearr_60480_60501[(2)] = inst_60474);

(statearr_60480_60501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (1))){
var state_60478__$1 = state_60478;
var statearr_60481_60502 = state_60478__$1;
(statearr_60481_60502[(2)] = null);

(statearr_60481_60502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (4))){
var inst_60457 = (state_60478[(7)]);
var inst_60457__$1 = (state_60478[(2)]);
var inst_60458 = (inst_60457__$1 == null);
var state_60478__$1 = (function (){var statearr_60482 = state_60478;
(statearr_60482[(7)] = inst_60457__$1);

return statearr_60482;
})();
if(cljs.core.truth_(inst_60458)){
var statearr_60483_60503 = state_60478__$1;
(statearr_60483_60503[(1)] = (5));

} else {
var statearr_60484_60504 = state_60478__$1;
(statearr_60484_60504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (13))){
var state_60478__$1 = state_60478;
var statearr_60485_60505 = state_60478__$1;
(statearr_60485_60505[(2)] = null);

(statearr_60485_60505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (6))){
var inst_60457 = (state_60478[(7)]);
var state_60478__$1 = state_60478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60478__$1,(11),to,inst_60457);
} else {
if((state_val_60479 === (3))){
var inst_60476 = (state_60478[(2)]);
var state_60478__$1 = state_60478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60478__$1,inst_60476);
} else {
if((state_val_60479 === (12))){
var state_60478__$1 = state_60478;
var statearr_60486_60506 = state_60478__$1;
(statearr_60486_60506[(2)] = null);

(statearr_60486_60506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (2))){
var state_60478__$1 = state_60478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60478__$1,(4),from);
} else {
if((state_val_60479 === (11))){
var inst_60467 = (state_60478[(2)]);
var state_60478__$1 = state_60478;
if(cljs.core.truth_(inst_60467)){
var statearr_60487_60507 = state_60478__$1;
(statearr_60487_60507[(1)] = (12));

} else {
var statearr_60488_60508 = state_60478__$1;
(statearr_60488_60508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (9))){
var state_60478__$1 = state_60478;
var statearr_60489_60509 = state_60478__$1;
(statearr_60489_60509[(2)] = null);

(statearr_60489_60509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (5))){
var state_60478__$1 = state_60478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60490_60510 = state_60478__$1;
(statearr_60490_60510[(1)] = (8));

} else {
var statearr_60491_60511 = state_60478__$1;
(statearr_60491_60511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (14))){
var inst_60472 = (state_60478[(2)]);
var state_60478__$1 = state_60478;
var statearr_60492_60512 = state_60478__$1;
(statearr_60492_60512[(2)] = inst_60472);

(statearr_60492_60512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (10))){
var inst_60464 = (state_60478[(2)]);
var state_60478__$1 = state_60478;
var statearr_60493_60513 = state_60478__$1;
(statearr_60493_60513[(2)] = inst_60464);

(statearr_60493_60513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60479 === (8))){
var inst_60461 = cljs.core.async.close_BANG_.call(null,to);
var state_60478__$1 = state_60478;
var statearr_60494_60514 = state_60478__$1;
(statearr_60494_60514[(2)] = inst_60461);

(statearr_60494_60514[(1)] = (10));


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
});})(c__30952__auto___60500))
;
return ((function (switch__30864__auto__,c__30952__auto___60500){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_60495 = [null,null,null,null,null,null,null,null];
(statearr_60495[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_60495[(1)] = (1));

return statearr_60495;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_60478){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60496){if((e60496 instanceof Object)){
var ex__30868__auto__ = e60496;
var statearr_60497_60515 = state_60478;
(statearr_60497_60515[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60516 = state_60478;
state_60478 = G__60516;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_60478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_60478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___60500))
})();
var state__30954__auto__ = (function (){var statearr_60498 = f__30953__auto__.call(null);
(statearr_60498[(6)] = c__30952__auto___60500);

return statearr_60498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___60500))
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
return (function (p__60517){
var vec__60518 = p__60517;
var v = cljs.core.nth.call(null,vec__60518,(0),null);
var p = cljs.core.nth.call(null,vec__60518,(1),null);
var job = vec__60518;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30952__auto___60689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___60689,res,vec__60518,v,p,job,jobs,results){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___60689,res,vec__60518,v,p,job,jobs,results){
return (function (state_60525){
var state_val_60526 = (state_60525[(1)]);
if((state_val_60526 === (1))){
var state_60525__$1 = state_60525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60525__$1,(2),res,v);
} else {
if((state_val_60526 === (2))){
var inst_60522 = (state_60525[(2)]);
var inst_60523 = cljs.core.async.close_BANG_.call(null,res);
var state_60525__$1 = (function (){var statearr_60527 = state_60525;
(statearr_60527[(7)] = inst_60522);

return statearr_60527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60525__$1,inst_60523);
} else {
return null;
}
}
});})(c__30952__auto___60689,res,vec__60518,v,p,job,jobs,results))
;
return ((function (switch__30864__auto__,c__30952__auto___60689,res,vec__60518,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_60528 = [null,null,null,null,null,null,null,null];
(statearr_60528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_60528[(1)] = (1));

return statearr_60528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_60525){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60529){if((e60529 instanceof Object)){
var ex__30868__auto__ = e60529;
var statearr_60530_60690 = state_60525;
(statearr_60530_60690[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60691 = state_60525;
state_60525 = G__60691;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_60525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_60525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___60689,res,vec__60518,v,p,job,jobs,results))
})();
var state__30954__auto__ = (function (){var statearr_60531 = f__30953__auto__.call(null);
(statearr_60531[(6)] = c__30952__auto___60689);

return statearr_60531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___60689,res,vec__60518,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60532){
var vec__60533 = p__60532;
var v = cljs.core.nth.call(null,vec__60533,(0),null);
var p = cljs.core.nth.call(null,vec__60533,(1),null);
var job = vec__60533;
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
var n__28140__auto___60692 = n;
var __60693 = (0);
while(true){
if((__60693 < n__28140__auto___60692)){
var G__60536_60694 = type;
var G__60536_60695__$1 = (((G__60536_60694 instanceof cljs.core.Keyword))?G__60536_60694.fqn:null);
switch (G__60536_60695__$1) {
case "compute":
var c__30952__auto___60697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60693,c__30952__auto___60697,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (__60693,c__30952__auto___60697,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async){
return (function (state_60549){
var state_val_60550 = (state_60549[(1)]);
if((state_val_60550 === (1))){
var state_60549__$1 = state_60549;
var statearr_60551_60698 = state_60549__$1;
(statearr_60551_60698[(2)] = null);

(statearr_60551_60698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60550 === (2))){
var state_60549__$1 = state_60549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60549__$1,(4),jobs);
} else {
if((state_val_60550 === (3))){
var inst_60547 = (state_60549[(2)]);
var state_60549__$1 = state_60549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60549__$1,inst_60547);
} else {
if((state_val_60550 === (4))){
var inst_60539 = (state_60549[(2)]);
var inst_60540 = process.call(null,inst_60539);
var state_60549__$1 = state_60549;
if(cljs.core.truth_(inst_60540)){
var statearr_60552_60699 = state_60549__$1;
(statearr_60552_60699[(1)] = (5));

} else {
var statearr_60553_60700 = state_60549__$1;
(statearr_60553_60700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60550 === (5))){
var state_60549__$1 = state_60549;
var statearr_60554_60701 = state_60549__$1;
(statearr_60554_60701[(2)] = null);

(statearr_60554_60701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60550 === (6))){
var state_60549__$1 = state_60549;
var statearr_60555_60702 = state_60549__$1;
(statearr_60555_60702[(2)] = null);

(statearr_60555_60702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60550 === (7))){
var inst_60545 = (state_60549[(2)]);
var state_60549__$1 = state_60549;
var statearr_60556_60703 = state_60549__$1;
(statearr_60556_60703[(2)] = inst_60545);

(statearr_60556_60703[(1)] = (3));


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
});})(__60693,c__30952__auto___60697,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async))
;
return ((function (__60693,switch__30864__auto__,c__30952__auto___60697,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_60557 = [null,null,null,null,null,null,null];
(statearr_60557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_60557[(1)] = (1));

return statearr_60557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_60549){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60558){if((e60558 instanceof Object)){
var ex__30868__auto__ = e60558;
var statearr_60559_60704 = state_60549;
(statearr_60559_60704[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60705 = state_60549;
state_60549 = G__60705;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_60549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_60549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(__60693,switch__30864__auto__,c__30952__auto___60697,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_60560 = f__30953__auto__.call(null);
(statearr_60560[(6)] = c__30952__auto___60697);

return statearr_60560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(__60693,c__30952__auto___60697,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async))
);


break;
case "async":
var c__30952__auto___60706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60693,c__30952__auto___60706,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (__60693,c__30952__auto___60706,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async){
return (function (state_60573){
var state_val_60574 = (state_60573[(1)]);
if((state_val_60574 === (1))){
var state_60573__$1 = state_60573;
var statearr_60575_60707 = state_60573__$1;
(statearr_60575_60707[(2)] = null);

(statearr_60575_60707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60574 === (2))){
var state_60573__$1 = state_60573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60573__$1,(4),jobs);
} else {
if((state_val_60574 === (3))){
var inst_60571 = (state_60573[(2)]);
var state_60573__$1 = state_60573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60573__$1,inst_60571);
} else {
if((state_val_60574 === (4))){
var inst_60563 = (state_60573[(2)]);
var inst_60564 = async.call(null,inst_60563);
var state_60573__$1 = state_60573;
if(cljs.core.truth_(inst_60564)){
var statearr_60576_60708 = state_60573__$1;
(statearr_60576_60708[(1)] = (5));

} else {
var statearr_60577_60709 = state_60573__$1;
(statearr_60577_60709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60574 === (5))){
var state_60573__$1 = state_60573;
var statearr_60578_60710 = state_60573__$1;
(statearr_60578_60710[(2)] = null);

(statearr_60578_60710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60574 === (6))){
var state_60573__$1 = state_60573;
var statearr_60579_60711 = state_60573__$1;
(statearr_60579_60711[(2)] = null);

(statearr_60579_60711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60574 === (7))){
var inst_60569 = (state_60573[(2)]);
var state_60573__$1 = state_60573;
var statearr_60580_60712 = state_60573__$1;
(statearr_60580_60712[(2)] = inst_60569);

(statearr_60580_60712[(1)] = (3));


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
});})(__60693,c__30952__auto___60706,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async))
;
return ((function (__60693,switch__30864__auto__,c__30952__auto___60706,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_60581 = [null,null,null,null,null,null,null];
(statearr_60581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_60581[(1)] = (1));

return statearr_60581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_60573){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60582){if((e60582 instanceof Object)){
var ex__30868__auto__ = e60582;
var statearr_60583_60713 = state_60573;
(statearr_60583_60713[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60714 = state_60573;
state_60573 = G__60714;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_60573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_60573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(__60693,switch__30864__auto__,c__30952__auto___60706,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_60584 = f__30953__auto__.call(null);
(statearr_60584[(6)] = c__30952__auto___60706);

return statearr_60584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(__60693,c__30952__auto___60706,G__60536_60694,G__60536_60695__$1,n__28140__auto___60692,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60536_60695__$1)].join('')));

}

var G__60715 = (__60693 + (1));
__60693 = G__60715;
continue;
} else {
}
break;
}

var c__30952__auto___60716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___60716,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___60716,jobs,results,process,async){
return (function (state_60606){
var state_val_60607 = (state_60606[(1)]);
if((state_val_60607 === (1))){
var state_60606__$1 = state_60606;
var statearr_60608_60717 = state_60606__$1;
(statearr_60608_60717[(2)] = null);

(statearr_60608_60717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60607 === (2))){
var state_60606__$1 = state_60606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60606__$1,(4),from);
} else {
if((state_val_60607 === (3))){
var inst_60604 = (state_60606[(2)]);
var state_60606__$1 = state_60606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60606__$1,inst_60604);
} else {
if((state_val_60607 === (4))){
var inst_60587 = (state_60606[(7)]);
var inst_60587__$1 = (state_60606[(2)]);
var inst_60588 = (inst_60587__$1 == null);
var state_60606__$1 = (function (){var statearr_60609 = state_60606;
(statearr_60609[(7)] = inst_60587__$1);

return statearr_60609;
})();
if(cljs.core.truth_(inst_60588)){
var statearr_60610_60718 = state_60606__$1;
(statearr_60610_60718[(1)] = (5));

} else {
var statearr_60611_60719 = state_60606__$1;
(statearr_60611_60719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60607 === (5))){
var inst_60590 = cljs.core.async.close_BANG_.call(null,jobs);
var state_60606__$1 = state_60606;
var statearr_60612_60720 = state_60606__$1;
(statearr_60612_60720[(2)] = inst_60590);

(statearr_60612_60720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60607 === (6))){
var inst_60587 = (state_60606[(7)]);
var inst_60592 = (state_60606[(8)]);
var inst_60592__$1 = cljs.core.async.chan.call(null,(1));
var inst_60593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60594 = [inst_60587,inst_60592__$1];
var inst_60595 = (new cljs.core.PersistentVector(null,2,(5),inst_60593,inst_60594,null));
var state_60606__$1 = (function (){var statearr_60613 = state_60606;
(statearr_60613[(8)] = inst_60592__$1);

return statearr_60613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60606__$1,(8),jobs,inst_60595);
} else {
if((state_val_60607 === (7))){
var inst_60602 = (state_60606[(2)]);
var state_60606__$1 = state_60606;
var statearr_60614_60721 = state_60606__$1;
(statearr_60614_60721[(2)] = inst_60602);

(statearr_60614_60721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60607 === (8))){
var inst_60592 = (state_60606[(8)]);
var inst_60597 = (state_60606[(2)]);
var state_60606__$1 = (function (){var statearr_60615 = state_60606;
(statearr_60615[(9)] = inst_60597);

return statearr_60615;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60606__$1,(9),results,inst_60592);
} else {
if((state_val_60607 === (9))){
var inst_60599 = (state_60606[(2)]);
var state_60606__$1 = (function (){var statearr_60616 = state_60606;
(statearr_60616[(10)] = inst_60599);

return statearr_60616;
})();
var statearr_60617_60722 = state_60606__$1;
(statearr_60617_60722[(2)] = null);

(statearr_60617_60722[(1)] = (2));


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
});})(c__30952__auto___60716,jobs,results,process,async))
;
return ((function (switch__30864__auto__,c__30952__auto___60716,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0 = (function (){
var statearr_60618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_60618[(1)] = (1));

return statearr_60618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_60606){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60619){if((e60619 instanceof Object)){
var ex__30868__auto__ = e60619;
var statearr_60620_60723 = state_60606;
(statearr_60620_60723[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60724 = state_60606;
state_60606 = G__60724;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_60606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_60606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___60716,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_60621 = f__30953__auto__.call(null);
(statearr_60621[(6)] = c__30952__auto___60716);

return statearr_60621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___60716,jobs,results,process,async))
);


var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,jobs,results,process,async){
return (function (state_60659){
var state_val_60660 = (state_60659[(1)]);
if((state_val_60660 === (7))){
var inst_60655 = (state_60659[(2)]);
var state_60659__$1 = state_60659;
var statearr_60661_60725 = state_60659__$1;
(statearr_60661_60725[(2)] = inst_60655);

(statearr_60661_60725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (20))){
var state_60659__$1 = state_60659;
var statearr_60662_60726 = state_60659__$1;
(statearr_60662_60726[(2)] = null);

(statearr_60662_60726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (1))){
var state_60659__$1 = state_60659;
var statearr_60663_60727 = state_60659__$1;
(statearr_60663_60727[(2)] = null);

(statearr_60663_60727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (4))){
var inst_60624 = (state_60659[(7)]);
var inst_60624__$1 = (state_60659[(2)]);
var inst_60625 = (inst_60624__$1 == null);
var state_60659__$1 = (function (){var statearr_60664 = state_60659;
(statearr_60664[(7)] = inst_60624__$1);

return statearr_60664;
})();
if(cljs.core.truth_(inst_60625)){
var statearr_60665_60728 = state_60659__$1;
(statearr_60665_60728[(1)] = (5));

} else {
var statearr_60666_60729 = state_60659__$1;
(statearr_60666_60729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (15))){
var inst_60637 = (state_60659[(8)]);
var state_60659__$1 = state_60659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60659__$1,(18),to,inst_60637);
} else {
if((state_val_60660 === (21))){
var inst_60650 = (state_60659[(2)]);
var state_60659__$1 = state_60659;
var statearr_60667_60730 = state_60659__$1;
(statearr_60667_60730[(2)] = inst_60650);

(statearr_60667_60730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (13))){
var inst_60652 = (state_60659[(2)]);
var state_60659__$1 = (function (){var statearr_60668 = state_60659;
(statearr_60668[(9)] = inst_60652);

return statearr_60668;
})();
var statearr_60669_60731 = state_60659__$1;
(statearr_60669_60731[(2)] = null);

(statearr_60669_60731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (6))){
var inst_60624 = (state_60659[(7)]);
var state_60659__$1 = state_60659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60659__$1,(11),inst_60624);
} else {
if((state_val_60660 === (17))){
var inst_60645 = (state_60659[(2)]);
var state_60659__$1 = state_60659;
if(cljs.core.truth_(inst_60645)){
var statearr_60670_60732 = state_60659__$1;
(statearr_60670_60732[(1)] = (19));

} else {
var statearr_60671_60733 = state_60659__$1;
(statearr_60671_60733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (3))){
var inst_60657 = (state_60659[(2)]);
var state_60659__$1 = state_60659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60659__$1,inst_60657);
} else {
if((state_val_60660 === (12))){
var inst_60634 = (state_60659[(10)]);
var state_60659__$1 = state_60659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60659__$1,(14),inst_60634);
} else {
if((state_val_60660 === (2))){
var state_60659__$1 = state_60659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60659__$1,(4),results);
} else {
if((state_val_60660 === (19))){
var state_60659__$1 = state_60659;
var statearr_60672_60734 = state_60659__$1;
(statearr_60672_60734[(2)] = null);

(statearr_60672_60734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (11))){
var inst_60634 = (state_60659[(2)]);
var state_60659__$1 = (function (){var statearr_60673 = state_60659;
(statearr_60673[(10)] = inst_60634);

return statearr_60673;
})();
var statearr_60674_60735 = state_60659__$1;
(statearr_60674_60735[(2)] = null);

(statearr_60674_60735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (9))){
var state_60659__$1 = state_60659;
var statearr_60675_60736 = state_60659__$1;
(statearr_60675_60736[(2)] = null);

(statearr_60675_60736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (5))){
var state_60659__$1 = state_60659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60676_60737 = state_60659__$1;
(statearr_60676_60737[(1)] = (8));

} else {
var statearr_60677_60738 = state_60659__$1;
(statearr_60677_60738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (14))){
var inst_60637 = (state_60659[(8)]);
var inst_60639 = (state_60659[(11)]);
var inst_60637__$1 = (state_60659[(2)]);
var inst_60638 = (inst_60637__$1 == null);
var inst_60639__$1 = cljs.core.not.call(null,inst_60638);
var state_60659__$1 = (function (){var statearr_60678 = state_60659;
(statearr_60678[(8)] = inst_60637__$1);

(statearr_60678[(11)] = inst_60639__$1);

return statearr_60678;
})();
if(inst_60639__$1){
var statearr_60679_60739 = state_60659__$1;
(statearr_60679_60739[(1)] = (15));

} else {
var statearr_60680_60740 = state_60659__$1;
(statearr_60680_60740[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (16))){
var inst_60639 = (state_60659[(11)]);
var state_60659__$1 = state_60659;
var statearr_60681_60741 = state_60659__$1;
(statearr_60681_60741[(2)] = inst_60639);

(statearr_60681_60741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (10))){
var inst_60631 = (state_60659[(2)]);
var state_60659__$1 = state_60659;
var statearr_60682_60742 = state_60659__$1;
(statearr_60682_60742[(2)] = inst_60631);

(statearr_60682_60742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (18))){
var inst_60642 = (state_60659[(2)]);
var state_60659__$1 = state_60659;
var statearr_60683_60743 = state_60659__$1;
(statearr_60683_60743[(2)] = inst_60642);

(statearr_60683_60743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60660 === (8))){
var inst_60628 = cljs.core.async.close_BANG_.call(null,to);
var state_60659__$1 = state_60659;
var statearr_60684_60744 = state_60659__$1;
(statearr_60684_60744[(2)] = inst_60628);

(statearr_60684_60744[(1)] = (10));


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
var statearr_60685 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__);

(statearr_60685[(1)] = (1));

return statearr_60685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1 = (function (state_60659){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60686){if((e60686 instanceof Object)){
var ex__30868__auto__ = e60686;
var statearr_60687_60745 = state_60659;
(statearr_60687_60745[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60746 = state_60659;
state_60659 = G__60746;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__ = function(state_60659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1.call(this,state_60659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_60688 = f__30953__auto__.call(null);
(statearr_60688[(6)] = c__30952__auto__);

return statearr_60688;
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
var G__60748 = arguments.length;
switch (G__60748) {
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
var G__60751 = arguments.length;
switch (G__60751) {
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
var G__60754 = arguments.length;
switch (G__60754) {
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
var c__30952__auto___60803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___60803,tc,fc){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___60803,tc,fc){
return (function (state_60780){
var state_val_60781 = (state_60780[(1)]);
if((state_val_60781 === (7))){
var inst_60776 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60782_60804 = state_60780__$1;
(statearr_60782_60804[(2)] = inst_60776);

(statearr_60782_60804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (1))){
var state_60780__$1 = state_60780;
var statearr_60783_60805 = state_60780__$1;
(statearr_60783_60805[(2)] = null);

(statearr_60783_60805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (4))){
var inst_60757 = (state_60780[(7)]);
var inst_60757__$1 = (state_60780[(2)]);
var inst_60758 = (inst_60757__$1 == null);
var state_60780__$1 = (function (){var statearr_60784 = state_60780;
(statearr_60784[(7)] = inst_60757__$1);

return statearr_60784;
})();
if(cljs.core.truth_(inst_60758)){
var statearr_60785_60806 = state_60780__$1;
(statearr_60785_60806[(1)] = (5));

} else {
var statearr_60786_60807 = state_60780__$1;
(statearr_60786_60807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (13))){
var state_60780__$1 = state_60780;
var statearr_60787_60808 = state_60780__$1;
(statearr_60787_60808[(2)] = null);

(statearr_60787_60808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (6))){
var inst_60757 = (state_60780[(7)]);
var inst_60763 = p.call(null,inst_60757);
var state_60780__$1 = state_60780;
if(cljs.core.truth_(inst_60763)){
var statearr_60788_60809 = state_60780__$1;
(statearr_60788_60809[(1)] = (9));

} else {
var statearr_60789_60810 = state_60780__$1;
(statearr_60789_60810[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (3))){
var inst_60778 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60780__$1,inst_60778);
} else {
if((state_val_60781 === (12))){
var state_60780__$1 = state_60780;
var statearr_60790_60811 = state_60780__$1;
(statearr_60790_60811[(2)] = null);

(statearr_60790_60811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (2))){
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60780__$1,(4),ch);
} else {
if((state_val_60781 === (11))){
var inst_60757 = (state_60780[(7)]);
var inst_60767 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60780__$1,(8),inst_60767,inst_60757);
} else {
if((state_val_60781 === (9))){
var state_60780__$1 = state_60780;
var statearr_60791_60812 = state_60780__$1;
(statearr_60791_60812[(2)] = tc);

(statearr_60791_60812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (5))){
var inst_60760 = cljs.core.async.close_BANG_.call(null,tc);
var inst_60761 = cljs.core.async.close_BANG_.call(null,fc);
var state_60780__$1 = (function (){var statearr_60792 = state_60780;
(statearr_60792[(8)] = inst_60760);

return statearr_60792;
})();
var statearr_60793_60813 = state_60780__$1;
(statearr_60793_60813[(2)] = inst_60761);

(statearr_60793_60813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (14))){
var inst_60774 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
var statearr_60794_60814 = state_60780__$1;
(statearr_60794_60814[(2)] = inst_60774);

(statearr_60794_60814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (10))){
var state_60780__$1 = state_60780;
var statearr_60795_60815 = state_60780__$1;
(statearr_60795_60815[(2)] = fc);

(statearr_60795_60815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60781 === (8))){
var inst_60769 = (state_60780[(2)]);
var state_60780__$1 = state_60780;
if(cljs.core.truth_(inst_60769)){
var statearr_60796_60816 = state_60780__$1;
(statearr_60796_60816[(1)] = (12));

} else {
var statearr_60797_60817 = state_60780__$1;
(statearr_60797_60817[(1)] = (13));

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
});})(c__30952__auto___60803,tc,fc))
;
return ((function (switch__30864__auto__,c__30952__auto___60803,tc,fc){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_60798 = [null,null,null,null,null,null,null,null,null];
(statearr_60798[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_60798[(1)] = (1));

return statearr_60798;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_60780){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60799){if((e60799 instanceof Object)){
var ex__30868__auto__ = e60799;
var statearr_60800_60818 = state_60780;
(statearr_60800_60818[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60819 = state_60780;
state_60780 = G__60819;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_60780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_60780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___60803,tc,fc))
})();
var state__30954__auto__ = (function (){var statearr_60801 = f__30953__auto__.call(null);
(statearr_60801[(6)] = c__30952__auto___60803);

return statearr_60801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___60803,tc,fc))
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
return (function (state_60840){
var state_val_60841 = (state_60840[(1)]);
if((state_val_60841 === (7))){
var inst_60836 = (state_60840[(2)]);
var state_60840__$1 = state_60840;
var statearr_60842_60860 = state_60840__$1;
(statearr_60842_60860[(2)] = inst_60836);

(statearr_60842_60860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (1))){
var inst_60820 = init;
var state_60840__$1 = (function (){var statearr_60843 = state_60840;
(statearr_60843[(7)] = inst_60820);

return statearr_60843;
})();
var statearr_60844_60861 = state_60840__$1;
(statearr_60844_60861[(2)] = null);

(statearr_60844_60861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (4))){
var inst_60823 = (state_60840[(8)]);
var inst_60823__$1 = (state_60840[(2)]);
var inst_60824 = (inst_60823__$1 == null);
var state_60840__$1 = (function (){var statearr_60845 = state_60840;
(statearr_60845[(8)] = inst_60823__$1);

return statearr_60845;
})();
if(cljs.core.truth_(inst_60824)){
var statearr_60846_60862 = state_60840__$1;
(statearr_60846_60862[(1)] = (5));

} else {
var statearr_60847_60863 = state_60840__$1;
(statearr_60847_60863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (6))){
var inst_60823 = (state_60840[(8)]);
var inst_60827 = (state_60840[(9)]);
var inst_60820 = (state_60840[(7)]);
var inst_60827__$1 = f.call(null,inst_60820,inst_60823);
var inst_60828 = cljs.core.reduced_QMARK_.call(null,inst_60827__$1);
var state_60840__$1 = (function (){var statearr_60848 = state_60840;
(statearr_60848[(9)] = inst_60827__$1);

return statearr_60848;
})();
if(inst_60828){
var statearr_60849_60864 = state_60840__$1;
(statearr_60849_60864[(1)] = (8));

} else {
var statearr_60850_60865 = state_60840__$1;
(statearr_60850_60865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (3))){
var inst_60838 = (state_60840[(2)]);
var state_60840__$1 = state_60840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60840__$1,inst_60838);
} else {
if((state_val_60841 === (2))){
var state_60840__$1 = state_60840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60840__$1,(4),ch);
} else {
if((state_val_60841 === (9))){
var inst_60827 = (state_60840[(9)]);
var inst_60820 = inst_60827;
var state_60840__$1 = (function (){var statearr_60851 = state_60840;
(statearr_60851[(7)] = inst_60820);

return statearr_60851;
})();
var statearr_60852_60866 = state_60840__$1;
(statearr_60852_60866[(2)] = null);

(statearr_60852_60866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (5))){
var inst_60820 = (state_60840[(7)]);
var state_60840__$1 = state_60840;
var statearr_60853_60867 = state_60840__$1;
(statearr_60853_60867[(2)] = inst_60820);

(statearr_60853_60867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (10))){
var inst_60834 = (state_60840[(2)]);
var state_60840__$1 = state_60840;
var statearr_60854_60868 = state_60840__$1;
(statearr_60854_60868[(2)] = inst_60834);

(statearr_60854_60868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60841 === (8))){
var inst_60827 = (state_60840[(9)]);
var inst_60830 = cljs.core.deref.call(null,inst_60827);
var state_60840__$1 = state_60840;
var statearr_60855_60869 = state_60840__$1;
(statearr_60855_60869[(2)] = inst_60830);

(statearr_60855_60869[(1)] = (10));


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
var statearr_60856 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60856[(0)] = cljs$core$async$reduce_$_state_machine__30865__auto__);

(statearr_60856[(1)] = (1));

return statearr_60856;
});
var cljs$core$async$reduce_$_state_machine__30865__auto____1 = (function (state_60840){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60857){if((e60857 instanceof Object)){
var ex__30868__auto__ = e60857;
var statearr_60858_60870 = state_60840;
(statearr_60858_60870[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60871 = state_60840;
state_60840 = G__60871;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30865__auto__ = function(state_60840){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30865__auto____1.call(this,state_60840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30865__auto____0;
cljs$core$async$reduce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30865__auto____1;
return cljs$core$async$reduce_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_60859 = f__30953__auto__.call(null);
(statearr_60859[(6)] = c__30952__auto__);

return statearr_60859;
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
var G__60873 = arguments.length;
switch (G__60873) {
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
return (function (state_60898){
var state_val_60899 = (state_60898[(1)]);
if((state_val_60899 === (7))){
var inst_60880 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
var statearr_60900_60921 = state_60898__$1;
(statearr_60900_60921[(2)] = inst_60880);

(statearr_60900_60921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (1))){
var inst_60874 = cljs.core.seq.call(null,coll);
var inst_60875 = inst_60874;
var state_60898__$1 = (function (){var statearr_60901 = state_60898;
(statearr_60901[(7)] = inst_60875);

return statearr_60901;
})();
var statearr_60902_60922 = state_60898__$1;
(statearr_60902_60922[(2)] = null);

(statearr_60902_60922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (4))){
var inst_60875 = (state_60898[(7)]);
var inst_60878 = cljs.core.first.call(null,inst_60875);
var state_60898__$1 = state_60898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60898__$1,(7),ch,inst_60878);
} else {
if((state_val_60899 === (13))){
var inst_60892 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
var statearr_60903_60923 = state_60898__$1;
(statearr_60903_60923[(2)] = inst_60892);

(statearr_60903_60923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (6))){
var inst_60883 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
if(cljs.core.truth_(inst_60883)){
var statearr_60904_60924 = state_60898__$1;
(statearr_60904_60924[(1)] = (8));

} else {
var statearr_60905_60925 = state_60898__$1;
(statearr_60905_60925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (3))){
var inst_60896 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60898__$1,inst_60896);
} else {
if((state_val_60899 === (12))){
var state_60898__$1 = state_60898;
var statearr_60906_60926 = state_60898__$1;
(statearr_60906_60926[(2)] = null);

(statearr_60906_60926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (2))){
var inst_60875 = (state_60898[(7)]);
var state_60898__$1 = state_60898;
if(cljs.core.truth_(inst_60875)){
var statearr_60907_60927 = state_60898__$1;
(statearr_60907_60927[(1)] = (4));

} else {
var statearr_60908_60928 = state_60898__$1;
(statearr_60908_60928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (11))){
var inst_60889 = cljs.core.async.close_BANG_.call(null,ch);
var state_60898__$1 = state_60898;
var statearr_60909_60929 = state_60898__$1;
(statearr_60909_60929[(2)] = inst_60889);

(statearr_60909_60929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (9))){
var state_60898__$1 = state_60898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60910_60930 = state_60898__$1;
(statearr_60910_60930[(1)] = (11));

} else {
var statearr_60911_60931 = state_60898__$1;
(statearr_60911_60931[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (5))){
var inst_60875 = (state_60898[(7)]);
var state_60898__$1 = state_60898;
var statearr_60912_60932 = state_60898__$1;
(statearr_60912_60932[(2)] = inst_60875);

(statearr_60912_60932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (10))){
var inst_60894 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
var statearr_60913_60933 = state_60898__$1;
(statearr_60913_60933[(2)] = inst_60894);

(statearr_60913_60933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (8))){
var inst_60875 = (state_60898[(7)]);
var inst_60885 = cljs.core.next.call(null,inst_60875);
var inst_60875__$1 = inst_60885;
var state_60898__$1 = (function (){var statearr_60914 = state_60898;
(statearr_60914[(7)] = inst_60875__$1);

return statearr_60914;
})();
var statearr_60915_60934 = state_60898__$1;
(statearr_60915_60934[(2)] = null);

(statearr_60915_60934[(1)] = (2));


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
var statearr_60916 = [null,null,null,null,null,null,null,null];
(statearr_60916[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_60916[(1)] = (1));

return statearr_60916;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_60898){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_60898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e60917){if((e60917 instanceof Object)){
var ex__30868__auto__ = e60917;
var statearr_60918_60935 = state_60898;
(statearr_60918_60935[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60936 = state_60898;
state_60898 = G__60936;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_60898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_60898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_60919 = f__30953__auto__.call(null);
(statearr_60919[(6)] = c__30952__auto__);

return statearr_60919;
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
if(typeof cljs.core.async.t_cljs$core$async60937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60937 = (function (ch,cs,meta60938){
this.ch = ch;
this.cs = cs;
this.meta60938 = meta60938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60939,meta60938__$1){
var self__ = this;
var _60939__$1 = this;
return (new cljs.core.async.t_cljs$core$async60937(self__.ch,self__.cs,meta60938__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60939){
var self__ = this;
var _60939__$1 = this;
return self__.meta60938;
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60938","meta60938",-1220724978,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60937";

cljs.core.async.t_cljs$core$async60937.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async60937");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async60937 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60937(ch__$1,cs__$1,meta60938){
return (new cljs.core.async.t_cljs$core$async60937(ch__$1,cs__$1,meta60938));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60937(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30952__auto___61159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61159,cs,m,dchan,dctr,done){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61159,cs,m,dchan,dctr,done){
return (function (state_61074){
var state_val_61075 = (state_61074[(1)]);
if((state_val_61075 === (7))){
var inst_61070 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61076_61160 = state_61074__$1;
(statearr_61076_61160[(2)] = inst_61070);

(statearr_61076_61160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (20))){
var inst_60973 = (state_61074[(7)]);
var inst_60985 = cljs.core.first.call(null,inst_60973);
var inst_60986 = cljs.core.nth.call(null,inst_60985,(0),null);
var inst_60987 = cljs.core.nth.call(null,inst_60985,(1),null);
var state_61074__$1 = (function (){var statearr_61077 = state_61074;
(statearr_61077[(8)] = inst_60986);

return statearr_61077;
})();
if(cljs.core.truth_(inst_60987)){
var statearr_61078_61161 = state_61074__$1;
(statearr_61078_61161[(1)] = (22));

} else {
var statearr_61079_61162 = state_61074__$1;
(statearr_61079_61162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (27))){
var inst_60942 = (state_61074[(9)]);
var inst_61017 = (state_61074[(10)]);
var inst_61022 = (state_61074[(11)]);
var inst_61015 = (state_61074[(12)]);
var inst_61022__$1 = cljs.core._nth.call(null,inst_61015,inst_61017);
var inst_61023 = cljs.core.async.put_BANG_.call(null,inst_61022__$1,inst_60942,done);
var state_61074__$1 = (function (){var statearr_61080 = state_61074;
(statearr_61080[(11)] = inst_61022__$1);

return statearr_61080;
})();
if(cljs.core.truth_(inst_61023)){
var statearr_61081_61163 = state_61074__$1;
(statearr_61081_61163[(1)] = (30));

} else {
var statearr_61082_61164 = state_61074__$1;
(statearr_61082_61164[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (1))){
var state_61074__$1 = state_61074;
var statearr_61083_61165 = state_61074__$1;
(statearr_61083_61165[(2)] = null);

(statearr_61083_61165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (24))){
var inst_60973 = (state_61074[(7)]);
var inst_60992 = (state_61074[(2)]);
var inst_60993 = cljs.core.next.call(null,inst_60973);
var inst_60951 = inst_60993;
var inst_60952 = null;
var inst_60953 = (0);
var inst_60954 = (0);
var state_61074__$1 = (function (){var statearr_61084 = state_61074;
(statearr_61084[(13)] = inst_60953);

(statearr_61084[(14)] = inst_60951);

(statearr_61084[(15)] = inst_60952);

(statearr_61084[(16)] = inst_60954);

(statearr_61084[(17)] = inst_60992);

return statearr_61084;
})();
var statearr_61085_61166 = state_61074__$1;
(statearr_61085_61166[(2)] = null);

(statearr_61085_61166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (39))){
var state_61074__$1 = state_61074;
var statearr_61089_61167 = state_61074__$1;
(statearr_61089_61167[(2)] = null);

(statearr_61089_61167[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (4))){
var inst_60942 = (state_61074[(9)]);
var inst_60942__$1 = (state_61074[(2)]);
var inst_60943 = (inst_60942__$1 == null);
var state_61074__$1 = (function (){var statearr_61090 = state_61074;
(statearr_61090[(9)] = inst_60942__$1);

return statearr_61090;
})();
if(cljs.core.truth_(inst_60943)){
var statearr_61091_61168 = state_61074__$1;
(statearr_61091_61168[(1)] = (5));

} else {
var statearr_61092_61169 = state_61074__$1;
(statearr_61092_61169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (15))){
var inst_60953 = (state_61074[(13)]);
var inst_60951 = (state_61074[(14)]);
var inst_60952 = (state_61074[(15)]);
var inst_60954 = (state_61074[(16)]);
var inst_60969 = (state_61074[(2)]);
var inst_60970 = (inst_60954 + (1));
var tmp61086 = inst_60953;
var tmp61087 = inst_60951;
var tmp61088 = inst_60952;
var inst_60951__$1 = tmp61087;
var inst_60952__$1 = tmp61088;
var inst_60953__$1 = tmp61086;
var inst_60954__$1 = inst_60970;
var state_61074__$1 = (function (){var statearr_61093 = state_61074;
(statearr_61093[(18)] = inst_60969);

(statearr_61093[(13)] = inst_60953__$1);

(statearr_61093[(14)] = inst_60951__$1);

(statearr_61093[(15)] = inst_60952__$1);

(statearr_61093[(16)] = inst_60954__$1);

return statearr_61093;
})();
var statearr_61094_61170 = state_61074__$1;
(statearr_61094_61170[(2)] = null);

(statearr_61094_61170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (21))){
var inst_60996 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61098_61171 = state_61074__$1;
(statearr_61098_61171[(2)] = inst_60996);

(statearr_61098_61171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (31))){
var inst_61022 = (state_61074[(11)]);
var inst_61026 = done.call(null,null);
var inst_61027 = cljs.core.async.untap_STAR_.call(null,m,inst_61022);
var state_61074__$1 = (function (){var statearr_61099 = state_61074;
(statearr_61099[(19)] = inst_61026);

return statearr_61099;
})();
var statearr_61100_61172 = state_61074__$1;
(statearr_61100_61172[(2)] = inst_61027);

(statearr_61100_61172[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (32))){
var inst_61014 = (state_61074[(20)]);
var inst_61017 = (state_61074[(10)]);
var inst_61016 = (state_61074[(21)]);
var inst_61015 = (state_61074[(12)]);
var inst_61029 = (state_61074[(2)]);
var inst_61030 = (inst_61017 + (1));
var tmp61095 = inst_61014;
var tmp61096 = inst_61016;
var tmp61097 = inst_61015;
var inst_61014__$1 = tmp61095;
var inst_61015__$1 = tmp61097;
var inst_61016__$1 = tmp61096;
var inst_61017__$1 = inst_61030;
var state_61074__$1 = (function (){var statearr_61101 = state_61074;
(statearr_61101[(20)] = inst_61014__$1);

(statearr_61101[(10)] = inst_61017__$1);

(statearr_61101[(22)] = inst_61029);

(statearr_61101[(21)] = inst_61016__$1);

(statearr_61101[(12)] = inst_61015__$1);

return statearr_61101;
})();
var statearr_61102_61173 = state_61074__$1;
(statearr_61102_61173[(2)] = null);

(statearr_61102_61173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (40))){
var inst_61042 = (state_61074[(23)]);
var inst_61046 = done.call(null,null);
var inst_61047 = cljs.core.async.untap_STAR_.call(null,m,inst_61042);
var state_61074__$1 = (function (){var statearr_61103 = state_61074;
(statearr_61103[(24)] = inst_61046);

return statearr_61103;
})();
var statearr_61104_61174 = state_61074__$1;
(statearr_61104_61174[(2)] = inst_61047);

(statearr_61104_61174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (33))){
var inst_61033 = (state_61074[(25)]);
var inst_61035 = cljs.core.chunked_seq_QMARK_.call(null,inst_61033);
var state_61074__$1 = state_61074;
if(inst_61035){
var statearr_61105_61175 = state_61074__$1;
(statearr_61105_61175[(1)] = (36));

} else {
var statearr_61106_61176 = state_61074__$1;
(statearr_61106_61176[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (13))){
var inst_60963 = (state_61074[(26)]);
var inst_60966 = cljs.core.async.close_BANG_.call(null,inst_60963);
var state_61074__$1 = state_61074;
var statearr_61107_61177 = state_61074__$1;
(statearr_61107_61177[(2)] = inst_60966);

(statearr_61107_61177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (22))){
var inst_60986 = (state_61074[(8)]);
var inst_60989 = cljs.core.async.close_BANG_.call(null,inst_60986);
var state_61074__$1 = state_61074;
var statearr_61108_61178 = state_61074__$1;
(statearr_61108_61178[(2)] = inst_60989);

(statearr_61108_61178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (36))){
var inst_61033 = (state_61074[(25)]);
var inst_61037 = cljs.core.chunk_first.call(null,inst_61033);
var inst_61038 = cljs.core.chunk_rest.call(null,inst_61033);
var inst_61039 = cljs.core.count.call(null,inst_61037);
var inst_61014 = inst_61038;
var inst_61015 = inst_61037;
var inst_61016 = inst_61039;
var inst_61017 = (0);
var state_61074__$1 = (function (){var statearr_61109 = state_61074;
(statearr_61109[(20)] = inst_61014);

(statearr_61109[(10)] = inst_61017);

(statearr_61109[(21)] = inst_61016);

(statearr_61109[(12)] = inst_61015);

return statearr_61109;
})();
var statearr_61110_61179 = state_61074__$1;
(statearr_61110_61179[(2)] = null);

(statearr_61110_61179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (41))){
var inst_61033 = (state_61074[(25)]);
var inst_61049 = (state_61074[(2)]);
var inst_61050 = cljs.core.next.call(null,inst_61033);
var inst_61014 = inst_61050;
var inst_61015 = null;
var inst_61016 = (0);
var inst_61017 = (0);
var state_61074__$1 = (function (){var statearr_61111 = state_61074;
(statearr_61111[(20)] = inst_61014);

(statearr_61111[(27)] = inst_61049);

(statearr_61111[(10)] = inst_61017);

(statearr_61111[(21)] = inst_61016);

(statearr_61111[(12)] = inst_61015);

return statearr_61111;
})();
var statearr_61112_61180 = state_61074__$1;
(statearr_61112_61180[(2)] = null);

(statearr_61112_61180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (43))){
var state_61074__$1 = state_61074;
var statearr_61113_61181 = state_61074__$1;
(statearr_61113_61181[(2)] = null);

(statearr_61113_61181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (29))){
var inst_61058 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61114_61182 = state_61074__$1;
(statearr_61114_61182[(2)] = inst_61058);

(statearr_61114_61182[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (44))){
var inst_61067 = (state_61074[(2)]);
var state_61074__$1 = (function (){var statearr_61115 = state_61074;
(statearr_61115[(28)] = inst_61067);

return statearr_61115;
})();
var statearr_61116_61183 = state_61074__$1;
(statearr_61116_61183[(2)] = null);

(statearr_61116_61183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (6))){
var inst_61006 = (state_61074[(29)]);
var inst_61005 = cljs.core.deref.call(null,cs);
var inst_61006__$1 = cljs.core.keys.call(null,inst_61005);
var inst_61007 = cljs.core.count.call(null,inst_61006__$1);
var inst_61008 = cljs.core.reset_BANG_.call(null,dctr,inst_61007);
var inst_61013 = cljs.core.seq.call(null,inst_61006__$1);
var inst_61014 = inst_61013;
var inst_61015 = null;
var inst_61016 = (0);
var inst_61017 = (0);
var state_61074__$1 = (function (){var statearr_61117 = state_61074;
(statearr_61117[(20)] = inst_61014);

(statearr_61117[(10)] = inst_61017);

(statearr_61117[(30)] = inst_61008);

(statearr_61117[(21)] = inst_61016);

(statearr_61117[(12)] = inst_61015);

(statearr_61117[(29)] = inst_61006__$1);

return statearr_61117;
})();
var statearr_61118_61184 = state_61074__$1;
(statearr_61118_61184[(2)] = null);

(statearr_61118_61184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (28))){
var inst_61014 = (state_61074[(20)]);
var inst_61033 = (state_61074[(25)]);
var inst_61033__$1 = cljs.core.seq.call(null,inst_61014);
var state_61074__$1 = (function (){var statearr_61119 = state_61074;
(statearr_61119[(25)] = inst_61033__$1);

return statearr_61119;
})();
if(inst_61033__$1){
var statearr_61120_61185 = state_61074__$1;
(statearr_61120_61185[(1)] = (33));

} else {
var statearr_61121_61186 = state_61074__$1;
(statearr_61121_61186[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (25))){
var inst_61017 = (state_61074[(10)]);
var inst_61016 = (state_61074[(21)]);
var inst_61019 = (inst_61017 < inst_61016);
var inst_61020 = inst_61019;
var state_61074__$1 = state_61074;
if(cljs.core.truth_(inst_61020)){
var statearr_61122_61187 = state_61074__$1;
(statearr_61122_61187[(1)] = (27));

} else {
var statearr_61123_61188 = state_61074__$1;
(statearr_61123_61188[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (34))){
var state_61074__$1 = state_61074;
var statearr_61124_61189 = state_61074__$1;
(statearr_61124_61189[(2)] = null);

(statearr_61124_61189[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (17))){
var state_61074__$1 = state_61074;
var statearr_61125_61190 = state_61074__$1;
(statearr_61125_61190[(2)] = null);

(statearr_61125_61190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (3))){
var inst_61072 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61074__$1,inst_61072);
} else {
if((state_val_61075 === (12))){
var inst_61001 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61126_61191 = state_61074__$1;
(statearr_61126_61191[(2)] = inst_61001);

(statearr_61126_61191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (2))){
var state_61074__$1 = state_61074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61074__$1,(4),ch);
} else {
if((state_val_61075 === (23))){
var state_61074__$1 = state_61074;
var statearr_61127_61192 = state_61074__$1;
(statearr_61127_61192[(2)] = null);

(statearr_61127_61192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (35))){
var inst_61056 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61128_61193 = state_61074__$1;
(statearr_61128_61193[(2)] = inst_61056);

(statearr_61128_61193[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (19))){
var inst_60973 = (state_61074[(7)]);
var inst_60977 = cljs.core.chunk_first.call(null,inst_60973);
var inst_60978 = cljs.core.chunk_rest.call(null,inst_60973);
var inst_60979 = cljs.core.count.call(null,inst_60977);
var inst_60951 = inst_60978;
var inst_60952 = inst_60977;
var inst_60953 = inst_60979;
var inst_60954 = (0);
var state_61074__$1 = (function (){var statearr_61129 = state_61074;
(statearr_61129[(13)] = inst_60953);

(statearr_61129[(14)] = inst_60951);

(statearr_61129[(15)] = inst_60952);

(statearr_61129[(16)] = inst_60954);

return statearr_61129;
})();
var statearr_61130_61194 = state_61074__$1;
(statearr_61130_61194[(2)] = null);

(statearr_61130_61194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (11))){
var inst_60973 = (state_61074[(7)]);
var inst_60951 = (state_61074[(14)]);
var inst_60973__$1 = cljs.core.seq.call(null,inst_60951);
var state_61074__$1 = (function (){var statearr_61131 = state_61074;
(statearr_61131[(7)] = inst_60973__$1);

return statearr_61131;
})();
if(inst_60973__$1){
var statearr_61132_61195 = state_61074__$1;
(statearr_61132_61195[(1)] = (16));

} else {
var statearr_61133_61196 = state_61074__$1;
(statearr_61133_61196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (9))){
var inst_61003 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61134_61197 = state_61074__$1;
(statearr_61134_61197[(2)] = inst_61003);

(statearr_61134_61197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (5))){
var inst_60949 = cljs.core.deref.call(null,cs);
var inst_60950 = cljs.core.seq.call(null,inst_60949);
var inst_60951 = inst_60950;
var inst_60952 = null;
var inst_60953 = (0);
var inst_60954 = (0);
var state_61074__$1 = (function (){var statearr_61135 = state_61074;
(statearr_61135[(13)] = inst_60953);

(statearr_61135[(14)] = inst_60951);

(statearr_61135[(15)] = inst_60952);

(statearr_61135[(16)] = inst_60954);

return statearr_61135;
})();
var statearr_61136_61198 = state_61074__$1;
(statearr_61136_61198[(2)] = null);

(statearr_61136_61198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (14))){
var state_61074__$1 = state_61074;
var statearr_61137_61199 = state_61074__$1;
(statearr_61137_61199[(2)] = null);

(statearr_61137_61199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (45))){
var inst_61064 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61138_61200 = state_61074__$1;
(statearr_61138_61200[(2)] = inst_61064);

(statearr_61138_61200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (26))){
var inst_61006 = (state_61074[(29)]);
var inst_61060 = (state_61074[(2)]);
var inst_61061 = cljs.core.seq.call(null,inst_61006);
var state_61074__$1 = (function (){var statearr_61139 = state_61074;
(statearr_61139[(31)] = inst_61060);

return statearr_61139;
})();
if(inst_61061){
var statearr_61140_61201 = state_61074__$1;
(statearr_61140_61201[(1)] = (42));

} else {
var statearr_61141_61202 = state_61074__$1;
(statearr_61141_61202[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (16))){
var inst_60973 = (state_61074[(7)]);
var inst_60975 = cljs.core.chunked_seq_QMARK_.call(null,inst_60973);
var state_61074__$1 = state_61074;
if(inst_60975){
var statearr_61142_61203 = state_61074__$1;
(statearr_61142_61203[(1)] = (19));

} else {
var statearr_61143_61204 = state_61074__$1;
(statearr_61143_61204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (38))){
var inst_61053 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61144_61205 = state_61074__$1;
(statearr_61144_61205[(2)] = inst_61053);

(statearr_61144_61205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (30))){
var state_61074__$1 = state_61074;
var statearr_61145_61206 = state_61074__$1;
(statearr_61145_61206[(2)] = null);

(statearr_61145_61206[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (10))){
var inst_60952 = (state_61074[(15)]);
var inst_60954 = (state_61074[(16)]);
var inst_60962 = cljs.core._nth.call(null,inst_60952,inst_60954);
var inst_60963 = cljs.core.nth.call(null,inst_60962,(0),null);
var inst_60964 = cljs.core.nth.call(null,inst_60962,(1),null);
var state_61074__$1 = (function (){var statearr_61146 = state_61074;
(statearr_61146[(26)] = inst_60963);

return statearr_61146;
})();
if(cljs.core.truth_(inst_60964)){
var statearr_61147_61207 = state_61074__$1;
(statearr_61147_61207[(1)] = (13));

} else {
var statearr_61148_61208 = state_61074__$1;
(statearr_61148_61208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (18))){
var inst_60999 = (state_61074[(2)]);
var state_61074__$1 = state_61074;
var statearr_61149_61209 = state_61074__$1;
(statearr_61149_61209[(2)] = inst_60999);

(statearr_61149_61209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (42))){
var state_61074__$1 = state_61074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61074__$1,(45),dchan);
} else {
if((state_val_61075 === (37))){
var inst_60942 = (state_61074[(9)]);
var inst_61042 = (state_61074[(23)]);
var inst_61033 = (state_61074[(25)]);
var inst_61042__$1 = cljs.core.first.call(null,inst_61033);
var inst_61043 = cljs.core.async.put_BANG_.call(null,inst_61042__$1,inst_60942,done);
var state_61074__$1 = (function (){var statearr_61150 = state_61074;
(statearr_61150[(23)] = inst_61042__$1);

return statearr_61150;
})();
if(cljs.core.truth_(inst_61043)){
var statearr_61151_61210 = state_61074__$1;
(statearr_61151_61210[(1)] = (39));

} else {
var statearr_61152_61211 = state_61074__$1;
(statearr_61152_61211[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61075 === (8))){
var inst_60953 = (state_61074[(13)]);
var inst_60954 = (state_61074[(16)]);
var inst_60956 = (inst_60954 < inst_60953);
var inst_60957 = inst_60956;
var state_61074__$1 = state_61074;
if(cljs.core.truth_(inst_60957)){
var statearr_61153_61212 = state_61074__$1;
(statearr_61153_61212[(1)] = (10));

} else {
var statearr_61154_61213 = state_61074__$1;
(statearr_61154_61213[(1)] = (11));

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
});})(c__30952__auto___61159,cs,m,dchan,dctr,done))
;
return ((function (switch__30864__auto__,c__30952__auto___61159,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30865__auto__ = null;
var cljs$core$async$mult_$_state_machine__30865__auto____0 = (function (){
var statearr_61155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61155[(0)] = cljs$core$async$mult_$_state_machine__30865__auto__);

(statearr_61155[(1)] = (1));

return statearr_61155;
});
var cljs$core$async$mult_$_state_machine__30865__auto____1 = (function (state_61074){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61156){if((e61156 instanceof Object)){
var ex__30868__auto__ = e61156;
var statearr_61157_61214 = state_61074;
(statearr_61157_61214[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61215 = state_61074;
state_61074 = G__61215;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30865__auto__ = function(state_61074){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30865__auto____1.call(this,state_61074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30865__auto____0;
cljs$core$async$mult_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30865__auto____1;
return cljs$core$async$mult_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61159,cs,m,dchan,dctr,done))
})();
var state__30954__auto__ = (function (){var statearr_61158 = f__30953__auto__.call(null);
(statearr_61158[(6)] = c__30952__auto___61159);

return statearr_61158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61159,cs,m,dchan,dctr,done))
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
var G__61217 = arguments.length;
switch (G__61217) {
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
var len__28364__auto___61229 = arguments.length;
var i__28365__auto___61230 = (0);
while(true){
if((i__28365__auto___61230 < len__28364__auto___61229)){
args__28371__auto__.push((arguments[i__28365__auto___61230]));

var G__61231 = (i__28365__auto___61230 + (1));
i__28365__auto___61230 = G__61231;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__61223){
var map__61224 = p__61223;
var map__61224__$1 = ((((!((map__61224 == null)))?((((map__61224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61224):map__61224);
var opts = map__61224__$1;
var statearr_61226_61232 = state;
(statearr_61226_61232[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__61224,map__61224__$1,opts){
return (function (val){
var statearr_61227_61233 = state;
(statearr_61227_61233[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__61224,map__61224__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_61228_61234 = state;
(statearr_61228_61234[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61219){
var G__61220 = cljs.core.first.call(null,seq61219);
var seq61219__$1 = cljs.core.next.call(null,seq61219);
var G__61221 = cljs.core.first.call(null,seq61219__$1);
var seq61219__$2 = cljs.core.next.call(null,seq61219__$1);
var G__61222 = cljs.core.first.call(null,seq61219__$2);
var seq61219__$3 = cljs.core.next.call(null,seq61219__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61220,G__61221,G__61222,seq61219__$3);
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
if(typeof cljs.core.async.t_cljs$core$async61235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61235 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta61236){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta61236 = meta61236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61237,meta61236__$1){
var self__ = this;
var _61237__$1 = this;
return (new cljs.core.async.t_cljs$core$async61235(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta61236__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61237){
var self__ = this;
var _61237__$1 = this;
return self__.meta61236;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async61235.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta61236","meta61236",1783582382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61235";

cljs.core.async.t_cljs$core$async61235.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async61235");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async61235 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async61235(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta61236){
return (new cljs.core.async.t_cljs$core$async61235(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta61236));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async61235(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___61399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_61339){
var state_val_61340 = (state_61339[(1)]);
if((state_val_61340 === (7))){
var inst_61254 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
var statearr_61341_61400 = state_61339__$1;
(statearr_61341_61400[(2)] = inst_61254);

(statearr_61341_61400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (20))){
var inst_61266 = (state_61339[(7)]);
var state_61339__$1 = state_61339;
var statearr_61342_61401 = state_61339__$1;
(statearr_61342_61401[(2)] = inst_61266);

(statearr_61342_61401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (27))){
var state_61339__$1 = state_61339;
var statearr_61343_61402 = state_61339__$1;
(statearr_61343_61402[(2)] = null);

(statearr_61343_61402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (1))){
var inst_61241 = (state_61339[(8)]);
var inst_61241__$1 = calc_state.call(null);
var inst_61243 = (inst_61241__$1 == null);
var inst_61244 = cljs.core.not.call(null,inst_61243);
var state_61339__$1 = (function (){var statearr_61344 = state_61339;
(statearr_61344[(8)] = inst_61241__$1);

return statearr_61344;
})();
if(inst_61244){
var statearr_61345_61403 = state_61339__$1;
(statearr_61345_61403[(1)] = (2));

} else {
var statearr_61346_61404 = state_61339__$1;
(statearr_61346_61404[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (24))){
var inst_61290 = (state_61339[(9)]);
var inst_61299 = (state_61339[(10)]);
var inst_61313 = (state_61339[(11)]);
var inst_61313__$1 = inst_61290.call(null,inst_61299);
var state_61339__$1 = (function (){var statearr_61347 = state_61339;
(statearr_61347[(11)] = inst_61313__$1);

return statearr_61347;
})();
if(cljs.core.truth_(inst_61313__$1)){
var statearr_61348_61405 = state_61339__$1;
(statearr_61348_61405[(1)] = (29));

} else {
var statearr_61349_61406 = state_61339__$1;
(statearr_61349_61406[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (4))){
var inst_61257 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61257)){
var statearr_61350_61407 = state_61339__$1;
(statearr_61350_61407[(1)] = (8));

} else {
var statearr_61351_61408 = state_61339__$1;
(statearr_61351_61408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (15))){
var inst_61284 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61284)){
var statearr_61352_61409 = state_61339__$1;
(statearr_61352_61409[(1)] = (19));

} else {
var statearr_61353_61410 = state_61339__$1;
(statearr_61353_61410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (21))){
var inst_61289 = (state_61339[(12)]);
var inst_61289__$1 = (state_61339[(2)]);
var inst_61290 = cljs.core.get.call(null,inst_61289__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61291 = cljs.core.get.call(null,inst_61289__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61292 = cljs.core.get.call(null,inst_61289__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61339__$1 = (function (){var statearr_61354 = state_61339;
(statearr_61354[(9)] = inst_61290);

(statearr_61354[(13)] = inst_61291);

(statearr_61354[(12)] = inst_61289__$1);

return statearr_61354;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_61339__$1,(22),inst_61292);
} else {
if((state_val_61340 === (31))){
var inst_61321 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61321)){
var statearr_61355_61411 = state_61339__$1;
(statearr_61355_61411[(1)] = (32));

} else {
var statearr_61356_61412 = state_61339__$1;
(statearr_61356_61412[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (32))){
var inst_61298 = (state_61339[(14)]);
var state_61339__$1 = state_61339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61339__$1,(35),out,inst_61298);
} else {
if((state_val_61340 === (33))){
var inst_61289 = (state_61339[(12)]);
var inst_61266 = inst_61289;
var state_61339__$1 = (function (){var statearr_61357 = state_61339;
(statearr_61357[(7)] = inst_61266);

return statearr_61357;
})();
var statearr_61358_61413 = state_61339__$1;
(statearr_61358_61413[(2)] = null);

(statearr_61358_61413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (13))){
var inst_61266 = (state_61339[(7)]);
var inst_61273 = inst_61266.cljs$lang$protocol_mask$partition0$;
var inst_61274 = (inst_61273 & (64));
var inst_61275 = inst_61266.cljs$core$ISeq$;
var inst_61276 = (cljs.core.PROTOCOL_SENTINEL === inst_61275);
var inst_61277 = (inst_61274) || (inst_61276);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61277)){
var statearr_61359_61414 = state_61339__$1;
(statearr_61359_61414[(1)] = (16));

} else {
var statearr_61360_61415 = state_61339__$1;
(statearr_61360_61415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (22))){
var inst_61298 = (state_61339[(14)]);
var inst_61299 = (state_61339[(10)]);
var inst_61297 = (state_61339[(2)]);
var inst_61298__$1 = cljs.core.nth.call(null,inst_61297,(0),null);
var inst_61299__$1 = cljs.core.nth.call(null,inst_61297,(1),null);
var inst_61300 = (inst_61298__$1 == null);
var inst_61301 = cljs.core._EQ_.call(null,inst_61299__$1,change);
var inst_61302 = (inst_61300) || (inst_61301);
var state_61339__$1 = (function (){var statearr_61361 = state_61339;
(statearr_61361[(14)] = inst_61298__$1);

(statearr_61361[(10)] = inst_61299__$1);

return statearr_61361;
})();
if(cljs.core.truth_(inst_61302)){
var statearr_61362_61416 = state_61339__$1;
(statearr_61362_61416[(1)] = (23));

} else {
var statearr_61363_61417 = state_61339__$1;
(statearr_61363_61417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (36))){
var inst_61289 = (state_61339[(12)]);
var inst_61266 = inst_61289;
var state_61339__$1 = (function (){var statearr_61364 = state_61339;
(statearr_61364[(7)] = inst_61266);

return statearr_61364;
})();
var statearr_61365_61418 = state_61339__$1;
(statearr_61365_61418[(2)] = null);

(statearr_61365_61418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (29))){
var inst_61313 = (state_61339[(11)]);
var state_61339__$1 = state_61339;
var statearr_61366_61419 = state_61339__$1;
(statearr_61366_61419[(2)] = inst_61313);

(statearr_61366_61419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (6))){
var state_61339__$1 = state_61339;
var statearr_61367_61420 = state_61339__$1;
(statearr_61367_61420[(2)] = false);

(statearr_61367_61420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (28))){
var inst_61309 = (state_61339[(2)]);
var inst_61310 = calc_state.call(null);
var inst_61266 = inst_61310;
var state_61339__$1 = (function (){var statearr_61368 = state_61339;
(statearr_61368[(7)] = inst_61266);

(statearr_61368[(15)] = inst_61309);

return statearr_61368;
})();
var statearr_61369_61421 = state_61339__$1;
(statearr_61369_61421[(2)] = null);

(statearr_61369_61421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (25))){
var inst_61335 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
var statearr_61370_61422 = state_61339__$1;
(statearr_61370_61422[(2)] = inst_61335);

(statearr_61370_61422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (34))){
var inst_61333 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
var statearr_61371_61423 = state_61339__$1;
(statearr_61371_61423[(2)] = inst_61333);

(statearr_61371_61423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (17))){
var state_61339__$1 = state_61339;
var statearr_61372_61424 = state_61339__$1;
(statearr_61372_61424[(2)] = false);

(statearr_61372_61424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (3))){
var state_61339__$1 = state_61339;
var statearr_61373_61425 = state_61339__$1;
(statearr_61373_61425[(2)] = false);

(statearr_61373_61425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (12))){
var inst_61337 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61339__$1,inst_61337);
} else {
if((state_val_61340 === (2))){
var inst_61241 = (state_61339[(8)]);
var inst_61246 = inst_61241.cljs$lang$protocol_mask$partition0$;
var inst_61247 = (inst_61246 & (64));
var inst_61248 = inst_61241.cljs$core$ISeq$;
var inst_61249 = (cljs.core.PROTOCOL_SENTINEL === inst_61248);
var inst_61250 = (inst_61247) || (inst_61249);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61250)){
var statearr_61374_61426 = state_61339__$1;
(statearr_61374_61426[(1)] = (5));

} else {
var statearr_61375_61427 = state_61339__$1;
(statearr_61375_61427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (23))){
var inst_61298 = (state_61339[(14)]);
var inst_61304 = (inst_61298 == null);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61304)){
var statearr_61376_61428 = state_61339__$1;
(statearr_61376_61428[(1)] = (26));

} else {
var statearr_61377_61429 = state_61339__$1;
(statearr_61377_61429[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (35))){
var inst_61324 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
if(cljs.core.truth_(inst_61324)){
var statearr_61378_61430 = state_61339__$1;
(statearr_61378_61430[(1)] = (36));

} else {
var statearr_61379_61431 = state_61339__$1;
(statearr_61379_61431[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (19))){
var inst_61266 = (state_61339[(7)]);
var inst_61286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61266);
var state_61339__$1 = state_61339;
var statearr_61380_61432 = state_61339__$1;
(statearr_61380_61432[(2)] = inst_61286);

(statearr_61380_61432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (11))){
var inst_61266 = (state_61339[(7)]);
var inst_61270 = (inst_61266 == null);
var inst_61271 = cljs.core.not.call(null,inst_61270);
var state_61339__$1 = state_61339;
if(inst_61271){
var statearr_61381_61433 = state_61339__$1;
(statearr_61381_61433[(1)] = (13));

} else {
var statearr_61382_61434 = state_61339__$1;
(statearr_61382_61434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (9))){
var inst_61241 = (state_61339[(8)]);
var state_61339__$1 = state_61339;
var statearr_61383_61435 = state_61339__$1;
(statearr_61383_61435[(2)] = inst_61241);

(statearr_61383_61435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (5))){
var state_61339__$1 = state_61339;
var statearr_61384_61436 = state_61339__$1;
(statearr_61384_61436[(2)] = true);

(statearr_61384_61436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (14))){
var state_61339__$1 = state_61339;
var statearr_61385_61437 = state_61339__$1;
(statearr_61385_61437[(2)] = false);

(statearr_61385_61437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (26))){
var inst_61299 = (state_61339[(10)]);
var inst_61306 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_61299);
var state_61339__$1 = state_61339;
var statearr_61386_61438 = state_61339__$1;
(statearr_61386_61438[(2)] = inst_61306);

(statearr_61386_61438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (16))){
var state_61339__$1 = state_61339;
var statearr_61387_61439 = state_61339__$1;
(statearr_61387_61439[(2)] = true);

(statearr_61387_61439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (38))){
var inst_61329 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
var statearr_61388_61440 = state_61339__$1;
(statearr_61388_61440[(2)] = inst_61329);

(statearr_61388_61440[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (30))){
var inst_61290 = (state_61339[(9)]);
var inst_61299 = (state_61339[(10)]);
var inst_61291 = (state_61339[(13)]);
var inst_61316 = cljs.core.empty_QMARK_.call(null,inst_61290);
var inst_61317 = inst_61291.call(null,inst_61299);
var inst_61318 = cljs.core.not.call(null,inst_61317);
var inst_61319 = (inst_61316) && (inst_61318);
var state_61339__$1 = state_61339;
var statearr_61389_61441 = state_61339__$1;
(statearr_61389_61441[(2)] = inst_61319);

(statearr_61389_61441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (10))){
var inst_61241 = (state_61339[(8)]);
var inst_61262 = (state_61339[(2)]);
var inst_61263 = cljs.core.get.call(null,inst_61262,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61264 = cljs.core.get.call(null,inst_61262,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61265 = cljs.core.get.call(null,inst_61262,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_61266 = inst_61241;
var state_61339__$1 = (function (){var statearr_61390 = state_61339;
(statearr_61390[(16)] = inst_61263);

(statearr_61390[(17)] = inst_61265);

(statearr_61390[(7)] = inst_61266);

(statearr_61390[(18)] = inst_61264);

return statearr_61390;
})();
var statearr_61391_61442 = state_61339__$1;
(statearr_61391_61442[(2)] = null);

(statearr_61391_61442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (18))){
var inst_61281 = (state_61339[(2)]);
var state_61339__$1 = state_61339;
var statearr_61392_61443 = state_61339__$1;
(statearr_61392_61443[(2)] = inst_61281);

(statearr_61392_61443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (37))){
var state_61339__$1 = state_61339;
var statearr_61393_61444 = state_61339__$1;
(statearr_61393_61444[(2)] = null);

(statearr_61393_61444[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61340 === (8))){
var inst_61241 = (state_61339[(8)]);
var inst_61259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61241);
var state_61339__$1 = state_61339;
var statearr_61394_61445 = state_61339__$1;
(statearr_61394_61445[(2)] = inst_61259);

(statearr_61394_61445[(1)] = (10));


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
});})(c__30952__auto___61399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30864__auto__,c__30952__auto___61399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30865__auto__ = null;
var cljs$core$async$mix_$_state_machine__30865__auto____0 = (function (){
var statearr_61395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61395[(0)] = cljs$core$async$mix_$_state_machine__30865__auto__);

(statearr_61395[(1)] = (1));

return statearr_61395;
});
var cljs$core$async$mix_$_state_machine__30865__auto____1 = (function (state_61339){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61396){if((e61396 instanceof Object)){
var ex__30868__auto__ = e61396;
var statearr_61397_61446 = state_61339;
(statearr_61397_61446[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61447 = state_61339;
state_61339 = G__61447;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30865__auto__ = function(state_61339){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30865__auto____1.call(this,state_61339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30865__auto____0;
cljs$core$async$mix_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30865__auto____1;
return cljs$core$async$mix_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30954__auto__ = (function (){var statearr_61398 = f__30953__auto__.call(null);
(statearr_61398[(6)] = c__30952__auto___61399);

return statearr_61398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__61449 = arguments.length;
switch (G__61449) {
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
var G__61453 = arguments.length;
switch (G__61453) {
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
return (function (p1__61451_SHARP_){
if(cljs.core.truth_(p1__61451_SHARP_.call(null,topic))){
return p1__61451_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__61451_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async61454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61454 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61455){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61455 = meta61455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61456,meta61455__$1){
var self__ = this;
var _61456__$1 = this;
return (new cljs.core.async.t_cljs$core$async61454(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61455__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61456){
var self__ = this;
var _61456__$1 = this;
return self__.meta61455;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61455","meta61455",640808501,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61454";

cljs.core.async.t_cljs$core$async61454.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async61454");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async61454 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61455){
return (new cljs.core.async.t_cljs$core$async61454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61455));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61454(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___61574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61574,mults,ensure_mult,p){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61574,mults,ensure_mult,p){
return (function (state_61528){
var state_val_61529 = (state_61528[(1)]);
if((state_val_61529 === (7))){
var inst_61524 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
var statearr_61530_61575 = state_61528__$1;
(statearr_61530_61575[(2)] = inst_61524);

(statearr_61530_61575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (20))){
var state_61528__$1 = state_61528;
var statearr_61531_61576 = state_61528__$1;
(statearr_61531_61576[(2)] = null);

(statearr_61531_61576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (1))){
var state_61528__$1 = state_61528;
var statearr_61532_61577 = state_61528__$1;
(statearr_61532_61577[(2)] = null);

(statearr_61532_61577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (24))){
var inst_61507 = (state_61528[(7)]);
var inst_61516 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_61507);
var state_61528__$1 = state_61528;
var statearr_61533_61578 = state_61528__$1;
(statearr_61533_61578[(2)] = inst_61516);

(statearr_61533_61578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (4))){
var inst_61459 = (state_61528[(8)]);
var inst_61459__$1 = (state_61528[(2)]);
var inst_61460 = (inst_61459__$1 == null);
var state_61528__$1 = (function (){var statearr_61534 = state_61528;
(statearr_61534[(8)] = inst_61459__$1);

return statearr_61534;
})();
if(cljs.core.truth_(inst_61460)){
var statearr_61535_61579 = state_61528__$1;
(statearr_61535_61579[(1)] = (5));

} else {
var statearr_61536_61580 = state_61528__$1;
(statearr_61536_61580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (15))){
var inst_61501 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
var statearr_61537_61581 = state_61528__$1;
(statearr_61537_61581[(2)] = inst_61501);

(statearr_61537_61581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (21))){
var inst_61521 = (state_61528[(2)]);
var state_61528__$1 = (function (){var statearr_61538 = state_61528;
(statearr_61538[(9)] = inst_61521);

return statearr_61538;
})();
var statearr_61539_61582 = state_61528__$1;
(statearr_61539_61582[(2)] = null);

(statearr_61539_61582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (13))){
var inst_61483 = (state_61528[(10)]);
var inst_61485 = cljs.core.chunked_seq_QMARK_.call(null,inst_61483);
var state_61528__$1 = state_61528;
if(inst_61485){
var statearr_61540_61583 = state_61528__$1;
(statearr_61540_61583[(1)] = (16));

} else {
var statearr_61541_61584 = state_61528__$1;
(statearr_61541_61584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (22))){
var inst_61513 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
if(cljs.core.truth_(inst_61513)){
var statearr_61542_61585 = state_61528__$1;
(statearr_61542_61585[(1)] = (23));

} else {
var statearr_61543_61586 = state_61528__$1;
(statearr_61543_61586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (6))){
var inst_61509 = (state_61528[(11)]);
var inst_61507 = (state_61528[(7)]);
var inst_61459 = (state_61528[(8)]);
var inst_61507__$1 = topic_fn.call(null,inst_61459);
var inst_61508 = cljs.core.deref.call(null,mults);
var inst_61509__$1 = cljs.core.get.call(null,inst_61508,inst_61507__$1);
var state_61528__$1 = (function (){var statearr_61544 = state_61528;
(statearr_61544[(11)] = inst_61509__$1);

(statearr_61544[(7)] = inst_61507__$1);

return statearr_61544;
})();
if(cljs.core.truth_(inst_61509__$1)){
var statearr_61545_61587 = state_61528__$1;
(statearr_61545_61587[(1)] = (19));

} else {
var statearr_61546_61588 = state_61528__$1;
(statearr_61546_61588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (25))){
var inst_61518 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
var statearr_61547_61589 = state_61528__$1;
(statearr_61547_61589[(2)] = inst_61518);

(statearr_61547_61589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (17))){
var inst_61483 = (state_61528[(10)]);
var inst_61492 = cljs.core.first.call(null,inst_61483);
var inst_61493 = cljs.core.async.muxch_STAR_.call(null,inst_61492);
var inst_61494 = cljs.core.async.close_BANG_.call(null,inst_61493);
var inst_61495 = cljs.core.next.call(null,inst_61483);
var inst_61469 = inst_61495;
var inst_61470 = null;
var inst_61471 = (0);
var inst_61472 = (0);
var state_61528__$1 = (function (){var statearr_61548 = state_61528;
(statearr_61548[(12)] = inst_61494);

(statearr_61548[(13)] = inst_61471);

(statearr_61548[(14)] = inst_61470);

(statearr_61548[(15)] = inst_61469);

(statearr_61548[(16)] = inst_61472);

return statearr_61548;
})();
var statearr_61549_61590 = state_61528__$1;
(statearr_61549_61590[(2)] = null);

(statearr_61549_61590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (3))){
var inst_61526 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61528__$1,inst_61526);
} else {
if((state_val_61529 === (12))){
var inst_61503 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
var statearr_61550_61591 = state_61528__$1;
(statearr_61550_61591[(2)] = inst_61503);

(statearr_61550_61591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (2))){
var state_61528__$1 = state_61528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61528__$1,(4),ch);
} else {
if((state_val_61529 === (23))){
var state_61528__$1 = state_61528;
var statearr_61551_61592 = state_61528__$1;
(statearr_61551_61592[(2)] = null);

(statearr_61551_61592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (19))){
var inst_61509 = (state_61528[(11)]);
var inst_61459 = (state_61528[(8)]);
var inst_61511 = cljs.core.async.muxch_STAR_.call(null,inst_61509);
var state_61528__$1 = state_61528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61528__$1,(22),inst_61511,inst_61459);
} else {
if((state_val_61529 === (11))){
var inst_61483 = (state_61528[(10)]);
var inst_61469 = (state_61528[(15)]);
var inst_61483__$1 = cljs.core.seq.call(null,inst_61469);
var state_61528__$1 = (function (){var statearr_61552 = state_61528;
(statearr_61552[(10)] = inst_61483__$1);

return statearr_61552;
})();
if(inst_61483__$1){
var statearr_61553_61593 = state_61528__$1;
(statearr_61553_61593[(1)] = (13));

} else {
var statearr_61554_61594 = state_61528__$1;
(statearr_61554_61594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (9))){
var inst_61505 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
var statearr_61555_61595 = state_61528__$1;
(statearr_61555_61595[(2)] = inst_61505);

(statearr_61555_61595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (5))){
var inst_61466 = cljs.core.deref.call(null,mults);
var inst_61467 = cljs.core.vals.call(null,inst_61466);
var inst_61468 = cljs.core.seq.call(null,inst_61467);
var inst_61469 = inst_61468;
var inst_61470 = null;
var inst_61471 = (0);
var inst_61472 = (0);
var state_61528__$1 = (function (){var statearr_61556 = state_61528;
(statearr_61556[(13)] = inst_61471);

(statearr_61556[(14)] = inst_61470);

(statearr_61556[(15)] = inst_61469);

(statearr_61556[(16)] = inst_61472);

return statearr_61556;
})();
var statearr_61557_61596 = state_61528__$1;
(statearr_61557_61596[(2)] = null);

(statearr_61557_61596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (14))){
var state_61528__$1 = state_61528;
var statearr_61561_61597 = state_61528__$1;
(statearr_61561_61597[(2)] = null);

(statearr_61561_61597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (16))){
var inst_61483 = (state_61528[(10)]);
var inst_61487 = cljs.core.chunk_first.call(null,inst_61483);
var inst_61488 = cljs.core.chunk_rest.call(null,inst_61483);
var inst_61489 = cljs.core.count.call(null,inst_61487);
var inst_61469 = inst_61488;
var inst_61470 = inst_61487;
var inst_61471 = inst_61489;
var inst_61472 = (0);
var state_61528__$1 = (function (){var statearr_61562 = state_61528;
(statearr_61562[(13)] = inst_61471);

(statearr_61562[(14)] = inst_61470);

(statearr_61562[(15)] = inst_61469);

(statearr_61562[(16)] = inst_61472);

return statearr_61562;
})();
var statearr_61563_61598 = state_61528__$1;
(statearr_61563_61598[(2)] = null);

(statearr_61563_61598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (10))){
var inst_61471 = (state_61528[(13)]);
var inst_61470 = (state_61528[(14)]);
var inst_61469 = (state_61528[(15)]);
var inst_61472 = (state_61528[(16)]);
var inst_61477 = cljs.core._nth.call(null,inst_61470,inst_61472);
var inst_61478 = cljs.core.async.muxch_STAR_.call(null,inst_61477);
var inst_61479 = cljs.core.async.close_BANG_.call(null,inst_61478);
var inst_61480 = (inst_61472 + (1));
var tmp61558 = inst_61471;
var tmp61559 = inst_61470;
var tmp61560 = inst_61469;
var inst_61469__$1 = tmp61560;
var inst_61470__$1 = tmp61559;
var inst_61471__$1 = tmp61558;
var inst_61472__$1 = inst_61480;
var state_61528__$1 = (function (){var statearr_61564 = state_61528;
(statearr_61564[(17)] = inst_61479);

(statearr_61564[(13)] = inst_61471__$1);

(statearr_61564[(14)] = inst_61470__$1);

(statearr_61564[(15)] = inst_61469__$1);

(statearr_61564[(16)] = inst_61472__$1);

return statearr_61564;
})();
var statearr_61565_61599 = state_61528__$1;
(statearr_61565_61599[(2)] = null);

(statearr_61565_61599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (18))){
var inst_61498 = (state_61528[(2)]);
var state_61528__$1 = state_61528;
var statearr_61566_61600 = state_61528__$1;
(statearr_61566_61600[(2)] = inst_61498);

(statearr_61566_61600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61529 === (8))){
var inst_61471 = (state_61528[(13)]);
var inst_61472 = (state_61528[(16)]);
var inst_61474 = (inst_61472 < inst_61471);
var inst_61475 = inst_61474;
var state_61528__$1 = state_61528;
if(cljs.core.truth_(inst_61475)){
var statearr_61567_61601 = state_61528__$1;
(statearr_61567_61601[(1)] = (10));

} else {
var statearr_61568_61602 = state_61528__$1;
(statearr_61568_61602[(1)] = (11));

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
});})(c__30952__auto___61574,mults,ensure_mult,p))
;
return ((function (switch__30864__auto__,c__30952__auto___61574,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_61569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61569[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_61569[(1)] = (1));

return statearr_61569;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_61528){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61570){if((e61570 instanceof Object)){
var ex__30868__auto__ = e61570;
var statearr_61571_61603 = state_61528;
(statearr_61571_61603[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61604 = state_61528;
state_61528 = G__61604;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_61528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_61528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61574,mults,ensure_mult,p))
})();
var state__30954__auto__ = (function (){var statearr_61572 = f__30953__auto__.call(null);
(statearr_61572[(6)] = c__30952__auto___61574);

return statearr_61572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61574,mults,ensure_mult,p))
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
var G__61606 = arguments.length;
switch (G__61606) {
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
var G__61609 = arguments.length;
switch (G__61609) {
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
var G__61612 = arguments.length;
switch (G__61612) {
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
var c__30952__auto___61679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61679,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61679,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61651){
var state_val_61652 = (state_61651[(1)]);
if((state_val_61652 === (7))){
var state_61651__$1 = state_61651;
var statearr_61653_61680 = state_61651__$1;
(statearr_61653_61680[(2)] = null);

(statearr_61653_61680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (1))){
var state_61651__$1 = state_61651;
var statearr_61654_61681 = state_61651__$1;
(statearr_61654_61681[(2)] = null);

(statearr_61654_61681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (4))){
var inst_61615 = (state_61651[(7)]);
var inst_61617 = (inst_61615 < cnt);
var state_61651__$1 = state_61651;
if(cljs.core.truth_(inst_61617)){
var statearr_61655_61682 = state_61651__$1;
(statearr_61655_61682[(1)] = (6));

} else {
var statearr_61656_61683 = state_61651__$1;
(statearr_61656_61683[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (15))){
var inst_61647 = (state_61651[(2)]);
var state_61651__$1 = state_61651;
var statearr_61657_61684 = state_61651__$1;
(statearr_61657_61684[(2)] = inst_61647);

(statearr_61657_61684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (13))){
var inst_61640 = cljs.core.async.close_BANG_.call(null,out);
var state_61651__$1 = state_61651;
var statearr_61658_61685 = state_61651__$1;
(statearr_61658_61685[(2)] = inst_61640);

(statearr_61658_61685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (6))){
var state_61651__$1 = state_61651;
var statearr_61659_61686 = state_61651__$1;
(statearr_61659_61686[(2)] = null);

(statearr_61659_61686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (3))){
var inst_61649 = (state_61651[(2)]);
var state_61651__$1 = state_61651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61651__$1,inst_61649);
} else {
if((state_val_61652 === (12))){
var inst_61637 = (state_61651[(8)]);
var inst_61637__$1 = (state_61651[(2)]);
var inst_61638 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_61637__$1);
var state_61651__$1 = (function (){var statearr_61660 = state_61651;
(statearr_61660[(8)] = inst_61637__$1);

return statearr_61660;
})();
if(cljs.core.truth_(inst_61638)){
var statearr_61661_61687 = state_61651__$1;
(statearr_61661_61687[(1)] = (13));

} else {
var statearr_61662_61688 = state_61651__$1;
(statearr_61662_61688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (2))){
var inst_61614 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_61615 = (0);
var state_61651__$1 = (function (){var statearr_61663 = state_61651;
(statearr_61663[(9)] = inst_61614);

(statearr_61663[(7)] = inst_61615);

return statearr_61663;
})();
var statearr_61664_61689 = state_61651__$1;
(statearr_61664_61689[(2)] = null);

(statearr_61664_61689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (11))){
var inst_61615 = (state_61651[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61651,(10),Object,null,(9));
var inst_61624 = chs__$1.call(null,inst_61615);
var inst_61625 = done.call(null,inst_61615);
var inst_61626 = cljs.core.async.take_BANG_.call(null,inst_61624,inst_61625);
var state_61651__$1 = state_61651;
var statearr_61665_61690 = state_61651__$1;
(statearr_61665_61690[(2)] = inst_61626);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61651__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (9))){
var inst_61615 = (state_61651[(7)]);
var inst_61628 = (state_61651[(2)]);
var inst_61629 = (inst_61615 + (1));
var inst_61615__$1 = inst_61629;
var state_61651__$1 = (function (){var statearr_61666 = state_61651;
(statearr_61666[(10)] = inst_61628);

(statearr_61666[(7)] = inst_61615__$1);

return statearr_61666;
})();
var statearr_61667_61691 = state_61651__$1;
(statearr_61667_61691[(2)] = null);

(statearr_61667_61691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (5))){
var inst_61635 = (state_61651[(2)]);
var state_61651__$1 = (function (){var statearr_61668 = state_61651;
(statearr_61668[(11)] = inst_61635);

return statearr_61668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61651__$1,(12),dchan);
} else {
if((state_val_61652 === (14))){
var inst_61637 = (state_61651[(8)]);
var inst_61642 = cljs.core.apply.call(null,f,inst_61637);
var state_61651__$1 = state_61651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61651__$1,(16),out,inst_61642);
} else {
if((state_val_61652 === (16))){
var inst_61644 = (state_61651[(2)]);
var state_61651__$1 = (function (){var statearr_61669 = state_61651;
(statearr_61669[(12)] = inst_61644);

return statearr_61669;
})();
var statearr_61670_61692 = state_61651__$1;
(statearr_61670_61692[(2)] = null);

(statearr_61670_61692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (10))){
var inst_61619 = (state_61651[(2)]);
var inst_61620 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_61651__$1 = (function (){var statearr_61671 = state_61651;
(statearr_61671[(13)] = inst_61619);

return statearr_61671;
})();
var statearr_61672_61693 = state_61651__$1;
(statearr_61672_61693[(2)] = inst_61620);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61651__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61652 === (8))){
var inst_61633 = (state_61651[(2)]);
var state_61651__$1 = state_61651;
var statearr_61673_61694 = state_61651__$1;
(statearr_61673_61694[(2)] = inst_61633);

(statearr_61673_61694[(1)] = (5));


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
});})(c__30952__auto___61679,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30864__auto__,c__30952__auto___61679,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_61674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61674[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_61674[(1)] = (1));

return statearr_61674;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_61651){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61675){if((e61675 instanceof Object)){
var ex__30868__auto__ = e61675;
var statearr_61676_61695 = state_61651;
(statearr_61676_61695[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61696 = state_61651;
state_61651 = G__61696;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_61651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_61651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61679,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30954__auto__ = (function (){var statearr_61677 = f__30953__auto__.call(null);
(statearr_61677[(6)] = c__30952__auto___61679);

return statearr_61677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61679,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__61699 = arguments.length;
switch (G__61699) {
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
var c__30952__auto___61753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61753,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61753,out){
return (function (state_61731){
var state_val_61732 = (state_61731[(1)]);
if((state_val_61732 === (7))){
var inst_61711 = (state_61731[(7)]);
var inst_61710 = (state_61731[(8)]);
var inst_61710__$1 = (state_61731[(2)]);
var inst_61711__$1 = cljs.core.nth.call(null,inst_61710__$1,(0),null);
var inst_61712 = cljs.core.nth.call(null,inst_61710__$1,(1),null);
var inst_61713 = (inst_61711__$1 == null);
var state_61731__$1 = (function (){var statearr_61733 = state_61731;
(statearr_61733[(7)] = inst_61711__$1);

(statearr_61733[(8)] = inst_61710__$1);

(statearr_61733[(9)] = inst_61712);

return statearr_61733;
})();
if(cljs.core.truth_(inst_61713)){
var statearr_61734_61754 = state_61731__$1;
(statearr_61734_61754[(1)] = (8));

} else {
var statearr_61735_61755 = state_61731__$1;
(statearr_61735_61755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (1))){
var inst_61700 = cljs.core.vec.call(null,chs);
var inst_61701 = inst_61700;
var state_61731__$1 = (function (){var statearr_61736 = state_61731;
(statearr_61736[(10)] = inst_61701);

return statearr_61736;
})();
var statearr_61737_61756 = state_61731__$1;
(statearr_61737_61756[(2)] = null);

(statearr_61737_61756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (4))){
var inst_61701 = (state_61731[(10)]);
var state_61731__$1 = state_61731;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61731__$1,(7),inst_61701);
} else {
if((state_val_61732 === (6))){
var inst_61727 = (state_61731[(2)]);
var state_61731__$1 = state_61731;
var statearr_61738_61757 = state_61731__$1;
(statearr_61738_61757[(2)] = inst_61727);

(statearr_61738_61757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (3))){
var inst_61729 = (state_61731[(2)]);
var state_61731__$1 = state_61731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61731__$1,inst_61729);
} else {
if((state_val_61732 === (2))){
var inst_61701 = (state_61731[(10)]);
var inst_61703 = cljs.core.count.call(null,inst_61701);
var inst_61704 = (inst_61703 > (0));
var state_61731__$1 = state_61731;
if(cljs.core.truth_(inst_61704)){
var statearr_61740_61758 = state_61731__$1;
(statearr_61740_61758[(1)] = (4));

} else {
var statearr_61741_61759 = state_61731__$1;
(statearr_61741_61759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (11))){
var inst_61701 = (state_61731[(10)]);
var inst_61720 = (state_61731[(2)]);
var tmp61739 = inst_61701;
var inst_61701__$1 = tmp61739;
var state_61731__$1 = (function (){var statearr_61742 = state_61731;
(statearr_61742[(11)] = inst_61720);

(statearr_61742[(10)] = inst_61701__$1);

return statearr_61742;
})();
var statearr_61743_61760 = state_61731__$1;
(statearr_61743_61760[(2)] = null);

(statearr_61743_61760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (9))){
var inst_61711 = (state_61731[(7)]);
var state_61731__$1 = state_61731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61731__$1,(11),out,inst_61711);
} else {
if((state_val_61732 === (5))){
var inst_61725 = cljs.core.async.close_BANG_.call(null,out);
var state_61731__$1 = state_61731;
var statearr_61744_61761 = state_61731__$1;
(statearr_61744_61761[(2)] = inst_61725);

(statearr_61744_61761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (10))){
var inst_61723 = (state_61731[(2)]);
var state_61731__$1 = state_61731;
var statearr_61745_61762 = state_61731__$1;
(statearr_61745_61762[(2)] = inst_61723);

(statearr_61745_61762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61732 === (8))){
var inst_61711 = (state_61731[(7)]);
var inst_61710 = (state_61731[(8)]);
var inst_61712 = (state_61731[(9)]);
var inst_61701 = (state_61731[(10)]);
var inst_61715 = (function (){var cs = inst_61701;
var vec__61706 = inst_61710;
var v = inst_61711;
var c = inst_61712;
return ((function (cs,vec__61706,v,c,inst_61711,inst_61710,inst_61712,inst_61701,state_val_61732,c__30952__auto___61753,out){
return (function (p1__61697_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__61697_SHARP_);
});
;})(cs,vec__61706,v,c,inst_61711,inst_61710,inst_61712,inst_61701,state_val_61732,c__30952__auto___61753,out))
})();
var inst_61716 = cljs.core.filterv.call(null,inst_61715,inst_61701);
var inst_61701__$1 = inst_61716;
var state_61731__$1 = (function (){var statearr_61746 = state_61731;
(statearr_61746[(10)] = inst_61701__$1);

return statearr_61746;
})();
var statearr_61747_61763 = state_61731__$1;
(statearr_61747_61763[(2)] = null);

(statearr_61747_61763[(1)] = (2));


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
});})(c__30952__auto___61753,out))
;
return ((function (switch__30864__auto__,c__30952__auto___61753,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_61748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61748[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_61748[(1)] = (1));

return statearr_61748;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_61731){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61749){if((e61749 instanceof Object)){
var ex__30868__auto__ = e61749;
var statearr_61750_61764 = state_61731;
(statearr_61750_61764[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61765 = state_61731;
state_61731 = G__61765;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_61731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_61731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61753,out))
})();
var state__30954__auto__ = (function (){var statearr_61751 = f__30953__auto__.call(null);
(statearr_61751[(6)] = c__30952__auto___61753);

return statearr_61751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61753,out))
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
var G__61767 = arguments.length;
switch (G__61767) {
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
var c__30952__auto___61812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61812,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61812,out){
return (function (state_61791){
var state_val_61792 = (state_61791[(1)]);
if((state_val_61792 === (7))){
var inst_61773 = (state_61791[(7)]);
var inst_61773__$1 = (state_61791[(2)]);
var inst_61774 = (inst_61773__$1 == null);
var inst_61775 = cljs.core.not.call(null,inst_61774);
var state_61791__$1 = (function (){var statearr_61793 = state_61791;
(statearr_61793[(7)] = inst_61773__$1);

return statearr_61793;
})();
if(inst_61775){
var statearr_61794_61813 = state_61791__$1;
(statearr_61794_61813[(1)] = (8));

} else {
var statearr_61795_61814 = state_61791__$1;
(statearr_61795_61814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (1))){
var inst_61768 = (0);
var state_61791__$1 = (function (){var statearr_61796 = state_61791;
(statearr_61796[(8)] = inst_61768);

return statearr_61796;
})();
var statearr_61797_61815 = state_61791__$1;
(statearr_61797_61815[(2)] = null);

(statearr_61797_61815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (4))){
var state_61791__$1 = state_61791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61791__$1,(7),ch);
} else {
if((state_val_61792 === (6))){
var inst_61786 = (state_61791[(2)]);
var state_61791__$1 = state_61791;
var statearr_61798_61816 = state_61791__$1;
(statearr_61798_61816[(2)] = inst_61786);

(statearr_61798_61816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (3))){
var inst_61788 = (state_61791[(2)]);
var inst_61789 = cljs.core.async.close_BANG_.call(null,out);
var state_61791__$1 = (function (){var statearr_61799 = state_61791;
(statearr_61799[(9)] = inst_61788);

return statearr_61799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61791__$1,inst_61789);
} else {
if((state_val_61792 === (2))){
var inst_61768 = (state_61791[(8)]);
var inst_61770 = (inst_61768 < n);
var state_61791__$1 = state_61791;
if(cljs.core.truth_(inst_61770)){
var statearr_61800_61817 = state_61791__$1;
(statearr_61800_61817[(1)] = (4));

} else {
var statearr_61801_61818 = state_61791__$1;
(statearr_61801_61818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (11))){
var inst_61768 = (state_61791[(8)]);
var inst_61778 = (state_61791[(2)]);
var inst_61779 = (inst_61768 + (1));
var inst_61768__$1 = inst_61779;
var state_61791__$1 = (function (){var statearr_61802 = state_61791;
(statearr_61802[(8)] = inst_61768__$1);

(statearr_61802[(10)] = inst_61778);

return statearr_61802;
})();
var statearr_61803_61819 = state_61791__$1;
(statearr_61803_61819[(2)] = null);

(statearr_61803_61819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (9))){
var state_61791__$1 = state_61791;
var statearr_61804_61820 = state_61791__$1;
(statearr_61804_61820[(2)] = null);

(statearr_61804_61820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (5))){
var state_61791__$1 = state_61791;
var statearr_61805_61821 = state_61791__$1;
(statearr_61805_61821[(2)] = null);

(statearr_61805_61821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (10))){
var inst_61783 = (state_61791[(2)]);
var state_61791__$1 = state_61791;
var statearr_61806_61822 = state_61791__$1;
(statearr_61806_61822[(2)] = inst_61783);

(statearr_61806_61822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61792 === (8))){
var inst_61773 = (state_61791[(7)]);
var state_61791__$1 = state_61791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61791__$1,(11),out,inst_61773);
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
});})(c__30952__auto___61812,out))
;
return ((function (switch__30864__auto__,c__30952__auto___61812,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_61807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61807[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_61807[(1)] = (1));

return statearr_61807;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_61791){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61808){if((e61808 instanceof Object)){
var ex__30868__auto__ = e61808;
var statearr_61809_61823 = state_61791;
(statearr_61809_61823[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61824 = state_61791;
state_61791 = G__61824;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_61791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_61791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61812,out))
})();
var state__30954__auto__ = (function (){var statearr_61810 = f__30953__auto__.call(null);
(statearr_61810[(6)] = c__30952__auto___61812);

return statearr_61810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61812,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61826 = (function (f,ch,meta61827){
this.f = f;
this.ch = ch;
this.meta61827 = meta61827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61828,meta61827__$1){
var self__ = this;
var _61828__$1 = this;
return (new cljs.core.async.t_cljs$core$async61826(self__.f,self__.ch,meta61827__$1));
});

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61828){
var self__ = this;
var _61828__$1 = this;
return self__.meta61827;
});

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async61829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61829 = (function (f,ch,meta61827,_,fn1,meta61830){
this.f = f;
this.ch = ch;
this.meta61827 = meta61827;
this._ = _;
this.fn1 = fn1;
this.meta61830 = meta61830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61831,meta61830__$1){
var self__ = this;
var _61831__$1 = this;
return (new cljs.core.async.t_cljs$core$async61829(self__.f,self__.ch,self__.meta61827,self__._,self__.fn1,meta61830__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async61829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61831){
var self__ = this;
var _61831__$1 = this;
return self__.meta61830;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61825_SHARP_){
return f1.call(null,(((p1__61825_SHARP_ == null))?null:self__.f.call(null,p1__61825_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61829.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61827","meta61827",1974828182,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61826","cljs.core.async/t_cljs$core$async61826",-1164380166,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61830","meta61830",160349196,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61829";

cljs.core.async.t_cljs$core$async61829.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async61829");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async61829 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61829(f__$1,ch__$1,meta61827__$1,___$2,fn1__$1,meta61830){
return (new cljs.core.async.t_cljs$core$async61829(f__$1,ch__$1,meta61827__$1,___$2,fn1__$1,meta61830));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61829(self__.f,self__.ch,self__.meta61827,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61827","meta61827",1974828182,null)], null);
});

cljs.core.async.t_cljs$core$async61826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61826";

cljs.core.async.t_cljs$core$async61826.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async61826");
});

cljs.core.async.__GT_t_cljs$core$async61826 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61826(f__$1,ch__$1,meta61827){
return (new cljs.core.async.t_cljs$core$async61826(f__$1,ch__$1,meta61827));
});

}

return (new cljs.core.async.t_cljs$core$async61826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61832 = (function (f,ch,meta61833){
this.f = f;
this.ch = ch;
this.meta61833 = meta61833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61834,meta61833__$1){
var self__ = this;
var _61834__$1 = this;
return (new cljs.core.async.t_cljs$core$async61832(self__.f,self__.ch,meta61833__$1));
});

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61834){
var self__ = this;
var _61834__$1 = this;
return self__.meta61833;
});

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async61832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61833","meta61833",-790492779,null)], null);
});

cljs.core.async.t_cljs$core$async61832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61832";

cljs.core.async.t_cljs$core$async61832.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async61832");
});

cljs.core.async.__GT_t_cljs$core$async61832 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61832(f__$1,ch__$1,meta61833){
return (new cljs.core.async.t_cljs$core$async61832(f__$1,ch__$1,meta61833));
});

}

return (new cljs.core.async.t_cljs$core$async61832(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async61835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61835 = (function (p,ch,meta61836){
this.p = p;
this.ch = ch;
this.meta61836 = meta61836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61837,meta61836__$1){
var self__ = this;
var _61837__$1 = this;
return (new cljs.core.async.t_cljs$core$async61835(self__.p,self__.ch,meta61836__$1));
});

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61837){
var self__ = this;
var _61837__$1 = this;
return self__.meta61836;
});

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61836","meta61836",-29039679,null)], null);
});

cljs.core.async.t_cljs$core$async61835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61835";

cljs.core.async.t_cljs$core$async61835.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async61835");
});

cljs.core.async.__GT_t_cljs$core$async61835 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61835(p__$1,ch__$1,meta61836){
return (new cljs.core.async.t_cljs$core$async61835(p__$1,ch__$1,meta61836));
});

}

return (new cljs.core.async.t_cljs$core$async61835(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__61839 = arguments.length;
switch (G__61839) {
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
var c__30952__auto___61879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___61879,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___61879,out){
return (function (state_61860){
var state_val_61861 = (state_61860[(1)]);
if((state_val_61861 === (7))){
var inst_61856 = (state_61860[(2)]);
var state_61860__$1 = state_61860;
var statearr_61862_61880 = state_61860__$1;
(statearr_61862_61880[(2)] = inst_61856);

(statearr_61862_61880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (1))){
var state_61860__$1 = state_61860;
var statearr_61863_61881 = state_61860__$1;
(statearr_61863_61881[(2)] = null);

(statearr_61863_61881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (4))){
var inst_61842 = (state_61860[(7)]);
var inst_61842__$1 = (state_61860[(2)]);
var inst_61843 = (inst_61842__$1 == null);
var state_61860__$1 = (function (){var statearr_61864 = state_61860;
(statearr_61864[(7)] = inst_61842__$1);

return statearr_61864;
})();
if(cljs.core.truth_(inst_61843)){
var statearr_61865_61882 = state_61860__$1;
(statearr_61865_61882[(1)] = (5));

} else {
var statearr_61866_61883 = state_61860__$1;
(statearr_61866_61883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (6))){
var inst_61842 = (state_61860[(7)]);
var inst_61847 = p.call(null,inst_61842);
var state_61860__$1 = state_61860;
if(cljs.core.truth_(inst_61847)){
var statearr_61867_61884 = state_61860__$1;
(statearr_61867_61884[(1)] = (8));

} else {
var statearr_61868_61885 = state_61860__$1;
(statearr_61868_61885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (3))){
var inst_61858 = (state_61860[(2)]);
var state_61860__$1 = state_61860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61860__$1,inst_61858);
} else {
if((state_val_61861 === (2))){
var state_61860__$1 = state_61860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61860__$1,(4),ch);
} else {
if((state_val_61861 === (11))){
var inst_61850 = (state_61860[(2)]);
var state_61860__$1 = state_61860;
var statearr_61869_61886 = state_61860__$1;
(statearr_61869_61886[(2)] = inst_61850);

(statearr_61869_61886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (9))){
var state_61860__$1 = state_61860;
var statearr_61870_61887 = state_61860__$1;
(statearr_61870_61887[(2)] = null);

(statearr_61870_61887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (5))){
var inst_61845 = cljs.core.async.close_BANG_.call(null,out);
var state_61860__$1 = state_61860;
var statearr_61871_61888 = state_61860__$1;
(statearr_61871_61888[(2)] = inst_61845);

(statearr_61871_61888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (10))){
var inst_61853 = (state_61860[(2)]);
var state_61860__$1 = (function (){var statearr_61872 = state_61860;
(statearr_61872[(8)] = inst_61853);

return statearr_61872;
})();
var statearr_61873_61889 = state_61860__$1;
(statearr_61873_61889[(2)] = null);

(statearr_61873_61889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61861 === (8))){
var inst_61842 = (state_61860[(7)]);
var state_61860__$1 = state_61860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61860__$1,(11),out,inst_61842);
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
});})(c__30952__auto___61879,out))
;
return ((function (switch__30864__auto__,c__30952__auto___61879,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_61874 = [null,null,null,null,null,null,null,null,null];
(statearr_61874[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_61874[(1)] = (1));

return statearr_61874;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_61860){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61875){if((e61875 instanceof Object)){
var ex__30868__auto__ = e61875;
var statearr_61876_61890 = state_61860;
(statearr_61876_61890[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61891 = state_61860;
state_61860 = G__61891;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_61860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_61860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___61879,out))
})();
var state__30954__auto__ = (function (){var statearr_61877 = f__30953__auto__.call(null);
(statearr_61877[(6)] = c__30952__auto___61879);

return statearr_61877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___61879,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__61893 = arguments.length;
switch (G__61893) {
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
return (function (state_61956){
var state_val_61957 = (state_61956[(1)]);
if((state_val_61957 === (7))){
var inst_61952 = (state_61956[(2)]);
var state_61956__$1 = state_61956;
var statearr_61958_61996 = state_61956__$1;
(statearr_61958_61996[(2)] = inst_61952);

(statearr_61958_61996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (20))){
var inst_61922 = (state_61956[(7)]);
var inst_61933 = (state_61956[(2)]);
var inst_61934 = cljs.core.next.call(null,inst_61922);
var inst_61908 = inst_61934;
var inst_61909 = null;
var inst_61910 = (0);
var inst_61911 = (0);
var state_61956__$1 = (function (){var statearr_61959 = state_61956;
(statearr_61959[(8)] = inst_61910);

(statearr_61959[(9)] = inst_61908);

(statearr_61959[(10)] = inst_61909);

(statearr_61959[(11)] = inst_61933);

(statearr_61959[(12)] = inst_61911);

return statearr_61959;
})();
var statearr_61960_61997 = state_61956__$1;
(statearr_61960_61997[(2)] = null);

(statearr_61960_61997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (1))){
var state_61956__$1 = state_61956;
var statearr_61961_61998 = state_61956__$1;
(statearr_61961_61998[(2)] = null);

(statearr_61961_61998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (4))){
var inst_61897 = (state_61956[(13)]);
var inst_61897__$1 = (state_61956[(2)]);
var inst_61898 = (inst_61897__$1 == null);
var state_61956__$1 = (function (){var statearr_61962 = state_61956;
(statearr_61962[(13)] = inst_61897__$1);

return statearr_61962;
})();
if(cljs.core.truth_(inst_61898)){
var statearr_61963_61999 = state_61956__$1;
(statearr_61963_61999[(1)] = (5));

} else {
var statearr_61964_62000 = state_61956__$1;
(statearr_61964_62000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (15))){
var state_61956__$1 = state_61956;
var statearr_61968_62001 = state_61956__$1;
(statearr_61968_62001[(2)] = null);

(statearr_61968_62001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (21))){
var state_61956__$1 = state_61956;
var statearr_61969_62002 = state_61956__$1;
(statearr_61969_62002[(2)] = null);

(statearr_61969_62002[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (13))){
var inst_61910 = (state_61956[(8)]);
var inst_61908 = (state_61956[(9)]);
var inst_61909 = (state_61956[(10)]);
var inst_61911 = (state_61956[(12)]);
var inst_61918 = (state_61956[(2)]);
var inst_61919 = (inst_61911 + (1));
var tmp61965 = inst_61910;
var tmp61966 = inst_61908;
var tmp61967 = inst_61909;
var inst_61908__$1 = tmp61966;
var inst_61909__$1 = tmp61967;
var inst_61910__$1 = tmp61965;
var inst_61911__$1 = inst_61919;
var state_61956__$1 = (function (){var statearr_61970 = state_61956;
(statearr_61970[(8)] = inst_61910__$1);

(statearr_61970[(14)] = inst_61918);

(statearr_61970[(9)] = inst_61908__$1);

(statearr_61970[(10)] = inst_61909__$1);

(statearr_61970[(12)] = inst_61911__$1);

return statearr_61970;
})();
var statearr_61971_62003 = state_61956__$1;
(statearr_61971_62003[(2)] = null);

(statearr_61971_62003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (22))){
var state_61956__$1 = state_61956;
var statearr_61972_62004 = state_61956__$1;
(statearr_61972_62004[(2)] = null);

(statearr_61972_62004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (6))){
var inst_61897 = (state_61956[(13)]);
var inst_61906 = f.call(null,inst_61897);
var inst_61907 = cljs.core.seq.call(null,inst_61906);
var inst_61908 = inst_61907;
var inst_61909 = null;
var inst_61910 = (0);
var inst_61911 = (0);
var state_61956__$1 = (function (){var statearr_61973 = state_61956;
(statearr_61973[(8)] = inst_61910);

(statearr_61973[(9)] = inst_61908);

(statearr_61973[(10)] = inst_61909);

(statearr_61973[(12)] = inst_61911);

return statearr_61973;
})();
var statearr_61974_62005 = state_61956__$1;
(statearr_61974_62005[(2)] = null);

(statearr_61974_62005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (17))){
var inst_61922 = (state_61956[(7)]);
var inst_61926 = cljs.core.chunk_first.call(null,inst_61922);
var inst_61927 = cljs.core.chunk_rest.call(null,inst_61922);
var inst_61928 = cljs.core.count.call(null,inst_61926);
var inst_61908 = inst_61927;
var inst_61909 = inst_61926;
var inst_61910 = inst_61928;
var inst_61911 = (0);
var state_61956__$1 = (function (){var statearr_61975 = state_61956;
(statearr_61975[(8)] = inst_61910);

(statearr_61975[(9)] = inst_61908);

(statearr_61975[(10)] = inst_61909);

(statearr_61975[(12)] = inst_61911);

return statearr_61975;
})();
var statearr_61976_62006 = state_61956__$1;
(statearr_61976_62006[(2)] = null);

(statearr_61976_62006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (3))){
var inst_61954 = (state_61956[(2)]);
var state_61956__$1 = state_61956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61956__$1,inst_61954);
} else {
if((state_val_61957 === (12))){
var inst_61942 = (state_61956[(2)]);
var state_61956__$1 = state_61956;
var statearr_61977_62007 = state_61956__$1;
(statearr_61977_62007[(2)] = inst_61942);

(statearr_61977_62007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (2))){
var state_61956__$1 = state_61956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61956__$1,(4),in$);
} else {
if((state_val_61957 === (23))){
var inst_61950 = (state_61956[(2)]);
var state_61956__$1 = state_61956;
var statearr_61978_62008 = state_61956__$1;
(statearr_61978_62008[(2)] = inst_61950);

(statearr_61978_62008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (19))){
var inst_61937 = (state_61956[(2)]);
var state_61956__$1 = state_61956;
var statearr_61979_62009 = state_61956__$1;
(statearr_61979_62009[(2)] = inst_61937);

(statearr_61979_62009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (11))){
var inst_61908 = (state_61956[(9)]);
var inst_61922 = (state_61956[(7)]);
var inst_61922__$1 = cljs.core.seq.call(null,inst_61908);
var state_61956__$1 = (function (){var statearr_61980 = state_61956;
(statearr_61980[(7)] = inst_61922__$1);

return statearr_61980;
})();
if(inst_61922__$1){
var statearr_61981_62010 = state_61956__$1;
(statearr_61981_62010[(1)] = (14));

} else {
var statearr_61982_62011 = state_61956__$1;
(statearr_61982_62011[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (9))){
var inst_61944 = (state_61956[(2)]);
var inst_61945 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_61956__$1 = (function (){var statearr_61983 = state_61956;
(statearr_61983[(15)] = inst_61944);

return statearr_61983;
})();
if(cljs.core.truth_(inst_61945)){
var statearr_61984_62012 = state_61956__$1;
(statearr_61984_62012[(1)] = (21));

} else {
var statearr_61985_62013 = state_61956__$1;
(statearr_61985_62013[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (5))){
var inst_61900 = cljs.core.async.close_BANG_.call(null,out);
var state_61956__$1 = state_61956;
var statearr_61986_62014 = state_61956__$1;
(statearr_61986_62014[(2)] = inst_61900);

(statearr_61986_62014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (14))){
var inst_61922 = (state_61956[(7)]);
var inst_61924 = cljs.core.chunked_seq_QMARK_.call(null,inst_61922);
var state_61956__$1 = state_61956;
if(inst_61924){
var statearr_61987_62015 = state_61956__$1;
(statearr_61987_62015[(1)] = (17));

} else {
var statearr_61988_62016 = state_61956__$1;
(statearr_61988_62016[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (16))){
var inst_61940 = (state_61956[(2)]);
var state_61956__$1 = state_61956;
var statearr_61989_62017 = state_61956__$1;
(statearr_61989_62017[(2)] = inst_61940);

(statearr_61989_62017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61957 === (10))){
var inst_61909 = (state_61956[(10)]);
var inst_61911 = (state_61956[(12)]);
var inst_61916 = cljs.core._nth.call(null,inst_61909,inst_61911);
var state_61956__$1 = state_61956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61956__$1,(13),out,inst_61916);
} else {
if((state_val_61957 === (18))){
var inst_61922 = (state_61956[(7)]);
var inst_61931 = cljs.core.first.call(null,inst_61922);
var state_61956__$1 = state_61956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61956__$1,(20),out,inst_61931);
} else {
if((state_val_61957 === (8))){
var inst_61910 = (state_61956[(8)]);
var inst_61911 = (state_61956[(12)]);
var inst_61913 = (inst_61911 < inst_61910);
var inst_61914 = inst_61913;
var state_61956__$1 = state_61956;
if(cljs.core.truth_(inst_61914)){
var statearr_61990_62018 = state_61956__$1;
(statearr_61990_62018[(1)] = (10));

} else {
var statearr_61991_62019 = state_61956__$1;
(statearr_61991_62019[(1)] = (11));

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
var statearr_61992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61992[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__);

(statearr_61992[(1)] = (1));

return statearr_61992;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1 = (function (state_61956){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_61956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e61993){if((e61993 instanceof Object)){
var ex__30868__auto__ = e61993;
var statearr_61994_62020 = state_61956;
(statearr_61994_62020[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62021 = state_61956;
state_61956 = G__62021;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__ = function(state_61956){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1.call(this,state_61956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30865__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_61995 = f__30953__auto__.call(null);
(statearr_61995[(6)] = c__30952__auto__);

return statearr_61995;
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
var G__62023 = arguments.length;
switch (G__62023) {
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
var G__62026 = arguments.length;
switch (G__62026) {
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
var G__62029 = arguments.length;
switch (G__62029) {
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
var c__30952__auto___62076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___62076,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___62076,out){
return (function (state_62053){
var state_val_62054 = (state_62053[(1)]);
if((state_val_62054 === (7))){
var inst_62048 = (state_62053[(2)]);
var state_62053__$1 = state_62053;
var statearr_62055_62077 = state_62053__$1;
(statearr_62055_62077[(2)] = inst_62048);

(statearr_62055_62077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (1))){
var inst_62030 = null;
var state_62053__$1 = (function (){var statearr_62056 = state_62053;
(statearr_62056[(7)] = inst_62030);

return statearr_62056;
})();
var statearr_62057_62078 = state_62053__$1;
(statearr_62057_62078[(2)] = null);

(statearr_62057_62078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (4))){
var inst_62033 = (state_62053[(8)]);
var inst_62033__$1 = (state_62053[(2)]);
var inst_62034 = (inst_62033__$1 == null);
var inst_62035 = cljs.core.not.call(null,inst_62034);
var state_62053__$1 = (function (){var statearr_62058 = state_62053;
(statearr_62058[(8)] = inst_62033__$1);

return statearr_62058;
})();
if(inst_62035){
var statearr_62059_62079 = state_62053__$1;
(statearr_62059_62079[(1)] = (5));

} else {
var statearr_62060_62080 = state_62053__$1;
(statearr_62060_62080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (6))){
var state_62053__$1 = state_62053;
var statearr_62061_62081 = state_62053__$1;
(statearr_62061_62081[(2)] = null);

(statearr_62061_62081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (3))){
var inst_62050 = (state_62053[(2)]);
var inst_62051 = cljs.core.async.close_BANG_.call(null,out);
var state_62053__$1 = (function (){var statearr_62062 = state_62053;
(statearr_62062[(9)] = inst_62050);

return statearr_62062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62053__$1,inst_62051);
} else {
if((state_val_62054 === (2))){
var state_62053__$1 = state_62053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62053__$1,(4),ch);
} else {
if((state_val_62054 === (11))){
var inst_62033 = (state_62053[(8)]);
var inst_62042 = (state_62053[(2)]);
var inst_62030 = inst_62033;
var state_62053__$1 = (function (){var statearr_62063 = state_62053;
(statearr_62063[(7)] = inst_62030);

(statearr_62063[(10)] = inst_62042);

return statearr_62063;
})();
var statearr_62064_62082 = state_62053__$1;
(statearr_62064_62082[(2)] = null);

(statearr_62064_62082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (9))){
var inst_62033 = (state_62053[(8)]);
var state_62053__$1 = state_62053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62053__$1,(11),out,inst_62033);
} else {
if((state_val_62054 === (5))){
var inst_62033 = (state_62053[(8)]);
var inst_62030 = (state_62053[(7)]);
var inst_62037 = cljs.core._EQ_.call(null,inst_62033,inst_62030);
var state_62053__$1 = state_62053;
if(inst_62037){
var statearr_62066_62083 = state_62053__$1;
(statearr_62066_62083[(1)] = (8));

} else {
var statearr_62067_62084 = state_62053__$1;
(statearr_62067_62084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (10))){
var inst_62045 = (state_62053[(2)]);
var state_62053__$1 = state_62053;
var statearr_62068_62085 = state_62053__$1;
(statearr_62068_62085[(2)] = inst_62045);

(statearr_62068_62085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62054 === (8))){
var inst_62030 = (state_62053[(7)]);
var tmp62065 = inst_62030;
var inst_62030__$1 = tmp62065;
var state_62053__$1 = (function (){var statearr_62069 = state_62053;
(statearr_62069[(7)] = inst_62030__$1);

return statearr_62069;
})();
var statearr_62070_62086 = state_62053__$1;
(statearr_62070_62086[(2)] = null);

(statearr_62070_62086[(1)] = (2));


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
});})(c__30952__auto___62076,out))
;
return ((function (switch__30864__auto__,c__30952__auto___62076,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_62071 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62071[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_62071[(1)] = (1));

return statearr_62071;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_62053){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_62053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e62072){if((e62072 instanceof Object)){
var ex__30868__auto__ = e62072;
var statearr_62073_62087 = state_62053;
(statearr_62073_62087[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62088 = state_62053;
state_62053 = G__62088;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_62053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_62053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___62076,out))
})();
var state__30954__auto__ = (function (){var statearr_62074 = f__30953__auto__.call(null);
(statearr_62074[(6)] = c__30952__auto___62076);

return statearr_62074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___62076,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__62090 = arguments.length;
switch (G__62090) {
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
var c__30952__auto___62156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___62156,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___62156,out){
return (function (state_62128){
var state_val_62129 = (state_62128[(1)]);
if((state_val_62129 === (7))){
var inst_62124 = (state_62128[(2)]);
var state_62128__$1 = state_62128;
var statearr_62130_62157 = state_62128__$1;
(statearr_62130_62157[(2)] = inst_62124);

(statearr_62130_62157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (1))){
var inst_62091 = (new Array(n));
var inst_62092 = inst_62091;
var inst_62093 = (0);
var state_62128__$1 = (function (){var statearr_62131 = state_62128;
(statearr_62131[(7)] = inst_62093);

(statearr_62131[(8)] = inst_62092);

return statearr_62131;
})();
var statearr_62132_62158 = state_62128__$1;
(statearr_62132_62158[(2)] = null);

(statearr_62132_62158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (4))){
var inst_62096 = (state_62128[(9)]);
var inst_62096__$1 = (state_62128[(2)]);
var inst_62097 = (inst_62096__$1 == null);
var inst_62098 = cljs.core.not.call(null,inst_62097);
var state_62128__$1 = (function (){var statearr_62133 = state_62128;
(statearr_62133[(9)] = inst_62096__$1);

return statearr_62133;
})();
if(inst_62098){
var statearr_62134_62159 = state_62128__$1;
(statearr_62134_62159[(1)] = (5));

} else {
var statearr_62135_62160 = state_62128__$1;
(statearr_62135_62160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (15))){
var inst_62118 = (state_62128[(2)]);
var state_62128__$1 = state_62128;
var statearr_62136_62161 = state_62128__$1;
(statearr_62136_62161[(2)] = inst_62118);

(statearr_62136_62161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (13))){
var state_62128__$1 = state_62128;
var statearr_62137_62162 = state_62128__$1;
(statearr_62137_62162[(2)] = null);

(statearr_62137_62162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (6))){
var inst_62093 = (state_62128[(7)]);
var inst_62114 = (inst_62093 > (0));
var state_62128__$1 = state_62128;
if(cljs.core.truth_(inst_62114)){
var statearr_62138_62163 = state_62128__$1;
(statearr_62138_62163[(1)] = (12));

} else {
var statearr_62139_62164 = state_62128__$1;
(statearr_62139_62164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (3))){
var inst_62126 = (state_62128[(2)]);
var state_62128__$1 = state_62128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62128__$1,inst_62126);
} else {
if((state_val_62129 === (12))){
var inst_62092 = (state_62128[(8)]);
var inst_62116 = cljs.core.vec.call(null,inst_62092);
var state_62128__$1 = state_62128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62128__$1,(15),out,inst_62116);
} else {
if((state_val_62129 === (2))){
var state_62128__$1 = state_62128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62128__$1,(4),ch);
} else {
if((state_val_62129 === (11))){
var inst_62108 = (state_62128[(2)]);
var inst_62109 = (new Array(n));
var inst_62092 = inst_62109;
var inst_62093 = (0);
var state_62128__$1 = (function (){var statearr_62140 = state_62128;
(statearr_62140[(7)] = inst_62093);

(statearr_62140[(10)] = inst_62108);

(statearr_62140[(8)] = inst_62092);

return statearr_62140;
})();
var statearr_62141_62165 = state_62128__$1;
(statearr_62141_62165[(2)] = null);

(statearr_62141_62165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (9))){
var inst_62092 = (state_62128[(8)]);
var inst_62106 = cljs.core.vec.call(null,inst_62092);
var state_62128__$1 = state_62128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62128__$1,(11),out,inst_62106);
} else {
if((state_val_62129 === (5))){
var inst_62093 = (state_62128[(7)]);
var inst_62101 = (state_62128[(11)]);
var inst_62092 = (state_62128[(8)]);
var inst_62096 = (state_62128[(9)]);
var inst_62100 = (inst_62092[inst_62093] = inst_62096);
var inst_62101__$1 = (inst_62093 + (1));
var inst_62102 = (inst_62101__$1 < n);
var state_62128__$1 = (function (){var statearr_62142 = state_62128;
(statearr_62142[(12)] = inst_62100);

(statearr_62142[(11)] = inst_62101__$1);

return statearr_62142;
})();
if(cljs.core.truth_(inst_62102)){
var statearr_62143_62166 = state_62128__$1;
(statearr_62143_62166[(1)] = (8));

} else {
var statearr_62144_62167 = state_62128__$1;
(statearr_62144_62167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (14))){
var inst_62121 = (state_62128[(2)]);
var inst_62122 = cljs.core.async.close_BANG_.call(null,out);
var state_62128__$1 = (function (){var statearr_62146 = state_62128;
(statearr_62146[(13)] = inst_62121);

return statearr_62146;
})();
var statearr_62147_62168 = state_62128__$1;
(statearr_62147_62168[(2)] = inst_62122);

(statearr_62147_62168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (10))){
var inst_62112 = (state_62128[(2)]);
var state_62128__$1 = state_62128;
var statearr_62148_62169 = state_62128__$1;
(statearr_62148_62169[(2)] = inst_62112);

(statearr_62148_62169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62129 === (8))){
var inst_62101 = (state_62128[(11)]);
var inst_62092 = (state_62128[(8)]);
var tmp62145 = inst_62092;
var inst_62092__$1 = tmp62145;
var inst_62093 = inst_62101;
var state_62128__$1 = (function (){var statearr_62149 = state_62128;
(statearr_62149[(7)] = inst_62093);

(statearr_62149[(8)] = inst_62092__$1);

return statearr_62149;
})();
var statearr_62150_62170 = state_62128__$1;
(statearr_62150_62170[(2)] = null);

(statearr_62150_62170[(1)] = (2));


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
});})(c__30952__auto___62156,out))
;
return ((function (switch__30864__auto__,c__30952__auto___62156,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_62151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62151[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_62151[(1)] = (1));

return statearr_62151;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_62128){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_62128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e62152){if((e62152 instanceof Object)){
var ex__30868__auto__ = e62152;
var statearr_62153_62171 = state_62128;
(statearr_62153_62171[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62172 = state_62128;
state_62128 = G__62172;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_62128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_62128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___62156,out))
})();
var state__30954__auto__ = (function (){var statearr_62154 = f__30953__auto__.call(null);
(statearr_62154[(6)] = c__30952__auto___62156);

return statearr_62154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___62156,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__62174 = arguments.length;
switch (G__62174) {
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
var c__30952__auto___62244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___62244,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___62244,out){
return (function (state_62216){
var state_val_62217 = (state_62216[(1)]);
if((state_val_62217 === (7))){
var inst_62212 = (state_62216[(2)]);
var state_62216__$1 = state_62216;
var statearr_62218_62245 = state_62216__$1;
(statearr_62218_62245[(2)] = inst_62212);

(statearr_62218_62245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (1))){
var inst_62175 = [];
var inst_62176 = inst_62175;
var inst_62177 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62216__$1 = (function (){var statearr_62219 = state_62216;
(statearr_62219[(7)] = inst_62177);

(statearr_62219[(8)] = inst_62176);

return statearr_62219;
})();
var statearr_62220_62246 = state_62216__$1;
(statearr_62220_62246[(2)] = null);

(statearr_62220_62246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (4))){
var inst_62180 = (state_62216[(9)]);
var inst_62180__$1 = (state_62216[(2)]);
var inst_62181 = (inst_62180__$1 == null);
var inst_62182 = cljs.core.not.call(null,inst_62181);
var state_62216__$1 = (function (){var statearr_62221 = state_62216;
(statearr_62221[(9)] = inst_62180__$1);

return statearr_62221;
})();
if(inst_62182){
var statearr_62222_62247 = state_62216__$1;
(statearr_62222_62247[(1)] = (5));

} else {
var statearr_62223_62248 = state_62216__$1;
(statearr_62223_62248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (15))){
var inst_62206 = (state_62216[(2)]);
var state_62216__$1 = state_62216;
var statearr_62224_62249 = state_62216__$1;
(statearr_62224_62249[(2)] = inst_62206);

(statearr_62224_62249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (13))){
var state_62216__$1 = state_62216;
var statearr_62225_62250 = state_62216__$1;
(statearr_62225_62250[(2)] = null);

(statearr_62225_62250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (6))){
var inst_62176 = (state_62216[(8)]);
var inst_62201 = inst_62176.length;
var inst_62202 = (inst_62201 > (0));
var state_62216__$1 = state_62216;
if(cljs.core.truth_(inst_62202)){
var statearr_62226_62251 = state_62216__$1;
(statearr_62226_62251[(1)] = (12));

} else {
var statearr_62227_62252 = state_62216__$1;
(statearr_62227_62252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (3))){
var inst_62214 = (state_62216[(2)]);
var state_62216__$1 = state_62216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62216__$1,inst_62214);
} else {
if((state_val_62217 === (12))){
var inst_62176 = (state_62216[(8)]);
var inst_62204 = cljs.core.vec.call(null,inst_62176);
var state_62216__$1 = state_62216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62216__$1,(15),out,inst_62204);
} else {
if((state_val_62217 === (2))){
var state_62216__$1 = state_62216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62216__$1,(4),ch);
} else {
if((state_val_62217 === (11))){
var inst_62180 = (state_62216[(9)]);
var inst_62184 = (state_62216[(10)]);
var inst_62194 = (state_62216[(2)]);
var inst_62195 = [];
var inst_62196 = inst_62195.push(inst_62180);
var inst_62176 = inst_62195;
var inst_62177 = inst_62184;
var state_62216__$1 = (function (){var statearr_62228 = state_62216;
(statearr_62228[(7)] = inst_62177);

(statearr_62228[(11)] = inst_62194);

(statearr_62228[(12)] = inst_62196);

(statearr_62228[(8)] = inst_62176);

return statearr_62228;
})();
var statearr_62229_62253 = state_62216__$1;
(statearr_62229_62253[(2)] = null);

(statearr_62229_62253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (9))){
var inst_62176 = (state_62216[(8)]);
var inst_62192 = cljs.core.vec.call(null,inst_62176);
var state_62216__$1 = state_62216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62216__$1,(11),out,inst_62192);
} else {
if((state_val_62217 === (5))){
var inst_62177 = (state_62216[(7)]);
var inst_62180 = (state_62216[(9)]);
var inst_62184 = (state_62216[(10)]);
var inst_62184__$1 = f.call(null,inst_62180);
var inst_62185 = cljs.core._EQ_.call(null,inst_62184__$1,inst_62177);
var inst_62186 = cljs.core.keyword_identical_QMARK_.call(null,inst_62177,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62187 = (inst_62185) || (inst_62186);
var state_62216__$1 = (function (){var statearr_62230 = state_62216;
(statearr_62230[(10)] = inst_62184__$1);

return statearr_62230;
})();
if(cljs.core.truth_(inst_62187)){
var statearr_62231_62254 = state_62216__$1;
(statearr_62231_62254[(1)] = (8));

} else {
var statearr_62232_62255 = state_62216__$1;
(statearr_62232_62255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (14))){
var inst_62209 = (state_62216[(2)]);
var inst_62210 = cljs.core.async.close_BANG_.call(null,out);
var state_62216__$1 = (function (){var statearr_62234 = state_62216;
(statearr_62234[(13)] = inst_62209);

return statearr_62234;
})();
var statearr_62235_62256 = state_62216__$1;
(statearr_62235_62256[(2)] = inst_62210);

(statearr_62235_62256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (10))){
var inst_62199 = (state_62216[(2)]);
var state_62216__$1 = state_62216;
var statearr_62236_62257 = state_62216__$1;
(statearr_62236_62257[(2)] = inst_62199);

(statearr_62236_62257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62217 === (8))){
var inst_62180 = (state_62216[(9)]);
var inst_62184 = (state_62216[(10)]);
var inst_62176 = (state_62216[(8)]);
var inst_62189 = inst_62176.push(inst_62180);
var tmp62233 = inst_62176;
var inst_62176__$1 = tmp62233;
var inst_62177 = inst_62184;
var state_62216__$1 = (function (){var statearr_62237 = state_62216;
(statearr_62237[(7)] = inst_62177);

(statearr_62237[(14)] = inst_62189);

(statearr_62237[(8)] = inst_62176__$1);

return statearr_62237;
})();
var statearr_62238_62258 = state_62216__$1;
(statearr_62238_62258[(2)] = null);

(statearr_62238_62258[(1)] = (2));


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
});})(c__30952__auto___62244,out))
;
return ((function (switch__30864__auto__,c__30952__auto___62244,out){
return (function() {
var cljs$core$async$state_machine__30865__auto__ = null;
var cljs$core$async$state_machine__30865__auto____0 = (function (){
var statearr_62239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62239[(0)] = cljs$core$async$state_machine__30865__auto__);

(statearr_62239[(1)] = (1));

return statearr_62239;
});
var cljs$core$async$state_machine__30865__auto____1 = (function (state_62216){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_62216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e62240){if((e62240 instanceof Object)){
var ex__30868__auto__ = e62240;
var statearr_62241_62259 = state_62216;
(statearr_62241_62259[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62260 = state_62216;
state_62216 = G__62260;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
cljs$core$async$state_machine__30865__auto__ = function(state_62216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30865__auto____1.call(this,state_62216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30865__auto____0;
cljs$core$async$state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30865__auto____1;
return cljs$core$async$state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___62244,out))
})();
var state__30954__auto__ = (function (){var statearr_62242 = f__30953__auto__.call(null);
(statearr_62242[(6)] = c__30952__auto___62244);

return statearr_62242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___62244,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513855144359
