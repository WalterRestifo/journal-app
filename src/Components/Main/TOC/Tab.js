import "./Tab.css";
import { useState } from "react";

export default function Tab({ content }) {
  const [isMarked, setIsMarked] = useState(false);
  function handleClick() {
    setIsMarked(!isMarked);
  }
  return (
    <>
      <button onClick={handleClick} className={`tab ${isMarked && "--marked"}`}>
        {content}
      </button>
      <button
        onClick={handleClick}
        className={`button ${isMarked && "button--marked"}`}
      >
        3
      </button>
    </>
  );
}
