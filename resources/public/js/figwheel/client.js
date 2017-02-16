// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29963 = cljs.core._EQ_;
var expr__29964 = (function (){var or__18618__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29963.call(null,"true",expr__29964))){
return true;
} else {
if(cljs.core.truth_(pred__29963.call(null,"false",expr__29964))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29964)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29966__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29967__i = 0, G__29967__a = new Array(arguments.length -  0);
while (G__29967__i < G__29967__a.length) {G__29967__a[G__29967__i] = arguments[G__29967__i + 0]; ++G__29967__i;}
  args = new cljs.core.IndexedSeq(G__29967__a,0);
} 
return G__29966__delegate.call(this,args);};
G__29966.cljs$lang$maxFixedArity = 0;
G__29966.cljs$lang$applyTo = (function (arglist__29968){
var args = cljs.core.seq(arglist__29968);
return G__29966__delegate(args);
});
G__29966.cljs$core$IFn$_invoke$arity$variadic = G__29966__delegate;
return G__29966;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29969){
var map__29972 = p__29969;
var map__29972__$1 = ((((!((map__29972 == null)))?((((map__29972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);
var message = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18618__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18606__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18606__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18606__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24120__auto___30134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___30134,ch){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___30134,ch){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (7))){
var inst_30099 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30105_30135 = state_30103__$1;
(statearr_30105_30135[(2)] = inst_30099);

(statearr_30105_30135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (1))){
var state_30103__$1 = state_30103;
var statearr_30106_30136 = state_30103__$1;
(statearr_30106_30136[(2)] = null);

(statearr_30106_30136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (4))){
var inst_30056 = (state_30103[(7)]);
var inst_30056__$1 = (state_30103[(2)]);
var state_30103__$1 = (function (){var statearr_30107 = state_30103;
(statearr_30107[(7)] = inst_30056__$1);

return statearr_30107;
})();
if(cljs.core.truth_(inst_30056__$1)){
var statearr_30108_30137 = state_30103__$1;
(statearr_30108_30137[(1)] = (5));

} else {
var statearr_30109_30138 = state_30103__$1;
(statearr_30109_30138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (15))){
var inst_30063 = (state_30103[(8)]);
var inst_30078 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30063);
var inst_30079 = cljs.core.first.call(null,inst_30078);
var inst_30080 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30079);
var inst_30081 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30080)].join('');
var inst_30082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30081);
var state_30103__$1 = state_30103;
var statearr_30110_30139 = state_30103__$1;
(statearr_30110_30139[(2)] = inst_30082);

(statearr_30110_30139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (13))){
var inst_30087 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30111_30140 = state_30103__$1;
(statearr_30111_30140[(2)] = inst_30087);

(statearr_30111_30140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (6))){
var state_30103__$1 = state_30103;
var statearr_30112_30141 = state_30103__$1;
(statearr_30112_30141[(2)] = null);

(statearr_30112_30141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (17))){
var inst_30085 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30113_30142 = state_30103__$1;
(statearr_30113_30142[(2)] = inst_30085);

(statearr_30113_30142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (3))){
var inst_30101 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (12))){
var inst_30062 = (state_30103[(9)]);
var inst_30076 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30062,opts);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30076)){
var statearr_30114_30143 = state_30103__$1;
(statearr_30114_30143[(1)] = (15));

} else {
var statearr_30115_30144 = state_30103__$1;
(statearr_30115_30144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (2))){
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(4),ch);
} else {
if((state_val_30104 === (11))){
var inst_30063 = (state_30103[(8)]);
var inst_30068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30069 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30063);
var inst_30070 = cljs.core.async.timeout.call(null,(1000));
var inst_30071 = [inst_30069,inst_30070];
var inst_30072 = (new cljs.core.PersistentVector(null,2,(5),inst_30068,inst_30071,null));
var state_30103__$1 = state_30103;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30103__$1,(14),inst_30072);
} else {
if((state_val_30104 === (9))){
var inst_30063 = (state_30103[(8)]);
var inst_30089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30090 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30063);
var inst_30091 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30090);
var inst_30092 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30091)].join('');
var inst_30093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30092);
var state_30103__$1 = (function (){var statearr_30116 = state_30103;
(statearr_30116[(10)] = inst_30089);

return statearr_30116;
})();
var statearr_30117_30145 = state_30103__$1;
(statearr_30117_30145[(2)] = inst_30093);

