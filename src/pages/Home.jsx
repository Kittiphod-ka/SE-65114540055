import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";

const recipes = [
  { id: 1, name: "Spaghetti Carbonara", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Chicken Curry", image: "https://via.placeholder.com/150" },
];

function Home() {
  return (
    <div>
      <Header title="Food Menu" />
      <div className="menu-container">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <MenuCard name={recipe.name} image={recipe.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
