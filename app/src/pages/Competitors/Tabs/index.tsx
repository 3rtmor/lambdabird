import React from "react"
import { useDispatch } from "react-redux"

import { getCompetitors } from "@src/store/api/actions"

const TabsMobile = React.lazy(() => import("./TabsMobile"))
const TabsDesktop = React.lazy(() => import("./TabsDesktop"))

const Tabs = ({ mobile }: { mobile: boolean }) => {
    const [active, setActive] = React.useState<number>(0)

    const dispatch = useDispatch()
    const getData = (gender: string) => dispatch(getCompetitors(gender))

    return (
        <React.Suspense fallback={null}>
            {mobile ? (
                <TabsMobile
                    active={active}
                    setActive={setActive}
                    getData={getData}
                />
            ) : (
                <TabsDesktop
                    active={active}
                    setActive={setActive}
                    getData={getData}
                />
            )}
        </React.Suspense>
    )
}

export default Tabs
