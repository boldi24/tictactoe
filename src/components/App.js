import React from 'react';
import io from 'socket.io-client';
import Home from "./Home";

const App = () => {
  const socket = io();
  return(
  <div className="container-fluid">
    <Home/>
  </div>)
};

export default App;
