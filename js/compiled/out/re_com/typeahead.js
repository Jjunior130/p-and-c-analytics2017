// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__45683){
var map__45684 = p__45683;
var map__45684__$1 = ((((!((map__45684 == null)))?((((map__45684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45684):map__45684);
var args = map__45684__$1;
var on_change = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__45686 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__45686,external_model_value);
} else {
return G__45686;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__45687,event){
var map__45688 = p__45687;
var map__45688__$1 = ((((!((map__45688 == null)))?((((map__45688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45688):map__45688);
var state = map__45688__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__45688__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__45688__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__45690 = event;
var G__45690__$1 = (((G__45690 instanceof cljs.core.Keyword))?G__45690.fqn:null);
switch (G__45690__$1) {
case "input-text-blurred":
var and__27183__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__27183__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__27195__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45690__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__45692,event){
var map__45693 = p__45692;
var map__45693__$1 = ((((!((map__45693 == null)))?((((map__45693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45693):map__45693);
var state = map__45693__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__45693__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__45695 = event;
var G__45695__$1 = (((G__45695 instanceof cljs.core.Keyword))?G__45695.fqn:null);
switch (G__45695__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__45697,new_value){
var map__45698 = p__45697;
var map__45698__$1 = ((((!((map__45698 == null)))?((((map__45698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45698):map__45698);
var state = map__45698__$1;
var on_change = cljs.core.get.call(null,map__45698__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__45700,suggestion){
var map__45701 = p__45700;
var map__45701__$1 = ((((!((map__45701 == null)))?((((map__45701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45701):map__45701);
var state = map__45701__$1;
var suggestion_to_string = cljs.core.get.call(null,map__45701__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__45703 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__45703,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__45703;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__45704,index){
var map__45705 = p__45704;
var map__45705__$1 = ((((!((map__45705 == null)))?((((map__45705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45705):map__45705);
var state = map__45705__$1;
var suggestions = cljs.core.get.call(null,map__45705__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__45707 = state;
var G__45707__$1 = cljs.core.assoc.call(null,G__45707,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__45707__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__45707__$1,suggestion):G__45707__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__45707__$2,suggestion);
} else {
return G__45707__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__45708,index){
var map__45709 = p__45708;
var map__45709__$1 = ((((!((map__45709 == null)))?((((map__45709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45709):map__45709);
var state = map__45709__$1;
var suggestions = cljs.core.get.call(null,map__45709__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__45711){
var map__45712 = p__45711;
var map__45712__$1 = ((((!((map__45712 == null)))?((((map__45712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45712):map__45712);
var state = map__45712__$1;
var suggestion_active_index = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__45714 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__45714,suggestion_active_index);
} else {
return G__45714;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__45715){
var map__45716 = p__45715;
var map__45716__$1 = ((((!((map__45716 == null)))?((((map__45716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45716):map__45716);
var state = map__45716__$1;
var suggestions = cljs.core.get.call(null,map__45716__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__45716__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__45718 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__45718,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__45718;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__45719){
var map__45720 = p__45719;
var map__45720__$1 = ((((!((map__45720 == null)))?((((map__45720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45720):map__45720);
var state = map__45720__$1;
var suggestions = cljs.core.get.call(null,map__45720__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__45720__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__45722 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__45722,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__45722;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__45723 = state;
var G__45723__$1 = re_com.typeahead.clear_suggestions.call(null,G__45723)
;
var G__45723__$2 = cljs.core.assoc.call(null,G__45723__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__45723__$2,null);
} else {
return G__45723__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__45724){
var map__45725 = p__45724;
var map__45725__$1 = ((((!((map__45725 == null)))?((((map__45725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45725):map__45725);
var state = map__45725__$1;
var input_text = cljs.core.get.call(null,map__45725__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__45725__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__45727 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__45727,input_text);
} else {
return G__45727;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__45728_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__45728_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__){
return (function (state_45745){
var state_val_45746 = (state_45745[(1)]);
if((state_val_45746 === (1))){
var state_45745__$1 = state_45745;
var statearr_45747_45759 = state_45745__$1;
(statearr_45747_45759[(2)] = null);

(statearr_45747_45759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45746 === (2))){
var state_45745__$1 = state_45745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45745__$1,(4),c_search);
} else {
if((state_val_45746 === (3))){
var inst_45743 = (state_45745[(2)]);
var state_45745__$1 = state_45745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45745__$1,inst_45743);
} else {
if((state_val_45746 === (4))){
var inst_45731 = (state_45745[(7)]);
var inst_45731__$1 = (state_45745[(2)]);
var inst_45732 = cljs.core.deref.call(null,state_atom);
var inst_45733 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_45732);
var inst_45734 = cljs.core._EQ_.call(null,"",inst_45731__$1);
var state_45745__$1 = (function (){var statearr_45748 = state_45745;
(statearr_45748[(7)] = inst_45731__$1);

(statearr_45748[(8)] = inst_45733);

return statearr_45748;
})();
if(inst_45734){
var statearr_45749_45760 = state_45745__$1;
(statearr_45749_45760[(1)] = (5));

} else {
var statearr_45750_45761 = state_45745__$1;
(statearr_45750_45761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45746 === (5))){
var inst_45736 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_45745__$1 = state_45745;
var statearr_45751_45762 = state_45745__$1;
(statearr_45751_45762[(2)] = inst_45736);

(statearr_45751_45762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45746 === (6))){
var inst_45731 = (state_45745[(7)]);
var inst_45733 = (state_45745[(8)]);
var inst_45738 = re_com.typeahead.search_data_source_BANG_.call(null,inst_45733,state_atom,inst_45731);
var state_45745__$1 = state_45745;
var statearr_45752_45763 = state_45745__$1;
(statearr_45752_45763[(2)] = inst_45738);

(statearr_45752_45763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45746 === (7))){
var inst_45740 = (state_45745[(2)]);
var state_45745__$1 = (function (){var statearr_45753 = state_45745;
(statearr_45753[(9)] = inst_45740);

return statearr_45753;
})();
var statearr_45754_45764 = state_45745__$1;
(statearr_45754_45764[(2)] = null);

(statearr_45754_45764[(1)] = (2));


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
});})(c__30953__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto____0 = (function (){
var statearr_45755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45755[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto__);

(statearr_45755[(1)] = (1));

return statearr_45755;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto____1 = (function (state_45745){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45756){if((e45756 instanceof Object)){
var ex__30869__auto__ = e45756;
var statearr_45757_45765 = state_45745;
(statearr_45757_45765[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45766 = state_45745;
state_45745 = G__45766;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto__ = function(state_45745){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto____1.call(this,state_45745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__))
})();
var state__30955__auto__ = (function (){var statearr_45758 = f__30954__auto__.call(null);
(statearr_45758[(6)] = c__30953__auto__);

return statearr_45758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__))
);

return c__30953__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__45768 = cljs.core.deref.call(null,state_atom);
var map__45768__$1 = ((((!((map__45768 == null)))?((((map__45768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45768):map__45768);
var state = map__45768__$1;
var input_text = cljs.core.get.call(null,map__45768__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__45768__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__45768,map__45768__$1,state,input_text,c_input){
return (function (p1__45767_SHARP_){
var G__45770 = p1__45767_SHARP_;
var G__45770__$1 = cljs.core.assoc.call(null,G__45770,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__45770__$1,new_text);
} else {
return G__45770__$1;
}
});})(map__45768,map__45768__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__45771 = cljs.core._EQ_;
var expr__45772 = event.which;
if(cljs.core.truth_(pred__45771.call(null,goog.events.KeyCodes.UP,expr__45772))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__45771.call(null,goog.events.KeyCodes.DOWN,expr__45772))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__45771.call(null,goog.events.KeyCodes.ENTER,expr__45772))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__45771.call(null,goog.events.KeyCodes.ESC,expr__45772))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__45771.call(null,goog.events.KeyCodes.TAB,expr__45772))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__28371__auto__ = [];
var len__28364__auto___45796 = arguments.length;
var i__28365__auto___45797 = (0);
while(true){
if((i__28365__auto___45797 < len__28364__auto___45796)){
args__28371__auto__.push((arguments[i__28365__auto___45797]));

var G__45798 = (i__28365__auto___45797 + (1));
i__28365__auto___45797 = G__45798;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__45776){
var map__45777 = p__45776;
var map__45777__$1 = ((((!((map__45777 == null)))?((((map__45777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45777):map__45777);
var args = map__45777__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__45779 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__45779__$1 = ((((!((map__45779 == null)))?((((map__45779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45779):map__45779);
var state = map__45779__$1;
var c_search = cljs.core.get.call(null,map__45779__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__45779__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function() { 
var G__45799__delegate = function (p__45781){
var map__45782 = p__45781;
var map__45782__$1 = ((((!((map__45782 == null)))?((((map__45782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45782):map__45782);
var args__$1 = map__45782__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__45782__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__45784 = cljs.core.deref.call(null,state_atom);
var map__45784__$1 = ((((!((map__45784 == null)))?((((map__45784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45784):map__45784);
var state__$1 = map__45784__$1;
var suggestions = cljs.core.get.call(null,map__45784__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__45784__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__45784__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__45784__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__27195__auto__ = width;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__27195__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function re_com$typeahead$iter__45786(s__45787){
return (new cljs.core.LazySeq(null,((function (map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function (){
var s__45787__$1 = s__45787;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45787__$1);
if(temp__4657__auto__){
var s__45787__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45787__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__45787__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__45789 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__45788 = (0);
while(true){
if((i__45788 < size__28002__auto__)){
var vec__45790 = cljs.core._nth.call(null,c__28001__auto__,i__45788);
var i = cljs.core.nth.call(null,vec__45790,(0),null);
var s = cljs.core.nth.call(null,vec__45790,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__45789,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__45788,selected_QMARK_,vec__45790,i,s,c__28001__auto__,size__28002__auto__,b__45789,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__45788,selected_QMARK_,vec__45790,i,s,c__28001__auto__,size__28002__auto__,b__45789,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__45788,selected_QMARK_,vec__45790,i,s,c__28001__auto__,size__28002__auto__,b__45789,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function (p1__45774_SHARP_){
p1__45774_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__45788,selected_QMARK_,vec__45790,i,s,c__28001__auto__,size__28002__auto__,b__45789,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__45800 = (i__45788 + (1));
i__45788 = G__45800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45789),re_com$typeahead$iter__45786.call(null,cljs.core.chunk_rest.call(null,s__45787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45789),null);
}
} else {
var vec__45793 = cljs.core.first.call(null,s__45787__$2);
var i = cljs.core.nth.call(null,vec__45793,(0),null);
var s = cljs.core.nth.call(null,vec__45793,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__45793,i,s,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__45793,i,s,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__45793,i,s,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args){
return (function (p1__45774_SHARP_){
p1__45774_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__45793,i,s,s__45787__$2,temp__4657__auto__,map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__45786.call(null,cljs.core.rest.call(null,s__45787__$2)));
}
} else {
return null;
}
break;
}
});})(map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
,null,null));
});})(map__45784,map__45784__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45782,map__45782__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__45799 = function (var_args){
var p__45781 = null;
if (arguments.length > 0) {
var G__45801__i = 0, G__45801__a = new Array(arguments.length -  0);
while (G__45801__i < G__45801__a.length) {G__45801__a[G__45801__i] = arguments[G__45801__i + 0]; ++G__45801__i;}
  p__45781 = new cljs.core.IndexedSeq(G__45801__a,0,null);
} 
return G__45799__delegate.call(this,p__45781);};
G__45799.cljs$lang$maxFixedArity = 0;
G__45799.cljs$lang$applyTo = (function (arglist__45802){
var p__45781 = cljs.core.seq(arglist__45802);
return G__45799__delegate(p__45781);
});
G__45799.cljs$core$IFn$_invoke$arity$variadic = G__45799__delegate;
return G__45799;
})()
;
;})(map__45779,map__45779__$1,state,c_search,c_input,state_atom,input_text_model,map__45777,map__45777__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq45775){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45775));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__30953__auto___45883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___45883,out){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___45883,out){
return (function (state_45853){
var state_val_45854 = (state_45853[(1)]);
if((state_val_45854 === (7))){
var inst_45808 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45855_45884 = state_45853__$1;
(statearr_45855_45884[(2)] = inst_45808);

(statearr_45855_45884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (1))){
var inst_45803 = null;
var state_45853__$1 = (function (){var statearr_45856 = state_45853;
(statearr_45856[(7)] = inst_45803);

return statearr_45856;
})();
var statearr_45857_45885 = state_45853__$1;
(statearr_45857_45885[(2)] = null);

(statearr_45857_45885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (4))){
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45853__$1,(7),in$);
} else {
if((state_val_45854 === (15))){
var inst_45838 = (state_45853[(2)]);
var state_45853__$1 = (function (){var statearr_45858 = state_45853;
(statearr_45858[(8)] = inst_45838);

return statearr_45858;
})();
var statearr_45859_45886 = state_45853__$1;
(statearr_45859_45886[(2)] = null);

(statearr_45859_45886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (13))){
var inst_45826 = (state_45853[(9)]);
var inst_45840 = cljs.core._EQ_.call(null,inst_45826,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_45853__$1 = state_45853;
if(inst_45840){
var statearr_45860_45887 = state_45853__$1;
(statearr_45860_45887[(1)] = (16));

} else {
var statearr_45861_45888 = state_45853__$1;
(statearr_45861_45888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (6))){
var inst_45812 = (state_45853[(10)]);
var inst_45811 = (state_45853[(2)]);
var inst_45812__$1 = cljs.core.async.timeout.call(null,ms);
var inst_45820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45821 = [in$,inst_45812__$1];
var inst_45822 = (new cljs.core.PersistentVector(null,2,(5),inst_45820,inst_45821,null));
var state_45853__$1 = (function (){var statearr_45862 = state_45853;
(statearr_45862[(11)] = inst_45811);

(statearr_45862[(10)] = inst_45812__$1);

return statearr_45862;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45853__$1,(8),inst_45822);
} else {
if((state_val_45854 === (17))){
var state_45853__$1 = state_45853;
var statearr_45863_45889 = state_45853__$1;
(statearr_45863_45889[(2)] = null);

(statearr_45863_45889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (3))){
var inst_45851 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45853__$1,inst_45851);
} else {
if((state_val_45854 === (12))){
var inst_45811 = (state_45853[(11)]);
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45853__$1,(15),out,inst_45811);
} else {
if((state_val_45854 === (2))){
var inst_45803 = (state_45853[(7)]);
var inst_45805 = (inst_45803 == null);
var state_45853__$1 = state_45853;
if(cljs.core.truth_(inst_45805)){
var statearr_45864_45890 = state_45853__$1;
(statearr_45864_45890[(1)] = (4));

} else {
var statearr_45865_45891 = state_45853__$1;
(statearr_45865_45891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (11))){
var inst_45848 = (state_45853[(2)]);
var inst_45803 = inst_45848;
var state_45853__$1 = (function (){var statearr_45866 = state_45853;
(statearr_45866[(7)] = inst_45803);

return statearr_45866;
})();
var statearr_45867_45892 = state_45853__$1;
(statearr_45867_45892[(2)] = null);

(statearr_45867_45892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (9))){
var inst_45824 = (state_45853[(12)]);
var inst_45832 = cljs.core.nth.call(null,inst_45824,(0),null);
var inst_45833 = cljs.core.nth.call(null,inst_45824,(1),null);
var state_45853__$1 = (function (){var statearr_45868 = state_45853;
(statearr_45868[(13)] = inst_45833);

return statearr_45868;
})();
var statearr_45869_45893 = state_45853__$1;
(statearr_45869_45893[(2)] = inst_45832);

(statearr_45869_45893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (5))){
var inst_45803 = (state_45853[(7)]);
var state_45853__$1 = state_45853;
var statearr_45870_45894 = state_45853__$1;
(statearr_45870_45894[(2)] = inst_45803);

(statearr_45870_45894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (14))){
var inst_45846 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45871_45895 = state_45853__$1;
(statearr_45871_45895[(2)] = inst_45846);

(statearr_45871_45895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (16))){
var inst_45825 = (state_45853[(14)]);
var state_45853__$1 = state_45853;
var statearr_45872_45896 = state_45853__$1;
(statearr_45872_45896[(2)] = inst_45825);

(statearr_45872_45896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (10))){
var inst_45826 = (state_45853[(9)]);
var inst_45812 = (state_45853[(10)]);
var inst_45835 = cljs.core._EQ_.call(null,inst_45826,inst_45812);
var state_45853__$1 = state_45853;
if(inst_45835){
var statearr_45873_45897 = state_45853__$1;
(statearr_45873_45897[(1)] = (12));

} else {
var statearr_45874_45898 = state_45853__$1;
(statearr_45874_45898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (18))){
var inst_45844 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45875_45899 = state_45853__$1;
(statearr_45875_45899[(2)] = inst_45844);

(statearr_45875_45899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (8))){
var inst_45826 = (state_45853[(9)]);
var inst_45824 = (state_45853[(12)]);
var inst_45824__$1 = (state_45853[(2)]);
var inst_45825 = cljs.core.nth.call(null,inst_45824__$1,(0),null);
var inst_45826__$1 = cljs.core.nth.call(null,inst_45824__$1,(1),null);
var inst_45827 = cljs.core._EQ_.call(null,inst_45826__$1,in$);
var state_45853__$1 = (function (){var statearr_45876 = state_45853;
(statearr_45876[(14)] = inst_45825);

(statearr_45876[(9)] = inst_45826__$1);

(statearr_45876[(12)] = inst_45824__$1);

return statearr_45876;
})();
if(inst_45827){
var statearr_45877_45900 = state_45853__$1;
(statearr_45877_45900[(1)] = (9));

} else {
var statearr_45878_45901 = state_45853__$1;
(statearr_45878_45901[(1)] = (10));

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
});})(c__30953__auto___45883,out))
;
return ((function (switch__30865__auto__,c__30953__auto___45883,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__30866__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__30866__auto____0 = (function (){
var statearr_45879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45879[(0)] = re_com$typeahead$debounce_$_state_machine__30866__auto__);

(statearr_45879[(1)] = (1));

return statearr_45879;
});
var re_com$typeahead$debounce_$_state_machine__30866__auto____1 = (function (state_45853){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_45853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e45880){if((e45880 instanceof Object)){
var ex__30869__auto__ = e45880;
var statearr_45881_45902 = state_45853;
(statearr_45881_45902[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45903 = state_45853;
state_45853 = G__45903;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__30866__auto__ = function(state_45853){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__30866__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__30866__auto____1.call(this,state_45853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__30866__auto____0;
re_com$typeahead$debounce_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__30866__auto____1;
return re_com$typeahead$debounce_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___45883,out))
})();
var state__30955__auto__ = (function (){var statearr_45882 = f__30954__auto__.call(null);
(statearr_45882[(6)] = c__30953__auto___45883);

return statearr_45882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___45883,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1514003851106
