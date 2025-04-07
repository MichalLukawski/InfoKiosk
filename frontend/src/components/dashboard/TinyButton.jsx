import { useNavigate } from "react-router-dom";

const TinyButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/statystyki")}
      style={{
        position: "fixed",
        bottom: "10px",
        left: "10px",
        fontSize: "10px",
        padding: "2px 5px",
        opacity: 0.4,
        zIndex: 9999
      }}
    >
      i
    </button>
  );
};

export default TinyButton;
