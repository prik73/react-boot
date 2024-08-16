import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactForm.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_3azd8ie', // Replace with your EmailJS service ID
      'template_i0lpzuk', // Replace with your EmailJS template ID
      formData,
      'tt4hZOeExsAZjFGzX' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    });
  };

  return (
    <div className="glassmorphic-bg">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <div className="address-bg">
              <div className="address-content">
                <h2 className="mb-4">Reach Us At</h2>
                <p><strong>Address:</strong></p>
                <p>123 Main Street</p>
                <p>City, State, ZIP</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> contact@yourorg.com</p>
                <p><strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM</p>
              </div>
            </div>
          </Col>
          
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form onSubmit={handleSubmit} className="shadow rounded glassmorphic-form">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
            {submitStatus === 'success' && (
              <p className="text-success mt-3">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-danger mt-3">Error sending message. Please try again.</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;