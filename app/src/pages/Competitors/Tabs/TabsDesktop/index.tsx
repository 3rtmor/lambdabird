import React from "react"
import { Dispatch, AnyAction } from "redux"

import S from "./tabs.module.css"

const TabsDesktop = ({
    active,
    setActive,
    getData,
}: {
    active: number
    setActive: React.Dispatch<React.SetStateAction<number>>
    getData: (gender: string) => (dispatch: Dispatch<AnyAction>) => void
}) => {
    return (
        <div className={S.button_root}>
            <div
                onClick={() => {
                    setActive(0)
                    getData("male")
                }}
                className={`${S.button} ${
                    active === 0 ? S.button_active : null
                }`}
            >
                Men`s results
            </div>
            <div
                onClick={() => {
                    setActive(1)
                    getData("female")
                }}
                className={`${S.button} ${
                    active === 1 ? S.button_active : null
                }`}
            >
                Women`s results
            </div>
        </div>
    )
}

export default TabsDesktop
