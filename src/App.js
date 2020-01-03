import React from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";

function App() {
  const [monsters, setMonsters] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);

  const monstersToRender = monsters
    .slice()
    .filter(monster => monster.name.match(new RegExp(filterValue, "ig")));

  const onFilterData = filterValue => {
    setFilterValue(filterValue);
  };

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      <Search onChange={onFilterData} placeholder={`Search...`} />
      <CardList monsters={monstersToRender}></CardList>
    </div>
  );
}

export default App;
