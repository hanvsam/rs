import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from "react-bootstrap"
import "./style.css"
import {FaUserFriends, FaSearch} from "react-icons/fa"

const Konsultasi = () =>{
    return(
        <Card style={{width:"30%", backgroundColor:"#ffff"}}>
          <span>Konsultasi</span>  
          <label>lorem ipsum</label>

          <div className="Konsul">
            <label style={{margin:10}}>
                <FaUserFriends/>
                Total Konsultasi
            </label>
          </div>

          <div className="con-jaw">
            <div className="pad">
                <label>Belum Terjawab</label>
            </div>
            <div className="pad">
                <label>Sudah Terjawab</label>
            </div>
          </div>
            <div style={{margin:10, width:"90%"}}>
                <input placeholder="Cari Pasien..." style={{width:"100%"}}></input>
            </div>

            <div>
                
            </div>
          
        </Card>
    )
}

export default Konsultasi;