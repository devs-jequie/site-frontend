import { InputHTMLAttributes } from "react";
import classNames from "classnames";

import style from "./style.module.css";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  small?: boolean;
  danger?: boolean;
  info?: boolean;
  warn?: boolean;
  success?: boolean;
  invalid?: boolean;
};

export default function InputGeneral({
  title,
  id,
  invalid,
  ...rest
}: InputType) {
  const classess = classNames(style["general-input"], {
    [style["invalid"]]: invalid,
  });
  return (
    <div className={style["container-general"]}>
      <label htmlFor={id}>{title}</label>
      <input id={id} className={classess} {...rest} />
    </div>
  );
}
