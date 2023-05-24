import React from "react";
import ConfirmationModal from "../../component/ConfirmationModal";
import Sidebar from "../../component/sidebar";

const Dashboard = (props) => {
  return (
      <div className="dashboard_main">
       
       
          <Sidebar/>
      
       
        
          <ConfirmationModal/>
       

        
      </div>
  );
};
export default Dashboard;
