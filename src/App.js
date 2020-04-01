import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = React.useState([])
  const [searchText, setSearchText] = React.useState('')

  React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [monsters.concat]);

  const handleChange = (value) => {
    setSearchText(value.target.value);
  };

  // 
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={handleChange} placeholder={"Search Box"}/>
      <CardList monsters={monsters} searchText={searchText}/>
    </div>
  );
}

export default App;
