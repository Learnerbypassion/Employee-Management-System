import { React,useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const Addtask = () => {
  // Use States for assign all the data:
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsignto, setTaskAsignto] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState([]);
  const {employees, setUserData} = useContext(AuthContext)
  // submit handerler:
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      
    }
    //adding to the exixting employee data :
    const data = JSON.parse(localStorage.getItem('Employees'));
    data.forEach((elem)=>{
      
      console.log(elem.taskCounts.newTask)
      if(
        taskAsignto === elem.firstName &&
        taskTitle !== ''&&
        taskDescription !== ''&&
        taskDate !== ''&&
        taskAsignto !== ''&&
        category !== ''
      ){
        setNewTask(prev =>[...prev, newTask]);
        elem.tasks.push(newTask);
        elem.taskCounts.newTask += 1;
        localStorage.setItem('Employees', JSON.stringify(data));
        setUserData(prev => ({...prev , employees:data,}))
      }
    });
    
    // Clear the form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setTaskAsignto("");
    setCategory("");
  };
  
  return (
    <div>
      <div className="w-full h-auto flex items-center justify-center  bg-linear-to-r from-cyan-300 to-pink-50 ">
        <div className="w-1/3 justify-end flex h-[59%] ">
          <img
            src="../admnimg.png"
            alt="Admin"
            className="overflow-hidden  from-gray-50 to-gray-100 shadow-xl/50 border  w-[90%] h-[90%]"
          />
        </div>
        <form
          id="addForm"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <div className=" border p-5 rounded  m-2 gap-1 flex flex-col items-start justify-center bg-linear-to-r font-serif from-gray-50 via-gray-100 to-gray-200 shadow-xl/50">
              <h1>Task Title</h1>
              <input
                type="text"
                placeholder="Make a UI design"
                className="border rounded w-55 p-1"
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
              />
              <h1>Description</h1>
              <textarea
                className="w-55 border h-20"
                name=""
                id=""
                placeholder="Enter some infomation"
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
              ></textarea>
              <h1>Date</h1>
              <input
                type="date"
                className="border border-black rounded w-55 p-1  text-stone-400 font-normal"
                placeholder="dd/mm/yy"
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
              />
              <h1>Asign To</h1>
              <input
                type="text"
                placeholder="Name of the person"
                className="border rounded w-55 p-1"
                value={taskAsignto}
                onChange={(e) => {
                  setTaskAsignto(e.target.value);
                }}
              />
              <h1>Category</h1>
              <input
                type="text"
                placeholder="data-analysis, mail, editing"
                className=" w-55 p-1 border rounded"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <div className="flex justify-center w-full ">
                <button className="border-2 p-2 bg-black text-amber-50 rounded-2xl">
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addtask;
