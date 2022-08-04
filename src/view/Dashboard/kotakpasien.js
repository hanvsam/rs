import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


function Kotakpasien() {
    const[data,setData]=useState()

    function getData(){
    
        var dat = require('./dummy.json')
    
        for (let index = 0; index < dat.length; index++) {
            const element = dat[index];
            setData(element)
            
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return (
    <Container className='mt-3 bg-white rounded-5 p-4 border border-5'>
        <div nameClass="border border-1 rounded-3">
        <Stack gap={3}>
            <div className="bg-light border border-2 rounded-3">
                <Row className="m-3">
                    <Col sm={1}>
                    <img src={require('./patient.png')} height="70" className="justify-content-start d-flex mt-2"/>
                    </Col>
                    <Col sm={5} className="jus">
                        <h1 className="justify-content-start d-flex">Moh Riyant Almadhi</h1>
                        <p className="justify-content-start d-flex">RM 0000314958</p>
                    </Col>
                    <Col sm={3}>
                        <p className="justify-content-start d-flex mt-3">21 Tahun</p>
                        <p className="justify-content-start d-flex">Selasa, 2 Agustus 2022</p>
                    </Col>
                    <Col sm={3} className="justify-content-end d-flex">
                    <img src={require('./verified-user.png')} height="50" className=" mt-3 "/>
                    </Col>
                </Row>
            </div>
            <div className="bg-light border border-2 rounded-3">
                <Row className="m-3">
                    <Col sm={1}>
                    <img src={require('./patient.png')} height="70" className="justify-content-start d-flex mt-2"/>
                    </Col>
                    <Col sm={5} className="jus">
                        <h1 className="justify-content-start d-flex">Nama Pasien</h1>
                        <p className="justify-content-start d-flex">Nomor Pasien</p>
                    </Col>
                    <Col sm={3}>
                        <p className="justify-content-start d-flex mt-3">Umur Pasien</p>
                        <p className="justify-content-start d-flex">Tanggal Masuk Pasien</p>
                    </Col>
                    <Col sm={3} className="justify-content-end d-flex">
                    <img src={require('./delete-user.png')} height="50" className=" mt-3 "/>
                    </Col>
                </Row>
            </div>
            <div className="bg-light border border-2 rounded-3">
                <Row className="m-3">
                    <Col sm={1}>
                    <img src={require('./patient.png')} height="70" className="justify-content-start d-flex mt-2"/>
                    </Col>
                    <Col sm={5} className="jus">
                        <h1 className="justify-content-start d-flex">Nama Pasien</h1>
                        <p className="justify-content-start d-flex">Nomor Pasien</p>
                    </Col>
                    <Col sm={3}>
                        <p className="justify-content-start d-flex mt-3">Umur Pasien</p>
                        <p className="justify-content-start d-flex">Tanggal Masuk Pasien</p>
                    </Col>
                    <Col sm={3} className="justify-content-end d-flex">
                    <img src={require('./delete-user.png')} height="50" className=" mt-3 "/>
                    </Col>
                </Row>
            </div>
        </Stack>
        </div>
    </Container>
    );
  }
  
export default Kotakpasien;