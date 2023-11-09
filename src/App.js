import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
