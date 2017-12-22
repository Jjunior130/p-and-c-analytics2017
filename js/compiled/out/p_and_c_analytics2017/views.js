// Compiled by ClojureScript 1.9.908 {}
goog.provide('p_and_c_analytics2017.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('p_and_c_analytics2017.subs');
p_and_c_analytics2017.views.home_title = (function p_and_c_analytics2017$views$home_title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","name","p-and-c-analytics2017.subs/name",1122959101)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["Hello from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,name)),". This is the Home Page."].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
p_and_c_analytics2017.views.link_to_about_page = (function p_and_c_analytics2017$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null);
});
p_and_c_analytics2017.views.home_panel = (function p_and_c_analytics2017$views$home_panel(){
var units = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","units","p-and-c-analytics2017.subs/units",-1120045555)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__28003__auto__ = ((function (units){
return (function p_and_c_analytics2017$views$home_panel_$_iter__31846(s__31847){
return (new cljs.core.LazySeq(null,((function (units){
return (function (){
var s__31847__$1 = s__31847;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31847__$1);
if(temp__4657__auto__){
var s__31847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31847__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__31847__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__31849 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__31848 = (0);
while(true){
if((i__31848 < size__28002__auto__)){
var vec__31850 = cljs.core._nth.call(null,c__28001__auto__,i__31848);
var name = cljs.core.nth.call(null,vec__31850,(0),null);
var properties = cljs.core.nth.call(null,vec__31850,(1),null);
var unit = vec__31850;
cljs.core.chunk_append.call(null,b__31849,name);

var G__31856 = (i__31848 + (1));
i__31848 = G__31856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31849),p_and_c_analytics2017$views$home_panel_$_iter__31846.call(null,cljs.core.chunk_rest.call(null,s__31847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31849),null);
}
} else {
var vec__31853 = cljs.core.first.call(null,s__31847__$2);
var name = cljs.core.nth.call(null,vec__31853,(0),null);
var properties = cljs.core.nth.call(null,vec__31853,(1),null);
var unit = vec__31853;
return cljs.core.cons.call(null,name,p_and_c_analytics2017$views$home_panel_$_iter__31846.call(null,cljs.core.rest.call(null,s__31847__$2)));
}
} else {
return null;
}
break;
}
});})(units))
,null,null));
});})(units))
;
return iter__28003__auto__.call(null,cljs.core.deref.call(null,units));
})()], null);
});
p_and_c_analytics2017.views.about_title = (function p_and_c_analytics2017$views$about_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
p_and_c_analytics2017.views.link_to_home_page = (function p_and_c_analytics2017$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
p_and_c_analytics2017.views.about_panel = (function p_and_c_analytics2017$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.link_to_home_page], null)], null)], null);
});
p_and_c_analytics2017.views.panels = (function p_and_c_analytics2017$views$panels(panel_name){
var G__31857 = panel_name;
var G__31857__$1 = (((G__31857 instanceof cljs.core.Keyword))?G__31857.fqn:null);
switch (G__31857__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.about_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
p_and_c_analytics2017.views.show_panel = (function p_and_c_analytics2017$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.panels,panel_name], null);
});
p_and_c_analytics2017.views.main_panel = (function p_and_c_analytics2017$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("p-and-c-analytics2017.subs","active-panel","p-and-c-analytics2017.subs/active-panel",-947776158)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_and_c_analytics2017.views.panels,cljs.core.deref.call(null,active_panel)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1513976722347
