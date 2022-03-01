// imports
import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./helpers/ScrollToTop";

// routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pageRoutes, subPageRoutes } from "./data";
import Home from "./components/pages/Home/";

// styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const { bgColor, showLinks } = useGlobalContext();
  return (
    <div className="app-wrapper" style={{ background: bgColor }}>
      <Router>
        <ScrollToTop>
          <GlobalStyle />
          <Navbar />
          <div
            className="paths"
            style={{
              opacity: showLinks ? ".4" : "1",
            }}
          >
            <Routes>
              <Route exact path="/" element={<Home />} st></Route>
              {pageRoutes.slice(1, pageRoutes.length).map((route) => {
                const { path, page } = route;
                return <Route path={path} element={page}></Route>;
              })}
              {subPageRoutes.map((route) => {
                const { page, path } = route;
                return <Route path={path} element={page}></Route>;
              })}
            </Routes>
          </div>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
