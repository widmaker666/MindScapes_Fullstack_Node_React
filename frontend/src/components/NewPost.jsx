import React, { useState } from "react";
import axios from "axios";

function NewPost({ userId }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/post/", {
        message,
        author: userId,
      });
      setMessage("");
      console.log("post sent");
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
