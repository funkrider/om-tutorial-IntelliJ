// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24165 = [];
var len__19693__auto___24171 = arguments.length;
var i__19694__auto___24172 = (0);
while(true){
if((i__19694__auto___24172 < len__19693__auto___24171)){
args24165.push((arguments[i__19694__auto___24172]));

var G__24173 = (i__19694__auto___24172 + (1));
i__19694__auto___24172 = G__24173;
continue;
} else {
}
break;
}

var G__24167 = args24165.length;
switch (G__24167) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24165.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24168 = (function (f,blockable,meta24169){
this.f = f;
this.blockable = blockable;
this.meta24169 = meta24169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24170,meta24169__$1){
var self__ = this;
var _24170__$1 = this;
return (new cljs.core.async.t_cljs$core$async24168(self__.f,self__.blockable,meta24169__$1));
});

cljs.core.async.t_cljs$core$async24168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24170){
var self__ = this;
var _24170__$1 = this;
return self__.meta24169;
});

cljs.core.async.t_cljs$core$async24168.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24169","meta24169",-1491441894,null)], null);
});

cljs.core.async.t_cljs$core$async24168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24168";

cljs.core.async.t_cljs$core$async24168.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async24168");
});

cljs.core.async.__GT_t_cljs$core$async24168 = (function cljs$core$async$__GT_t_cljs$core$async24168(f__$1,blockable__$1,meta24169){
return (new cljs.core.async.t_cljs$core$async24168(f__$1,blockable__$1,meta24169));
});

}

return (new cljs.core.async.t_cljs$core$async24168(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args24177 = [];
var len__19693__auto___24180 = arguments.length;
var i__19694__auto___24181 = (0);
while(true){
if((i__19694__auto___24181 < len__19693__auto___24180)){
args24177.push((arguments[i__19694__auto___24181]));

var G__24182 = (i__19694__auto___24181 + (1));
i__19694__auto___24181 = G__24182;
continue;
} else {
}
break;
}

var G__24179 = args24177.length;
switch (G__24179) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24177.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args24184 = [];
var len__19693__auto___24187 = arguments.length;
var i__19694__auto___24188 = (0);
while(true){
if((i__19694__auto___24188 < len__19693__auto___24187)){
args24184.push((arguments[i__19694__auto___24188]));

var G__24189 = (i__19694__auto___24188 + (1));
i__19694__auto___24188 = G__24189;
continue;
} else {
}
break;
}

var G__24186 = args24184.length;
switch (G__24186) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24184.length)].join('')));

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
var args24191 = [];
var len__19693__auto___24194 = arguments.length;
var i__19694__auto___24195 = (0);
while(true){
if((i__19694__auto___24195 < len__19693__auto___24194)){
args24191.push((arguments[i__19694__auto___24195]));

var G__24196 = (i__19694__auto___24195 + (1));
i__19694__auto___24195 = G__24196;
continue;
} else {
}
break;
}

var G__24193 = args24191.length;
switch (G__24193) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24191.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24198 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24198);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24198,ret){
return (function (){
return fn1.call(null,val_24198);
});})(val_24198,ret))
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
var args24199 = [];
var len__19693__auto___24202 = arguments.length;
var i__19694__auto___24203 = (0);
while(true){
if((i__19694__auto___24203 < len__19693__auto___24202)){
args24199.push((arguments[i__19694__auto___24203]));

var G__24204 = (i__19694__auto___24203 + (1));
i__19694__auto___24203 = G__24204;
continue;
} else {
}
break;
}

var G__24201 = args24199.length;
switch (G__24201) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24199.length)].join('')));

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
var n__19533__auto___24206 = n;
var x_24207 = (0);
while(true){
if((x_24207 < n__19533__auto___24206)){
(a[x_24207] = (0));

var G__24208 = (x_24207 + (1));
x_24207 = G__24208;
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

var G__24209 = (i + (1));
i = G__24209;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24213 = (function (alt_flag,flag,meta24214){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24214 = meta24214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24215,meta24214__$1){
var self__ = this;
var _24215__$1 = this;
return (new cljs.core.async.t_cljs$core$async24213(self__.alt_flag,self__.flag,meta24214__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24215){
var self__ = this;
var _24215__$1 = this;
return self__.meta24214;
});})(flag))
;

cljs.core.async.t_cljs$core$async24213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24213.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24214","meta24214",112762347,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24213";

cljs.core.async.t_cljs$core$async24213.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async24213");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24213 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24213(alt_flag__$1,flag__$1,meta24214){
return (new cljs.core.async.t_cljs$core$async24213(alt_flag__$1,flag__$1,meta24214));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24213(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24219 = (function (alt_handler,flag,cb,meta24220){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24220 = meta24220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24221,meta24220__$1){
var self__ = this;
var _24221__$1 = this;
return (new cljs.core.async.t_cljs$core$async24219(self__.alt_handler,self__.flag,self__.cb,meta24220__$1));
});

cljs.core.async.t_cljs$core$async24219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24221){
var self__ = this;
var _24221__$1 = this;
return self__.meta24220;
});

cljs.core.async.t_cljs$core$async24219.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24220","meta24220",367294735,null)], null);
});

cljs.core.async.t_cljs$core$async24219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24219";

cljs.core.async.t_cljs$core$async24219.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async24219");
});

cljs.core.async.__GT_t_cljs$core$async24219 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24219(alt_handler__$1,flag__$1,cb__$1,meta24220){
return (new cljs.core.async.t_cljs$core$async24219(alt_handler__$1,flag__$1,cb__$1,meta24220));
});

}

