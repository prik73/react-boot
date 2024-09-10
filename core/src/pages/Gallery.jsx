import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import i1 from '../assets/images/imgs/img1.jpg'
import i2 from '../assets/images/imgs/img2.jpg'
import i3 from '../assets/images/imgs/img3.jpg'
import i4 from '../assets/images/imgs/img4.jpg'
import i5 from '../assets/images/imgs/img5.jpg'
import i6 from '../assets/images/imgs/img6.jpg'
import i7 from '../assets/images/imgs/img7.jpg'
import i8 from '../assets/images/imgs/img8.jpg'
import i9 from '../assets/images/imgs/img9.jpg'
import i11 from '../assets/images/imgs/img11.jpg'
import i12 from '../assets/images/imgs/img12.jpg'
import i13 from '../assets/images/imgs/img13.jpg'
import i14 from '../assets/images/imgs/img14.jpg'
import i15 from '../assets/images/imgs/img15.jpg'
import i16 from '../assets/images/imgs/img16.jpg'
import i17 from '../assets/images/imgs/img17.jpg'
import i18 from '../assets/images/imgs/img18.jpg'
import i19 from '../assets/images/imgs/img19.jpg'
import i20 from '../assets/images/imgs/img20.jpg'
import i21 from '../assets/images/imgs/img21.jpg'
import i22 from '../assets/images/imgs/img22.jpg'
import i23 from '../assets/images/imgs/img23.jpg'
import i24 from '../assets/images/imgs/img24.jpg'
import i25 from '../assets/images/imgs/img25.jpg'
import i26 from '../assets/images/imgs/img26.jpg'
import i27 from '../assets/images/imgs/img27.jpg'
import i28 from '../assets/images/imgs/img28.jpg'
import i29 from '../assets/images/imgs/img29.jpg'
import i30 from '../assets/images/imgs/img30.jpg'
import i31 from '../assets/images/imgs/img31.jpg'
import i32 from '../assets/images/imgs/img32.jpg'
import i33 from '../assets/images/imgs/img33.jpg'
import i34 from '../assets/images/imgs/img34.jpg'
import i35 from '../assets/images/imgs/img35.jpg'
import i36 from '../assets/images/imgs/img36.jpg'
import i37 from '../assets/images/imgs/img37.jpg'
import i38 from '../assets/images/imgs/img38.jpg'
import i39 from '../assets/images/imgs/img39.jpg'
import i40 from '../assets/images/imgs/img40.jpg'
import i41 from '../assets/images/imgs/img41.jpg'
import i42 from '../assets/images/imgs/img42.jpg'
import i43 from '../assets/images/imgs/img43.jpg'
import i44 from '../assets/images/imgs/img44.jpg'
import i45 from '../assets/images/imgs/img45.jpg'
import i46 from '../assets/images/imgs/img46.jpg'
import i47 from '../assets/images/imgs/img47.jpg'
import i48 from '../assets/images/imgs/img48.jpg'
import i49 from '../assets/images/imgs/img49.jpg'
import i50 from '../assets/images/imgs/img50.jpg'
import i51 from '../assets/images/imgs/img51.jpg'
import i52 from '../assets/images/imgs/img52.jpg'
import i53 from '../assets/images/imgs/img53.jpg'
import i54 from '../assets/images/imgs/img54.jpg'
import i55 from '../assets/images/imgs/img55.jpg'
import i56 from '../assets/images/imgs/img56.jpg'
import i57 from '../assets/images/imgs/img57.jpg'
import i58 from '../assets/images/imgs/img58.jpg'
import i59 from '../assets/images/imgs/img59.jpg'
import i60 from '../assets/images/imgs/img60.jpg'


import './GalleryStyle.css';  // Import the CSS file



const data = [

    { id: 1, imgSrc: i1 },
    { id: 23, imgSrc: i23 },
    { id: 25, imgSrc: i25 },
    { id: 28, imgSrc: i28 },
    { id: 30, imgSrc: i30 },
    { id: 31, imgSrc: i31 },
    { id: 32, imgSrc: i32 },
    { id: 33, imgSrc: i33 },
    { id: 34, imgSrc: i34 },
    { id: 36, imgSrc: i36 },
    { id: 38, imgSrc: i38 },
    { id: 39, imgSrc: i39 },
    { id: 40, imgSrc: i40 },
    { id: 41, imgSrc: i41 },
    { id: 42, imgSrc: i42 },
    { id: 44, imgSrc: i44 },
    { id: 45, imgSrc: i45 },
    { id: 46, imgSrc: i46 },
    { id: 58, imgSrc: i58 },
    { id: 60, imgSrc: i60 },
    { id: 5, imgSrc: i5 },
    { id: 6, imgSrc: i6 },
    { id: 7, imgSrc: i7 },
    { id: 8, imgSrc: i8 },
    { id: 9, imgSrc: i9 },
    { id: 11, imgSrc: i11 },
    { id: 12, imgSrc: i12 },
    { id: 13, imgSrc: i13 },
    { id: 14, imgSrc: i14 },
    { id: 15, imgSrc: i15 },
    { id: 16, imgSrc: i16 },
    { id: 17, imgSrc: i17 },
    { id: 18, imgSrc: i18 },
    { id: 19, imgSrc: i19 },
    { id: 20, imgSrc: i20 },
    { id: 21, imgSrc: i21 },
    { id: 22, imgSrc: i22 },
    { id: 2, imgSrc: i2 },
    { id: 3, imgSrc: i3 },
    { id: 4, imgSrc: i4 },
    { id: 24, imgSrc: i24 },
    { id: 26, imgSrc: i26 },
    { id: 27, imgSrc: i27 },
    { id: 29, imgSrc: i29 },
    { id: 35, imgSrc: i35 },
    { id: 37, imgSrc: i37 },
    { id: 43, imgSrc: i43 },
    { id: 47, imgSrc: i47 },
    { id: 48, imgSrc: i48 },
    { id: 49, imgSrc: i49 },
    { id: 50, imgSrc: i50 },
    { id: 51, imgSrc: i51 },
    { id: 52, imgSrc: i52 },
    { id: 53, imgSrc: i53 },
    { id: 54, imgSrc: i54 },
    { id: 55, imgSrc: i55 },
    { id: 56, imgSrc: i56 },
    { id: 57, imgSrc: i57 },
    { id: 59, imgSrc: i59 },
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
