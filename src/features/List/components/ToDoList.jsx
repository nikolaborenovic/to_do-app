import ToDoItem from "./ToDoItem";
import '../list.style.css'
import { useToDoStore } from "../../../store/todo/todo.store";

const ToDoList = () => {
    const {todoList} = useToDoStore();
    console.log(todoList)
    return(
        <div className="task_list">
            {todoList.map((task) =>(
                <ToDoItem
                task={task}/>
            ))}
        </div>
    
    )
}
export default ToDoList;