//import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import productosIniciales from './productos.json'
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { collection , getDoc , doc , getDocs , addDoc , query } from "firebase/firestore" 

/*export const productosIniciales = [

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

]*/

const ItemListContainer = ({children}) => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState([])
  const {nombreCategoria,test} = useParams()



  useEffect(()=>{

    const productosCollection = collection(db, `producto`)
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado)=>{
        //console.log(resultado.docs)
        const productos = resultado.docs.map(doc=>{
          const productoConId = doc.data()
          productoConId.id = doc.id
          return productoConId
        })
        setProducto(productos)
        setCargando(false)
        //console.log(productos)
      })
      .catch((error)=>{
      })
      .finally(()=>{

      })

    

  },[nombreCategoria])

    return(
      <>
      {cargando ? <p>Cargando...</p> : <ItemList producto={producto}/>}
      </>
    ) 
 
}

  
  export default ItemListContainer



