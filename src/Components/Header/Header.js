import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="header">
      <h1 className="header__h1">{title}</h1>
    </header>
  );
}
