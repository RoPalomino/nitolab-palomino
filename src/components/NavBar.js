import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CardWidget from './CardWidget'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to="/categorias" className="nav-link dropdown-toggle letraBlanca" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink to="categorias/C41" className="dropdown-item">C41</NavLink></li>
                                    <li><NavLink to="categorias/Cine" className="dropdown-item">Cine</NavLink></li>
                                    <li><NavLink to="categorias/Monochrome" className="dropdown-item">Monochrome</NavLink></li>
                                    <li><NavLink to="categorias/Intervenidos" className="dropdown-item">Intervenidos</NavLink></li>
                                </ul>
              
                            </li>

                            <li className="nav-item">
                                 <Link to="/sobrenosotros" className="nav-link active" aria-current="page">Sobre Nosotros</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Contacto" className="nav-link active">Contacto</Link>
                            </li>


                            <li className="nav-item">
                                <Link to="/cart">
                                    <CardWidget/>
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default NavBar
