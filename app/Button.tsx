import React from "react";
import styles from "./css/styles.module.css";

type ButtonProps = {
  type: "begin" | "header" | "logo";
  content: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, content, onClick }) => {
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
    default:
      break;
  }

  return (
    <div className={`common-button-style ${buttonStyle}`} onClick={onClick}>
      {content}
    </div>
  );
};

export default Button;
