import { useEffect, useState } from "react";
import EVENTS from "../resources/events.json";

const useEvents = (roomKey: string | null): [Array<RoomEvent>] => {
  const [events, setEvent] = useState<Array<RoomEvent>>([]);

  useEffect(() => {
    if (roomKey === null) {
      setEvent([]);
      return;
    }
    setEvent(EVENTS.filter((event) => event.atRoom === roomKey));
  }, [roomKey]);

  return [events];
};

export default useEvents;
