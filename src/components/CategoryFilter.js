import React from "react";


function CategoryFilter({categories, selectedCategory, onSelected}) {
  
  const buttons = categories.map((category)=>{
    //create a button element that have unique keys equal to 
    //the name of item
    const className = category === selectedCategory ? "selected" : null;
    return (<button 
              key={category} 
              className={className}
              onClick={()=>(onSelected(category))}
            >{category}</button>)
      //assign our clicked button a class of "Selected"
      //filter tasks from state and return an array
      //of tasks whos categories match the selected button's
      //key
    
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
