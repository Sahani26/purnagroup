import React, { useState } from 'react';
 
import '../style/OurServices.css'

const OurServices = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
     

            <main>
                <div className="our_services">
                    <div className="services_main">
                        <img src="https://static.wixstatic.com/media/11062b_81edbbc97b4e402bba95354cffac8a99~mv2.jpg/v1/fill/w_1349,h_500,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_81edbbc97b4e402bba95354cffac8a99~mv2.jpg" alt="" />
                    </div>
                    <div className="service_details">
                        <div className="service_item">
                            <div className="services_picture">
                                <img src="https://static.wixstatic.com/media/0d3089_1ed5ddd702a44528ab4da4be381f8bbd~mv2.jpg/v1/fill/w_751,h_742,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_1ed5ddd702a44528ab4da4be381f8bbd~mv2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="service_item">
                            <div className="ser_all_det">
                                <div className="services_details">
                                    <h1>Our Services:</h1>
                                </div>
                                <div className="details_list">
                                    <ul>
                                        <li>- Turnkey Project Execution<span>&nbsp;&nbsp;(11 kV, 33 kV Switchyard, LT-HT & Metering Box, Transformer)</span></li>
                                        <li>- Substation Servicing & Maintenance work<span>&nbsp;&nbsp;(All type of insulator, connector rework & servicing)</span></li>
                                        <li>- Installation & Commissioning of LV, MV, HV Switchyard.</li>
                                        <li>- Line Stringing work</li>
                                        <li>- Equipment protection service</li>
                                        <li>- Painting work</li>
                                        <li>- Substation Earthing Work</li>
                                        <li>- Panel installation & Wiring work</li>
                                        <li>- Battery Revival Service</li>
                                        <li>- Backup AMC</li>
                                        <li>- UPS/Charger - Battery setup installation<span>&nbsp;&nbsp;(Substation backup solution)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="meetup">
                        <h1>MEET THE TEAM</h1>
                        <div className="our_meet">
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_8989b494946f4f94a5136ed86a2a88a4~mv2.png/v1/fill/w_184,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_8989b494946f4f94a5136ed86a2a88a4~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_51f539a37e7141ef9d5b1472b69d2e35~mv2.png/v1/fill/w_184,h_220,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_51f539a37e7141ef9d5b1472b69d2e35~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_bd6d8112a67b4086a68b367076e01b19~mv2.png/v1/fill/w_184,h_220,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_bd6d8112a67b4086a68b367076e01b19~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_c937e937e70c426cbe61ea4229cf8ac5~mv2.png/v1/fill/w_170,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_c937e937e70c426cbe61ea4229cf8ac5~mv2.png" alt="" />
                            </div>
                        </div>
                        <div className="our_meet2">
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_19155908de5c491db66cba94cbb1c09d~mv2.png/v1/fill/w_321,h_220,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_19155908de5c491db66cba94cbb1c09d~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_f79249cae6d44119b041c97bc8d9d34d~mv2.png/v1/fill/w_262,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_f79249cae6d44119b041c97bc8d9d34d~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_efd54778694b404883da745cc3330ead~mv2.png/v1/fill/w_191,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_efd54778694b404883da745cc3330ead~mv2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

       
        </div>
    );
};

export default OurServices;

