import React from 'react'
import './Header.css'
import logo from './agrotis-logo.svg'

const Header = () => {
    return (
        <header className="Header">
            <img src={logo} className="Header--logo" alt="Logotipo Agrotis" />
        </header>
    )
}

export { Header }