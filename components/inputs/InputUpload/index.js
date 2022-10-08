import style from "./style.module.css";
export default function InputUpload(props) {
  const { titulo, id, name, placeholder } = props;
    const handleSubmit = async(e)=>{
        console.log(e.target.value);
    };
  return (
    <div>
      <h1>input de upload </h1>
    </div>
  );
}
