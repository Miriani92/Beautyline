import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import Discounts from "./Discounts";
import Contact from "./Contact";
import Footer from "./Footer";
import Production from "./Production";
import Prodacts from "./Prodacts";
import Singleprodact from "./Singleprodact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Aboutus">
          <Aboutus />
        </Route>
        <Route path="/Production">
          <Production />
        </Route>
        <Route path="/Prodacts/:id">
          <Singleprodact />
        </Route>
        <Route path="/Discounts">
          <Discounts />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
