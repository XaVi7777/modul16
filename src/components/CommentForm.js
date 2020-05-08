import React from 'react';

const CommentForm = ({ addComment }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    addComment(event.target.text.value, event.target.author.value);
    event.target.author.value = '';
    event.target.text.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Новый комментарий"
        name="text"
        required
      />
      <input
        type="text"
        placeholder="Ваше имя"
        name="author"
        required
      />
      <button type="submit">Опубликовать</button>
    </form>
  )
}

export default CommentForm;


