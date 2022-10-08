import style from "./style.module.css"
export default function InputButton(props) {
  const { titulo, id, nome } = props;
  return (
    <div>
      <button className={style.inputButton} type="submit" id={id} name={nome}>
        {titulo}
      </button>
    </div>
  );
}
