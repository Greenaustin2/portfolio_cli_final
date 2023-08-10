import * as Commands from "./commands/index.js";
const processCommand = ({ inputValue, clear, contact }) => {
  // You can implement your own command processing logic here
  // For this example, we'll just return a static output based on the command
  //hello, whoami, help, clear, break, fix, about, portfolio, contact, skills, resume,
  if (inputValue === "about") {
    return <Commands.About />;
  } else if (inputValue === "clear") {
    clear();
  } else if (inputValue === "contact") {
    contact();
  } else if (inputValue === "help") {
    return <Commands.Help />;
  } else if (inputValue === "portfolio") {
    return <Commands.Portfolio />;
  } else if (inputValue === "resume") {
    return <Commands.Resume />;
  } else if (inputValue === "skills") {
    return <Commands.Skills />;
  } else if (inputValue === "whoami") {
    return <Commands.Whoami />;
  } else if (inputValue === "whoami") {
    return <Commands.Whoami />;
  } else {
    return <Commands.Invalid />;
  }
};

export default processCommand;
