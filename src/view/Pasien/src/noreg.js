import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaPen} from 'react-icons/fa';


const Pidentitas = () =>{
    return(
        <>
            <div style={{width:"20vw", backgroundColor:"#fffff", borderRadius:12, border:"solid"}}>
                <div style={{display:"flex"}}>
                    <div style={{margin:20, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <label>IMG</label>
                    </div>
                    <Row style={{display: "flex", justifyContent: "end", width:"100%"}}>
                        <Col>
                            <h3>Name</h3>
                            <li>Nomor</li>
                            <li>Nomor Reg</li>
                            <li>Nomor Reg</li>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "end", width:"100%"}}>
                            <div style={{display: "flex", justifyContent: "center", backgroundColor:"#fc0303", width: 100, alignItems:"center", borderRadius:12, height:20}}>
                                <label>Lihat Alergi</label>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col>
                            <label>DPJP :</label>
                        </Col>
                        <Col>
                           <FaPen/>
                        </Col>
                    </Row>
                </div>
                <div className="dok">
                    <label>Dokter yang merawat</label>
                </div>
            </div>
        </>
    )
}

export default Pidentitas;