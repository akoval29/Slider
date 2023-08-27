import { useState, useEffect } from "react";
import "./errorStyle.scss";

import bg from "../../lib/bg.jpeg";
import img from "../../lib/error.jpg";

export const ErrorMessage = () => {
  const [countdown, setCountdown] = useState(4);
  const reloadPage = () => {
    window.location.reload();
  };

  // Auto reload page
  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    if (countdown === 0) {
      reloadPage();
    }
    return () => clearTimeout(countdownTimer);
  }, [countdown]);

  return (
    <div className="error">
      <img src={bg} className="error__bg" alt="bg-img" />
      <img className="error__img" src={img} alt="error-img" />
      <p className="error__message">Return in {countdown} seconds</p>
      <button className="error__btn" onClick={reloadPage}>
        Return
      </button>
    </div>
  );
};
