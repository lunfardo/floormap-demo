import { useContext, useEffect, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import useWheelScroll from "./useWheelScroll";

const useZoom = (): [number] => {
  const [zoom, setZoom] = useState<number>(0);
  const [{ scale }] = useContext(AppStateContext);
  const [wheelpos] = useWheelScroll();

  useEffect(() => {
    setZoom(scale + wheelpos / 1000);
  }, [scale, wheelpos]);

  return [zoom];
};

export default useZoom;
