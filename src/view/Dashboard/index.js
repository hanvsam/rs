import React,{useState,useEffect} from "react";
import Kotakpasien from "./kotakpasien";
import Table from "./tableList";
import Entry from "./mainArea";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';



const Dashboard=()=>{

    return(
        <div className="mb-3">
            
            <NavBar/>
            <Table/>
            <Entry/>
            <Kotakpasien/>
    
        </div>
    )
}

export default Dashboard;