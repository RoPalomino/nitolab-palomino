import React from 'react'
import productosIniciales from './productos.json'

const ItemDetail = (props) => {
    return (
        <>
            <h1>Aca esta el item detail</h1>
            <article>
                <h3>{props.titulo}</h3>
                <p>{props.precio}</p>
            </article>
        </>
    )
}

export default ItemDetail
