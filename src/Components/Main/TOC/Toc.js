import TocTab from "./TocTab";
import "./Toc.css";

export default function Toc() {
  return (
    <section>
      <TocTab content={"All Entries"} className="tab--marked" />
      <TocTab content={"Favorites"} className="tab" />
    </section>
  );
}
