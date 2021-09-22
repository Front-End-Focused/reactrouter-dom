function Today() {
  return (
    <div id="today">
      <h1 className="display-5">Today</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Draft copy
        </li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Design feedback
        </li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Create animations
        </li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Design a prototype
        </li>
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Run
        </li>
      </ul>
    </div>
  );
}

export default Today;
