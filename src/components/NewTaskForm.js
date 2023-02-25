import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("hey");
  const [category, setCategory] = useState("Code")

  //where am i going to write my elistener for my submit?
  //how am i going to target the input values for details 
  //and category?
  //event listener for onChange for the details input
  

  const selectElements = categories.filter((category)=>{
    //so long as category doesn't equal "ALL", create
    //an option element inside of select element for each
    //category
    return category === "All" ? false : category
  });
  const selectElementsDiv = selectElements.map((element)=>{
    return <option key={element} value={element}>{element}</option>
  });

  function handleSubmit(e){
    e.preventDefault()
    const newTaskObj = {
      text: details,
      category: category
    }
    onTaskFormSubmit(newTaskObj)
  }
  
  
  //newTaskObj needs to get into task list
  //create a callback that gets passes as a prop up to app, 
  //then down to TaskList then down to Task
  // console.log(newTaskObj)
  // console.log(details)
  // console.log(category)
  // console.log(selectElements)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>{setDetails(e.target.value)}}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>{setCategory(e.target.value)}}>
          {selectElementsDiv}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
