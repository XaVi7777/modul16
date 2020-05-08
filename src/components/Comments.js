import React from 'react';
import Comment from './Comment';
import Error from './Error';


const Comments = ({ comments, deleteComment }) => {

  return <ol>{comments.map(({ text, author, date, time, id, error }) => {
    if (error) {
      return <Error error={error} />;
    }
    return <Comment
      text={text}
      author={author}
      date={date}
      time={time}
      key={id}
      id={id}
      deleteComment={deleteComment}
    />
  })}</ol>
}

export default Comments;

