import DeleteImg from '../../../assets/delete.png'
import EditImg from '../../../assets/edit.png'
import '../list.style.css'
import { useToDoStore } from "../../../store/todo/todo.store";
import { useState } from "react";

const ToDoItem = ({task}) => {
    const {deleteTask, todoIsCompleted, todoEdit} = useToDoStore();
    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(task.title)
    
    const handelSaveClick = () => {
        todoEdit(task.id, editedTitle)
        setIsEditing(false)
    }

    const handleToDoDelete = () => {
        deleteTask(task.id)
    }

    const handleCompletedToDo = () => {
        todoIsCompleted(task.id)
    }

    return (
        <div className='item_holder'>
            {isEditing && 
                <div className='edit_item'>
                    <input className='edit_input' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
                    <button className='edit_save' onClick={() => handelSaveClick()}>Sacuvaj</button>
                </div>
            }

            {!isEditing && 
                <>
                    <div className='item_text'>
                        <svg
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        stroke="#22C55E"
                        fill={task.isCompleted ? '#22C55E' : '#ffffff'}
                        onClick={() => handleCompletedToDo()}
                        >
                            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                        </svg>
                        <p style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}>{task.title}</p>
                    </div>
                    <div className='task_img'>
                        <img src={EditImg} onClick={() => setIsEditing (!isEditing)}/>
                        <img src={DeleteImg} onClick={() => handleToDoDelete()}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ToDoItem;