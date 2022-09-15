import "./App.css";

import { useEffect } from "react";
import { themeChange } from "theme-change";

import NavbarContainer from "./components/Navbar";
import HeroContainer from "./components/Hero";
import MembershipContainer from "./components/Membership";
import Footer from "./common/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div>
      <NavbarContainer />
      <HeroContainer />
      <MembershipContainer />
      <Footer />
    </div>
  );
}

export default App;
