import React from 'react';
import '../style/header.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // If installed via npm

export default function Footer() {
    return (
        <>
            <footer>
                <div className="ft">
                    <div className="ft_main">
                        <div className="footer_content">
                            <div className="footer_items contact">
                                <div className="ft_1st_det">
                                    <div className="st_head">
                                        <strong>CONTACT</strong>
                                    </div>
                                    <p>
                                        38, Viharkunj Soc. Complex, Opp. Bharat Petrol Pump, Dabhoi-Waghodia Ring Road,
                                        Somatalav, Vadodara.
                                        <br />
                                        Pincode-390025.
                                    </p>
                                    <div className="ft_tel">
                                        <span>PHONE: +91 70696 28193</span>
                                        <span>Email: purnagroup.sales@gmail.com</span>
                                    </div>
                                    <div className="social_link">
                                        <ul>
                                            <li>
                                                <a href="https://www.indiamart.com/purnagroup/?srsltid=AfmBOoqbGrPR6WNjHJ7TZfLvzc7-OG2gO-3XbHFGduY-JfT_y3woyRwm">
                                                    <img src="./assets/indiamart.png" alt=""/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="./assets/instagram.png" alt=""/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_items link">
                                <div className="link_items">
                                    <div className="st_head">
                                        <strong>LINK</strong>
                                    </div>
                                    <ul>
                                        <li><a href="./main_page.html">HOME</a></li>
                                        <li><a href="./power_product.html">PRODUCTS</a></li>
                                        <li><a href="./energy_product.html">PRODUCTS</a></li>
                                        <li><a href="./our_service.html">SERVICES</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_items touch">
                                <div className="st_head gt">
                                    <strong>GET IN TOUCH</strong>
                                </div>
                                <div className="get_in_touch">
                                    <div className="touch_name">
                                        <label htmlFor="">Name</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="touch_mobile">
                                        <label htmlFor="">Mobile</label>
                                        <input type="text" name="" id=""/>
                                    </div>
                                    <div className="touch_email">
                                        <label htmlFor="">Email</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="touch_message">
                                        <label htmlFor="">Write message</label>
                                        <textarea name="" id=""></textarea>
                                    </div>
                                    <div className="footer_submit">
                                        <button>Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="whatsapp_link">
                            <a href="https://wa.me/7069628193" className="float" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                        <div className="call_link">
                            <a href="tel:+917069628193" className="float_call" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
