// src/components/Alert.js
import "../styles/styles.css";

export default function Alert({ type, message }) {
  const background = type === "error" ? "#fee2e2" : "#d1fae5";
  const color = type === "error" ? "#b91c1c" : "#065f46";

  return (
    <div
      style={{
        background,
        color,
        padding: "10px 15px",
        borderRadius: "6px",
        marginBottom: "15px",
        border: `1px solid ${color}`,
        fontWeight: "500",
      }}
    >
      {message}
    </div>
  );
}
