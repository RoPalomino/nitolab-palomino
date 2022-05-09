import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


const productosIniciales = [

    {
        id : 1,
        nombre : "Fuji Eterna 250D",
        precio : 1000,
        stock : 10,
        categorias : "Cine",
        imagen : "https://via.placeholder.com/300x300"
      },
      {
        id : 2,
        nombre : "Ilford Pan 100",
        precio : 1500,
        stock : 15,
        categorias : "Monochrome",
        imagen : "https://via.placeholder.com/300x300"
      },
      {
        id : 3,
        nombre : "Kentmere 400",
        precio : 1250,
        stock : 20,
        categorias : "Monochrome",
        imagen : "https://via.placeholder.com/300x300"
      },
      {
          id : 4,
          nombre : "Kentmere 100",
          precio : 1250,
          stock: 5,
          categorias : "Monochrome",
          imagen : "https://via.placeholder.com/300x300"
      },
      {
          id : 5,
          nombre : "Ilford Pan 400",
          precio : 1500,
          stock : 3,
          categorias : "Monochrome",
          imagen : "https://via.placeholder.com/300x300"
      },
      {
          id : 6,
          nombre : "Fuji CDU Type II",
          precio : 1100,
          stock : 25,
          categorias : "Intervenidos",
          imagen : "https://via.placeholder.com/300x300"
      }

]


const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})
    const { id } = useParams()


    useEffect(() => {    
        toast.info("Cargando detalle...");
    
        const detalleProducto = productosIniciales.filter((producto) => {
          return producto.id == id;
        })[0];
        
    
        const pedidoDeDetalle = new Promise((res) => {
          setTimeout(() => {
            res(detalleProducto);
          }, 2000);
        }).then(() => {
          setCargando(false);
          setProducto(detalleProducto);
          toast.dismiss();
          toast.success("Detalle de Producto Cargado");
        });
      });
    
      if (cargando) {
        return (<p>Cargando...</p>);
      } else {
        return (
          <>
            <ItemDetail key={producto.id} producto={producto} />
          </>
        );
      }
        
}

export default ItemDetailContainer
