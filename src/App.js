import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jofreshapi.herokuapp.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div class="app">
      <h1 class="app__header">Hello!</h1>
      <ul class="app__users">
        {users.map((user) => (
          <li class="user" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      <p class="app__footer">
        Fetched from{" "}
        <a href="https://jofreshapi.herokuapp.com/api-docs/" target="_blank">
          Jofresh API
        </a>
      </p>
    </div>
  );
}

export default App;
