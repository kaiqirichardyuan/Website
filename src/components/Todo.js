import { useState } from 'react';

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);

  function deleteHandler() {
    setIsOpen(true);
  }

  function closeModalHandler() {
    setIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {isOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
