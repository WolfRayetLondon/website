import React, { Component } from "react";
import Image from "./../images/laura.jpg";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <img className="about__image" src={Image} alt="Laura" />
          <div>
            <h2>BACKGROUND</h2>
            <p>Wolf Rayet is a British fashion brand established in 2013.</p>
            <p>
              All clothing and fabric is made in London, prints are all designed
              by Wolf Rayet. The name of the brand is taken from a famous dying
              star, that burns bigger and brighter than the sun. Wolf Rayet as a
              brand is about making a bold statement, not afraid to stand out
              from the crowd.
            </p>
            <p>
              The catsuits are designed to transform anyone into a glamorous
              beauty to make you feel and look so special.
            </p>
            <h2>SHIPPING</h2>
            <p>
              Orders will normally be dispatched within 48 hours, during busy
              periods dispatch may take up to ten days.
            </p>
            <p>
              For regular updates, discounts and offers be sure to keep in touch
              by checking our Facebook, Twitter, blog etc etc
            </p>
            <h2>RETURNS</h2>
            <p>
              We accept refunds if you change your mind or want to exchange for
              a different size/style. Refunds are available on items that have
              been bought without any customisations. Please email
              wolfrayetlondon@gmail.com to notify us of the refund, and your
              item must be sent back within 14 days. Please make sure you put a
              note in your parcel stating your name, order number and reason for
              return. Buyer pays postage and is responsible for the item until
              it is returned.
            </p>
            <p>
              (We understand postage times vary from country to country, so just
              make sure your item is sent within 14 days, the arrival does not
              need to be within this time if you are returning from abroad.)
            </p>
            <p>
              <b>RETURN ITEMS UNWORN.</b> We are not a high street store, we
              make almost everything to order, for you. If you return a piece to
              us that shows any signs or scents of being worn, for example has
              deodorant marks or perfume on, we cannot sell this to another
              customer and we will not be able to refund your item. All pieces
              are thoroughly checked before being sent out to you. Please be
              careful when trying things on. You can send your orders to the
              below address, but please note that this address is for postal
              returns only, and we are not open to the public.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
