import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppFooter() {
  return (
    <footer id="footer">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <div className='copyright'>
              &copy; Developed by Priyanshu Baswala and Saarthak Agarwal
            </div>
            <div className='socials d-flex justify-content-center align-items-center'>
              <ul className="list-inline">
                <li className="list-inline-item ">
                  <a href='https://www.instagram.com/smmfoundation2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    <i className='fab fa-instagram fa-fade' />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href='https://www.facebook.com/people/SMM-Foundation/61558067799297/?mibextid'>
                    <i className='fab fa-facebook fa-fade' />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href='https://youtu.be/k_V6dAuwmtg'>
                    <i className='fab fa-youtube fa-fade' />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}