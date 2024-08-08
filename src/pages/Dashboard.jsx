import  { useState } from "react";
import DashHeader from "../components/Dash";
import SideBar from "../components/SideBar";
import Page from "../pages/Upload/Page";
import "./Dashboard.css";
import { FaSun, FaMoon } from "react-icons/fa";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <>
      <div className={`dashboard__container ${darkMode ? "dark" : "light"}`}>
        <SideBar darkMode={darkMode} />
        <div className="main__dashboard__container">
          <DashHeader />
          <div className="containment">
            <Page />
          </div>
          <div className="theme-toggle" onClick={toggleDarkMode}>
            <div className={`toggle-button ${darkMode ? "dark" : "light"}`}>
              <span className="icon">{darkMode ? <FaMoon /> : <FaSun />}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
