// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19700__auto__ = [];
var len__19693__auto___29717 = arguments.length;
var i__19694__auto___29718 = (0);
while(true){
if((i__19694__auto___29718 < len__19693__auto___29717)){
args__19700__auto__.push((arguments[i__19694__auto___29718]));

var G__29719 = (i__19694__auto___29718 + (1));
i__19694__auto___29718 = G__29719;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((2) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19701__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29709_29720 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29710_29721 = null;
var count__29711_29722 = (0);
var i__29712_29723 = (0);
while(true){
if((i__29712_29723 < count__29711_29722)){
var k_29724 = cljs.core._nth.call(null,chunk__29710_29721,i__29712_29723);
e.setAttribute(cljs.core.name.call(null,k_29724),cljs.core.get.call(null,attrs,k_29724));

var G__29725 = seq__29709_29720;
var G__29726 = chunk__29710_29721;
var G__29727 = count__29711_29722;
var G__29728 = (i__29712_29723 + (1));
seq__29709_29720 = G__29725;
chunk__29710_29721 = G__29726;
count__29711_29722 = G__29727;
i__29712_29723 = G__29728;
continue;
} else {
var temp__4657__auto___29729 = cljs.core.seq.call(null,seq__29709_29720);
if(temp__4657__auto___29729){
var seq__29709_29730__$1 = temp__4657__auto___29729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29709_29730__$1)){
var c__19429__auto___29731 = cljs.core.chunk_first.call(null,seq__29709_29730__$1);
var G__29732 = cljs.core.chunk_rest.call(null,seq__29709_29730__$1);
var G__29733 = c__19429__auto___29731;
var G__29734 = cljs.core.count.call(null,c__19429__auto___29731);
var G__29735 = (0);
seq__29709_29720 = G__29732;
chunk__29710_29721 = G__29733;
count__29711_29722 = G__29734;
i__29712_29723 = G__29735;
continue;
} else {
var k_29736 = cljs.core.first.call(null,seq__29709_29730__$1);
e.setAttribute(cljs.core.name.call(null,k_29736),cljs.core.get.call(null,attrs,k_29736));

var G__29737 = cljs.core.next.call(null,seq__29709_29730__$1);
var G__29738 = null;
var G__29739 = (0);
var G__29740 = (0);
seq__29709_29720 = G__29737;
chunk__29710_29721 = G__29738;
count__29711_29722 = G__29739;
i__29712_29723 = G__29740;
continue;
}
} else {
}
}
break;
}

var seq__29713_29741 = cljs.core.seq.call(null,children);
var chunk__29714_29742 = null;
var count__29715_29743 = (0);
var i__29716_29744 = (0);
while(true){
if((i__29716_29744 < count__29715_29743)){
var ch_29745 = cljs.core._nth.call(null,chunk__29714_29742,i__29716_29744);
e.appendChild(ch_29745);

var G__29746 = seq__29713_29741;
var G__29747 = chunk__29714_29742;
var G__29748 = count__29715_29743;
var G__29749 = (i__29716_29744 + (1));
seq__29713_29741 = G__29746;
chunk__29714_29742 = G__29747;
count__29715_29743 = G__29748;
i__29716_29744 = G__29749;
continue;
} else {
var temp__4657__auto___29750 = cljs.core.seq.call(null,seq__29713_29741);
if(temp__4657__auto___29750){
var seq__29713_29751__$1 = temp__4657__auto___29750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29713_29751__$1)){
var c__19429__auto___29752 = cljs.core.chunk_first.call(null,seq__29713_29751__$1);
var G__29753 = cljs.core.chunk_rest.call(null,seq__29713_29751__$1);
var G__29754 = c__19429__auto___29752;
var G__29755 = cljs.core.count.call(null,c__19429__auto___29752);
var G__29756 = (0);
seq__29713_29741 = G__29753;
chunk__29714_29742 = G__29754;
count__29715_29743 = G__29755;
i__29716_29744 = G__29756;
continue;
} else {
var ch_29757 = cljs.core.first.call(null,seq__29713_29751__$1);
e.appendChild(ch_29757);

var G__29758 = cljs.core.next.call(null,seq__29713_29751__$1);
var G__29759 = null;
var G__29760 = (0);
var G__29761 = (0);
seq__29713_29741 = G__29758;
chunk__29714_29742 = G__29759;
count__29715_29743 = G__29760;
i__29716_29744 = G__29761;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29706){
var G__29707 = cljs.core.first.call(null,seq29706);
var seq29706__$1 = cljs.core.next.call(null,seq29706);
var G__29708 = cljs.core.first.call(null,seq29706__$1);
var seq29706__$2 = cljs.core.next.call(null,seq29706__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29707,G__29708,seq29706__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19545__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19546__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19547__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__,hierarchy__19547__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__,hierarchy__19547__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19547__auto__,method_table__19543__auto__,prefer_table__19544__auto__,method_cache__19545__auto__,cached_hierarchy__19546__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29762 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29762.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29762.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29762.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29762);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29763,st_map){
var map__29770 = p__29763;
var map__29770__$1 = ((((!((map__29770 == null)))?((((map__29770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);
var container_el = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29770,map__29770__$1,container_el){
return (function (p__29772){
var vec__29773 = p__29772;
var k = cljs.core.nth.call(null,vec__29773,(0),null);
var v = cljs.core.nth.call(null,vec__29773,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29770,map__29770__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29776,dom_str){
var map__29779 = p__29776;
var map__29779__$1 = ((((!((map__29779 == null)))?((((map__29779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29779):map__29779);
var c = map__29779__$1;
var content_area_el = cljs.core.get.call(null,map__29779__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29781){
var map__29784 = p__29781;
var map__29784__$1 = ((((!((map__29784 == null)))?((((map__29784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29784):map__29784);
var content_area_el = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_29827){
var state_val_29828 = (state_29827[(1)]);
if((state_val_29828 === (1))){
var inst_29812 = (state_29827[(7)]);
var inst_29812__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29813 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29814 = ["10px","10px","100%","68px","1.0"];
var inst_29815 = cljs.core.PersistentHashMap.fromArrays(inst_29813,inst_29814);
var inst_29816 = cljs.core.merge.call(null,inst_29815,style);
var inst_29817 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29812__$1,inst_29816);
var inst_29818 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29812__$1,msg);
var inst_29819 = cljs.core.async.timeout.call(null,(300));
var state_29827__$1 = (function (){var statearr_29829 = state_29827;
(statearr_29829[(7)] = inst_29812__$1);

(statearr_29829[(8)] = inst_29818);

(statearr_29829[(9)] = inst_29817);

return statearr_29829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29827__$1,(2),inst_29819);
} else {
if((state_val_29828 === (2))){
var inst_29812 = (state_29827[(7)]);
var inst_29821 = (state_29827[(2)]);
var inst_29822 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29823 = ["auto"];
var inst_29824 = cljs.core.PersistentHashMap.fromArrays(inst_29822,inst_29823);
var inst_29825 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29812,inst_29824);
var state_29827__$1 = (function (){var statearr_29830 = state_29827;
(statearr_29830[(10)] = inst_29821);

return statearr_29830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29827__$1,inst_29825);
} else {
return null;
}
}
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto____0 = (function (){
var statearr_29834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29834[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto__);

(statearr_29834[(1)] = (1));

return statearr_29834;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto____1 = (function (state_29827){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_29827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e29835){if((e29835 instanceof Object)){
var ex__24012__auto__ = e29835;
var statearr_29836_29838 = state_29827;
(statearr_29836_29838[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29839 = state_29827;
state_29827 = G__29839;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto__ = function(state_29827){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto____1.call(this,state_29827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_29837 = f__24121__auto__.call(null);
(statearr_29837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_29837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29843 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__29843,(0),null);
var ln = cljs.core.nth.call(null,vec__29843,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29850 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29850,(0),null);
var file_line = cljs.core.nth.call(null,vec__29850,(1),null);
var file_column = cljs.core.nth.call(null,vec__29850,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29850,file_name,file_line,file_column){
return (function (p1__29846_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29846_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29850,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18618__auto__ = file_line;
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
var and__18606__auto__ = cause;
if(cljs.core.truth_(and__18606__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18606__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29855 = figwheel.client.heads_up.ensure_container.call(null);
var map__29855__$1 = ((((!((map__29855 == null)))?((((map__29855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29855):map__29855);
var content_area_el = cljs.core.get.call(null,map__29855__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_29903){
var state_val_29904 = (state_29903[(1)]);
if((state_val_29904 === (1))){
var inst_29886 = (state_29903[(7)]);
var inst_29886__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29887 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29888 = ["0.0"];
var inst_29889 = cljs.core.PersistentHashMap.fromArrays(inst_29887,inst_29888);
var inst_29890 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29886__$1,inst_29889);
var inst_29891 = cljs.core.async.timeout.call(null,(300));
var state_29903__$1 = (function (){var statearr_29905 = state_29903;
(statearr_29905[(8)] = inst_29890);

(statearr_29905[(7)] = inst_29886__$1);

return statearr_29905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29903__$1,(2),inst_29891);
} else {
if((state_val_29904 === (2))){
var inst_29886 = (state_29903[(7)]);
var inst_29893 = (state_29903[(2)]);
var inst_29894 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29895 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29896 = cljs.core.PersistentHashMap.fromArrays(inst_29894,inst_29895);
var inst_29897 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29886,inst_29896);
var inst_29898 = cljs.core.async.timeout.call(null,(200));
var state_29903__$1 = (function (){var statearr_29906 = state_29903;
(statearr_29906[(9)] = inst_29897);

(statearr_29906[(10)] = inst_29893);

return statearr_29906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29903__$1,(3),inst_29898);
} else {
if((state_val_29904 === (3))){
var inst_29886 = (state_29903[(7)]);
var inst_29900 = (state_29903[(2)]);
var inst_29901 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29886,"");
var state_29903__$1 = (function (){var statearr_29907 = state_29903;
(statearr_29907[(11)] = inst_29900);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29903__$1,inst_29901);
} else {
return null;
}
}
}
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24009__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24009__auto____0 = (function (){
var statearr_29911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29911[(0)] = figwheel$client$heads_up$clear_$_state_machine__24009__auto__);

(statearr_29911[(1)] = (1));

return statearr_29911;
});
var figwheel$client$heads_up$clear_$_state_machine__24009__auto____1 = (function (state_29903){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_29903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e29912){if((e29912 instanceof Object)){
var ex__24012__auto__ = e29912;
var statearr_29913_29915 = state_29903;
(statearr_29913_29915[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29916 = state_29903;
state_29903 = G__29916;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24009__auto__ = function(state_29903){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24009__auto____1.call(this,state_29903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24009__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24009__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_29914 = f__24121__auto__.call(null);
(statearr_29914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_29914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (1))){
var inst_29938 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(2),inst_29938);
} else {
if((state_val_29949 === (2))){
var inst_29940 = (state_29948[(2)]);
var inst_29941 = cljs.core.async.timeout.call(null,(400));
var state_29948__$1 = (function (){var statearr_29950 = state_29948;
(statearr_29950[(7)] = inst_29940);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(3),inst_29941);
} else {
if((state_val_29949 === (3))){
var inst_29943 = (state_29948[(2)]);
var inst_29944 = figwheel.client.heads_up.clear.call(null);
var state_29948__$1 = (function (){var statearr_29951 = state_29948;
(statearr_29951[(8)] = inst_29943);

return statearr_29951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(4),inst_29944);
} else {
if((state_val_29949 === (4))){
var inst_29946 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29948__$1,inst_29946);
} else {
return null;
}
}
}
}
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto____0 = (function (){
var statearr_29955 = [null,null,null,null,null,null,null,null,null];
(statearr_29955[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto__);

(statearr_29955[(1)] = (1));

return statearr_29955;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto____1 = (function (state_29948){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_29948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e29956){if((e29956 instanceof Object)){
var ex__24012__auto__ = e29956;
var statearr_29957_29959 = state_29948;
(statearr_29957_29959[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29960 = state_29948;
state_29948 = G__29960;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_29958 = f__24121__auto__.call(null);
(statearr_29958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map