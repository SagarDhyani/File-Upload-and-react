import logo from "./logo.svg";

import "./App.css";

import { Input } from "./Components/MyInput";

import { Home } from "./Components/Pages/Home";
import { Feeds } from "./Components/Pages/Feeds";
import { Media } from "./Components/Media";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import SkeletonChildren from "./Components/Skeleton";

function App() {
  return (
    // <SkeletonChildren />
    <div className="App">
    <Router>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path = "/feeds">
        <Feeds />
      </Route>
    </Router>
    </div>
  );
}

export default App;
