import React, {useState,useEffect} from "react";
import Btn from '../component/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from "react-bootstrap"
import "./style.css"


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
            <div>
                <Card style={{ width: '70vw', height: '100vh' }} className="bg">
                <Card.Body>
                    <Form>
                    <div>
                            <div>
                                <span>Kedatangan</span>
                                <div className="mx-5">
                                    <input type="radio" id="Sendiri" name="kedatangan" value={'sendiri'}/>
                                    <label >Datang Sendiri</label>
                                    <input type="radio" id="Diantar" name="kedatangan" value={'diantar'}/>
                                    <label >Diantar</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Penyakit menular</span>
                                <div className="mx-5">
                                    <input type="radio" id="Ya" name="menular" value={'Ya'}/>
                                    <label >Ya</label>
                                    <input type="radio" id="Tidak" name="menular" value={'Tidak'}/>
                                    <label >Tidak</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>Pengantar</span>
                            </div>
                            <div>
                                <div>
                                    <span className="mx-5">Ambulan</span>
                                    <input type="radio" id="AdaAmbulan" name="ambulan" value={"Ada"}/>
                                    <label >Ada</label>
                                    <input type="radio" id="TidakAmbulan" name="ambulan" value={"Tidak Ada"}/>
                                    <label >Tidak</label>
                                </div>
                                <div>
                                    <span className="mx-5">Petugas Medis</span>
                                    <input type="radio" id="AdaPetugas" name="petugas" value={"Ada"}/>
                                    <label >Ada</label>
                                    <input type="radio" id="TidakPetugas" name="petugas" value={"Tidak"}/>
                                    <label >Tidak</label>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                <span>Trauma/Non Trauma</span>
                                <div className="mx-5">
                                    <input type="radio" id="trauma" name="trauma" value={"Trauma"}/>
                                    <label >Trauma</label>
                                    <input type="radio" id="Nontrauma" name="trauma" value={"Non Trauma"}/>
                                    <label >Non Trauma</label>
                                </div>
                            </div>
                        </div>

                        <div style={{width:"100%"}}>
                            <span>Pengkajian</span>
                            <div style={{width:"100%"}}>
                                <Button variant="dark" className="mx-4" style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                                <Button variant="danger" className="mx-4 " style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                                <Button variant="warning" className="mx-4" style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                                <Button variant="success" className="mx-4" style={{height: 40,width:200,borderRadius:20}}>Klik</Button>
                            </div>
                        </div>

                        <div>
                            <span>Airway</span>
                            <div className="d-flex">
                                <div className="klik"><span>Tidak Airway</span></div>
                                <div className="klik"><span>Obstruksi/ Parsial obstruksi</span></div>
                                <div className="klik"><span>Bebas</span></div>
                                <div className="klik"><span>Bebas</span></div>
                            </div>
                           

                        </div>

                        <div>
                            <span>Breathing</span>
                            <div className="d-flex">
                                <div className="klik"><span>Tidak Breathing</span></div>
                                <div className="klik"><span>Distress nafas berat/henti nafas</span></div>
                                <div className="klik"><span>Distress nafas ringan/ sedang</span></div>
                                <div className="klik"><span>Normal</span></div>
                            </div>
                           

                        </div>

                        <Button variant="primary" onClick={()=>check()}>Submit</Button>
                    </Form>
                </Card.Body>
                </Card>
            </div>
           
        </>
    )
}

export default Triase;