import React from "react"

const getScreenWidth = (): number =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

export const useMobile = (): boolean => {
    const [mobile, setMobile] = React.useState<boolean>(false)
    const [width, setWidth] = React.useState<number>(getScreenWidth())

    React.useEffect(() => {
        const handleResize = () => setWidth(getScreenWidth())
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    React.useEffect(() => {
        width <= 767 ? setMobile(true) : setMobile(false)
    }, [width])

    return mobile
}