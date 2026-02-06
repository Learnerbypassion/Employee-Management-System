import React from "react";
import Header from "../other/Header";
import Addtask from "../other/Addtask";
import AllTask from "../other/AsignedTask";
const AdminDashboard = (props) => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Header name={"SohamTheBoss"} logoutHandler={props.logoutHandler} />
      <Addtask />
      <AllTask/>  
    </div>
  );
};

export default AdminDashboard;
