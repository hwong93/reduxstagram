import React from 'react';

const Comment = React.createClass({

  renderComment(comment, index){
    console.log(comment)
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },

  render: function(){
    return(
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref='commentForm' className='comment-form'>
          <input type='text' ref="author" placeholder="author"/>
          <input type='text' ref="comment" placeholder="comment"/>
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
})

export default Comment;
