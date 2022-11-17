export default function TextArea({ name, labelText }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <textarea name={name}></textarea>
    </>
  );
}
