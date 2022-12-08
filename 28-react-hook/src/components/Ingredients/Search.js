import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";
import "./Search.css";
import LoadingIndicator from "../UI/LoadingIndicator";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const { filter } = props;
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          "https://react-http-55f5b-default-rtdb.firebaseio.com/ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputRef, enteredFilter, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      filter(loadedIngredients);
    }
  }, [data, isLoading, error, filter]);

  return (
    <section className="search">
      {isLoading && <LoadingIndicator />}
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading... </span>}
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
