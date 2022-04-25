import { useEffect, useState } from "react";

const useUserTouch = (): [DiffPoint] => {
  const [diffTouch] = useState<DiffPoint>({
    diffX: 0,
    diffY: 0,
  });

  const onTouchEvent = (event: TouchEvent) => {
    console.log("touching", event.changedTouches);
    for (const touch in event.changedTouches) {
      console.log(`touch start: ${touch}`);
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", onTouchEvent);
  });

  return [diffTouch];
};

export default useUserTouch;
