import { useState } from 'react'
import trashIcon from './trash.svg'

function ListItem(props){
    return (
      <div className='list-item row jc-space-between'>
        <span className={props.itemData.isComplete?"task-complete":""}
        onClick={()=>props.markComplete(props.index)}>{props.itemData.description}</span>
        <img className='delete-icon' src={trashIcon} onClick={()=>props.deleteTask(props.index)}/>
      </div>
    )
}

function App() {

  const [taskInput,updateTaskInput]=useState("");
  const [toDoList,updateToDoList] = useState([])

  const addNote = () =>{
    toDoList.push({description : taskInput, isComplete:false})
    updateToDoList(toDoList)
    updateTaskInput("")
  }

  const inputKeyDown = (event) =>{
    if(event.keyCode===13)
      addNote();
  }

  const markComplete = (index) =>{
      const list = [...toDoList]
      // list[index].isComplete=true;
      list[index].isComplete = !list[index].isComplete
      updateToDoList(list)
  }

  const deleteTask =(index)=> {
    const newList = toDoList.filter((item,i)=>i!==index)
    updateToDoList(newList)
  }

  return (
    <div className='app-background'>
        <p className='heading-text'>React To Do List App</p>
        <div className='task-container'>
            <div>
               <input className='text-input' value={taskInput} onKeyDown={inputKeyDown}
               onChange={(event)=>updateTaskInput(event.target.value)}/>
               <button className='add-button' onClick={addNote}>Add</button>
            </div>
            {toDoList?.length? toDoList.map((toDoObject,index)=>

            <ListItem index={index} itemData={toDoObject} deleteTask={deleteTask} markComplete={markComplete}/>) : <p className='no-item-text'>No items added yet.</p>}
            
        </div>
        <p className='footer-text'>Arshit Gautam</p> 
    </div>
  ) 
}

export default App
