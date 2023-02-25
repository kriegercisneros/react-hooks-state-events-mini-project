import React from "react";
import Task from "./Task";
//do we want props there instead of tasks
function TaskList({tasks, onDeleteTask}) {
  const taskList = tasks.map((task) => (
    <Task 
      key = {task.text}
      text = {task.text}
      category ={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));
  return <div className="tasks"> {taskList} </div>;
  
}
export default TaskList;
