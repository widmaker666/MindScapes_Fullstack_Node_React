import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Thread({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/post/").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div className="thread-container">
        {data &&
          data
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((post) => <Post key={post._id} userId={userId} post={post} />)}
      </div>
    </>
  );
}

export default Thread;
