import "./App.css";
import Modal from "./atoms/Modal/Modal";
import DebugMenu from "./components/organisms/DebugMenu";
import UserControls from "./components/organisms/UserControls";
import Floormap from "./components/pages/Floormap";
import AppStateProvider from "./providers/AppStateProvider";

const App = () => {
  return (
    <AppStateProvider>
      <>
        <DebugMenu />
        <Modal>
          <div>
            <h3>nachito</h3>
          </div>
        </Modal>
        <Floormap />
        <UserControls />
      </>
    </AppStateProvider>
  );
};

export default App;
