import { useEffect, useState } from "react";

const reducedGraphicsQuery = "(max-width: 1023px), (pointer: coarse)";

const getMatches = () => window.matchMedia(reducedGraphicsQuery).matches;

export default function useReducedGraphics() {
  const [reducedGraphics, setReducedGraphics] = useState(getMatches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedGraphicsQuery);
    const handleChange = (event) => setReducedGraphics(event.matches);

    setReducedGraphics(mediaQuery.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return reducedGraphics;
}
