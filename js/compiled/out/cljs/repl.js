// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55054){
var map__55055 = p__55054;
var map__55055__$1 = ((((!((map__55055 == null)))?((((map__55055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55055):map__55055);
var m = map__55055__$1;
var n = cljs.core.get.call(null,map__55055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__55055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__55057_55079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55058_55080 = null;
var count__55059_55081 = (0);
var i__55060_55082 = (0);
while(true){
if((i__55060_55082 < count__55059_55081)){
var f_55083 = cljs.core._nth.call(null,chunk__55058_55080,i__55060_55082);
cljs.core.println.call(null,"  ",f_55083);

var G__55084 = seq__55057_55079;
var G__55085 = chunk__55058_55080;
var G__55086 = count__55059_55081;
var G__55087 = (i__55060_55082 + (1));
seq__55057_55079 = G__55084;
chunk__55058_55080 = G__55085;
count__55059_55081 = G__55086;
i__55060_55082 = G__55087;
continue;
} else {
var temp__4657__auto___55088 = cljs.core.seq.call(null,seq__55057_55079);
if(temp__4657__auto___55088){
var seq__55057_55089__$1 = temp__4657__auto___55088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55057_55089__$1)){
var c__28034__auto___55090 = cljs.core.chunk_first.call(null,seq__55057_55089__$1);
var G__55091 = cljs.core.chunk_rest.call(null,seq__55057_55089__$1);
var G__55092 = c__28034__auto___55090;
var G__55093 = cljs.core.count.call(null,c__28034__auto___55090);
var G__55094 = (0);
seq__55057_55079 = G__55091;
chunk__55058_55080 = G__55092;
count__55059_55081 = G__55093;
i__55060_55082 = G__55094;
continue;
} else {
var f_55095 = cljs.core.first.call(null,seq__55057_55089__$1);
cljs.core.println.call(null,"  ",f_55095);

var G__55096 = cljs.core.next.call(null,seq__55057_55089__$1);
var G__55097 = null;
var G__55098 = (0);
var G__55099 = (0);
seq__55057_55079 = G__55096;
chunk__55058_55080 = G__55097;
count__55059_55081 = G__55098;
i__55060_55082 = G__55099;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55100 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55100);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55100)))?cljs.core.second.call(null,arglists_55100):arglists_55100));
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
var seq__55061_55101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55062_55102 = null;
var count__55063_55103 = (0);
var i__55064_55104 = (0);
while(true){
if((i__55064_55104 < count__55063_55103)){
var vec__55065_55105 = cljs.core._nth.call(null,chunk__55062_55102,i__55064_55104);
var name_55106 = cljs.core.nth.call(null,vec__55065_55105,(0),null);
var map__55068_55107 = cljs.core.nth.call(null,vec__55065_55105,(1),null);
var map__55068_55108__$1 = ((((!((map__55068_55107 == null)))?((((map__55068_55107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55068_55107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55068_55107):map__55068_55107);
var doc_55109 = cljs.core.get.call(null,map__55068_55108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55110 = cljs.core.get.call(null,map__55068_55108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55106);

cljs.core.println.call(null," ",arglists_55110);

if(cljs.core.truth_(doc_55109)){
cljs.core.println.call(null," ",doc_55109);
} else {
}

var G__55111 = seq__55061_55101;
var G__55112 = chunk__55062_55102;
var G__55113 = count__55063_55103;
var G__55114 = (i__55064_55104 + (1));
seq__55061_55101 = G__55111;
chunk__55062_55102 = G__55112;
count__55063_55103 = G__55113;
i__55064_55104 = G__55114;
continue;
} else {
var temp__4657__auto___55115 = cljs.core.seq.call(null,seq__55061_55101);
if(temp__4657__auto___55115){
var seq__55061_55116__$1 = temp__4657__auto___55115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55061_55116__$1)){
var c__28034__auto___55117 = cljs.core.chunk_first.call(null,seq__55061_55116__$1);
var G__55118 = cljs.core.chunk_rest.call(null,seq__55061_55116__$1);
var G__55119 = c__28034__auto___55117;
var G__55120 = cljs.core.count.call(null,c__28034__auto___55117);
var G__55121 = (0);
seq__55061_55101 = G__55118;
chunk__55062_55102 = G__55119;
count__55063_55103 = G__55120;
i__55064_55104 = G__55121;
continue;
} else {
var vec__55070_55122 = cljs.core.first.call(null,seq__55061_55116__$1);
var name_55123 = cljs.core.nth.call(null,vec__55070_55122,(0),null);
var map__55073_55124 = cljs.core.nth.call(null,vec__55070_55122,(1),null);
var map__55073_55125__$1 = ((((!((map__55073_55124 == null)))?((((map__55073_55124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55073_55124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55073_55124):map__55073_55124);
var doc_55126 = cljs.core.get.call(null,map__55073_55125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55127 = cljs.core.get.call(null,map__55073_55125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55123);

cljs.core.println.call(null," ",arglists_55127);

if(cljs.core.truth_(doc_55126)){
cljs.core.println.call(null," ",doc_55126);
} else {
}

var G__55128 = cljs.core.next.call(null,seq__55061_55116__$1);
var G__55129 = null;
var G__55130 = (0);
var G__55131 = (0);
seq__55061_55101 = G__55128;
chunk__55062_55102 = G__55129;
count__55063_55103 = G__55130;
i__55064_55104 = G__55131;
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

var seq__55075 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55076 = null;
var count__55077 = (0);
var i__55078 = (0);
while(true){
if((i__55078 < count__55077)){
var role = cljs.core._nth.call(null,chunk__55076,i__55078);
var temp__4657__auto___55132__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55132__$1)){
var spec_55133 = temp__4657__auto___55132__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_55133));
} else {
}

var G__55134 = seq__55075;
var G__55135 = chunk__55076;
var G__55136 = count__55077;
var G__55137 = (i__55078 + (1));
seq__55075 = G__55134;
chunk__55076 = G__55135;
count__55077 = G__55136;
i__55078 = G__55137;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__55075);
if(temp__4657__auto____$1){
var seq__55075__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55075__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__55075__$1);
var G__55138 = cljs.core.chunk_rest.call(null,seq__55075__$1);
var G__55139 = c__28034__auto__;
var G__55140 = cljs.core.count.call(null,c__28034__auto__);
var G__55141 = (0);
seq__55075 = G__55138;
chunk__55076 = G__55139;
count__55077 = G__55140;
i__55078 = G__55141;
continue;
} else {
var role = cljs.core.first.call(null,seq__55075__$1);
var temp__4657__auto___55142__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55142__$2)){
var spec_55143 = temp__4657__auto___55142__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_55143));
} else {
}

var G__55144 = cljs.core.next.call(null,seq__55075__$1);
var G__55145 = null;
var G__55146 = (0);
var G__55147 = (0);
seq__55075 = G__55144;
chunk__55076 = G__55145;
count__55077 = G__55146;
i__55078 = G__55147;
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

//# sourceMappingURL=repl.js.map?rel=1513855132670
