import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const [tasklist, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [task, setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  },[tasklist]);


  return (
   <>
   <Header/>
   <AddTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask}/>
   <ShowTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask}/>
   </>
  );
}

export default App;
