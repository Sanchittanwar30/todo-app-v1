import { useState } from "react";

function AddTodo({ onnewItem }) {
  const [todoName, settodoName] = useState("");
  const [todoDate, setdoDate] = useState("");

  const nameChange = (event) => {
    settodoName(event.target.value);
  };
  const dateChange = (event) => {
    setdoDate(event.target.value);
  };

  const addbtnClick = () => {
    onnewItem(todoName, todoDate);
    settodoName("");
    setdoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row st-row">
        <div className="col-6">
          <input
            type="text"
            placeholder=" Enter Todo Here"
            value={todoName}
            onChange={nameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={dateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success st-btn"
            onClick={addbtnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
