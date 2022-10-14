import Link from "next/link";
import InputButton from "../../components/inputs/Button";
import Input from "../../components/inputs/Input";

import styles from "./style.module.css";

export default function Login() {
  const loginSocial = async (event) => {
    event.preventDefault();

    alert(`login com: ${event.target.name}`);
  };
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      pasword: event.target.password.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/url-login"; // ## trocar ##
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
        <span className={styles.title}>Login</span>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer10}>
            <Input title="Email" id="email" name="email" />
          </div>
          <div className={styles.inputContainer10}>
            <Input title="Senha" id="password" name="password" />
          </div>
          <div className={styles.cancelOrLoginContainer}>
            {/* <Link className={styles.cancelButton} href="/" >
                            Cancelar
                        </Link> */}
            <InputButton title="Entrar" type="submit" />
          </div>
        </form>

        <hr />
        <div className={styles.textOptionalLoginContainer}>
          <span>ou faça login com sua rede social</span>
        </div>

        <div className={styles.loginSocialContainer}>
          <InputButton
            title="FB"
            className="small-button"
            name="facebook"
            onClick={loginSocial}
            style={{ padding: 10 }}
          />
          <InputButton
            title="GG"
            className="small-button"
            name="Google"
            onClick={loginSocial}
            style={{ padding: 10, margin: 10 }}
          />
          <InputButton
            title="GH"
            className="small-button"
            name="Github"
            onClick={loginSocial}
            style={{ padding: 10 }}
          />
        </div>

        <div className={styles.cancelOrLoginContainer}>
            <Link  href="/" >
                            Cadastre-se
                        </Link>
          </div>
      </div>
    </div>
  );
}
