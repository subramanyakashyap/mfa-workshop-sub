import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

import "./index.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to My Portfolio</h1>
    </header>
    <main>
      <AboutMe />
      <Contact />
    </main>
    <footer>
      <p>&copy; 2024 Your Name</p>
    </footer>
  </div>
);

export default App;
