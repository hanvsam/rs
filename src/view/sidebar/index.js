import React from "react";
import "./style.css";
import { FaHome, FaUser, FaChartPie, FaBookMedical } from 'react-icons/fa';

const Sidebar= ()=>{
    return(
        <>
        <div className="sidebar mt-5">
            <div style={{display:"flex", alignItems:"center"}} className="justify-content-center">
                <img src={require('../sidebar/ambulance.png')} height="65"/>
                <span style={{margin:5, fontSize:17}}>Escort Request</span>
            </div>
            <hr style={{width:'95%'}}/>
            <div style={{display:"flex",alignItems:"center",marginTop:10}} className="mt-3">
                <img src={require('../sidebar/house.png')} height="50"/>
                <span style={{margin:15, fontSize:17}}>Home</span>
            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:10}} className="mt-3">
                <img src={require('../sidebar/user.png')} height="50"/>
                <span style={{margin:15, fontSize:17}}>Information</span>
            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:10}} className="mt-4">
                <img src={require('../sidebar/documents.png')} height="50"/>
                <span style={{margin:15, fontSize:17}}>Spreadsheet</span>
            </div>
        </div>

        </>
    )
}

export default Sidebar;