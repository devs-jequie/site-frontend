import InputButton from "@/inputs/Button";
import style from "./style.module.css";

export default function Header() {
  return (
    <div className={style.header}>
        <header>
        <a href="/" className={style.logo}>
        EVENTUS
      </a>
      <div className={style.headerRight}>
        <a className="active" href="#">Oradores</a>
        <a href="#">Agenda</a>
        <a href="#">Comunidade</a>
        <a href="#">Sobre</a>
        <InputButton title="Criar evento" onClick={()=> alert('Criar evento')} />
      </div>
        </header>
    </div>
  );
}
