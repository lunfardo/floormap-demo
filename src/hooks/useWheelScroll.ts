import { useState } from "react";

const useWheelScroll = (): [number] => {
  const [scrollPos, setScrollPos] = useState(0);
  const zoomChange = (event: WheelEvent) => {
    setScrollPos(scrollPos - event.deltaY);
  };
  window.addEventListener("wheel", zoomChange);
  return [scrollPos];
};

export default useWheelScroll;
