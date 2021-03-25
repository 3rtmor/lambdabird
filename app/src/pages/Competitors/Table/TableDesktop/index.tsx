import React from "react"
import { Dispatch, AnyAction } from "redux"
import { useSelector } from "react-redux"

import { DefaultState } from "@src/store"
import { IData } from "@src/store/api/types"

import Spinner from "@src/ui/spinner"

import S from "./table.module.css"

const TableDesktop = ({
    sortData,
    filterActive,
    setFilterActive,
}: {
    sortData: (
        data: [IData]
    ) => (
        dispatch: Dispatch<AnyAction>
    ) => {
        type: string
        payload: [IData]
    }
    filterActive: number
    setFilterActive: React.Dispatch<React.SetStateAction<number>>
}) => {
    const { pending, data } = useSelector(
        (state: DefaultState) => state.api_competitors
    )

    return (
        <div className={S.table_root}>
            <div className={S.table_header}>
                <div
                    style={{ width: "20%", cursor: "pointer" }}
                    onClick={() => {
                        if (filterActive === 0) {
                            sortData(data.sort((a, b) => b.place - a.place))
                            setFilterActive(null)
                        } else {
                            sortData(data.sort((a, b) => a.place - b.place))
                            setFilterActive(0)
                        }
                    }}
                >
                    Place
                </div>
                <div
                    style={{ width: "40%", cursor: "pointer" }}
                    onClick={() => {
                        if (filterActive === 1) {
                            sortData(
                                data.sort((a, b) =>
                                    b.name.localeCompare(a.name)
                                )
                            )
                            setFilterActive(null)
                        } else {
                            sortData(
                                data.sort((a, b) =>
                                    a.name.localeCompare(b.name)
                                )
                            )
                            setFilterActive(1)
                        }
                    }}
                >
                    Name
                </div>
                <div
                    style={{ width: "20%", cursor: "pointer" }}
                    onClick={() => {
                        if (filterActive === 2) {
                            sortData(data.sort((a, b) => b.hit - a.hit))
                            setFilterActive(null)
                        } else {
                            sortData(data.sort((a, b) => a.hit - b.hit))
                            setFilterActive(2)
                        }
                    }}
                >
                    Hits
                </div>
                <div
                    style={{ width: "20%", cursor: "pointer" }}
                    onClick={() => {
                        if (filterActive === 3) {
                            sortData(data.sort((a, b) => b.rate - a.rate))
                            setFilterActive(null)
                        } else {
                            sortData(data.sort((a, b) => a.rate - b.rate))
                            setFilterActive(3)
                        }
                    }}
                >
                    Rate of fire
                </div>
            </div>
            {pending ? (
                <div className={S.loader}>
                    <Spinner />
                </div>
            ) : (
                data.map((val, index) => {
                    return (
                        <div key={index} className={S.table_row}>
                            <div
                                style={{
                                    width: "20%",
                                    padding: "0 0.5rem",
                                }}
                            >
                                {val.place}
                            </div>
                            <div style={{ width: "40%" }}>{val.name}</div>
                            <div style={{ width: "20%" }}>{val.hit}</div>
                            <div style={{ width: "20%" }}>{val.rate}</div>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default TableDesktop
