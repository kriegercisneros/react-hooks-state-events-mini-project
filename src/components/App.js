import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  // const [formInput, setFormInput] = useState("")

  const visibleTasks = tasks.filter(t =>
    category==="All" || t.category === category 
  )
  // console.log(visibleTasks)

  function onTaskFormSubmit(newTaskObj){
    const newTaskArray = [...tasks, newTaskObj]; 
    setTasks(newTaskArray);
  }
 
  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter((task)=> task.text !== deletedTask));
    console.log(deletedTask)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelected={setCategory}/>
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList onDeleteTask={handleDeleteTask}  tasks={visibleTasks}/>
    </div>
  );
}

export default App;
