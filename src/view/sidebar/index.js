import React from "react";
import "./style.css";
import { FaHome, FaUser, FaChartPie, FaBookMedical } from 'react-icons/fa';

const Sidebar= ()=>{
    return(
        <>
        <div className="sidebar">
            <div style={{width:"100vw",display:"flex", alignItems:"center"}}>
                <div style={{backgroundColor:"black", width:50, height:50, borderRadius:12}}></div>
                <span style={{marginLeft:10}}>Tutup</span>
            </div>
            <hr style={{width:'95%'}}/>
            <div style={{display:"flex",alignItems:"center",marginTop:10}}>
                <FaHome style={{width:30,height:30,marginTop:20,alignItems:"center"}}/>
                <span style={{margin:10}}>Home</span>
            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:10}}>
                <FaUser style={{width:30,height:30,marginTop:20,alignItems:"center"}}/>
                <span style={{margin:10}}>Home</span>
            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:10}}>
                <FaChartPie style={{width:30,height:30,marginTop:20,alignItems:"center"}}/>
                <span style={{margin:10}}>Home</span>
            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:10}}>
                <FaBookMedical style={{width:30,height:30,marginTop:20,alignItems:"center"}}/>
                <span style={{margin:10}}>Home</span>
            </div>
        </div>

        </>
    )
}

export default Sidebar;