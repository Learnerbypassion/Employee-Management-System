import React,{useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = (props) => {
  const { employees, setUserData } = useContext(AuthContext);

  // console.log(props.empData)
  // console.log(props.data.newTask)
  const dataUpdater = () => {
    const updatedEmployees = employees.map((emp) => {
      // match the employee
      if (emp.firstName === props.empData.firstName) {
        const updatedTasks = emp.tasks.map((tsk) => {
          // match the task
          if (tsk.taskTitle === props.data.taskTitle) {
            // console.log(tsk.taskTitle, props.title);
            return {
              ...tsk,
              active: true,
              newTask: false,
            };
          } else {
            return tsk;
          }
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active + 1,
            newTask: emp.taskCounts.newTask - 1,
          },
        };
      } else {
        return emp;
      }
    });
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }));
    localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
    // find updated logged-in employee
    const updatedLoggedInUser = updatedEmployees.find(
      (emp) => emp.firstName === props.empData.firstName,
    );
    // update loggedInUser in localStorage
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        data: updatedLoggedInUser,
      }),
    );
  };

  return (
    <div className="h-full shrink-0 w-[24%] rounded-3xl flex flex-col gap-5 bg-purple-900 text-cyan-50 p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold border-2 rounded-lg p-0.5 text-black bg-purple-100">
            {props.data.category}
          </h1>
          <span className="font-light text-sm">{props.data.taskDate}</span>
        </div>
        <h1 className="text-2xl font-bold">{props.data.taskTitle}</h1>
        <div id="taskLiscrollContol" className="overflow-y-auto">
          <p>
            {props.data.taskDescription}
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <button
          onClick={dataUpdater}
           className='border-2 rounded-2xl py-0.5 px-2 bg-teal-400 hover:bg-teal-500 text-black shadow-sm shadow-indigo-200 text-xl font-semibold'> Accept The Task</button>
        </div>
      </div>
  ) 
}

export default NewTask