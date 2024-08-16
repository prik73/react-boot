import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './donateForm.css'; // Assuming you'll style it similarly to the contact form

const Donate = () => {
  return (
    <div className="tw-max-w-screen-lg tw-mx-auto glassmorphic-bg p-4" style={{ marginTop: '165px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
            <h2 className="text-center mb-4">Bank Details</h2>
            <p><strong>Bank Name:</strong> Your Bank Name</p>
            <p><strong>Account Number:</strong> 123456789012</p>
            <p><strong>IFSC Code:</strong> ABCD0123456</p>
            <p><strong>Account Holder:</strong> Your Organization Name</p>
            <p><strong>Branch:</strong> Your Branch Name</p>
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center mb-4">Scan & Pay</h2>
            <Image src="path/to/your/qr-code.png" alt="QR Code" fluid style={{ maxWidth: '100%', height: 'auto', aspectRatio: '1/1' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donate;
