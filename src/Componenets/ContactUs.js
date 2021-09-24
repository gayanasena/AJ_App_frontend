import React from "react";
import img from "../img/contus.jpg";

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-h">
        <h1>Contact Us</h1>
        <p>Required fields are marked*</p>
      </div>
      <div className="row">
        <div className="contact-col-2">
          <img
            src={img}
            className="special-img"
            width="500px"
            height="280px"
            alt="offer-product"
          />
        </div>
        <div className="contact-col-2">
          <form method="POST" action="/addMessage">
            <input className="field" type="text" name="nameInput" placeholder="Name*" required/>
            <input className="field" type="tel" name="phoneInput" placeholder="Phone*" required/>
            <textarea name="subjectInput" placeholder="Message*" rows="3"></textarea>
            <button className="btn-contact" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
