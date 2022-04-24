import { ReactElement, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

type AppStateProviderProps = {
  children: ReactElement<any, any> | null;
};

const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [mapState, setMapState] = useState<MapState>({
    isAnnotationOn: false,
    isShowingEvents: false,
    scale: 3,
    isShowingDebugMenu: false,
    isShowingModalRoomInfo: false,
  });

  return (
    <AppStateContext.Provider value={[mapState, setMapState]}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
