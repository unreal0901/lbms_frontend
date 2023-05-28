import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="page-container p-5">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-300 text-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                    : "text-purple-500 hover:bg-purple-50 hover:text-purple-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                }
                to="profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-400 group-hover:text-purple-500 flex-shrink-0 -ml-1 mr-3"
                  role="img"
                >
                  <title id="af8habarkx5shnoicp069hy2mudtd1df">
                    Profile icon
                  </title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="truncate">Profile</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-300 text-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                    : "text-purple-500 hover:bg-purple-50 hover:text-purple-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                }
                to="reset-password"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-400 group-hover:text-purple-500 flex-shrink-0 -ml-1 mr-3"
                  role="img"
                >
                  <title id="a2jo40z6uo6fzaclte3fubqu1wa0iz8j">
                    Password icon
                  </title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
                <span className="truncate">Reset Password</span>
              </NavLink>
            </nav>
          </aside>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideNav;
