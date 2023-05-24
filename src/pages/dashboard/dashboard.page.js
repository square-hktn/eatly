import React from "react";
import ConfirmationModal from "../../component/ConfirmationModal";
import AddressModal from "../../component/AddressModal";
import Sidebar from "../../component/sidebar";
import SquarePayment from "../../component/SquarePayment";

const Dashboard = (props) => {
  return (
      <div className="dashboard_main">
       
       
          <Sidebar/>
      
       
        
          
          
          <SquarePayment/>
       

        
      </div>
  );
};
export default Dashboard;
