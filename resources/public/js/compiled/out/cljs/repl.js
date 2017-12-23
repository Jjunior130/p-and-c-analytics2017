// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37700){
var map__37701 = p__37700;
var map__37701__$1 = ((((!((map__37701 == null)))?((((map__37701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37701):map__37701);
var m = map__37701__$1;
var n = cljs.core.get.call(null,map__37701__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37703_37725 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37704_37726 = null;
var count__37705_37727 = (0);
var i__37706_37728 = (0);
while(true){
if((i__37706_37728 < count__37705_37727)){
var f_37729 = cljs.core._nth.call(null,chunk__37704_37726,i__37706_37728);
cljs.core.println.call(null,"  ",f_37729);

var G__37730 = seq__37703_37725;
var G__37731 = chunk__37704_37726;
var G__37732 = count__37705_37727;
var G__37733 = (i__37706_37728 + (1));
seq__37703_37725 = G__37730;
chunk__37704_37726 = G__37731;
count__37705_37727 = G__37732;
i__37706_37728 = G__37733;
continue;
} else {
var temp__4657__auto___37734 = cljs.core.seq.call(null,seq__37703_37725);
if(temp__4657__auto___37734){
var seq__37703_37735__$1 = temp__4657__auto___37734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37703_37735__$1)){
var c__28034__auto___37736 = cljs.core.chunk_first.call(null,seq__37703_37735__$1);
var G__37737 = cljs.core.chunk_rest.call(null,seq__37703_37735__$1);
var G__37738 = c__28034__auto___37736;
var G__37739 = cljs.core.count.call(null,c__28034__auto___37736);
var G__37740 = (0);
seq__37703_37725 = G__37737;
chunk__37704_37726 = G__37738;
count__37705_37727 = G__37739;
i__37706_37728 = G__37740;
continue;
} else {
var f_37741 = cljs.core.first.call(null,seq__37703_37735__$1);
cljs.core.println.call(null,"  ",f_37741);

var G__37742 = cljs.core.next.call(null,seq__37703_37735__$1);
var G__37743 = null;
var G__37744 = (0);
var G__37745 = (0);
seq__37703_37725 = G__37742;
chunk__37704_37726 = G__37743;
count__37705_37727 = G__37744;
i__37706_37728 = G__37745;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37746 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37746);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37746)))?cljs.core.second.call(null,arglists_37746):arglists_37746));
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
var seq__37707_37747 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37708_37748 = null;
var count__37709_37749 = (0);
var i__37710_37750 = (0);
while(true){
if((i__37710_37750 < count__37709_37749)){
var vec__37711_37751 = cljs.core._nth.call(null,chunk__37708_37748,i__37710_37750);
var name_37752 = cljs.core.nth.call(null,vec__37711_37751,(0),null);
var map__37714_37753 = cljs.core.nth.call(null,vec__37711_37751,(1),null);
var map__37714_37754__$1 = ((((!((map__37714_37753 == null)))?((((map__37714_37753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37714_37753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37714_37753):map__37714_37753);
var doc_37755 = cljs.core.get.call(null,map__37714_37754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37756 = cljs.core.get.call(null,map__37714_37754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37752);

cljs.core.println.call(null," ",arglists_37756);

if(cljs.core.truth_(doc_37755)){
cljs.core.println.call(null," ",doc_37755);
} else {
}

var G__37757 = seq__37707_37747;
var G__37758 = chunk__37708_37748;
var G__37759 = count__37709_37749;
var G__37760 = (i__37710_37750 + (1));
seq__37707_37747 = G__37757;
chunk__37708_37748 = G__37758;
count__37709_37749 = G__37759;
i__37710_37750 = G__37760;
continue;
} else {
var temp__4657__auto___37761 = cljs.core.seq.call(null,seq__37707_37747);
if(temp__4657__auto___37761){
var seq__37707_37762__$1 = temp__4657__auto___37761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37707_37762__$1)){
var c__28034__auto___37763 = cljs.core.chunk_first.call(null,seq__37707_37762__$1);
var G__37764 = cljs.core.chunk_rest.call(null,seq__37707_37762__$1);
var G__37765 = c__28034__auto___37763;
var G__37766 = cljs.core.count.call(null,c__28034__auto___37763);
var G__37767 = (0);
seq__37707_37747 = G__37764;
chunk__37708_37748 = G__37765;
count__37709_37749 = G__37766;
i__37710_37750 = G__37767;
continue;
} else {
var vec__37716_37768 = cljs.core.first.call(null,seq__37707_37762__$1);
var name_37769 = cljs.core.nth.call(null,vec__37716_37768,(0),null);
var map__37719_37770 = cljs.core.nth.call(null,vec__37716_37768,(1),null);
var map__37719_37771__$1 = ((((!((map__37719_37770 == null)))?((((map__37719_37770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37719_37770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37719_37770):map__37719_37770);
var doc_37772 = cljs.core.get.call(null,map__37719_37771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37773 = cljs.core.get.call(null,map__37719_37771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37769);

cljs.core.println.call(null," ",arglists_37773);

if(cljs.core.truth_(doc_37772)){
cljs.core.println.call(null," ",doc_37772);
} else {
}

var G__37774 = cljs.core.next.call(null,seq__37707_37762__$1);
var G__37775 = null;
var G__37776 = (0);
var G__37777 = (0);
seq__37707_37747 = G__37774;
chunk__37708_37748 = G__37775;
count__37709_37749 = G__37776;
i__37710_37750 = G__37777;
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

var seq__37721 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37722 = null;
var count__37723 = (0);
var i__37724 = (0);
while(true){
if((i__37724 < count__37723)){
var role = cljs.core._nth.call(null,chunk__37722,i__37724);
var temp__4657__auto___37778__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37778__$1)){
var spec_37779 = temp__4657__auto___37778__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37779));
} else {
}

var G__37780 = seq__37721;
var G__37781 = chunk__37722;
var G__37782 = count__37723;
var G__37783 = (i__37724 + (1));
seq__37721 = G__37780;
chunk__37722 = G__37781;
count__37723 = G__37782;
i__37724 = G__37783;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37721);
if(temp__4657__auto____$1){
var seq__37721__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37721__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37721__$1);
var G__37784 = cljs.core.chunk_rest.call(null,seq__37721__$1);
var G__37785 = c__28034__auto__;
var G__37786 = cljs.core.count.call(null,c__28034__auto__);
var G__37787 = (0);
seq__37721 = G__37784;
chunk__37722 = G__37785;
count__37723 = G__37786;
i__37724 = G__37787;
continue;
} else {
var role = cljs.core.first.call(null,seq__37721__$1);
var temp__4657__auto___37788__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37788__$2)){
var spec_37789 = temp__4657__auto___37788__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37789));
} else {
}

var G__37790 = cljs.core.next.call(null,seq__37721__$1);
var G__37791 = null;
var G__37792 = (0);
var G__37793 = (0);
seq__37721 = G__37790;
chunk__37722 = G__37791;
count__37723 = G__37792;
i__37724 = G__37793;
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

//# sourceMappingURL=repl.js.map?rel=1514003837906
