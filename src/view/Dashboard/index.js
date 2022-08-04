import React,{useState,useEffect} from "react";
import Kotakpasien from "./kotakpasien";
import Table from "./tableList";
import Entry from "./mainArea";
import NavBar from "./NavBar";



const Dashboard=()=>{

   

    

    
    return(
        <>
            <NavBar/>
            <Table/>
            <Entry/>
            <Kotakpasien/>
            
        </>
    )
}

export default Dashboard;