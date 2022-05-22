import React from 'react'

import { useState } from "react"

const ItemCount = ({init, stock, onAdd, onCount, productos}) => {
    const [contador, setContador] = useState(init)
    const [confirmado, setConfirmado] = useState(false)


    const suma = () => { 
        if(contador < stock){
            setContador(contador + 1)
        }else{
            alert("No tenemos más stock de este producto")
        }
    } 

    const resta = () => {
        if( contador > 1 ) setContador(contador - 1)   
    }

    const confirmar = () => {
        onAdd(contador, productos)
        console.log(contador)
        setConfirmado(true)
    }

    const cerrarConfirmado = () => {
        onCount()
        setConfirmado(false)
    }

    if (!confirmado) {
        return (
          <div>
            <div className="">
              <button onClick={suma} className="material-icons botonSuma">
                add
              </button>
              <p className="cantidad">Unidades a comprar : {contador}</p>
              <button onClick={resta} className="material-icons botonSuma">
                remove
              </button>
            </div>
            <button onClick={confirmar} className="botonSuma">
              Confirmar
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <div className="">
              <button onClick={suma} className="material-icons botonSuma">
                add
              </button>
              <p className="cantidad">Unidades a comprar : {contador}</p>
              <button onClick={resta} className="material-icons botonSuma">
                remove
              </button>
            </div>
            <button onClick={confirmar} className="botonSuma">
              Confirmar
            </button>
            <h6 className="modalcss">
              Se confirmaron {contador} unidades!
              <button onClick={cerrarConfirmado}>Cerrar</button>
            </h6>
          </div>
        );
      }
    
    
    
    
    
    
    
    
    /*return (
        <div>
            <div className="">
                <button onClick={suma} className="material-icons botonSuma">
                    add
                </button>
                <p className="cantidad">Unidades a comprar : {contador}</p>
                <button onClick={resta} className="material-icons botonSuma">
                    remove
                </button>
            </div>
            <button onClick={confirmar} className="botonSuma">
                Confirmar
            </button>
        </div>
    )*/
  

}

export default ItemCount
