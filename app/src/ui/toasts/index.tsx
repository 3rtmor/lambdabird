import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DefaultState } from "@src/store"
import { deleteToast } from "@src/store/ui/actions"

import S from "./toast.module.css"

const Toasts = () => {
    const dispatch = useDispatch()
    const closeToast = (id: number) => dispatch(deleteToast(id))
    const toasts = useSelector((state: DefaultState) => state.ui_toasts)

    React.useEffect(() => {
        toasts.map((toast) => {
            const element = document.getElementById(toast.id)
            setTimeout(() => {
                element.style.transform = "scale(1)"
                element.style.opacity = "1"
            }, 5)
        })
    }, [toasts])

    return (
        <ul className={S.container}>
            {toasts.map((toast) => {
                return (
                    <div key={toast.id} className={S.root} id={toast.id}>
                        <div className={S.message}>
                            {toast.message}
                        </div>
                        <button
                            className={S.button}
                            onClick={() => {
                                closeToast(toast.id)
                                toast.action()
                            }}
                        >
                            Close
                        </button>
                    </div>
                )
            })}
        </ul>
    )
}

export default Toasts
