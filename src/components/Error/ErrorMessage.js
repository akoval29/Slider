import { useState, useEffect } from "react";
import "./errorStyle.scss";

import bg from "../../lib/bg.jpeg";
const img = "https://cdn-icons-png.flaticon.com/512/2766/2766474.png";

export const ErrorMessage = () => {
  const [countdown, setCountdown] = useState(3);
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
      <img className="error__img" src={img} alt="Error" />
      <p className="error__p">
        Return to main page <br /> in {countdown} seconds
      </p>
      <button className="error__btn" onClick={reloadPage}>
        Return
      </button>
    </div>
  );
};
