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
  return (
    <div>
      <label className={style.containerLabel}>
                    {title}
                    <input id={id} {...rest}/>

                    <span className={style.checkmark}></span>

                  </label>
      {/* <input id={id} className={style.checkbox} {...rest} />
      <label htmlFor={id} className={style.text}>{title}</label> */}
    </div>
  );
}
