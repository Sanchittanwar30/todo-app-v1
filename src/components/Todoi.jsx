function Todoi({ todoname, tododate, onDelete }) {
  return (
    <div className="container">
      <div className="row st-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger st-btn"
            onClick={() => {
              onDelete(todoname);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoi;
