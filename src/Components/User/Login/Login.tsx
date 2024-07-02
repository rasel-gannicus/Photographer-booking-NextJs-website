"use client";
import Link from "next/link";
import googleLogo from "@/assets/img/Icons/google.svg";
import facebookLogo from "@/assets/img/Icons/facebook (1).svg";
import githubLogo from "@/assets/img/Icons/github.svg";
import Image from "next/image";
import "./login.css";
import { SetStateAction, useState } from "react";
import auth from "@/utils/firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  //   const navigate = useNavigate();
  //   let location = useLocation();
  //   let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this function will get email from user and will reserve it to 'email' state
  function handleEmail(e: { target: { value: SetStateAction<string> } }) {
    setEmail(e.target.value);
  }

  // this function will get password from user and will reserve it to 'password' state
  function handlePassword(e: { target: { value: SetStateAction<string> } }) {
    setPassword(e.target.value);
  }

  // sign up with 'google'
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  // sign up with 'facebook'
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  // sign up with 'github'
  const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);

  let errorText = document.querySelector(".error-message p");
  let spinnerSignup = document.querySelector(".spinner-signup");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
    if (user || user2 || user3 || user4) {
      //   navigate("/");
      //   navigate(from, { replace: true });
      console.log('got login');
    }

    return;
  }

  if (user || user2 || user3 || user4) {
    // navigate("/");
    // navigate(from, { replace: true });
    console.log("Login Success !");
  }
  if (error) {
    // errorText.innerText = `${error.message}`;
    // spinnerSignup.style.display = "none";
    console.log(error);
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#4A4B7C] sm:text-3xl">
          Log in now
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Login now to get the access of you account
        </p>

        <form
          action="#"
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">
            Log in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                onBlur={e => handleEmail(e)}
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                onBlur={e => handlePassword(e)}
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-[#4A4B7C] px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link href="/signup" className="font-bold text-indigo-500 mx-1">
              Sign Up
            </Link>
          </p>

          {/* --- Social Login --- */}
          <div className=" ">
            <div className="or-div">
              <hr />
              <p>Or</p>
            </div>
            <div className="social-login-div text-center">
              <p className="my-5">Sign in using</p>
              <div className="social-login-div-icon">
                <div
                  onClick={() => signInWithGoogle()}
                  draggable
                  className="social-login"
                >
                  <Image src={googleLogo} alt="" />
                </div>
                <div
                  onClick={() => signInWithFacebook()}
                  draggable
                  className="social-login"
                >
                  <Image src={facebookLogo} alt="" />
                </div>
                <div
                  onClick={() => signInWithGithub()}
                  draggable
                  className="social-login"
                >
                  <Image src={githubLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
