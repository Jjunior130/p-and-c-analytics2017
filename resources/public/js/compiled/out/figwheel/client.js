// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39656){if((e39656 instanceof Error)){
var e = e39656;
return "Error: Unable to stringify";
} else {
throw e39656;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39659 = arguments.length;
switch (G__39659) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39657_SHARP_){
if(typeof p1__39657_SHARP_ === 'string'){
return p1__39657_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39657_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39662 = arguments.length;
var i__28365__auto___39663 = (0);
while(true){
if((i__28365__auto___39663 < len__28364__auto___39662)){
args__28371__auto__.push((arguments[i__28365__auto___39663]));

var G__39664 = (i__28365__auto___39663 + (1));
i__28365__auto___39663 = G__39664;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39661){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39661));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39666 = arguments.length;
var i__28365__auto___39667 = (0);
while(true){
if((i__28365__auto___39667 < len__28364__auto___39666)){
args__28371__auto__.push((arguments[i__28365__auto___39667]));

var G__39668 = (i__28365__auto___39667 + (1));
i__28365__auto___39667 = G__39668;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39665){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39665));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39669){
var map__39670 = p__39669;
var map__39670__$1 = ((((!((map__39670 == null)))?((((map__39670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39670):map__39670);
var message = cljs.core.get.call(null,map__39670__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39670__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27195__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27183__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27183__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27183__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29992__auto___39749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___39749,ch){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___39749,ch){
return (function (state_39721){
var state_val_39722 = (state_39721[(1)]);
if((state_val_39722 === (7))){
var inst_39717 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39723_39750 = state_39721__$1;
(statearr_39723_39750[(2)] = inst_39717);

(statearr_39723_39750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (1))){
var state_39721__$1 = state_39721;
var statearr_39724_39751 = state_39721__$1;
(statearr_39724_39751[(2)] = null);

(statearr_39724_39751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (4))){
var inst_39674 = (state_39721[(7)]);
var inst_39674__$1 = (state_39721[(2)]);
var state_39721__$1 = (function (){var statearr_39725 = state_39721;
(statearr_39725[(7)] = inst_39674__$1);

return statearr_39725;
})();
if(cljs.core.truth_(inst_39674__$1)){
var statearr_39726_39752 = state_39721__$1;
(statearr_39726_39752[(1)] = (5));

} else {
var statearr_39727_39753 = state_39721__$1;
(statearr_39727_39753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (15))){
var inst_39681 = (state_39721[(8)]);
var inst_39696 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39681);
var inst_39697 = cljs.core.first.call(null,inst_39696);
var inst_39698 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39697);
var inst_39699 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39698)].join('');
var inst_39700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39699);
var state_39721__$1 = state_39721;
var statearr_39728_39754 = state_39721__$1;
(statearr_39728_39754[(2)] = inst_39700);

(statearr_39728_39754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (13))){
var inst_39705 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39729_39755 = state_39721__$1;
(statearr_39729_39755[(2)] = inst_39705);

(statearr_39729_39755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (6))){
var state_39721__$1 = state_39721;
var statearr_39730_39756 = state_39721__$1;
(statearr_39730_39756[(2)] = null);

(statearr_39730_39756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (17))){
var inst_39703 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39731_39757 = state_39721__$1;
(statearr_39731_39757[(2)] = inst_39703);

(statearr_39731_39757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (3))){
var inst_39719 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39721__$1,inst_39719);
} else {
if((state_val_39722 === (12))){
var inst_39680 = (state_39721[(9)]);
var inst_39694 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39680,opts);
var state_39721__$1 = state_39721;
if(cljs.core.truth_(inst_39694)){
var statearr_39732_39758 = state_39721__$1;
(statearr_39732_39758[(1)] = (15));

} else {
var statearr_39733_39759 = state_39721__$1;
(statearr_39733_39759[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (2))){
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39721__$1,(4),ch);
} else {
if((state_val_39722 === (11))){
var inst_39681 = (state_39721[(8)]);
var inst_39686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39687 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39681);
var inst_39688 = cljs.core.async.timeout.call(null,(1000));
var inst_39689 = [inst_39687,inst_39688];
var inst_39690 = (new cljs.core.PersistentVector(null,2,(5),inst_39686,inst_39689,null));
var state_39721__$1 = state_39721;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39721__$1,(14),inst_39690);
} else {
if((state_val_39722 === (9))){
var inst_39681 = (state_39721[(8)]);
var inst_39707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39708 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39681);
var inst_39709 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39708);
var inst_39710 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39709)].join('');
var inst_39711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39710);
var state_39721__$1 = (function (){var statearr_39734 = state_39721;
(statearr_39734[(10)] = inst_39707);

return statearr_39734;
})();
var statearr_39735_39760 = state_39721__$1;
(statearr_39735_39760[(2)] = inst_39711);

(statearr_39735_39760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (5))){
var inst_39674 = (state_39721[(7)]);
var inst_39676 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39677 = (new cljs.core.PersistentArrayMap(null,2,inst_39676,null));
var inst_39678 = (new cljs.core.PersistentHashSet(null,inst_39677,null));
var inst_39679 = figwheel.client.focus_msgs.call(null,inst_39678,inst_39674);
var inst_39680 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39679);
var inst_39681 = cljs.core.first.call(null,inst_39679);
var inst_39682 = figwheel.client.autoload_QMARK_.call(null);
var state_39721__$1 = (function (){var statearr_39736 = state_39721;
(statearr_39736[(8)] = inst_39681);

(statearr_39736[(9)] = inst_39680);

return statearr_39736;
})();
if(cljs.core.truth_(inst_39682)){
var statearr_39737_39761 = state_39721__$1;
(statearr_39737_39761[(1)] = (8));

} else {
var statearr_39738_39762 = state_39721__$1;
(statearr_39738_39762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (14))){
var inst_39692 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39739_39763 = state_39721__$1;
(statearr_39739_39763[(2)] = inst_39692);

(statearr_39739_39763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (16))){
var state_39721__$1 = state_39721;
var statearr_39740_39764 = state_39721__$1;
(statearr_39740_39764[(2)] = null);

(statearr_39740_39764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (10))){
var inst_39713 = (state_39721[(2)]);
var state_39721__$1 = (function (){var statearr_39741 = state_39721;
(statearr_39741[(11)] = inst_39713);

return statearr_39741;
})();
var statearr_39742_39765 = state_39721__$1;
(statearr_39742_39765[(2)] = null);

(statearr_39742_39765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (8))){
var inst_39680 = (state_39721[(9)]);
var inst_39684 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39680,opts);
var state_39721__$1 = state_39721;
if(cljs.core.truth_(inst_39684)){
var statearr_39743_39766 = state_39721__$1;
(statearr_39743_39766[(1)] = (11));

} else {
var statearr_39744_39767 = state_39721__$1;
(statearr_39744_39767[(1)] = (12));

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
});})(c__29992__auto___39749,ch))
;
return ((function (switch__29971__auto__,c__29992__auto___39749,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29972__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29972__auto____0 = (function (){
var statearr_39745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39745[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29972__auto__);

(statearr_39745[(1)] = (1));

return statearr_39745;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29972__auto____1 = (function (state_39721){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_39721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e39746){if((e39746 instanceof Object)){
var ex__29975__auto__ = e39746;
var statearr_39747_39768 = state_39721;
(statearr_39747_39768[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39769 = state_39721;
state_39721 = G__39769;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29972__auto__ = function(state_39721){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29972__auto____1.call(this,state_39721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29972__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29972__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___39749,ch))
})();
var state__29994__auto__ = (function (){var statearr_39748 = f__29993__auto__.call(null);
(statearr_39748[(6)] = c__29992__auto___39749);

return statearr_39748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___39749,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39770_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39770_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39772 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39772){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39771){if((e39771 instanceof Error)){
var e = e39771;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39772], null));
} else {
var e = e39771;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39772))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39773){
var map__39774 = p__39773;
var map__39774__$1 = ((((!((map__39774 == null)))?((((map__39774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39774):map__39774);
var opts = map__39774__$1;
var build_id = cljs.core.get.call(null,map__39774__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39774,map__39774__$1,opts,build_id){
return (function (p__39776){
var vec__39777 = p__39776;
var seq__39778 = cljs.core.seq.call(null,vec__39777);
var first__39779 = cljs.core.first.call(null,seq__39778);
var seq__39778__$1 = cljs.core.next.call(null,seq__39778);
var map__39780 = first__39779;
var map__39780__$1 = ((((!((map__39780 == null)))?((((map__39780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39780):map__39780);
var msg = map__39780__$1;
var msg_name = cljs.core.get.call(null,map__39780__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39778__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39777,seq__39778,first__39779,seq__39778__$1,map__39780,map__39780__$1,msg,msg_name,_,map__39774,map__39774__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39777,seq__39778,first__39779,seq__39778__$1,map__39780,map__39780__$1,msg,msg_name,_,map__39774,map__39774__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39774,map__39774__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39782){
var vec__39783 = p__39782;
var seq__39784 = cljs.core.seq.call(null,vec__39783);
var first__39785 = cljs.core.first.call(null,seq__39784);
var seq__39784__$1 = cljs.core.next.call(null,seq__39784);
var map__39786 = first__39785;
var map__39786__$1 = ((((!((map__39786 == null)))?((((map__39786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39786):map__39786);
var msg = map__39786__$1;
var msg_name = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39784__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39788){
var map__39789 = p__39788;
var map__39789__$1 = ((((!((map__39789 == null)))?((((map__39789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39789):map__39789);
var on_compile_warning = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39789,map__39789__$1,on_compile_warning,on_compile_fail){
return (function (p__39791){
var vec__39792 = p__39791;
var seq__39793 = cljs.core.seq.call(null,vec__39792);
var first__39794 = cljs.core.first.call(null,seq__39793);
var seq__39793__$1 = cljs.core.next.call(null,seq__39793);
var map__39795 = first__39794;
var map__39795__$1 = ((((!((map__39795 == null)))?((((map__39795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39795):map__39795);
var msg = map__39795__$1;
var msg_name = cljs.core.get.call(null,map__39795__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39793__$1;
var pred__39797 = cljs.core._EQ_;
var expr__39798 = msg_name;
if(cljs.core.truth_(pred__39797.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39798))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39797.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39798))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39789,map__39789__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__,msg_hist,msg_names,msg){
return (function (state_39887){
var state_val_39888 = (state_39887[(1)]);
if((state_val_39888 === (7))){
var inst_39807 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39807)){
var statearr_39889_39936 = state_39887__$1;
(statearr_39889_39936[(1)] = (8));

} else {
var statearr_39890_39937 = state_39887__$1;
(statearr_39890_39937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (20))){
var inst_39881 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39891_39938 = state_39887__$1;
(statearr_39891_39938[(2)] = inst_39881);

(statearr_39891_39938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (27))){
var inst_39877 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39892_39939 = state_39887__$1;
(statearr_39892_39939[(2)] = inst_39877);

(statearr_39892_39939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (1))){
var inst_39800 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39800)){
var statearr_39893_39940 = state_39887__$1;
(statearr_39893_39940[(1)] = (2));

} else {
var statearr_39894_39941 = state_39887__$1;
(statearr_39894_39941[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (24))){
var inst_39879 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39895_39942 = state_39887__$1;
(statearr_39895_39942[(2)] = inst_39879);

(statearr_39895_39942[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (4))){
var inst_39885 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39887__$1,inst_39885);
} else {
if((state_val_39888 === (15))){
var inst_39883 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39896_39943 = state_39887__$1;
(statearr_39896_39943[(2)] = inst_39883);

(statearr_39896_39943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (21))){
var inst_39836 = (state_39887[(2)]);
var inst_39837 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39838 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39837);
var state_39887__$1 = (function (){var statearr_39897 = state_39887;
(statearr_39897[(7)] = inst_39836);

return statearr_39897;
})();
var statearr_39898_39944 = state_39887__$1;
(statearr_39898_39944[(2)] = inst_39838);

(statearr_39898_39944[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (31))){
var inst_39866 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39866)){
var statearr_39899_39945 = state_39887__$1;
(statearr_39899_39945[(1)] = (34));

} else {
var statearr_39900_39946 = state_39887__$1;
(statearr_39900_39946[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (32))){
var inst_39875 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39901_39947 = state_39887__$1;
(statearr_39901_39947[(2)] = inst_39875);

(statearr_39901_39947[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (33))){
var inst_39862 = (state_39887[(2)]);
var inst_39863 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39864 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39863);
var state_39887__$1 = (function (){var statearr_39902 = state_39887;
(statearr_39902[(8)] = inst_39862);

return statearr_39902;
})();
var statearr_39903_39948 = state_39887__$1;
(statearr_39903_39948[(2)] = inst_39864);

(statearr_39903_39948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (13))){
var inst_39821 = figwheel.client.heads_up.clear.call(null);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(16),inst_39821);
} else {
if((state_val_39888 === (22))){
var inst_39842 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39843 = figwheel.client.heads_up.append_warning_message.call(null,inst_39842);
var state_39887__$1 = state_39887;
var statearr_39904_39949 = state_39887__$1;
(statearr_39904_39949[(2)] = inst_39843);

(statearr_39904_39949[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (36))){
var inst_39873 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39905_39950 = state_39887__$1;
(statearr_39905_39950[(2)] = inst_39873);

(statearr_39905_39950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (29))){
var inst_39853 = (state_39887[(2)]);
var inst_39854 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39855 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39854);
var state_39887__$1 = (function (){var statearr_39906 = state_39887;
(statearr_39906[(9)] = inst_39853);

return statearr_39906;
})();
var statearr_39907_39951 = state_39887__$1;
(statearr_39907_39951[(2)] = inst_39855);

(statearr_39907_39951[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (6))){
var inst_39802 = (state_39887[(10)]);
var state_39887__$1 = state_39887;
var statearr_39908_39952 = state_39887__$1;
(statearr_39908_39952[(2)] = inst_39802);

(statearr_39908_39952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (28))){
var inst_39849 = (state_39887[(2)]);
var inst_39850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39851 = figwheel.client.heads_up.display_warning.call(null,inst_39850);
var state_39887__$1 = (function (){var statearr_39909 = state_39887;
(statearr_39909[(11)] = inst_39849);

return statearr_39909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(29),inst_39851);
} else {
if((state_val_39888 === (25))){
var inst_39847 = figwheel.client.heads_up.clear.call(null);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(28),inst_39847);
} else {
if((state_val_39888 === (34))){
var inst_39868 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(37),inst_39868);
} else {
if((state_val_39888 === (17))){
var inst_39827 = (state_39887[(2)]);
var inst_39828 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39829 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39828);
var state_39887__$1 = (function (){var statearr_39910 = state_39887;
(statearr_39910[(12)] = inst_39827);

return statearr_39910;
})();
var statearr_39911_39953 = state_39887__$1;
(statearr_39911_39953[(2)] = inst_39829);

(statearr_39911_39953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (3))){
var inst_39819 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39819)){
var statearr_39912_39954 = state_39887__$1;
(statearr_39912_39954[(1)] = (13));

} else {
var statearr_39913_39955 = state_39887__$1;
(statearr_39913_39955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (12))){
var inst_39815 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39914_39956 = state_39887__$1;
(statearr_39914_39956[(2)] = inst_39815);

(statearr_39914_39956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (2))){
var inst_39802 = (state_39887[(10)]);
var inst_39802__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39887__$1 = (function (){var statearr_39915 = state_39887;
(statearr_39915[(10)] = inst_39802__$1);

return statearr_39915;
})();
if(cljs.core.truth_(inst_39802__$1)){
var statearr_39916_39957 = state_39887__$1;
(statearr_39916_39957[(1)] = (5));

} else {
var statearr_39917_39958 = state_39887__$1;
(statearr_39917_39958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (23))){
var inst_39845 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39845)){
var statearr_39918_39959 = state_39887__$1;
(statearr_39918_39959[(1)] = (25));

} else {
var statearr_39919_39960 = state_39887__$1;
(statearr_39919_39960[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (35))){
var state_39887__$1 = state_39887;
var statearr_39920_39961 = state_39887__$1;
(statearr_39920_39961[(2)] = null);

(statearr_39920_39961[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (19))){
var inst_39840 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39840)){
var statearr_39921_39962 = state_39887__$1;
(statearr_39921_39962[(1)] = (22));

} else {
var statearr_39922_39963 = state_39887__$1;
(statearr_39922_39963[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (11))){
var inst_39811 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39923_39964 = state_39887__$1;
(statearr_39923_39964[(2)] = inst_39811);

(statearr_39923_39964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (9))){
var inst_39813 = figwheel.client.heads_up.clear.call(null);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(12),inst_39813);
} else {
if((state_val_39888 === (5))){
var inst_39804 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39887__$1 = state_39887;
var statearr_39924_39965 = state_39887__$1;
(statearr_39924_39965[(2)] = inst_39804);

(statearr_39924_39965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (14))){
var inst_39831 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39831)){
var statearr_39925_39966 = state_39887__$1;
(statearr_39925_39966[(1)] = (18));

} else {
var statearr_39926_39967 = state_39887__$1;
(statearr_39926_39967[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (26))){
var inst_39857 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39857)){
var statearr_39927_39968 = state_39887__$1;
(statearr_39927_39968[(1)] = (30));

} else {
var statearr_39928_39969 = state_39887__$1;
(statearr_39928_39969[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (16))){
var inst_39823 = (state_39887[(2)]);
var inst_39824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39825 = figwheel.client.heads_up.display_exception.call(null,inst_39824);
var state_39887__$1 = (function (){var statearr_39929 = state_39887;
(statearr_39929[(13)] = inst_39823);

return statearr_39929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(17),inst_39825);
} else {
if((state_val_39888 === (30))){
var inst_39859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39860 = figwheel.client.heads_up.display_warning.call(null,inst_39859);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(33),inst_39860);
} else {
if((state_val_39888 === (10))){
var inst_39817 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39930_39970 = state_39887__$1;
(statearr_39930_39970[(2)] = inst_39817);

(statearr_39930_39970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (18))){
var inst_39833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39834 = figwheel.client.heads_up.display_exception.call(null,inst_39833);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(21),inst_39834);
} else {
if((state_val_39888 === (37))){
var inst_39870 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39931_39971 = state_39887__$1;
(statearr_39931_39971[(2)] = inst_39870);

(statearr_39931_39971[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (8))){
var inst_39809 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(11),inst_39809);
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
}
});})(c__29992__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29971__auto__,c__29992__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto____0 = (function (){
var statearr_39932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39932[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto__);

(statearr_39932[(1)] = (1));

return statearr_39932;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto____1 = (function (state_39887){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_39887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e39933){if((e39933 instanceof Object)){
var ex__29975__auto__ = e39933;
var statearr_39934_39972 = state_39887;
(statearr_39934_39972[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39973 = state_39887;
state_39887 = G__39973;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto__ = function(state_39887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto____1.call(this,state_39887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__,msg_hist,msg_names,msg))
})();
var state__29994__auto__ = (function (){var statearr_39935 = f__29993__auto__.call(null);
(statearr_39935[(6)] = c__29992__auto__);

return statearr_39935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__,msg_hist,msg_names,msg))
);

return c__29992__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29992__auto___40002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto___40002,ch){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto___40002,ch){
return (function (state_39988){
var state_val_39989 = (state_39988[(1)]);
if((state_val_39989 === (1))){
var state_39988__$1 = state_39988;
var statearr_39990_40003 = state_39988__$1;
(statearr_39990_40003[(2)] = null);

(statearr_39990_40003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39989 === (2))){
var state_39988__$1 = state_39988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39988__$1,(4),ch);
} else {
if((state_val_39989 === (3))){
var inst_39986 = (state_39988[(2)]);
var state_39988__$1 = state_39988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39988__$1,inst_39986);
} else {
if((state_val_39989 === (4))){
var inst_39976 = (state_39988[(7)]);
var inst_39976__$1 = (state_39988[(2)]);
var state_39988__$1 = (function (){var statearr_39991 = state_39988;
(statearr_39991[(7)] = inst_39976__$1);

return statearr_39991;
})();
if(cljs.core.truth_(inst_39976__$1)){
var statearr_39992_40004 = state_39988__$1;
(statearr_39992_40004[(1)] = (5));

} else {
var statearr_39993_40005 = state_39988__$1;
(statearr_39993_40005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39989 === (5))){
var inst_39976 = (state_39988[(7)]);
var inst_39978 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39976);
var state_39988__$1 = state_39988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39988__$1,(8),inst_39978);
} else {
if((state_val_39989 === (6))){
var state_39988__$1 = state_39988;
var statearr_39994_40006 = state_39988__$1;
(statearr_39994_40006[(2)] = null);

(statearr_39994_40006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39989 === (7))){
var inst_39984 = (state_39988[(2)]);
var state_39988__$1 = state_39988;
var statearr_39995_40007 = state_39988__$1;
(statearr_39995_40007[(2)] = inst_39984);

(statearr_39995_40007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39989 === (8))){
var inst_39980 = (state_39988[(2)]);
var state_39988__$1 = (function (){var statearr_39996 = state_39988;
(statearr_39996[(8)] = inst_39980);

return statearr_39996;
})();
var statearr_39997_40008 = state_39988__$1;
(statearr_39997_40008[(2)] = null);

(statearr_39997_40008[(1)] = (2));


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
});})(c__29992__auto___40002,ch))
;
return ((function (switch__29971__auto__,c__29992__auto___40002,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29972__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29972__auto____0 = (function (){
var statearr_39998 = [null,null,null,null,null,null,null,null,null];
(statearr_39998[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29972__auto__);

(statearr_39998[(1)] = (1));

return statearr_39998;
});
var figwheel$client$heads_up_plugin_$_state_machine__29972__auto____1 = (function (state_39988){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_39988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e39999){if((e39999 instanceof Object)){
var ex__29975__auto__ = e39999;
var statearr_40000_40009 = state_39988;
(statearr_40000_40009[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40010 = state_39988;
state_39988 = G__40010;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29972__auto__ = function(state_39988){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29972__auto____1.call(this,state_39988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29972__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29972__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto___40002,ch))
})();
var state__29994__auto__ = (function (){var statearr_40001 = f__29993__auto__.call(null);
(statearr_40001[(6)] = c__29992__auto___40002);

return statearr_40001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto___40002,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__){
return (function (state_40016){
var state_val_40017 = (state_40016[(1)]);
if((state_val_40017 === (1))){
var inst_40011 = cljs.core.async.timeout.call(null,(3000));
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40016__$1,(2),inst_40011);
} else {
if((state_val_40017 === (2))){
var inst_40013 = (state_40016[(2)]);
var inst_40014 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40016__$1 = (function (){var statearr_40018 = state_40016;
(statearr_40018[(7)] = inst_40013);

return statearr_40018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40016__$1,inst_40014);
} else {
return null;
}
}
});})(c__29992__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29972__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29972__auto____0 = (function (){
var statearr_40019 = [null,null,null,null,null,null,null,null];
(statearr_40019[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29972__auto__);

(statearr_40019[(1)] = (1));

return statearr_40019;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29972__auto____1 = (function (state_40016){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_40016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e40020){if((e40020 instanceof Object)){
var ex__29975__auto__ = e40020;
var statearr_40021_40023 = state_40016;
(statearr_40021_40023[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40024 = state_40016;
state_40016 = G__40024;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29972__auto__ = function(state_40016){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29972__auto____1.call(this,state_40016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29972__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29972__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__))
})();
var state__29994__auto__ = (function (){var statearr_40022 = f__29993__auto__.call(null);
(statearr_40022[(6)] = c__29992__auto__);

return statearr_40022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__))
);

return c__29992__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29992__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29993__auto__ = (function (){var switch__29971__auto__ = ((function (c__29992__auto__,figwheel_version,temp__4657__auto__){
return (function (state_40031){
var state_val_40032 = (state_40031[(1)]);
if((state_val_40032 === (1))){
var inst_40025 = cljs.core.async.timeout.call(null,(2000));
var state_40031__$1 = state_40031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40031__$1,(2),inst_40025);
} else {
if((state_val_40032 === (2))){
var inst_40027 = (state_40031[(2)]);
var inst_40028 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40029 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40028);
var state_40031__$1 = (function (){var statearr_40033 = state_40031;
(statearr_40033[(7)] = inst_40027);

return statearr_40033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40031__$1,inst_40029);
} else {
return null;
}
}
});})(c__29992__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29971__auto__,c__29992__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto____0 = (function (){
var statearr_40034 = [null,null,null,null,null,null,null,null];
(statearr_40034[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto__);

(statearr_40034[(1)] = (1));

return statearr_40034;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto____1 = (function (state_40031){
while(true){
var ret_value__29973__auto__ = (function (){try{while(true){
var result__29974__auto__ = switch__29971__auto__.call(null,state_40031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29974__auto__;
}
break;
}
}catch (e40035){if((e40035 instanceof Object)){
var ex__29975__auto__ = e40035;
var statearr_40036_40038 = state_40031;
(statearr_40036_40038[(5)] = ex__29975__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40039 = state_40031;
state_40031 = G__40039;
continue;
} else {
return ret_value__29973__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto__ = function(state_40031){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto____1.call(this,state_40031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29972__auto__;
})()
;})(switch__29971__auto__,c__29992__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29994__auto__ = (function (){var statearr_40037 = f__29993__auto__.call(null);
(statearr_40037[(6)] = c__29992__auto__);

return statearr_40037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29994__auto__);
});})(c__29992__auto__,figwheel_version,temp__4657__auto__))
);

return c__29992__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40040){
var map__40041 = p__40040;
var map__40041__$1 = ((((!((map__40041 == null)))?((((map__40041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40041):map__40041);
var file = cljs.core.get.call(null,map__40041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40043 = "";
var G__40043__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40043),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40043);
var G__40043__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40043__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40043__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40043__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40043__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40044){
var map__40045 = p__40044;
var map__40045__$1 = ((((!((map__40045 == null)))?((((map__40045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40045):map__40045);
var ed = map__40045__$1;
var formatted_exception = cljs.core.get.call(null,map__40045__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40045__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40045__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40047_40051 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40048_40052 = null;
var count__40049_40053 = (0);
var i__40050_40054 = (0);
while(true){
if((i__40050_40054 < count__40049_40053)){
var msg_40055 = cljs.core._nth.call(null,chunk__40048_40052,i__40050_40054);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40055);

var G__40056 = seq__40047_40051;
var G__40057 = chunk__40048_40052;
var G__40058 = count__40049_40053;
var G__40059 = (i__40050_40054 + (1));
seq__40047_40051 = G__40056;
chunk__40048_40052 = G__40057;
count__40049_40053 = G__40058;
i__40050_40054 = G__40059;
continue;
} else {
var temp__4657__auto___40060 = cljs.core.seq.call(null,seq__40047_40051);
if(temp__4657__auto___40060){
var seq__40047_40061__$1 = temp__4657__auto___40060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40047_40061__$1)){
var c__28034__auto___40062 = cljs.core.chunk_first.call(null,seq__40047_40061__$1);
var G__40063 = cljs.core.chunk_rest.call(null,seq__40047_40061__$1);
var G__40064 = c__28034__auto___40062;
var G__40065 = cljs.core.count.call(null,c__28034__auto___40062);
var G__40066 = (0);
seq__40047_40051 = G__40063;
chunk__40048_40052 = G__40064;
count__40049_40053 = G__40065;
i__40050_40054 = G__40066;
continue;
} else {
var msg_40067 = cljs.core.first.call(null,seq__40047_40061__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40067);

var G__40068 = cljs.core.next.call(null,seq__40047_40061__$1);
var G__40069 = null;
var G__40070 = (0);
var G__40071 = (0);
seq__40047_40051 = G__40068;
chunk__40048_40052 = G__40069;
count__40049_40053 = G__40070;
i__40050_40054 = G__40071;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40072){
var map__40073 = p__40072;
var map__40073__$1 = ((((!((map__40073 == null)))?((((map__40073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40073):map__40073);
var w = map__40073__$1;
var message = cljs.core.get.call(null,map__40073__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27183__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27183__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40075 = cljs.core.seq.call(null,plugins);
var chunk__40076 = null;
var count__40077 = (0);
var i__40078 = (0);
while(true){
if((i__40078 < count__40077)){
var vec__40079 = cljs.core._nth.call(null,chunk__40076,i__40078);
var k = cljs.core.nth.call(null,vec__40079,(0),null);
var plugin = cljs.core.nth.call(null,vec__40079,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40085 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40075,chunk__40076,count__40077,i__40078,pl_40085,vec__40079,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40085.call(null,msg_hist);
});})(seq__40075,chunk__40076,count__40077,i__40078,pl_40085,vec__40079,k,plugin))
);
} else {
}

var G__40086 = seq__40075;
var G__40087 = chunk__40076;
var G__40088 = count__40077;
var G__40089 = (i__40078 + (1));
seq__40075 = G__40086;
chunk__40076 = G__40087;
count__40077 = G__40088;
i__40078 = G__40089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40075);
if(temp__4657__auto__){
var seq__40075__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40075__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__40075__$1);
var G__40090 = cljs.core.chunk_rest.call(null,seq__40075__$1);
var G__40091 = c__28034__auto__;
var G__40092 = cljs.core.count.call(null,c__28034__auto__);
var G__40093 = (0);
seq__40075 = G__40090;
chunk__40076 = G__40091;
count__40077 = G__40092;
i__40078 = G__40093;
continue;
} else {
var vec__40082 = cljs.core.first.call(null,seq__40075__$1);
var k = cljs.core.nth.call(null,vec__40082,(0),null);
var plugin = cljs.core.nth.call(null,vec__40082,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40094 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40075,chunk__40076,count__40077,i__40078,pl_40094,vec__40082,k,plugin,seq__40075__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40094.call(null,msg_hist);
});})(seq__40075,chunk__40076,count__40077,i__40078,pl_40094,vec__40082,k,plugin,seq__40075__$1,temp__4657__auto__))
);
} else {
}

var G__40095 = cljs.core.next.call(null,seq__40075__$1);
var G__40096 = null;
var G__40097 = (0);
var G__40098 = (0);
seq__40075 = G__40095;
chunk__40076 = G__40096;
count__40077 = G__40097;
i__40078 = G__40098;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40100 = arguments.length;
switch (G__40100) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40101_40106 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40102_40107 = null;
var count__40103_40108 = (0);
var i__40104_40109 = (0);
while(true){
if((i__40104_40109 < count__40103_40108)){
var msg_40110 = cljs.core._nth.call(null,chunk__40102_40107,i__40104_40109);
figwheel.client.socket.handle_incoming_message.call(null,msg_40110);

var G__40111 = seq__40101_40106;
var G__40112 = chunk__40102_40107;
var G__40113 = count__40103_40108;
var G__40114 = (i__40104_40109 + (1));
seq__40101_40106 = G__40111;
chunk__40102_40107 = G__40112;
count__40103_40108 = G__40113;
i__40104_40109 = G__40114;
continue;
} else {
var temp__4657__auto___40115 = cljs.core.seq.call(null,seq__40101_40106);
if(temp__4657__auto___40115){
var seq__40101_40116__$1 = temp__4657__auto___40115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40101_40116__$1)){
var c__28034__auto___40117 = cljs.core.chunk_first.call(null,seq__40101_40116__$1);
var G__40118 = cljs.core.chunk_rest.call(null,seq__40101_40116__$1);
var G__40119 = c__28034__auto___40117;
var G__40120 = cljs.core.count.call(null,c__28034__auto___40117);
var G__40121 = (0);
seq__40101_40106 = G__40118;
chunk__40102_40107 = G__40119;
count__40103_40108 = G__40120;
i__40104_40109 = G__40121;
continue;
} else {
var msg_40122 = cljs.core.first.call(null,seq__40101_40116__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40122);

var G__40123 = cljs.core.next.call(null,seq__40101_40116__$1);
var G__40124 = null;
var G__40125 = (0);
var G__40126 = (0);
seq__40101_40106 = G__40123;
chunk__40102_40107 = G__40124;
count__40103_40108 = G__40125;
i__40104_40109 = G__40126;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40131 = arguments.length;
var i__28365__auto___40132 = (0);
while(true){
if((i__28365__auto___40132 < len__28364__auto___40131)){
args__28371__auto__.push((arguments[i__28365__auto___40132]));

var G__40133 = (i__28365__auto___40132 + (1));
i__28365__auto___40132 = G__40133;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40128){
var map__40129 = p__40128;
var map__40129__$1 = ((((!((map__40129 == null)))?((((map__40129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40129):map__40129);
var opts = map__40129__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40127){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40127));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40134){if((e40134 instanceof Error)){
var e = e40134;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40134;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40135){
var map__40136 = p__40135;
var map__40136__$1 = ((((!((map__40136 == null)))?((((map__40136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40136):map__40136);
var msg_name = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513978682207
