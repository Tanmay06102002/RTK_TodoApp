import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid : creates unique id's

const initialState = {
    todos: [{id: 1, text: "Hello world", todoStatus: false, editableStatus: false}]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                todoStatus: false,
                editableStatus: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },

        updateTodoText: (state, action) => {
            const { id, newText } = action.payload;
            // Find the todo by id and update its text
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = newText;
            }
        },

        updateTodoStatus: (state, action) => {
            const { id, isComplete } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo){
                todo.todoStatus = isComplete
            }
        },

        updateEditableStatus: (state, action) =>{
            const {id, isEditable} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo && !todo.todoStatus){
                todo.editableStatus = isEditable
            }
        } 

    }
})

export const {addTodo, removeTodo, updateTodoText, updateTodoStatus, updateEditableStatus} = todoSlice.actions

export default todoSlice.reducer