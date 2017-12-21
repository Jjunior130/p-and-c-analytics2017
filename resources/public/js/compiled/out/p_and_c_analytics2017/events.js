// Compiled by ClojureScript 1.9.908 {}
goog.provide('p_and_c_analytics2017.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('p_and_c_analytics2017.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("p-and-c-analytics2017.events","initialize-db","p-and-c-analytics2017.events/initialize-db",1057509074),(function (_,___$1){
return p_and_c_analytics2017.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("p-and-c-analytics2017.events","set-active-panel","p-and-c-analytics2017.events/set-active-panel",-1986491550),(function (db,p__34825){
var vec__34826 = p__34825;
var _ = cljs.core.nth.call(null,vec__34826,(0),null);
var active_panel = cljs.core.nth.call(null,vec__34826,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1513846750713
