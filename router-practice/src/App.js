import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes to="/quotes" />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetails to="/quotes" />
      </Route>
    </Switch>
  );
}

export default App;
