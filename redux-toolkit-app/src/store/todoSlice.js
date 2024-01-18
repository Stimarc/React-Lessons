import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function(_, { rejectWithValue }) {
    try {
      const response = await fetch(url + '?_limit=10');

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(url + id, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error();
      }

      dispatch(delTodo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async function (title, { rejectWithValue, dispatch }) {
    try {
      const newTodo = {
         title,
         completed: false,
         userId: 1,
      }
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      dispatch(addTodo(data));

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus = createAsyncThunk(
  'todos/toggleStatus',
  async function (id, { rejectWithValue, dispatch , getState }) {
    const todo = getState().todosData.todos.find(todo => todo.id === id);
    try {
      
      const response = await fetch(url,+ id, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: !todo.completed
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  

      if (!response.ok) {
        throw new Error();
      }

      dispatch(toggleCompleted(id));

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
     state.todos.push(action.payload);
    },
    delTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted(state, action) {
      const toggledId = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === toggledId ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { addTodo, delTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
