import { createStore, applyMiddleware, combineReducers, Store } from "redux"
import thunk from "redux-thunk"

import { api_competitors } from "./api/reducers"
import { ui_modal, ui_toasts } from "./ui/reducers"

const rootReducer = combineReducers({ api_competitors, ui_modal, ui_toasts })
const AppStore: Store = createStore(rootReducer, applyMiddleware(thunk))

export type DefaultState = ReturnType<typeof rootReducer>
export default AppStore
