import axios from "axios";
import React, { useEffect, useState } from "react";

function Thread({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/post/").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div className="thread-container">
        {data && data.map((post) => <li>{post.message}</li>)}
      </div>
    </>
  );
}

export default Thread;
