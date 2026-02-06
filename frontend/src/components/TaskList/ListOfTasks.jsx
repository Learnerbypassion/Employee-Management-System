import React from "react";
import AcceptedTask from "./AcceptedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const ListOfTasks = ({data}) => {
  // console.log(data)
  return (
    <div
      id="taskLiscrollContol"
      className="w-auto flex items-center justify-start flex-nowrap gap-5 overflow-x-auto  h-[45%] py-3 m-5 mt-10"
    >
      {data.tasks.map((elem, idx)=>{
        // console.log(data)
        if(elem.newTask){
          return <NewTask key={idx} data={elem} empData={data}/>
        }
        if(elem.active){
          return <AcceptedTask key={idx} data={elem} empData={data} title={elem.taskTitle} />
        }
        
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  );
};

export default ListOfTasks;
