import React from 'react'
import { memo } from 'react'
import { useContext } from 'react'
import { contexto } from './MiContexto'

const CarritoItem = ({producto}) => {
    
    const {eliminarProducto} = useContext(contexto)

    const handleClick = () => {
        eliminarProducto(producto.id)
    }
    
    return (
        <article className="cardItem">
            <div>
                <li>
                    <h4>{producto.nombre}</h4>
                    <h5>{producto.precio}</h5>
                    <h6>{producto.categorias}</h6>
                    <button onClick={handleClick} className="botonSuma">Eliminar Producto</button>
                </li>
            </div>
        </article>
    )
}

export default memo(CarritoItem)
