import React from "react";
import {Route, Router, Routes } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Detail from "../views/Detail";

const Routerss =() =>{
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="detail/:id" element={<Detail/>} />
            </Routes>
        </React.Fragment>
    )
}
export default Routerss