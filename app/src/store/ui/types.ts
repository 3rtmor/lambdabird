import { IData } from "../api/types"

export interface IModalState {
    open: boolean
    data: IData[]
}

export const UI_MODAL_OPEN = "UI_MODAL_OPEN"
export const UI_MODAL_CLOSE = "UI_MODAL_CLOSE"

export const UI_ADD_TOAST = "UI_ADD_TOAST"
export const UI_REMOVE_TOAST = "UI_REMOVE_TOAST"