import Button from '../../components/Button/Button'
import { useToDoStore } from '../../store/todo/todo.store'
import './create.style.css'

const Create = () => {
    const {addTask, todoList} = useToDoStore();
    console.log(todoList, 'to do lista')
    const handleSubmit = (event) => {
        event.preventDefault()
        const value = event.target.todo.value
        const newTodo = {
            id: Math.random().toString(36).substring(7),
            title: value,
            isCompleted: false
        }
        addTask(newTodo)
        event.target.reset()
        
    }
    
    return(
        <div className='create_holder'>
            <h2>Koji je tvoj sledeci task?</h2>
            <form className='create_form' onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    <input type='text' name='todo' placeholder='upisi tekst'/>
                </label>
                <Button label='Sacuvaj' />
            </form>
            
        </div>
    )
}
export default Create;