import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, text: 'todo1', completed: false },
            { id: 2, text: 'todo2', completed: false },
            { id: 3, text: 'todo3', completed: false },
            { id: 4, text: 'todo4', completed: false },
        ]
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
        },
        delTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleCompleted(state, action) {
            const toggledId = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === toggledId ? { ...todo, completed: !todo.completed } : todo
            );
        },
    }
});

export const { addTodo, delTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;