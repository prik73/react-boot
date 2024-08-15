import Container from 'react-bootstrap/Container';
export default function AppContact(){
    return(
        <section id='contact' className='block contact-block'>
            <div className='google-map'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.844174696114!2d76.96039927618489!3d28.393774094881778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d9f95285b77%3A0xd2a215b5d9ca1df!2sMapsko%20Casa%20Bella!5e0!3m2!1sen!2sin!4v1721647194589!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope' />
                            yaha email adress....
                        </li>
                        <li>
                            <i  className='fas fa-phone' />
                            8619320719
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt' />
                            Gurugram, Haryana ( India )
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}