import React, { useState } from 'react';
import "../style/header.css";
import mainlogo from "../assets/mainlogo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//     </div>
//   );
// }


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Changed to false to indicate the menu is closed by default

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <div className="head_plane webheader">
                    <div className="header_area">
                        <div className="hrader_items">
                            <div className="main_logo">
                             <Link to="/">   <img src={mainlogo} alt="" /></Link>
                            </div>
                        </div>

                        <div className="hrader_items mobile_mennnu">
                            <div className="header_heading">
                                <h1><span>PURNA </span>GROUP</h1>
                            </div>
                            <div className="header_option">
                                <ul>
                                    <li><Link to="./">HOME</Link></li>
                                    <li><Link to="./power">POWER PRODUCTS</Link></li>
                                    <li><Link to="./energy">ENERGY PRODUCTS</Link></li>
                                    <li><Link to="./service">OUR SERVICES</Link></li>
                                    <li><Link to="./contactus">CONTACT US</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hrader_items">
                            <div className="sub_logo">
                               <Link to="/"> <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="responsive_header">
                    <div className="head_plane mobileheader">
                        <div className="header_area">
                            <div className="hrader_items">
                                <div className="main_logo">
                                   <Link to="./"> <img src={mainlogo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="hrader_items">
                                <div className="sub_logo">
                                    <Link to="/">
                                        <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="menuline" id="menuopen">
                                <button onClick={toggleMenu}>
                                    <img src={menu} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={isMenuOpen ? 'hrader_items mobile_mennnu menu_on' : 'hrader_items mobile_mennnu'}>
                        <div className="closer_menu" id="close_menu">
                            <button onClick={toggleMenu}>
                              close
                            </button>
                        </div>
                        <div className="header_option">
                            <ul>
                                <li><Link to="./">HOME</Link></li>
                                <li><Link to="./power">POWER PRODUCTS</Link></li>
                                <li><Link to="./energy">ENERGY PRODUCTS</Link></li>
                                <li><Link to="./service">OUR SERVICES</Link></li>
                                <li><Link to="./contactus">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bank_div">
                        {/* Add bank related content if necessary */}
                    </div>
                </div>
            </header>
        </>
    );
}
