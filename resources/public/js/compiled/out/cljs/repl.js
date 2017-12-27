// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37724){
var map__37725 = p__37724;
var map__37725__$1 = ((((!((map__37725 == null)))?((((map__37725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37725):map__37725);
var m = map__37725__$1;
var n = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37727_37749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37728_37750 = null;
var count__37729_37751 = (0);
var i__37730_37752 = (0);
while(true){
if((i__37730_37752 < count__37729_37751)){
var f_37753 = cljs.core._nth.call(null,chunk__37728_37750,i__37730_37752);
cljs.core.println.call(null,"  ",f_37753);

var G__37754 = seq__37727_37749;
var G__37755 = chunk__37728_37750;
var G__37756 = count__37729_37751;
var G__37757 = (i__37730_37752 + (1));
seq__37727_37749 = G__37754;
chunk__37728_37750 = G__37755;
count__37729_37751 = G__37756;
i__37730_37752 = G__37757;
continue;
} else {
var temp__4657__auto___37758 = cljs.core.seq.call(null,seq__37727_37749);
if(temp__4657__auto___37758){
var seq__37727_37759__$1 = temp__4657__auto___37758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37727_37759__$1)){
var c__28034__auto___37760 = cljs.core.chunk_first.call(null,seq__37727_37759__$1);
var G__37761 = cljs.core.chunk_rest.call(null,seq__37727_37759__$1);
var G__37762 = c__28034__auto___37760;
var G__37763 = cljs.core.count.call(null,c__28034__auto___37760);
var G__37764 = (0);
seq__37727_37749 = G__37761;
chunk__37728_37750 = G__37762;
count__37729_37751 = G__37763;
i__37730_37752 = G__37764;
continue;
} else {
var f_37765 = cljs.core.first.call(null,seq__37727_37759__$1);
cljs.core.println.call(null,"  ",f_37765);

var G__37766 = cljs.core.next.call(null,seq__37727_37759__$1);
var G__37767 = null;
var G__37768 = (0);
var G__37769 = (0);
seq__37727_37749 = G__37766;
chunk__37728_37750 = G__37767;
count__37729_37751 = G__37768;
i__37730_37752 = G__37769;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37770 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37770);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37770)))?cljs.core.second.call(null,arglists_37770):arglists_37770));
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
var seq__37731_37771 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37732_37772 = null;
var count__37733_37773 = (0);
var i__37734_37774 = (0);
while(true){
if((i__37734_37774 < count__37733_37773)){
var vec__37735_37775 = cljs.core._nth.call(null,chunk__37732_37772,i__37734_37774);
var name_37776 = cljs.core.nth.call(null,vec__37735_37775,(0),null);
var map__37738_37777 = cljs.core.nth.call(null,vec__37735_37775,(1),null);
var map__37738_37778__$1 = ((((!((map__37738_37777 == null)))?((((map__37738_37777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37738_37777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37738_37777):map__37738_37777);
var doc_37779 = cljs.core.get.call(null,map__37738_37778__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37780 = cljs.core.get.call(null,map__37738_37778__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37776);

cljs.core.println.call(null," ",arglists_37780);

if(cljs.core.truth_(doc_37779)){
cljs.core.println.call(null," ",doc_37779);
} else {
}

var G__37781 = seq__37731_37771;
var G__37782 = chunk__37732_37772;
var G__37783 = count__37733_37773;
var G__37784 = (i__37734_37774 + (1));
seq__37731_37771 = G__37781;
chunk__37732_37772 = G__37782;
count__37733_37773 = G__37783;
i__37734_37774 = G__37784;
continue;
} else {
var temp__4657__auto___37785 = cljs.core.seq.call(null,seq__37731_37771);
if(temp__4657__auto___37785){
var seq__37731_37786__$1 = temp__4657__auto___37785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37731_37786__$1)){
var c__28034__auto___37787 = cljs.core.chunk_first.call(null,seq__37731_37786__$1);
var G__37788 = cljs.core.chunk_rest.call(null,seq__37731_37786__$1);
var G__37789 = c__28034__auto___37787;
var G__37790 = cljs.core.count.call(null,c__28034__auto___37787);
var G__37791 = (0);
seq__37731_37771 = G__37788;
chunk__37732_37772 = G__37789;
count__37733_37773 = G__37790;
i__37734_37774 = G__37791;
continue;
} else {
var vec__37740_37792 = cljs.core.first.call(null,seq__37731_37786__$1);
var name_37793 = cljs.core.nth.call(null,vec__37740_37792,(0),null);
var map__37743_37794 = cljs.core.nth.call(null,vec__37740_37792,(1),null);
var map__37743_37795__$1 = ((((!((map__37743_37794 == null)))?((((map__37743_37794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37743_37794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37743_37794):map__37743_37794);
var doc_37796 = cljs.core.get.call(null,map__37743_37795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37797 = cljs.core.get.call(null,map__37743_37795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37793);

cljs.core.println.call(null," ",arglists_37797);

if(cljs.core.truth_(doc_37796)){
cljs.core.println.call(null," ",doc_37796);
} else {
}

var G__37798 = cljs.core.next.call(null,seq__37731_37786__$1);
var G__37799 = null;
var G__37800 = (0);
var G__37801 = (0);
seq__37731_37771 = G__37798;
chunk__37732_37772 = G__37799;
count__37733_37773 = G__37800;
i__37734_37774 = G__37801;
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

var seq__37745 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37746 = null;
var count__37747 = (0);
var i__37748 = (0);
while(true){
if((i__37748 < count__37747)){
var role = cljs.core._nth.call(null,chunk__37746,i__37748);
var temp__4657__auto___37802__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37802__$1)){
var spec_37803 = temp__4657__auto___37802__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37803));
} else {
}

var G__37804 = seq__37745;
var G__37805 = chunk__37746;
var G__37806 = count__37747;
var G__37807 = (i__37748 + (1));
seq__37745 = G__37804;
chunk__37746 = G__37805;
count__37747 = G__37806;
i__37748 = G__37807;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37745);
if(temp__4657__auto____$1){
var seq__37745__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37745__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37745__$1);
var G__37808 = cljs.core.chunk_rest.call(null,seq__37745__$1);
var G__37809 = c__28034__auto__;
var G__37810 = cljs.core.count.call(null,c__28034__auto__);
var G__37811 = (0);
seq__37745 = G__37808;
chunk__37746 = G__37809;
count__37747 = G__37810;
i__37748 = G__37811;
continue;
} else {
var role = cljs.core.first.call(null,seq__37745__$1);
var temp__4657__auto___37812__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37812__$2)){
var spec_37813 = temp__4657__auto___37812__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37813));
} else {
}

var G__37814 = cljs.core.next.call(null,seq__37745__$1);
var G__37815 = null;
var G__37816 = (0);
var G__37817 = (0);
seq__37745 = G__37814;
chunk__37746 = G__37815;
count__37747 = G__37816;
i__37748 = G__37817;
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

//# sourceMappingURL=repl.js.map?rel=1514349637335
