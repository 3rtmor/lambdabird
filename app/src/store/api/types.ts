export interface IReqState {
    pending: boolean
    data: [IData]
    error: string
}

export interface IData {
    name: string
    place: number
    hit: number
    rate: number
}

export const API_REQUEST = "API_REQUEST"
export const API_SUCCESS = "API_SUCCESS"
export const API_ERROR = "API_ERROR"
export const API_SORT = "API_SORT"
