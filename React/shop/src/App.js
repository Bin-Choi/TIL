import './App.css';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';



function App() {
  
  let [shoes] = useState(data)
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">사랑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg">
      </div>

      <Container>
      <Row>
        <Col>
          <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/56465/product/image_1593347955364_1000.jpg" width="80%"></img>
          <h4>{ shoes[0].title }</h4>
          <p>{ shoes[0].price }</p>
        </Col>
        <Col>
          <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/56465/product/image_1659679805059_1000.jpg" width="80%"></img>
          <h4>{ shoes[1].title }</h4>
          <p>{ shoes[1].price }</p>
        </Col>
        <Col>
          <img src="https://contents.sixshop.com/thumbnails/uploadedFiles/56465/product/image_1575816295881_1000.jpg" width="80%"></img>
          <h4>{ shoes[2].title }</h4>
          <p>{ shoes[2].price }</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
