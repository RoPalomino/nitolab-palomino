import React from 'react'
import {memo} from 'react'
import CarritoItem from './CarritoItem'

const CarritoLista = ({usuarios, cart}) => {
    
    console.log("Render CarritoLista")
    
    return (
        <ul>
            {cart.map(producto=>{
                return <CarritoItem key={producto.id} productos={producto}/>
            })}
        </ul>
    )
}

export default CarritoLista
