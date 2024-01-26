import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import style from "./style.module.css";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  small?: boolean;
  danger?: boolean;
  info?: boolean;
  warn?: boolean;
  success?: boolean;
};

export default function Button({
  title,
  small,
  danger,
  info,
  warn,
  success,
  ...rest
}: ButtonType) {
  const classes = classNames(
    style["input-button"],
    {
      [style["small-button"]]: small,
    },
    {
      danger,
    },
    {
      warn,
    },
    {
      info,
    },
    {
      success,
    }
  );

  return (
    <div>
      <button className={classes} {...rest}>
        {title}
      </button>
    </div>
  );
}
