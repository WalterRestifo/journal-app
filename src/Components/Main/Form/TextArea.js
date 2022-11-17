import "./TextArea.css";

export default function TextArea({ name, labelText }) {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {labelText}
      </label>
      <textarea className={name} name={name}></textarea>
    </>
  );
}
