import React, { useContext, useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import Login from "./components/Auth/Login.jsx";
import Employeedashboard from "./components/Dashboard/Employedashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext);
// localStorage.clear()
setLocalStorage()
  useEffect(() => {
    if (AuthData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const dataOfUser = JSON.parse(loggedInUser)
        setUser(dataOfUser.role);
        setloggedInUserData(dataOfUser.data)
      }
    }
  }, [AuthData.employees]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: "admin"}));
    } else if (AuthData) {
      const employee = AuthData.employees.find((e) => email == e.email && password == e.password);
      if(employee){
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee}));
      }
    } else {
      alert("The credential is not valid !!");
    }
  };
  const logoutHandler = ()=>{
    if(user != null){
      setUser(null);
      localStorage.setItem('loggedInUser', "");
      // window.location.reload();
    }
  }
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard logoutHandler={logoutHandler} />
      ) : (
        <Employeedashboard logoutHandler={logoutHandler} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
