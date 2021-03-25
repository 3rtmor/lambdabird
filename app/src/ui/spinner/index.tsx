import React from "react"

import S from "./spinner.module.css"

const Spinner = () => (
    <svg className={S.spinner} viewBox="0 0 50 50">
        <circle
            className={S.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
        ></circle>
    </svg>
)
export default Spinner
