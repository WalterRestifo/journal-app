import TextArea from "./TextArea";
import DateComponent from "../DateComponent";

export default function Form() {
  return (
    <form>
      <h2>
        <p>
          NEW ENTRY - TODAY,
          <DateComponent />
        </p>
      </h2>
      <TextArea />
      <TextArea />
      <button>Create</button>
    </form>
  );
}
