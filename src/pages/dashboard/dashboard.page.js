import React from "react";
import Sidebar from "../../component/sidebar";

import PaymentModal from "../../component/PaymentModal";
const Dashboard = (props) => {
  return (
      <div className="dashboard_main">
        
        <div class="ml-5"><PaymentModal/></div>
      </div>
  );
};
export default Dashboard;
