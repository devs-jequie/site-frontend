import style from "./style.module.css";
import { InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  small?: boolean;
  danger?: boolean;
  info?: boolean;
  warn?: boolean;
  success?: boolean;
  invalid?: boolean;
};

export default function InputUpload({
  id,
  title,
  placeholder,
  onChange,
  invalid,
  ...rest
}: InputType) {
  const classess = classNames(style["upload-label"], {
    [style["invalid"]]: invalid,
  });
  const [value, setValue] = useState("");
  const handleSubmit = async (event) => {
    setValue(event.target.files[0].name);
    {
      onChange;
    }
  };
  return (
    <div>
      {value === "" ? (
        <div className={style["container-upload"]}>
          <p className={style["title"]}>{title}</p>
          <label htmlFor={id} className={classess}>
            {placeholder}
          </label>
          <input
            id={id}
            type="file"
            onChange={handleSubmit}
            className={style["upload-input"]}
            {...rest}
          />
        </div>
      ) : (
        <div className={style["container-upload"]}>
          {title}
          <label htmlFor={id} className={classess}>
            <FileEarmarkArrowUp className={style["img-file"]} /> {value}
          </label>
          <input
            id={id}
            type="file"
            onChange={handleSubmit}
            className={style["upload-input"]}
            {...rest}
          />
        </div>
      )}
    </div>
  );
}
