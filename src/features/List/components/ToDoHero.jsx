import '../list.style.css'
import { useToDoStore } from "../../../store/todo/todo.store";

const ToDoHero = () => {
    const {todoList} = useToDoStore();
    const todoIsCompleted = todoList.filter((item) => item.isCompleted).length;
    const todoAmount = todoList.length;
    return(
        <div className='todo_hero_holder'>
            <div>
                <h2>Gotovi taskovi!</h2>
                <h3>Nastavi tako!</h3>
            </div>
            <span>{todoIsCompleted}/{todoAmount}</span>
        </div>
    )
}
export default ToDoHero;