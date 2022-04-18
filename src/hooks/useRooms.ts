import { useState } from "react";
import ROOMS from "../resources/rooms.json";

const useRooms = (): [Array<Room>] => {
  const [rooms] = useState(ROOMS);
  return [rooms];
};

export default useRooms;
