// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28198 = arguments.length;
var i__19694__auto___28199 = (0);
while(true){
if((i__19694__auto___28199 < len__19693__auto___28198)){
args__19700__auto__.push((arguments[i__19694__auto___28199]));

var G__28200 = (i__19694__auto___28199 + (1));
i__19694__auto___28199 = G__28200;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq28197){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28197));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28202 = arguments.length;
var i__19694__auto___28203 = (0);
while(true){
if((i__19694__auto___28203 < len__19693__auto___28202)){
args__19700__auto__.push((arguments[i__19694__auto___28203]));

var G__28204 = (i__19694__auto___28203 + (1));
i__19694__auto___28203 = G__28204;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq28201){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28201));
});

var g_QMARK__28205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_28206 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__28205){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__28205))
,null));
var mkg_28207 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__28205,g_28206){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__28205,g_28206))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__28205,g_28206,mkg_28207){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__28205).call(null,x);
});})(g_QMARK__28205,g_28206,mkg_28207))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__28205,g_28206,mkg_28207){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_28207).call(null,gfn);
});})(g_QMARK__28205,g_28206,mkg_28207))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__28205,g_28206,mkg_28207){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_28206).call(null,generator);
});})(g_QMARK__28205,g_28206,mkg_28207))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28169__auto___28226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28169__auto___28226){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28227 = arguments.length;
var i__19694__auto___28228 = (0);
while(true){
if((i__19694__auto___28228 < len__19693__auto___28227)){
args__19700__auto__.push((arguments[i__19694__auto___28228]));

var G__28229 = (i__19694__auto___28228 + (1));
i__19694__auto___28228 = G__28229;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28226))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28226),args);
});})(g__28169__auto___28226))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28169__auto___28226){
return (function (seq28208){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28208));
});})(g__28169__auto___28226))
;


var g__28169__auto___28230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28169__auto___28230){
return (function cljs$spec$impl$gen$list(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28231 = arguments.length;
var i__19694__auto___28232 = (0);
while(true){
if((i__19694__auto___28232 < len__19693__auto___28231)){
args__19700__auto__.push((arguments[i__19694__auto___28232]));

var G__28233 = (i__19694__auto___28232 + (1));
i__19694__auto___28232 = G__28233;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28230))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28230),args);
});})(g__28169__auto___28230))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28169__auto___28230){
return (function (seq28209){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28209));
});})(g__28169__auto___28230))
;


var g__28169__auto___28234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28169__auto___28234){
return (function cljs$spec$impl$gen$map(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28235 = arguments.length;
var i__19694__auto___28236 = (0);
while(true){
if((i__19694__auto___28236 < len__19693__auto___28235)){
args__19700__auto__.push((arguments[i__19694__auto___28236]));

var G__28237 = (i__19694__auto___28236 + (1));
i__19694__auto___28236 = G__28237;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28234))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28234),args);
});})(g__28169__auto___28234))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28169__auto___28234){
return (function (seq28210){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28210));
});})(g__28169__auto___28234))
;


var g__28169__auto___28238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28169__auto___28238){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28239 = arguments.length;
var i__19694__auto___28240 = (0);
while(true){
if((i__19694__auto___28240 < len__19693__auto___28239)){
args__19700__auto__.push((arguments[i__19694__auto___28240]));

var G__28241 = (i__19694__auto___28240 + (1));
i__19694__auto___28240 = G__28241;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28238))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28238),args);
});})(g__28169__auto___28238))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28169__auto___28238){
return (function (seq28211){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28211));
});})(g__28169__auto___28238))
;


var g__28169__auto___28242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28169__auto___28242){
return (function cljs$spec$impl$gen$set(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28243 = arguments.length;
var i__19694__auto___28244 = (0);
while(true){
if((i__19694__auto___28244 < len__19693__auto___28243)){
args__19700__auto__.push((arguments[i__19694__auto___28244]));

var G__28245 = (i__19694__auto___28244 + (1));
i__19694__auto___28244 = G__28245;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28242))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28242),args);
});})(g__28169__auto___28242))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28169__auto___28242){
return (function (seq28212){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28212));
});})(g__28169__auto___28242))
;


