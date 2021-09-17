function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>The Button Worked</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
