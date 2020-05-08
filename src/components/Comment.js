import React from 'react';
import '../css/comment.css';


export default Comment = ({ text, author, date, time, id, deleteComment }) => {
  const clickHandler = (event) => {
    // let comments = JSON.parse(localStorage.comments);
    // let commentsAfterDelete = [];
    // comments.forEach(comment => {
    //   if (comment.id != event.target.id) {
    //     commentsAfterDelete.push(comment);
    //   }
    // });

    deleteComment(+event.target.id);
  }

  return (<li>
    {text}
    <p>Автор: {author}
      <br />
    Дата поста: {date}
    Время поста: {time}</p>
    <button
      onClick={clickHandler}
      id={id}>Удалить
    </button>
  </li>)
}


