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
const url = "https://gtrs.vercel.app/api/v1/form-data/";

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
            `https://gtrs.vercel.app/api/v1/contact-us/review-contact-us/${params.id}`
          ),
        element: <SingleUser />,
      },
      {
        path: "/review/update-entry/:id",
        loader: ({ params }) =>
          fetch(`https://gtrs.vercel.app/api/v1/form-data/review/${params.id}`),
        element: <EditPage />,
      },
      {
        path: "/review-contact-us/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtrs.vercel.app/api/v1/contact-us/review-contact-us/${params.id}`
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
