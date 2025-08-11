
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    const removeListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll("a, button").forEach(el => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };

    function onMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    addListeners();
    return () => removeListeners();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none",
        width: hovered ? 40 : 20,
        height: hovered ? 40 : 20,
        borderRadius: "50%",
        border: `2px solid var(--color-primary)`,  // use theme color here
        backgroundColor: hovered ? "rgba(125, 184, 0, 0.2)" : "transparent", // #7DB800 with opacity
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
}
