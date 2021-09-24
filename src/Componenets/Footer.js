import React from 'react'
import psImg from "../img/play-store.png";
import asImg from "../img/app-store.png";
import ajhImg from "../img/AJH-logo.png";

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download our app</h3>
                        <p>Download our app for android and ios</p>
                        <div className="app-logo">
                            <img src={psImg} alt="play-store-img"/>
                            <img src={asImg} alt="app-store-img"/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={ajhImg} alt="logo"/>
                        <p>An AJ Holdings Company</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful links</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <hr/>
                </div>
                <p className="copyright">Copyright 2021 - Designed &amp; Devoloped by DSE 20.1 Batch</p>
            </div>
        </div>
    )
}

export default Footer
