import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginLayout from "../layout/LoginLayout";
import ContactUs from "../pages/contactus/ContactUs";
import EditContactPage from "../pages/contactus/editContactPage/EditContactPage";
import SingleUser from "../pages/contactus/singleUser/SingleUser";
import Dashboard from "../pages/dashboard/Dashboard";
import UserUi from "../pages/dashboard/user/UserUi";
import EditPage from "../pages/editPage/EditPage";
import EmailLogin from "../pages/emailLogin/EmailLogin";
import General from "../pages/general/General";
import Login from "../pages/lgoin/Login";
import Ranking from "../pages/ranking/Ranking";
import Referral from "../pages/referral/Referral";
import Register from "../pages/register/Register";
const url =
  "https://gtr-multiple-form-backend-server-5m9s78awk-dev-rakibul1.vercel.app/api/v1/form-data/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/general", element: <General /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/referral", element: <Referral /> },
      { path: "/contact-us", element: <ContactUs /> },
      {
        path: "/review/:id",
        loader: ({ params }) => fetch(`${url}review/${params.id}`),
        element: <UserUi />,
      },
      {
        path: "/single-user/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtr-multiple-form-backend-server-md75ucjkc-dev-rakibul1.vercel.app/api/v1/contact-us/single-user/${params.id}`
          ),
        element: <SingleUser />,
      },
      {
        path: "/review/update-entry/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtr-multiple-form-backend-server-nqd2s5zk3-dev-rakibul1.vercel.app/api/v1/form-data/review/${params.id}`
          ),
        element: <EditPage />,
      },
      {
        // http://localhost:7000/api/v1/contact-us/review/65476a883378a236aad30996
        path: "/review-contact-us/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:7000/api/v1/contact-us/review-contact-us/${params.id}`
          ),
        element: <EditContactPage />,
      },
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
