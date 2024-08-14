function TodoItem({TodoName,date, onDeleteClick}) {

  return <div className="row">
  <div className="col-5">
      {TodoName}
  </div>
  <div className="col-5">
    {date}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger" onClick={()=>onDeleteClick(TodoName)}>Delete</button>
  </div>
</div>
}
export default TodoItem

