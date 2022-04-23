import { useCallback, useEffect, useState } from "react";

const useWindowsDimensions = (): [WindowDimensions] => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const onWindowsResize = useCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onWindowsResize);
  }, [onWindowsResize]);
  return [windowDimensions];
};

export default useWindowsDimensions;
