(ns p-and-c-analytics2017.views
  (:require [re-frame.core :as rf]
            [re-com.core :as rc]
            [p-and-c-analytics2017.subs :as subs]
            [reagent.core :as r]))

(defn units-grouping [name grouped-units]
 (let [sbi (r/atom :name)
       sbc (r/atom {:fn < :str "<"})]
  (fn [name grouped-units]
   [rc/v-box
    :children
    (cons
     [rc/h-box
      :align :center
      :justify :end
      :children [[rc/box
                  :size "2"
                  :justify :center
                  :child
                  [rc/title
                   :label name
                   :level :level1]]
                 [rc/box
                  :size "1"
                  :child
                  ((comp str count)
                   grouped-units)]
                 [rc/box :child "Sort-by:"]
                 [rc/box
                  :child
                  [rc/single-dropdown
                   :choices [{:id :name :label "Name"}
                             {:id :dimension :label "Dimension"}
                             {:id :ratio :label "Ratio"}]
                   :model sbi
                   :on-change (fn [id]
                               (reset! sbi id))]]
                 [rc/button
                  :label (:str @sbc)
                  :on-click (fn []
                             (swap! sbc (fn [{:keys [fn]}]
                                         (if (= > fn)
                                          {:fn < :str "<"}
                                          {:fn > :str ">"}))))]]]

     (->> grouped-units
          (sort-by (fn [[name {:keys [u v]} :as unit]]
                    (case @sbi
                     :name name
                     :dimension u
                     :ratio v))
                   (:fn @sbc))
          (map (fn [[name {:keys [u v] :as properties} :as unit]]
                ^{:key name}
                [rc/h-box
                 :children [[rc/box
                             :margin "4em"
                             :child name]
                            [rc/v-box
                             :justify :around
                             :align :center
                             :children [[rc/box
                                         :child (str u)]
                                        [rc/box
                                         :child (str v)]]]]]))))])))


(defn units-panel []
 (let [units (rf/subscribe [::subs/units])
       dimensions (rf/subscribe [::subs/dimensions])
       sort-by-comp (r/atom {:fn < :str "<"})
       grouped-by-input (r/atom :dimension)]
  (fn []
   [rc/v-box
    :gap "1em"
    :width "auto"
    :children
    (cons
     [rc/h-box
      :align :center
      :justify :end
      :children [[rc/h-box
                  :size "1"
                  :children [[rc/box
                              :padding "0 0.5em 0 0"
                              :child
                              "# of units:"]
                             (count @units)]]
                 [rc/box :child "Group by:"]
                 [rc/box
                  :child
                  [rc/single-dropdown
                   :choices [{:id :name :label "Name"}
                             {:id :dimension :label "Dimension"}
                             {:id :ratio :label "Ratio"}]
                   :model grouped-by-input
                   :on-change (fn [id]
                               (reset! grouped-by-input id))]]
                 [rc/button
                  :label (:str @sort-by-comp)
                  :on-click (fn []
                             (swap! sort-by-comp (fn [{:keys [fn]}]
                                                  (if (= > fn)
                                                   {:fn < :str "<"}
                                                   {:fn > :str ">"}))))]]]
     (->> @units
          (group-by (fn [[name {:keys [u v] :as properties} :as unit]]
                     (case @grouped-by-input
                      :name (first name)
                      :dimension u
                      :ratio v)))
          (sort-by (fn [[name grouped-units]]
                    (or (@dimensions name) name))
                   (:fn @sort-by-comp))
          (map (fn [[name grouped-units :as grouping]]
                ^{:key name}
                [units-grouping (or (@dimensions name) name) grouped-units]))))])))


;; home

(defn home-title []
  (let [name (rf/subscribe [::subs/name])]
    [rc/title
     :label (str @name ". This is the Home Page.")
     :level :level1]))

(defn link-to-about-page []
  [rc/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(defn link-to-units-page []
 [rc/hyperlink-href
  :label "go to Units Page"
  :href "#/units"])

(defn home-panel []
 [rc/v-box
  :gap "1em"
  :children [[home-title]
             [link-to-about-page]
             [link-to-units-page]]])

;; about

(defn about-title []
  [rc/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [rc/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [rc/v-box
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
  (let [active-panel (rf/subscribe [::subs/active-panel])]
    [panels @active-panel]))
