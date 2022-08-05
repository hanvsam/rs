import react from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
 
function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="White" variant="white" className="shadow-sm p-3 mb-4 bg-white">
      <Container>
      <Navbar.Brand href="#home">
          <img src={require('./merek.png')} height="60"/>
      </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.google.com/search?q=Rumah%20Sakit%20Pacitan&oq=Rumah+Sakit+Pacitan&aqs=chrome..69i57j0i22i30l4.2422j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZLZIRzvLjAK0rpqZlOYSQ1gFAavA:1659434314881&rflfq=1&num=10&rldimm=8172232199015619121&lqi=ChNSdW1haCBTYWtpdCBQYWNpdGFuSPah_PrlgICACFonEAAQARgAGAEYAiITcnVtYWggc2FraXQgcGFjaXRhbioGCAMQABABkgEQZ2VuZXJhbF9ob3NwaXRhbKoBExABKg8iC3J1bWFoIHNha2l0KCY&ved=2ahUKEwi_7_bG8qf5AhVOTWwGHevuCvsQvS56BAgEEAE&sa=X&rlst=f#rlfi=hd:;si:8172232199015619121,l,ChNSdW1haCBTYWtpdCBQYWNpdGFuSPah_PrlgICACFonEAAQARgAGAEYAiITcnVtYWggc2FraXQgcGFjaXRhbioGCAMQABABkgEQZ2VuZXJhbF9ob3NwaXRhbKoBExABKg8iC3J1bWFoIHNha2l0KCY;mv:[[-7.935855900000001,111.3994819],[-8.2371035,110.94600589999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2" style={{fontWeight:'normal', fontSize:20}}>Rumah Sakit Dr Darsono Pacitan</Nav.Link>
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

export default Navigation;