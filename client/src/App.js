import React from "react";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
       <Navibar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
       
      </Routes>
    </div>
  );
 };
  export default App;