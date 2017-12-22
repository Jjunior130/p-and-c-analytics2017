// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39368){
var map__39369 = p__39368;
var map__39369__$1 = ((((!((map__39369 == null)))?((((map__39369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39369):map__39369);
var m = map__39369__$1;
var n = cljs.core.get.call(null,map__39369__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39371_39393 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39372_39394 = null;
var count__39373_39395 = (0);
var i__39374_39396 = (0);
while(true){
if((i__39374_39396 < count__39373_39395)){
var f_39397 = cljs.core._nth.call(null,chunk__39372_39394,i__39374_39396);
cljs.core.println.call(null,"  ",f_39397);

var G__39398 = seq__39371_39393;
var G__39399 = chunk__39372_39394;
var G__39400 = count__39373_39395;
var G__39401 = (i__39374_39396 + (1));
seq__39371_39393 = G__39398;
chunk__39372_39394 = G__39399;
count__39373_39395 = G__39400;
i__39374_39396 = G__39401;
continue;
} else {
var temp__4657__auto___39402 = cljs.core.seq.call(null,seq__39371_39393);
if(temp__4657__auto___39402){
var seq__39371_39403__$1 = temp__4657__auto___39402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39371_39403__$1)){
var c__28034__auto___39404 = cljs.core.chunk_first.call(null,seq__39371_39403__$1);
var G__39405 = cljs.core.chunk_rest.call(null,seq__39371_39403__$1);
var G__39406 = c__28034__auto___39404;
var G__39407 = cljs.core.count.call(null,c__28034__auto___39404);
var G__39408 = (0);
seq__39371_39393 = G__39405;
chunk__39372_39394 = G__39406;
count__39373_39395 = G__39407;
i__39374_39396 = G__39408;
continue;
} else {
var f_39409 = cljs.core.first.call(null,seq__39371_39403__$1);
cljs.core.println.call(null,"  ",f_39409);

var G__39410 = cljs.core.next.call(null,seq__39371_39403__$1);
var G__39411 = null;
var G__39412 = (0);
var G__39413 = (0);
seq__39371_39393 = G__39410;
chunk__39372_39394 = G__39411;
count__39373_39395 = G__39412;
i__39374_39396 = G__39413;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39414 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39414);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39414)))?cljs.core.second.call(null,arglists_39414):arglists_39414));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__39375_39415 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39376_39416 = null;
var count__39377_39417 = (0);
var i__39378_39418 = (0);
while(true){
if((i__39378_39418 < count__39377_39417)){
var vec__39379_39419 = cljs.core._nth.call(null,chunk__39376_39416,i__39378_39418);
var name_39420 = cljs.core.nth.call(null,vec__39379_39419,(0),null);
var map__39382_39421 = cljs.core.nth.call(null,vec__39379_39419,(1),null);
var map__39382_39422__$1 = ((((!((map__39382_39421 == null)))?((((map__39382_39421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39382_39421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39382_39421):map__39382_39421);
var doc_39423 = cljs.core.get.call(null,map__39382_39422__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39424 = cljs.core.get.call(null,map__39382_39422__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39420);

cljs.core.println.call(null," ",arglists_39424);

if(cljs.core.truth_(doc_39423)){
cljs.core.println.call(null," ",doc_39423);
} else {
}

var G__39425 = seq__39375_39415;
var G__39426 = chunk__39376_39416;
var G__39427 = count__39377_39417;
var G__39428 = (i__39378_39418 + (1));
seq__39375_39415 = G__39425;
chunk__39376_39416 = G__39426;
count__39377_39417 = G__39427;
i__39378_39418 = G__39428;
continue;
} else {
var temp__4657__auto___39429 = cljs.core.seq.call(null,seq__39375_39415);
if(temp__4657__auto___39429){
var seq__39375_39430__$1 = temp__4657__auto___39429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39375_39430__$1)){
var c__28034__auto___39431 = cljs.core.chunk_first.call(null,seq__39375_39430__$1);
var G__39432 = cljs.core.chunk_rest.call(null,seq__39375_39430__$1);
var G__39433 = c__28034__auto___39431;
var G__39434 = cljs.core.count.call(null,c__28034__auto___39431);
var G__39435 = (0);
seq__39375_39415 = G__39432;
chunk__39376_39416 = G__39433;
count__39377_39417 = G__39434;
i__39378_39418 = G__39435;
continue;
} else {
var vec__39384_39436 = cljs.core.first.call(null,seq__39375_39430__$1);
var name_39437 = cljs.core.nth.call(null,vec__39384_39436,(0),null);
var map__39387_39438 = cljs.core.nth.call(null,vec__39384_39436,(1),null);
var map__39387_39439__$1 = ((((!((map__39387_39438 == null)))?((((map__39387_39438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39387_39438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39387_39438):map__39387_39438);
var doc_39440 = cljs.core.get.call(null,map__39387_39439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39441 = cljs.core.get.call(null,map__39387_39439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39437);

cljs.core.println.call(null," ",arglists_39441);

if(cljs.core.truth_(doc_39440)){
cljs.core.println.call(null," ",doc_39440);
} else {
}

var G__39442 = cljs.core.next.call(null,seq__39375_39430__$1);
var G__39443 = null;
var G__39444 = (0);
var G__39445 = (0);
seq__39375_39415 = G__39442;
chunk__39376_39416 = G__39443;
count__39377_39417 = G__39444;
i__39378_39418 = G__39445;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__39389 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39390 = null;
var count__39391 = (0);
var i__39392 = (0);
while(true){
if((i__39392 < count__39391)){
var role = cljs.core._nth.call(null,chunk__39390,i__39392);
var temp__4657__auto___39446__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39446__$1)){
var spec_39447 = temp__4657__auto___39446__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39447));
} else {
}

var G__39448 = seq__39389;
var G__39449 = chunk__39390;
var G__39450 = count__39391;
var G__39451 = (i__39392 + (1));
seq__39389 = G__39448;
chunk__39390 = G__39449;
count__39391 = G__39450;
i__39392 = G__39451;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39389);
if(temp__4657__auto____$1){
var seq__39389__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39389__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__39389__$1);
var G__39452 = cljs.core.chunk_rest.call(null,seq__39389__$1);
var G__39453 = c__28034__auto__;
var G__39454 = cljs.core.count.call(null,c__28034__auto__);
var G__39455 = (0);
seq__39389 = G__39452;
chunk__39390 = G__39453;
count__39391 = G__39454;
i__39392 = G__39455;
continue;
} else {
var role = cljs.core.first.call(null,seq__39389__$1);
var temp__4657__auto___39456__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39456__$2)){
var spec_39457 = temp__4657__auto___39456__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39457));
} else {
}

var G__39458 = cljs.core.next.call(null,seq__39389__$1);
var G__39459 = null;
var G__39460 = (0);
var G__39461 = (0);
seq__39389 = G__39458;
chunk__39390 = G__39459;
count__39391 = G__39460;
i__39392 = G__39461;
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

//# sourceMappingURL=repl.js.map?rel=1513978681641
