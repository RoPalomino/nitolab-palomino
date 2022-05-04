import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App
