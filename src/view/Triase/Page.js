import Triase from ".";
import Sidebar from "../sidebar";
import NavBar from "./NavBar";
import React from "react";

function Triasepage(){
    return(
        <>
            <React.Fragment>
                <NavBar/>
                <Sidebar/>
                <Triase/>
            </React.Fragment>
        </>
    )
}

export default Triasepage;