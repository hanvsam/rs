import react from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
 
function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="White" variant="white" className="shadow-sm p-3 mb-4 bg-white">
      <Container style={{backgroundColor:"#ffff"}}>
      <Navbar.Brand href="#home">
      <Link to="/Dashboard" style={{textDecoration:"none",color:"#000"}}>
          <img src={require('./merek.png')} height="60"/>
          </Link>
      </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{fontWeight:'normal', fontSize:20,textDecoration:"none",color:"#000"}}>RSUD</Link>
          </Nav>
          <Nav className="d-flex pt-1">
            <Nav.Link href="#userName" className="px-3 pt-3" style={{fontWeight:'normal', fontSize:19}}>Widja Widajaka,dr, Sp.OG</Nav.Link>
            <Nav.Link href="#profile"><img src={require('./profile.png')} height="45" /></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;