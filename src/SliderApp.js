import React, { useState } from "react";

import useAPI from "./components/useAPI";
import ErrorMessage from "./components/ErrorMessage";
import Slider from "./components/Slider";
import FormGroup from "./components/FormGroup";
import CheckBox from "./components/CheckBox";

import "../src/style/styles.css";

const SliderApp = () => {
  const { result, FormikHandler, isLoaded } = useAPI();
  const [current, setCurrent] = useState(0); // current slide

  //Навігація
  const nextSlide = () => {
    setCurrent(current === result.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? result.length - 1 : current - 1);
  };

  switch (isLoaded) {
    case "loading":
      return (
        <section className="container">
          <div className="slider">
            <span className="slider__spinner"></span>
          </div>
          <CheckBox nextSlide={nextSlide} />
          <FormGroup FormikHandler={FormikHandler} />
        </section>
      );
    case false:
      return <ErrorMessage />;
    case true:
      return (
        <section className="container">
          <a href="https://www.pexels.com">Photos provided by Pexels</a>
          <div className="slider">
            <Slider
              result={result}
              current={current}
              setCurrent={setCurrent}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          </div>
          <CheckBox nextSlide={nextSlide} />
          <FormGroup FormikHandler={FormikHandler} />
        </section>
      );
    default:
      return null;
  }
};

export default SliderApp;
