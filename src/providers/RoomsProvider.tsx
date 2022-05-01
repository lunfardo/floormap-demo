import { ReactElement } from "react";
import RoomsContext from "../contexts/RoomsContext";
import useRooms from "../hooks/useRooms";

type RoomsProviderProps = {
  children: ReactElement<any, any> | null;
};

const RoomsProvider: React.FC<RoomsProviderProps> = ({ children }) => {
  const [rooms] = useRooms("rooms");

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

export default RoomsProvider;
