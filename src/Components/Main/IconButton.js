export default function IconButton({ src, alt, width, heigth }) {
  return (
    <button>
      <img src={src} alt={alt} width={width} heigth={heigth}></img>
    </button>
  );
}
