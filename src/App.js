// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";

import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const handleSearchInput = (e) => {
    setSearchText(e.target.value.toString());
  };

  const filteredUsers = searchText
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : users;

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search placeHolder="search" handleSearchInput={handleSearchInput} />
      <CardList users={filteredUsers} />
    </div>
  );
}

export default App;
