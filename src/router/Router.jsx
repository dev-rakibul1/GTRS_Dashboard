import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginLayout from "../layout/LoginLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import EmailLogin from "../pages/emailLogin/EmailLogin";
import General from "../pages/general/General";
import Login from "../pages/lgoin/Login";
import Ranking from "../pages/ranking/Ranking";
import Referral from "../pages/referral/Referral";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/general", element: <General /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/referral", element: <Referral /> },
    ],
  },

  // login extra layout
  {
    path: "/authenticate-layout",
    element: <LoginLayout />,
    children: [
      { path: "/authenticate-layout/login", element: <Login /> },
      { path: "/authenticate-layout/register", element: <Register /> },
      { path: "/authenticate-layout/email-login", element: <EmailLogin /> },
    ],
  },
]);

export default router;
