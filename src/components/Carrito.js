import React, { useCallback } from 'react'
import { useContext, useState } from 'react'
//import { compileStringAsync } from 'sass'
import CartContext from './CartContext'
import CarritoLista from './CarritoLista'

const Carrito = () => {
  const { precio_total, carrito, vaciarCarrito } = useContext(CartContext)
  const [usuarios, setUsuarios] = useState([])
  const [nombre, setNombre] = useState("")

  const handleClick = () => {
    setUsuarios([...usuarios,{
      id : Math.random(),
      nombre : nombre 
    }])
  }

  const handleChange = (e) => {
    setNombre(e.target.value)
  }

  const borrarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario=>usuario.id!=id))
  }

  const borrarUsuarioMemorizada = useCallback(borrarUsuario,[])

  return (
    <div>
      <p>Carrito</p>
      <p>Precio total : $ {precio_total}</p>
      <button onClick={handleClick}>Click</button>
      <input type="text" onChange={handleChange}/>
      <CarritoLista usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
    </div>
  )
}

export default Carrito
