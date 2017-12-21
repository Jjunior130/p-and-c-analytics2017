(ns figwheel.connect.build-dev (:require [p-and-c-analytics2017.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/p-and-c-analytics2017.core.mount-root (apply js/p-and-c-analytics2017.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'p-and-c-analytics2017.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

