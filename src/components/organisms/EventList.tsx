import React, { useContext } from "react";
import AppStateContext from "../../contexts/AppStateContext";
import useEvents from "../../hooks/useEvents";
import useRooms from "../../hooks/useRooms";
import Button from "../atoms/Button/Button";

const EventList: React.FC = () => {
  const [rooms] = useRooms();
  const [{ selectedRoomName }] = useContext(AppStateContext);
  const room = rooms.find((room) => room.name === selectedRoomName);
  const [events] = useEvents(room?.name ?? null);
  if (!room) {
    return <h2>No room selected</h2>;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Event List for the room: {room.name}</h3>
      {events.map((event) => (
        <div style={{ borderBottom: "2px solid grey", padding: "8px" }}>
          <h2>{event.description}</h2>
          <Button variant="secondary">Sign up</Button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
