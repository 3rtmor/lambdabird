import {
    IReqState,
    API_REQUEST,
    API_SUCCESS,
    API_ERROR,
    API_SORT,
} from "./types"

import { IAction } from "./actions"

const reqState: IReqState = {
    pending: true,
    data: null,
    error: null,
}

export const api_competitors = (
    state: IReqState = reqState,
    { type, payload }: IAction
): IReqState => {
    switch (type) {
        case API_REQUEST:
            return { ...state, pending: true, data: null, error: null }
        case API_SUCCESS:
            return { ...state, pending: false, data: payload, error: null }
        case API_ERROR:
            return {
                ...state,
                pending: true,
                data: null,
                error: payload[0].error,
            }
        case API_SORT:
            return { ...state, pending: false, data: payload, error: null }
        default:
            return state
    }
}
