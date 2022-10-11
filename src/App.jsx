import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routes";

function App() {
 return (
  <>
  <GlobalStyles />
  <Router>
    <MainRouter />
  </Router>
  </>
  )
}

export default App;