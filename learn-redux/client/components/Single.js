import React from 'react';
import Photo from './Photo';
import Comments from './Comment';
// import comments


const Single = React.createClass({
  render: function(){
    // index ofthe post
    const postId= this.props.params.postId
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];


    // get ui post
    return(
      <div className="single-photo" >
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single;
