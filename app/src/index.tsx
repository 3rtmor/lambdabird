import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "@src/app"
import AppStore from "@src/store"

import "@src/index.css"

const Root = () => (
    <Provider store={AppStore}>
        <App />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById("_APP"))