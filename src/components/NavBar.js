import React from 'react'

import CardWidget from './CardWidget'

const NavBar = () => {
    return (
        <>
         <nav className="nav">
            <a href="#" className="nav__link">Inicio</a>
            <a href="#" className="nav__link">Tienda</a>
            <a href="#" className="nav__link">Contacto</a>
            <CardWidget/>
         </nav>
        </>
    )
}

export default NavBar
