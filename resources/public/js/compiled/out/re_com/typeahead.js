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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__62337){
var map__62338 = p__62337;
var map__62338__$1 = ((((!((map__62338 == null)))?((((map__62338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62338):map__62338);
var args = map__62338__$1;
var on_change = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__62338__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__62340 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__62340,external_model_value);
} else {
return G__62340;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__62341,event){
var map__62342 = p__62341;
var map__62342__$1 = ((((!((map__62342 == null)))?((((map__62342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62342):map__62342);
var state = map__62342__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__62342__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__62342__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__62344 = event;
var G__62344__$1 = (((G__62344 instanceof cljs.core.Keyword))?G__62344.fqn:null);
switch (G__62344__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62344__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__62346,event){
var map__62347 = p__62346;
var map__62347__$1 = ((((!((map__62347 == null)))?((((map__62347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62347):map__62347);
var state = map__62347__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__62347__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__62349 = event;
var G__62349__$1 = (((G__62349 instanceof cljs.core.Keyword))?G__62349.fqn:null);
switch (G__62349__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__62351,new_value){
var map__62352 = p__62351;
var map__62352__$1 = ((((!((map__62352 == null)))?((((map__62352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62352):map__62352);
var state = map__62352__$1;
var on_change = cljs.core.get.call(null,map__62352__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__62354,suggestion){
var map__62355 = p__62354;
var map__62355__$1 = ((((!((map__62355 == null)))?((((map__62355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62355):map__62355);
var state = map__62355__$1;
var suggestion_to_string = cljs.core.get.call(null,map__62355__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__62357 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__62357,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__62357;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__62358,index){
var map__62359 = p__62358;
var map__62359__$1 = ((((!((map__62359 == null)))?((((map__62359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62359):map__62359);
var state = map__62359__$1;
var suggestions = cljs.core.get.call(null,map__62359__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__62361 = state;
var G__62361__$1 = cljs.core.assoc.call(null,G__62361,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__62361__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__62361__$1,suggestion):G__62361__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__62361__$2,suggestion);
} else {
return G__62361__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__62362,index){
var map__62363 = p__62362;
var map__62363__$1 = ((((!((map__62363 == null)))?((((map__62363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62363):map__62363);
var state = map__62363__$1;
var suggestions = cljs.core.get.call(null,map__62363__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__62365){
var map__62366 = p__62365;
var map__62366__$1 = ((((!((map__62366 == null)))?((((map__62366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62366):map__62366);
var state = map__62366__$1;
var suggestion_active_index = cljs.core.get.call(null,map__62366__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__62368 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__62368,suggestion_active_index);
} else {
return G__62368;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__62369){
var map__62370 = p__62369;
var map__62370__$1 = ((((!((map__62370 == null)))?((((map__62370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62370):map__62370);
var state = map__62370__$1;
var suggestions = cljs.core.get.call(null,map__62370__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__62370__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__62372 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__62372,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__62372;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__62373){
var map__62374 = p__62373;
var map__62374__$1 = ((((!((map__62374 == null)))?((((map__62374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62374):map__62374);
var state = map__62374__$1;
var suggestions = cljs.core.get.call(null,map__62374__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__62374__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__62376 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__62376,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__62376;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__62377 = state;
var G__62377__$1 = re_com.typeahead.clear_suggestions.call(null,G__62377)
;
var G__62377__$2 = cljs.core.assoc.call(null,G__62377__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__62377__$2,null);
} else {
return G__62377__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__62378){
var map__62379 = p__62378;
var map__62379__$1 = ((((!((map__62379 == null)))?((((map__62379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62379):map__62379);
var state = map__62379__$1;
var input_text = cljs.core.get.call(null,map__62379__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__62379__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__62381 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__62381,input_text);
} else {
return G__62381;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__62382_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__62382_SHARP_);
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__){
return (function (state_62399){
var state_val_62400 = (state_62399[(1)]);
if((state_val_62400 === (1))){
var state_62399__$1 = state_62399;
var statearr_62401_62413 = state_62399__$1;
(statearr_62401_62413[(2)] = null);

(statearr_62401_62413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62400 === (2))){
var state_62399__$1 = state_62399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62399__$1,(4),c_search);
} else {
if((state_val_62400 === (3))){
var inst_62397 = (state_62399[(2)]);
var state_62399__$1 = state_62399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62399__$1,inst_62397);
} else {
if((state_val_62400 === (4))){
var inst_62385 = (state_62399[(7)]);
var inst_62385__$1 = (state_62399[(2)]);
var inst_62386 = cljs.core.deref.call(null,state_atom);
var inst_62387 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_62386);
var inst_62388 = cljs.core._EQ_.call(null,"",inst_62385__$1);
var state_62399__$1 = (function (){var statearr_62402 = state_62399;
(statearr_62402[(7)] = inst_62385__$1);

(statearr_62402[(8)] = inst_62387);

return statearr_62402;
})();
if(inst_62388){
var statearr_62403_62414 = state_62399__$1;
(statearr_62403_62414[(1)] = (5));

} else {
var statearr_62404_62415 = state_62399__$1;
(statearr_62404_62415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62400 === (5))){
var inst_62390 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_62399__$1 = state_62399;
var statearr_62405_62416 = state_62399__$1;
(statearr_62405_62416[(2)] = inst_62390);

(statearr_62405_62416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62400 === (6))){
var inst_62385 = (state_62399[(7)]);
var inst_62387 = (state_62399[(8)]);
var inst_62392 = re_com.typeahead.search_data_source_BANG_.call(null,inst_62387,state_atom,inst_62385);
var state_62399__$1 = state_62399;
var statearr_62406_62417 = state_62399__$1;
(statearr_62406_62417[(2)] = inst_62392);

(statearr_62406_62417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62400 === (7))){
var inst_62394 = (state_62399[(2)]);
var state_62399__$1 = (function (){var statearr_62407 = state_62399;
(statearr_62407[(9)] = inst_62394);

return statearr_62407;
})();
var statearr_62408_62418 = state_62399__$1;
(statearr_62408_62418[(2)] = null);

(statearr_62408_62418[(1)] = (2));


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
});})(c__30952__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto____0 = (function (){
var statearr_62409 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62409[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto__);

(statearr_62409[(1)] = (1));

return statearr_62409;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto____1 = (function (state_62399){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_62399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e62410){if((e62410 instanceof Object)){
var ex__30868__auto__ = e62410;
var statearr_62411_62419 = state_62399;
(statearr_62411_62419[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62420 = state_62399;
state_62399 = G__62420;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto__ = function(state_62399){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto____1.call(this,state_62399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_62412 = f__30953__auto__.call(null);
(statearr_62412[(6)] = c__30952__auto__);

return statearr_62412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__))
);

return c__30952__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__62422 = cljs.core.deref.call(null,state_atom);
var map__62422__$1 = ((((!((map__62422 == null)))?((((map__62422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62422):map__62422);
var state = map__62422__$1;
var input_text = cljs.core.get.call(null,map__62422__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__62422__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__62422,map__62422__$1,state,input_text,c_input){
return (function (p1__62421_SHARP_){
var G__62424 = p1__62421_SHARP_;
var G__62424__$1 = cljs.core.assoc.call(null,G__62424,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__62424__$1,new_text);
} else {
return G__62424__$1;
}
});})(map__62422,map__62422__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__62425 = cljs.core._EQ_;
var expr__62426 = event.which;
if(cljs.core.truth_(pred__62425.call(null,goog.events.KeyCodes.UP,expr__62426))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__62425.call(null,goog.events.KeyCodes.DOWN,expr__62426))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__62425.call(null,goog.events.KeyCodes.ENTER,expr__62426))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__62425.call(null,goog.events.KeyCodes.ESC,expr__62426))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__62425.call(null,goog.events.KeyCodes.TAB,expr__62426))){
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
var len__28364__auto___62450 = arguments.length;
var i__28365__auto___62451 = (0);
while(true){
if((i__28365__auto___62451 < len__28364__auto___62450)){
args__28371__auto__.push((arguments[i__28365__auto___62451]));

var G__62452 = (i__28365__auto___62451 + (1));
i__28365__auto___62451 = G__62452;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__62430){
var map__62431 = p__62430;
var map__62431__$1 = ((((!((map__62431 == null)))?((((map__62431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62431):map__62431);
var args = map__62431__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__62433 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__62433__$1 = ((((!((map__62433 == null)))?((((map__62433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62433):map__62433);
var state = map__62433__$1;
var c_search = cljs.core.get.call(null,map__62433__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__62433__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function() { 
var G__62453__delegate = function (p__62435){
var map__62436 = p__62435;
var map__62436__$1 = ((((!((map__62436 == null)))?((((map__62436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62436):map__62436);
var args__$1 = map__62436__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__62436__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__62438 = cljs.core.deref.call(null,state_atom);
var map__62438__$1 = ((((!((map__62438 == null)))?((((map__62438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62438):map__62438);
var state__$1 = map__62438__$1;
var suggestions = cljs.core.get.call(null,map__62438__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__62438__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__62438__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__62438__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function re_com$typeahead$iter__62440(s__62441){
return (new cljs.core.LazySeq(null,((function (map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function (){
var s__62441__$1 = s__62441;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62441__$1);
if(temp__4657__auto__){
var s__62441__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62441__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__62441__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__62443 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__62442 = (0);
while(true){
if((i__62442 < size__28002__auto__)){
var vec__62444 = cljs.core._nth.call(null,c__28001__auto__,i__62442);
var i = cljs.core.nth.call(null,vec__62444,(0),null);
var s = cljs.core.nth.call(null,vec__62444,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__62443,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__62442,selected_QMARK_,vec__62444,i,s,c__28001__auto__,size__28002__auto__,b__62443,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__62442,selected_QMARK_,vec__62444,i,s,c__28001__auto__,size__28002__auto__,b__62443,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__62442,selected_QMARK_,vec__62444,i,s,c__28001__auto__,size__28002__auto__,b__62443,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function (p1__62428_SHARP_){
p1__62428_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__62442,selected_QMARK_,vec__62444,i,s,c__28001__auto__,size__28002__auto__,b__62443,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__62454 = (i__62442 + (1));
i__62442 = G__62454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62443),re_com$typeahead$iter__62440.call(null,cljs.core.chunk_rest.call(null,s__62441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62443),null);
}
} else {
var vec__62447 = cljs.core.first.call(null,s__62441__$2);
var i = cljs.core.nth.call(null,vec__62447,(0),null);
var s = cljs.core.nth.call(null,vec__62447,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__62447,i,s,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__62447,i,s,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__62447,i,s,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args){
return (function (p1__62428_SHARP_){
p1__62428_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__62447,i,s,s__62441__$2,temp__4657__auto__,map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__62440.call(null,cljs.core.rest.call(null,s__62441__$2)));
}
} else {
return null;
}
break;
}
});})(map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
,null,null));
});})(map__62438,map__62438__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__62436,map__62436__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__62453 = function (var_args){
var p__62435 = null;
if (arguments.length > 0) {
var G__62455__i = 0, G__62455__a = new Array(arguments.length -  0);
while (G__62455__i < G__62455__a.length) {G__62455__a[G__62455__i] = arguments[G__62455__i + 0]; ++G__62455__i;}
  p__62435 = new cljs.core.IndexedSeq(G__62455__a,0,null);
} 
return G__62453__delegate.call(this,p__62435);};
G__62453.cljs$lang$maxFixedArity = 0;
G__62453.cljs$lang$applyTo = (function (arglist__62456){
var p__62435 = cljs.core.seq(arglist__62456);
return G__62453__delegate(p__62435);
});
G__62453.cljs$core$IFn$_invoke$arity$variadic = G__62453__delegate;
return G__62453;
})()
;
;})(map__62433,map__62433__$1,state,c_search,c_input,state_atom,input_text_model,map__62431,map__62431__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq62429){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62429));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__30952__auto___62537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___62537,out){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___62537,out){
return (function (state_62507){
var state_val_62508 = (state_62507[(1)]);
if((state_val_62508 === (7))){
var inst_62462 = (state_62507[(2)]);
var state_62507__$1 = state_62507;
var statearr_62509_62538 = state_62507__$1;
(statearr_62509_62538[(2)] = inst_62462);

(statearr_62509_62538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (1))){
var inst_62457 = null;
var state_62507__$1 = (function (){var statearr_62510 = state_62507;
(statearr_62510[(7)] = inst_62457);

return statearr_62510;
})();
var statearr_62511_62539 = state_62507__$1;
(statearr_62511_62539[(2)] = null);

(statearr_62511_62539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (4))){
var state_62507__$1 = state_62507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62507__$1,(7),in$);
} else {
if((state_val_62508 === (15))){
var inst_62492 = (state_62507[(2)]);
var state_62507__$1 = (function (){var statearr_62512 = state_62507;
(statearr_62512[(8)] = inst_62492);

return statearr_62512;
})();
var statearr_62513_62540 = state_62507__$1;
(statearr_62513_62540[(2)] = null);

(statearr_62513_62540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (13))){
var inst_62480 = (state_62507[(9)]);
var inst_62494 = cljs.core._EQ_.call(null,inst_62480,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_62507__$1 = state_62507;
if(inst_62494){
var statearr_62514_62541 = state_62507__$1;
(statearr_62514_62541[(1)] = (16));

} else {
var statearr_62515_62542 = state_62507__$1;
(statearr_62515_62542[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (6))){
var inst_62466 = (state_62507[(10)]);
var inst_62465 = (state_62507[(2)]);
var inst_62466__$1 = cljs.core.async.timeout.call(null,ms);
var inst_62474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62475 = [in$,inst_62466__$1];
var inst_62476 = (new cljs.core.PersistentVector(null,2,(5),inst_62474,inst_62475,null));
var state_62507__$1 = (function (){var statearr_62516 = state_62507;
(statearr_62516[(11)] = inst_62465);

(statearr_62516[(10)] = inst_62466__$1);

return statearr_62516;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_62507__$1,(8),inst_62476);
} else {
if((state_val_62508 === (17))){
var state_62507__$1 = state_62507;
var statearr_62517_62543 = state_62507__$1;
(statearr_62517_62543[(2)] = null);

(statearr_62517_62543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (3))){
var inst_62505 = (state_62507[(2)]);
var state_62507__$1 = state_62507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62507__$1,inst_62505);
} else {
if((state_val_62508 === (12))){
var inst_62465 = (state_62507[(11)]);
var state_62507__$1 = state_62507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62507__$1,(15),out,inst_62465);
} else {
if((state_val_62508 === (2))){
var inst_62457 = (state_62507[(7)]);
var inst_62459 = (inst_62457 == null);
var state_62507__$1 = state_62507;
if(cljs.core.truth_(inst_62459)){
var statearr_62518_62544 = state_62507__$1;
(statearr_62518_62544[(1)] = (4));

} else {
var statearr_62519_62545 = state_62507__$1;
(statearr_62519_62545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (11))){
var inst_62502 = (state_62507[(2)]);
var inst_62457 = inst_62502;
var state_62507__$1 = (function (){var statearr_62520 = state_62507;
(statearr_62520[(7)] = inst_62457);

return statearr_62520;
})();
var statearr_62521_62546 = state_62507__$1;
(statearr_62521_62546[(2)] = null);

(statearr_62521_62546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (9))){
var inst_62478 = (state_62507[(12)]);
var inst_62486 = cljs.core.nth.call(null,inst_62478,(0),null);
var inst_62487 = cljs.core.nth.call(null,inst_62478,(1),null);
var state_62507__$1 = (function (){var statearr_62522 = state_62507;
(statearr_62522[(13)] = inst_62487);

return statearr_62522;
})();
var statearr_62523_62547 = state_62507__$1;
(statearr_62523_62547[(2)] = inst_62486);

(statearr_62523_62547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (5))){
var inst_62457 = (state_62507[(7)]);
var state_62507__$1 = state_62507;
var statearr_62524_62548 = state_62507__$1;
(statearr_62524_62548[(2)] = inst_62457);

(statearr_62524_62548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (14))){
var inst_62500 = (state_62507[(2)]);
var state_62507__$1 = state_62507;
var statearr_62525_62549 = state_62507__$1;
(statearr_62525_62549[(2)] = inst_62500);

(statearr_62525_62549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (16))){
var inst_62479 = (state_62507[(14)]);
var state_62507__$1 = state_62507;
var statearr_62526_62550 = state_62507__$1;
(statearr_62526_62550[(2)] = inst_62479);

(statearr_62526_62550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (10))){
var inst_62480 = (state_62507[(9)]);
var inst_62466 = (state_62507[(10)]);
var inst_62489 = cljs.core._EQ_.call(null,inst_62480,inst_62466);
var state_62507__$1 = state_62507;
if(inst_62489){
var statearr_62527_62551 = state_62507__$1;
(statearr_62527_62551[(1)] = (12));

} else {
var statearr_62528_62552 = state_62507__$1;
(statearr_62528_62552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (18))){
var inst_62498 = (state_62507[(2)]);
var state_62507__$1 = state_62507;
var statearr_62529_62553 = state_62507__$1;
(statearr_62529_62553[(2)] = inst_62498);

(statearr_62529_62553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62508 === (8))){
var inst_62480 = (state_62507[(9)]);
var inst_62478 = (state_62507[(12)]);
var inst_62478__$1 = (state_62507[(2)]);
var inst_62479 = cljs.core.nth.call(null,inst_62478__$1,(0),null);
var inst_62480__$1 = cljs.core.nth.call(null,inst_62478__$1,(1),null);
var inst_62481 = cljs.core._EQ_.call(null,inst_62480__$1,in$);
var state_62507__$1 = (function (){var statearr_62530 = state_62507;
(statearr_62530[(9)] = inst_62480__$1);

(statearr_62530[(12)] = inst_62478__$1);

(statearr_62530[(14)] = inst_62479);

return statearr_62530;
})();
if(inst_62481){
var statearr_62531_62554 = state_62507__$1;
(statearr_62531_62554[(1)] = (9));

} else {
var statearr_62532_62555 = state_62507__$1;
(statearr_62532_62555[(1)] = (10));

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
});})(c__30952__auto___62537,out))
;
return ((function (switch__30864__auto__,c__30952__auto___62537,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__30865__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__30865__auto____0 = (function (){
var statearr_62533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62533[(0)] = re_com$typeahead$debounce_$_state_machine__30865__auto__);

(statearr_62533[(1)] = (1));

return statearr_62533;
});
var re_com$typeahead$debounce_$_state_machine__30865__auto____1 = (function (state_62507){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_62507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e62534){if((e62534 instanceof Object)){
var ex__30868__auto__ = e62534;
var statearr_62535_62556 = state_62507;
(statearr_62535_62556[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62557 = state_62507;
state_62507 = G__62557;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__30865__auto__ = function(state_62507){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__30865__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__30865__auto____1.call(this,state_62507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__30865__auto____0;
re_com$typeahead$debounce_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__30865__auto____1;
return re_com$typeahead$debounce_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___62537,out))
})();
var state__30954__auto__ = (function (){var statearr_62536 = f__30953__auto__.call(null);
(statearr_62536[(6)] = c__30952__auto___62537);

return statearr_62536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___62537,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1513855144911
