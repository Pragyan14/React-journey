// import React from 'react'
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Root(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

