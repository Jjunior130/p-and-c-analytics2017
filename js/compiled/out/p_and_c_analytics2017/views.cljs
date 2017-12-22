(ns p-and-c-analytics2017.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [p-and-c-analytics2017.subs :as subs]))

(defn units-panel []
 (let [units (re-frame/subscribe [::subs/units])]
  [re-com/v-box
   :gap "1em"
   :children (for [[name properties :as unit] @units]
               ^{:key name}
              [re-com/box
               :child name])]))

;; home

(defn home-title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str @name ". This is the Home Page.")
     :level :level1]))

(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(defn link-to-units-page []
 [re-com/hyperlink-href
  :label "go to Units Page"
  :href "#/units"])

(defn home-panel []
 [re-com/v-box
  :gap "1em"
  :children [[home-title]
             [link-to-about-page]
             [link-to-units-page]]])

;; about

(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title] [link-to-home-page]]])

;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :units-panel [units-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel]]]))
