import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

const NavBar = () => {
    return (
        <>
         <nav className="nav">
            <Link to="/inicio" className="nav__link">Inicio</Link>
            <Link to="/tienda" className="nav__link">Tienda</Link>
            <Link to="/contacto" className="nav__link">Contacto</Link>
         </nav>
        </>
    )
}

export default NavBar
