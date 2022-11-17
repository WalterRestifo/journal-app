import "./TocTab.css";

export default function TocTab({ content, className }) {
  return (
    <>
      <span className={className}>{content}</span>
      <button className="tab__button"></button>
    </>
  );
}
