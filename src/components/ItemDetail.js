import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from "react"
import ItemCount from './ItemCount'
import { contexto } from './MiContexto'
import { db } from './Firebase'



const ItemDetail = ({producto}) => {

    const {agregarProducto} = useContext(contexto)
    const [verContardor, setVerContardor] = useState(false)

    const onClick = (contador, producto) => {
        agregarProducto(contador, producto)
    }

    const funcionVerContador = () => {
        setVerContardor(true)
    }

    if(!verContardor){
        return(
            <article className="card cardDetail">
                <h3>{producto.nombre}</h3>
                <h4>Precio : $ {producto.precio}</h4>
                <img src={producto.imagen} alt="" />
                <p>Stock disponible : {producto.stock}</p>
                <p>Codigo de producto : {producto.id}</p>
                <p>Categoria : {producto.categorias}</p>
                <ItemCount stock={producto.stock} init={1} onAdd={onClick} onCount={funcionVerContador} producto={producto}/>

                <Link to="/cart">
                    <button className="botonSuma" onAdd={onClick}>Terminar Compra</button>
                </Link>
            </article>
        )
    } else {
        return(
            <article className="card cardDetail">
                <h3>Titulo : {producto.nombre}</h3>
                <h4>Precio : $ {producto.precio}</h4>
                <img src={producto.imagen} alt="" />
                <p>Stock disponible : {producto.stock}</p>
                <p>Codigo de producto : {producto.id}</p>
                <p>Categoria : {producto.categorias}</p>
          
                <Link to="/cart" >
                    <button className="botonSuma" onAdd={onClick}>
                        Terminar Compra
                    </button>
                </Link>
    
        </article>
        )
    }
    
}

export default ItemDetail










