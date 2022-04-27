import React from 'react'
import Item from './Item'

//aca se mapea y queda el estado del contador 

const ItemList = ({productos}) => {
    return (
        <section>
            {productos.map(producto=>{
                return(
                    <Item key={producto.id} producto={producto}/>
                )
            })}
        </section>
    )
    
}

export default ItemList

