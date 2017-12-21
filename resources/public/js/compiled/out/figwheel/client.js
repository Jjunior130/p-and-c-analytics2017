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
}catch (e37959){if((e37959 instanceof Error)){
var e = e37959;
return "Error: Unable to stringify";
} else {
throw e37959;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37962 = arguments.length;
switch (G__37962) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37960_SHARP_){
if(typeof p1__37960_SHARP_ === 'string'){
return p1__37960_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37960_SHARP_);
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
var len__28364__auto___37965 = arguments.length;
var i__28365__auto___37966 = (0);
while(true){
if((i__28365__auto___37966 < len__28364__auto___37965)){
args__28371__auto__.push((arguments[i__28365__auto___37966]));

var G__37967 = (i__28365__auto___37966 + (1));
i__28365__auto___37966 = G__37967;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37964){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37964));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___37969 = arguments.length;
var i__28365__auto___37970 = (0);
while(true){
if((i__28365__auto___37970 < len__28364__auto___37969)){
args__28371__auto__.push((arguments[i__28365__auto___37970]));

var G__37971 = (i__28365__auto___37970 + (1));
i__28365__auto___37970 = G__37971;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37968){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37968));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37972){
var map__37973 = p__37972;
var map__37973__$1 = ((((!((map__37973 == null)))?((((map__37973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37973):map__37973);
var message = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30952__auto___38052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___38052,ch){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___38052,ch){
return (function (state_38024){
var state_val_38025 = (state_38024[(1)]);
if((state_val_38025 === (7))){
var inst_38020 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
var statearr_38026_38053 = state_38024__$1;
(statearr_38026_38053[(2)] = inst_38020);

(statearr_38026_38053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (1))){
var state_38024__$1 = state_38024;
var statearr_38027_38054 = state_38024__$1;
(statearr_38027_38054[(2)] = null);

(statearr_38027_38054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (4))){
var inst_37977 = (state_38024[(7)]);
var inst_37977__$1 = (state_38024[(2)]);
var state_38024__$1 = (function (){var statearr_38028 = state_38024;
(statearr_38028[(7)] = inst_37977__$1);

return statearr_38028;
})();
if(cljs.core.truth_(inst_37977__$1)){
var statearr_38029_38055 = state_38024__$1;
(statearr_38029_38055[(1)] = (5));

} else {
var statearr_38030_38056 = state_38024__$1;
(statearr_38030_38056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (15))){
var inst_37984 = (state_38024[(8)]);
var inst_37999 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37984);
var inst_38000 = cljs.core.first.call(null,inst_37999);
var inst_38001 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38000);
var inst_38002 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38001)].join('');
var inst_38003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38002);
var state_38024__$1 = state_38024;
var statearr_38031_38057 = state_38024__$1;
(statearr_38031_38057[(2)] = inst_38003);

(statearr_38031_38057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (13))){
var inst_38008 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
var statearr_38032_38058 = state_38024__$1;
(statearr_38032_38058[(2)] = inst_38008);

(statearr_38032_38058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (6))){
var state_38024__$1 = state_38024;
var statearr_38033_38059 = state_38024__$1;
(statearr_38033_38059[(2)] = null);

(statearr_38033_38059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (17))){
var inst_38006 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
var statearr_38034_38060 = state_38024__$1;
(statearr_38034_38060[(2)] = inst_38006);

(statearr_38034_38060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (3))){
var inst_38022 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38024__$1,inst_38022);
} else {
if((state_val_38025 === (12))){
var inst_37983 = (state_38024[(9)]);
var inst_37997 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37983,opts);
var state_38024__$1 = state_38024;
if(cljs.core.truth_(inst_37997)){
var statearr_38035_38061 = state_38024__$1;
(statearr_38035_38061[(1)] = (15));

} else {
var statearr_38036_38062 = state_38024__$1;
(statearr_38036_38062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (2))){
var state_38024__$1 = state_38024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38024__$1,(4),ch);
} else {
if((state_val_38025 === (11))){
var inst_37984 = (state_38024[(8)]);
var inst_37989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37990 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37984);
var inst_37991 = cljs.core.async.timeout.call(null,(1000));
var inst_37992 = [inst_37990,inst_37991];
var inst_37993 = (new cljs.core.PersistentVector(null,2,(5),inst_37989,inst_37992,null));
var state_38024__$1 = state_38024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38024__$1,(14),inst_37993);
} else {
if((state_val_38025 === (9))){
var inst_37984 = (state_38024[(8)]);
var inst_38010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38011 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37984);
var inst_38012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38011);
var inst_38013 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38012)].join('');
var inst_38014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38013);
var state_38024__$1 = (function (){var statearr_38037 = state_38024;
(statearr_38037[(10)] = inst_38010);

return statearr_38037;
})();
var statearr_38038_38063 = state_38024__$1;
(statearr_38038_38063[(2)] = inst_38014);

