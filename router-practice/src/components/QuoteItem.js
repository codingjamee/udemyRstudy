import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`}>View Fullscreen</Link>
    </li>
  );
};
export default QuoteItem;
