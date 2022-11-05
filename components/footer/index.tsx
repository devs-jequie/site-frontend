import style from "./style.module.css";
export default function Footer() {
    return (
        <div className={style.containerFooter}>
            <footer>
                <span>Feito com em Jequié, Bahia.</span>
                <p className={style.copyright}>Devs Jequié © 2022</p>
            </footer>
        </div>
    )
}