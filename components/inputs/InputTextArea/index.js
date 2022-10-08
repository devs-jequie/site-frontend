import style from "./style.module.css";
export default function InputTextArea(props) {
  const { titulo, placeholder, name, id } = props;
  return (
    <div>
      <div>{titulo}</div>
      <textarea className={style.inputArea} name={name} placeholder={placeholder} id={id} />
    </div>
  );
}
