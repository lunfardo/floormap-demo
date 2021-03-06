import { ReactElement, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

type AppStateProviderProps = {
  children: ReactElement<any, any> | null;
};

const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [mapState, setMapState] = useState<MapState>({
    isAnnotationOn: false,
    scale: 3,
    isShowingDebugMenu: false,
    isShowingModalRoomInfo: false,
    isShowingRoomMenu: false,
    isShowingCoordinates: true,
    isShowingWalls: true,
    offset: {
      diffX: 0,
      diffY: 0,
    },
    selectedRoomName: null,
    mapNumberOnDisplay: 1,
  });

  return (
    <AppStateContext.Provider value={[mapState, setMapState]}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
