import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import logo from './logo.png';

const App = () =>{
  const APP_ID = "d9a02134";
  const APP_KEY = "4cc4fcc66c79c30154038941348fd560";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault(); //stop page refres
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <h1>Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Look for the recipe"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h3>Enter the required recipe or any type of food or drink.</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          cuisineType={recipe.recipe.cuisineType}
          dishType={recipe.recipe.dishType}
          dietLabels={recipe.recipe.dietLabels}
          mealType={recipe.recipe.mealType}
          healthLabels={recipe.recipe.healthLabels}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
