function Projects() {
  return (
    <div id="projects">
      <h1 className="display-5">Projects</h1>
      <div className="row">
        <div className="col-4">
          <div className="list-group">
            <a
              href="/"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Batman
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              15 Five
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              The Network
            </a>
            <a href="/" className="list-group-item list-group-item-action">
              Canary
            </a>
          </div>
        </div>
        <div className="col-8">
          <h3>Batman</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
            vel! Repellat laborum corporis ex rem facilis sint. Hic, minus
            numquam at excepturi reiciendis error. Culpa aliquam voluptate iste
            illum magni.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
