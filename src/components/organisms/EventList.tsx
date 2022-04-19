import React from "react";
import useRooms from "../../hooks/useRooms";

type EventListProps = {
  events: Array<RoomEvent>;
  selectedRoomKey: string;
};
const EventList: React.FC<EventListProps> = ({ selectedRoomKey, events }) => {
  const [rooms] = useRooms();
  const room = rooms.find((room) => room.name === selectedRoomKey);
  if (!room) {
    return <h2>No room selected</h2>;
  }
  return (
    <div>
      <h3>Event List for the room: {room.name}</h3>
      {events.map((event) => (
        <>
          <h2>{event.description}</h2>
          <button>Sign up</button>
          <hr />
        </>
      ))}
    </div>
  );
};

export default EventList;
