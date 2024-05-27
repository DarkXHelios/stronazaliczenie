import logo from './logo.svg';
import './App.css';
import Header from "./Header.js";
import SearchBar from "./SearchBar.js"; 
import RecipeList from './RecipeList.js';
import './Header.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <RecipeList />


    </div>
  );
}

export default App;
