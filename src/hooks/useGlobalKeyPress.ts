import { useCallback, useEffect, useState } from "react";

const useGlobalKeyPress = (): [string] => {
  const [keyPressed, setKeypressed] = useState("");
  const onKeyPressed = useCallback((event: KeyboardEvent) => {
    setKeypressed(event.key);
    setTimeout(() => {
      setKeypressed("");
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("keypress", onKeyPressed);
  }, [onKeyPressed]);

  // const resetKey = useCallback(() => {
  //   setKeypressed("");
  // }, [setKeypressed]);
  return [keyPressed];
};

export default useGlobalKeyPress;
