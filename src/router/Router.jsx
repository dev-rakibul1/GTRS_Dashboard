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
import ChangePassword from "../pages/profile/changePassword/ChangePassword";
import EditProfile from "../pages/profile/editProfile/EditProfile";
import Profile from "../pages/profile/profile";
import Ranking from "../pages/ranking/Ranking";
import Referral from "../pages/referral/Referral";
import Register from "../pages/register/Register";
import Setting from "../pages/setting/Setting";
import User from "../pages/user/User";
import GetSingleUser from "../pages/user/getSingleUser/GetSingleUser";
import UserEditPage from "../pages/user/userEditPage/UserEditPage";
const url = "https://gtrs.vercel.app/api/v1/form-data/";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      { path: "/general", element: <General /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/referral", element: <Referral /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/profile", element: <Profile /> },
      { path: "/setting", element: <Setting /> },
      { path: "/user", element: <User /> },
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
      { path: "/edit-profile/:id", element: <EditProfile /> },
      { path: "/password-change", element: <ChangePassword /> },
      { path: "/add-user", element: <Register /> },
      {
        path: "/single-user/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtrs.vercel.app/api/v1/contact-us/review-contact-us/${params.id}`,
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
          fetch(
            `https://gtrs.vercel.app/api/v1/form-data/review/${params.id}`,
            {
              headers: {
                authorization: `${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            }
          ),
        element: <EditPage />,
      },
      {
        path: "/user/single-user-review/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtrs.vercel.app/api/v1/user/single-user-review/${params.id}`,
            {
              headers: {
                authorization: `${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            }
          ),
        element: <GetSingleUser />,
      },
      {
        path: "/user/single-user-edit/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtrs.vercel.app/api/v1/user/single-user-review/${params.id}`,
            {
              headers: {
                authorization: `${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            }
          ),
        element: <UserEditPage />,
      },
      {
        path: "/review-contact-us/:id",
        loader: ({ params }) =>
          fetch(
            `https://gtrs.vercel.app/api/v1/contact-us/review-contact-us/${params.id}`,
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
    children: [{ path: "/authenticate-layout/login", element: <Login /> }],
  },
]);

export default router;
