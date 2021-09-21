function Today() {
  return (
    <div id="today">
      <h1 className="display-5">Today</h1>
      <ul class="list-group">
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Draft copy
        </li>
        <li class="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Design feedback
        </li>
        <li class="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Create animations
        </li>
        <li class="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Design a prototype
        </li>
        <li class="list-group-item">
          <input className="form-check-input me-1" type="checkbox" />
          Run
        </li>
      </ul>
    </div>
  );
}

export default Today;
