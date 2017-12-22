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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__47351){
var map__47352 = p__47351;
var map__47352__$1 = ((((!((map__47352 == null)))?((((map__47352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47352):map__47352);
var args = map__47352__$1;
var on_change = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__47352__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__47354 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__47354,external_model_value);
} else {
return G__47354;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__47355,event){
var map__47356 = p__47355;
var map__47356__$1 = ((((!((map__47356 == null)))?((((map__47356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47356):map__47356);
var state = map__47356__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__47356__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__47356__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__47358 = event;
var G__47358__$1 = (((G__47358 instanceof cljs.core.Keyword))?G__47358.fqn:null);
switch (G__47358__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47358__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__47360,event){
var map__47361 = p__47360;
var map__47361__$1 = ((((!((map__47361 == null)))?((((map__47361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47361):map__47361);
var state = map__47361__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__47361__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__47363 = event;
var G__47363__$1 = (((G__47363 instanceof cljs.core.Keyword))?G__47363.fqn:null);
switch (G__47363__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__47365,new_value){
var map__47366 = p__47365;
var map__47366__$1 = ((((!((map__47366 == null)))?((((map__47366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47366):map__47366);
var state = map__47366__$1;
var on_change = cljs.core.get.call(null,map__47366__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__47368,suggestion){
var map__47369 = p__47368;
var map__47369__$1 = ((((!((map__47369 == null)))?((((map__47369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47369):map__47369);
var state = map__47369__$1;
var suggestion_to_string = cljs.core.get.call(null,map__47369__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__47371 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__47371,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__47371;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__47372,index){
var map__47373 = p__47372;
var map__47373__$1 = ((((!((map__47373 == null)))?((((map__47373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47373):map__47373);
var state = map__47373__$1;
var suggestions = cljs.core.get.call(null,map__47373__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__47375 = state;
var G__47375__$1 = cljs.core.assoc.call(null,G__47375,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__47375__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__47375__$1,suggestion):G__47375__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__47375__$2,suggestion);
} else {
return G__47375__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__47376,index){
var map__47377 = p__47376;
var map__47377__$1 = ((((!((map__47377 == null)))?((((map__47377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47377):map__47377);
var state = map__47377__$1;
var suggestions = cljs.core.get.call(null,map__47377__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__47379){
var map__47380 = p__47379;
var map__47380__$1 = ((((!((map__47380 == null)))?((((map__47380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47380):map__47380);
var state = map__47380__$1;
var suggestion_active_index = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__47382 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__47382,suggestion_active_index);
} else {
return G__47382;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__47383){
var map__47384 = p__47383;
var map__47384__$1 = ((((!((map__47384 == null)))?((((map__47384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47384):map__47384);
var state = map__47384__$1;
var suggestions = cljs.core.get.call(null,map__47384__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__47384__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__47386 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__47386,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__47386;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__47387){
var map__47388 = p__47387;
var map__47388__$1 = ((((!((map__47388 == null)))?((((map__47388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47388):map__47388);
var state = map__47388__$1;
var suggestions = cljs.core.get.call(null,map__47388__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__47388__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__47390 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__47390,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__47390;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__47391 = state;
var G__47391__$1 = re_com.typeahead.clear_suggestions.call(null,G__47391)
;
var G__47391__$2 = cljs.core.assoc.call(null,G__47391__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__47391__$2,null);
} else {
return G__47391__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__47392){
var map__47393 = p__47392;
var map__47393__$1 = ((((!((map__47393 == null)))?((((map__47393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47393):map__47393);
var state = map__47393__$1;
var input_text = cljs.core.get.call(null,map__47393__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__47393__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__47395 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__47395,input_text);
} else {
return G__47395;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__47396_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__47396_SHARP_);
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
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__){
return (function (state_47413){
var state_val_47414 = (state_47413[(1)]);
if((state_val_47414 === (1))){
var state_47413__$1 = state_47413;
var statearr_47415_47427 = state_47413__$1;
(statearr_47415_47427[(2)] = null);

(statearr_47415_47427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (2))){
var state_47413__$1 = state_47413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47413__$1,(4),c_search);
} else {
if((state_val_47414 === (3))){
var inst_47411 = (state_47413[(2)]);
var state_47413__$1 = state_47413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47413__$1,inst_47411);
} else {
if((state_val_47414 === (4))){
var inst_47399 = (state_47413[(7)]);
var inst_47399__$1 = (state_47413[(2)]);
var inst_47400 = cljs.core.deref.call(null,state_atom);
var inst_47401 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_47400);
var inst_47402 = cljs.core._EQ_.call(null,"",inst_47399__$1);
var state_47413__$1 = (function (){var statearr_47416 = state_47413;
(statearr_47416[(8)] = inst_47401);

(statearr_47416[(7)] = inst_47399__$1);

return statearr_47416;
})();
if(inst_47402){
var statearr_47417_47428 = state_47413__$1;
(statearr_47417_47428[(1)] = (5));

} else {
var statearr_47418_47429 = state_47413__$1;
(statearr_47418_47429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (5))){
var inst_47404 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_47413__$1 = state_47413;
var statearr_47419_47430 = state_47413__$1;
(statearr_47419_47430[(2)] = inst_47404);

(statearr_47419_47430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (6))){
var inst_47401 = (state_47413[(8)]);
var inst_47399 = (state_47413[(7)]);
var inst_47406 = re_com.typeahead.search_data_source_BANG_.call(null,inst_47401,state_atom,inst_47399);
var state_47413__$1 = state_47413;
var statearr_47420_47431 = state_47413__$1;
(statearr_47420_47431[(2)] = inst_47406);

(statearr_47420_47431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47414 === (7))){
var inst_47408 = (state_47413[(2)]);
var state_47413__$1 = (function (){var statearr_47421 = state_47413;
(statearr_47421[(9)] = inst_47408);

return statearr_47421;
})();
var statearr_47422_47432 = state_47413__$1;
(statearr_47422_47432[(2)] = null);

(statearr_47422_47432[(1)] = (2));


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
});})(c__29992__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto____0 = (function (){
var statearr_47423 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47423[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto__);

(statearr_47423[(1)] = (1));

return statearr_47423;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto____1 = (function (state_47413){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_47413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e47424){if((e47424 instanceof Object)){
var ex__29975__auto__ = e47424;
var statearr_47425_47433 = state_47413;
(statearr_47425_47433[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47434 = state_47413;
state_47413 = G__47434;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto__ = function(state_47413){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto____1.call(this,state_47413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__))
})();
var state__29994__auto__ = (function (){var statearr_47426 = f__29993__auto__.call(null);
(statearr_47426[(6)] = c__29992__auto__);

return statearr_47426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__))
);

return c__29992__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__47436 = cljs.core.deref.call(null,state_atom);
var map__47436__$1 = ((((!((map__47436 == null)))?((((map__47436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47436):map__47436);
var state = map__47436__$1;
var input_text = cljs.core.get.call(null,map__47436__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__47436__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__47436,map__47436__$1,state,input_text,c_input){
return (function (p1__47435_SHARP_){
var G__47438 = p1__47435_SHARP_;
var G__47438__$1 = cljs.core.assoc.call(null,G__47438,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__47438__$1,new_text);
} else {
return G__47438__$1;
}
});})(map__47436,map__47436__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__47439 = cljs.core._EQ_;
var expr__47440 = event.which;
if(cljs.core.truth_(pred__47439.call(null,goog.events.KeyCodes.UP,expr__47440))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__47439.call(null,goog.events.KeyCodes.DOWN,expr__47440))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__47439.call(null,goog.events.KeyCodes.ENTER,expr__47440))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__47439.call(null,goog.events.KeyCodes.ESC,expr__47440))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__47439.call(null,goog.events.KeyCodes.TAB,expr__47440))){
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
var len__28364__auto___47464 = arguments.length;
var i__28365__auto___47465 = (0);
while(true){
if((i__28365__auto___47465 < len__28364__auto___47464)){
args__28371__auto__.push((arguments[i__28365__auto___47465]));

var G__47466 = (i__28365__auto___47465 + (1));
i__28365__auto___47465 = G__47466;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__47444){
var map__47445 = p__47444;
var map__47445__$1 = ((((!((map__47445 == null)))?((((map__47445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47445):map__47445);
var args = map__47445__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__47447 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__47447__$1 = ((((!((map__47447 == null)))?((((map__47447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47447):map__47447);
var state = map__47447__$1;
var c_search = cljs.core.get.call(null,map__47447__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__47447__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function() { 
var G__47467__delegate = function (p__47449){
var map__47450 = p__47449;
var map__47450__$1 = ((((!((map__47450 == null)))?((((map__47450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47450):map__47450);
var args__$1 = map__47450__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__47450__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__47452 = cljs.core.deref.call(null,state_atom);
var map__47452__$1 = ((((!((map__47452 == null)))?((((map__47452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47452):map__47452);
var state__$1 = map__47452__$1;
var suggestions = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function re_com$typeahead$iter__47454(s__47455){
return (new cljs.core.LazySeq(null,((function (map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function (){
var s__47455__$1 = s__47455;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47455__$1);
if(temp__4657__auto__){
var s__47455__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47455__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__47455__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__47457 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__47456 = (0);
while(true){
if((i__47456 < size__28002__auto__)){
var vec__47458 = cljs.core._nth.call(null,c__28001__auto__,i__47456);
var i = cljs.core.nth.call(null,vec__47458,(0),null);
var s = cljs.core.nth.call(null,vec__47458,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__47457,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__47456,selected_QMARK_,vec__47458,i,s,c__28001__auto__,size__28002__auto__,b__47457,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__47456,selected_QMARK_,vec__47458,i,s,c__28001__auto__,size__28002__auto__,b__47457,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__47456,selected_QMARK_,vec__47458,i,s,c__28001__auto__,size__28002__auto__,b__47457,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function (p1__47442_SHARP_){
p1__47442_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__47456,selected_QMARK_,vec__47458,i,s,c__28001__auto__,size__28002__auto__,b__47457,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__47468 = (i__47456 + (1));
i__47456 = G__47468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47457),re_com$typeahead$iter__47454.call(null,cljs.core.chunk_rest.call(null,s__47455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47457),null);
}
} else {
var vec__47461 = cljs.core.first.call(null,s__47455__$2);
var i = cljs.core.nth.call(null,vec__47461,(0),null);
var s = cljs.core.nth.call(null,vec__47461,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__47461,i,s,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__47461,i,s,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__47461,i,s,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args){
return (function (p1__47442_SHARP_){
p1__47442_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__47461,i,s,s__47455__$2,temp__4657__auto__,map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__47454.call(null,cljs.core.rest.call(null,s__47455__$2)));
}
} else {
return null;
}
break;
}
});})(map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
,null,null));
});})(map__47452,map__47452__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__47450,map__47450__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__47467 = function (var_args){
var p__47449 = null;
if (arguments.length > 0) {
var G__47469__i = 0, G__47469__a = new Array(arguments.length -  0);
while (G__47469__i < G__47469__a.length) {G__47469__a[G__47469__i] = arguments[G__47469__i + 0]; ++G__47469__i;}
  p__47449 = new cljs.core.IndexedSeq(G__47469__a,0,null);
} 
return G__47467__delegate.call(this,p__47449);};
G__47467.cljs$lang$maxFixedArity = 0;
G__47467.cljs$lang$applyTo = (function (arglist__47470){
var p__47449 = cljs.core.seq(arglist__47470);
return G__47467__delegate(p__47449);
});
G__47467.cljs$core$IFn$_invoke$arity$variadic = G__47467__delegate;
return G__47467;
})()
;
;})(map__47447,map__47447__$1,state,c_search,c_input,state_atom,input_text_model,map__47445,map__47445__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq47443){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47443));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__29992__auto___47551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___47551,out){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___47551,out){
return (function (state_47521){
var state_val_47522 = (state_47521[(1)]);
if((state_val_47522 === (7))){
var inst_47476 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47523_47552 = state_47521__$1;
(statearr_47523_47552[(2)] = inst_47476);

(statearr_47523_47552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (1))){
var inst_47471 = null;
var state_47521__$1 = (function (){var statearr_47524 = state_47521;
(statearr_47524[(7)] = inst_47471);

return statearr_47524;
})();
var statearr_47525_47553 = state_47521__$1;
(statearr_47525_47553[(2)] = null);

(statearr_47525_47553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (4))){
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47521__$1,(7),in$);
} else {
if((state_val_47522 === (15))){
var inst_47506 = (state_47521[(2)]);
var state_47521__$1 = (function (){var statearr_47526 = state_47521;
(statearr_47526[(8)] = inst_47506);

return statearr_47526;
})();
var statearr_47527_47554 = state_47521__$1;
(statearr_47527_47554[(2)] = null);

(statearr_47527_47554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (13))){
var inst_47494 = (state_47521[(9)]);
var inst_47508 = cljs.core._EQ_.call(null,inst_47494,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_47521__$1 = state_47521;
if(inst_47508){
var statearr_47528_47555 = state_47521__$1;
(statearr_47528_47555[(1)] = (16));

} else {
var statearr_47529_47556 = state_47521__$1;
(statearr_47529_47556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (6))){
var inst_47480 = (state_47521[(10)]);
var inst_47479 = (state_47521[(2)]);
var inst_47480__$1 = cljs.core.async.timeout.call(null,ms);
var inst_47488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47489 = [in$,inst_47480__$1];
var inst_47490 = (new cljs.core.PersistentVector(null,2,(5),inst_47488,inst_47489,null));
var state_47521__$1 = (function (){var statearr_47530 = state_47521;
(statearr_47530[(10)] = inst_47480__$1);

(statearr_47530[(11)] = inst_47479);

return statearr_47530;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47521__$1,(8),inst_47490);
} else {
if((state_val_47522 === (17))){
var state_47521__$1 = state_47521;
var statearr_47531_47557 = state_47521__$1;
(statearr_47531_47557[(2)] = null);

(statearr_47531_47557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (3))){
var inst_47519 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47521__$1,inst_47519);
} else {
if((state_val_47522 === (12))){
var inst_47479 = (state_47521[(11)]);
var state_47521__$1 = state_47521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47521__$1,(15),out,inst_47479);
} else {
if((state_val_47522 === (2))){
var inst_47471 = (state_47521[(7)]);
var inst_47473 = (inst_47471 == null);
var state_47521__$1 = state_47521;
if(cljs.core.truth_(inst_47473)){
var statearr_47532_47558 = state_47521__$1;
(statearr_47532_47558[(1)] = (4));

} else {
var statearr_47533_47559 = state_47521__$1;
(statearr_47533_47559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (11))){
var inst_47516 = (state_47521[(2)]);
var inst_47471 = inst_47516;
var state_47521__$1 = (function (){var statearr_47534 = state_47521;
(statearr_47534[(7)] = inst_47471);

return statearr_47534;
})();
var statearr_47535_47560 = state_47521__$1;
(statearr_47535_47560[(2)] = null);

(statearr_47535_47560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (9))){
var inst_47492 = (state_47521[(12)]);
var inst_47500 = cljs.core.nth.call(null,inst_47492,(0),null);
var inst_47501 = cljs.core.nth.call(null,inst_47492,(1),null);
var state_47521__$1 = (function (){var statearr_47536 = state_47521;
(statearr_47536[(13)] = inst_47501);

return statearr_47536;
})();
var statearr_47537_47561 = state_47521__$1;
(statearr_47537_47561[(2)] = inst_47500);

(statearr_47537_47561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (5))){
var inst_47471 = (state_47521[(7)]);
var state_47521__$1 = state_47521;
var statearr_47538_47562 = state_47521__$1;
(statearr_47538_47562[(2)] = inst_47471);

(statearr_47538_47562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (14))){
var inst_47514 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47539_47563 = state_47521__$1;
(statearr_47539_47563[(2)] = inst_47514);

(statearr_47539_47563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (16))){
var inst_47493 = (state_47521[(14)]);
var state_47521__$1 = state_47521;
var statearr_47540_47564 = state_47521__$1;
(statearr_47540_47564[(2)] = inst_47493);

(statearr_47540_47564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (10))){
var inst_47480 = (state_47521[(10)]);
var inst_47494 = (state_47521[(9)]);
var inst_47503 = cljs.core._EQ_.call(null,inst_47494,inst_47480);
var state_47521__$1 = state_47521;
if(inst_47503){
var statearr_47541_47565 = state_47521__$1;
(statearr_47541_47565[(1)] = (12));

} else {
var statearr_47542_47566 = state_47521__$1;
(statearr_47542_47566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (18))){
var inst_47512 = (state_47521[(2)]);
var state_47521__$1 = state_47521;
var statearr_47543_47567 = state_47521__$1;
(statearr_47543_47567[(2)] = inst_47512);

(statearr_47543_47567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47522 === (8))){
var inst_47492 = (state_47521[(12)]);
var inst_47494 = (state_47521[(9)]);
var inst_47492__$1 = (state_47521[(2)]);
var inst_47493 = cljs.core.nth.call(null,inst_47492__$1,(0),null);
var inst_47494__$1 = cljs.core.nth.call(null,inst_47492__$1,(1),null);
var inst_47495 = cljs.core._EQ_.call(null,inst_47494__$1,in$);
var state_47521__$1 = (function (){var statearr_47544 = state_47521;
(statearr_47544[(12)] = inst_47492__$1);

(statearr_47544[(14)] = inst_47493);

(statearr_47544[(9)] = inst_47494__$1);

return statearr_47544;
})();
if(inst_47495){
var statearr_47545_47568 = state_47521__$1;
(statearr_47545_47568[(1)] = (9));

} else {
var statearr_47546_47569 = state_47521__$1;
(statearr_47546_47569[(1)] = (10));

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
});})(c__29992__auto___47551,out))
;
return ((function (switch__29971__auto__,c__29992__auto___47551,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__29972__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__29972__auto____0 = (function (){
var statearr_47547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47547[(0)] = re_com$typeahead$debounce_$_state_machine__29972__auto__);

(statearr_47547[(1)] = (1));

return statearr_47547;
});
var re_com$typeahead$debounce_$_state_machine__29972__auto____1 = (function (state_47521){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_47521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e47548){if((e47548 instanceof Object)){
var ex__29975__auto__ = e47548;
var statearr_47549_47570 = state_47521;
(statearr_47549_47570[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47571 = state_47521;
state_47521 = G__47571;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__29972__auto__ = function(state_47521){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__29972__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__29972__auto____1.call(this,state_47521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__29972__auto____0;
re_com$typeahead$debounce_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__29972__auto____1;
return re_com$typeahead$debounce_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___47551,out))
})();
var state__29994__auto__ = (function (){var statearr_47550 = f__29993__auto__.call(null);
(statearr_47550[(6)] = c__29992__auto___47551);

return statearr_47550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___47551,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1513978693706