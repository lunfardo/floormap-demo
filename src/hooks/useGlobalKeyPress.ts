import { useCallback, useEffect, useState } from "react";

const useGlobalKeyPress = (): [string] => {
  const [keyPressed, setKeypressed] = useState("");

  const onKeyPressed = useCallback((event: KeyboardEvent) => {
    setKeypressed(event.key);
    setTimeout(() => {
      //restart keyPressed otherwise wont change when pressing the same key multiple times.
      setKeypressed("");
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyPressed);
  }, [onKeyPressed]);

  return [keyPressed];
};

export default useGlobalKeyPress;
