import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "./components/Home";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";

class Router extends Component{
    render(): React.ReactNode {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={home}></Route>
                    <Route path="/contacto" Component={Contact}></Route>
                    <Route path="*" Component={Error404}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;