var g__28169__auto___28246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28169__auto___28246){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28247 = arguments.length;
var i__19694__auto___28248 = (0);
while(true){
if((i__19694__auto___28248 < len__19693__auto___28247)){
args__19700__auto__.push((arguments[i__19694__auto___28248]));

var G__28249 = (i__19694__auto___28248 + (1));
i__19694__auto___28248 = G__28249;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28246))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28246),args);
});})(g__28169__auto___28246))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28169__auto___28246){
return (function (seq28213){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28213));
});})(g__28169__auto___28246))
;


var g__28169__auto___28250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28169__auto___28250){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28251 = arguments.length;
var i__19694__auto___28252 = (0);
while(true){
if((i__19694__auto___28252 < len__19693__auto___28251)){
args__19700__auto__.push((arguments[i__19694__auto___28252]));

var G__28253 = (i__19694__auto___28252 + (1));
i__19694__auto___28252 = G__28253;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28250))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28250),args);
});})(g__28169__auto___28250))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28169__auto___28250){
return (function (seq28214){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28214));
});})(g__28169__auto___28250))
;


var g__28169__auto___28254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28169__auto___28254){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28255 = arguments.length;
var i__19694__auto___28256 = (0);
while(true){
if((i__19694__auto___28256 < len__19693__auto___28255)){
args__19700__auto__.push((arguments[i__19694__auto___28256]));

var G__28257 = (i__19694__auto___28256 + (1));
i__19694__auto___28256 = G__28257;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28254))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28254),args);
});})(g__28169__auto___28254))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28169__auto___28254){
return (function (seq28215){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28215));
});})(g__28169__auto___28254))
;


var g__28169__auto___28258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28169__auto___28258){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28259 = arguments.length;
var i__19694__auto___28260 = (0);
while(true){
if((i__19694__auto___28260 < len__19693__auto___28259)){
args__19700__auto__.push((arguments[i__19694__auto___28260]));

var G__28261 = (i__19694__auto___28260 + (1));
i__19694__auto___28260 = G__28261;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28258))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28258),args);
});})(g__28169__auto___28258))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28169__auto___28258){
return (function (seq28216){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28216));
});})(g__28169__auto___28258))
;


var g__28169__auto___28262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28169__auto___28262){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28263 = arguments.length;
var i__19694__auto___28264 = (0);
while(true){
if((i__19694__auto___28264 < len__19693__auto___28263)){
args__19700__auto__.push((arguments[i__19694__auto___28264]));

var G__28265 = (i__19694__auto___28264 + (1));
i__19694__auto___28264 = G__28265;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28262))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28262),args);
});})(g__28169__auto___28262))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28169__auto___28262){
return (function (seq28217){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28217));
});})(g__28169__auto___28262))
;


var g__28169__auto___28266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28169__auto___28266){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28267 = arguments.length;
var i__19694__auto___28268 = (0);
while(true){
if((i__19694__auto___28268 < len__19693__auto___28267)){
args__19700__auto__.push((arguments[i__19694__auto___28268]));

var G__28269 = (i__19694__auto___28268 + (1));
i__19694__auto___28268 = G__28269;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28266))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28266),args);
});})(g__28169__auto___28266))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28169__auto___28266){
return (function (seq28218){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28218));
});})(g__28169__auto___28266))
;


var g__28169__auto___28270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28169__auto___28270){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28271 = arguments.length;
var i__19694__auto___28272 = (0);
while(true){
if((i__19694__auto___28272 < len__19693__auto___28271)){
args__19700__auto__.push((arguments[i__19694__auto___28272]));

var G__28273 = (i__19694__auto___28272 + (1));
i__19694__auto___28272 = G__28273;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28270))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28270),args);
});})(g__28169__auto___28270))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28169__auto___28270){
return (function (seq28219){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28219));
});})(g__28169__auto___28270))
;


