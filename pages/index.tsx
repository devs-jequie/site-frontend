import styles from "../styles/Home.module.css";

import InputButton from "../components/inputs/Button";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/TextArea";
import InputUpload from "../components/inputs/InputUpload";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Ola Mundo</h1>
      <h3><Link href="/login"> Login</Link></h3>
      

      <InputButton title="Teste" />

      <Input title="Digite seu nome" />

      <TextArea />

      <InputUpload />
    </div>
  );
}
