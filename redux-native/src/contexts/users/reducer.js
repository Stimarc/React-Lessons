import {ADD_USER,REMOVE_USER} from "./constants"

export const initialState = [
    {id:1,title:'user1'},
    {id:2,title:'user2'},
    {id:3,title:'user3'},
];

export const reducer = (state,action) => {
    switch (action.type) {
     case ADD_USER:
         return [...state,action.user ];
     case REMOVE_USER:
         return state.filter(user => user.id !== action.user.id);
     default:
         return [ ...state ];
    }
 }
 