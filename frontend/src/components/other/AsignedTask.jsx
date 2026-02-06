import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  
  const AuthData = useContext(AuthContext);
  return (
    <div id="taskLiscrollContol" className="h-53  bg-lime-100 mb-none flex flex-col ">
      <div className="flex justify-between p-3 bg-cyan-400  mt-3 rounded-2xl">
            <h1 className="text-xl w-1/5 items-center underline py-1 bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">Developer Name</h1>
            <h1 className="text-xl w-1/5 items-center underline py-1 bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">New Task</h1>
            <h1 className="text-xl w-1/5 items-center underline py-1 bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">Completed Task</h1>
            <h1 className="text-xl w-1/5 items-center underline py-1 bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">Active Task</h1>
            <h1 className="text-xl w-1/5 items-center underline py-1 bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">Failed Task</h1>
      </div>
      
      <div className="overflow-auto mt-1">
        {AuthData.employees.map((e, idx) => {
        return (
          <div key={idx} className="flex justify-between px-3   mt-3 rounded-2xl">
            <h1 className="text-xl w-1/5 items-center bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">{e.firstName}</h1>
            <h1 className="text-xl w-1/5 items-center bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">{e.taskCounts.newTask}</h1>
            <h1 className="text-xl w-1/5 items-center bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">{e.taskCounts.completed}</h1>
            <h1 className="text-xl w-1/5 items-center bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">{e.taskCounts.active}</h1>
            <h1 className="text-xl w-1/5 items-center bg-violet-400 px-1 mx-1 justify-center flex font-bold rounded-2xl shadow-sm shadow-teal-100 text-shadow-sm ">{e.taskCounts.failed}</h1>
          </div>
        );
      })}
      </div>  
    </div>
  );
};

export default AllTask;
