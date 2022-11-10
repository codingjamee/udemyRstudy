import { Link } from "react-router-dom";

import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>글이 없어요!</p>
      <Link className="btn" to="/new-quote">
        글을 추가해 볼까요?
      </Link>
    </div>
  );
};

export default NoQuotesFound;
