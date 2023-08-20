import React, { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { ErrorMessage } from "./components/ErrorMessage";
import { Forms } from "./components/Forms/Forms";
import { CheckBox } from "./components/CheckBox";
import { useAPI } from "./hook/useAPI";

import "../src/style/styles.css";

export const Slider = () => {
  const { result, FormikHandler, isLoaded } = useAPI();
  const [current, setCurrent] = useState(0); // current slide

  // Dots changes slides
  const moveDot = (index) => {
    setCurrent(index);
  };

  // Navigation
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
          <article className="slider">
            <span className="slider__spinner"></span>
          </article>
          <CheckBox nextSlide={nextSlide} />
          <Forms FormikHandler={FormikHandler} />
        </section>
      );
    case false:
      return <ErrorMessage />;
    case true:
      return (
        <section className="container">
          <a href="https://www.pexels.com">Photos provided by Pexels</a>
          <article className="slider">
            <RiArrowLeftSLine
              className="slider__arrows slider__arrows--left"
              onClick={prevSlide}
            />
            <RiArrowRightSLine
              className="slider__arrows slider__arrows--right"
              onClick={nextSlide}
            />

            <div className="slider__slide__dots">
              {Array.from({ length: result.length }).map((item, index) => (
                <div
                  key={index}
                  onClick={() => moveDot(index)}
                  className={
                    current === index
                      ? "slider__slide__dots--dot slider__slide__dots--dotActive"
                      : "slider__slide__dots--dot"
                  }
                ></div>
              ))}
            </div>

            {result.map((obj, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    idx === current
                      ? "slider__slide slider__slide--active"
                      : "slider__slide"
                  }
                >
                  <img
                    className="slider__slide__image"
                    id={obj.id}
                    src={obj.src.landscape}
                    alt={`PhotoID: ${obj.id}`}
                  />

                  <p>
                    {`Photographer: ${obj.photographer}`}
                    <span></span>
                  </p>
                </div>
              );
            })}
          </article>
          <CheckBox nextSlide={nextSlide} />
          <Forms FormikHandler={FormikHandler} />
        </section>
      );
    default:
      return null;
  }
};
