import { useState } from "react";
import axios from "axios";

import "./styles.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onButtonPress = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(data);
    } catch (e) {
      console.log("error : ", e);
    }
    setLoading(false);
  };

  return (
    <div className="loginMainContainer">
      <input
        className="inputStyle"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        className="inputStyle"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        disabled={loading || !userName || !password}
        onClick={onButtonPress}
        className="buttonStyle"
        type="button"
        value={loading ? "Loading..." : "Login"}
      />
    </div>
  );
};

export default Login;
