import React from 'react'

const ShowTask = ({tasklist,setTaskList,task,setTask}) => {

  const handleEdit = (id) =>{
    const taskToEdit = tasklist.find((task) => task.id === id);
    setTask(taskToEdit);
    
    
  }

  const handleDelete = (id)=>{
    const updatedTaskList = tasklist.filter(todo =>todo.id !== id)
    setTaskList(updatedTaskList)
  }
 
  return (
    <section className='showTask'>
      <div className="head">
        <div>
          <span className='title'>title</span>
          <span className='count'>{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={()=>setTaskList([])}>Clear All</button>
      </div>
      <ul>
       {
        tasklist.map((todo) => (
          <li  key={todo.id}>
          <p>
            <span className='name'>{todo.name}</span>
            <span className='time'>{todo.time}</span>
          </p>
          <i className='bi bi-pencil-square' onClick={()=>handleEdit(todo.id)}></i>
          <i className='bi bi-trash' onClick={()=>handleDelete(todo.id)}></i>
        </li>
        ))
       }


        
      </ul>
    </section>
  )
}

export default ShowTask
