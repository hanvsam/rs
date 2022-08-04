import React, {useState,useEffect} from "react";
import Btn from '../component/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Form, Button} from "react-bootstrap"
import "./style.css"
import Pidentitas from "../Pasien/src/noreg";


const Triase = () =>{
    const[datang,setDatang]=useState()


    function pilDat(){
        var dat = document.getElementsByName("kedatangan")
        setDatang(dat.value)
    }
    console.log(datang)

    // const btn = document.querySelector('#btn');        
    //     const radioButtons = document.querySelectorAll('input[name="kedatangan"]');
    //     btn.addEventListener("click", () => {
    //         let selectedSize;
    //         for (const radioButton of radioButtons) {
    //             if (radioButton.checked) {
    //                 selectedSize = radioButton.value;
    //                 break;
    //             }
    //         }
    //         // show the output:
    //        console.log(selectedSize)
    //     });

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
                                    <input type="radio" id="Sendiri" name="kedatangan" value="Datang Sendiri"/>
                                    <label for="Sendiri">Datang Sendiri</label>
                                    <input type="radio" id="Diantar" name="kedatangan" value="Diantar"/>
                                    <label for="Diantar">Diantar</label>
                                </div>
                            </div>
                        </div>
                        <Form.Group>
                            <Form.Label>Penyakit menular</Form.Label>
                            {['Iya', 'Tidak'].map(lab=>(
                                <Form.Check
                                reverse
                                label={lab}
                                name="menular"
                                type='radio'
                                id='radioMenular'
                                className="mx-5"
                                />
                            ))}
                        </Form.Group>

                        <div>
                            <div>
                                <span>Pengantar</span>
                            </div>
                            <div>
                                <div>
                                    <span className="mx-5">Ambulan</span>
                                    <input type="radio" id="ambulan" name="ambulan" value="Ada"/>
                                    <label for="html">Ada</label>
                                    <input type="radio" id="ambulan" name="ambulan" value="Tidak"/>
                                    <label for="html">Tidak</label>
                                </div>
                                <div>
                                    <span className="mx-5">Petugas Medis</span>
                                    <input type="radio" id="petugas" name="petugas" value="Ada"/>
                                    <label for="html">Ada</label>
                                    <input type="radio" id="petugas" name="petugas" value="Tidak"/>
                                    <label for="html">Tidak</label>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                <span>Trauma/Non Trauma</span>
                                <div className="mx-5">
                                    <input type="radio" id="trauma" name="trauma" value="Trauma"/>
                                    <label for="html">Trauma</label>
                                    <input type="radio" id="trauma" name="trauma" value="Non Trauma"/>
                                    <label for="html">Non Trauma</label>
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

                        <Button variant="primary" onClick={pilDat}>Submit</Button>
                    </Form>
                </Card.Body>
                </Card>
            </div>
           
        </>
    )
}

export default Triase;