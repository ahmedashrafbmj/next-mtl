import React from 'react'
import MainHead from './modules/MainHead'

export default function MasterLayout({ children }) {
    return (<>
        <MainHead />
        {children}
    </>
    )
}
