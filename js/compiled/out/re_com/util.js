// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28003__auto__ = (function re_com$util$fmap_$_iter__43414(s__43415){
return (new cljs.core.LazySeq(null,(function (){
var s__43415__$1 = s__43415;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43415__$1);
if(temp__4657__auto__){
var s__43415__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43415__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__43415__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__43417 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__43416 = (0);
while(true){
if((i__43416 < size__28002__auto__)){
var vec__43418 = cljs.core._nth.call(null,c__28001__auto__,i__43416);
var k = cljs.core.nth.call(null,vec__43418,(0),null);
var val = cljs.core.nth.call(null,vec__43418,(1),null);
cljs.core.chunk_append.call(null,b__43417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__43424 = (i__43416 + (1));
i__43416 = G__43424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43417),re_com$util$fmap_$_iter__43414.call(null,cljs.core.chunk_rest.call(null,s__43415__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43417),null);
}
} else {
var vec__43421 = cljs.core.first.call(null,s__43415__$2);
var k = cljs.core.nth.call(null,vec__43421,(0),null);
var val = cljs.core.nth.call(null,vec__43421,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__43414.call(null,cljs.core.rest.call(null,s__43415__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28003__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__28371__auto__ = [];
var len__28364__auto___43426 = arguments.length;
var i__28365__auto___43427 = (0);
while(true){
if((i__28365__auto___43427 < len__28364__auto___43426)){
args__28371__auto__.push((arguments[i__28365__auto___43427]));

var G__43428 = (i__28365__auto___43427 + (1));
i__28365__auto___43427 = G__43428;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq43425){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43425));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__28371__auto__ = [];
var len__28364__auto___43433 = arguments.length;
var i__28365__auto___43434 = (0);
while(true){
if((i__28365__auto___43434 < len__28364__auto___43433)){
args__28371__auto__.push((arguments[i__28365__auto___43434]));

var G__43435 = (i__28365__auto___43434 + (1));
i__28365__auto___43434 = G__43435;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq43431){
var G__43432 = cljs.core.first.call(null,seq43431);
var seq43431__$1 = cljs.core.next.call(null,seq43431);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__43432,seq43431__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__28371__auto__ = [];
var len__28364__auto___43442 = arguments.length;
var i__28365__auto___43443 = (0);
while(true){
if((i__28365__auto___43443 < len__28364__auto___43442)){
args__28371__auto__.push((arguments[i__28365__auto___43443]));

var G__43444 = (i__28365__auto___43443 + (1));
i__28365__auto___43443 = G__43444;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__43439){
var map__43440 = p__43439;
var map__43440__$1 = ((((!((map__43440 == null)))?((((map__43440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43440):map__43440);
var id_fn = cljs.core.get.call(null,map__43440__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__43440,map__43440__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__43440,map__43440__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq43436){
var G__43437 = cljs.core.first.call(null,seq43436);
var seq43436__$1 = cljs.core.next.call(null,seq43436);
var G__43438 = cljs.core.first.call(null,seq43436__$1);
var seq43436__$2 = cljs.core.next.call(null,seq43436__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__43437,G__43438,seq43436__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__28371__auto__ = [];
var len__28364__auto___43452 = arguments.length;
var i__28365__auto___43453 = (0);
while(true){
if((i__28365__auto___43453 < len__28364__auto___43452)){
args__28371__auto__.push((arguments[i__28365__auto___43453]));

var G__43454 = (i__28365__auto___43453 + (1));
i__28365__auto___43453 = G__43454;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__43449){
var map__43450 = p__43449;
var map__43450__$1 = ((((!((map__43450 == null)))?((((map__43450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43450):map__43450);
var id_fn = cljs.core.get.call(null,map__43450__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__43450,map__43450__$1,id_fn){
return (function (p1__43445_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__43445_SHARP_),id);
});})(map__43450,map__43450__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq43446){
var G__43447 = cljs.core.first.call(null,seq43446);
var seq43446__$1 = cljs.core.next.call(null,seq43446);
var G__43448 = cljs.core.first.call(null,seq43446__$1);
var seq43446__$2 = cljs.core.next.call(null,seq43446__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__43447,G__43448,seq43446__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__28371__auto__ = [];
var len__28364__auto___43462 = arguments.length;
var i__28365__auto___43463 = (0);
while(true){
if((i__28365__auto___43463 < len__28364__auto___43462)){
args__28371__auto__.push((arguments[i__28365__auto___43463]));

var G__43464 = (i__28365__auto___43463 + (1));
i__28365__auto___43463 = G__43464;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__43459){
var map__43460 = p__43459;
var map__43460__$1 = ((((!((map__43460 == null)))?((((map__43460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43460):map__43460);
var id_fn = cljs.core.get.call(null,map__43460__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__43460,map__43460__$1,id_fn){
return (function (p1__43455_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__43455_SHARP_),id);
});})(map__43460,map__43460__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq43456){
var G__43457 = cljs.core.first.call(null,seq43456);
var seq43456__$1 = cljs.core.next.call(null,seq43456);
var G__43458 = cljs.core.first.call(null,seq43456__$1);
var seq43456__$2 = cljs.core.next.call(null,seq43456__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__43457,G__43458,seq43456__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__43465 = current_node.parentNode;
var G__43466 = (sum_scroll_left + current_node.scrollLeft);
var G__43467 = (sum_scroll_top + current_node.scrollTop);
current_node = G__43465;
sum_scroll_left = G__43466;
sum_scroll_top = G__43467;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1514349650854