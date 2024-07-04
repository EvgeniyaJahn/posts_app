import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  //State
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  //Function
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  //
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Nazvanie"
      ></MyInput>
      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Opisanie"
      ></MyInput>
      <MyButton onClick={addNewPost}>Sozdat post</MyButton>
    </form>
  );
};
export default PostForm;
