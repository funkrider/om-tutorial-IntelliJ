// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
/**
 * @constructor
 */
om_tutorial.core.Counter = (function om_tutorial$core$Counter(){
var this__21549__auto__ = this;
React.Component.apply(this__21549__auto__,arguments);

if(!((this__21549__auto__.initLocalState == null))){
this__21549__auto__.state = this__21549__auto__.initLocalState();
} else {
this__21549__auto__.state = {};
}

return this__21549__auto__;
});

om_tutorial.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x29573_29585 = om_tutorial.core.Counter.prototype;
x29573_29585.componentWillUpdate = ((function (x29573_29585){
return (function (next_props__21485__auto__,next_state__21486__auto__){
var this__21484__auto__ = this;
if(((!((this__21484__auto__ == null)))?(((false) || (this__21484__auto__.om$next$Ident$))?true:false):false)){
var ident__21488__auto___29586 = om.next.ident.call(null,this__21484__auto__,om.next.props.call(null,this__21484__auto__));
var next_ident__21489__auto___29587 = om.next.ident.call(null,this__21484__auto__,om.next._next_props.call(null,next_props__21485__auto__,this__21484__auto__));
if(cljs.core.not_EQ_.call(null,ident__21488__auto___29586,next_ident__21489__auto___29587)){
var idxr__21490__auto___29588 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21490__auto___29588 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21490__auto___29588),((function (idxr__21490__auto___29588,ident__21488__auto___29586,next_ident__21489__auto___29587,this__21484__auto__,x29573_29585){
return (function (indexes__21491__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21491__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21488__auto___29586], null),cljs.core.disj,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21489__auto___29587], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21484__auto__);
});})(idxr__21490__auto___29588,ident__21488__auto___29586,next_ident__21489__auto___29587,this__21484__auto__,x29573_29585))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21484__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21484__auto__);
});})(x29573_29585))
;

x29573_29585.shouldComponentUpdate = ((function (x29573_29585){
return (function (next_props__21485__auto__,next_state__21486__auto__){
var this__21484__auto__ = this;
var next_children__21487__auto__ = next_props__21485__auto__.children;
var next_props__21485__auto____$1 = goog.object.get(next_props__21485__auto__,"omcljs$value");
var next_props__21485__auto____$2 = (function (){var G__29575 = next_props__21485__auto____$1;
if((next_props__21485__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29575);
} else {
return G__29575;
}
})();
var or__18618__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21484__auto__),next_props__21485__auto____$2);
if(or__18618__auto__){
return or__18618__auto__;
} else {
var or__18618__auto____$1 = (function (){var and__18606__auto__ = this__21484__auto__.state;
if(cljs.core.truth_(and__18606__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21484__auto__.state,"omcljs$state"),goog.object.get(next_state__21486__auto__,"omcljs$state"));
} else {
return and__18606__auto__;
}
})();
if(cljs.core.truth_(or__18618__auto____$1)){
return or__18618__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21484__auto__.props.children,next_children__21487__auto__);
}
}
});})(x29573_29585))
;

x29573_29585.componentWillUnmount = ((function (x29573_29585){
return (function (){
var this__21484__auto__ = this;
var r__21495__auto__ = om.next.get_reconciler.call(null,this__21484__auto__);
var cfg__21496__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21495__auto__);
var st__21497__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21496__auto__);
var indexer__21494__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21496__auto__);
if(cljs.core.truth_((function (){var and__18606__auto__ = !((st__21497__auto__ == null));
if(and__18606__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21497__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21484__auto__], null));
} else {
return and__18606__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21497__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21484__auto__);
} else {
}

if((indexer__21494__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21494__auto__,this__21484__auto__);
}
});})(x29573_29585))
;

x29573_29585.componentDidUpdate = ((function (x29573_29585){
return (function (prev_props__21492__auto__,prev_state__21493__auto__){
var this__21484__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21484__auto__);
});})(x29573_29585))
;

x29573_29585.isMounted = ((function (x29573_29585){
return (function (){
var this__21484__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21484__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29573_29585))
;

x29573_29585.componentWillMount = ((function (x29573_29585){
return (function (){
var this__21484__auto__ = this;
var indexer__21494__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21494__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21494__auto__,this__21484__auto__);
}
});})(x29573_29585))
;

x29573_29585.render = ((function (x29573_29585){
return (function (){
var this__21483__auto__ = this;
var this$ = this__21483__auto__;
var _STAR_reconciler_STAR_29576 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29577 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29578 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29579 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29580 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21483__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21483__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21483__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21483__auto__);

om.next._STAR_parent_STAR_ = this__21483__auto__;

try{var map__29581 = om.next.props.call(null,this$);
var map__29581__$1 = ((((!((map__29581 == null)))?((((map__29581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var count = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button(({"onClick": ((function (map__29581,map__29581__$1,count,_STAR_reconciler_STAR_29576,_STAR_depth_STAR_29577,_STAR_shared_STAR_29578,_STAR_instrument_STAR_29579,_STAR_parent_STAR_29580,this$,this__21483__auto__,x29573_29585){
return (function (e){
return cljs.core.swap_BANG_.call(null,om_tutorial.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__29581,map__29581__$1,count,_STAR_reconciler_STAR_29576,_STAR_depth_STAR_29577,_STAR_shared_STAR_29578,_STAR_instrument_STAR_29579,_STAR_parent_STAR_29580,this$,this__21483__auto__,x29573_29585))
}),om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29580;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29579;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29578;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29577;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29576;
}});})(x29573_29585))
;


om_tutorial.core.Counter.prototype.constructor = om_tutorial.core.Counter;

om_tutorial.core.Counter.prototype.constructor.displayName = "om-tutorial.core/Counter";

om_tutorial.core.Counter.prototype.om$isComponent = true;

var x29583_29589 = om_tutorial.core.Counter;


var x29584_29590 = om_tutorial.core.Counter.prototype;


om_tutorial.core.Counter.cljs$lang$type = true;

om_tutorial.core.Counter.cljs$lang$ctorStr = "om-tutorial.core/Counter";

om_tutorial.core.Counter.cljs$lang$ctorPrWriter = (function (this__21551__auto__,writer__21552__auto__,opt__21553__auto__){
return cljs.core._write.call(null,writer__21552__auto__,"om-tutorial.core/Counter");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map