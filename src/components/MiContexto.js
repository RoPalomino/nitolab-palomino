import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext({});

const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad_total, setCantidad_total] = useState(0);
  const [precio_total, setPrecio_total] = useState(0);


  const estaEnCarrito = (id) => {
    return carrito.find(e=>e.id==id)
  }

  const agregarProducto = (contador, item) => {
    if(estaEnCarrito(item.id)){
      setCantidad_total(contador)
    } else {
      setCantidad_total(cantidad_total+item.cantPorProducto)
      setPrecio_total(precio_total+item.precio)
      setCarrito([...carrito,item])
    }
  }

  const eliminarProducto = (id) => {
    const newCart = [...carrito].filter((carri) => carri.id !== id)
    setCarrito(newCart)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const valorDelContexto = {
    cantidad_total: cantidad_total,
    precio_total: precio_total,
    carrito: carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    estaEnCarrito
  }

  return(
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default MiCustomProvider;

