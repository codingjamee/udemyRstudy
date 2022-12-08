const Todo = (props) => {
  const onRemove = () => {};
  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={onRemove}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
