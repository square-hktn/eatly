import React from "react";
import ConfirmationModal from "../../component/ConfirmationModal";
import AddressModal from "../../component/AddressModal";
import Sidebar from "../../component/sidebar";

const Dashboard = (props) => {
  return (
      <div className="dashboard_main">
       
       
          <Sidebar/>
      
       
        
          
          <AddressModal/>
       

        
      </div>
  );
};
export default Dashboard;
