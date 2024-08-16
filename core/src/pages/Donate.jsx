import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './donateForm.css';

const Donate = () => {
  return (
    <div className="donate-us-container">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h2>Help Children by Donating to Us</h2>
            <p>You can donate by either bank transfer or using the QR code below.</p>
            <div className="bank-details">
              <h4>Bank Transfer Details:</h4>
              <p>Bank Name: XYZ Bank</p>
              <p>Account Number: 1234567890</p>
              <p>IFSC Code: XYZ1234</p>
            </div>
          </Col>
          <Col xs={12} md={6} className="qr-code-section">
            <h4>Scan QR Code to Donate</h4>
            <img src="path/to/qr-code.png" alt="QR Code" className="qr-code" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donate;