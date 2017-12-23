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
}catch (e37988){if((e37988 instanceof Error)){
var e = e37988;
return "Error: Unable to stringify";
} else {
throw e37988;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37991 = arguments.length;
switch (G__37991) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37989_SHARP_){
if(typeof p1__37989_SHARP_ === 'string'){
return p1__37989_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37989_SHARP_);
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
var len__28364__auto___37994 = arguments.length;
var i__28365__auto___37995 = (0);
while(true){
if((i__28365__auto___37995 < len__28364__auto___37994)){
args__28371__auto__.push((arguments[i__28365__auto___37995]));

var G__37996 = (i__28365__auto___37995 + (1));
i__28365__auto___37995 = G__37996;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37993){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37993));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___37998 = arguments.length;
var i__28365__auto___37999 = (0);
while(true){
if((i__28365__auto___37999 < len__28364__auto___37998)){
args__28371__auto__.push((arguments[i__28365__auto___37999]));

var G__38000 = (i__28365__auto___37999 + (1));
i__28365__auto___37999 = G__38000;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37997){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37997));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38001){
var map__38002 = p__38001;
var map__38002__$1 = ((((!((map__38002 == null)))?((((map__38002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38002):map__38002);
var message = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38002__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30953__auto___38081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___38081,ch){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___38081,ch){
return (function (state_38053){
var state_val_38054 = (state_38053[(1)]);
if((state_val_38054 === (7))){
var inst_38049 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38055_38082 = state_38053__$1;
(statearr_38055_38082[(2)] = inst_38049);

(statearr_38055_38082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (1))){
var state_38053__$1 = state_38053;
var statearr_38056_38083 = state_38053__$1;
(statearr_38056_38083[(2)] = null);

(statearr_38056_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (4))){
var inst_38006 = (state_38053[(7)]);
var inst_38006__$1 = (state_38053[(2)]);
var state_38053__$1 = (function (){var statearr_38057 = state_38053;
(statearr_38057[(7)] = inst_38006__$1);

return statearr_38057;
})();
if(cljs.core.truth_(inst_38006__$1)){
var statearr_38058_38084 = state_38053__$1;
(statearr_38058_38084[(1)] = (5));

} else {
var statearr_38059_38085 = state_38053__$1;
(statearr_38059_38085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (15))){
var inst_38013 = (state_38053[(8)]);
var inst_38028 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38013);
var inst_38029 = cljs.core.first.call(null,inst_38028);
var inst_38030 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38029);
var inst_38031 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38030)].join('');
var inst_38032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38031);
var state_38053__$1 = state_38053;
var statearr_38060_38086 = state_38053__$1;
(statearr_38060_38086[(2)] = inst_38032);

(statearr_38060_38086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (13))){
var inst_38037 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38061_38087 = state_38053__$1;
(statearr_38061_38087[(2)] = inst_38037);

(statearr_38061_38087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (6))){
var state_38053__$1 = state_38053;
var statearr_38062_38088 = state_38053__$1;
(statearr_38062_38088[(2)] = null);

(statearr_38062_38088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (17))){
var inst_38035 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38063_38089 = state_38053__$1;
(statearr_38063_38089[(2)] = inst_38035);

(statearr_38063_38089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (3))){
var inst_38051 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38053__$1,inst_38051);
} else {
if((state_val_38054 === (12))){
var inst_38012 = (state_38053[(9)]);
var inst_38026 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38012,opts);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_38026)){
var statearr_38064_38090 = state_38053__$1;
(statearr_38064_38090[(1)] = (15));

} else {
var statearr_38065_38091 = state_38053__$1;
(statearr_38065_38091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (2))){
var state_38053__$1 = state_38053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38053__$1,(4),ch);
} else {
if((state_val_38054 === (11))){
var inst_38013 = (state_38053[(8)]);
var inst_38018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38019 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38013);
var inst_38020 = cljs.core.async.timeout.call(null,(1000));
var inst_38021 = [inst_38019,inst_38020];
var inst_38022 = (new cljs.core.PersistentVector(null,2,(5),inst_38018,inst_38021,null));
var state_38053__$1 = state_38053;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38053__$1,(14),inst_38022);
} else {
if((state_val_38054 === (9))){
var inst_38013 = (state_38053[(8)]);
var inst_38039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38040 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38013);
var inst_38041 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38040);
var inst_38042 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38041)].join('');
var inst_38043 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38042);
var state_38053__$1 = (function (){var statearr_38066 = state_38053;
(statearr_38066[(10)] = inst_38039);

return statearr_38066;
})();
var statearr_38067_38092 = state_38053__$1;
(statearr_38067_38092[(2)] = inst_38043);