var g__28169__auto___28274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28169__auto___28274){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28275 = arguments.length;
var i__19694__auto___28276 = (0);
while(true){
if((i__19694__auto___28276 < len__19693__auto___28275)){
args__19700__auto__.push((arguments[i__19694__auto___28276]));

var G__28277 = (i__19694__auto___28276 + (1));
i__19694__auto___28276 = G__28277;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28274))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28274),args);
});})(g__28169__auto___28274))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28169__auto___28274){
return (function (seq28220){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28220));
});})(g__28169__auto___28274))
;


var g__28169__auto___28278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28169__auto___28278){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28279 = arguments.length;
var i__19694__auto___28280 = (0);
while(true){
if((i__19694__auto___28280 < len__19693__auto___28279)){
args__19700__auto__.push((arguments[i__19694__auto___28280]));

var G__28281 = (i__19694__auto___28280 + (1));
i__19694__auto___28280 = G__28281;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28278))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28278),args);
});})(g__28169__auto___28278))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28169__auto___28278){
return (function (seq28221){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28221));
});})(g__28169__auto___28278))
;


var g__28169__auto___28282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28169__auto___28282){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28283 = arguments.length;
var i__19694__auto___28284 = (0);
while(true){
if((i__19694__auto___28284 < len__19693__auto___28283)){
args__19700__auto__.push((arguments[i__19694__auto___28284]));

var G__28285 = (i__19694__auto___28284 + (1));
i__19694__auto___28284 = G__28285;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28282))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28282){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28282),args);
});})(g__28169__auto___28282))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28169__auto___28282){
return (function (seq28222){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28222));
});})(g__28169__auto___28282))
;


var g__28169__auto___28286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28169__auto___28286){
return (function cljs$spec$impl$gen$return(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28287 = arguments.length;
var i__19694__auto___28288 = (0);
while(true){
if((i__19694__auto___28288 < len__19693__auto___28287)){
args__19700__auto__.push((arguments[i__19694__auto___28288]));

var G__28289 = (i__19694__auto___28288 + (1));
i__19694__auto___28288 = G__28289;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28286))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28286),args);
});})(g__28169__auto___28286))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28169__auto___28286){
return (function (seq28223){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28223));
});})(g__28169__auto___28286))
;


var g__28169__auto___28290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28169__auto___28290){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28291 = arguments.length;
var i__19694__auto___28292 = (0);
while(true){
if((i__19694__auto___28292 < len__19693__auto___28291)){
args__19700__auto__.push((arguments[i__19694__auto___28292]));

var G__28293 = (i__19694__auto___28292 + (1));
i__19694__auto___28292 = G__28293;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28290))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28290),args);
});})(g__28169__auto___28290))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28169__auto___28290){
return (function (seq28224){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28224));
});})(g__28169__auto___28290))
;


var g__28169__auto___28294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28169__auto___28294){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28295 = arguments.length;
var i__19694__auto___28296 = (0);
while(true){
if((i__19694__auto___28296 < len__19693__auto___28295)){
args__19700__auto__.push((arguments[i__19694__auto___28296]));

var G__28297 = (i__19694__auto___28296 + (1));
i__19694__auto___28296 = G__28297;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28169__auto___28294))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28169__auto___28294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28169__auto___28294),args);
});})(g__28169__auto___28294))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28169__auto___28294){
return (function (seq28225){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28225));
});})(g__28169__auto___28294))
;

var g__28182__auto___28319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28182__auto___28319){
return (function cljs$spec$impl$gen$any(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28320 = arguments.length;
var i__19694__auto___28321 = (0);
while(true){
if((i__19694__auto___28321 < len__19693__auto___28320)){
args__19700__auto__.push((arguments[i__19694__auto___28321]));

var G__28322 = (i__19694__auto___28321 + (1));
i__19694__auto___28321 = G__28322;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28319))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28319){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28319);
});})(g__28182__auto___28319))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28182__auto___28319){
return (function (seq28298){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28298));
});})(g__28182__auto___28319))
;


