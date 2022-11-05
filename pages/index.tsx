import styles from "../styles/Home.module.css";

import InputButton from "@/inputs/Button";
import Input from "@/inputs/Input";
import TextArea from "@/inputs/TextArea";
import InputUpload from "@/inputs/InputUpload";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.files[0].name);
  }
  return (
    <div>
      <Header />
      <div className={styles.container}>
      
      <h1>Ola Mundo</h1>
      <h3><Link href="/login"> Login</Link></h3>
      

      <InputButton title="Teste" />

      <Input title="Digite seu nome" />

      <TextArea title="Descrição"/>

      <InputUpload id="file" onChange={handleChange}  title="selecione um evento" placeholder="selecione um arquivo"/>

      <Footer />
    </div>
   </div>
    
  );
}
