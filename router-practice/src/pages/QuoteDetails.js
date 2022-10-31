import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;

  return (
    <Route path={`${match.path}`} exact>
      <div className="centered">
        <Link lassName="btn--flat" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </div>
    </Route>
  );
};
export default QuoteDetails;
