import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="h-full shrink-0 w-[24%] rounded-3xl flex flex-col gap-5 bg-yellow-500 text-black p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold border-2 rounded-lg p-0.5 text-black bg-purple-100">
            {data.category}
          </h1>
          <span className="font-light text-sm">{data.taskDate}</span>
        </div>
        <h1 className="text-2xl font-bold">{data.taskTitle}</h1>
        <div id="taskLiscrollContol" className="overflow-y-auto">
          <p>
            {data.taskDescription}
          </p>
        </div>
        <div className='px-3 mt-1 flex items-center justify-center border-2 border-green-950 bg-green-700 shadow-sm rounded-2xl shadow-green-300 text-amber-50'><h1 className='text-xl font-bold px-2 py-1 text-shadow-lg font-mono'>Task Completed</h1></div>
      </div>
  )
}

export default CompleteTask