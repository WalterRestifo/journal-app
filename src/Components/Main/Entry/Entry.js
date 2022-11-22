import DateComponent from "../DateComponent";
import StarUnfilled from "../StarUnfilled";
import StarFilled from "../StarFilled";
import "./Entry.css";
import { useState } from "react";

export default function Entry({ title, children }) {
  const [isMarked, setIsMarked] = useState(false);
  function handleClick() {
    setIsMarked(!isMarked);
  }
  return (
    <section className="entry__section">
      <DateComponent className="entry__date" />
      <article className="entry__article">
        <h2 className="entry__title">{title}</h2>
        <button onClick={handleClick} className="star">
          {isMarked ? <StarFilled /> : <StarUnfilled />}
        </button>
        <p>{children}</p>
        <hr className="horizontal-line"></hr>
      </article>
    </section>
  );
}
