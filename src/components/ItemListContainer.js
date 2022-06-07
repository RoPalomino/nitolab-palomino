import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { collection , getDoc , doc , getDocs , addDoc , query } from "firebase/firestore" 


const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState([])
  const {nombreCategoria} = useParams()



  useEffect(()=>{

    const productosCollection = collection(db, 'producto')
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado)=>{
        const producto = resultado.docs.map(doc=>{
          const productoConId = doc.data()
          productoConId.id = doc.id
          return productoConId
        })
        setProducto(producto)
        setCargando(false)  
      })
      .catch((error)=>{
      })
      .finally(()=>{

      })

  },[nombreCategoria])

    return(
      <>
      <ItemList producto={producto}/>
      </>
    ) 
 
}

  
  export default ItemListContainer



