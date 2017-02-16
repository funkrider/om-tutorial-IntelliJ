// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29444){
var map__29469 = p__29444;
var map__29469__$1 = ((((!((map__29469 == null)))?((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var m = map__29469__$1;
var n = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29471_29493 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29472_29494 = null;
var count__29473_29495 = (0);
var i__29474_29496 = (0);
while(true){
if((i__29474_29496 < count__29473_29495)){
var f_29497 = cljs.core._nth.call(null,chunk__29472_29494,i__29474_29496);
cljs.core.println.call(null,"  ",f_29497);

var G__29498 = seq__29471_29493;
var G__29499 = chunk__29472_29494;
var G__29500 = count__29473_29495;
var G__29501 = (i__29474_29496 + (1));
seq__29471_29493 = G__29498;
chunk__29472_29494 = G__29499;
count__29473_29495 = G__29500;
i__29474_29496 = G__29501;
continue;
} else {
var temp__4657__auto___29502 = cljs.core.seq.call(null,seq__29471_29493);
if(temp__4657__auto___29502){
var seq__29471_29503__$1 = temp__4657__auto___29502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29471_29503__$1)){
var c__19429__auto___29504 = cljs.core.chunk_first.call(null,seq__29471_29503__$1);
var G__29505 = cljs.core.chunk_rest.call(null,seq__29471_29503__$1);
var G__29506 = c__19429__auto___29504;
var G__29507 = cljs.core.count.call(null,c__19429__auto___29504);
var G__29508 = (0);
seq__29471_29493 = G__29505;
chunk__29472_29494 = G__29506;
count__29473_29495 = G__29507;
i__29474_29496 = G__29508;
continue;
} else {
var f_29509 = cljs.core.first.call(null,seq__29471_29503__$1);
cljs.core.println.call(null,"  ",f_29509);

var G__29510 = cljs.core.next.call(null,seq__29471_29503__$1);
var G__29511 = null;
var G__29512 = (0);
var G__29513 = (0);
seq__29471_29493 = G__29510;
chunk__29472_29494 = G__29511;
count__29473_29495 = G__29512;
i__29474_29496 = G__29513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29514 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18618__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18618__auto__)){
return or__18618__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29514);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29514)))?cljs.core.second.call(null,arglists_29514):arglists_29514));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29475_29515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29476_29516 = null;
var count__29477_29517 = (0);
var i__29478_29518 = (0);
while(true){
if((i__29478_29518 < count__29477_29517)){
var vec__29479_29519 = cljs.core._nth.call(null,chunk__29476_29516,i__29478_29518);
var name_29520 = cljs.core.nth.call(null,vec__29479_29519,(0),null);
var map__29482_29521 = cljs.core.nth.call(null,vec__29479_29519,(1),null);
var map__29482_29522__$1 = ((((!((map__29482_29521 == null)))?((((map__29482_29521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29482_29521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29482_29521):map__29482_29521);
var doc_29523 = cljs.core.get.call(null,map__29482_29522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29524 = cljs.core.get.call(null,map__29482_29522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29520);

cljs.core.println.call(null," ",arglists_29524);

if(cljs.core.truth_(doc_29523)){
cljs.core.println.call(null," ",doc_29523);
} else {
}

var G__29525 = seq__29475_29515;
var G__29526 = chunk__29476_29516;
var G__29527 = count__29477_29517;
var G__29528 = (i__29478_29518 + (1));
seq__29475_29515 = G__29525;
chunk__29476_29516 = G__29526;
count__29477_29517 = G__29527;
i__29478_29518 = G__29528;
continue;
} else {
var temp__4657__auto___29529 = cljs.core.seq.call(null,seq__29475_29515);
if(temp__4657__auto___29529){
var seq__29475_29530__$1 = temp__4657__auto___29529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29475_29530__$1)){
var c__19429__auto___29531 = cljs.core.chunk_first.call(null,seq__29475_29530__$1);
var G__29532 = cljs.core.chunk_rest.call(null,seq__29475_29530__$1);
var G__29533 = c__19429__auto___29531;
var G__29534 = cljs.core.count.call(null,c__19429__auto___29531);
var G__29535 = (0);
seq__29475_29515 = G__29532;
chunk__29476_29516 = G__29533;
count__29477_29517 = G__29534;
i__29478_29518 = G__29535;
continue;
} else {
var vec__29484_29536 = cljs.core.first.call(null,seq__29475_29530__$1);
var name_29537 = cljs.core.nth.call(null,vec__29484_29536,(0),null);
var map__29487_29538 = cljs.core.nth.call(null,vec__29484_29536,(1),null);
var map__29487_29539__$1 = ((((!((map__29487_29538 == null)))?((((map__29487_29538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29487_29538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487_29538):map__29487_29538);
var doc_29540 = cljs.core.get.call(null,map__29487_29539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29541 = cljs.core.get.call(null,map__29487_29539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29537);

cljs.core.println.call(null," ",arglists_29541);

if(cljs.core.truth_(doc_29540)){
cljs.core.println.call(null," ",doc_29540);
} else {
}

var G__29542 = cljs.core.next.call(null,seq__29475_29530__$1);
var G__29543 = null;
var G__29544 = (0);
var G__29545 = (0);
seq__29475_29515 = G__29542;
chunk__29476_29516 = G__29543;
count__29477_29517 = G__29544;
i__29478_29518 = G__29545;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__29489 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29490 = null;
var count__29491 = (0);
var i__29492 = (0);
while(true){
if((i__29492 < count__29491)){
var role = cljs.core._nth.call(null,chunk__29490,i__29492);
var temp__4657__auto___29546__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29546__$1)){
var spec_29547 = temp__4657__auto___29546__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29547));
} else {
}

var G__29548 = seq__29489;
var G__29549 = chunk__29490;
var G__29550 = count__29491;
var G__29551 = (i__29492 + (1));
seq__29489 = G__29548;
chunk__29490 = G__29549;
count__29491 = G__29550;
i__29492 = G__29551;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29489);
if(temp__4657__auto____$1){
var seq__29489__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29489__$1)){
var c__19429__auto__ = cljs.core.chunk_first.call(null,seq__29489__$1);
var G__29552 = cljs.core.chunk_rest.call(null,seq__29489__$1);
var G__29553 = c__19429__auto__;
var G__29554 = cljs.core.count.call(null,c__19429__auto__);
var G__29555 = (0);
seq__29489 = G__29552;
chunk__29490 = G__29553;
count__29491 = G__29554;
i__29492 = G__29555;
continue;
} else {
var role = cljs.core.first.call(null,seq__29489__$1);
var temp__4657__auto___29556__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29556__$2)){
var spec_29557 = temp__4657__auto___29556__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29557));
} else {
}

var G__29558 = cljs.core.next.call(null,seq__29489__$1);
var G__29559 = null;
var G__29560 = (0);
var G__29561 = (0);
seq__29489 = G__29558;
chunk__29490 = G__29559;
count__29491 = G__29560;
i__29492 = G__29561;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map