import { useHistory } from "react-router-dom";

const sortQuotes = () => {};

const QuoteList = (props) => {
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  return (
    <>
      <ul>
        {sortedQuotes.map((quote) => {
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />;
        })}
      </ul>
    </>
  );
};
export default QuoteList;
