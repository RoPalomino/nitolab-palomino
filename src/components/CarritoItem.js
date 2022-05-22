import React from 'react'
import { memo } from 'react'
import { useCallback, useContext } from 'react'
import { contexto } from './MiContexto'

const CarritoItem = ({productos}) => {
    
    const {eliminarProducto}=useContext(contexto)

    const handleClick = () => {
        eliminarProducto(productos.id)
    }
    
    return (
        <article className="cardItem">
            <div>
                <li>
                    <h4>{productos.item.nombre}</h4>
                    <h5>{productos.item.precio}</h5>
                    <h6>{productos.item.categoria}</h6>
                    <button onClick={handleClick} className="botonSuma">Eliminar Producto</button>
                </li>
            </div>
        </article>
    )
}

export default memo(CarritoItem)
