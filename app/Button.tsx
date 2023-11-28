import React from "react";
import styles from "./css/styles.module.css";

type ButtonProps = {
  type: "begin" | "header" | "logo" | "main" | "generate" | "copy";
  content: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, content, disabled, onClick }) => {
  let buttonStyle = "";

  switch (type) {
    case "begin":
      buttonStyle = styles["begin-button"];
      break;
    case "header":
      buttonStyle = styles["header-button"];
      break;
    case "logo":
      buttonStyle = styles["logo-button"];
      break;
    case "main":
      buttonStyle = styles["main-button"];
      break;
    case "generate":
      buttonStyle = styles["send-button"];
      break;
    case "copy":
      buttonStyle = styles["copy-button"];
      break;
    default:
      break;
  }

  return (
    <div className={`common-button-style whitespace-nowrap ${buttonStyle} ${disabled ? 'opacity-50 select-none hover:none cursor-default pointer-events-none' : 'cursor-pointer'}`} onClick={disabled ? undefined : onClick}>
      {content}
    </div>
  );
};

export default Button;