(statearr_30117_30145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (5))){
var inst_30056 = (state_30103[(7)]);
var inst_30058 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30059 = (new cljs.core.PersistentArrayMap(null,2,inst_30058,null));
var inst_30060 = (new cljs.core.PersistentHashSet(null,inst_30059,null));
var inst_30061 = figwheel.client.focus_msgs.call(null,inst_30060,inst_30056);
var inst_30062 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30061);
var inst_30063 = cljs.core.first.call(null,inst_30061);
var inst_30064 = figwheel.client.autoload_QMARK_.call(null);
var state_30103__$1 = (function (){var statearr_30118 = state_30103;
(statearr_30118[(8)] = inst_30063);

(statearr_30118[(9)] = inst_30062);

return statearr_30118;
})();
if(cljs.core.truth_(inst_30064)){
var statearr_30119_30146 = state_30103__$1;
(statearr_30119_30146[(1)] = (8));

} else {
var statearr_30120_30147 = state_30103__$1;
(statearr_30120_30147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (14))){
var inst_30074 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30121_30148 = state_30103__$1;
(statearr_30121_30148[(2)] = inst_30074);

(statearr_30121_30148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (16))){
var state_30103__$1 = state_30103;
var statearr_30122_30149 = state_30103__$1;
(statearr_30122_30149[(2)] = null);

(statearr_30122_30149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (10))){
var inst_30095 = (state_30103[(2)]);
var state_30103__$1 = (function (){var statearr_30123 = state_30103;
(statearr_30123[(11)] = inst_30095);

return statearr_30123;
})();
var statearr_30124_30150 = state_30103__$1;
(statearr_30124_30150[(2)] = null);

(statearr_30124_30150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (8))){
var inst_30062 = (state_30103[(9)]);
var inst_30066 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30062,opts);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30066)){
var statearr_30125_30151 = state_30103__$1;
(statearr_30125_30151[(1)] = (11));

} else {
var statearr_30126_30152 = state_30103__$1;
(statearr_30126_30152[(1)] = (12));

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
});})(c__24120__auto___30134,ch))
;
return ((function (switch__24008__auto__,c__24120__auto___30134,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24009__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24009__auto____0 = (function (){
var statearr_30130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30130[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24009__auto__);

(statearr_30130[(1)] = (1));

return statearr_30130;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24009__auto____1 = (function (state_30103){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_30103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e30131){if((e30131 instanceof Object)){
var ex__24012__auto__ = e30131;
var statearr_30132_30153 = state_30103;
(statearr_30132_30153[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30103;
state_30103 = G__30154;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24009__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24009__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24009__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24009__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___30134,ch))
})();
var state__24122__auto__ = (function (){var statearr_30133 = f__24121__auto__.call(null);
(statearr_30133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___30134);

return statearr_30133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___30134,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30155_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30155_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30162 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30162){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30161 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30160,_STAR_print_newline_STAR_30161,base_path_30162){
return (function() { 
var G__30163__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30164__i = 0, G__30164__a = new Array(arguments.length -  0);
while (G__30164__i < G__30164__a.length) {G__30164__a[G__30164__i] = arguments[G__30164__i + 0]; ++G__30164__i;}
  args = new cljs.core.IndexedSeq(G__30164__a,0);
} 
return G__30163__delegate.call(this,args);};
G__30163.cljs$lang$maxFixedArity = 0;
G__30163.cljs$lang$applyTo = (function (arglist__30165){
var args = cljs.core.seq(arglist__30165);
return G__30163__delegate(args);
});
G__30163.cljs$core$IFn$_invoke$arity$variadic = G__30163__delegate;
return G__30163;
})()
;})(_STAR_print_fn_STAR_30160,_STAR_print_newline_STAR_30161,base_path_30162))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30161;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30160;
}}catch (e30159){if((e30159 instanceof Error)){
var e = e30159;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30162], null));
} else {
var e = e30159;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30162))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30166){
var map__30175 = p__30166;
var map__30175__$1 = ((((!((map__30175 == null)))?((((map__30175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30175):map__30175);
var opts = map__30175__$1;
var build_id = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30175,map__30175__$1,opts,build_id){
return (function (p__30177){
var vec__30178 = p__30177;
var seq__30179 = cljs.core.seq.call(null,vec__30178);
var first__30180 = cljs.core.first.call(null,seq__30179);
var seq__30179__$1 = cljs.core.next.call(null,seq__30179);
var map__30181 = first__30180;
var map__30181__$1 = ((((!((map__30181 == null)))?((((map__30181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30181):map__30181);
var msg = map__30181__$1;
var msg_name = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30179__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30178,seq__30179,first__30180,seq__30179__$1,map__30181,map__30181__$1,msg,msg_name,_,map__30175,map__30175__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30178,seq__30179,first__30180,seq__30179__$1,map__30181,map__30181__$1,msg,msg_name,_,map__30175,map__30175__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30175,map__30175__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30189){
var vec__30190 = p__30189;
var seq__30191 = cljs.core.seq.call(null,vec__30190);
var first__30192 = cljs.core.first.call(null,seq__30191);
var seq__30191__$1 = cljs.core.next.call(null,seq__30191);
var map__30193 = first__30192;
var map__30193__$1 = ((((!((map__30193 == null)))?((((map__30193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30193):map__30193);
var msg = map__30193__$1;
var msg_name = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30191__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30195){
var map__30207 = p__30195;
var map__30207__$1 = ((((!((map__30207 == null)))?((((map__30207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30207):map__30207);
var on_compile_warning = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30207,map__30207__$1,on_compile_warning,on_compile_fail){
return (function (p__30209){
var vec__30210 = p__30209;
var seq__30211 = cljs.core.seq.call(null,vec__30210);
var first__30212 = cljs.core.first.call(null,seq__30211);
var seq__30211__$1 = cljs.core.next.call(null,seq__30211);
var map__30213 = first__30212;
var map__30213__$1 = ((((!((map__30213 == null)))?((((map__30213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30213):map__30213);
var msg = map__30213__$1;
var msg_name = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30211__$1;
var pred__30215 = cljs.core._EQ_;
var expr__30216 = msg_name;
if(cljs.core.truth_(pred__30215.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30216))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30215.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30216))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30207,map__30207__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__,msg_hist,msg_names,msg){
return (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (7))){
var inst_30356 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30356)){
var statearr_30434_30480 = state_30432__$1;
(statearr_30434_30480[(1)] = (8));

} else {
var statearr_30435_30481 = state_30432__$1;
(statearr_30435_30481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (20))){
var inst_30426 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30436_30482 = state_30432__$1;
(statearr_30436_30482[(2)] = inst_30426);

(statearr_30436_30482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (27))){
var inst_30422 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30437_30483 = state_30432__$1;
(statearr_30437_30483[(2)] = inst_30422);

(statearr_30437_30483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (1))){
var inst_30349 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30349)){
var statearr_30438_30484 = state_30432__$1;
(statearr_30438_30484[(1)] = (2));

} else {
var statearr_30439_30485 = state_30432__$1;
(statearr_30439_30485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (24))){
var inst_30424 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30440_30486 = state_30432__$1;
(statearr_30440_30486[(2)] = inst_30424);

(statearr_30440_30486[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (4))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (15))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30441_30487 = state_30432__$1;
(statearr_30441_30487[(2)] = inst_30428);

(statearr_30441_30487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (21))){
var inst_30387 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30442_30488 = state_30432__$1;
(statearr_30442_30488[(2)] = inst_30387);

(statearr_30442_30488[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (31))){
var inst_30411 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30411)){
var statearr_30443_30489 = state_30432__$1;
(statearr_30443_30489[(1)] = (34));

} else {
var statearr_30444_30490 = state_30432__$1;
(statearr_30444_30490[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (32))){
var inst_30420 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30445_30491 = state_30432__$1;
(statearr_30445_30491[(2)] = inst_30420);

(statearr_30445_30491[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (33))){
var inst_30409 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30446_30492 = state_30432__$1;
(statearr_30446_30492[(2)] = inst_30409);

(statearr_30446_30492[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (13))){
var inst_30370 = figwheel.client.heads_up.clear.call(null);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(16),inst_30370);
} else {
if((state_val_30433 === (22))){
var inst_30391 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30392 = figwheel.client.heads_up.append_message.call(null,inst_30391);
var state_30432__$1 = state_30432;
var statearr_30447_30493 = state_30432__$1;
(statearr_30447_30493[(2)] = inst_30392);

(statearr_30447_30493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (36))){
var inst_30418 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30448_30494 = state_30432__$1;
(statearr_30448_30494[(2)] = inst_30418);

(statearr_30448_30494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (29))){
var inst_30402 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30449_30495 = state_30432__$1;
(statearr_30449_30495[(2)] = inst_30402);

(statearr_30449_30495[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30351 = (state_30432[(7)]);
var state_30432__$1 = state_30432;
var statearr_30450_30496 = state_30432__$1;
(statearr_30450_30496[(2)] = inst_30351);

(statearr_30450_30496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (28))){
var inst_30398 = (state_30432[(2)]);
var inst_30399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30400 = figwheel.client.heads_up.display_warning.call(null,inst_30399);
var state_30432__$1 = (function (){var statearr_30451 = state_30432;
(statearr_30451[(8)] = inst_30398);

return statearr_30451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(29),inst_30400);
} else {
if((state_val_30433 === (25))){
var inst_30396 = figwheel.client.heads_up.clear.call(null);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(28),inst_30396);
} else {
if((state_val_30433 === (34))){
var inst_30413 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(37),inst_30413);
} else {
if((state_val_30433 === (17))){
var inst_30378 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30452_30497 = state_30432__$1;
(statearr_30452_30497[(2)] = inst_30378);

(statearr_30452_30497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (3))){
var inst_30368 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30368)){
var statearr_30453_30498 = state_30432__$1;
(statearr_30453_30498[(1)] = (13));

} else {
var statearr_30454_30499 = state_30432__$1;
(statearr_30454_30499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (12))){
var inst_30364 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30455_30500 = state_30432__$1;
(statearr_30455_30500[(2)] = inst_30364);

(statearr_30455_30500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (2))){
var inst_30351 = (state_30432[(7)]);
var inst_30351__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30432__$1 = (function (){var statearr_30456 = state_30432;
(statearr_30456[(7)] = inst_30351__$1);

return statearr_30456;
})();
if(cljs.core.truth_(inst_30351__$1)){
var statearr_30457_30501 = state_30432__$1;
(statearr_30457_30501[(1)] = (5));

} else {
var statearr_30458_30502 = state_30432__$1;
(statearr_30458_30502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (23))){
var inst_30394 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30394)){
var statearr_30459_30503 = state_30432__$1;
(statearr_30459_30503[(1)] = (25));

} else {
var statearr_30460_30504 = state_30432__$1;
(statearr_30460_30504[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (35))){
var state_30432__$1 = state_30432;
var statearr_30461_30505 = state_30432__$1;
(statearr_30461_30505[(2)] = null);

(statearr_30461_30505[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (19))){
var inst_30389 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30389)){
var statearr_30462_30506 = state_30432__$1;
(statearr_30462_30506[(1)] = (22));

} else {
var statearr_30463_30507 = state_30432__$1;
(statearr_30463_30507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (11))){
var inst_30360 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30464_30508 = state_30432__$1;
(statearr_30464_30508[(2)] = inst_30360);

(statearr_30464_30508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (9))){
var inst_30362 = figwheel.client.heads_up.clear.call(null);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(12),inst_30362);
} else {
if((state_val_30433 === (5))){
var inst_30353 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30432__$1 = state_30432;
var statearr_30465_30509 = state_30432__$1;
(statearr_30465_30509[(2)] = inst_30353);

(statearr_30465_30509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (14))){
var inst_30380 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30380)){
var statearr_30466_30510 = state_30432__$1;
(statearr_30466_30510[(1)] = (18));

} else {
var statearr_30467_30511 = state_30432__$1;
(statearr_30467_30511[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (26))){
var inst_30404 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30404)){
var statearr_30468_30512 = state_30432__$1;
(statearr_30468_30512[(1)] = (30));

} else {
var statearr_30469_30513 = state_30432__$1;
(statearr_30469_30513[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (16))){
var inst_30372 = (state_30432[(2)]);
var inst_30373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30374 = figwheel.client.format_messages.call(null,inst_30373);
var inst_30375 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30376 = figwheel.client.heads_up.display_error.call(null,inst_30374,inst_30375);
var state_30432__$1 = (function (){var statearr_30470 = state_30432;
(statearr_30470[(9)] = inst_30372);

return statearr_30470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(17),inst_30376);
} else {
if((state_val_30433 === (30))){
var inst_30406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30407 = figwheel.client.heads_up.display_warning.call(null,inst_30406);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(33),inst_30407);
} else {
if((state_val_30433 === (10))){
var inst_30366 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30471_30514 = state_30432__$1;
(statearr_30471_30514[(2)] = inst_30366);

(statearr_30471_30514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (18))){
var inst_30382 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30383 = figwheel.client.format_messages.call(null,inst_30382);
var inst_30384 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30385 = figwheel.client.heads_up.display_error.call(null,inst_30383,inst_30384);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(21),inst_30385);
} else {
if((state_val_30433 === (37))){
var inst_30415 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30472_30515 = state_30432__$1;
(statearr_30472_30515[(2)] = inst_30415);

(statearr_30472_30515[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(11),inst_30358);
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
});})(c__24120__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24008__auto__,c__24120__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto____0 = (function (){
var statearr_30476 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30476[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto__);

(statearr_30476[(1)] = (1));

return statearr_30476;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto____1 = (function (state_30432){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_30432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e30477){if((e30477 instanceof Object)){
var ex__24012__auto__ = e30477;
var statearr_30478_30516 = state_30432;
(statearr_30478_30516[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30517 = state_30432;
state_30432 = G__30517;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__,msg_hist,msg_names,msg))
})();
var state__24122__auto__ = (function (){var statearr_30479 = f__24121__auto__.call(null);
(statearr_30479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,msg_hist,msg_names,msg))
);

return c__24120__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24120__auto___30580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___30580,ch){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___30580,ch){
return (function (state_30563){
var state_val_30564 = (state_30563[(1)]);
if((state_val_30564 === (1))){
var state_30563__$1 = state_30563;
var statearr_30565_30581 = state_30563__$1;
(statearr_30565_30581[(2)] = null);

(statearr_30565_30581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (2))){
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30563__$1,(4),ch);
} else {
if((state_val_30564 === (3))){
var inst_30561 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30563__$1,inst_30561);
} else {
if((state_val_30564 === (4))){
var inst_30551 = (state_30563[(7)]);
var inst_30551__$1 = (state_30563[(2)]);
var state_30563__$1 = (function (){var statearr_30566 = state_30563;
(statearr_30566[(7)] = inst_30551__$1);

return statearr_30566;
})();
if(cljs.core.truth_(inst_30551__$1)){
var statearr_30567_30582 = state_30563__$1;
(statearr_30567_30582[(1)] = (5));

} else {
var statearr_30568_30583 = state_30563__$1;
(statearr_30568_30583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (5))){
var inst_30551 = (state_30563[(7)]);
var inst_30553 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30551);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30563__$1,(8),inst_30553);
} else {
if((state_val_30564 === (6))){
var state_30563__$1 = state_30563;
var statearr_30569_30584 = state_30563__$1;
(statearr_30569_30584[(2)] = null);

(statearr_30569_30584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (7))){
var inst_30559 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30570_30585 = state_30563__$1;
(statearr_30570_30585[(2)] = inst_30559);

(statearr_30570_30585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (8))){
var inst_30555 = (state_30563[(2)]);
var state_30563__$1 = (function (){var statearr_30571 = state_30563;
(statearr_30571[(8)] = inst_30555);

return statearr_30571;
})();
var statearr_30572_30586 = state_30563__$1;
(statearr_30572_30586[(2)] = null);

(statearr_30572_30586[(1)] = (2));


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
});})(c__24120__auto___30580,ch))
;
return ((function (switch__24008__auto__,c__24120__auto___30580,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24009__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24009__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24009__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var figwheel$client$heads_up_plugin_$_state_machine__24009__auto____1 = (function (state_30563){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_30563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__24012__auto__ = e30577;
var statearr_30578_30587 = state_30563;
(statearr_30578_30587[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30588 = state_30563;
state_30563 = G__30588;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24009__auto__ = function(state_30563){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24009__auto____1.call(this,state_30563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24009__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24009__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___30580,ch))
})();
var state__24122__auto__ = (function (){var statearr_30579 = f__24121__auto__.call(null);
(statearr_30579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___30580);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___30580,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_30609){
var state_val_30610 = (state_30609[(1)]);
if((state_val_30610 === (1))){
var inst_30604 = cljs.core.async.timeout.call(null,(3000));
var state_30609__$1 = state_30609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30609__$1,(2),inst_30604);
} else {
if((state_val_30610 === (2))){
var inst_30606 = (state_30609[(2)]);
var inst_30607 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30609__$1 = (function (){var statearr_30611 = state_30609;
(statearr_30611[(7)] = inst_30606);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30609__$1,inst_30607);
} else {
return null;
}
}
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24009__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24009__auto____0 = (function (){
var statearr_30615 = [null,null,null,null,null,null,null,null];
(statearr_30615[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24009__auto__);

(statearr_30615[(1)] = (1));

return statearr_30615;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24009__auto____1 = (function (state_30609){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_30609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e30616){if((e30616 instanceof Object)){
var ex__24012__auto__ = e30616;
var statearr_30617_30619 = state_30609;
(statearr_30617_30619[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30620 = state_30609;
state_30609 = G__30620;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24009__auto__ = function(state_30609){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24009__auto____1.call(this,state_30609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24009__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24009__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_30618 = f__24121__auto__.call(null);
(statearr_30618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_30618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30621){
var map__30628 = p__30621;
var map__30628__$1 = ((((!((map__30628 == null)))?((((map__30628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30628):map__30628);
var ed = map__30628__$1;
var formatted_exception = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30630_30634 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30631_30635 = null;
var count__30632_30636 = (0);
var i__30633_30637 = (0);
while(true){
if((i__30633_30637 < count__30632_30636)){
var msg_30638 = cljs.core._nth.call(null,chunk__30631_30635,i__30633_30637);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30638);

var G__30639 = seq__30630_30634;
var G__30640 = chunk__30631_30635;
var G__30641 = count__30632_30636;
var G__30642 = (i__30633_30637 + (1));
seq__30630_30634 = G__30639;
chunk__30631_30635 = G__30640;
count__30632_30636 = G__30641;
i__30633_30637 = G__30642;
continue;
} else {
var temp__4657__auto___30643 = cljs.core.seq.call(null,seq__30630_30634);
if(temp__4657__auto___30643){
var seq__30630_30644__$1 = temp__4657__auto___30643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30630_30644__$1)){
var c__19429__auto___30645 = cljs.core.chunk_first.call(null,seq__30630_30644__$1);
var G__30646 = cljs.core.chunk_rest.call(null,seq__30630_30644__$1);
var G__30647 = c__19429__auto___30645;
var G__30648 = cljs.core.count.call(null,c__19429__auto___30645);
var G__30649 = (0);
seq__30630_30634 = G__30646;
chunk__30631_30635 = G__30647;
count__30632_30636 = G__30648;
i__30633_30637 = G__30649;
continue;
} else {
var msg_30650 = cljs.core.first.call(null,seq__30630_30644__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30650);

var G__30651 = cljs.core.next.call(null,seq__30630_30644__$1);
var G__30652 = null;
var G__30653 = (0);
var G__30654 = (0);
seq__30630_30634 = G__30651;
chunk__30631_30635 = G__30652;
count__30632_30636 = G__30653;
i__30633_30637 = G__30654;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30655){
var map__30658 = p__30655;
var map__30658__$1 = ((((!((map__30658 == null)))?((((map__30658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30658):map__30658);
var w = map__30658__$1;
var message = cljs.core.get.call(null,map__30658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18606__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18606__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18606__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30670 = cljs.core.seq.call(null,plugins);
var chunk__30671 = null;
var count__30672 = (0);
var i__30673 = (0);
while(true){
if((i__30673 < count__30672)){
var vec__30674 = cljs.core._nth.call(null,chunk__30671,i__30673);
var k = cljs.core.nth.call(null,vec__30674,(0),null);
var plugin = cljs.core.nth.call(null,vec__30674,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30680 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30670,chunk__30671,count__30672,i__30673,pl_30680,vec__30674,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30680.call(null,msg_hist);
});})(seq__30670,chunk__30671,count__30672,i__30673,pl_30680,vec__30674,k,plugin))
);
} else {
}

var G__30681 = seq__30670;
var G__30682 = chunk__30671;
var G__30683 = count__30672;
var G__30684 = (i__30673 + (1));
seq__30670 = G__30681;
chunk__30671 = G__30682;
count__30672 = G__30683;
i__30673 = G__30684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30670);
if(temp__4657__auto__){
var seq__30670__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30670__$1)){
var c__19429__auto__ = cljs.core.chunk_first.call(null,seq__30670__$1);
var G__30685 = cljs.core.chunk_rest.call(null,seq__30670__$1);
var G__30686 = c__19429__auto__;
var G__30687 = cljs.core.count.call(null,c__19429__auto__);
var G__30688 = (0);
seq__30670 = G__30685;
chunk__30671 = G__30686;
count__30672 = G__30687;
i__30673 = G__30688;
continue;
} else {
var vec__30677 = cljs.core.first.call(null,seq__30670__$1);
var k = cljs.core.nth.call(null,vec__30677,(0),null);
var plugin = cljs.core.nth.call(null,vec__30677,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30689 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30670,chunk__30671,count__30672,i__30673,pl_30689,vec__30677,k,plugin,seq__30670__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30689.call(null,msg_hist);
});})(seq__30670,chunk__30671,count__30672,i__30673,pl_30689,vec__30677,k,plugin,seq__30670__$1,temp__4657__auto__))
);
} else {
}

var G__30690 = cljs.core.next.call(null,seq__30670__$1);
var G__30691 = null;
var G__30692 = (0);
var G__30693 = (0);
seq__30670 = G__30690;
chunk__30671 = G__30691;
count__30672 = G__30692;
i__30673 = G__30693;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30694 = [];
var len__19693__auto___30697 = arguments.length;
var i__19694__auto___30698 = (0);
while(true){
if((i__19694__auto___30698 < len__19693__auto___30697)){
args30694.push((arguments[i__19694__auto___30698]));

var G__30699 = (i__19694__auto___30698 + (1));
i__19694__auto___30698 = G__30699;
continue;
} else {
}
break;
}

var G__30696 = args30694.length;
switch (G__30696) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30694.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19700__auto__ = [];
var len__19693__auto___30705 = arguments.length;
var i__19694__auto___30706 = (0);
while(true){
if((i__19694__auto___30706 < len__19693__auto___30705)){
args__19700__auto__.push((arguments[i__19694__auto___30706]));

var G__30707 = (i__19694__auto___30706 + (1));
i__19694__auto___30706 = G__30707;
continue;
} else {
}
break;
}

var argseq__19701__auto__ = ((((0) < args__19700__auto__.length))?(new cljs.core.IndexedSeq(args__19700__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19701__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30702){
var map__30703 = p__30702;
var map__30703__$1 = ((((!((map__30703 == null)))?((((map__30703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30703):map__30703);
var opts = map__30703__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30701){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30701));
});


//# sourceMappingURL=client.js.map