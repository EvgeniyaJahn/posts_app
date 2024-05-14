import React from "react";

const PostItem = (props) => {
  console.log(props, "PROPSY");
  //State
  //
  //Functions
  //
  return (
    <div>
      <div className="post">
        <div className="post__content">
          {props.post.id},{props.post.title}
        </div>
        <div>{props.post.body}</div>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};
export default PostItem;
