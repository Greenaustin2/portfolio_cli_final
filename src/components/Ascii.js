function Ascii({ label, text }) {
  return (
    <pre aria-label={label} className="text-art">
      {text}
    </pre>
  );
}

export default Ascii;
