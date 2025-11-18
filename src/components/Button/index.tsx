import type React from "react";
import styles from "./Button.module.css";
import classnames from "classnames";

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
  const variantClass = {
    default: styles.default,
    icon: styles.icon,
  };
  return (
    <button
      className={classnames(styles.botao, variantClass[variant])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
