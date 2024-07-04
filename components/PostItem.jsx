import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  //State
  //
  //Functions
  //
  return (
    <div>
      <div className="post">
        <div className="post__content">
          {props.number}
          {props.post.title}
        </div>
        <div>{props.post.body}</div>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
