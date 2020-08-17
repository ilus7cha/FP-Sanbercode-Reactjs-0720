import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Routes from "./routes";



const Main = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes />
                <Footer />
                
            </Router>
        </>
    )
}

export default Main
