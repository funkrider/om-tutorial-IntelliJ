// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__19543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19545__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19546__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19547__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__,hierarchy__19547__auto__){
return (function (env,key,params){
return key;
});})(method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__,hierarchy__19547__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19547__auto__,method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29691,key,params){
var map__29692 = p__29691;
var map__29692__$1 = ((((!((map__29692 == null)))?((((map__29692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29692):map__29692);
var env = map__29692__$1;
var state = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29694 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__29694,(0),null);
var value = cljs.core.nth.call(null,vec__29694,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__29697,key,p__29698){
var map__29699 = p__29697;
var map__29699__$1 = ((((!((map__29699 == null)))?((((map__29699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29699):map__29699);
var env = map__29699__$1;
var state = cljs.core.get.call(null,map__29699__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29700 = p__29698;
var map__29700__$1 = ((((!((map__29700 == null)))?((((map__29700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29700):map__29700);
var start = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__21550__auto__ = this;
React.Component.apply(this__21550__auto__,arguments);

if(!((this__21550__auto__.initLocalState == null))){
this__21550__auto__.state = this__21550__auto__.initLocalState();
} else {
this__21550__auto__.state = {};
}

return this__21550__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x29707_29723 = om_tutorial.core.AnimalsList.prototype;
x29707_29723.componentWillUpdate = ((function (x29707_29723){
return (function (next_props__21486__auto__,next_state__21487__auto__){
var this__21485__auto__ = this;
if(((!((this__21485__auto__ == null)))?(((false) || (this__21485__auto__.om$next$Ident$))?true:false):false)){
var ident__21489__auto___29724 = om.next.ident.call(null,this__21485__auto__,om.next.props.call(null,this__21485__auto__));
var next_ident__21490__auto___29725 = om.next.ident.call(null,this__21485__auto__,om.next._next_props.call(null,next_props__21486__auto__,this__21485__auto__));
if(cljs.core.not_EQ_.call(null,ident__21489__auto___29724,next_ident__21490__auto___29725)){
var idxr__21491__auto___29726 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21485__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21491__auto___29726 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21491__auto___29726),((function (idxr__21491__auto___29726,ident__21489__auto___29724,next_ident__21490__auto___29725,this__21485__auto__,x29707_29723){
return (function (indexes__21492__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21492__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21489__auto___29724], null),cljs.core.disj,this__21485__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21490__auto___29725], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21485__auto__);
});})(idxr__21491__auto___29726,ident__21489__auto___29724,next_ident__21490__auto___29725,this__21485__auto__,x29707_29723))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21485__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21485__auto__);
});})(x29707_29723))
;

x29707_29723.shouldComponentUpdate = ((function (x29707_29723){
return (function (next_props__21486__auto__,next_state__21487__auto__){
var this__21485__auto__ = this;
var next_children__21488__auto__ = next_props__21486__auto__.children;
var next_props__21486__auto____$1 = goog.object.get(next_props__21486__auto__,"omcljs$value");
var next_props__21486__auto____$2 = (function (){var G__29709 = next_props__21486__auto____$1;
if((next_props__21486__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29709);
} else {
return G__29709;
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
});})(x29707_29723))
;

x29707_29723.componentWillUnmount = ((function (x29707_29723){
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
});})(x29707_29723))
;

x29707_29723.componentDidUpdate = ((function (x29707_29723){
return (function (prev_props__21493__auto__,prev_state__21494__auto__){
var this__21485__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21485__auto__);
});})(x29707_29723))
;

x29707_29723.isMounted = ((function (x29707_29723){
return (function (){
var this__21485__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21485__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29707_29723))
;

x29707_29723.componentWillMount = ((function (x29707_29723){
return (function (){
var this__21485__auto__ = this;
var indexer__21495__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21485__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21495__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21495__auto__,this__21485__auto__);
}
});})(x29707_29723))
;

x29707_29723.render = ((function (x29707_29723){
return (function (){
var this__21484__auto__ = this;
var this$ = this__21484__auto__;
var _STAR_reconciler_STAR_29710 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29711 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29712 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29713 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29714 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21484__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21484__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21484__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21484__auto__);

om.next._STAR_parent_STAR_ = this__21484__auto__;

try{var map__29715 = om.next.props.call(null,this$);
var map__29715__$1 = ((((!((map__29715 == null)))?((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29715):map__29715);
var title = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__29715,map__29715__$1,title,list,_STAR_reconciler_STAR_29710,_STAR_depth_STAR_29711,_STAR_shared_STAR_29712,_STAR_instrument_STAR_29713,_STAR_parent_STAR_29714,this$,this__21484__auto__,x29707_29723){
return (function (p__29717){
var vec__29718 = p__29717;
var i = cljs.core.nth.call(null,vec__29718,(0),null);
var name = cljs.core.nth.call(null,vec__29718,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__29715,map__29715__$1,title,list,_STAR_reconciler_STAR_29710,_STAR_depth_STAR_29711,_STAR_shared_STAR_29712,_STAR_instrument_STAR_29713,_STAR_parent_STAR_29714,this$,this__21484__auto__,x29707_29723))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29714;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29713;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29712;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29711;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29710;
}});})(x29707_29723))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.constructor.displayName = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x29721_29727 = om_tutorial.core.AnimalsList;
x29721_29727.om$next$IQueryParams$ = true;

x29721_29727.om$next$IQueryParams$params$arity$1 = ((function (x29721_29727){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x29721_29727))
;

x29721_29727.om$next$IQuery$ = true;

x29721_29727.om$next$IQuery$query$arity$1 = ((function (x29721_29727){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x29721_29727))
;


var x29722_29728 = om_tutorial.core.AnimalsList.prototype;
x29722_29728.om$next$IQueryParams$ = true;

x29722_29728.om$next$IQueryParams$params$arity$1 = ((function (x29722_29728){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x29722_29728))
;

x29722_29728.om$next$IQuery$ = true;

x29722_29728.om$next$IQuery$query$arity$1 = ((function (x29722_29728){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x29722_29728))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__21552__auto__,writer__21553__auto__,opt__21554__auto__){
return cljs.core._write.call(null,writer__21553__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map