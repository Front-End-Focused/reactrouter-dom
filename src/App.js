import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import Inbox from "./components/Inbox";
import Today from "./components/Today";
import Assets from "./components/Assets";
import Guide from "./components/Guide";
import Projects from "./components/Projects";
import PrivatePage from "./components/PrivatePage";
import {ProtectedRoute} from "./components/PrivateRoute";
import {Login} from "./components/Login";

function App() {
  return (
    <div className="MarketApp">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Manage</span>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <aside className="col-3 sidebar">
            <ul className="list-unstyled fs-5">
              <li>
                <NavLink to="/inbox">Inbox</NavLink>
              </li>
              <li>
                <NavLink to="/today">Today</NavLink>
              </li>
            </ul>
            <hr />
            <h4>Workspaces</h4>
            <hr />
            <ul className="list-unstyled fs-5 mt-3">
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/guide">Guide</NavLink>
              </li>
              <li>
                <NavLink to="/assets">Assets</NavLink>
              </li>
              <li>
                <NavLink to="/private">Important</NavLink>
              </li>
            </ul>
          </aside>
          <section className="col-9">
            <div className="shadow-lg p-5 bg-body rounded">
              <Switch>
                <Route path="/inbox" component={Inbox} />
                <Route path="/today" component={Today} />
                <Route path="/guide" component={Guide} />
                <Route path="/assets" component={Assets} />
                <Route path="/projects" component={Projects} />
                <Route path="/login" component={Login} />

                <ProtectedRoute path="/private" component={PrivatePage} isLoggedIn={true}/>
                {/* <Route to="/">
                  <h1 className="display-5">Welcome to Manage!</h1>
                </Route> */}
                {/* <Route
                  to="/"
                  render={() => (
                    <h1 className="display-5">Welcome to Manage!</h1>
                  )}
                /> */}
              </Switch>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
