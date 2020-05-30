import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Frame, AnimatePresence } from "framer";
import { testButtonGet } from "./appActions";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Frame onClick={() => dispatch(testButtonGet())}></Frame>
    </div>
  );
};

export default App;
