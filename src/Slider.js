import React, { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { ErrorMessage } from "./components/Error/ErrorMessage";
import { Forms } from "./components/Forms/Forms";
import { CheckBox } from "./components/CheckBox/CheckBox";
import { useAPI } from "./hook/useAPI";

import bg from "./lib/bg.jpeg";
import "../src/style/styles.scss";

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
        <section className="app">
          <img src={bg} className="app__bg" alt="bg-img" />

          <article className="slider">
            <span className="slider__spinner"></span>
          </article>

          <CheckBox />
          <Forms />
        </section>
      );
    case false:
      return <ErrorMessage />;
    case true:
      return (
        <section className="app">
          <img src={bg} className="app__bg" alt="bg-img" />

          <article className="slider">
            <a className="slider__pexelsLink" href="https://www.pexels.com">
              Photos provided by Pexels
            </a>

            <RiArrowLeftSLine
              className="slider__arrows slider__arrows--left"
              onClick={prevSlide}
            />
            <RiArrowRightSLine
              className="slider__arrows slider__arrows--right"
              onClick={nextSlide}
            />

            <div className="dots">
              {Array.from({ length: result.length }).map((item, index) => (
                <div
                  key={index}
                  onClick={() => moveDot(index)}
                  className={
                    current === index
                      ? "dots__dot dots__dot--active"
                      : "dots__dot"
                  }
                ></div>
              ))}
            </div>

            {result.map((obj, idx = 1) => {
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
                    className="slider__image"
                    id={obj.id}
                    src={obj.src.landscape}
                    alt={`PhotoID: ${obj.id}`}
                  />

                  <p className="slider__photographer">
                    {`Photographer: ${obj.photographer}`}
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
