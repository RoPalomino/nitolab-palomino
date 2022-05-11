import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito'

const Main = () => {
    return (
        <main className="main">
             <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:nombreCategoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main>
    )
}

export default Main
