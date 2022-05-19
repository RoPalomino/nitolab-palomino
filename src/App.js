import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import { BrowserRouter } from 'react-router-dom'
//import { ToastContainer } from 'react-toastify'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
//import { CustomProvider } from "./components/CartContext"
import MiCustomProvider from './components/MiContexto'


const App = () => {
    return (
        <BrowserRouter>
            <MiCustomProvider>
                <Header/>
                <Main/>
                <Footer/>
                {/*<ToastContainer/>*/}
            </MiCustomProvider>
        </BrowserRouter>
    )
}

export default App
