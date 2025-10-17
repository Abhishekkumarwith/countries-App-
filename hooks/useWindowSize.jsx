import React, { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    Height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowSize({
        width: window.innerWidth,
        Height: window.innerHeight,
      });
    });
  }, []);

  return windowSize;
}
