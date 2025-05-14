import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("hello world");

  const handleClick = () => {
    setMessage("Hello from React!");
  };

  return (
    <div className="greeting" onClick={handleClick}>
      {message}
    </div>
  );
}

export default App;
