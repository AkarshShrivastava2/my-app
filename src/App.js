import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const people = [
  "Instagram",
  "Youtube",
  "Pexel",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Tiktok"
];
function App() {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearch(e.target.value);
  };
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search From"
        value={search}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
