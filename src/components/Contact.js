import React, { Component } from "react";
import Facebook from "./../images/facebook.png";
import Twitter from "./../images/twitter.png";
import Pintrest from "./../images/pintrest.png";

class Contact extends Component {
  render() {
    return (
      <div className="container container--narrow grid">
        <div>
          <p>
            Follow Wolf Rayet on social media using the icons #wolfrayetlondon.
            If you need to get in touch drop drop us an email -{" "}
            <a href="mailto:info@wolfrayet.co.uk">info@wolfrayet.co.uk</a>
          </p>
          <address style={{ fontStyle: "normal", marginBottom: "20px" }}>
            <div>Unit 20</div>
            <div>10 Stour Road</div>
            <div>London</div>
            <div>United Kingdom</div>
            <div>E3 2NT</div>
          </address>
          <div className="social">
            <a target="_blank" href="https://www.facebook.com/wolfrayetlondon">
              <img src={Facebook} alt="Etsy" />
            </a>
            <a target="_blank" href="https://twitter.com/wolfrayetlondon">
              <img src={Twitter} alt="Etsy" />
            </a>
            <a
              target="_blank"
              href="https://www.pinterest.co.uk/wolfrayetlondon/"
            >
              <img src={Pintrest} alt="Etsy" />
            </a>
          </div>
        </div>
        <div>
          <form
            className="form"
            action="https://formspree.io/wolfrayetlondon@gmail.com"
            method="POST"
          >
            <input placeholder="Name" type="text" name="name" required />
            <input placeholder="Email" type="email" name="_replyto" required />
            <textarea placeholder="Message" name="message" required />
            <button className="button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
