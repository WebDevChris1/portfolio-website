// imports
import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ScrollToTop from "./helpers/ScrollToTop";

// routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pageRoutes, subPageRoutes } from "./data";
import Home from "./components/pages/Home/";

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
          {pageRoutes.slice(1, pageRoutes.length).map((route) => {
            const { path, page } = route;
            return <Route path={path} element={page}></Route>;
          })}
          {subPageRoutes.map((route) => {
            const { page, path } = route;
            return <Route path={path} element={page}></Route>;
          })}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

{
  /* <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route> */
}

{
  /* <Route
              path="/portfolio/user-experience-projects"
              element={<AllUserProjects />}
            ></Route>
            <Route
              path="/portfolio/tool-projects"
              element={<AllToolProjects />}
            ></Route> */
}
{
  /* <Route path="*" element={<Error />}></Route> */
}

// import About from "./components/pages/About/";
// import Portfolio from "./components/pages/Portfolio";
// import Error from "./components/pages/Error/";
// import Contact from "./components/pages/Contact/";
// import Services from "./components/pages/ServiceOffers/";
// import Blog from "./components/pages/Blog";

// import AllUserProjects from "./components/sub-pages/AllUserProjects";
// import AllToolProjects from "./components/sub-pages/AllToolProjects";
