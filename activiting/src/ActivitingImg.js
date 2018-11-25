import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ActivitingImg.css";

export default function ActivitingImg() {
  return (
    <Carousel>
    <div>
      <img src='./src/img/main-body.jpg' alt="test1" />
      <p className="legend">test</p>
    </div>
    <div>
      <img src='../../src/img/main-top.jpg' alt="test2"/>
      <p className="legend">test2</p>
    </div>
    <div>
      <img src='../../src/img/test.png' alt="test3" />
      <p className="legend">test3</p>
    </div>
  </Carousel>
  )
}

