import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const API_URL = "https://jofreshapi.herokuapp.com/users"

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL, { headers: { 'Authorization': `Bearer ${process.env.SECRET_KEY || "whoops"}` } }).then((res) => {
      setInterval(() => {
        setLoading(false);
      }, 500);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="app">
      <h1 className="app__header">Hello!</h1>

      <div className="app__body">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ul className="app__list">
            {users.map((user) => (
              <li className="list__item" key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>

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