(statearr_38038_38063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (5))){
var inst_37977 = (state_38024[(7)]);
var inst_37979 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37980 = (new cljs.core.PersistentArrayMap(null,2,inst_37979,null));
var inst_37981 = (new cljs.core.PersistentHashSet(null,inst_37980,null));
var inst_37982 = figwheel.client.focus_msgs.call(null,inst_37981,inst_37977);
var inst_37983 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37982);
var inst_37984 = cljs.core.first.call(null,inst_37982);
var inst_37985 = figwheel.client.autoload_QMARK_.call(null);
var state_38024__$1 = (function (){var statearr_38039 = state_38024;
(statearr_38039[(9)] = inst_37983);

(statearr_38039[(8)] = inst_37984);

return statearr_38039;
})();
if(cljs.core.truth_(inst_37985)){
var statearr_38040_38064 = state_38024__$1;
(statearr_38040_38064[(1)] = (8));

} else {
var statearr_38041_38065 = state_38024__$1;
(statearr_38041_38065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (14))){
var inst_37995 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
var statearr_38042_38066 = state_38024__$1;
(statearr_38042_38066[(2)] = inst_37995);

(statearr_38042_38066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (16))){
var state_38024__$1 = state_38024;
var statearr_38043_38067 = state_38024__$1;
(statearr_38043_38067[(2)] = null);

(statearr_38043_38067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (10))){
var inst_38016 = (state_38024[(2)]);
var state_38024__$1 = (function (){var statearr_38044 = state_38024;
(statearr_38044[(11)] = inst_38016);

return statearr_38044;
})();
var statearr_38045_38068 = state_38024__$1;
(statearr_38045_38068[(2)] = null);

(statearr_38045_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (8))){
var inst_37983 = (state_38024[(9)]);
var inst_37987 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37983,opts);
var state_38024__$1 = state_38024;
if(cljs.core.truth_(inst_37987)){
var statearr_38046_38069 = state_38024__$1;
(statearr_38046_38069[(1)] = (11));

} else {
var statearr_38047_38070 = state_38024__$1;
(statearr_38047_38070[(1)] = (12));

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
});})(c__30952__auto___38052,ch))
;
return ((function (switch__30864__auto__,c__30952__auto___38052,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_38048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38048[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__);

(statearr_38048[(1)] = (1));

return statearr_38048;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1 = (function (state_38024){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38049){if((e38049 instanceof Object)){
var ex__30868__auto__ = e38049;
var statearr_38050_38071 = state_38024;
(statearr_38050_38071[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_38024;
state_38024 = G__38072;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__ = function(state_38024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1.call(this,state_38024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___38052,ch))
})();
var state__30954__auto__ = (function (){var statearr_38051 = f__30953__auto__.call(null);
(statearr_38051[(6)] = c__30952__auto___38052);

return statearr_38051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___38052,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38073_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38073_SHARP_));
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
var base_path_38075 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38075){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38074){if((e38074 instanceof Error)){
var e = e38074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38075], null));
} else {
var e = e38074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38075))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38076){
var map__38077 = p__38076;
var map__38077__$1 = ((((!((map__38077 == null)))?((((map__38077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38077):map__38077);
var opts = map__38077__$1;
var build_id = cljs.core.get.call(null,map__38077__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38077,map__38077__$1,opts,build_id){
return (function (p__38079){
var vec__38080 = p__38079;
var seq__38081 = cljs.core.seq.call(null,vec__38080);
var first__38082 = cljs.core.first.call(null,seq__38081);
var seq__38081__$1 = cljs.core.next.call(null,seq__38081);
var map__38083 = first__38082;
var map__38083__$1 = ((((!((map__38083 == null)))?((((map__38083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38083):map__38083);
var msg = map__38083__$1;
var msg_name = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38081__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38080,seq__38081,first__38082,seq__38081__$1,map__38083,map__38083__$1,msg,msg_name,_,map__38077,map__38077__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38080,seq__38081,first__38082,seq__38081__$1,map__38083,map__38083__$1,msg,msg_name,_,map__38077,map__38077__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38077,map__38077__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38085){
var vec__38086 = p__38085;
var seq__38087 = cljs.core.seq.call(null,vec__38086);
var first__38088 = cljs.core.first.call(null,seq__38087);
var seq__38087__$1 = cljs.core.next.call(null,seq__38087);
var map__38089 = first__38088;
var map__38089__$1 = ((((!((map__38089 == null)))?((((map__38089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38089):map__38089);
var msg = map__38089__$1;
var msg_name = cljs.core.get.call(null,map__38089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38087__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38091){
var map__38092 = p__38091;
var map__38092__$1 = ((((!((map__38092 == null)))?((((map__38092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38092):map__38092);
var on_compile_warning = cljs.core.get.call(null,map__38092__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38092__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38092,map__38092__$1,on_compile_warning,on_compile_fail){
return (function (p__38094){
var vec__38095 = p__38094;
var seq__38096 = cljs.core.seq.call(null,vec__38095);
var first__38097 = cljs.core.first.call(null,seq__38096);
var seq__38096__$1 = cljs.core.next.call(null,seq__38096);
var map__38098 = first__38097;
var map__38098__$1 = ((((!((map__38098 == null)))?((((map__38098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38098):map__38098);
var msg = map__38098__$1;
var msg_name = cljs.core.get.call(null,map__38098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38096__$1;
var pred__38100 = cljs.core._EQ_;
var expr__38101 = msg_name;
if(cljs.core.truth_(pred__38100.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38101))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38100.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38101))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38092,map__38092__$1,on_compile_warning,on_compile_fail))
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
return (function (state_38190){
var state_val_38191 = (state_38190[(1)]);
if((state_val_38191 === (7))){
var inst_38110 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38110)){
var statearr_38192_38239 = state_38190__$1;
(statearr_38192_38239[(1)] = (8));

} else {
var statearr_38193_38240 = state_38190__$1;
(statearr_38193_38240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (20))){
var inst_38184 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38194_38241 = state_38190__$1;
(statearr_38194_38241[(2)] = inst_38184);

(statearr_38194_38241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (27))){
var inst_38180 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38195_38242 = state_38190__$1;
(statearr_38195_38242[(2)] = inst_38180);

(statearr_38195_38242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (1))){
var inst_38103 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38103)){
var statearr_38196_38243 = state_38190__$1;
(statearr_38196_38243[(1)] = (2));

} else {
var statearr_38197_38244 = state_38190__$1;
(statearr_38197_38244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (24))){
var inst_38182 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38198_38245 = state_38190__$1;
(statearr_38198_38245[(2)] = inst_38182);

(statearr_38198_38245[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (4))){
var inst_38188 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38190__$1,inst_38188);
} else {
if((state_val_38191 === (15))){
var inst_38186 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38199_38246 = state_38190__$1;
(statearr_38199_38246[(2)] = inst_38186);

(statearr_38199_38246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (21))){
var inst_38139 = (state_38190[(2)]);
var inst_38140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38140);
var state_38190__$1 = (function (){var statearr_38200 = state_38190;
(statearr_38200[(7)] = inst_38139);

return statearr_38200;
})();
var statearr_38201_38247 = state_38190__$1;
(statearr_38201_38247[(2)] = inst_38141);

(statearr_38201_38247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (31))){
var inst_38169 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38169)){
var statearr_38202_38248 = state_38190__$1;
(statearr_38202_38248[(1)] = (34));

} else {
var statearr_38203_38249 = state_38190__$1;
(statearr_38203_38249[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (32))){
var inst_38178 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38204_38250 = state_38190__$1;
(statearr_38204_38250[(2)] = inst_38178);

(statearr_38204_38250[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (33))){
var inst_38165 = (state_38190[(2)]);
var inst_38166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38166);
var state_38190__$1 = (function (){var statearr_38205 = state_38190;
(statearr_38205[(8)] = inst_38165);

return statearr_38205;
})();
var statearr_38206_38251 = state_38190__$1;
(statearr_38206_38251[(2)] = inst_38167);

(statearr_38206_38251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (13))){
var inst_38124 = figwheel.client.heads_up.clear.call(null);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(16),inst_38124);
} else {
if((state_val_38191 === (22))){
var inst_38145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38146 = figwheel.client.heads_up.append_warning_message.call(null,inst_38145);
var state_38190__$1 = state_38190;
var statearr_38207_38252 = state_38190__$1;
(statearr_38207_38252[(2)] = inst_38146);

(statearr_38207_38252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (36))){
var inst_38176 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38208_38253 = state_38190__$1;
(statearr_38208_38253[(2)] = inst_38176);

(statearr_38208_38253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (29))){
var inst_38156 = (state_38190[(2)]);
var inst_38157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38158 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38157);
var state_38190__$1 = (function (){var statearr_38209 = state_38190;
(statearr_38209[(9)] = inst_38156);

return statearr_38209;
})();
var statearr_38210_38254 = state_38190__$1;
(statearr_38210_38254[(2)] = inst_38158);

(statearr_38210_38254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (6))){
var inst_38105 = (state_38190[(10)]);
var state_38190__$1 = state_38190;
var statearr_38211_38255 = state_38190__$1;
(statearr_38211_38255[(2)] = inst_38105);

(statearr_38211_38255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (28))){
var inst_38152 = (state_38190[(2)]);
var inst_38153 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38154 = figwheel.client.heads_up.display_warning.call(null,inst_38153);
var state_38190__$1 = (function (){var statearr_38212 = state_38190;
(statearr_38212[(11)] = inst_38152);

return statearr_38212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(29),inst_38154);
} else {
if((state_val_38191 === (25))){
var inst_38150 = figwheel.client.heads_up.clear.call(null);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(28),inst_38150);
} else {
if((state_val_38191 === (34))){
var inst_38171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(37),inst_38171);
} else {
if((state_val_38191 === (17))){
var inst_38130 = (state_38190[(2)]);
var inst_38131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38132 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38131);
var state_38190__$1 = (function (){var statearr_38213 = state_38190;
(statearr_38213[(12)] = inst_38130);

return statearr_38213;
})();
var statearr_38214_38256 = state_38190__$1;
(statearr_38214_38256[(2)] = inst_38132);

(statearr_38214_38256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (3))){
var inst_38122 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38122)){
var statearr_38215_38257 = state_38190__$1;
(statearr_38215_38257[(1)] = (13));

} else {
var statearr_38216_38258 = state_38190__$1;
(statearr_38216_38258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (12))){
var inst_38118 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38217_38259 = state_38190__$1;
(statearr_38217_38259[(2)] = inst_38118);

(statearr_38217_38259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (2))){
var inst_38105 = (state_38190[(10)]);
var inst_38105__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38190__$1 = (function (){var statearr_38218 = state_38190;
(statearr_38218[(10)] = inst_38105__$1);

return statearr_38218;
})();
if(cljs.core.truth_(inst_38105__$1)){
var statearr_38219_38260 = state_38190__$1;
(statearr_38219_38260[(1)] = (5));

} else {
var statearr_38220_38261 = state_38190__$1;
(statearr_38220_38261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (23))){
var inst_38148 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38148)){
var statearr_38221_38262 = state_38190__$1;
(statearr_38221_38262[(1)] = (25));

} else {
var statearr_38222_38263 = state_38190__$1;
(statearr_38222_38263[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (35))){
var state_38190__$1 = state_38190;
var statearr_38223_38264 = state_38190__$1;
(statearr_38223_38264[(2)] = null);

(statearr_38223_38264[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (19))){
var inst_38143 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38143)){
var statearr_38224_38265 = state_38190__$1;
(statearr_38224_38265[(1)] = (22));

} else {
var statearr_38225_38266 = state_38190__$1;
(statearr_38225_38266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (11))){
var inst_38114 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38226_38267 = state_38190__$1;
(statearr_38226_38267[(2)] = inst_38114);

(statearr_38226_38267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (9))){
var inst_38116 = figwheel.client.heads_up.clear.call(null);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(12),inst_38116);
} else {
if((state_val_38191 === (5))){
var inst_38107 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38190__$1 = state_38190;
var statearr_38227_38268 = state_38190__$1;
(statearr_38227_38268[(2)] = inst_38107);

(statearr_38227_38268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (14))){
var inst_38134 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38134)){
var statearr_38228_38269 = state_38190__$1;
(statearr_38228_38269[(1)] = (18));

} else {
var statearr_38229_38270 = state_38190__$1;
(statearr_38229_38270[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (26))){
var inst_38160 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38190__$1 = state_38190;
if(cljs.core.truth_(inst_38160)){
var statearr_38230_38271 = state_38190__$1;
(statearr_38230_38271[(1)] = (30));

} else {
var statearr_38231_38272 = state_38190__$1;
(statearr_38231_38272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (16))){
var inst_38126 = (state_38190[(2)]);
var inst_38127 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38128 = figwheel.client.heads_up.display_exception.call(null,inst_38127);
var state_38190__$1 = (function (){var statearr_38232 = state_38190;
(statearr_38232[(13)] = inst_38126);

return statearr_38232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(17),inst_38128);
} else {
if((state_val_38191 === (30))){
var inst_38162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38163 = figwheel.client.heads_up.display_warning.call(null,inst_38162);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(33),inst_38163);
} else {
if((state_val_38191 === (10))){
var inst_38120 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38233_38273 = state_38190__$1;
(statearr_38233_38273[(2)] = inst_38120);

(statearr_38233_38273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (18))){
var inst_38136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38137 = figwheel.client.heads_up.display_exception.call(null,inst_38136);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(21),inst_38137);
} else {
if((state_val_38191 === (37))){
var inst_38173 = (state_38190[(2)]);
var state_38190__$1 = state_38190;
var statearr_38234_38274 = state_38190__$1;
(statearr_38234_38274[(2)] = inst_38173);

(statearr_38234_38274[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38191 === (8))){
var inst_38112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38190__$1 = state_38190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38190__$1,(11),inst_38112);
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
var statearr_38235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38235[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__);

(statearr_38235[(1)] = (1));

return statearr_38235;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1 = (function (state_38190){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38236){if((e38236 instanceof Object)){
var ex__30868__auto__ = e38236;
var statearr_38237_38275 = state_38190;
(statearr_38237_38275[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38276 = state_38190;
state_38190 = G__38276;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__ = function(state_38190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1.call(this,state_38190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,msg_hist,msg_names,msg))
})();
var state__30954__auto__ = (function (){var statearr_38238 = f__30953__auto__.call(null);
(statearr_38238[(6)] = c__30952__auto__);

return statearr_38238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,msg_hist,msg_names,msg))
);

return c__30952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30952__auto___38305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___38305,ch){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___38305,ch){
return (function (state_38291){
var state_val_38292 = (state_38291[(1)]);
if((state_val_38292 === (1))){
var state_38291__$1 = state_38291;
var statearr_38293_38306 = state_38291__$1;
(statearr_38293_38306[(2)] = null);

(statearr_38293_38306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (2))){
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38291__$1,(4),ch);
} else {
if((state_val_38292 === (3))){
var inst_38289 = (state_38291[(2)]);
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38291__$1,inst_38289);
} else {
if((state_val_38292 === (4))){
var inst_38279 = (state_38291[(7)]);
var inst_38279__$1 = (state_38291[(2)]);
var state_38291__$1 = (function (){var statearr_38294 = state_38291;
(statearr_38294[(7)] = inst_38279__$1);

return statearr_38294;
})();
if(cljs.core.truth_(inst_38279__$1)){
var statearr_38295_38307 = state_38291__$1;
(statearr_38295_38307[(1)] = (5));

} else {
var statearr_38296_38308 = state_38291__$1;
(statearr_38296_38308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (5))){
var inst_38279 = (state_38291[(7)]);
var inst_38281 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38279);
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38291__$1,(8),inst_38281);
} else {
if((state_val_38292 === (6))){
var state_38291__$1 = state_38291;
var statearr_38297_38309 = state_38291__$1;
(statearr_38297_38309[(2)] = null);

(statearr_38297_38309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (7))){
var inst_38287 = (state_38291[(2)]);
var state_38291__$1 = state_38291;
var statearr_38298_38310 = state_38291__$1;
(statearr_38298_38310[(2)] = inst_38287);

(statearr_38298_38310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38292 === (8))){
var inst_38283 = (state_38291[(2)]);
var state_38291__$1 = (function (){var statearr_38299 = state_38291;
(statearr_38299[(8)] = inst_38283);

return statearr_38299;
})();
var statearr_38300_38311 = state_38291__$1;
(statearr_38300_38311[(2)] = null);

(statearr_38300_38311[(1)] = (2));


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
});})(c__30952__auto___38305,ch))
;
return ((function (switch__30864__auto__,c__30952__auto___38305,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_38301 = [null,null,null,null,null,null,null,null,null];
(statearr_38301[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30865__auto__);

(statearr_38301[(1)] = (1));

return statearr_38301;
});
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1 = (function (state_38291){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38302){if((e38302 instanceof Object)){
var ex__30868__auto__ = e38302;
var statearr_38303_38312 = state_38291;
(statearr_38303_38312[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38313 = state_38291;
state_38291 = G__38313;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__ = function(state_38291){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1.call(this,state_38291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___38305,ch))
})();
var state__30954__auto__ = (function (){var statearr_38304 = f__30953__auto__.call(null);
(statearr_38304[(6)] = c__30952__auto___38305);

return statearr_38304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___38305,ch))
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
return (function (state_38319){
var state_val_38320 = (state_38319[(1)]);
if((state_val_38320 === (1))){
var inst_38314 = cljs.core.async.timeout.call(null,(3000));
var state_38319__$1 = state_38319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38319__$1,(2),inst_38314);
} else {
if((state_val_38320 === (2))){
var inst_38316 = (state_38319[(2)]);
var inst_38317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38319__$1 = (function (){var statearr_38321 = state_38319;
(statearr_38321[(7)] = inst_38316);

return statearr_38321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38319__$1,inst_38317);
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
var statearr_38322 = [null,null,null,null,null,null,null,null];
(statearr_38322[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__);

(statearr_38322[(1)] = (1));

return statearr_38322;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1 = (function (state_38319){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38323){if((e38323 instanceof Object)){
var ex__30868__auto__ = e38323;
var statearr_38324_38326 = state_38319;
(statearr_38324_38326[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38327 = state_38319;
state_38319 = G__38327;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__ = function(state_38319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1.call(this,state_38319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_38325 = f__30953__auto__.call(null);
(statearr_38325[(6)] = c__30952__auto__);

return statearr_38325;
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
return (function (state_38334){
var state_val_38335 = (state_38334[(1)]);
if((state_val_38335 === (1))){
var inst_38328 = cljs.core.async.timeout.call(null,(2000));
var state_38334__$1 = state_38334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38334__$1,(2),inst_38328);
} else {
if((state_val_38335 === (2))){
var inst_38330 = (state_38334[(2)]);
var inst_38331 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38332 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38331);
var state_38334__$1 = (function (){var statearr_38336 = state_38334;
(statearr_38336[(7)] = inst_38330);

return statearr_38336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38334__$1,inst_38332);
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
var statearr_38337 = [null,null,null,null,null,null,null,null];
(statearr_38337[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__);

(statearr_38337[(1)] = (1));

return statearr_38337;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1 = (function (state_38334){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_38334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e38338){if((e38338 instanceof Object)){
var ex__30868__auto__ = e38338;
var statearr_38339_38341 = state_38334;
(statearr_38339_38341[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38342 = state_38334;
state_38334 = G__38342;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__ = function(state_38334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1.call(this,state_38334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30954__auto__ = (function (){var statearr_38340 = f__30953__auto__.call(null);
(statearr_38340[(6)] = c__30952__auto__);

return statearr_38340;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38343){
var map__38344 = p__38343;
var map__38344__$1 = ((((!((map__38344 == null)))?((((map__38344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38344):map__38344);
var file = cljs.core.get.call(null,map__38344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38344__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38344__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38346 = "";
var G__38346__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38346),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38346);
var G__38346__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38346__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38346__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38346__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38346__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38347){
var map__38348 = p__38347;
var map__38348__$1 = ((((!((map__38348 == null)))?((((map__38348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38348):map__38348);
var ed = map__38348__$1;
var formatted_exception = cljs.core.get.call(null,map__38348__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38348__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38348__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38350_38354 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38351_38355 = null;
var count__38352_38356 = (0);
var i__38353_38357 = (0);
while(true){
if((i__38353_38357 < count__38352_38356)){
var msg_38358 = cljs.core._nth.call(null,chunk__38351_38355,i__38353_38357);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38358);

var G__38359 = seq__38350_38354;
var G__38360 = chunk__38351_38355;
var G__38361 = count__38352_38356;
var G__38362 = (i__38353_38357 + (1));
seq__38350_38354 = G__38359;
chunk__38351_38355 = G__38360;
count__38352_38356 = G__38361;
i__38353_38357 = G__38362;
continue;
} else {
var temp__4657__auto___38363 = cljs.core.seq.call(null,seq__38350_38354);
if(temp__4657__auto___38363){
var seq__38350_38364__$1 = temp__4657__auto___38363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38350_38364__$1)){
var c__28034__auto___38365 = cljs.core.chunk_first.call(null,seq__38350_38364__$1);
var G__38366 = cljs.core.chunk_rest.call(null,seq__38350_38364__$1);
var G__38367 = c__28034__auto___38365;
var G__38368 = cljs.core.count.call(null,c__28034__auto___38365);
var G__38369 = (0);
seq__38350_38354 = G__38366;
chunk__38351_38355 = G__38367;
count__38352_38356 = G__38368;
i__38353_38357 = G__38369;
continue;
} else {
var msg_38370 = cljs.core.first.call(null,seq__38350_38364__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38370);

var G__38371 = cljs.core.next.call(null,seq__38350_38364__$1);
var G__38372 = null;
var G__38373 = (0);
var G__38374 = (0);
seq__38350_38354 = G__38371;
chunk__38351_38355 = G__38372;
count__38352_38356 = G__38373;
i__38353_38357 = G__38374;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38375){
var map__38376 = p__38375;
var map__38376__$1 = ((((!((map__38376 == null)))?((((map__38376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38376):map__38376);
var w = map__38376__$1;
var message = cljs.core.get.call(null,map__38376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38378 = cljs.core.seq.call(null,plugins);
var chunk__38379 = null;
var count__38380 = (0);
var i__38381 = (0);
while(true){
if((i__38381 < count__38380)){
var vec__38382 = cljs.core._nth.call(null,chunk__38379,i__38381);
var k = cljs.core.nth.call(null,vec__38382,(0),null);
var plugin = cljs.core.nth.call(null,vec__38382,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38378,chunk__38379,count__38380,i__38381,pl_38388,vec__38382,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38388.call(null,msg_hist);
});})(seq__38378,chunk__38379,count__38380,i__38381,pl_38388,vec__38382,k,plugin))
);
} else {
}

var G__38389 = seq__38378;
var G__38390 = chunk__38379;
var G__38391 = count__38380;
var G__38392 = (i__38381 + (1));
seq__38378 = G__38389;
chunk__38379 = G__38390;
count__38380 = G__38391;
i__38381 = G__38392;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38378);
if(temp__4657__auto__){
var seq__38378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38378__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38378__$1);
var G__38393 = cljs.core.chunk_rest.call(null,seq__38378__$1);
var G__38394 = c__28034__auto__;
var G__38395 = cljs.core.count.call(null,c__28034__auto__);
var G__38396 = (0);
seq__38378 = G__38393;
chunk__38379 = G__38394;
count__38380 = G__38395;
i__38381 = G__38396;
continue;
} else {
var vec__38385 = cljs.core.first.call(null,seq__38378__$1);
var k = cljs.core.nth.call(null,vec__38385,(0),null);
var plugin = cljs.core.nth.call(null,vec__38385,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38397 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38378,chunk__38379,count__38380,i__38381,pl_38397,vec__38385,k,plugin,seq__38378__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38397.call(null,msg_hist);
});})(seq__38378,chunk__38379,count__38380,i__38381,pl_38397,vec__38385,k,plugin,seq__38378__$1,temp__4657__auto__))
);
} else {
}

var G__38398 = cljs.core.next.call(null,seq__38378__$1);
var G__38399 = null;
var G__38400 = (0);
var G__38401 = (0);
seq__38378 = G__38398;
chunk__38379 = G__38399;
count__38380 = G__38400;
i__38381 = G__38401;
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
var G__38403 = arguments.length;
switch (G__38403) {
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

var seq__38404_38409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38405_38410 = null;
var count__38406_38411 = (0);
var i__38407_38412 = (0);
while(true){
if((i__38407_38412 < count__38406_38411)){
var msg_38413 = cljs.core._nth.call(null,chunk__38405_38410,i__38407_38412);
figwheel.client.socket.handle_incoming_message.call(null,msg_38413);

var G__38414 = seq__38404_38409;
var G__38415 = chunk__38405_38410;
var G__38416 = count__38406_38411;
var G__38417 = (i__38407_38412 + (1));
seq__38404_38409 = G__38414;
chunk__38405_38410 = G__38415;
count__38406_38411 = G__38416;
i__38407_38412 = G__38417;
continue;
} else {
var temp__4657__auto___38418 = cljs.core.seq.call(null,seq__38404_38409);
if(temp__4657__auto___38418){
var seq__38404_38419__$1 = temp__4657__auto___38418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38404_38419__$1)){
var c__28034__auto___38420 = cljs.core.chunk_first.call(null,seq__38404_38419__$1);
var G__38421 = cljs.core.chunk_rest.call(null,seq__38404_38419__$1);
var G__38422 = c__28034__auto___38420;
var G__38423 = cljs.core.count.call(null,c__28034__auto___38420);
var G__38424 = (0);
seq__38404_38409 = G__38421;
chunk__38405_38410 = G__38422;
count__38406_38411 = G__38423;
i__38407_38412 = G__38424;
continue;
} else {
var msg_38425 = cljs.core.first.call(null,seq__38404_38419__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38425);

var G__38426 = cljs.core.next.call(null,seq__38404_38419__$1);
var G__38427 = null;
var G__38428 = (0);
var G__38429 = (0);
seq__38404_38409 = G__38426;
chunk__38405_38410 = G__38427;
count__38406_38411 = G__38428;
i__38407_38412 = G__38429;
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
var len__28364__auto___38434 = arguments.length;
var i__28365__auto___38435 = (0);
while(true){
if((i__28365__auto___38435 < len__28364__auto___38434)){
args__28371__auto__.push((arguments[i__28365__auto___38435]));

var G__38436 = (i__28365__auto___38435 + (1));
i__28365__auto___38435 = G__38436;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38431){
var map__38432 = p__38431;
var map__38432__$1 = ((((!((map__38432 == null)))?((((map__38432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38432):map__38432);
var opts = map__38432__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38430){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38430));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38437){if((e38437 instanceof Error)){
var e = e38437;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38437;

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
return (function (p__38438){
var map__38439 = p__38438;
var map__38439__$1 = ((((!((map__38439 == null)))?((((map__38439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38439):map__38439);
var msg_name = cljs.core.get.call(null,map__38439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513846755399
