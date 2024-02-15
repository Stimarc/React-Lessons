import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id:1,text:'todo 1', completed:false},
            {id:2,text:'todo 2', completed:false},
        ],
    },
    reducers: {
        addTodo(state,action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,   
            })
        },
        toggleCompleted(state,action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state,action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
    }
});

export const {addTodo,toggleCompleted,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;