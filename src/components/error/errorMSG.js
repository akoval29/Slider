import img from "./errorRed.jpg";

const ErrorMSG = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{
          display: "block",
          width: "1000px",
          height: "700px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
        alt="Error"
      />
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
        Reload page
      </button>
    </div>
  );
};

export default ErrorMSG;
