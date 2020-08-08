import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "reactstrap";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
