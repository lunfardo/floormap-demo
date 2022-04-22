import { useState } from "react";

const useWheelScroll = (): [number] => {
  const [scrollPos, setScrollPos] = useState(0);
  const onZoomChange = (event: WheelEvent) => {
    setScrollPos(scrollPos - event.deltaY);
  };
  window.addEventListener("wheel", onZoomChange);
  return [scrollPos];
};

export default useWheelScroll;