var g__28182__auto___28323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28182__auto___28323){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28324 = arguments.length;
var i__19694__auto___28325 = (0);
while(true){
if((i__19694__auto___28325 < len__19693__auto___28324)){
args__19700__auto__.push((arguments[i__19694__auto___28325]));

var G__28326 = (i__19694__auto___28325 + (1));
i__19694__auto___28325 = G__28326;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28323))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28323){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28323);
});})(g__28182__auto___28323))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28182__auto___28323){
return (function (seq28299){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28299));
});})(g__28182__auto___28323))
;


var g__28182__auto___28327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28182__auto___28327){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28328 = arguments.length;
var i__19694__auto___28329 = (0);
while(true){
if((i__19694__auto___28329 < len__19693__auto___28328)){
args__19700__auto__.push((arguments[i__19694__auto___28329]));

var G__28330 = (i__19694__auto___28329 + (1));
i__19694__auto___28329 = G__28330;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28327))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28327){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28327);
});})(g__28182__auto___28327))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28182__auto___28327){
return (function (seq28300){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28300));
});})(g__28182__auto___28327))
;


var g__28182__auto___28331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28182__auto___28331){
return (function cljs$spec$impl$gen$char(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28332 = arguments.length;
var i__19694__auto___28333 = (0);
while(true){
if((i__19694__auto___28333 < len__19693__auto___28332)){
args__19700__auto__.push((arguments[i__19694__auto___28333]));

var G__28334 = (i__19694__auto___28333 + (1));
i__19694__auto___28333 = G__28334;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28331))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28331){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28331);
});})(g__28182__auto___28331))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28182__auto___28331){
return (function (seq28301){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28301));
});})(g__28182__auto___28331))
;


var g__28182__auto___28335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28182__auto___28335){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28336 = arguments.length;
var i__19694__auto___28337 = (0);
while(true){
if((i__19694__auto___28337 < len__19693__auto___28336)){
args__19700__auto__.push((arguments[i__19694__auto___28337]));

var G__28338 = (i__19694__auto___28337 + (1));
i__19694__auto___28337 = G__28338;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28335))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28335){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28335);
});})(g__28182__auto___28335))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28182__auto___28335){
return (function (seq28302){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28302));
});})(g__28182__auto___28335))
;


var g__28182__auto___28339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28182__auto___28339){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28340 = arguments.length;
var i__19694__auto___28341 = (0);
while(true){
if((i__19694__auto___28341 < len__19693__auto___28340)){
args__19700__auto__.push((arguments[i__19694__auto___28341]));

var G__28342 = (i__19694__auto___28341 + (1));
i__19694__auto___28341 = G__28342;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28339))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28339){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28339);
});})(g__28182__auto___28339))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28182__auto___28339){
return (function (seq28303){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28303));
});})(g__28182__auto___28339))
;


var g__28182__auto___28343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28182__auto___28343){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28344 = arguments.length;
var i__19694__auto___28345 = (0);
while(true){
if((i__19694__auto___28345 < len__19693__auto___28344)){
args__19700__auto__.push((arguments[i__19694__auto___28345]));

var G__28346 = (i__19694__auto___28345 + (1));
i__19694__auto___28345 = G__28346;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28343))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28343){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28343);
});})(g__28182__auto___28343))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28182__auto___28343){
return (function (seq28304){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28304));
});})(g__28182__auto___28343))
;


var g__28182__auto___28347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28182__auto___28347){
return (function cljs$spec$impl$gen$double(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28348 = arguments.length;
var i__19694__auto___28349 = (0);
while(true){
if((i__19694__auto___28349 < len__19693__auto___28348)){
args__19700__auto__.push((arguments[i__19694__auto___28349]));

var G__28350 = (i__19694__auto___28349 + (1));
i__19694__auto___28349 = G__28350;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28347))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28347){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28347);
});})(g__28182__auto___28347))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28182__auto___28347){
return (function (seq28305){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28305));
});})(g__28182__auto___28347))
;


