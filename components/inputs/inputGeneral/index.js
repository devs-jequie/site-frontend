import style from "./style.module.css";
export default function InputGeneral(props) {
  const { placeholder, id, name, titulo, type} = props;
  return (
    <div className={style.containerGeneral}>
      <div>{titulo}</div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        className={style.generalInput}
      />
    </div>
  );
}
