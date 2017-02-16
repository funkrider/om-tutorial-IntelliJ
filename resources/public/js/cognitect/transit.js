// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20256_20260 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20257_20261 = null;
var count__20258_20262 = (0);
var i__20259_20263 = (0);
while(true){
if((i__20259_20263 < count__20258_20262)){
var k_20264 = cljs.core._nth.call(null,chunk__20257_20261,i__20259_20263);
var v_20265 = (b[k_20264]);
(a[k_20264] = v_20265);

var G__20266 = seq__20256_20260;
var G__20267 = chunk__20257_20261;
var G__20268 = count__20258_20262;
var G__20269 = (i__20259_20263 + (1));
seq__20256_20260 = G__20266;
chunk__20257_20261 = G__20267;
count__20258_20262 = G__20268;
i__20259_20263 = G__20269;
continue;
} else {
var temp__4657__auto___20270 = cljs.core.seq.call(null,seq__20256_20260);
if(temp__4657__auto___20270){
var seq__20256_20271__$1 = temp__4657__auto___20270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20256_20271__$1)){
var c__19429__auto___20272 = cljs.core.chunk_first.call(null,seq__20256_20271__$1);
var G__20273 = cljs.core.chunk_rest.call(null,seq__20256_20271__$1);
var G__20274 = c__19429__auto___20272;
var G__20275 = cljs.core.count.call(null,c__19429__auto___20272);
var G__20276 = (0);
seq__20256_20260 = G__20273;
chunk__20257_20261 = G__20274;
count__20258_20262 = G__20275;
i__20259_20263 = G__20276;
continue;
} else {
var k_20277 = cljs.core.first.call(null,seq__20256_20271__$1);
var v_20278 = (b[k_20277]);
(a[k_20277] = v_20278);

var G__20279 = cljs.core.next.call(null,seq__20256_20271__$1);
var G__20280 = null;
var G__20281 = (0);
var G__20282 = (0);
seq__20256_20260 = G__20279;
chunk__20257_20261 = G__20280;
count__20258_20262 = G__20281;
i__20259_20263 = G__20282;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20283 = [];
var len__19693__auto___20286 = arguments.length;
var i__19694__auto___20287 = (0);
while(true){
if((i__19694__auto___20287 < len__19693__auto___20286)){
args20283.push((arguments[i__19694__auto___20287]));

var G__20288 = (i__19694__auto___20287 + (1));
i__19694__auto___20287 = G__20288;
continue;
} else {
}
break;
}

var G__20285 = args20283.length;
switch (G__20285) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20283.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20290 = (i + (2));
var G__20291 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20290;
ret = G__20291;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20292_20296 = cljs.core.seq.call(null,v);
var chunk__20293_20297 = null;
var count__20294_20298 = (0);
var i__20295_20299 = (0);
while(true){
if((i__20295_20299 < count__20294_20298)){
var x_20300 = cljs.core._nth.call(null,chunk__20293_20297,i__20295_20299);
ret.push(x_20300);

var G__20301 = seq__20292_20296;
var G__20302 = chunk__20293_20297;
var G__20303 = count__20294_20298;
var G__20304 = (i__20295_20299 + (1));
seq__20292_20296 = G__20301;
chunk__20293_20297 = G__20302;
count__20294_20298 = G__20303;
i__20295_20299 = G__20304;
continue;
} else {
var temp__4657__auto___20305 = cljs.core.seq.call(null,seq__20292_20296);
if(temp__4657__auto___20305){
var seq__20292_20306__$1 = temp__4657__auto___20305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20292_20306__$1)){
var c__19429__auto___20307 = cljs.core.chunk_first.call(null,seq__20292_20306__$1);
var G__20308 = cljs.core.chunk_rest.call(null,seq__20292_20306__$1);
var G__20309 = c__19429__auto___20307;
var G__20310 = cljs.core.count.call(null,c__19429__auto___20307);
var G__20311 = (0);
seq__20292_20296 = G__20308;
chunk__20293_20297 = G__20309;
count__20294_20298 = G__20310;
i__20295_20299 = G__20311;
continue;
} else {
var x_20312 = cljs.core.first.call(null,seq__20292_20306__$1);
ret.push(x_20312);

var G__20313 = cljs.core.next.call(null,seq__20292_20306__$1);
var G__20314 = null;
var G__20315 = (0);
var G__20316 = (0);
seq__20292_20296 = G__20313;
chunk__20293_20297 = G__20314;
count__20294_20298 = G__20315;
i__20295_20299 = G__20316;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20317_20321 = cljs.core.seq.call(null,v);
var chunk__20318_20322 = null;
var count__20319_20323 = (0);
var i__20320_20324 = (0);
while(true){
if((i__20320_20324 < count__20319_20323)){
var x_20325 = cljs.core._nth.call(null,chunk__20318_20322,i__20320_20324);
ret.push(x_20325);

var G__20326 = seq__20317_20321;
var G__20327 = chunk__20318_20322;
var G__20328 = count__20319_20323;
var G__20329 = (i__20320_20324 + (1));
seq__20317_20321 = G__20326;
chunk__20318_20322 = G__20327;
count__20319_20323 = G__20328;
i__20320_20324 = G__20329;
continue;
} else {
var temp__4657__auto___20330 = cljs.core.seq.call(null,seq__20317_20321);
if(temp__4657__auto___20330){
var seq__20317_20331__$1 = temp__4657__auto___20330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20317_20331__$1)){
var c__19429__auto___20332 = cljs.core.chunk_first.call(null,seq__20317_20331__$1);
var G__20333 = cljs.core.chunk_rest.call(null,seq__20317_20331__$1);
var G__20334 = c__19429__auto___20332;
var G__20335 = cljs.core.count.call(null,c__19429__auto___20332);
var G__20336 = (0);
seq__20317_20321 = G__20333;
chunk__20318_20322 = G__20334;
count__20319_20323 = G__20335;
i__20320_20324 = G__20336;
continue;
} else {
var x_20337 = cljs.core.first.call(null,seq__20317_20331__$1);
ret.push(x_20337);

var G__20338 = cljs.core.next.call(null,seq__20317_20331__$1);
var G__20339 = null;
var G__20340 = (0);
var G__20341 = (0);
seq__20317_20321 = G__20338;
chunk__20318_20322 = G__20339;
count__20319_20323 = G__20340;
i__20320_20324 = G__20341;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20342_20346 = cljs.core.seq.call(null,v);
var chunk__20343_20347 = null;
var count__20344_20348 = (0);
var i__20345_20349 = (0);
while(true){
if((i__20345_20349 < count__20344_20348)){
var x_20350 = cljs.core._nth.call(null,chunk__20343_20347,i__20345_20349);
ret.push(x_20350);

var G__20351 = seq__20342_20346;
var G__20352 = chunk__20343_20347;
var G__20353 = count__20344_20348;
var G__20354 = (i__20345_20349 + (1));
seq__20342_20346 = G__20351;
chunk__20343_20347 = G__20352;
count__20344_20348 = G__20353;
i__20345_20349 = G__20354;
continue;
} else {
var temp__4657__auto___20355 = cljs.core.seq.call(null,seq__20342_20346);
if(temp__4657__auto___20355){
var seq__20342_20356__$1 = temp__4657__auto___20355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20342_20356__$1)){
var c__19429__auto___20357 = cljs.core.chunk_first.call(null,seq__20342_20356__$1);
var G__20358 = cljs.core.chunk_rest.call(null,seq__20342_20356__$1);
var G__20359 = c__19429__auto___20357;
var G__20360 = cljs.core.count.call(null,c__19429__auto___20357);
var G__20361 = (0);
seq__20342_20346 = G__20358;
chunk__20343_20347 = G__20359;
count__20344_20348 = G__20360;
i__20345_20349 = G__20361;
continue;
} else {
var x_20362 = cljs.core.first.call(null,seq__20342_20356__$1);
ret.push(x_20362);

var G__20363 = cljs.core.next.call(null,seq__20342_20356__$1);
var G__20364 = null;
var G__20365 = (0);
var G__20366 = (0);
seq__20342_20346 = G__20363;
chunk__20343_20347 = G__20364;
count__20344_20348 = G__20365;
i__20345_20349 = G__20366;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20367 = [];
var len__19693__auto___20382 = arguments.length;
var i__19694__auto___20383 = (0);
while(true){
if((i__19694__auto___20383 < len__19693__auto___20382)){
args20367.push((arguments[i__19694__auto___20383]));

var G__20384 = (i__19694__auto___20383 + (1));
i__19694__auto___20383 = G__20384;
continue;
} else {
}
break;
}

var G__20369 = args20367.length;
switch (G__20369) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20367.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20370 = obj;
G__20370.push(kfn.call(null,k),vfn.call(null,v));

return G__20370;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20371 = cljs.core.clone.call(null,handlers);
x20371.forEach = ((function (x20371,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20372 = cljs.core.seq.call(null,coll);
var chunk__20373 = null;
var count__20374 = (0);
var i__20375 = (0);
while(true){
if((i__20375 < count__20374)){
var vec__20376 = cljs.core._nth.call(null,chunk__20373,i__20375);
var k = cljs.core.nth.call(null,vec__20376,(0),null);
var v = cljs.core.nth.call(null,vec__20376,(1),null);
f.call(null,v,k);

var G__20386 = seq__20372;
var G__20387 = chunk__20373;
var G__20388 = count__20374;
var G__20389 = (i__20375 + (1));
seq__20372 = G__20386;
chunk__20373 = G__20387;
count__20374 = G__20388;
i__20375 = G__20389;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20372);
if(temp__4657__auto__){
var seq__20372__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20372__$1)){
var c__19429__auto__ = cljs.core.chunk_first.call(null,seq__20372__$1);
var G__20390 = cljs.core.chunk_rest.call(null,seq__20372__$1);
var G__20391 = c__19429__auto__;
var G__20392 = cljs.core.count.call(null,c__19429__auto__);
var G__20393 = (0);
seq__20372 = G__20390;
chunk__20373 = G__20391;
count__20374 = G__20392;
i__20375 = G__20393;
continue;
} else {
var vec__20379 = cljs.core.first.call(null,seq__20372__$1);
var k = cljs.core.nth.call(null,vec__20379,(0),null);
var v = cljs.core.nth.call(null,vec__20379,(1),null);
f.call(null,v,k);

var G__20394 = cljs.core.next.call(null,seq__20372__$1);
var G__20395 = null;
var G__20396 = (0);
var G__20397 = (0);
seq__20372 = G__20394;
chunk__20373 = G__20395;
count__20374 = G__20396;
i__20375 = G__20397;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20371,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20371;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20398 = [];
var len__19693__auto___20404 = arguments.length;
var i__19694__auto___20405 = (0);
while(true){
if((i__19694__auto___20405 < len__19693__auto___20404)){
args20398.push((arguments[i__19694__auto___20405]));

var G__20406 = (i__19694__auto___20405 + (1));
i__19694__auto___20405 = G__20406;
continue;
} else {
}
break;
}

var G__20400 = args20398.length;
switch (G__20400) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20398.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20401 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20402){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20402 = meta20402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20403,meta20402__$1){
var self__ = this;
var _20403__$1 = this;
return (new cognitect.transit.t_cognitect$transit20401(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20402__$1));
});

cognitect.transit.t_cognitect$transit20401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20403){
var self__ = this;
var _20403__$1 = this;
return self__.meta20402;
});

cognitect.transit.t_cognitect$transit20401.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20401.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20401.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20401.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20402","meta20402",-600859203,null)], null);
});

cognitect.transit.t_cognitect$transit20401.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20401.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20401";

cognitect.transit.t_cognitect$transit20401.cljs$lang$ctorPrWriter = (function (this__19224__auto__,writer__19225__auto__,opt__19226__auto__){
return cljs.core._write.call(null,writer__19225__auto__,"cognitect.transit/t_cognitect$transit20401");
});

cognitect.transit.__GT_t_cognitect$transit20401 = (function cognitect$transit$__GT_t_cognitect$transit20401(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20402){
return (new cognitect.transit.t_cognitect$transit20401(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20402));
});

}

return (new cognitect.transit.t_cognitect$transit20401(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18618__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map