import React, { useContext } from "react";

const TasksListCards = (props) => {
  return (
    <div className="flex ">
      <div className="w-[45%] m-5 p-10 bg-red-300 rounded-2xl flex flex-col border-4 ">
        <div id="taskNumber" className="text-5xl">
          <span>{props.data.taskCounts.newTask}</span>
        </div>
        <div className="text-3xl font-semibold font-serif ">
          <h1>New Task</h1>
        </div>
      </div>
      <div className="w-[45%] m-5 p-10 bg-yellow-300 rounded-2xl flex flex-col border-4 ">
        <div id="taskNumber" className="text-5xl">
          <span>{props.data.taskCounts.completed}</span>
        </div>
        <div className="text-3xl font-semibold font-serif ">
          <h1>Completed</h1>
        </div>
      </div>
      <div className="w-[45%] m-5 p-10 bg-purple-300 rounded-2xl flex flex-col border-4 ">
        <div id="taskNumber" className="text-5xl">
          <span>{props.data.taskCounts.active}</span>
        </div>
        <div className="text-3xl font-semibold font-serif ">
          <h1>Active Task</h1>
        </div>
      </div>
      <div className="w-[45%] m-5 p-10 bg-sky-300 rounded-2xl flex flex-col border-4 ">
        <div id="taskNumber" className="text-5xl">
          <span>{props.data.taskCounts.failed}</span>
        </div>
        <div className="text-3xl font-semibold font-serif ">
          <h1>Failed</h1>
        </div>
      </div>
    </div>
  );
};

export default TasksListCards;
