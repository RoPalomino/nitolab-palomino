import React from 'react'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./MiContexto"

const CardWidget = (props) => {
    const { cantidad_total } = useContext(contexto)

    return (
        <Link to="/cart">
            <span className="material-icons">
                    shopping_cart
            </span>  
            {cantidad_total}
        </Link>
    )
}

export default CardWidget
