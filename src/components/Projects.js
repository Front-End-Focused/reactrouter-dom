import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

function Projects() {
  let { path, url } = useRouteMatch();

  return (
    <div id="projects">
      <h1 className="display-5">Projects</h1>
      <div className="row">
        <div className="col-4">
          <div className="list-group">
            <Link
              to={`${url}/batman`}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Batman
            </Link>
            <Link
              to={`${url}/15-five`}
              className="list-group-item list-group-item-action"
            >
              15 Five
            </Link>
            <Link
              to={`${url}/the-network`}
              className="list-group-item list-group-item-action"
            >
              The Network
            </Link>
            <Link
              to={`${url}/canary`}
              className="list-group-item list-group-item-action"
            >
              Canary
            </Link>
          </div>
        </div>
        <div className="col-8">
          <Switch>
            <Route path={`${path}/batman`} component={Batman} />
            <Route path={`${path}/15-five`} component={Five15} />
            <Route path={`${path}/the-network`} component={TheNetwork} />
            <Route path={`${path}/canary`} component={Canary} />
            <Route path={path}>
              <h3>Please select project</h3>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

function Batman() {
  return (
    <div>
      <h3>Batman</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, vel!
        Repellat laborum corporis ex rem facilis sint. Hic, minus numquam at
        excepturi reiciendis error. Culpa aliquam voluptate iste illum magni.
      </p>
    </div>
  );
}
function TheNetwork() {
  return (
    <div>
      <h3>The Network</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, vel!
        Repellat laborum corporis ex rem facilis sint. Hic, minus numquam at
        excepturi reiciendis error. Culpa aliquam voluptate iste illum magni.
      </p>
    </div>
  );
}
function Canary() {
  return (
    <div>
      <h3>Canary</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, vel!
        Repellat laborum corporis ex rem facilis sint. Hic, minus numquam at
        excepturi reiciendis error. Culpa aliquam voluptate iste illum magni.
      </p>
    </div>
  );
}
function Five15() {
  return (
    <div>
      <h3>15 Five</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, vel!
        Repellat laborum corporis ex rem facilis sint. Hic, minus numquam at
        excepturi reiciendis error. Culpa aliquam voluptate iste illum magni.
      </p>
    </div>
  );
}

export default Projects;
