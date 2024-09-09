import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = [
    {
        id:1,
        icon: 'fas fa-solid fa-users-gear',
        title:' Workshops',
        description:'Our NGO conducts various workshops aimed at empowering individuals with knowledge and skills. These workshops cover a wide range of topics such as vocational training, personal development, education, financial literacy, and more. Through these sessions, we aim to uplift communities by providing them with the tools they need for self-sufficiency and success.'
    },
    {
        id:2,
        icon: 'fas fa-solid fa-gavel',
        title: 'Legal and Social Awareness Camps',
        description:"Our legal and social awareness camps focus on educating individuals about their rights and responsibilities. We provide guidance on critical issues such as human rights, legal aid, child protection, women's rights, and more. These camps are designed to foster a more informed and proactive community, helping people navigate legal challenges and engage with society in a more meaningful way."
    },
    {
        id:3,
        icon: 'fas fa-solid fa-heart-pulse',
        title:'Health Camps',
        description:"Access to healthcare is a fundamental right, and our NGO is dedicated to providing health camps for underprivileged communities. We offer free medical check-ups, vaccinations, and healthcare education to ensure that everyone has the opportunity to lead a healthy life. Our camps also focus on preventative care, promoting hygiene and wellness practices."
    },
    {
        id:4,
        icon: 'fas fa-ribbon',
        title:'Distribution Drives',
        description:"In times of need, our distribution drives aim to provide essential supplies such as food, clothing, educational materials, and hygiene products to marginalized communities. Whether it's disaster relief or everyday support, we strive to ensure that no one is left behind. These drives are an essential part of our mission to spread compassion and support to those in need."
    },
]

export default function AppServices() {
  return (
    <section id='services' className='block services-block'> 
        <Container fluid>
            <div className='title-holder'>
                <h2>what do we do</h2>
                <div className='subtitle'>impact that we create</div>
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