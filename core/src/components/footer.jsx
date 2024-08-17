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
              &copy; 2024 Corporate. All Rights Reserved.
            </div>
            <div className='socials'>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href='https://www.instagram.com/smmfoundation2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    <i className='fab fa-instagram fa-beat' />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href='https://www.facebook.com/people/SMM-Foundation/61558067799297/?mibextid'>
                    <i className='fab fa-facebook fa-beat' />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href='https://www.youtube.com/'>
                    <i className='fab fa-youtube fa-beat' />
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