import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/blog";
import adminPanel from "./components/adminPanel";
import AdminPanelEventesShow from "./components/adminPanel-events-show";
import AdminPanelEventCreate from "./components/adminPanel-events-create";
import AdminPanelEventsEdit from "./components/adminPanel-events-edit";
import Error404 from "./components/Error404";

class Router extends Component{
    render(): React.ReactNode {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={home}></Route>
                    <Route path="/contacto" Component={Contact}></Route>
                    <Route path="/noticias" Component={Blog}></Route>
                    <Route path="/adminpanel" Component={adminPanel}></Route>
                    <Route path="/adminpanel/evento" Component={AdminPanelEventesShow}></Route>
                    <Route path="/adminpanel/evento/crear" Component={AdminPanelEventCreate}></Route>
                    <Route path="/adminpanel/evento/editar/:id" Component={AdminPanelEventsEdit}></Route>
                    <Route path="*" Component={Error404}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;