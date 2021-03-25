import React from "react"

import S from "./header.module.css"

const HeaderMobile = ({
    handleInput,
    handleKey,
}: {
    handleInput: (e: { target: HTMLInputElement }) => void
    handleKey: (e: React.KeyboardEvent) => void
}) => {
    return (
        <div className={S.header_root}>
            <div className={S.header}>Biathlon World Cup</div>
            <div className={S.search_root}>
                <input
                    className={S.search}
                    placeholder="Search"
                    onChange={handleInput}
                    onKeyPress={handleKey}
                />
            </div>
        </div>
    )
}

export default HeaderMobile
