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
                <a href="/">Inbox</a>
              </li>
              <li>
                <a href="/">Today</a>
              </li>
            </ul>
            <hr />
            <h4>Workspaces</h4>
            <hr />
            <ul className="list-unstyled fs-5 mt-3">
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Guide</a>
              </li>
              <li>
                <a href="/">Assets</a>
              </li>
              <li>
                <a href="/">Important</a>
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
