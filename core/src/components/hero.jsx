import Carousel from 'react-bootstrap/Carousel';
import imageOne from '../assets/images/site/cover_1.jpg';
import i2 from '../assets/images/site/allphotos/56.jpg/'
import i3 from '../assets/images/site/allphotos/55.jpg/'
import i4 from '../assets/images/site/allphotos/33.jpg/'
import i5 from '../assets/images/site/allphotos/22.jpg/'



const heroData = [
  {
    id: 1,
    image: imageOne,
    title: 'Building a Brighter Future Together',
    description: 'Join us in our mission to bring about social change in the world.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: i2,
    title: 'Building a Brighter Future Together',
    description: 'Join us in our mission to bring about social change in the world.',
    link: 'https://www.google.com'
  },
  {
    id: 3,
    image: i3,
    title: 'Building a Brighter Future Together',
    description: 'Join us in our mission to bring about social change in the world.',
    link: 'https://www.google.com'
  },
  {
    id: 4,
    image: i4,
    title: 'Building a Brighter Future Together',
    description: 'Join us in our mission to bring about social change in the world.',
    link: 'https://www.google.com'
  },
  {
    id: 5,
    image: i5,
    title: 'Building a Brighter Future Together',
    description: 'Join us in our mission to bring about social change in the world.',
    link: 'https://www.google.com'
  }
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel fade>
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img className="d-block w-100" src={hero.image} alt={`slide ${hero.id}`} />
            
            <Carousel.Caption className="hero-caption">
              <h1>{hero.title}</h1>
              <p>{hero.description}</p>
              {/* <a className="btn btn-primary" href="#about">Learn More <i className="fas fa-chevron-right"></i></a> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
