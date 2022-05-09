import React from 'react'
import { useContext } from 'react'
import CartContext from './CartContext'

const Carrito = () => {
    const { precio_total, carrito, vaciarCarrito } = useContext(CartContext);

  return (
    <div>
      <p>Carrito</p>
      <p>Precio total : $ {precio_total}</p>
    </div>
  )
}

export default Carrito
