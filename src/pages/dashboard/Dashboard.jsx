import React from "react";

import DashboardContentSidebar from "./DashboardContentSidebar";
import DashboardLeftSidebar from "./DashboardLeftSidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="lg:flex  max-w-full gap-7">
        <div className="w-full lg:max-w-[70%]">
          <DashboardContentSidebar />
        </div>

        {/* left sidebar */}
        <div className="w-full lg:max-w-[30%]">
          <DashboardLeftSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
