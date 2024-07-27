import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/animate.css';
import './css/open-iconic-bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/ionicons.min.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import './css/flaticon.css';
import './css/icomoon.css';
import './css/fancybox.min.css';
import  './css/style.css';


// Images
import img1 from './images/img_1.jpg';
import img2 from './images/img_2.jpg';
import img3 from './images/img_3.jpg';
import img4 from './images/img_4.jpg';

const Gallery = () => {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href={img1} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img1} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img2} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img2} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img3} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img3} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img4} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img4} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img1} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img1} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img2} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img2} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img1} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img1} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img2} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img2} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img3} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img3} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href={img4} className="img-hover" data-fancybox="gallery">
              <span className="icon icon-search"></span>
              <img src={img4} alt="Image placeholder" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
