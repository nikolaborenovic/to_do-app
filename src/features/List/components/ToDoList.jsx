import ToDoItem from "./ToDoItem";
import '../list.style.css'

const ToDoList = () => {

    return(
        <div className="task_list">
            <ToDoItem/>
            <ToDoItem/>
        </div>
    
    )
}
export default ToDoList;