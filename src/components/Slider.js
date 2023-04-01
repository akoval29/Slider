import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Slider = ({ result, moveDot, current, nextSlide, prevSlide }) => {
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
