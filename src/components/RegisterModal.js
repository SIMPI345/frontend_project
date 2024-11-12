// src/components/RegisterModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RegisterModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    contact: '',
    dob: '',
    email: '',
    password: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullname) errors.fullname = 'Full Name is required';
    if (!formData.contact || isNaN(formData.contact)) errors.contact = 'Contact must be a valid number';
    if (!formData.dob) errors.dob = 'Date of Birth is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.password || formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (!formData.gender) errors.gender = 'Gender is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration Successful');
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              isInvalid={!!errors.fullname}
            />
            <Form.Control.Feedback type="invalid">{errors.fullname}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              isInvalid={!!errors.contact}
            />
            <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formDob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              isInvalid={!!errors.dob}
            />
            <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              isInvalid={!!errors.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">Register</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={handleClose}>Already have an account? Login</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
