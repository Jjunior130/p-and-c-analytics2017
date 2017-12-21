// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37671){
var map__37672 = p__37671;
var map__37672__$1 = ((((!((map__37672 == null)))?((((map__37672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37672):map__37672);
var m = map__37672__$1;
var n = cljs.core.get.call(null,map__37672__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37674_37696 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37675_37697 = null;
var count__37676_37698 = (0);
var i__37677_37699 = (0);
while(true){
if((i__37677_37699 < count__37676_37698)){
var f_37700 = cljs.core._nth.call(null,chunk__37675_37697,i__37677_37699);
cljs.core.println.call(null,"  ",f_37700);

var G__37701 = seq__37674_37696;
var G__37702 = chunk__37675_37697;
var G__37703 = count__37676_37698;
var G__37704 = (i__37677_37699 + (1));
seq__37674_37696 = G__37701;
chunk__37675_37697 = G__37702;
count__37676_37698 = G__37703;
i__37677_37699 = G__37704;
continue;
} else {
var temp__4657__auto___37705 = cljs.core.seq.call(null,seq__37674_37696);
if(temp__4657__auto___37705){
var seq__37674_37706__$1 = temp__4657__auto___37705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37674_37706__$1)){
var c__28034__auto___37707 = cljs.core.chunk_first.call(null,seq__37674_37706__$1);
var G__37708 = cljs.core.chunk_rest.call(null,seq__37674_37706__$1);
var G__37709 = c__28034__auto___37707;
var G__37710 = cljs.core.count.call(null,c__28034__auto___37707);
var G__37711 = (0);
seq__37674_37696 = G__37708;
chunk__37675_37697 = G__37709;
count__37676_37698 = G__37710;
i__37677_37699 = G__37711;
continue;
} else {
var f_37712 = cljs.core.first.call(null,seq__37674_37706__$1);
cljs.core.println.call(null,"  ",f_37712);

var G__37713 = cljs.core.next.call(null,seq__37674_37706__$1);
var G__37714 = null;
var G__37715 = (0);
var G__37716 = (0);
seq__37674_37696 = G__37713;
chunk__37675_37697 = G__37714;
count__37676_37698 = G__37715;
i__37677_37699 = G__37716;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37717 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37717);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37717)))?cljs.core.second.call(null,arglists_37717):arglists_37717));
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
var seq__37678_37718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37679_37719 = null;
var count__37680_37720 = (0);
var i__37681_37721 = (0);
while(true){
if((i__37681_37721 < count__37680_37720)){
var vec__37682_37722 = cljs.core._nth.call(null,chunk__37679_37719,i__37681_37721);
var name_37723 = cljs.core.nth.call(null,vec__37682_37722,(0),null);
var map__37685_37724 = cljs.core.nth.call(null,vec__37682_37722,(1),null);
var map__37685_37725__$1 = ((((!((map__37685_37724 == null)))?((((map__37685_37724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37685_37724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37685_37724):map__37685_37724);
var doc_37726 = cljs.core.get.call(null,map__37685_37725__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37727 = cljs.core.get.call(null,map__37685_37725__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37723);

cljs.core.println.call(null," ",arglists_37727);

if(cljs.core.truth_(doc_37726)){
cljs.core.println.call(null," ",doc_37726);
} else {
}

var G__37728 = seq__37678_37718;
var G__37729 = chunk__37679_37719;
var G__37730 = count__37680_37720;
var G__37731 = (i__37681_37721 + (1));
seq__37678_37718 = G__37728;
chunk__37679_37719 = G__37729;
count__37680_37720 = G__37730;
i__37681_37721 = G__37731;
continue;
} else {
var temp__4657__auto___37732 = cljs.core.seq.call(null,seq__37678_37718);
if(temp__4657__auto___37732){
var seq__37678_37733__$1 = temp__4657__auto___37732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37678_37733__$1)){
var c__28034__auto___37734 = cljs.core.chunk_first.call(null,seq__37678_37733__$1);
var G__37735 = cljs.core.chunk_rest.call(null,seq__37678_37733__$1);
var G__37736 = c__28034__auto___37734;
var G__37737 = cljs.core.count.call(null,c__28034__auto___37734);
var G__37738 = (0);
seq__37678_37718 = G__37735;
chunk__37679_37719 = G__37736;
count__37680_37720 = G__37737;
i__37681_37721 = G__37738;
continue;
} else {
var vec__37687_37739 = cljs.core.first.call(null,seq__37678_37733__$1);
var name_37740 = cljs.core.nth.call(null,vec__37687_37739,(0),null);
var map__37690_37741 = cljs.core.nth.call(null,vec__37687_37739,(1),null);
var map__37690_37742__$1 = ((((!((map__37690_37741 == null)))?((((map__37690_37741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37690_37741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37690_37741):map__37690_37741);
var doc_37743 = cljs.core.get.call(null,map__37690_37742__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37744 = cljs.core.get.call(null,map__37690_37742__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37740);

cljs.core.println.call(null," ",arglists_37744);

if(cljs.core.truth_(doc_37743)){
cljs.core.println.call(null," ",doc_37743);
} else {
}

var G__37745 = cljs.core.next.call(null,seq__37678_37733__$1);
var G__37746 = null;
var G__37747 = (0);
var G__37748 = (0);
seq__37678_37718 = G__37745;
chunk__37679_37719 = G__37746;
count__37680_37720 = G__37747;
i__37681_37721 = G__37748;
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

var seq__37692 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37693 = null;
var count__37694 = (0);
var i__37695 = (0);
while(true){
if((i__37695 < count__37694)){
var role = cljs.core._nth.call(null,chunk__37693,i__37695);
var temp__4657__auto___37749__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37749__$1)){
var spec_37750 = temp__4657__auto___37749__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37750));
} else {
}

var G__37751 = seq__37692;
var G__37752 = chunk__37693;
var G__37753 = count__37694;
var G__37754 = (i__37695 + (1));
seq__37692 = G__37751;
chunk__37693 = G__37752;
count__37694 = G__37753;
i__37695 = G__37754;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37692);
if(temp__4657__auto____$1){
var seq__37692__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37692__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37692__$1);
var G__37755 = cljs.core.chunk_rest.call(null,seq__37692__$1);
var G__37756 = c__28034__auto__;
var G__37757 = cljs.core.count.call(null,c__28034__auto__);
var G__37758 = (0);
seq__37692 = G__37755;
chunk__37693 = G__37756;
count__37694 = G__37757;
i__37695 = G__37758;
continue;
} else {
var role = cljs.core.first.call(null,seq__37692__$1);
var temp__4657__auto___37759__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37759__$2)){
var spec_37760 = temp__4657__auto___37759__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37760));
} else {
}

var G__37761 = cljs.core.next.call(null,seq__37692__$1);
var G__37762 = null;
var G__37763 = (0);
var G__37764 = (0);
seq__37692 = G__37761;
chunk__37693 = G__37762;
count__37694 = G__37763;
i__37695 = G__37764;
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

//# sourceMappingURL=repl.js.map?rel=1513846754806
