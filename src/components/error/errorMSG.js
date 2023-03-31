import img from "./errorRed.jpg";

const ErrorMSG = () => {
  return (
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
  );
};
export default ErrorMSG;
