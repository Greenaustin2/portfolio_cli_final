import React, { useState, useEffect, useRef } from "react";
import ProcessCommandComponent from "./ProcessCommandComponent";
import useKeyDown from "../hooks/useKeyDown";
import "../css/gpt.css";

const CommandInterface = () => {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [output, setOutput] = useState([]);

  const inputRef = useRef(null);
  const autoScroll = useRef(null);

  var index = history.length + 1;

  const historyUp = () => {
    setHistoryIndex((prevCount) => {
      if (prevCount >= 1) {
        return prevCount - 1;
      } else {
        return prevCount;
      }
    });
  };

  const historyDown = () => {
    setHistoryIndex((prevCount) => {
      if (prevCount < history.length) {
        return prevCount + 1;
      } else {
        setInputValue("");
        return prevCount;
      }
    });
  };

  useKeyDown("ArrowUp", historyUp, inputValue);
  useKeyDown("ArrowDown", historyDown, inputValue);

  //Ensures commands and responses are in view via auto-scroll to bottom of content
  const scrollToBottom = () => {
    autoScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [output]);

  useEffect(() => {
    setInputValue(history[historyIndex]);
  }, [historyIndex]);

  //Clears the terminal
  const clear = () => {
    setHistory([]);
    setOutput([]);
    setHistoryIndex(0);
  };

  //Opens email prompt in new tab
  const contact = () => {
    window.open("mailto:greenaustin2@gmail.com");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCommandSubmit = (event) => {
    event.preventDefault();

    // Process the command and retrieve the data
    const commandOutput = (
      <ProcessCommandComponent
        inputValue={inputValue}
        clear={clear}
        contact={contact}
      />
    );

    // Update command history
    setHistory([...history, inputValue]);

    setHistoryIndex(index);

    // Update output with command and response
    setOutput([...output, { command: inputValue, response: commandOutput }]);

    // Clear the input field
    setInputValue("");

    // Reset input focus
    inputRef.current.focus();
  };

  //Permanent focus on text input
  const onBlur = (e) => {
    e.target.focus();
  };
  // const onMouseDown = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="command-interface">
      <div className="command-interface__output">
        {output.map((item, index) => (
          <div key={index}>
            <span className="command-interface__prompt">$</span>
            <span className="command-interface__command">{item.command}</span>
            <br />
            <div>{item.response}</div>
          </div>
        ))}
        <div className="command-interface__input-container">
          <form onSubmit={handleCommandSubmit}>
            <span className="command-interface__prompt">$</span>
            {/* <span className="command-interface__static-input">{inputValue}</span> */}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="command-interface__input"
              autoFocus
              ref={inputRef}
              onBlur={onBlur}
            />
          </form>
        </div>
      </div>
      <div ref={autoScroll}></div>
    </div>
  );
};

export default CommandInterface;
