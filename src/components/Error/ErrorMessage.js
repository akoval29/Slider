import { useState, useEffect } from "react";
import "./errorStyle.scss";

const img =
  "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/error-t.jpg";

export const ErrorMessage = () => {
  const [countdown, setCountdown] = useState(5);
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
