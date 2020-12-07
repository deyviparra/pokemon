import React from 'react'
import Header from '../header/Header'
import s from './layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={s.container}>
            <div className={s.box}>
            <Header/>
            {children}
            </div>
        </div>
    )
}

export default Layout
