import React from 'react'

import { useState } from "react"

const ItemCount = ({init, stock, onAdd}) => {
    const [contador, setContador] = useState(init)
    const [confirmado, setConfirmado] = useState(false)


    const suma = () => { 
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const resta = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        //onAdd(contador)
        //console.log(contador)
        setConfirmado(true)
    }


    if(!confirmado){
        return (
            <div>
                 <p>Contador: {contador} </p>
                 <button className="material-icons" onClick={resta}>remove</button>
                 <button className="material-icons" onClick={suma}>add</button>
                 <button onClick={confirmar}>Agregar al carrito</button>
            </div>
        )
    } else{
        return (
            <div>
                 <p>Contador: {contador} </p>
                 <button className="material-icons" onClick={resta}>remove</button>
                 <button className="material-icons" onClick={suma}>add</button>
                 <button onClick={confirmar}>Agregar al carrito</button>
                 <div>
                    <p className="modal">Se confirmaron {contador} productos</p>
                 </div>
            </div>
        )
    }
  

}

export default ItemCount
