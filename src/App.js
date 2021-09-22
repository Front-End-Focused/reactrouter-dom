import { Link } from "react-router-dom";
import "./App.css";
import Inbox from "./components/Inbox";
import Today from "./components/Today";
import Assets from "./components/Assets";
import Guide from "./components/Guide";
import Projects from "./components/Projects";
import PrivatePage from "./components/PrivatePage";

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
                <Link to="/inbox">Inbox</Link>
              </li>
              <li>
                <Link to="/today">Today</Link>
              </li>
            </ul>
            <hr />
            <h4>Workspaces</h4>
            <hr />
            <ul className="list-unstyled fs-5 mt-3">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/guide">Guide</Link>
              </li>
              <li>
                <Link to="/assets">Assets</Link>
              </li>
              <li>
                <Link to="/private">Important</Link>
              </li>
            </ul>
          </aside>
          <section className="col-9">
            <div className="shadow-lg p-5 bg-body rounded">
              <Inbox />
              <Today />
              <Assets />
              <Guide />
              <Projects />
              <PrivatePage />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
