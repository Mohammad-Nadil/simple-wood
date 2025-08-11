"use client";

import useCanvasCursor from "../hooks/use-canvasCursor";

// import useCanvasCursor from '@/hooks/use-canvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      id="canvas"
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]"
    />
  );
};

export default CanvasCursor;
