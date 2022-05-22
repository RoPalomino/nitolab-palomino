import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'

const Main = () => {
    return (
        <main className="main">
             <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:nombreCategoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main
