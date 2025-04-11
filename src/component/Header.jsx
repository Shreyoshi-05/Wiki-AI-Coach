import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import logo from '../assets/logo.svg'
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const {questionsans , setUser,user} = useContext(AppContext);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  


  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
            <Link to="/">Home</Link>
          </li>
            <li>
              <Link to="/wiki">Wiki</Link>
            </li>
            <li>
              <Link to="/generate">Generate</Link>
            </li>
            {/* {
              questionsans.length > 0  &&
              <li>
              <Link to="/interview">Interview</Link>
            </li>
            } */}
            {
              localStorage.getItem("qs-ans")&&
              <li>
              <Link to="/interview">Interview</Link>
            </li>
            }
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wiki">Wiki</Link>
          </li>
          <li>
            <Link to="/generate">Generate</Link>
          </li>
          {
              localStorage.getItem("qs-ans") &&
              <li>
              <Link to="/interview">Interview</Link>
            </li>
            }
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn"><Link to="/signup">{user ? "Log Out" : "Sign Up"}</Link></a>
      </div>
    </div>
  );
};

export default Header;
