import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
import InputPassword from "../components/InputPassword";
import Logo from "../assets/Logo.png";

function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const LoginSchema = Yup.object().shape({
    userID: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lower letter")
      .matches(/[A-Z]/, "Password requires a upper letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
  });
  return (
    <div className="bg-[#1E1B4B] h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md p-5">
        <div className="flex justify-center mb-5">
          <img src={Logo} className="w-[200px]" alt="Logo" />
        </div>
        <Formik
          initialValues={{
            userID: "",
            password: "",
          }}
          validationSchema={LoginSchema}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form className="flex flex-col w-full space-y-5">
              
              <InputField
                label="E mail"
                name="email"
                type="text"
                placeholder="E mail"
                handleChange={handleChange}
                values={values}
              />

              <InputPassword
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                values={values}
              />
             
              {loginError && (
                <p className="text-red-600 text-[12px] mt-1">{loginError}</p>
              )}

              <div className="flex justify-end mr-2">
                <PrimaryButton
                  label="Login"
                  bgcolor="#A5B4FC"
                  textcolor="#ffffff"
                  type="submit"
                />
              </div>

              <div className="w-full flex flex-row justify-end mt-3 ">
                <h5 className="text-[12px] text-white mr-2">
                Already have an account?{" "}
                  <span className="text-[#A5B4FC]">
                    <Link to="/signup">Sign up</Link>
                  </span>
                </h5>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
