import Tab from "./Tab";
import "./Toc.css";

export default function Toc() {
  return (
    <section>
      <Tab content={"All Entries"} className=" tab --marked" />
      <Tab content={"Favorites"} className="tab" />
    </section>
  );
}
