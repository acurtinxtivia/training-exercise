import type { PropsWithChildren, MouseEvent } from "react";
import cn from "classnames";

interface ButtonProps {
  theme?:
    | "primary"
    | "primary outline"
    | "secondary"
    | "white"
    | "image"
    | undefined;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  theme = "primary",
  className = "",
  onClick = () => {},
  children,
}: PropsWithChildren<ButtonProps>) => {
  const classNames = {
    primary: "btn-primary",
    "primary outline": "btn-primary-outline",
    secondary: "btn-secondary",
    white: "btn-white",
    image: "",
  };
  return (
    <button
      className={cn(
        `btn text-lg whitespace-nowrap`,
        classNames[theme],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
