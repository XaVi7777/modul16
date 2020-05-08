import { ADD_COMMENT, DELETE_COMMENT } from './types';

let initialState = []

if (localStorage.comments) {
  try {
    initialState = JSON.parse(localStorage.comments)
  } catch (err) {
    initialState.push({ error: 'ошибка в чтении данных' })
  }
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:

      const newState = [...state, action.payload];
      localStorage.setItem('comments', JSON.stringify(newState));

      return newState;
    case DELETE_COMMENT:

      const newStateAfterDelete = action.payload;
      localStorage.setItem('comments', JSON.stringify(newStateAfterDelete));

      return newStateAfterDelete;
      
    default: return state
  }
}
