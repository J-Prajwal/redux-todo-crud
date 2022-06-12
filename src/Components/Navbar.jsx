import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Store/Auth/auth.action";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <button onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
