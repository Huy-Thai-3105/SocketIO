import "./App.css";
import { useState } from "react";
import { useSocket } from "./customHooks/useSocket";
function App() {
  const { socketResponse, isConnected, sendData } = useSocket("a") ; 

  return (
    <div>
      <h1>{isConnected}</h1>
      <button onClick={sendData}>sned</button>
    </div>
  );
}

export default App;
