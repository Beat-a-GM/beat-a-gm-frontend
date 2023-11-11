import React from "react";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
    </div>
  );
 };
  export default App;