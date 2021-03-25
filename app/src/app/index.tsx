import React from "react"

import { useMobile } from "@src/lib/hooks"

import Competitors from "@src/pages/Competitors"

import Toasts from "@src/ui/toasts"

import S from "./app.module.css"

const App = () => {
    const mobile = useMobile()

    return (
        <div className={S.view}>
            <div className={S.page}>
                <div className={S.wrapper}>
                    <div className={S.content}>
                        <Competitors mobile={mobile} />
                        <Toasts />
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default App
