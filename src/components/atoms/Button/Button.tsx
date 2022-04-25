import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button className="button" {...props}></button>;
};
export default Button;
