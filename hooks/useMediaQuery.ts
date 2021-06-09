import { useState, useEffect } from "react";
/**
 * An hook get current size of window
 */

const useMediaQuery = (): { width: number } => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { width };
};

export default useMediaQuery;
