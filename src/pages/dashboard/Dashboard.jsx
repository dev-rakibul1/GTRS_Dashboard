import React from "react";

import DashboardContentSidebar from "./DashboardContentSidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="lg:flex  max-w-full gap-7">
        <div className="w-full lg:max-w-full">
          <DashboardContentSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
