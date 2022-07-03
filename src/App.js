import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jofreshapi.herokuapp.com/users").then((res) => {
      console.log();
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="app">
      <h1 className="app__header">Hello!</h1>
      <ul className="app__list">
        {users.map((user) => (
          <li className="list__item" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      <p className="app__footer">
        Fetched from{" "}
        <a
          href="https://jofreshapi.herokuapp.com/api-docs/"
          target="_blank"
          rel="noreferrer"
        >
          Jofresh API
        </a>
      </p>
    </div>
  );
}

export default App;
