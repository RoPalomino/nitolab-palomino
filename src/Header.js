import React from 'react'

import NavBar from './components/NavBar'

import { Link } from 'react-router-dom'
import CardWidget from './components/CardWidget'
const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="header__titulo">NitoLab E-commerce</h1>
            </Link>
                      
            
            <NavBar/>
        </header>
    )
}

export default Header
