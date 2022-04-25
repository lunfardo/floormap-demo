import { useCallback, useContext } from "react";
import AppStateContext from "../../../contexts/AppStateContext";
import Button from "../Button/Button";
import "./Modal.css";

type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [mapState, setMapState] = useContext(AppStateContext);
  const onCloseClick = useCallback(() => {
    setMapState((mapState) => ({
      ...mapState,
      isShowingModalRoomInfo: false,
    }));
  }, [setMapState]);

  if (!mapState.isShowingModalRoomInfo) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div>{children}</div>
        <div
          style={{ width: "100%", textAlign: "center", padding: "16px 0px" }}
        >
          <Button onClick={onCloseClick}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
