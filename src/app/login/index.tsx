import Link from "next/link";
import InputButton from "../../components/inputs/Button";
import Input from "../../components/inputs/Input";
import InputCheckbox from "../../components/inputs/Checkbox";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import styles from "./style.module.css";

export default function Login() {
  const loginSocial = async (event) => {
    event.preventDefault();

    alert(`login com: ${event.target}`);
  };
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      pasword: event.target.password.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/login"; // ## trocar ##
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`resultado: ${result.data}`); // ## remover ##
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <span className={styles.title}>Eventus</span>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer10}>
            <Input title="Email" id="email" name="email" type="email" />
            <Input
              title="Senha"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className={styles.rememberMeForgotPassword}>
            <InputCheckbox
              title="Mantenha-me conectado"
              id="checkbox"
              type="checkbox"
            />
            <a
              href="/forgot-password"
              className={styles.textOptionalLoginContainer}
            >
              Esqueci minha senha
            </a>
          </div>

          <div className={styles.buttonLoginContainer}>
            <InputButton title="Entrar" type="submit" />
          </div>
        </form>
        <hr />
        <div className={styles.loginSocialContainer}>
          <div className={styles.textOptionalLoginContainer}>
            <span>ou faça login com sua rede social</span>
          </div>
          <div className={styles.loginSocialItem}>
            <FacebookLoginButton
              text="Login com Facebook"
              onClick={() => alert("login com facebook")}
              style={{ height: 30, fontSize: 12, iconSize: 26 }}
            />
          </div>
          <div className={styles.loginSocialItem}>
            <GoogleLoginButton
              text="Login com Google"
              onClick={() => alert("login com google")}
              style={{ height: 30, fontSize: 12, iconSize: 26 }}
            />
          </div>
          <div className={styles.loginSocialItem}>
            <GithubLoginButton
              text="Login com Github"
              onClick={() => alert("login com github")}
              style={{ height: 30, fontSize: 12, iconSize: 26 }}
            />
          </div>
        </div>

        <div className={styles.registerContainer}>
          <Link href="/cadastro">
            <label>Não possui conta? Cadastre-se!</label>
          </Link>
        </div>
      </div>
    </div>
  );
}
