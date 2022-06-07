import React from 'react'
import { useContext } from 'react'
import { contexto } from './MiContexto'
import { db } from './Firebase'
import CarritoLista from './CarritoLista'

const Cart = () => {

    const {precio_total, carrito, vaciarCarrito} = useContext(contexto)

    const handleClick = () => {
        vaciarCarrito()
    }

    return (
        <div>
            <h1>Carrito</h1>
            <h3>Precio Total: ${precio_total}</h3>
            <CarritoLista carrito={carrito}/>
            <button className="botonSuma" onClick={handleClick}>Vaciar</button>            
        </div>
    )
}

export default Cart

