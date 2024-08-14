import TodoItem from "./Todoitem"
import AppTodo from "./AddTodo"

const Todoitems = ({todoitems, onDeleteClick}) => {
  return(
    <div className="container">
        {todoitems.map((item,index) =><TodoItem TodoName = {item.name} date = {item.duedate} key={index}
        onDeleteClick={onDeleteClick}></TodoItem>)}
    </div> 
  )
}

export default Todoitems