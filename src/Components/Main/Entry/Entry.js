import DateComponent from "../DateComponent";
import IconButton from "../IconButton";
import "./Entry.css";

export default function Entry({ title, children }) {
  return (
    <section className="section">
      <DateComponent className="entry__date" />
      <article className="article">
        <h2 className="entry__title">{title}</h2>
        <IconButton className="star" />
        <p>{children}</p>
        <hr className="horizontal-line"></hr>
      </article>
    </section>
  );
}
