import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import { collection, getDoc, doc, getDocs, addDoc, query } from "firebase/firestore"
import { db } from "./Firebase"


const productosIniciales = [

    {
        id : 1,
        nombre : "Fuji Eterna 250D",
        precio : 1000,
        stock : 10,
        categorias : "Cine",
        imagen : "https://via.placeholder.com/300x300",
        cantPorProducto: 0
      },
      {
        id : 2,
        nombre : "Ilford Pan 100",
        precio : 1500,
        stock : 15,
        categorias : "Monochrome",
        imagen : "https://via.placeholder.com/300x300",
        cantPorProducto: 0
      },
      {
        id : 3,
        nombre : "Kentmere 400",
        precio : 1250,
        stock : 20,
        categorias : "Monochrome",
        imagen : "https://via.placeholder.com/300x300",
        cantPorProducto: 0
      },
      {
          id : 4,
          nombre : "Kentmere 100",
          precio : 1250,
          stock: 5,
          categorias : "Monochrome",
          imagen : "https://via.placeholder.com/300x300",
          cantPorProducto: 0
      },
      {
          id : 5,
          nombre : "Ilford Pan 400",
          precio : 1500,
          stock : 3,
          categorias : "Monochrome",
          imagen : "https://via.placeholder.com/300x300",
          cantPorProducto: 0
      },
      {
          id : 6,
          nombre : "Fuji CDU Type II",
          precio : 1100,
          stock : 25,
          categorias : "Intervenidos",
          imagen : "https://via.placeholder.com/300x300",
          cantPorProducto: 0
      },
      {
        id : 7,
        nombre : "Kodak ColorPlus",
        precio : 2400,
        stock : 5,
        categorias : "C41",
        imagen : "https://via.placeholder.com/300x300",
        cantPorProducto: 0
      },
      {
        id : 8,
        nombre : "Kodak UltraMax",
        precio : 3000,
        stock : 10,
        categorias : "C41",
        imagen : "https://via.placeholder.com/300x300",
        cantPorProducto: 0
      }

]


const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})
    const { id } = useParams()


    useEffect(() => {    
    
        const productosCollection = collection(db, "producto")

        const consulta = getDoc(productosCollection)

        consulta
          .then((resultado)=>{
            const detalleProducto = resultado.docs.filter(doc=>{
              const productoConId = doc.data()
              productoConId.id = doc.id
              return productoConId.id === id;
            })[0];
            
            setProducto(detalleProducto)
            setCargando(false)
          })

          .catch((error)=>{})
        
          .finally(()=>{})
        })
    
      
        return (
          <>
            {cargando ? <p>Cargando...</p> : <ItemDetail key={producto.id} producto={producto} />}
          </>
        );
  
        
}

export default ItemDetailContainer