var g__28182__auto___28351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28182__auto___28351){
return (function cljs$spec$impl$gen$int(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28352 = arguments.length;
var i__19694__auto___28353 = (0);
while(true){
if((i__19694__auto___28353 < len__19693__auto___28352)){
args__19700__auto__.push((arguments[i__19694__auto___28353]));

var G__28354 = (i__19694__auto___28353 + (1));
i__19694__auto___28353 = G__28354;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28351))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28351){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28351);
});})(g__28182__auto___28351))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28182__auto___28351){
return (function (seq28306){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28306));
});})(g__28182__auto___28351))
;


var g__28182__auto___28355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28182__auto___28355){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28356 = arguments.length;
var i__19694__auto___28357 = (0);
while(true){
if((i__19694__auto___28357 < len__19693__auto___28356)){
args__19700__auto__.push((arguments[i__19694__auto___28357]));

var G__28358 = (i__19694__auto___28357 + (1));
i__19694__auto___28357 = G__28358;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28355))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28355){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28355);
});})(g__28182__auto___28355))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28182__auto___28355){
return (function (seq28307){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28307));
});})(g__28182__auto___28355))
;


var g__28182__auto___28359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28182__auto___28359){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28360 = arguments.length;
var i__19694__auto___28361 = (0);
while(true){
if((i__19694__auto___28361 < len__19693__auto___28360)){
args__19700__auto__.push((arguments[i__19694__auto___28361]));

var G__28362 = (i__19694__auto___28361 + (1));
i__19694__auto___28361 = G__28362;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28359))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28359){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28359);
});})(g__28182__auto___28359))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28182__auto___28359){
return (function (seq28308){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28308));
});})(g__28182__auto___28359))
;


var g__28182__auto___28363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28182__auto___28363){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28364 = arguments.length;
var i__19694__auto___28365 = (0);
while(true){
if((i__19694__auto___28365 < len__19693__auto___28364)){
args__19700__auto__.push((arguments[i__19694__auto___28365]));

var G__28366 = (i__19694__auto___28365 + (1));
i__19694__auto___28365 = G__28366;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28363))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28363){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28363);
});})(g__28182__auto___28363))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28182__auto___28363){
return (function (seq28309){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28309));
});})(g__28182__auto___28363))
;


var g__28182__auto___28367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28182__auto___28367){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28368 = arguments.length;
var i__19694__auto___28369 = (0);
while(true){
if((i__19694__auto___28369 < len__19693__auto___28368)){
args__19700__auto__.push((arguments[i__19694__auto___28369]));

var G__28370 = (i__19694__auto___28369 + (1));
i__19694__auto___28369 = G__28370;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28367))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28367){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28367);
});})(g__28182__auto___28367))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28182__auto___28367){
return (function (seq28310){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28310));
});})(g__28182__auto___28367))
;


var g__28182__auto___28371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28182__auto___28371){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28372 = arguments.length;
var i__19694__auto___28373 = (0);
while(true){
if((i__19694__auto___28373 < len__19693__auto___28372)){
args__19700__auto__.push((arguments[i__19694__auto___28373]));

var G__28374 = (i__19694__auto___28373 + (1));
i__19694__auto___28373 = G__28374;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28371))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28371){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28371);
});})(g__28182__auto___28371))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28182__auto___28371){
return (function (seq28311){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28311));
});})(g__28182__auto___28371))
;


var g__28182__auto___28375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28182__auto___28375){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28376 = arguments.length;
var i__19694__auto___28377 = (0);
while(true){
if((i__19694__auto___28377 < len__19693__auto___28376)){
args__19700__auto__.push((arguments[i__19694__auto___28377]));

var G__28378 = (i__19694__auto___28377 + (1));
i__19694__auto___28377 = G__28378;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28375))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28375){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28375);
});})(g__28182__auto___28375))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28182__auto___28375){
return (function (seq28312){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28312));
});})(g__28182__auto___28375))
;


