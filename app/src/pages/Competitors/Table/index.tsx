import React from "react"
import { useDispatch } from "react-redux"

import { IData } from "@src/store/api/types"
import { sortCompetitors } from "@src/store/api/actions"

const TableMobile = React.lazy(() => import("./TableMobile"))
const TableDesktop = React.lazy(() => import("./TableDesktop"))

const Table = ({ mobile }: { mobile: boolean }) => {
    const [filterActive, setFilterActive] = React.useState<number>(0)

    const dispatch = useDispatch()
    const sortData = (data: [IData]) => dispatch(sortCompetitors(data))

    return (
        <React.Suspense fallback={null}>
            {mobile ? (
                <TableMobile
                    sortData={sortData}
                    filterActive={filterActive}
                    setFilterActive={setFilterActive}
                />
            ) : (
                <TableDesktop
                    sortData={sortData}
                    filterActive={filterActive}
                    setFilterActive={setFilterActive}
                />
            )}
        </React.Suspense>
    )
}

export default Table
