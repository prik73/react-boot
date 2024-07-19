import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const data = [
    {
        id:1,
        icon: 'fas fa-ribbon',
        title:' workshops',
        description:'gyaan'
    },
    {
        id:2,
        icon: 'fas fa-hands-holding-circle',
        title:' workshops',
        description:'gyaan1'
    },
    {
        id:3,
        icon: 'fas fa-seedling',
        title:' workshops',
        description:'gyaan3'
    }
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
                            <Col sm={4} className='holder' key={services.id}>
                                <div className='icon'>
                                    <i className={services.icon} /> 
                                </div>
                                <h3>{services.title}</h3>
                                <p>{services.description}</p>
                            </Col>
                        )
                    })
                }
              
            </Row>
        </Container>
    </section>
  );
}