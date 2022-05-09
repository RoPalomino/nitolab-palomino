import React from 'react'
import Item from './Item'

//aca se mapea y queda el estado del contador 

const ItemList = ({producto}) => {
    return (
        <section>
            {producto.map(producto=>{
                return(
                    <Item key={producto.id} producto={producto}/>
                )
            })}
        </section>
    )
    
}

export default ItemList

