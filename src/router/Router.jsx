import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import General from "../pages/general/General";
import Ranking from "../pages/ranking/Ranking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/general", element: <General /> },
      { path: "/ranking", element: <Ranking /> },
    ],
  },
]);

export default router;
