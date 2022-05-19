import React from 'react'
import { memo } from 'react'
import { useCallback, useContext } from 'react'
import { contexto } from './MiContexto'

const CarritoItem = ({producto}) => {
    
    const {eliminarProducto}=useContext(contexto)

    const handleClick = () => {
        eliminarProducto(producto.id)
    }
    
    return (
        <article className="cardItem">
            <div>
                <li>
                    <h4>{producto.item.nombre}</h4>
                    <h5>{producto.item.precio}</h5>
                    <h6>{producto.item.categoria}</h6>
                    <button onClick={handleClick} className="botonSuma">Eliminar Producto</button>
                </li>
            </div>
        </article>
    )
}

export default memo(CarritoItem)
