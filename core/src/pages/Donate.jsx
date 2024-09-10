import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './donateForm.css';
import QR from '../assets/images/site/DonateUs.jpg'
const Donate = () => {
  return (
    <div style={{minHeight: "45vh" }}className="donate-us-container">
      <Container fluid>
        <Row style={{}} className="justify-content-center">
          <Col style={{borderRadius: "20px", background: 'linear-gradient(325deg, rgba(255,255,255,0.1) -20%, rgba(0,0,255,0.8) 75%)', backgroundcolor: "#1d8aff"}} xs={12} md={6} className="mb-4 mb-md-0">
            <h3 style={{ marginTop:"20px", textAlign: 'center', color: "white" }}>Every donation makes a difference.</h3>
            <p style={{ textAlign: 'center', color: "white" }}>You can donate by either bank transfer or using the given QR code.</p>
            <div className="bank-details">
              <h4 style={{ textAlign: 'center', marginTop:'45px', color: "white" }}>Bank Transfer Details:</h4>
              <p style={{ textAlign: 'center' , color: "white"}}>Bank Name: IDBI Bank</p>
              <p style={{ textAlign: 'center' , color: "white"}}>Account Number: 2252102000000082</p>
              <p style={{ textAlign: 'center' , color: "white"}}>IFSC Code: IBKL0002252</p>
            </div>
          </Col>
          <Col xs={12} md={6} className="qr-code-section">
            <h4>Scan QR Code to Donate</h4>
            <img style={{maxWidth:"195px",marginTop:"5px"}} src={QR} alt="QR Code" className="qr-code" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donate;

// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import './donateForm.css';
// import QR from '../assets/images/site/DonateUs.jpg';

// const Donate = () => {
//   return (
//     <div className="donate-us-container">
//       <Container fluid>
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} className="mb-4 mb-md-0">
//             <Card style={{marginTop:"10px"}}> 
//               <Card.Header>
//                 <h3 className="text-center">Every donation makes a difference.</h3>
//               </Card.Header>
//               <Card.Body>
//                 <p className="text-center">You can donate by either bank transfer or using the given QR code.</p>
//                 <div className="bank-details">
//                   <h4 style={{ textAlign: 'center'}}>Bank Transfer Details:</h4>
//                   <p style={{ textAlign: 'center'}}>Bank Name: IDBI Bank</p>
//                   <p style={{ textAlign: 'center'}}>Account Number: 2252102000000082</p>
//                   <p style={{ textAlign: 'center'}}>IFSC Code: IBKL0002252</p>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={6} className="qr-code-section">
//             <h4>Scan QR Code to Donate</h4>
//             <img style={{maxWidth:"195px",marginTop:"5px"}} src={QR} alt="QR Code" className="qr-code" />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Donate;