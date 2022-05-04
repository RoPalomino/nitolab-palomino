//import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import productosIniciales from './productos.json'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


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

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState([])
  const {nombreCategoria,test} = useParams()


  console.log({nombreCategoria,test})

  useEffect(()=>{

    console.log("Pido todos los productos")
    toast.info("Cargando productos...")
    const pedido = new Promise ((res)=>{
      setTimeout(()=>{
      res(productosIniciales)
      },2000)
    })
    .then(()=>{
    if(nombreCategoria===undefined){
      setCargando(false)
      setProducto(productosIniciales)
      toast.dismiss()
      toast.success("Productos Cargados")
    } else {
      console.log("Pido los productos de la categoria :",nombreCategoria)

      toast.info("Cargando productos...")

      setProducto(productosIniciales.filter(categoria=>categoria.categorias === nombreCategoria))
      setCargando(false)
      toast.dismiss()
      toast.success("Productos Cargados")

      }

    })

  },[nombreCategoria])

  if(cargando){
    return(
      <p>Cargando...</p>
    ) 
  }else{
    return(
    <ItemList producto={producto}/>
    )
  }
}

  
  export default ItemListContainer



