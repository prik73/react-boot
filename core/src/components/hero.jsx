// src/components/AppHero.jsx
import Carousel from 'react-bootstrap/Carousel';
import imageOne from '../assets/images/one.jpg';
import imageTwo from '../assets/images/five.jpg';
import imageThree from '../assets/images/one.jpg';

const heroData = [
  {
    id: 1,
    image: imageOne,
    title: '1st one',
    description: 'hello from 1'
  },
  {
    id: 2,
    image: imageTwo,
    title: '2nd one',
    description: 'hello from 2'
  },
  {
    id: 3,
    image: imageThree,
    title: '3rd one',
    description: 'hello from 3'
  }
];

export default function AppHero() {
  return (
    
    <section id="home" className="hero-block">
      <Carousel fade>
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img className="d-block w-100" src={hero.image} alt={`slide ${hero.id}`} />
            <Carousel.Caption>
              <h3>{hero.title}</h3>
              <p>{hero.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
