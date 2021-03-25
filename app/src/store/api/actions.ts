import axios from "axios"
import { Dispatch } from "redux"

import { IData, API_REQUEST, API_SUCCESS, API_ERROR, API_SORT } from "./types"

export interface IAction {
    type: string
    payload: [
        {
            name: string
            place: number
            hit: number
            rate: number
            error: string
        }
    ]
}

export const getCompetitors = (gender: string) => (dispatch: Dispatch) => {
    axios
        .get("http://localhost:8000/" + gender)
        .then((data) => {
            dispatch({ type: API_SUCCESS, payload: data.data.data })
        })
        .catch((error) => {
            dispatch({
                type: API_ERROR,
                payload: [{ error: error.message }],
            })
        })
}

export const getCompetitorsErr = () => (dispatch: Dispatch) =>
    dispatch({ type: API_REQUEST, payload: null })

export const sortCompetitors = (data: [IData]) => (dispatch: Dispatch) =>
    dispatch({ type: API_SORT, payload: data })
