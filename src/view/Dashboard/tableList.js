import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Table() {
    return (
    <Container className='bg-white rounded-5 p-3 border border-3 shadow mb-5'>
      <Row>
        <Col className="square border border-1 rounded-3" style={{margin:10,padding:20}}>
        <div>
            <Row>
                <Col xs={6} md={4}>
                <img src={require('./medical-care.png')} height="70" className='mx-4'/>
                </Col>
                <Col xs={12} md={8}>
                    <h1 style={{fontSize:30}} className="justify-content-start d-flex">Kesediaan Obat</h1>
                    <p style={{fontSize:20}} className="justify-content-start d-flex">85%</p>
                </Col>
            </Row>
        </div>
        </Col>
        <Col className="square border border-1 rounded-3" style={{margin:10,padding:20}}>
        <div>
            <Row>
                <Col xs={6} md={4}>
                <img src={require('./medical-team.png')} height="70" className='mx-4'/>
                </Col>
                <Col xs={12} md={8}>
                    <h1 style={{fontSize:30}} className="justify-content-start d-flex">Doktor Spesialis</h1>
                    <p style={{fontSize:20}} className="justify-content-start d-flex">21 Orang</p>
                </Col>
            </Row>
        </div>
        </Col>
        <Col className="square border border-1 rounded-3" style={{margin:10,padding:20}}>
        <div>
            <Row>
                <Col xs={6} md={4}>
                <img src={require('./healthcare.png')} height="70" className='mx-4'/>
                </Col>
                <Col xs={12} md={8}>
                    <h1 style={{fontSize:30}} className="justify-content-start d-flex">Tenaga Medis</h1>
                    <p style={{fontSize:20}} className="justify-content-start d-flex">40 Orang</p>
                </Col>
            </Row>
        </div>
        </Col>
      </Row>
    </Container>
    );
  }
  
export default Table;