import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { useEffect } from "react";

const Slider = ({ result, current, setCurrent, nextSlide, prevSlide }) => {
  // Доти змінюють слайд
  const moveDot = (index) => {
    setCurrent(index);
  };

  // Листаєм слайди з клавіатури
  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      prevSlide();
    } else if (event.keyCode === 39) {
      nextSlide();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current]);

  return (
    <>
      {result.map((obj, idx) => {
        return (
          <div
            className={
              idx === current
                ? "slider__slide slider__slide--active"
                : "slider__slide"
            }
            key={idx}
          >
            <img
              className="slider__slide__image"
              id={obj.id}
              src={obj.src.landscape}
              alt={`PhotoID: ${obj.id}`}
            />
            <p>{`Photographer: ${obj.photographer}`}</p>

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
          </div>
        );
      })}
    </>
  );
};

export default Slider;
