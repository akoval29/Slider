import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ result, moveDot, current, length, nextSlide, prevSlide }) => {
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
            <a href="https://www.pexels.com">Photos provided by Pexels</a>

            <FaArrowAltCircleLeft
              className="slider__arrows slider__arrows--left"
              onClick={prevSlide}
            />

            <FaArrowAltCircleRight
              className="slider__arrows slider__arrows--right"
              onClick={nextSlide}
            />

            <div className="slider__slide__dots">
              {Array.from({ length: length }).map((item, index) => (
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
