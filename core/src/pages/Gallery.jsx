import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './GalleryStyle.css';  // Import the CSS file

import i1 from '../assets/images/site/one.jpg';
import i2 from '../assets/images/site/two.jpg';
import i3 from '../assets/images/site/three.jpg';
import i4 from '../assets/images/site/four.jpg';
import i5 from '../assets/images/site/five.jpg';
import i6 from '../assets/images/site/six.jpg';
import i7 from '../assets/images/site/seven.jpg';
import i8 from '../assets/images/site/eight.jpg';
import i9 from '../assets/images/site/nine.jpg';

const data = [
    { id: 1, imgSrc: i1 },
    { id: 2, imgSrc: i2 },
    { id: 3, imgSrc: i3 },
    { id: 4, imgSrc: i4 },
    { id: 5, imgSrc: i5 },
    { id: 6, imgSrc: i6 },
    { id: 7, imgSrc: i7 },
    { id: 8, imgSrc: i8 },
    { id: 9, imgSrc: i9 }
];

export default function Gallery() {
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
        <div>
            {/* Modal */}
            {datas.img && (
                <div className="modal">
                    <button onClick={closeModal} className="modal-close-btn">X</button>
                    <button onClick={() => imgAction('prev-img')} className="modal-prev-btn">&lt;</button>
                    <img src={datas.img} alt="Modal content" />
                    <button onClick={() => imgAction('next-img')} className="modal-next-btn">&gt;</button>
                </div>
            )}

            {/* Gallery */}
            <div className="gallery-container">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}
                >
                    <Masonry gutter="10px">
                        {data.map((item, index) => (
                            <img
                                key={index}
                                src={item.imgSrc}
                                className="gallery-image"
                                alt={`Gallery Image ${index + 1}`}
                                onClick={() => viewImage(item.imgSrc, index)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
}
