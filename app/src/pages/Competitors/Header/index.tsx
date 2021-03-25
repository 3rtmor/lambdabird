import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"

import { getCompetitorsErr } from "@src/store/api/actions"
import { openModal } from "@src/store/ui/actions"
import { DefaultState } from "@src/store"
import { IData } from "@src/store/api/types"
import { createToast } from "@src/store/ui/actions"

const HeaderMobile = React.lazy(() => import("./HeaderMobile"))
const HeaderDesktop = React.lazy(() => import("./HeaderDesktop"))

const Header = ({ mobile }: { mobile: boolean }) => {
    const [searchInput, setSearchInput] = React.useState<string>("")

    const { data, error } = useSelector(
        (state: DefaultState) => state.api_competitors
    )

    const dispatch = useDispatch()
    const setModalOpen = (data: IData[]) => dispatch(openModal(data))
    const clearError = () => dispatch(getCompetitorsErr())
    const message = (msg: string, action: () => any) =>
        dispatch(createToast(msg, action))

    React.useEffect(() => {
        if (error) message(error, clearError)
    }, [error])

    const searchByName = (keyword: string): IData[] =>
        keyword && data
            ? data.filter((e) =>
                  e.name.toLowerCase().includes(keyword.toLowerCase())
              )
            : []

    const handleInput = (e: { target: HTMLInputElement }) =>
        setSearchInput(e.target.value.replace(/^\s+|\s+$/g, ""))

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (searchInput) {
                setModalOpen(searchByName(searchInput))
            } else {
                message("Enter a keyword", () => {})
            }
        }
    }

    return (
        <React.Suspense fallback={null}>
            {mobile ? (
                <HeaderMobile handleInput={handleInput} handleKey={handleKey} />
            ) : (
                <HeaderDesktop
                    handleInput={handleInput}
                    handleKey={handleKey}
                />
            )}
        </React.Suspense>
    )
}

export default Header
