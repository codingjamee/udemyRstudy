import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [open, setOpen] = useState(false);
  const onRemove = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onConfirm = () => {};
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
      {open && (
        <>
          <Modal onClose={onClose} onConfirm={onClose} />
          <Backdrop onClose={onClose} />
        </>
      )}
    </div>
  );
};

export default Todo;
