import "../../css/command.css";

const Invalid = ({ inputValue }) => {
  return (
    <div className="command">
      <p id="invalid">command not valid: {inputValue}</p>
    </div>
  );
};

export default Invalid;
