import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.svg";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link className="btn btn-ghost">
              <li>Home</li>
            </Link>
            <Link className="btn btn-ghost">
              <li>About</li>
            </Link>
            <Link className="btn btn-ghost">
              <li>Services</li>
            </Link>
            <Link className="btn btn-ghost">
              <li>Products</li>
            </Link>
            <Link className="btn btn-ghost">
              <li>Contact</li>
            </Link>
            {clicked ? (
              <>
                <Link className="btn btn-ghost">
                  <li>Login</li>
                </Link>
                <Link className="btn btn-ghost">
                  <li>Register</li>
                </Link>
              </>
            ) : (
              <Link className="btn btn-ghost">
                <li>Logout</li>
              </Link>
            )}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <Link className="btn btn-ghost">
            <li>Home</li>
          </Link>
          <Link className="btn btn-ghost">
            <li>About</li>
          </Link>
          <Link className="btn btn-ghost">
            <li>Services</li>
          </Link>
          <Link className="btn btn-ghost">
            <li>Products</li>
          </Link>
          <Link className="btn btn-ghost">
            <li>Contact</li>
          </Link>
          {clicked ? (
            <>
              <Link className="btn btn-ghost">
                <li>Login</li>
              </Link>
              <Link className="btn btn-ghost">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <Link className="btn btn-ghost">
              <li>Logout</li>
            </Link>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-end items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <AiOutlineShopping className="h-6 w-6"></AiOutlineShopping>
          </button>
          <button className="btn btn-ghost btn-circle">
            <AiOutlineSearch className="h-6 w-6"></AiOutlineSearch>
          </button>
          <button
            onClick={() => setClicked(!clicked)}
            className="btn bg-transparent text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
