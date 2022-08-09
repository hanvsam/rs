import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Konsultasi from '../Konsultasi/index.js'
import Sidebar from '../sidebar';
import Triasepage from "../Triase/Page.js";
import Pasien from '../Pasien';
import Dashboard from '../Dashboard';
import PDocter from "../Doctor/index.js";
import HalLog from "../intro/hallog.js";
import HalSigU from "../intro/halsigu.js";

function Jalur(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HalLog/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/Triase" element={<Triasepage/>}/>
                    <Route path="/Doctor" element={<PDocter/>}/>
                    <Route path="/HalSigU" element={<HalSigU/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Jalur;