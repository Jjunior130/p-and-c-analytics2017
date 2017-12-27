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
}catch (e38012){if((e38012 instanceof Error)){
var e = e38012;
return "Error: Unable to stringify";
} else {
throw e38012;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38015 = arguments.length;
switch (G__38015) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38013_SHARP_){
if(typeof p1__38013_SHARP_ === 'string'){
return p1__38013_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38013_SHARP_);
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
var len__28364__auto___38018 = arguments.length;
var i__28365__auto___38019 = (0);
while(true){
if((i__28365__auto___38019 < len__28364__auto___38018)){
args__28371__auto__.push((arguments[i__28365__auto___38019]));

var G__38020 = (i__28365__auto___38019 + (1));
i__28365__auto___38019 = G__38020;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38017){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38017));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38022 = arguments.length;
var i__28365__auto___38023 = (0);
while(true){
if((i__28365__auto___38023 < len__28364__auto___38022)){
args__28371__auto__.push((arguments[i__28365__auto___38023]));

var G__38024 = (i__28365__auto___38023 + (1));
i__28365__auto___38023 = G__38024;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38021){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38021));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38025){
var map__38026 = p__38025;
var map__38026__$1 = ((((!((map__38026 == null)))?((((map__38026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38026):map__38026);
var message = cljs.core.get.call(null,map__38026__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38026__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30952__auto___38105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___38105,ch){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___38105,ch){
return (function (state_38077){
var state_val_38078 = (state_38077[(1)]);
if((state_val_38078 === (7))){
var inst_38073 = (state_38077[(2)]);
var state_38077__$1 = state_38077;
var statearr_38079_38106 = state_38077__$1;
(statearr_38079_38106[(2)] = inst_38073);

(statearr_38079_38106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (1))){
var state_38077__$1 = state_38077;
var statearr_38080_38107 = state_38077__$1;
(statearr_38080_38107[(2)] = null);

(statearr_38080_38107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (4))){
var inst_38030 = (state_38077[(7)]);
var inst_38030__$1 = (state_38077[(2)]);
var state_38077__$1 = (function (){var statearr_38081 = state_38077;
(statearr_38081[(7)] = inst_38030__$1);

return statearr_38081;
})();
if(cljs.core.truth_(inst_38030__$1)){
var statearr_38082_38108 = state_38077__$1;
(statearr_38082_38108[(1)] = (5));

} else {
var statearr_38083_38109 = state_38077__$1;
(statearr_38083_38109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (15))){
var inst_38037 = (state_38077[(8)]);
var inst_38052 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38037);
var inst_38053 = cljs.core.first.call(null,inst_38052);
var inst_38054 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38053);
var inst_38055 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38054)].join('');
var inst_38056 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38055);
var state_38077__$1 = state_38077;
var statearr_38084_38110 = state_38077__$1;
(statearr_38084_38110[(2)] = inst_38056);

(statearr_38084_38110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (13))){
var inst_38061 = (state_38077[(2)]);
var state_38077__$1 = state_38077;
var statearr_38085_38111 = state_38077__$1;
(statearr_38085_38111[(2)] = inst_38061);

(statearr_38085_38111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (6))){
var state_38077__$1 = state_38077;
var statearr_38086_38112 = state_38077__$1;
(statearr_38086_38112[(2)] = null);

(statearr_38086_38112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (17))){
var inst_38059 = (state_38077[(2)]);
var state_38077__$1 = state_38077;
var statearr_38087_38113 = state_38077__$1;
(statearr_38087_38113[(2)] = inst_38059);

(statearr_38087_38113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (3))){
var inst_38075 = (state_38077[(2)]);
var state_38077__$1 = state_38077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38077__$1,inst_38075);
} else {
if((state_val_38078 === (12))){
var inst_38036 = (state_38077[(9)]);
var inst_38050 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38036,opts);
var state_38077__$1 = state_38077;
if(cljs.core.truth_(inst_38050)){
var statearr_38088_38114 = state_38077__$1;
(statearr_38088_38114[(1)] = (15));

} else {
var statearr_38089_38115 = state_38077__$1;
(statearr_38089_38115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (2))){
var state_38077__$1 = state_38077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38077__$1,(4),ch);
} else {
if((state_val_38078 === (11))){
var inst_38037 = (state_38077[(8)]);
var inst_38042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38043 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38037);
var inst_38044 = cljs.core.async.timeout.call(null,(1000));
var inst_38045 = [inst_38043,inst_38044];
var inst_38046 = (new cljs.core.PersistentVector(null,2,(5),inst_38042,inst_38045,null));
var state_38077__$1 = state_38077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38077__$1,(14),inst_38046);
} else {
if((state_val_38078 === (9))){
var inst_38037 = (state_38077[(8)]);
var inst_38063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38037);
var inst_38065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38064);
var inst_38066 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38065)].join('');
var inst_38067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38066);
var state_38077__$1 = (function (){var statearr_38090 = state_38077;
(statearr_38090[(10)] = inst_38063);

return statearr_38090;
})();
var statearr_38091_38116 = state_38077__$1;
(statearr_38091_38116[(2)] = inst_38067);

(statearr_38091_38116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (5))){
var inst_38030 = (state_38077[(7)]);
var inst_38032 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38033 = (new cljs.core.PersistentArrayMap(null,2,inst_38032,null));
var inst_38034 = (new cljs.core.PersistentHashSet(null,inst_38033,null));
var inst_38035 = figwheel.client.focus_msgs.call(null,inst_38034,inst_38030);
var inst_38036 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38035);
var inst_38037 = cljs.core.first.call(null,inst_38035);
var inst_38038 = figwheel.client.autoload_QMARK_.call(null);
var state_38077__$1 = (function (){var statearr_38092 = state_38077;
(statearr_38092[(9)] = inst_38036);

(statearr_38092[(8)] = inst_38037);

return statearr_38092;
})();
if(cljs.core.truth_(inst_38038)){
var statearr_38093_38117 = state_38077__$1;
(statearr_38093_38117[(1)] = (8));

} else {
var statearr_38094_38118 = state_38077__$1;
(statearr_38094_38118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (14))){
var inst_38048 = (state_38077[(2)]);
var state_38077__$1 = state_38077;
var statearr_38095_38119 = state_38077__$1;
(statearr_38095_38119[(2)] = inst_38048);

(statearr_38095_38119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (16))){
var state_38077__$1 = state_38077;
var statearr_38096_38120 = state_38077__$1;
(statearr_38096_38120[(2)] = null);

(statearr_38096_38120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (10))){
var inst_38069 = (state_38077[(2)]);
var state_38077__$1 = (function (){var statearr_38097 = state_38077;
(statearr_38097[(11)] = inst_38069);

return statearr_38097;
})();
var statearr_38098_38121 = state_38077__$1;
(statearr_38098_38121[(2)] = null);

(statearr_38098_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38078 === (8))){
var inst_38036 = (state_38077[(9)]);
var inst_38040 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38036,opts);
var state_38077__$1 = state_38077;
if(cljs.core.truth_(inst_38040)){
var statearr_38099_38122 = state_38077__$1;
(statearr_38099_38122[(1)] = (11));

} else {
var statearr_38100_38123 = state_38077__$1;
(statearr_38100_38123[(1)] = (12));

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
});})(c__30952__auto___38105,ch))
;
return ((function (switch__30864__auto__,c__30952__auto___38105,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_38101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38101[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__);

(statearr_38101[(1)] = (1));

return statearr_38101;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1 = (function (state_38077){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38102){if((e38102 instanceof Object)){
var ex__30868__auto__ = e38102;
var statearr_38103_38124 = state_38077;
(statearr_38103_38124[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_38077;
state_38077 = G__38125;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__ = function(state_38077){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1.call(this,state_38077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___38105,ch))
})();
var state__30954__auto__ = (function (){var statearr_38104 = f__30953__auto__.call(null);
(statearr_38104[(6)] = c__30952__auto___38105);

return statearr_38104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___38105,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38126_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38126_SHARP_));
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
var base_path_38128 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38128){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38127){if((e38127 instanceof Error)){
var e = e38127;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38128], null));
} else {
var e = e38127;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38128))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38129){
var map__38130 = p__38129;
var map__38130__$1 = ((((!((map__38130 == null)))?((((map__38130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38130):map__38130);
var opts = map__38130__$1;
var build_id = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38130,map__38130__$1,opts,build_id){
return (function (p__38132){
var vec__38133 = p__38132;
var seq__38134 = cljs.core.seq.call(null,vec__38133);
var first__38135 = cljs.core.first.call(null,seq__38134);
var seq__38134__$1 = cljs.core.next.call(null,seq__38134);
var map__38136 = first__38135;
var map__38136__$1 = ((((!((map__38136 == null)))?((((map__38136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38136):map__38136);
var msg = map__38136__$1;
var msg_name = cljs.core.get.call(null,map__38136__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38134__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38133,seq__38134,first__38135,seq__38134__$1,map__38136,map__38136__$1,msg,msg_name,_,map__38130,map__38130__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38133,seq__38134,first__38135,seq__38134__$1,map__38136,map__38136__$1,msg,msg_name,_,map__38130,map__38130__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38130,map__38130__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38138){
var vec__38139 = p__38138;
var seq__38140 = cljs.core.seq.call(null,vec__38139);
var first__38141 = cljs.core.first.call(null,seq__38140);
var seq__38140__$1 = cljs.core.next.call(null,seq__38140);
var map__38142 = first__38141;
var map__38142__$1 = ((((!((map__38142 == null)))?((((map__38142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38142):map__38142);
var msg = map__38142__$1;
var msg_name = cljs.core.get.call(null,map__38142__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38140__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38144){
var map__38145 = p__38144;
var map__38145__$1 = ((((!((map__38145 == null)))?((((map__38145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38145):map__38145);
var on_compile_warning = cljs.core.get.call(null,map__38145__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38145__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38145,map__38145__$1,on_compile_warning,on_compile_fail){
return (function (p__38147){
var vec__38148 = p__38147;
var seq__38149 = cljs.core.seq.call(null,vec__38148);
var first__38150 = cljs.core.first.call(null,seq__38149);
var seq__38149__$1 = cljs.core.next.call(null,seq__38149);
var map__38151 = first__38150;
var map__38151__$1 = ((((!((map__38151 == null)))?((((map__38151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38151):map__38151);
var msg = map__38151__$1;
var msg_name = cljs.core.get.call(null,map__38151__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38149__$1;
var pred__38153 = cljs.core._EQ_;
var expr__38154 = msg_name;
if(cljs.core.truth_(pred__38153.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38154))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38153.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38154))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38145,map__38145__$1,on_compile_warning,on_compile_fail))
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,msg_hist,msg_names,msg){
return (function (state_38243){
var state_val_38244 = (state_38243[(1)]);
if((state_val_38244 === (7))){
var inst_38163 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38163)){
var statearr_38245_38292 = state_38243__$1;
(statearr_38245_38292[(1)] = (8));

} else {
var statearr_38246_38293 = state_38243__$1;
(statearr_38246_38293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (20))){
var inst_38237 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38247_38294 = state_38243__$1;
(statearr_38247_38294[(2)] = inst_38237);

(statearr_38247_38294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (27))){
var inst_38233 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38248_38295 = state_38243__$1;
(statearr_38248_38295[(2)] = inst_38233);

(statearr_38248_38295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (1))){
var inst_38156 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38156)){
var statearr_38249_38296 = state_38243__$1;
(statearr_38249_38296[(1)] = (2));

} else {
var statearr_38250_38297 = state_38243__$1;
(statearr_38250_38297[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (24))){
var inst_38235 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38251_38298 = state_38243__$1;
(statearr_38251_38298[(2)] = inst_38235);

(statearr_38251_38298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (4))){
var inst_38241 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38243__$1,inst_38241);
} else {
if((state_val_38244 === (15))){
var inst_38239 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38252_38299 = state_38243__$1;
(statearr_38252_38299[(2)] = inst_38239);

(statearr_38252_38299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (21))){
var inst_38192 = (state_38243[(2)]);
var inst_38193 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38194 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38193);
var state_38243__$1 = (function (){var statearr_38253 = state_38243;
(statearr_38253[(7)] = inst_38192);

return statearr_38253;
})();
var statearr_38254_38300 = state_38243__$1;
(statearr_38254_38300[(2)] = inst_38194);

(statearr_38254_38300[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (31))){
var inst_38222 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38222)){
var statearr_38255_38301 = state_38243__$1;
(statearr_38255_38301[(1)] = (34));

} else {
var statearr_38256_38302 = state_38243__$1;
(statearr_38256_38302[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (32))){
var inst_38231 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38257_38303 = state_38243__$1;
(statearr_38257_38303[(2)] = inst_38231);

(statearr_38257_38303[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (33))){
var inst_38218 = (state_38243[(2)]);
var inst_38219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38220 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38219);
var state_38243__$1 = (function (){var statearr_38258 = state_38243;
(statearr_38258[(8)] = inst_38218);

return statearr_38258;
})();
var statearr_38259_38304 = state_38243__$1;
(statearr_38259_38304[(2)] = inst_38220);

(statearr_38259_38304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (13))){
var inst_38177 = figwheel.client.heads_up.clear.call(null);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(16),inst_38177);
} else {
if((state_val_38244 === (22))){
var inst_38198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38199 = figwheel.client.heads_up.append_warning_message.call(null,inst_38198);
var state_38243__$1 = state_38243;
var statearr_38260_38305 = state_38243__$1;
(statearr_38260_38305[(2)] = inst_38199);

(statearr_38260_38305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (36))){
var inst_38229 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38261_38306 = state_38243__$1;
(statearr_38261_38306[(2)] = inst_38229);

(statearr_38261_38306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (29))){
var inst_38209 = (state_38243[(2)]);
var inst_38210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38211 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38210);
var state_38243__$1 = (function (){var statearr_38262 = state_38243;
(statearr_38262[(9)] = inst_38209);

return statearr_38262;
})();
var statearr_38263_38307 = state_38243__$1;
(statearr_38263_38307[(2)] = inst_38211);

(statearr_38263_38307[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (6))){
var inst_38158 = (state_38243[(10)]);
var state_38243__$1 = state_38243;
var statearr_38264_38308 = state_38243__$1;
(statearr_38264_38308[(2)] = inst_38158);

(statearr_38264_38308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (28))){
var inst_38205 = (state_38243[(2)]);
var inst_38206 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38207 = figwheel.client.heads_up.display_warning.call(null,inst_38206);
var state_38243__$1 = (function (){var statearr_38265 = state_38243;
(statearr_38265[(11)] = inst_38205);

return statearr_38265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(29),inst_38207);
} else {
if((state_val_38244 === (25))){
var inst_38203 = figwheel.client.heads_up.clear.call(null);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(28),inst_38203);
} else {
if((state_val_38244 === (34))){
var inst_38224 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(37),inst_38224);
} else {
if((state_val_38244 === (17))){
var inst_38183 = (state_38243[(2)]);
var inst_38184 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38185 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38184);
var state_38243__$1 = (function (){var statearr_38266 = state_38243;
(statearr_38266[(12)] = inst_38183);

return statearr_38266;
})();
var statearr_38267_38309 = state_38243__$1;
(statearr_38267_38309[(2)] = inst_38185);

(statearr_38267_38309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (3))){
var inst_38175 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38175)){
var statearr_38268_38310 = state_38243__$1;
(statearr_38268_38310[(1)] = (13));

} else {
var statearr_38269_38311 = state_38243__$1;
(statearr_38269_38311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (12))){
var inst_38171 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38270_38312 = state_38243__$1;
(statearr_38270_38312[(2)] = inst_38171);

(statearr_38270_38312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (2))){
var inst_38158 = (state_38243[(10)]);
var inst_38158__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38243__$1 = (function (){var statearr_38271 = state_38243;
(statearr_38271[(10)] = inst_38158__$1);

return statearr_38271;
})();
if(cljs.core.truth_(inst_38158__$1)){
var statearr_38272_38313 = state_38243__$1;
(statearr_38272_38313[(1)] = (5));

} else {
var statearr_38273_38314 = state_38243__$1;
(statearr_38273_38314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (23))){
var inst_38201 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38201)){
var statearr_38274_38315 = state_38243__$1;
(statearr_38274_38315[(1)] = (25));

} else {
var statearr_38275_38316 = state_38243__$1;
(statearr_38275_38316[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (35))){
var state_38243__$1 = state_38243;
var statearr_38276_38317 = state_38243__$1;
(statearr_38276_38317[(2)] = null);

(statearr_38276_38317[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (19))){
var inst_38196 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38196)){
var statearr_38277_38318 = state_38243__$1;
(statearr_38277_38318[(1)] = (22));

} else {
var statearr_38278_38319 = state_38243__$1;
(statearr_38278_38319[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (11))){
var inst_38167 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38279_38320 = state_38243__$1;
(statearr_38279_38320[(2)] = inst_38167);

(statearr_38279_38320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (9))){
var inst_38169 = figwheel.client.heads_up.clear.call(null);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(12),inst_38169);
} else {
if((state_val_38244 === (5))){
var inst_38160 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38243__$1 = state_38243;
var statearr_38280_38321 = state_38243__$1;
(statearr_38280_38321[(2)] = inst_38160);

(statearr_38280_38321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (14))){
var inst_38187 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38187)){
var statearr_38281_38322 = state_38243__$1;
(statearr_38281_38322[(1)] = (18));

} else {
var statearr_38282_38323 = state_38243__$1;
(statearr_38282_38323[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (26))){
var inst_38213 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38243__$1 = state_38243;
if(cljs.core.truth_(inst_38213)){
var statearr_38283_38324 = state_38243__$1;
(statearr_38283_38324[(1)] = (30));

} else {
var statearr_38284_38325 = state_38243__$1;
(statearr_38284_38325[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (16))){
var inst_38179 = (state_38243[(2)]);
var inst_38180 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38181 = figwheel.client.heads_up.display_exception.call(null,inst_38180);
var state_38243__$1 = (function (){var statearr_38285 = state_38243;
(statearr_38285[(13)] = inst_38179);

return statearr_38285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(17),inst_38181);
} else {
if((state_val_38244 === (30))){
var inst_38215 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38216 = figwheel.client.heads_up.display_warning.call(null,inst_38215);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(33),inst_38216);
} else {
if((state_val_38244 === (10))){
var inst_38173 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38286_38326 = state_38243__$1;
(statearr_38286_38326[(2)] = inst_38173);

(statearr_38286_38326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (18))){
var inst_38189 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38190 = figwheel.client.heads_up.display_exception.call(null,inst_38189);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(21),inst_38190);
} else {
if((state_val_38244 === (37))){
var inst_38226 = (state_38243[(2)]);
var state_38243__$1 = state_38243;
var statearr_38287_38327 = state_38243__$1;
(statearr_38287_38327[(2)] = inst_38226);

(statearr_38287_38327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38244 === (8))){
var inst_38165 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38243__$1 = state_38243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38243__$1,(11),inst_38165);
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
});})(c__30952__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30864__auto__,c__30952__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0 = (function (){
var statearr_38288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38288[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__);

(statearr_38288[(1)] = (1));

return statearr_38288;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1 = (function (state_38243){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38289){if((e38289 instanceof Object)){
var ex__30868__auto__ = e38289;
var statearr_38290_38328 = state_38243;
(statearr_38290_38328[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38329 = state_38243;
state_38243 = G__38329;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__ = function(state_38243){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1.call(this,state_38243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,msg_hist,msg_names,msg))
})();
var state__30954__auto__ = (function (){var statearr_38291 = f__30953__auto__.call(null);
(statearr_38291[(6)] = c__30952__auto__);

return statearr_38291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,msg_hist,msg_names,msg))
);

return c__30952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30952__auto___38358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___38358,ch){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___38358,ch){
return (function (state_38344){
var state_val_38345 = (state_38344[(1)]);
if((state_val_38345 === (1))){
var state_38344__$1 = state_38344;
var statearr_38346_38359 = state_38344__$1;
(statearr_38346_38359[(2)] = null);

(statearr_38346_38359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (2))){
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(4),ch);
} else {
if((state_val_38345 === (3))){
var inst_38342 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38344__$1,inst_38342);
} else {
if((state_val_38345 === (4))){
var inst_38332 = (state_38344[(7)]);
var inst_38332__$1 = (state_38344[(2)]);
var state_38344__$1 = (function (){var statearr_38347 = state_38344;
(statearr_38347[(7)] = inst_38332__$1);

return statearr_38347;
})();
if(cljs.core.truth_(inst_38332__$1)){
var statearr_38348_38360 = state_38344__$1;
(statearr_38348_38360[(1)] = (5));

} else {
var statearr_38349_38361 = state_38344__$1;
(statearr_38349_38361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (5))){
var inst_38332 = (state_38344[(7)]);
var inst_38334 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38332);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38344__$1,(8),inst_38334);
} else {
if((state_val_38345 === (6))){
var state_38344__$1 = state_38344;
var statearr_38350_38362 = state_38344__$1;
(statearr_38350_38362[(2)] = null);

(statearr_38350_38362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (7))){
var inst_38340 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38351_38363 = state_38344__$1;
(statearr_38351_38363[(2)] = inst_38340);

(statearr_38351_38363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (8))){
var inst_38336 = (state_38344[(2)]);
var state_38344__$1 = (function (){var statearr_38352 = state_38344;
(statearr_38352[(8)] = inst_38336);

return statearr_38352;
})();
var statearr_38353_38364 = state_38344__$1;
(statearr_38353_38364[(2)] = null);

(statearr_38353_38364[(1)] = (2));


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
});})(c__30952__auto___38358,ch))
;
return ((function (switch__30864__auto__,c__30952__auto___38358,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_38354 = [null,null,null,null,null,null,null,null,null];
(statearr_38354[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30865__auto__);

(statearr_38354[(1)] = (1));

return statearr_38354;
});
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1 = (function (state_38344){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38355){if((e38355 instanceof Object)){
var ex__30868__auto__ = e38355;
var statearr_38356_38365 = state_38344;
(statearr_38356_38365[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38366 = state_38344;
state_38344 = G__38366;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__ = function(state_38344){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1.call(this,state_38344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___38358,ch))
})();
var state__30954__auto__ = (function (){var statearr_38357 = f__30953__auto__.call(null);
(statearr_38357[(6)] = c__30952__auto___38358);

return statearr_38357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___38358,ch))
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__){
return (function (state_38372){
var state_val_38373 = (state_38372[(1)]);
if((state_val_38373 === (1))){
var inst_38367 = cljs.core.async.timeout.call(null,(3000));
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38372__$1,(2),inst_38367);
} else {
if((state_val_38373 === (2))){
var inst_38369 = (state_38372[(2)]);
var inst_38370 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38372__$1 = (function (){var statearr_38374 = state_38372;
(statearr_38374[(7)] = inst_38369);

return statearr_38374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38372__$1,inst_38370);
} else {
return null;
}
}
});})(c__30952__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_38375 = [null,null,null,null,null,null,null,null];
(statearr_38375[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__);

(statearr_38375[(1)] = (1));

return statearr_38375;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1 = (function (state_38372){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38376){if((e38376 instanceof Object)){
var ex__30868__auto__ = e38376;
var statearr_38377_38379 = state_38372;
(statearr_38377_38379[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38380 = state_38372;
state_38372 = G__38380;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__ = function(state_38372){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1.call(this,state_38372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_38378 = f__30953__auto__.call(null);
(statearr_38378[(6)] = c__30952__auto__);

return statearr_38378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__))
);

return c__30952__auto__;
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
var c__30952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38387){
var state_val_38388 = (state_38387[(1)]);
if((state_val_38388 === (1))){
var inst_38381 = cljs.core.async.timeout.call(null,(2000));
var state_38387__$1 = state_38387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38387__$1,(2),inst_38381);
} else {
if((state_val_38388 === (2))){
var inst_38383 = (state_38387[(2)]);
var inst_38384 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38385 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38384);
var state_38387__$1 = (function (){var statearr_38389 = state_38387;
(statearr_38389[(7)] = inst_38383);

return statearr_38389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38387__$1,inst_38385);
} else {
return null;
}
}
});})(c__30952__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30864__auto__,c__30952__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_38390 = [null,null,null,null,null,null,null,null];
(statearr_38390[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__);

(statearr_38390[(1)] = (1));

return statearr_38390;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1 = (function (state_38387){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38391){if((e38391 instanceof Object)){
var ex__30868__auto__ = e38391;
var statearr_38392_38394 = state_38387;
(statearr_38392_38394[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38395 = state_38387;
state_38387 = G__38395;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__ = function(state_38387){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1.call(this,state_38387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30954__auto__ = (function (){var statearr_38393 = f__30953__auto__.call(null);
(statearr_38393[(6)] = c__30952__auto__);

return statearr_38393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,figwheel_version,temp__4657__auto__))
);

return c__30952__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38396){
var map__38397 = p__38396;
var map__38397__$1 = ((((!((map__38397 == null)))?((((map__38397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38397):map__38397);
var file = cljs.core.get.call(null,map__38397__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38397__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38397__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38399 = "";
var G__38399__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38399),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38399);
var G__38399__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38399__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38399__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38399__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38399__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38400){
var map__38401 = p__38400;
var map__38401__$1 = ((((!((map__38401 == null)))?((((map__38401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38401):map__38401);
var ed = map__38401__$1;
var formatted_exception = cljs.core.get.call(null,map__38401__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38401__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38401__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38403_38407 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38404_38408 = null;
var count__38405_38409 = (0);
var i__38406_38410 = (0);
while(true){
if((i__38406_38410 < count__38405_38409)){
var msg_38411 = cljs.core._nth.call(null,chunk__38404_38408,i__38406_38410);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38411);

var G__38412 = seq__38403_38407;
var G__38413 = chunk__38404_38408;
var G__38414 = count__38405_38409;
var G__38415 = (i__38406_38410 + (1));
seq__38403_38407 = G__38412;
chunk__38404_38408 = G__38413;
count__38405_38409 = G__38414;
i__38406_38410 = G__38415;
continue;
} else {
var temp__4657__auto___38416 = cljs.core.seq.call(null,seq__38403_38407);
if(temp__4657__auto___38416){
var seq__38403_38417__$1 = temp__4657__auto___38416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38403_38417__$1)){
var c__28034__auto___38418 = cljs.core.chunk_first.call(null,seq__38403_38417__$1);
var G__38419 = cljs.core.chunk_rest.call(null,seq__38403_38417__$1);
var G__38420 = c__28034__auto___38418;
var G__38421 = cljs.core.count.call(null,c__28034__auto___38418);
var G__38422 = (0);
seq__38403_38407 = G__38419;
chunk__38404_38408 = G__38420;
count__38405_38409 = G__38421;
i__38406_38410 = G__38422;
continue;
} else {
var msg_38423 = cljs.core.first.call(null,seq__38403_38417__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38423);

var G__38424 = cljs.core.next.call(null,seq__38403_38417__$1);
var G__38425 = null;
var G__38426 = (0);
var G__38427 = (0);
seq__38403_38407 = G__38424;
chunk__38404_38408 = G__38425;
count__38405_38409 = G__38426;
i__38406_38410 = G__38427;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38428){
var map__38429 = p__38428;
var map__38429__$1 = ((((!((map__38429 == null)))?((((map__38429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38429):map__38429);
var w = map__38429__$1;
var message = cljs.core.get.call(null,map__38429__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38431 = cljs.core.seq.call(null,plugins);
var chunk__38432 = null;
var count__38433 = (0);
var i__38434 = (0);
while(true){
if((i__38434 < count__38433)){
var vec__38435 = cljs.core._nth.call(null,chunk__38432,i__38434);
var k = cljs.core.nth.call(null,vec__38435,(0),null);
var plugin = cljs.core.nth.call(null,vec__38435,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38441 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38431,chunk__38432,count__38433,i__38434,pl_38441,vec__38435,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38441.call(null,msg_hist);
});})(seq__38431,chunk__38432,count__38433,i__38434,pl_38441,vec__38435,k,plugin))
);
} else {
}

var G__38442 = seq__38431;
var G__38443 = chunk__38432;
var G__38444 = count__38433;
var G__38445 = (i__38434 + (1));
seq__38431 = G__38442;
chunk__38432 = G__38443;
count__38433 = G__38444;
i__38434 = G__38445;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38431);
if(temp__4657__auto__){
var seq__38431__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38431__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38431__$1);
var G__38446 = cljs.core.chunk_rest.call(null,seq__38431__$1);
var G__38447 = c__28034__auto__;
var G__38448 = cljs.core.count.call(null,c__28034__auto__);
var G__38449 = (0);
seq__38431 = G__38446;
chunk__38432 = G__38447;
count__38433 = G__38448;
i__38434 = G__38449;
continue;
} else {
var vec__38438 = cljs.core.first.call(null,seq__38431__$1);
var k = cljs.core.nth.call(null,vec__38438,(0),null);
var plugin = cljs.core.nth.call(null,vec__38438,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38450 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38431,chunk__38432,count__38433,i__38434,pl_38450,vec__38438,k,plugin,seq__38431__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38450.call(null,msg_hist);
});})(seq__38431,chunk__38432,count__38433,i__38434,pl_38450,vec__38438,k,plugin,seq__38431__$1,temp__4657__auto__))
);
} else {
}

var G__38451 = cljs.core.next.call(null,seq__38431__$1);
var G__38452 = null;
var G__38453 = (0);
var G__38454 = (0);
seq__38431 = G__38451;
chunk__38432 = G__38452;
count__38433 = G__38453;
i__38434 = G__38454;
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
var G__38456 = arguments.length;
switch (G__38456) {
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

var seq__38457_38462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38458_38463 = null;
var count__38459_38464 = (0);
var i__38460_38465 = (0);
while(true){
if((i__38460_38465 < count__38459_38464)){
var msg_38466 = cljs.core._nth.call(null,chunk__38458_38463,i__38460_38465);
figwheel.client.socket.handle_incoming_message.call(null,msg_38466);

var G__38467 = seq__38457_38462;
var G__38468 = chunk__38458_38463;
var G__38469 = count__38459_38464;
var G__38470 = (i__38460_38465 + (1));
seq__38457_38462 = G__38467;
chunk__38458_38463 = G__38468;
count__38459_38464 = G__38469;
i__38460_38465 = G__38470;
continue;
} else {
var temp__4657__auto___38471 = cljs.core.seq.call(null,seq__38457_38462);
if(temp__4657__auto___38471){
var seq__38457_38472__$1 = temp__4657__auto___38471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38457_38472__$1)){
var c__28034__auto___38473 = cljs.core.chunk_first.call(null,seq__38457_38472__$1);
var G__38474 = cljs.core.chunk_rest.call(null,seq__38457_38472__$1);
var G__38475 = c__28034__auto___38473;
var G__38476 = cljs.core.count.call(null,c__28034__auto___38473);
var G__38477 = (0);
seq__38457_38462 = G__38474;
chunk__38458_38463 = G__38475;
count__38459_38464 = G__38476;
i__38460_38465 = G__38477;
continue;
} else {
var msg_38478 = cljs.core.first.call(null,seq__38457_38472__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38478);

var G__38479 = cljs.core.next.call(null,seq__38457_38472__$1);
var G__38480 = null;
var G__38481 = (0);
var G__38482 = (0);
seq__38457_38462 = G__38479;
chunk__38458_38463 = G__38480;
count__38459_38464 = G__38481;
i__38460_38465 = G__38482;
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
var len__28364__auto___38487 = arguments.length;
var i__28365__auto___38488 = (0);
while(true){
if((i__28365__auto___38488 < len__28364__auto___38487)){
args__28371__auto__.push((arguments[i__28365__auto___38488]));

var G__38489 = (i__28365__auto___38488 + (1));
i__28365__auto___38488 = G__38489;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38484){
var map__38485 = p__38484;
var map__38485__$1 = ((((!((map__38485 == null)))?((((map__38485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38485):map__38485);
var opts = map__38485__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38483){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38483));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38490){if((e38490 instanceof Error)){
var e = e38490;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38490;

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
return (function (p__38491){
var map__38492 = p__38491;
var map__38492__$1 = ((((!((map__38492 == null)))?((((map__38492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38492):map__38492);
var msg_name = cljs.core.get.call(null,map__38492__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514349637984
