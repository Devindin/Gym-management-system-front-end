import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup"; // For validation
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../firebase"; // Firebase setup
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import InputPassword from "../components/InputPassword";
import Logo from "../assets/Logo.png";

function SignUp() {
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    role: Yup.string().required("Role is required"),
  });

  const handleSignUp = async (values) => {
    try {
      const { name, email, password, role } = values;

      // Firebase Authentication - Create User
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user info in Realtime Database
      await set(ref(database, `users/${user.uid}`), {
        name,
        email,
        role, // Store the role
      });

      navigate("/login"); // Redirect to login on success
    } catch (error) {
      setSignupError(error.message); // Handle errors (e.g., email already in use)
    }
  };

  return (
    <div className="bg-[#1E1B4B]  w-full flex items-center justify-center">
      <div className="w-full max-w-md p-5">
        <div className="flex justify-center mb-5">
          <img src={Logo} className="w-[200px]" alt="Logo" />
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "", // Add role to initial values
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({ handleChange, values, errors, touched }) => (
            <Form className="flex flex-col w-full space-y-5">
              <InputField
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
                handleChange={handleChange}
                values={values.name}
                error={touched.name && errors.name}
              />
              <InputField
                label="E-mail"
                name="email"
                type="email"
                placeholder="E-mail"
                handleChange={handleChange}
                values={values.email}
                error={touched.email && errors.email}
              />
              <InputPassword
                label="Password"
                name="password"
                placeholder="Password"
                handleChange={handleChange}
                values={values.password}
                error={touched.password && errors.password}
              />
              <InputPassword
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm Password"
                handleChange={handleChange}
                values={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <div>
                <label htmlFor="role" className="text-white text-sm">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full mt-1 p-2 border rounded"
                  value={values.role}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                  <option value="trainer">Trainer</option>
                </select>
                {touched.role && errors.role && (
                  <p className="text-red-600 text-[12px] mt-1">{errors.role}</p>
                )}
              </div>
              {signupError && (
                <p className="text-red-600 text-[12px] mt-1">{signupError}</p>
              )}
              <div className="flex justify-end mr-2">
                <PrimaryButton
                  label="Sign Up"
                  bgcolor="#A5B4FC"
                  textcolor="#ffffff"
                  type="submit"
                />
              </div>
              <div className="w-full flex flex-row justify-end mt-3">
                <h5 className="text-[12px] text-white mr-2">
                  Already have an account?{" "}
                  <span className="text-[#A5B4FC]">
                    <Link to="/login">Login</Link>
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

export default SignUp;
