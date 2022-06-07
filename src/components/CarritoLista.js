import React from 'react'
import {memo} from 'react'
import CarritoItem from './CarritoItem'

const CarritoLista = ({carrito}) => {
    
    console.log("Render CarritoLista")
    console.log(carrito)
    
    return (
        <ul>
            {carrito.map(producto=>{
                return <CarritoItem key={producto.id} producto={producto}/>
            })}
        </ul>
    )
}

export default memo(CarritoLista)
