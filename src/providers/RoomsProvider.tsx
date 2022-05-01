import { ReactElement, useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";
import RoomsContext from "../contexts/RoomsContext";
import useRooms from "../hooks/useRooms";

type RoomsProviderProps = {
  children: ReactElement<any, any> | null;
};

const RoomsProvider: React.FC<RoomsProviderProps> = ({ children }) => {
  const [{ mapNumberOnDisplay }] = useContext(AppStateContext);
  const [rooms] = useRooms(`rooms${mapNumberOnDisplay}`);

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

export default RoomsProvider;
