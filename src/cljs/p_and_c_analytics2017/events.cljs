(ns p-and-c-analytics2017.events
  (:require [re-frame.core :as re-frame]
            [p-and-c-analytics2017.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ [_ units-data]]
  (let [units (:units units-data)
        fundamentals (:fundamentals units-data)
        all-dimensions (merge (into {} (comp (map (comp :u val))
                                             (map #(vector % nil)))
                                       units)
                              (:fundamental-units units-data))]
   (assoc db/default-db
    :dimensions all-dimensions
    :units (into {} (map (fn [[name properties :as unit]]
                          (if (fundamentals name)
                            [name (assoc properties
                                   :f true)]
                            unit)))
                 units)))))

(::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))
