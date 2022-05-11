import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    return (
        <article className="cardItem">
            <h3>{producto.nombre}</h3>
            <img src="https://via.placeholder.com/300x300" alt="" />
            <p>Precio : $ {producto.precio}</p>
          
            <Link
                to={`/item/${producto.id}`}
                key={producto.id}
                className="botonSuma">
                Ver Detalle
            </Link>
        </article>
    )
}

export default Item
