import { useDispatch,useSelector } from "react-redux"
import {MdDeleteForever} from "react-icons/md";
import { useState } from "react";
import {addTask, deleteTask} from "../Store";
export const Todo = ()=> {

  // const state = useSelector((state)=> state); // return the all task 
  const tasks = useSelector((state)=> state.task);
  console.log("state is:", tasks);

  

  // usetstate hook
  const[task, setTask] = useState("");

  // dispatch
  const dispatch = useDispatch();

  // handle form submit
  const handleFormSubmit = (e)=> {
    e.preventDefault;
    dispatch(addTask(task));
    return setTask(" ")
  }


  const handleTaskDelete = (id)=> {
    return dispatch(deleteTask(id))
  }




  return(
    <>
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>
        <div className="row">
          <form action={handleFormSubmit}>
            <input type="text" id="input-box" placeholder="add a new task"
            value={task}
            onChange={(e)=> setTask(e.target.value)}
             />
            <button>Add Task</button>
          </form>
        </div>
        <ul id="list-container">
          {tasks.map((item,index)=> {
            return(
              <li key={index}>
                <p>
                  {index}:{item}
                </p>

                <div>
                  <MdDeleteForever
                  className="icon-style"
                  onClick={()=> handleTaskDelete(index)}
                  />
                </div>
              </li>
          )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}