import { useState, useEffect } from "react";

import "./checkBoxStyle.scss";

export const CheckBox = ({ nextSlide }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isChecked) {
        nextSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isChecked, nextSlide]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="checkBox">
      <input
        className="checkBox__input"
        type="checkbox"
        id="switch"
        checked={isChecked}
        onChange={handleCheckboxChange}
      ></input>
      <label className="checkBox__label" htmlFor="switch">
        Autoplay
      </label>
    </div>
  );
};
