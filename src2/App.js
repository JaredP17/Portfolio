import React from "react";
import { Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Container } from "reactstrap";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <Router>
        <NavBar />
        <Container>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Container>
    </Router>
  );
}

export default App;
