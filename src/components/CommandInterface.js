import React, { useState, useEffect, useRef } from "react";
import ProcessCommand from "./ProcessCommand";
import useKeyDown from "../hooks/useKeyDown";
import "../css/commandInterface.css";

const CommandInterface = () => {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [output, setOutput] = useState([]);

  const inputRef = useRef(null);
  const autoScroll = useRef(null);

  //History index variable initialization
  var index = history.length + 1;

  //Scroll through command history on up-arrow keypress
  const historyUp = () => {
    setHistoryIndex((prevCount) => {
      if (prevCount >= 1) {
        return prevCount - 1;
      } else {
        return prevCount;
      }
    });
  };

  //Scroll through command history on down-arrow keypress
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

  //Ensures commands and responses are in view via auto-scroll to bottom of content
  const scrollToBottom = () => {
    autoScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <ProcessCommand inputValue={inputValue} clear={clear} contact={contact} />
    );
    // Update command history
    setHistory([...history, inputValue]);
    // Update history index
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

  //auto scrolls to bottom of screen
  useEffect(() => {
    scrollToBottom();
  }, [output]);

  //sets text input value to the current historyIndex value (command history)
  useEffect(() => {
    setInputValue(history[historyIndex]);
  }, [historyIndex]);

  useKeyDown("ArrowUp", historyUp, inputValue);
  useKeyDown("ArrowDown", historyDown, inputValue);

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
