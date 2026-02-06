import React from 'react'
import Header from '../other/Header'
import TasksListCards from '../other/TasksListCards'
import ListOfTasks from '../TaskList/ListOfTasks'


const Employeedashboard = (props) => {
  return (
    <div className='w-full  h-screen'>
        <Header logoutHandler={props.logoutHandler} name={props.data.firstName} />
        <TasksListCards data={props.data} />
        <ListOfTasks data={props.data}/>
    </div>
  )
}

export default Employeedashboard