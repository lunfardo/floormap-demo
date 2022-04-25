import { useCallback, useEffect, useState } from "react";

const useGlobalKeyPress = (): [string] => {
  const [keyPressed, setKeypressed] = useState("");
  const onKeyPressed = useCallback((event: KeyboardEvent) => {
    setKeypressed(event.key);
    setTimeout(() => {
      setKeypressed("");
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyPressed);
  }, [onKeyPressed]);

  // const resetKey = useCallback(() => {
  //   setKeypressed("");
  // }, [setKeypressed]);
  return [keyPressed];
};

export default useGlobalKeyPress;
