import DateComponent from "../DateComponent";
import IconButton from "../IconButton";

export default function Entry({ title, children }) {
  return (
    <section>
      <DateComponent />
      <h2>{title}</h2>
      <IconButton />
      <p>{children}</p>
    </section>
  );
}
