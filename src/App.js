// src/App.js
import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1>Welcome to Our App</h1>
            <Button variant="primary" href="login.html" className="mx-2">
              Login
            </Button>
            <Button variant="secondary" href="register.html" className="mx-2">
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
