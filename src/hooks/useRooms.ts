import React, { useState, useMemo } from "react";
import ROOMS from "../resources/rooms.json";

const useRooms = (): [Array<Room>] => {
  const [rooms, setRooms] = useState(ROOMS);
  return [rooms];
};

export default useRooms;