(statearr_38067_38092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (5))){
var inst_38006 = (state_38053[(7)]);
var inst_38008 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38009 = (new cljs.core.PersistentArrayMap(null,2,inst_38008,null));
var inst_38010 = (new cljs.core.PersistentHashSet(null,inst_38009,null));
var inst_38011 = figwheel.client.focus_msgs.call(null,inst_38010,inst_38006);
var inst_38012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38011);
var inst_38013 = cljs.core.first.call(null,inst_38011);
var inst_38014 = figwheel.client.autoload_QMARK_.call(null);
var state_38053__$1 = (function (){var statearr_38068 = state_38053;
(statearr_38068[(8)] = inst_38013);

(statearr_38068[(9)] = inst_38012);

return statearr_38068;
})();
if(cljs.core.truth_(inst_38014)){
var statearr_38069_38093 = state_38053__$1;
(statearr_38069_38093[(1)] = (8));

} else {
var statearr_38070_38094 = state_38053__$1;
(statearr_38070_38094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (14))){
var inst_38024 = (state_38053[(2)]);
var state_38053__$1 = state_38053;
var statearr_38071_38095 = state_38053__$1;
(statearr_38071_38095[(2)] = inst_38024);

(statearr_38071_38095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (16))){
var state_38053__$1 = state_38053;
var statearr_38072_38096 = state_38053__$1;
(statearr_38072_38096[(2)] = null);

(statearr_38072_38096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (10))){
var inst_38045 = (state_38053[(2)]);
var state_38053__$1 = (function (){var statearr_38073 = state_38053;
(statearr_38073[(11)] = inst_38045);

return statearr_38073;
})();
var statearr_38074_38097 = state_38053__$1;
(statearr_38074_38097[(2)] = null);

(statearr_38074_38097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38054 === (8))){
var inst_38012 = (state_38053[(9)]);
var inst_38016 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38012,opts);
var state_38053__$1 = state_38053;
if(cljs.core.truth_(inst_38016)){
var statearr_38075_38098 = state_38053__$1;
(statearr_38075_38098[(1)] = (11));

} else {
var statearr_38076_38099 = state_38053__$1;
(statearr_38076_38099[(1)] = (12));

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
});})(c__30953__auto___38081,ch))
;
return ((function (switch__30865__auto__,c__30953__auto___38081,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30866__auto____0 = (function (){
var statearr_38077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38077[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30866__auto__);

(statearr_38077[(1)] = (1));

return statearr_38077;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30866__auto____1 = (function (state_38053){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_38053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e38078){if((e38078 instanceof Object)){
var ex__30869__auto__ = e38078;
var statearr_38079_38100 = state_38053;
(statearr_38079_38100[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38101 = state_38053;
state_38053 = G__38101;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30866__auto__ = function(state_38053){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30866__auto____1.call(this,state_38053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___38081,ch))
})();
var state__30955__auto__ = (function (){var statearr_38080 = f__30954__auto__.call(null);
(statearr_38080[(6)] = c__30953__auto___38081);

return statearr_38080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___38081,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38102_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38102_SHARP_));
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
var base_path_38104 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38104){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38103){if((e38103 instanceof Error)){
var e = e38103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38104], null));
} else {
var e = e38103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38104))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38105){
var map__38106 = p__38105;
var map__38106__$1 = ((((!((map__38106 == null)))?((((map__38106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38106):map__38106);
var opts = map__38106__$1;
var build_id = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38106,map__38106__$1,opts,build_id){
return (function (p__38108){
var vec__38109 = p__38108;
var seq__38110 = cljs.core.seq.call(null,vec__38109);
var first__38111 = cljs.core.first.call(null,seq__38110);
var seq__38110__$1 = cljs.core.next.call(null,seq__38110);
var map__38112 = first__38111;
var map__38112__$1 = ((((!((map__38112 == null)))?((((map__38112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38112):map__38112);
var msg = map__38112__$1;
var msg_name = cljs.core.get.call(null,map__38112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38110__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38109,seq__38110,first__38111,seq__38110__$1,map__38112,map__38112__$1,msg,msg_name,_,map__38106,map__38106__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38109,seq__38110,first__38111,seq__38110__$1,map__38112,map__38112__$1,msg,msg_name,_,map__38106,map__38106__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38106,map__38106__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38114){
var vec__38115 = p__38114;
var seq__38116 = cljs.core.seq.call(null,vec__38115);
var first__38117 = cljs.core.first.call(null,seq__38116);
var seq__38116__$1 = cljs.core.next.call(null,seq__38116);
var map__38118 = first__38117;
var map__38118__$1 = ((((!((map__38118 == null)))?((((map__38118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38118):map__38118);
var msg = map__38118__$1;
var msg_name = cljs.core.get.call(null,map__38118__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38116__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38120){
var map__38121 = p__38120;
var map__38121__$1 = ((((!((map__38121 == null)))?((((map__38121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38121):map__38121);
var on_compile_warning = cljs.core.get.call(null,map__38121__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38121__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38121,map__38121__$1,on_compile_warning,on_compile_fail){
return (function (p__38123){
var vec__38124 = p__38123;
var seq__38125 = cljs.core.seq.call(null,vec__38124);
var first__38126 = cljs.core.first.call(null,seq__38125);
var seq__38125__$1 = cljs.core.next.call(null,seq__38125);
var map__38127 = first__38126;
var map__38127__$1 = ((((!((map__38127 == null)))?((((map__38127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38127):map__38127);
var msg = map__38127__$1;
var msg_name = cljs.core.get.call(null,map__38127__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38125__$1;
var pred__38129 = cljs.core._EQ_;
var expr__38130 = msg_name;
if(cljs.core.truth_(pred__38129.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38130))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38129.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38130))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38121,map__38121__$1,on_compile_warning,on_compile_fail))
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
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__,msg_hist,msg_names,msg){
return (function (state_38219){
var state_val_38220 = (state_38219[(1)]);
if((state_val_38220 === (7))){
var inst_38139 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38139)){
var statearr_38221_38268 = state_38219__$1;
(statearr_38221_38268[(1)] = (8));

} else {
var statearr_38222_38269 = state_38219__$1;
(statearr_38222_38269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (20))){
var inst_38213 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38223_38270 = state_38219__$1;
(statearr_38223_38270[(2)] = inst_38213);

(statearr_38223_38270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (27))){
var inst_38209 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38224_38271 = state_38219__$1;
(statearr_38224_38271[(2)] = inst_38209);

(statearr_38224_38271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (1))){
var inst_38132 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38132)){
var statearr_38225_38272 = state_38219__$1;
(statearr_38225_38272[(1)] = (2));

} else {
var statearr_38226_38273 = state_38219__$1;
(statearr_38226_38273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (24))){
var inst_38211 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38227_38274 = state_38219__$1;
(statearr_38227_38274[(2)] = inst_38211);

(statearr_38227_38274[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (4))){
var inst_38217 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38219__$1,inst_38217);
} else {
if((state_val_38220 === (15))){
var inst_38215 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38228_38275 = state_38219__$1;
(statearr_38228_38275[(2)] = inst_38215);

(statearr_38228_38275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (21))){
var inst_38168 = (state_38219[(2)]);
var inst_38169 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38170 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38169);
var state_38219__$1 = (function (){var statearr_38229 = state_38219;
(statearr_38229[(7)] = inst_38168);

return statearr_38229;
})();
var statearr_38230_38276 = state_38219__$1;
(statearr_38230_38276[(2)] = inst_38170);

(statearr_38230_38276[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (31))){
var inst_38198 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38198)){
var statearr_38231_38277 = state_38219__$1;
(statearr_38231_38277[(1)] = (34));

} else {
var statearr_38232_38278 = state_38219__$1;
(statearr_38232_38278[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (32))){
var inst_38207 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38233_38279 = state_38219__$1;
(statearr_38233_38279[(2)] = inst_38207);

(statearr_38233_38279[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (33))){
var inst_38194 = (state_38219[(2)]);
var inst_38195 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38196 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38195);
var state_38219__$1 = (function (){var statearr_38234 = state_38219;
(statearr_38234[(8)] = inst_38194);

return statearr_38234;
})();
var statearr_38235_38280 = state_38219__$1;
(statearr_38235_38280[(2)] = inst_38196);

(statearr_38235_38280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (13))){
var inst_38153 = figwheel.client.heads_up.clear.call(null);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(16),inst_38153);
} else {
if((state_val_38220 === (22))){
var inst_38174 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38175 = figwheel.client.heads_up.append_warning_message.call(null,inst_38174);
var state_38219__$1 = state_38219;
var statearr_38236_38281 = state_38219__$1;
(statearr_38236_38281[(2)] = inst_38175);

(statearr_38236_38281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (36))){
var inst_38205 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38237_38282 = state_38219__$1;
(statearr_38237_38282[(2)] = inst_38205);

(statearr_38237_38282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (29))){
var inst_38185 = (state_38219[(2)]);
var inst_38186 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38187 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38186);
var state_38219__$1 = (function (){var statearr_38238 = state_38219;
(statearr_38238[(9)] = inst_38185);

return statearr_38238;
})();
var statearr_38239_38283 = state_38219__$1;
(statearr_38239_38283[(2)] = inst_38187);

(statearr_38239_38283[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (6))){
var inst_38134 = (state_38219[(10)]);
var state_38219__$1 = state_38219;
var statearr_38240_38284 = state_38219__$1;
(statearr_38240_38284[(2)] = inst_38134);

(statearr_38240_38284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (28))){
var inst_38181 = (state_38219[(2)]);
var inst_38182 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38183 = figwheel.client.heads_up.display_warning.call(null,inst_38182);
var state_38219__$1 = (function (){var statearr_38241 = state_38219;
(statearr_38241[(11)] = inst_38181);

return statearr_38241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(29),inst_38183);
} else {
if((state_val_38220 === (25))){
var inst_38179 = figwheel.client.heads_up.clear.call(null);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(28),inst_38179);
} else {
if((state_val_38220 === (34))){
var inst_38200 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(37),inst_38200);
} else {
if((state_val_38220 === (17))){
var inst_38159 = (state_38219[(2)]);
var inst_38160 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38161 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38160);
var state_38219__$1 = (function (){var statearr_38242 = state_38219;
(statearr_38242[(12)] = inst_38159);

return statearr_38242;
})();
var statearr_38243_38285 = state_38219__$1;
(statearr_38243_38285[(2)] = inst_38161);

(statearr_38243_38285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (3))){
var inst_38151 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38151)){
var statearr_38244_38286 = state_38219__$1;
(statearr_38244_38286[(1)] = (13));

} else {
var statearr_38245_38287 = state_38219__$1;
(statearr_38245_38287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (12))){
var inst_38147 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38246_38288 = state_38219__$1;
(statearr_38246_38288[(2)] = inst_38147);

(statearr_38246_38288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (2))){
var inst_38134 = (state_38219[(10)]);
var inst_38134__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38219__$1 = (function (){var statearr_38247 = state_38219;
(statearr_38247[(10)] = inst_38134__$1);

return statearr_38247;
})();
if(cljs.core.truth_(inst_38134__$1)){
var statearr_38248_38289 = state_38219__$1;
(statearr_38248_38289[(1)] = (5));

} else {
var statearr_38249_38290 = state_38219__$1;
(statearr_38249_38290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (23))){
var inst_38177 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38177)){
var statearr_38250_38291 = state_38219__$1;
(statearr_38250_38291[(1)] = (25));

} else {
var statearr_38251_38292 = state_38219__$1;
(statearr_38251_38292[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (35))){
var state_38219__$1 = state_38219;
var statearr_38252_38293 = state_38219__$1;
(statearr_38252_38293[(2)] = null);

(statearr_38252_38293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (19))){
var inst_38172 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38172)){
var statearr_38253_38294 = state_38219__$1;
(statearr_38253_38294[(1)] = (22));

} else {
var statearr_38254_38295 = state_38219__$1;
(statearr_38254_38295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (11))){
var inst_38143 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38255_38296 = state_38219__$1;
(statearr_38255_38296[(2)] = inst_38143);

(statearr_38255_38296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (9))){
var inst_38145 = figwheel.client.heads_up.clear.call(null);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(12),inst_38145);
} else {
if((state_val_38220 === (5))){
var inst_38136 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38219__$1 = state_38219;
var statearr_38256_38297 = state_38219__$1;
(statearr_38256_38297[(2)] = inst_38136);

(statearr_38256_38297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (14))){
var inst_38163 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38163)){
var statearr_38257_38298 = state_38219__$1;
(statearr_38257_38298[(1)] = (18));

} else {
var statearr_38258_38299 = state_38219__$1;
(statearr_38258_38299[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (26))){
var inst_38189 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38189)){
var statearr_38259_38300 = state_38219__$1;
(statearr_38259_38300[(1)] = (30));

} else {
var statearr_38260_38301 = state_38219__$1;
(statearr_38260_38301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (16))){
var inst_38155 = (state_38219[(2)]);
var inst_38156 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38157 = figwheel.client.heads_up.display_exception.call(null,inst_38156);
var state_38219__$1 = (function (){var statearr_38261 = state_38219;
(statearr_38261[(13)] = inst_38155);

return statearr_38261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(17),inst_38157);
} else {
if((state_val_38220 === (30))){
var inst_38191 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38192 = figwheel.client.heads_up.display_warning.call(null,inst_38191);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(33),inst_38192);
} else {
if((state_val_38220 === (10))){
var inst_38149 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38262_38302 = state_38219__$1;
(statearr_38262_38302[(2)] = inst_38149);

(statearr_38262_38302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (18))){
var inst_38165 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38166 = figwheel.client.heads_up.display_exception.call(null,inst_38165);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(21),inst_38166);
} else {
if((state_val_38220 === (37))){
var inst_38202 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38263_38303 = state_38219__$1;
(statearr_38263_38303[(2)] = inst_38202);

(statearr_38263_38303[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (8))){
var inst_38141 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38219__$1,(11),inst_38141);
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
});})(c__30953__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30865__auto__,c__30953__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto____0 = (function (){
var statearr_38264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38264[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto__);

(statearr_38264[(1)] = (1));

return statearr_38264;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto____1 = (function (state_38219){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_38219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e38265){if((e38265 instanceof Object)){
var ex__30869__auto__ = e38265;
var statearr_38266_38304 = state_38219;
(statearr_38266_38304[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38305 = state_38219;
state_38219 = G__38305;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto__ = function(state_38219){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto____1.call(this,state_38219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__,msg_hist,msg_names,msg))
})();
var state__30955__auto__ = (function (){var statearr_38267 = f__30954__auto__.call(null);
(statearr_38267[(6)] = c__30953__auto__);

return statearr_38267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__,msg_hist,msg_names,msg))
);

return c__30953__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30953__auto___38334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto___38334,ch){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto___38334,ch){
return (function (state_38320){
var state_val_38321 = (state_38320[(1)]);
if((state_val_38321 === (1))){
var state_38320__$1 = state_38320;
var statearr_38322_38335 = state_38320__$1;
(statearr_38322_38335[(2)] = null);

(statearr_38322_38335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (2))){
var state_38320__$1 = state_38320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38320__$1,(4),ch);
} else {
if((state_val_38321 === (3))){
var inst_38318 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38320__$1,inst_38318);
} else {
if((state_val_38321 === (4))){
var inst_38308 = (state_38320[(7)]);
var inst_38308__$1 = (state_38320[(2)]);
var state_38320__$1 = (function (){var statearr_38323 = state_38320;
(statearr_38323[(7)] = inst_38308__$1);

return statearr_38323;
})();
if(cljs.core.truth_(inst_38308__$1)){
var statearr_38324_38336 = state_38320__$1;
(statearr_38324_38336[(1)] = (5));

} else {
var statearr_38325_38337 = state_38320__$1;
(statearr_38325_38337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (5))){
var inst_38308 = (state_38320[(7)]);
var inst_38310 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38308);
var state_38320__$1 = state_38320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38320__$1,(8),inst_38310);
} else {
if((state_val_38321 === (6))){
var state_38320__$1 = state_38320;
var statearr_38326_38338 = state_38320__$1;
(statearr_38326_38338[(2)] = null);

(statearr_38326_38338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (7))){
var inst_38316 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
var statearr_38327_38339 = state_38320__$1;
(statearr_38327_38339[(2)] = inst_38316);

(statearr_38327_38339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (8))){
var inst_38312 = (state_38320[(2)]);
var state_38320__$1 = (function (){var statearr_38328 = state_38320;
(statearr_38328[(8)] = inst_38312);

return statearr_38328;
})();
var statearr_38329_38340 = state_38320__$1;
(statearr_38329_38340[(2)] = null);

(statearr_38329_38340[(1)] = (2));


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
});})(c__30953__auto___38334,ch))
;
return ((function (switch__30865__auto__,c__30953__auto___38334,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30866__auto____0 = (function (){
var statearr_38330 = [null,null,null,null,null,null,null,null,null];
(statearr_38330[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30866__auto__);

(statearr_38330[(1)] = (1));

return statearr_38330;
});
var figwheel$client$heads_up_plugin_$_state_machine__30866__auto____1 = (function (state_38320){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_38320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e38331){if((e38331 instanceof Object)){
var ex__30869__auto__ = e38331;
var statearr_38332_38341 = state_38320;
(statearr_38332_38341[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38342 = state_38320;
state_38320 = G__38342;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30866__auto__ = function(state_38320){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30866__auto____1.call(this,state_38320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto___38334,ch))
})();
var state__30955__auto__ = (function (){var statearr_38333 = f__30954__auto__.call(null);
(statearr_38333[(6)] = c__30953__auto___38334);

return statearr_38333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto___38334,ch))
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
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__){
return (function (state_38348){
var state_val_38349 = (state_38348[(1)]);
if((state_val_38349 === (1))){
var inst_38343 = cljs.core.async.timeout.call(null,(3000));
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38348__$1,(2),inst_38343);
} else {
if((state_val_38349 === (2))){
var inst_38345 = (state_38348[(2)]);
var inst_38346 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38348__$1 = (function (){var statearr_38350 = state_38348;
(statearr_38350[(7)] = inst_38345);

return statearr_38350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38348__$1,inst_38346);
} else {
return null;
}
}
});})(c__30953__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30866__auto____0 = (function (){
var statearr_38351 = [null,null,null,null,null,null,null,null];
(statearr_38351[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30866__auto__);

(statearr_38351[(1)] = (1));

return statearr_38351;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30866__auto____1 = (function (state_38348){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_38348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e38352){if((e38352 instanceof Object)){
var ex__30869__auto__ = e38352;
var statearr_38353_38355 = state_38348;
(statearr_38353_38355[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38356 = state_38348;
state_38348 = G__38356;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30866__auto__ = function(state_38348){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30866__auto____1.call(this,state_38348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__))
})();
var state__30955__auto__ = (function (){var statearr_38354 = f__30954__auto__.call(null);
(statearr_38354[(6)] = c__30953__auto__);

return statearr_38354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__))
);

return c__30953__auto__;
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
var c__30953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30953__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30954__auto__ = (function (){var switch__30865__auto__ = ((function (c__30953__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38363){
var state_val_38364 = (state_38363[(1)]);
if((state_val_38364 === (1))){
var inst_38357 = cljs.core.async.timeout.call(null,(2000));
var state_38363__$1 = state_38363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38363__$1,(2),inst_38357);
} else {
if((state_val_38364 === (2))){
var inst_38359 = (state_38363[(2)]);
var inst_38360 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38361 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38360);
var state_38363__$1 = (function (){var statearr_38365 = state_38363;
(statearr_38365[(7)] = inst_38359);

return statearr_38365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38363__$1,inst_38361);
} else {
return null;
}
}
});})(c__30953__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30865__auto__,c__30953__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto____0 = (function (){
var statearr_38366 = [null,null,null,null,null,null,null,null];
(statearr_38366[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto__);

(statearr_38366[(1)] = (1));

return statearr_38366;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto____1 = (function (state_38363){
while(true){
var ret_value__30867__auto__ = (function (){try{while(true){
var result__30868__auto__ = switch__30865__auto__.call(null,state_38363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30868__auto__;
}
break;
}
}catch (e38367){if((e38367 instanceof Object)){
var ex__30869__auto__ = e38367;
var statearr_38368_38370 = state_38363;
(statearr_38368_38370[(5)] = ex__30869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38371 = state_38363;
state_38363 = G__38371;
continue;
} else {
return ret_value__30867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto__ = function(state_38363){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto____1.call(this,state_38363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30866__auto__;
})()
;})(switch__30865__auto__,c__30953__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30955__auto__ = (function (){var statearr_38369 = f__30954__auto__.call(null);
(statearr_38369[(6)] = c__30953__auto__);

return statearr_38369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30955__auto__);
});})(c__30953__auto__,figwheel_version,temp__4657__auto__))
);

return c__30953__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38372){
var map__38373 = p__38372;
var map__38373__$1 = ((((!((map__38373 == null)))?((((map__38373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38373):map__38373);
var file = cljs.core.get.call(null,map__38373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38373__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38373__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38375 = "";
var G__38375__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38375),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38375);
var G__38375__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38375__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38375__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38375__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38375__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38376){
var map__38377 = p__38376;
var map__38377__$1 = ((((!((map__38377 == null)))?((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38377):map__38377);
var ed = map__38377__$1;
var formatted_exception = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38379_38383 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38380_38384 = null;
var count__38381_38385 = (0);
var i__38382_38386 = (0);
while(true){
if((i__38382_38386 < count__38381_38385)){
var msg_38387 = cljs.core._nth.call(null,chunk__38380_38384,i__38382_38386);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38387);

var G__38388 = seq__38379_38383;
var G__38389 = chunk__38380_38384;
var G__38390 = count__38381_38385;
var G__38391 = (i__38382_38386 + (1));
seq__38379_38383 = G__38388;
chunk__38380_38384 = G__38389;
count__38381_38385 = G__38390;
i__38382_38386 = G__38391;
continue;
} else {
var temp__4657__auto___38392 = cljs.core.seq.call(null,seq__38379_38383);
if(temp__4657__auto___38392){
var seq__38379_38393__$1 = temp__4657__auto___38392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38379_38393__$1)){
var c__28034__auto___38394 = cljs.core.chunk_first.call(null,seq__38379_38393__$1);
var G__38395 = cljs.core.chunk_rest.call(null,seq__38379_38393__$1);
var G__38396 = c__28034__auto___38394;
var G__38397 = cljs.core.count.call(null,c__28034__auto___38394);
var G__38398 = (0);
seq__38379_38383 = G__38395;
chunk__38380_38384 = G__38396;
count__38381_38385 = G__38397;
i__38382_38386 = G__38398;
continue;
} else {
var msg_38399 = cljs.core.first.call(null,seq__38379_38393__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38399);

var G__38400 = cljs.core.next.call(null,seq__38379_38393__$1);
var G__38401 = null;
var G__38402 = (0);
var G__38403 = (0);
seq__38379_38383 = G__38400;
chunk__38380_38384 = G__38401;
count__38381_38385 = G__38402;
i__38382_38386 = G__38403;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38404){
var map__38405 = p__38404;
var map__38405__$1 = ((((!((map__38405 == null)))?((((map__38405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38405):map__38405);
var w = map__38405__$1;
var message = cljs.core.get.call(null,map__38405__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38407 = cljs.core.seq.call(null,plugins);
var chunk__38408 = null;
var count__38409 = (0);
var i__38410 = (0);
while(true){
if((i__38410 < count__38409)){
var vec__38411 = cljs.core._nth.call(null,chunk__38408,i__38410);
var k = cljs.core.nth.call(null,vec__38411,(0),null);
var plugin = cljs.core.nth.call(null,vec__38411,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38417 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38407,chunk__38408,count__38409,i__38410,pl_38417,vec__38411,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38417.call(null,msg_hist);
});})(seq__38407,chunk__38408,count__38409,i__38410,pl_38417,vec__38411,k,plugin))
);
} else {
}

var G__38418 = seq__38407;
var G__38419 = chunk__38408;
var G__38420 = count__38409;
var G__38421 = (i__38410 + (1));
seq__38407 = G__38418;
chunk__38408 = G__38419;
count__38409 = G__38420;
i__38410 = G__38421;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38407);
if(temp__4657__auto__){
var seq__38407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38407__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38407__$1);
var G__38422 = cljs.core.chunk_rest.call(null,seq__38407__$1);
var G__38423 = c__28034__auto__;
var G__38424 = cljs.core.count.call(null,c__28034__auto__);
var G__38425 = (0);
seq__38407 = G__38422;
chunk__38408 = G__38423;
count__38409 = G__38424;
i__38410 = G__38425;
continue;
} else {
var vec__38414 = cljs.core.first.call(null,seq__38407__$1);
var k = cljs.core.nth.call(null,vec__38414,(0),null);
var plugin = cljs.core.nth.call(null,vec__38414,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38426 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38407,chunk__38408,count__38409,i__38410,pl_38426,vec__38414,k,plugin,seq__38407__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38426.call(null,msg_hist);
});})(seq__38407,chunk__38408,count__38409,i__38410,pl_38426,vec__38414,k,plugin,seq__38407__$1,temp__4657__auto__))
);
} else {
}

var G__38427 = cljs.core.next.call(null,seq__38407__$1);
var G__38428 = null;
var G__38429 = (0);
var G__38430 = (0);
seq__38407 = G__38427;
chunk__38408 = G__38428;
count__38409 = G__38429;
i__38410 = G__38430;
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
var G__38432 = arguments.length;
switch (G__38432) {
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

var seq__38433_38438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38434_38439 = null;
var count__38435_38440 = (0);
var i__38436_38441 = (0);
while(true){
if((i__38436_38441 < count__38435_38440)){
var msg_38442 = cljs.core._nth.call(null,chunk__38434_38439,i__38436_38441);
figwheel.client.socket.handle_incoming_message.call(null,msg_38442);

var G__38443 = seq__38433_38438;
var G__38444 = chunk__38434_38439;
var G__38445 = count__38435_38440;
var G__38446 = (i__38436_38441 + (1));
seq__38433_38438 = G__38443;
chunk__38434_38439 = G__38444;
count__38435_38440 = G__38445;
i__38436_38441 = G__38446;
continue;
} else {
var temp__4657__auto___38447 = cljs.core.seq.call(null,seq__38433_38438);
if(temp__4657__auto___38447){
var seq__38433_38448__$1 = temp__4657__auto___38447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38433_38448__$1)){
var c__28034__auto___38449 = cljs.core.chunk_first.call(null,seq__38433_38448__$1);
var G__38450 = cljs.core.chunk_rest.call(null,seq__38433_38448__$1);
var G__38451 = c__28034__auto___38449;
var G__38452 = cljs.core.count.call(null,c__28034__auto___38449);
var G__38453 = (0);
seq__38433_38438 = G__38450;
chunk__38434_38439 = G__38451;
count__38435_38440 = G__38452;
i__38436_38441 = G__38453;
continue;
} else {
var msg_38454 = cljs.core.first.call(null,seq__38433_38448__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38454);

var G__38455 = cljs.core.next.call(null,seq__38433_38448__$1);
var G__38456 = null;
var G__38457 = (0);
var G__38458 = (0);
seq__38433_38438 = G__38455;
chunk__38434_38439 = G__38456;
count__38435_38440 = G__38457;
i__38436_38441 = G__38458;
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
var len__28364__auto___38463 = arguments.length;
var i__28365__auto___38464 = (0);
while(true){
if((i__28365__auto___38464 < len__28364__auto___38463)){
args__28371__auto__.push((arguments[i__28365__auto___38464]));

var G__38465 = (i__28365__auto___38464 + (1));
i__28365__auto___38464 = G__38465;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38460){
var map__38461 = p__38460;
var map__38461__$1 = ((((!((map__38461 == null)))?((((map__38461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38461):map__38461);
var opts = map__38461__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38459){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38459));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38466){if((e38466 instanceof Error)){
var e = e38466;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38466;

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
return (function (p__38467){
var map__38468 = p__38467;
var map__38468__$1 = ((((!((map__38468 == null)))?((((map__38468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38468):map__38468);
var msg_name = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514003838524
