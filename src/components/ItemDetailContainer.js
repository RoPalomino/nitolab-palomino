import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import productosIniciales from './productos.json'

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})


    useEffect(() => {
        const promesa = new Promise((res)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        .then(()=>{
            setCargando(false)
            setProducto(productosIniciales)
        })
    }, [])
    
    if(cargando){
        return (
            <p>Cargando...</p>
        )
    }else{
        return(
            <ItemDetail key={productosIniciales[0].id}
            imagen={productosIniciales[0].imagen}
            nombre={productosIniciales[0].nombre}
            precio={productosIniciales[0].precio} 
            categorias={productosIniciales[0].categorias}/>
        )
    }
        
}

export default ItemDetailContainer
