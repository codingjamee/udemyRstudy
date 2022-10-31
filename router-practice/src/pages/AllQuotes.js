import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import QuoteList from "../components/QuoteList";

const getAllQuotes = async () => {
  const response = await fetch(
    "https://react-http-55f5b-default-rtdb.firebaseio.com/quotes.json"
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quoteObj);
  }
  return transformedQuotes;
};

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    return (
      <div className="centered">
        <QuoteList quotes={loadedQuotes} />
      </div>
    );
  }
};
export default AllQuotes;
