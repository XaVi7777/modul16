import React from 'react';
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../redux/actions'

let App = (props) => {

  const { comments, addComment, deleteComment } = props;

  return (
    <div>
      <h2>Post</h2>
      <CommentForm addComment={addComment} />
      <h3>Комментарии:</h3>
      <Comments comments={comments} deleteComment={deleteComment} />
    </div>
  )
}

const mapStateToProps = state => {

  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (text, author) => dispatch(addComment(text, author)),
    deleteComment: (commentsAfterDelete) => dispatch(deleteComment(commentsAfterDelete))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
