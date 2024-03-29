import React from "react";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
// import Signup from "./components/SignupForm/Signup";
import Login from "../src/components/Login/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RequireUser from "../src/components/Auth/RequireUser";

// Front Page for layout [shared layout]
import SideWallpaper from "../src/components/SideWallpaper/SideWallpaper";

// Shared layout for main page it acts as top navbar
import Topnav from "../src/components/Topnav/Topnav";

import { ChakraProvider } from "@chakra-ui/react";
// import theme from "./theme";
import Books from "./components/Books/Books";
import LibraryBooks from "./components/LibraryBooks/LibraryBooks";
import Students from "./components/Student/Students";
import RoleBased from "./components/Auth/RoleBased";
import IssuedBooks from "./components/Books/IssuedBooks/IssuedBooks";
import ProfilePage from "./components/Dashboard/ProfilePage";
import SideNav from "./components/Dashboard/SideNav";
import ResetPass from "./components/Dashboard/ResetPass";
// import Editors from "./Editors";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SideWallpaper />}>
        <Route index element={<Login />} />
        {/* <Route path="register" element={<Signup />} /> */}
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        path="/app"
        element={
          <RequireUser>
            <Topnav />
          </RequireUser>
        }
      >
        <Route index element={<ProfilePage />} />

        <Route path="profile" element={<ProfilePage />} />

        <Route
          path="dashboard"
          element={
            <RequireUser>
              <SideNav />
            </RequireUser>
          }
        >
          <Route index element={<ProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="reset-password" element={<ResetPass />} />
        </Route>

        <Route
          path="add-books"
          element={
            <RequireUser>
              <RoleBased role="admin">
                <Books />
              </RoleBased>
            </RequireUser>
          }
        />

        <Route
          path="books"
          element={
            <RequireUser>
              <LibraryBooks />
            </RequireUser>
          }
        />

        <Route
          path="students"
          element={
            <RequireUser>
              <RoleBased role="admin">
                <Students />
              </RoleBased>
            </RequireUser>
          }
        />

        <Route
          path="issuedBooks"
          element={
            <RequireUser>
              <RoleBased role="user">
                <IssuedBooks />
              </RoleBased>
            </RequireUser>
          }
        />
      </Route>
      {/* For checking the editor of draftjs */}
      {/* <Route path="editor" element={<Editors />} /> */}
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider>
      <CookiesProvider>
        <RouterProvider router={router} />
        <div id="modal-root"></div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </CookiesProvider>
    </ChakraProvider>
  );
}

export default App;
