import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ActivitingImg.css";

export default function ActivitingImg() {
  return (
    <Carousel infiniteLoop autoPlay emulateTouch showStatus={false} showThumbs={false} centerMode centerSlidePercentage={50} >
    <div>
      <img src='img/test1.jpg' alt="test1" className="imgslides" />
      </div>
    <div>
      <img src='img/test2.jpg' alt="test2" className="imgslides" />
    </div>
    <div>
      <img src='img/test3.jpeg' alt="test3" className="imgslides" />
    </div>
    <div>
      <img src='img/test4.png' alt="test4" className="imgslides" />
    </div>
  </Carousel>
  )
}

