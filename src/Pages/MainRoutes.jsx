import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import Sidebar from "../Components/Sidebar";
import EditPage from "./EditPage";
import Hompage from "./Hompage";
import Login from "./Login";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Stack direction={"row"}>
              <Sidebar />
              <Hompage />
            </Stack>
          </ReqAuth>
        }
      ></Route>
      <Route
        path="/task/:id"
        element={
          <ReqAuth>
            <Stack>
              <Sidebar />
              <EditPage />
            </Stack>
          </ReqAuth>
        }
      ></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default MainRoutes;
