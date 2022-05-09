import React from 'react'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./MiContexto"

const CardWidget = () => {
    const { cantidad_total } = useContext(contexto)

    return (
        <Link to="/carrito">
            <span className="material-icons">
                    shopping_cart
            </span>  
        </Link>
    )
}

export default CardWidget
