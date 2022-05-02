//import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import productosIniciales from './productos.json'

/*const productosIniciales = [
  {
    id : 1,
    nombre : "Fuji Eterna 250D",
    precio : 1000,
    imagen: "bla"
  },
  {
    id : 2,
    nombre : "Ilford Pan 100",
    precio : 1500,
    imagen: "blabla"
  },
  {
    id : 3,
    nombre : "Kentmere 400",
    precio : 1250,
    imagen: "blablabla"
  }
]*/
const ItemListContainer = () => {
  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      }, 2000)
    })

    pedido
    .then(()=>{
      console.log("Termino el pedido bien!")
      setCargando(false)
      setProductos(productosIniciales)
    })
  }, [])

  if(cargando){
    return(
      <p>Cargando...</p>
    )
  }else{
    return(
      <ItemList productos={productos}/>
    )
  }

  /*const onAdd = () => {
  }

    return ( 
    <>
      <div>Bienvenido</div>
      <ItemCount stock={10} init={0} onAdd={onAdd}/>
      <ItemList/>
    </>
    )*/
  }
  
  export default ItemListContainer



