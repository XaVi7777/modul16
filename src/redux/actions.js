import { ADD_COMMENT, DELETE_COMMENT } from './types';
import showDate from '../showdate';
import showTime from '../showtime';

export const addComment = (text, author) => {

  return {
    type: ADD_COMMENT,
    payload: {
      id: Date.now(),
      text,
      author,
      date: showDate(),
      time: showTime()
    }
  }
}

export const deleteComment = (id) => {
  
  return {
    type: DELETE_COMMENT,
    id,
  }
}
