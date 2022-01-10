// imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./context";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home/";
import About from "./pages/About/";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error/";
import Contact from "./pages/Contact/";
import Services from "./pages/ServiceOffers/";
import Blog from "./pages/Blog/";
// styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const { bgColor } = useGlobalContext();
  return (
    <div className="app-wrapper" style={{ background: bgColor }}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
