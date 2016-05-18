(ns gointermod.heatmap.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :heatmap-aggregate
 (fn [db]
  (reaction (:heatmap @db))))

(re-frame/register-sub
 :all-results
 (fn [db]
  (reaction (:all-results (:heatmap @db)))))
