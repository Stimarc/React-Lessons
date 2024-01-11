export const store = { count: 0 };

const DECREMENT = 'decrement';
const INCREMENT = 'increment';

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
export const increment = (payload) => ({
  type: INCREMENT,
  payload,
});

export const reducer = (state,action)=> {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      }
    case INCREMENT:
      return {
      ...state,
      count: state.count + action.payload,
    }  
      default:
        return {...state }
  }
}


