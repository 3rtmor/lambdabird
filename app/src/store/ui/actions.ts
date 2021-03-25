import { Dispatch } from "redux"

import { IData } from "../api/types"

import {
    UI_MODAL_OPEN,
    UI_MODAL_CLOSE,
    UI_ADD_TOAST,
    UI_REMOVE_TOAST,
} from "./types"

export interface IActionModal {
    type: string
    payload: IData[]
}

export const openModal = (data: IData[]) => (dispatch: Dispatch) => {
    console.log({ data })
    dispatch({ type: UI_MODAL_OPEN, payload: data })
}

export const closeModal = () => (dispatch: Dispatch) =>
    dispatch({ type: UI_MODAL_CLOSE })

export interface IActionToast {
    type: string
    payload: {
        id: number
        message?: string
        action?: () => (dispatch: Dispatch) => void
    }
}

let id = 0

export const createToast = (
    message: string,
    action: () => any
) => (dispatch: Dispatch) => {
    dispatch({
        type: UI_ADD_TOAST,
        payload: {
            id: id++,
            message: message,
            action: action,
        },
    })
}

export const deleteToast = (id: number) => (dispatch: Dispatch) => {
    dispatch({
        type: UI_REMOVE_TOAST,
        payload: {
            id: id,
        },
    })
}
