import { create } from "zustand";

export const useToDoStore = create((set, get) => ({
    todoList: [],
    addTask: (newTask) => {
        const allToDo = get().todoList;
        set({todoList: [...allToDo, newTask]})
    }
}))