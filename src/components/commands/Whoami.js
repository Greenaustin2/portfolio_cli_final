import "../../css/command.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Whoami = () => {
  const [ip, setIp] = useState();
  const fetchIp = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res);
    setIp(res.data.ip);
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <div>
      <p>Hello, {ip && ip}</p>
    </div>
  );
};

export default Whoami;
