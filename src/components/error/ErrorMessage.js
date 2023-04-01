import { useState, useEffect } from "react";
import img from "./errorRed.jpg";

const ErrorMessage = () => {
  const [countdown, setCountdown] = useState(20);

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      window.location.reload();
    }

    return () => clearTimeout(countdownTimer);
  }, [countdown]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{
          display: "block",
          width: "1000px",
          height: "700px",
          objectFit: "contain",
          margin: "0 auto",
          borderRadius: "20px",
        }}
        src={img}
        alt="Error"
      />
      <p
        style={{
          margin: "10px",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#8d0515",
        }}
      >
        Return to main page <br /> in {countdown} seconds
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#8d0515",
          color: "white",
          borderRadius: "10px",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={reloadPage}
      >
        Return
      </button>
    </div>
  );
};

export default ErrorMessage;
