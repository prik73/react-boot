import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AppAbout(){
    return (
        <section id='about' className='block about-block'>
       
          <Container fluid>
            <div className='title-holder'>
                <h2> About-us </h2>
                <div className='subtitle'>
                    details about the NGO, ke baare me kuch
                </div>
            </div>
            <Row>
             <Col sm={6}>image</Col>
             <Col sm={6}>image</Col>
            </Row>
          </Container>
      </section>
      );
}