(ns p-and-c-analytics2017.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::units
 (fn [db _]
   (:units db)))

(re-frame/reg-sub
 ::dimensions
 (fn [db _]
   (:dimensions db)))
