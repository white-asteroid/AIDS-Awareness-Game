import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

// import "../../public/css/slider.css";


export default function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src="https://i.pinimg.com/originals/3a/ab/84/3aab841b94378e4cf2ae2f1acb03c96f.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Together</h3>
            {/* <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp4831901.jpg"
            alt="Image Two"
            />
          <Carousel.Caption>
            <h3>We will END</h3>
            {/* <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://godwallpaper.in/wallpaper/M005/C049/SC101/large/Aids_Day00X8.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Fear of AIDS</h3>
            {/* <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
