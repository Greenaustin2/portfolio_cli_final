import { useState, useEffect } from "react";
import "../css/clock.css";
function Clock() {
  console.log("clock render");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="clock">{date.toLocaleTimeString()}</div>;
}

export default Clock;
