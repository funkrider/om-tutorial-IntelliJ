// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18618__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18618__auto__){
return or__18618__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18618__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27097_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27097_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27102 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27103 = null;
var count__27104 = (0);
var i__27105 = (0);
while(true){
if((i__27105 < count__27104)){
var n = cljs.core._nth.call(null,chunk__27103,i__27105);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27106 = seq__27102;
var G__27107 = chunk__27103;
var G__27108 = count__27104;
var G__27109 = (i__27105 + (1));
seq__27102 = G__27106;
chunk__27103 = G__27107;
count__27104 = G__27108;
i__27105 = G__27109;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27102);
if(temp__4657__auto__){
var seq__27102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27102__$1)){
var c__19429__auto__ = cljs.core.chunk_first.call(null,seq__27102__$1);
var G__27110 = cljs.core.chunk_rest.call(null,seq__27102__$1);
var G__27111 = c__19429__auto__;
var G__27112 = cljs.core.count.call(null,c__19429__auto__);
var G__27113 = (0);
seq__27102 = G__27110;
chunk__27103 = G__27111;
count__27104 = G__27112;
i__27105 = G__27113;
continue;
} else {
var n = cljs.core.first.call(null,seq__27102__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27114 = cljs.core.next.call(null,seq__27102__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__27102 = G__27114;
chunk__27103 = G__27115;
count__27104 = G__27116;
i__27105 = G__27117;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27168_27179 = cljs.core.seq.call(null,deps);
var chunk__27169_27180 = null;
var count__27170_27181 = (0);
var i__27171_27182 = (0);
while(true){
if((i__27171_27182 < count__27170_27181)){
var dep_27183 = cljs.core._nth.call(null,chunk__27169_27180,i__27171_27182);
topo_sort_helper_STAR_.call(null,dep_27183,(depth + (1)),state);

var G__27184 = seq__27168_27179;
var G__27185 = chunk__27169_27180;
var G__27186 = count__27170_27181;
var G__27187 = (i__27171_27182 + (1));
seq__27168_27179 = G__27184;
chunk__27169_27180 = G__27185;
count__27170_27181 = G__27186;
i__27171_27182 = G__27187;
continue;
} else {
var temp__4657__auto___27188 = cljs.core.seq.call(null,seq__27168_27179);
if(temp__4657__auto___27188){
var seq__27168_27189__$1 = temp__4657__auto___27188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27168_27189__$1)){
var c__19429__auto___27190 = cljs.core.chunk_first.call(null,seq__27168_27189__$1);
var G__27191 = cljs.core.chunk_rest.call(null,seq__27168_27189__$1);
var G__27192 = c__19429__auto___27190;
var G__27193 = cljs.core.count.call(null,c__19429__auto___27190);
var G__27194 = (0);
seq__27168_27179 = G__27191;
chunk__27169_27180 = G__27192;
count__27170_27181 = G__27193;
i__27171_27182 = G__27194;
continue;
} else {
var dep_27195 = cljs.core.first.call(null,seq__27168_27189__$1);
topo_sort_helper_STAR_.call(null,dep_27195,(depth + (1)),state);

var G__27196 = cljs.core.next.call(null,seq__27168_27189__$1);
var G__27197 = null;
var G__27198 = (0);
var G__27199 = (0);
seq__27168_27179 = G__27196;
chunk__27169_27180 = G__27197;
count__27170_27181 = G__27198;
i__27171_27182 = G__27199;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27172){
var vec__27176 = p__27172;
var seq__27177 = cljs.core.seq.call(null,vec__27176);
var first__27178 = cljs.core.first.call(null,seq__27177);
var seq__27177__$1 = cljs.core.next.call(null,seq__27177);
var x = first__27178;
var xs = seq__27177__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27176,seq__27177,first__27178,seq__27177__$1,x,xs,get_deps__$1){
return (function (p1__27118_SHARP_){
return clojure.set.difference.call(null,p1__27118_SHARP_,x);
});})(vec__27176,seq__27177,first__27178,seq__27177__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27212 = cljs.core.seq.call(null,provides);
var chunk__27213 = null;
var count__27214 = (0);
var i__27215 = (0);
while(true){
if((i__27215 < count__27214)){
var prov = cljs.core._nth.call(null,chunk__27213,i__27215);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27216_27224 = cljs.core.seq.call(null,requires);
var chunk__27217_27225 = null;
var count__27218_27226 = (0);
var i__27219_27227 = (0);
while(true){
if((i__27219_27227 < count__27218_27226)){
var req_27228 = cljs.core._nth.call(null,chunk__27217_27225,i__27219_27227);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27228,prov);

var G__27229 = seq__27216_27224;
var G__27230 = chunk__27217_27225;
var G__27231 = count__27218_27226;
var G__27232 = (i__27219_27227 + (1));
seq__27216_27224 = G__27229;
chunk__27217_27225 = G__27230;
count__27218_27226 = G__27231;
i__27219_27227 = G__27232;
continue;
} else {
var temp__4657__auto___27233 = cljs.core.seq.call(null,seq__27216_27224);
if(temp__4657__auto___27233){
var seq__27216_27234__$1 = temp__4657__auto___27233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27216_27234__$1)){
var c__19429__auto___27235 = cljs.core.chunk_first.call(null,seq__27216_27234__$1);
var G__27236 = cljs.core.chunk_rest.call(null,seq__27216_27234__$1);
var G__27237 = c__19429__auto___27235;
var G__27238 = cljs.core.count.call(null,c__19429__auto___27235);
var G__27239 = (0);
seq__27216_27224 = G__27236;
chunk__27217_27225 = G__27237;
count__27218_27226 = G__27238;
i__27219_27227 = G__27239;
continue;
} else {
var req_27240 = cljs.core.first.call(null,seq__27216_27234__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27240,prov);

var G__27241 = cljs.core.next.call(null,seq__27216_27234__$1);
var G__27242 = null;
var G__27243 = (0);
var G__27244 = (0);
seq__27216_27224 = G__27241;
chunk__27217_27225 = G__27242;
count__27218_27226 = G__27243;
i__27219_27227 = G__27244;
continue;
}
} else {
}
}
break;
}

var G__27245 = seq__27212;
var G__27246 = chunk__27213;
var G__27247 = count__27214;
var G__27248 = (i__27215 + (1));
seq__27212 = G__27245;
chunk__27213 = G__27246;
count__27214 = G__27247;
i__27215 = G__27248;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27212);
if(temp__4657__auto__){
var seq__27212__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27212__$1)){
var c__19429__auto__ = cljs.core.chunk_first.call(null,seq__27212__$1);
var G__27249 = cljs.core.chunk_rest.call(null,seq__27212__$1);
var G__27250 = c__19429__auto__;
var G__27251 = cljs.core.count.call(null,c__19429__auto__);
var G__27252 = (0);
seq__27212 = G__27249;
chunk__27213 = G__27250;
count__27214 = G__27251;
i__27215 = G__27252;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27212__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27220_27253 = cljs.core.seq.call(null,requires);
var chunk__27221_27254 = null;
var count__27222_27255 = (0);
var i__27223_27256 = (0);
while(true){
if((i__27223_27256 < count__27222_27255)){
var req_27257 = cljs.core._nth.call(null,chunk__27221_27254,i__27223_27256);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27257,prov);

var G__27258 = seq__27220_27253;
var G__27259 = chunk__27221_27254;
var G__27260 = count__27222_27255;
var G__27261 = (i__27223_27256 + (1));
seq__27220_27253 = G__27258;
chunk__27221_27254 = G__27259;
count__27222_27255 = G__27260;
i__27223_27256 = G__27261;
continue;
} else {
var temp__4657__auto___27262__$1 = cljs.core.seq.call(null,seq__27220_27253);
if(temp__4657__auto___27262__$1){
var seq__27220_27263__$1 = temp__4657__auto___27262__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27220_27263__$1)){
var c__19429__auto___27264 = cljs.core.chunk_first.call(null,seq__27220_27263__$1);
var G__27265 = cljs.core.chunk_rest.call(null,seq__27220_27263__$1);
var G__27266 = c__19429__auto___27264;
var G__27267 = cljs.core.count.call(null,c__19429__auto___27264);
var G__27268 = (0);
seq__27220_27253 = G__27265;
chunk__27221_27254 = G__27266;
count__27222_27255 = G__27267;
i__27223_27256 = G__27268;
continue;
} else {
var req_27269 = cljs.core.first.call(null,seq__27220_27263__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27269,prov);

var G__27270 = cljs.core.next.call(null,seq__27220_27263__$1);
var G__27271 = null;
var G__27272 = (0);
var G__27273 = (0);
seq__27220_27253 = G__27270;
chunk__27221_27254 = G__27271;
count__27222_27255 = G__27272;
i__27223_27256 = G__27273;
continue;
}
} else {
}
}
break;
}

