import style from "./style.module.css";
import {TextareaHTMLAttributes } from "react";
import classNames from "classnames";

type TextareaType = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  small?: boolean;
  danger?: boolean;
  info?: boolean;
  warn?: boolean;
  success?: boolean;
  invalid?: boolean;
};

export default function InputTextArea({
  title,
  id,
  invalid,
  ...rest
}: TextareaType) {
  const classess = classNames(style["textArea-input"], {
    [style["invalid"]]: invalid,
  });
  return (
    <div className={style["container-textArea"]}>
      <label htmlFor={id}>{title}</label>
      <textarea id={id} className={classess} {...rest}/>
    </div>
  );
}
