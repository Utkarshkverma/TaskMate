import React from 'react'

const AddTask = ({tasklist,setTaskList,task,setTask}) => {

  const handleSubmit = (e) => {

    e.preventDefault();

    if(task.id)
    {
       const date = new Date();
       const data = e.target.task.value;
       if(data.trim() !==''){
       const updateTask = tasklist.map((todo)=> (todo.id === task.id?{id:task.id, name:data,time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:{id:todo.id,name:todo.name,time:todo.time}))
       setTaskList(updateTask);
       setTask({});
       e.target.task.value = '';
       
       }
       else{
        alert('Please enter the task')
       }

    }
    else{
    const date = new Date();
    const data = e.target.task.value;
    if(data.trim() !==''){
    const newTask = {
      id: date.getTime(),
      name: data,
      time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...tasklist,newTask])
    setTask({});
    e.target.task.value = ''

    }

    else{
      alert('Please enter the task')
    }
  }
  }
  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name='task' value={task.name||""}
             autoComplete='off' placeholder='add Task' 
             onChange={e => setTask({...task, name:e.target.value})}/>
            <button type="submit">{task.id?"Update":"Add"}</button>
        </form>
    </section>
  )
}

export default AddTask
