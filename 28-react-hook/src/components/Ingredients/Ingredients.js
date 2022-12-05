import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-http-55f5b-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in loadedIngredients) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
  }, []);
  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://react-http-55f5b-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) =>
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ])
      );
  };

  const onRemoveitem = (id) => {
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== id)
    );
  };
  return (
    <div className="App">
      <IngredientForm onAddItem={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={onRemoveitem}
        />
      </section>
    </div>
  );
};

export default Ingredients;
