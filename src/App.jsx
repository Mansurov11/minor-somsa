import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Fillial from "./components/Fillial/Fillial";
import Footer from "./components/Footer/Footer";
import logo from "../public/logo.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <img src={logo} alt="" className="load_logo" />
        <h3 className="load_name">MINOR SOMSA</h3>

        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <About />
      <Menu />
      <Fillial />
      <Footer />
    </>
  );
}

export default App;
