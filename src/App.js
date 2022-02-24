// imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./context";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./Helpers/ScrollToTop";

// pages
import Home from "./pages/Home/";
import About from "./pages/About/";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error/";
import Contact from "./pages/Contact/";
import Services from "./pages/ServiceOffers/";
import Blog from "./pages/Blog/";

//sub pages
import AllUserProjects from "./components/sub-pages/AllUserProjects";
import AllToolProjects from "./components/sub-pages/AllToolProjects";

// styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const { bgColor } = useGlobalContext();
  return (
    <div className="app-wrapper" style={{ background: bgColor }}>
      <Router>
        <ScrollToTop>
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
            <Route
              path="/portfolio/all-user-experience-projects"
              element={<AllUserProjects />}
            ></Route>
            <Route
              path="/portfolio/all-tool-projects"
              element={<AllToolProjects />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
