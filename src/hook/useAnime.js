import { useEffect, useState } from "react";
import { getAnim } from "../api/api";

export default function useAnime(inputs) {
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    getAnim(inputs).then((data) => {
      setAnime(data);
    });
  }, [inputs]);
  return [anime];
}
