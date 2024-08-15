import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

export default function AppContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_lvvftg1',    // Replace with your EmailJS service ID
            'template_eb71k5l',   // Replace with your EmailJS template ID
            form.current,
            'NGMt_lYHeFK_it9ez'        // Replace with your EmailJS user ID (public key)
        )
        .then((result) => {
            console.log(result.text);
            alert('Message Sent!');
        }, (error) => {
            console.log(error.text);
            alert('An error occurred, please try again.');
        });
    };

    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2> Contact</h2>
                    <div className='subtitle'>Get connected with us</div>
                </div>
                <Form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control name="first_name" type='text' placeholder="First name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control name="user_email" type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control name="user_phone" type='tel' placeholder="Enter your phone number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control name="message" as="textarea" placeholder="Enter a message" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
}
