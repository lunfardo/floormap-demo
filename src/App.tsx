import "./App.css";
import Modal from "./components/atoms/Modal/Modal";
import DebugMenu from "./components/organisms/DebugMenu";
import EventList from "./components/organisms/EventList";
import RoomMenu from "./components/organisms/RoomMenu";
import UserControls from "./components/organisms/UserControls";
import Floormap from "./components/pages/Floormap";
import AppStateProvider from "./providers/AppStateProvider";

const App = () => {
  return (
    <AppStateProvider>
      <>
        <DebugMenu />
        <Modal>
          <EventList />
        </Modal>
        <Floormap />
        <UserControls />
        <RoomMenu />
      </>
    </AppStateProvider>
  );
};

export default App;
