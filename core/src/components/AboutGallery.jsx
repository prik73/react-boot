import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './AboutGallery.css';
import i2 from '../assets/images/imgs/img2.jpg'
import i17 from '../assets/images/imgs/img17.jpg'
import i18 from '../assets/images/imgs/img18.jpg'
import i19 from '../assets/images/imgs/img19.jpg'
import i20 from '../assets/images/imgs/img20.jpg'
import i21 from '../assets/images/imgs/img21.jpg'
import i22 from '../assets/images/imgs/img22.jpg'
import i61 from '../assets/images/imgs/img61.jpg'
import i62 from '../assets/images/imgs/img62.jpg'
import i63 from '../assets/images/imgs/img63.jpg'
import i64 from '../assets/images/imgs/img64.jpg'

const data = [
  { id: 1, imgSrc: i2 },
  { id: 9, imgSrc: i61 },
  { id: 2, imgSrc: i17 },
  { id: 3, imgSrc: i18 },
  { id: 5, imgSrc: i63 },
  { id: 6, imgSrc: i19 },
  { id: 7, imgSrc: i20 },
  { id: 8, imgSrc: i64 },
  { id: 10, imgSrc: i21 },
  { id: 11, imgSrc: i22 },
  { id: 4, imgSrc: i62 },
];

export default function AboutGallery() {
    const [datas, setData] = useState({ img: '', i: 0 });

    const viewImage = (img, i) => {
        setData({ img, i });
    };

    const closeModal = () => {
        setData({ img: '', i: 0 });
    };

    const imgAction = (action) => {
        let i = datas.i;
        if (action === 'next-img') {
            const nextIndex = i + 1 === data.length ? 0 : i + 1;
            setData({ img: data[nextIndex].imgSrc, i: nextIndex });
        } else if (action === 'prev-img') {
            const prevIndex = i === 0 ? data.length - 1 : i - 1;
            setData({ img: data[prevIndex].imgSrc, i: prevIndex });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (datas.img) {
                if (e.key === 'ArrowLeft') {
                    imgAction('prev-img');
                } else if (e.key === 'ArrowRight') {
                    imgAction('next-img');
                } else if (e.key === 'Escape') {
                    closeModal();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [datas]);

    return (
        <div className="about-gallery-container">
            {/* Modal */}
            {datas.img && (
                <div className="about-gallery-modal">
                <button className="about-gallery-close-btn" onClick={closeModal}>X</button>
                <button className="about-gallery-prev-btn" onClick={() => imgAction('prev-img')}>&lt;</button>
                <img src={datas.img} alt="Modal content" />
                <button className="about-gallery-next-btn" onClick={() => imgAction('next-img')}>&gt;</button>
            </div>
            )}

            {/* Gallery */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="20px">
                    {data.map((item, index) => (
                        <img
                            key={index}
                            src={item.imgSrc}
                            className="gallery-img"
                            style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                            alt={`Gallery Image ${index + 1}`}
                            onClick={() => viewImage(item.imgSrc, index)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );

}