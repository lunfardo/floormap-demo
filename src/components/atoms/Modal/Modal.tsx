import { ReactElement, useContext } from "react";
import AppStateContext from "../../../contexts/AppStateContext";
import "./Modal.css";

type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [mapState] = useContext(AppStateContext);

  if (!mapState.isShowingModalRoomInfo) {
    return null;
  }
  return <div className="modal">{children}</div>;
};

export default Modal;
