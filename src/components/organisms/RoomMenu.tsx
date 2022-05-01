import { useContext, useEffect } from "react";
import AppStateContext from "../../contexts/AppStateContext";
import RoomsContext from "../../contexts/RoomsContext";
import useRooms from "../../hooks/useRooms";
import FloatMenu from "../atoms/FloatMenu/FloatMenu";

const RoomMenu: React.FC = () => {
  const [
    { selectedRoomName, isShowingRoomMenu, isShowingModalRoomInfo },
    setMapState,
  ] = useContext(AppStateContext);
  const rooms = useContext(RoomsContext);
  const selectedRoom = rooms.find((room) => room.name === selectedRoomName);

  useEffect(() => {
    if (selectedRoomName === null) {
      return;
    }
    const timeout = setTimeout(() => {
      setMapState((mapState) => ({
        ...mapState,
        isShowingRoomMenu: false,
      }));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [selectedRoomName, setMapState]);

  if (!isShowingRoomMenu || isShowingModalRoomInfo) {
    return null;
  }
  return (
    <FloatMenu bottom={40} right={40}>
      <div
        style={{
          border: "2px solid yellow",
          color: "0000CC",
          fontWeight: "bold",
          fontSize: "18px",
          padding: "16px",
          borderRadius: "20px",
          background: "#FFA500",
          userSelect: "none",
        }}
        onClick={() => {
          setMapState((mapState) => ({
            ...mapState,
            isShowingModalRoomInfo: true,
          }));
        }}
      >
        {`Show events for room ${selectedRoom?.name}`}
      </div>
    </FloatMenu>
  );
};

export default RoomMenu;
