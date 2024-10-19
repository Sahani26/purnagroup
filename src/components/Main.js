import React from 'react';
 
import '../style/main.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 import 'animate.css';
 import suzlon from "../assets/suzlon.webp";
 import adani from "../assets/adani.webp";
 import americal from "../assets/american.webp";
 import bob from "../assets/bob.webp";
 import hdfc from "../assets/hdfc.png";
 import indus from "../assets/indus.webp";
 import mgvcl from "../assets/mgvcl.webp";
 import tata from "../assets/tata.webp";
 import torrent from "../assets/terent.webp";
 import tech from "../assets/texh.webp";
  

const Main = () => {
  const settings = {
  
    autoplaySpeed: 1000,
    arrows: true,
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
};

  return (
    <div className="main_component">
      <main>
        <div className="welcome_area">
          <div className="wel_pict header_page_area">
            <div className="welcome_cotain">
              <h1 className="animate__animated animate__bounceInLeft">
                Welcome To <span>We are engaged in manufacturing and supplying of a wide range of Insulation Component</span>
              </h1>
              <a className="btn btn-hero animate__animated animate__bounceInLeft" href="./contactus.html">Contact Us</a>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="aboutus">
          <div className="about_head">
            <h1>ABOUT US</h1>
          </div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>We</strong> are engaged in manufacturing and supplying a wide range of
            Insulation Component of 11kV Shroud, Bird guard, Bus bar insulation, Thermal pad, Vertical terminal
            boot, Cable joint kit, and Insulation binding tape. These are manufactured using high-quality Insulation
            material and comply with defined quality standards. Our products are widely used in industries such as
            Industrial Molding, Automobile Industries, Electrical Industries, Medical Industries, etc.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>We</strong> are one of the leading suppliers & authorized distributors of <strong>TESLA POWER USA</strong>, specializing in UPS & Inverter power solutions.
          </p>
        </div>

        {/* Our Clients Section */}
        <div className="clint_area">
          <h1>OUR CLIENTS</h1>
          <div className="our_clint_area slickslider">
            <div className="slider">
            <Slider {...settings}>
              <div className="slide"><img src={suzlon } alt="Adani" /></div>
              <div className="slide"><img src={adani } alt="Adani" /></div>

              <div className="slide"><img src={americal } alt="Adani" /></div>

              <div className="slide"><img src={bob } alt="Adani" /></div>

              <div className="slide"><img src={hdfc } alt="Adani" /></div>

              <div className="slide"><img src={ indus } alt="Adani" /></div>

              <div className="slide"><img src={mgvcl } alt="Adani" /></div>

              <div className="slide"><img src={ tata} alt="Adani" /></div>

              <div className="slide"><img src={ torrent} alt="Adani" /></div>

              <div className="slide"><img src={tech } alt="Adani" /></div>

              

             </Slider>
             
          
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
