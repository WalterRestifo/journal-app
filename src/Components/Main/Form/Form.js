import TextArea from "./TextArea";
import DateComponent from "../DateComponent";
import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <h2 className="h2">
        NEW ENTRY - TODAY,
        <DateComponent />
      </h2>
      <TextArea name="motto" labelText="Motto" />
      <TextArea name="notes" labelText="Notes" />
      <button className="form__button">Create</button>
    </form>
  );
}
