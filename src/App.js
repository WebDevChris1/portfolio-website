// imports
import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./Helpers/ScrollToTop";

// routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pageRoutes, subPageRoutes } from "./data";

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
            {pageRoutes.map((route) => {
              const { path, page } = route;
              return (
                <>
                  <Route path={path} element={page}></Route>;
                </>
              );
            })}
            {subPageRoutes.map((route) => {
              const { path, page } = route;
              return (
                <>
                  <Route path={path} element={page}></Route>
                </>
              );
            })}
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
