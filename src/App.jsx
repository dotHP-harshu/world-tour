import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="country" element={<Country />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/country/:cca3" element={<CountryDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
