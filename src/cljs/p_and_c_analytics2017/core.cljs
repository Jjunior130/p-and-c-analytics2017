(ns p-and-c-analytics2017.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [p-and-c-analytics2017.events :as events]
            [p-and-c-analytics2017.routes :as routes]
            [p-and-c-analytics2017.views :as views]
            [p-and-c-analytics2017.config :as config]
            [p-and-c-analytics2017.units :refer [units-data]]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db units-data])
  (dev-setup)
  (mount-root))
