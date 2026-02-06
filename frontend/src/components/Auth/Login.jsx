import React from "react";
import { useState } from "react";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    console.log("Form is submitted");  
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center w-full h-screen  bg-no-repeat bg-cover bg-linear-to-r from-fuchsia-400 via-teal-50 to-violet-900 ">
      <div className="flex  w-1/2 h-screen justify-center items-center">
        <div className="flex flex-col w-1/2 h-1/2 rounded-3xl backdrop-blur-3xl shadow-2xl justify-evenly items-center ">
          <h1 className="font-bold text-4xl">Log<span className="underline">In</span></h1>
          <form
            id="loginForm"
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-nowrap flex-col  p-2 justify-center items-center  rounded-xl  "
          >
            <input
              required
              className="border-b-2 p-2 text-xl outline-none w-full "
              type="email"
              placeholder="Email"
              value={email}
              onChange={(ele) => {
                setEmail(ele.target.value);
              }}
            />
            <input
              required
              className="border-b-2 p-2 text-xl outline-none mt-1 w-full "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ele) => {
                setPassword(ele.target.value);
              }}
            />
            <button className=" hover:bg-fuchsia-50 duration-400 ease-in-out  p-2 rounded-xl text-xl outline-none mt-3 bg-transparent  shadow-sm text-shadow-cyan-300  ">
              <span className=" font-medium">Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
