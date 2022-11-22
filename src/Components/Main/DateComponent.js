export default function DateComponent({ className }) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return <span className={className}>FEB 28, 2028</span>;
}
