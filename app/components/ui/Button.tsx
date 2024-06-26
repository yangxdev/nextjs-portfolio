import React, { ReactElement } from 'react';
import styles from '@css/styles.module.css';

type ButtonProps = {
    testid?: string;
    icon?: ReactElement;
    type: "begin" | "header" | "logo" | "main" | "generate" | "copy";
    content: string;
    disabled?: boolean;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ testid, icon, type, content, disabled, onClick }) => {
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
        <div data-testid={testid} className={`common-button-style rounded-xl transition-all whitespace-nowrap font-[400px] ${buttonStyle} ${disabled ? 'opacity-50 select-none hover:none cursor-default pointer-events-none' : ''}`} onClick={disabled ? undefined : onClick}>
            {icon}{content}
        </div>
    );
};

export default Button;
