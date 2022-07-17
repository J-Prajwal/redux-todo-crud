import { Route, Routes } from "react-router-dom";
import Hompage from "./Pages/Hompage";
import Login from "./Pages/Login";
import MainRoutes from "./Pages/MainRoutes";
import Signup from "./Pages/Signup";
// https://masai-api-mocker.herokuapp.com/ userLogin api mocker

function App() {
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
