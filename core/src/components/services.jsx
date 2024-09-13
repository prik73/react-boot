import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = [
    {
        id:1,
        icon: 'fas fa-solid fa-users-gear',
        title:' Workshops',
        description:'We are dedicated to empowering children living in underserved slum communities by organizing evening schools. These schools not only provide a safe and nurturing environment for children but also offer quality education, helping them build a strong foundation for a brighter future. By focusing on holistic development, our evening schools offer academic support, life skills training, and extracurricular activities, giving these children the tools they need to break the cycle of poverty and unlock their full potential.'
    },
    {
        id:2,
        icon: 'fas fa-solid fa-gavel',
        title: 'Legal and Social Awareness Camps',
        description:"The law states that ignorance of the law is no excuse, yet many people remain unaware of even the most basic legal rights and protections. To address this critical issue, we are dedicated to spreading legal knowledge throughout the country by organizing legal and social awareness camps. These camps aim to empower individuals with the information they need to understand and exercise their rights, fostering a more informed and just society. By providing access to legal education, we seek to bridge the gap between the law and the people it serves, ensuring that everyone has the opportunity to know and uphold their rights."
    },
    {
        id:3,
        icon: 'fas fa-solid fa-heart-pulse',
        title:'Health Camps',
        description:"Health is a fundamental pillar of human well-being, yet many individuals are unable to access basic medical care due to the high costs of doctor consultations and medications. Recognizing this critical gap, we are committed to providing free medical health check-ups to those in need. Our initiative ensures that underprivileged communities can receive essential health screenings and preventive care without financial barriers, empowering them to take control of their health and well-being. Through these efforts, we strive to promote healthier lives and create a stronger, more resilient community."
    },
    {
        id:4,
        icon: 'fas fa-ribbon',
        title:'Distribution Drives',
        description:"Our commitment to the welfare of women, children, senior citizens, and individuals with special needs drives us to take meaningful action. In response to the urgent needs of these vulnerable groups, we organize targeted donation drives to provide essential resources and support. Whether it’s clothing, food, medical supplies, or educational materials, our donation drives aim to uplift and empower these communities, ensuring that they receive the assistance they deserve when it matters most."
    },
]
export default function AppServices() {
  return (
    <section id='services' className='block services-block'> 
        <Container fluid>
            <div className='title-holder'>
                <h2>what do we do</h2>
                <div className='subtitle'>Impact that we create</div>
            </div>
            <Row>
                {
                    data.map(services => {
                        return (
                            <Col sm={3} className='holder' key={services.id}>
                                <div style={{ justifyContent: 'center', alignItems: 'center'}}className='icon'>
                                    <i className={services.icon} /> 
                                </div>
                                <h4 style={{ textAlign: 'center' }}>{services.title}</h4>
                                <p style={{ textAlign: 'justify' }}>{services.description}</p>
                            </Col>
                        )
                    })
                }
              
            </Row>
        </Container>
    </section>
  );
}