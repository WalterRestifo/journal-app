import Button from "./Button.js";
import "./Tab.css";

export default function Tab({ content, className }) {
  return (
    <>
      <span className={className}>{content}</span>
      <Button className={"button"}>3</Button>
    </>
  );
}
