import Link from "next/link";
import InputButton from "@/inputs/Button";
import Input from "@/inputs/Input";

import styles from './style.module.css';

export default function Register() {
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
    
        const data = {
          name: event.target.name.value,
          email: event.target.email.value,
          pasword: event.target.password.value,
          nationality: event.target.nationality.value,
          postal_code: event.target.postal_code.value,
          // + 1 campo para imagem
        };
    
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/users/"; // ## trocar ##
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
          <Input title="Seu nome" id="name" name="name" type="text" />
          <Input title="Sua naturalidade" id="nationality" name="nationality" type="text" />
          <Input title="Seu CEP atual" id="postal_code" name="postal_code" type="text" />
          <Input title="Email" id="email" name="email" type="email" />
          <Input title="Senha" id="password" name="password" type="password" />
          {/* campo para foto / cadastro com GG,FB ou GH */}
        </div>
        <div className={styles.buttonLoginContainer}>
          <InputButton title="Entrar" type="submit" />
        </div>
      </form>
      <Link href="/login">Cancelar</Link>
    </div>
    </div>
  );
}