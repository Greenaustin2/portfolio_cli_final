import "../../css/command.css";

const Help = () => {
  const helpMenu = {
    about: "about Austin Machin Green",
    contact: "send me an email",
    help: "list of available commands",
    portfolio: "recent projects",
    skills: "list of relevant skills",
    resume: "employment history",
    whoami: "who are you?",
  };

  return (
    <div>
      <h3>Help</h3>
      <table id="help">
        <tbody>
          <tr>
            <th>command</th>
            <th>description</th>
          </tr>
          {Object.keys(helpMenu).map((key, value) => (
            <tr>
              <td>{key}</td>
              <td>{helpMenu[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Help;
