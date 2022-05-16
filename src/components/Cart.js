import React from 'react'
import { useContext } from 'react'
import {cartContext} from './CartContext'
import CarritoItem from './CarritoItem'

const Cart = () => {

    const {cart} = useContext(cartContext)

    return (
        <div>
            <div>
                {cart.map(producto=>{
                    return (
                        <CarritoItem key={producto.item[0].id} productoCart={producto}/>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Cart



/*
<Card.Body>
    <Card.Title>{item.itemName}</Card.Title>
    <Card.Text>
        <span><b>Price: ${item.itemPrice} / unit</b></span>                                        
    </Card.Text>
    <Card.Text>
        <span>Quantity: {item.itemCant}</span>
    </Card.Text>
    <Button variant="outline-danger" onClick={() => cart.removeFromCart(item.itemId)}>Remove</Button>
</Card.Body>
*/
