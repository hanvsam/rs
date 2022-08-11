import React, {useState,useEffect} from "react";
import Btn from '../component/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from "react-bootstrap"
import "./style.css"
import { Container, Row, Col } from 'react-grid-system';





const Triase = () =>{
    const[form,setForm]=useState([])
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
        var ya = document.getElementById('Trauma')
        var no = document.getElementById('Nontrauma')

        if (ya.checked === true){
            setTrauma(ya.value)
        }
        else if (no.checked === true){
            setTrauma(no.value)
        }
    }

    // var header = document.getElementById("Airway");
    var btn = document.getElementsByClassName("klik");
    for (let index = 0; index < btn.length; index++) {
        btn[index].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active","");
            this.className += " active"
        })
    }
    function checkKajian(){
        const tidakAirway = document.getElementById("tidakAirway")
        const parsial = document.getElementById("parsialObstruksi")
        const bebas = document.getElementById("Bebas")

        if (tidakAirway){
            console.log(tidakAirway.value)
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
            <div style={{position:'absolute', left:'50vh', paddingTop:'13vh ', top:'5vh', height:'100vh'}}>
                <Card style={{ width: '70vw', height: '100rem' }} className="bg">
                <Card.Body>
                    <Form>
                    <div>
                            <div className="pb-2">
                                <span>Kedatangan</span>
                                <Row className="pt-1">
                                    <Col sm={3}>
                                    <input type="radio" id="Sendiri" name="kedatangan" value={"Sendiri"} className="mx-2"/>
                                    Datang Sendiri
                                    </Col>
                                    <Col sm={3}>
                                    <input type="radio" id="Diantar" name="kedatangan" value={"Dengan Orang lain"} className="mx-2"/>
                                    Datang Dengan Orang Lain
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="pb-2">
                                <span>Penyakit Menular</span>
                                <Row  className="pt-1">
                                    <Col sm={3}>
                                    <input type="radio" id="Ya" name="menular" value={"Ya"} className="mx-2"/>
                                    Iya
                                    </Col>
                                    <Col sm={3}>
                                    <input type="radio" id="Tidak" name="menular" value={"Tidak"} className="mx-2"/>
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
                                    <input type="radio" id="AdaAmbulan" name="ambulan" value={"Ada"} className="mx-2"/>
                                    Ada
                                    </Col>
                                    <Col sm={4}>
                                    <input type="radio" id="TidakAmbulan" name="ambulan" value={"Tidak Ada"} className="mx-2"/>
                                    Tidak
                                    </Col>
                                </Row>
                                </div>
                                <div>
                                    <Row>
                                    <span className="mx-5">Petugas Medis</span>
                                    <Col sm={4} style={{marginLeft:6}}>
                                    <input type="radio" id="AdaPetugas" name="petugas" value={"Ada"} className="mx-2"/>
                                    Ada
                                    </Col>
                                    <Col sm={4} style={{marginLeft:0.5}}>
                                    <input type="radio" id="TidakPetugas" name="petugas" value={"Tidak"} className="mx-2"/>
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
                                    <input type="radio" id="Trauma" name="trauma" value={"Trauma"} className="mx-2"/>
                                    Trauma
                                    </Col>
                                    <Col sm={3}>
                                    <input type="radio" id="Nontrauma" name="trauma" value={"Non Trauma"} className="mx-2"/>
                                    Non Trauma
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div style={{width:"100%"}}>
                            <span>Pengkajian</span>
                            <div className="pt-3" style={{width:"100%"}} id="kajian">
                                <Button variant="dark" className="mx-4 ac" style={{height: 40,width:200,borderRadius:20}} id="hitam" name="Pengkajian" value="hitam">Hitam</Button>
                                <Button variant="danger" className="mx-4 ac" style={{height: 40,width:200,borderRadius:20}} id="merah" name="Pengkajian" value="merah">Merah</Button>
                                <Button variant="warning" className="mx-4 ac" style={{height: 40,width:200,borderRadius:20}} id="kuning" name="Pengkajian" value="kuning">Kuning</Button>
                                <Button variant="success" className="mx-4 ac" style={{height: 40,width:200,borderRadius:20}} id="hijau" name="Pengkajian" value="hijau">Hijau</Button>
                            </div>
                        </div>

                        <div className="py-3">
                            <span>Airway</span>
                            <div className="d-flex pt-3" id="Airway">
                                <Button variant ="success" className="klik" id="tidakAirway" name="udara" value="Tidak Airway"><span>Tidak Airway</span></Button>
                                <Button variant ="success" className="klik" id="parsialObstruksi" name="udara" value="Tidak Airway"><span>Obstruksi/Parsial obstruksi</span></Button>
                                <Button variant ="success" className="klik" id="Bebas" name="udara" value="Tidak Airway"><span>Bebas</span></Button>
                                <Button variant ="success" className="klik" style={{opacity:0}}><span>Bebas</span></Button>
                            </div>
                           

                        </div>

                        <div>
                            <span>Breathing</span>
                            <div className="d-flex pt-3">
                                <Button className="klik"><span>Tidak Breathing</span></Button>
                                <Button className="klik text-center"><span>Distress nafas berat/berhenti nafas</span></Button>
                                <Button className="klik text-center"><span>Distress nafas ringan/ sedang</span></Button>
                                <Button className="klik"><span>Normal</span></Button>
                            </div>
                           

                        </div>
                        <div className="pt-3">
                        <Button variant="primary" onClick={()=>check()}>Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
                </Card>
            </div>
           
        </>
    )
}

export default Triase;