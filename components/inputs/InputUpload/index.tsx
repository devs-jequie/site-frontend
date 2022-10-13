import style from "./style.module.css";
export default function InputUpload(props) {
  const { titulo, id, name, placeholder } = props;
  const handleSubmit = async (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>TODO: input de upload </h3>
    </div>
  );
}
