import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Item = ({producto}) => {
    const [detalles, setDetalles] = useState

    const detallesProductos = () => {
        console.log(producto.id)
        setDetalles(true)
    }

    return (
        <article className="card">
            <h3>{producto.nombre}</h3>
            <img src="https://via.placeholder.com/300x300" alt="card"/>
            <p>Precio : ${producto.precio}</p>
            {/*<p>Categorias : {producto.categorias.map(categoria=>{})}</p>*/}
            <Link to={`/producto/${producto.id}`} key={producto.id}>Ver Detalle</Link>
        </article>
    )
}

export default Item
