import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Button1 from './Button1';

function Footer() {
    return (
        <>
            <div className='container' style={{ marginTop: "200px" }}>
                <div className='row'>
                    <div className='col'>
                        <ul>
                            <h4>Fruits</h4>
                            <li>randomised</li>
                            <li>words which</li>
                            <li>don't look even</li>
                            <li>slightly</li>
                            <li>believable if you</li>
                            <li>are going to use</li>
                            <li>a passage of</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <h4>Services</h4>
                            <li>randomised</li>
                            <li>words which</li>
                            <li>don't look even</li>
                            <li>slightly</li>
                            <li>believable if you</li>
                            <li>are going to use</li>
                            <li>a passage of</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <h4>List</h4>
                            <li>randomised</li>
                            <li>words which</li>
                            <li>don't look even</li>
                            <li>slightly</li>
                            <li>believable if you</li>
                            <li>are going to use</li>
                            <li>a passage of</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <h4>Follow Us</h4>
                            <div style={{ marginTop: "10%" }}>
                                <FaFacebook className='icon-4' />
                                <FaInstagram className='icon-5' />
                                <FaTwitter className='icon-5' />
                                <FaLinkedin className='icon-5' />
                            </div>
                            <h4 style={{ marginTop: "15px" }}>Subscribe Now</h4>
                            <input type='text' style={{ border: "2px solid black" }} />
                            <Button1 style={{ backgroundColor: "#FF4500", border: "0", marginTop: "15px" }}>Subscribe</Button1>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container lastsection'>
                <div className='row'>
                    <div className='col text-center'>
                      <h6>Copyright Ⓒ 2023 All Rights Reserved By Dev Umair</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer