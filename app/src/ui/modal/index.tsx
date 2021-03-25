import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DefaultState } from "@src/store"
import { closeModal } from "@src/store/ui/actions"

import CloseIcon from "./close"

import S from "./modal.module.css"

const Modal = () => {
    const dispatch = useDispatch()
    const setModalClosed = () => dispatch(closeModal())

    const { data } = useSelector((state: DefaultState) => state.ui_modal)

    return (
        <div className={S.root}>
            <div className={S.card}>
                <div id="_MODAL" className={S.wrapper}>
                    <div onClick={setModalClosed} className={S.icon}>
                        <CloseIcon />
                    </div>
                    {data[0] ? (
                        <>
                            <div className={S.header}>
                                <div style={{ width: "20%" }}>Place</div>
                                <div style={{ width: "40%" }}>Name</div>
                                <div style={{ width: "20%" }}>Hits</div>
                                <div style={{ width: "20%" }}>Rate of fire</div>
                            </div>
                            {data.map((val, index) => {
                                return (
                                    <div key={index} className={S.row}>
                                        <div
                                            style={{
                                                width: "20%",
                                                padding: "0 0.5rem",
                                            }}
                                        >
                                            {val.place}
                                        </div>
                                        <div style={{ width: "40%" }}>
                                            {val.name}
                                        </div>
                                        <div style={{ width: "20%" }}>
                                            {val.hit}
                                        </div>
                                        <div style={{ width: "20%" }}>
                                            {val.rate}
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <div className={S.empty}>Wow, such empty</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal