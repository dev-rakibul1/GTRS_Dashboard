import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import LoginLayout from "../layout/LoginLayout";
import ContactUs from "../pages/contactus/ContactUs";
import EditContactPage from "../pages/contactus/editContactPage/EditContactPage";
import SingleUser from "../pages/contactus/singleUser/SingleUser";
import Dashboard from "../pages/dashboard/Dashboard";
import UserUi from "../pages/dashboard/user/UserUi";
import EditPage from "../pages/editPage/EditPage";
import General from "../pages/general/General";
import Login from "../pages/lgoin/Login";
import Ranking from "../pages/ranking/Ranking";
import Referral from "../pages/referral/Referral";
import Register from "../pages/register/Register";
const url = "http://localhost:7000/api/v1/form-data/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: "/general", element: <General /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/referral", element: <Referral /> },
      { path: "/contact-us", element: <ContactUs /> },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`${url}review/${params.id}`, {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }),
        element: <UserUi />,
      },
      {
        path: "/single-user/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:7000/api/v1/contact-us/review-contact-us/${params.id}`,
            {
              headers: {
                authorization: `${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            }
          ),
        element: <SingleUser />,
      },

      {
        path: "/review/update-entry/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:7000/api/v1/form-data/review/${params.id}`, {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }),
        element: <EditPage />,
      },
      {
        path: "/review-contact-us/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:7000/api/v1/contact-us/review-contact-us/${params.id}`,
            {
              headers: {
                authorization: `${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            }
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
    ],
  },
]);

export default router;
