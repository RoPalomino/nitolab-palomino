import React from 'react'


const Item = ({producto}) => {
    return (
        <article className="card">
            <h3>{producto.nombre}</h3>
            <img src="https://via.placeholder.com/300x300" alt="card"/>
            <p>Precio : ${producto.precio}</p>
            <button>Detalle</button>
        </article>
    )
}

export default Item
