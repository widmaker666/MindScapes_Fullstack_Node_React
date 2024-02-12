import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";

function NewPost() {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      message,
      author: userId,
      _id: Date.now(),
    };
    try {
      axios.post("http://localhost:5000/post/", data).then(() => {
        dispatch(createPost(data));
        dispatch(getPosts());
      });
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-post-container">
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Quoi de neuf ?"
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default NewPost;
