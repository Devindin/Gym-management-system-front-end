import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth method
import { auth, database } from "../firebase"; // Import the initialized Firebase auth instance and database
import { ref, get } from "firebase/database"; // For fetching user data
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import InputPassword from "../components/InputPassword";
import Logo from "../assets/Logo.png";


function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lower letter")
      .matches(/[A-Z]/, "Password requires an upper letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
  });

  const handleLogin = async (email, password) => {
    try {
      // Sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user role from Realtime Database
      const userRef = ref(database, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const role = userData.role;
        const name = userData.name; 
        

        // Navigate based on role
        if (role === "trainer") {
          navigate("/trainerDashBoard", {
            state: { name, email },
          });
        } else if (role === "member") {
          navigate("/memberDashBoard", { 
            state: { name, email }, 
          });
        } else if (role === "admin") {
          navigate("/admindashBoard");
        } else {
          throw new Error("Unknown user role.");
        }
      } else {
        throw new Error("User data not found.");
      }
    } catch (error) {
      setLoginError("Invalid email or password. Please try again."); // Handle errors
    }
  };

  return (
    <div className="bg-[#1E1B4B] h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md p-5">
        <div className="flex justify-center mb-5">
          <img src={Logo} className="w-[200px]" alt="Logo" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={({ email, password }) => {
            handleLogin(email, password); // Trigger login function
          }}
        >
          {({ handleChange, values }) => (
            <Form className="flex flex-col w-full space-y-5">
              <InputField
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
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
              <div className="w-full flex flex-row justify-end mt-3">
                <h5 className="text-[12px] text-white mr-2">
                  Don't have an account?{" "}
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
