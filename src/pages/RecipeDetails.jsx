import React from "react";
import { useParams, Link } from "react-router-dom";

const recipeDetails = {
  1: { name: "Spaghetti Carbonara", ingredients: ["Spaghetti", "Eggs", "Bacon"], steps: "Cook and mix together." },
  2: { name: "Chicken Curry", ingredients: ["Chicken", "Curry Paste", "Coconut Milk"], steps: "Cook chicken and add curry paste." },
};

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipeDetails[id];

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Steps:</h2>
      <p>{recipe.steps}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RecipeDetails;
