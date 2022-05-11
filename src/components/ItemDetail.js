import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from "react"
import { cartContext } from "./CartContext.js"
import ItemCount from './ItemCount'
//import productosIniciales from './productos.json'

const ItemDetail = ({producto}) => {
    const [nombre, setNombre] = useState("");
    const [cartItems, setCartItems] = useState(0);
    const { addItem } = useContext(cartContext);
    const [verContador, setVerContador] = useState(false)

    const onAdd = (quantity) => {
        setCartItems(quantity);
        addItem(producto, quantity);
        console.log("Click del padre");
    };

    const handleChange = (e) => {
        if (e.target.value !== "") {
            setNombre(e.target.value);
        }
    };

    const handleFocus = (e) => {
        console.log("Focus");
    };

    const handleBlur = (e) => {
        console.log("Blur");
    };

    const handleClickDefault = (e) => {
        e.preventDefault();
        console.log("click default");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        console.log(nombre);
    };

    const funcionVerContador = () => {
        setVerContador(true)
    }

    return(
            <article className="card cardDetail">
                <h1>Detalle del producto</h1>
                <h3>Titulo : {producto.nombre}</h3>
                <h4>Precio : $ {producto.precio}</h4>
                <img src={producto.imagen} alt="" />
                <p>Stock disponible : {producto.stock}</p>
                <p>Codigo de producto : {producto.id}</p>
                <p>Categoria : {producto.categorias}</p>
                {
                    verContador ? (
                        <ItemCount stock={producto.stock} init={1} onAdd={onAdd} setVerContador={setVerContador}/>
                    ) : (
                        <Link to="/carrito" >
                            <button className="botonSuma">
                                Terminar Compra
                            </button>
                        </Link>
                    )
                }
            </article>


    )
    
    
}

export default ItemDetail



/*return (
        <>
            <h1>Aca esta el item detail</h1>
            <article>
                <h3>{props.titulo}</h3>
                <p>{props.precio}</p>
            </article>
        </>
    )
*/