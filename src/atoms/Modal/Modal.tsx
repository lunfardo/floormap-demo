import { ReactElement } from "react";
import "./Modal.css";

type ModalProps = {
  children: ReactElement<any, any> | null;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
