import style from "./style.module.css";
import { InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import { FaFileUpload } from "react-icons/fa";

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
  invalid,
  onChange,
  ...rest
}: InputType): JSX.Element {
  const classess = classNames(style["upload-label"], {
    [style["invalid"]]: invalid,
  });

  const [value, setValue] = useState("");

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setValue(event.target.files[0].name);
    //@ts-ignore
    onChange(event);
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
            <FaFileUpload className={style["img-file"]} /> {value}
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
