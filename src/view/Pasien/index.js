import React from "react";
import Pidentitas from "./src/noreg";
import Info from "./src/info";


const Pasien = () =>{
    return(
        <div style={{display:"flex", width:"70vw"}}>
            <div style={{margin:10}}>
                <Pidentitas/>
            </div>
            <div style={{margin:10}}>
                <Info/>
            </div>
        </div>
    )
}

export default Pasien;