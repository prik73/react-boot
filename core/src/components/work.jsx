import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
// Import your images
import i1 from '../assets/images/site/one.jpg';
import i2 from '../assets/images/site/two.jpg';
import i3 from '../assets/images/site/three.jpg';
import i4 from '../assets/images/site/four.jpg';
import i5 from '../assets/images/site/five.jpg';
import i6 from '../assets/images/site/six.jpg';
import i7 from '../assets/images/site/seven.jpg';
import i8 from '../assets/images/site/eight.jpg';
import i9 from '../assets/images/site/nine.jpg';

// Data for images and links
const data = [
    { id: 1, link: 'http://www.google.com', image: i1, title: 'one', subtitle: 'one' },
    { id: 2, link: 'http://www.google.com', image: i2, title: 'two', subtitle: 'one' },
    { id: 3, link: 'http://www.google.com', image: i3, title: 'three', subtitle: 'one' },
    { id: 4, link: 'http://www.google.com', image: i4, title: 'four', subtitle: 'one' },
    { id: 5, link: 'http://www.google.com', image: i5, title: 'five', subtitle: 'one' },
    { id: 6, link: 'http://www.google.com', image: i6, title: 'six', subtitle: 'one' },
    { id: 7, link: 'http://www.google.com', image: i7, title: 'seven', subtitle: 'one' },
    { id: 8, link: 'http://www.google.com', image: i8, title: 'eight', subtitle: 'one' },
    { id: 9, link: 'http://www.google.com', image: i9, title: 'nine', subtitle: 'one' }
];

// Removed pagination imports and logic

export default function AppWorks() {
    return (
        <div>
            <section id='works' className='block works-block'>
                <Container fluid>
                    <div className='title-holder'>
                        <h2>Our Works</h2>
                        <div className='subtitle'>hamaara kaaam hee hai hamaara naaam hehe</div>
                    </div>
                    <Row className='portfoliolist'>
                        <Carousel fade>
                            {data.map((works) => (
                                <Carousel.Item key={works.id}>
                                    <img src={works.image} alt={`slide ${works.id}`} />

                                    <Carousel.Caption>
                                        <p>{works.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </Row>
                </Container>
            </section>
        </div>
    );
}
// export default function AppWorks() {
//     return (
//         <div>
//             <section id='works' className='block works-block'>
//                 <Container fluid>
//                     <div className='title-holder'>
//                         <h2>Our Works</h2>
//                         <div className='subtitle'>hamaara kaaam hee hai hamaara naaam hehe</div>
//                     </div>
//                     <Row className='portfoliolist'>
//                         {data.map(works => (
//                             <Col sm={4} key={works.id}>
//                                 <div className='portfolio-wrapper'>
//                                     <a href={works.link}>
//                                         <Image src={works.image} />
//                                         <div className='label text-center'>
//                                             <h3>{works.title}</h3>
//                                             <p>{works.subtitle}</p>
//                                         </div>
//                                     </a>
//                                 </div>
//                             </Col>
//                         ))}
//                         <Carousel fade>
//                                 {data.map((works) => (
//                                     <Carousel.Item key={works.id}>
//                                         <img className="d-block w-[100vw]" src={works.image} alt={`slide ${works.id}`} />

//                                         <Carousel.Caption>
//                                             <h1>{works.title}</h1>
//                                             <p>{works.description}</p>
//                                             <a className="btn btn-primary" href={works.link}>Learn More <i className="fas fa-chevron-right"></i></a>
//                                         </Carousel.Caption>
//                                     </Carousel.Item>
//                                 ))}
//                             </Carousel>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// }
