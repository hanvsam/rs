import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Entry() {
    
    return (
        <div>
        <Container className='mt-3 bg-white rounded-5 p-4 border border-3 '>
            <Row className="mx-2">
                <Col className="col-6">
                    <Col className="p-2">
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Cari Disini!"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Col>
                </Col>
                <Col >
                <Row>
                        <Col xs={4} md={4} className="align-items-center">
                            <img src={require('./blood-test.png')} height="50"/>
                        </Col>
                        <Col>
                            <h1 style={{fontSize:15}} className="justify-content-start d-flex">Stok Darah</h1>
                            <a href="http://ayodonor.pmi.or.id/" style={{fontSize:13}} className="justify-content-start d-flex list-group-item list-group-item-action active" on >Klik Untuk Informasi</a>  
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col xs={4} md={4} className="align-items-center">
                            <img src={require('./hospitalisation.png')} height="50"/>
                        </Col>
                        <Col>
                            <h1 style={{fontSize:15}} className="justify-content-start d-flex">Pasien Terdaftar</h1>
                            <p style={{fontSize:13}} className="justify-content-start d-flex">3 Orang</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="p-1">
                        <Col className="mt-1 p-2">
                            Lorem Ipsum
                        </Col>
                </Col>
            </Row>
        </Container>
        </div>
    );
  }
  
export default Entry;