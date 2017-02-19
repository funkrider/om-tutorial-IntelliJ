// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
om_tutorial.core.read = (function om_tutorial$core$read(p__29551,key,params){
var map__29557 = p__29551;
var map__29557__$1 = ((((!((map__29557 == null)))?((((map__29557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557):map__29557);
var env = map__29557__$1;
var state = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29559 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__29559,(0),null);
var value = cljs.core.nth.call(null,vec__29559,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.core.mutate = (function om_tutorial$core$mutate(p__29562,key,params){
var map__29565 = p__29562;
var map__29565__$1 = ((((!((map__29565 == null)))?((((map__29565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);
var env = map__29565__$1;
var state = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29565,map__29565__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__29565,map__29565__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
om_tutorial.core.Counter = (function om_tutorial$core$Counter(){
var this__21550__auto__ = this;
React.Component.apply(this__21550__auto__,arguments);

if(!((this__21550__auto__.initLocalState == null))){
this__21550__auto__.state = this__21550__auto__.initLocalState();
} else {
this__21550__auto__.state = {};
}

return this__21550__auto__;
});

om_tutorial.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x29571_29583 = om_tutorial.core.Counter.prototype;
x29571_29583.componentWillUpdate = ((function (x29571_29583){
return (function (next_props__21486__auto__,next_state__21487__auto__){
var this__21485__auto__ = this;
if(((!((this__21485__auto__ == null)))?(((false) || (this__21485__auto__.om$next$Ident$))?true:false):false)){
var ident__21489__auto___29584 = om.next.ident.call(null,this__21485__auto__,om.next.props.call(null,this__21485__auto__));
var next_ident__21490__auto___29585 = om.next.ident.call(null,this__21485__auto__,om.next._next_props.call(null,next_props__21486__auto__,this__21485__auto__));
if(cljs.core.not_EQ_.call(null,ident__21489__auto___29584,next_ident__21490__auto___29585)){
var idxr__21491__auto___29586 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21485__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21491__auto___29586 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21491__auto___29586),((function (idxr__21491__auto___29586,ident__21489__auto___29584,next_ident__21490__auto___29585,this__21485__auto__,x29571_29583){
return (function (indexes__21492__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21492__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21489__auto___29584], null),cljs.core.disj,this__21485__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21490__auto___29585], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21485__auto__);
});})(idxr__21491__auto___29586,ident__21489__auto___29584,next_ident__21490__auto___29585,this__21485__auto__,x29571_29583))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21485__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21485__auto__);
});})(x29571_29583))
;

x29571_29583.shouldComponentUpdate = ((function (x29571_29583){
return (function (next_props__21486__auto__,next_state__21487__auto__){
var this__21485__auto__ = this;
var next_children__21488__auto__ = next_props__21486__auto__.children;
var next_props__21486__auto____$1 = goog.object.get(next_props__21486__auto__,"omcljs$value");
var next_props__21486__auto____$2 = (function (){var G__29573 = next_props__21486__auto____$1;
if((next_props__21486__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29573);
} else {
return G__29573;
}
})();
var or__18618__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21485__auto__),next_props__21486__auto____$2);
if(or__18618__auto__){
return or__18618__auto__;
} else {
var or__18618__auto____$1 = (function (){var and__18606__auto__ = this__21485__auto__.state;
if(cljs.core.truth_(and__18606__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21485__auto__.state,"omcljs$state"),goog.object.get(next_state__21487__auto__,"omcljs$state"));
} else {
return and__18606__auto__;
}
})();
if(cljs.core.truth_(or__18618__auto____$1)){
return or__18618__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21485__auto__.props.children,next_children__21488__auto__);
}
}
});})(x29571_29583))
;

x29571_29583.componentWillUnmount = ((function (x29571_29583){
return (function (){
var this__21485__auto__ = this;
var r__21496__auto__ = om.next.get_reconciler.call(null,this__21485__auto__);
var cfg__21497__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21496__auto__);
var st__21498__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21497__auto__);
var indexer__21495__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21497__auto__);
if(cljs.core.truth_((function (){var and__18606__auto__ = !((st__21498__auto__ == null));
if(and__18606__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21498__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21485__auto__], null));
} else {
return and__18606__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21498__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21485__auto__);
} else {
}

if((indexer__21495__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21495__auto__,this__21485__auto__);
}
});})(x29571_29583))
;

x29571_29583.componentDidUpdate = ((function (x29571_29583){
return (function (prev_props__21493__auto__,prev_state__21494__auto__){
var this__21485__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21485__auto__);
});})(x29571_29583))
;

x29571_29583.isMounted = ((function (x29571_29583){
return (function (){
var this__21485__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21485__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29571_29583))
;

x29571_29583.componentWillMount = ((function (x29571_29583){
return (function (){
var this__21485__auto__ = this;
var indexer__21495__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21485__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21495__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21495__auto__,this__21485__auto__);
}
});})(x29571_29583))
;

x29571_29583.render = ((function (x29571_29583){
return (function (){
var this__21484__auto__ = this;
var this$ = this__21484__auto__;
var _STAR_reconciler_STAR_29574 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29575 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29576 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29577 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29578 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21484__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21484__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21484__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21484__auto__);

om.next._STAR_parent_STAR_ = this__21484__auto__;

try{var map__29579 = om.next.props.call(null,this$);
var map__29579__$1 = ((((!((map__29579 == null)))?((((map__29579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);
var count = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button(({"onClick": ((function (map__29579,map__29579__$1,count,_STAR_reconciler_STAR_29574,_STAR_depth_STAR_29575,_STAR_shared_STAR_29576,_STAR_instrument_STAR_29577,_STAR_parent_STAR_29578,this$,this__21484__auto__,x29571_29583){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__29579,map__29579__$1,count,_STAR_reconciler_STAR_29574,_STAR_depth_STAR_29575,_STAR_shared_STAR_29576,_STAR_instrument_STAR_29577,_STAR_parent_STAR_29578,this$,this__21484__auto__,x29571_29583))
}),om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29578;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29577;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29576;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29575;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29574;
}});})(x29571_29583))
;


om_tutorial.core.Counter.prototype.constructor = om_tutorial.core.Counter;

om_tutorial.core.Counter.prototype.constructor.displayName = "om-tutorial.core/Counter";

om_tutorial.core.Counter.prototype.om$isComponent = true;

var x29581_29587 = om_tutorial.core.Counter;
x29581_29587.om$next$IQuery$ = true;

x29581_29587.om$next$IQuery$query$arity$1 = ((function (x29581_29587){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x29581_29587))
;


var x29582_29588 = om_tutorial.core.Counter.prototype;
x29582_29588.om$next$IQuery$ = true;

x29582_29588.om$next$IQuery$query$arity$1 = ((function (x29582_29588){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x29582_29588))
;


om_tutorial.core.Counter.cljs$lang$type = true;

om_tutorial.core.Counter.cljs$lang$ctorStr = "om-tutorial.core/Counter";

om_tutorial.core.Counter.cljs$lang$ctorPrWriter = (function (this__21552__auto__,writer__21553__auto__,opt__21554__auto__){
return cljs.core._write.call(null,writer__21553__auto__,"om-tutorial.core/Counter");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map