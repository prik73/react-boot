import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/site/it.jpg'

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
             <Col sm={6}>
                <Image src={img1} />
             </Col>
             <Col sm={6}>A non-governmental organization (NGO) (see spelling differences) is an organization that generally is formed independent from government.[2][3][4][5][6] They are typically nonprofit entities, and many of them are active in humanitarianism or the social sciences; they can also include clubs and associations that provide services to their members and others. NGOs can also be lobby groups for corporations, such as the World Economic Forum.[7][8][9][10] NGOs are distinguished from international and intergovernmental organizations (IOs) in that the latter are more directly involved with sovereign states and their governments.

The term as it is used today was first introduced in Article 71 of the newly formed United Nations' Charter in 1945.[11] While there is no fixed or formal definition for what NGOs are, they are generally defined as nonprofit entities that are independent of governmental influence—although they may receive government funding.[11]

According to the UN Department of Global Communications, an NGO is "a not-for profit, voluntary citizen's group that is organized on a local, national or international level to address issues in support of the public good".[5] The term NGO is used inconsistently, and is sometimes used synonymously with civil society organization (CSO), which is any association founded by citizens.[12] In some countries, NGOs are known as nonprofit organizations while political parties and trade unions are sometimes considered NGOs as well.[13]

</Col>
            </Row>
          </Container>
      </section>
      );
}