import { useCallback, useEffect, useState } from "react";

const useGlobalKeyPress = (): [string, () => void] => {
  const [keyPressed, setKeypressed] = useState("");
  const onKeyPressed = useCallback((event: KeyboardEvent) => {
    setKeypressed(event.key);
  }, []);

  useEffect(() => {
    window.addEventListener("keypress", onKeyPressed);
  }, [onKeyPressed]);

  const resetKey = useCallback(() => {
    setKeypressed("");
  }, [setKeypressed]);
  return [keyPressed, resetKey];
};

export default useGlobalKeyPress;