var g__28182__auto___28379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28182__auto___28379){
return (function cljs$spec$impl$gen$string(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28380 = arguments.length;
var i__19694__auto___28381 = (0);
while(true){
if((i__19694__auto___28381 < len__19693__auto___28380)){
args__19700__auto__.push((arguments[i__19694__auto___28381]));

var G__28382 = (i__19694__auto___28381 + (1));
i__19694__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28379))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28379){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28379);
});})(g__28182__auto___28379))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28182__auto___28379){
return (function (seq28313){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28313));
});})(g__28182__auto___28379))
;


var g__28182__auto___28383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28182__auto___28383){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28384 = arguments.length;
var i__19694__auto___28385 = (0);
while(true){
if((i__19694__auto___28385 < len__19693__auto___28384)){
args__19700__auto__.push((arguments[i__19694__auto___28385]));

var G__28386 = (i__19694__auto___28385 + (1));
i__19694__auto___28385 = G__28386;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28383))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28383){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28383);
});})(g__28182__auto___28383))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28182__auto___28383){
return (function (seq28314){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28314));
});})(g__28182__auto___28383))
;


var g__28182__auto___28387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28182__auto___28387){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28388 = arguments.length;
var i__19694__auto___28389 = (0);
while(true){
if((i__19694__auto___28389 < len__19693__auto___28388)){
args__19700__auto__.push((arguments[i__19694__auto___28389]));

var G__28390 = (i__19694__auto___28389 + (1));
i__19694__auto___28389 = G__28390;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28387))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28387){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28387);
});})(g__28182__auto___28387))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28182__auto___28387){
return (function (seq28315){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28315));
});})(g__28182__auto___28387))
;


var g__28182__auto___28391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28182__auto___28391){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28392 = arguments.length;
var i__19694__auto___28393 = (0);
while(true){
if((i__19694__auto___28393 < len__19693__auto___28392)){
args__19700__auto__.push((arguments[i__19694__auto___28393]));

var G__28394 = (i__19694__auto___28393 + (1));
i__19694__auto___28393 = G__28394;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28391))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28391){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28391);
});})(g__28182__auto___28391))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28182__auto___28391){
return (function (seq28316){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28316));
});})(g__28182__auto___28391))
;


var g__28182__auto___28395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28182__auto___28395){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28396 = arguments.length;
var i__19694__auto___28397 = (0);
while(true){
if((i__19694__auto___28397 < len__19693__auto___28396)){
args__19700__auto__.push((arguments[i__19694__auto___28397]));

var G__28398 = (i__19694__auto___28397 + (1));
i__19694__auto___28397 = G__28398;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28395))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28395){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28395);
});})(g__28182__auto___28395))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28182__auto___28395){
return (function (seq28317){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28317));
});})(g__28182__auto___28395))
;


var g__28182__auto___28399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28182__auto___28399){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28400 = arguments.length;
var i__19694__auto___28401 = (0);
while(true){
if((i__19694__auto___28401 < len__19693__auto___28400)){
args__19700__auto__.push((arguments[i__19694__auto___28401]));

var G__28402 = (i__19694__auto___28401 + (1));
i__19694__auto___28401 = G__28402;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});})(g__28182__auto___28399))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28182__auto___28399){
return (function (args){
return cljs.core.deref.call(null,g__28182__auto___28399);
});})(g__28182__auto___28399))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28182__auto___28399){
return (function (seq28318){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28318));
});})(g__28182__auto___28399))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19700__auto__ = [];
var len__19693__auto___28405 = arguments.length;
var i__19694__auto___28406 = (0);
while(true){
if((i__19694__auto___28406 < len__19693__auto___28405)){
args__19700__auto__.push((arguments[i__19694__auto___28406]));

var G__28407 = (i__19694__auto___28406 + (1));
i__19694__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__28403_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__28403_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq28404){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28404));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__28408_SHARP_){
return (new Date(p1__28408_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map