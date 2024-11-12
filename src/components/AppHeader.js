// src/components/AppHeader.js
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const AppHeader = ({ showRegisterModal, showLoginModal }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Button variant="primary" onClick={showRegisterModal}>Register</Button>
          <Button variant="secondary" onClick={showLoginModal}>Login</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AppHeader;
