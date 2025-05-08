import "./App.css";
import "./func/color-modes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Router from "./Router";
import { UserProvider } from "./contexts/UserContext";

import ThemeToggle from "./components/ThemeToggle";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
    });
    // AOS.refresh();
  }, []);

  return (
    <>
      <ThemeToggle />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;
