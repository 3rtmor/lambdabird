import {
    IModalState,
    UI_MODAL_OPEN,
    UI_MODAL_CLOSE,
    UI_ADD_TOAST,
    UI_REMOVE_TOAST,
} from "./types"

import { IActionModal, IActionToast } from "./actions"

const modalInitialState: IModalState = {
    open: false,
    data: null,
}

export const ui_modal = (
    state: IModalState = modalInitialState,
    { type, payload }: IActionModal
): IModalState => {
    switch (type) {
        case UI_MODAL_OPEN:
            return { ...state, open: true, data: payload }
        case UI_MODAL_CLOSE:
            return { ...state, open: false, data: null }
        default:
            return state
    }
}

export const ui_toasts = (state: any[] = [], { type, payload }: IActionToast) => {
    switch (type) {
        case UI_ADD_TOAST:
            return [...state, payload]
        case UI_REMOVE_TOAST:
            return state.filter((item) => item.id !== payload.id)
        default:
            return state
    }
}
