import { Avatar, Input } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../features/user/UserSlice";

const ProfilePage = () => {
  const user = useSelector(getUser);

  const { fullName, email, role, totalFine, issuedBooks, booksUsed, photo } =
    user?.data[0] ?? {};

  const numIssuedBooks = issuedBooks.length;
  const numUsedBooks = booksUsed.length;

  return (
    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form>
        <div className="bg-white shadow rounded-lg ring-1 ring-white/10 ring-inset">
          <div className="p-8 pb-0">
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              Profile
            </h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Input
                    isDisabled
                    id="username"
                    value={fullName}
                    sx={{
                      "&:disabled": {
                        opacity: "1",
                        cursor: "not-allowed",
                        boxShadow: "none",
                        borderColor: "inherit",
                        _hover: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                        _focus: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Input
                    isDisabled
                    id="email"
                    value={email}
                    sx={{
                      "&:disabled": {
                        opacity: "1",
                        cursor: "not-allowed",
                        boxShadow: "none",
                        borderColor: "inherit",
                        _hover: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                        _focus: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="total-fine"
                >
                  Total Fine
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Input
                    isDisabled
                    id="total-fine"
                    value={totalFine?.toString()}
                    sx={{
                      "&:disabled": {
                        opacity: "1",
                        cursor: "not-allowed",
                        boxShadow: "none",
                        borderColor: "inherit",
                        _hover: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                        _focus: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="role"
                >
                  Role
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Input
                    isDisabled
                    id="role"
                    value={role}
                    sx={{
                      "&:disabled": {
                        opacity: "1",
                        cursor: "not-allowed",
                        boxShadow: "none",
                        borderColor: "inherit",
                        _hover: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                        _focus: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="issued-books"
                >
                  Number of Issued Books
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Input
                    isDisabled
                    id="issued-books"
                    value={numIssuedBooks.toString()}
                    sx={{
                      "&:disabled": {
                        opacity: "1",
                        cursor: "not-allowed",
                        boxShadow: "none",
                        borderColor: "inherit",
                        _hover: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                        _focus: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="used-books"
                >
                  Number of Used Books
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Input
                    isDisabled
                    id="used-books"
                    value={numUsedBooks.toString()}
                    sx={{
                      "&:disabled": {
                        opacity: "1",
                        cursor: "not-allowed",
                        boxShadow: "none",
                        borderColor: "inherit",
                        _hover: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                        _focus: {
                          boxShadow: "none",
                          borderColor: "inherit",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="user_avatar"
                >
                  Avatar
                </label>
                <div className="flex items-center">
                  <Avatar name={fullName} src={photo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
