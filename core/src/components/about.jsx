import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/site/it.jpg'

export default function HomeAppAbout(){
    return (
        <section id='about' className='block about-block'>
       
          <Container fluid>
            <div className='title-holder'>
                <h2> About-us </h2>
            </div>
            <Row>
             <Col sm={6}>
                <Image src={img1} />
             </Col>
             <Col sm={6} >Sarvodaya Manav se Manavta Foundation
(SMM Foundation) is a non-profit company
registered u/ section 8 of Companies Act, 2013.

It was incorporated in the year 2024, having its
registered office in Gurugram, Haryana.

The foundation works for the welfare of
humankind.

The main objective of the foundation is to spread
legal awareness and education in the country with special
emphasis on laws related to women, children,
senior-citizens and specially abled persons.</Col>
            </Row>
          </Container>
      </section>
      );
}