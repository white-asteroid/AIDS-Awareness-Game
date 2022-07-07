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
            src="https://www.slma.cc/wp-content/uploads/2017/11/SLMA_AIDS-1080x675.jpg"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FC5iUNonXctxZ7sCqkXF4qyndml58oe2KieA7jIT2iezxxSnKmyhlEisNN4vNDpDS6s&usqp=CAU"
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
            src="https://cdn.pixabay.com/photo/2018/12/07/12/04/hiv-3861572_1280.jpg"
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