var G__27274 = cljs.core.next.call(null,seq__27212__$1);
var G__27275 = null;
var G__27276 = (0);
var G__27277 = (0);
seq__27212 = G__27274;
chunk__27213 = G__27275;
count__27214 = G__27276;
i__27215 = G__27277;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27282_27286 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27283_27287 = null;
var count__27284_27288 = (0);
var i__27285_27289 = (0);
while(true){
if((i__27285_27289 < count__27284_27288)){
var ns_27290 = cljs.core._nth.call(null,chunk__27283_27287,i__27285_27289);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27290);

var G__27291 = seq__27282_27286;
var G__27292 = chunk__27283_27287;
var G__27293 = count__27284_27288;
var G__27294 = (i__27285_27289 + (1));
seq__27282_27286 = G__27291;
chunk__27283_27287 = G__27292;
count__27284_27288 = G__27293;
i__27285_27289 = G__27294;
continue;
} else {
var temp__4657__auto___27295 = cljs.core.seq.call(null,seq__27282_27286);
if(temp__4657__auto___27295){
var seq__27282_27296__$1 = temp__4657__auto___27295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27282_27296__$1)){
var c__19429__auto___27297 = cljs.core.chunk_first.call(null,seq__27282_27296__$1);
var G__27298 = cljs.core.chunk_rest.call(null,seq__27282_27296__$1);
var G__27299 = c__19429__auto___27297;
var G__27300 = cljs.core.count.call(null,c__19429__auto___27297);
var G__27301 = (0);
seq__27282_27286 = G__27298;
chunk__27283_27287 = G__27299;
count__27284_27288 = G__27300;
i__27285_27289 = G__27301;
continue;
} else {
var ns_27302 = cljs.core.first.call(null,seq__27282_27296__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27302);

var G__27303 = cljs.core.next.call(null,seq__27282_27296__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27282_27286 = G__27303;
chunk__27283_27287 = G__27304;
count__27284_27288 = G__27305;
i__27285_27289 = G__27306;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18618__auto__ = goog.require__;
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27307__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27308__i = 0, G__27308__a = new Array(arguments.length -  0);
while (G__27308__i < G__27308__a.length) {G__27308__a[G__27308__i] = arguments[G__27308__i + 0]; ++G__27308__i;}
  args = new cljs.core.IndexedSeq(G__27308__a,0);
} 
return G__27307__delegate.call(this,args);};
G__27307.cljs$lang$maxFixedArity = 0;
G__27307.cljs$lang$applyTo = (function (arglist__27309){
var args = cljs.core.seq(arglist__27309);
return G__27307__delegate(args);
});
G__27307.cljs$core$IFn$_invoke$arity$variadic = G__27307__delegate;
return G__27307;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27311 = cljs.core._EQ_;
var expr__27312 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27311.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27312))){
var path_parts = ((function (pred__27311,expr__27312){
return (function (p1__27310_SHARP_){
return clojure.string.split.call(null,p1__27310_SHARP_,/[\/\\]/);
});})(pred__27311,expr__27312))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27311,expr__27312){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27314){if((e27314 instanceof Error)){
var e = e27314;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27314;

}
}})());
});
;})(path_parts,sep,root,pred__27311,expr__27312))
} else {
if(cljs.core.truth_(pred__27311.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27312))){
return ((function (pred__27311,expr__27312){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__27311,expr__27312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27311,expr__27312))
);

return deferred.addErrback(((function (deferred,pred__27311,expr__27312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27311,expr__27312))
);
});
;})(pred__27311,expr__27312))
} else {
return ((function (pred__27311,expr__27312){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27311,expr__27312))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27315,callback){
var map__27318 = p__27315;
var map__27318__$1 = ((((!((map__27318 == null)))?((((map__27318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27318):map__27318);
var file_msg = map__27318__$1;
var request_url = cljs.core.get.call(null,map__27318__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27318,map__27318__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27318,map__27318__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__){
return (function (state_27342){
var state_val_27343 = (state_27342[(1)]);
if((state_val_27343 === (7))){
var inst_27338 = (state_27342[(2)]);
var state_27342__$1 = state_27342;
var statearr_27344_27364 = state_27342__$1;
(statearr_27344_27364[(2)] = inst_27338);

(statearr_27344_27364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (1))){
var state_27342__$1 = state_27342;
var statearr_27345_27365 = state_27342__$1;
(statearr_27345_27365[(2)] = null);

(statearr_27345_27365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (4))){
var inst_27322 = (state_27342[(7)]);
var inst_27322__$1 = (state_27342[(2)]);
var state_27342__$1 = (function (){var statearr_27346 = state_27342;
(statearr_27346[(7)] = inst_27322__$1);

return statearr_27346;
})();
if(cljs.core.truth_(inst_27322__$1)){
var statearr_27347_27366 = state_27342__$1;
(statearr_27347_27366[(1)] = (5));

} else {
var statearr_27348_27367 = state_27342__$1;
(statearr_27348_27367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (6))){
var state_27342__$1 = state_27342;
var statearr_27349_27368 = state_27342__$1;
(statearr_27349_27368[(2)] = null);

(statearr_27349_27368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (3))){
var inst_27340 = (state_27342[(2)]);
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27342__$1,inst_27340);
} else {
if((state_val_27343 === (2))){
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27342__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27343 === (11))){
var inst_27334 = (state_27342[(2)]);
var state_27342__$1 = (function (){var statearr_27350 = state_27342;
(statearr_27350[(8)] = inst_27334);

return statearr_27350;
})();
var statearr_27351_27369 = state_27342__$1;
(statearr_27351_27369[(2)] = null);

(statearr_27351_27369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (9))){
var inst_27328 = (state_27342[(9)]);
var inst_27326 = (state_27342[(10)]);
var inst_27330 = inst_27328.call(null,inst_27326);
var state_27342__$1 = state_27342;
var statearr_27352_27370 = state_27342__$1;
(statearr_27352_27370[(2)] = inst_27330);

(statearr_27352_27370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (5))){
var inst_27322 = (state_27342[(7)]);
var inst_27324 = figwheel.client.file_reloading.blocking_load.call(null,inst_27322);
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27342__$1,(8),inst_27324);
} else {
if((state_val_27343 === (10))){
var inst_27326 = (state_27342[(10)]);
var inst_27332 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27326);
var state_27342__$1 = state_27342;
var statearr_27353_27371 = state_27342__$1;
(statearr_27353_27371[(2)] = inst_27332);

(statearr_27353_27371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (8))){
var inst_27322 = (state_27342[(7)]);
var inst_27328 = (state_27342[(9)]);
var inst_27326 = (state_27342[(2)]);
var inst_27327 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27328__$1 = cljs.core.get.call(null,inst_27327,inst_27322);
var state_27342__$1 = (function (){var statearr_27354 = state_27342;
(statearr_27354[(9)] = inst_27328__$1);

(statearr_27354[(10)] = inst_27326);

return statearr_27354;
})();
if(cljs.core.truth_(inst_27328__$1)){
var statearr_27355_27372 = state_27342__$1;
(statearr_27355_27372[(1)] = (9));

} else {
var statearr_27356_27373 = state_27342__$1;
(statearr_27356_27373[(1)] = (10));

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
});})(c__24120__auto__))
;
return ((function (switch__24008__auto__,c__24120__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24009__auto__ = null;
var figwheel$client$file_reloading$state_machine__24009__auto____0 = (function (){
var statearr_27360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27360[(0)] = figwheel$client$file_reloading$state_machine__24009__auto__);

(statearr_27360[(1)] = (1));

return statearr_27360;
});
var figwheel$client$file_reloading$state_machine__24009__auto____1 = (function (state_27342){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_27342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e27361){if((e27361 instanceof Object)){
var ex__24012__auto__ = e27361;
var statearr_27362_27374 = state_27342;
(statearr_27362_27374[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27375 = state_27342;
state_27342 = G__27375;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24009__auto__ = function(state_27342){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24009__auto____1.call(this,state_27342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24009__auto____0;
figwheel$client$file_reloading$state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24009__auto____1;
return figwheel$client$file_reloading$state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_27363 = f__24121__auto__.call(null);
(statearr_27363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_27363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27376,callback){
var map__27379 = p__27376;
var map__27379__$1 = ((((!((map__27379 == null)))?((((map__27379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27379):map__27379);
var file_msg = map__27379__$1;
var namespace = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27379,map__27379__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27379,map__27379__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27381){
var map__27384 = p__27381;
var map__27384__$1 = ((((!((map__27384 == null)))?((((map__27384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27384):map__27384);
var file_msg = map__27384__$1;
var namespace = cljs.core.get.call(null,map__27384__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18606__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18606__auto__){
var or__18618__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
var or__18618__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18618__auto____$1)){
return or__18618__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18606__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27386,callback){
var map__27389 = p__27386;
var map__27389__$1 = ((((!((map__27389 == null)))?((((map__27389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var file_msg = map__27389__$1;
var request_url = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24120__auto___27493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___27493,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto___27493,out){
return (function (state_27475){
var state_val_27476 = (state_27475[(1)]);
if((state_val_27476 === (1))){
var inst_27449 = cljs.core.seq.call(null,files);
var inst_27450 = cljs.core.first.call(null,inst_27449);
var inst_27451 = cljs.core.next.call(null,inst_27449);
var inst_27452 = files;
var state_27475__$1 = (function (){var statearr_27477 = state_27475;
(statearr_27477[(7)] = inst_27450);

(statearr_27477[(8)] = inst_27451);

(statearr_27477[(9)] = inst_27452);

return statearr_27477;
})();
var statearr_27478_27494 = state_27475__$1;
(statearr_27478_27494[(2)] = null);

(statearr_27478_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (2))){
var inst_27458 = (state_27475[(10)]);
var inst_27452 = (state_27475[(9)]);
var inst_27457 = cljs.core.seq.call(null,inst_27452);
var inst_27458__$1 = cljs.core.first.call(null,inst_27457);
var inst_27459 = cljs.core.next.call(null,inst_27457);
var inst_27460 = (inst_27458__$1 == null);
var inst_27461 = cljs.core.not.call(null,inst_27460);
var state_27475__$1 = (function (){var statearr_27479 = state_27475;
(statearr_27479[(11)] = inst_27459);

(statearr_27479[(10)] = inst_27458__$1);

return statearr_27479;
})();
if(inst_27461){
var statearr_27480_27495 = state_27475__$1;
(statearr_27480_27495[(1)] = (4));

} else {
var statearr_27481_27496 = state_27475__$1;
(statearr_27481_27496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (3))){
var inst_27473 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27475__$1,inst_27473);
} else {
if((state_val_27476 === (4))){
var inst_27458 = (state_27475[(10)]);
var inst_27463 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27458);
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27475__$1,(7),inst_27463);
} else {
if((state_val_27476 === (5))){
var inst_27469 = cljs.core.async.close_BANG_.call(null,out);
var state_27475__$1 = state_27475;
var statearr_27482_27497 = state_27475__$1;
(statearr_27482_27497[(2)] = inst_27469);

(statearr_27482_27497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (6))){
var inst_27471 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
var statearr_27483_27498 = state_27475__$1;
(statearr_27483_27498[(2)] = inst_27471);

(statearr_27483_27498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (7))){
var inst_27459 = (state_27475[(11)]);
var inst_27465 = (state_27475[(2)]);
var inst_27466 = cljs.core.async.put_BANG_.call(null,out,inst_27465);
var inst_27452 = inst_27459;
var state_27475__$1 = (function (){var statearr_27484 = state_27475;
(statearr_27484[(9)] = inst_27452);

(statearr_27484[(12)] = inst_27466);

return statearr_27484;
})();
var statearr_27485_27499 = state_27475__$1;
(statearr_27485_27499[(2)] = null);

(statearr_27485_27499[(1)] = (2));


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
});})(c__24120__auto___27493,out))
;
return ((function (switch__24008__auto__,c__24120__auto___27493,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto____1 = (function (state_27475){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_27475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__24012__auto__ = e27490;
var statearr_27491_27500 = state_27475;
(statearr_27491_27500[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27501 = state_27475;
state_27475 = G__27501;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto__ = function(state_27475){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto____1.call(this,state_27475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto___27493,out))
})();
var state__24122__auto__ = (function (){var statearr_27492 = f__24121__auto__.call(null);
(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto___27493);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___27493,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27502,opts){
var map__27506 = p__27502;
var map__27506__$1 = ((((!((map__27506 == null)))?((((map__27506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27506):map__27506);
var eval_body__$1 = cljs.core.get.call(null,map__27506__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27506__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18606__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18606__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18606__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27508){var e = e27508;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27509_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27509_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27518){
var vec__27519 = p__27518;
var k = cljs.core.nth.call(null,vec__27519,(0),null);
var v = cljs.core.nth.call(null,vec__27519,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27522){
var vec__27523 = p__27522;
var k = cljs.core.nth.call(null,vec__27523,(0),null);
var v = cljs.core.nth.call(null,vec__27523,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27529,p__27530){
var map__27777 = p__27529;
var map__27777__$1 = ((((!((map__27777 == null)))?((((map__27777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27777):map__27777);
var opts = map__27777__$1;
var before_jsload = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27778 = p__27530;
var map__27778__$1 = ((((!((map__27778 == null)))?((((map__27778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27778):map__27778);
var msg = map__27778__$1;
var files = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24121__auto__ = (function (){var switch__24008__auto__ = ((function (c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27931){
var state_val_27932 = (state_27931[(1)]);
if((state_val_27932 === (7))){
var inst_27793 = (state_27931[(7)]);
var inst_27792 = (state_27931[(8)]);
var inst_27794 = (state_27931[(9)]);
var inst_27795 = (state_27931[(10)]);
var inst_27800 = cljs.core._nth.call(null,inst_27793,inst_27795);
var inst_27801 = figwheel.client.file_reloading.eval_body.call(null,inst_27800,opts);
var inst_27802 = (inst_27795 + (1));
var tmp27933 = inst_27793;
var tmp27934 = inst_27792;
var tmp27935 = inst_27794;
var inst_27792__$1 = tmp27934;
var inst_27793__$1 = tmp27933;
var inst_27794__$1 = tmp27935;
var inst_27795__$1 = inst_27802;
var state_27931__$1 = (function (){var statearr_27936 = state_27931;
(statearr_27936[(7)] = inst_27793__$1);

(statearr_27936[(8)] = inst_27792__$1);

(statearr_27936[(9)] = inst_27794__$1);

(statearr_27936[(10)] = inst_27795__$1);

(statearr_27936[(11)] = inst_27801);

return statearr_27936;
})();
var statearr_27937_28023 = state_27931__$1;
(statearr_27937_28023[(2)] = null);

(statearr_27937_28023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (20))){
var inst_27835 = (state_27931[(12)]);
var inst_27843 = figwheel.client.file_reloading.sort_files.call(null,inst_27835);
var state_27931__$1 = state_27931;
var statearr_27938_28024 = state_27931__$1;
(statearr_27938_28024[(2)] = inst_27843);

(statearr_27938_28024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (27))){
var state_27931__$1 = state_27931;
var statearr_27939_28025 = state_27931__$1;
(statearr_27939_28025[(2)] = null);

(statearr_27939_28025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (1))){
var inst_27784 = (state_27931[(13)]);
var inst_27781 = before_jsload.call(null,files);
var inst_27782 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27783 = (function (){return ((function (inst_27784,inst_27781,inst_27782,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27526_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27526_SHARP_);
});
;})(inst_27784,inst_27781,inst_27782,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27784__$1 = cljs.core.filter.call(null,inst_27783,files);
var inst_27785 = cljs.core.not_empty.call(null,inst_27784__$1);
var state_27931__$1 = (function (){var statearr_27940 = state_27931;
(statearr_27940[(14)] = inst_27781);

(statearr_27940[(13)] = inst_27784__$1);

(statearr_27940[(15)] = inst_27782);

return statearr_27940;
})();
if(cljs.core.truth_(inst_27785)){
var statearr_27941_28026 = state_27931__$1;
(statearr_27941_28026[(1)] = (2));

} else {
var statearr_27942_28027 = state_27931__$1;
(statearr_27942_28027[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (24))){
var state_27931__$1 = state_27931;
var statearr_27943_28028 = state_27931__$1;
(statearr_27943_28028[(2)] = null);

(statearr_27943_28028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (39))){
var inst_27885 = (state_27931[(16)]);
var state_27931__$1 = state_27931;
var statearr_27944_28029 = state_27931__$1;
(statearr_27944_28029[(2)] = inst_27885);

(statearr_27944_28029[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (46))){
var inst_27926 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
var statearr_27945_28030 = state_27931__$1;
(statearr_27945_28030[(2)] = inst_27926);

(statearr_27945_28030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (4))){
var inst_27829 = (state_27931[(2)]);
var inst_27830 = cljs.core.List.EMPTY;
var inst_27831 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27830);
var inst_27832 = (function (){return ((function (inst_27829,inst_27830,inst_27831,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27527_SHARP_){
var and__18606__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27527_SHARP_);
if(cljs.core.truth_(and__18606__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27527_SHARP_));
} else {
return and__18606__auto__;
}
});
;})(inst_27829,inst_27830,inst_27831,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27833 = cljs.core.filter.call(null,inst_27832,files);
var inst_27834 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27835 = cljs.core.concat.call(null,inst_27833,inst_27834);
var state_27931__$1 = (function (){var statearr_27946 = state_27931;
(statearr_27946[(17)] = inst_27831);

(statearr_27946[(18)] = inst_27829);

(statearr_27946[(12)] = inst_27835);

return statearr_27946;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27947_28031 = state_27931__$1;
(statearr_27947_28031[(1)] = (16));

} else {
var statearr_27948_28032 = state_27931__$1;
(statearr_27948_28032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (15))){
var inst_27819 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
var statearr_27949_28033 = state_27931__$1;
(statearr_27949_28033[(2)] = inst_27819);

(statearr_27949_28033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (21))){
var inst_27845 = (state_27931[(19)]);
var inst_27845__$1 = (state_27931[(2)]);
var inst_27846 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27845__$1);
var state_27931__$1 = (function (){var statearr_27950 = state_27931;
(statearr_27950[(19)] = inst_27845__$1);

return statearr_27950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27931__$1,(22),inst_27846);
} else {
if((state_val_27932 === (31))){
var inst_27929 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27931__$1,inst_27929);
} else {
if((state_val_27932 === (32))){
var inst_27885 = (state_27931[(16)]);
var inst_27890 = inst_27885.cljs$lang$protocol_mask$partition0$;
var inst_27891 = (inst_27890 & (64));
var inst_27892 = inst_27885.cljs$core$ISeq$;
var inst_27893 = (inst_27891) || (inst_27892);
var state_27931__$1 = state_27931;
if(cljs.core.truth_(inst_27893)){
var statearr_27951_28034 = state_27931__$1;
(statearr_27951_28034[(1)] = (35));

} else {
var statearr_27952_28035 = state_27931__$1;
(statearr_27952_28035[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (40))){
var inst_27906 = (state_27931[(20)]);
var inst_27905 = (state_27931[(2)]);
var inst_27906__$1 = cljs.core.get.call(null,inst_27905,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27907 = cljs.core.get.call(null,inst_27905,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27908 = cljs.core.not_empty.call(null,inst_27906__$1);
var state_27931__$1 = (function (){var statearr_27953 = state_27931;
(statearr_27953[(21)] = inst_27907);

(statearr_27953[(20)] = inst_27906__$1);

return statearr_27953;
})();
if(cljs.core.truth_(inst_27908)){
var statearr_27954_28036 = state_27931__$1;
(statearr_27954_28036[(1)] = (41));

} else {
var statearr_27955_28037 = state_27931__$1;
(statearr_27955_28037[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (33))){
var state_27931__$1 = state_27931;
var statearr_27956_28038 = state_27931__$1;
(statearr_27956_28038[(2)] = false);

(statearr_27956_28038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (13))){
var inst_27805 = (state_27931[(22)]);
var inst_27809 = cljs.core.chunk_first.call(null,inst_27805);
var inst_27810 = cljs.core.chunk_rest.call(null,inst_27805);
var inst_27811 = cljs.core.count.call(null,inst_27809);
var inst_27792 = inst_27810;
var inst_27793 = inst_27809;
var inst_27794 = inst_27811;
var inst_27795 = (0);
var state_27931__$1 = (function (){var statearr_27957 = state_27931;
(statearr_27957[(7)] = inst_27793);

(statearr_27957[(8)] = inst_27792);

(statearr_27957[(9)] = inst_27794);

(statearr_27957[(10)] = inst_27795);

return statearr_27957;
})();
var statearr_27958_28039 = state_27931__$1;
(statearr_27958_28039[(2)] = null);

(statearr_27958_28039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (22))){
var inst_27849 = (state_27931[(23)]);
var inst_27848 = (state_27931[(24)]);
var inst_27853 = (state_27931[(25)]);
var inst_27845 = (state_27931[(19)]);
var inst_27848__$1 = (state_27931[(2)]);
var inst_27849__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27848__$1);
var inst_27850 = (function (){var all_files = inst_27845;
var res_SINGLEQUOTE_ = inst_27848__$1;
var res = inst_27849__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27849,inst_27848,inst_27853,inst_27845,inst_27848__$1,inst_27849__$1,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27528_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27528_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27849,inst_27848,inst_27853,inst_27845,inst_27848__$1,inst_27849__$1,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27851 = cljs.core.filter.call(null,inst_27850,inst_27848__$1);
var inst_27852 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27852);
var inst_27854 = cljs.core.not_empty.call(null,inst_27853__$1);
var state_27931__$1 = (function (){var statearr_27959 = state_27931;
(statearr_27959[(23)] = inst_27849__$1);

(statearr_27959[(26)] = inst_27851);

(statearr_27959[(24)] = inst_27848__$1);

(statearr_27959[(25)] = inst_27853__$1);

return statearr_27959;
})();
if(cljs.core.truth_(inst_27854)){
var statearr_27960_28040 = state_27931__$1;
(statearr_27960_28040[(1)] = (23));

} else {
var statearr_27961_28041 = state_27931__$1;
(statearr_27961_28041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (36))){
var state_27931__$1 = state_27931;
var statearr_27962_28042 = state_27931__$1;
(statearr_27962_28042[(2)] = false);

(statearr_27962_28042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (41))){
var inst_27906 = (state_27931[(20)]);
var inst_27910 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27911 = cljs.core.map.call(null,inst_27910,inst_27906);
var inst_27912 = cljs.core.pr_str.call(null,inst_27911);
var inst_27913 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27912)].join('');
var inst_27914 = figwheel.client.utils.log.call(null,inst_27913);
var state_27931__$1 = state_27931;
var statearr_27963_28043 = state_27931__$1;
(statearr_27963_28043[(2)] = inst_27914);

(statearr_27963_28043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (43))){
var inst_27907 = (state_27931[(21)]);
var inst_27917 = (state_27931[(2)]);
var inst_27918 = cljs.core.not_empty.call(null,inst_27907);
var state_27931__$1 = (function (){var statearr_27964 = state_27931;
(statearr_27964[(27)] = inst_27917);

return statearr_27964;
})();
if(cljs.core.truth_(inst_27918)){
var statearr_27965_28044 = state_27931__$1;
(statearr_27965_28044[(1)] = (44));

} else {
var statearr_27966_28045 = state_27931__$1;
(statearr_27966_28045[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (29))){
var inst_27849 = (state_27931[(23)]);
var inst_27851 = (state_27931[(26)]);
var inst_27885 = (state_27931[(16)]);
var inst_27848 = (state_27931[(24)]);
var inst_27853 = (state_27931[(25)]);
var inst_27845 = (state_27931[(19)]);
var inst_27881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27884 = (function (){var all_files = inst_27845;
var res_SINGLEQUOTE_ = inst_27848;
var res = inst_27849;
var files_not_loaded = inst_27851;
var dependencies_that_loaded = inst_27853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27885,inst_27848,inst_27853,inst_27845,inst_27881,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27883){
var map__27967 = p__27883;
var map__27967__$1 = ((((!((map__27967 == null)))?((((map__27967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967):map__27967);
var namespace = cljs.core.get.call(null,map__27967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27885,inst_27848,inst_27853,inst_27845,inst_27881,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27885__$1 = cljs.core.group_by.call(null,inst_27884,inst_27851);
var inst_27887 = (inst_27885__$1 == null);
var inst_27888 = cljs.core.not.call(null,inst_27887);
var state_27931__$1 = (function (){var statearr_27969 = state_27931;
(statearr_27969[(28)] = inst_27881);

(statearr_27969[(16)] = inst_27885__$1);

return statearr_27969;
})();
if(inst_27888){
var statearr_27970_28046 = state_27931__$1;
(statearr_27970_28046[(1)] = (32));

} else {
var statearr_27971_28047 = state_27931__$1;
(statearr_27971_28047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (44))){
var inst_27907 = (state_27931[(21)]);
var inst_27920 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27907);
var inst_27921 = cljs.core.pr_str.call(null,inst_27920);
var inst_27922 = [cljs.core.str("not required: "),cljs.core.str(inst_27921)].join('');
var inst_27923 = figwheel.client.utils.log.call(null,inst_27922);
var state_27931__$1 = state_27931;
var statearr_27972_28048 = state_27931__$1;
(statearr_27972_28048[(2)] = inst_27923);

(statearr_27972_28048[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (6))){
var inst_27826 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
var statearr_27973_28049 = state_27931__$1;
(statearr_27973_28049[(2)] = inst_27826);

(statearr_27973_28049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (28))){
var inst_27851 = (state_27931[(26)]);
var inst_27878 = (state_27931[(2)]);
var inst_27879 = cljs.core.not_empty.call(null,inst_27851);
var state_27931__$1 = (function (){var statearr_27974 = state_27931;
(statearr_27974[(29)] = inst_27878);

return statearr_27974;
})();
if(cljs.core.truth_(inst_27879)){
var statearr_27975_28050 = state_27931__$1;
(statearr_27975_28050[(1)] = (29));

} else {
var statearr_27976_28051 = state_27931__$1;
(statearr_27976_28051[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (25))){
var inst_27849 = (state_27931[(23)]);
var inst_27865 = (state_27931[(2)]);
var inst_27866 = cljs.core.not_empty.call(null,inst_27849);
var state_27931__$1 = (function (){var statearr_27977 = state_27931;
(statearr_27977[(30)] = inst_27865);

return statearr_27977;
})();
if(cljs.core.truth_(inst_27866)){
var statearr_27978_28052 = state_27931__$1;
(statearr_27978_28052[(1)] = (26));

} else {
var statearr_27979_28053 = state_27931__$1;
(statearr_27979_28053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (34))){
var inst_27900 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
if(cljs.core.truth_(inst_27900)){
var statearr_27980_28054 = state_27931__$1;
(statearr_27980_28054[(1)] = (38));

} else {
var statearr_27981_28055 = state_27931__$1;
(statearr_27981_28055[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (17))){
var state_27931__$1 = state_27931;
var statearr_27982_28056 = state_27931__$1;
(statearr_27982_28056[(2)] = recompile_dependents);

(statearr_27982_28056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (3))){
var state_27931__$1 = state_27931;
var statearr_27983_28057 = state_27931__$1;
(statearr_27983_28057[(2)] = null);

(statearr_27983_28057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (12))){
var inst_27822 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
var statearr_27984_28058 = state_27931__$1;
(statearr_27984_28058[(2)] = inst_27822);

(statearr_27984_28058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (2))){
var inst_27784 = (state_27931[(13)]);
var inst_27791 = cljs.core.seq.call(null,inst_27784);
var inst_27792 = inst_27791;
var inst_27793 = null;
var inst_27794 = (0);
var inst_27795 = (0);
var state_27931__$1 = (function (){var statearr_27985 = state_27931;
(statearr_27985[(7)] = inst_27793);

(statearr_27985[(8)] = inst_27792);

(statearr_27985[(9)] = inst_27794);

(statearr_27985[(10)] = inst_27795);

return statearr_27985;
})();
var statearr_27986_28059 = state_27931__$1;
(statearr_27986_28059[(2)] = null);

(statearr_27986_28059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (23))){
var inst_27849 = (state_27931[(23)]);
var inst_27851 = (state_27931[(26)]);
var inst_27848 = (state_27931[(24)]);
var inst_27853 = (state_27931[(25)]);
var inst_27845 = (state_27931[(19)]);
var inst_27856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27858 = (function (){var all_files = inst_27845;
var res_SINGLEQUOTE_ = inst_27848;
var res = inst_27849;
var files_not_loaded = inst_27851;
var dependencies_that_loaded = inst_27853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27848,inst_27853,inst_27845,inst_27856,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27857){
var map__27987 = p__27857;
var map__27987__$1 = ((((!((map__27987 == null)))?((((map__27987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27987):map__27987);
var request_url = cljs.core.get.call(null,map__27987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27848,inst_27853,inst_27845,inst_27856,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27859 = cljs.core.reverse.call(null,inst_27853);
var inst_27860 = cljs.core.map.call(null,inst_27858,inst_27859);
var inst_27861 = cljs.core.pr_str.call(null,inst_27860);
var inst_27862 = figwheel.client.utils.log.call(null,inst_27861);
var state_27931__$1 = (function (){var statearr_27989 = state_27931;
(statearr_27989[(31)] = inst_27856);

return statearr_27989;
})();
var statearr_27990_28060 = state_27931__$1;
(statearr_27990_28060[(2)] = inst_27862);

(statearr_27990_28060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (35))){
var state_27931__$1 = state_27931;
var statearr_27991_28061 = state_27931__$1;
(statearr_27991_28061[(2)] = true);

(statearr_27991_28061[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (19))){
var inst_27835 = (state_27931[(12)]);
var inst_27841 = figwheel.client.file_reloading.expand_files.call(null,inst_27835);
var state_27931__$1 = state_27931;
var statearr_27992_28062 = state_27931__$1;
(statearr_27992_28062[(2)] = inst_27841);

(statearr_27992_28062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (11))){
var state_27931__$1 = state_27931;
var statearr_27993_28063 = state_27931__$1;
(statearr_27993_28063[(2)] = null);

(statearr_27993_28063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (9))){
var inst_27824 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
var statearr_27994_28064 = state_27931__$1;
(statearr_27994_28064[(2)] = inst_27824);

(statearr_27994_28064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (5))){
var inst_27794 = (state_27931[(9)]);
var inst_27795 = (state_27931[(10)]);
var inst_27797 = (inst_27795 < inst_27794);
var inst_27798 = inst_27797;
var state_27931__$1 = state_27931;
if(cljs.core.truth_(inst_27798)){
var statearr_27995_28065 = state_27931__$1;
(statearr_27995_28065[(1)] = (7));

} else {
var statearr_27996_28066 = state_27931__$1;
(statearr_27996_28066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (14))){
var inst_27805 = (state_27931[(22)]);
var inst_27814 = cljs.core.first.call(null,inst_27805);
var inst_27815 = figwheel.client.file_reloading.eval_body.call(null,inst_27814,opts);
var inst_27816 = cljs.core.next.call(null,inst_27805);
var inst_27792 = inst_27816;
var inst_27793 = null;
var inst_27794 = (0);
var inst_27795 = (0);
var state_27931__$1 = (function (){var statearr_27997 = state_27931;
(statearr_27997[(7)] = inst_27793);

(statearr_27997[(8)] = inst_27792);

(statearr_27997[(9)] = inst_27794);

(statearr_27997[(32)] = inst_27815);

(statearr_27997[(10)] = inst_27795);

return statearr_27997;
})();
var statearr_27998_28067 = state_27931__$1;
(statearr_27998_28067[(2)] = null);

(statearr_27998_28067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (45))){
var state_27931__$1 = state_27931;
var statearr_27999_28068 = state_27931__$1;
(statearr_27999_28068[(2)] = null);

(statearr_27999_28068[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (26))){
var inst_27849 = (state_27931[(23)]);
var inst_27851 = (state_27931[(26)]);
var inst_27848 = (state_27931[(24)]);
var inst_27853 = (state_27931[(25)]);
var inst_27845 = (state_27931[(19)]);
var inst_27868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27870 = (function (){var all_files = inst_27845;
var res_SINGLEQUOTE_ = inst_27848;
var res = inst_27849;
var files_not_loaded = inst_27851;
var dependencies_that_loaded = inst_27853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27848,inst_27853,inst_27845,inst_27868,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27869){
var map__28000 = p__27869;
var map__28000__$1 = ((((!((map__28000 == null)))?((((map__28000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000):map__28000);
var namespace = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27848,inst_27853,inst_27845,inst_27868,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27871 = cljs.core.map.call(null,inst_27870,inst_27849);
var inst_27872 = cljs.core.pr_str.call(null,inst_27871);
var inst_27873 = figwheel.client.utils.log.call(null,inst_27872);
var inst_27874 = (function (){var all_files = inst_27845;
var res_SINGLEQUOTE_ = inst_27848;
var res = inst_27849;
var files_not_loaded = inst_27851;
var dependencies_that_loaded = inst_27853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27848,inst_27853,inst_27845,inst_27868,inst_27870,inst_27871,inst_27872,inst_27873,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27851,inst_27848,inst_27853,inst_27845,inst_27868,inst_27870,inst_27871,inst_27872,inst_27873,state_val_27932,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27875 = setTimeout(inst_27874,(10));
var state_27931__$1 = (function (){var statearr_28002 = state_27931;
(statearr_28002[(33)] = inst_27868);

(statearr_28002[(34)] = inst_27873);

return statearr_28002;
})();
var statearr_28003_28069 = state_27931__$1;
(statearr_28003_28069[(2)] = inst_27875);

(statearr_28003_28069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (16))){
var state_27931__$1 = state_27931;
var statearr_28004_28070 = state_27931__$1;
(statearr_28004_28070[(2)] = reload_dependents);

(statearr_28004_28070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (38))){
var inst_27885 = (state_27931[(16)]);
var inst_27902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27885);
var state_27931__$1 = state_27931;
var statearr_28005_28071 = state_27931__$1;
(statearr_28005_28071[(2)] = inst_27902);

(statearr_28005_28071[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (30))){
var state_27931__$1 = state_27931;
var statearr_28006_28072 = state_27931__$1;
(statearr_28006_28072[(2)] = null);

(statearr_28006_28072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (10))){
var inst_27805 = (state_27931[(22)]);
var inst_27807 = cljs.core.chunked_seq_QMARK_.call(null,inst_27805);
var state_27931__$1 = state_27931;
if(inst_27807){
var statearr_28007_28073 = state_27931__$1;
(statearr_28007_28073[(1)] = (13));

} else {
var statearr_28008_28074 = state_27931__$1;
(statearr_28008_28074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (18))){
var inst_27839 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
if(cljs.core.truth_(inst_27839)){
var statearr_28009_28075 = state_27931__$1;
(statearr_28009_28075[(1)] = (19));

} else {
var statearr_28010_28076 = state_27931__$1;
(statearr_28010_28076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (42))){
var state_27931__$1 = state_27931;
var statearr_28011_28077 = state_27931__$1;
(statearr_28011_28077[(2)] = null);

(statearr_28011_28077[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (37))){
var inst_27897 = (state_27931[(2)]);
var state_27931__$1 = state_27931;
var statearr_28012_28078 = state_27931__$1;
(statearr_28012_28078[(2)] = inst_27897);

(statearr_28012_28078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27932 === (8))){
var inst_27805 = (state_27931[(22)]);
var inst_27792 = (state_27931[(8)]);
var inst_27805__$1 = cljs.core.seq.call(null,inst_27792);
var state_27931__$1 = (function (){var statearr_28013 = state_27931;
(statearr_28013[(22)] = inst_27805__$1);

return statearr_28013;
})();
if(inst_27805__$1){
var statearr_28014_28079 = state_27931__$1;
(statearr_28014_28079[(1)] = (10));

} else {
var statearr_28015_28080 = state_27931__$1;
(statearr_28015_28080[(1)] = (11));

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
}
});})(c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24008__auto__,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto____0 = (function (){
var statearr_28019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28019[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto__);

(statearr_28019[(1)] = (1));

return statearr_28019;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto____1 = (function (state_27931){
while(true){
var ret_value__24010__auto__ = (function (){try{while(true){
var result__24011__auto__ = switch__24008__auto__.call(null,state_27931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24011__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object)){
var ex__24012__auto__ = e28020;
var statearr_28021_28081 = state_27931;
(statearr_28021_28081[(5)] = ex__24012__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28082 = state_27931;
state_27931 = G__28082;
continue;
} else {
return ret_value__24010__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto__ = function(state_27931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto____1.call(this,state_27931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24009__auto__;
})()
;})(switch__24008__auto__,c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24122__auto__ = (function (){var statearr_28022 = f__24121__auto__.call(null);
(statearr_28022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24120__auto__);

return statearr_28022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,map__27777,map__27777__$1,opts,before_jsload,on_jsload,reload_dependents,map__27778,map__27778__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24120__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28085,link){
var map__28088 = p__28085;
var map__28088__$1 = ((((!((map__28088 == null)))?((((map__28088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);
var file = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28088,map__28088__$1,file){
return (function (p1__28083_SHARP_,p2__28084_SHARP_){
if(cljs.core._EQ_.call(null,p1__28083_SHARP_,p2__28084_SHARP_)){
return p1__28083_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28088,map__28088__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28094){
var map__28095 = p__28094;
var map__28095__$1 = ((((!((map__28095 == null)))?((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var match_length = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28090_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28090_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28097 = [];
var len__19693__auto___28100 = arguments.length;
var i__19694__auto___28101 = (0);
while(true){
if((i__19694__auto___28101 < len__19693__auto___28100)){
args28097.push((arguments[i__19694__auto___28101]));

var G__28102 = (i__19694__auto___28101 + (1));
i__19694__auto___28101 = G__28102;
continue;
} else {
}
break;
}

var G__28099 = args28097.length;
switch (G__28099) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28097.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28104_SHARP_,p2__28105_SHARP_){
return cljs.core.assoc.call(null,p1__28104_SHARP_,cljs.core.get.call(null,p2__28105_SHARP_,key),p2__28105_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28106){
var map__28109 = p__28106;
var map__28109__$1 = ((((!((map__28109 == null)))?((((map__28109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28109):map__28109);
var f_data = map__28109__$1;
var file = cljs.core.get.call(null,map__28109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28111,files_msg){
var map__28118 = p__28111;
var map__28118__$1 = ((((!((map__28118 == null)))?((((map__28118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28118):map__28118);
var opts = map__28118__$1;
var on_cssload = cljs.core.get.call(null,map__28118__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28120_28124 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28121_28125 = null;
var count__28122_28126 = (0);
var i__28123_28127 = (0);
while(true){
if((i__28123_28127 < count__28122_28126)){
var f_28128 = cljs.core._nth.call(null,chunk__28121_28125,i__28123_28127);
figwheel.client.file_reloading.reload_css_file.call(null,f_28128);

var G__28129 = seq__28120_28124;
var G__28130 = chunk__28121_28125;
var G__28131 = count__28122_28126;
var G__28132 = (i__28123_28127 + (1));
seq__28120_28124 = G__28129;
chunk__28121_28125 = G__28130;
count__28122_28126 = G__28131;
i__28123_28127 = G__28132;
continue;
} else {
var temp__4657__auto___28133 = cljs.core.seq.call(null,seq__28120_28124);
if(temp__4657__auto___28133){
var seq__28120_28134__$1 = temp__4657__auto___28133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28120_28134__$1)){
var c__19429__auto___28135 = cljs.core.chunk_first.call(null,seq__28120_28134__$1);
var G__28136 = cljs.core.chunk_rest.call(null,seq__28120_28134__$1);
var G__28137 = c__19429__auto___28135;
var G__28138 = cljs.core.count.call(null,c__19429__auto___28135);
var G__28139 = (0);
seq__28120_28124 = G__28136;
chunk__28121_28125 = G__28137;
count__28122_28126 = G__28138;
i__28123_28127 = G__28139;
continue;
} else {
var f_28140 = cljs.core.first.call(null,seq__28120_28134__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28140);

var G__28141 = cljs.core.next.call(null,seq__28120_28134__$1);
var G__28142 = null;
var G__28143 = (0);
var G__28144 = (0);
seq__28120_28124 = G__28141;
chunk__28121_28125 = G__28142;
count__28122_28126 = G__28143;
i__28123_28127 = G__28144;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28118,map__28118__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28118,map__28118__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map