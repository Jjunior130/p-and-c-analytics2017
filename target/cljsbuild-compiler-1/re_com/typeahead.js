// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__18502){
var map__18503 = p__18502;
var map__18503__$1 = ((((!((map__18503 == null)))?((((map__18503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18503):map__18503);
var args = map__18503__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18503__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__18505 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__7645__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__18505,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__18505,external_model_value));
} else {
return G__18505;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__18506,event){
var map__18507 = p__18506;
var map__18507__$1 = ((((!((map__18507 == null)))?((((map__18507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18507):map__18507);
var state = map__18507__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__18509 = event;
var G__18509__$1 = (((G__18509 instanceof cljs.core.Keyword))?G__18509.fqn:null);
switch (G__18509__$1) {
case "input-text-blurred":
var and__7633__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__7633__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not((function (){var or__7645__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18509__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__18511,event){
var map__18512 = p__18511;
var map__18512__$1 = ((((!((map__18512 == null)))?((((map__18512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18512):map__18512);
var state = map__18512__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18512__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__18514 = event;
var G__18514__$1 = (((G__18514 instanceof cljs.core.Keyword))?G__18514.fqn:null);
switch (G__18514__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__18516,new_value){
var map__18517 = p__18516;
var map__18517__$1 = ((((!((map__18517 == null)))?((((map__18517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18517):map__18517);
var state = map__18517__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18517__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__18519,suggestion){
var map__18520 = p__18519;
var map__18520__$1 = ((((!((map__18520 == null)))?((((map__18520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18520):map__18520);
var state = map__18520__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18520__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__18522 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18522,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__18522;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__18523,index){
var map__18524 = p__18523;
var map__18524__$1 = ((((!((map__18524 == null)))?((((map__18524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18524):map__18524);
var state = map__18524__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18524__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__18526 = state;
var G__18526__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18526,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__18526__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__18526__$1,suggestion):G__18526__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__18526__$2,suggestion);
} else {
return G__18526__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__18527,index){
var map__18528 = p__18527;
var map__18528__$1 = ((((!((map__18528 == null)))?((((map__18528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18528):map__18528);
var state = map__18528__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18528__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__18530){
var map__18531 = p__18530;
var map__18531__$1 = ((((!((map__18531 == null)))?((((map__18531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18531):map__18531);
var state = map__18531__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18531__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__18533 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__18533,suggestion_active_index);
} else {
return G__18533;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__18534){
var map__18535 = p__18534;
var map__18535__$1 = ((((!((map__18535 == null)))?((((map__18535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18535):map__18535);
var state = map__18535__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18535__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__18537 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__18537,re_com.typeahead.wrap(((function (){var or__7645__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__18537;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__18538){
var map__18539 = p__18538;
var map__18539__$1 = ((((!((map__18539 == null)))?((((map__18539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18539):map__18539);
var state = map__18539__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__18541 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__18541,re_com.typeahead.wrap(((function (){var or__7645__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__18541;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__18542 = state;
var G__18542__$1 = re_com.typeahead.clear_suggestions(G__18542)
;
var G__18542__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18542__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__18542__$2,null);
} else {
return G__18542__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__18543){
var map__18544 = p__18543;
var map__18544__$1 = ((((!((map__18544 == null)))?((((map__18544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18544):map__18544);
var state = map__18544__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18544__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18544__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
var G__18546 = state;
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__7633__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_blurred);
} else {
return and__7633__auto__;
}
})())){
return re_com.typeahead.update_model(G__18546,input_text);
} else {
return G__18546;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),cljs.core.cst$kw$data_DASH_source,data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = (function (){var G__18548 = text;
var G__18549 = ((function (G__18548){
return (function (p1__18547_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__18547_SHARP_);
});})(G__18548))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__18548,G__18549) : data_source.call(null,G__18548,G__18549));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__16518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto__){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto__){
return (function (state_18566){
var state_val_18567 = (state_18566[(1)]);
if((state_val_18567 === (1))){
var state_18566__$1 = state_18566;
var statearr_18568_18580 = state_18566__$1;
(statearr_18568_18580[(2)] = null);

(statearr_18568_18580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18567 === (2))){
var state_18566__$1 = state_18566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18566__$1,(4),c_search);
} else {
if((state_val_18567 === (3))){
var inst_18564 = (state_18566[(2)]);
var state_18566__$1 = state_18566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18566__$1,inst_18564);
} else {
if((state_val_18567 === (4))){
var inst_18552 = (state_18566[(7)]);
var inst_18552__$1 = (state_18566[(2)]);
var inst_18553 = cljs.core.deref(state_atom);
var inst_18554 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_18553);
var inst_18555 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_18552__$1);
var state_18566__$1 = (function (){var statearr_18569 = state_18566;
(statearr_18569[(8)] = inst_18554);

(statearr_18569[(7)] = inst_18552__$1);

return statearr_18569;
})();
if(inst_18555){
var statearr_18570_18581 = state_18566__$1;
(statearr_18570_18581[(1)] = (5));

} else {
var statearr_18571_18582 = state_18566__$1;
(statearr_18571_18582[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18567 === (5))){
var inst_18557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var state_18566__$1 = state_18566;
var statearr_18572_18583 = state_18566__$1;
(statearr_18572_18583[(2)] = inst_18557);

(statearr_18572_18583[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18567 === (6))){
var inst_18554 = (state_18566[(8)]);
var inst_18552 = (state_18566[(7)]);
var inst_18559 = re_com.typeahead.search_data_source_BANG_(inst_18554,state_atom,inst_18552);
var state_18566__$1 = state_18566;
var statearr_18573_18584 = state_18566__$1;
(statearr_18573_18584[(2)] = inst_18559);

(statearr_18573_18584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18567 === (7))){
var inst_18561 = (state_18566[(2)]);
var state_18566__$1 = (function (){var statearr_18574 = state_18566;
(statearr_18574[(9)] = inst_18561);

return statearr_18574;
})();
var statearr_18575_18585 = state_18566__$1;
(statearr_18575_18585[(2)] = null);

(statearr_18575_18585[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16518__auto__))
;
return ((function (switch__16418__auto__,c__16518__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto____0 = (function (){
var statearr_18576 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18576[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto__);

(statearr_18576[(1)] = (1));

return statearr_18576;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto____1 = (function (state_18566){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18566);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18577){if((e18577 instanceof Object)){
var ex__16422__auto__ = e18577;
var statearr_18578_18586 = state_18566;
(statearr_18578_18586[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18566);

return cljs.core.cst$kw$recur;
} else {
throw e18577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18587 = state_18566;
state_18566 = G__18587;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto__ = function(state_18566){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto____1.call(this,state_18566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto__))
})();
var state__16520__auto__ = (function (){var statearr_18579 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18579[(6)] = c__16518__auto__);

return statearr_18579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto__))
);

return c__16518__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__18589 = cljs.core.deref(state_atom);
var map__18589__$1 = ((((!((map__18589 == null)))?((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18589):map__18589);
var state = map__18589__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_(new_text)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__18589,map__18589__$1,state,input_text,c_input){
return (function (p1__18588_SHARP_){
var G__18591 = p1__18588_SHARP_;
var G__18591__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18591,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__18591__$1,new_text);
} else {
return G__18591__$1;
}
});})(map__18589,map__18589__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__18592 = cljs.core._EQ_;
var expr__18593 = event.which;
if(cljs.core.truth_((pred__18592.cljs$core$IFn$_invoke$arity$2 ? pred__18592.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__18593) : pred__18592.call(null,goog.events.KeyCodes.UP,expr__18593)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__18592.cljs$core$IFn$_invoke$arity$2 ? pred__18592.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__18593) : pred__18592.call(null,goog.events.KeyCodes.DOWN,expr__18593)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__18592.cljs$core$IFn$_invoke$arity$2 ? pred__18592.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__18593) : pred__18592.call(null,goog.events.KeyCodes.ENTER,expr__18593)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__18592.cljs$core$IFn$_invoke$arity$2 ? pred__18592.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__18593) : pred__18592.call(null,goog.events.KeyCodes.ESC,expr__18593)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_((pred__18592.cljs$core$IFn$_invoke$arity$2 ? pred__18592.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__18593) : pred__18592.call(null,goog.events.KeyCodes.TAB,expr__18593)))){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"object | atom",cljs.core.cst$kw$description,"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(250),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.integer_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_suggestion,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"render fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"suggestion -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__8821__auto__ = [];
var len__8814__auto___18617 = arguments.length;
var i__8815__auto___18618 = (0);
while(true){
if((i__8815__auto___18618 < len__8814__auto___18617)){
args__8821__auto__.push((arguments[i__8815__auto___18618]));

var G__18619 = (i__8815__auto___18618 + (1));
i__8815__auto___18618 = G__18619;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__18597){
var map__18598 = p__18597;
var map__18598__$1 = ((((!((map__18598 == null)))?((((map__18598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18598):map__18598);
var args = map__18598__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__18600 = re_com.typeahead.make_typeahead_state(args);
var map__18600__$1 = ((((!((map__18600 == null)))?((((map__18600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18600):map__18600);
var state = map__18600__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18600__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18600__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function() { 
var G__18620__delegate = function (p__18602){
var map__18603 = p__18602;
var map__18603__$1 = ((((!((map__18603 == null)))?((((map__18603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18603):map__18603);
var args__$1 = map__18603__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$data_DASH_source);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$class);
var _attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$_attr);
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0))))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__18605 = cljs.core.deref(state_atom);
var map__18605__$1 = ((((!((map__18605 == null)))?((((map__18605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18605):map__18605);
var state__$1 = map__18605__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,cljs.core.cst$kw$external_DASH_model);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__7645__auto__ = width;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__7645__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead-suggestions-container",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,"rc-typeahead-throbber"], null)], null):null),(function (){var iter__8453__auto__ = ((function (map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function re_com$typeahead$iter__18607(s__18608){
return (new cljs.core.LazySeq(null,((function (map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function (){
var s__18608__$1 = s__18608;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18608__$1);
if(temp__4657__auto__){
var s__18608__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18608__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__18608__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__18610 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__18609 = (0);
while(true){
if((i__18609 < size__8452__auto__)){
var vec__18611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__18609);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18611,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18611,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__18610,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__18609,selected_QMARK_,vec__18611,i,s,c__8451__auto__,size__8452__auto__,b__18610,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__18609,selected_QMARK_,vec__18611,i,s,c__8451__auto__,size__8452__auto__,b__18610,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__18609,selected_QMARK_,vec__18611,i,s,c__8451__auto__,size__8452__auto__,b__18610,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function (p1__18595_SHARP_){
p1__18595_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__18609,selected_QMARK_,vec__18611,i,s,c__8451__auto__,size__8452__auto__,b__18610,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__18621 = (i__18609 + (1));
i__18609 = G__18621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18610),re_com$typeahead$iter__18607(cljs.core.chunk_rest(s__18608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18610),null);
}
} else {
var vec__18614 = cljs.core.first(s__18608__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__18614,i,s,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__18614,i,s,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__18614,i,s,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args){
return (function (p1__18595_SHARP_){
p1__18595_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__18614,i,s,s__18608__$2,temp__4657__auto__,map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$iter__18607(cljs.core.rest(s__18608__$2)));
}
} else {
return null;
}
break;
}
});})(map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
,null,null));
});})(map__18605,map__18605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__18603,map__18603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
;
return iter__8453__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__18620 = function (var_args){
var p__18602 = null;
if (arguments.length > 0) {
var G__18622__i = 0, G__18622__a = new Array(arguments.length -  0);
while (G__18622__i < G__18622__a.length) {G__18622__a[G__18622__i] = arguments[G__18622__i + 0]; ++G__18622__i;}
  p__18602 = new cljs.core.IndexedSeq(G__18622__a,0,null);
} 
return G__18620__delegate.call(this,p__18602);};
G__18620.cljs$lang$maxFixedArity = 0;
G__18620.cljs$lang$applyTo = (function (arglist__18623){
var p__18602 = cljs.core.seq(arglist__18623);
return G__18620__delegate(p__18602);
});
G__18620.cljs$core$IFn$_invoke$arity$variadic = G__18620__delegate;
return G__18620;
})()
;
;})(map__18600,map__18600__$1,state,c_search,c_input,state_atom,input_text_model,map__18598,map__18598__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq18596){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18596));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__16518__auto___18704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16518__auto___18704,out){
return (function (){
var f__16519__auto__ = (function (){var switch__16418__auto__ = ((function (c__16518__auto___18704,out){
return (function (state_18674){
var state_val_18675 = (state_18674[(1)]);
if((state_val_18675 === (7))){
var inst_18629 = (state_18674[(2)]);
var state_18674__$1 = state_18674;
var statearr_18676_18705 = state_18674__$1;
(statearr_18676_18705[(2)] = inst_18629);

(statearr_18676_18705[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (1))){
var inst_18624 = null;
var state_18674__$1 = (function (){var statearr_18677 = state_18674;
(statearr_18677[(7)] = inst_18624);

return statearr_18677;
})();
var statearr_18678_18706 = state_18674__$1;
(statearr_18678_18706[(2)] = null);

(statearr_18678_18706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (4))){
var state_18674__$1 = state_18674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18674__$1,(7),in$);
} else {
if((state_val_18675 === (15))){
var inst_18659 = (state_18674[(2)]);
var state_18674__$1 = (function (){var statearr_18679 = state_18674;
(statearr_18679[(8)] = inst_18659);

return statearr_18679;
})();
var statearr_18680_18707 = state_18674__$1;
(statearr_18680_18707[(2)] = null);

(statearr_18680_18707[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (13))){
var inst_18647 = (state_18674[(9)]);
var inst_18661 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18647,cljs.core.cst$kw$default);
var state_18674__$1 = state_18674;
if(inst_18661){
var statearr_18681_18708 = state_18674__$1;
(statearr_18681_18708[(1)] = (16));

} else {
var statearr_18682_18709 = state_18674__$1;
(statearr_18682_18709[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (6))){
var inst_18633 = (state_18674[(10)]);
var inst_18632 = (state_18674[(2)]);
var inst_18633__$1 = cljs.core.async.timeout(ms);
var inst_18641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18642 = [in$,inst_18633__$1];
var inst_18643 = (new cljs.core.PersistentVector(null,2,(5),inst_18641,inst_18642,null));
var state_18674__$1 = (function (){var statearr_18683 = state_18674;
(statearr_18683[(10)] = inst_18633__$1);

(statearr_18683[(11)] = inst_18632);

return statearr_18683;
})();
return cljs.core.async.ioc_alts_BANG_(state_18674__$1,(8),inst_18643);
} else {
if((state_val_18675 === (17))){
var state_18674__$1 = state_18674;
var statearr_18684_18710 = state_18674__$1;
(statearr_18684_18710[(2)] = null);

(statearr_18684_18710[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (3))){
var inst_18672 = (state_18674[(2)]);
var state_18674__$1 = state_18674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18674__$1,inst_18672);
} else {
if((state_val_18675 === (12))){
var inst_18632 = (state_18674[(11)]);
var state_18674__$1 = state_18674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18674__$1,(15),out,inst_18632);
} else {
if((state_val_18675 === (2))){
var inst_18624 = (state_18674[(7)]);
var inst_18626 = (inst_18624 == null);
var state_18674__$1 = state_18674;
if(cljs.core.truth_(inst_18626)){
var statearr_18685_18711 = state_18674__$1;
(statearr_18685_18711[(1)] = (4));

} else {
var statearr_18686_18712 = state_18674__$1;
(statearr_18686_18712[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (11))){
var inst_18669 = (state_18674[(2)]);
var inst_18624 = inst_18669;
var state_18674__$1 = (function (){var statearr_18687 = state_18674;
(statearr_18687[(7)] = inst_18624);

return statearr_18687;
})();
var statearr_18688_18713 = state_18674__$1;
(statearr_18688_18713[(2)] = null);

(statearr_18688_18713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (9))){
var inst_18645 = (state_18674[(12)]);
var inst_18653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18645,(0),null);
var inst_18654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18645,(1),null);
var state_18674__$1 = (function (){var statearr_18689 = state_18674;
(statearr_18689[(13)] = inst_18654);

return statearr_18689;
})();
var statearr_18690_18714 = state_18674__$1;
(statearr_18690_18714[(2)] = inst_18653);

(statearr_18690_18714[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (5))){
var inst_18624 = (state_18674[(7)]);
var state_18674__$1 = state_18674;
var statearr_18691_18715 = state_18674__$1;
(statearr_18691_18715[(2)] = inst_18624);

(statearr_18691_18715[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (14))){
var inst_18667 = (state_18674[(2)]);
var state_18674__$1 = state_18674;
var statearr_18692_18716 = state_18674__$1;
(statearr_18692_18716[(2)] = inst_18667);

(statearr_18692_18716[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (16))){
var inst_18646 = (state_18674[(14)]);
var state_18674__$1 = state_18674;
var statearr_18693_18717 = state_18674__$1;
(statearr_18693_18717[(2)] = inst_18646);

(statearr_18693_18717[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (10))){
var inst_18633 = (state_18674[(10)]);
var inst_18647 = (state_18674[(9)]);
var inst_18656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18647,inst_18633);
var state_18674__$1 = state_18674;
if(inst_18656){
var statearr_18694_18718 = state_18674__$1;
(statearr_18694_18718[(1)] = (12));

} else {
var statearr_18695_18719 = state_18674__$1;
(statearr_18695_18719[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (18))){
var inst_18665 = (state_18674[(2)]);
var state_18674__$1 = state_18674;
var statearr_18696_18720 = state_18674__$1;
(statearr_18696_18720[(2)] = inst_18665);

(statearr_18696_18720[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18675 === (8))){
var inst_18647 = (state_18674[(9)]);
var inst_18645 = (state_18674[(12)]);
var inst_18645__$1 = (state_18674[(2)]);
var inst_18646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18645__$1,(0),null);
var inst_18647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18645__$1,(1),null);
var inst_18648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18647__$1,in$);
var state_18674__$1 = (function (){var statearr_18697 = state_18674;
(statearr_18697[(14)] = inst_18646);

(statearr_18697[(9)] = inst_18647__$1);

(statearr_18697[(12)] = inst_18645__$1);

return statearr_18697;
})();
if(inst_18648){
var statearr_18698_18721 = state_18674__$1;
(statearr_18698_18721[(1)] = (9));

} else {
var statearr_18699_18722 = state_18674__$1;
(statearr_18699_18722[(1)] = (10));

}

return cljs.core.cst$kw$recur;
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
});})(c__16518__auto___18704,out))
;
return ((function (switch__16418__auto__,c__16518__auto___18704,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__16419__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__16419__auto____0 = (function (){
var statearr_18700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18700[(0)] = re_com$typeahead$debounce_$_state_machine__16419__auto__);

(statearr_18700[(1)] = (1));

return statearr_18700;
});
var re_com$typeahead$debounce_$_state_machine__16419__auto____1 = (function (state_18674){
while(true){
var ret_value__16420__auto__ = (function (){try{while(true){
var result__16421__auto__ = switch__16418__auto__(state_18674);
if(cljs.core.keyword_identical_QMARK_(result__16421__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16421__auto__;
}
break;
}
}catch (e18701){if((e18701 instanceof Object)){
var ex__16422__auto__ = e18701;
var statearr_18702_18723 = state_18674;
(statearr_18702_18723[(5)] = ex__16422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18674);

return cljs.core.cst$kw$recur;
} else {
throw e18701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16420__auto__,cljs.core.cst$kw$recur)){
var G__18724 = state_18674;
state_18674 = G__18724;
continue;
} else {
return ret_value__16420__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__16419__auto__ = function(state_18674){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__16419__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__16419__auto____1.call(this,state_18674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__16419__auto____0;
re_com$typeahead$debounce_$_state_machine__16419__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__16419__auto____1;
return re_com$typeahead$debounce_$_state_machine__16419__auto__;
})()
;})(switch__16418__auto__,c__16518__auto___18704,out))
})();
var state__16520__auto__ = (function (){var statearr_18703 = (f__16519__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16519__auto__.cljs$core$IFn$_invoke$arity$0() : f__16519__auto__.call(null));
(statearr_18703[(6)] = c__16518__auto___18704);

return statearr_18703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16520__auto__);
});})(c__16518__auto___18704,out))
);


return out;
});
