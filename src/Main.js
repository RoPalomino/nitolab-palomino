import React from 'react'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'

const Main = () => {
    return (
        <main className="main">
            <ItemListContainer/>
            <ItemDetailContainer/>
        </main>
    )
}

export default Main
