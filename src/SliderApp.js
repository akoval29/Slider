import React, { useState } from "react";

import Service from "./components/Service";
import Spinner from "./components/Spinner";
import ErrorMSG from "./components/error/errorMSG";
import Slider from "./components/Slider";
import Controls from "./components/Controls";
import CheckBox from "./components/CheckBox";

import "../src/style/app.css";

const SliderApp = () => {
  const { result, handleChange, search, perPage, process } = Service(); // income form Service
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

          <Controls
            handleChange={handleChange}
            // search={search}
            // perPage={perPage}
          />
        </section>
      );

    default:
      return (
        <section className="container">
          <div className="slider">
            <div className="slider__spinner">
              <Spinner />
            </div>
          </div>
        </section>
      );
  }
};

export default SliderApp;
