// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","one","list/one",942123326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"John",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bob",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null),new cljs.core.Keyword("list","two","list/two",521811255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"age","age",-604307804),(27)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gwen",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jeff",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null)], null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__19543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19545__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19546__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19547__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19547__auto__,method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__));
})();
}
om_tutorial.core.get_people = (function om_tutorial$core$get_people(state,key){
var st = cljs.core.deref.call(null,state);
cljs.core.prn.call(null,"get-people ",key);

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__29798_SHARP_){
return cljs.core.get_in.call(null,st,p1__29798_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__29799,key,params){
var map__29800 = p__29799;
var map__29800__$1 = ((((!((map__29800 == null)))?((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29800):map__29800);
var env = map__29800__$1;
var state = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__29802,key,params){
var map__29803 = p__29802;
var map__29803__$1 = ((((!((map__29803 == null)))?((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29803):map__29803);
var env = map__29803__$1;
var state = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__19543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19545__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19546__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19547__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19547__auto__,method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__29805,_,p__29806){
var map__29807 = p__29805;
var map__29807__$1 = ((((!((map__29807 == null)))?((((map__29807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29807):map__29807);
var state = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29808 = p__29806;
var map__29808__$1 = ((((!((map__29808 == null)))?((((map__29808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29808):map__29808);
var name = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29807,map__29807__$1,state,map__29808,map__29808__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__29807,map__29807__$1,state,map__29808,map__29808__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__29812,_,p__29813){
var map__29814 = p__29812;
var map__29814__$1 = ((((!((map__29814 == null)))?((((map__29814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29814):map__29814);
var state = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29815 = p__29813;
var map__29815__$1 = ((((!((map__29815 == null)))?((((map__29815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29815):map__29815);
var name = cljs.core.get.call(null,map__29815__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29814,map__29814__$1,state,map__29815,map__29815__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__29814,map__29814__$1,state,map__29815,map__29815__$1,name){
return (function (p1__29811_SHARP_){
var n = (p1__29811_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__29814,map__29814__$1,state,map__29815,map__29815__$1,name))
);
});})(map__29814,map__29814__$1,state,map__29815,map__29815__$1,name))
], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__21549__auto__ = this;
React.Component.apply(this__21549__auto__,arguments);

if(!((this__21549__auto__.initLocalState == null))){
this__21549__auto__.state = this__21549__auto__.initLocalState();
} else {
this__21549__auto__.state = {};
}

return this__21549__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x29822_29833 = om_tutorial.core.Person.prototype;
x29822_29833.componentWillUpdate = ((function (x29822_29833){
return (function (next_props__21485__auto__,next_state__21486__auto__){
var this__21484__auto__ = this;
if(((!((this__21484__auto__ == null)))?(((false) || (this__21484__auto__.om$next$Ident$))?true:false):false)){
var ident__21488__auto___29834 = om.next.ident.call(null,this__21484__auto__,om.next.props.call(null,this__21484__auto__));
var next_ident__21489__auto___29835 = om.next.ident.call(null,this__21484__auto__,om.next._next_props.call(null,next_props__21485__auto__,this__21484__auto__));
if(cljs.core.not_EQ_.call(null,ident__21488__auto___29834,next_ident__21489__auto___29835)){
var idxr__21490__auto___29836 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21490__auto___29836 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21490__auto___29836),((function (idxr__21490__auto___29836,ident__21488__auto___29834,next_ident__21489__auto___29835,this__21484__auto__,x29822_29833){
return (function (indexes__21491__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21491__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21488__auto___29834], null),cljs.core.disj,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21489__auto___29835], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21484__auto__);
});})(idxr__21490__auto___29836,ident__21488__auto___29834,next_ident__21489__auto___29835,this__21484__auto__,x29822_29833))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21484__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21484__auto__);
});})(x29822_29833))
;

x29822_29833.shouldComponentUpdate = ((function (x29822_29833){
return (function (next_props__21485__auto__,next_state__21486__auto__){
var this__21484__auto__ = this;
var next_children__21487__auto__ = next_props__21485__auto__.children;
var next_props__21485__auto____$1 = goog.object.get(next_props__21485__auto__,"omcljs$value");
var next_props__21485__auto____$2 = (function (){var G__29824 = next_props__21485__auto____$1;
if((next_props__21485__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29824);
} else {
return G__29824;
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
});})(x29822_29833))
;

x29822_29833.componentWillUnmount = ((function (x29822_29833){
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
});})(x29822_29833))
;

x29822_29833.componentDidUpdate = ((function (x29822_29833){
return (function (prev_props__21492__auto__,prev_state__21493__auto__){
var this__21484__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21484__auto__);
});})(x29822_29833))
;

x29822_29833.isMounted = ((function (x29822_29833){
return (function (){
var this__21484__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21484__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29822_29833))
;

x29822_29833.componentWillMount = ((function (x29822_29833){
return (function (){
var this__21484__auto__ = this;
var indexer__21494__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21494__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21494__auto__,this__21484__auto__);
}
});})(x29822_29833))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.constructor.displayName = "om-tutorial.core/Person";

om_tutorial.core.Person.prototype.om$isComponent = true;

var x29825_29837 = om_tutorial.core.Person;
x29825_29837.om$next$Ident$ = true;

x29825_29837.om$next$Ident$ident$arity$2 = ((function (x29825_29837){
return (function (this$,p__29826){
var map__29827 = p__29826;
var map__29827__$1 = ((((!((map__29827 == null)))?((((map__29827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29827):map__29827);
var name = cljs.core.get.call(null,map__29827__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x29825_29837))
;

x29825_29837.om$next$IQuery$ = true;

x29825_29837.om$next$IQuery$query$arity$1 = ((function (x29825_29837){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});})(x29825_29837))
;


var x29829_29838 = om_tutorial.core.Person.prototype;
x29829_29838.om$next$Ident$ = true;

x29829_29838.om$next$Ident$ident$arity$2 = ((function (x29829_29838){
return (function (this$,p__29830){
var map__29831 = p__29830;
var map__29831__$1 = ((((!((map__29831 == null)))?((((map__29831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);
var name = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x29829_29838))
;

x29829_29838.om$next$IQuery$ = true;

x29829_29838.om$next$IQuery$query$arity$1 = ((function (x29829_29838){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});})(x29829_29838))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__21551__auto__,writer__21552__auto__,opt__21553__auto__){
return cljs.core._write.call(null,writer__21552__auto__,"om-tutorial.core/Person");
});
/**
 * @constructor
 */
om_tutorial.core.RootView = (function om_tutorial$core$RootView(){
var this__21549__auto__ = this;
React.Component.apply(this__21549__auto__,arguments);

if(!((this__21549__auto__.initLocalState == null))){
this__21549__auto__.state = this__21549__auto__.initLocalState();
} else {
this__21549__auto__.state = {};
}

return this__21549__auto__;
});

om_tutorial.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x29843_29848 = om_tutorial.core.RootView.prototype;
x29843_29848.componentWillUpdate = ((function (x29843_29848){
return (function (next_props__21485__auto__,next_state__21486__auto__){
var this__21484__auto__ = this;
if(((!((this__21484__auto__ == null)))?(((false) || (this__21484__auto__.om$next$Ident$))?true:false):false)){
var ident__21488__auto___29849 = om.next.ident.call(null,this__21484__auto__,om.next.props.call(null,this__21484__auto__));
var next_ident__21489__auto___29850 = om.next.ident.call(null,this__21484__auto__,om.next._next_props.call(null,next_props__21485__auto__,this__21484__auto__));
if(cljs.core.not_EQ_.call(null,ident__21488__auto___29849,next_ident__21489__auto___29850)){
var idxr__21490__auto___29851 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21490__auto___29851 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21490__auto___29851),((function (idxr__21490__auto___29851,ident__21488__auto___29849,next_ident__21489__auto___29850,this__21484__auto__,x29843_29848){
return (function (indexes__21491__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21491__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21488__auto___29849], null),cljs.core.disj,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21489__auto___29850], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21484__auto__);
});})(idxr__21490__auto___29851,ident__21488__auto___29849,next_ident__21489__auto___29850,this__21484__auto__,x29843_29848))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21484__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21484__auto__);
});})(x29843_29848))
;

x29843_29848.shouldComponentUpdate = ((function (x29843_29848){
return (function (next_props__21485__auto__,next_state__21486__auto__){
var this__21484__auto__ = this;
var next_children__21487__auto__ = next_props__21485__auto__.children;
var next_props__21485__auto____$1 = goog.object.get(next_props__21485__auto__,"omcljs$value");
var next_props__21485__auto____$2 = (function (){var G__29845 = next_props__21485__auto____$1;
if((next_props__21485__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29845);
} else {
return G__29845;
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
});})(x29843_29848))
;

x29843_29848.componentWillUnmount = ((function (x29843_29848){
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
});})(x29843_29848))
;

x29843_29848.componentDidUpdate = ((function (x29843_29848){
return (function (prev_props__21492__auto__,prev_state__21493__auto__){
var this__21484__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21484__auto__);
});})(x29843_29848))
;

x29843_29848.isMounted = ((function (x29843_29848){
return (function (){
var this__21484__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21484__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29843_29848))
;

x29843_29848.componentWillMount = ((function (x29843_29848){
return (function (){
var this__21484__auto__ = this;
var indexer__21494__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21484__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21494__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21494__auto__,this__21484__auto__);
}
});})(x29843_29848))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.constructor.displayName = "om-tutorial.core/RootView";

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x29846_29852 = om_tutorial.core.RootView;
x29846_29852.om$next$IQuery$ = true;

x29846_29852.om$next$IQuery$query$arity$1 = ((function (x29846_29852){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19452__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),(function (){var x__19452__auto__ = subquery;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})(),(function (){var x__19452__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),(function (){var x__19452__auto__ = subquery;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})()))));
});})(x29846_29852))
;


var x29847_29853 = om_tutorial.core.RootView.prototype;
x29847_29853.om$next$IQuery$ = true;

x29847_29853.om$next$IQuery$query$arity$1 = ((function (x29847_29853){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19452__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),(function (){var x__19452__auto__ = subquery;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})(),(function (){var x__19452__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),(function (){var x__19452__auto__ = subquery;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19452__auto__);
})()))));
});})(x29847_29853))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__21551__auto__,writer__21552__auto__,opt__21553__auto__){
return cljs.core._write.call(null,writer__21552__auto__,"om-tutorial.core/RootView");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.RootView,goog.dom.getElement("app"));
om_tutorial.core.debug = (function om_tutorial$core$debug(){
return null;
});

//# sourceMappingURL=core.js.map