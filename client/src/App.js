import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import PokemonCreate from "./components/PokemonCreate";
import Detail from "./components/Details";
import About from "./components/About";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        rel="stylesheet"
        type="text/css"
        href="normalize.css"
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route path="/create" component={PokemonCreate} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
