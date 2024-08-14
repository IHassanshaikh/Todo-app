import { useRef } from "react";

function AppTodo({onNewItem}) {

  const todonameelement = useRef()
  const tododateelement = useRef()

  const handleAddButtonClicked = (event) => {
    event.preventDefault()
    const todoName = todonameelement.current.value;
    const todoDate = tododateelement.current.value;
    onNewItem(todoName,todoDate);
    
  }

  return  <form className="row addtodo">
  <div className="col-5">
  <input className="list-input" ref={todonameelement} type="search" placeholder="Enter yor todo" aria-label="Search"/>
  </div>
  <div className="col-5">
    <input type="date" ref={tododateelement} />
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>Add</button>
  </div>
</form>
}

export default AppTodo;