return (new cljs.core.async.t_cljs$core$async24219(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24222_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24222_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24223_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24223_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18618__auto__ = wport;
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24224 = (i + (1));
i = G__24224;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18618__auto__ = ret;
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18606__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18606__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18606__auto__;
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
var args__19700__auto__ = [];
var len__19693__auto___24230 = arguments.length;
var i__19694__auto___24231 = (0);
while(true){
if((i__19694__auto___24231 < len__19693__auto___24230)){
args__19700__auto__.push((arguments[i__19694__auto___24231]));

var G__24232 = (i__19694__auto___24231 + (1));
i__19694__auto___24231 = G__24232;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((1) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19701__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24227){
var map__24228 = p__24227;
var map__24228__$1 = ((((!((map__24228 == null)))?((((map__24228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24228):map__24228);
var opts = map__24228__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24225){
var G__24226 = cljs.core.first.call(null,seq24225);
var seq24225__$1 = cljs.core.next.call(null,seq24225);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24226,seq24225__$1);
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
var args24233 = [];
var len__19693__auto___24283 = arguments.length;
var i__19694__auto___24284 = (0);
while(true){
if((i__19694__auto___24284 < len__19693__auto___24283)){
args24233.push((arguments[i__19694__auto___24284]));

var G__24285 = (i__19694__auto___24284 + (1));
i__19694__auto___24284 = G__24285;
continue;
} else {
}
break;
}

var G__24235 = args24233.length;
switch (G__24235) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24233.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24120__auto___24287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24287){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___24287){
return (function (state_24259){
var state_val_24260 = (state_24259[(1)]);
if((state_val_24260 === (7))){
var inst_24255 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
var statearr_24261_24288 = state_24259__$1;
(statearr_24261_24288[(2)] = inst_24255);

(statearr_24261_24288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (1))){
var state_24259__$1 = state_24259;
var statearr_24262_24289 = state_24259__$1;
(statearr_24262_24289[(2)] = null);

(statearr_24262_24289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (4))){
var inst_24238 = (state_24259[(7)]);
var inst_24238__$1 = (state_24259[(2)]);
var inst_24239 = (inst_24238__$1 == null);
var state_24259__$1 = (function (){var statearr_24263 = state_24259;
(statearr_24263[(7)] = inst_24238__$1);

return statearr_24263;
})();
if(cljs.core.truth_(inst_24239)){
var statearr_24264_24290 = state_24259__$1;
(statearr_24264_24290[(1)] = (5));

} else {
var statearr_24265_24291 = state_24259__$1;
(statearr_24265_24291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (13))){
var state_24259__$1 = state_24259;
var statearr_24266_24292 = state_24259__$1;
(statearr_24266_24292[(2)] = null);

(statearr_24266_24292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (6))){
var inst_24238 = (state_24259[(7)]);
var state_24259__$1 = state_24259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24259__$1,(11),to,inst_24238);
} else {
if((state_val_24260 === (3))){
var inst_24257 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24259__$1,inst_24257);
} else {
if((state_val_24260 === (12))){
var state_24259__$1 = state_24259;
var statearr_24267_24293 = state_24259__$1;
(statearr_24267_24293[(2)] = null);

(statearr_24267_24293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (2))){
var state_24259__$1 = state_24259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24259__$1,(4),from);
} else {
if((state_val_24260 === (11))){
var inst_24248 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
if(cljs.core.truth_(inst_24248)){
var statearr_24268_24294 = state_24259__$1;
(statearr_24268_24294[(1)] = (12));

} else {
var statearr_24269_24295 = state_24259__$1;
(statearr_24269_24295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (9))){
var state_24259__$1 = state_24259;
var statearr_24270_24296 = state_24259__$1;
(statearr_24270_24296[(2)] = null);

(statearr_24270_24296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (5))){
var state_24259__$1 = state_24259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24271_24297 = state_24259__$1;
(statearr_24271_24297[(1)] = (8));

} else {
var statearr_24272_24298 = state_24259__$1;
(statearr_24272_24298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (14))){
var inst_24253 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
var statearr_24273_24299 = state_24259__$1;
(statearr_24273_24299[(2)] = inst_24253);

(statearr_24273_24299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (10))){
var inst_24245 = (state_24259[(2)]);
var state_24259__$1 = state_24259;
var statearr_24274_24300 = state_24259__$1;
(statearr_24274_24300[(2)] = inst_24245);

(statearr_24274_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24260 === (8))){
var inst_24242 = cljs.core.async.close_BANG_.call(null,to);
var state_24259__$1 = state_24259;
var statearr_24275_24301 = state_24259__$1;
(statearr_24275_24301[(2)] = inst_24242);

(statearr_24275_24301[(1)] = (10));


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
});})(c__24120__auto___24287))
;
return ((function (switch__24008__auto__,c__24120__auto___24287){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_24279 = [null,null,null,null,null,null,null,null];
(statearr_24279[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_24279[(1)] = (1));

return statearr_24279;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_24259){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24280){if((e24280 instanceof Object)){
var ex__24012__auto__ = e24280;
var statearr_24281_24302 = state_24259;
(statearr_24281_24302[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24303 = state_24259;
state_24259 = G__24303;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_24259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_24259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___24287))
})();
var state__24122__auto__ = (function (){var statearr_24282 = f__24121__auto__.call(null);
(statearr_24282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___24287);

return statearr_24282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24287))
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
return (function (p__24491){
var vec__24492 = p__24491;
var v = cljs.core.nth.call(null,vec__24492,(0),null);
var p = cljs.core.nth.call(null,vec__24492,(1),null);
var job = vec__24492;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24120__auto___24678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24678,res,vec__24492,v,p,job,jobs,results){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___24678,res,vec__24492,v,p,job,jobs,results){
return (function (state_24499){
var state_val_24500 = (state_24499[(1)]);
if((state_val_24500 === (1))){
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24499__$1,(2),res,v);
} else {
if((state_val_24500 === (2))){
var inst_24496 = (state_24499[(2)]);
var inst_24497 = cljs.core.async.close_BANG_.call(null,res);
var state_24499__$1 = (function (){var statearr_24501 = state_24499;
(statearr_24501[(7)] = inst_24496);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24499__$1,inst_24497);
} else {
return null;
}
}
});})(c__24120__auto___24678,res,vec__24492,v,p,job,jobs,results))
;
return ((function (switch__24008__auto__,c__24120__auto___24678,res,vec__24492,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0 = (function (){
var statearr_24505 = [null,null,null,null,null,null,null,null];
(statearr_24505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__);

(statearr_24505[(1)] = (1));

return statearr_24505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1 = (function (state_24499){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24506){if((e24506 instanceof Object)){
var ex__24012__auto__ = e24506;
var statearr_24507_24679 = state_24499;
(statearr_24507_24679[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24680 = state_24499;
state_24499 = G__24680;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = function(state_24499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1.call(this,state_24499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___24678,res,vec__24492,v,p,job,jobs,results))
})();
var state__24122__auto__ = (function (){var statearr_24508 = f__24121__auto__.call(null);
(statearr_24508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___24678);

return statearr_24508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24678,res,vec__24492,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24509){
var vec__24510 = p__24509;
var v = cljs.core.nth.call(null,vec__24510,(0),null);
var p = cljs.core.nth.call(null,vec__24510,(1),null);
var job = vec__24510;
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
var n__19533__auto___24681 = n;
var __24682 = (0);
while(true){
if((__24682 < n__19533__auto___24681)){
var G__24513_24683 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24513_24683) {
case "compute":
var c__24120__auto___24685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24682,c__24120__auto___24685,G__24513_24683,n__19533__auto___24681,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (__24682,c__24120__auto___24685,G__24513_24683,n__19533__auto___24681,jobs,results,process,async){
return (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (1))){
var state_24526__$1 = state_24526;
var statearr_24528_24686 = state_24526__$1;
(statearr_24528_24686[(2)] = null);

(statearr_24528_24686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (2))){
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24526__$1,(4),jobs);
} else {
if((state_val_24527 === (3))){
var inst_24524 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24526__$1,inst_24524);
} else {
if((state_val_24527 === (4))){
var inst_24516 = (state_24526[(2)]);
var inst_24517 = process.call(null,inst_24516);
var state_24526__$1 = state_24526;
if(cljs.core.truth_(inst_24517)){
var statearr_24529_24687 = state_24526__$1;
(statearr_24529_24687[(1)] = (5));

} else {
var statearr_24530_24688 = state_24526__$1;
(statearr_24530_24688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (5))){
var state_24526__$1 = state_24526;
var statearr_24531_24689 = state_24526__$1;
(statearr_24531_24689[(2)] = null);

(statearr_24531_24689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (6))){
var state_24526__$1 = state_24526;
var statearr_24532_24690 = state_24526__$1;
(statearr_24532_24690[(2)] = null);

(statearr_24532_24690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (7))){
var inst_24522 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24533_24691 = state_24526__$1;
(statearr_24533_24691[(2)] = inst_24522);

(statearr_24533_24691[(1)] = (3));


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
});})(__24682,c__24120__auto___24685,G__24513_24683,n__19533__auto___24681,jobs,results,process,async))
;
return ((function (__24682,switch__24008__auto__,c__24120__auto___24685,G__24513_24683,n__19533__auto___24681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0 = (function (){
var statearr_24537 = [null,null,null,null,null,null,null];
(statearr_24537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__);

(statearr_24537[(1)] = (1));

return statearr_24537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1 = (function (state_24526){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24538){if((e24538 instanceof Object)){
var ex__24012__auto__ = e24538;
var statearr_24539_24692 = state_24526;
(statearr_24539_24692[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24693 = state_24526;
state_24526 = G__24693;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__;
})()
;})(__24682,switch__24008__auto__,c__24120__auto___24685,G__24513_24683,n__19533__auto___24681,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24540 = f__24121__auto__.call(null);
(statearr_24540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___24685);

return statearr_24540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(__24682,c__24120__auto___24685,G__24513_24683,n__19533__auto___24681,jobs,results,process,async))
);


break;
case "async":
var c__24120__auto___24694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24682,c__24120__auto___24694,G__24513_24683,n__19533__auto___24681,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (__24682,c__24120__auto___24694,G__24513_24683,n__19533__auto___24681,jobs,results,process,async){
return (function (state_24553){
var state_val_24554 = (state_24553[(1)]);
if((state_val_24554 === (1))){
var state_24553__$1 = state_24553;
var statearr_24555_24695 = state_24553__$1;
(statearr_24555_24695[(2)] = null);

(statearr_24555_24695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24554 === (2))){
var state_24553__$1 = state_24553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24553__$1,(4),jobs);
} else {
if((state_val_24554 === (3))){
var inst_24551 = (state_24553[(2)]);
var state_24553__$1 = state_24553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24553__$1,inst_24551);
} else {
if((state_val_24554 === (4))){
var inst_24543 = (state_24553[(2)]);
var inst_24544 = async.call(null,inst_24543);
var state_24553__$1 = state_24553;
if(cljs.core.truth_(inst_24544)){
var statearr_24556_24696 = state_24553__$1;
(statearr_24556_24696[(1)] = (5));

} else {
var statearr_24557_24697 = state_24553__$1;
(statearr_24557_24697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24554 === (5))){
var state_24553__$1 = state_24553;
var statearr_24558_24698 = state_24553__$1;
(statearr_24558_24698[(2)] = null);

(statearr_24558_24698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24554 === (6))){
var state_24553__$1 = state_24553;
var statearr_24559_24699 = state_24553__$1;
(statearr_24559_24699[(2)] = null);

(statearr_24559_24699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24554 === (7))){
var inst_24549 = (state_24553[(2)]);
var state_24553__$1 = state_24553;
var statearr_24560_24700 = state_24553__$1;
(statearr_24560_24700[(2)] = inst_24549);

(statearr_24560_24700[(1)] = (3));


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
});})(__24682,c__24120__auto___24694,G__24513_24683,n__19533__auto___24681,jobs,results,process,async))
;
return ((function (__24682,switch__24008__auto__,c__24120__auto___24694,G__24513_24683,n__19533__auto___24681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0 = (function (){
var statearr_24564 = [null,null,null,null,null,null,null];
(statearr_24564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__);

(statearr_24564[(1)] = (1));

return statearr_24564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1 = (function (state_24553){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24565){if((e24565 instanceof Object)){
var ex__24012__auto__ = e24565;
var statearr_24566_24701 = state_24553;
(statearr_24566_24701[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24702 = state_24553;
state_24553 = G__24702;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = function(state_24553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1.call(this,state_24553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__;
})()
;})(__24682,switch__24008__auto__,c__24120__auto___24694,G__24513_24683,n__19533__auto___24681,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24567 = f__24121__auto__.call(null);
(statearr_24567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___24694);

return statearr_24567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(__24682,c__24120__auto___24694,G__24513_24683,n__19533__auto___24681,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24703 = (__24682 + (1));
__24682 = G__24703;
continue;
} else {
}
break;
}

var c__24120__auto___24704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24704,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___24704,jobs,results,process,async){
return (function (state_24589){
var state_val_24590 = (state_24589[(1)]);
if((state_val_24590 === (1))){
var state_24589__$1 = state_24589;
var statearr_24591_24705 = state_24589__$1;
(statearr_24591_24705[(2)] = null);

(statearr_24591_24705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (2))){
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24589__$1,(4),from);
} else {
if((state_val_24590 === (3))){
var inst_24587 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24589__$1,inst_24587);
} else {
if((state_val_24590 === (4))){
var inst_24570 = (state_24589[(7)]);
var inst_24570__$1 = (state_24589[(2)]);
var inst_24571 = (inst_24570__$1 == null);
var state_24589__$1 = (function (){var statearr_24592 = state_24589;
(statearr_24592[(7)] = inst_24570__$1);

return statearr_24592;
})();
if(cljs.core.truth_(inst_24571)){
var statearr_24593_24706 = state_24589__$1;
(statearr_24593_24706[(1)] = (5));

} else {
var statearr_24594_24707 = state_24589__$1;
(statearr_24594_24707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (5))){
var inst_24573 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24589__$1 = state_24589;
var statearr_24595_24708 = state_24589__$1;
(statearr_24595_24708[(2)] = inst_24573);

(statearr_24595_24708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (6))){
var inst_24575 = (state_24589[(8)]);
var inst_24570 = (state_24589[(7)]);
var inst_24575__$1 = cljs.core.async.chan.call(null,(1));
var inst_24576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24577 = [inst_24570,inst_24575__$1];
var inst_24578 = (new cljs.core.PersistentVector(null,2,(5),inst_24576,inst_24577,null));
var state_24589__$1 = (function (){var statearr_24596 = state_24589;
(statearr_24596[(8)] = inst_24575__$1);

return statearr_24596;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24589__$1,(8),jobs,inst_24578);
} else {
if((state_val_24590 === (7))){
var inst_24585 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24597_24709 = state_24589__$1;
(statearr_24597_24709[(2)] = inst_24585);

(statearr_24597_24709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (8))){
var inst_24575 = (state_24589[(8)]);
var inst_24580 = (state_24589[(2)]);
var state_24589__$1 = (function (){var statearr_24598 = state_24589;
(statearr_24598[(9)] = inst_24580);

return statearr_24598;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24589__$1,(9),results,inst_24575);
} else {
if((state_val_24590 === (9))){
var inst_24582 = (state_24589[(2)]);
var state_24589__$1 = (function (){var statearr_24599 = state_24589;
(statearr_24599[(10)] = inst_24582);

return statearr_24599;
})();
var statearr_24600_24710 = state_24589__$1;
(statearr_24600_24710[(2)] = null);

(statearr_24600_24710[(1)] = (2));


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
});})(c__24120__auto___24704,jobs,results,process,async))
;
return ((function (switch__24008__auto__,c__24120__auto___24704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0 = (function (){
var statearr_24604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__);

(statearr_24604[(1)] = (1));

return statearr_24604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1 = (function (state_24589){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24605){if((e24605 instanceof Object)){
var ex__24012__auto__ = e24605;
var statearr_24606_24711 = state_24589;
(statearr_24606_24711[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24712 = state_24589;
state_24589 = G__24712;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = function(state_24589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1.call(this,state_24589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___24704,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24607 = f__24121__auto__.call(null);
(statearr_24607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___24704);

return statearr_24607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24704,jobs,results,process,async))
);


var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__,jobs,results,process,async){
return (function (state_24645){
var state_val_24646 = (state_24645[(1)]);
if((state_val_24646 === (7))){
var inst_24641 = (state_24645[(2)]);
var state_24645__$1 = state_24645;
var statearr_24647_24713 = state_24645__$1;
(statearr_24647_24713[(2)] = inst_24641);

(statearr_24647_24713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (20))){
var state_24645__$1 = state_24645;
var statearr_24648_24714 = state_24645__$1;
(statearr_24648_24714[(2)] = null);

(statearr_24648_24714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (1))){
var state_24645__$1 = state_24645;
var statearr_24649_24715 = state_24645__$1;
(statearr_24649_24715[(2)] = null);

(statearr_24649_24715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (4))){
var inst_24610 = (state_24645[(7)]);
var inst_24610__$1 = (state_24645[(2)]);
var inst_24611 = (inst_24610__$1 == null);
var state_24645__$1 = (function (){var statearr_24650 = state_24645;
(statearr_24650[(7)] = inst_24610__$1);

return statearr_24650;
})();
if(cljs.core.truth_(inst_24611)){
var statearr_24651_24716 = state_24645__$1;
(statearr_24651_24716[(1)] = (5));

} else {
var statearr_24652_24717 = state_24645__$1;
(statearr_24652_24717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (15))){
var inst_24623 = (state_24645[(8)]);
var state_24645__$1 = state_24645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24645__$1,(18),to,inst_24623);
} else {
if((state_val_24646 === (21))){
var inst_24636 = (state_24645[(2)]);
var state_24645__$1 = state_24645;
var statearr_24653_24718 = state_24645__$1;
(statearr_24653_24718[(2)] = inst_24636);

(statearr_24653_24718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (13))){
var inst_24638 = (state_24645[(2)]);
var state_24645__$1 = (function (){var statearr_24654 = state_24645;
(statearr_24654[(9)] = inst_24638);

return statearr_24654;
})();
var statearr_24655_24719 = state_24645__$1;
(statearr_24655_24719[(2)] = null);

(statearr_24655_24719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (6))){
var inst_24610 = (state_24645[(7)]);
var state_24645__$1 = state_24645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24645__$1,(11),inst_24610);
} else {
if((state_val_24646 === (17))){
var inst_24631 = (state_24645[(2)]);
var state_24645__$1 = state_24645;
if(cljs.core.truth_(inst_24631)){
var statearr_24656_24720 = state_24645__$1;
(statearr_24656_24720[(1)] = (19));

} else {
var statearr_24657_24721 = state_24645__$1;
(statearr_24657_24721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (3))){
var inst_24643 = (state_24645[(2)]);
var state_24645__$1 = state_24645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24645__$1,inst_24643);
} else {
if((state_val_24646 === (12))){
var inst_24620 = (state_24645[(10)]);
var state_24645__$1 = state_24645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24645__$1,(14),inst_24620);
} else {
if((state_val_24646 === (2))){
var state_24645__$1 = state_24645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24645__$1,(4),results);
} else {
if((state_val_24646 === (19))){
var state_24645__$1 = state_24645;
var statearr_24658_24722 = state_24645__$1;
(statearr_24658_24722[(2)] = null);

(statearr_24658_24722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (11))){
var inst_24620 = (state_24645[(2)]);
var state_24645__$1 = (function (){var statearr_24659 = state_24645;
(statearr_24659[(10)] = inst_24620);

return statearr_24659;
})();
var statearr_24660_24723 = state_24645__$1;
(statearr_24660_24723[(2)] = null);

(statearr_24660_24723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (9))){
var state_24645__$1 = state_24645;
var statearr_24661_24724 = state_24645__$1;
(statearr_24661_24724[(2)] = null);

(statearr_24661_24724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (5))){
var state_24645__$1 = state_24645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24662_24725 = state_24645__$1;
(statearr_24662_24725[(1)] = (8));

} else {
var statearr_24663_24726 = state_24645__$1;
(statearr_24663_24726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (14))){
var inst_24623 = (state_24645[(8)]);
var inst_24625 = (state_24645[(11)]);
var inst_24623__$1 = (state_24645[(2)]);
var inst_24624 = (inst_24623__$1 == null);
var inst_24625__$1 = cljs.core.not.call(null,inst_24624);
var state_24645__$1 = (function (){var statearr_24664 = state_24645;
(statearr_24664[(8)] = inst_24623__$1);

(statearr_24664[(11)] = inst_24625__$1);

return statearr_24664;
})();
if(inst_24625__$1){
var statearr_24665_24727 = state_24645__$1;
(statearr_24665_24727[(1)] = (15));

} else {
var statearr_24666_24728 = state_24645__$1;
(statearr_24666_24728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (16))){
var inst_24625 = (state_24645[(11)]);
var state_24645__$1 = state_24645;
var statearr_24667_24729 = state_24645__$1;
(statearr_24667_24729[(2)] = inst_24625);

(statearr_24667_24729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (10))){
var inst_24617 = (state_24645[(2)]);
var state_24645__$1 = state_24645;
var statearr_24668_24730 = state_24645__$1;
(statearr_24668_24730[(2)] = inst_24617);

(statearr_24668_24730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (18))){
var inst_24628 = (state_24645[(2)]);
var state_24645__$1 = state_24645;
var statearr_24669_24731 = state_24645__$1;
(statearr_24669_24731[(2)] = inst_24628);

(statearr_24669_24731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24646 === (8))){
var inst_24614 = cljs.core.async.close_BANG_.call(null,to);
var state_24645__$1 = state_24645;
var statearr_24670_24732 = state_24645__$1;
(statearr_24670_24732[(2)] = inst_24614);

(statearr_24670_24732[(1)] = (10));


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
});})(c__24120__auto__,jobs,results,process,async))
;
return ((function (switch__24008__auto__,c__24120__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0 = (function (){
var statearr_24674 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__);

(statearr_24674[(1)] = (1));

return statearr_24674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1 = (function (state_24645){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24675){if((e24675 instanceof Object)){
var ex__24012__auto__ = e24675;
var statearr_24676_24733 = state_24645;
(statearr_24676_24733[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24734 = state_24645;
state_24645 = G__24734;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__ = function(state_24645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1.call(this,state_24645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24009__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24677 = f__24121__auto__.call(null);
(statearr_24677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_24677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,jobs,results,process,async))
);

return c__24120__auto__;
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
var args24735 = [];
var len__19693__auto___24738 = arguments.length;
var i__19694__auto___24739 = (0);
while(true){
if((i__19694__auto___24739 < len__19693__auto___24738)){
args24735.push((arguments[i__19694__auto___24739]));

var G__24740 = (i__19694__auto___24739 + (1));
i__19694__auto___24739 = G__24740;
continue;
} else {
}
break;
}

var G__24737 = args24735.length;
switch (G__24737) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24735.length)].join('')));

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
var args24742 = [];
var len__19693__auto___24745 = arguments.length;
var i__19694__auto___24746 = (0);
while(true){
if((i__19694__auto___24746 < len__19693__auto___24745)){
args24742.push((arguments[i__19694__auto___24746]));

var G__24747 = (i__19694__auto___24746 + (1));
i__19694__auto___24746 = G__24747;
continue;
} else {
}
break;
}

var G__24744 = args24742.length;
switch (G__24744) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24742.length)].join('')));

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
var args24749 = [];
var len__19693__auto___24802 = arguments.length;
var i__19694__auto___24803 = (0);
while(true){
if((i__19694__auto___24803 < len__19693__auto___24802)){
args24749.push((arguments[i__19694__auto___24803]));

var G__24804 = (i__19694__auto___24803 + (1));
i__19694__auto___24803 = G__24804;
continue;
} else {
}
break;
}

var G__24751 = args24749.length;
switch (G__24751) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24749.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24120__auto___24806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24806,tc,fc){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___24806,tc,fc){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (7))){
var inst_24773 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24779_24807 = state_24777__$1;
(statearr_24779_24807[(2)] = inst_24773);

(statearr_24779_24807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (1))){
var state_24777__$1 = state_24777;
var statearr_24780_24808 = state_24777__$1;
(statearr_24780_24808[(2)] = null);

(statearr_24780_24808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (4))){
var inst_24754 = (state_24777[(7)]);
var inst_24754__$1 = (state_24777[(2)]);
var inst_24755 = (inst_24754__$1 == null);
var state_24777__$1 = (function (){var statearr_24781 = state_24777;
(statearr_24781[(7)] = inst_24754__$1);

return statearr_24781;
})();
if(cljs.core.truth_(inst_24755)){
var statearr_24782_24809 = state_24777__$1;
(statearr_24782_24809[(1)] = (5));

} else {
var statearr_24783_24810 = state_24777__$1;
(statearr_24783_24810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (13))){
var state_24777__$1 = state_24777;
var statearr_24784_24811 = state_24777__$1;
(statearr_24784_24811[(2)] = null);

(statearr_24784_24811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (6))){
var inst_24754 = (state_24777[(7)]);
var inst_24760 = p.call(null,inst_24754);
var state_24777__$1 = state_24777;
if(cljs.core.truth_(inst_24760)){
var statearr_24785_24812 = state_24777__$1;
(statearr_24785_24812[(1)] = (9));

} else {
var statearr_24786_24813 = state_24777__$1;
(statearr_24786_24813[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (3))){
var inst_24775 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
if((state_val_24778 === (12))){
var state_24777__$1 = state_24777;
var statearr_24787_24814 = state_24777__$1;
(statearr_24787_24814[(2)] = null);

(statearr_24787_24814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (2))){
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24777__$1,(4),ch);
} else {
if((state_val_24778 === (11))){
var inst_24754 = (state_24777[(7)]);
var inst_24764 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24777__$1,(8),inst_24764,inst_24754);
} else {
if((state_val_24778 === (9))){
var state_24777__$1 = state_24777;
var statearr_24788_24815 = state_24777__$1;
(statearr_24788_24815[(2)] = tc);

(statearr_24788_24815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (5))){
var inst_24757 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24758 = cljs.core.async.close_BANG_.call(null,fc);
var state_24777__$1 = (function (){var statearr_24789 = state_24777;
(statearr_24789[(8)] = inst_24757);

return statearr_24789;
})();
var statearr_24790_24816 = state_24777__$1;
(statearr_24790_24816[(2)] = inst_24758);

(statearr_24790_24816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (14))){
var inst_24771 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
var statearr_24791_24817 = state_24777__$1;
(statearr_24791_24817[(2)] = inst_24771);

(statearr_24791_24817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (10))){
var state_24777__$1 = state_24777;
var statearr_24792_24818 = state_24777__$1;
(statearr_24792_24818[(2)] = fc);

(statearr_24792_24818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24778 === (8))){
var inst_24766 = (state_24777[(2)]);
var state_24777__$1 = state_24777;
if(cljs.core.truth_(inst_24766)){
var statearr_24793_24819 = state_24777__$1;
(statearr_24793_24819[(1)] = (12));

} else {
var statearr_24794_24820 = state_24777__$1;
(statearr_24794_24820[(1)] = (13));

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
});})(c__24120__auto___24806,tc,fc))
;
return ((function (switch__24008__auto__,c__24120__auto___24806,tc,fc){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_24798 = [null,null,null,null,null,null,null,null,null];
(statearr_24798[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_24798[(1)] = (1));

return statearr_24798;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_24777){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24799){if((e24799 instanceof Object)){
var ex__24012__auto__ = e24799;
var statearr_24800_24821 = state_24777;
(statearr_24800_24821[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24822 = state_24777;
state_24777 = G__24822;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___24806,tc,fc))
})();
var state__24122__auto__ = (function (){var statearr_24801 = f__24121__auto__.call(null);
(statearr_24801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___24806);

return statearr_24801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24806,tc,fc))
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
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_24886){
var state_val_24887 = (state_24886[(1)]);
if((state_val_24887 === (7))){
var inst_24882 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24888_24909 = state_24886__$1;
(statearr_24888_24909[(2)] = inst_24882);

(statearr_24888_24909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (1))){
var inst_24866 = init;
var state_24886__$1 = (function (){var statearr_24889 = state_24886;
(statearr_24889[(7)] = inst_24866);

return statearr_24889;
})();
var statearr_24890_24910 = state_24886__$1;
(statearr_24890_24910[(2)] = null);

(statearr_24890_24910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (4))){
var inst_24869 = (state_24886[(8)]);
var inst_24869__$1 = (state_24886[(2)]);
var inst_24870 = (inst_24869__$1 == null);
var state_24886__$1 = (function (){var statearr_24891 = state_24886;
(statearr_24891[(8)] = inst_24869__$1);

return statearr_24891;
})();
if(cljs.core.truth_(inst_24870)){
var statearr_24892_24911 = state_24886__$1;
(statearr_24892_24911[(1)] = (5));

} else {
var statearr_24893_24912 = state_24886__$1;
(statearr_24893_24912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (6))){
var inst_24866 = (state_24886[(7)]);
var inst_24873 = (state_24886[(9)]);
var inst_24869 = (state_24886[(8)]);
var inst_24873__$1 = f.call(null,inst_24866,inst_24869);
var inst_24874 = cljs.core.reduced_QMARK_.call(null,inst_24873__$1);
var state_24886__$1 = (function (){var statearr_24894 = state_24886;
(statearr_24894[(9)] = inst_24873__$1);

return statearr_24894;
})();
if(inst_24874){
var statearr_24895_24913 = state_24886__$1;
(statearr_24895_24913[(1)] = (8));

} else {
var statearr_24896_24914 = state_24886__$1;
(statearr_24896_24914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (3))){
var inst_24884 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24886__$1,inst_24884);
} else {
if((state_val_24887 === (2))){
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24886__$1,(4),ch);
} else {
if((state_val_24887 === (9))){
var inst_24873 = (state_24886[(9)]);
var inst_24866 = inst_24873;
var state_24886__$1 = (function (){var statearr_24897 = state_24886;
(statearr_24897[(7)] = inst_24866);

return statearr_24897;
})();
var statearr_24898_24915 = state_24886__$1;
(statearr_24898_24915[(2)] = null);

(statearr_24898_24915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (5))){
var inst_24866 = (state_24886[(7)]);
var state_24886__$1 = state_24886;
var statearr_24899_24916 = state_24886__$1;
(statearr_24899_24916[(2)] = inst_24866);

(statearr_24899_24916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (10))){
var inst_24880 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24900_24917 = state_24886__$1;
(statearr_24900_24917[(2)] = inst_24880);

(statearr_24900_24917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (8))){
var inst_24873 = (state_24886[(9)]);
var inst_24876 = cljs.core.deref.call(null,inst_24873);
var state_24886__$1 = state_24886;
var statearr_24901_24918 = state_24886__$1;
(statearr_24901_24918[(2)] = inst_24876);

(statearr_24901_24918[(1)] = (10));


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
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24009__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24009__auto____0 = (function (){
var statearr_24905 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24905[(0)] = cljs$core$async$reduce_$_state_machine__24009__auto__);

(statearr_24905[(1)] = (1));

return statearr_24905;
});
var cljs$core$async$reduce_$_state_machine__24009__auto____1 = (function (state_24886){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24906){if((e24906 instanceof Object)){
var ex__24012__auto__ = e24906;
var statearr_24907_24919 = state_24886;
(statearr_24907_24919[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24920 = state_24886;
state_24886 = G__24920;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24009__auto__ = function(state_24886){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24009__auto____1.call(this,state_24886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24009__auto____0;
cljs$core$async$reduce_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24009__auto____1;
return cljs$core$async$reduce_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_24908 = f__24121__auto__.call(null);
(statearr_24908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_24908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
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
var args24921 = [];
var len__19693__auto___24973 = arguments.length;
var i__19694__auto___24974 = (0);
while(true){
if((i__19694__auto___24974 < len__19693__auto___24973)){
args24921.push((arguments[i__19694__auto___24974]));

var G__24975 = (i__19694__auto___24974 + (1));
i__19694__auto___24974 = G__24975;
continue;
} else {
}
break;
}

var G__24923 = args24921.length;
switch (G__24923) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24921.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_24948){
var state_val_24949 = (state_24948[(1)]);
if((state_val_24949 === (7))){
var inst_24930 = (state_24948[(2)]);
var state_24948__$1 = state_24948;
var statearr_24950_24977 = state_24948__$1;
(statearr_24950_24977[(2)] = inst_24930);

(statearr_24950_24977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (1))){
var inst_24924 = cljs.core.seq.call(null,coll);
var inst_24925 = inst_24924;
var state_24948__$1 = (function (){var statearr_24951 = state_24948;
(statearr_24951[(7)] = inst_24925);

return statearr_24951;
})();
var statearr_24952_24978 = state_24948__$1;
(statearr_24952_24978[(2)] = null);

(statearr_24952_24978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (4))){
var inst_24925 = (state_24948[(7)]);
var inst_24928 = cljs.core.first.call(null,inst_24925);
var state_24948__$1 = state_24948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24948__$1,(7),ch,inst_24928);
} else {
if((state_val_24949 === (13))){
var inst_24942 = (state_24948[(2)]);
var state_24948__$1 = state_24948;
var statearr_24953_24979 = state_24948__$1;
(statearr_24953_24979[(2)] = inst_24942);

(statearr_24953_24979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (6))){
var inst_24933 = (state_24948[(2)]);
var state_24948__$1 = state_24948;
if(cljs.core.truth_(inst_24933)){
var statearr_24954_24980 = state_24948__$1;
(statearr_24954_24980[(1)] = (8));

} else {
var statearr_24955_24981 = state_24948__$1;
(statearr_24955_24981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (3))){
var inst_24946 = (state_24948[(2)]);
var state_24948__$1 = state_24948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24948__$1,inst_24946);
} else {
if((state_val_24949 === (12))){
var state_24948__$1 = state_24948;
var statearr_24956_24982 = state_24948__$1;
(statearr_24956_24982[(2)] = null);

(statearr_24956_24982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (2))){
var inst_24925 = (state_24948[(7)]);
var state_24948__$1 = state_24948;
if(cljs.core.truth_(inst_24925)){
var statearr_24957_24983 = state_24948__$1;
(statearr_24957_24983[(1)] = (4));

} else {
var statearr_24958_24984 = state_24948__$1;
(statearr_24958_24984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (11))){
var inst_24939 = cljs.core.async.close_BANG_.call(null,ch);
var state_24948__$1 = state_24948;
var statearr_24959_24985 = state_24948__$1;
(statearr_24959_24985[(2)] = inst_24939);

(statearr_24959_24985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (9))){
var state_24948__$1 = state_24948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24960_24986 = state_24948__$1;
(statearr_24960_24986[(1)] = (11));

} else {
var statearr_24961_24987 = state_24948__$1;
(statearr_24961_24987[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (5))){
var inst_24925 = (state_24948[(7)]);
var state_24948__$1 = state_24948;
var statearr_24962_24988 = state_24948__$1;
(statearr_24962_24988[(2)] = inst_24925);

(statearr_24962_24988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (10))){
var inst_24944 = (state_24948[(2)]);
var state_24948__$1 = state_24948;
var statearr_24963_24989 = state_24948__$1;
(statearr_24963_24989[(2)] = inst_24944);

(statearr_24963_24989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24949 === (8))){
var inst_24925 = (state_24948[(7)]);
var inst_24935 = cljs.core.next.call(null,inst_24925);
var inst_24925__$1 = inst_24935;
var state_24948__$1 = (function (){var statearr_24964 = state_24948;
(statearr_24964[(7)] = inst_24925__$1);

return statearr_24964;
})();
var statearr_24965_24990 = state_24948__$1;
(statearr_24965_24990[(2)] = null);

(statearr_24965_24990[(1)] = (2));


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
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_24969 = [null,null,null,null,null,null,null,null];
(statearr_24969[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_24969[(1)] = (1));

return statearr_24969;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_24948){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_24948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e24970){if((e24970 instanceof Object)){
var ex__24012__auto__ = e24970;
var statearr_24971_24991 = state_24948;
(statearr_24971_24991[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24992 = state_24948;
state_24948 = G__24992;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_24948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_24948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_24972 = f__24121__auto__.call(null);
(statearr_24972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_24972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
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
var x__19281__auto__ = (((_ == null))?null:_);
var m__19282__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,_);
} else {
var m__19282__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,_);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19282__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m,ch);
} else {
var m__19282__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m,ch);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m);
} else {
var m__19282__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25218 = (function (mult,ch,cs,meta25219){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25219 = meta25219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25220,meta25219__$1){
var self__ = this;
var _25220__$1 = this;
return (new cljs.core.async.t_cljs$core$async25218(self__.mult,self__.ch,self__.cs,meta25219__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25220){
var self__ = this;
var _25220__$1 = this;
return self__.meta25219;
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25219","meta25219",1354289961,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25218";

cljs.core.async.t_cljs$core$async25218.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async25218");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25218 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25218(mult__$1,ch__$1,cs__$1,meta25219){
return (new cljs.core.async.t_cljs$core$async25218(mult__$1,ch__$1,cs__$1,meta25219));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25218(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24120__auto___25443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25443,cs,m,dchan,dctr,done){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___25443,cs,m,dchan,dctr,done){
return (function (state_25355){
var state_val_25356 = (state_25355[(1)]);
if((state_val_25356 === (7))){
var inst_25351 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25357_25444 = state_25355__$1;
(statearr_25357_25444[(2)] = inst_25351);

(statearr_25357_25444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (20))){
var inst_25254 = (state_25355[(7)]);
var inst_25266 = cljs.core.first.call(null,inst_25254);
var inst_25267 = cljs.core.nth.call(null,inst_25266,(0),null);
var inst_25268 = cljs.core.nth.call(null,inst_25266,(1),null);
var state_25355__$1 = (function (){var statearr_25358 = state_25355;
(statearr_25358[(8)] = inst_25267);

return statearr_25358;
})();
if(cljs.core.truth_(inst_25268)){
var statearr_25359_25445 = state_25355__$1;
(statearr_25359_25445[(1)] = (22));

} else {
var statearr_25360_25446 = state_25355__$1;
(statearr_25360_25446[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (27))){
var inst_25296 = (state_25355[(9)]);
var inst_25298 = (state_25355[(10)]);
var inst_25223 = (state_25355[(11)]);
var inst_25303 = (state_25355[(12)]);
var inst_25303__$1 = cljs.core._nth.call(null,inst_25296,inst_25298);
var inst_25304 = cljs.core.async.put_BANG_.call(null,inst_25303__$1,inst_25223,done);
var state_25355__$1 = (function (){var statearr_25361 = state_25355;
(statearr_25361[(12)] = inst_25303__$1);

return statearr_25361;
})();
if(cljs.core.truth_(inst_25304)){
var statearr_25362_25447 = state_25355__$1;
(statearr_25362_25447[(1)] = (30));

} else {
var statearr_25363_25448 = state_25355__$1;
(statearr_25363_25448[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (1))){
var state_25355__$1 = state_25355;
var statearr_25364_25449 = state_25355__$1;
(statearr_25364_25449[(2)] = null);

(statearr_25364_25449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (24))){
var inst_25254 = (state_25355[(7)]);
var inst_25273 = (state_25355[(2)]);
var inst_25274 = cljs.core.next.call(null,inst_25254);
var inst_25232 = inst_25274;
var inst_25233 = null;
var inst_25234 = (0);
var inst_25235 = (0);
var state_25355__$1 = (function (){var statearr_25365 = state_25355;
(statearr_25365[(13)] = inst_25234);

(statearr_25365[(14)] = inst_25235);

(statearr_25365[(15)] = inst_25232);

(statearr_25365[(16)] = inst_25233);

(statearr_25365[(17)] = inst_25273);

return statearr_25365;
})();
var statearr_25366_25450 = state_25355__$1;
(statearr_25366_25450[(2)] = null);

(statearr_25366_25450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (39))){
var state_25355__$1 = state_25355;
var statearr_25370_25451 = state_25355__$1;
(statearr_25370_25451[(2)] = null);

(statearr_25370_25451[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (4))){
var inst_25223 = (state_25355[(11)]);
var inst_25223__$1 = (state_25355[(2)]);
var inst_25224 = (inst_25223__$1 == null);
var state_25355__$1 = (function (){var statearr_25371 = state_25355;
(statearr_25371[(11)] = inst_25223__$1);

return statearr_25371;
})();
if(cljs.core.truth_(inst_25224)){
var statearr_25372_25452 = state_25355__$1;
(statearr_25372_25452[(1)] = (5));

} else {
var statearr_25373_25453 = state_25355__$1;
(statearr_25373_25453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (15))){
var inst_25234 = (state_25355[(13)]);
var inst_25235 = (state_25355[(14)]);
var inst_25232 = (state_25355[(15)]);
var inst_25233 = (state_25355[(16)]);
var inst_25250 = (state_25355[(2)]);
var inst_25251 = (inst_25235 + (1));
var tmp25367 = inst_25234;
var tmp25368 = inst_25232;
var tmp25369 = inst_25233;
var inst_25232__$1 = tmp25368;
var inst_25233__$1 = tmp25369;
var inst_25234__$1 = tmp25367;
var inst_25235__$1 = inst_25251;
var state_25355__$1 = (function (){var statearr_25374 = state_25355;
(statearr_25374[(13)] = inst_25234__$1);

(statearr_25374[(14)] = inst_25235__$1);

(statearr_25374[(18)] = inst_25250);

(statearr_25374[(15)] = inst_25232__$1);

(statearr_25374[(16)] = inst_25233__$1);

return statearr_25374;
})();
var statearr_25375_25454 = state_25355__$1;
(statearr_25375_25454[(2)] = null);

(statearr_25375_25454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (21))){
var inst_25277 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25379_25455 = state_25355__$1;
(statearr_25379_25455[(2)] = inst_25277);

(statearr_25379_25455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (31))){
var inst_25303 = (state_25355[(12)]);
var inst_25307 = done.call(null,null);
var inst_25308 = cljs.core.async.untap_STAR_.call(null,m,inst_25303);
var state_25355__$1 = (function (){var statearr_25380 = state_25355;
(statearr_25380[(19)] = inst_25307);

return statearr_25380;
})();
var statearr_25381_25456 = state_25355__$1;
(statearr_25381_25456[(2)] = inst_25308);

(statearr_25381_25456[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (32))){
var inst_25296 = (state_25355[(9)]);
var inst_25298 = (state_25355[(10)]);
var inst_25297 = (state_25355[(20)]);
var inst_25295 = (state_25355[(21)]);
var inst_25310 = (state_25355[(2)]);
var inst_25311 = (inst_25298 + (1));
var tmp25376 = inst_25296;
var tmp25377 = inst_25297;
var tmp25378 = inst_25295;
var inst_25295__$1 = tmp25378;
var inst_25296__$1 = tmp25376;
var inst_25297__$1 = tmp25377;
var inst_25298__$1 = inst_25311;
var state_25355__$1 = (function (){var statearr_25382 = state_25355;
(statearr_25382[(9)] = inst_25296__$1);

(statearr_25382[(10)] = inst_25298__$1);

(statearr_25382[(20)] = inst_25297__$1);

(statearr_25382[(22)] = inst_25310);

(statearr_25382[(21)] = inst_25295__$1);

return statearr_25382;
})();
var statearr_25383_25457 = state_25355__$1;
(statearr_25383_25457[(2)] = null);

(statearr_25383_25457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (40))){
var inst_25323 = (state_25355[(23)]);
var inst_25327 = done.call(null,null);
var inst_25328 = cljs.core.async.untap_STAR_.call(null,m,inst_25323);
var state_25355__$1 = (function (){var statearr_25384 = state_25355;
(statearr_25384[(24)] = inst_25327);

return statearr_25384;
})();
var statearr_25385_25458 = state_25355__$1;
(statearr_25385_25458[(2)] = inst_25328);

(statearr_25385_25458[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (33))){
var inst_25314 = (state_25355[(25)]);
var inst_25316 = cljs.core.chunked_seq_QMARK_.call(null,inst_25314);
var state_25355__$1 = state_25355;
if(inst_25316){
var statearr_25386_25459 = state_25355__$1;
(statearr_25386_25459[(1)] = (36));

} else {
var statearr_25387_25460 = state_25355__$1;
(statearr_25387_25460[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (13))){
var inst_25244 = (state_25355[(26)]);
var inst_25247 = cljs.core.async.close_BANG_.call(null,inst_25244);
var state_25355__$1 = state_25355;
var statearr_25388_25461 = state_25355__$1;
(statearr_25388_25461[(2)] = inst_25247);

(statearr_25388_25461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (22))){
var inst_25267 = (state_25355[(8)]);
var inst_25270 = cljs.core.async.close_BANG_.call(null,inst_25267);
var state_25355__$1 = state_25355;
var statearr_25389_25462 = state_25355__$1;
(statearr_25389_25462[(2)] = inst_25270);

(statearr_25389_25462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (36))){
var inst_25314 = (state_25355[(25)]);
var inst_25318 = cljs.core.chunk_first.call(null,inst_25314);
var inst_25319 = cljs.core.chunk_rest.call(null,inst_25314);
var inst_25320 = cljs.core.count.call(null,inst_25318);
var inst_25295 = inst_25319;
var inst_25296 = inst_25318;
var inst_25297 = inst_25320;
var inst_25298 = (0);
var state_25355__$1 = (function (){var statearr_25390 = state_25355;
(statearr_25390[(9)] = inst_25296);

(statearr_25390[(10)] = inst_25298);

(statearr_25390[(20)] = inst_25297);

(statearr_25390[(21)] = inst_25295);

return statearr_25390;
})();
var statearr_25391_25463 = state_25355__$1;
(statearr_25391_25463[(2)] = null);

(statearr_25391_25463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (41))){
var inst_25314 = (state_25355[(25)]);
var inst_25330 = (state_25355[(2)]);
var inst_25331 = cljs.core.next.call(null,inst_25314);
var inst_25295 = inst_25331;
var inst_25296 = null;
var inst_25297 = (0);
var inst_25298 = (0);
var state_25355__$1 = (function (){var statearr_25392 = state_25355;
(statearr_25392[(9)] = inst_25296);

(statearr_25392[(10)] = inst_25298);

(statearr_25392[(20)] = inst_25297);

(statearr_25392[(21)] = inst_25295);

(statearr_25392[(27)] = inst_25330);

return statearr_25392;
})();
var statearr_25393_25464 = state_25355__$1;
(statearr_25393_25464[(2)] = null);

(statearr_25393_25464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (43))){
var state_25355__$1 = state_25355;
var statearr_25394_25465 = state_25355__$1;
(statearr_25394_25465[(2)] = null);

(statearr_25394_25465[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (29))){
var inst_25339 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25395_25466 = state_25355__$1;
(statearr_25395_25466[(2)] = inst_25339);

(statearr_25395_25466[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (44))){
var inst_25348 = (state_25355[(2)]);
var state_25355__$1 = (function (){var statearr_25396 = state_25355;
(statearr_25396[(28)] = inst_25348);

return statearr_25396;
})();
var statearr_25397_25467 = state_25355__$1;
(statearr_25397_25467[(2)] = null);

(statearr_25397_25467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (6))){
var inst_25287 = (state_25355[(29)]);
var inst_25286 = cljs.core.deref.call(null,cs);
var inst_25287__$1 = cljs.core.keys.call(null,inst_25286);
var inst_25288 = cljs.core.count.call(null,inst_25287__$1);
var inst_25289 = cljs.core.reset_BANG_.call(null,dctr,inst_25288);
var inst_25294 = cljs.core.seq.call(null,inst_25287__$1);
var inst_25295 = inst_25294;
var inst_25296 = null;
var inst_25297 = (0);
var inst_25298 = (0);
var state_25355__$1 = (function (){var statearr_25398 = state_25355;
(statearr_25398[(9)] = inst_25296);

(statearr_25398[(10)] = inst_25298);

(statearr_25398[(20)] = inst_25297);

(statearr_25398[(30)] = inst_25289);

(statearr_25398[(21)] = inst_25295);

(statearr_25398[(29)] = inst_25287__$1);

return statearr_25398;
})();
var statearr_25399_25468 = state_25355__$1;
(statearr_25399_25468[(2)] = null);

(statearr_25399_25468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (28))){
var inst_25314 = (state_25355[(25)]);
var inst_25295 = (state_25355[(21)]);
var inst_25314__$1 = cljs.core.seq.call(null,inst_25295);
var state_25355__$1 = (function (){var statearr_25400 = state_25355;
(statearr_25400[(25)] = inst_25314__$1);

return statearr_25400;
})();
if(inst_25314__$1){
var statearr_25401_25469 = state_25355__$1;
(statearr_25401_25469[(1)] = (33));

} else {
var statearr_25402_25470 = state_25355__$1;
(statearr_25402_25470[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (25))){
var inst_25298 = (state_25355[(10)]);
var inst_25297 = (state_25355[(20)]);
var inst_25300 = (inst_25298 < inst_25297);
var inst_25301 = inst_25300;
var state_25355__$1 = state_25355;
if(cljs.core.truth_(inst_25301)){
var statearr_25403_25471 = state_25355__$1;
(statearr_25403_25471[(1)] = (27));

} else {
var statearr_25404_25472 = state_25355__$1;
(statearr_25404_25472[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (34))){
var state_25355__$1 = state_25355;
var statearr_25405_25473 = state_25355__$1;
(statearr_25405_25473[(2)] = null);

(statearr_25405_25473[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (17))){
var state_25355__$1 = state_25355;
var statearr_25406_25474 = state_25355__$1;
(statearr_25406_25474[(2)] = null);

(statearr_25406_25474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (3))){
var inst_25353 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25355__$1,inst_25353);
} else {
if((state_val_25356 === (12))){
var inst_25282 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25407_25475 = state_25355__$1;
(statearr_25407_25475[(2)] = inst_25282);

(statearr_25407_25475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (2))){
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25355__$1,(4),ch);
} else {
if((state_val_25356 === (23))){
var state_25355__$1 = state_25355;
var statearr_25408_25476 = state_25355__$1;
(statearr_25408_25476[(2)] = null);

(statearr_25408_25476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (35))){
var inst_25337 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25409_25477 = state_25355__$1;
(statearr_25409_25477[(2)] = inst_25337);

(statearr_25409_25477[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (19))){
var inst_25254 = (state_25355[(7)]);
var inst_25258 = cljs.core.chunk_first.call(null,inst_25254);
var inst_25259 = cljs.core.chunk_rest.call(null,inst_25254);
var inst_25260 = cljs.core.count.call(null,inst_25258);
var inst_25232 = inst_25259;
var inst_25233 = inst_25258;
var inst_25234 = inst_25260;
var inst_25235 = (0);
var state_25355__$1 = (function (){var statearr_25410 = state_25355;
(statearr_25410[(13)] = inst_25234);

(statearr_25410[(14)] = inst_25235);

(statearr_25410[(15)] = inst_25232);

(statearr_25410[(16)] = inst_25233);

return statearr_25410;
})();
var statearr_25411_25478 = state_25355__$1;
(statearr_25411_25478[(2)] = null);

(statearr_25411_25478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (11))){
var inst_25232 = (state_25355[(15)]);
var inst_25254 = (state_25355[(7)]);
var inst_25254__$1 = cljs.core.seq.call(null,inst_25232);
var state_25355__$1 = (function (){var statearr_25412 = state_25355;
(statearr_25412[(7)] = inst_25254__$1);

return statearr_25412;
})();
if(inst_25254__$1){
var statearr_25413_25479 = state_25355__$1;
(statearr_25413_25479[(1)] = (16));

} else {
var statearr_25414_25480 = state_25355__$1;
(statearr_25414_25480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (9))){
var inst_25284 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25415_25481 = state_25355__$1;
(statearr_25415_25481[(2)] = inst_25284);

(statearr_25415_25481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (5))){
var inst_25230 = cljs.core.deref.call(null,cs);
var inst_25231 = cljs.core.seq.call(null,inst_25230);
var inst_25232 = inst_25231;
var inst_25233 = null;
var inst_25234 = (0);
var inst_25235 = (0);
var state_25355__$1 = (function (){var statearr_25416 = state_25355;
(statearr_25416[(13)] = inst_25234);

(statearr_25416[(14)] = inst_25235);

(statearr_25416[(15)] = inst_25232);

(statearr_25416[(16)] = inst_25233);

return statearr_25416;
})();
var statearr_25417_25482 = state_25355__$1;
(statearr_25417_25482[(2)] = null);

(statearr_25417_25482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (14))){
var state_25355__$1 = state_25355;
var statearr_25418_25483 = state_25355__$1;
(statearr_25418_25483[(2)] = null);

(statearr_25418_25483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (45))){
var inst_25345 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25419_25484 = state_25355__$1;
(statearr_25419_25484[(2)] = inst_25345);

(statearr_25419_25484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (26))){
var inst_25287 = (state_25355[(29)]);
var inst_25341 = (state_25355[(2)]);
var inst_25342 = cljs.core.seq.call(null,inst_25287);
var state_25355__$1 = (function (){var statearr_25420 = state_25355;
(statearr_25420[(31)] = inst_25341);

return statearr_25420;
})();
if(inst_25342){
var statearr_25421_25485 = state_25355__$1;
(statearr_25421_25485[(1)] = (42));

} else {
var statearr_25422_25486 = state_25355__$1;
(statearr_25422_25486[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (16))){
var inst_25254 = (state_25355[(7)]);
var inst_25256 = cljs.core.chunked_seq_QMARK_.call(null,inst_25254);
var state_25355__$1 = state_25355;
if(inst_25256){
var statearr_25423_25487 = state_25355__$1;
(statearr_25423_25487[(1)] = (19));

} else {
var statearr_25424_25488 = state_25355__$1;
(statearr_25424_25488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (38))){
var inst_25334 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25425_25489 = state_25355__$1;
(statearr_25425_25489[(2)] = inst_25334);

(statearr_25425_25489[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (30))){
var state_25355__$1 = state_25355;
var statearr_25426_25490 = state_25355__$1;
(statearr_25426_25490[(2)] = null);

(statearr_25426_25490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (10))){
var inst_25235 = (state_25355[(14)]);
var inst_25233 = (state_25355[(16)]);
var inst_25243 = cljs.core._nth.call(null,inst_25233,inst_25235);
var inst_25244 = cljs.core.nth.call(null,inst_25243,(0),null);
var inst_25245 = cljs.core.nth.call(null,inst_25243,(1),null);
var state_25355__$1 = (function (){var statearr_25427 = state_25355;
(statearr_25427[(26)] = inst_25244);

return statearr_25427;
})();
if(cljs.core.truth_(inst_25245)){
var statearr_25428_25491 = state_25355__$1;
(statearr_25428_25491[(1)] = (13));

} else {
var statearr_25429_25492 = state_25355__$1;
(statearr_25429_25492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (18))){
var inst_25280 = (state_25355[(2)]);
var state_25355__$1 = state_25355;
var statearr_25430_25493 = state_25355__$1;
(statearr_25430_25493[(2)] = inst_25280);

(statearr_25430_25493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (42))){
var state_25355__$1 = state_25355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25355__$1,(45),dchan);
} else {
if((state_val_25356 === (37))){
var inst_25314 = (state_25355[(25)]);
var inst_25223 = (state_25355[(11)]);
var inst_25323 = (state_25355[(23)]);
var inst_25323__$1 = cljs.core.first.call(null,inst_25314);
var inst_25324 = cljs.core.async.put_BANG_.call(null,inst_25323__$1,inst_25223,done);
var state_25355__$1 = (function (){var statearr_25431 = state_25355;
(statearr_25431[(23)] = inst_25323__$1);

return statearr_25431;
})();
if(cljs.core.truth_(inst_25324)){
var statearr_25432_25494 = state_25355__$1;
(statearr_25432_25494[(1)] = (39));

} else {
var statearr_25433_25495 = state_25355__$1;
(statearr_25433_25495[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25356 === (8))){
var inst_25234 = (state_25355[(13)]);
var inst_25235 = (state_25355[(14)]);
var inst_25237 = (inst_25235 < inst_25234);
var inst_25238 = inst_25237;
var state_25355__$1 = state_25355;
if(cljs.core.truth_(inst_25238)){
var statearr_25434_25496 = state_25355__$1;
(statearr_25434_25496[(1)] = (10));

} else {
var statearr_25435_25497 = state_25355__$1;
(statearr_25435_25497[(1)] = (11));

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
});})(c__24120__auto___25443,cs,m,dchan,dctr,done))
;
return ((function (switch__24008__auto__,c__24120__auto___25443,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24009__auto__ = null;
var cljs$core$async$mult_$_state_machine__24009__auto____0 = (function (){
var statearr_25439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25439[(0)] = cljs$core$async$mult_$_state_machine__24009__auto__);

(statearr_25439[(1)] = (1));

return statearr_25439;
});
var cljs$core$async$mult_$_state_machine__24009__auto____1 = (function (state_25355){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_25355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e25440){if((e25440 instanceof Object)){
var ex__24012__auto__ = e25440;
var statearr_25441_25498 = state_25355;
(statearr_25441_25498[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25499 = state_25355;
state_25355 = G__25499;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24009__auto__ = function(state_25355){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24009__auto____1.call(this,state_25355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24009__auto____0;
cljs$core$async$mult_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24009__auto____1;
return cljs$core$async$mult_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___25443,cs,m,dchan,dctr,done))
})();
var state__24122__auto__ = (function (){var statearr_25442 = f__24121__auto__.call(null);
(statearr_25442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___25443);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25443,cs,m,dchan,dctr,done))
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
var args25500 = [];
var len__19693__auto___25503 = arguments.length;
var i__19694__auto___25504 = (0);
while(true){
if((i__19694__auto___25504 < len__19693__auto___25503)){
args25500.push((arguments[i__19694__auto___25504]));

var G__25505 = (i__19694__auto___25504 + (1));
i__19694__auto___25504 = G__25505;
continue;
} else {
}
break;
}

var G__25502 = args25500.length;
switch (G__25502) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25500.length)].join('')));

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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m,ch);
} else {
var m__19282__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m,ch);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m,ch);
} else {
var m__19282__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m,ch);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m);
} else {
var m__19282__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m,state_map);
} else {
var m__19282__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m,state_map);
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
var x__19281__auto__ = (((m == null))?null:m);
var m__19282__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,m,mode);
} else {
var m__19282__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19700__auto__ = [];
var len__19693__auto___25517 = arguments.length;
var i__19694__auto___25518 = (0);
while(true){
if((i__19694__auto___25518 < len__19693__auto___25517)){
args__19700__auto__.push((arguments[i__19694__auto___25518]));

var G__25519 = (i__19694__auto___25518 + (1));
i__19694__auto___25518 = G__25519;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((3) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19701__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25511){
var map__25512 = p__25511;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var opts = map__25512__$1;
var statearr_25514_25520 = state;
(statearr_25514_25520[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25512,map__25512__$1,opts){
return (function (val){
var statearr_25515_25521 = state;
(statearr_25515_25521[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25512,map__25512__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25516_25522 = state;
(statearr_25516_25522[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25507){
var G__25508 = cljs.core.first.call(null,seq25507);
var seq25507__$1 = cljs.core.next.call(null,seq25507);
var G__25509 = cljs.core.first.call(null,seq25507__$1);
var seq25507__$2 = cljs.core.next.call(null,seq25507__$1);
var G__25510 = cljs.core.first.call(null,seq25507__$2);
var seq25507__$3 = cljs.core.next.call(null,seq25507__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25508,G__25509,G__25510,seq25507__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25688 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25689){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25689 = meta25689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25690,meta25689__$1){
var self__ = this;
var _25690__$1 = this;
return (new cljs.core.async.t_cljs$core$async25688(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25689__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25690){
var self__ = this;
var _25690__$1 = this;
return self__.meta25689;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25689","meta25689",496532536,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25688";

cljs.core.async.t_cljs$core$async25688.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async25688");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25688 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25688(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25689){
return (new cljs.core.async.t_cljs$core$async25688(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25689));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25688(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24120__auto___25853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___25853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25790){
var state_val_25791 = (state_25790[(1)]);
if((state_val_25791 === (7))){
var inst_25706 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25792_25854 = state_25790__$1;
(statearr_25792_25854[(2)] = inst_25706);

(statearr_25792_25854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (20))){
var inst_25718 = (state_25790[(7)]);
var state_25790__$1 = state_25790;
var statearr_25793_25855 = state_25790__$1;
(statearr_25793_25855[(2)] = inst_25718);

(statearr_25793_25855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (27))){
var state_25790__$1 = state_25790;
var statearr_25794_25856 = state_25790__$1;
(statearr_25794_25856[(2)] = null);

(statearr_25794_25856[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (1))){
var inst_25694 = (state_25790[(8)]);
var inst_25694__$1 = calc_state.call(null);
var inst_25696 = (inst_25694__$1 == null);
var inst_25697 = cljs.core.not.call(null,inst_25696);
var state_25790__$1 = (function (){var statearr_25795 = state_25790;
(statearr_25795[(8)] = inst_25694__$1);

return statearr_25795;
})();
if(inst_25697){
var statearr_25796_25857 = state_25790__$1;
(statearr_25796_25857[(1)] = (2));

} else {
var statearr_25797_25858 = state_25790__$1;
(statearr_25797_25858[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (24))){
var inst_25750 = (state_25790[(9)]);
var inst_25741 = (state_25790[(10)]);
var inst_25764 = (state_25790[(11)]);
var inst_25764__$1 = inst_25741.call(null,inst_25750);
var state_25790__$1 = (function (){var statearr_25798 = state_25790;
(statearr_25798[(11)] = inst_25764__$1);

return statearr_25798;
})();
if(cljs.core.truth_(inst_25764__$1)){
var statearr_25799_25859 = state_25790__$1;
(statearr_25799_25859[(1)] = (29));

} else {
var statearr_25800_25860 = state_25790__$1;
(statearr_25800_25860[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (4))){
var inst_25709 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25709)){
var statearr_25801_25861 = state_25790__$1;
(statearr_25801_25861[(1)] = (8));

} else {
var statearr_25802_25862 = state_25790__$1;
(statearr_25802_25862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (15))){
var inst_25735 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25735)){
var statearr_25803_25863 = state_25790__$1;
(statearr_25803_25863[(1)] = (19));

} else {
var statearr_25804_25864 = state_25790__$1;
(statearr_25804_25864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (21))){
var inst_25740 = (state_25790[(12)]);
var inst_25740__$1 = (state_25790[(2)]);
var inst_25741 = cljs.core.get.call(null,inst_25740__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25742 = cljs.core.get.call(null,inst_25740__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25743 = cljs.core.get.call(null,inst_25740__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25790__$1 = (function (){var statearr_25805 = state_25790;
(statearr_25805[(12)] = inst_25740__$1);

(statearr_25805[(10)] = inst_25741);

(statearr_25805[(13)] = inst_25742);

return statearr_25805;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25790__$1,(22),inst_25743);
} else {
if((state_val_25791 === (31))){
var inst_25772 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25772)){
var statearr_25806_25865 = state_25790__$1;
(statearr_25806_25865[(1)] = (32));

} else {
var statearr_25807_25866 = state_25790__$1;
(statearr_25807_25866[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (32))){
var inst_25749 = (state_25790[(14)]);
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25790__$1,(35),out,inst_25749);
} else {
if((state_val_25791 === (33))){
var inst_25740 = (state_25790[(12)]);
var inst_25718 = inst_25740;
var state_25790__$1 = (function (){var statearr_25808 = state_25790;
(statearr_25808[(7)] = inst_25718);

return statearr_25808;
})();
var statearr_25809_25867 = state_25790__$1;
(statearr_25809_25867[(2)] = null);

(statearr_25809_25867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (13))){
var inst_25718 = (state_25790[(7)]);
var inst_25725 = inst_25718.cljs$lang$protocol_mask$partition0$;
var inst_25726 = (inst_25725 & (64));
var inst_25727 = inst_25718.cljs$core$ISeq$;
var inst_25728 = (inst_25726) || (inst_25727);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25728)){
var statearr_25810_25868 = state_25790__$1;
(statearr_25810_25868[(1)] = (16));

} else {
var statearr_25811_25869 = state_25790__$1;
(statearr_25811_25869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (22))){
var inst_25750 = (state_25790[(9)]);
var inst_25749 = (state_25790[(14)]);
var inst_25748 = (state_25790[(2)]);
var inst_25749__$1 = cljs.core.nth.call(null,inst_25748,(0),null);
var inst_25750__$1 = cljs.core.nth.call(null,inst_25748,(1),null);
var inst_25751 = (inst_25749__$1 == null);
var inst_25752 = cljs.core._EQ_.call(null,inst_25750__$1,change);
var inst_25753 = (inst_25751) || (inst_25752);
var state_25790__$1 = (function (){var statearr_25812 = state_25790;
(statearr_25812[(9)] = inst_25750__$1);

(statearr_25812[(14)] = inst_25749__$1);

return statearr_25812;
})();
if(cljs.core.truth_(inst_25753)){
var statearr_25813_25870 = state_25790__$1;
(statearr_25813_25870[(1)] = (23));

} else {
var statearr_25814_25871 = state_25790__$1;
(statearr_25814_25871[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (36))){
var inst_25740 = (state_25790[(12)]);
var inst_25718 = inst_25740;
var state_25790__$1 = (function (){var statearr_25815 = state_25790;
(statearr_25815[(7)] = inst_25718);

return statearr_25815;
})();
var statearr_25816_25872 = state_25790__$1;
(statearr_25816_25872[(2)] = null);

(statearr_25816_25872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (29))){
var inst_25764 = (state_25790[(11)]);
var state_25790__$1 = state_25790;
var statearr_25817_25873 = state_25790__$1;
(statearr_25817_25873[(2)] = inst_25764);

(statearr_25817_25873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (6))){
var state_25790__$1 = state_25790;
var statearr_25818_25874 = state_25790__$1;
(statearr_25818_25874[(2)] = false);

(statearr_25818_25874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (28))){
var inst_25760 = (state_25790[(2)]);
var inst_25761 = calc_state.call(null);
var inst_25718 = inst_25761;
var state_25790__$1 = (function (){var statearr_25819 = state_25790;
(statearr_25819[(7)] = inst_25718);

(statearr_25819[(15)] = inst_25760);

return statearr_25819;
})();
var statearr_25820_25875 = state_25790__$1;
(statearr_25820_25875[(2)] = null);

(statearr_25820_25875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (25))){
var inst_25786 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25821_25876 = state_25790__$1;
(statearr_25821_25876[(2)] = inst_25786);

(statearr_25821_25876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (34))){
var inst_25784 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25822_25877 = state_25790__$1;
(statearr_25822_25877[(2)] = inst_25784);

(statearr_25822_25877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (17))){
var state_25790__$1 = state_25790;
var statearr_25823_25878 = state_25790__$1;
(statearr_25823_25878[(2)] = false);

(statearr_25823_25878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (3))){
var state_25790__$1 = state_25790;
var statearr_25824_25879 = state_25790__$1;
(statearr_25824_25879[(2)] = false);

(statearr_25824_25879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (12))){
var inst_25788 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25790__$1,inst_25788);
} else {
if((state_val_25791 === (2))){
var inst_25694 = (state_25790[(8)]);
var inst_25699 = inst_25694.cljs$lang$protocol_mask$partition0$;
var inst_25700 = (inst_25699 & (64));
var inst_25701 = inst_25694.cljs$core$ISeq$;
var inst_25702 = (inst_25700) || (inst_25701);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25702)){
var statearr_25825_25880 = state_25790__$1;
(statearr_25825_25880[(1)] = (5));

} else {
var statearr_25826_25881 = state_25790__$1;
(statearr_25826_25881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (23))){
var inst_25749 = (state_25790[(14)]);
var inst_25755 = (inst_25749 == null);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25755)){
var statearr_25827_25882 = state_25790__$1;
(statearr_25827_25882[(1)] = (26));

} else {
var statearr_25828_25883 = state_25790__$1;
(statearr_25828_25883[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (35))){
var inst_25775 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
if(cljs.core.truth_(inst_25775)){
var statearr_25829_25884 = state_25790__$1;
(statearr_25829_25884[(1)] = (36));

} else {
var statearr_25830_25885 = state_25790__$1;
(statearr_25830_25885[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (19))){
var inst_25718 = (state_25790[(7)]);
var inst_25737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25718);
var state_25790__$1 = state_25790;
var statearr_25831_25886 = state_25790__$1;
(statearr_25831_25886[(2)] = inst_25737);

(statearr_25831_25886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (11))){
var inst_25718 = (state_25790[(7)]);
var inst_25722 = (inst_25718 == null);
var inst_25723 = cljs.core.not.call(null,inst_25722);
var state_25790__$1 = state_25790;
if(inst_25723){
var statearr_25832_25887 = state_25790__$1;
(statearr_25832_25887[(1)] = (13));

} else {
var statearr_25833_25888 = state_25790__$1;
(statearr_25833_25888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (9))){
var inst_25694 = (state_25790[(8)]);
var state_25790__$1 = state_25790;
var statearr_25834_25889 = state_25790__$1;
(statearr_25834_25889[(2)] = inst_25694);

(statearr_25834_25889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (5))){
var state_25790__$1 = state_25790;
var statearr_25835_25890 = state_25790__$1;
(statearr_25835_25890[(2)] = true);

(statearr_25835_25890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (14))){
var state_25790__$1 = state_25790;
var statearr_25836_25891 = state_25790__$1;
(statearr_25836_25891[(2)] = false);

(statearr_25836_25891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (26))){
var inst_25750 = (state_25790[(9)]);
var inst_25757 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25750);
var state_25790__$1 = state_25790;
var statearr_25837_25892 = state_25790__$1;
(statearr_25837_25892[(2)] = inst_25757);

(statearr_25837_25892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (16))){
var state_25790__$1 = state_25790;
var statearr_25838_25893 = state_25790__$1;
(statearr_25838_25893[(2)] = true);

(statearr_25838_25893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (38))){
var inst_25780 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25839_25894 = state_25790__$1;
(statearr_25839_25894[(2)] = inst_25780);

(statearr_25839_25894[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (30))){
var inst_25750 = (state_25790[(9)]);
var inst_25741 = (state_25790[(10)]);
var inst_25742 = (state_25790[(13)]);
var inst_25767 = cljs.core.empty_QMARK_.call(null,inst_25741);
var inst_25768 = inst_25742.call(null,inst_25750);
var inst_25769 = cljs.core.not.call(null,inst_25768);
var inst_25770 = (inst_25767) && (inst_25769);
var state_25790__$1 = state_25790;
var statearr_25840_25895 = state_25790__$1;
(statearr_25840_25895[(2)] = inst_25770);

(statearr_25840_25895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (10))){
var inst_25694 = (state_25790[(8)]);
var inst_25714 = (state_25790[(2)]);
var inst_25715 = cljs.core.get.call(null,inst_25714,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25716 = cljs.core.get.call(null,inst_25714,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25717 = cljs.core.get.call(null,inst_25714,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25718 = inst_25694;
var state_25790__$1 = (function (){var statearr_25841 = state_25790;
(statearr_25841[(7)] = inst_25718);

(statearr_25841[(16)] = inst_25717);

(statearr_25841[(17)] = inst_25716);

(statearr_25841[(18)] = inst_25715);

return statearr_25841;
})();
var statearr_25842_25896 = state_25790__$1;
(statearr_25842_25896[(2)] = null);

(statearr_25842_25896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (18))){
var inst_25732 = (state_25790[(2)]);
var state_25790__$1 = state_25790;
var statearr_25843_25897 = state_25790__$1;
(statearr_25843_25897[(2)] = inst_25732);

(statearr_25843_25897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (37))){
var state_25790__$1 = state_25790;
var statearr_25844_25898 = state_25790__$1;
(statearr_25844_25898[(2)] = null);

(statearr_25844_25898[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25791 === (8))){
var inst_25694 = (state_25790[(8)]);
var inst_25711 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25694);
var state_25790__$1 = state_25790;
var statearr_25845_25899 = state_25790__$1;
(statearr_25845_25899[(2)] = inst_25711);

(statearr_25845_25899[(1)] = (10));


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
});})(c__24120__auto___25853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24008__auto__,c__24120__auto___25853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24009__auto__ = null;
var cljs$core$async$mix_$_state_machine__24009__auto____0 = (function (){
var statearr_25849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25849[(0)] = cljs$core$async$mix_$_state_machine__24009__auto__);

(statearr_25849[(1)] = (1));

return statearr_25849;
});
var cljs$core$async$mix_$_state_machine__24009__auto____1 = (function (state_25790){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_25790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e25850){if((e25850 instanceof Object)){
var ex__24012__auto__ = e25850;
var statearr_25851_25900 = state_25790;
(statearr_25851_25900[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25901 = state_25790;
state_25790 = G__25901;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24009__auto__ = function(state_25790){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24009__auto____1.call(this,state_25790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24009__auto____0;
cljs$core$async$mix_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24009__auto____1;
return cljs$core$async$mix_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___25853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24122__auto__ = (function (){var statearr_25852 = f__24121__auto__.call(null);
(statearr_25852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___25853);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19281__auto__ = (((p == null))?null:p);
var m__19282__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19282__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19281__auto__ = (((p == null))?null:p);
var m__19282__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,p,v,ch);
} else {
var m__19282__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25902 = [];
var len__19693__auto___25905 = arguments.length;
var i__19694__auto___25906 = (0);
while(true){
if((i__19694__auto___25906 < len__19693__auto___25905)){
args25902.push((arguments[i__19694__auto___25906]));

var G__25907 = (i__19694__auto___25906 + (1));
i__19694__auto___25906 = G__25907;
continue;
} else {
}
break;
}

var G__25904 = args25902.length;
switch (G__25904) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25902.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19281__auto__ = (((p == null))?null:p);
var m__19282__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,p);
} else {
var m__19282__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,p);
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
var x__19281__auto__ = (((p == null))?null:p);
var m__19282__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19281__auto__)]);
if(!((m__19282__auto__ == null))){
return m__19282__auto__.call(null,p,v);
} else {
var m__19282__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19282__auto____$1 == null))){
return m__19282__auto____$1.call(null,p,v);
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
var args25910 = [];
var len__19693__auto___26035 = arguments.length;
var i__19694__auto___26036 = (0);
while(true){
if((i__19694__auto___26036 < len__19693__auto___26035)){
args25910.push((arguments[i__19694__auto___26036]));

var G__26037 = (i__19694__auto___26036 + (1));
i__19694__auto___26036 = G__26037;
continue;
} else {
}
break;
}

var G__25912 = args25910.length;
switch (G__25912) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25910.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18618__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18618__auto__,mults){
return (function (p1__25909_SHARP_){
if(cljs.core.truth_(p1__25909_SHARP_.call(null,topic))){
return p1__25909_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25909_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18618__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25913 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25914){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25914 = meta25914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25915,meta25914__$1){
var self__ = this;
var _25915__$1 = this;
return (new cljs.core.async.t_cljs$core$async25913(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25914__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25915){
var self__ = this;
var _25915__$1 = this;
return self__.meta25914;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25914","meta25914",69198074,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25913";

cljs.core.async.t_cljs$core$async25913.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async25913");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25913 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25913(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25914){
return (new cljs.core.async.t_cljs$core$async25913(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25914));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25913(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24120__auto___26039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26039,mults,ensure_mult,p){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26039,mults,ensure_mult,p){
return (function (state_25987){
var state_val_25988 = (state_25987[(1)]);
if((state_val_25988 === (7))){
var inst_25983 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
var statearr_25989_26040 = state_25987__$1;
(statearr_25989_26040[(2)] = inst_25983);

(statearr_25989_26040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (20))){
var state_25987__$1 = state_25987;
var statearr_25990_26041 = state_25987__$1;
(statearr_25990_26041[(2)] = null);

(statearr_25990_26041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (1))){
var state_25987__$1 = state_25987;
var statearr_25991_26042 = state_25987__$1;
(statearr_25991_26042[(2)] = null);

(statearr_25991_26042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (24))){
var inst_25966 = (state_25987[(7)]);
var inst_25975 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25966);
var state_25987__$1 = state_25987;
var statearr_25992_26043 = state_25987__$1;
(statearr_25992_26043[(2)] = inst_25975);

(statearr_25992_26043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (4))){
var inst_25918 = (state_25987[(8)]);
var inst_25918__$1 = (state_25987[(2)]);
var inst_25919 = (inst_25918__$1 == null);
var state_25987__$1 = (function (){var statearr_25993 = state_25987;
(statearr_25993[(8)] = inst_25918__$1);

return statearr_25993;
})();
if(cljs.core.truth_(inst_25919)){
var statearr_25994_26044 = state_25987__$1;
(statearr_25994_26044[(1)] = (5));

} else {
var statearr_25995_26045 = state_25987__$1;
(statearr_25995_26045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (15))){
var inst_25960 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
var statearr_25996_26046 = state_25987__$1;
(statearr_25996_26046[(2)] = inst_25960);

(statearr_25996_26046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (21))){
var inst_25980 = (state_25987[(2)]);
var state_25987__$1 = (function (){var statearr_25997 = state_25987;
(statearr_25997[(9)] = inst_25980);

return statearr_25997;
})();
var statearr_25998_26047 = state_25987__$1;
(statearr_25998_26047[(2)] = null);

(statearr_25998_26047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (13))){
var inst_25942 = (state_25987[(10)]);
var inst_25944 = cljs.core.chunked_seq_QMARK_.call(null,inst_25942);
var state_25987__$1 = state_25987;
if(inst_25944){
var statearr_25999_26048 = state_25987__$1;
(statearr_25999_26048[(1)] = (16));

} else {
var statearr_26000_26049 = state_25987__$1;
(statearr_26000_26049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (22))){
var inst_25972 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
if(cljs.core.truth_(inst_25972)){
var statearr_26001_26050 = state_25987__$1;
(statearr_26001_26050[(1)] = (23));

} else {
var statearr_26002_26051 = state_25987__$1;
(statearr_26002_26051[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (6))){
var inst_25968 = (state_25987[(11)]);
var inst_25966 = (state_25987[(7)]);
var inst_25918 = (state_25987[(8)]);
var inst_25966__$1 = topic_fn.call(null,inst_25918);
var inst_25967 = cljs.core.deref.call(null,mults);
var inst_25968__$1 = cljs.core.get.call(null,inst_25967,inst_25966__$1);
var state_25987__$1 = (function (){var statearr_26003 = state_25987;
(statearr_26003[(11)] = inst_25968__$1);

(statearr_26003[(7)] = inst_25966__$1);

return statearr_26003;
})();
if(cljs.core.truth_(inst_25968__$1)){
var statearr_26004_26052 = state_25987__$1;
(statearr_26004_26052[(1)] = (19));

} else {
var statearr_26005_26053 = state_25987__$1;
(statearr_26005_26053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (25))){
var inst_25977 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
var statearr_26006_26054 = state_25987__$1;
(statearr_26006_26054[(2)] = inst_25977);

(statearr_26006_26054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (17))){
var inst_25942 = (state_25987[(10)]);
var inst_25951 = cljs.core.first.call(null,inst_25942);
var inst_25952 = cljs.core.async.muxch_STAR_.call(null,inst_25951);
var inst_25953 = cljs.core.async.close_BANG_.call(null,inst_25952);
var inst_25954 = cljs.core.next.call(null,inst_25942);
var inst_25928 = inst_25954;
var inst_25929 = null;
var inst_25930 = (0);
var inst_25931 = (0);
var state_25987__$1 = (function (){var statearr_26007 = state_25987;
(statearr_26007[(12)] = inst_25929);

(statearr_26007[(13)] = inst_25928);

(statearr_26007[(14)] = inst_25930);

(statearr_26007[(15)] = inst_25931);

(statearr_26007[(16)] = inst_25953);

return statearr_26007;
})();
var statearr_26008_26055 = state_25987__$1;
(statearr_26008_26055[(2)] = null);

(statearr_26008_26055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (3))){
var inst_25985 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25987__$1,inst_25985);
} else {
if((state_val_25988 === (12))){
var inst_25962 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
var statearr_26009_26056 = state_25987__$1;
(statearr_26009_26056[(2)] = inst_25962);

(statearr_26009_26056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (2))){
var state_25987__$1 = state_25987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25987__$1,(4),ch);
} else {
if((state_val_25988 === (23))){
var state_25987__$1 = state_25987;
var statearr_26010_26057 = state_25987__$1;
(statearr_26010_26057[(2)] = null);

(statearr_26010_26057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (19))){
var inst_25968 = (state_25987[(11)]);
var inst_25918 = (state_25987[(8)]);
var inst_25970 = cljs.core.async.muxch_STAR_.call(null,inst_25968);
var state_25987__$1 = state_25987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25987__$1,(22),inst_25970,inst_25918);
} else {
if((state_val_25988 === (11))){
var inst_25942 = (state_25987[(10)]);
var inst_25928 = (state_25987[(13)]);
var inst_25942__$1 = cljs.core.seq.call(null,inst_25928);
var state_25987__$1 = (function (){var statearr_26011 = state_25987;
(statearr_26011[(10)] = inst_25942__$1);

return statearr_26011;
})();
if(inst_25942__$1){
var statearr_26012_26058 = state_25987__$1;
(statearr_26012_26058[(1)] = (13));

} else {
var statearr_26013_26059 = state_25987__$1;
(statearr_26013_26059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (9))){
var inst_25964 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
var statearr_26014_26060 = state_25987__$1;
(statearr_26014_26060[(2)] = inst_25964);

(statearr_26014_26060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (5))){
var inst_25925 = cljs.core.deref.call(null,mults);
var inst_25926 = cljs.core.vals.call(null,inst_25925);
var inst_25927 = cljs.core.seq.call(null,inst_25926);
var inst_25928 = inst_25927;
var inst_25929 = null;
var inst_25930 = (0);
var inst_25931 = (0);
var state_25987__$1 = (function (){var statearr_26015 = state_25987;
(statearr_26015[(12)] = inst_25929);

(statearr_26015[(13)] = inst_25928);

(statearr_26015[(14)] = inst_25930);

(statearr_26015[(15)] = inst_25931);

return statearr_26015;
})();
var statearr_26016_26061 = state_25987__$1;
(statearr_26016_26061[(2)] = null);

(statearr_26016_26061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (14))){
var state_25987__$1 = state_25987;
var statearr_26020_26062 = state_25987__$1;
(statearr_26020_26062[(2)] = null);

(statearr_26020_26062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (16))){
var inst_25942 = (state_25987[(10)]);
var inst_25946 = cljs.core.chunk_first.call(null,inst_25942);
var inst_25947 = cljs.core.chunk_rest.call(null,inst_25942);
var inst_25948 = cljs.core.count.call(null,inst_25946);
var inst_25928 = inst_25947;
var inst_25929 = inst_25946;
var inst_25930 = inst_25948;
var inst_25931 = (0);
var state_25987__$1 = (function (){var statearr_26021 = state_25987;
(statearr_26021[(12)] = inst_25929);

(statearr_26021[(13)] = inst_25928);

(statearr_26021[(14)] = inst_25930);

(statearr_26021[(15)] = inst_25931);

return statearr_26021;
})();
var statearr_26022_26063 = state_25987__$1;
(statearr_26022_26063[(2)] = null);

(statearr_26022_26063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (10))){
var inst_25929 = (state_25987[(12)]);
var inst_25928 = (state_25987[(13)]);
var inst_25930 = (state_25987[(14)]);
var inst_25931 = (state_25987[(15)]);
var inst_25936 = cljs.core._nth.call(null,inst_25929,inst_25931);
var inst_25937 = cljs.core.async.muxch_STAR_.call(null,inst_25936);
var inst_25938 = cljs.core.async.close_BANG_.call(null,inst_25937);
var inst_25939 = (inst_25931 + (1));
var tmp26017 = inst_25929;
var tmp26018 = inst_25928;
var tmp26019 = inst_25930;
var inst_25928__$1 = tmp26018;
var inst_25929__$1 = tmp26017;
var inst_25930__$1 = tmp26019;
var inst_25931__$1 = inst_25939;
var state_25987__$1 = (function (){var statearr_26023 = state_25987;
(statearr_26023[(12)] = inst_25929__$1);

(statearr_26023[(17)] = inst_25938);

(statearr_26023[(13)] = inst_25928__$1);

(statearr_26023[(14)] = inst_25930__$1);

(statearr_26023[(15)] = inst_25931__$1);

return statearr_26023;
})();
var statearr_26024_26064 = state_25987__$1;
(statearr_26024_26064[(2)] = null);

(statearr_26024_26064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (18))){
var inst_25957 = (state_25987[(2)]);
var state_25987__$1 = state_25987;
var statearr_26025_26065 = state_25987__$1;
(statearr_26025_26065[(2)] = inst_25957);

(statearr_26025_26065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25988 === (8))){
var inst_25930 = (state_25987[(14)]);
var inst_25931 = (state_25987[(15)]);
var inst_25933 = (inst_25931 < inst_25930);
var inst_25934 = inst_25933;
var state_25987__$1 = state_25987;
if(cljs.core.truth_(inst_25934)){
var statearr_26026_26066 = state_25987__$1;
(statearr_26026_26066[(1)] = (10));

} else {
var statearr_26027_26067 = state_25987__$1;
(statearr_26027_26067[(1)] = (11));

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
});})(c__24120__auto___26039,mults,ensure_mult,p))
;
return ((function (switch__24008__auto__,c__24120__auto___26039,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26031[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26031[(1)] = (1));

return statearr_26031;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_25987){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_25987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26032){if((e26032 instanceof Object)){
var ex__24012__auto__ = e26032;
var statearr_26033_26068 = state_25987;
(statearr_26033_26068[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26069 = state_25987;
state_25987 = G__26069;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_25987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_25987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26039,mults,ensure_mult,p))
})();
var state__24122__auto__ = (function (){var statearr_26034 = f__24121__auto__.call(null);
(statearr_26034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26039);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26039,mults,ensure_mult,p))
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
var args26070 = [];
var len__19693__auto___26073 = arguments.length;
var i__19694__auto___26074 = (0);
while(true){
if((i__19694__auto___26074 < len__19693__auto___26073)){
args26070.push((arguments[i__19694__auto___26074]));

var G__26075 = (i__19694__auto___26074 + (1));
i__19694__auto___26074 = G__26075;
continue;
} else {
}
break;
}

var G__26072 = args26070.length;
switch (G__26072) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26070.length)].join('')));

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
var args26077 = [];
var len__19693__auto___26080 = arguments.length;
var i__19694__auto___26081 = (0);
while(true){
if((i__19694__auto___26081 < len__19693__auto___26080)){
args26077.push((arguments[i__19694__auto___26081]));

var G__26082 = (i__19694__auto___26081 + (1));
i__19694__auto___26081 = G__26082;
continue;
} else {
}
break;
}

var G__26079 = args26077.length;
switch (G__26079) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26077.length)].join('')));

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
var args26084 = [];
var len__19693__auto___26155 = arguments.length;
var i__19694__auto___26156 = (0);
while(true){
if((i__19694__auto___26156 < len__19693__auto___26155)){
args26084.push((arguments[i__19694__auto___26156]));

var G__26157 = (i__19694__auto___26156 + (1));
i__19694__auto___26156 = G__26157;
continue;
} else {
}
break;
}

var G__26086 = args26084.length;
switch (G__26086) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26084.length)].join('')));

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
var c__24120__auto___26159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26125){
var state_val_26126 = (state_26125[(1)]);
if((state_val_26126 === (7))){
var state_26125__$1 = state_26125;
var statearr_26127_26160 = state_26125__$1;
(statearr_26127_26160[(2)] = null);

(statearr_26127_26160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (1))){
var state_26125__$1 = state_26125;
var statearr_26128_26161 = state_26125__$1;
(statearr_26128_26161[(2)] = null);

(statearr_26128_26161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (4))){
var inst_26089 = (state_26125[(7)]);
var inst_26091 = (inst_26089 < cnt);
var state_26125__$1 = state_26125;
if(cljs.core.truth_(inst_26091)){
var statearr_26129_26162 = state_26125__$1;
(statearr_26129_26162[(1)] = (6));

} else {
var statearr_26130_26163 = state_26125__$1;
(statearr_26130_26163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (15))){
var inst_26121 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
var statearr_26131_26164 = state_26125__$1;
(statearr_26131_26164[(2)] = inst_26121);

(statearr_26131_26164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (13))){
var inst_26114 = cljs.core.async.close_BANG_.call(null,out);
var state_26125__$1 = state_26125;
var statearr_26132_26165 = state_26125__$1;
(statearr_26132_26165[(2)] = inst_26114);

(statearr_26132_26165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (6))){
var state_26125__$1 = state_26125;
var statearr_26133_26166 = state_26125__$1;
(statearr_26133_26166[(2)] = null);

(statearr_26133_26166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (3))){
var inst_26123 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26125__$1,inst_26123);
} else {
if((state_val_26126 === (12))){
var inst_26111 = (state_26125[(8)]);
var inst_26111__$1 = (state_26125[(2)]);
var inst_26112 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26111__$1);
var state_26125__$1 = (function (){var statearr_26134 = state_26125;
(statearr_26134[(8)] = inst_26111__$1);

return statearr_26134;
})();
if(cljs.core.truth_(inst_26112)){
var statearr_26135_26167 = state_26125__$1;
(statearr_26135_26167[(1)] = (13));

} else {
var statearr_26136_26168 = state_26125__$1;
(statearr_26136_26168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (2))){
var inst_26088 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26089 = (0);
var state_26125__$1 = (function (){var statearr_26137 = state_26125;
(statearr_26137[(7)] = inst_26089);

(statearr_26137[(9)] = inst_26088);

return statearr_26137;
})();
var statearr_26138_26169 = state_26125__$1;
(statearr_26138_26169[(2)] = null);

(statearr_26138_26169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (11))){
var inst_26089 = (state_26125[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26125,(10),Object,null,(9));
var inst_26098 = chs__$1.call(null,inst_26089);
var inst_26099 = done.call(null,inst_26089);
var inst_26100 = cljs.core.async.take_BANG_.call(null,inst_26098,inst_26099);
var state_26125__$1 = state_26125;
var statearr_26139_26170 = state_26125__$1;
(statearr_26139_26170[(2)] = inst_26100);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26125__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (9))){
var inst_26089 = (state_26125[(7)]);
var inst_26102 = (state_26125[(2)]);
var inst_26103 = (inst_26089 + (1));
var inst_26089__$1 = inst_26103;
var state_26125__$1 = (function (){var statearr_26140 = state_26125;
(statearr_26140[(7)] = inst_26089__$1);

(statearr_26140[(10)] = inst_26102);

return statearr_26140;
})();
var statearr_26141_26171 = state_26125__$1;
(statearr_26141_26171[(2)] = null);

(statearr_26141_26171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (5))){
var inst_26109 = (state_26125[(2)]);
var state_26125__$1 = (function (){var statearr_26142 = state_26125;
(statearr_26142[(11)] = inst_26109);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26125__$1,(12),dchan);
} else {
if((state_val_26126 === (14))){
var inst_26111 = (state_26125[(8)]);
var inst_26116 = cljs.core.apply.call(null,f,inst_26111);
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26125__$1,(16),out,inst_26116);
} else {
if((state_val_26126 === (16))){
var inst_26118 = (state_26125[(2)]);
var state_26125__$1 = (function (){var statearr_26143 = state_26125;
(statearr_26143[(12)] = inst_26118);

return statearr_26143;
})();
var statearr_26144_26172 = state_26125__$1;
(statearr_26144_26172[(2)] = null);

(statearr_26144_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (10))){
var inst_26093 = (state_26125[(2)]);
var inst_26094 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26125__$1 = (function (){var statearr_26145 = state_26125;
(statearr_26145[(13)] = inst_26093);

return statearr_26145;
})();
var statearr_26146_26173 = state_26125__$1;
(statearr_26146_26173[(2)] = inst_26094);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26125__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (8))){
var inst_26107 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
var statearr_26147_26174 = state_26125__$1;
(statearr_26147_26174[(2)] = inst_26107);

(statearr_26147_26174[(1)] = (5));


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
});})(c__24120__auto___26159,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24008__auto__,c__24120__auto___26159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26151[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26151[(1)] = (1));

return statearr_26151;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26125){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26152){if((e26152 instanceof Object)){
var ex__24012__auto__ = e26152;
var statearr_26153_26175 = state_26125;
(statearr_26153_26175[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26176 = state_26125;
state_26125 = G__26176;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26159,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24122__auto__ = (function (){var statearr_26154 = f__24121__auto__.call(null);
(statearr_26154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26159);

return statearr_26154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26159,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26178 = [];
var len__19693__auto___26236 = arguments.length;
var i__19694__auto___26237 = (0);
while(true){
if((i__19694__auto___26237 < len__19693__auto___26236)){
args26178.push((arguments[i__19694__auto___26237]));

var G__26238 = (i__19694__auto___26237 + (1));
i__19694__auto___26237 = G__26238;
continue;
} else {
}
break;
}

var G__26180 = args26178.length;
switch (G__26180) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26178.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24120__auto___26240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26240,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26240,out){
return (function (state_26212){
var state_val_26213 = (state_26212[(1)]);
if((state_val_26213 === (7))){
var inst_26191 = (state_26212[(7)]);
var inst_26192 = (state_26212[(8)]);
var inst_26191__$1 = (state_26212[(2)]);
var inst_26192__$1 = cljs.core.nth.call(null,inst_26191__$1,(0),null);
var inst_26193 = cljs.core.nth.call(null,inst_26191__$1,(1),null);
var inst_26194 = (inst_26192__$1 == null);
var state_26212__$1 = (function (){var statearr_26214 = state_26212;
(statearr_26214[(7)] = inst_26191__$1);

(statearr_26214[(9)] = inst_26193);

(statearr_26214[(8)] = inst_26192__$1);

return statearr_26214;
})();
if(cljs.core.truth_(inst_26194)){
var statearr_26215_26241 = state_26212__$1;
(statearr_26215_26241[(1)] = (8));

} else {
var statearr_26216_26242 = state_26212__$1;
(statearr_26216_26242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (1))){
var inst_26181 = cljs.core.vec.call(null,chs);
var inst_26182 = inst_26181;
var state_26212__$1 = (function (){var statearr_26217 = state_26212;
(statearr_26217[(10)] = inst_26182);

return statearr_26217;
})();
var statearr_26218_26243 = state_26212__$1;
(statearr_26218_26243[(2)] = null);

(statearr_26218_26243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (4))){
var inst_26182 = (state_26212[(10)]);
var state_26212__$1 = state_26212;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26212__$1,(7),inst_26182);
} else {
if((state_val_26213 === (6))){
var inst_26208 = (state_26212[(2)]);
var state_26212__$1 = state_26212;
var statearr_26219_26244 = state_26212__$1;
(statearr_26219_26244[(2)] = inst_26208);

(statearr_26219_26244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (3))){
var inst_26210 = (state_26212[(2)]);
var state_26212__$1 = state_26212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26212__$1,inst_26210);
} else {
if((state_val_26213 === (2))){
var inst_26182 = (state_26212[(10)]);
var inst_26184 = cljs.core.count.call(null,inst_26182);
var inst_26185 = (inst_26184 > (0));
var state_26212__$1 = state_26212;
if(cljs.core.truth_(inst_26185)){
var statearr_26221_26245 = state_26212__$1;
(statearr_26221_26245[(1)] = (4));

} else {
var statearr_26222_26246 = state_26212__$1;
(statearr_26222_26246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (11))){
var inst_26182 = (state_26212[(10)]);
var inst_26201 = (state_26212[(2)]);
var tmp26220 = inst_26182;
var inst_26182__$1 = tmp26220;
var state_26212__$1 = (function (){var statearr_26223 = state_26212;
(statearr_26223[(10)] = inst_26182__$1);

(statearr_26223[(11)] = inst_26201);

return statearr_26223;
})();
var statearr_26224_26247 = state_26212__$1;
(statearr_26224_26247[(2)] = null);

(statearr_26224_26247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (9))){
var inst_26192 = (state_26212[(8)]);
var state_26212__$1 = state_26212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26212__$1,(11),out,inst_26192);
} else {
if((state_val_26213 === (5))){
var inst_26206 = cljs.core.async.close_BANG_.call(null,out);
var state_26212__$1 = state_26212;
var statearr_26225_26248 = state_26212__$1;
(statearr_26225_26248[(2)] = inst_26206);

(statearr_26225_26248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (10))){
var inst_26204 = (state_26212[(2)]);
var state_26212__$1 = state_26212;
var statearr_26226_26249 = state_26212__$1;
(statearr_26226_26249[(2)] = inst_26204);

(statearr_26226_26249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26213 === (8))){
var inst_26191 = (state_26212[(7)]);
var inst_26193 = (state_26212[(9)]);
var inst_26192 = (state_26212[(8)]);
var inst_26182 = (state_26212[(10)]);
var inst_26196 = (function (){var cs = inst_26182;
var vec__26187 = inst_26191;
var v = inst_26192;
var c = inst_26193;
return ((function (cs,vec__26187,v,c,inst_26191,inst_26193,inst_26192,inst_26182,state_val_26213,c__24120__auto___26240,out){
return (function (p1__26177_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26177_SHARP_);
});
;})(cs,vec__26187,v,c,inst_26191,inst_26193,inst_26192,inst_26182,state_val_26213,c__24120__auto___26240,out))
})();
var inst_26197 = cljs.core.filterv.call(null,inst_26196,inst_26182);
var inst_26182__$1 = inst_26197;
var state_26212__$1 = (function (){var statearr_26227 = state_26212;
(statearr_26227[(10)] = inst_26182__$1);

return statearr_26227;
})();
var statearr_26228_26250 = state_26212__$1;
(statearr_26228_26250[(2)] = null);

(statearr_26228_26250[(1)] = (2));


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
});})(c__24120__auto___26240,out))
;
return ((function (switch__24008__auto__,c__24120__auto___26240,out){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26232[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26232[(1)] = (1));

return statearr_26232;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26212){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26233){if((e26233 instanceof Object)){
var ex__24012__auto__ = e26233;
var statearr_26234_26251 = state_26212;
(statearr_26234_26251[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26252 = state_26212;
state_26212 = G__26252;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26240,out))
})();
var state__24122__auto__ = (function (){var statearr_26235 = f__24121__auto__.call(null);
(statearr_26235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26240);

return statearr_26235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26240,out))
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
var args26253 = [];
var len__19693__auto___26302 = arguments.length;
var i__19694__auto___26303 = (0);
while(true){
if((i__19694__auto___26303 < len__19693__auto___26302)){
args26253.push((arguments[i__19694__auto___26303]));

var G__26304 = (i__19694__auto___26303 + (1));
i__19694__auto___26303 = G__26304;
continue;
} else {
}
break;
}

var G__26255 = args26253.length;
switch (G__26255) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26253.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24120__auto___26306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26306,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26306,out){
return (function (state_26279){
var state_val_26280 = (state_26279[(1)]);
if((state_val_26280 === (7))){
var inst_26261 = (state_26279[(7)]);
var inst_26261__$1 = (state_26279[(2)]);
var inst_26262 = (inst_26261__$1 == null);
var inst_26263 = cljs.core.not.call(null,inst_26262);
var state_26279__$1 = (function (){var statearr_26281 = state_26279;
(statearr_26281[(7)] = inst_26261__$1);

return statearr_26281;
})();
if(inst_26263){
var statearr_26282_26307 = state_26279__$1;
(statearr_26282_26307[(1)] = (8));

} else {
var statearr_26283_26308 = state_26279__$1;
(statearr_26283_26308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (1))){
var inst_26256 = (0);
var state_26279__$1 = (function (){var statearr_26284 = state_26279;
(statearr_26284[(8)] = inst_26256);

return statearr_26284;
})();
var statearr_26285_26309 = state_26279__$1;
(statearr_26285_26309[(2)] = null);

(statearr_26285_26309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (4))){
var state_26279__$1 = state_26279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26279__$1,(7),ch);
} else {
if((state_val_26280 === (6))){
var inst_26274 = (state_26279[(2)]);
var state_26279__$1 = state_26279;
var statearr_26286_26310 = state_26279__$1;
(statearr_26286_26310[(2)] = inst_26274);

(statearr_26286_26310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (3))){
var inst_26276 = (state_26279[(2)]);
var inst_26277 = cljs.core.async.close_BANG_.call(null,out);
var state_26279__$1 = (function (){var statearr_26287 = state_26279;
(statearr_26287[(9)] = inst_26276);

return statearr_26287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26279__$1,inst_26277);
} else {
if((state_val_26280 === (2))){
var inst_26256 = (state_26279[(8)]);
var inst_26258 = (inst_26256 < n);
var state_26279__$1 = state_26279;
if(cljs.core.truth_(inst_26258)){
var statearr_26288_26311 = state_26279__$1;
(statearr_26288_26311[(1)] = (4));

} else {
var statearr_26289_26312 = state_26279__$1;
(statearr_26289_26312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (11))){
var inst_26256 = (state_26279[(8)]);
var inst_26266 = (state_26279[(2)]);
var inst_26267 = (inst_26256 + (1));
var inst_26256__$1 = inst_26267;
var state_26279__$1 = (function (){var statearr_26290 = state_26279;
(statearr_26290[(8)] = inst_26256__$1);

(statearr_26290[(10)] = inst_26266);

return statearr_26290;
})();
var statearr_26291_26313 = state_26279__$1;
(statearr_26291_26313[(2)] = null);

(statearr_26291_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (9))){
var state_26279__$1 = state_26279;
var statearr_26292_26314 = state_26279__$1;
(statearr_26292_26314[(2)] = null);

(statearr_26292_26314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (5))){
var state_26279__$1 = state_26279;
var statearr_26293_26315 = state_26279__$1;
(statearr_26293_26315[(2)] = null);

(statearr_26293_26315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (10))){
var inst_26271 = (state_26279[(2)]);
var state_26279__$1 = state_26279;
var statearr_26294_26316 = state_26279__$1;
(statearr_26294_26316[(2)] = inst_26271);

(statearr_26294_26316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26280 === (8))){
var inst_26261 = (state_26279[(7)]);
var state_26279__$1 = state_26279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26279__$1,(11),out,inst_26261);
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
});})(c__24120__auto___26306,out))
;
return ((function (switch__24008__auto__,c__24120__auto___26306,out){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26298[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26298[(1)] = (1));

return statearr_26298;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26279){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26299){if((e26299 instanceof Object)){
var ex__24012__auto__ = e26299;
var statearr_26300_26317 = state_26279;
(statearr_26300_26317[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26318 = state_26279;
state_26279 = G__26318;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26306,out))
})();
var state__24122__auto__ = (function (){var statearr_26301 = f__24121__auto__.call(null);
(statearr_26301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26306);

return statearr_26301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26306,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26326 = (function (map_LT_,f,ch,meta26327){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26327 = meta26327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26328,meta26327__$1){
var self__ = this;
var _26328__$1 = this;
return (new cljs.core.async.t_cljs$core$async26326(self__.map_LT_,self__.f,self__.ch,meta26327__$1));
});

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26328){
var self__ = this;
var _26328__$1 = this;
return self__.meta26327;
});

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26329 = (function (map_LT_,f,ch,meta26327,_,fn1,meta26330){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26327 = meta26327;
this._ = _;
this.fn1 = fn1;
this.meta26330 = meta26330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26331,meta26330__$1){
var self__ = this;
var _26331__$1 = this;
return (new cljs.core.async.t_cljs$core$async26329(self__.map_LT_,self__.f,self__.ch,self__.meta26327,self__._,self__.fn1,meta26330__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26331){
var self__ = this;
var _26331__$1 = this;
return self__.meta26330;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26329.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26319_SHARP_){
return f1.call(null,(((p1__26319_SHARP_ == null))?null:self__.f.call(null,p1__26319_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26329.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26327","meta26327",1734903850,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26326","cljs.core.async/t_cljs$core$async26326",622260919,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26330","meta26330",1429548789,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26329";

cljs.core.async.t_cljs$core$async26329.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async26329");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26329 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26329(map_LT___$1,f__$1,ch__$1,meta26327__$1,___$2,fn1__$1,meta26330){
return (new cljs.core.async.t_cljs$core$async26329(map_LT___$1,f__$1,ch__$1,meta26327__$1,___$2,fn1__$1,meta26330));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26329(self__.map_LT_,self__.f,self__.ch,self__.meta26327,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18606__auto__ = ret;
if(cljs.core.truth_(and__18606__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18606__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26327","meta26327",1734903850,null)], null);
});

cljs.core.async.t_cljs$core$async26326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26326";

cljs.core.async.t_cljs$core$async26326.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async26326");
});

cljs.core.async.__GT_t_cljs$core$async26326 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26326(map_LT___$1,f__$1,ch__$1,meta26327){
return (new cljs.core.async.t_cljs$core$async26326(map_LT___$1,f__$1,ch__$1,meta26327));
});

}

return (new cljs.core.async.t_cljs$core$async26326(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26335 = (function (map_GT_,f,ch,meta26336){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26336 = meta26336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26337,meta26336__$1){
var self__ = this;
var _26337__$1 = this;
return (new cljs.core.async.t_cljs$core$async26335(self__.map_GT_,self__.f,self__.ch,meta26336__$1));
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26337){
var self__ = this;
var _26337__$1 = this;
return self__.meta26336;
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26336","meta26336",-1530964584,null)], null);
});

cljs.core.async.t_cljs$core$async26335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26335";

cljs.core.async.t_cljs$core$async26335.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async26335");
});

cljs.core.async.__GT_t_cljs$core$async26335 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26335(map_GT___$1,f__$1,ch__$1,meta26336){
return (new cljs.core.async.t_cljs$core$async26335(map_GT___$1,f__$1,ch__$1,meta26336));
});

}

return (new cljs.core.async.t_cljs$core$async26335(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26341 = (function (filter_GT_,p,ch,meta26342){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26342 = meta26342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26343,meta26342__$1){
var self__ = this;
var _26343__$1 = this;
return (new cljs.core.async.t_cljs$core$async26341(self__.filter_GT_,self__.p,self__.ch,meta26342__$1));
});

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26343){
var self__ = this;
var _26343__$1 = this;
return self__.meta26342;
});

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26342","meta26342",-671182709,null)], null);
});

cljs.core.async.t_cljs$core$async26341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26341";

cljs.core.async.t_cljs$core$async26341.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.core.async/t_cljs$core$async26341");
});

cljs.core.async.__GT_t_cljs$core$async26341 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26341(filter_GT___$1,p__$1,ch__$1,meta26342){
return (new cljs.core.async.t_cljs$core$async26341(filter_GT___$1,p__$1,ch__$1,meta26342));
});

}

return (new cljs.core.async.t_cljs$core$async26341(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26344 = [];
var len__19693__auto___26388 = arguments.length;
var i__19694__auto___26389 = (0);
while(true){
if((i__19694__auto___26389 < len__19693__auto___26388)){
args26344.push((arguments[i__19694__auto___26389]));

var G__26390 = (i__19694__auto___26389 + (1));
i__19694__auto___26389 = G__26390;
continue;
} else {
}
break;
}

var G__26346 = args26344.length;
switch (G__26346) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26344.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24120__auto___26392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26392,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26392,out){
return (function (state_26367){
var state_val_26368 = (state_26367[(1)]);
if((state_val_26368 === (7))){
var inst_26363 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26369_26393 = state_26367__$1;
(statearr_26369_26393[(2)] = inst_26363);

(statearr_26369_26393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (1))){
var state_26367__$1 = state_26367;
var statearr_26370_26394 = state_26367__$1;
(statearr_26370_26394[(2)] = null);

(statearr_26370_26394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (4))){
var inst_26349 = (state_26367[(7)]);
var inst_26349__$1 = (state_26367[(2)]);
var inst_26350 = (inst_26349__$1 == null);
var state_26367__$1 = (function (){var statearr_26371 = state_26367;
(statearr_26371[(7)] = inst_26349__$1);

return statearr_26371;
})();
if(cljs.core.truth_(inst_26350)){
var statearr_26372_26395 = state_26367__$1;
(statearr_26372_26395[(1)] = (5));

} else {
var statearr_26373_26396 = state_26367__$1;
(statearr_26373_26396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (6))){
var inst_26349 = (state_26367[(7)]);
var inst_26354 = p.call(null,inst_26349);
var state_26367__$1 = state_26367;
if(cljs.core.truth_(inst_26354)){
var statearr_26374_26397 = state_26367__$1;
(statearr_26374_26397[(1)] = (8));

} else {
var statearr_26375_26398 = state_26367__$1;
(statearr_26375_26398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (3))){
var inst_26365 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26367__$1,inst_26365);
} else {
if((state_val_26368 === (2))){
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26367__$1,(4),ch);
} else {
if((state_val_26368 === (11))){
var inst_26357 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26376_26399 = state_26367__$1;
(statearr_26376_26399[(2)] = inst_26357);

(statearr_26376_26399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (9))){
var state_26367__$1 = state_26367;
var statearr_26377_26400 = state_26367__$1;
(statearr_26377_26400[(2)] = null);

(statearr_26377_26400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (5))){
var inst_26352 = cljs.core.async.close_BANG_.call(null,out);
var state_26367__$1 = state_26367;
var statearr_26378_26401 = state_26367__$1;
(statearr_26378_26401[(2)] = inst_26352);

(statearr_26378_26401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (10))){
var inst_26360 = (state_26367[(2)]);
var state_26367__$1 = (function (){var statearr_26379 = state_26367;
(statearr_26379[(8)] = inst_26360);

return statearr_26379;
})();
var statearr_26380_26402 = state_26367__$1;
(statearr_26380_26402[(2)] = null);

(statearr_26380_26402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (8))){
var inst_26349 = (state_26367[(7)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26367__$1,(11),out,inst_26349);
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
});})(c__24120__auto___26392,out))
;
return ((function (switch__24008__auto__,c__24120__auto___26392,out){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26384 = [null,null,null,null,null,null,null,null,null];
(statearr_26384[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26384[(1)] = (1));

return statearr_26384;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26367){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26385){if((e26385 instanceof Object)){
var ex__24012__auto__ = e26385;
var statearr_26386_26403 = state_26367;
(statearr_26386_26403[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26404 = state_26367;
state_26367 = G__26404;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26392,out))
})();
var state__24122__auto__ = (function (){var statearr_26387 = f__24121__auto__.call(null);
(statearr_26387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26392);

return statearr_26387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26392,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26405 = [];
var len__19693__auto___26408 = arguments.length;
var i__19694__auto___26409 = (0);
while(true){
if((i__19694__auto___26409 < len__19693__auto___26408)){
args26405.push((arguments[i__19694__auto___26409]));

var G__26410 = (i__19694__auto___26409 + (1));
i__19694__auto___26409 = G__26410;
continue;
} else {
}
break;
}

var G__26407 = args26405.length;
switch (G__26407) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26405.length)].join('')));

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
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_26577){
var state_val_26578 = (state_26577[(1)]);
if((state_val_26578 === (7))){
var inst_26573 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26579_26620 = state_26577__$1;
(statearr_26579_26620[(2)] = inst_26573);

(statearr_26579_26620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (20))){
var inst_26543 = (state_26577[(7)]);
var inst_26554 = (state_26577[(2)]);
var inst_26555 = cljs.core.next.call(null,inst_26543);
var inst_26529 = inst_26555;
var inst_26530 = null;
var inst_26531 = (0);
var inst_26532 = (0);
var state_26577__$1 = (function (){var statearr_26580 = state_26577;
(statearr_26580[(8)] = inst_26531);

(statearr_26580[(9)] = inst_26554);

(statearr_26580[(10)] = inst_26530);

(statearr_26580[(11)] = inst_26532);

(statearr_26580[(12)] = inst_26529);

return statearr_26580;
})();
var statearr_26581_26621 = state_26577__$1;
(statearr_26581_26621[(2)] = null);

(statearr_26581_26621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (1))){
var state_26577__$1 = state_26577;
var statearr_26582_26622 = state_26577__$1;
(statearr_26582_26622[(2)] = null);

(statearr_26582_26622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (4))){
var inst_26518 = (state_26577[(13)]);
var inst_26518__$1 = (state_26577[(2)]);
var inst_26519 = (inst_26518__$1 == null);
var state_26577__$1 = (function (){var statearr_26583 = state_26577;
(statearr_26583[(13)] = inst_26518__$1);

return statearr_26583;
})();
if(cljs.core.truth_(inst_26519)){
var statearr_26584_26623 = state_26577__$1;
(statearr_26584_26623[(1)] = (5));

} else {
var statearr_26585_26624 = state_26577__$1;
(statearr_26585_26624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (15))){
var state_26577__$1 = state_26577;
var statearr_26589_26625 = state_26577__$1;
(statearr_26589_26625[(2)] = null);

(statearr_26589_26625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (21))){
var state_26577__$1 = state_26577;
var statearr_26590_26626 = state_26577__$1;
(statearr_26590_26626[(2)] = null);

(statearr_26590_26626[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (13))){
var inst_26531 = (state_26577[(8)]);
var inst_26530 = (state_26577[(10)]);
var inst_26532 = (state_26577[(11)]);
var inst_26529 = (state_26577[(12)]);
var inst_26539 = (state_26577[(2)]);
var inst_26540 = (inst_26532 + (1));
var tmp26586 = inst_26531;
var tmp26587 = inst_26530;
var tmp26588 = inst_26529;
var inst_26529__$1 = tmp26588;
var inst_26530__$1 = tmp26587;
var inst_26531__$1 = tmp26586;
var inst_26532__$1 = inst_26540;
var state_26577__$1 = (function (){var statearr_26591 = state_26577;
(statearr_26591[(14)] = inst_26539);

(statearr_26591[(8)] = inst_26531__$1);

(statearr_26591[(10)] = inst_26530__$1);

(statearr_26591[(11)] = inst_26532__$1);

(statearr_26591[(12)] = inst_26529__$1);

return statearr_26591;
})();
var statearr_26592_26627 = state_26577__$1;
(statearr_26592_26627[(2)] = null);

(statearr_26592_26627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (22))){
var state_26577__$1 = state_26577;
var statearr_26593_26628 = state_26577__$1;
(statearr_26593_26628[(2)] = null);

(statearr_26593_26628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (6))){
var inst_26518 = (state_26577[(13)]);
var inst_26527 = f.call(null,inst_26518);
var inst_26528 = cljs.core.seq.call(null,inst_26527);
var inst_26529 = inst_26528;
var inst_26530 = null;
var inst_26531 = (0);
var inst_26532 = (0);
var state_26577__$1 = (function (){var statearr_26594 = state_26577;
(statearr_26594[(8)] = inst_26531);

(statearr_26594[(10)] = inst_26530);

(statearr_26594[(11)] = inst_26532);

(statearr_26594[(12)] = inst_26529);

return statearr_26594;
})();
var statearr_26595_26629 = state_26577__$1;
(statearr_26595_26629[(2)] = null);

(statearr_26595_26629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (17))){
var inst_26543 = (state_26577[(7)]);
var inst_26547 = cljs.core.chunk_first.call(null,inst_26543);
var inst_26548 = cljs.core.chunk_rest.call(null,inst_26543);
var inst_26549 = cljs.core.count.call(null,inst_26547);
var inst_26529 = inst_26548;
var inst_26530 = inst_26547;
var inst_26531 = inst_26549;
var inst_26532 = (0);
var state_26577__$1 = (function (){var statearr_26596 = state_26577;
(statearr_26596[(8)] = inst_26531);

(statearr_26596[(10)] = inst_26530);

(statearr_26596[(11)] = inst_26532);

(statearr_26596[(12)] = inst_26529);

return statearr_26596;
})();
var statearr_26597_26630 = state_26577__$1;
(statearr_26597_26630[(2)] = null);

(statearr_26597_26630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (3))){
var inst_26575 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26577__$1,inst_26575);
} else {
if((state_val_26578 === (12))){
var inst_26563 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26598_26631 = state_26577__$1;
(statearr_26598_26631[(2)] = inst_26563);

(statearr_26598_26631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (2))){
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26577__$1,(4),in$);
} else {
if((state_val_26578 === (23))){
var inst_26571 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26599_26632 = state_26577__$1;
(statearr_26599_26632[(2)] = inst_26571);

(statearr_26599_26632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (19))){
var inst_26558 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26600_26633 = state_26577__$1;
(statearr_26600_26633[(2)] = inst_26558);

(statearr_26600_26633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (11))){
var inst_26543 = (state_26577[(7)]);
var inst_26529 = (state_26577[(12)]);
var inst_26543__$1 = cljs.core.seq.call(null,inst_26529);
var state_26577__$1 = (function (){var statearr_26601 = state_26577;
(statearr_26601[(7)] = inst_26543__$1);

return statearr_26601;
})();
if(inst_26543__$1){
var statearr_26602_26634 = state_26577__$1;
(statearr_26602_26634[(1)] = (14));

} else {
var statearr_26603_26635 = state_26577__$1;
(statearr_26603_26635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (9))){
var inst_26565 = (state_26577[(2)]);
var inst_26566 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26577__$1 = (function (){var statearr_26604 = state_26577;
(statearr_26604[(15)] = inst_26565);

return statearr_26604;
})();
if(cljs.core.truth_(inst_26566)){
var statearr_26605_26636 = state_26577__$1;
(statearr_26605_26636[(1)] = (21));

} else {
var statearr_26606_26637 = state_26577__$1;
(statearr_26606_26637[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (5))){
var inst_26521 = cljs.core.async.close_BANG_.call(null,out);
var state_26577__$1 = state_26577;
var statearr_26607_26638 = state_26577__$1;
(statearr_26607_26638[(2)] = inst_26521);

(statearr_26607_26638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (14))){
var inst_26543 = (state_26577[(7)]);
var inst_26545 = cljs.core.chunked_seq_QMARK_.call(null,inst_26543);
var state_26577__$1 = state_26577;
if(inst_26545){
var statearr_26608_26639 = state_26577__$1;
(statearr_26608_26639[(1)] = (17));

} else {
var statearr_26609_26640 = state_26577__$1;
(statearr_26609_26640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (16))){
var inst_26561 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26610_26641 = state_26577__$1;
(statearr_26610_26641[(2)] = inst_26561);

(statearr_26610_26641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (10))){
var inst_26530 = (state_26577[(10)]);
var inst_26532 = (state_26577[(11)]);
var inst_26537 = cljs.core._nth.call(null,inst_26530,inst_26532);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26577__$1,(13),out,inst_26537);
} else {
if((state_val_26578 === (18))){
var inst_26543 = (state_26577[(7)]);
var inst_26552 = cljs.core.first.call(null,inst_26543);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26577__$1,(20),out,inst_26552);
} else {
if((state_val_26578 === (8))){
var inst_26531 = (state_26577[(8)]);
var inst_26532 = (state_26577[(11)]);
var inst_26534 = (inst_26532 < inst_26531);
var inst_26535 = inst_26534;
var state_26577__$1 = state_26577;
if(cljs.core.truth_(inst_26535)){
var statearr_26611_26642 = state_26577__$1;
(statearr_26611_26642[(1)] = (10));

} else {
var statearr_26612_26643 = state_26577__$1;
(statearr_26612_26643[(1)] = (11));

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
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24009__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24009__auto____0 = (function (){
var statearr_26616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24009__auto__);

(statearr_26616[(1)] = (1));

return statearr_26616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24009__auto____1 = (function (state_26577){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26617){if((e26617 instanceof Object)){
var ex__24012__auto__ = e26617;
var statearr_26618_26644 = state_26577;
(statearr_26618_26644[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26645 = state_26577;
state_26577 = G__26645;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24009__auto__ = function(state_26577){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24009__auto____1.call(this,state_26577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24009__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24009__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_26619 = f__24121__auto__.call(null);
(statearr_26619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_26619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26646 = [];
var len__19693__auto___26649 = arguments.length;
var i__19694__auto___26650 = (0);
while(true){
if((i__19694__auto___26650 < len__19693__auto___26649)){
args26646.push((arguments[i__19694__auto___26650]));

var G__26651 = (i__19694__auto___26650 + (1));
i__19694__auto___26650 = G__26651;
continue;
} else {
}
break;
}

var G__26648 = args26646.length;
switch (G__26648) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26646.length)].join('')));

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
var args26653 = [];
var len__19693__auto___26656 = arguments.length;
var i__19694__auto___26657 = (0);
while(true){
if((i__19694__auto___26657 < len__19693__auto___26656)){
args26653.push((arguments[i__19694__auto___26657]));

var G__26658 = (i__19694__auto___26657 + (1));
i__19694__auto___26657 = G__26658;
continue;
} else {
}
break;
}

var G__26655 = args26653.length;
switch (G__26655) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26653.length)].join('')));

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
var args26660 = [];
var len__19693__auto___26711 = arguments.length;
var i__19694__auto___26712 = (0);
while(true){
if((i__19694__auto___26712 < len__19693__auto___26711)){
args26660.push((arguments[i__19694__auto___26712]));

var G__26713 = (i__19694__auto___26712 + (1));
i__19694__auto___26712 = G__26713;
continue;
} else {
}
break;
}

var G__26662 = args26660.length;
switch (G__26662) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26660.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24120__auto___26715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26715,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26715,out){
return (function (state_26686){
var state_val_26687 = (state_26686[(1)]);
if((state_val_26687 === (7))){
var inst_26681 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26688_26716 = state_26686__$1;
(statearr_26688_26716[(2)] = inst_26681);

(statearr_26688_26716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (1))){
var inst_26663 = null;
var state_26686__$1 = (function (){var statearr_26689 = state_26686;
(statearr_26689[(7)] = inst_26663);

return statearr_26689;
})();
var statearr_26690_26717 = state_26686__$1;
(statearr_26690_26717[(2)] = null);

(statearr_26690_26717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (4))){
var inst_26666 = (state_26686[(8)]);
var inst_26666__$1 = (state_26686[(2)]);
var inst_26667 = (inst_26666__$1 == null);
var inst_26668 = cljs.core.not.call(null,inst_26667);
var state_26686__$1 = (function (){var statearr_26691 = state_26686;
(statearr_26691[(8)] = inst_26666__$1);

return statearr_26691;
})();
if(inst_26668){
var statearr_26692_26718 = state_26686__$1;
(statearr_26692_26718[(1)] = (5));

} else {
var statearr_26693_26719 = state_26686__$1;
(statearr_26693_26719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (6))){
var state_26686__$1 = state_26686;
var statearr_26694_26720 = state_26686__$1;
(statearr_26694_26720[(2)] = null);

(statearr_26694_26720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (3))){
var inst_26683 = (state_26686[(2)]);
var inst_26684 = cljs.core.async.close_BANG_.call(null,out);
var state_26686__$1 = (function (){var statearr_26695 = state_26686;
(statearr_26695[(9)] = inst_26683);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26686__$1,inst_26684);
} else {
if((state_val_26687 === (2))){
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(4),ch);
} else {
if((state_val_26687 === (11))){
var inst_26666 = (state_26686[(8)]);
var inst_26675 = (state_26686[(2)]);
var inst_26663 = inst_26666;
var state_26686__$1 = (function (){var statearr_26696 = state_26686;
(statearr_26696[(10)] = inst_26675);

(statearr_26696[(7)] = inst_26663);

return statearr_26696;
})();
var statearr_26697_26721 = state_26686__$1;
(statearr_26697_26721[(2)] = null);

(statearr_26697_26721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (9))){
var inst_26666 = (state_26686[(8)]);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26686__$1,(11),out,inst_26666);
} else {
if((state_val_26687 === (5))){
var inst_26663 = (state_26686[(7)]);
var inst_26666 = (state_26686[(8)]);
var inst_26670 = cljs.core._EQ_.call(null,inst_26666,inst_26663);
var state_26686__$1 = state_26686;
if(inst_26670){
var statearr_26699_26722 = state_26686__$1;
(statearr_26699_26722[(1)] = (8));

} else {
var statearr_26700_26723 = state_26686__$1;
(statearr_26700_26723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (10))){
var inst_26678 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26701_26724 = state_26686__$1;
(statearr_26701_26724[(2)] = inst_26678);

(statearr_26701_26724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (8))){
var inst_26663 = (state_26686[(7)]);
var tmp26698 = inst_26663;
var inst_26663__$1 = tmp26698;
var state_26686__$1 = (function (){var statearr_26702 = state_26686;
(statearr_26702[(7)] = inst_26663__$1);

return statearr_26702;
})();
var statearr_26703_26725 = state_26686__$1;
(statearr_26703_26725[(2)] = null);

(statearr_26703_26725[(1)] = (2));


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
});})(c__24120__auto___26715,out))
;
return ((function (switch__24008__auto__,c__24120__auto___26715,out){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26707[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26707[(1)] = (1));

return statearr_26707;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26686){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26708){if((e26708 instanceof Object)){
var ex__24012__auto__ = e26708;
var statearr_26709_26726 = state_26686;
(statearr_26709_26726[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26727 = state_26686;
state_26686 = G__26727;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26715,out))
})();
var state__24122__auto__ = (function (){var statearr_26710 = f__24121__auto__.call(null);
(statearr_26710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26715);

return statearr_26710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26715,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26728 = [];
var len__19693__auto___26798 = arguments.length;
var i__19694__auto___26799 = (0);
while(true){
if((i__19694__auto___26799 < len__19693__auto___26798)){
args26728.push((arguments[i__19694__auto___26799]));

var G__26800 = (i__19694__auto___26799 + (1));
i__19694__auto___26799 = G__26800;
continue;
} else {
}
break;
}

var G__26730 = args26728.length;
switch (G__26730) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26728.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24120__auto___26802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26802,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26802,out){
return (function (state_26768){
var state_val_26769 = (state_26768[(1)]);
if((state_val_26769 === (7))){
var inst_26764 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26770_26803 = state_26768__$1;
(statearr_26770_26803[(2)] = inst_26764);

(statearr_26770_26803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (1))){
var inst_26731 = (new Array(n));
var inst_26732 = inst_26731;
var inst_26733 = (0);
var state_26768__$1 = (function (){var statearr_26771 = state_26768;
(statearr_26771[(7)] = inst_26733);

(statearr_26771[(8)] = inst_26732);

return statearr_26771;
})();
var statearr_26772_26804 = state_26768__$1;
(statearr_26772_26804[(2)] = null);

(statearr_26772_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (4))){
var inst_26736 = (state_26768[(9)]);
var inst_26736__$1 = (state_26768[(2)]);
var inst_26737 = (inst_26736__$1 == null);
var inst_26738 = cljs.core.not.call(null,inst_26737);
var state_26768__$1 = (function (){var statearr_26773 = state_26768;
(statearr_26773[(9)] = inst_26736__$1);

return statearr_26773;
})();
if(inst_26738){
var statearr_26774_26805 = state_26768__$1;
(statearr_26774_26805[(1)] = (5));

} else {
var statearr_26775_26806 = state_26768__$1;
(statearr_26775_26806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (15))){
var inst_26758 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26776_26807 = state_26768__$1;
(statearr_26776_26807[(2)] = inst_26758);

(statearr_26776_26807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (13))){
var state_26768__$1 = state_26768;
var statearr_26777_26808 = state_26768__$1;
(statearr_26777_26808[(2)] = null);

(statearr_26777_26808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (6))){
var inst_26733 = (state_26768[(7)]);
var inst_26754 = (inst_26733 > (0));
var state_26768__$1 = state_26768;
if(cljs.core.truth_(inst_26754)){
var statearr_26778_26809 = state_26768__$1;
(statearr_26778_26809[(1)] = (12));

} else {
var statearr_26779_26810 = state_26768__$1;
(statearr_26779_26810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (3))){
var inst_26766 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26768__$1,inst_26766);
} else {
if((state_val_26769 === (12))){
var inst_26732 = (state_26768[(8)]);
var inst_26756 = cljs.core.vec.call(null,inst_26732);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26768__$1,(15),out,inst_26756);
} else {
if((state_val_26769 === (2))){
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26768__$1,(4),ch);
} else {
if((state_val_26769 === (11))){
var inst_26748 = (state_26768[(2)]);
var inst_26749 = (new Array(n));
var inst_26732 = inst_26749;
var inst_26733 = (0);
var state_26768__$1 = (function (){var statearr_26780 = state_26768;
(statearr_26780[(7)] = inst_26733);

(statearr_26780[(10)] = inst_26748);

(statearr_26780[(8)] = inst_26732);

return statearr_26780;
})();
var statearr_26781_26811 = state_26768__$1;
(statearr_26781_26811[(2)] = null);

(statearr_26781_26811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (9))){
var inst_26732 = (state_26768[(8)]);
var inst_26746 = cljs.core.vec.call(null,inst_26732);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26768__$1,(11),out,inst_26746);
} else {
if((state_val_26769 === (5))){
var inst_26741 = (state_26768[(11)]);
var inst_26733 = (state_26768[(7)]);
var inst_26732 = (state_26768[(8)]);
var inst_26736 = (state_26768[(9)]);
var inst_26740 = (inst_26732[inst_26733] = inst_26736);
var inst_26741__$1 = (inst_26733 + (1));
var inst_26742 = (inst_26741__$1 < n);
var state_26768__$1 = (function (){var statearr_26782 = state_26768;
(statearr_26782[(11)] = inst_26741__$1);

(statearr_26782[(12)] = inst_26740);

return statearr_26782;
})();
if(cljs.core.truth_(inst_26742)){
var statearr_26783_26812 = state_26768__$1;
(statearr_26783_26812[(1)] = (8));

} else {
var statearr_26784_26813 = state_26768__$1;
(statearr_26784_26813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (14))){
var inst_26761 = (state_26768[(2)]);
var inst_26762 = cljs.core.async.close_BANG_.call(null,out);
var state_26768__$1 = (function (){var statearr_26786 = state_26768;
(statearr_26786[(13)] = inst_26761);

return statearr_26786;
})();
var statearr_26787_26814 = state_26768__$1;
(statearr_26787_26814[(2)] = inst_26762);

(statearr_26787_26814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (10))){
var inst_26752 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26788_26815 = state_26768__$1;
(statearr_26788_26815[(2)] = inst_26752);

(statearr_26788_26815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (8))){
var inst_26741 = (state_26768[(11)]);
var inst_26732 = (state_26768[(8)]);
var tmp26785 = inst_26732;
var inst_26732__$1 = tmp26785;
var inst_26733 = inst_26741;
var state_26768__$1 = (function (){var statearr_26789 = state_26768;
(statearr_26789[(7)] = inst_26733);

(statearr_26789[(8)] = inst_26732__$1);

return statearr_26789;
})();
var statearr_26790_26816 = state_26768__$1;
(statearr_26790_26816[(2)] = null);

(statearr_26790_26816[(1)] = (2));


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
});})(c__24120__auto___26802,out))
;
return ((function (switch__24008__auto__,c__24120__auto___26802,out){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26794[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26794[(1)] = (1));

return statearr_26794;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26768){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26795){if((e26795 instanceof Object)){
var ex__24012__auto__ = e26795;
var statearr_26796_26817 = state_26768;
(statearr_26796_26817[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26818 = state_26768;
state_26768 = G__26818;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26802,out))
})();
var state__24122__auto__ = (function (){var statearr_26797 = f__24121__auto__.call(null);
(statearr_26797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26802);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26802,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26819 = [];
var len__19693__auto___26893 = arguments.length;
var i__19694__auto___26894 = (0);
while(true){
if((i__19694__auto___26894 < len__19693__auto___26893)){
args26819.push((arguments[i__19694__auto___26894]));

var G__26895 = (i__19694__auto___26894 + (1));
i__19694__auto___26894 = G__26895;
continue;
} else {
}
break;
}

var G__26821 = args26819.length;
switch (G__26821) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26819.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24120__auto___26897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26897,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___26897,out){
return (function (state_26863){
var state_val_26864 = (state_26863[(1)]);
if((state_val_26864 === (7))){
var inst_26859 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26865_26898 = state_26863__$1;
(statearr_26865_26898[(2)] = inst_26859);

(statearr_26865_26898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (1))){
var inst_26822 = [];
var inst_26823 = inst_26822;
var inst_26824 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26863__$1 = (function (){var statearr_26866 = state_26863;
(statearr_26866[(7)] = inst_26823);

(statearr_26866[(8)] = inst_26824);

return statearr_26866;
})();
var statearr_26867_26899 = state_26863__$1;
(statearr_26867_26899[(2)] = null);

(statearr_26867_26899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (4))){
var inst_26827 = (state_26863[(9)]);
var inst_26827__$1 = (state_26863[(2)]);
var inst_26828 = (inst_26827__$1 == null);
var inst_26829 = cljs.core.not.call(null,inst_26828);
var state_26863__$1 = (function (){var statearr_26868 = state_26863;
(statearr_26868[(9)] = inst_26827__$1);

return statearr_26868;
})();
if(inst_26829){
var statearr_26869_26900 = state_26863__$1;
(statearr_26869_26900[(1)] = (5));

} else {
var statearr_26870_26901 = state_26863__$1;
(statearr_26870_26901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (15))){
var inst_26853 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26871_26902 = state_26863__$1;
(statearr_26871_26902[(2)] = inst_26853);

(statearr_26871_26902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (13))){
var state_26863__$1 = state_26863;
var statearr_26872_26903 = state_26863__$1;
(statearr_26872_26903[(2)] = null);

(statearr_26872_26903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (6))){
var inst_26823 = (state_26863[(7)]);
var inst_26848 = inst_26823.length;
var inst_26849 = (inst_26848 > (0));
var state_26863__$1 = state_26863;
if(cljs.core.truth_(inst_26849)){
var statearr_26873_26904 = state_26863__$1;
(statearr_26873_26904[(1)] = (12));

} else {
var statearr_26874_26905 = state_26863__$1;
(statearr_26874_26905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (3))){
var inst_26861 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26863__$1,inst_26861);
} else {
if((state_val_26864 === (12))){
var inst_26823 = (state_26863[(7)]);
var inst_26851 = cljs.core.vec.call(null,inst_26823);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26863__$1,(15),out,inst_26851);
} else {
if((state_val_26864 === (2))){
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26863__$1,(4),ch);
} else {
if((state_val_26864 === (11))){
var inst_26831 = (state_26863[(10)]);
var inst_26827 = (state_26863[(9)]);
var inst_26841 = (state_26863[(2)]);
var inst_26842 = [];
var inst_26843 = inst_26842.push(inst_26827);
var inst_26823 = inst_26842;
var inst_26824 = inst_26831;
var state_26863__$1 = (function (){var statearr_26875 = state_26863;
(statearr_26875[(11)] = inst_26843);

(statearr_26875[(7)] = inst_26823);

(statearr_26875[(12)] = inst_26841);

(statearr_26875[(8)] = inst_26824);

return statearr_26875;
})();
var statearr_26876_26906 = state_26863__$1;
(statearr_26876_26906[(2)] = null);

(statearr_26876_26906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (9))){
var inst_26823 = (state_26863[(7)]);
var inst_26839 = cljs.core.vec.call(null,inst_26823);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26863__$1,(11),out,inst_26839);
} else {
if((state_val_26864 === (5))){
var inst_26831 = (state_26863[(10)]);
var inst_26827 = (state_26863[(9)]);
var inst_26824 = (state_26863[(8)]);
var inst_26831__$1 = f.call(null,inst_26827);
var inst_26832 = cljs.core._EQ_.call(null,inst_26831__$1,inst_26824);
var inst_26833 = cljs.core.keyword_identical_QMARK_.call(null,inst_26824,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26834 = (inst_26832) || (inst_26833);
var state_26863__$1 = (function (){var statearr_26877 = state_26863;
(statearr_26877[(10)] = inst_26831__$1);

return statearr_26877;
})();
if(cljs.core.truth_(inst_26834)){
var statearr_26878_26907 = state_26863__$1;
(statearr_26878_26907[(1)] = (8));

} else {
var statearr_26879_26908 = state_26863__$1;
(statearr_26879_26908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (14))){
var inst_26856 = (state_26863[(2)]);
var inst_26857 = cljs.core.async.close_BANG_.call(null,out);
var state_26863__$1 = (function (){var statearr_26881 = state_26863;
(statearr_26881[(13)] = inst_26856);

return statearr_26881;
})();
var statearr_26882_26909 = state_26863__$1;
(statearr_26882_26909[(2)] = inst_26857);

(statearr_26882_26909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (10))){
var inst_26846 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26883_26910 = state_26863__$1;
(statearr_26883_26910[(2)] = inst_26846);

(statearr_26883_26910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (8))){
var inst_26823 = (state_26863[(7)]);
var inst_26831 = (state_26863[(10)]);
var inst_26827 = (state_26863[(9)]);
var inst_26836 = inst_26823.push(inst_26827);
var tmp26880 = inst_26823;
var inst_26823__$1 = tmp26880;
var inst_26824 = inst_26831;
var state_26863__$1 = (function (){var statearr_26884 = state_26863;
(statearr_26884[(7)] = inst_26823__$1);

(statearr_26884[(14)] = inst_26836);

(statearr_26884[(8)] = inst_26824);

return statearr_26884;
})();
var statearr_26885_26911 = state_26863__$1;
(statearr_26885_26911[(2)] = null);

(statearr_26885_26911[(1)] = (2));


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
});})(c__24120__auto___26897,out))
;
return ((function (switch__24008__auto__,c__24120__auto___26897,out){
return (function() {
var cljs$core$async$state_machine__24009__auto__ = null;
var cljs$core$async$state_machine__24009__auto____0 = (function (){
var statearr_26889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26889[(0)] = cljs$core$async$state_machine__24009__auto__);

(statearr_26889[(1)] = (1));

return statearr_26889;
});
var cljs$core$async$state_machine__24009__auto____1 = (function (state_26863){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_26863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e26890){if((e26890 instanceof Object)){
var ex__24012__auto__ = e26890;
var statearr_26891_26912 = state_26863;
(statearr_26891_26912[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26913 = state_26863;
state_26863 = G__26913;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
cljs$core$async$state_machine__24009__auto__ = function(state_26863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24009__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24009__auto____1.call(this,state_26863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24009__auto____0;
cljs$core$async$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24009__auto____1;
return cljs$core$async$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___26897,out))
})();
var state__24122__auto__ = (function (){var statearr_26892 = f__24121__auto__.call(null);
(statearr_26892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___26897);

return statearr_26892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26897,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map