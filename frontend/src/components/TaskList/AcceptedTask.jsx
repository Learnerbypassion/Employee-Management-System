import { React, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptedTask = (props) => {
  const { employees, setUserData } = useContext(AuthContext);
  // console.log(employees)
  // console.log(props.empData.tasks[1].taskTitle);
  // console.log(props.title);

  // const [loggedInUserData, setloggedInUserData] = useState(null)
  // const dataUpdaterAffermatively = (e)=>{
  //   employees.forEach((emp) => {
  //     if(emp.firstName == props.empData.firstName){

  //       emp.tasks.map((tsk)=>{
  //         if(tsk.taskTitle == props.title)
  //         console.log(emp.taskCounts.active);
  //         tsk.active = false;
  //         tsk.completed = true;
  //         emp.taskCounts.active --;
  //         emp.taskCounts.completed++;

  //       })
  //     }

  //   });

  // }

  const dataUpdaterAffermatively = () => {
    const updatedEmployees = employees.map((emp) => {
      // match the employee
      if (emp.firstName === props.empData.firstName) {
        const updatedTasks = emp.tasks.map((tsk) => {
          // match the task
          if (tsk.taskTitle === props.title) {
            console.log(tsk.taskTitle, props.title);
            return {
              ...tsk,
              active: false,
              completed: true,
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
            active: emp.taskCounts.active - 1,
            completed: emp.taskCounts.completed + 1,
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
  const dataUpdaterNegetively = () => {
    const updatedEmployees = employees.map((emp) => {
      // match the employee
      if (emp.firstName === props.empData.firstName) {
        const updatedTasks = emp.tasks.map((tsk) => {
          // match the task
          if (tsk.taskTitle === props.title) {
            console.log(tsk.taskTitle, props.title);
            return {
              ...tsk,
              active: false,
              failed: true,
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
            active: emp.taskCounts.active - 1,
            failed: emp.taskCounts.failed + 1,
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
  }
  return (
    <div
      className={`h-full shrink-0 w-[24%] rounded-3xl flex flex-col gap-5 bg-gray-900 text-cyan-50  p-3`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold border-2 rounded-lg p-0.5 text-black bg-purple-100">
          {props.data.category}
        </h1>
        <span className="font-light text-sm">{props.data.taskDate}</span>
      </div>
      <h1 className="text-2xl font-bold">{props.data.taskTitle}</h1>
      <div id="taskLiscrollContol" className="overflow-y-auto">
        <p>{props.data.taskDescription}</p>
      </div>

      <div className={`flex  justify-between  px-2 mb-0.5`}>
        <button
          onClick={dataUpdaterAffermatively}
          className={`mt-2 px-2 rounded-2xl text-lg font-extralight transition-all
           bg-green-500 hover:bg-green-600
          `}
        >
          Mark as done
        </button>
        
        <button 
        onClick={dataUpdaterNegetively}
        className="mt-2 px-2 rounded-2xl bg-red-500 hover:bg-red-600 text-lg font-extralight">
          Fail to complete
        </button>
      </div>
    </div>
  );
};

export default AcceptedTask;
