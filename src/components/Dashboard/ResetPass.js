import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useResetPasswordMutation } from "../../services/api/AuthApi";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ThreeCircles } from "react-loader-spinner";

const ResetPass = () => {
  const [resetPass, { error, isSuccess, isError, isLoading }] =
    useResetPasswordMutation();
  const [showPreviousPassword, setShowPreviousPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      toast.success("Password changed successfully");
    }
  }, [isSuccess, isLoading]);

  useEffect(() => {
    if (isError && !isLoading && error) {
      console.log(error);
      toast.error("Error occurred");
    }
  }, [isError, error, isLoading]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Handle form submission
    console.log(values);
    const payload = {
      oldPassword: values.previousPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    try {
      resetForm();
      await resetPass(payload);
      setSubmitting(false);
    } catch (error) {
      console.log("Error occurred while resetting the password", error);
      if (error.status === "FETCH_ERROR") {
        toast.error(`Error: ${error.error}`);
      }
    }
  };

  const handleTogglePreviousPasswordVisibility = () => {
    setShowPreviousPassword((prevValue) => !prevValue);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword((prevValue) => !prevValue);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevValue) => !prevValue);
  };

  return (
    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 p-4 relative">
      {isLoading ? (
        <div
          className="z-[10]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ThreeCircles
            height="100"
            width="100"
            color="#805AD5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : null}
      <Box w={{ base: "100%", lg: "50%" }} mx="auto">
        <Formik
          initialValues={{
            previousPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (values.newPassword !== values.confirmPassword) {
              errors.confirmPassword = "Passwords do not match";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <Field name="previousPassword">
                {({ field }) => (
                  <InputGroup>
                    <Input
                      disabled={isLoading}
                      {...field}
                      type={showPreviousPassword ? "text" : "password"}
                      focusBorderColor="#805AD5"
                      placeholder="Previous Password"
                      mb={4}
                    />
                    <InputRightElement>
                      {showPreviousPassword ? (
                        <FaEyeSlash
                          onClick={handleTogglePreviousPasswordVisibility}
                        />
                      ) : (
                        <FaEye
                          onClick={handleTogglePreviousPasswordVisibility}
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                )}
              </Field>
              <ErrorMessage
                name="previousPassword"
                component={FormErrorMessage}
              />

              <Field name="newPassword">
                {({ field }) => (
                  <InputGroup>
                    <Input
                      disabled={isLoading}
                      {...field}
                      type={showNewPassword ? "text" : "password"}
                      focusBorderColor="#805AD5"
                      placeholder="New Password"
                      mb={4}
                    />
                    <InputRightElement>
                      {showNewPassword ? (
                        <FaEyeSlash
                          onClick={handleToggleNewPasswordVisibility}
                        />
                      ) : (
                        <FaEye onClick={handleToggleNewPasswordVisibility} />
                      )}
                    </InputRightElement>
                  </InputGroup>
                )}
              </Field>
              <ErrorMessage name="newPassword" component={FormErrorMessage} />

              <Field name="confirmPassword">
                {({ field }) => (
                  <InputGroup>
                    <Input
                      disabled={isLoading}
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      focusBorderColor="#805AD5"
                      placeholder="Confirm Password"
                      mb={4}
                    />
                    <InputRightElement>
                      {showConfirmPassword ? (
                        <FaEyeSlash
                          onClick={handleToggleConfirmPasswordVisibility}
                        />
                      ) : (
                        <FaEye
                          onClick={handleToggleConfirmPasswordVisibility}
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                )}
              </Field>
              {formik.errors.confirmPassword && (
                <Box mt={2} color="red.500" fontSize="sm">
                  {formik.errors.confirmPassword}
                </Box>
              )}

              <Button type="submit" colorScheme="purple" w="100%">
                Reset
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default ResetPass;
