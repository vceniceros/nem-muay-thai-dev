import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "./components/Home";
import about_us from "./components/About_us";
import Contact from "./components/Contact";


class Router extends Component{
    render(): React.ReactNode {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={home}></Route>
                    <Route path="/about_us" Component={about_us}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;