import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

export default function AppFoooter(){
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 400){
                setShowTopBtn(true)
            }else{
                setShowTopBtn(false)
            }
        })
    },[])


    function goTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return(
       <Container fluid>
        <div className='copyright'>
            &copy; 2024 Corporate. All Rights Reserved.
        </div>
        <div className='socials'>
            <ul>
                <li>
                    <a href='https://www.instagram.com/smmfoundation2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                        <i className='fab fa-instagram fa-beat' />
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/people/SMM-Foundation/61558067799297/?mibextid'>
                        <i className='fab fa-facebook fa-beat' />
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/'>
                        <i className='fab fa-youtube fa-beat' />
                    </a>
                </li>
            </ul>
        </div>
        {
            showTopBtn && (<div className='go-top' onClick={goTop}> </div>)
        }
       </Container>
    )
}