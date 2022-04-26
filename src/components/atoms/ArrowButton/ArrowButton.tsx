import { ButtonHTMLAttributes } from "react";
import "./ArrowButton.css";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "up" | "down" | "left" | "right";
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, ...props }) => {
  return (
    <button className="arrow-button" {...props}>
      <i className={`arrow arrow-${direction}`}></i>
    </button>
  );
};

export default ArrowButton;
