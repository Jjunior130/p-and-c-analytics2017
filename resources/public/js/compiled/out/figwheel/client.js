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
}catch (e55342){if((e55342 instanceof Error)){
var e = e55342;
return "Error: Unable to stringify";
} else {
throw e55342;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__55345 = arguments.length;
switch (G__55345) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__55343_SHARP_){
if(typeof p1__55343_SHARP_ === 'string'){
return p1__55343_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__55343_SHARP_);
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
var len__28364__auto___55348 = arguments.length;
var i__28365__auto___55349 = (0);
while(true){
if((i__28365__auto___55349 < len__28364__auto___55348)){
args__28371__auto__.push((arguments[i__28365__auto___55349]));

var G__55350 = (i__28365__auto___55349 + (1));
i__28365__auto___55349 = G__55350;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq55347){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55347));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___55352 = arguments.length;
var i__28365__auto___55353 = (0);
while(true){
if((i__28365__auto___55353 < len__28364__auto___55352)){
args__28371__auto__.push((arguments[i__28365__auto___55353]));

var G__55354 = (i__28365__auto___55353 + (1));
i__28365__auto___55353 = G__55354;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq55351){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55351));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55355){
var map__55356 = p__55355;
var map__55356__$1 = ((((!((map__55356 == null)))?((((map__55356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55356):map__55356);
var message = cljs.core.get.call(null,map__55356__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55356__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30952__auto___55435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___55435,ch){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___55435,ch){
return (function (state_55407){
var state_val_55408 = (state_55407[(1)]);
if((state_val_55408 === (7))){
var inst_55403 = (state_55407[(2)]);
var state_55407__$1 = state_55407;
var statearr_55409_55436 = state_55407__$1;
(statearr_55409_55436[(2)] = inst_55403);

(statearr_55409_55436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (1))){
var state_55407__$1 = state_55407;
var statearr_55410_55437 = state_55407__$1;
(statearr_55410_55437[(2)] = null);

(statearr_55410_55437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (4))){
var inst_55360 = (state_55407[(7)]);
var inst_55360__$1 = (state_55407[(2)]);
var state_55407__$1 = (function (){var statearr_55411 = state_55407;
(statearr_55411[(7)] = inst_55360__$1);

return statearr_55411;
})();
if(cljs.core.truth_(inst_55360__$1)){
var statearr_55412_55438 = state_55407__$1;
(statearr_55412_55438[(1)] = (5));

} else {
var statearr_55413_55439 = state_55407__$1;
(statearr_55413_55439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (15))){
var inst_55367 = (state_55407[(8)]);
var inst_55382 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55367);
var inst_55383 = cljs.core.first.call(null,inst_55382);
var inst_55384 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55383);
var inst_55385 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55384)].join('');
var inst_55386 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55385);
var state_55407__$1 = state_55407;
var statearr_55414_55440 = state_55407__$1;
(statearr_55414_55440[(2)] = inst_55386);

(statearr_55414_55440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (13))){
var inst_55391 = (state_55407[(2)]);
var state_55407__$1 = state_55407;
var statearr_55415_55441 = state_55407__$1;
(statearr_55415_55441[(2)] = inst_55391);

(statearr_55415_55441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (6))){
var state_55407__$1 = state_55407;
var statearr_55416_55442 = state_55407__$1;
(statearr_55416_55442[(2)] = null);

(statearr_55416_55442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (17))){
var inst_55389 = (state_55407[(2)]);
var state_55407__$1 = state_55407;
var statearr_55417_55443 = state_55407__$1;
(statearr_55417_55443[(2)] = inst_55389);

(statearr_55417_55443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (3))){
var inst_55405 = (state_55407[(2)]);
var state_55407__$1 = state_55407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55407__$1,inst_55405);
} else {
if((state_val_55408 === (12))){
var inst_55366 = (state_55407[(9)]);
var inst_55380 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55366,opts);
var state_55407__$1 = state_55407;
if(cljs.core.truth_(inst_55380)){
var statearr_55418_55444 = state_55407__$1;
(statearr_55418_55444[(1)] = (15));

} else {
var statearr_55419_55445 = state_55407__$1;
(statearr_55419_55445[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (2))){
var state_55407__$1 = state_55407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55407__$1,(4),ch);
} else {
if((state_val_55408 === (11))){
var inst_55367 = (state_55407[(8)]);
var inst_55372 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55373 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55367);
var inst_55374 = cljs.core.async.timeout.call(null,(1000));
var inst_55375 = [inst_55373,inst_55374];
var inst_55376 = (new cljs.core.PersistentVector(null,2,(5),inst_55372,inst_55375,null));
var state_55407__$1 = state_55407;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55407__$1,(14),inst_55376);
} else {
if((state_val_55408 === (9))){
var inst_55367 = (state_55407[(8)]);
var inst_55393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55394 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55367);
var inst_55395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55394);
var inst_55396 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55395)].join('');
var inst_55397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55396);
var state_55407__$1 = (function (){var statearr_55420 = state_55407;
(statearr_55420[(10)] = inst_55393);

return statearr_55420;
})();
var statearr_55421_55446 = state_55407__$1;
(statearr_55421_55446[(2)] = inst_55397);

(statearr_55421_55446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (5))){
var inst_55360 = (state_55407[(7)]);
var inst_55362 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55363 = (new cljs.core.PersistentArrayMap(null,2,inst_55362,null));
var inst_55364 = (new cljs.core.PersistentHashSet(null,inst_55363,null));
var inst_55365 = figwheel.client.focus_msgs.call(null,inst_55364,inst_55360);
var inst_55366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55365);
var inst_55367 = cljs.core.first.call(null,inst_55365);
var inst_55368 = figwheel.client.autoload_QMARK_.call(null);
var state_55407__$1 = (function (){var statearr_55422 = state_55407;
(statearr_55422[(9)] = inst_55366);

(statearr_55422[(8)] = inst_55367);

return statearr_55422;
})();
if(cljs.core.truth_(inst_55368)){
var statearr_55423_55447 = state_55407__$1;
(statearr_55423_55447[(1)] = (8));

} else {
var statearr_55424_55448 = state_55407__$1;
(statearr_55424_55448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (14))){
var inst_55378 = (state_55407[(2)]);
var state_55407__$1 = state_55407;
var statearr_55425_55449 = state_55407__$1;
(statearr_55425_55449[(2)] = inst_55378);

(statearr_55425_55449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (16))){
var state_55407__$1 = state_55407;
var statearr_55426_55450 = state_55407__$1;
(statearr_55426_55450[(2)] = null);

(statearr_55426_55450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (10))){
var inst_55399 = (state_55407[(2)]);
var state_55407__$1 = (function (){var statearr_55427 = state_55407;
(statearr_55427[(11)] = inst_55399);

return statearr_55427;
})();
var statearr_55428_55451 = state_55407__$1;
(statearr_55428_55451[(2)] = null);

(statearr_55428_55451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55408 === (8))){
var inst_55366 = (state_55407[(9)]);
var inst_55370 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55366,opts);
var state_55407__$1 = state_55407;
if(cljs.core.truth_(inst_55370)){
var statearr_55429_55452 = state_55407__$1;
(statearr_55429_55452[(1)] = (11));

} else {
var statearr_55430_55453 = state_55407__$1;
(statearr_55430_55453[(1)] = (12));

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
});})(c__30952__auto___55435,ch))
;
return ((function (switch__30864__auto__,c__30952__auto___55435,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_55431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55431[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__);

(statearr_55431[(1)] = (1));

return statearr_55431;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1 = (function (state_55407){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_55407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e55432){if((e55432 instanceof Object)){
var ex__30868__auto__ = e55432;
var statearr_55433_55454 = state_55407;
(statearr_55433_55454[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55455 = state_55407;
state_55407 = G__55455;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__ = function(state_55407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1.call(this,state_55407);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30865__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___55435,ch))
})();
var state__30954__auto__ = (function (){var statearr_55434 = f__30953__auto__.call(null);
(statearr_55434[(6)] = c__30952__auto___55435);

return statearr_55434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___55435,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55456_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55456_SHARP_));
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
var base_path_55458 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55458){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e55457){if((e55457 instanceof Error)){
var e = e55457;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55458], null));
} else {
var e = e55457;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_55458))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__55459){
var map__55460 = p__55459;
var map__55460__$1 = ((((!((map__55460 == null)))?((((map__55460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55460):map__55460);
var opts = map__55460__$1;
var build_id = cljs.core.get.call(null,map__55460__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__55460,map__55460__$1,opts,build_id){
return (function (p__55462){
var vec__55463 = p__55462;
var seq__55464 = cljs.core.seq.call(null,vec__55463);
var first__55465 = cljs.core.first.call(null,seq__55464);
var seq__55464__$1 = cljs.core.next.call(null,seq__55464);
var map__55466 = first__55465;
var map__55466__$1 = ((((!((map__55466 == null)))?((((map__55466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55466):map__55466);
var msg = map__55466__$1;
var msg_name = cljs.core.get.call(null,map__55466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55464__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__55463,seq__55464,first__55465,seq__55464__$1,map__55466,map__55466__$1,msg,msg_name,_,map__55460,map__55460__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__55463,seq__55464,first__55465,seq__55464__$1,map__55466,map__55466__$1,msg,msg_name,_,map__55460,map__55460__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__55460,map__55460__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__55468){
var vec__55469 = p__55468;
var seq__55470 = cljs.core.seq.call(null,vec__55469);
var first__55471 = cljs.core.first.call(null,seq__55470);
var seq__55470__$1 = cljs.core.next.call(null,seq__55470);
var map__55472 = first__55471;
var map__55472__$1 = ((((!((map__55472 == null)))?((((map__55472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55472):map__55472);
var msg = map__55472__$1;
var msg_name = cljs.core.get.call(null,map__55472__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55470__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__55474){
var map__55475 = p__55474;
var map__55475__$1 = ((((!((map__55475 == null)))?((((map__55475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55475):map__55475);
var on_compile_warning = cljs.core.get.call(null,map__55475__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__55475__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__55475,map__55475__$1,on_compile_warning,on_compile_fail){
return (function (p__55477){
var vec__55478 = p__55477;
var seq__55479 = cljs.core.seq.call(null,vec__55478);
var first__55480 = cljs.core.first.call(null,seq__55479);
var seq__55479__$1 = cljs.core.next.call(null,seq__55479);
var map__55481 = first__55480;
var map__55481__$1 = ((((!((map__55481 == null)))?((((map__55481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55481):map__55481);
var msg = map__55481__$1;
var msg_name = cljs.core.get.call(null,map__55481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55479__$1;
var pred__55483 = cljs.core._EQ_;
var expr__55484 = msg_name;
if(cljs.core.truth_(pred__55483.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__55484))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__55483.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__55484))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__55475,map__55475__$1,on_compile_warning,on_compile_fail))
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
return (function (state_55573){
var state_val_55574 = (state_55573[(1)]);
if((state_val_55574 === (7))){
var inst_55493 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55493)){
var statearr_55575_55622 = state_55573__$1;
(statearr_55575_55622[(1)] = (8));

} else {
var statearr_55576_55623 = state_55573__$1;
(statearr_55576_55623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (20))){
var inst_55567 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55577_55624 = state_55573__$1;
(statearr_55577_55624[(2)] = inst_55567);

(statearr_55577_55624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (27))){
var inst_55563 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55578_55625 = state_55573__$1;
(statearr_55578_55625[(2)] = inst_55563);

(statearr_55578_55625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (1))){
var inst_55486 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55486)){
var statearr_55579_55626 = state_55573__$1;
(statearr_55579_55626[(1)] = (2));

} else {
var statearr_55580_55627 = state_55573__$1;
(statearr_55580_55627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (24))){
var inst_55565 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55581_55628 = state_55573__$1;
(statearr_55581_55628[(2)] = inst_55565);

(statearr_55581_55628[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (4))){
var inst_55571 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55573__$1,inst_55571);
} else {
if((state_val_55574 === (15))){
var inst_55569 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55582_55629 = state_55573__$1;
(statearr_55582_55629[(2)] = inst_55569);

(statearr_55582_55629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (21))){
var inst_55522 = (state_55573[(2)]);
var inst_55523 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55524 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55523);
var state_55573__$1 = (function (){var statearr_55583 = state_55573;
(statearr_55583[(7)] = inst_55522);

return statearr_55583;
})();
var statearr_55584_55630 = state_55573__$1;
(statearr_55584_55630[(2)] = inst_55524);

(statearr_55584_55630[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (31))){
var inst_55552 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55552)){
var statearr_55585_55631 = state_55573__$1;
(statearr_55585_55631[(1)] = (34));

} else {
var statearr_55586_55632 = state_55573__$1;
(statearr_55586_55632[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (32))){
var inst_55561 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55587_55633 = state_55573__$1;
(statearr_55587_55633[(2)] = inst_55561);

(statearr_55587_55633[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (33))){
var inst_55548 = (state_55573[(2)]);
var inst_55549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55550 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55549);
var state_55573__$1 = (function (){var statearr_55588 = state_55573;
(statearr_55588[(8)] = inst_55548);

return statearr_55588;
})();
var statearr_55589_55634 = state_55573__$1;
(statearr_55589_55634[(2)] = inst_55550);

(statearr_55589_55634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (13))){
var inst_55507 = figwheel.client.heads_up.clear.call(null);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(16),inst_55507);
} else {
if((state_val_55574 === (22))){
var inst_55528 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55529 = figwheel.client.heads_up.append_warning_message.call(null,inst_55528);
var state_55573__$1 = state_55573;
var statearr_55590_55635 = state_55573__$1;
(statearr_55590_55635[(2)] = inst_55529);

(statearr_55590_55635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (36))){
var inst_55559 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55591_55636 = state_55573__$1;
(statearr_55591_55636[(2)] = inst_55559);

(statearr_55591_55636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (29))){
var inst_55539 = (state_55573[(2)]);
var inst_55540 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55541 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55540);
var state_55573__$1 = (function (){var statearr_55592 = state_55573;
(statearr_55592[(9)] = inst_55539);

return statearr_55592;
})();
var statearr_55593_55637 = state_55573__$1;
(statearr_55593_55637[(2)] = inst_55541);

(statearr_55593_55637[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (6))){
var inst_55488 = (state_55573[(10)]);
var state_55573__$1 = state_55573;
var statearr_55594_55638 = state_55573__$1;
(statearr_55594_55638[(2)] = inst_55488);

(statearr_55594_55638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (28))){
var inst_55535 = (state_55573[(2)]);
var inst_55536 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55537 = figwheel.client.heads_up.display_warning.call(null,inst_55536);
var state_55573__$1 = (function (){var statearr_55595 = state_55573;
(statearr_55595[(11)] = inst_55535);

return statearr_55595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(29),inst_55537);
} else {
if((state_val_55574 === (25))){
var inst_55533 = figwheel.client.heads_up.clear.call(null);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(28),inst_55533);
} else {
if((state_val_55574 === (34))){
var inst_55554 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(37),inst_55554);
} else {
if((state_val_55574 === (17))){
var inst_55513 = (state_55573[(2)]);
var inst_55514 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55515 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55514);
var state_55573__$1 = (function (){var statearr_55596 = state_55573;
(statearr_55596[(12)] = inst_55513);

return statearr_55596;
})();
var statearr_55597_55639 = state_55573__$1;
(statearr_55597_55639[(2)] = inst_55515);

(statearr_55597_55639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (3))){
var inst_55505 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55505)){
var statearr_55598_55640 = state_55573__$1;
(statearr_55598_55640[(1)] = (13));

} else {
var statearr_55599_55641 = state_55573__$1;
(statearr_55599_55641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (12))){
var inst_55501 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55600_55642 = state_55573__$1;
(statearr_55600_55642[(2)] = inst_55501);

(statearr_55600_55642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (2))){
var inst_55488 = (state_55573[(10)]);
var inst_55488__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_55573__$1 = (function (){var statearr_55601 = state_55573;
(statearr_55601[(10)] = inst_55488__$1);

return statearr_55601;
})();
if(cljs.core.truth_(inst_55488__$1)){
var statearr_55602_55643 = state_55573__$1;
(statearr_55602_55643[(1)] = (5));

} else {
var statearr_55603_55644 = state_55573__$1;
(statearr_55603_55644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (23))){
var inst_55531 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55531)){
var statearr_55604_55645 = state_55573__$1;
(statearr_55604_55645[(1)] = (25));

} else {
var statearr_55605_55646 = state_55573__$1;
(statearr_55605_55646[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (35))){
var state_55573__$1 = state_55573;
var statearr_55606_55647 = state_55573__$1;
(statearr_55606_55647[(2)] = null);

(statearr_55606_55647[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (19))){
var inst_55526 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55526)){
var statearr_55607_55648 = state_55573__$1;
(statearr_55607_55648[(1)] = (22));

} else {
var statearr_55608_55649 = state_55573__$1;
(statearr_55608_55649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (11))){
var inst_55497 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55609_55650 = state_55573__$1;
(statearr_55609_55650[(2)] = inst_55497);

(statearr_55609_55650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (9))){
var inst_55499 = figwheel.client.heads_up.clear.call(null);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(12),inst_55499);
} else {
if((state_val_55574 === (5))){
var inst_55490 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_55573__$1 = state_55573;
var statearr_55610_55651 = state_55573__$1;
(statearr_55610_55651[(2)] = inst_55490);

(statearr_55610_55651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (14))){
var inst_55517 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55517)){
var statearr_55611_55652 = state_55573__$1;
(statearr_55611_55652[(1)] = (18));

} else {
var statearr_55612_55653 = state_55573__$1;
(statearr_55612_55653[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (26))){
var inst_55543 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_55573__$1 = state_55573;
if(cljs.core.truth_(inst_55543)){
var statearr_55613_55654 = state_55573__$1;
(statearr_55613_55654[(1)] = (30));

} else {
var statearr_55614_55655 = state_55573__$1;
(statearr_55614_55655[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (16))){
var inst_55509 = (state_55573[(2)]);
var inst_55510 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55511 = figwheel.client.heads_up.display_exception.call(null,inst_55510);
var state_55573__$1 = (function (){var statearr_55615 = state_55573;
(statearr_55615[(13)] = inst_55509);

return statearr_55615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(17),inst_55511);
} else {
if((state_val_55574 === (30))){
var inst_55545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55546 = figwheel.client.heads_up.display_warning.call(null,inst_55545);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(33),inst_55546);
} else {
if((state_val_55574 === (10))){
var inst_55503 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55616_55656 = state_55573__$1;
(statearr_55616_55656[(2)] = inst_55503);

(statearr_55616_55656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (18))){
var inst_55519 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55520 = figwheel.client.heads_up.display_exception.call(null,inst_55519);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(21),inst_55520);
} else {
if((state_val_55574 === (37))){
var inst_55556 = (state_55573[(2)]);
var state_55573__$1 = state_55573;
var statearr_55617_55657 = state_55573__$1;
(statearr_55617_55657[(2)] = inst_55556);

(statearr_55617_55657[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55574 === (8))){
var inst_55495 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55573__$1 = state_55573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55573__$1,(11),inst_55495);
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
var statearr_55618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55618[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__);

(statearr_55618[(1)] = (1));

return statearr_55618;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1 = (function (state_55573){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_55573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e55619){if((e55619 instanceof Object)){
var ex__30868__auto__ = e55619;
var statearr_55620_55658 = state_55573;
(statearr_55620_55658[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55659 = state_55573;
state_55573 = G__55659;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__ = function(state_55573){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1.call(this,state_55573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,msg_hist,msg_names,msg))
})();
var state__30954__auto__ = (function (){var statearr_55621 = f__30953__auto__.call(null);
(statearr_55621[(6)] = c__30952__auto__);

return statearr_55621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto__,msg_hist,msg_names,msg))
);

return c__30952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30952__auto___55688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30952__auto___55688,ch){
return (function (){
var f__30953__auto__ = (function (){var switch__30864__auto__ = ((function (c__30952__auto___55688,ch){
return (function (state_55674){
var state_val_55675 = (state_55674[(1)]);
if((state_val_55675 === (1))){
var state_55674__$1 = state_55674;
var statearr_55676_55689 = state_55674__$1;
(statearr_55676_55689[(2)] = null);

(statearr_55676_55689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55675 === (2))){
var state_55674__$1 = state_55674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55674__$1,(4),ch);
} else {
if((state_val_55675 === (3))){
var inst_55672 = (state_55674[(2)]);
var state_55674__$1 = state_55674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55674__$1,inst_55672);
} else {
if((state_val_55675 === (4))){
var inst_55662 = (state_55674[(7)]);
var inst_55662__$1 = (state_55674[(2)]);
var state_55674__$1 = (function (){var statearr_55677 = state_55674;
(statearr_55677[(7)] = inst_55662__$1);

return statearr_55677;
})();
if(cljs.core.truth_(inst_55662__$1)){
var statearr_55678_55690 = state_55674__$1;
(statearr_55678_55690[(1)] = (5));

} else {
var statearr_55679_55691 = state_55674__$1;
(statearr_55679_55691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55675 === (5))){
var inst_55662 = (state_55674[(7)]);
var inst_55664 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55662);
var state_55674__$1 = state_55674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55674__$1,(8),inst_55664);
} else {
if((state_val_55675 === (6))){
var state_55674__$1 = state_55674;
var statearr_55680_55692 = state_55674__$1;
(statearr_55680_55692[(2)] = null);

(statearr_55680_55692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55675 === (7))){
var inst_55670 = (state_55674[(2)]);
var state_55674__$1 = state_55674;
var statearr_55681_55693 = state_55674__$1;
(statearr_55681_55693[(2)] = inst_55670);

(statearr_55681_55693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55675 === (8))){
var inst_55666 = (state_55674[(2)]);
var state_55674__$1 = (function (){var statearr_55682 = state_55674;
(statearr_55682[(8)] = inst_55666);

return statearr_55682;
})();
var statearr_55683_55694 = state_55674__$1;
(statearr_55683_55694[(2)] = null);

(statearr_55683_55694[(1)] = (2));


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
});})(c__30952__auto___55688,ch))
;
return ((function (switch__30864__auto__,c__30952__auto___55688,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0 = (function (){
var statearr_55684 = [null,null,null,null,null,null,null,null,null];
(statearr_55684[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30865__auto__);

(statearr_55684[(1)] = (1));

return statearr_55684;
});
var figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1 = (function (state_55674){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_55674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e55685){if((e55685 instanceof Object)){
var ex__30868__auto__ = e55685;
var statearr_55686_55695 = state_55674;
(statearr_55686_55695[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55696 = state_55674;
state_55674 = G__55696;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__ = function(state_55674){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1.call(this,state_55674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30865__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30865__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto___55688,ch))
})();
var state__30954__auto__ = (function (){var statearr_55687 = f__30953__auto__.call(null);
(statearr_55687[(6)] = c__30952__auto___55688);

return statearr_55687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30954__auto__);
});})(c__30952__auto___55688,ch))
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
return (function (state_55702){
var state_val_55703 = (state_55702[(1)]);
if((state_val_55703 === (1))){
var inst_55697 = cljs.core.async.timeout.call(null,(3000));
var state_55702__$1 = state_55702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55702__$1,(2),inst_55697);
} else {
if((state_val_55703 === (2))){
var inst_55699 = (state_55702[(2)]);
var inst_55700 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55702__$1 = (function (){var statearr_55704 = state_55702;
(statearr_55704[(7)] = inst_55699);

return statearr_55704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55702__$1,inst_55700);
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
var statearr_55705 = [null,null,null,null,null,null,null,null];
(statearr_55705[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__);

(statearr_55705[(1)] = (1));

return statearr_55705;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1 = (function (state_55702){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_55702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e55706){if((e55706 instanceof Object)){
var ex__30868__auto__ = e55706;
var statearr_55707_55709 = state_55702;
(statearr_55707_55709[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55710 = state_55702;
state_55702 = G__55710;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__ = function(state_55702){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1.call(this,state_55702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30865__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__))
})();
var state__30954__auto__ = (function (){var statearr_55708 = f__30953__auto__.call(null);
(statearr_55708[(6)] = c__30952__auto__);

return statearr_55708;
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
return (function (state_55717){
var state_val_55718 = (state_55717[(1)]);
if((state_val_55718 === (1))){
var inst_55711 = cljs.core.async.timeout.call(null,(2000));
var state_55717__$1 = state_55717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55717__$1,(2),inst_55711);
} else {
if((state_val_55718 === (2))){
var inst_55713 = (state_55717[(2)]);
var inst_55714 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_55715 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55714);
var state_55717__$1 = (function (){var statearr_55719 = state_55717;
(statearr_55719[(7)] = inst_55713);

return statearr_55719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55717__$1,inst_55715);
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
var statearr_55720 = [null,null,null,null,null,null,null,null];
(statearr_55720[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__);

(statearr_55720[(1)] = (1));

return statearr_55720;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1 = (function (state_55717){
while(true){
var ret_value__30866__auto__ = (function (){try{while(true){
var result__30867__auto__ = switch__30864__auto__.call(null,state_55717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30867__auto__;
}
break;
}
}catch (e55721){if((e55721 instanceof Object)){
var ex__30868__auto__ = e55721;
var statearr_55722_55724 = state_55717;
(statearr_55722_55724[(5)] = ex__30868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55725 = state_55717;
state_55717 = G__55725;
continue;
} else {
return ret_value__30866__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__ = function(state_55717){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1.call(this,state_55717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30865__auto__;
})()
;})(switch__30864__auto__,c__30952__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30954__auto__ = (function (){var statearr_55723 = f__30953__auto__.call(null);
(statearr_55723[(6)] = c__30952__auto__);

return statearr_55723;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55726){
var map__55727 = p__55726;
var map__55727__$1 = ((((!((map__55727 == null)))?((((map__55727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55727):map__55727);
var file = cljs.core.get.call(null,map__55727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55727__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55727__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55729 = "";
var G__55729__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55729),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__55729);
var G__55729__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55729__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__55729__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55729__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__55729__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55730){
var map__55731 = p__55730;
var map__55731__$1 = ((((!((map__55731 == null)))?((((map__55731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55731):map__55731);
var ed = map__55731__$1;
var formatted_exception = cljs.core.get.call(null,map__55731__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55731__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55731__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55733_55737 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55734_55738 = null;
var count__55735_55739 = (0);
var i__55736_55740 = (0);
while(true){
if((i__55736_55740 < count__55735_55739)){
var msg_55741 = cljs.core._nth.call(null,chunk__55734_55738,i__55736_55740);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55741);

var G__55742 = seq__55733_55737;
var G__55743 = chunk__55734_55738;
var G__55744 = count__55735_55739;
var G__55745 = (i__55736_55740 + (1));
seq__55733_55737 = G__55742;
chunk__55734_55738 = G__55743;
count__55735_55739 = G__55744;
i__55736_55740 = G__55745;
continue;
} else {
var temp__4657__auto___55746 = cljs.core.seq.call(null,seq__55733_55737);
if(temp__4657__auto___55746){
var seq__55733_55747__$1 = temp__4657__auto___55746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55733_55747__$1)){
var c__28034__auto___55748 = cljs.core.chunk_first.call(null,seq__55733_55747__$1);
var G__55749 = cljs.core.chunk_rest.call(null,seq__55733_55747__$1);
var G__55750 = c__28034__auto___55748;
var G__55751 = cljs.core.count.call(null,c__28034__auto___55748);
var G__55752 = (0);
seq__55733_55737 = G__55749;
chunk__55734_55738 = G__55750;
count__55735_55739 = G__55751;
i__55736_55740 = G__55752;
continue;
} else {
var msg_55753 = cljs.core.first.call(null,seq__55733_55747__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55753);

var G__55754 = cljs.core.next.call(null,seq__55733_55747__$1);
var G__55755 = null;
var G__55756 = (0);
var G__55757 = (0);
seq__55733_55737 = G__55754;
chunk__55734_55738 = G__55755;
count__55735_55739 = G__55756;
i__55736_55740 = G__55757;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55758){
var map__55759 = p__55758;
var map__55759__$1 = ((((!((map__55759 == null)))?((((map__55759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55759):map__55759);
var w = map__55759__$1;
var message = cljs.core.get.call(null,map__55759__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__55761 = cljs.core.seq.call(null,plugins);
var chunk__55762 = null;
var count__55763 = (0);
var i__55764 = (0);
while(true){
if((i__55764 < count__55763)){
var vec__55765 = cljs.core._nth.call(null,chunk__55762,i__55764);
var k = cljs.core.nth.call(null,vec__55765,(0),null);
var plugin = cljs.core.nth.call(null,vec__55765,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55771 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55761,chunk__55762,count__55763,i__55764,pl_55771,vec__55765,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55771.call(null,msg_hist);
});})(seq__55761,chunk__55762,count__55763,i__55764,pl_55771,vec__55765,k,plugin))
);
} else {
}

var G__55772 = seq__55761;
var G__55773 = chunk__55762;
var G__55774 = count__55763;
var G__55775 = (i__55764 + (1));
seq__55761 = G__55772;
chunk__55762 = G__55773;
count__55763 = G__55774;
i__55764 = G__55775;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55761);
if(temp__4657__auto__){
var seq__55761__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55761__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__55761__$1);
var G__55776 = cljs.core.chunk_rest.call(null,seq__55761__$1);
var G__55777 = c__28034__auto__;
var G__55778 = cljs.core.count.call(null,c__28034__auto__);
var G__55779 = (0);
seq__55761 = G__55776;
chunk__55762 = G__55777;
count__55763 = G__55778;
i__55764 = G__55779;
continue;
} else {
var vec__55768 = cljs.core.first.call(null,seq__55761__$1);
var k = cljs.core.nth.call(null,vec__55768,(0),null);
var plugin = cljs.core.nth.call(null,vec__55768,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55780 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55761,chunk__55762,count__55763,i__55764,pl_55780,vec__55768,k,plugin,seq__55761__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55780.call(null,msg_hist);
});})(seq__55761,chunk__55762,count__55763,i__55764,pl_55780,vec__55768,k,plugin,seq__55761__$1,temp__4657__auto__))
);
} else {
}

var G__55781 = cljs.core.next.call(null,seq__55761__$1);
var G__55782 = null;
var G__55783 = (0);
var G__55784 = (0);
seq__55761 = G__55781;
chunk__55762 = G__55782;
count__55763 = G__55783;
i__55764 = G__55784;
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
var G__55786 = arguments.length;
switch (G__55786) {
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

var seq__55787_55792 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55788_55793 = null;
var count__55789_55794 = (0);
var i__55790_55795 = (0);
while(true){
if((i__55790_55795 < count__55789_55794)){
var msg_55796 = cljs.core._nth.call(null,chunk__55788_55793,i__55790_55795);
figwheel.client.socket.handle_incoming_message.call(null,msg_55796);

var G__55797 = seq__55787_55792;
var G__55798 = chunk__55788_55793;
var G__55799 = count__55789_55794;
var G__55800 = (i__55790_55795 + (1));
seq__55787_55792 = G__55797;
chunk__55788_55793 = G__55798;
count__55789_55794 = G__55799;
i__55790_55795 = G__55800;
continue;
} else {
var temp__4657__auto___55801 = cljs.core.seq.call(null,seq__55787_55792);
if(temp__4657__auto___55801){
var seq__55787_55802__$1 = temp__4657__auto___55801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55787_55802__$1)){
var c__28034__auto___55803 = cljs.core.chunk_first.call(null,seq__55787_55802__$1);
var G__55804 = cljs.core.chunk_rest.call(null,seq__55787_55802__$1);
var G__55805 = c__28034__auto___55803;
var G__55806 = cljs.core.count.call(null,c__28034__auto___55803);
var G__55807 = (0);
seq__55787_55792 = G__55804;
chunk__55788_55793 = G__55805;
count__55789_55794 = G__55806;
i__55790_55795 = G__55807;
continue;
} else {
var msg_55808 = cljs.core.first.call(null,seq__55787_55802__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55808);

var G__55809 = cljs.core.next.call(null,seq__55787_55802__$1);
var G__55810 = null;
var G__55811 = (0);
var G__55812 = (0);
seq__55787_55792 = G__55809;
chunk__55788_55793 = G__55810;
count__55789_55794 = G__55811;
i__55790_55795 = G__55812;
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
var len__28364__auto___55817 = arguments.length;
var i__28365__auto___55818 = (0);
while(true){
if((i__28365__auto___55818 < len__28364__auto___55817)){
args__28371__auto__.push((arguments[i__28365__auto___55818]));

var G__55819 = (i__28365__auto___55818 + (1));
i__28365__auto___55818 = G__55819;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55814){
var map__55815 = p__55814;
var map__55815__$1 = ((((!((map__55815 == null)))?((((map__55815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55815):map__55815);
var opts = map__55815__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55813){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55813));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55820){if((e55820 instanceof Error)){
var e = e55820;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55820;

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
return (function (p__55821){
var map__55822 = p__55821;
var map__55822__$1 = ((((!((map__55822 == null)))?((((map__55822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55822):map__55822);
var msg_name = cljs.core.get.call(null,map__55822__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513855133257
