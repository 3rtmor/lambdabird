import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { DefaultState } from "@src/store"
import { getCompetitors } from "@src/store/api/actions"

import Header from "@src/pages/Competitors/Header"
import Tabs from "@src/pages/Competitors/Tabs"
import Table from "@src/pages/Competitors/Table"

import Modal from "@src/ui/modal"

const Competitors = ({ mobile }: { mobile: boolean }) => {
    const dispatch = useDispatch()
    const getData = (gender: string) => dispatch(getCompetitors(gender))

    const { open } = useSelector((state: DefaultState) => state.ui_modal)

    React.useEffect(() => {
        getData("male")
    }, [])

    return (
        <>
            <Header mobile={mobile} />
            <Tabs mobile={mobile} />
            <Table mobile={mobile} />
            {open ? <Modal /> : null}
        </>
    )
}

export default Competitors
