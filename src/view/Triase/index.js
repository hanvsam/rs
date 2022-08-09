import React, {useState,useEffect} from "react";
import Btn from '../component/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from "react-bootstrap"
import "./style.css"
import { Container, Row, Col } from 'react-grid-system';


const Triase = () =>{
    const[form,setForm]=useState()
    const[datang,setDatang]=useState()
    const[menular,setMenular]=useState()
    const[ambulan,setAmbulan]=useState()
    const[petugas,setPetugas]=useState()
    const[trauma,setTrauma]=useState()


    function checkKedatangan(){
        var sendiri = document.getElementById('Sendiri')
        var antar = document.getElementById('Diantar')
        if (sendiri.checked === true){
            setDatang(sendiri.value)
        }
        else if (antar.checked === true){
            setDatang(antar.value)
        }
        else{
            console.log('dasd')
        }
    }

    function checkMenular(){
        var agree = document.getElementById('Ya')
        var Dagree = document.getElementById('Tidak')

        if (agree.checked === true){
            setMenular(agree.value)
        }
        else if (Dagree === true){
            setMenular(Dagree.value)
        }
    }

    function checkAmbulan(){
        var ya = document.getElementById('AdaAmbulan')
        var no = document.getElementById('TidakAmbulan')

        if (ya.checked === true){
            setAmbulan(ya.value)
        }
        else if (no.checked === true){
            setAmbulan(no.value)
        }
    }

    function checkPetugas(){
        var ya = document.getElementById('AdaPetugas')
        var no = document.getElementById('TidakPetugas')

        if (ya.checked === true){
            setPetugas(ya.value)
        }
        else if (no.checked === true){
            setPetugas(no.value)
        }
    }

    function checkTrauma(){
        var ya = document.getElementById('trauma')
        var no = document.getElementById('Nontrauma')

        if (ya.checked === true){
            setTrauma(ya.value)
        }
        else if (no.checked === true){
            setTrauma(no.value)
        }
    }

    function check(){
        const arr = {
            "Datang":datang,
            "Menular":menular,
            "Ambulan":ambulan,
            "Petugas":petugas,
            "Trauma":trauma
        }
        checkKedatangan()
        checkAmbulan()
        checkMenular()
        checkPetugas()
        checkTrauma()
        setForm(arr)
    }

    console.log('test',form)

    return(
        <>
            <div style={{position:'absolute', left:'50vh', paddingTop:'13vh ', top:'5vh'}}>
                <Card style={{ width: '70vw', height: '110vh' }} className="bg">
                <Card.Body>
                    <Form>
                    <div>
                            <div className="pb-2">
                                <span>Kedatangan</span>
                                <Row className="pt-1">
                                    <Col sm={3}>
                                    <input type="radio" id="Sendiri" name="kedatangan" value="Sendiri" className="mx-2"/>
                                    Datang Sendiri
                                    </Col>
                                    <Col sm={3}>
                                    <input type="radio" id="Diantar" name="kedatangan" value="Sendiri" className="mx-2"/>
                                    Datang Dengan Orang Lain
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="pb-2">
                                <span>Penyakit Menular</span>
                                <Row  className="pt-1">
                                    <Col sm={3}>
                                    <input type="radio" id="Ya" name="menular" value="Ya" className="mx-2"/>
                                    Iya
                                    </Col>
                                    <Col sm={3}>
                                    <input type="radio" id="Tidak" name="menular" value="Tidak" className="mx-2"/>
                                    Tidak
                                    </Col>
                                </Row>
                            </div>

                        <div className="pb-2">
                            <div>
                                <span>Pengantar</span>
                            </div>
                            <div className="pt-2">
                                <div>
                                    <Row>
                                    <span className="mx-5">Mobil Ambulan</span>
                                    <Col sm={4}>
                                    <input type="radio" id="AdaAmbulan" name="ambulan" value="Ada" className="mx-2"/>
                                    Ada
                                    </Col>
                                    <Col sm={4}>
                                    <input type="radio" id="TidakAmbulan" name="ambulan" value="Tidak Ada" className="mx-2"/>
                                    Tidak
                                    </Col>
                                </Row>
                                </div>
                                <div>
                                    <Row>
                                    <span className="mx-5">Petugas Medis</span>
                                    <Col sm={4} style={{marginLeft:6}}>
                                    <input type="radio" id="AdaPetugas" name="kedatangan" value="Ada" className="mx-2"/>
                                    Ada
                                    </Col>
                                    <Col sm={4} style={{marginLeft:0.5}}>
                                    <input type="radio" id="TidakPetugas" name="kedatangan" value="Tidak" className="mx-2"/>
                                    Tidak
                                    </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="pb-3">
                                <span>Trauma/Non Trauma</span>
                                <Row className="pt-1">
                                    <Col sm={3}>
                                    <input type="radio" id="Trauma" name="trauma" value="Trauma" className="mx-2"/>
                                    Trauma
                                    </Col>
                                    <Col sm={3}>
                                    <input type="radio" id="Nontrauma" name="trauma" value="Non Trauma" className="mx-2"/>
                                    Non Trauma
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div style={{width:"100%"}}>
                            <span>Pengkajian</span>
                            <div className="pt-3" style={{width:"100%"}}>
                                <Button variant="dark" className="mx-4" style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                                <Button variant="danger" className="mx-4 " style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                                <Button variant="warning" className="mx-4" style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                                <Button variant="success" className="mx-4" style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                            </div>
                        </div>

                        <div className="py-3">
                            <span>Airway</span>
                            <div className="d-flex pt-3">
                                <div className="klik"><span>Tidak Airway</span></div>
                                <div className="klik"><span>Obstruksi/Parsial obstruksi</span></div>
                                <div className="klik"><span>Bebas</span></div>
                                <div className="klik"><span>Bebas</span></div>
                            </div>
                           

                        </div>

                        <div>
                            <span>Breathing</span>
                            <div className="d-flex pt-3">
                                <div className="klik"><span>Tidak Breathing</span></div>
                                <div className="klik text-center"><span>Distress nafas berat/zhenti nafas</span></div>
                                <div className="klik text-center"><span>Distress nafas ringan/ sedang</span></div>
                                <div className="klik"><span>Normal</span></div>
                            </div>
                           

                        </div>
                        <div className="pt-3">
                        <Button variant="primary">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
                </Card>
            </div>
           
        </>
    )
}

export default Triase;