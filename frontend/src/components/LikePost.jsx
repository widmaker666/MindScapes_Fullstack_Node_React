import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LikePost({ post }) {
  const [userLiked, setUserLiked] = useState(false);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    }
  }, [userId]);

  const handleLike = () => {
    axios.patch(`http://localhost:5000/post/like-post/${post._id}`, {
      userId,
    });
  };
  const handleDisLike = () => {
    axios.patch(`http://localhost:5000/post/dislike-post/${post._id}`, {
      userId,
    });
  };

  return (
    <>
      <div className="like-icon">
        <p>{post.likers ? post.likers.length : 0}</p>
        {userLiked && userLiked ? (
          <span id="like-btn" onClick={handleDisLike}>
            &#9829;
          </span>
        ) : (
          <span id="dislike-btn" onClick={handleLike}>
            &#9829;
          </span>
        )}
      </div>
    </>
  );
}

export default LikePost;
