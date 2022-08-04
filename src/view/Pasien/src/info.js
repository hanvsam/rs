import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaPen} from 'react-icons/fa';
import "../style.css";


const Info = () =>{
    return(
        <>
            <div style={{width:"50vw", backgroundColor:"#fffff", borderRadius:12, border:"solid"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h3>Info lengkap Pasien</h3>
                    <div style={{display: "flex", justifyContent: "center", backgroundColor:"#4a7aff",color:"#ffff", width: 100, alignItems:"center", borderRadius:12, height:50}}>
                        <label>Isi SOAPE</label>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <ul style={{width:'25%'}}>
                        <li>
                            <label>Tgl Pendaftaran</label>
                        </li>
                        <li>
                            <label>Unit Pelayanan</label>
                        </li>
                        <li>
                            <label>Kelas</label>
                        </li>
                        <li>
                            <label>Cara Bayar</label>
                        </li>
                        <li>
                            <label>KSM</label>
                        </li>
                    </ul>
                    <ul className="list" style={{width:"25%"}}>
                        <li>
                            <label>: Tgl Pendaftaran</label>
                        </li>
                        <li>
                            <label>: Unit Pelayanan</label>
                        </li>
                        <li>
                            <label>: Kelas</label>
                        </li>
                        <li>
                            <label>: Cara Bayar</label>
                        </li>
                        <li>
                            <label>: KSM</label>
                        </li>
                    </ul>
                    <ul style={{width:'25%'}}>
                        <li>
                            <label>Suhu</label>
                        </li>
                        <li>
                            <label>Tekanan Darah</label>
                        </li>
                        <li>
                            <label>Detak Jantung</label>
                        </li>
                        <li>
                            <label>SPO2</label>
                        </li>
                        <li>
                            <label>Frekuensi Pernapasan</label>
                        </li>
                        <li>
                            <label>Skrining Pernapasan</label>
                        </li>
                    </ul>
                    <ul className="list" style={{width:'25%'}}>
                        <li>
                            <label>: Suhu</label>
                        </li>
                        <li>
                            <label>: Tekanan Darah</label>
                        </li>
                        <li>
                            <label>: Detak Jantung</label>
                        </li>
                        <li>
                            <label>: SPO2</label>
                        </li>
                        <li>
                            <label>: Frekuensi Pernapasan</label>
                        </li>
                        <li>
                            <label>: Skrining Pernapasan</label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Info;