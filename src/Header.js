import React from 'react'

import NavBar from './components/NavBar'

import { Link } from 'react-router-dom'
import CardWidget from './components/CardWidget'

import logo from './Imagenes/nitolab-logo.png'
const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                {/*<h1 className="header__titulo">NitoLab E-commerce</h1>*/}
                <img alt="" src={logo} width="90"/>
            </Link>
                      
            
            <NavBar/>
        </header>
    )
}

export default Header
