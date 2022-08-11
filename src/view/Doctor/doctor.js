import React,{useEffect,useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Doctor(){
    const[data,setData]=useState([])

    useEffect(()=>{
        var dat = require('./dummy.json')
        var ar = []
        for (let index = 0; index < dat.length; index++) {
            const element = dat[index];
           
            ar.push(element)
        }
        setData(ar)
    },[])

    console.log(data)
    return(
        <div>
        <div className="border">
            <div className="border bg-white shadow">
          
                <Row className="m-3 mx-4 p-3">
                    <Col sm={1}>
                    <img src={require('../Doctor/medical-team.png')} height="90" className="justify-content-start d-flex mt-1" />
                    </Col>
                    <Col className="jus mt-2">
                        <h3 className="justify-content-start d-flex">Rumah Sakit X</h3>
                        <p className="justify-content-start d-flex" style={{fontSize:20}}>Daftar Dokter Tersedia</p>
                    </Col>
                    <Col>
                    <Form className="d-flex mt-4">
                        <Form.Control
                        type="search"
                        placeholder="Cari Disini!"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Col>
                </Row>
            </div>
        </div>
        <div className='d-flex border flex-row row justify-content-center'>
        {data.map(item=>
                
                <Card style={{ width: '20rem'}} className="mx-3 mt-4">
                <img src={require('../Doctor/doctor.png')} style={{borderRadius:"50%"}}/>
                <Card.Body>
                    <Card.Title>{item.Name}</Card.Title>
                    <Card.Text>
                    {item.Spesialis}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
             
            
            )}
            </div>
        </div>
    )
}

export default Doctor;