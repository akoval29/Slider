import React, { useState } from "react";

import Servise from "./components/Servise";
import Spinner from "./components/Spinner";
import ErrorMSG from "./components/error/errorMSG";
import Slider from "./components/Slider";
import Controls from "./components/Controls";
import CheckBox from "./components/CheckBox";

import "../src/style/app.css";

const SliderApp = () => {
  const { search, perPage, result, handleChange, process } = Servise(); // income form Servise
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
            result={result}
            handleChange={handleChange}
            search={search}
            perPage={perPage}
            ErrorMSG={ErrorMSG}
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
