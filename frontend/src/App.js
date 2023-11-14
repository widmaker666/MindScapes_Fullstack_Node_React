import React, { useState } from "react";
import NewPost from "./components/NewPost";
import Thread from "./components/Thread";

function App() {
  const [userId, setUserId] = useState("");

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
        <NewPost userId={userId} />
        <Thread userId={userId} />       
      </div>
    </>
  );
}

export default App;
