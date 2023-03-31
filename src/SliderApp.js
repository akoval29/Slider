import React, { useState } from "react";

import Service from "./components/Service";
import ErrorMSG from "./components/error/errorMSG";
import Slider from "./components/Slider";
import Controls from "./components/Controls";
import CheckBox from "./components/CheckBox";

import "../src/style/app.css";

const SliderApp = () => {
  const { result, serviceControlBringe, process } = Service(); // income form Service
  const [current, setCurrent] = useState(0); // current slide

  //Навігація
  const length = result.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Доти
  const moveDot = (index) => {
    setCurrent(index);
  };

  switch (process) {
    case "axiosError":
      return <ErrorMSG />;
    case "loading":
      return (
        <section className="container">
          <div className="slider">
            <div class="slider__spinner">
              <div class="slider__spinner--spin"></div>
            </div>
          </div>
        </section>
      );
    case "dataRecieved":
      return (
        <section className="container">
          <div className="slider">
            <Slider
              current={current}
              length={length}
              result={result}
              moveDot={moveDot}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          </div>
          <CheckBox nextSlide={nextSlide} />

          <Controls serviceControlBringe={serviceControlBringe} />
        </section>
      );
    default:
      return null;
  }
};

export default SliderApp;
