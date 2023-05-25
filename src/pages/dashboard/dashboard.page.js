import React from "react";
import Sidebar from "../../component/sidebar";

import ConfirmationModal from "../../component/ConfirmationModal";
import AddressModal from '../../component/AddressModal'
const Dashboard = (props) => {
  return (
      <div className="dashboard_main">
        
        <div class="ml-5"><AddressModal /></div>
      </div>
  );
};
export default Dashboard;
