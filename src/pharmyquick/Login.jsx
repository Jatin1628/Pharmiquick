import React from "react";
import Navbar from "./Navbar";
import Banner from "../assets/uploads/Banner.png"


const Login = () => {
  return (
    <div>
        <Navbar />
      <div className="h-screen">
        <div className="border-2 rounded-3xl shadow-2xl w-[28%] h-[80%] mt-10 mx-auto flex-col flex">
          <img
            className="rounded-t-3xl w-full h-36"
            src={Banner}
            alt=""
          />

          <div className="flex flex-col items-center m-5">
            <p className="text-2xl font-semibold p-2 text-green-500">
              Login or Sign Up
            </p>
            <input
              className="flex mt-5 px-10 py-2 border-2 rounded"
              placeholder="Enter Your number"
              type="text"
            />
            <button className="m-5 bg-green-500 text-white font-semibold px-24 py-2 border-2 border-green-500 rounded">
              Continue
            </button>
            <p className="text-green-500 cursor-pointer font-semibold">Trouble Logging in?</p>
          </div>
          <p className="mt-12 mx-5">
            By continuing you agree to our{" "}
            <b className="text-green-500 cursor-pointer">terms and privacy policy</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
