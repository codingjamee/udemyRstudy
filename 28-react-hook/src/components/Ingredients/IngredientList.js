import React from "react";
import LoadingIndicator from "../UI/LoadingIndicator";

import "./IngredientList.css";

const IngredientList = (props) => {
  console.log("RENDERING INGREDIENTLIST");
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      {!props.loading && (
        <ul>
          {props.userIngredients.map((ig) => (
            <li key={ig.id} onClick={props.removeItem.bind(this, ig.id)}>
              <span>{ig.title}</span>
              <span>{ig.amount}x</span>
            </li>
          ))}
        </ul>
      )}
      {props.loading && <LoadingIndicator />}
    </section>
  );
};

export default IngredientList;
