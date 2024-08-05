import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Toastify from 'toastify-js'
const Navbar = () => {
  const navigate = useNavigate();
  function LogOut(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
    Toastify({
        text: "Logout Success",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
  }
  return (
    <div className="navbar bg-base-100 flex justify-around">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Club
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/my-clubs" className="btn btn-ghost text-xl">
          My Clubs
        </Link>
      </div>
      <div className="flex-2">
        <Link to="/login" className="btn btn-ghost text-xl">
          <button onClick={(e) => LogOut(e)}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
