import { useEffect, useState } from "react";

export default function usePosition() {
  const [postion, setScrollPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    const y = window.pageYOffset;
    const x = window.pageXOffset;
    setScrollPosition({ x: x, y: y });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ...postion };
}
