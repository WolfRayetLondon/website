import React, { Component } from "react";
import WildThingImage from "./../images/wild-thing.png";
import EtsyImage from "./../images/etsy.png";

class Stockists extends Component {
  render() {
    return (
      <div className="container container--narrow grid stockists">
        <div>
          <p>Discover Wolf Rayet on</p>
          <a
            target="_blank"
            href="https://www.etsy.com/uk/shop/WolfRayetLondon"
            style={{
              display: "block",
            }}
          >
            <img className="stockists__image" src={EtsyImage} alt="Etsy" />
          </a>

          <a
            target="_blank"
            href="https://www.wildthing.com/?s=wolf+rayet&amp;post_type=product&amp;dgwt_wcas=1"
            style={{
              display: "block",
              marginTop: "20px",
            }}
          >
            <img
              className="stockists__image"
              src={WildThingImage}
              alt="Wild Thing"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Stockists;
