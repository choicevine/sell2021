import React  from 'react';
//import {FontAwesomeIcon} from './FontAwesomeIcon.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {Compass} from '@fortawesome/react-fontawesome-free-solid-svg-icons';
import {faClock, faCompass, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => { 
    
        return (
           <footer className="bck_b_dark">
               <div className="container">
                            <div className="logo">
                                Cell
                            </div>
                   <div className="wrapper">
                       <div className="left">                           
                            <hi>
                                Contact Information
                            </hi>
                            <div className="business_nfo">
                                    <div className="tag">
                                        <FontAwesomeIcon
                                        icon={faCompass} 
                                        className="icon"
                                            />
                                            <div className="nfo">
                                                <div> Contact Address</div>
                                                <div> Southern LA </div>
                                            </div>
                                    </div>
                                <div className="tag">
                                    <FontAwesomeIcon 
                                    icon={faPhone}
                                    className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Phone</div>
                                        <div>+234-816-6320-792</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                    icon={faClock}
                                    />
                                    <div className="nfo">
                                        <div>Working hours</div>
                                        <div>7:00 - 10:00pm est</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                    icon={faEnvelope}
                                    />
                                    <div className="nfo">
                                        <div>Email</div>
                                        <div>babatopedotun@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="left">
                           <h2>Do you Know </h2>
                           <div>What ever comes up must come down</div>
                       </div>
                   </div>
               </div>

           </footer>
        );
    }


export default Footer;