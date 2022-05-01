import "./App.css";
import Modal from "./components/atoms/Modal/Modal";
import DebugMenu from "./components/organisms/DebugMenu";
import EventList from "./components/organisms/EventList";
import RoomMenu from "./components/organisms/RoomMenu";
import UserControls from "./components/organisms/UserControls";
import Floormap from "./components/pages/Floormap";
import AppStateProvider from "./providers/AppStateProvider";
import RoomsProvider from "./providers/RoomsProvider";

const App = () => {
  return (
    <AppStateProvider>
      <RoomsProvider>
        <>
          <DebugMenu />
          <Modal>
            <EventList />
          </Modal>
          <Floormap />
          <UserControls />
          <RoomMenu />
        </>
      </RoomsProvider>
    </AppStateProvider>
  );
};

export default App;
