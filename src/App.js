import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import { BrowserRouter } from 'react-router-dom'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import  MiCustomProvider  from "./components/MiContexto"


const App = () => {
    return (
        <BrowserRouter>
            <MiCustomProvider>
                <Header/>
                <Main/>
                <Footer/>
            </MiCustomProvider>
        </BrowserRouter>
    )
}

export default App
