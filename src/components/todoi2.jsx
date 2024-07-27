function Todoi2() {
  let todoname = "Buy Groceries";
  let tododate = "29/04/2024";
  return (
    <div class="container">
      <div class="row st-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger st-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoi2;
