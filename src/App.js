import React from "react";

import Header from "./components/Header";
// import GridTest from "./components/GridTest";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Popup from "./components/Popup";

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      {/* <GridTest /> */}
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
      <Popup />
    </React.Fragment>
  );
};

export default App;
