import React, { useEffect, useState } from "react";
import NewPost from "./components/NewPost";
import Thread from "./components/Thread";
import { useDispatch } from "react-redux";
import { getUser } from "./feature/user.slice";

function App() {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId]);

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <>
      <div className="app-container">
        <div className="login">
          <h3>Bonjour</h3>
          <input
            type="text"
            id=""
            placeholder="Pseudo"
            onChange={handleChange}
          />
        </div>
        <NewPost />
        <Thread />
      </div>
    </>
  );
}

export default App;
