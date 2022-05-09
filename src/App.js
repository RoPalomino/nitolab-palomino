import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CustomProvider } from "./components/CartContext"


const App = () => {
    return (
        <BrowserRouter>
            <CustomProvider>
                <Header/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App
