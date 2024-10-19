import React from 'react';
 
import '../style/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import 'animate.css';

const Main = () => {
 

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
              <div className="slide"><img src="https://static.wixstatic.com/media/0d3089_68c0cfb146304a6aa867c7e24a0f0347~mv2.png/v1/fill/w_374,h_125,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_68c0cfb146304a6aa867c7e24a0f0347~mv2.png" alt="Adani" /></div>
              {/* <div className="slide"><img src="./assets/american.webp" alt="American" /></div>
              <div className="slide"><img src="./assets/bob.webp" alt="BOB" /></div>
              <div className="slide"><img src="./assets/hdfc.png" alt="HDFC" /></div>
              <div className="slide"><img src="./assets/indus.webp" alt="Indus" /></div>
              <div className="slide"><img src="./assets/mgvcl.webp" alt="MGVCL" /></div>
              <div className="slide"><img src="./assets/suzlon.webp" alt="Suzlon" /></div>
              <div className="slide"><img src="./assets/tata.webp" alt="Tata" /></div>
              <div className="slide"><img src="./assets/terent.webp" alt="Terent" /></div>
              <div className="slide"><img src="./assets/texh.webp" alt="Texh" /></div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
