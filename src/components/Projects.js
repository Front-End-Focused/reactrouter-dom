import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

function Projects() {
  let { path, url } = useRouteMatch();

  return (
    <div id="projects">
      <h1 className="display-5">Projects</h1>
      <div className="row">
        <div className="col-4">
          <div className="list-group">
            <NavLink
              to={{ pathname: `${url}/batman`, title: "Batman" }}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Batman
            </NavLink>
            <NavLink
              to={{ pathname: `${url}/15-five`, title: "15-five" }}
              className="list-group-item list-group-item-action"
            >
              15 Five
            </NavLink>
            <NavLink
              to={{ pathname: `${url}/the-network`, title: "The-network" }}
              className="list-group-item list-group-item-action"
            >
              The Network
            </NavLink>
            <NavLink
              to={{ pathname: `${url}/canary`, title: "Canary" }}
              className="list-group-item list-group-item-action"
            >
              Canary
            </NavLink>
          </div>
        </div>
        <div className="col-8">
          <Switch>
            <Route path={`${path}/:projectName`} component={Project} />

            <Route path={path}>
              <h3>Please select project</h3>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div>
      <h3>{props.location.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, vel! Repellat
        laborum corporis ex rem facilis sint. Hic, minus numquam at excepturi reiciendis
        error. Culpa aliquam voluptate iste illum magni.
      </p>
    </div>
  );
}

export default Projects;
