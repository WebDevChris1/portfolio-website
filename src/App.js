import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home/";
import About from "./pages/About/";
import Projects from "./pages/Projects/";
import Error from "./pages/Error/";
import Contact from "./pages/Contact/";
import Services from "./pages/ServiceOffers/";
// styles
import { GlobalStyle } from "./GlobalStyle";

import { useGlobalContext } from "./context";

function App() {
  const { bgColor } = useGlobalContext();
  console.log(bgColor);
  return (
    <div className="app-wrapper" style={{ background: bgColor }}>
      <Router>
        <GlobalStyle bgColor={bgColor} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
