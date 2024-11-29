import { create } from "zustand";

export const useToDoStore = create((set, get) => ({
    todoList: [],
    addTask: (newTask) => {
        const allToDo = get().todoList;
        set({todoList: [...allToDo, newTask]})
    },

    deleteTask: (id) => {
        const allToDo = get().todoList;
        const allToDoAfterDelete = allToDo.filter((todo) => todo.id !== id);
        set({ todoList: allToDoAfterDelete })
    },

    todoIsCompleted: (idMarkedCompleted) => {
        const allToDo = get().todoList;
        const markedToDoCompleted = allToDo.map((todo) =>
            todo.id === idMarkedCompleted ? {...todo, isCompleted: !todo.isCompleted} : todo
        );
        set({ todoList: markedToDoCompleted })
    }
}))