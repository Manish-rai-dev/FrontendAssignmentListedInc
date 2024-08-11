import  {  } from "react";
import DashHeader from "../components/Dash";
import SideBar from "../components/SideBar";
import Page from "../pages/Upload/Page";
import "./Dashboard.css";


const Dashboard = () => {
  return (
    <>
      <div className={`dashboard__container "}`}>
        <SideBar />
        <div className="main__dashboard__container">
          <DashHeader />
          <div className="containment">
            <Page />
          </div>
       
        </div>
      </div>
    </>
  );
};

export default Dashboard;
