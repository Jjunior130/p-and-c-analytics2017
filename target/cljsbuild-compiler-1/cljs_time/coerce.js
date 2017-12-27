// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__8328__auto__ = (((obj == null))?null:obj);
var m__8329__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8329__auto__.call(null,obj));
} else {
var m__8329__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8329__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__19313 = millis;
if((G__19313 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__19313) : goog.date.UtcDateTime.fromTimestamp.call(null,G__19313));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__8453__auto__ = (function cljs_time$coerce$from_string_$_iter__19314(s__19315){
return (new cljs.core.LazySeq(null,(function (){
var s__19315__$1 = s__19315;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19315__$1);
if(temp__4657__auto__){
var s__19315__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19315__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__19315__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__19317 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__19316 = (0);
while(true){
if((i__19316 < size__8452__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__19316);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e19318){if((e19318 instanceof Error)){
var _ = e19318;
return null;
} else {
throw e19318;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__19317,d);

var G__19320 = (i__19316 + (1));
i__19316 = G__19320;
continue;
} else {
var G__19321 = (i__19316 + (1));
i__19316 = G__19321;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19317),cljs_time$coerce$from_string_$_iter__19314(cljs.core.chunk_rest(s__19315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19317),null);
}
} else {
var f = cljs.core.first(s__19315__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e19319){if((e19319 instanceof Error)){
var _ = e19319;
return null;
} else {
throw e19319;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__19314(cljs.core.rest(s__19315__$2)));
} else {
var G__19322 = cljs.core.rest(s__19315__$2);
s__19315__$1 = G__19322;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__19323 = date;
var G__19323__$1 = (((G__19323 == null))?null:G__19323.getTime());
if((G__19323__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__19323__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__19324 = obj;
var G__19324__$1 = (((G__19324 == null))?null:cljs_time.coerce.to_date_time(G__19324));
if((G__19324__$1 == null)){
return null;
} else {
return G__19324__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__7633__auto__ = millis;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__7633__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__19325 = obj;
var G__19325__$1 = (((G__19325 == null))?null:cljs_time.coerce.to_date_time(G__19325));
var G__19325__$2 = (((G__19325__$1 == null))?null:G__19325__$1.getTime());
if((G__19325__$2 == null)){
return null;
} else {
return (new Date(G__19325__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__19326 = obj;
var G__19326__$1 = (((G__19326 == null))?null:cljs_time.coerce.to_date_time(G__19326));
if((G__19326__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__19326__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__19327 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__19327.setHours(dt.getHours());

G__19327.setMinutes(dt.getMinutes());

G__19327.setSeconds(dt.getSeconds());

G__19327.setMilliseconds(dt.getMilliseconds());

return G__19327;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__19328_19337 = cljs_time.coerce.to_date_time;
var G__19329_19338 = "null";
var G__19330_19339 = ((function (G__19328_19337,G__19329_19338){
return (function (_){
return null;
});})(G__19328_19337,G__19329_19338))
;
goog.object.set(G__19328_19337,G__19329_19338,G__19330_19339);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__19331_19340 = cljs_time.coerce.to_date_time;
var G__19332_19341 = "number";
var G__19333_19342 = ((function (G__19331_19340,G__19332_19341){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__19331_19340,G__19332_19341))
;
goog.object.set(G__19331_19340,G__19332_19341,G__19333_19342);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__19334_19343 = cljs_time.coerce.to_date_time;
var G__19335_19344 = "string";
var G__19336_19345 = ((function (G__19334_19343,G__19335_19344){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__19334_19343,G__19335_19344))
;
goog.object.set(G__19334_19343,G__19335_19344,G__19336_19345);
